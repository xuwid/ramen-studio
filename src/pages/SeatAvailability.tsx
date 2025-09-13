import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StickyNote from "@/components/StickyNote";

const SeatAvailability = () => {
  // Mock seat data - in real app this would come from backend
  const [seats] = useState([
    { id: 1, available: true, position: "counter" },
    { id: 2, available: false, position: "counter" },
    { id: 3, available: true, position: "counter" },
    { id: 4, available: true, position: "counter" },
    { id: 5, available: false, position: "counter" },
    { id: 6, available: true, position: "counter" },
    { id: 7, available: true, position: "table" },
    { id: 8, available: false, position: "table" },
    { id: 9, available: true, position: "table" },
    { id: 10, available: true, position: "table" },
    { id: 11, available: true, position: "booth" },
    { id: 12, available: false, position: "booth" },
  ]);

  const availableSeats = seats.filter(seat => seat.available).length;
  const totalSeats = seats.length;

  return (
    <div className="min-h-screen py-8 sticky-wall">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 korean-text flex items-center justify-center gap-2">
            🐾 Seat Availability 🐾
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Check our cozy 12-seat layout! First come, first served - Korean style hospitality! 🇰🇷
          </p>
        </div>

        {/* Restaurant Info Block - Google Style */}
        <div className="mb-12 max-w-md mx-auto">
          <Card className="border-2 border-neon-pink/30 shadow-lg shadow-neon-pink/20">
            <CardHeader className="bg-gradient-to-r from-neon-pink/10 to-korean-blue/10">
              <CardTitle className="text-2xl korean-text text-center">Ramen Studio</CardTitle>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg font-bold">4.5</span>
                <div className="flex text-neon-orange">
                  {"★".repeat(4)}★
                </div>
                <span className="text-sm text-muted-foreground">(31 Google reviews)</span>
              </div>
              <p className="text-center text-sm">
                Rs 1,000–2,000 ‧ Korean restaurant
              </p>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div className="grid grid-cols-4 gap-2 text-xs font-semibold">
                <button className="text-korean-blue">Directions</button>
                <button className="text-korean-blue">Reviews</button>
                <button className="text-korean-blue">Save</button>
                <button className="text-korean-blue">Share</button>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Address:</span> M39G+GQ2, I-8 Markaz I 8 Markaz I-8, Islamabad</p>
                <p><span className="font-semibold">Phone:</span> 0301 5839369</p>
                <p className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-korean-green rounded-full"></span>
                  <span className="font-semibold text-korean-green">Open</span>
                  <span>⋅ Closes 12 am</span>
                </p>
                <p className="text-xs text-muted-foreground">Updated by others 7 weeks ago</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Status */}
        <div className="mb-8 text-center">
          <Card className="inline-block p-6 kawaii-shadow">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-3xl font-bold korean-text">{availableSeats}/{totalSeats}</p>
                <p className="text-sm text-muted-foreground">Seats Available</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <Badge 
                  variant={availableSeats > 6 ? "default" : availableSeats > 3 ? "secondary" : "destructive"}
                  className="text-sm"
                >
                  {availableSeats > 6 ? "🐾 Plenty of Space!" : 
                   availableSeats > 3 ? "🐾 Some Seats Left" : 
                   availableSeats > 0 ? "🐾 Almost Full!" : "🐾 Full House!"}
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Floating Notes */}
        <div className="relative mb-8">
          <div className="absolute top-0 left-4 hidden lg:block">
            <StickyNote color="pink" rotation={-5}>
              <p className="text-sm font-bold">Live updates! 📍</p>
            </StickyNote>
          </div>
          <div className="absolute top-0 right-4 hidden lg:block">
            <StickyNote color="blue" rotation={3}>
              <p className="text-sm font-bold">No reservations! 🎯</p>
            </StickyNote>
          </div>
        </div>

        {/* Seat Layout */}
        <section className="mb-16 mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 korean-text">Restaurant Layout</h2>
          
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-wood-light/20 to-wood-medium/10">
            <CardContent className="space-y-8">
              {/* Counter Seats */}
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  🐾 Counter Seats (Ramen Bar)
                </h3>
                <div className="flex justify-center gap-3 flex-wrap">
                  {seats.filter(seat => seat.position === "counter").map((seat) => (
                    <div
                      key={seat.id}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                        seat.available 
                          ? "bg-korean-green text-white border-korean-green shadow-lg shadow-korean-green/30" 
                          : "bg-neon-red text-white border-neon-red shadow-lg shadow-neon-red/30"
                      }`}
                    >
                      🐾
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-2">
                  Perfect for solo diners or couples!
                </p>
              </div>

              {/* Table Seats */}
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  🐾 Table Seats (2-Person Tables)
                </h3>
                <div className="flex justify-center gap-6">
                  {[seats.filter(seat => seat.position === "table").slice(0, 2), 
                    seats.filter(seat => seat.position === "table").slice(2, 4)].map((tablePair, tableIndex) => (
                    <div key={tableIndex} className="flex gap-3">
                      {tablePair.map((seat) => (
                        <div
                          key={seat.id}
                          className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                            seat.available 
                              ? "bg-korean-green text-white border-korean-green shadow-lg shadow-korean-green/30" 
                              : "bg-neon-red text-white border-neon-red shadow-lg shadow-neon-red/30"
                          }`}
                        >
                          🐾
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-2">
                  Great for friends and small groups!
                </p>
              </div>

              {/* Booth Seats */}
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  🐾 Cozy Booth (2 seats)
                </h3>
                <div className="flex justify-center gap-3">
                  {seats.filter(seat => seat.position === "booth").map((seat) => (
                    <div
                      key={seat.id}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                        seat.available 
                          ? "bg-korean-green text-white border-korean-green shadow-lg shadow-korean-green/30" 
                          : "bg-neon-red text-white border-neon-red shadow-lg shadow-neon-red/30"
                      }`}
                    >
                      🐾
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-2">
                  Most private spot in our cozy studio!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Legend */}
        <section className="mb-16">
          <Card className="max-w-md mx-auto p-6">
            <h3 className="text-lg font-bold text-center mb-4">Seat Status</h3>
            <div className="flex justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-korean-green rounded border-2 border-korean-green flex items-center justify-center text-white text-xs">
                  🐾
                </div>
                <span className="text-sm">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-neon-red rounded border-2 border-neon-red flex items-center justify-center text-white text-xs">
                  🐾
                </div>
                <span className="text-sm">Occupied</span>
              </div>
            </div>
          </Card>
        </section>

        {/* Info Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8 korean-text">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="bg-korean-pink/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚶‍♀️</span>
              </div>
              <h3 className="text-xl font-bold flex items-center justify-center gap-1">🐾 Walk In</h3>
              <p className="text-muted-foreground">No reservations needed - just come by!</p>
            </div>
            <div className="space-y-4">
              <div className="bg-korean-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">👀</span>
              </div>
              <h3 className="text-xl font-bold flex items-center justify-center gap-1">🐾 Check Seats</h3>
              <p className="text-muted-foreground">See what's available in real-time</p>
            </div>
            <div className="space-y-4">
              <div className="bg-korean-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🍜</span>
              </div>
              <h3 className="text-xl font-bold flex items-center justify-center gap-1">🐾 Enjoy</h3>
              <p className="text-muted-foreground">Create your perfect Korean ramen!</p>
            </div>
          </div>
          
          <div className="mt-8">
            <StickyNote color="yellow" className="inline-block">
              <p className="text-sm font-bold">First come, first served - Korean hospitality! 🇰🇷✨</p>
            </StickyNote>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SeatAvailability;