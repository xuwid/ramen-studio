import React from 'react';
import { cn } from "@/lib/utils";

interface KoreanCharacterProps {
  type: 'chef' | 'customer' | 'family' | 'couple' | 'child';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  position?: 'left' | 'center' | 'right';
  className?: string;
}

const KoreanCharacter: React.FC<KoreanCharacterProps> = ({
  type,
  size = 'md',
  position = 'center',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-16 h-20',
    md: 'w-20 h-24',
    lg: 'w-24 h-32',
    xl: 'w-32 h-40'
  };

  const positionClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  };

  const getCharacterPath = () => {
    switch (type) {
      case 'chef':
        return (
          <g>
            {/* Chef Hat */}
            <ellipse cx="50" cy="25" rx="25" ry="15" fill="white" opacity="0.9"/>
            <rect x="30" y="25" width="40" height="8" rx="4" fill="white" opacity="0.9"/>
            {/* Head */}
            <circle cx="50" cy="45" r="18" fill="hsl(var(--korean-pink))" opacity="0.8"/>
            {/* Body */}
            <rect x="35" y="58" width="30" height="35" rx="8" fill="hsl(var(--korean-rose))" opacity="0.7"/>
            {/* Arms */}
            <ellipse cx="25" cy="70" rx="8" ry="12" fill="hsl(var(--korean-rose))" opacity="0.7"/>
            <ellipse cx="75" cy="70" rx="8" ry="12" fill="hsl(var(--korean-rose))" opacity="0.7"/>
            {/* Apron */}
            <rect x="38" y="65" width="24" height="25" rx="4" fill="white" opacity="0.6"/>
          </g>
        );
      case 'customer':
        return (
          <g>
            {/* Head */}
            <circle cx="50" cy="35" r="16" fill="hsl(var(--korean-pink))" opacity="0.8"/>
            {/* Body */}
            <rect x="37" y="48" width="26" height="30" rx="6" fill="hsl(var(--korean-rose))" opacity="0.7"/>
            {/* Arms */}
            <ellipse cx="28" cy="60" rx="6" ry="10" fill="hsl(var(--korean-rose))" opacity="0.7"/>
            <ellipse cx="72" cy="60" rx="6" ry="10" fill="hsl(var(--korean-rose))" opacity="0.7"/>
            {/* Legs */}
            <rect x="42" y="75" width="6" height="15" rx="3" fill="hsl(var(--korean-peach))" opacity="0.7"/>
            <rect x="52" y="75" width="6" height="15" rx="3" fill="hsl(var(--korean-peach))" opacity="0.7"/>
          </g>
        );
      case 'family':
        return (
          <g>
            {/* Adult 1 */}
            <circle cx="35" cy="30" r="14" fill="hsl(var(--korean-pink))" opacity="0.8"/>
            <rect x="24" y="42" width="22" height="25" rx="5" fill="hsl(var(--korean-rose))" opacity="0.7"/>
            {/* Adult 2 */}
            <circle cx="65" cy="32" r="13" fill="hsl(var(--korean-pink))" opacity="0.8"/>
            <rect x="55" y="43" width="20" height="23" rx="5" fill="hsl(var(--neon-pink))" opacity="0.7"/>
            {/* Child */}
            <circle cx="50" cy="55" r="10" fill="hsl(var(--korean-peach))" opacity="0.8"/>
            <rect x="43" y="63" width="14" height="18" rx="4" fill="hsl(var(--korean-peach))" opacity="0.7"/>
          </g>
        );
      case 'couple':
        return (
          <g>
            {/* Person 1 */}
            <circle cx="40" cy="30" r="15" fill="hsl(var(--korean-pink))" opacity="0.8"/>
            <rect x="28" y="42" width="24" height="28" rx="6" fill="hsl(var(--korean-rose))" opacity="0.7"/>
            {/* Person 2 */}
            <circle cx="60" cy="32" r="14" fill="hsl(var(--korean-pink))" opacity="0.8"/>
            <rect x="49" y="44" width="22" height="26" rx="5" fill="hsl(var(--neon-pink))" opacity="0.7"/>
            {/* Heart between them */}
            <path d="M50 45 C48 42, 44 42, 44 46 C44 42, 40 42, 38 45 C40 48, 44 52, 50 56 C56 52, 60 48, 62 45 C60 42, 56 42, 56 46 C56 42, 52 42, 50 45 Z" fill="hsl(var(--korean-rose))" opacity="0.6"/>
          </g>
        );
      case 'child':
        return (
          <g>
            {/* Head */}
            <circle cx="50" cy="40" r="18" fill="hsl(var(--korean-peach))" opacity="0.8"/>
            {/* Body */}
            <rect x="38" y="55" width="24" height="25" rx="6" fill="hsl(var(--korean-peach))" opacity="0.7"/>
            {/* Arms */}
            <ellipse cx="30" cy="65" rx="6" ry="8" fill="hsl(var(--korean-peach))" opacity="0.7"/>
            <ellipse cx="70" cy="65" rx="6" ry="8" fill="hsl(var(--korean-peach))" opacity="0.7"/>
            {/* Legs */}
            <rect x="43" y="77" width="5" height="12" rx="2.5" fill="hsl(var(--korean-pink))" opacity="0.7"/>
            <rect x="52" y="77" width="5" height="12" rx="2.5" fill="hsl(var(--korean-pink))" opacity="0.7"/>
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <div className={cn(
      "flex items-end korean-character",
      sizeClasses[size],
      positionClasses[position],
      className
    )}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-sm"
        style={{
          filter: 'drop-shadow(2px 2px 4px hsl(var(--korean-pink) / 0.3))'
        }}
      >
        {getCharacterPath()}
      </svg>
    </div>
  );
};

export default KoreanCharacter;