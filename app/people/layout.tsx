import { ReactNode } from "react";
import MessagesShell from "@/components/messages/MessagesShell";

export default function PeopleLayout({ children }: { children: ReactNode }) {
  return <MessagesShell>{children}</MessagesShell>;
}
