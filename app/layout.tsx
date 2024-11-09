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
          {/* 水平導航欄 */}
          <header className="w-full">
            <SideNav />
          </header>
          {/* 主內容區域 */}
          <main className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
            <div style={{ height: '2000px' }}></div>
          </main>
        </div>
      </body>
    </html>
  );
}
