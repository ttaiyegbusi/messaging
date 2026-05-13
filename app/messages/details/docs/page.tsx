"use client";

import { useConversation } from "@/components/messages/ConversationContext";
import { getConversation } from "@/lib/data";
import DocsContent from "@/components/messages/DocsContent";

export default function DocsPage() {
  const { activeId } = useConversation();
  const conversation = getConversation(activeId);

  if (!conversation) return null;

  return <DocsContent conversation={conversation} />;
}
