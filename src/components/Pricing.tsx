import { Button } from "@/components/ui/button";

const Pricing = () => {
  const packages = [
    {
      followers: "100",
      price: "₪29",
      originalPrice: "₪49",
      features: [
        "100 עוקבים איכותיים",
        "משלוח תוך 24 שעות",
        "אחריות לשנה", 
        "תמיכה חינמית"
      ],
      popular: false,
      badge: ""
    },
    {
      followers: "500", 
      price: "₪79",
      originalPrice: "₪129",
      features: [
        "500 עוקבים איכותיים",
        "משלוח תוך 12 שעות",
        "אחריות לשנה",
        "תמיכה חינמית",
        "בונוס: 50 לייקים"
      ],
      popular: true,
      badge: "הכי פופולרי"
    },
    {
      followers: "1000",
      price: "₪139", 
      originalPrice: "₪199",
      features: [
        "1000 עוקבים איכותיים",
        "משלוח תוך 6 שעות",
        "אחריות לשנה",
        "תמיכה VIP",
        "בונוס: 100 לייקים",
        "בונוס: 50 תגובות"
      ],
      popular: false,
      badge: "הכי משתלם"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 hebrew-text">
            בחר את החבילה המתאימה לך
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto hebrew-text">
            מחירים שקופים ללא עמלות נסתרות. כל החבילות כוללות אחריות מלאה
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`
                card-gradient rounded-3xl p-8 text-right card-hover animate-scale-in relative
                ${pkg.popular ? 'ring-2 ring-primary ring-opacity-50 scale-105' : ''}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className={`
                  absolute -top-4 right-6 px-4 py-2 rounded-full text-sm font-semibold hebrew-text
                  ${pkg.popular ? 'bg-primary text-primary-foreground' : 'bg-success text-success-foreground'}
                `}>
                  {pkg.badge}
                </div>
              )}

              {/* Package Header */}
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-foreground mb-2 hebrew-text">
                  {pkg.followers} עוקבים
                </h3>
                <div className="flex items-center justify-end gap-3 mb-4">
                  <span className="text-2xl text-muted-foreground line-through hebrew-text">
                    {pkg.originalPrice}
                  </span>
                  <span className="text-4xl font-bold gradient-text hebrew-text">
                    {pkg.price}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-end gap-3 hebrew-text">
                    <span className="text-muted-foreground">{feature}</span>
                    <span className="text-success">✓</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a href="/checkout">
                <Button 
                  variant={pkg.popular ? "pricing" : "cta"} 
                  size="lg" 
                  className="w-full text-lg hebrew-text"
                >
                  {pkg.popular ? "רכישה עכשיו 🔥" : "רכישה עכשיו"}
                </Button>
              </a>
              
              <p className="text-xs text-muted-foreground mt-3 hebrew-text">
                משלוח מיידי • ללא התחייבות
              </p>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-success/10 text-success px-6 py-3 rounded-full">
            <span className="hebrew-text font-medium">🔒 אחריות החזר כספי 30 יום</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;