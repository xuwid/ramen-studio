import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StickyNote from "@/components/StickyNote";

const Menu = () => {
  const ramenOptions = [
    {
      name: "Classic Tonkotsu",
      price: "$12.99",
      description: "Rich pork bone broth with chashu, green onions, and soft-boiled egg",
      spicyLevel: 1,
      popular: true,
    },
    {
      name: "Spicy Miso",
      price: "$13.99", 
      description: "Bold miso base with corn, butter, ground pork, and spicy sauce",
      spicyLevel: 3,
      popular: false,
    },
    {
      name: "Shoyu Delight",
      price: "$11.99",
      description: "Light soy-based broth with bamboo shoots, nori, and chicken",
      spicyLevel: 1,
      popular: false,
    },
    {
      name: "Vegetarian Paradise",
      price: "$12.49",
      description: "Vegetable broth with tofu, mushrooms, corn, and bean sprouts",
      spicyLevel: 1,
      popular: false,
    },
    {
      name: "Fire Dragon",
      price: "$14.99",
      description: "Extra spicy miso with beef, kimchi, and ghost pepper oil",
      spicyLevel: 5,
      popular: true,
    },
    {
      name: "Panda Special",
      price: "$15.99",
      description: "Our signature blend with premium toppings and black garlic oil",
      spicyLevel: 2,
      popular: true,
    },
  ];

  const toppings = [
    { name: "Extra Chashu", price: "$3.00" },
    { name: "Soft-Boiled Egg", price: "$2.00" },
    { name: "Corn", price: "$1.50" },
    { name: "Green Onions", price: "$1.00" },
    { name: "Nori Sheets", price: "$1.50" },
    { name: "Bamboo Shoots", price: "$2.00" },
    { name: "Bean Sprouts", price: "$1.50" },
    { name: "Butter", price: "$1.00" },
  ];

  const getSpicyIndicator = (level: number) => {
    return "🌶️".repeat(level);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 kawaii-text">Our Ramen Menu</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your base, add your toppings, and create the perfect bowl! All served with love and kawaii vibes. 🐼
          </p>
        </div>

        {/* Floating Menu Notes */}
        <div className="relative mb-8">
          <div className="absolute top-0 left-4 hidden lg:block">
            <StickyNote color="pink" rotation={-5}>
              <p className="text-sm font-bold">Made fresh daily! 🍜</p>
            </StickyNote>
          </div>
          <div className="absolute top-0 right-4 hidden lg:block">
            <StickyNote color="blue" rotation={3}>
              <p className="text-sm font-bold">DIY = More fun! 🎉</p>
            </StickyNote>
          </div>
        </div>

        {/* Ramen Options */}
        <section className="mb-16 mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 kawaii-text">Ramen Base Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ramenOptions.map((ramen, index) => (
              <Card key={index} className="kawaii-shadow hover:scale-105 transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{ramen.name}</CardTitle>
                    <div className="flex flex-col items-end gap-1">
                      {ramen.popular && (
                        <Badge variant="destructive" className="text-xs">
                          Popular! ⭐
                        </Badge>
                      )}
                      <span className="text-2xl font-bold text-primary">{ramen.price}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-muted-foreground mb-3">{ramen.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold">Spicy Level:</span>
                    <span className="text-lg">{getSpicyIndicator(ramen.spicyLevel)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Toppings Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 kawaii-text">Extra Toppings</h2>
          <div className="bg-wood-light/30 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {toppings.map((topping, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300 kawaii-shadow"
                >
                  <h3 className="font-semibold text-sm mb-1">{topping.name}</h3>
                  <p className="text-primary font-bold">{topping.price}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <StickyNote color="yellow" className="inline-block">
                <p className="text-sm font-bold">Mix and match for your perfect bowl! 🥢</p>
              </StickyNote>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8 kawaii-text">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-xl font-bold">Choose Your Base</h3>
              <p className="text-muted-foreground">Pick from our delicious ramen options</p>
            </div>
            <div className="space-y-4">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold">Add Toppings</h3>
              <p className="text-muted-foreground">Customize with your favorite extras</p>
            </div>
            <div className="space-y-4">
              <div className="bg-kawaii-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-kawaii-green">3</span>
              </div>
              <h3 className="text-xl font-bold">Cook & Enjoy</h3>
              <p className="text-muted-foreground">Create your masterpiece and dig in!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;