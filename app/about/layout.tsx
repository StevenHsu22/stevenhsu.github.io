import SideNav from '@/app/ui/index/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col bg-white">
      <header>
        <SideNav />
      </header>
      <main className="main-wrapper">
        {children}
      </main>
    </div>
  );
}