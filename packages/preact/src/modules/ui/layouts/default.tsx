import type { ComponentChildren } from "preact";

interface DefaultLayoutProps {
  children: ComponentChildren;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <main class="min-h-screen w-full antialiased font-sans">
      <div class="container mx-auto p-8">{children}</div>
    </main>
  );
}
