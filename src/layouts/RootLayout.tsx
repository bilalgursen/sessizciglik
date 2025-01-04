import { SideNav } from "@/components/ui/SideNav";
import { Footer } from "@/components/ui/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SideNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
