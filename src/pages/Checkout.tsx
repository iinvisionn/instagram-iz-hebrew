import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";

const Checkout = () => {
  const [selectedPackage, setSelectedPackage] = useState("500");

  const packages = {
    "100": { followers: "100", price: "₪29", originalPrice: "₪49" },
    "500": { followers: "500", price: "₪79", originalPrice: "₪129" },
    "1000": { followers: "1000", price: "₪139", originalPrice: "₪199" }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 hebrew-text">
              השלם את הרכישה
            </h1>
            <p className="text-xl text-muted-foreground hebrew-text">
              צעד אחרון לקבלת העוקבים שלך 🚀
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Package Selection */}
            <Card className="card-gradient animate-slide-up">
              <CardHeader>
                <CardTitle className="text-right hebrew-text">בחר חבילה</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                  <SelectTrigger className="text-right">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(packages).map(([key, pkg]) => (
                      <SelectItem key={key} value={key} className="text-right hebrew-text">
                        {pkg.followers} עוקבים - {pkg.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="bg-accent/20 rounded-xl p-6 text-right">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl font-bold text-success">
                      {packages[selectedPackage as keyof typeof packages].price}
                    </div>
                    <div className="hebrew-text">
                      <div className="font-semibold">
                        {packages[selectedPackage as keyof typeof packages].followers} עוקבים
                      </div>
                      <div className="text-sm text-muted-foreground line-through">
                        {packages[selectedPackage as keyof typeof packages].originalPrice}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground hebrew-text">
                    ✓ משלוח מיידי ✓ אחריות שנה ✓ תמיכה 24/7
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Form */}
            <Card className="card-gradient animate-slide-up">
              <CardHeader>
                <CardTitle className="text-right hebrew-text">פרטי הזמנה</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  {/* Instagram Username */}
                  <div className="space-y-2 text-right">
                    <Label htmlFor="instagram" className="hebrew-text font-medium">
                      שם משתמש באינסטגרם *
                    </Label>
                    <Input 
                      id="instagram"
                      placeholder="@username"
                      className="text-right"
                      dir="ltr"
                      required
                    />
                    <p className="text-xs text-muted-foreground hebrew-text">
                      הכנס את שם המשתמש ללא @
                    </p>
                  </div>

                  {/* Email */}
                  <div className="space-y-2 text-right">
                    <Label htmlFor="email" className="hebrew-text font-medium">
                      כתובת אימייל *
                    </Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="example@gmail.com"
                      className="text-right"
                      dir="ltr"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2 text-right">
                    <Label htmlFor="phone" className="hebrew-text font-medium">
                      מספר טלפון (אופציונלי)
                    </Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="050-123-4567"
                      className="text-right"
                      dir="ltr"
                    />
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-3 text-right">
                    <Label className="hebrew-text font-medium">אמצעי תשלום</Label>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-accent/20 rounded-lg p-3 text-center hover:bg-accent/40 cursor-pointer hover-scale">
                        <div className="text-2xl mb-1">💳</div>
                        <div className="text-xs hebrew-text">אשראי</div>
                      </div>
                      <div className="bg-accent/20 rounded-lg p-3 text-center hover:bg-accent/40 cursor-pointer hover-scale">
                        <div className="text-2xl mb-1">🅿️</div>
                        <div className="text-xs hebrew-text">PayPal</div>
                      </div>
                      <div className="bg-accent/20 rounded-lg p-3 text-center hover:bg-accent/40 cursor-pointer hover-scale">
                        <div className="text-2xl mb-1">📱</div>
                        <div className="text-xs hebrew-text">ביט</div>
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3 text-right">
                    <input type="checkbox" id="terms" className="mt-1" required />
                    <Label htmlFor="terms" className="text-sm text-muted-foreground hebrew-text leading-relaxed">
                      אני מסכים ל<a href="#" className="text-primary hover:underline">תנאי השימוש</a> ול<a href="#" className="text-primary hover:underline">מדיניות הפרטיות</a>
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full text-xl py-4 hebrew-text"
                  >
                    השלם רכישה 🔒
                  </Button>
                </form>

                {/* Security Notice */}
                <div className="bg-success/10 rounded-lg p-4 text-right">
                  <div className="flex items-center justify-end gap-2 text-success font-medium mb-2">
                    <span className="hebrew-text">תשלום מאובטח</span>
                    <span>🔒</span>
                  </div>
                  <p className="text-xs text-muted-foreground hebrew-text">
                    כל התשלומים מוצפנים ב-SSL ומעובדים באופן בטוח. אנחנו לא שומרים את פרטי הכרטיס שלך.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support */}
          <div className="text-center mt-16 animate-fade-in">
            <Card className="card-gradient max-w-2xl mx-auto">
              <CardContent className="p-8 text-right">
                <h3 className="text-xl font-semibold mb-4 hebrew-text">
                  זקוק לעזרה? 🤝
                </h3>
                <p className="text-muted-foreground mb-6 hebrew-text">
                  הצוות שלנו כאן כדי לעזור לך בכל שלב של התהליך
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="hebrew-text">
                    💬 צ'אט מיידי
                  </Button>
                  <Button variant="outline" className="hebrew-text">
                    📱 וואטסאפ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;