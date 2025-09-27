const Testimonials = () => {
  const testimonials = [
    {
      name: "שרה כהן",
      role: "בלוגרית אופנה",
      content: "השירות פשוט מדהים! קיבלתי 1000 עוקבים תוך שעות ספורות וכולם נראים אמיתיים. התמיכה בעברית הייתה מצוינת.",
      rating: 5,
      followers: "+1,000"
    },
    {
      name: "דוד לוי", 
      role: "בעל עסק",
      content: "השקעתי בחבילת 500 עוקבים ותוך שבוע ראיתי עלייה משמעותית במכירות. ממליץ בחום לכל בעל עסק!",
      rating: 5,
      followers: "+500"
    },
    {
      name: "מיכל אברמוב",
      role: "יוצרת תוכן",
      content: "אחרי שנים של מאבק להגיע לעוקבים, המערכת הזו פתרה את הבעיה תוך יום אחד. שירות מקצועי ואמין!",
      rating: 5,
      followers: "+2,000"
    },
    {
      name: "יוסי רוזן",
      role: "מוזיקאי",  
      content: "הגדלתי את הקהל שלי ב-1500 עוקבים והאנגייג'מנט עלה באופן דראמטי. השקעה שמחזירה את עצמה!",
      rating: 5,
      followers: "+1,500"
    },
    {
      name: "רונית גולד",
      role: "מאמנת כושר",
      content: "התמיכה הייתה זמינה 24/7 והתוצאות מעולם לא אכזבו. עוקבים איכותיים שמגיבים ומעורבים בתוכן.",
      rating: 5,
      followers: "+800"
    },
    {
      name: "אמיר דהן",
      role: "צלם מקצועי",
      content: "בתור צלם, הנוכחות באינסטגרם היא קריטית עבורי. השירות הזה הגדיל את החשיפה שלי פי 3!",
      rating: 5,
      followers: "+1,200"
    }
  ];

  return (
    <section className="py-20 px-4 bg-accent/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 hebrew-text">
            מה הלקוחות שלנו אומרים
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto hebrew-text">
            אלפי לקוחות מרוצים שכבר הגדילו את הנוכחות שלהם באינסטגרם
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-gradient rounded-2xl p-6 text-right card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating Stars */}
              <div className="flex justify-end mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              
              {/* Testimonial Content */}
              <blockquote className="text-muted-foreground mb-4 leading-relaxed hebrew-text italic">
                "{testimonial.content}"
              </blockquote>
              
              {/* Customer Info */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <div className="text-right">
                    <div className="font-semibold text-foreground hebrew-text">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground hebrew-text">
                      {testimonial.role}
                    </div>
                  </div>
                  <div className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.followers}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Badge */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-4 bg-primary/10 text-primary px-8 py-4 rounded-full">
            <span className="text-2xl">🏆</span>
            <div className="hebrew-text">
              <div className="font-bold">מעל 10,000 לקוחות מרוצים</div>
              <div className="text-sm opacity-80">דירוג ממוצע 4.9/5 כוכבים</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;