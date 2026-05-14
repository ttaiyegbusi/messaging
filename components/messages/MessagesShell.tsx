"use client";

import { useState } from "react";
import { ReactNode } from "react";
import styles from "./messages.module.css";
import TopBar from "./TopBar";
import ConversationList from "./ConversationList";
import RightRail from "./RightRail";
import SideNavMenu from "./SideNavMenu";

export default function MessagesShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <TopBar onMenuOpen={() => setMenuOpen(true)} />
      <main className={styles.app}>
        <ConversationList />
        <section className={styles.centerPanel}>{children}</section>
        <RightRail />
      </main>
      <SideNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
