"use client";

import { useConversation } from "@/components/messages/ConversationContext";
import { getConversation } from "@/lib/data";
import ChatPanel from "@/components/messages/ChatPanel";

export default function MessagesPage() {
  const { activeId } = useConversation();
  const conversation = getConversation(activeId);

  if (!conversation) return null;

  return <ChatPanel conversation={conversation} />;
}
