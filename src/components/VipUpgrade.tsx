import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface VipUpgradeProps {
  onClose: () => void;
  onUpgrade: () => void;
}

export default function VipUpgrade({ onClose, onUpgrade }: VipUpgradeProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  // СКРЫТЫЙ НОМЕР КАРТЫ - только для админа
  const CARD_NUMBER = "2200701934787133";

  const handleUpgrade = async () => {
    setShowPayment(true);
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    // Имитация обработки платежа
    await new Promise(resolve => setTimeout(resolve, 3000));
    onUpgrade();
    onClose();
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

  if (showPayment) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-slate-900/95 border-slate-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">💳 Оплата VIP</CardTitle>
              <Button onClick={onClose} variant="ghost" size="sm">
                <Icon name="X" size={20} />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">99₽</div>
              <p className="text-gray-400">VIP на месяц</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white mb-3">Инструкция по оплате:</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>1. Переведите 99₽ на карту Сбербанка</p>
                <div className="bg-slate-700 p-3 rounded font-mono text-center select-all">
                  {CARD_NUMBER}
                </div>
                <p>2. В комментарии укажите ваш никнейм</p>
                <p>3. Нажмите "Подтвердить оплату"</p>
                <p className="text-green-400">⚡ VIP активируется в течение 5 минут</p>
              </div>
            </div>

            <Button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin">
                    <Icon name="Loader2" size={20} />
                  </div>
                  Проверяем платеж...
                </div>
              ) : (
                '✅ Подтвердить оплату'
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              Возникли проблемы? Напишите в поддержку в Telegram
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-gradient-to-br from-purple-950/95 to-pink-950/95 border-purple-500">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-center text-2xl font-bold text-white flex items-center gap-2">
              <Icon name="Crown" size={24} className="text-yellow-400" />
              VIP ПАКЕТ
              <Icon name="Crown" size={24} className="text-yellow-400" />
            </CardTitle>
            <Button onClick={onClose} variant="ghost" size="sm">
              <Icon name="X" size={20} />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-yellow-400 mb-2">99₽</div>
            <div className="text-sm text-gray-400">на месяц</div>
          </div>

          <div className="grid gap-4 mb-6 max-h-64 overflow-y-auto">
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
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 text-lg transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-2">
              <Icon name="CreditCard" size={20} />
              КУПИТЬ VIP ЗА 99₽
            </div>
          </Button>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Безопасная оплата • Мгновенная активация • 30 дней гарантии
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}