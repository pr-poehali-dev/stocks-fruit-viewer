import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Settings({ isOpen, onClose }: SettingsProps) {
  const [language, setLanguage] = useState('ru');
  const [theme, setTheme] = useState('dark');
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);

  if (!isOpen) return null;

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const themes = [
    { value: 'dark', name: 'Тёмная', icon: 'Moon' },
    { value: 'light', name: 'Светлая', icon: 'Sun' },
    { value: 'blue', name: 'Океан', icon: 'Waves' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-lg bg-slate-900 border-slate-700 animate-in fade-in zoom-in-95 duration-300">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-white">
            <Icon name="Settings" size={24} />
            Настройки
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <Icon name="X" size={20} />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Language Settings */}
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Icon name="Globe" size={18} />
              Язык
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  variant={language === lang.code ? "default" : "outline"}
                  className={`justify-start ${
                    language === lang.code 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
                  }`}
                  onClick={() => setLanguage(lang.code)}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Theme Settings */}
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Icon name="Palette" size={18} />
              Тема
            </h3>
            <div className="space-y-2">
              {themes.map((themeOption) => (
                <Button
                  key={themeOption.value}
                  variant={theme === themeOption.value ? "default" : "outline"}
                  className={`w-full justify-start ${
                    theme === themeOption.value
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
                  }`}
                  onClick={() => setTheme(themeOption.value)}
                >
                  <Icon name={themeOption.icon as any} size={16} className="mr-2" />
                  {themeOption.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Notification Settings */}
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Icon name="Bell" size={18} />
              Уведомления
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <Icon name="Bell" size={16} className="text-blue-400" />
                  <span className="text-white">Звуковые уведомления</span>
                </div>
                <Button
                  variant={sound ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSound(!sound)}
                  className={
                    sound 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-slate-700 border-slate-600'
                  }
                >
                  {sound ? <Icon name="Volume2" size={16} /> : <Icon name="VolumeX" size={16} />}
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <Icon name="MessageSquare" size={16} className="text-purple-400" />
                  <span className="text-white">Уведомления о сообщениях</span>
                </div>
                <Button
                  variant={notifications ? "default" : "outline"}
                  size="sm"
                  onClick={() => setNotifications(!notifications)}
                  className={
                    notifications 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-slate-700 border-slate-600'
                  }
                >
                  {notifications ? <Icon name="Check" size={16} /> : <Icon name="X" size={16} />}
                </Button>
              </div>
            </div>
          </div>

          {/* Game Settings */}
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Icon name="Gamepad2" size={18} />
              Игровые настройки
            </h3>
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-start bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700"
              >
                <Icon name="RotateCcw" size={16} className="mr-2" />
                Сбросить прогресс
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700"
              >
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт данных
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-slate-700">
            <Button
              onClick={onClose}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105"
            >
              <Icon name="Check" size={16} className="mr-2" />
              Сохранить
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700"
            >
              <Icon name="X" size={16} className="mr-2" />
              Отмена
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}