import { useEffect, useState } from 'react';

interface FloatingFruit {
  id: number;
  x: number;
  y: number;
  emoji: string;
  speed: number;
  size: number;
}

export default function AnimatedBackground() {
  const [fruits, setFruits] = useState<FloatingFruit[]>([]);

  useEffect(() => {
    const fruitEmojis = ['🍎', '🍊', '🍇', '🥥', '🍈', '🍉', '🍑', '🍌', '🫐', '🥭'];
    
    const initialFruits: FloatingFruit[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      emoji: fruitEmojis[Math.floor(Math.random() * fruitEmojis.length)],
      speed: 0.2 + Math.random() * 0.8,
      size: 20 + Math.random() * 30
    }));

    setFruits(initialFruits);

    const animateFruits = () => {
      setFruits(prevFruits => 
        prevFruits.map(fruit => ({
          ...fruit,
          y: fruit.y - fruit.speed,
          x: fruit.x + Math.sin(fruit.y * 0.01) * 0.5,
          // Reset position when fruit goes off screen
          ...(fruit.y < -50 ? {
            y: window.innerHeight + 50,
            x: Math.random() * window.innerWidth
          } : {})
        }))
      );
    };

    const interval = setInterval(animateFruits, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* One Piece Background Images */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/img/e1d54faa-d9cb-442a-9adf-eb299330c2a9.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Floating islands overlay */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-1/2 opacity-15 animate-pulse"
        style={{
          backgroundImage: 'url(/img/8c3a98cc-429b-4f1e-934b-bf2943d19a6d.jpg)',
          backgroundSize: 'contain',
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {fruits.map((fruit) => (
        <div
          key={fruit.id}
          className="absolute transition-transform duration-75 ease-linear opacity-20 hover:opacity-40"
          style={{
            left: `${fruit.x}px`,
            top: `${fruit.y}px`,
            fontSize: `${fruit.size}px`,
            transform: `rotate(${fruit.y * 0.1}deg)`,
          }}
        >
          {fruit.emoji}
        </div>
      ))}
      
      {/* Animated elements */}
      <div className="absolute bottom-20 left-10 animate-bounce opacity-20" style={{ animationDelay: '0.5s' }}>
        <div className="text-4xl">🚢</div>
      </div>
      
      <div className="absolute top-1/3 right-10 animate-pulse opacity-25">
        <div className="text-5xl">🏝️</div>
      </div>
      
      <div className="absolute bottom-32 right-1/4 animate-bounce opacity-15" style={{ animationDelay: '2s' }}>
        <div className="text-6xl">⛵</div>
      </div>
      
      {/* Sea waves effect */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-blue-900/20 to-transparent">
        <div className="absolute inset-0 animate-pulse opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10c10-5 20-5 30 0s20 5 30 0 20-5 30 0s10 5 10 5v10H0z" fill="#ffffff" fillOpacity="0.1"/>
          </svg>
        </div>
      </div>
    </div>
  );
}