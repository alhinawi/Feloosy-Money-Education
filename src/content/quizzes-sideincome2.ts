import type { LessonQuiz } from './types'

// Quizzes for the second wave of Side Income lessons.
export const QUIZZES_SIDEINCOME2: Record<string, LessonQuiz> = {
  'side-income/freelance-first-client': {
    ar: [
      { q: 'أول حاجة تحضرها قبل ما تدور على عميل:', options: ['شعار واسم تجاري', '3-5 نماذج شغل', 'مكتب'], answer: 1 },
      { q: 'أسرع قناة لأول عميل غالبا:', options: ['إعلانات ممولة', 'دايرتك القريبة ومعارفك', 'الصحف'], answer: 1 },
      { q: 'هدفك من أول 3 عملاء:', options: ['أعلى ربح ممكن', 'التقييمات والسمعة', 'إثبات الذات'], answer: 1 },
    ],
    en: [
      { q: 'The first thing to prepare before hunting clients:', options: ['A logo and trade name', '3-5 work samples', 'An office'], answer: 1 },
      { q: 'Usually the fastest channel to a first client:', options: ['Paid ads', 'Your close circle', 'Newspapers'], answer: 1 },
      { q: 'Your goal from the first 3 clients:', options: ['Maximum profit', 'Reviews and reputation', 'Proving yourself'], answer: 1 },
    ],
  },
  'side-income/pricing-your-service': {
    ar: [
      { q: 'سعرك كفريلانسر لازم يكون:', options: ['أقل من السوق عشان تكسب عملاء', 'أعلى بوضوح من تكلفة ساعتك الحالية', 'نفس مرتبك بالظبط'], answer: 1 },
      { q: 'التسعير بالمشروع أحسن من بالساعة لأن:', options: ['العميل بيشتري نتيجة مش وقت', 'أسهل في الحساب', 'مفيش فرق'], answer: 0 },
      { q: 'إمتى ترفع سعرك؟', options: ['كل أسبوع', 'مع كل 3-5 مشاريع ناجحة أو لما الطلب يزيد عن وقتك', 'أبدا'], answer: 1 },
    ],
    en: [
      { q: 'Your freelance rate must be:', options: ['Below market to win clients', 'Clearly above your current hourly cost', 'Exactly your salary equivalent'], answer: 1 },
      { q: 'Project pricing beats hourly because:', options: ['The client buys an outcome, not time', 'It is easier math', 'No difference'], answer: 0 },
      { q: 'When should you raise prices?', options: ['Every week', 'Every 3-5 successful projects or when demand exceeds your time', 'Never'], answer: 1 },
    ],
  },
  'side-income/delivery-apps-truth': {
    ar: [
      { q: 'الرقم الوحيد المهم في شغل التوصيل:', options: ['إجمالي اللي بيدخل من التطبيق', 'صافي الربح على الساعة بعد كل المصاريف', 'عدد الأوردرات'], answer: 1 },
      { q: 'استهلاك الموتوسيكل أو العربية:', options: ['مش تكلفة', 'تكلفة حقيقية حتى لو مش بتدفعها دلوقتي', 'بيدفعها التطبيق'], answer: 1 },
      { q: 'شغل التوصيل مناسب كـ:', options: ['خطة طويلة الأمد', 'دخل مؤقت سريع السيولة بهدف محدد', 'استثمار'], answer: 1 },
    ],
    en: [
      { q: 'The only number that matters in delivery work:', options: ['Gross app earnings', 'Net profit per hour after all expenses', 'Order count'], answer: 1 },
      { q: 'Vehicle wear is:', options: ['Not a cost', 'A real cost even if unpaid today', 'Paid by the app'], answer: 1 },
      { q: 'Delivery work fits best as:', options: ['A long-term plan', 'Fast temporary income with a set goal', 'An investment'], answer: 1 },
    ],
  },
  'side-income/digital-products': {
    ar: [
      { q: 'مفتاح المنتج الرقمي الناجح:', options: ['منتج كبير ومعقد', 'حل مشكلة محددة لجمهور محدد', 'سعر رخيص جدا'], answer: 1 },
      { q: 'أفضل بداية للبيع:', options: ['جمهور صغير مهتم', 'جمهور كبير مش مهتم', 'من غير جمهور خالص'], answer: 0 },
      { q: 'الحقيقة عن المنتجات الرقمية:', options: ['دخل سلبي من أول يوم', 'التسويق هو الشغل الحقيقي بعد التصنيع', 'مش محتاجة أي مجهود'], answer: 1 },
    ],
    en: [
      { q: 'The key to a successful digital product:', options: ['A big complex product', 'Solving a specific problem for a specific audience', 'A very cheap price'], answer: 1 },
      { q: 'The best start for selling:', options: ['A small interested audience', 'A large uninterested audience', 'No audience at all'], answer: 0 },
      { q: 'The truth about digital products:', options: ['Passive income from day one', 'Marketing is the real work after building', 'They need no effort'], answer: 1 },
    ],
  },
  'side-income/weekend-business': {
    ar: [
      { q: 'إزاي تجرب مشروع ويك إند من غير مخاطرة؟', options: ['قرض صغير', 'طلبات مدفوعة مسبقا وأصغر نسخة من الفكرة', 'مخزون كبير من الأول'], answer: 1 },
      { q: 'ميزة المشروع المحلي الحقيقية:', options: ['منافسة أقل وثقة أسرع', 'مفيش منافسة خالص', 'مش محتاج شغل'], answer: 0 },
      { q: 'أول قناة تسويق لمشروعك المحلي:', options: ['إعلانات ممولة', 'ترشيحات الناس في منطقتك', 'التلفزيون'], answer: 1 },
    ],
    en: [
      { q: 'How to test a weekend business without risk?', options: ['A small loan', 'Prepaid orders and the smallest version of the idea', 'Large inventory upfront'], answer: 1 },
      { q: 'The real edge of a local business:', options: ['Less competition and faster trust', 'Zero competition', 'No work needed'], answer: 0 },
      { q: 'The first marketing channel for your local project:', options: ['Paid ads', 'Referrals from people in your area', 'TV'], answer: 1 },
    ],
  },
  'side-income/side-income-taxes-legal': {
    ar: [
      { q: 'أول خطوة تنظيمية للدخل الجانبي:', options: ['فتح شركة', 'سجل بسيط للدخل والمصاريف من أول يوم', 'انتظار نهاية السنة'], answer: 1 },
      { q: 'فلوس المشروع المنتظم مكانها:', options: ['مع مصروف البيت', 'محفظة أو حساب منفصل', 'عند صديق'], answer: 1 },
      { q: 'الاتفاقات حتى مع المعارف:', options: ['شفهي أحسن بين الأصحاب', 'تتكتب بوضوح: المطلوب والتسليم والدفع', 'مش لازم أبدا'], answer: 1 },
    ],
    en: [
      { q: 'The first organizational step for side income:', options: ['Opening a company', 'A simple income-and-expense log from day one', 'Waiting for year end'], answer: 1 },
      { q: 'Regular business money belongs in:', options: ['The household budget', 'A separate wallet or account', "A friend's hands"], answer: 1 },
      { q: 'Agreements even with friends should be:', options: ['Verbal is better between friends', 'Written clearly: scope, delivery, payment', 'Never needed'], answer: 1 },
    ],
  },
}
