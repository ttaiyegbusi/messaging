import styles from "@/components/messages/messages.module.css";
import { AvatarColor } from "./types";

export function avatarClass(color: AvatarColor): string {
  const map: Record<AvatarColor, string> = {
    lavender: styles.avatarLavender,
    blue: styles.avatarBlue,
    pink: styles.avatarPink,
    peach: styles.avatarPeach,
    gray: styles.avatarGray,
    mint: styles.avatarMint,
    yellow: styles.avatarYellow,
  };
  return `${styles.avatar} ${map[color] || styles.avatarGray}`;
}

export function listIconClass(type: string): string {
  const map: Record<string, string> = {
    pdf: styles.listIconPdf,
    doc: styles.listIconDoc,
    xls: styles.listIconXls,
    zip: styles.listIconZip,
    img: styles.listIconImg,
  };
  return `${styles.listIcon} ${map[type] || ""}`;
}

export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
