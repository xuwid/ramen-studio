import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StickyNote from "@/components/StickyNote";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Clock } from "lucide-react";
import heroPandaRamen from "@/assets/hero-panda-ramen.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/90 to-accent/10"
        style={{
          backgroundImage: `url(${heroPandaRamen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-transparent" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 kawaii-text">
            Ramen Studios
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Make your own ramen experience! Cozy vibes, kawaii atmosphere, and the most delicious DIY ramen adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="kawaii" size="lg">
              <Link to="/menu">
                View Menu <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="neon" size="lg">
              <Link to="/contact">
                Visit Us
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating Sticky Notes */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <StickyNote color="pink" rotation={-5} className="animate-float">
            <p className="text-sm font-bold">So kawaii! 🐼</p>
          </StickyNote>
        </div>
        <div className="absolute top-32 right-16 hidden lg:block">
          <StickyNote color="blue" rotation={3} className="animate-float" style={{animationDelay: '1s'}}>
            <p className="text-sm font-bold">Best ramen! 🍜</p>
          </StickyNote>
        </div>
        <div className="absolute bottom-32 left-20 hidden lg:block">
          <StickyNote color="green" rotation={-3} className="animate-float" style={{animationDelay: '2s'}}>
            <p className="text-sm font-bold">Love this place! ❤️</p>
          </StickyNote>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-background to-wood-light/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 kawaii-text">
            Why Ramen Studios?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="kawaii-shadow hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-accent/20 p-4 rounded-full">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Cozy & Intimate</h3>
                <p className="text-muted-foreground">
                  Limited seating for 10-12 people creates a warm, family-like atmosphere where every guest feels special.
                </p>
              </CardContent>
            </Card>

            <Card className="kawaii-shadow hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-primary/20 p-4 rounded-full">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">DIY Experience</h3>
                <p className="text-muted-foreground">
                  Cook your own ramen exactly how you like it! Choose your toppings, control the flavor, make it yours.
                </p>
              </CardContent>
            </Card>

            <Card className="kawaii-shadow hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-kawaii-green/20 p-4 rounded-full">
                    <Clock className="w-8 h-8 text-kawaii-green" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Fresh & Fast</h3>
                <p className="text-muted-foreground">
                  Premium ingredients, authentic flavors, and the joy of creating your perfect bowl in minutes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 via-primary/10 to-kawaii-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 kawaii-text">
            Ready for Your Ramen Adventure?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Come create memories, one delicious bowl at a time. Limited seats available - first come, first served!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="kawaii" size="lg">
              <Link to="/menu">
                Check Out Our Menu
              </Link>
            </Button>
            <Button asChild variant="wood" size="lg">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;