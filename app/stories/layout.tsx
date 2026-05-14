import { ReactNode } from "react";
import MessagesShell from "@/components/messages/MessagesShell";

export default function StoriesLayout({ children }: { children: ReactNode }) {
  return <MessagesShell>{children}</MessagesShell>;
}
