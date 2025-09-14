import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Utensils, Star } from "lucide-react";
import StickyNote from "@/components/StickyNote";
import koreanRamenCharacter from "@/assets/male_character.png";

const About = () => {
  return (
    <div className="min-h-screen py-8 sticky-wall">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 korean-text slide-up">
            �‍👩‍👧‍👦 About Ramen Studio 👨‍👩‍👧‍�
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
            Pick your ramen, cook it your way. We have limited seating (10–12 people only) for the ultimate Korean family dining experience! 환영합니다!
          </p>
        </div>

        {/* Main Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl font-bold korean-text">�‍🍳 Our Story 👨‍🍳</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ramen Studio was born from a simple idea: what if making ramen could be as fun and interactive as 
                Korean street food culture? We wanted to create a space where food becomes an art form, where every 
                customer is the chef of their own culinary adventure, guided by our Korean hospitality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Inspired by the vibrant K-wave culture and the communal spirit of Korean restaurants, we designed 
                a cozy space where creativity flourishes. With only 10-12 seats, every visit feels intimate and special 
                - like dining at a Korean family's house who happens to make incredible ramen! 우리 가족처럼 편하게!
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
            <div className="relative fade-in" style={{ animationDelay: '0.6s' }}>
              <Card className="korean-card relative overflow-hidden">
                <CardContent className="p-8">

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-korean-pink/20 p-3 rounded-full">
                        <Heart className="w-6 h-6 text-korean-pink" />
                      </div>
                      <div>
                        <h3 className="font-bold korean-text">Made with Love</h3>
                        <p className="text-sm text-muted-foreground">Every ingredient chosen with care</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-korean-peach/20 p-3 rounded-full">
                        <Users className="w-6 h-6 text-korean-peach" />
                      </div>
                      <div>
                        <h3 className="font-bold korean-text">Community Focused</h3>
                        <p className="text-sm text-muted-foreground">Building connections one bowl at a time</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-korean-green/20 p-3 rounded-full">
                        <Utensils className="w-6 h-6 text-korean-green" />
                      </div>
                      <div>
                        <h3 className="font-bold korean-text">DIY Experience</h3>
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
        <section className="mb-16 relative">
          <h2 className="text-3xl font-bold text-center mb-8 korean-text slide-up">The Korean Ramen Studios Experience</h2>
          {/* Korean character positioned to tell our story */}
          <div className="absolute -top-4 right-4 hidden lg:block">
            <img 
              src={koreanRamenCharacter} 
              alt="Korean character enjoying ramen" 
              className="w-28 opacity-40 hover:opacity-70 transition-all duration-500 hover:scale-105 filter grayscale hover:grayscale-0"
            />
            {/* Speech bubble */}
            <div className="absolute -bottom-2 -left-8 bg-korean-pink text-white text-xs px-2 py-1 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              환영합니다! ✨
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="korean-card fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <div className="bg-korean-pink/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👩‍🎨</span>
                </div>
                <h3 className="font-bold mb-2 korean-text">Creative Freedom</h3>
                <p className="text-sm text-muted-foreground">Design your perfect bowl with endless Korean combinations</p>
              </CardContent>
            </Card>

            <Card className="korean-card fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="bg-korean-peach/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="font-bold mb-2 korean-text">Family Atmosphere</h3>
                <p className="text-sm text-muted-foreground">Intimate Korean family setting that feels like home</p>
              </CardContent>
            </Card>

            <Card className="korean-card fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6 text-center">
                <div className="bg-korean-rose/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍�</span>
                </div>
                <h3 className="font-bold mb-2 korean-text">Expert Guidance</h3>
                <p className="text-sm text-muted-foreground">Korean chefs guide you through the perfect bowl</p>
              </CardContent>
            </Card>

            <Card className="korean-card fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6 text-center">
                <div className="bg-korean-green/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇰🇷</span>
                </div>
                <h3 className="font-bold mb-2 korean-text">Authentic Korean Vibes</h3>
                <p className="text-sm text-muted-foreground">Genuine Korean hospitality and aesthetics</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What Makes Us Special */}
        <section className="mb-16 bg-gradient-to-r from-korean-pink/5 via-korean-peach/5 to-korean-rose/5 rounded-2xl p-8 fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold text-center mb-8 korean-text">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2 korean-text">
                <Star className="w-5 h-5 text-korean-pink" />
                Limited Seating, Unlimited Fun
              </h3>
              <p className="text-muted-foreground">
                With only 10-12 seats, we ensure every guest gets personal attention and becomes part of our ramen family. 
                It's not just dining - it's an experience you'll remember!
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2 korean-text">
                <Star className="w-5 h-5 text-korean-rose" />
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
        <section className="text-center fade-in" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold mb-4 korean-text slide-up">Ready to Create Your Perfect Bowl?</h2>
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