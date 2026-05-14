"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import styles from "./messages.module.css";

const NAV_ITEMS = [
  { label: "Chats", path: "/messages" },
  { label: "Calls", path: "/calls" },
  { label: "People", path: "/people" },
  { label: "Stories", path: "/stories" },
  { label: "Settings", path: "/settings" },
];

const SOCIAL_LINKS = ["Instagram", "LinkedIn", "Facebook", "X (Twitter)"];

interface SideNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideNavMenu({ isOpen, onClose }: SideNavMenuProps) {
  const router = useRouter();
  const [rendered, setRendered] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRendered(true);
      setClosing(false);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setRendered(false);
      onClose();
    }, 300);
  }, [onClose]);

  const handleNavClick = (path: string) => {
    router.push(path);
    handleClose();
  };

  useEffect(() => {
    if (!rendered) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [rendered, handleClose]);

  if (!rendered) return null;

  const socialDelay = 80 + NAV_ITEMS.length * 60 + 60;

  return (
    <>
      <div
        className={`${styles.menuOverlay} ${closing ? styles.menuOverlayOut : ""}`}
        onClick={handleClose}
      />
      <nav
        className={`${styles.menuPanel} ${closing ? styles.menuPanelOut : ""}`}
        aria-label="Site navigation"
      >
        <div className={styles.menuHeader}>
          <span className={styles.menuLabel}>MENU</span>
          <button
            className={styles.menuClose}
            onClick={handleClose}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <ul className={styles.menuNav}>
          {NAV_ITEMS.map((item, i) => (
            <li
              key={item.label}
              className={`${styles.menuNavItem}`}
              style={{ animationDelay: `${80 + i * 60}ms` }}
            >
              <button
                className={styles.menuNavItemBtn}
                onClick={() => handleNavClick(item.path)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div
          className={styles.menuSocial}
          style={{ animationDelay: `${socialDelay}ms` }}
        >
          {SOCIAL_LINKS.map((link) => (
            <button key={link} className={styles.menuSocialLink}>
              {link}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
