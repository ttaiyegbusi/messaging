"use client";

import { useRouter, usePathname } from "next/navigation";
import styles from "./messages.module.css";
import { Conversation } from "@/lib/types";
import { avatarClass } from "@/lib/utils";
import { PlusIcon, MicIcon, SendIcon, PaperclipIcon } from "./icons";
import { useState } from "react";
import AttachmentMenu from "./AttachmentMenu";

interface ChatPanelProps {
  conversation: Conversation;
}

export default function ChatPanel({ conversation }: ChatPanelProps) {
  const [draft, setDraft] = useState("");
  const [attachmentMenuOpen, setAttachmentMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const inDetails = pathname?.includes("/details");

  return (
    <>
      <header className={styles.panelHeader}>
        <div className={styles.panelTitle}>Chats</div>
        {!inDetails && (
          <button
            className={styles.detailsHeaderBtn}
            onClick={() => router.push("/messages/details/user-info")}
          >
            <span>DETAILS</span>
            <PaperclipIcon />
          </button>
        )}
      </header>

      <div className={styles.chatBody}>
        {conversation.messages.map((m, i) => (
          <div className={styles.msgGroup} key={i}>
            <div className={avatarClass(m.color)}>{m.initial}</div>
            <div className={styles.msgContent}>
              <div className={styles.msgSender}>{m.sender}</div>
              {m.texts.map((t, j) => (
                <div className={styles.msgText} key={j}>
                  {t}
                </div>
              ))}
              <div className={styles.msgTime}>{m.time}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.composerWrap}>
        <div className={styles.composer} style={{ position: "relative" }}>
          <textarea
            className={styles.composerInput}
            rows={1}
            placeholder="Send a message..."
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          />
          <div className={styles.composerActions}>
            <button
              className={styles.iconBtn}
              aria-label="Add attachment"
              onClick={() => setAttachmentMenuOpen(!attachmentMenuOpen)}
            >
              <PlusIcon />
              <AttachmentMenu
                isOpen={attachmentMenuOpen}
                onClose={() => setAttachmentMenuOpen(false)}
              />
            </button>
            <div className={styles.composerActionsRight}>
              <button className={styles.iconBtn} aria-label="Record voice">
                <MicIcon />
              </button>
              <button
                className={`${styles.iconBtn} ${styles.sendBtn}`}
                aria-label="Send"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
