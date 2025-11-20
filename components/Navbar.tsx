import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { AuthButton } from "./ui/auth-button"; // <--- Fixed path and brackets

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">AuraShop</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground">
            Home
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <AuthButton />

          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">View Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}