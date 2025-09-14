import React from 'react';

interface AnimatedKoreanCharProps {
  character: string;
  size?: 'sm' | 'md' | 'lg';
  animation?: 'float' | 'sparkle' | 'bounce' | 'pulse';
  delay?: number;
  className?: string;
}

const AnimatedKoreanChar: React.FC<AnimatedKoreanCharProps> = ({
  character,
  size = 'md',
  animation = 'float',
  delay = 0,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  const animationClasses = {
    float: 'animate-gentle-float',
    sparkle: '', // Removed heavy sparkle animation
    bounce: '', // Removed heavy bounce animation
    pulse: ''   // Removed heavy pulse animation
  };

  return (
    <span
      className={`
        inline-block 
        ${sizeClasses[size]} 
        ${animationClasses[animation]}
        text-korean-pink/70
        select-none
        ${className}
      `}
      style={{ animationDelay: `${delay}s` }}
    >
      {character}
    </span>
  );
};

// Pre-defined Korean characters and emojis for easy use
export const KoreanChars = {
  // Korean text
  korean: '한국', // Korea
  ramen: '라면', // Ramen
  delicious: '맛있어요', // Delicious
  cute: '귀여워', // Cute
  love: '사랑해', // Love
  // Emojis
  panda: '🐾',
  ramenBowl: '🍜',
  chopsticks: '🥢',
  heart: '💕',
  sparkles: '✨',
  lantern: '🏮',
  cherry: '🌸',
  flag: '🇰🇷'
};

export default AnimatedKoreanChar;