import type { LessonQuiz } from './types'

// Quizzes for the second wave of Saving lessons.
export const QUIZZES_SAVING2: Record<string, LessonQuiz> = {
  'saving/saving-on-small-income': {
    ar: [
      { q: 'الادخار بدخل صغير يبدأ بـ:', options: ['مبلغ يريحك نفسيا ولو صغير', 'الاستنان لحد ما الدخل يكبر', 'الاستلاف'], answer: 0 },
      { q: 'جردة المصاريف الثابتة ممكن تحرر:', options: ['ولا حاجة', 'حوالي 10% من الدخل', 'نص الدخل'], answer: 1 },
      { q: 'لو الدخل صغير فعلا، الأولوية:', options: ['التوفير بس', 'مهارة/دخل جانبي مع ادخار صغير', 'الاستثمار العالي المخاطرة'], answer: 1 },
    ],
    en: [
      { q: 'Saving on a small income starts with:', options: ['A psychologically easy amount, even small', 'Waiting for a bigger income', 'Borrowing'], answer: 0 },
      { q: 'A fixed-expense audit can free:', options: ['Nothing', 'About 10% of income', 'Half the income'], answer: 1 },
      { q: 'If income is truly small, priority is:', options: ['Saving only', 'A skill/side income plus small saving', 'High-risk investing'], answer: 1 },
    ],
  },
  'saving/money-market-funds': {
    ar: [
      { q: 'الصندوق النقدي بيستثمر في:', options: ['أسهم عالية المخاطرة', 'أدوات قصيرة الأجل آمنة', 'عقارات'], answer: 1 },
      { q: 'ميزته على الشهادة:', options: ['عائد ثابت مضمون', 'سيولة عالية من غير قفل المبلغ', 'مفيش ميزة'], answer: 1 },
      { q: 'أنسب استخدام ليه:', options: ['صندوق الطوارئ', 'مضاربة يومية', 'حفظ الذهب'], answer: 0 },
    ],
    en: [
      { q: 'A money-market fund invests in:', options: ['High-risk stocks', 'Safe short-term instruments', 'Real estate'], answer: 1 },
      { q: 'Its edge over certificates:', options: ['A locked guaranteed rate', 'High liquidity without locking money', 'No edge'], answer: 1 },
      { q: 'Best use for it:', options: ['The emergency fund', 'Day trading', 'Storing gold'], answer: 0 },
    ],
  },
  'saving/saving-for-marriage': {
    ar: [
      { q: 'أول خطوة في خطة الجواز:', options: ['حجز القاعة', 'كتابة الرقم الكامل الصادق', 'الاستلاف'], answer: 1 },
      { q: 'الأحسن من رقم واحد مرعب:', options: ['مراحل صغيرة بمواعيد', 'تجاهل التخطيط', 'الديون'], answer: 0 },
      { q: 'قرض شخصي للفرح:', options: ['فكرة حلوة', 'بيبدأ البيت بضغط وأقساط', 'إجباري'], answer: 1 },
    ],
    en: [
      { q: 'The first step in a marriage plan:', options: ['Booking the hall', 'Writing the full honest number', 'Borrowing'], answer: 1 },
      { q: 'Better than one scary number:', options: ['Small dated stages', 'Ignoring planning', 'Debt'], answer: 0 },
      { q: 'A personal loan for the wedding:', options: ['A nice idea', 'Starts the home under pressure and installments', 'Mandatory'], answer: 1 },
    ],
  },
  'saving/automated-saving-tools': {
    ar: [
      { q: 'أهم خطوة أتمتة:', options: ['التحويل المجدول يوم القبض', 'متابعة الأخبار', 'تغيير البنك'], answer: 0 },
      { q: 'محفظة التحويش لازم:', options: ['تكون نفس محفظة الصرف', 'تكون منفصلة', 'تكون مخفية عنك'], answer: 1 },
      { q: 'قاعدة الفكة والتقريب:', options: ['مبلغش حاجة', 'بتلم مبالغ محترمة على السنة', 'للأطفال بس'], answer: 1 },
    ],
    en: [
      { q: 'The key automation step:', options: ['A scheduled payday transfer', 'Following the news', 'Switching banks'], answer: 0 },
      { q: 'The saving wallet must be:', options: ['The same as the spending wallet', 'Separate', 'Hidden from you'], answer: 1 },
      { q: 'The change and rounding rule:', options: ['Collects nothing', 'Collects serious money over a year', 'Is for kids only'], answer: 1 },
    ],
  },
  'saving/big-purchase-planning': {
    ar: [
      { q: 'اختبار الشراء الكبير:', options: ['احتياج + كاش + أسبوعين تفكير', 'الإعجاب من أول نظرة', 'رأي البائع'], answer: 0 },
      { q: 'لما تقارن التقسيط بالكاش:', options: ['بص على القسط الشهري بس', 'احسب إجمالي الأقساط + المقدم', 'مفيش فرق'], answer: 1 },
      { q: 'وقت الشراء في السوق المصري:', options: ['ادفع السعر المعلن', 'فاوض على السعر', 'اشتري أونلاين بس'], answer: 1 },
    ],
    en: [
      { q: 'The big-purchase test:', options: ['Need + cash + two weeks of thought', 'Love at first sight', 'The seller\'s opinion'], answer: 0 },
      { q: 'When comparing installments to cash:', options: ['Look at the monthly installment only', 'Compute total installments plus down payment', 'No difference'], answer: 1 },
      { q: 'When buying in Egyptian markets:', options: ['Pay the asking price', 'Negotiate the price', 'Only buy online'], answer: 1 },
    ],
  },
  'saving/saving-in-hard-currency': {
    ar: [
      { q: 'الدولار وهو نايم:', options: ['بيكسب عائد يومي', 'مفيش عليه عائد', 'بيتضاعف'], answer: 1 },
      { q: 'السوق الموازي للعملة:', options: ['آمن ومضمون', 'فيه نصب ومخاطر حقيقية', 'القناة الرسمية'], answer: 1 },
      { q: 'الحل المتوازن:', options: ['كل حاجة دولار', 'كل حاجة جنيه', 'تنويع حسب التزاماتك وأرقامك'], answer: 2 },
    ],
    en: [
      { q: 'Idle dollars:', options: ['Earn daily return', 'Earn no return', 'Double up'], answer: 1 },
      { q: 'The currency black market:', options: ['Safe and guaranteed', 'Has real scams and risks', 'Is the official channel'], answer: 1 },
      { q: 'The balanced answer:', options: ['Everything in dollars', 'Everything in pounds', 'Diversify by your obligations and numbers'], answer: 2 },
    ],
  },
}
