import { useState, useEffect } from 'react';

interface MirageStock {
  id: number;
  name: string;
  rarity: string;
  stock: number;
  chance: string;
  timer: string;
}

export function useMirageTimer() {
  const [mirageStock, setMirageStock] = useState<MirageStock[]>([
    {
      id: 1,
      name: "Kitsune",
      rarity: "mythical",
      stock: 1,
      chance: "0.75%",
      timer: "2h 00m"
    },
    {
      id: 2,
      name: "T-Rex",
      rarity: "mythical", 
      stock: 0,
      chance: "0.5%",
      timer: "Out of stock"
    },
    {
      id: 3,
      name: "Leopard",
      rarity: "mythical",
      stock: 2,
      chance: "0.6%",
      timer: "1h 30m"
    },
    {
      id: 4,
      name: "Dragon",
      rarity: "mythical",
      stock: 3,
      chance: "0.35%",
      timer: "45m"
    },
    {
      id: 5,
      name: "Spirit",
      rarity: "mythical",
      stock: 1,
      chance: "0.4%", 
      timer: "3h 00m"
    },
    {
      id: 6,
      name: "Control",
      rarity: "mythical",
      stock: 4,
      chance: "0.45%",
      timer: "1h 45m"
    },
    {
      id: 7,
      name: "Phoenix",
      rarity: "legendary",
      stock: 8,
      chance: "1.3%",
      timer: "30m"
    },
    {
      id: 8,
      name: "Buddha",
      rarity: "legendary",
      stock: 12,
      chance: "5.7%",
      timer: "15m"
    },
    {
      id: 9,
      name: "Portal",
      rarity: "legendary",
      stock: 6,
      chance: "2.1%",
      timer: "1h 00m"
    },
    {
      id: 10,
      name: "Magma",
      rarity: "legendary",
      stock: 25,
      chance: "7.8%",
      timer: "10m"
    }
  ]);

  // Simulate mirage stock updates every 2 hours
  useEffect(() => {
    const updateMirage = () => {
      setMirageStock(prevStock => 
        prevStock.map(fruit => ({
          ...fruit,
          stock: Math.floor(Math.random() * (fruit.rarity === 'mythical' ? 5 : 15)),
          timer: fruit.stock === 0 ? 'Out of stock' : 
                 `${Math.floor(Math.random() * 3)}h ${Math.floor(Math.random() * 59)}m`
        }))
      );
    };

    // Update every 2 hours (7200000 ms)
    const interval = setInterval(updateMirage, 7200000);
    
    return () => clearInterval(interval);
  }, []);

  return mirageStock;
}