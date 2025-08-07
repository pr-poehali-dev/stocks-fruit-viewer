import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface AdminPanelProps {
  onClose: () => void;
}

interface User {
  id: string;
  username: string;
  isVip: boolean;
  isBanned: boolean;
  joinDate: string;
  lastActive: string;
}

interface Trade {
  id: string;
  seller: string;
  buyer: string;
  item: string;
  price: string;
  status: 'active' | 'completed' | 'cancelled';
  date: string;
}

export default function AdminPanel({ onClose }: AdminPanelProps) {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      username: 'DragonSlayer_Pro',
      isVip: true,
      isBanned: false,
      joinDate: '2024-01-15',
      lastActive: '2 минуты назад'
    },
    {
      id: '2',
      username: 'ShadowMaster',
      isVip: false,
      isBanned: false,
      joinDate: '2024-02-01',
      lastActive: '5 минут назад'
    },
    {
      id: '3',
      username: 'ToxicPlayer123',
      isVip: false,
      isBanned: true,
      joinDate: '2024-01-20',
      lastActive: '1 час назад'
    },
    {
      id: '4',
      username: 'VenomKing88',
      isVip: true,
      isBanned: false,
      joinDate: '2024-03-10',
      lastActive: '10 минут назад'
    },
    {
      id: '5',
      username: 'BuddhaMonk',
      isVip: false,
      isBanned: false,
      joinDate: '2024-04-05',
      lastActive: '30 минут назад'
    }
  ]);

  const [trades, setTrades] = useState<Trade[]>([
    {
      id: '1',
      seller: 'DragonSlayer_Pro',
      buyer: 'ShadowMaster',
      item: 'Dragon Fruit',
      price: '3,500,000',
      status: 'completed',
      date: '2024-08-07 14:30'
    },
    {
      id: '2',
      seller: 'VenomKing88',
      buyer: 'BuddhaMonk',
      item: 'Venom Fruit',
      price: '3,000,000',
      status: 'active',
      date: '2024-08-07 15:00'
    },
    {
      id: '3',
      seller: 'ShadowMaster',
      buyer: 'DragonSlayer_Pro',
      item: 'Phoenix Fruit',
      price: '1,800,000',
      status: 'active',
      date: '2024-08-07 16:15'
    }
  ]);

  const [announcement, setAnnouncement] = useState('');
  const [stats, setStats] = useState({
    totalUsers: 1547,
    activeUsers: 127,
    totalTrades: 892,
    todayTrades: 23,
    vipUsers: 89,
    bannedUsers: 12,
    revenue: 45670,
    serverUptime: '99.8%'
  });

  const toggleUserBan = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, isBanned: !user.isBanned } : user
    ));
  };

  const toggleUserVip = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, isVip: !user.isVip } : user
    ));
  };

  const sendAnnouncement = () => {
    if (!announcement.trim()) return;
    alert(`Объявление отправлено: "${announcement}"`);
    setAnnouncement('');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-7xl my-8">
        <Card className="bg-slate-900/95 border-slate-700 max-h-[90vh] overflow-hidden">
          <CardHeader className="border-b border-slate-700">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-white">
                <Icon name="Shield" size={24} className="text-red-400" />
                🛡️ Админ-панель
                <span className="ml-4 text-sm text-gray-400">
                  Добро пожаловать, Admin_Yurik
                </span>
              </CardTitle>
              <Button
                onClick={onClose}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-slate-700"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
            <Tabs defaultValue="stats" className="w-full">
              <TabsList className="grid w-full grid-cols-6 bg-slate-800 mb-6">
                <TabsTrigger value="stats">📊 Статистика</TabsTrigger>
                <TabsTrigger value="users">👥 Пользователи</TabsTrigger>
                <TabsTrigger value="trades">💰 Трейды</TabsTrigger>
                <TabsTrigger value="moderation">⚖️ Модерация</TabsTrigger>
                <TabsTrigger value="system">⚙️ Система</TabsTrigger>
                <TabsTrigger value="payments">💳 Платежи</TabsTrigger>
              </TabsList>

              <TabsContent value="stats" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="bg-slate-800 border-slate-600">
                    <CardContent className="p-4 text-center">
                      <Icon name="Users" size={24} className="text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stats.totalUsers}</div>
                      <div className="text-sm text-gray-400">Всего пользователей</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-slate-800 border-slate-600">
                    <CardContent className="p-4 text-center">
                      <Icon name="Activity" size={24} className="text-green-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stats.activeUsers}</div>
                      <div className="text-sm text-gray-400">Онлайн сейчас</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-slate-800 border-slate-600">
                    <CardContent className="p-4 text-center">
                      <Icon name="TrendingUp" size={24} className="text-purple-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stats.totalTrades}</div>
                      <div className="text-sm text-gray-400">Всего трейдов</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-slate-800 border-slate-600">
                    <CardContent className="p-4 text-center">
                      <Icon name="Crown" size={24} className="text-yellow-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stats.vipUsers}</div>
                      <div className="text-sm text-gray-400">VIP пользователей</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-slate-800 border-slate-600">
                    <CardContent className="p-4 text-center">
                      <Icon name="Calendar" size={24} className="text-orange-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stats.todayTrades}</div>
                      <div className="text-sm text-gray-400">Трейдов сегодня</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-slate-800 border-slate-600">
                    <CardContent className="p-4 text-center">
                      <Icon name="Ban" size={24} className="text-red-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stats.bannedUsers}</div>
                      <div className="text-sm text-gray-400">Заблокированных</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800 border-slate-600">
                    <CardContent className="p-4 text-center">
                      <Icon name="DollarSign" size={24} className="text-green-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stats.revenue}₽</div>
                      <div className="text-sm text-gray-400">Доход VIP</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800 border-slate-600">
                    <CardContent className="p-4 text-center">
                      <Icon name="Server" size={24} className="text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stats.serverUptime}</div>
                      <div className="text-sm text-gray-400">Аптайм сервера</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="users" className="mt-6">
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {users.map((user) => (
                    <Card key={user.id} className="bg-slate-800 border-slate-600">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${
                              user.isBanned ? 'bg-red-500' : 'bg-green-500'
                            }`}></div>
                            <span className="font-semibold text-white">
                              {user.username}
                            </span>
                            {user.isVip && (
                              <span className="px-2 py-1 text-xs bg-yellow-500 text-black rounded-full font-bold">
                                👑 VIP
                              </span>
                            )}
                            {user.isBanned && (
                              <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full font-bold">
                                🚫 BAN
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400">
                              {user.lastActive}
                            </span>
                            <Button
                              size="sm"
                              onClick={() => toggleUserVip(user.id)}
                              className={`${
                                user.isVip 
                                  ? 'bg-yellow-600 hover:bg-yellow-700' 
                                  : 'bg-gray-600 hover:bg-gray-700'
                              }`}
                            >
                              <Icon name="Crown" size={16} />
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => toggleUserBan(user.id)}
                              className={`${
                                user.isBanned 
                                  ? 'bg-green-600 hover:bg-green-700' 
                                  : 'bg-red-600 hover:bg-red-700'
                              }`}
                            >
                              <Icon name={user.isBanned ? "UserCheck" : "Ban"} size={16} />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="trades" className="mt-6">
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {trades.map((trade) => (
                    <Card key={trade.id} className="bg-slate-800 border-slate-600">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-white font-semibold">{trade.item}</span>
                              <span className="text-yellow-400 font-bold">💰 {trade.price}</span>
                            </div>
                            <div className="text-sm text-gray-400">
                              {trade.seller} → {trade.buyer}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                              trade.status === 'completed' ? 'bg-green-600 text-white' :
                              trade.status === 'active' ? 'bg-blue-600 text-white' :
                              'bg-red-600 text-white'
                            }`}>
                              {trade.status === 'completed' ? '✅ Завершен' :
                               trade.status === 'active' ? '🔄 Активен' :
                               '❌ Отменен'}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">{trade.date}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="moderation" className="mt-6">
                <div className="space-y-6">
                  <Card className="bg-slate-800 border-slate-600">
                    <CardHeader>
                      <CardTitle className="text-white">📢 Отправить объявление</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Input
                          value={announcement}
                          onChange={(e) => setAnnouncement(e.target.value)}
                          placeholder="Введите текст объявления..."
                          className="flex-1 bg-slate-700 border-slate-600 text-white"
                        />
                        <Button onClick={sendAnnouncement} className="bg-blue-600 hover:bg-blue-700">
                          <Icon name="Send" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="payments" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-slate-800 border-slate-600">
                    <CardHeader>
                      <CardTitle className="text-white">💳 VIP Продажи</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-3xl font-bold text-green-400">45,670₽</div>
                        <div className="text-sm text-gray-400">Общий доход от VIP</div>
                        <div className="text-lg text-white">89 активных VIP</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800 border-slate-600">
                    <CardHeader>
                      <CardTitle className="text-white">📈 Статистика платежей</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Сегодня:</span>
                          <span className="text-green-400 font-bold">2,970₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">На этой неделе:</span>
                          <span className="text-green-400 font-bold">18,450₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">В этом месяце:</span>
                          <span className="text-green-400 font-bold">45,670₽</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}