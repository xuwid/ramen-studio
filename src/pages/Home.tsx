import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StickyNote from "@/components/StickyNote";
import KoreanStickyWall from "@/components/KoreanStickyWall";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Clock } from "lucide-react";
import heroPandaRamen from "@/assets/hero-panda-ramen.jpg";

const Home = () => {
  return (
    <div className="min-h-screen korean-atmosphere">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center sticky-wall"
        style={{
          backgroundImage: `url(${heroPandaRamen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-korean-orange/10 to-background/85" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 slide-up mt-40">
          
          <div className="flex flex-col sm:flex-row gap-20 justify-center fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild variant="kawaii" size="lg" className="hover:scale-105 transition-transform duration-150 ease-out cursor-pointer group">
              <Link to="/menu" className="flex items-center gap-2">
                <span className="text-lg">🍜</span>
                <span>View Menu</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="neon" size="lg" className="hover:scale-105 transition-transform duration-150 ease-out cursor-pointer group">
              <Link to="/contact" className="flex items-center gap-2">
                <span className="text-lg">📍</span>
                <span>Visit Us</span>
                <span className="ml-2 group-hover:animate-bounce">🏠</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating Sticky Notes */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <StickyNote color="pink" rotation={-5} special={true}>
            <p className="text-sm font-bold">�‍🍳 Korean vibes! 🇰🇷</p>
          </StickyNote>
        </div>
        <div className="absolute top-32 right-16 hidden lg:block">
          <StickyNote color="blue" rotation={3} special={true}>
            <p className="text-sm font-bold">🧑‍🍳 Best ramen! 🍜</p>
          </StickyNote>
        </div>
        <div className="absolute bottom-32 left-20 hidden lg:block">
          <StickyNote color="green" rotation={-3} special={true}>
            <p className="text-sm font-bold">👨‍� Love this place! ❤️</p>
          </StickyNote>
        </div>


      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-background via-korean-orange/5 to-korean-peach/20 sticky-wall">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 korean-text slide-up">
            🐾 Why Ramen Studio? 🐾
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="korean-card fade-in relative overflow-hidden" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-korean-rose/20 p-4 rounded-full">
                    <Users className="w-8 h-8 text-korean-rose" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 korean-text">
                  Cozy & Intimate 👨‍👩‍👧‍👦💕
                </h3>
                <p className="text-muted-foreground">
                  Limited seating for 10-12 people creates a warm, Korean family-like atmosphere where every guest feels special.
                </p>

              </CardContent>
            </Card>

            <Card className="korean-card fade-in relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-korean-peach/20 p-4 rounded-full">
                    <Star className="w-8 h-8 text-korean-peach" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 korean-text">
                  DIY Experience 👩‍🍳🥢
                </h3>
                <p className="text-muted-foreground">
                  Cook your own ramen exactly how you like it! Our Korean chefs guide you to create your perfect bowl.
                </p>

              </CardContent>
            </Card>

            <Card className="korean-card fade-in relative overflow-hidden" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-korean-green/20 p-4 rounded-full">
                    <Clock className="w-8 h-8 text-korean-green" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 korean-text">
                  Fresh & Fast 🧑‍🍳🍜
                </h3>
                <p className="text-muted-foreground">
                  Premium ingredients, authentic flavors, and the joy of creating your perfect bowl in minutes.
                </p>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Korean Sticky Wall Section */}
      <section className="py-16 bg-gradient-to-br from-korean-orange/5 via-korean-peach/3 to-korean-rose/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 korean-text slide-up">
            한국 Customer Love Wall 💕
          </h2>
          <p className="text-lg text-muted-foreground mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
            See what our amazing customers are saying! ✨
          </p>
          <div className="fade-in" style={{ animationDelay: '0.4s' }}>
            <KoreanStickyWall />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sticky-wall relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-korean-orange/5 to-background/70"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 korean-text slide-up">
            🐾 Ready for Your Korean Ramen Adventure? 🐾
          </h2>
          <p className="text-xl text-korean-rose mb-8 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
            Come create memories, one delicious bowl at a time. Limited seats available - first come, first served! ✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild variant="kawaii" size="lg" className="hover:scale-105 transition-transform duration-150 ease-out">
              <Link to="/menu">
                Check Out Our Menu 🍜
              </Link>
            </Button>
            <Button asChild variant="wood" size="lg" className="hover:scale-105 transition-transform duration-150 ease-out">
              <Link to="/about">
                Learn More 💕
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;