import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-instagram.jpg";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-right animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight hebrew-text">
              קנה עוקבים לאינסטגרם
              <span className="gradient-text block">במהירות ובקלות</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed hebrew-text max-w-lg mr-auto-rtl">
              הגדל את מספר העוקבים שלך באינסטגרם בצורה מהירה, בטוחה ואמינה. 
              תמיכה מלאה בעברית ומחירים משתלמים ביותר.
            </p>
            
            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a href="/checkout">
                <Button variant="hero" size="lg" className="text-xl px-8 py-4">
                  התחל עכשיו 🚀
                </Button>
              </a>
              <a href="#pricing">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 hebrew-text">
                  צפה במחירים
                </Button>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-end gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                <span className="hebrew-text">משלוח מיידי</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                <span className="hebrew-text">תמיכה 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                <span className="hebrew-text">תשלום מאובטח</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="animate-slide-up">
            <div className="card-gradient rounded-3xl p-8 hover-lift">
              <img 
                src={heroImage} 
                alt="Instagram עוקבים - הגדלת מספר עוקבים"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;