export type AvatarColor =
  | "lavender"
  | "blue"
  | "pink"
  | "peach"
  | "gray"
  | "mint"
  | "yellow";

export type FileType = "pdf" | "doc" | "xls" | "zip" | "img" | "link";

export interface Message {
  sender: string;
  color: AvatarColor;
  initial: string;
  time: string;
  texts: string[];
}

export interface Mutual {
  name: string;
  role: string;
  initial: string;
  color: AvatarColor;
}

export interface ImageItem {
  url: string;
  name: string;
  size: string;
}

export interface ImageGroup {
  date: string;
  items: ImageItem[];
}

export interface DocItem {
  title: string;
  subtitle: string;
  type: FileType;
}

export interface DocGroup {
  date: string;
  items: DocItem[];
}

export interface LinkItem {
  title: string;
  url: string;
  type: FileType;
}

export interface LinkGroup {
  date: string;
  items: LinkItem[];
}

export interface Profile {
  name: string;
  role: string;
  lastActive: string;
}

export interface Conversation {
  id: string;
  name: string;
  subtitle?: string;
  avatar: string;
  color: AvatarColor;
  preview: string;
  isGroup?: boolean;
  profile: Profile;
  messages: Message[];
  mutuals: Mutual[];
  images: ImageGroup[];
  docs: DocGroup[];
  links: LinkGroup[];
}

export type DetailsTab = "User Info" | "Images" | "Docs" | "Links";
export type SubTab = "Mutuals" | "Groups";
