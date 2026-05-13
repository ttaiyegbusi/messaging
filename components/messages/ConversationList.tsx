"use client";

import { useRouter, usePathname } from "next/navigation";
import styles from "./messages.module.css";
import { conversations } from "@/lib/data";
import { useConversation } from "./ConversationContext";
import { avatarClass, cn } from "@/lib/utils";

export default function ConversationList() {
  const router = useRouter();
  const pathname = usePathname();
  const { activeId, setActiveId } = useConversation();

  const handleSelect = (id: string) => {
    setActiveId(id);
    // If user clicks a conversation from any details subpage, go back to chat
    if (pathname?.includes("/details")) {
      router.push("/messages");
    }
  };

  return (
    <aside className={styles.convList}>
      {conversations.map((c) => (
        <button
          key={c.id}
          className={cn(
            styles.convItem,
            c.id === activeId && styles.convItemActive
          )}
          onClick={() => handleSelect(c.id)}
        >
          <div className={avatarClass(c.color)}>{c.avatar}</div>
          <div className={styles.convMeta}>
            <span className={styles.convName}>{c.name}</span>
            <span className={styles.convPreview}>{c.preview}</span>
          </div>
        </button>
      ))}
    </aside>
  );
}
