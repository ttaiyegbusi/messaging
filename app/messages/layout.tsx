import { ReactNode } from "react";
import styles from "@/components/messages/messages.module.css";
import TopBar from "@/components/messages/TopBar";
import ConversationList from "@/components/messages/ConversationList";
import RightRail from "@/components/messages/RightRail";
import { ConversationProvider } from "@/components/messages/ConversationContext";

export default function MessagesLayout({ children }: { children: ReactNode }) {
  return (
    <ConversationProvider>
      <TopBar />
      <main className={styles.app}>
        <ConversationList />
        <section className={styles.centerPanel}>{children}</section>
        <RightRail />
      </main>
    </ConversationProvider>
  );
}
