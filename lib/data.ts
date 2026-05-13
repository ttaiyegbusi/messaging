import { Conversation } from "./types";

export const conversations: Conversation[] = [
  {
    id: "warehouse",
    name: "Warehouse Team",
    subtitle: "4 Members",
    avatar: "N",
    color: "lavender",
    preview: "4 Members",
    isGroup: true,
    profile: {
      name: "Warehouse Team",
      role: "Group · 4 Members",
      lastActive: "Active now",
    },
    messages: [
      {
        sender: "Anthony Riera",
        color: "blue",
        initial: "A",
        time: "04:50PM",
        texts: [
          "Good morning, John. It's nice to see you again. How have you been?",
        ],
      },
      {
        sender: "Justin Levin",
        color: "lavender",
        initial: "J",
        time: "04:50PM",
        texts: [
          "Morning! I've been pretty good — finally finished moving into the new place last weekend. Still surrounded by boxes though.",
        ],
      },
      {
        sender: "Nathaniel Jane",
        color: "pink",
        initial: "N",
        time: "04:52PM",
        texts: [
          "Oh nice, congrats on the move! How's the new neighborhood treating you?",
          "We should plan a housewarming whenever you're ready. I'll bring snacks.",
        ],
      },
      {
        sender: "Justin Bieber",
        color: "gray",
        initial: "J",
        time: "04:55PM",
        texts: [
          "Sounds good. Saturday next week works for me — count me in.",
        ],
      },
    ],
    mutuals: [
      { name: "John Doe", role: "Designer", initial: "J", color: "lavender" },
      { name: "Emily Davis", role: "Engineer", initial: "E", color: "blue" },
      { name: "Robert Johnson", role: "Photographer", initial: "R", color: "peach" },
      { name: "Laura Chen", role: "Writer", initial: "L", color: "blue" },
      { name: "Alice Smith", role: "Teacher", initial: "A", color: "lavender" },
      { name: "Jude Wales", role: "Architect", initial: "J", color: "gray" },
      { name: "Michael Reyes", role: "Product Manager", initial: "M", color: "pink" },
    ],
    images: [
      {
        date: "26 AUG, 2025",
        items: [
          { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop", name: "IMG_001.jpeg", size: "1.2MB" },
          { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop", name: "IMG_002.jpeg", size: "2.1MB" },
          { url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=400&fit=crop", name: "IMG_003.jpeg", size: "1.8MB" },
        ],
      },
      {
        date: "25 AUG, 2025",
        items: [
          { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop", name: "IMG_004.jpeg", size: "2.3MB" },
          { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop", name: "IMG_005.jpeg", size: "1.9MB" },
          { url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=400&fit=crop", name: "IMG_006.jpeg", size: "2.5MB" },
          { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop", name: "IMG_007.jpeg", size: "1.7MB" },
          { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop", name: "IMG_008.jpeg", size: "2.0MB" },
          { url: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?w=400&h=400&fit=crop", name: "IMG_009.jpeg", size: "1.6MB" },
        ],
      },
    ],
    docs: [
      {
        date: "26 AUG, 2025",
        items: [
          { title: "Housewarming Plan.docx", subtitle: "240 KB · Shared by Nathaniel", type: "doc" },
          { title: "Snack List.pdf", subtitle: "82 KB · Shared by Anthony", type: "pdf" },
        ],
      },
      {
        date: "22 AUG, 2025",
        items: [
          { title: "Move-in Checklist.pdf", subtitle: "1.1 MB · Shared by Justin", type: "pdf" },
          { title: "Apartment Photos.zip", subtitle: "12.4 MB · Shared by Justin", type: "zip" },
          { title: "Budget Tracker.xlsx", subtitle: "98 KB · Shared by Justin", type: "xls" },
        ],
      },
    ],
    links: [
      {
        date: "26 AUG, 2025",
        items: [
          { title: "Spotify Playlist", url: "https://open.spotify.com", type: "link" },
          { title: "Airbnb", url: "https://www.airbnb.com", type: "link" },
          { title: "NYTimes Cooking", url: "https://cooking.nytimes.com", type: "link" },
          { title: "The Verge", url: "https://www.theverge.com", type: "link" },
          { title: "YouTube", url: "https://www.youtube.com", type: "link" },
          { title: "Pinterest", url: "https://www.pinterest.com", type: "link" },
          { title: "Reddit", url: "https://www.reddit.com", type: "link" },
          { title: "Google Maps", url: "https://maps.google.com", type: "link" },
          { title: "Trip Itinerary.pdf", url: "https://drive.google.com", type: "pdf" },
        ],
      },
    ],
  },
  {
    id: "john",
    name: "John Doe",
    avatar: "P",
    color: "lavender",
    preview: "Looking forward...",
    profile: {
      name: "John Doe",
      role: "Designer",
      lastActive: "Last Active: Today 3:42PM",
    },
    messages: [
      {
        sender: "John Doe",
        color: "lavender",
        initial: "J",
        time: "02:14PM",
        texts: ["Hey! Are we still on for coffee tomorrow morning?"],
      },
      {
        sender: "You",
        color: "blue",
        initial: "Y",
        time: "02:16PM",
        texts: ["Absolutely. 9am at Blue Bottle, right?"],
      },
      {
        sender: "John Doe",
        color: "lavender",
        initial: "J",
        time: "02:17PM",
        texts: [
          "Perfect. I'll grab us a spot by the window.",
          "Looking forward to it — been a minute since we caught up properly.",
        ],
      },
    ],
    mutuals: [
      { name: "Emily Davis", role: "Engineer", initial: "E", color: "blue" },
      { name: "Sarah Johnson", role: "Marketing", initial: "S", color: "gray" },
      { name: "David Lee", role: "Photographer", initial: "D", color: "blue" },
      { name: "Carlos Mendoza", role: "Chef", initial: "C", color: "lavender" },
    ],
    images: [
      {
        date: "24 AUG, 2025",
        items: [
          { url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop", name: "coffee_shop.jpeg", size: "1.4MB" },
          { url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop", name: "latte.jpeg", size: "980KB" },
          { url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=400&fit=crop", name: "menu.jpeg", size: "1.1MB" },
        ],
      },
    ],
    docs: [
      {
        date: "24 AUG, 2025",
        items: [
          { title: "Cafe Recommendations.pdf", subtitle: "420 KB · Shared by John", type: "pdf" },
        ],
      },
    ],
    links: [
      {
        date: "24 AUG, 2025",
        items: [
          { title: "Blue Bottle Coffee", url: "https://bluebottlecoffee.com", type: "link" },
          { title: "Yelp Review", url: "https://www.yelp.com", type: "link" },
        ],
      },
    ],
  },
  {
    id: "david",
    name: "David Lee",
    avatar: "N",
    color: "blue",
    preview: "I'll see you there!",
    profile: {
      name: "David Lee",
      role: "Photographer",
      lastActive: "Last Active: Today 1:20PM",
    },
    messages: [
      {
        sender: "You",
        color: "gray",
        initial: "Y",
        time: "12:30PM",
        texts: ["Are you heading to the gallery opening tonight?"],
      },
      {
        sender: "David Lee",
        color: "blue",
        initial: "D",
        time: "01:15PM",
        texts: [
          "Wouldn't miss it. My friend has two pieces in the show.",
          "I'll see you there!",
        ],
      },
    ],
    mutuals: [
      { name: "Sarah Johnson", role: "Marketing", initial: "S", color: "gray" },
      { name: "Laura Chen", role: "Writer", initial: "L", color: "blue" },
    ],
    images: [
      {
        date: "20 AUG, 2025",
        items: [
          { url: "https://images.unsplash.com/photo-1503416997304-7f8bf166c121?w=400&h=400&fit=crop", name: "gallery_01.jpeg", size: "2.4MB" },
          { url: "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=400&h=400&fit=crop", name: "gallery_02.jpeg", size: "1.9MB" },
          { url: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=400&h=400&fit=crop", name: "gallery_03.jpeg", size: "2.2MB" },
        ],
      },
    ],
    docs: [
      {
        date: "20 AUG, 2025",
        items: [
          { title: "Exhibition Catalog.pdf", subtitle: "3.2 MB · Shared by David", type: "pdf" },
        ],
      },
    ],
    links: [
      {
        date: "20 AUG, 2025",
        items: [
          { title: "Gallery Website", url: "https://gallery.example.com", type: "link" },
          { title: "Artist Portfolio", url: "https://artist.example.com", type: "link" },
        ],
      },
    ],
  },
  {
    id: "angela",
    name: "Angela Wang",
    avatar: "N",
    color: "pink",
    preview: "Do you need a ri...",
    profile: {
      name: "Angela Wang",
      role: "Architect",
      lastActive: "Last Active: Today 11:30AM",
    },
    messages: [
      {
        sender: "Angela Wang",
        color: "pink",
        initial: "A",
        time: "10:45AM",
        texts: ["Do you need a ride to the wedding on Saturday? I'm driving up with Mia."],
      },
      {
        sender: "You",
        color: "blue",
        initial: "Y",
        time: "11:02AM",
        texts: ["That would be amazing, thank you! What time are you heading out?"],
      },
      {
        sender: "Angela Wang",
        color: "pink",
        initial: "A",
        time: "11:15AM",
        texts: ["Probably around 10am from my place. We can grab breakfast on the way."],
      },
    ],
    mutuals: [
      { name: "Mia Roberts", role: "Illustrator", initial: "M", color: "pink" },
      { name: "Alice Smith", role: "Teacher", initial: "A", color: "lavender" },
    ],
    images: [
      {
        date: "18 AUG, 2025",
        items: [
          { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop", name: "venue.jpeg", size: "2.0MB" },
          { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=400&fit=crop", name: "dress.jpeg", size: "1.5MB" },
          { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=400&fit=crop", name: "rings.jpeg", size: "1.2MB" },
        ],
      },
    ],
    docs: [
      {
        date: "18 AUG, 2025",
        items: [
          { title: "Wedding Itinerary.pdf", subtitle: "580 KB · Shared by Angela", type: "pdf" },
          { title: "Carpool Plan.docx", subtitle: "120 KB · Shared by Angela", type: "doc" },
        ],
      },
    ],
    links: [
      {
        date: "18 AUG, 2025",
        items: [
          { title: "Venue Directions", url: "https://maps.google.com", type: "link" },
          { title: "Wedding Registry", url: "https://www.zola.com", type: "link" },
        ],
      },
    ],
  },
  {
    id: "carlos",
    name: "Carlos Mendoza",
    avatar: "A",
    color: "lavender",
    preview: "I might be late.",
    profile: {
      name: "Carlos Mendoza",
      role: "Chef",
      lastActive: "Last Active: Today 9:15AM",
    },
    messages: [
      {
        sender: "Carlos Mendoza",
        color: "lavender",
        initial: "C",
        time: "08:50AM",
        texts: ["Just a heads up — traffic is brutal this morning. I might be late."],
      },
      {
        sender: "You",
        color: "gray",
        initial: "Y",
        time: "08:52AM",
        texts: ["No worries, take your time. We'll save you a seat."],
      },
    ],
    mutuals: [
      { name: "Sarah Johnson", role: "Marketing", initial: "S", color: "gray" },
      { name: "Robert Johnson", role: "Photographer", initial: "R", color: "peach" },
    ],
    images: [
      {
        date: "15 AUG, 2025",
        items: [
          { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop", name: "dish_01.jpeg", size: "1.6MB" },
          { url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop", name: "dish_02.jpeg", size: "1.8MB" },
          { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=400&fit=crop", name: "dish_03.jpeg", size: "1.4MB" },
        ],
      },
    ],
    docs: [
      {
        date: "15 AUG, 2025",
        items: [
          { title: "Recipe Collection.pdf", subtitle: "4.2 MB · Shared by Carlos", type: "pdf" },
        ],
      },
    ],
    links: [
      {
        date: "15 AUG, 2025",
        items: [
          { title: "NYTimes Cooking", url: "https://cooking.nytimes.com", type: "link" },
          { title: "Serious Eats", url: "https://www.seriouseats.com", type: "link" },
        ],
      },
    ],
  },
  {
    id: "sarah",
    name: "Sarah Johnson",
    avatar: "W",
    color: "gray",
    preview: "What time will y...",
    profile: {
      name: "Sarah Johnson",
      role: "Marketing",
      lastActive: "Last Active: Yesterday 8:45PM",
    },
    messages: [
      {
        sender: "Sarah Johnson",
        color: "gray",
        initial: "S",
        time: "07:30PM",
        texts: ["What time will you be back from the trip? Want to grab dinner Friday."],
      },
      {
        sender: "You",
        color: "blue",
        initial: "Y",
        time: "08:20PM",
        texts: ["Landing around 4pm Friday. Dinner sounds perfect — pick the place!"],
      },
    ],
    mutuals: [
      { name: "John Doe", role: "Designer", initial: "J", color: "lavender" },
      { name: "Carlos Mendoza", role: "Chef", initial: "C", color: "lavender" },
    ],
    images: [
      {
        date: "12 AUG, 2025",
        items: [
          { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop", name: "restaurant.jpeg", size: "1.3MB" },
          { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop", name: "wine.jpeg", size: "1.1MB" },
        ],
      },
    ],
    docs: [
      {
        date: "12 AUG, 2025",
        items: [
          { title: "Restaurant Shortlist.docx", subtitle: "85 KB · Shared by Sarah", type: "doc" },
        ],
      },
    ],
    links: [
      {
        date: "12 AUG, 2025",
        items: [
          { title: "OpenTable", url: "https://www.opentable.com", type: "link" },
          { title: "Eater", url: "https://www.eater.com", type: "link" },
        ],
      },
    ],
  },
  {
    id: "temitope",
    name: "Temitope Aiyegbusi",
    avatar: "N",
    color: "blue",
    preview: "Are you still com...",
    profile: {
      name: "Temitope Aiyegbusi",
      role: "Engineer",
      lastActive: "Last Active: Today 2:55PM",
    },
    messages: [
      {
        sender: "Temitope Aiyegbusi",
        color: "blue",
        initial: "T",
        time: "02:30PM",
        texts: ["Are you still coming to the book club on Sunday? We're discussing the Murakami."],
      },
      {
        sender: "You",
        color: "gray",
        initial: "Y",
        time: "02:48PM",
        texts: ["Yes! Just finished the last chapter. So many thoughts."],
      },
      {
        sender: "Temitope Aiyegbusi",
        color: "blue",
        initial: "T",
        time: "02:55PM",
        texts: ["Perfect. See you at 3pm at my place. Bringing the usual snacks?"],
      },
    ],
    mutuals: [
      { name: "Laura Chen", role: "Writer", initial: "L", color: "blue" },
      { name: "Mia Roberts", role: "Illustrator", initial: "M", color: "pink" },
    ],
    images: [
      {
        date: "10 AUG, 2025",
        items: [
          { url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop", name: "books_01.jpeg", size: "1.7MB" },
          { url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=400&fit=crop", name: "books_02.jpeg", size: "1.5MB" },
          { url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop", name: "books_03.jpeg", size: "1.9MB" },
        ],
      },
    ],
    docs: [
      {
        date: "10 AUG, 2025",
        items: [
          { title: "Reading List.pdf", subtitle: "210 KB · Shared by Temitope", type: "pdf" },
          { title: "Book Notes.docx", subtitle: "340 KB · Shared by Temitope", type: "doc" },
        ],
      },
    ],
    links: [
      {
        date: "10 AUG, 2025",
        items: [
          { title: "Goodreads", url: "https://www.goodreads.com", type: "link" },
          { title: "The New Yorker", url: "https://www.newyorker.com", type: "link" },
        ],
      },
    ],
  },
  {
    id: "lisa",
    name: "Lisa Kim",
    avatar: "J",
    color: "gray",
    preview: "Don't forget you...",
    profile: {
      name: "Lisa Kim",
      role: "Yoga Instructor",
      lastActive: "Last Active: Today 7:00AM",
    },
    messages: [
      {
        sender: "Lisa Kim",
        color: "gray",
        initial: "L",
        time: "06:45AM",
        texts: ["Don't forget your mat tomorrow! Class is full this week so we'll be tight on space."],
      },
      {
        sender: "You",
        color: "blue",
        initial: "Y",
        time: "07:00AM",
        texts: ["Got it, thanks for the reminder! See you at 8."],
      },
    ],
    mutuals: [
      { name: "Angela Wang", role: "Architect", initial: "A", color: "pink" },
      { name: "Alice Smith", role: "Teacher", initial: "A", color: "lavender" },
    ],
    images: [
      {
        date: "08 AUG, 2025",
        items: [
          { url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=400&fit=crop", name: "studio.jpeg", size: "1.4MB" },
          { url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop", name: "pose.jpeg", size: "1.2MB" },
        ],
      },
    ],
    docs: [
      {
        date: "08 AUG, 2025",
        items: [
          { title: "Class Schedule.pdf", subtitle: "180 KB · Shared by Lisa", type: "pdf" },
        ],
      },
    ],
    links: [
      {
        date: "08 AUG, 2025",
        items: [
          { title: "Studio Website", url: "https://yogastudio.example.com", type: "link" },
          { title: "Meditation App", url: "https://www.calm.com", type: "link" },
        ],
      },
    ],
  },
];

export function getConversation(id: string) {
  return conversations.find((c) => c.id === id);
}

export const defaultConversationId = "warehouse";
