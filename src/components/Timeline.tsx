import { Clock } from 'lucide-react';

interface TimelineProps {
  language: 'en' | 'zh';
}

interface TimelineEvent {
  date: string;
  time?: string;
  en: string;
  zh: string;
  type: 'fire' | 'government' | 'arrest' | 'censorship';
}

export function Timeline({ language }: TimelineProps) {
  const content = {
    en: {
      title: 'Timeline of Events',
      subtitle: 'A chronological record of the fire, government response, and subsequent crackdown'
    },
    zh: {
      title: '事件時序表',
      subtitle: '火災、政府回應及後續打壓的時序記錄'
    }
  };

  const events: TimelineEvent[] = [
    {
      date: 'Nov 26',
      time: '14:00',
      en: 'Fire breaks out at Wang Fuk Court; flammable construction netting and Styrofoam boards ignite during renovation works.',
      zh: '宏福苑外牆起火，裝修工程期間易燃圍網及發泡膠板起火。',
      type: 'fire'
    },
    {
      date: 'Nov 26',
      time: '14:30',
      en: 'Fire spreads rapidly across multiple floors. Residents report thick black smoke filling corridors.',
      zh: '火勢迅速蔓延至多層樓宇，居民報告濃煙充斥走廊。',
      type: 'fire'
    },
    {
      date: 'Nov 26',
      time: '15:00',
      en: 'Residents report fire alarms failing to sound. Many residents remain trapped inside their units.',
      zh: '居民回報火警鐘失靈，大量住客被困單位內。',
      type: 'fire'
    },
    {
      date: 'Nov 26',
      time: '18:00',
      en: 'Emergency services declare the fire under control. Initial casualty reports show over 100 deaths.',
      zh: '緊急服務宣布火勢受控。初步傷亡報告顯示超過100人死亡。',
      type: 'fire'
    },
    {
      date: 'Nov 27',
      time: '',
      en: 'Government officials hold press conference, blaming "rumor mongers" for spreading "false information." Death toll rises to 150+.',
      zh: '政府官員召開記者會，指責「造謠者」散播「虛假資訊」。死亡人數上升至150+。',
      type: 'government'
    },
    {
      date: 'Nov 28',
      time: '',
      en: 'Survivors and witnesses share testimonies online about fire alarm failures and inadequate evacuation procedures.',
      zh: '生還者及目擊者在網上分享有關火警鐘失靈及疏散程序不足的證詞。',
      type: 'censorship'
    },
    {
      date: 'Nov 29',
      time: '',
      en: 'ARREST: University student Miles Kwan detained for "sedition" after launching online petition with "Four Big Demands" calling for independent inquiry and accountability.',
      zh: '拘捕：大學生 Miles Kwan 因在網上發起「四大訴求」聯署要求獨立調查及問責，被指涉嫌「煽動」被捕。',
      type: 'arrest'
    },
    {
      date: 'Nov 30',
      time: '',
      en: 'Over 50,000 people sign the petition before it is taken offline by authorities.',
      zh: '超過50,000人聯署後，聯署網頁被當局下線。',
      type: 'censorship'
    },
    {
      date: 'Dec 1',
      time: '',
      en: 'Police arrest multiple volunteers who organized memorial vigils and distributed information leaflets at Tai Po.',
      zh: '警方拘捕多名在大埔組織悼念活動及派發資訊傳單的義工。',
      type: 'arrest'
    },
    {
      date: 'Dec 2',
      time: '',
      en: 'ARRESTS: Several netizens arrested for social media posts criticizing government response and fire safety regulations.',
      zh: '拘捕：多名網民因在社交媒體發文批評政府回應及消防安全規例而被捕。',
      type: 'arrest'
    },
    {
      date: 'Dec 3',
      time: '',
      en: 'Government announces "internal review" of fire safety, rejects calls for independent inquiry.',
      zh: '政府宣布進行消防安全「內部檢討」，拒絕獨立調查要求。',
      type: 'government'
    },
    {
      date: 'Dec 5',
      time: '',
      en: 'Social media platforms begin removing posts about the fire under government pressure, citing "fake news" violations.',
      zh: '社交媒體平台在政府壓力下開始移除有關火災的帖文，指違反「假新聞」條款。',
      type: 'censorship'
    },
    {
      date: 'Dec 8',
      time: '',
      en: 'Final death toll confirmed at 160+. Families of victims prevented from speaking to media.',
      zh: '最終死亡人數確認為160+。遇難者家屬被阻止接受傳媒訪問。',
      type: 'government'
    },
    {
      date: 'Dec 10',
      time: '',
      en: 'ONGOING: Arrests and censorship continue as authorities suppress discussion of systemic failures.',
      zh: '持續：當局壓制對制度缺失的討論，拘捕及審查持續進行。',
      type: 'arrest'
    }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'fire':
        return 'border-red-500 bg-red-500/10';
      case 'government':
        return 'border-blue-400 bg-blue-400/10';
      case 'arrest':
        return 'border-yellow-400 bg-yellow-400/10';
      case 'censorship':
        return 'border-purple-400 bg-purple-400/10';
      default:
        return 'border-white/20 bg-white/5';
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Clock className="w-12 h-12 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 text-yellow-400">
            {t.title}
          </h1>
          <p className="text-lg text-white/70">
            {t.subtitle}
          </p>
        </div>

        {/* Legend */}
        <div className="mb-12 p-6 border border-white/10 bg-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500"></div>
              <span>{language === 'en' ? 'Fire Events' : '火災事件'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400"></div>
              <span>{language === 'en' ? 'Gov Response' : '政府回應'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400"></div>
              <span>{language === 'en' ? 'Arrests' : '拘捕行動'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400"></div>
              <span>{language === 'en' ? 'Censorship' : '審查行動'}</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2"></div>

          {events.map((event, index) => (
            <div
              key={index}
              className="relative mb-8 md:mb-12"
            >
              <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                {/* Date */}
                <div className={`md:w-1/2 mb-4 md:mb-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-8 md:ml-0`}>
                  <div className="inline-block px-4 py-2 bg-black border border-yellow-400 text-yellow-400">
                    {event.date}
                    {event.time && <span className="ml-2 text-white/60">{event.time}</span>}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 md:translate-x-0 border-4 border-black"></div>

                {/* Content */}
                <div className={`md:w-1/2 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className={`p-6 border ${getEventColor(event.type)} hover:border-yellow-400/50 transition-colors`}>
                    <p className="text-white leading-relaxed">
                      {language === 'en' ? event.en : event.zh}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 p-6 border border-yellow-400/50 bg-yellow-400/5">
          <p className="text-white/80 text-sm">
            {language === 'en'
              ? 'This timeline is updated as new information becomes available. If you have additional information or corrections, please contact us securely.'
              : '此時序表會隨著新資訊的出現而更新。如有額外資料或更正，請透過安全渠道聯絡我們。'}
          </p>
        </div>
      </div>
    </div>
  );
}
