import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface DomainDraft {
    content: string;
    lastSaved: Time;
}
export interface AppointmentRequest {
    id: Time;
    name: string;
    preferredDateTime: string;
    notes?: string;
    departmentService: string;
    timestamp: Time;
    contactDetails: string;
}
export type Time = bigint;
export interface Contact {
    id: Time;
    contactInfo: string;
    subject: string;
    name: string;
    message: string;
    timestamp: Time;
}
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllAppointments(): Promise<Array<AppointmentRequest>>;
    getAllContacts(): Promise<Array<Contact>>;
    getAppointmentById(id: Time): Promise<AppointmentRequest>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getContactById(id: Time): Promise<Contact>;
    getDomainDraft(): Promise<DomainDraft | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    saveDomainDraft(content: string): Promise<void>;
    submitAppointmentRequest(name: string, contactDetails: string, preferredDateTime: string, departmentService: string, notes: string | null): Promise<void>;
    submitContact(name: string, contactInfo: string, subject: string, message: string): Promise<void>;
    toggleDecommissionMode(): Promise<void>;
}
