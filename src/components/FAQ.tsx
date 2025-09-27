import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "כמה זמן לוקח לקבל את העוקבים?",
      answer: "המשלוח מתחיל תוך דקות ספורות מרגע אישור התשלום. בהתאם לגודל החבילה, התהליך יכול להימשך בין 30 דקות ל-24 שעות."
    },
    {
      question: "האם העוקבים אמיתיים ופעילים?",
      answer: "כן! אנחנו מספקים רק עוקבים איכותיים ואמיתיים עם פרופילים פעילים. כל העוקבים עוברים בדיקת איכות קפדנית לפני המשלוח."
    },
    {
      question: "האם יש אחריות על השירות?",
      answer: "בהחלט! אנחנו מעניקים אחריות מלאה לשנה על כל החבילות. אם תאבד עוקבים, נחליף אותם בחינם ללא שאלות."
    },
    {
      question: "איך מתבצע התשלום?",
      answer: "אנחנו מקבלים כרטיסי אשראי, PayPal, וביט. כל התשלומים מוצפנים ומאובטחים ב-SSL. לא נשמור את פרטי הכרטיס שלך."
    },
    {
      question: "האם האינסטגרם שלי בסכנה?",
      answer: "לא בכלל! אנחנו משתמשים בשיטות בטוחות לחלוטין שלא מפרות את תנאי השימוש של אינסטגרם. החשבון שלך יישאר מאובטח."
    },
    {
      question: "מה קורה אם אני לא מרוצה מהשירות?",
      answer: "אנחנו מציעים החזר כספי מלא תוך 30 יום אם לא תהיה מרוצה לחלוטין מהשירות. פשוט צור איתנו קשר ונטפל בזה מיד."
    },
    {
      question: "האם יש הנחה על רכישות חוזרות?",
      answer: "כן! לקוחות חוזרים מקבלים הנחה של 15% על כל החבילות. בנוסף, יש לנו תוכנית נאמנות עם הטבות מיוחדות."
    },
    {
      question: "איך אני יכול לפנות לתמיכה?",
      answer: "אנחנו זמינים 24/7 דרך הצ'אט באתר, וואטסאפ, או אימייל. הצוות שלנו דובר עברית ויענה לך תוך דקות ספורות."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 hebrew-text">
            שאלות נפוצות
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto hebrew-text">
            מצא תשובות לשאלות הנפוצות ביותר שלקוחותינו שואלים
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="card-gradient rounded-2xl px-6 border-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-right hover:no-underline py-6">
                <span className="hebrew-text font-semibold text-lg text-foreground">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-right pb-6">
                <p className="text-muted-foreground leading-relaxed hebrew-text">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="card-gradient rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 hebrew-text">
              יש לך שאלה נוספת?
            </h3>
            <p className="text-muted-foreground mb-6 hebrew-text">
              הצוות שלנו כאן כדי לעזור לך 24 שעות ביממה
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/972500000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-success text-success-foreground hover:bg-success-hover px-6 py-3 rounded-lg font-medium hover-lift hebrew-text"
              >
                <span>💬</span>
                שלח הודעה בוואטסאפ
              </a>
              <a 
                href="mailto:support@example.com"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 rounded-lg font-medium hover-lift hebrew-text"
              >
                <span>📧</span>
                שלח אימייל
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;