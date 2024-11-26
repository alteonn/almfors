import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Home,
  Globe,
  ShoppingCart,
  Share2,
  HelpCircle,
  Users,
  BookOpen,
  MessageCircle,
  Menu,
  LogIn,
} from "lucide-react";

const menuItems = [
  { name: "Hem", href: "/", icon: Home },
  { name: "Webbdesign", href: "/webbdesign", icon: Globe },
  { name: "Beställ", href: "/bestall", icon: ShoppingCart },
  { name: "Sociala medier", href: "/sociala-medier", icon: Share2 },
  { name: "Varför Almfors?", href: "/varfor-almfors", icon: HelpCircle },
  { name: "Om oss", href: "/om-oss", icon: Users },
  { name: "Blogg", href: "/blogg", icon: BookOpen },
  { name: "Kundservice", href: "/kundservice", icon: MessageCircle },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Almfors
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-muted text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50",
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link to="/logga-in">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm font-medium px-3 py-2 h-auto min-h-0"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Logga in
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:text-primary transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-muted text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50",
                  )
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/logga-in"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
            >
              <LogIn className="w-5 h-5 mr-3" />
              Logga in
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
