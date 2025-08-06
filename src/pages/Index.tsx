import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  // Stock items data
  const stockItems = [
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
      name: 'Control Fruit', 
      type: 'Mythical', 
      price: '3.0M', 
      image: '/img/37420f48-2bc1-4e11-a094-8f40dfc6152e.jpg',
      rarity: 'mythical',
      description: 'Телекинетический контроль'
    },
    { 
      id: 5, 
      name: 'Venom Fruit', 
      type: 'Mythical', 
      price: '3.0M', 
      image: '/img/576b3bf4-2177-4e81-93dd-f04b6371912d.jpg',
      rarity: 'mythical',
      description: 'Смертоносные токсины'
    },
    { 
      id: 6, 
      name: 'Buddha Fruit', 
      type: 'Legendary', 
      price: '1.2M', 
      image: '/img/8d8039b0-5cf8-4e84-91f9-480ea52a3564.jpg',
      rarity: 'legendary',
      description: 'Просветление и огромная сила'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/img/095b5cb9-046b-430b-a55e-795c886f9704.jpg" 
                alt="Blox Fruits Stock" 
                className="w-20 h-20 rounded-full border-4 border-orange-500 shadow-2xl"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500 mb-3">
              BLOX FRUITS
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              🍎 STOCK TRACKER 🍎
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Следи за ценами на самые редкие фрукты в игре!
            </p>
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
          {stockItems.map((item) => (
            <Card key={item.id} className="group bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105">
              <CardContent className="p-6 mx-0">
                <div className="flex items-center justify-between mb-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg shadow-lg"
                  />
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getRarityColor(item.rarity)} text-white text-sm font-bold`}>
                    {item.type}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-center">
                  <Button 
                    size="sm" 
                    className="bg-purple-600 hover:bg-purple-700 text-white w-full"
                  >
                    <Icon name="Eye" className="w-4 h-4 mr-1" />
                    Подробнее
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
    </div>
  );
}