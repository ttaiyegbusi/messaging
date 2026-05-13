"use client";

import { useConversation } from "@/components/messages/ConversationContext";
import { getConversation } from "@/lib/data";
import LinksContent from "@/components/messages/LinksContent";

export default function LinksPage() {
  const { activeId } = useConversation();
  const conversation = getConversation(activeId);

  if (!conversation) return null;

  return <LinksContent conversation={conversation} />;
}
