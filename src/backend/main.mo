import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Array "mo:core/Array";

actor {
  type SubmissionId = Nat;
  type FullName = Text;
  type Email = Text;
  type PhoneNumber = Text;
  type ServiceInterest = Text;
  type Message = Text;
  type Timestamp = Int;

  type ContactSubmission = {
    id : SubmissionId;
    fullName : FullName;
    email : Email;
    phoneNumber : PhoneNumber;
    serviceInterest : ServiceInterest;
    message : Message;
    timestamp : Timestamp;
  };

  module ContactSubmission {
    public func compare(cs1 : ContactSubmission, cs2 : ContactSubmission) : Order.Order {
      Int.compare(cs1.timestamp, cs2.timestamp);
    };
  };

  let submissions = Map.empty<SubmissionId, ContactSubmission>();
  var nextId = 0;

  public shared ({ caller }) func submitContactForm(fullName : FullName, email : Email, phoneNumber : PhoneNumber, serviceInterest : ServiceInterest, message : Message) : async SubmissionId {
    let timestamp = Time.now();
    let id = nextId;

    let submission : ContactSubmission = {
      id;
      fullName;
      email;
      phoneNumber;
      serviceInterest;
      message;
      timestamp;
    };

    submissions.add(id, submission);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.values().toArray().sort();
  };

  public query ({ caller }) func getSubmissionById(id : SubmissionId) : async ContactSubmission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) { submission };
    };
  };

  public shared ({ caller }) func deleteSubmission(id : SubmissionId) : async () {
    if (not submissions.containsKey(id)) {
      Runtime.trap("Submission not found");
    };
    submissions.remove(id);
  };
};
