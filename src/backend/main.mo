import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  // Initialize the access control system
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

  // User profile management
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
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Public submissions - accessible to everyone including guests
  public shared ({ caller }) func submitContact(name : Text, contactInfo : Text, subject : Text, message : Text) : async () {
    let id = Time.now();
    let contact = Contact.create(name, contactInfo, subject, message, Time.now(), id);
    contacts.add(id, contact);
  };

  public shared ({ caller }) func submitAppointmentRequest(name : Text, contactDetails : Text, preferredDateTime : Text, departmentService : Text, notes : ?Text) : async () {
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

  // Domain draft operations - admin only (sensitive configuration)
  public shared ({ caller }) func saveDomainDraft(content : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can save domain drafts");
    };
    let draft = {
      content;
      lastSaved = Time.now();
    };
    domainDraft := ?draft;
  };

  public query ({ caller }) func getDomainDraft() : async ?DomainDraft {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access domain drafts");
    };
    domainDraft;
  };

  // Contact and appointment retrieval - admin only (private user data)
  public query ({ caller }) func getContactById(id : Time.Time) : async Contact {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view contacts");
    };
    switch (contacts.get(id)) {
      case (null) { Runtime.trap("Contact not found") };
      case (?contact) { contact };
    };
  };

  public query ({ caller }) func getAppointmentById(id : Time.Time) : async AppointmentRequest {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view appointments");
    };
    switch (appointmentRequests.get(id)) {
      case (null) { Runtime.trap("Appointment not found") };
      case (?appointment) { appointment };
    };
  };

  public query ({ caller }) func getAllContacts() : async [Contact] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all contacts");
    };
    contacts.values().toArray();
  };

  public query ({ caller }) func getAllAppointments() : async [AppointmentRequest] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all appointments");
    };
    appointmentRequests.values().toArray();
  };
};
