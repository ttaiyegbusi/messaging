"use client";

import { useConversation } from "@/components/messages/ConversationContext";
import { getConversation } from "@/lib/data";
import ImagesContent from "@/components/messages/ImagesContent";

export default function ImagesPage() {
  const { activeId } = useConversation();
  const conversation = getConversation(activeId);

  if (!conversation) return null;

  return <ImagesContent conversation={conversation} />;
}
