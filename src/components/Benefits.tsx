const Benefits = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "מהירות ברק",
      description: "קבל עוקבים תוך דקות ספורות מרגע ההזמנה"
    },
    {
      icon: "🛡️", 
      title: "אמינות מוחלטת",
      description: "עוקבים איכותיים ואמיתיים עם אחריות מלאה"
    },
    {
      icon: "💬",
      title: "תמיכה בעברית",
      description: "צוות תמיכה דובר עברית זמין 24 שעות ביממה"
    },
    {
      icon: "💳",
      title: "תשלום מאובטח", 
      description: "אפשרויות תשלום מגוונות ומאובטחות לחלוטין"
    },
    {
      icon: "📈",
      title: "הגדלת האנגייג'מנט",
      description: "עוקבים פעילים שמגדילים את הנוכחות שלך ברשת"
    },
    {
      icon: "🎯",
      title: "מיקוד דיוק",
      description: "עוקבים רלוונטיים למותג שלך ולקהל היעד"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 hebrew-text">
            למה לבחור בנו?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto hebrew-text">
            אנחנו מספקים שירות מקצועי ואמין להגדלת מספר העוקבים באינסטגרם
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-gradient rounded-2xl p-8 text-right card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 flex justify-end">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 hebrew-text">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed hebrew-text">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;