import { BookOpen, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface HowToCiteProps {
  language: 'en' | 'zh';
}

export function HowToCite({ language }: HowToCiteProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const content = {
    en: {
      title: 'How to Cite',
      subtitle: 'Citation guidelines for researchers, journalists, and archivists',
      intro: 'To cite materials from this archive, please use the following format. We recommend using archived URLs to ensure long-term accessibility.',
      formats: {
        title: 'Citation Formats',
        apa: 'APA Style (7th Edition)',
        mla: 'MLA Style (9th Edition)',
        chicago: 'Chicago Style (17th Edition)'
      },
      examples: {
        title: 'Citation Examples',
        general: 'General Archive Citation',
        timeline: 'Timeline Page',
        news: 'Specific News Report'
      },
      guidelines: {
        title: 'Best Practices',
        items: [
          'Always include the date you accessed the material',
          'Use archived URLs (archive.org, archive.today) when available',
          'Include specific page or section titles for clarity',
          'Preserve original language when citing bilingual content',
          'Note if content has been censored or removed from original source'
        ]
      },
      preservation: {
        title: 'Archival Preservation',
        text: 'This archive is regularly backed up and mirrored across multiple secure locations to ensure permanent accessibility. We encourage researchers to create their own backups of materials for redundancy.'
      }
    },
    zh: {
      title: '如何引用',
      subtitle: '研究人員、記者和檔案管理員的引用指南',
      intro: '引用本檔案資料時，請參考以下格式。我們建議使用存檔連結（Archived URL）以確保資料可持續查閱。',
      formats: {
        title: '引用格式',
        apa: 'APA 格式（第7版）',
        mla: 'MLA 格式（第9版）',
        chicago: '芝加哥格式（第17版）'
      },
      examples: {
        title: '引用範例',
        general: '檔案整體引用',
        timeline: '時序表頁面',
        news: '特定新聞報導'
      },
      guidelines: {
        title: '最佳做法',
        items: [
          '務必包含查閱資料的日期',
          '盡可能使用存檔連結（archive.org, archive.today）',
          '為清晰起見，包含具體頁面或章節標題',
          '引用雙語內容時保留原文',
          '若內容已被審查或從原始來源移除，請註明'
        ]
      },
      preservation: {
        title: '檔案保存',
        text: '本檔案定期備份並在多個安全位置設有鏡像，以確保永久可查閱性。我們鼓勵研究人員自行備份資料以增加冗餘。'
      }
    }
  };

  const citations = {
    apa: {
      en: 'Tai Po Fire Archive. (2025). Remembering the victims, recording the truth: Wang Fuk Court fire, November 26, 2025. https://taipofirearchive.org',
      zh: 'Tai Po Fire Archive. (2025). 悼念逝者，捍衛真相：宏福苑大火，2025年11月26日. https://taipofirearchive.org'
    },
    mla: {
      en: 'Tai Po Fire Archive. "Timeline of Events: Wang Fuk Court Fire." Tai Po Fire Archive, 2025, https://taipofirearchive.org/timeline. Accessed 11 Dec. 2025.',
      zh: 'Tai Po Fire Archive. 「事件時序表：宏福苑大火」. Tai Po Fire Archive, 2025, https://taipofirearchive.org/timeline. 查閱於2025年12月11日.'
    },
    chicago: {
      en: 'Tai Po Fire Archive. "Student Arrested for Petition Demanding Independent Inquiry." News Archive, November 29, 2025. https://taipofirearchive.org/news.',
      zh: 'Tai Po Fire Archive. 「學生因發起聯署要求獨立調查被捕」. 新聞檔案, 2025年11月29日. https://taipofirearchive.org/news.'
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const t = content[language];

  return (
    <div className="min-h-screen py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-12 h-12 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 text-yellow-400">
            {t.title}
          </h1>
          <p className="text-lg text-white/70">
            {t.subtitle}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-6 border border-white/10 bg-white/5">
          <p className="text-white/80 leading-relaxed">
            {t.intro}
          </p>
        </div>

        {/* Citation Formats */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-yellow-400">
            {t.formats.title}
          </h2>
          <div className="space-y-6">
            {/* APA */}
            <div className="border border-white/10 bg-white/5 p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl text-yellow-400">{t.formats.apa}</h3>
                <button
                  onClick={() => handleCopy(citations.apa[language], 0)}
                  className="flex items-center gap-2 px-3 py-1 border border-white/20 hover:border-yellow-400 text-white hover:text-yellow-400 transition-colors"
                >
                  {copiedIndex === 0 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span className="text-sm">{language === 'en' ? 'Copy' : '複製'}</span>
                </button>
              </div>
              <p className="font-mono text-sm text-white/70 bg-black/50 p-4 rounded">
                {citations.apa[language]}
              </p>
            </div>

            {/* MLA */}
            <div className="border border-white/10 bg-white/5 p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl text-yellow-400">{t.formats.mla}</h3>
                <button
                  onClick={() => handleCopy(citations.mla[language], 1)}
                  className="flex items-center gap-2 px-3 py-1 border border-white/20 hover:border-yellow-400 text-white hover:text-yellow-400 transition-colors"
                >
                  {copiedIndex === 1 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span className="text-sm">{language === 'en' ? 'Copy' : '複製'}</span>
                </button>
              </div>
              <p className="font-mono text-sm text-white/70 bg-black/50 p-4 rounded">
                {citations.mla[language]}
              </p>
            </div>

            {/* Chicago */}
            <div className="border border-white/10 bg-white/5 p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl text-yellow-400">{t.formats.chicago}</h3>
                <button
                  onClick={() => handleCopy(citations.chicago[language], 2)}
                  className="flex items-center gap-2 px-3 py-1 border border-white/20 hover:border-yellow-400 text-white hover:text-yellow-400 transition-colors"
                >
                  {copiedIndex === 2 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span className="text-sm">{language === 'en' ? 'Copy' : '複製'}</span>
                </button>
              </div>
              <p className="font-mono text-sm text-white/70 bg-black/50 p-4 rounded">
                {citations.chicago[language]}
              </p>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-yellow-400">
            {t.guidelines.title}
          </h2>
          <div className="border border-white/10 bg-white/5 p-6">
            <ul className="space-y-3">
              {t.guidelines.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Archival Preservation */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-yellow-400">
            {t.preservation.title}
          </h2>
          <div className="border border-yellow-400/50 bg-yellow-400/5 p-6">
            <p className="text-white/80 leading-relaxed">
              {t.preservation.text}
            </p>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="p-6 border border-white/10 bg-white/5">
          <h3 className="text-xl mb-4 text-yellow-400">
            {language === 'en' ? 'Archiving Tools' : '存檔工具'}
          </h3>
          <div className="space-y-2 text-white/70">
            <p>• <a href="https://archive.org" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Internet Archive (archive.org)</a></p>
            <p>• <a href="https://archive.today" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Archive.today</a></p>
            <p>• <a href="https://perma.cc" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Perma.cc</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
