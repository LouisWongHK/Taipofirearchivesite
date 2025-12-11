import { Mail, Shield, Lock, AlertTriangle, ExternalLink } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'zh';
}

export function Contact({ language }: ContactProps) {
  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Secure channels for submissions and communication',
      warning: {
        title: 'Security Warning',
        text: 'For your safety, we strongly recommend using encrypted communication channels. Do not submit sensitive personal data without using a VPN. If you are in Hong Kong or mainland China, take extra precautions to protect your identity.'
      },
      methods: {
        title: 'Contact Methods',
        email: {
          title: 'Encrypted Email',
          description: 'For general inquiries and document submissions',
          address: 'taipofire@proton.me',
          note: 'ProtonMail provides end-to-end encryption'
        },
        signal: {
          title: 'Signal Messenger',
          description: 'For urgent matters and real-time communication',
          handle: '+1-XXX-XXX-XXXX',
          note: 'Signal offers encrypted messaging with disappearing messages'
        },
        pgp: {
          title: 'PGP Encryption',
          description: 'For advanced users requiring additional security',
          note: 'Public PGP key available upon request'
        }
      },
      submit: {
        title: 'How to Submit Information',
        intro: 'If you have information, documents, photos, or testimony to contribute:',
        steps: [
          'Use a VPN to protect your location',
          'Contact us through one of the secure channels above',
          'Do not include your real name unless necessary',
          'Remove metadata from photos and documents before sending',
          'Use encrypted file transfer services (e.g., OnionShare, Send)',
          'We will verify all submissions before publication'
        ]
      },
      safety: {
        title: 'Safety Guidelines',
        items: [
          'Never use your work or school email',
          'Access this site only through VPN or Tor',
          'Clear your browser history regularly',
          'Do not discuss your submission with others',
          'If you feel unsafe at any point, stop immediately',
          'We will never ask for unnecessary personal information'
        ]
      },
      resources: {
        title: 'Digital Safety Resources',
        intro: 'Tools to protect your privacy:',
        items: [
          {
            name: 'Tor Browser',
            description: 'Anonymous web browsing',
            url: 'https://www.torproject.org'
          },
          {
            name: 'ProtonVPN',
            description: 'Secure VPN service',
            url: 'https://protonvpn.com'
          },
          {
            name: 'Signal',
            description: 'Encrypted messaging',
            url: 'https://signal.org'
          },
          {
            name: 'Metadata Removal Tool',
            description: 'Remove identifying data from files',
            url: 'https://www.exifcleaner.com'
          }
        ]
      }
    },
    zh: {
      title: '聯絡我們',
      subtitle: '安全的提交及通訊渠道',
      warning: {
        title: '安全警告',
        text: '為閣下安全起見，我們強烈建議使用加密通訊渠道。傳送敏感個人資料前，請務必使用 VPN。如果您身在香港或中國內地，請採取額外預防措施保護您的身份。'
      },
      methods: {
        title: '聯絡方式',
        email: {
          title: '加密電郵',
          description: '一般查詢及文件提交',
          address: 'taipofire@proton.me',
          note: 'ProtonMail 提供端對端加密'
        },
        signal: {
          title: 'Signal 即時通訊',
          description: '緊急事項及即時通訊',
          handle: '+1-XXX-XXX-XXXX',
          note: 'Signal 提供加密訊息及閱後即焚功能'
        },
        pgp: {
          title: 'PGP 加密',
          description: '需要額外安全保障的進階用戶',
          note: '可應要求提供公開 PGP 金鑰'
        }
      },
      submit: {
        title: '如何提交資料',
        intro: '如果您有資訊、文件、照片或證詞希望提供：',
        steps: [
          '使用 VPN 保護您的位置',
          '透過上述安全渠道之一聯絡我們',
          '除非必要，否則不要包含真實姓名',
          '傳送前從照片和文件中移除元數據',
          '使用加密檔案傳輸服務（例如 OnionShare、Send）',
          '我們會在發布前驗證所有提交內容'
        ]
      },
      safety: {
        title: '安全指引',
        items: [
          '切勿使用工作或學校電郵',
          '只透過 VPN 或 Tor 瀏覽本網站',
          '定期清除瀏覽器歷史記錄',
          '不要與他人討論您的提交',
          '如果在任何時候感到不安全，請立即停止',
          '我們絕不會要求不必要的個人資料'
        ]
      },
      resources: {
        title: '數碼安全資源',
        intro: '保護您私隱的工具：',
        items: [
          {
            name: 'Tor 瀏覽器',
            description: '匿名網頁瀏覽',
            url: 'https://www.torproject.org'
          },
          {
            name: 'ProtonVPN',
            description: '安全 VPN 服務',
            url: 'https://protonvpn.com'
          },
          {
            name: 'Signal',
            description: '加密即時通訊',
            url: 'https://signal.org'
          },
          {
            name: '元數據移除工具',
            description: '從檔案中移除識別數據',
            url: 'https://www.exifcleaner.com'
          }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 text-yellow-400">
            {t.title}
          </h1>
          <p className="text-lg text-white/70">
            {t.subtitle}
          </p>
        </div>

        {/* Security Warning */}
        <div className="mb-12 p-6 border-2 border-yellow-400 bg-yellow-400/10">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl mb-3 text-yellow-400">
                {t.warning.title}
              </h2>
              <p className="text-white/90 leading-relaxed">
                {t.warning.text}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-yellow-400">
            {t.methods.title}
          </h2>
          <div className="space-y-6">
            {/* Email */}
            <div className="border border-white/10 bg-white/5 p-6 hover:border-yellow-400/50 transition-colors">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl mb-2 text-yellow-400">
                    {t.methods.email.title}
                  </h3>
                  <p className="text-white/70 mb-3">
                    {t.methods.email.description}
                  </p>
                  <p className="font-mono text-lg text-white mb-2">
                    {t.methods.email.address}
                  </p>
                  <p className="text-sm text-white/50">
                    {t.methods.email.note}
                  </p>
                </div>
              </div>
            </div>

            {/* Signal */}
            <div className="border border-white/10 bg-white/5 p-6 hover:border-yellow-400/50 transition-colors">
              <div className="flex items-start gap-4">
                <Lock className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl mb-2 text-yellow-400">
                    {t.methods.signal.title}
                  </h3>
                  <p className="text-white/70 mb-3">
                    {t.methods.signal.description}
                  </p>
                  <p className="font-mono text-lg text-white mb-2">
                    {t.methods.signal.handle}
                  </p>
                  <p className="text-sm text-white/50">
                    {t.methods.signal.note}
                  </p>
                </div>
              </div>
            </div>

            {/* PGP */}
            <div className="border border-white/10 bg-white/5 p-6 hover:border-yellow-400/50 transition-colors">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl mb-2 text-yellow-400">
                    {t.methods.pgp.title}
                  </h3>
                  <p className="text-white/70 mb-3">
                    {t.methods.pgp.description}
                  </p>
                  <p className="text-sm text-white/50">
                    {t.methods.pgp.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Submit */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-yellow-400">
            {t.submit.title}
          </h2>
          <div className="border border-white/10 bg-white/5 p-6">
            <p className="text-white/80 mb-4">
              {t.submit.intro}
            </p>
            <ol className="space-y-3">
              {t.submit.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-white/80">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Safety Guidelines */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-yellow-400">
            {t.safety.title}
          </h2>
          <div className="border border-white/10 bg-white/5 p-6">
            <ul className="space-y-3">
              {t.safety.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Digital Safety Resources */}
        <div>
          <h2 className="text-3xl mb-6 text-yellow-400">
            {t.resources.title}
          </h2>
          <p className="text-white/80 mb-4">
            {t.resources.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.resources.items.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 bg-white/5 p-4 hover:border-yellow-400 hover:bg-yellow-400/5 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg text-yellow-400 group-hover:text-yellow-300 mb-1">
                      {resource.name}
                    </h3>
                    <p className="text-sm text-white/60">
                      {resource.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-yellow-400 flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Final Note */}
        <div className="mt-12 p-6 border border-yellow-400/50 bg-yellow-400/5">
          <p className="text-white/80 text-center leading-relaxed">
            {language === 'en'
              ? 'We take your security seriously. All communications are handled with strict confidentiality. Your safety is our priority.'
              : '我們認真對待您的安全。所有通訊均以嚴格保密方式處理。您的安全是我們的首要考慮。'}
          </p>
        </div>
      </div>
    </div>
  );
}
