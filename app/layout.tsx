import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar"; // Import the Navbar we just made
import { AuthButton } from "./ui/auth-button"; // Optional: for dark mode if you have it

const inter = Inter({ subsets: ["latin"] });

export const metadata = {  
  title: "AuraShop", 
  description: "Find your style with AI-powered visual search.", 
}; 
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; 
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <main className="flex min-h-screen flex-col">
            {/* The Navbar goes here, at the top of every page */}
            <Navbar /> 
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              {children}
            </div>
          </main>
      </body>
    </html>
  );
}
