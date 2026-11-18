import type { LessonQuiz } from './types'

// Quizzes for Side Income, Business and Mindset tracks. Key: "<track>/<lesson>".
export const QUIZZES_B: Record<string, LessonQuiz> = {
  'side-income/skill-you-can-sell': {
    ar: [
      { q: 'أسرع طريق لدخل إضافي:', options: ['شغلانة تانية مرهقة', 'مهارة مطلوبة تتعلمها وتبيعها', 'اليانصيب'], answer: 1 },
      { q: 'تختار مهارتك على أساس:', options: ['الموضة', 'حاجة انت كويس فيها + الناس بتدفع فيها + تتعلم في شهور', 'أغلى كورس'], answer: 1 },
      { q: 'في التعلم المجاني، الأفضل:', options: ['عشرة مصادر مع بعض', 'مصدر واحد يتخلص للآخر', 'المشاهدة من غير تطبيق'], answer: 1 },
    ],
    en: [
      { q: 'The fastest route to extra income:', options: ['A second exhausting job', 'An in-demand skill you learn and sell', 'The lottery'], answer: 1 },
      { q: 'Pick your skill based on:', options: ['Trends', 'What you are good at + people pay for + learnable in months', 'The priciest course'], answer: 1 },
      { q: 'For free learning, best is:', options: ['Ten sources at once', 'One source finished fully', 'Watching without practice'], answer: 1 },
    ],
  },
  'side-income/freelancing-online': {
    ar: [
      { q: 'أهم أصل في الشغل الحر في البداية:', options: ['الشهادات', 'محفظة الأعمال والتقييمات', 'الإعلانات الممولة'], answer: 1 },
      { q: 'التسعير في البداية:', options: ['أعلى سعر في السوق', 'سعر بسيط مقابل تقييمات كويسة', 'ببلاش دايما'], answer: 1 },
      { q: 'اللي بيبني السمعة أسرع:', options: ['الموهبة لوحدها', 'الالتزام والكلام الواضح', 'الاختفاء وقت التأخير'], answer: 1 },
    ],
    en: [
      { q: 'The key freelance asset early on:', options: ['Certificates', 'Portfolio and reviews', 'Paid ads'], answer: 1 },
      { q: 'Pricing at the start:', options: ['Top market rate', 'A simple rate in exchange for good reviews', 'Always free'], answer: 1 },
      { q: 'What builds reputation fastest:', options: ['Talent alone', 'Commitment and clear communication', 'Vanishing when late'], answer: 1 },
    ],
  },
  'side-income/selling-online': {
    ar: [
      { q: 'البيع بالطلب ميزته إنك:', options: ['تجرب السوق من غير مخزون', 'تشتري مخزون كبير', 'متحتاجش عملاء'], answer: 0 },
      { q: 'المنتج الصح هو اللي:', options: ['شكله حلو بس', 'بيحل مشكلة وسعره بيستحمل هامش', 'أرخص حاجة'], answer: 1 },
      { q: 'الربح الحقيقي بيتحسب بعد:', options: ['فرق السعرين بس', 'الشحن والإعلانات والمرتجعات', 'عدد اللايكات'], answer: 1 },
    ],
    en: [
      { q: 'Sell-on-order lets you:', options: ['Test the market without inventory', 'Buy big inventory', 'Skip needing customers'], answer: 0 },
      { q: 'The right product:', options: ['Just looks nice', 'Solves a problem and keeps a margin', 'Is the cheapest'], answer: 1 },
      { q: 'Real profit is counted after:', options: ['The price gap only', 'Shipping, ads and returns', 'The likes count'], answer: 1 },
    ],
  },
  'side-income/time-is-money': {
    ar: [
      { q: 'سعر ساعتك بيتحسب بـ:', options: ['الدخل ÷ ساعات الشغل', 'الدخل ÷ 30', 'أي رقم'], answer: 0 },
      { q: 'أعلى عائد على الوقت:', options: ['التعلم', 'السهر', 'السوشيال ميديا'], answer: 0 },
      { q: 'قول "لا" أكتر معناه:', options: ['العزلة', 'حماية أولوياتك', 'قلة الأدب'], answer: 1 },
    ],
    en: [
      { q: 'Your hourly rate is computed as:', options: ['Income ÷ working hours', 'Income ÷ 30', 'Any number'], answer: 0 },
      { q: 'The highest return on time:', options: ['Learning', 'Staying up late', 'Social media'], answer: 0 },
      { q: 'Saying "no" more means:', options: ['Isolation', 'Protecting your priorities', 'Being rude'], answer: 1 },
    ],
  },
  'business/validate-your-idea': {
    ar: [
      { q: 'أحسن الأفكار بتيجي من:', options: ['الخيال', 'ملاحظة مشاكل الناس اليومية', 'تقليد الأجانب حرفيا'], answer: 1 },
      { q: 'في اختبار الـ 10 أشخاص اسأل عن:', options: ['رأيهم في الفكرة', 'سلوكهم السابق وفلوس دفعوها', 'لونهم المفضل'], answer: 1 },
      { q: 'أصدق اختبار للطلب:', options: ['اللايكات', 'الكلام الحلو', 'البيع المسبق'], answer: 2 },
    ],
    en: [
      { q: 'The best ideas come from:', options: ['Fantasy', 'Watching people\'s daily problems', 'Copying foreigners literally'], answer: 1 },
      { q: 'In the 10-people test, ask about:', options: ['Their opinion of the idea', 'Past behavior and money paid', 'Their favorite color'], answer: 1 },
      { q: 'The most honest demand test:', options: ['Likes', 'Kind words', 'Pre-selling'], answer: 2 },
    ],
  },
  'business/start-small': {
    ar: [
      { q: 'نسخة البداية (MVP) هدفها:', options: ['التفاخر', 'تتعلم من السوق بأقل خسارة', 'إنفاق كل رأس المال'], answer: 1 },
      { q: 'رأس مال البداية لازم يكون:', options: ['قرض كبير', 'فلوس خسارتها مش مدمرة', 'فلوس البيت'], answer: 1 },
      { q: 'أحسن تمويل للنمو:', options: ['ربح المشروع نفسه', 'ديون أكبر', 'الاقتراض من الأصحاب'], answer: 0 },
    ],
    en: [
      { q: 'The MVP aims to:', options: ['Show off', 'Learn from the market at the lowest loss', 'Spend all the capital'], answer: 1 },
      { q: 'Starting capital must be:', options: ['A big loan', 'Money whose loss is not destructive', 'Household money'], answer: 1 },
      { q: 'The best growth funding:', options: ['The project\'s own profit', 'Bigger debts', 'Borrowing from friends'], answer: 0 },
    ],
  },
  'business/pricing': {
    ar: [
      { q: 'أقل سعر مقبول بيتحدد بـ:', options: ['المزاج', 'التكلفة الكاملة + هامش ربح', 'سعر المنافس ناقص'], answer: 1 },
      { q: 'المنافسة بالسعر الأرخص لوحدها:', options: ['طريق للخسارة', 'أذكى استراتيجية', 'إجبارية'], answer: 0 },
      { q: 'الأفضل من السعر الناقص طول السنة:', options: ['الغلاء الفاجر', 'خصم مدروس بمناسبة', 'تغيير السعر يوميا'], answer: 1 },
    ],
    en: [
      { q: 'The minimum acceptable price is set by:', options: ['Mood', 'Full cost + profit margin', 'Competitor price minus'], answer: 1 },
      { q: 'Competing on cheapest price alone is:', options: ['A road to loss', 'The smartest strategy', 'Mandatory'], answer: 0 },
      { q: 'Better than a low price all year:', options: ['Gouging', 'A planned occasional discount', 'Changing price daily'], answer: 1 },
    ],
  },
  'business/simple-marketing': {
    ar: [
      { q: 'أقوى تسويق مجاني:', options: ['الزعيق', 'المحتوى المفيد', 'السبام'], answer: 1 },
      { q: 'الآراء المفبركة:', options: ['حيلة ذكية', 'فضيحة مؤجلة', 'حلال'], answer: 1 },
      { q: 'الإعلان الممول الصح:', options: ['ميزانية ضخمة عمياء', 'صغير ومستهدف ومقاس النتيجة', 'ممنوع نهائيا'], answer: 1 },
    ],
    en: [
      { q: 'The strongest free marketing:', options: ['Shouting', 'Useful content', 'Spam'], answer: 1 },
      { q: 'Fake reviews are:', options: ['A clever trick', 'A postponed scandal', 'Fine'], answer: 1 },
      { q: 'The right paid ad:', options: ['A huge blind budget', 'Small, targeted and measured', 'Forbidden entirely'], answer: 1 },
    ],
  },
  'mindset/daily-money-habits': {
    ar: [
      { q: 'اللي بيكسب على الطويل:', options: ['الحماس المؤقت', 'النظام الثابت', 'الحظ'], answer: 1 },
      { q: 'قاعدة الـ 24 ساعة معناها:', options: ['استنى يوم قبل الشراء غير الأساسي', 'اشتري في 24 ساعة', 'متشتريش أبدا'], answer: 0 },
      { q: 'المراجعة الدورية هدفها:', options: ['الجلد الذاتي', 'اللي بيتقاس بيتحسن', 'تضييع وقت'], answer: 1 },
    ],
    en: [
      { q: 'What wins in the long run:', options: ['Temporary excitement', 'A fixed system', 'Luck'], answer: 1 },
      { q: 'The 24-hour rule means:', options: ['Wait a day before non-essential buys', 'Buy within 24 hours', 'Never buy'], answer: 0 },
      { q: 'Regular reviews aim to:', options: ['Self-blame', 'What gets measured improves', 'Waste time'], answer: 1 },
    ],
  },
  'mindset/delayed-gratification': {
    ar: [
      { q: 'تأجيل المتعة معناه:', options: ['الحرمان الكامل', 'انت تختار توقيت المتعة', 'عدم الاستمتاع أبدا'], answer: 1 },
      { q: 'المتعة الصحية هي اللي:', options: ['مستلفة', 'داخلة في الميزانية', 'خارجة من الادخار'], answer: 1 },
      { q: 'اللي بيقوّي العزيمة:', options: ['هدف مستقبلي مكتوب وواضح', 'الضغط الاجتماعي', 'المقارنة بالغير'], answer: 0 },
    ],
    en: [
      { q: 'Delayed gratification means:', options: ['Total deprivation', 'You choose when to enjoy', 'Never having fun'], answer: 1 },
      { q: 'Healthy pleasure is the one:', options: ['Borrowed', 'Inside the budget', 'Taken from savings'], answer: 1 },
      { q: 'What strengthens willpower:', options: ['A clear written future goal', 'Social pressure', 'Comparing to others'], answer: 0 },
    ],
  },
  'mindset/spot-a-scam': {
    ar: [
      { q: 'من علامات النصب المؤكدة:', options: ['عائد مضمون عالي واستعجال', 'التراخيص الرسمية', 'الشفافية'], answer: 0 },
      { q: '"حط فلوس وجيب ناس تكسب منهم" ده:', options: ['استثمار', 'هرم بينهار', 'تسويق عادي'], answer: 1 },
      { q: 'قبل أي فرصة:', options: ['ادفع بسرعة', 'خد 3 أيام وابحث واسأل', 'صدق اللي بيكلمك'], answer: 1 },
    ],
    en: [
      { q: 'A sure scam sign:', options: ['High guaranteed return plus urgency', 'Official licenses', 'Transparency'], answer: 0 },
      { q: '"Deposit money and recruit people to earn from them" is:', options: ['Investing', 'A collapsing pyramid', 'Normal marketing'], answer: 1 },
      { q: 'Before any opportunity:', options: ['Pay quickly', 'Take 3 days, research and ask', 'Trust the caller'], answer: 1 },
    ],
  },
  'mindset/keep-learning': {
    ar: [
      { q: 'الثروة الحقيقية بتتبني في:', options: ['أسبوع', 'سنين من التراكم', 'ليلة واحدة'], answer: 1 },
      { q: 'ميزانية التعلم معناها:', options: ['وقت ثابت للتعلم زي الادخار', 'شراء كل الكورسات', 'متابعة كل القنوات'], answer: 0 },
      { q: 'اللي بيوصل في الآخر:', options: ['الأذكى', 'الأكثر استمرارية', 'الأكثر حظا'], answer: 1 },
    ],
    en: [
      { q: 'Real wealth is built over:', options: ['A week', 'Years of compounding', 'One night'], answer: 1 },
      { q: 'A learning budget means:', options: ['Fixed learning time like saving', 'Buying every course', 'Following every channel'], answer: 0 },
      { q: 'Who arrives in the end:', options: ['The smartest', 'The most consistent', 'The luckiest'], answer: 1 },
    ],
  },
}
