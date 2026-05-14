import { ReactNode } from "react";
import { ConversationProvider } from "@/components/messages/ConversationContext";
import MessagesShell from "@/components/messages/MessagesShell";

export default function PeopleLayout({ children }: { children: ReactNode }) {
  return (
    <ConversationProvider>
      <MessagesShell>{children}</MessagesShell>
    </ConversationProvider>
  );
}
