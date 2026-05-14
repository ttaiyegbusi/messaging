"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./messages.module.css";

interface AttachmentMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AttachmentMenu({
  isOpen,
  onClose,
}: AttachmentMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleUploadPhoto = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        console.log("Upload photo:", file.name);
      }
    };
    input.click();
    onClose();
  };

  const handleUploadFile = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        console.log("Upload file:", file.name);
      }
    };
    input.click();
    onClose();
  };

  const handleOpenRecent = () => {
    console.log("Open recent files");
    onClose();
  };

  const handleWebSearch = () => {
    console.log("Web search");
    onClose();
  };

  const handleAddLink = () => {
    console.log("Add link");
    onClose();
  };

  return (
    <div ref={menuRef} className={styles.attachmentMenu}>
      <button className={styles.attachmentMenuItem} onClick={handleUploadPhoto}>
        <span className={styles.attachmentMenuIcon}>📷</span>
        <span>Upload Photo</span>
      </button>
      <button className={styles.attachmentMenuItem} onClick={handleUploadFile}>
        <span className={styles.attachmentMenuIcon}>📄</span>
        <span>Upload File</span>
      </button>
      <button className={styles.attachmentMenuItem} onClick={handleOpenRecent}>
        <span className={styles.attachmentMenuIcon}>⏱️</span>
        <span>Recent Files</span>
      </button>
      <button className={styles.attachmentMenuItem} onClick={handleWebSearch}>
        <span className={styles.attachmentMenuIcon}>🔍</span>
        <span>Web Search</span>
      </button>
      <button className={styles.attachmentMenuItem} onClick={handleAddLink}>
        <span className={styles.attachmentMenuIcon}>🔗</span>
        <span>Add Link</span>
      </button>
    </div>
  );
}
