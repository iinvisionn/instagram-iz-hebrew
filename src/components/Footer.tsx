const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="text-right">
            <h3 className="text-2xl font-bold mb-4 hebrew-text gradient-text">
              עוקבים פלוס
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed hebrew-text">
              המקום המהימן ביותר בישראל לרכישת עוקבים לאינסטגרם. 
              מעל 10,000 לקוחות מרוצים וספירה.
            </p>
            <div className="flex justify-end gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover hover-scale"
                aria-label="פייסבוק"
              >
                📘
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover hover-scale"
                aria-label="אינסטגרם"
              >
                📷
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-success rounded-full flex items-center justify-center hover:bg-success-hover hover-scale"
                aria-label="וואטסאפ"
              >
                💬
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-6 hebrew-text">קישורים מהירים</h4>
            <ul className="space-y-3">
              <li>
                <a href="#pricing" className="text-background/80 hover:text-background hover-scale hebrew-text">
                  מחירים
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background hover-scale hebrew-text">
                  איך זה עובד
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background hover-scale hebrew-text">
                  ביקורות לקוחות
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background hover-scale hebrew-text">
                  שאלות ותשובות
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background hover-scale hebrew-text">
                  בלוג
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-6 hebrew-text">השירותים שלנו</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/80 hover:text-background hover-scale hebrew-text">
                  עוקבים לאינסטגרם
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background hover-scale hebrew-text">
                  לייקים לאינסטגרם
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background hover-scale hebrew-text">
                  צפיות לסטורי
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background hover-scale hebrew-text">
                  תגובות איכותיות
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background hover-scale hebrew-text">
                  ניהול חשבונות
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-6 hebrew-text">צור קשר</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-end gap-3">
                <span className="text-background/80 hebrew-text">support@example.com</span>
                <span className="text-primary">📧</span>
              </div>
              <div className="flex items-center justify-end gap-3">
                <span className="text-background/80 hebrew-text">050-123-4567</span>
                <span className="text-success">📱</span>
              </div>
              <div className="flex items-center justify-end gap-3">
                <span className="text-background/80 hebrew-text">תמיכה 24/7</span>
                <span className="text-primary">🕐</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 order-2 md:order-1">
              <a href="#" className="text-background/60 hover:text-background hebrew-text">
                תנאי שימוש
              </a>
              <a href="#" className="text-background/60 hover:text-background hebrew-text">
                מדיניות פרטיות
              </a>
              <a href="#" className="text-background/60 hover:text-background hebrew-text">
                החזרים ואחריות
              </a>
            </div>

            {/* Copyright */}
            <div className="text-background/60 text-center order-1 md:order-2 hebrew-text">
              © 2024 עוקבים פלוס. כל הזכויות שמורות.
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-8 mt-8 pt-8 border-t border-background/20">
          <div className="flex items-center gap-2 text-background/80">
            <span>🔒</span>
            <span className="text-sm hebrew-text">תשלום מאובטח SSL</span>
          </div>
          <div className="flex items-center gap-2 text-background/80">
            <span>✅</span>
            <span className="text-sm hebrew-text">אישור מערכות אבטחה</span>
          </div>
          <div className="flex items-center gap-2 text-background/80">
            <span>📞</span>
            <span className="text-sm hebrew-text">תמיכה טכנית ישראלית</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;