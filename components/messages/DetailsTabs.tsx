"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./messages.module.css";
import { Conversation } from "@/lib/types";
import { cn } from "@/lib/utils";

interface DetailsTabsProps {
  conversation: Conversation;
}

const TABS = [
  { label: "User Info", slug: "user-info" },
  { label: "Images", slug: "images" },
  { label: "Docs", slug: "docs" },
  { label: "Links", slug: "links" },
];

export default function DetailsTabs({ conversation }: DetailsTabsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const tabsRef = useRef<HTMLDivElement>(null);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });

  // Figure out which tab is active from the URL
  const activeSlug =
    TABS.find((t) => pathname?.endsWith(`/${t.slug}`))?.slug || "user-info";

  const counts: Record<string, number> = {
    images: conversation.images.reduce((s, g) => s + g.items.length, 0),
    docs: conversation.docs.reduce((s, g) => s + g.items.length, 0),
    links: conversation.links.reduce((s, g) => s + g.items.length, 0),
  };

  // Position the underline beneath the active tab's text only
  const positionUnderline = () => {
    if (!tabsRef.current) return;
    const activeBtn = tabsRef.current.querySelector(
      `[data-slug="${activeSlug}"]`
    ) as HTMLElement | null;
    if (!activeBtn) return;
    const parentRect = tabsRef.current.getBoundingClientRect();
    const rect = activeBtn.getBoundingClientRect();

    // Measure just the text part (first child text node)
    let textWidth = rect.width;
    const textNode = activeBtn.firstChild;
    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      const range = document.createRange();
      range.selectNodeContents(textNode);
      textWidth = range.getBoundingClientRect().width;
    }
    setUnderline({
      left: rect.left - parentRect.left,
      width: textWidth,
    });
  };

  useEffect(() => {
    // Run after layout, with a small delay so fonts are ready
    const t = setTimeout(positionUnderline, 30);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlug, pathname]);

  useEffect(() => {
    const onResize = () => positionUnderline();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.tabs} ref={tabsRef}>
      {TABS.map((tab) => (
        <button
          key={tab.slug}
          data-slug={tab.slug}
          className={cn(styles.tab, activeSlug === tab.slug && styles.tabActive)}
          onClick={() => router.push(`/messages/details/${tab.slug}`)}
        >
          {tab.label}
          {tab.slug !== "user-info" && (
            <span className={styles.tabCount}>{`{${counts[tab.slug]}}`}</span>
          )}
        </button>
      ))}
      <div
        className={styles.tabUnderline}
        style={{ left: `${underline.left}px`, width: `${underline.width}px` }}
      />
    </div>
  );
}
