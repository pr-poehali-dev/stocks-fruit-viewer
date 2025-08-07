import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: Date;
  isVip: boolean;
  isAdmin: boolean;
  avatar?: string;
}

interface TradeChatProps {
  currentUser: string;
  isVip: boolean;
  isAdmin: boolean;
}

export default function TradeChat({ currentUser, isVip, isAdmin }: TradeChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      user: 'DragonSlayer_Pro',
      text: 'WTS Dragon Fruit for 3.5M beli or good offers!',
      timestamp: new Date(Date.now() - 300000),
      isVip: true,
      isAdmin: false
    },
    {
      id: '2', 
      user: 'ShadowMaster',
      text: 'LF Soul Fruit, have Venom + adds',
      timestamp: new Date(Date.now() - 240000),
      isVip: false,
      isAdmin: false
    },
    {
      id: '3',
      user: 'Admin_Yurik',
      text: 'Добро пожаловать в торговый чат! Соблюдайте правила.',
      timestamp: new Date(Date.now() - 180000),
      isVip: true,
      isAdmin: true
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      user: currentUser,
      text: newMessage,
      timestamp: new Date(),
      isVip,
      isAdmin
    };

    setMessages([...messages, message]);
    setNewMessage('');
    
    // Simulate typing indicator
    setTimeout(() => {
      setIsTyping(false);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ru-RU', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getUserBadge = (msg: Message) => {
    if (msg.isAdmin) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold bg-red-600 text-white rounded-full animate-pulse">
          <Icon name="Shield" size={12} />
          ADMIN
        </span>
      );
    }
    if (msg.isVip) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full animate-bounce">
          <Icon name="Crown" size={12} />
          VIP
        </span>
      );
    }
    return null;
  };

  const getMessageStyle = (msg: Message) => {
    if (msg.isAdmin) {
      return "border-l-4 border-red-500 bg-red-950/30 shadow-lg shadow-red-500/20";
    }
    if (msg.isVip) {
      return "border-l-4 border-yellow-500 bg-gradient-to-r from-yellow-950/20 to-orange-950/20 shadow-lg shadow-yellow-500/20";
    }
    return "border-l-4 border-slate-600 bg-slate-800/50";
  };

  return (
    <Card className="h-[500px] flex flex-col bg-slate-900/90 border-slate-700">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-white">
          <Icon name="MessageSquare" size={20} />
          Торговый чат
          <div className="flex items-center gap-1 ml-auto text-sm text-gray-400">
            <Icon name="Users" size={16} />
            <span className="animate-pulse">127 онлайн</span>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-0">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${getMessageStyle(message)}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${
                    message.isAdmin ? 'text-red-400' : 
                    message.isVip ? 'text-yellow-400' : 'text-blue-400'
                  }`}>
                    {message.user}
                  </span>
                  {getUserBadge(message)}
                </div>
                <span className="text-xs text-gray-500 ml-auto">
                  {formatTime(message.timestamp)}
                </span>
              </div>
              <p className="text-white text-sm leading-relaxed">
                {message.text}
              </p>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-center gap-2 p-3 text-gray-400 text-sm animate-pulse">
              <Icon name="MessageCircle" size={16} />
              Кто-то печатает...
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="border-t border-slate-700 p-4">
          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder={
                isVip 
                  ? "Напишите сообщение как VIP участник..." 
                  : "Напишите сообщение... (Станьте VIP для особых возможностей!)"
              }
              className="flex-1 bg-slate-800 border-slate-600 text-white placeholder:text-gray-500"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
              maxLength={isVip ? 500 : 100}
            />
            <Button
              onClick={handleSendMessage}
              className={`${
                isVip 
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600' 
                  : 'bg-purple-600 hover:bg-purple-700'
              } transition-all duration-300 hover:scale-105`}
            >
              <Icon name="Send" size={16} />
            </Button>
          </div>
          
          {!isVip && (
            <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
              <Icon name="Lock" size={12} />
              VIP участники могут писать сообщения до 500 символов
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}