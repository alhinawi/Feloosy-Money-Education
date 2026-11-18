import type { LessonQuiz } from './types'

// Quizzes for the second wave of Business lessons.
export const QUIZZES_BUSINESS2: Record<string, LessonQuiz> = {
  'business/cashflow-is-king': {
    ar: [
      { q: 'مشروع مربح ممكن يفلس لو:', options: ['مستحيل طالما مربح', 'الكاش خلص لأن البيع بالأجل والمصاريف كاش', 'المنافسين كثروا'], answer: 1 },
      { q: 'مقدم 50% قبل التنفيذ يعتبر:', options: ['قلة ثقة', 'قاعدة أساسية لحماية الكاش فلو', 'ممنوع'], answer: 1 },
      { q: 'توقع الكاش 13 أسبوع بيفيدك في:', options: ['رؤية الأسابيع الخطرة قبل ما توصل', 'إعجاب المستثمرين', 'ملء الوقت'], answer: 0 },
    ],
    en: [
      { q: 'A profitable business can go bust if:', options: ['Impossible if profitable', 'Cash runs out because sales are on credit while expenses are cash', 'Competitors multiply'], answer: 1 },
      { q: 'A 50% deposit before work is:', options: ['Distrust', 'A core cash-flow protection rule', 'Forbidden'], answer: 1 },
      { q: 'A 13-week cash forecast helps you:', options: ['See dangerous weeks before they arrive', 'Impress investors', 'Fill time'], answer: 0 },
    ],
  },
  'business/customers-not-products': {
    ar: [
      { q: 'أشهر سبب لفشل المشاريع الصغيرة:', options: ['قلة رأس المال', 'منتج محدش طلبه', 'الحظ'], answer: 1 },
      { q: 'أصدق اختبار لفكرة مشروع:', options: ['رأي الأصحاب', 'الطلب المسبق المدفوع', 'استطلاع مجاني'], answer: 1 },
      { q: 'أول نسخة من المنتج المفروض تطلع:', options: ['بعد 6 شهور تطوير', 'في أسبوعين وتتعدل مع العملاء', 'لما تبقى مثالية'], answer: 1 },
    ],
    en: [
      { q: 'The most common reason small businesses fail:', options: ['Lack of capital', 'A product nobody asked for', 'Bad luck'], answer: 1 },
      { q: 'The most honest test of a business idea:', options: ["Friends' opinions", 'Paid preorders', 'A free survey'], answer: 1 },
      { q: 'The first product version should ship:', options: ['After 6 months of development', 'In two weeks and adjust with customers', 'When perfect'], answer: 1 },
    ],
  },
  'business/small-business-numbers': {
    ar: [
      { q: 'هامش الربح الحقيقي بيحسب بعد خصم:', options: ['سعر الشراء بس', 'كل التكاليف المباشرة: خامات وشحن وعمولات وتغليف', 'الإيجار بس'], answer: 1 },
      { q: 'نقطة التعادل هي:', options: ['أعلى مبيعات ممكنة', 'عدد الوحدات اللي بيغطي المصاريف الثابتة شهريا', 'سعر البيع'], answer: 1 },
      { q: 'قيمة العميل المفروض تكون:', options: ['نص تكلفة اكتسابه', '3 أضعاف تكلفة اكتسابه على الأقل', 'مساوية لتكلفة اكتسابه'], answer: 1 },
    ],
    en: [
      { q: 'True margin is calculated after deducting:', options: ['Purchase price only', 'All direct costs: materials, shipping, commissions, packaging', 'Rent only'], answer: 1 },
      { q: 'Break-even is:', options: ['Maximum possible sales', 'Units per month that cover fixed costs', 'The sale price'], answer: 1 },
      { q: 'Customer value should be:', options: ['Half the acquisition cost', 'At least 3x the acquisition cost', 'Equal to acquisition cost'], answer: 1 },
    ],
  },
  'business/hiring-first-employee': {
    ar: [
      { q: 'شروط تعيين أول موظف:', options: ['الإحساس بالتعب', 'شغل متكرر + إيراد مغطي + 3 شهور مرتب كاش', 'نصيحة صديق'], answer: 1 },
      { q: 'أفضل بداية للتعيين:', options: ['دوام كامل فورا', 'عقود مرنة: بالساعة أو دوام جزئي أو على مشروع', 'قرعة'], answer: 1 },
      { q: 'توثيق المهام المتكررة (SOP) بيعمل إيه؟', options: ['بيرفع التكاليف', 'بيخلي الجودة متعتمدش على أفراد والتدريب رخيص', 'بيروترك بيروقراطية'], answer: 1 },
    ],
    en: [
      { q: 'Conditions for the first hire:', options: ['Feeling tired', 'Recurring work + covering revenue + 3 months salary in cash', "A friend's advice"], answer: 1 },
      { q: 'The best start for hiring:', options: ['Full-time immediately', 'Flexible contracts: hourly, part-time, or per-project', 'A lottery'], answer: 1 },
      { q: 'Documenting recurring tasks (SOPs) does what?', options: ['Raises costs', 'Keeps quality independent of individuals and training cheap', 'Adds bureaucracy'], answer: 1 },
    ],
  },
  'business/marketing-small-budget': {
    ar: [
      { q: 'أول قنوات التسويق بميزانية صغيرة:', options: ['إعلانات تلفزيون', 'واتساب بيزنس والجروبات ومحتوى مفيد', 'بيلبورد'], answer: 1 },
      { q: 'الإعلان الممول يتقاس بـ:', options: ['عدد اللايكات', 'الربح على مستوى الطلب الواحد', 'عدد المشاهدات'], answer: 1 },
      { q: 'أقوى قناة تسويق للمشروع الصغير:', options: ['الترشيحات من العملاء المبسوطين', 'الإعلانات الممولة الكبيرة', 'المنشورات العشوائية'], answer: 0 },
    ],
    en: [
      { q: 'First marketing channels on a small budget:', options: ['TV ads', 'WhatsApp Business, groups, and useful content', 'Billboards'], answer: 1 },
      { q: 'Paid ads are judged by:', options: ['Like counts', 'Profit per single order', 'View counts'], answer: 1 },
      { q: 'The strongest channel for a small business:', options: ['Referrals from happy customers', 'Big paid campaigns', 'Random posting'], answer: 0 },
    ],
  },
  'business/partners-and-money': {
    ar: [
      { q: 'أساس اختيار الشريك:', options: ['الصداقة القديمة', 'مهارات مكملة والتزام متحقق منه', 'نسبة الأقارب'], answer: 1 },
      { q: 'سيناريو الخروج من الشراكة يتكتب:', options: ['وأنتم متفقين في البداية', 'وقت الخلاف', 'مش مهم'], answer: 0 },
      { q: 'فلوس الشركة:', options: ['متاحة لأي شريك محتاج', 'حساب منفصل وسحوبات بقاعدة مكتوبة ومراجعة شهرية', 'تحت يد أكبر شريك بس'], answer: 1 },
    ],
    en: [
      { q: 'The basis for choosing a partner:', options: ['Old friendship', 'Complementary skills and verified commitment', 'Family relation'], answer: 1 },
      { q: 'The partnership exit scenario is written:', options: ['At the start while you agree', 'During a fight', 'Not important'], answer: 0 },
      { q: 'Company money:', options: ['Available to any partner in need', 'Separate account, rule-based withdrawals, monthly reviews', 'Only the biggest partner controls it'], answer: 1 },
    ],
  },
}
