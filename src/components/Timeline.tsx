import { Clock } from "lucide-react";

interface TimelineProps {
  language: "en" | "zh";
}

interface TimelineEvent {
  date: string;
  time?: string;
  en: string;
  zh: string;
  type:
    | "fire"
    | "government"
    | "arrest"
    | "censorship"
    | "rescue";
}

export function Timeline({ language }: TimelineProps) {
  const content = {
    en: {
      title: "Timeline of Events",
      subtitle:
        "A chronological record of the fire, rescue operations, government response, and subsequent crackdown",
    },
    zh: {
      title: "事件時序表",
      subtitle: "火災、救援行動、政府回應及後續打壓的時序記錄",
    },
  };

  const events: TimelineEvent[] = [
    {
      date: "Nov 26",
      time: "14:50",
      en: "Fire breaks out at Wang Fuk Court (Hung Cheong House). Scaffolding ignites, witnesses hear loud explosion.",
      zh: "宏福苑（宏昌閣）起火，棚架起火，目擊者聽到巨響。",
      type: "fire",
    },
    {
      date: "Nov 26",
      time: "14:51",
      en: "Fire Department receives emergency call. Fire rapidly spreads across external wall protection netting.",
      zh: "消防處接報，火勢迅速蔓延外牆防護網。",
      type: "fire",
    },
    {
      date: "Nov 26",
      time: "15:00",
      en: "Residents report fire alarms never sounded. Many unable to escape as smoke fills corridors.",
      zh: "居民報告火警鐘全程無響起，無法逃生，煙霧充斥走廊。",
      type: "fire",
    },
    {
      date: "Nov 26",
      time: "15:01-15:02",
      en: "First firefighters arrive. Fire already reached 4th floor. Immediately escalated to No. 3 Alarm.",
      zh: "首批消防員到場，火已擴至4樓，即時定為三級火警。",
      type: "rescue",
    },
    {
      date: "Nov 26",
      time: "15:34",
      en: "Escalated to No. 4 Alarm.",
      zh: "升為四級火警。",
      type: "rescue",
    },
    {
      date: "Nov 26",
      time: "18:22",
      en: "Escalated to No. 5 Alarm - highest level. 760 firefighters and 304 vehicles deployed.",
      zh: "升為五級火警（最高級別），動員760名消防員、304輛車。",
      type: "rescue",
    },
    {
      date: "Nov 26",
      time: "19:00",
      en: "Initial casualty report: 4 dead, 7 injured.",
      zh: "初步傷亡：4死7傷。",
      type: "fire",
    },
    {
      date: "Nov 26",
      time: "23:00",
      en: "Small fire at rear hill of Wong Siu Chi Secondary School extinguished. Casualties rise to 13 dead, 30 injured.",
      zh: "王肇枝中學後山小火撲滅，傷亡上升至13死30傷。",
      type: "rescue",
    },
    {
      date: "Nov 27",
      time: "00:01",
      en: "Chief Executive John Lee Ka-chiu visits injured victims.",
      zh: "行政長官李家超慰問傷者。",
      type: "government",
    },
    {
      date: "Nov 27",
      time: "05:45",
      en: "Police arrest 3 individuals from renovation company. Death toll reaches at least 44.",
      zh: "警方拘捕維修公司3人，死亡人數達至少44人。",
      type: "government",
    },
    {
      date: "Nov 27",
      time: "17:00",
      en: "Death toll updated to 55.",
      zh: "死亡人數更新為55人。",
      type: "fire",
    },
    {
      date: "Nov 28",
      time: "06:00",
      en: "Casualties include 1 firefighter killed in action. Total: 94 dead, 76 injured.",
      zh: "傷亡包括1名消防員殉職，總計94死76傷。",
      type: "fire",
    },
    {
      date: "Nov 28",
      time: "10:18",
      en: "Fire largely extinguished after burning for 43 hours.",
      zh: "火警焚燒43小時後大致救熄。",
      type: "rescue",
    },
    {
      date: "Nov 28",
      time: "15:00",
      en: "Final preliminary count: 128 dead, 78 injured, approximately 200 missing.",
      zh: "初步最終統計：128死78傷，約200人失蹤。",
      type: "fire",
    },
    {
      date: "Nov 29",
      time: "08:00",
      en: "Government declares 3-day mourning period. Flags at half-mast across all government buildings.",
      zh: "政府宣布三日哀悼期，全港政府建築物下半旗誌哀。",
      type: "government",
    },
    {
      date: "Nov 29",
      time: "09:00",
      en: "Disaster Victim Identification Unit (DVIU) begins systematic search of fire scene.",
      zh: "災難遇害者辨認組開始系統性搜索火場。",
      type: "rescue",
    },
    {
      date: "Nov 29",
      time: "",
      en: 'University student Miles Kwan arrested for "sedition" after launching Change.org petition with "Four Big Demands" calling for independent inquiry, accountability, fire safety reforms, and protection for victims\' families.',
      zh: "大學生 Miles Kwan 因在 Change.org 發起「四大訴求」聯署被以「煽動」罪拘捕，聯署要求獨立調查、問責、消防安全改革及保護遇難者家屬。",
      type: "arrest",
    },
    {
      date: "Nov 30",
      time: "10:00",
      en: "Indonesian Consulate reports 7 Indonesian domestic workers dead, 45 missing. Estimated 140 Indonesian citizens lived/worked at Wang Fuk Court.",
      zh: "印尼駐港總領事館報告7名印傭喪生、45人失蹤，估計共140名印尼公民在宏福苑居住及工作。",
      type: "fire",
    },
    {
      date: "Nov 30",
      time: "18:00",
      en: "Updated toll: 146 dead, 79 injured. DVIU found 30 bodies. 54 bodies await identification. Over 1,500 units inspected.",
      zh: "最新傷亡：146死79傷，災難辨認組發現30具遺體，54具待辨認。超過1,500個單位已檢查。",
      type: "rescue",
    },
    {
      date: "Dec 1",
      time: "",
      en: "Indonesian Consulate confirms 9 Indonesian domestic workers dead, 1 hospitalized, 36 still missing.",
      zh: "印尼駐港總領事館確認9名印傭喪生、1人留醫、36人下落不明。",
      type: "fire",
    },
    {
      date: "Dec 2",
      time: "09:58",
      en: "Chief Executive announces establishment of Independent Committee to investigate the incident.",
      zh: "行政長官宣布成立獨立委員會調查事故。",
      type: "government",
    },
    {
      date: "Dec 2-3",
      time: "",
      en: 'Student activists Hailey Cheng and Ellie Yuen (both early 20s, HKU and CityU students) forced to issue public statements ceasing all advocacy. Cheng states she will have "no association with foreign forces." Yuen had conducted BBC interviews demanding truth.',
      zh: "學生活動人士鄭海莉（Hailey Cheng）和袁艾莉（Ellie Yuen）（均為20歲出頭，就讀港大及城大）被迫發表公開聲明停止所有倡議活動。鄭表示將「不與外國勢力有任何聯繫」。袁曾接受BBC訪問要求真相。",
      type: "censorship",
    },
    {
      date: "Dec 5",
      time: "",
      en: 'Security Secretary Chris Tang condemns Wall Street Journal editorial titled "No fire critics allowed in Hong Kong," accusing WSJ of ignoring government support efforts and warns against "sabotaging recovery work."',
      zh: "保安局局長鄧炳強譴責《華爾街日報》社論「香港不容火災批評者」，指責WSJ忽視政府支援工作，並警告不要「破壞恢復工作」。",
      type: "government",
    },
    {
      date: "Dec 6",
      time: "",
      en: 'Beijing\'s Liaison Office summons foreign journalists for "warning talks" about fire coverage. Uses phrase "Don\'t say we didn\'t warn you" - historically used before Chinese military action.',
      zh: "北京駐港聯絡辦公室召見外國記者就火災報導進行「警告談話」，使用「別說我們沒警告你」一語——歷史上在中國軍事行動前使用。",
      type: "censorship",
    },
    {
      date: "Ongoing",
      time: "",
      en: "Final death toll: 160 dead, 79 injured, 6 missing. Over 10,000 signed petition before it was taken offline.",
      zh: "最終死亡人數：160死79傷6失蹤。聯署在被下線前獲超過10,000個簽名。",
      type: "fire",
    },
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case "fire":
        return "border-red-500 bg-red-500/10";
      case "rescue":
        return "border-orange-400 bg-orange-400/10";
      case "government":
        return "border-blue-400 bg-blue-400/10";
      case "arrest":
        return "border-yellow-400 bg-yellow-400/10";
      case "censorship":
        return "border-purple-400 bg-purple-400/10";
      default:
        return "border-white/20 bg-white/5";
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
          <p className="text-lg text-white/70">{t.subtitle}</p>
        </div>

        {/* Legend */}
        <div className="mb-12 p-6 border border-white/10 bg-white/5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500"></div>
              <span>
                {language === "en" ? "Fire Events" : "火災事件"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-400"></div>
              <span>
                {language === "en" ? "Rescue Ops" : "救援行動"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400"></div>
              <span>
                {language === "en"
                  ? "Gov Response"
                  : "政府回應"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400"></div>
              <span>
                {language === "en" ? "Arrests" : "拘捕行動"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400"></div>
              <span>
                {language === "en" ? "Censorship" : "審查行動"}
              </span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2"></div>

          {events.map((event, index) => (
            <div key={index} className="relative mb-8 md:mb-12">
              <div
                className={`md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
              >
                {/* Date */}
                <div
                  className={`md:w-1/2 mb-4 md:mb-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} ml-8 md:ml-0`}
                >
                  <div className="inline-block px-4 py-2 bg-black border border-yellow-400 text-yellow-400">
                    {event.date}
                    {event.time && (
                      <span className="ml-2 text-white/60">
                        {event.time}
                      </span>
                    )}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 md:translate-x-0 border-4 border-black"></div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}
                >
                  <div
                    className={`p-6 border ${getEventColor(event.type)} hover:border-yellow-400/50 transition-colors`}
                  >
                    <p className="text-white leading-relaxed">
                      {language === "en" ? event.en : event.zh}
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
            {language === "en"
              ? "Timeline compiled from Wikipedia, SBS, RTHK, Hong Kong Free Press, and government sources. This archive is updated as verified information becomes available."
              : "時序表整合自維基百科、SBS、香港電台、香港自由新聞及政府資料來源。此檔案隨著經核實資料的出現而更新。"}
          </p>
        </div>
      </div>
    </div>
  );
}