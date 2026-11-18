import type { LessonQuiz } from './types'

// Quizzes for the second wave of Money Basics lessons.
export const QUIZZES_BASICS2: Record<string, LessonQuiz> = {
  'money-basics/understand-your-payslip': {
    ar: [
      { q: 'ميزانيتك تتبني على:', options: ['المرتب الإجمالي', 'صافي المرتب بعد الخصومات', 'الرقم اللي في العقد'], answer: 1 },
      { q: 'التأمينات الاجتماعية بتغطي:', options: ['المعاش والتأمين الصحي', 'الخروجات', 'الترفيه'], answer: 0 },
      { q: 'ليه تراجع القسيمة كل فترة؟', options: ['عشان الأخطاء ممكن ترجعلك فلوس', 'عادة بلا فايدة', 'عشان البنك'], answer: 0 },
    ],
    en: [
      { q: 'Your budget is built on:', options: ['Gross salary', 'Net pay after deductions', 'The contract number'], answer: 1 },
      { q: 'Social insurance covers:', options: ['Pension and health insurance', 'Outings', 'Entertainment'], answer: 0 },
      { q: 'Why review the payslip regularly?', options: ['Mistakes can return you money', 'A pointless habit', 'For the bank'], answer: 0 },
    ],
  },
  'money-basics/banking-basics-egypt': {
    ar: [
      { q: 'الحساب الجاري مخصص لـ:', options: ['الادخار طويل المدى', 'الصرف اليومي', 'الاستثمار'], answer: 1 },
      { q: 'بطاقة الائتمان بتصرف من:', options: ['فلوسك', 'فلوس البنك ولازم تسدد', 'مشروع خيري'], answer: 1 },
      { q: 'انستاباي بيعمل إيه؟', options: ['تحويلات فورية بين البنوك', 'قروض', 'إعلانات'], answer: 0 },
    ],
    en: [
      { q: 'A current account is for:', options: ['Long-term saving', 'Daily spending', 'Investing'], answer: 1 },
      { q: 'A credit card spends:', options: ['Your money', 'The bank\'s money that must be repaid', 'Charity funds'], answer: 1 },
      { q: 'InstaPay does what?', options: ['Instant transfers between banks', 'Loans', 'Ads'], answer: 0 },
    ],
  },
  'money-basics/inflation-eats-money': {
    ar: [
      { q: 'التضخم معناه:', options: ['فلوسك بتزيد', 'نفس الفلوس بتشتري أقل', 'الأسعار ثابتة'], answer: 1 },
      { q: 'الدفاع ضد التضخم:', options: ['الكاش في الدرج', 'عائد يغطي التضخم أو يعديه', 'تجاهل الموضوع'], answer: 1 },
      { q: 'فلوس الطوارئ وقت التضخم:', options: ['في أصول متذبذبة', 'سائلة وآمنة', 'كلها دهب'], answer: 1 },
    ],
    en: [
      { q: 'Inflation means:', options: ['Your money grows', 'The same money buys less', 'Prices stay fixed'], answer: 1 },
      { q: 'Defense against inflation:', options: ['Cash in a drawer', 'A return matching or beating inflation', 'Ignoring it'], answer: 1 },
      { q: 'Emergency money during inflation stays:', options: ['In volatile assets', 'Liquid and safe', 'All in gold'], answer: 1 },
    ],
  },
  'money-basics/needs-vs-wants': {
    ar: [
      { q: 'اختبار الاحتياج:', options: ['هتتأثر حياتك الأساسية من غيره؟', 'حلو شكله؟', 'الناس بتشتريه؟'], answer: 0 },
      { q: 'الترقية التدريجية معناها:', options: ['الرغبات بتتحول لاحتياجات مع كل زيادة دخل', 'التطوير الذاتي', 'ترقية الموبايل'], answer: 0 },
      { q: 'الرغبات في الميزانية:', options: ['حرام', 'مسموحة في حدود 30%', 'أولوية قصوى'], answer: 1 },
    ],
    en: [
      { q: 'The need test:', options: ['Would basic life suffer without it?', 'Does it look nice?', 'Do people buy it?'], answer: 0 },
      { q: 'Lifestyle creep means:', options: ['Wants becoming needs with every raise', 'Self-development', 'Upgrading your phone'], answer: 0 },
      { q: 'Wants in the budget are:', options: ['Forbidden', 'Allowed within 30%', 'Top priority'], answer: 1 },
    ],
  },
  'money-basics/family-money-talk': {
    ar: [
      { q: 'ميعاد الفلوس الشهري هدفه:', options: ['مراجعة وتخطيط من غير خناق', 'المحاسبة والعتاب', 'تضييع وقت'], answer: 0 },
      { q: 'المصروف الشخصي الحر معناه:', options: ['فلوس بتتصرف من غير أسئلة', 'سرية تامة عن الشريك', 'ممنوع'], answer: 0 },
      { q: 'الأطفال بيتعلموا الفلوس من:', options: ['المحاضرات', 'تصرفاتك', 'التلفزيون'], answer: 1 },
    ],
    en: [
      { q: 'The monthly money appointment aims to:', options: ['Review and plan without fights', 'Blame each other', 'Waste time'], answer: 0 },
      { q: 'Free personal spending means:', options: ['Money spent with no questions', 'Total secrecy from the partner', 'Forbidden'], answer: 0 },
      { q: 'Children learn money from:', options: ['Lectures', 'Your behavior', 'TV'], answer: 1 },
    ],
  },
  'money-basics/first-paycheck-plan': {
    ar: [
      { q: 'أكبر فخ مع أول مرتب:', options: ['زيادة معيشة فورية', 'الادخار المبكر', 'التخطيط'], answer: 0 },
      { q: 'الشهر التاني مخصص لـ:', options: ['شراء هدايا', 'بداية صندوق الطوارئ', 'أجازة'], answer: 1 },
      { q: 'في الشهر التالت تبدأ:', options: ['مهارة تزود دخلك', 'دَين استهلاكي', 'الصرف العشوائي'], answer: 0 },
    ],
    en: [
      { q: 'The biggest first-paycheck trap:', options: ['Instant lifestyle upgrade', 'Early saving', 'Planning'], answer: 0 },
      { q: 'Month two is for:', options: ['Buying gifts', 'Starting the emergency fund', 'A vacation'], answer: 1 },
      { q: 'In month three you start:', options: ['A skill that raises your income', 'Consumer debt', 'Random spending'], answer: 0 },
    ],
  },
}
