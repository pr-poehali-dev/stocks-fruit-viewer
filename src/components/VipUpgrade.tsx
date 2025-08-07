import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface VipUpgradeProps {
  isVip: boolean;
  onUpgrade: () => void;
}

export default function VipUpgrade({ isVip, onUpgrade }: VipUpgradeProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpgrade = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    onUpgrade();
    setIsProcessing(false);
  };

  const vipFeatures = [
    {
      icon: 'Crown',
      title: 'VIP статус в чате',
      description: 'Золотая корона и выделенные сообщения'
    },
    {
      icon: 'MessageSquare',
      title: 'Длинные сообщения',
      description: 'До 500 символов вместо 100'
    },
    {
      icon: 'Star',
      title: 'Приоритет в трейдах',
      description: 'Ваши предложения показываются первыми'
    },
    {
      icon: 'Zap',
      title: 'Эксклюзивные фишки',
      description: 'Анимации и особые эффекты'
    },
    {
      icon: 'Users',
      title: 'VIP канал',
      description: 'Доступ к закрытому VIP чату'
    },
    {
      icon: 'Gift',
      title: 'Ежедневные бонусы',
      description: 'Больше наград и призов'
    }
  ];

  if (isVip) {
    return (
      <Card className="bg-gradient-to-br from-yellow-950/30 to-orange-950/30 border-yellow-500">
        <CardContent className="p-6 text-center">
          <div className="flex justify-center mb-4">
            <Icon name="Crown" size={48} className="text-yellow-400 animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">
            VIP АКТИВИРОВАН!
          </h3>
          <p className="text-gray-300">
            Спасибо за поддержку! Наслаждайтесь всеми VIP возможностями.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border-purple-500">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-white flex items-center justify-center gap-2">
          <Icon name="Crown" size={24} className="text-yellow-400" />
          VIP ПАКЕТ
          <Icon name="Crown" size={24} className="text-yellow-400" />
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-yellow-400 mb-2">99₽</div>
          <div className="text-sm text-gray-400">на месяц</div>
        </div>

        <div className="grid gap-4 mb-6">
          {vipFeatures.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300"
            >
              <div className="p-2 rounded-full bg-purple-600/20">
                <Icon name={feature.icon as any} size={16} className="text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Button
          onClick={handleUpgrade}
          disabled={isProcessing}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 text-lg transition-all duration-300 hover:scale-105"
        >
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin">
                <Icon name="Loader2" size={20} />
              </div>
              Обработка платежа...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Icon name="CreditCard" size={20} />
              КУПИТЬ VIP ЗА 99₽
            </div>
          )}
        </Button>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Безопасная оплата • Мгновенная активация • 30 дней гарантии
          </p>
        </div>
      </CardContent>
    </Card>
  );
}