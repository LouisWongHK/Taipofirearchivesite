import { useState } from 'react';
import { FileText, AlertTriangle, Users, Shield } from 'lucide-react';

interface NewsReportsProps {
  language: 'en' | 'zh';
}

type Category = 'all' | 'official' | 'independent' | 'crackdown';

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
        crackdown: 'The Crackdown'
      }
    },
    zh: {
      title: '新聞檔案',
      subtitle: '記錄官方聲明、獨立報導及打壓行動',
      categories: {
        all: '所有報導',
        official: '官方聲明',
        independent: '獨立報導',
        crackdown: '清算與拘捕'
      }
    }
  };

  const reports = [
    {
      category: 'official' as Category,
      date: 'Nov 27, 2025',
      titleEn: 'Government Press Conference: "Rumors Will Not Be Tolerated"',
      titleZh: '政府記者會：「不容造謠」',
      contentEn: 'Government spokesman warns public against spreading "unverified information" about the fire. Claims that fire safety procedures were followed and investigations are ongoing. No mention of fire alarm failures.',
      contentZh: '政府發言人警告公眾不要散播「未經證實資訊」。聲稱消防安全程序已遵守，調查正在進行。對火警鐘失靈隻字不提。',
      source: 'Government Information Services'
    },
    {
      category: 'independent' as Category,
      date: 'Nov 27, 2025',
      titleEn: 'Survivors Testimony: "The Alarms Never Rang"',
      titleZh: '生還者證詞：「警鐘從未響起」',
      contentEn: 'Multiple survivors confirm that fire alarms did not activate during the blaze. "We only knew about the fire when we smelled smoke and saw flames outside our windows," said one resident. Many escaped using stairwells filled with toxic smoke.',
      contentZh: '多名生還者確認火警鐘在火災期間並未啟動。「我們只是聞到煙味、看到窗外有火光才知道起火。」一名居民表示。許多人在充滿有毒煙霧的樓梯逃生。',
      source: 'Citizen Journalist Archive'
    },
    {
      category: 'independent' as Category,
      date: 'Nov 28, 2025',
      titleEn: 'Investigation Reveals: Renovation Company Used Banned Materials',
      titleZh: '調查揭露：裝修公司使用違禁物料',
      contentEn: 'Independent investigation finds that the renovation contractor used highly flammable materials banned under fire safety codes. Styrofoam boards and plastic netting accelerated the fire. Questions raised about why building inspections failed to catch violations.',
      contentZh: '獨立調查發現裝修承辦商使用消防安全規例禁用的高度易燃物料。發泡膠板及塑膠圍網加速火勢蔓延。引發為何大廈檢查未能發現違規的質疑。',
      source: 'Investigative Journalists Collective'
    },
    {
      category: 'crackdown' as Category,
      date: 'Nov 29, 2025',
      titleEn: 'Student Arrested for Petition Demanding Independent Inquiry',
      titleZh: '學生因發起聯署要求獨立調查被捕',
      contentEn: 'Miles Kwan, a university student, was arrested at his campus dormitory on charges of sedition. His online petition calling for "Four Big Demands" including independent inquiry, government accountability, fire safety reforms, and no retaliation against victims\' families had garnered over 50,000 signatures.',
      contentZh: 'Miles Kwan，一名大學生，在校園宿舍被以煽動罪拘捕。他在網上發起的「四大訴求」聯署要求獨立調查、政府問責、消防安全改革及不秋後算賬，已獲超過50,000個簽名。',
      source: 'Legal Aid Organizations'
    },
    {
      category: 'official' as Category,
      date: 'Nov 30, 2025',
      titleEn: 'Police: "Seditious Content Will Be Prosecuted"',
      titleZh: '警方：「煽動內容必被檢控」',
      contentEn: 'Police issue statement warning that social media posts criticizing government response or calling for protests will be treated as sedition. Several popular discussion forums shut down their fire-related threads.',
      contentZh: '警方發表聲明警告，批評政府回應或號召抗議的社交媒體帖文將被視為煽動。多個熱門討論區關閉相關火災討論串。',
      source: 'Hong Kong Police Force'
    },
    {
      category: 'crackdown' as Category,
      date: 'Dec 1, 2025',
      titleEn: 'Volunteers Arrested at Memorial Vigil',
      titleZh: '義工在悼念活動被捕',
      contentEn: 'At least 8 volunteers who organized a candlelight memorial at Tai Po were arrested for "unauthorized assembly." They were distributing white flowers and information leaflets about fire safety to passersby.',
      contentZh: '至少8名在大埔組織燭光悼念的義工因「未經批准集結」被捕。他們向路人派發白花及消防安全資訊傳單。',
      source: 'Human Rights Watch HK'
    },
    {
      category: 'crackdown' as Category,
      date: 'Dec 2, 2025',
      titleEn: 'Netizens Face Sedition Charges for Social Media Posts',
      titleZh: '網民因社交媒體發文面臨煽動罪指控',
      contentEn: 'Police arrest at least 6 individuals for Facebook and Instagram posts criticizing fire safety oversight and demanding resignations of responsible officials. Posts included factual reports of alarm failures and photos from the fire scene.',
      contentZh: '警方拘捕至少6人，指其在Facebook和Instagram批評消防安全監管及要求負責官員問責。帖文包括火警鐘失靈的事實報導及火災現場照片。',
      source: 'Digital Rights Observer'
    },
    {
      category: 'independent' as Category,
      date: 'Dec 3, 2025',
      titleEn: 'Families of Victims Speak Out: "We Want Truth, Not Silence"',
      titleZh: '遇難者家屬發聲：「我們要真相，不要沉默」',
      contentEn: 'In rare interviews conducted anonymously, families of victims express frustration with government stonewalling. "They want us to accept compensation and stay quiet. But we lost our loved ones because someone failed to do their job. We deserve answers."',
      contentZh: '在匿名進行的罕見訪問中，遇難者家屬表達對政府阻撓的不滿。「他們要我們收下賠償然後閉嘴。但我們失去親人是因為有人失職。我們應得到答案。」',
      source: 'Anonymous Testimony Archive'
    },
    {
      category: 'official' as Category,
      date: 'Dec 3, 2025',
      titleEn: 'Government Announces Internal Review, Rejects Independent Inquiry',
      titleZh: '政府宣布內部檢討，拒絕獨立調查',
      contentEn: 'Chief Executive announces that an internal government committee will review fire safety regulations. Dismisses calls for independent inquiry as "politically motivated" and "undermining public order."',
      contentZh: '行政長官宣布政府內部委員會將檢討消防安全規例。將獨立調查要求斥為「政治動機」及「破壞公共秩序」。',
      source: 'Government Information Services'
    },
    {
      category: 'independent' as Category,
      date: 'Dec 5, 2025',
      titleEn: 'Censorship Intensifies: Posts Deleted En Masse',
      titleZh: '審查加劇：大量帖文被刪除',
      contentEn: 'Social media platforms begin mass deletion of posts related to the fire, citing "fake news" violations. Several popular hashtags related to the tragedy are blocked. Users report accounts suspended for sharing survivor testimonies.',
      contentZh: '社交媒體平台開始大規模刪除與火災相關的帖文，指違反「假新聞」條款。多個與慘劇相關的熱門主題標籤被封鎖。用戶報告帳戶因分享生還者證詞被暫停。',
      source: 'Internet Freedom Observatory'
    },
    {
      category: 'crackdown' as Category,
      date: 'Dec 8, 2025',
      titleEn: 'Victims\' Families Prevented from Media Contact',
      titleZh: '遇難者家屬被阻止接受媒體採訪',
      contentEn: 'Reports emerge that families of victims are being visited by police and "advised" not to speak to journalists. Some report being threatened with loss of compensation if they "cause trouble."',
      contentZh: '有報導指遇難者家屬受到警方探訪，被「勸告」不要接受記者採訪。有家屬報告被威脅如果「搞事」將失去賠償。',
      source: 'Press Freedom Advocates'
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
                  <p className="text-sm text-white/50">
                    {language === 'en' ? 'Source' : '來源'}: {report.source}
                  </p>
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
