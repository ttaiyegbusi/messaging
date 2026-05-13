"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { defaultConversationId } from "@/lib/data";

interface ConversationContextValue {
  activeId: string;
  setActiveId: (id: string) => void;
}

const ConversationContext = createContext<ConversationContextValue | null>(null);

const STORAGE_KEY = "active-conversation-id";

export function ConversationProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveIdState] = useState<string>(defaultConversationId);

  // Hydrate from sessionStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) setActiveIdState(stored);
    }
  }, []);

  const setActiveId = (id: string) => {
    setActiveIdState(id);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, id);
    }
  };

  return (
    <ConversationContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversation() {
  const ctx = useContext(ConversationContext);
  if (!ctx) {
    throw new Error("useConversation must be used within ConversationProvider");
  }
  return ctx;
}
