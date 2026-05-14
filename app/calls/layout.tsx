import { ReactNode } from "react";
import { ConversationProvider } from "@/components/messages/ConversationContext";
import MessagesShell from "@/components/messages/MessagesShell";

export default function CallsLayout({ children }: { children: ReactNode }) {
  return (
    <ConversationProvider>
      <MessagesShell>{children}</MessagesShell>
    </ConversationProvider>
  );
}
