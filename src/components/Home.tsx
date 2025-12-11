import { Flame, Users, AlertCircle } from 'lucide-react';

interface HomeProps {
  language: 'en' | 'zh';
}

export function Home({ language }: HomeProps) {
  const content = {
    en: {
      hero: 'The Tai Po Fire Archive',
      subtitle: 'Remembering the Victims, Recording the Truth',
      mission: 'A digital record of the November 26 tragedy, the systemic failures that caused it, and the voices silenced for demanding accountability.',
      date: 'November 26, 2025',
      stats: {
        deaths: '160+ Deaths',
        arrests: '15+ Arrests',
        censored: 'Ongoing Censorship'
      },
      sections: {
        what: 'What Happened',
        whatText: 'On November 26, 2025, a devastating fire broke out at Wang Fuk Court (宏福苑) in Tai Po during renovation works. Flammable construction netting and Styrofoam boards ignited, causing rapid fire spread. Fire alarms failed to sound, trapping residents inside. Over 160 lives were lost in one of Hong Kong\'s deadliest fires.',
        after: 'The Aftermath',
        afterText: 'Following the tragedy, government officials blamed "rumor mongers" instead of addressing systemic failures. Students, volunteers, and netizens who demanded accountability were arrested under "sedition" laws. A university student, Miles Kwan, was detained for launching a petition with "Four Big Demands" calling for an independent inquiry.',
        why: 'Why This Archive',
        whyText: 'This archive exists to preserve the truth, honor the victims, and document the voices silenced for seeking justice. When authorities attempt to erase history, we remember.'
      }
    },
    zh: {
      hero: '大埔大火檔案',
      subtitle: '悼念逝者，捍衛真相',
      mission: '記錄 11.26 大火慘劇的經過、導致災難的制度缺失，以及因追求問責而被噤聲的聲音。',
      date: '2025年11月26日',
      stats: {
        deaths: '160+ 罹難者',
        arrests: '15+ 人被捕',
        censored: '持續審查'
      },
      sections: {
        what: '事件經過',
        whatText: '2025年11月26日，大埔宏福苑在進行維修工程期間發生嚴重火災。易燃圍網及聚苯乙烯板材起火，火勢迅速蔓延。火警鐘失靈，大量居民被困。超過160人在這場香港史上最致命的火災之一中喪生。',
        after: '事後追究',
        afterText: '慘劇發生後，政府官員指責「造謠者」，而非處理制度缺失。要求問責的學生、義工和網民被以「煽動」罪名拘捕。大學生 Miles Kwan 因發起「四大訴求」聯署要求獨立調查而被拘留。',
        why: '建立檔案的原因',
        whyText: '此檔案旨在保存真相、悼念遇難者，並記錄那些因尋求正義而被噤聲的聲音。當權力試圖抹去歷史，我們選擇記住。'
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-black via-black/95 to-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        </div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Flame className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-5xl md:text-7xl mb-6 text-yellow-400">
            {t.hero}
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-white">
            {t.subtitle}
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t.mission}
          </p>
          <div className="mt-8 inline-block px-6 py-3 border-2 border-yellow-400 text-yellow-400">
            {t.date}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-white/10 hover:border-yellow-400/50 transition-colors">
              <div className="text-5xl text-yellow-400 mb-4">{t.stats.deaths}</div>
              <div className="text-white/60">
                {language === 'en' ? 'Lives Lost' : '生命消逝'}
              </div>
            </div>
            <div className="text-center p-8 border border-white/10 hover:border-yellow-400/50 transition-colors">
              <div className="text-5xl text-yellow-400 mb-4">{t.stats.arrests}</div>
              <div className="text-white/60">
                {language === 'en' ? 'Detained for Speaking Out' : '因發聲被捕'}
              </div>
            </div>
            <div className="text-center p-8 border border-white/10 hover:border-yellow-400/50 transition-colors">
              <div className="text-5xl text-yellow-400 mb-4">{t.stats.censored}</div>
              <div className="text-white/60">
                {language === 'en' ? 'Truth Suppressed' : '真相被壓制'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Flame className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl text-yellow-400">{t.sections.what}</h2>
            </div>
            <p className="text-lg text-white/90 leading-relaxed">
              {t.sections.whatText}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl text-yellow-400">{t.sections.after}</h2>
            </div>
            <p className="text-lg text-white/90 leading-relaxed">
              {t.sections.afterText}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl text-yellow-400">{t.sections.why}</h2>
            </div>
            <p className="text-lg text-white/90 leading-relaxed">
              {t.sections.whyText}
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl text-yellow-400 mb-4">
            {language === 'en' 
              ? 'When they try to erase history, we remember.' 
              : '當他們試圖抹去歷史，我們選擇記住。'}
          </p>
          <p className="text-white/60">
            {language === 'en'
              ? 'Explore the timeline and archived materials to learn the full story.'
              : '瀏覽時序表和檔案資料，了解事件全貌。'}
          </p>
        </div>
      </div>
    </div>
  );
}
