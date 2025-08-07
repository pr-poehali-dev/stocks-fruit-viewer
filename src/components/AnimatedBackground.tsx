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
      
      {/* Pirate ship floating */}
      <div className="absolute bottom-10 animate-bounce opacity-30">
        <div className="text-6xl">🚢</div>
      </div>
      
      {/* Floating islands */}
      <div className="absolute top-20 right-20 animate-pulse opacity-20">
        <div className="text-8xl">🏝️</div>
      </div>
      
      <div className="absolute top-40 left-20 animate-bounce opacity-20" style={{ animationDelay: '1s' }}>
        <div className="text-6xl">⛵</div>
      </div>
      
      {/* Sea waves effect */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-blue-900/20 to-transparent">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 20\"%3E%3Cpath d=\"M0 10c10-5 20-5 30 0s20 5 30 0 20-5 30 0 10 5 10 5v10H0z\" fill=\"%23ffffff\" fill-opacity=\"0.05\"/%3E%3C/svg%3E')] animate-pulse" />
      </div>
    </div>
  );
}