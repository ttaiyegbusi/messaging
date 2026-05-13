"use client";

import { useRouter, usePathname } from "next/navigation";
import styles from "./messages.module.css";
import { PaperclipIcon } from "./icons";

export default function RightRail() {
  const router = useRouter();
  const pathname = usePathname();

  // Hide pill if we're already in details
  const inDetails = pathname?.includes("/details");

  return (
    <aside className={styles.rightRail}>
      {!inDetails && (
        <button
          className={styles.detailsPill}
          onClick={() => router.push("/messages/details/user-info")}
        >
          <span>DETAILS</span>
          <PaperclipIcon />
        </button>
      )}
    </aside>
  );
}
