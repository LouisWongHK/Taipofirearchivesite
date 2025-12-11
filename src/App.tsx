import { useState } from 'react';
import { Home } from './components/Home';
import { Timeline } from './components/Timeline';
import { NewsReports } from './components/NewsReports';
import { HowToCite } from './components/HowToCite';
import { Contact } from './components/Contact';
import { Menu, X } from 'lucide-react';

type Language = 'en' | 'zh';
type Section = 'home' | 'timeline' | 'news' | 'cite' | 'contact';

export default function App() {
  const [language, setLanguage] = useState<Language>('zh');
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = {
    en: {
      home: 'Home',
      timeline: 'Timeline',
      news: 'News Archive',
      cite: 'How to Cite',
      contact: 'Contact Us'
    },
    zh: {
      home: '首頁',
      timeline: '時序表',
      news: '新聞檔案',
      cite: '如何引用',
      contact: '聯絡我們'
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home language={language} />;
      case 'timeline':
        return <Timeline language={language} />;
      case 'news':
        return <NewsReports language={language} />;
      case 'cite':
        return <HowToCite language={language} />;
      case 'contact':
        return <Contact language={language} />;
      default:
        return <Home language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <button 
                onClick={() => setCurrentSection('home')}
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                {language === 'en' ? 'Tai Po Fire Archive' : '大埔大火檔案'}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {Object.entries(navigation[language]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setCurrentSection(key as Section)}
                  className={`transition-colors ${
                    currentSection === key
                      ? 'text-yellow-400'
                      : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                className="px-3 py-1 border border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition-colors rounded"
              >
                {language === 'en' ? '中文' : 'EN'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-yellow-400"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black">
            <div className="px-4 py-4 space-y-3">
              {Object.entries(navigation[language]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => {
                    setCurrentSection(key as Section);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 transition-colors ${
                    currentSection === key
                      ? 'text-yellow-400'
                      : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                className="block w-full text-left py-2 text-white hover:text-yellow-400 transition-colors"
              >
                {language === 'en' ? '切換至中文' : 'Switch to English'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/60">
          <p>
            {language === 'en'
              ? 'Remembering the Victims, Recording the Truth'
              : '悼念逝者，捍衛真相'}
          </p>
          <p className="mt-2 text-sm">
            {language === 'en'
              ? 'Wang Fuk Court Fire, November 26, 2025'
              : '宏福苑大火，2025年11月26日'}
          </p>
        </div>
      </footer>
    </div>
  );
}
