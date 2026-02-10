import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import AccessControl "authorization/access-control";
import Iter "mo:core/Iter";


import MixinAuthorization "authorization/MixinAuthorization";

// Migrate actor in place as everything is persistent and no value has to be changed.
// Mindmigration in future updates.


actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type Contact = {
    name : Text;
    contactInfo : Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
    id : Time.Time;
  };

  type AppointmentRequest = {
    name : Text;
    contactDetails : Text;
    preferredDateTime : Text;
    departmentService : Text;
    notes : ?Text;
    timestamp : Time.Time;
    id : Time.Time;
  };

  public type UserProfile = {
    name : Text;
  };

  module Contact {
    public func create(name : Text, contactInfo : Text, subject : Text, message : Text, timestamp : Time.Time, id : Time.Time) : Contact {
      {
        name;
        contactInfo;
        subject;
        message;
        timestamp;
        id;
      };
    };
  };

  module AppointmentRequest {
    public func create(name : Text, contactDetails : Text, preferredDateTime : Text, departmentService : Text, notes : ?Text, timestamp : Time.Time, id : Time.Time) : AppointmentRequest {
      {
        name;
        contactDetails;
        preferredDateTime;
        departmentService;
        notes;
        timestamp;
        id;
      };
    };
  };

  public type DomainDraft = {
    content : Text;
    lastSaved : Time.Time;
  };

  let contacts = Map.empty<Time.Time, Contact>();
  let appointmentRequests = Map.empty<Time.Time, AppointmentRequest>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  var domainDraft : ?DomainDraft = null;

  var isDecommissioned = false;

  public shared ({ caller }) func toggleDecommissionMode() : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can toggle decommission mode");
    };
    isDecommissioned := not isDecommissioned;
  };

  func checkNotDecommissioned() : () {
    if (isDecommissioned) {
      Runtime.trap("Service is currently being decommissioned");
    };
  };

  // Contact and appointment submissions - publicly accessible to guests
  public shared ({ caller }) func submitContact(name : Text, contactInfo : Text, subject : Text, message : Text) : async () {
    checkNotDecommissioned();
    let id = Time.now();
    let contact = Contact.create(name, contactInfo, subject, message, Time.now(), id);
    contacts.add(id, contact);
  };

  public shared ({ caller }) func submitAppointmentRequest(name : Text, contactDetails : Text, preferredDateTime : Text, departmentService : Text, notes : ?Text) : async () {
    checkNotDecommissioned();
    let id = Time.now();
    let appointmentRequest = AppointmentRequest.create(
      name,
      contactDetails,
      preferredDateTime,
      departmentService,
      notes,
      Time.now(),
      id,
    );
    appointmentRequests.add(id, appointmentRequest);
  };

  // Domain draft operations - admin only
  public shared ({ caller }) func saveDomainDraft(content : Text) : async () {
    checkNotDecommissioned();
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can save domain drafts");
    };
    let draft = {
      content;
      lastSaved = Time.now();
    };
    domainDraft := ?draft;
  };

  public shared ({ caller }) func getDomainDraft() : async ?DomainDraft {
    checkNotDecommissioned();
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access domain drafts");
    };
    domainDraft;
  };

  // Contact and appointment retrieval - admin only
  public shared ({ caller }) func getContactById(id : Time.Time) : async Contact {
    checkNotDecommissioned();
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view contacts");
    };
    switch (contacts.get(id)) {
      case (null) { Runtime.trap("Contact not found") };
      case (?contact) { contact };
    };
  };

  public shared ({ caller }) func getAppointmentById(id : Time.Time) : async AppointmentRequest {
    checkNotDecommissioned();
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view appointments");
    };
    switch (appointmentRequests.get(id)) {
      case (null) { Runtime.trap("Appointment not found") };
      case (?appointment) { appointment };
    };
  };

  public shared ({ caller }) func getAllContacts() : async [Contact] {
    checkNotDecommissioned();
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all contacts");
    };
    contacts.values().toArray();
  };

  public shared ({ caller }) func getAllAppointments() : async [AppointmentRequest] {
    checkNotDecommissioned();
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all appointments");
    };
    appointmentRequests.values().toArray();
  };

  // User profile management - user access with ownership verification
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    checkNotDecommissioned();
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };
};
