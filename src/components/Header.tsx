import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#pricing" 
              className="text-muted-foreground hover:text-foreground hover-scale hebrew-text font-medium"
            >
              מחירים
            </a>
            <a 
              href="#testimonials" 
              className="text-muted-foreground hover:text-foreground hover-scale hebrew-text font-medium"
            >
              ביקורות
            </a>
            <a 
              href="#faq" 
              className="text-muted-foreground hover:text-foreground hover-scale hebrew-text font-medium"
            >
              שאלות ותשובות
            </a>
            <a 
              href="/checkout" 
              className="text-muted-foreground hover:text-foreground hover-scale hebrew-text font-medium"
            >
              רכישה
            </a>
          </nav>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold gradient-text hebrew-text">עוקבים פלוס</h1>
            <span className="text-2xl">📈</span>
          </div>

          {/* CTA Button */}
          <a href="/checkout">
            <Button variant="hero" size="sm" className="hebrew-text">
              התחל עכשיו
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;