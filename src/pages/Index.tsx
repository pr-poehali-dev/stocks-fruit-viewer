import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import TradeChat from '@/components/TradeChat';
import VipUpgrade from '@/components/VipUpgrade';
import AdminPanel from '@/components/AdminPanel';
import Settings from '@/components/Settings';
import AnimatedBackground from '@/components/AnimatedBackground';
import { bloxFruitsStock, mirageStock } from '@/data/bloxFruitsData';

export default function Index() {
  const [isVip, setIsVip] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [showVipUpgrade, setShowVipUpgrade] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [activeTab, setActiveTab] = useState('stock');
  const currentUser = 'Admin_Yurik';

  // Fruit images mapping
  const fruitImages: { [key: string]: string } = {
    'kitsune': '/img/04d1ce5a-f48e-416d-8290-0fa8f6e6419f.jpg',
    'trex': '/img/17643bcd-b1cf-46be-9bb7-bc7fcf65a58e.jpg',
    'leopard': '/img/eb13852e-9923-4e13-acde-1bcd37107509.jpg',
    'dragon': '/img/9772806e-48db-4bbd-a2eb-43b90d3e3020.jpg',
    'buddha': '/img/5096a899-5265-4383-a0fd-c99e8b25753f.jpg',
    'phoenix': '/img/5ca0fffd-bd67-4b56-b868-40292d69599f.jpg',
  };

  const getRarityColor = (rarity: string) => {
    switch(rarity) {
      case 'mythical': return 'from-purple-600 to-pink-600';
      case 'legendary': return 'from-orange-500 to-red-500';
      case 'rare': return 'from-blue-500 to-cyan-500';
      case 'common': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStockColor = (stock: number) => {
    if (stock === 0) return 'text-red-500';
    if (stock < 10) return 'text-orange-500';
    if (stock < 50) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <AnimatedBackground />
      
      {/* Header */}
      <div className="relative z-10">
        <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
                  🏴‍☠️ Blox Fruits Stock
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button
                  onClick={() => setShowChat(!showChat)}
                  className={`${isVip ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-slate-700'} hover:scale-105`}
                >
                  <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
                  Trade Chat {isVip && '👑'}
                </Button>
                
                {!isVip && (
                  <Button
                    onClick={() => setShowVipUpgrade(!showVipUpgrade)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105"
                  >
                    <Icon name="Crown" className="w-4 h-4 mr-2" />
                    VIP 99₽
                  </Button>
                )}
                
                {isAdmin && (
                  <Button
                    onClick={() => setShowAdminPanel(!showAdminPanel)}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:scale-105"
                  >
                    <Icon name="Shield" className="w-4 h-4 mr-2" />
                    Admin
                  </Button>
                )}
                
                <Button
                  onClick={() => setShowSettings(!showSettings)}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-slate-700"
                >
                  <Icon name="Settings" className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('stock')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'stock' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              <Icon name="Package" className="w-4 h-4 mr-2 inline" />
              Fruit Stock
            </button>
            <button
              onClick={() => setActiveTab('mirage')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'mirage' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              <Icon name="Sparkles" className="w-4 h-4 mr-2 inline" />
              Mirage Island
            </button>
          </div>

          {/* Stock Tab */}
          {activeTab === 'stock' && (
            <div>
              <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-white mb-4">
                  🍎 Blox Fruits Stock
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Полный сток всех фруктов Blox Fruits с оригинальными ценами. 
                  Обновление каждые 4 часа ⏰
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {bloxFruitsStock.map((fruit) => (
                  <Card key={fruit.id} className="group bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <img 
                          src={fruitImages[fruit.image] || '/api/placeholder/60/60'} 
                          alt={fruit.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className={`px-2 py-1 rounded-full bg-gradient-to-r ${getRarityColor(fruit.rarity)} text-white text-xs font-bold`}>
                          {fruit.type}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-1">
                        {fruit.name}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                        {fruit.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-yellow-400 font-bold">💰 {fruit.price}</span>
                          <span className="text-blue-400 font-bold">💎 {fruit.robux}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">Stock:</span>
                          <span className={`font-bold ${getStockColor(fruit.stock)}`}>
                            {fruit.stock}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Mirage Tab */}
          {activeTab === 'mirage' && (
            <div>
              <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-white mb-4">
                  ✨ Mirage Island Stock
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Редкие фрукты на острове Мираж. Появляются каждые 30 минут 🏝️
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {mirageStock.map((fruit) => (
                  <Card key={fruit.id} className="group bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">
                          {fruit.name}
                        </h3>
                        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getRarityColor(fruit.rarity)} text-white text-sm font-bold`}>
                          {fruit.rarity.charAt(0).toUpperCase() + fruit.rarity.slice(1)}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Stock:</span>
                          <span className={`font-bold ${getStockColor(fruit.stock)}`}>
                            {fruit.stock === 0 ? 'Out of Stock' : fruit.stock}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Chance:</span>
                          <span className="text-purple-400 font-bold">
                            {fruit.chance}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Next spawn:</span>
                          <span className="text-green-400 font-bold">
                            {fruit.timer}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {showChat && (
        <TradeChat
          currentUser={currentUser}
          isVip={isVip}
          isAdmin={isAdmin}
          onClose={() => setShowChat(false)}
        />
      )}

      {showVipUpgrade && (
        <VipUpgrade
          onClose={() => setShowVipUpgrade(false)}
          onUpgrade={() => {
            setIsVip(true);
            setShowVipUpgrade(false);
          }}
        />
      )}

      {showAdminPanel && (
        <AdminPanel
          onClose={() => setShowAdminPanel(false)}
        />
      )}

      {showSettings && (
        <Settings
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}