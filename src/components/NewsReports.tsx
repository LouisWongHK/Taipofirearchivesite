import { useState } from 'react';
import { FileText, AlertTriangle, Users, Shield, ExternalLink } from 'lucide-react';

interface NewsReportsProps {
  language: 'en' | 'zh';
}

type Category = 'all' | 'official' | 'independent' | 'crackdown' | 'censorship';

interface Report {
  category: Category;
  date: string;
  titleEn: string;
  titleZh: string;
  contentEn: string;
  contentZh: string;
  source: string;
  url?: string;
}

export function NewsReports({ language }: NewsReportsProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const content = {
    en: {
      title: 'News Archive',
      subtitle: 'Documenting official statements, independent reporting, and the crackdown',
      categories: {
        all: 'All Reports',
        official: 'Official Statements',
        independent: 'Independent Reporting',
        crackdown: 'The Crackdown',
        censorship: 'Censorship'
      }
    },
    zh: {
      title: '新聞檔案',
      subtitle: '記錄官方聲明、獨立報導及打壓行動',
      categories: {
        all: '所有報導',
        official: '官方聲明',
        independent: '獨立報導',
        crackdown: '清算與拘捕',
        censorship: '審查'
      }
    }
  };

  const reports: Report[] = [
    {
      category: 'independent',
      date: 'Nov 26, 2025',
      titleEn: 'Tai Po Fire: Over 150 Dead in Hong Kong\'s Deadliest Blaze in Decades',
      titleZh: '大埔大火：香港數十年來最致命火災，超過150人死亡',
      contentEn: 'A devastating fire at Wang Fuk Court public housing estate in Tai Po has claimed over 150 lives, making it Hong Kong\'s deadliest fire in decades. The blaze, which broke out during renovation works, spread rapidly due to flammable construction materials. Survivors report that fire alarms failed to activate, trapping residents inside.',
      contentZh: '大埔宏福苑公共屋邨發生毀滅性火災，奪去超過150條生命，成為香港數十年來最致命的火災。火災在裝修工程期間爆發，因易燃建材而迅速蔓延。生還者報告火警鐘未能啟動，居民被困其中。',
      source: 'BBC News',
      url: 'https://www.bbc.com/news/articles/cd6x2ppjv4go'
    },
    {
      category: 'crackdown',
      date: 'Nov 29, 2025',
      titleEn: 'University Student Miles Kwan Arrested for Launching "Four Big Demands" Petition',
      titleZh: '大學生 Miles Kwan 因發起「四大訴求」聯署被捕',
      contentEn: 'University student Miles Kwan was arrested on charges of sedition after launching a Change.org petition calling for "Four Big Demands": independent inquiry into the fire, government accountability, fire safety reforms, and protection for victims\' families. The petition garnered over 50,000 signatures before authorities forced it offline. His arrest marks the beginning of a broader crackdown on those seeking answers.',
      contentZh: '大學生 Miles Kwan 因在 Change.org 發起「四大訴求」聯署被以煽動罪拘捕。聯署要求對火災進行獨立調查、政府問責、消防安全改革及保護遇難者家屬。聯署在當局強制下線前獲得超過50,000個簽名。他的被捕標誌著對尋求真相者的更廣泛打壓開始。',
      source: 'Change.org Petition / Hong Kong Free Press',
      url: 'https://www.change.org/p/%E8%A6%81%E6%B1%82%E7%8D%A8%E7%AB%8B%E8%AA%BF%E6%9F%A5%E5%A4%A7%E5%9F%94%E5%AE%8F%E7%A6%8F%E8%8B%91%E7%81%AB%E7%81%BD-demand-independence-investigation-of-tai-po-wang-fuk-court-fire'
    },
    {
      category: 'independent',
      date: 'Dec 3, 2025',
      titleEn: 'Hong Kong\'s Grenfell Tower Moment: When Grief Became Sedition',
      titleZh: '香港的格倫費爾塔時刻：當悲傷成為煽動',
      contentEn: 'The Diplomat examines how Hong Kong\'s response to the Tai Po fire mirrors the UK\'s Grenfell Tower disaster, but with a critical difference: those demanding accountability face arrest. The article documents how students, activists, and ordinary citizens expressing grief or seeking answers have been detained under national security laws, transforming a tragedy into a crackdown.',
      contentZh: '《外交家》雜誌探討香港對大埔火災的回應如何與英國格倫費爾塔災難相似，但有一個關鍵差異：要求問責者面臨拘捕。文章記錄了學生、活動人士和普通市民如何因表達悲傷或尋求答案而被以國安法拘留，將一場悲劇轉化為打壓。',
      source: 'The Diplomat',
      url: 'https://thediplomat.com/2025/12/hong-kongs-grenfell-tower-moment-when-grief-became-sedition/'
    },
    {
      category: 'censorship',
      date: 'Dec 2-3, 2025',
      titleEn: 'Student Activists Hailey Cheng and Ellie Yuen Forced into Silence',
      titleZh: '學生活動人士鄭海莉及袁艾莉被迫噤聲',
      contentEn: 'Following Miles Kwan\'s arrest, two prominent student activists were forced to issue public statements ceasing all advocacy. Hailey Cheng (early 20s, HKU student) stated she would have "no association with any foreign forces or individuals alleged to be undermining social stability." Ellie Yuen (early 20s, CityU student) who had conducted multiple BBC interviews demanding truth and accountability, was similarly silenced. Both were threatened after Kwan\'s detention.',
      contentZh: '在 Miles Kwan 被捕後，兩名著名學生活動人士被迫發表公開聲明停止所有倡議活動。鄭海莉（20歲出頭，港大學生）表示將「不與任何被指破壞社會穩定的外國勢力或個人有任何聯繫」。袁艾莉（20歲出頭，城大學生）曾接受多次BBC訪問要求真相及問責，同樣被迫噤聲。兩人均在 Kwan 被拘留後受到威脅。',
      source: 'Student Testimonies / BBC'
    },
    {
      category: 'official',
      date: 'Dec 5, 2025',
      titleEn: 'Hong Kong Government Slams "Biased" Wall Street Journal Editorial on Tai Po Fire',
      titleZh: '香港政府抨擊《華爾街日報》關於大埔火災的「偏頗」社論',
      contentEn: 'Security Secretary Chris Tang condemned a Wall Street Journal editorial titled "No fire critics allowed in Hong Kong." Tang accused the newspaper of "bias" and "interfering in Hong Kong\'s internal affairs" after the editorial questioned fire safety oversight and called the arrests of petition organizers "authoritarian overreach." He reiterated that authorities\' priority is supporting affected residents and warned that any attempts to "sabotage the recovery work" will be handled seriously.',
      contentZh: '保安局局長鄧炳強譴責《華爾街日報》題為「香港不容火災批評者」的社論。在該社論質疑消防安全監管並稱拘捕聯署組織者為「威權過度」後，鄧指責該報「偏頗」和「干預香港內部事務」。他重申當局的首要任務是支援受影響居民，並警告任何「破壞恢復工作」的企圖將受到嚴肅處理。',
      source: 'Hong Kong Free Press',
      url: 'https://hongkongfp.com/2025/12/05/hong-kong-govt-slams-biased-wall-street-journal-editorial-on-tai-po-fire/'
    },
    {
      category: 'crackdown',
      date: 'Dec 6, 2025',
      titleEn: '"Don\'t Say We Didn\'t Warn You": Beijing Summons Journalists in Hong Kong After Fire',
      titleZh: '「別說我們沒警告你」：火災後北京在香港召見記者',
      contentEn: 'The Guardian reports that Beijing\'s liaison office in Hong Kong has summoned foreign journalists for "warning talks" following their coverage of the Tai Po fire and subsequent arrests. Reporters were told to "respect Hong Kong\'s judicial process" and warned against "sensationalizing" the tragedy. The phrase "don\'t say we didn\'t warn you" - historically used before Chinese military action - has alarmed press freedom advocates.',
      contentZh: '《衛報》報導，北京駐港聯絡辦公室在記者報導大埔火災及後續拘捕後，召見外國記者進行「警告談話」。記者被告知要「尊重香港司法程序」，並被警告不要「聳人聽聞」這場悲劇。「別說我們沒警告你」這句話——歷史上在中國軍事行動前使用——令新聞自由倡議者感到震驚。',
      source: 'The Guardian',
      url: 'https://www.theguardian.com/news/2025/dec/06/dont-say-we-didnt-warn-you-beijing-summons-journalists-in-hong-kong-after-fire'
    },
    {
      category: 'official',
      date: 'Dec 2, 2025',
      titleEn: 'Chief Executive Announces Independent Committee, But Questions Remain',
      titleZh: '行政長官宣布獨立委員會，但疑問仍存',
      contentEn: 'Chief Executive John Lee announced the establishment of an "independent committee" to investigate the fire. However, critics note that committee members will be appointed by the government, raising concerns about genuine independence. The announcement came only after widespread public pressure and the petition launched by Miles Kwan gained tens of thousands of signatures.',
      contentZh: '行政長官李家超宣布成立「獨立委員會」調查火災。然而，批評者指出委員會成員將由政府任命，引發對真正獨立性的擔憂。該宣布是在廣泛公眾壓力及 Miles Kwan 發起的聯署獲得數萬簽名後才作出。',
      source: 'Hong Kong 01 / Government Press Release'
    }
  ];

  const filteredReports = activeCategory === 'all' 
    ? reports 
    : reports.filter(r => r.category === activeCategory);

  const getCategoryIcon = (category: Category) => {
    switch (category) {
      case 'official':
        return <Shield className="w-5 h-5" />;
      case 'independent':
        return <FileText className="w-5 h-5" />;
      case 'crackdown':
        return <AlertTriangle className="w-5 h-5" />;
      case 'censorship':
        return <AlertTriangle className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: Category) => {
    switch (category) {
      case 'official':
        return 'border-blue-400 hover:border-blue-300';
      case 'independent':
        return 'border-green-400 hover:border-green-300';
      case 'crackdown':
        return 'border-yellow-400 hover:border-yellow-300';
      case 'censorship':
        return 'border-yellow-400 hover:border-yellow-300';
      default:
        return 'border-white/20 hover:border-white/40';
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FileText className="w-12 h-12 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 text-yellow-400">
            {t.title}
          </h1>
          <p className="text-lg text-white/70">
            {t.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {Object.entries(t.categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key as Category)}
              className={`px-6 py-3 border transition-all ${
                activeCategory === key
                  ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                  : 'border-white/20 bg-white/5 text-white hover:border-white/40'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Reports Grid */}
        <div className="space-y-6">
          {filteredReports.map((report, index) => (
            <div
              key={index}
              className={`p-6 border ${getCategoryColor(report.category)} bg-white/5 hover:bg-white/10 transition-all`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getCategoryIcon(report.category)}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm text-white/60">{report.date}</span>
                    <span className="text-sm px-2 py-1 border border-white/20 text-white/60">
                      {t.categories[report.category]}
                    </span>
                  </div>
                  <h3 className="text-xl mb-3 text-yellow-400">
                    {language === 'en' ? report.titleEn : report.titleZh}
                  </h3>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    {language === 'en' ? report.contentEn : report.contentZh}
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <p className="text-sm text-white/50">
                      {language === 'en' ? 'Source' : '來源'}: {report.source}
                    </p>
                    {report.url && (
                      <a
                        href={report.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
                      >
                        <span>{language === 'en' ? 'Read Full Article' : '閱讀完整文章'}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archive Note */}
        <div className="mt-12 p-6 border border-yellow-400/50 bg-yellow-400/5">
          <p className="text-white/80 text-sm">
            {language === 'en'
              ? 'All reports are archived and backed up across multiple secure locations. Screenshots and original links are preserved when available.'
              : '所有報導均已存檔並在多個安全位置備份。截圖及原始連結在可能情況下均予保留。'}
          </p>
        </div>
      </div>
    </div>
  );
}