"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./messages.module.css";
import { Conversation, SubTab } from "@/lib/types";
import { avatarClass, cn } from "@/lib/utils";
import { FlagIcon, BlockIcon, MessageIcon } from "./icons";

interface UserInfoContentProps {
  conversation: Conversation;
}

export default function UserInfoContent({ conversation }: UserInfoContentProps) {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("Mutuals");
  const subTabsRef = useRef<HTMLDivElement>(null);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });

  const positionUnderline = () => {
    if (!subTabsRef.current) return;
    const activeBtn = subTabsRef.current.querySelector(
      `[data-subtab="${activeSubTab}"]`
    ) as HTMLElement | null;
    if (!activeBtn) return;
    const parentRect = subTabsRef.current.getBoundingClientRect();
    const rect = activeBtn.getBoundingClientRect();
    setUnderline({
      left: rect.left - parentRect.left,
      width: rect.width,
    });
  };

  useEffect(() => {
    const t = setTimeout(positionUnderline, 30);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSubTab]);

  useEffect(() => {
    const onResize = () => positionUnderline();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const list =
    activeSubTab === "Mutuals"
      ? conversation.mutuals
      : conversation.mutuals.slice(0, 3);

  return (
    <div className={styles.tabContent}>
      <div className={styles.profileCard}>
        <div className={cn(avatarClass(conversation.color), styles.profileAvatar)}>
          {conversation.profile.name.charAt(0)}
        </div>
        <div className={styles.profileName}>{conversation.profile.name}</div>
        <div className={styles.profileRole}>{conversation.profile.role}</div>
        <div className={styles.profileActive}>
          {conversation.profile.lastActive}
        </div>
        <div className={styles.profileActions}>
          <button className={styles.profileBtn}>
            <span>Report User</span>
            <FlagIcon />
          </button>
          <button className={styles.profileBtn}>
            <span>Block User</span>
            <BlockIcon />
          </button>
        </div>
      </div>

      <div className={styles.subTabs} ref={subTabsRef}>
        <button
          data-subtab="Mutuals"
          className={cn(
            styles.subTab,
            activeSubTab === "Mutuals" && styles.subTabActive
          )}
          onClick={() => setActiveSubTab("Mutuals")}
        >
          Mutuals
        </button>
        <button
          data-subtab="Groups"
          className={cn(
            styles.subTab,
            activeSubTab === "Groups" && styles.subTabActive
          )}
          onClick={() => setActiveSubTab("Groups")}
        >
          Groups
        </button>
        <div
          className={styles.subTabUnderline}
          style={{ left: `${underline.left}px`, width: `${underline.width}px` }}
        />
      </div>

      <div className={styles.mutualsList}>
        {list.map((m, i) => (
          <div className={styles.mutualRow} key={i}>
            <div className={avatarClass(m.color)}>{m.initial}</div>
            <div className={styles.mutualInfo}>
              <div className={styles.mutualName}>{m.name}</div>
              <div className={styles.mutualRole}>{m.role}</div>
            </div>
            <button className={styles.mutualAction} aria-label="Message">
              <MessageIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
