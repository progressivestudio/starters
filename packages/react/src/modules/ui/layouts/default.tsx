import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <main className="min-h-screen w-full antialiased font-sans">
      <div className="container mx-auto p-8">{children}</div>
    </main>
  );
}
