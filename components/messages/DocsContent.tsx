"use client";

import styles from "./messages.module.css";
import { Conversation } from "@/lib/types";
import { getFileIcon, DownloadIcon } from "./icons";
import { listIconClass } from "@/lib/utils";

interface DocsContentProps {
  conversation: Conversation;
}

export default function DocsContent({ conversation }: DocsContentProps) {
  if (!conversation.docs || conversation.docs.length === 0) {
    return (
      <div className={styles.tabContent}>
        <div className={styles.empty}>No documents shared yet.</div>
      </div>
    );
  }

  return (
    <div className={styles.tabContent}>
      {conversation.docs.map((group, gi) => (
        <div key={gi}>
          <div className={styles.dateHeader}>{group.date}</div>
          <div className={styles.listRows}>
            {group.items.map((doc, i) => {
              const Icon = getFileIcon(doc.type);
              return (
                <div className={styles.listRow} key={i}>
                  <div className={listIconClass(doc.type)}>
                    <Icon />
                  </div>
                  <div className={styles.listInfo}>
                    <div className={styles.listTitle}>{doc.title}</div>
                    <div className={styles.listSubtitle}>{doc.subtitle}</div>
                  </div>
                  <button className={styles.listAction} aria-label="Download">
                    <DownloadIcon />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
