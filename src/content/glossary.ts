// ==============================================================================
// Egypt-specific money glossary. Every term explained in Egyptian Arabic with a
// full English translation, focused on how the term shows up in Egyptian life.
// ==============================================================================

export interface GlossaryTerm {
  /** Arabic term as Egyptians say it. */
  ar: string
  /** English equivalent term. */
  en: string
  /** Egyptian Arabic explanation. */
  arBody: string
  /** English explanation. */
  enBody: string
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    ar: 'التضخم',
    en: 'Inflation',
    arBody: 'غلاء الأسعار مع الوقت: نفس الـ 100 جنيه بتشتري بيها حاجات أقل كل سنة. عشان كده فلوسك لازم تشتغل بعائد يغطي التضخم على الأقل.',
    enBody: 'Prices rising over time: the same 100 EGP buys less every year. That is why your money must earn a return that at least covers inflation.',
  },
  {
    ar: 'الفايدة المركبة',
    en: 'Compound interest',
    arBody: 'إن ربحك يفضل جوه الاستثمار وييجي عليه ربح كمان. بمرور السنين النمو بيتسارع بشكل مفاجئ. جرب الحاسبة في صفحة الحاسبات.',
    enBody: 'Your profit stays invested and earns profit too. Over the years growth accelerates surprisingly. Try the calculator on the calculators page.',
  },
  {
    ar: 'شهادة الادخار',
    en: 'Savings certificate (CD)',
    arBody: 'بتدي البنك مبلغ لفترة محددة مقابل عائد ثابت. آمنة جدا لكن كسرها قبل الميعاد بيخصم من العائد، وأسعارها بتتغير مع قرارات البنك المركزي.',
    enBody: 'You lend the bank an amount for a fixed term for a fixed return. Very safe, but breaking it early cuts the return, and rates change with Central Bank decisions.',
  },
  {
    ar: 'الصكوك',
    en: 'Sukuk',
    arBody: 'أداة استثمار إسلامية: بدل فايدة على قرض، انت شريك في أصل أو نشاط وبتحصل على نصيب من عائده. بتطرحها الحكومة وشركات بصيغ شرعية.',
    enBody: 'An Islamic investment instrument: instead of interest on a loan, you share ownership of an asset or activity and earn a share of its return. Issued by the government and companies in Sharia-compliant forms.',
  },
  {
    ar: 'البورصة المصرية (EGX)',
    en: 'The Egyptian Exchange',
    arBody: 'السوق الرسمي اللي بتتباع وتتشترى فيه أسهم الشركات المصرية المقيدة. التداول بيتم عن طريق شركات سمسرة مرخصة.',
    enBody: 'The official market where shares of listed Egyptian companies are bought and sold. Trading happens through licensed brokerage firms.',
  },
  {
    ar: 'السهم',
    en: 'Stock / share',
    arBody: 'حصة ملكية صغيرة في شركة. الشركة تكبر وتربح، سهمك يكبر. الشركة تخسر، سهمك ينزل. مش ورقة يانصيب: وراها شركة حقيقية.',
    enBody: 'A small ownership share in a company. The company grows and profits, your share grows; it loses, your share drops. Not a lottery ticket: a real company stands behind it.',
  },
  {
    ar: 'صندوق الاستثمار',
    en: 'Investment fund',
    arBody: 'بيجمع فلوس ناس كتير ومحترفين يستثمروها في أدوات متنوعة. في مصر أشهرها الصناديق النقدية (مخاطرة قليلة) وصناديق الأسهم (مخاطرة أعلى).',
    enBody: 'Pools money from many people and professionals invest it across diversified tools. In Egypt the most common are money-market funds (lower risk) and equity funds (higher risk).',
  },
  {
    ar: 'وثيقة الصندوق',
    en: 'Fund unit',
    arBody: 'حصتك في صندوق الاستثمار. سعرها بيتحدد بقيمة استثمارات الصندوق، وبتقدر تشتريها وتبيعها من البنك أو شركة الإدارة.',
    enBody: 'Your share of an investment fund. Its price follows the value of the fund\'s investments, and you buy and sell it through the bank or the asset manager.',
  },
  {
    ar: 'السيولة',
    en: 'Liquidity',
    arBody: 'قد إيه تقدر تحول حاجة لكاش بسرعة ومن غير خسارة. الكاش سيولة عالية، العقار سيولة قليلة (بيعه بياخد وقت).',
    enBody: 'How fast you can turn something into cash without loss. Cash is highly liquid; real estate is illiquid (selling takes time).',
  },
  {
    ar: 'العائد',
    en: 'Return / yield',
    arBody: 'اللي بيكسبه مالك في فترة معينة، وبيتقال كنسبة سنوية غالبا. عائد أعلى عادة يعني مخاطرة أعلى - مفيش غدا ببلاش.',
    enBody: 'What your money earns over a period, usually quoted as a yearly percentage. A higher return usually means higher risk - there is no free lunch.',
  },
  {
    ar: 'المخاطرة',
    en: 'Risk',
    arBody: 'احتمال إن الاستثمار يطلع أقل من توقعك أو تخسر جزء من فلوسك. مش حاجة وحشة بالضرورة، لكن لازم تكون فاهمها وقدها.',
    enBody: 'The chance an investment does worse than expected or loses part of your money. Not necessarily bad, but you must understand it and afford it.',
  },
  {
    ar: 'التنويع',
    en: 'Diversification',
    arBody: 'توزيع فلوسك على أصول مختلفة عشان مشكلة واحدة متهلكش كل حاجة. "متحطش البيض كله في سلة واحدة".',
    enBody: 'Spreading your money across different assets so one problem does not wreck everything. "Do not put all eggs in one basket".',
  },
  {
    ar: 'المصنعية',
    en: 'Workmanship fee',
    arBody: 'فرق سعر تصنيع المشغولات الذهبية فوق سعر الجرام. عند البيع بترجع بالوزن بس، يعني المصنعية خسارة - للادخار خليك في السبائك والجنيهات.',
    enBody: 'The crafting fee of gold jewelry above the gram price. On resale you get paid by weight only, so the fee is lost - for saving, stick to bars and coins.',
  },
  {
    ar: 'عيار 21 / 24 / 18',
    en: 'Gold karat (21/24/18)',
    arBody: 'نسبة نقاء الدهب: 24 الأنقى (للسبائك)، 21 الأشهر في مصر، 18 أقل نقاء وأرخص. لما تشتري اسأل على العيار لأن سعر الجرام بيختلف بيه.',
    enBody: 'Gold purity: 24 is purest (bars), 21 is the most common in Egypt, 18 is less pure and cheaper. Ask about the karat when buying, since the gram price changes with it.',
  },
  {
    ar: 'تعويم الجنيه',
    en: 'Currency float / devaluation',
    arBody: 'إن سعر الجنيه قدام العملات الأجنبية يتحرر (أو يتخفض) حسب السوق. بيرفع أسعار الحاجات المستوردة، وبيخلي الادخار بالجنيه بس مخاطرة.',
    enBody: 'Letting the pound\'s price against foreign currencies move (or drop) with the market. It raises prices of imports and makes saving in pounds alone a risk.',
  },
  {
    ar: 'البنك المركزي',
    en: 'The Central Bank (CBE)',
    arBody: 'الجهة اللي بتحدد أسعار الفايدة الأساسية وتدير السياسة النقدية في مصر. قراراته بتوصل لعائد الشهادات والقروض اللي في إيدك.',
    enBody: 'The body that sets base interest rates and runs monetary policy in Egypt. Its decisions reach the certificate and loan rates in your hands.',
  },
  {
    ar: 'المحفظة الإلكترونية',
    en: 'Mobile wallet',
    arBody: 'حساب فلوس على موبايلك زي فودافون كاش وانستاباي: تحول وتستلم وتدفع فواتير. مفيدة للتحويل التلقائي بتاع الادخار.',
    enBody: 'A money account on your phone like Vodafone Cash and InstaPay: transfer, receive and pay bills. Useful for the automatic saving transfer.',
  },
  {
    ar: 'انستاباي',
    en: 'InstaPay',
    arBody: 'نظام تحويلات فورية بين البنوك المصرية من التليفون. التحويلات الصغيرة برسوم رمزية أو من غير، وبتشتغل 24 ساعة.',
    enBody: 'An instant transfer system between Egyptian banks from your phone. Small transfers are nearly free and it works around the clock.',
  },
  {
    ar: 'التقسيط',
    en: 'Installments',
    arBody: 'شراء حاجة وتدفع ثمنها على شهور. مريح لكن احسب إجمالي اللي هتدفعه مقارنة بسعر الكاش: الفرق هو سعر الراحة، وساعات بيكون غالي.',
    enBody: 'Buying something and paying over months. Comfortable, but compare the total you will pay to the cash price: the difference is the price of comfort, and it is often expensive.',
  },
  {
    ar: 'صافي الدخل',
    en: 'Net income',
    arBody: 'اللي بيوصل إيدك فعلا بعد الخصومات والتأمينات، مش الرقم المكتوب في العقد. ميزانيتك بتتبني على الصافي ده.',
    enBody: 'What actually reaches your hand after deductions and insurance, not the number in the contract. Your budget is built on this net figure.',
  },
  {
    ar: 'صندوق الطوارئ',
    en: 'Emergency fund',
    arBody: 'مبلغ مدخر للمفاجآت بس (مرض، فصل من الشغل، ظرف عائلي)، قيمته من 3 لـ 6 شهور مصاريف أساسية، ومكانه سائل وآمن.',
    enBody: 'Money saved only for surprises (illness, job loss, family emergencies), sized at 3-6 months of essential expenses, kept liquid and safe.',
  },
  {
    ar: 'الدخل السلبي',
    en: 'Passive income',
    arBody: 'دخل بييجي من أصل اشتغل مرة وبيفضل يدر: إيجار، أرباح أسهم، مشروع شغال من غيرك. بيتبني بشغل وفلوس في الأول، مش من فراغ.',
    enBody: 'Income from an asset that works once and keeps paying: rent, stock dividends, a business running without you. It is built with work and money first, not from nothing.',
  },
]
