"use client";

import { useConversation } from "@/components/messages/ConversationContext";
import { getConversation } from "@/lib/data";
import UserInfoContent from "@/components/messages/UserInfoContent";

export default function UserInfoPage() {
  const { activeId } = useConversation();
  const conversation = getConversation(activeId);

  if (!conversation) return null;

  return <UserInfoContent conversation={conversation} />;
}
