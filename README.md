# Routing oddity demo

If a nested route has no  `_layout.tsx` it works as part of the `Stack` layout in the root layout; navigating into a child directory pushes a screen, and navigating from that screen to another in the same child directory pushes another.

If a nested route has a `_layout.tsx` it breaks the `Stack` based layout in the root layout; navigating into a child directory pushes a screen, but navigating from that screen to another in the same child directory does not push another and no animation is shown.
