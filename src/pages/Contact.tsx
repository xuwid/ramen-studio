import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Users, Heart } from "lucide-react";
import StickyNote from "@/components/StickyNote";

const Contact = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 kawaii-text">Visit Ramen Studios</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Come find us in our cozy little corner of the world! Limited seats, unlimited fun. 🐼🍜
          </p>
        </div>

        {/* Main Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Details */}
          <div className="space-y-6">
            <Card className="kawaii-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">123 Kawaii Street</p>
                <p className="text-muted-foreground">Ramen District, RD 12345</p>
                <p className="text-sm text-muted-foreground">
                  Located in the heart of the arts district, next to the cute cat café!
                </p>
              </CardContent>
            </Card>

            <Card className="kawaii-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
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
                <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm font-semibold text-accent">
                    Last orders 30 minutes before closing!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="kawaii-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-kawaii-green" />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">(555) RAMEN-UP</p>
                <p className="text-muted-foreground">hello@ramenstudios.com</p>
                <p className="text-sm text-muted-foreground">
                  Follow us @ramenstudios for daily kawaii updates! 📸
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder & Important Info */}
          <div className="space-y-6">
            <Card className="kawaii-shadow">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold">Interactive Map</p>
                    <p className="text-muted-foreground">Coming Soon!</p>
                    <Button variant="kawaii" size="sm" className="mt-4">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="kawaii-shadow border-accent/20">
              <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  Important Info
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold">Limited Seating</p>
                    <p className="text-sm text-muted-foreground">
                      We can accommodate 10-12 people at a time for the coziest experience!
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold">First Come, First Served</p>
                    <p className="text-sm text-muted-foreground">
                      No reservations needed - just drop by when you're craving kawaii ramen!
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold">Takeout Available</p>
                    <p className="text-sm text-muted-foreground">
                      Can't stay? We'll pack your creation to-go with extra kawaii packaging!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sticky Notes Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 kawaii-text">What Our Guests Say</h2>
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
        <section className="text-center bg-gradient-to-r from-accent/5 via-primary/5 to-kawaii-purple/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 kawaii-text">Getting Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="bg-sticky-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="font-bold">By Car</h3>
              <p className="text-sm text-muted-foreground">
                Free street parking available! Look for the giant panda sign - you can't miss us!
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-sticky-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <span className="text-2xl">🚇</span>
              </div>
              <h3 className="font-bold">By Transit</h3>
              <p className="text-sm text-muted-foreground">
                Take the Red Line to Arts District Station - we're just a 2-minute walk away!
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-sticky-green rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <span className="text-2xl">🚶‍♀️</span>
              </div>
              <h3 className="font-bold">On Foot</h3>
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