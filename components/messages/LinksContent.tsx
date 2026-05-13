"use client";

import styles from "./messages.module.css";
import { Conversation } from "@/lib/types";
import { LinkIcon, ExternalIcon, PdfIcon } from "./icons";
import { listIconClass } from "@/lib/utils";

interface LinksContentProps {
  conversation: Conversation;
}

export default function LinksContent({ conversation }: LinksContentProps) {
  if (!conversation.links || conversation.links.length === 0) {
    return (
      <div className={styles.tabContent}>
        <div className={styles.empty}>No links shared yet.</div>
      </div>
    );
  }

  return (
    <div className={styles.tabContent}>
      {conversation.links.map((group, gi) => (
        <div key={gi}>
          <div className={styles.dateHeader}>{group.date}</div>
          <div className={styles.listRows}>
            {group.items.map((link, i) => (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.listRow}
                key={i}
              >
                <div className={listIconClass(link.type === "pdf" ? "pdf" : "")}>
                  {link.type === "pdf" ? <PdfIcon /> : <LinkIcon />}
                </div>
                <div className={styles.listInfo}>
                  <div className={styles.listTitle}>{link.title}</div>
                  <div className={styles.listSubtitle}>{link.url}</div>
                </div>
                <span className={styles.listAction} aria-label="Open link">
                  <ExternalIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
