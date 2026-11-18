import type { LessonQuiz } from './types'

// Quizzes for the second wave of Investing lessons.
export const QUIZZES_INVESTING2: Record<string, LessonQuiz> = {
  'investing/first-investment-order': {
    ar: [
      { q: 'أحسن أول استثمار لمبتدئ:', options: ['صندوق نقدي يومي أو وثيقة بنكية', 'مضاربة يومية في الأسهم', 'عملة رقمية مجهولة'], answer: 0 },
      { q: 'مبلغ صغير ثابت كل شهر ولا مبلغ كبير مرة واحدة؟', options: ['الكبير مرة واحدة أحسن دايما', 'الصغير الثابت يبني العادة ويقلل مخاطرة التوقيت', 'الاتنين زي بعض'], answer: 1 },
      { q: 'شراء الأسهم في البورصة المصرية بيتم عن طريق:', options: ['محل صرافة', 'كود موحد عبر شركة وساطة مرخصة', 'البنك المركزي مباشرة'], answer: 1 },
    ],
    en: [
      { q: 'The best first investment for a beginner:', options: ['A daily money-market fund or bank CD', 'Day-trading stocks', 'An obscure cryptocurrency'], answer: 0 },
      { q: 'Small fixed monthly amount or one large lump sum?', options: ['A lump sum is always better', 'Small fixed amounts build habit and reduce timing risk', 'They are identical'], answer: 1 },
      { q: 'Buying stocks on the Egyptian Exchange happens through:', options: ['An exchange office', 'A unified code via a licensed brokerage', 'The Central Bank directly'], answer: 1 },
    ],
  },
  'investing/stock-red-days': {
    ar: [
      { q: 'سهم نزل 50% محتاج يطلع قد إيه عشان يرجع لسعره؟', options: ['50%', '100%', '25%'], answer: 1 },
      { q: 'إمتى البيع في النزول يكون قرار صح؟', options: ['لما الكل يبيع', 'لما سبب الشراء الأصلي يتغير', 'أول ما تشوف أحمر'], answer: 1 },
      { q: 'فلوس هتحتاجها بعد 3 شهور مكانها:', options: ['أسهم عشان تكسب بسرعة', 'أدوات قصيرة الأجل زي صندوق يومي أو وديعة', 'عملات رقمية'], answer: 1 },
    ],
    en: [
      { q: 'A stock fell 50%. What gain brings it back?', options: ['50%', '100%', '25%'], answer: 1 },
      { q: 'When is selling during a drop the right call?', options: ['When everyone sells', 'When your original reason to buy changed', 'The moment you see red'], answer: 1 },
      { q: 'Money you need in 3 months belongs in:', options: ['Stocks for quick gains', 'Short-term tools like a daily fund or deposit', 'Cryptocurrencies'], answer: 1 },
    ],
  },
  'investing/gold-coins-bullion': {
    ar: [
      { q: 'أنسب شكل دهب للاستثمار الصافي:', options: ['المشغولات', 'السبايك 24 قيراط', 'الشبكة'], answer: 1 },
      { q: 'الفرق بين سعر بيع وشراء الدهب عند التاجر هو:', options: ['ضريبة حكومية', 'هامش ربح التاجر', 'خطأ حسابي'], answer: 1 },
      { q: 'إيه الصح عن الدهب كاستثمار؟', options: ['بيدي دخل شهري ثابت', 'مكسبه من فرق السعر بس ومش سائل زي الصندوق', 'سعره ثابت'], answer: 1 },
    ],
    en: [
      { q: 'Which gold form suits pure investment best?', options: ['Jewelry', '24k bullion bars', 'The engagement set'], answer: 1 },
      { q: 'The buy-sell price gap at a gold dealer is:', options: ['A government tax', "The dealer's margin", 'A miscalculation'], answer: 1 },
      { q: 'What is true about gold as an investment?', options: ['It pays fixed monthly income', 'Gains come only from price moves and it is less liquid than a fund', 'Its price never changes'], answer: 1 },
    ],
  },
  'investing/real-estate-investing-egypt': {
    ar: [
      { q: 'العائد الإيجاري المعتاد للعقار في مصر:', options: ['3-6% سنويا', '25% سنويا', '50% سنويا'], answer: 0 },
      { q: 'من التكاليف الخفية للعقار:', options: ['الصيانة وشهور الفراغ بين المستأجرين', 'لون الطلاء', 'اسم الشارع'], answer: 0 },
      { q: 'العقار "مش سائل" يعني:', options: ['مبيتخزنش في البنك', 'بيعه ممكن ياخد شهور لما تحتاج الفلوس', 'مفيهوش مياه'], answer: 1 },
    ],
    en: [
      { q: 'Typical rental yield in Egypt:', options: ['3-6% yearly', '25% yearly', '50% yearly'], answer: 0 },
      { q: 'A hidden cost of property:', options: ['Maintenance and vacancy gaps between tenants', 'Paint color', 'Street name'], answer: 0 },
      { q: 'Property being "illiquid" means:', options: ['It cannot be stored in a bank', 'Selling can take months when you need cash', 'It has no plumbing'], answer: 1 },
    ],
  },
  'investing/asset-allocation': {
    ar: [
      { q: 'الهدف الأساسي من التنويع:', options: ['أعلى عائد مهما كانت المخاطرة', 'عائد كويس مع حماية من خسارة واحدة كبيرة', 'تجميع أكبر عدد أسهم'], answer: 1 },
      { q: '5 أسهم في نفس القطاع تعتبر تنويع؟', options: ['أيوه طالما شركات مختلفة', 'لأ، بينزلوا مع بعض لما القطاع يتضرب', 'أيوه لو رخيصة'], answer: 1 },
      { q: 'إعادة التوازن السنوية معناها:', options: ['بيع كل حاجة', 'تقليص اللي زاد عن نسبته وزيادة اللي قل', 'نقل الفلوس لبنك تاني'], answer: 1 },
    ],
    en: [
      { q: 'The main goal of diversification:', options: ['Maximum return regardless of risk', 'Good return with protection from one big loss', 'Collecting the most stocks'], answer: 1 },
      { q: 'Are 5 stocks in one sector diversification?', options: ['Yes, different companies count', 'No, they fall together when the sector is hit', 'Yes, if cheap'], answer: 1 },
      { q: 'Yearly rebalancing means:', options: ['Selling everything', 'Trimming what exceeded its share and adding to what fell', 'Moving money to another bank'], answer: 1 },
    ],
  },
  'investing/long-term-investing': {
    ar: [
      { q: 'الفائدة المركبة معناها:', options: ['الفايدة على أصل المبلغ بس', 'أرباحك نفسها بتكسب أرباح', 'الفايدة بتقل مع الوقت'], answer: 1 },
      { q: '10,000 جنيه بعائد 15% سنويا بعد 10 سنين تقريبا:', options: ['25,000', '40,000', '15,000'], answer: 1 },
      { q: 'الأهم للمستثمر طويل الأجل:', options: ['توقيت الدخول المثالي', 'الوقت اللي الفلوس قضته في السوق', 'متابعة السعر كل ساعة'], answer: 1 },
    ],
    en: [
      { q: 'Compounding means:', options: ['Interest on the principal only', 'Your gains themselves earn gains', 'Interest shrinks over time'], answer: 1 },
      { q: 'EGP 10,000 at 15% yearly becomes roughly in 10 years:', options: ['25,000', '40,000', '15,000'], answer: 1 },
      { q: 'What matters most to a long-term investor:', options: ['Perfect entry timing', 'Time spent in the market', 'Watching prices hourly'], answer: 1 },
    ],
  },
}
