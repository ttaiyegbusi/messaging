# Messaging UI — Next.js

A messaging interface built with Next.js 14 (App Router), TypeScript, and CSS Modules.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app. The root path redirects to `/messages`.

## Folder Structure

```
messaging-app/
├── app/                                # Next.js App Router pages
│   ├── layout.tsx                      # Root layout (loads globals.css)
│   ├── page.tsx                        # Redirects to /messages
│   └── messages/
│       ├── layout.tsx                  # Shared shell: top bar + conv list + right rail
│       ├── page.tsx                    # /messages → chat view (default)
│       └── details/
│           ├── layout.tsx              # Wraps tabs around all details subpages
│           ├── page.tsx                # Redirects to /messages/details/user-info
│           ├── user-info/page.tsx      # /messages/details/user-info
│           ├── images/page.tsx         # /messages/details/images
│           ├── docs/page.tsx           # /messages/details/docs
│           └── links/page.tsx          # /messages/details/links
│
├── components/messages/                # All UI components
│   ├── messages.module.css             # All scoped styles for the messaging UI
│   ├── icons.tsx                       # SVG icon components
│   ├── ConversationContext.tsx         # React context for active conversation
│   ├── TopBar.tsx                      # Top navigation bar
│   ├── ConversationList.tsx            # Left sidebar list
│   ├── RightRail.tsx                   # Right column with DETAILS pill
│   ├── ChatPanel.tsx                   # Chat messages + composer
│   ├── DetailsHeader.tsx               # "← Details" header for details views
│   ├── DetailsTabs.tsx                 # Tab strip with animated underline
│   ├── UserInfoContent.tsx             # User Info tab content
│   ├── ImagesContent.tsx               # Images grid
│   ├── DocsContent.tsx                 # Docs list
│   └── LinksContent.tsx                # Links list
│
├── lib/
│   ├── types.ts                        # TypeScript types
│   ├── data.ts                         # All conversation data (8 conversations)
│   └── utils.ts                        # Class name helpers
│
├── styles/
│   └── globals.css                     # Global styles + CSS variables + font imports
│
├── package.json
├── tsconfig.json
├── next.config.js
├── next-env.d.ts
└── .gitignore
```

## Routes

| Route                              | Description                                  |
| ---------------------------------- | -------------------------------------------- |
| `/`                                | Redirects to `/messages`                     |
| `/messages`                        | Main chat view                               |
| `/messages/details`                | Redirects to `/messages/details/user-info`   |
| `/messages/details/user-info`      | User info tab (profile + mutuals + groups)   |
| `/messages/details/images`         | Shared images grid                           |
| `/messages/details/docs`           | Shared documents list                        |
| `/messages/details/links`          | Shared links list                            |

## How It Works

- The `app/messages/layout.tsx` provides the shared three-column shell (top bar, conversation list on the left, right rail with DETAILS pill).
- The center column renders whatever child route is active — either `ChatPanel` (default) or the `details/*` subtree.
- The `app/messages/details/layout.tsx` adds the details header and tab strip around any details subpage.
- The `ConversationContext` keeps track of which conversation is selected across all routes. It persists to `sessionStorage` so navigation between tabs and the chat view doesn't lose state.
- Clicking the `[DETAILS]` pill on the right rail navigates to `/messages/details/user-info`. Clicking a tab inside the details section navigates between the four subpages. Clicking the back arrow returns to `/messages`.
- Clicking a conversation in the sidebar updates the context. If you're inside a details subpage, it navigates back to `/messages` so you see the new chat first.

## Customization

- **Adding a conversation**: Add a new entry to `lib/data.ts`. The list will pick it up automatically.
- **Changing colors**: Edit CSS variables in `styles/globals.css` (`--bg`, `--accent`, avatar colors, etc.).
- **Changing fonts**: Update the `@import` in `styles/globals.css` and the `font-family` value.
- **Adding a new details tab**: Add a route folder under `app/messages/details/`, add a content component under `components/messages/`, and add the tab entry to the `TABS` array in `DetailsTabs.tsx`.

## Notes

- Images load from Unsplash. Domain is whitelisted in `next.config.js`.
- Uses native `<img>` rather than `next/image` for the chat images to keep the example dependency-light, but you can swap in `next/image` anywhere if you prefer.
- All styles are CSS Modules — scoped to the component that imports them. The single shared module is `components/messages/messages.module.css`.
- The tab underline width is measured at runtime so it matches each tab's text width, not the cell width (matches the design).
# messaging
