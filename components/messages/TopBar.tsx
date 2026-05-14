"use client";

import { useRouter } from "next/navigation";
import styles from "./messages.module.css";
import { BackIcon } from "./icons";

interface TopBarProps {
  onMenuOpen: () => void;
}

export default function TopBar({ onMenuOpen }: TopBarProps) {
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
      <button className={styles.topbarRight} onClick={onMenuOpen}>
        MENU
      </button>
    </header>
  );
}
