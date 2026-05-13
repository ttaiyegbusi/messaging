"use client";

import { ReactNode } from "react";
import DetailsHeader from "@/components/messages/DetailsHeader";
import DetailsTabs from "@/components/messages/DetailsTabs";
import { useConversation } from "@/components/messages/ConversationContext";
import { getConversation } from "@/lib/data";

export default function DetailsLayout({ children }: { children: ReactNode }) {
  const { activeId } = useConversation();
  const conversation = getConversation(activeId);

  if (!conversation) return null;

  return (
    <>
      <DetailsHeader />
      <DetailsTabs conversation={conversation} />
      {children}
    </>
  );
}
