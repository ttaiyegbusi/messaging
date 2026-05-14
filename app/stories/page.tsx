"use client";

import styles from "@/components/messages/messages.module.css";

export default function StoriesPage() {
  return (
    <>
      <header className={styles.panelHeader}>
        <div className={styles.panelTitle}>Stories</div>
      </header>

      <div className={styles.chatBody}>
        <div style={{ padding: "24px", textAlign: "center", color: "#9ca3af" }}>
          <p style={{ fontSize: "16px", marginBottom: "12px" }}>📖 Stories</p>
          <p style={{ fontSize: "14px" }}>
            Stories from your contacts will appear here
          </p>
        </div>
      </div>
    </>
  );
}
