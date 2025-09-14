import React, { useState, useEffect } from 'react';

interface StickyNote {
  id: number;
  text: string;
  color: string;
  position: { x: number; y: number };
  rotation: number;
  delay: number;
}

const KoreanStickyWall: React.FC = () => {
  const [notes, setNotes] = useState<StickyNote[]>([]);

  const stickyMessages = [
    { text: "🐾 Amazing ramen! 🍜", color: "pink" },
    { text: "🇰🇷 Korean vibes! ✨", color: "rose" },
    { text: "🐼 Love pandas! ❤️", color: "peach" },
    { text: "🍜 Best noodles ever!", color: "blue" },
    { text: "🥢 DIY ramen fun! 🎉", color: "green" },
    { text: "🌸 So cozy here! 💕", color: "yellow" },
    { text: "🎌 Kawaii desu! (◕‿◕)", color: "lavender" },
    { text: "🍥 Perfect broth! 😋", color: "pink" },
    { text: "🐾 Panda power! 💪", color: "rose" },
    { text: "🏮 Korean style! 🔥", color: "peach" },
    { text: "🍜 Ramen studio ⭐", color: "blue" },
    { text: "💖 Will come back!", color: "green" },
    { text: "🌈 Happy vibes! ✨", color: "yellow" },
    { text: "🥰 Cutest place ever!", color: "lavender" },
    { text: "🎊 Perfect date spot!", color: "pink" },
    { text: "🍳 Love cooking here! 👨‍🍳", color: "rose" },
    { text: "🌟 5 stars! ⭐⭐⭐⭐⭐", color: "peach" },
    { text: "🎈 Birthday celebration! 🎂", color: "blue" },
    { text: "🤗 Friendly staff! 💙", color: "green" },
    { text: "📸 Instagram worthy! 📷", color: "yellow" },
  ];

  useEffect(() => {
    const generateNotes = () => {
      const newNotes: StickyNote[] = [];
      const wallWidth = 300; // Width of the sticky wall area
      const wallHeight = 400; // Height of the sticky wall area
      const noteSize = 60; // Approximate size of each note
      
      stickyMessages.forEach((message, index) => {
        // Create a grid-like distribution with some randomness
        const cols = 4;
        const rows = Math.ceil(stickyMessages.length / cols);
        const col = index % cols;
        const row = Math.floor(index / cols);
        
        const baseX = (col * (wallWidth / cols)) + (Math.random() - 0.5) * 30;
        const baseY = (row * (wallHeight / rows)) + (Math.random() - 0.5) * 20;
        
        newNotes.push({
          id: index,
          text: message.text,
          color: message.color,
          position: {
            x: Math.max(0, Math.min(wallWidth - noteSize, baseX)),
            y: Math.max(0, Math.min(wallHeight - noteSize, baseY))
          },
          rotation: (Math.random() - 0.5) * 15, // Random rotation between -7.5 and 7.5 degrees
          delay: Math.random() * 2 // Random animation delay
        });
      });
      
      setNotes(newNotes);
    };

    generateNotes();
  }, []);

  const handleNoteClick = (noteId: number) => {
    // Add a little bounce animation on click
    setNotes(prevNotes => 
      prevNotes.map(note => 
        note.id === noteId 
          ? { ...note, rotation: note.rotation + (Math.random() - 0.5) * 10 }
          : note
      )
    );
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative w-full h-96 bg-gradient-to-br from-palette-rose-red/10 via-palette-columbia-blue/5 to-palette-red-violet/10 rounded-lg overflow-hidden">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`absolute cursor-pointer sticky-note ${note.color} shadow-lg`}
            style={{
              left: `${note.position.x}px`,
              top: `${note.position.y}px`,
              transform: `rotate(${note.rotation}deg)`,
              animationDelay: `${note.delay}s`,
            }}
            onClick={() => handleNoteClick(note.id)}
          >
            <div className="w-16 h-16 p-2 flex items-center justify-center text-xs font-medium text-center leading-tight">
              {note.text}
            </div>
          </div>
        ))}
        
        {/* Decorative Korean characters */}
        <div className="absolute top-2 right-2 text-palette-red-violet/30 text-2xl">
          한국
        </div>
        <div className="absolute bottom-4 left-4 text-palette-rose-red/30 text-lg">
          라면
        </div>
        <div className="absolute top-1/2 left-2 text-palette-columbia-blue/30 text-xl">
          🐾
        </div>
      </div>
      
      {/* Wall title */}
      <div className="text-center mt-4">
        <h3 className="palette-text text-lg font-bold">
          Customer Love Wall 💕
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Click the notes to interact! ✨
        </p>
      </div>
    </div>
  );
};

export default KoreanStickyWall;