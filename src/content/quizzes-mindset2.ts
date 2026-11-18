import type { LessonQuiz } from './types'

// Quizzes for the second wave of Mindset lessons.
export const QUIZZES_MINDSET2: Record<string, LessonQuiz> = {
  'mindset/comparison-trap': {
    ar: [
      { q: 'مشكلة المقارنة على السوشيال ميديا:', options: ['بتقارن كواليسك بمسرحية غيرك', 'الناس كلها أغنى منك', 'مفيش مشكلة'], answer: 0 },
      { q: 'مصاريف الانطباع نتيجتها:', options: ['بناء مستقبل', 'أكل المدخرات عشان صورة', 'سعادة دائمة'], answer: 1 },
      { q: 'المقارنة الصحيحة الوحيدة:', options: ['نفسك بأغنى واحد تعرفه', 'نفسك بنفسك السنة اللي فاتت بأرقام', 'مفيش مقارنة أبدا'], answer: 1 },
    ],
    en: [
      { q: 'The problem with social-media comparison:', options: ['You compare your backstage to their stage show', 'Everyone is richer than you', 'No problem at all'], answer: 0 },
      { q: 'Impression spending leads to:', options: ['Building a future', 'Eating savings for an image', 'Lasting happiness'], answer: 1 },
      { q: 'The only right comparison:', options: ['Yourself with the richest person you know', 'Yourself with yourself a year ago, with numbers', 'Never compare'], answer: 1 },
    ],
  },
  'mindset/lifestyle-inflation': {
    ar: [
      { q: 'الترقية التدريجية معناها:', options: ['مستوى المعيشة بيتمدد ليملى أي زيادة دخل', 'ترقية في الشغل', 'زيادة المرتب'], answer: 0 },
      { q: 'قاعدة الزيادة الجديدة:', options: ['استمتع بكل الزيادة', 'احجز 50% من الزيادة للاستثمار من أول يوم', 'ادخر كل حاجة'], answer: 1 },
      { q: 'أخطر الترقيات:', options: ['البيت الجديد', 'الصغيرة اليومية زي القهوة والدليفري', 'العربية'], answer: 1 },
    ],
    en: [
      { q: 'Lifestyle creep means:', options: ['Lifestyle expanding to fill any raise', 'A job promotion', 'A salary raise'], answer: 0 },
      { q: 'The rule for a new raise:', options: ['Enjoy all of it', 'Capture 50% for investing from day one', 'Save everything'], answer: 1 },
      { q: 'The most dangerous upgrades:', options: ['A new house', 'Small daily ones like coffee and delivery', 'A car'], answer: 1 },
    ],
  },
  'mindset/money-and-stress': {
    ar: [
      { q: 'أول خطوة ضد القلق المالي:', options: ['تجاهله', 'اكتب الأرقام بالظبط: الديون والدخل والمصاريف', 'السفر'], answer: 1 },
      { q: 'أسرع طريقة لاسترجاع الإحساس بالسيطرة:', options: ['انتصار صغير: سداد أصغر دين أو أول 1,000 طوارئ', 'قرض جديد', 'انتظار معجزة'], answer: 0 },
      { q: 'متى تطلب مساعدة متخصصة؟', options: ['أبدا، ده ضعف', 'لو الديون أكتر من 40% من الدخل أو القلق بيأثر على نومك وشغلك', 'بعد الإفلاس'], answer: 1 },
    ],
    en: [
      { q: 'The first step against money anxiety:', options: ['Ignore it', 'Write the exact numbers: debts, income, expenses', 'Travel'], answer: 1 },
      { q: 'The fastest way to regain control:', options: ['A small win: pay the smallest debt or save the first 1,000', 'A new loan', 'Waiting for a miracle'], answer: 0 },
      { q: 'When to seek professional help?', options: ['Never, it is weakness', 'If debt exceeds 40% of income or anxiety harms sleep and work', 'After bankruptcy'], answer: 1 },
    ],
  },
  'mindset/teach-kids-money': {
    ar: [
      { q: 'الطفل بيتعلم الفلوس أساسا من:', options: ['المحاضرات', 'تصرفاتك اليومية', 'المدرسة'], answer: 1 },
      { q: 'قاعدة المصروف الصح:', options: ['زود لما يخلص بدري', 'ثابت بميعاد ومفيش إنقاذ من قرار شراء غبي صغير', 'حسب المزاج'], answer: 1 },
      { q: 'الفلوس كمكافأة على الدرجات:', options: ['فكرة ممتازة', 'بتخلي كل حاجة بمقابل', 'ضرورية'], answer: 1 },
    ],
    en: [
      { q: 'Kids mainly learn money from:', options: ['Lectures', 'Your daily behavior', 'School'], answer: 1 },
      { q: 'The right allowance rule:', options: ['Top up when they run out early', 'Fixed on schedule, no rescue from small dumb purchases', 'Mood-based'], answer: 1 },
      { q: 'Money as a reward for grades:', options: ['An excellent idea', 'Makes everything transactional', 'Essential'], answer: 1 },
    ],
  },
  'mindset/financial-goals-that-stick': {
    ar: [
      { q: 'الهدف المالي الحقيقي =', options: ['تمنّي عام', 'مبلغ + موعد + سبب', 'كلام تحفيزي'], answer: 1 },
      { q: 'ليه نقسم الهدف لمراحل ربع سنوية؟', options: ['المخ محتاج مكافآت متوسطة مش بس النهائية', 'عشان الجداول شكلها حلو', 'مفيش سبب'], answer: 0 },
      { q: 'لو قصرت في شهر:', options: ['الغي الهدف', 'عدل الخطة ومتلغيهاش', 'اتهم نفسك'], answer: 1 },
    ],
    en: [
      { q: 'A real financial goal =', options: ['A general wish', 'Amount + deadline + reason', 'Motivational talk'], answer: 1 },
      { q: 'Why split the goal into quarterly stages?', options: ['The brain needs intermediate rewards, not just the final one', 'Tables look nice', 'No reason'], answer: 0 },
      { q: 'If you fall short one month:', options: ['Cancel the goal', 'Adjust the plan, do not abandon it', 'Blame yourself'], answer: 1 },
    ],
  },
  'mindset/giving-and-money': {
    ar: [
      { q: 'أفضل طريقة للعطاء المستمر:', options: ['وقت المزاج', 'بند ثابت في الميزانية ولو صغير', 'أول طرق على الباب'], answer: 1 },
      { q: 'العطاء الذكي يفضل:', options: ['التوزيع العشوائي', 'جهة أو اتنين موثوقين والتعمق معاهم', 'مفيش عطاء'], answer: 1 },
      { q: 'قبل ما توسع بند العطاء:', options: ['سدد ديونك وادخر طوارئك', 'خد قرض', 'متعملش حاجة'], answer: 0 },
    ],
    en: [
      { q: 'The best way for consistent giving:', options: ['Whenever the mood strikes', 'A fixed budget line, even if small', 'The first knock on the door'], answer: 1 },
      { q: 'Smart giving prefers:', options: ['Random scattering', 'One or two trusted causes, deeply', 'No giving'], answer: 1 },
      { q: 'Before widening the giving line:', options: ['Pay debts and build your emergency fund', 'Take a loan', 'Do nothing'], answer: 0 },
    ],
  },
}
