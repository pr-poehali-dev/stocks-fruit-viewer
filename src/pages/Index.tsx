import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import TradeChat from '@/components/TradeChat';
import VipUpgrade from '@/components/VipUpgrade';
import AdminPanel from '@/components/AdminPanel';
import Settings from '@/components/Settings';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Index() {
  const [isVip, setIsVip] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true); // Only you are admin
  const [showChat, setShowChat] = useState(false);
  const [showVipUpgrade, setShowVipUpgrade] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const currentUser = 'Admin_Yurik';
  // Stock items data
  const stockItems = [
    // Mythical Fruits
    { 
      id: 1, 
      name: 'Dragon Fruit', 
      type: 'Mythical', 
      price: '3.5M', 
      image: '/img/37420f48-2bc1-4e11-a094-8f40dfc6152e.jpg',
      rarity: 'mythical',
      description: 'Невероятная сила древнего дракона'
    },
    { 
      id: 2, 
      name: 'Shadow Fruit', 
      type: 'Mythical', 
      price: '2.9M', 
      image: '/img/576b3bf4-2177-4e81-93dd-f04b6371912d.jpg',
      rarity: 'mythical',
      description: 'Контроль над тенями и темнотой'
    },
    { 
      id: 3, 
      name: 'Soul Fruit', 
      type: 'Mythical', 
      price: '3.2M', 
      image: '/img/8d8039b0-5cf8-4e84-91f9-480ea52a3564.jpg',
      rarity: 'mythical',
      description: 'Манипуляции с душами врагов'
    },
    { 
      id: 4, 
      name: 'Venom Fruit', 
      type: 'Mythical', 
      price: '3.0M', 
      image: '/img/576b3bf4-2177-4e81-93dd-f04b6371912d.jpg',
      rarity: 'mythical',
      description: 'Смертоносные токсины'
    },
    { 
      id: 5, 
      name: 'Phoenix Fruit', 
      type: 'Mythical', 
      price: '3.8M', 
      image: '/img/435fc9ec-193e-4a7b-b5e4-3b6124ee02ed.jpg',
      rarity: 'mythical',
      description: 'Возрождение из пепла'
    },
    
    // Legendary Fruits
    { 
      id: 6, 
      name: 'Buddha Fruit', 
      type: 'Legendary', 
      price: '1.2M', 
      image: '/img/8d8039b0-5cf8-4e84-91f9-480ea52a3564.jpg',
      rarity: 'legendary',
      description: 'Просветление и огромная сила'
    },
    { 
      id: 7, 
      name: 'Magma Fruit', 
      type: 'Legendary', 
      price: '850K', 
      image: '/img/6f2a319f-dc89-4f26-aece-312998837e74.jpg',
      rarity: 'legendary',
      description: 'Расплавленная лава'
    },
    { 
      id: 8, 
      name: 'Light Fruit', 
      type: 'Legendary', 
      price: '650K', 
      image: '/img/152be8e1-0bdc-4975-97be-38acee88afc7.jpg',
      rarity: 'legendary',
      description: 'Скорость света'
    },
    { 
      id: 9, 
      name: 'Ice Fruit', 
      type: 'Legendary', 
      price: '350K', 
      image: '/img/876fb9c9-b207-4a8f-b1ad-66200fd91238.jpg',
      rarity: 'legendary',
      description: 'Заморозка врагов'
    },
    
    // Rare Fruits
    { 
      id: 10, 
      name: 'Rubber Fruit', 
      type: 'Rare', 
      price: '750K', 
      image: '/img/ee757fa9-b406-4380-a7ca-929467473932.jpg',
      rarity: 'rare',
      description: 'Эластичное тело'
    },
    { 
      id: 11, 
      name: 'Flame Fruit', 
      type: 'Rare', 
      price: '250K', 
      image: '/img/6f2a319f-dc89-4f26-aece-312998837e74.jpg',
      rarity: 'rare',
      description: 'Огненная сила'
    },
    { 
      id: 12, 
      name: 'Smoke Fruit', 
      type: 'Rare', 
      price: '100K', 
      image: '/img/576b3bf4-2177-4e81-93dd-f04b6371912d.jpg',
      rarity: 'rare',
      description: 'Дымовая завеса'
    }
  ];

  // Fruit categories
  const fruitCategories = [
    { name: 'Mythical', count: 5, color: 'from-purple-600 to-pink-600', emoji: '✨' },
    { name: 'Legendary', count: 8, color: 'from-orange-500 to-red-500', emoji: '🔥' },
    { name: 'Rare', count: 12, color: 'from-blue-500 to-cyan-500', emoji: '💎' },
    { name: 'Uncommon', count: 15, color: 'from-green-500 to-emerald-500', emoji: '🌟' }
  ];

  const getRarityColor = (rarity: string) => {
    switch(rarity) {
      case 'mythical': return 'from-purple-600 to-pink-600';
      case 'legendary': return 'from-orange-500 to-red-500';
      case 'rare': return 'from-blue-500 to-cyan-500';
      default: return 'from-green-500 to-emerald-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Animated Background */}
      <AnimatedBackground />
      {/* Top Navigation */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
        {isAdmin && (
          <Button
            onClick={() => setShowAdminPanel(true)}
            className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:scale-105 transition-all"
          >
            <Icon name="Shield" size={18} className="mr-1" />
            Админ
          </Button>
        )}
        <Button
          onClick={() => setShowSettings(true)}
          className="bg-slate-700 hover:bg-slate-600 text-white shadow-lg hover:scale-105 transition-all"
        >
          <Icon name="Settings" size={18} />
        </Button>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/img/095b5cb9-046b-430b-a55e-795c886f9704.jpg" 
                alt="Blox Fruits Stock" 
                className="w-20 h-20 rounded-full border-4 border-orange-500 shadow-2xl animate-pulse"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500 mb-3 animate-bounce">
              BLOX FRUITS
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              🍎 STOCK TRACKER 🍎
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Следи за ценами на самые редкие фрукты в игре!
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button
                onClick={() => setShowChat(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-bold hover:scale-105 transition-all duration-300"
              >
                <Icon name="MessageSquare" size={20} className="mr-2" />
                💬 Торговый чат
              </Button>
              
              {!isVip && (
                <Button
                  onClick={() => setShowVipUpgrade(true)}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-6 py-3 text-lg font-bold hover:scale-105 transition-all duration-300 animate-pulse"
                >
                  <Icon name="Crown" size={20} className="mr-2" />
                  👑 VIP за 99₽
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stock Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            📈 АКТУАЛЬНЫЙ СТОК
          </h2>
          <p className="text-xl text-gray-300">
            Самые дорогие и редкие фрукты на данный момент
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {stockItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 animate-in fade-in zoom-in-95"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 mx-0 relative overflow-hidden">
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-orange-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                  </div>
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getRarityColor(item.rarity)} text-white text-sm font-bold animate-pulse`}>
                    {item.type}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors relative z-10">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 relative z-10">
                  {item.description}
                </p>
                <div className="flex items-center justify-between relative z-10">
                  <div className="text-2xl font-bold text-yellow-400">
                    💰 {item.price}
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-purple-600 hover:bg-purple-700 text-white hover:scale-105 transition-all"
                  >
                    <Icon name="ShoppingCart" className="w-4 h-4 mr-1" />
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Fruits Categories Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🍎 КАТЕГОРИИ ФРУКТОВ
          </h2>
          <p className="text-xl text-gray-300">
            Исследуй все виды дьявольских фруктов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {fruitCategories.map((category, index) => (
            <Card key={index} className="group bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{category.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {category.name}
                </h3>
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${category.color} mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                <p className="text-3xl font-bold text-gray-300">
                  {category.count}
                </p>
                <p className="text-sm text-gray-500">
                  фруктов в категории
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-orange-500/10 to-purple-600/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-xl text-gray-300">Уникальных фруктов</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-xl text-gray-300">Мониторинг цен</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">1000+</div>
              <div className="text-xl text-gray-300">Активных трейдеров</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
              BLOX FRUITS STOCK
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            Самый точный трекер цен на фрукты в Blox Fruits
          </p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" className="text-gray-400 hover:text-orange-400">
              <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
              Discord
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-purple-400">
              <Icon name="Users" className="w-5 h-5 mr-2" />
              Сообщество
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-orange-400">
              <Icon name="Bell" className="w-5 h-5 mr-2" />
              Уведомления
            </Button>
          </div>
        </div>
      </footer>
      
      {/* Modals */}
      {showChat && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <Button
              onClick={() => setShowChat(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <Icon name="X" size={24} />
            </Button>
            <TradeChat 
              currentUser={currentUser}
              isVip={isVip}
              isAdmin={isAdmin}
            />
          </div>
        </div>
      )}

      {showVipUpgrade && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-lg">
            <Button
              onClick={() => setShowVipUpgrade(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <Icon name="X" size={24} />
            </Button>
            <VipUpgrade
              isVip={isVip}
              onUpgrade={() => {
                setIsVip(true);
                setShowVipUpgrade(false);
              }}
            />
          </div>
        </div>
      )}

      {showAdminPanel && isAdmin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-6xl">
            <Button
              onClick={() => setShowAdminPanel(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <Icon name="X" size={24} />
            </Button>
            <AdminPanel isAdmin={isAdmin} />
          </div>
        </div>
      )}

      <Settings 
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />
    </div>
  );
}