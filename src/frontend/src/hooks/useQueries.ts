import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";
import type { ContactSubmission, FullName, Email, PhoneNumber, ServiceInterest, Message } from "../backend.d";

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      fullName: FullName;
      email: Email;
      phoneNumber: PhoneNumber;
      serviceInterest: ServiceInterest;
      message: Message;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitContactForm(
        data.fullName,
        data.email,
        data.phoneNumber,
        data.serviceInterest,
        data.message
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactSubmissions"] });
    },
  });
}

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();
  
  return useQuery<ContactSubmission[]>({
    queryKey: ["contactSubmissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
