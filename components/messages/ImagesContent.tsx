"use client";

import styles from "./messages.module.css";
import { Conversation } from "@/lib/types";
import { MoreIcon } from "./icons";
import { cn } from "@/lib/utils";

interface ImagesContentProps {
  conversation: Conversation;
}

export default function ImagesContent({ conversation }: ImagesContentProps) {
  if (!conversation.images || conversation.images.length === 0) {
    return (
      <div className={styles.tabContent}>
        <div className={styles.empty}>No images shared yet.</div>
      </div>
    );
  }

  return (
    <div className={styles.tabContent}>
      {conversation.images.map((group, gi) => (
        <div key={gi}>
          <div className={styles.dateHeader}>{group.date}</div>
          <div className={styles.imageGrid}>
            {group.items.map((img, i) => (
              <div
                key={i}
                className={cn(
                  styles.imageTile,
                  gi === 0 && i === 0 && styles.imageOverlayShow
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.url} alt={img.name} loading="lazy" />
                <div
                  className={cn(
                    styles.imageOverlay,
                    gi === 0 && i === 0 && styles.imageOverlayShow
                  )}
                >
                  <div className={styles.imageOverlayTop}>
                    <button className={styles.imageMoreBtn} aria-label="Options">
                      <MoreIcon />
                    </button>
                  </div>
                  <div className={styles.imageOverlayBottom}>
                    <span>{img.name}</span>
                    <span>{img.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
