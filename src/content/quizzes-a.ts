import type { LessonQuiz } from './types'

// Quizzes for Money Basics, Saving and Investing tracks. Key: "<track>/<lesson>".
export const QUIZZES_A: Record<string, LessonQuiz> = {
  'money-basics/where-does-money-go': {
    ar: [
      { q: 'إيه اللي بياكل الميزانية من غير ما تحس؟', options: ['الإيجار', 'المصاريف الصغيرة المتكررة', 'فاتورة الكهربا'], answer: 1 },
      { q: 'تجربة الـ 30 يوم معناها إيه؟', options: ['متصرفش 30 يوم', 'تسجل كل جنيه بيخرج لمدة شهر', 'تدخر 30% من دخلك'], answer: 1 },
      { q: 'مصاريفك بتتقسم لـ 3 مجموعات: احتياجات ورغبات وإيه؟', options: ['ادخار', 'ديون', 'ترفيه'], answer: 0 },
    ],
    en: [
      { q: 'What silently eats a budget?', options: ['Rent', 'Small repeated expenses', 'The electricity bill'], answer: 1 },
      { q: 'What is the 30-day experiment?', options: ['No spending for 30 days', 'Recording every pound spent for a month', 'Saving 30% of income'], answer: 1 },
      { q: 'Spending splits into needs, wants, and what?', options: ['Saving', 'Debts', 'Entertainment'], answer: 0 },
    ],
  },
  'money-basics/budget-50-30-20': {
    ar: [
      { q: 'في قاعدة 50/30/20، الـ 20% بتروح لإيه؟', options: ['الرغبات', 'الاحتياجات', 'الادخار والاستثمار'], answer: 2 },
      { q: 'لو دخلك 10,000 جنيه، الاحتياجات المفروض تبقى حوالي:', options: ['3,000', '5,000', '8,000'], answer: 1 },
      { q: 'لو الادخار صعب، الصح إنك:', options: ['تستنى لما دخلك يزيد', 'تبدأ بأي نسبة ولو 5%', 'تستلف عشان تدخر'], answer: 1 },
    ],
    en: [
      { q: 'In 50/30/20, where does the 20% go?', options: ['Wants', 'Needs', 'Saving and investing'], answer: 2 },
      { q: 'On a 10,000 EGP income, needs should be about:', options: ['3,000', '5,000', '8,000'], answer: 1 },
      { q: 'If saving is hard, the right move is:', options: ['Wait for a raise', 'Start with any rate, even 5%', 'Borrow to save'], answer: 1 },
    ],
  },
  'money-basics/emergency-fund': {
    ar: [
      { q: 'صندوق الطوارئ بيتصرف في إيه؟', options: ['المفاجآت زي مرض أو فصل من الشغل', 'الخروجات', 'أي عرض حلو'], answer: 0 },
      { q: 'حجم صندوق الطوارئ المقترح:', options: ['مرتب شهر واحد', 'من 3 لـ 6 شهور مصاريف أساسية', 'مليون جنيه'], answer: 1 },
      { q: 'أهم صفتين في مكان صندوق الطوارئ:', options: ['عائد عالي ومخاطرة', 'سائل وآمن', 'بعيد وصعب الوصول'], answer: 1 },
    ],
    en: [
      { q: 'What is an emergency fund for?', options: ['Surprises like illness or job loss', 'Outings', 'Any hot deal'], answer: 0 },
      { q: 'The suggested emergency fund size:', options: ['One salary', '3-6 months of essential expenses', 'A million pounds'], answer: 1 },
      { q: 'The two key traits of where it is kept:', options: ['High return and risk', 'Liquid and safe', 'Far and hard to reach'], answer: 1 },
    ],
  },
  'money-basics/good-bad-debt': {
    ar: [
      { q: 'الدَين الوحش هو اللي:', options: ['بتاخده لحاجة بتستهلك وبفايدة عالية', 'أي دَين عموما', 'اللي بتاخده من البنك بس'], answer: 0 },
      { q: 'فايدة الكارت الائتماني لو مش بتسدد كامل ممكن توصل سنويا لأكتر من:', options: ['5%', '10%', '40%'], answer: 2 },
      { q: 'أول دَين تسدده هو:', options: ['الأكبر مبلغا', 'الأعلى فايدة', 'الأقدم'], answer: 1 },
    ],
    en: [
      { q: 'Bad debt is debt that:', options: ['Funds consumption at high interest', 'Is any debt at all', 'Only comes from banks'], answer: 0 },
      { q: 'Unpaid credit card interest can exceed yearly:', options: ['5%', '10%', '40%'], answer: 2 },
      { q: 'The first debt to pay off is:', options: ['The biggest', 'The highest-interest', 'The oldest'], answer: 1 },
    ],
  },
  'saving/pay-yourself-first': {
    ar: [
      { q: 'معادلة الادخار الصح هي:', options: ['دخل - مصاريف = ادخار', 'دخل - ادخار = مصاريف', 'مصاريف - دخل = ادخار'], answer: 1 },
      { q: 'أفضل وقت لتحويل الادخار:', options: ['آخر الشهر', 'أول ما القبض يوصل', 'لما تفتكر'], answer: 1 },
      { q: 'التصعيد البطيء معناه:', options: ['تبدأ صغير وتزود تدريجيا', 'متدخرش خالص', 'تدخر كتير مرة واحدة'], answer: 0 },
    ],
    en: [
      { q: 'The right saving equation is:', options: ['Income - expenses = saving', 'Income - saving = expenses', 'Expenses - income = saving'], answer: 1 },
      { q: 'The best time to move savings:', options: ['End of month', 'The moment income arrives', 'When you remember'], answer: 1 },
      { q: 'Slow ramping means:', options: ['Start small and raise gradually', 'Never save', 'Save a lot once'], answer: 0 },
    ],
  },
  'saving/bank-certificates-egypt': {
    ar: [
      { q: 'الشهادة الادخارية يعني:', options: ['بتقرض البنك مبلغ بعائد ثابت لفترة', 'بتشتري أسهم في البنك', 'حساب جاري عادي'], answer: 0 },
      { q: 'لو التضخم أعلى من عائد الشهادة:', options: ['قيمة فلوسك الحقيقية بتقل', 'فلوسك بتكبر حقيقي', 'مفيش فرق'], answer: 0 },
      { q: 'كسر الشهادة قبل ميعادها:', options: ['مجانا', 'بيخصم من العائد', 'بيزود العائد'], answer: 1 },
    ],
    en: [
      { q: 'A savings certificate means:', options: ['Lending the bank money at a fixed return for a term', 'Buying bank stocks', 'A regular current account'], answer: 0 },
      { q: 'If inflation beats the certificate return:', options: ['Your money\'s real value shrinks', 'Your money truly grows', 'No difference'], answer: 0 },
      { q: 'Breaking a certificate early:', options: ['Is free', 'Cuts the return', 'Raises the return'], answer: 1 },
    ],
  },
  'saving/gold-as-saving': {
    ar: [
      { q: 'للادخار، الأفضل تشتري:', options: ['مشغولات ذهبية', 'سبائك أو جنيهات ذهبية', 'أي دهب مش مهم'], answer: 1 },
      { q: 'المصنعية عند البيع:', options: ['بترجعلك كاملة', 'بتتخسر لأن البيع بالوزن', 'بتزود'], answer: 1 },
      { q: 'الدهب بيعتبر:', options: ['مخزن قيمة مش مصدر دخل', 'استثمار بعائد شهري', 'مضاربة سريعة'], answer: 0 },
    ],
    en: [
      { q: 'For saving, better to buy:', options: ['Gold jewelry', 'Bars or gold coins', 'Any gold, same thing'], answer: 1 },
      { q: 'Workmanship fees on resale:', options: ['Are fully refunded', 'Are lost since gold sells by weight', 'Increase'], answer: 1 },
      { q: 'Gold is considered:', options: ['A store of value, not an income source', 'A monthly-return investment', 'A quick speculation'], answer: 0 },
    ],
  },
  'saving/smart-saving-goals': {
    ar: [
      { q: 'الهدف الذكي لازم يكون فيه:', options: ['رقم ومدة وسبب', 'أمنية قوية', 'صورة حلوة'], answer: 0 },
      { q: 'إزاي تحول الهدف لخطة؟', options: ['تستنى القبض يزيد', 'تقسم المبلغ على الشهور', 'تستلف المبلغ'], answer: 1 },
      { q: 'للمبتدئ، الأفضل:', options: ['خمسة أهداف مع بعض', 'هدف واحد أساسي + طوارئ', 'من غير أهداف'], answer: 1 },
    ],
    en: [
      { q: 'A smart goal must have:', options: ['An amount, a deadline and a reason', 'A strong wish', 'A nice picture'], answer: 0 },
      { q: 'How to turn a goal into a plan?', options: ['Wait for a raise', 'Divide the amount by the months', 'Borrow the amount'], answer: 1 },
      { q: 'For a beginner, best is:', options: ['Five goals at once', 'One main goal + emergency fund', 'No goals'], answer: 1 },
    ],
  },
  'investing/what-is-investing': {
    ar: [
      { q: 'الترتيب الصح قبل الاستثمار:', options: ['صندوق طوارئ الأول', 'استلف واستثمر بسرعة', 'بيع دهبك واستثمره'], answer: 0 },
      { q: 'استثمار عائده عالي ومضمون:', options: ['فرصة نادرة', 'علامة نصب', 'موجود في البنوك بس'], answer: 1 },
      { q: 'كل ما العائد المتوقع يزيد:', options: ['المخاطرة تقل', 'المخاطرة تزيد', 'مفيش علاقة'], answer: 1 },
    ],
    en: [
      { q: 'The right order before investing:', options: ['Emergency fund first', 'Borrow and invest fast', 'Sell your gold and invest it'], answer: 0 },
      { q: 'A high-return guaranteed investment is:', options: ['A rare chance', 'A scam flag', 'Only found at banks'], answer: 1 },
      { q: 'As expected return rises:', options: ['Risk falls', 'Risk rises', 'No relation'], answer: 1 },
    ],
  },
  'investing/compound-interest': {
    ar: [
      { q: 'الفايدة المركبة معناها:', options: ['الربح بييجي على رأس المال بس', 'الربح بيتراكم وبييجي عليه ربح', 'فايدة البنك العادية'], answer: 1 },
      { q: 'الأهم في التراكم:', options: ['تبدأ بدري ولو بمبلغ صغير', 'تبدأ بمبلغ ضخم متأخر', 'تسحب الربح كل سنة'], answer: 0 },
      { q: 'الفايدة المركبة على الديون:', options: ['بتشتغل لصالحك', 'بتشتغل ضدك', 'مش موجودة'], answer: 1 },
    ],
    en: [
      { q: 'Compound interest means:', options: ['Profit only on the principal', 'Profit accumulates and earns profit too', 'Regular bank interest'], answer: 1 },
      { q: 'What matters most in compounding:', options: ['Starting early even small', 'Starting late with a big amount', 'Withdrawing profit yearly'], answer: 0 },
      { q: 'Compound interest on debts:', options: ['Works for you', 'Works against you', 'Does not exist'], answer: 1 },
    ],
  },
  'investing/egx-and-funds': {
    ar: [
      { q: 'السهم هو:', options: ['ورقة قمار', 'حصة ملكية في شركة', 'شهادة بنكية'], answer: 1 },
      { q: 'للمبتدئ غالبا الأنسب:', options: ['أسهم فردية بتوصية', 'صناديق متنوعة مرخصة', 'عقود كبيرة'], answer: 1 },
      { q: 'من قواعد دخول البورصة:', options: ['استلف عشان تكسب أكتر', 'أفق سنين ومبلغ صغير', 'اتبع التوصيات المضمونة'], answer: 1 },
    ],
    en: [
      { q: 'A stock is:', options: ['A gambling slip', 'An ownership share in a company', 'A bank certificate'], answer: 1 },
      { q: 'Usually best for beginners:', options: ['Single stocks on tips', 'Licensed diversified funds', 'Big contracts'], answer: 1 },
      { q: 'A rule for entering the market:', options: ['Borrow to win more', 'Years-long horizon and small amount', 'Follow guaranteed tips'], answer: 1 },
    ],
  },
  'investing/diversification': {
    ar: [
      { q: 'التنويع هدفه الأساسي:', options: ['مكسب أسرع', 'منع الكارثة الكاملة', 'إلغاء المخاطرة'], answer: 1 },
      { q: 'محفظة متنوعة ممكن تشمل:', options: ['ثابت + دهب + نامي + سائل', 'أسهم شركة واحدة', 'كاش تحت البلاطة بس'], answer: 0 },
      { q: 'التنويع:', options: ['بيقلل المخاطرة مش بيلغيها', 'بيضمن الربح', 'بيلغي الخسارة'], answer: 0 },
    ],
    en: [
      { q: 'The main goal of diversification:', options: ['Faster gains', 'Preventing total disaster', 'Deleting risk'], answer: 1 },
      { q: 'A diversified portfolio may include:', options: ['Fixed + gold + growth + liquid', 'One company\'s stocks', 'Cash under the mattress only'], answer: 0 },
      { q: 'Diversification:', options: ['Lowers risk, does not delete it', 'Guarantees profit', 'Deletes losses'], answer: 0 },
    ],
  },
}
