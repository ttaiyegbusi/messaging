"use client";

import { useRouter } from "next/navigation";
import styles from "./messages.module.css";
import { BackIcon } from "./icons";

export default function TopBar() {
  const router = useRouter();

  return (
    <header className={styles.topbar}>
      <button
        className={styles.topbarLeft}
        onClick={() => router.push("/")}
        aria-label="Back to dashboard"
      >
        <BackIcon />
        <span>Dashboard</span>
      </button>
      <div className={styles.topbarCenter}>Messages</div>
      <button className={styles.topbarRight}>[ MENU ]</button>
    </header>
  );
}
