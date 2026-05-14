"use client";

import styles from "@/components/messages/messages.module.css";

export default function SettingsPage() {
  return (
    <>
      <header className={styles.panelHeader}>
        <div className={styles.panelTitle}>Settings</div>
      </header>

      <div className={styles.chatBody}>
        <div style={{ padding: "28px" }}>
          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Account
            </h3>
            <div
              style={{
                fontSize: "13px",
                color: "#6b7280",
                marginBottom: "8px",
              }}
            >
              Email & Password
            </div>
            <div style={{ fontSize: "13px", color: "#6b7280" }}>
              Profile Information
            </div>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Privacy
            </h3>
            <div
              style={{
                fontSize: "13px",
                color: "#6b7280",
                marginBottom: "8px",
              }}
            >
              Visibility Settings
            </div>
            <div style={{ fontSize: "13px", color: "#6b7280" }}>
              Block & Report
            </div>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Notifications
            </h3>
            <div
              style={{
                fontSize: "13px",
                color: "#6b7280",
                marginBottom: "8px",
              }}
            >
              Message Alerts
            </div>
            <div style={{ fontSize: "13px", color: "#6b7280" }}>
              Sounds & Vibration
            </div>
          </div>

          <div>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Appearance
            </h3>
            <div
              style={{
                fontSize: "13px",
                color: "#6b7280",
                marginBottom: "8px",
              }}
            >
              Dark Mode
            </div>
            <div style={{ fontSize: "13px", color: "#6b7280" }}>Theme</div>
          </div>
        </div>
      </div>
    </>
  );
}
