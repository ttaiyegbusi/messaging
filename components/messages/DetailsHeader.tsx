"use client";

import { useRouter } from "next/navigation";
import styles from "./messages.module.css";
import { BackIcon } from "./icons";

export default function DetailsHeader() {
  const router = useRouter();

  return (
    <button
      className={styles.detailsHeader}
      onClick={() => router.push("/messages")}
    >
      <BackIcon />
      <span>Details</span>
    </button>
  );
}
