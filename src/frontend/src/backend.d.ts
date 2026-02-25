import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type PhoneNumber = string;
export type Timestamp = bigint;
export interface ContactSubmission {
    id: SubmissionId;
    fullName: FullName;
    email: Email;
    serviceInterest: ServiceInterest;
    message: Message;
    timestamp: Timestamp;
    phoneNumber: PhoneNumber;
}
export type FullName = string;
export type Message = string;
export type ServiceInterest = string;
export type Email = string;
export type SubmissionId = bigint;
export interface backendInterface {
    deleteSubmission(id: SubmissionId): Promise<void>;
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    getSubmissionById(id: SubmissionId): Promise<ContactSubmission>;
    submitContactForm(fullName: FullName, email: Email, phoneNumber: PhoneNumber, serviceInterest: ServiceInterest, message: Message): Promise<SubmissionId>;
}
