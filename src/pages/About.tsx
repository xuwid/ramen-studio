import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Utensils, Star } from "lucide-react";
import StickyNote from "@/components/StickyNote";

const About = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 kawaii-text">About Ramen Studios</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where kawaii meets comfort food, and every bowl tells a story of creativity, community, and deliciousness!
          </p>
        </div>

        {/* Main Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold kawaii-text">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ramen Studios was born from a simple idea: what if making ramen could be as fun and creative as the 
                anime we love? We wanted to create a space where food becomes an art form, where every customer is 
                the chef of their own culinary adventure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Inspired by the vibrant kawaii culture and the communal spirit of Japanese ramen shops, we designed 
                a cozy space where creativity flourishes. With only 10-12 seats, every visit feels intimate and special 
                - like dining at a friend's house who happens to make incredible ramen!
              </p>
              <div className="flex flex-wrap gap-4">
                <StickyNote color="pink" rotation={-2}>
                  <p className="text-sm font-bold">Since 2023! 🎉</p>
                </StickyNote>
                <StickyNote color="blue" rotation={1}>
                  <p className="text-sm font-bold">100% love made 💕</p>
                </StickyNote>
              </div>
            </div>
            <div className="relative">
              <Card className="kawaii-shadow">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-accent/20 p-3 rounded-full">
                        <Heart className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold">Made with Love</h3>
                        <p className="text-sm text-muted-foreground">Every ingredient chosen with care</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Community Focused</h3>
                        <p className="text-sm text-muted-foreground">Building connections one bowl at a time</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-kawaii-green/20 p-3 rounded-full">
                        <Utensils className="w-6 h-6 text-kawaii-green" />
                      </div>
                      <div>
                        <h3 className="font-bold">DIY Experience</h3>
                        <p className="text-sm text-muted-foreground">You're the chef of your own adventure</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 kawaii-text">The Ramen Studios Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="kawaii-shadow hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-sticky-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-bold mb-2">Creative Freedom</h3>
                <p className="text-sm text-muted-foreground">Design your perfect bowl with endless combinations</p>
              </CardContent>
            </Card>

            <Card className="kawaii-shadow hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-sticky-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="font-bold mb-2">Cozy Atmosphere</h3>
                <p className="text-sm text-muted-foreground">Intimate setting that feels like home</p>
              </CardContent>
            </Card>

            <Card className="kawaii-shadow hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-sticky-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍜</span>
                </div>
                <h3 className="font-bold mb-2">Fresh Ingredients</h3>
                <p className="text-sm text-muted-foreground">Premium quality in every single bowl</p>
              </CardContent>
            </Card>

            <Card className="kawaii-shadow hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-sticky-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-bold mb-2">Kawaii Vibes</h3>
                <p className="text-sm text-muted-foreground">Cute aesthetics that spark joy</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What Makes Us Special */}
        <section className="mb-16 bg-gradient-to-r from-accent/5 via-primary/5 to-kawaii-purple/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 kawaii-text">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                Limited Seating, Unlimited Fun
              </h3>
              <p className="text-muted-foreground">
                With only 10-12 seats, we ensure every guest gets personal attention and becomes part of our ramen family. 
                It's not just dining - it's an experience you'll remember!
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                Interactive Wall of Love
              </h3>
              <p className="text-muted-foreground">
                Our colorful sticky note wall captures memories, drawings, and messages from every guest. Add your own 
                note and become part of our ever-growing story!
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <StickyNote color="pink" className="inline-block">
              <p className="text-sm font-bold">Leave your mark on our wall! 📝💕</p>
            </StickyNote>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 kawaii-text">Ready to Create Your Perfect Bowl?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our ramen family and discover why everyone's talking about Ramen Studios!
          </p>
          <div className="flex justify-center gap-4">
            <StickyNote color="green" rotation={-2}>
              <p className="text-sm font-bold">Can't wait to meet you! 🐼</p>
            </StickyNote>
            <StickyNote color="yellow" rotation={2}>
              <p className="text-sm font-bold">Bringing smiles since day one! 😊</p>
            </StickyNote>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;