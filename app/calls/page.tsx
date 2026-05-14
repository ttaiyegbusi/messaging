"use client";

import styles from "@/components/messages/messages.module.css";

export default function CallsPage() {
  return (
    <>
      <header className={styles.panelHeader}>
        <div className={styles.panelTitle}>Calls</div>
      </header>

      <div className={styles.chatBody}>
        <div style={{ padding: "24px", textAlign: "center", color: "#9ca3af" }}>
          <p style={{ fontSize: "16px", marginBottom: "12px" }}>📞 Calls</p>
          <p style={{ fontSize: "14px" }}>Your call history will appear here</p>
        </div>
      </div>
    </>
  );
}
