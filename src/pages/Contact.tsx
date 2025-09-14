import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Users, Heart } from "lucide-react";
import StickyNote from "@/components/StickyNote";
import koreanRamenCharacter from "@/assets/male_character.png";

const Contact = () => {
  return (
    <div className="min-h-screen py-8 sticky-wall">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 palette-text slide-up">
            �‍💼 Visit Ramen Studio �‍💼
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
            M39G+GQ2, I-8 Markaz I-8, Islamabad | Limited seats, unlimited Korean hospitality from our amazing team! 🇰🇷🍜 언제든지 오세요!
          </p>
        </div>

        {/* Main Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 relative">
          {/* Korean character welcoming visitors */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 hidden lg:block z-10">
            <img 
              src={koreanRamenCharacter} 
              alt="Korean character welcoming visitors" 
              className="w-24 opacity-50 hover:opacity-80 transition-all duration-400 hover:scale-110"
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-palette-rose-red text-white text-xs px-3 py-1 rounded-full whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300">
              Come visit us! 🍜
            </div>
          </div>
          {/* Contact Details */}
          <div className="space-y-6 fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="palette-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 palette-text">
                  <MapPin className="w-5 h-5 text-palette-red-violet" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">M39G+GQ2, I-8 Markaz</p>
                <p className="text-muted-foreground">I 8 Markaz I-8, Islamabad</p>
                <p className="text-sm text-muted-foreground">
                  Located in the heart of I-8 Markaz, easy to find with our neon paw print signs!
                </p>
              </CardContent>
            </Card>

            <Card className="palette-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 palette-text">
                  <Clock className="w-5 h-5 text-palette-columbia-blue" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Monday - Friday</p>
                    <p className="text-muted-foreground">11:00 AM - 9:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold">Saturday - Sunday</p>
                    <p className="text-muted-foreground">10:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-palette-columbia-blue/10 rounded-lg">
                  <p className="text-sm font-semibold text-korean-peach">
                    Last orders 30 minutes before closing!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="palette-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 palette-text">
                  <Phone className="w-5 h-5 text-palette-slate-gray" />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">0301 5839369</p>
                <p className="text-muted-foreground">hello@ramenstudio.pk</p>
                <p className="text-sm text-muted-foreground">
                  Follow us @ramenstudio for daily Korean food updates! Our team shares behind-the-scenes content! 📸🇰🇷👩‍🍳👨‍🍳
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder & Important Info */}
          <div className="space-y-6 fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="palette-card">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-palette-red-violet/20 to-palette-columbia-blue/20 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-korean-pink mx-auto mb-4" />
                    <p className="text-lg font-semibold korean-text">Interactive Map</p>
                    <p className="text-muted-foreground">Coming Soon!</p>
                    <Button variant="outline" size="sm" className="mt-4">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="palette-card border-palette-rose-red/20">
              <CardHeader className="bg-gradient-to-r from-palette-red-violet/10 to-palette-columbia-blue/10">
                <CardTitle className="flex items-center gap-2 palette-text">
                  <Users className="w-5 h-5 text-palette-rose-red" />
                  Important Info
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-korean-pink mt-0.5" />
                  <div>
                    <p className="font-semibold korean-text">Limited Seating 👥</p>
                    <p className="text-sm text-muted-foreground">
                      We can accommodate 10-12 people at a time for the coziest Korean family experience!
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-korean-peach mt-0.5" />
                  <div>
                    <p className="font-semibold korean-text">First Come, First Served 👨‍💼</p>
                    <p className="text-sm text-muted-foreground">
                      No reservations needed - our staff welcomes you when you're craving Korean ramen!
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-korean-rose mt-0.5" />
                  <div>
                    <p className="font-semibold korean-text">Takeout Available 👩‍🍳</p>
                    <p className="text-sm text-muted-foreground">
                      Can't stay? Our team will pack your creation to-go with extra Korean love!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sticky Notes Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 korean-text slide-up">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StickyNote color="pink" rotation={-3} className="text-center">
              <p className="text-sm font-bold mb-2">"Best ramen ever!"</p>
              <p className="text-xs">- Sarah K. ⭐⭐⭐⭐⭐</p>
            </StickyNote>
            
            <StickyNote color="blue" rotation={2} className="text-center">
              <p className="text-sm font-bold mb-2">"So cute and cozy! 🐼"</p>
              <p className="text-xs">- Mike T. ⭐⭐⭐⭐⭐</p>
            </StickyNote>
            
            <StickyNote color="green" rotation={-1} className="text-center">
              <p className="text-sm font-bold mb-2">"Love the DIY concept!"</p>
              <p className="text-xs">- Emma L. ⭐⭐⭐⭐⭐</p>
            </StickyNote>
            
            <StickyNote color="yellow" rotation={3} className="text-center">
              <p className="text-sm font-bold mb-2">"My happy place! 💕"</p>
              <p className="text-xs">- Alex R. ⭐⭐⭐⭐⭐</p>
            </StickyNote>
          </div>
        </section>

        {/* Getting Here Section */}
        <section className="text-center bg-gradient-to-r from-korean-pink/5 via-korean-peach/5 to-korean-rose/5 rounded-2xl p-8 fade-in" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold mb-6 korean-text">Getting Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 fade-in" style={{ animationDelay: '1s' }}>
              <div className="bg-korean-pink/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="font-bold korean-text">By Car</h3>
              <p className="text-sm text-muted-foreground">
                Free street parking available! Look for the giant panda sign - you can't miss us!
              </p>
            </div>
            
            <div className="space-y-3 fade-in" style={{ animationDelay: '1.1s' }}>
              <div className="bg-korean-peach/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <span className="text-2xl">🚇</span>
              </div>
              <h3 className="font-bold korean-text">By Transit</h3>
              <p className="text-sm text-muted-foreground">
                Take the Red Line to Arts District Station - we're just a 2-minute walk away!
              </p>
            </div>
            
            <div className="space-y-3 fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="bg-korean-rose/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <span className="text-2xl">🚶‍♀️</span>
              </div>
              <h3 className="font-bold korean-text">On Foot</h3>
              <p className="text-sm text-muted-foreground">
                Perfect for a leisurely stroll! Located in the pedestrian-friendly arts district.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <StickyNote color="pink" className="inline-block">
              <p className="text-sm font-bold">Can't wait to see you! 🎉✨</p>
            </StickyNote>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;