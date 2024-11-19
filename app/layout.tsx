import '@/app/ui/global.css';
import SideNav from '@/app/ui/index/sidenav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <header>
            <SideNav />
          </header>
          <main className="main-wrapper">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
