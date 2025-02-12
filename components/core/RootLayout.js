//import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      <div className="flex flex-col min-h-screen font-sans pb-8 ">
        <header className="bg-background border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between py-4">
              <h1 className="text-2xl font-bold">
                <a href="/" className="text-foreground hover:text-primary">
                  Expense Tracker
                </a>
              </h1>
              <div className="flex gap-4">
                <a href="/" className="text-foreground hover:text-primary">
                  Log Expense
                </a>
                <a href="/list" className="text-foreground hover:text-primary">
                  View Expenses
                </a>
                <a
                  href="/charts"
                  className="text-foreground hover:text-primary"
                >
                  Charts
                </a>
              </div>
            </nav>
          </div>
        </header>
        <main className="flex-grow container mx-auto mt-8 px-4">
          {children}
        </main>
      </div>
    </div>
  );
}
