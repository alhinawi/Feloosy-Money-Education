import type { Lesson } from './types'

// Second wave of Business lessons (PR: business expansion).
export const businessLessons2: Lesson[] = [
  {
    slug: 'cashflow-is-king',
    ar: {
      title: 'الكاش فلو: نبض أي مشروع صغير',
      intro: 'مشاريع كتير مربحة على الورق وماتت لأن الكاش خلص. الربح رأي، الكاش حقيقة.',
      sections: [
        { h: 'الفرق بين الربح والكاش', p: 'ممكن تبيع بربح 50% وتفلس: بعت بالأجل ومصاريفك كاش. الربح بيتحسب في نهاية الشهر، الكاش بيتحتاج كل يوم. مشروعك بيموت من نقص الكاش مش من قلة الربح.' },
        { h: 'قواعد الكاش للمشروع الصغير', p: 'اسرع التحصيل وأخر المدفوعات في حدود سمعتك. مقدم 50% قبل التنفيذ قاعدة مش رفاهية. ومخزون كتير = كاش نايم على الرف، اشتري على قد البيع الفعلي مش التفاؤل.' },
        { h: 'اعمل توقع كاش بسيط', p: 'جدول 13 أسبوع: اللي هيدخل و اللي هيخرج أسبوع بأسبوع. هتشوف الأسابيع الخطرة قبل ما توصلها بشهر، وده وقت كفاية تتصرف: تفاوض، تسرع تحصيل، أو تقلل مصروف.' },
      ],
      points: ['الربح رأي والكاش حقيقة.', 'مقدم قبل التنفيذ وتحصيل سريع قواعد أساسية.', 'توقع 13 أسبوع بيكشف الخطر قبل ما يوصل.'],
    },
    en: {
      title: 'Cash flow: the pulse of any small business',
      intro: 'Many businesses look profitable on paper and die when cash runs out. Profit is an opinion; cash is a fact.',
      sections: [
        { h: 'Profit vs cash', p: 'You can sell at a 50% margin and still go bust: you sold on credit while your expenses are cash. Profit is counted at month end; cash is needed every day. Businesses die from cash shortage, not lack of profit.' },
        { h: 'Cash rules for small business', p: 'Collect fast, pay slow within your reputation. A 50% deposit before work is a rule, not a luxury. Excess inventory is cash sleeping on a shelf: buy for actual sales, not optimism.' },
        { h: 'Build a simple cash forecast', p: 'A 13-week table: what comes in and what goes out, week by week. You will see dangerous weeks a month before they arrive - enough time to negotiate, accelerate collections, or cut a cost.' },
      ],
      points: ['Profit is an opinion; cash is a fact.', 'Deposits before work and fast collection are core rules.', 'A 13-week forecast reveals danger before it arrives.'],
    },
  },
  {
    slug: 'customers-not-products',
    ar: {
      title: 'ابحث عن العميل قبل المنتج',
      intro: 'أشهر سبب لفشل المشاريع الصغيرة: منتج محدش طلبه. اقلب المعادلة: ابدأ بالعميل.',
      sections: [
        { h: 'البيع قبل التصنيع', p: 'قبل ما تنتج أي حاجة، كلّم 20-30 عميل محتمل واسألهم عن المشكلة مش عن فكرتك. لو لقيت ناس كتير عندها نفس الوجع وبتدفع فيه حلول غريبة، دي إشارة سوق حقيقي.' },
        { h: 'الطلب المسبق أصدق اختبار', p: 'اعرض الفكرة بسعر حقيقي واطلب التزام: حجز، عربون، أو قائمة انتظار مدفوعة. "فكرة حلوة" مجاملة، الدفع المقدم هو الاستفتاء الوحيد اللي يعتد بيه.' },
        { h: 'ابنِ على رد الفعل', p: 'أول نسخة تطلع في أسبوعين مش في 6 شهور. بيعها لعشرة عملاء، اسمع شكواهم، عدل. المشاريع اللي بتنجح بتتبني مع عملائها مش في عزلة عنهم.' },
      ],
      points: ['اسأل عن المشكلة مش عن فكرتك.', 'الدفع المقدم هو الاستفتاء الحقيقي.', 'أطلق نسخة صغيرة بسرعة وعدل مع العملاء.'],
    },
    en: {
      title: 'Find the customer before the product',
      intro: 'The most common reason small businesses fail: a product nobody asked for. Flip the equation - start with the customer.',
      sections: [
        { h: 'Sell before you build', p: 'Before producing anything, talk to 20-30 potential customers and ask about their problem, not your idea. If many share the same pain and pay for awkward workarounds, that is a real market signal.' },
        { h: 'Preorders are the honest test', p: 'Offer the idea at a real price and ask for commitment: a booking, a deposit, a paid waitlist. "Nice idea" is politeness; prepaid money is the only vote that counts.' },
        { h: 'Build on feedback', p: 'Ship the first version in two weeks, not six months. Sell it to ten customers, hear their complaints, adjust. Businesses that succeed are built with their customers, not in isolation from them.' },
      ],
      points: ['Ask about the problem, not your idea.', 'Prepaid money is the real vote.', 'Ship small and fast, then adjust with customers.'],
    },
  },
  {
    slug: 'small-business-numbers',
    ar: {
      title: 'أرقام مشروعك اللي لازم تعرفها بالظهر',
      intro: 'مش لازم تكون محاسب، بس فيه 5 أرقام لو مش عارفها عن مشروعك فانت بتسوق وانت مغمض.',
      sections: [
        { h: 'هامش الربح الحقيقي', p: 'سعر البيع ناقص كل التكاليف المباشرة للقطعة أو الخدمة: خامات، شحن، عمولات منصات، تغليف. كتير بيحسبوا الهامش من غير المصاريف الصغيرة دي فيتفاجوا إنهم بيخسروا في كل عملية بيع ناجحة.' },
        { h: 'نقطة التعادل', p: 'كام وحدة في الشهر تغطي مصاريفك الثابتة؟ اقسم الثابت على هامش الوحدة. لو الرقم بعيد عن واقع مبيعاتك، المشكلة في النموذج مش في التسويق.' },
        { h: 'تكلفة اكتساب العميل وقيمته', p: 'بتدفع كام في الإعلان والمجهود عشان تجيب عميل واحد؟ وبيعملك كام إجمالي على مدار تعامله معاك؟ القاعدة: قيمة العميل لازم تبقى 3 أضعاف تكلفته على الأقل عشان النمو ميكونش نزيف.' },
      ],
      points: ['الهامش الحقيقي يشمل كل التكاليف المباشرة.', 'نقطة التعادل بتحدد لو النموذج شغال أصلا.', 'قيمة العميل 3 أضعاف تكلفة اكتسابه على الأقل.'],
    },
    en: {
      title: 'The business numbers you must know by heart',
      intro: "You don't need to be an accountant, but there are 5 numbers that, if unknown, mean you are driving blindfolded.",
      sections: [
        { h: 'Your true margin', p: 'Sale price minus every direct cost of the unit or service: materials, shipping, platform commissions, packaging. Many skip these small costs and discover they lose on every "successful" sale.' },
        { h: 'Break-even point', p: 'How many units a month cover your fixed costs? Divide fixed costs by unit margin. If that number is far from your actual sales, the problem is the model, not the marketing.' },
        { h: 'Acquisition cost vs customer value', p: 'How much ad spend and effort buys one customer? And how much do they bring you over the whole relationship? The rule: customer value must be at least 3x acquisition cost, or growth is bleeding.' },
      ],
      points: ['True margin includes every direct cost.', 'Break-even tells you if the model works at all.', 'Customer value should be at least 3x acquisition cost.'],
    },
  },
  {
    slug: 'hiring-first-employee',
    ar: {
      title: 'أول موظف: إمتى وإزاي',
      intro: 'التعيين المبكر بياكل الكاش، والتأخير بيكسرك انت. دي علامات التوقيت الصح وخطواته.',
      sections: [
        { h: 'إمتى الوقت الصح', p: 'عين أول حد لما 3 شروط يجتمعوا: شغل متكرر بيوقف عليك انت شخصيا، إيراد المهمة دي أو المباشر بيغطي تكلفتها، وعندك 3 شهور من مرتبه محجوزين كاش. لو شرط ناقص، اتحرر بالأتمتة أو الفريلانس الأول.' },
        { h: 'ابدأ مرن', p: 'جرب بالساعة أو بدوام جزئي أو كمتعاون على مشروع قبل التعيين الكامل. فترة التجربة مش بروتوكول، هي أهم مرحلة: حط مهمة حقيقية بمعايير واضحة وحكم على النتيجة مش على الانطباع.' },
        { h: 'وثق الشغل', p: 'اكتب كل مهمة متكررة كخطوات بسيطة (SOP). التوثيق بيخلي التدريب رخيص، والجودة متعتمدش على مزاج حد، ومغادرة أي موظف مش كارثة. المشروع اللي بيقف على شخص واحد - حتى لو انت - هش.' },
      ],
      points: ['3 شروط قبل التعيين: شغل متكرر، إيراد مغطي، 3 شهور مرتب كاش.', 'ابدأ بعقود مرنة قبل الدوام الكامل.', 'وثق المهام المتكررة عشان الجودة متعتمدش على أفراد.'],
    },
    en: {
      title: 'Your first hire: when and how',
      intro: 'Hiring too early eats cash; hiring too late breaks you. Here are the right timing signals and steps.',
      sections: [
        { h: 'When the time is right', p: 'Hire your first person when 3 conditions meet: recurring work that depends on you personally, revenue from that work covering its cost, and 3 months of salary reserved in cash. Missing one? Free yourself with automation or freelancers first.' },
        { h: 'Start flexible', p: 'Try hourly, part-time, or per-project collaboration before full-time hiring. A trial period is not a formality - it is the most important stage: assign a real task with clear standards and judge the result, not the impression.' },
        { h: 'Document the work', p: 'Write every recurring task as simple steps (an SOP). Documentation makes training cheap, quality independent of mood, and any departure survivable. A business that stands on one person - even you - is fragile.' },
      ],
      points: ['3 conditions before hiring: recurring work, covering revenue, 3 months salary in cash.', 'Start with flexible contracts before full-time.', 'Document recurring tasks so quality depends on no one person.'],
    },
  },
  {
    slug: 'marketing-small-budget',
    ar: {
      title: 'تسويق بميزانية صغيرة: منين تبدأ',
      intro: 'الميزانية الصغيرة مش عائق، هي فلتر بيجبرك على القنوات اللي بتجيب نتيجة فعلا.',
      sections: [
        { h: 'القنوات المجانية الأولى', p: 'واتساب بيزنس بكاتالوج وحالات منتظمة، جروبات منطقتك ومجالك، جوجل بيزنس بروفايل لو ليك مكان، ومحتوى قصير بيفيد الناس في حاجة بتفهم فيها. دي قنوات بتكلف وقت مش فلوس.' },
        { h: 'الإعلان الممول الصح', p: 'لما تدفع: ابدأ بـ 50-100 جنيه في اليوم على جمهور ضيق جدا ورسالة واحدة واضحة. قيس تكلفة الرسالة أو الطلب مش اللايكات. لو الإعلان مش بيحقق ربح على مستوى الطلب الواحد، زوّد الميزانية = زوّد الخسارة.' },
        { h: 'أقوى قناة: الترشيح', p: 'عميل مبسوط بيجيب اتنين. اعمل سبب للترشيح: خدمة فوق المتوقع، هدية صغيرة مع الطلب، أو خصم للعميل وصاحبه اللي رشحه. اطلب الترشيح صراحة، الناس مش بتفتكر لوحدها.' },
      ],
      points: ['ابدأ بالقنوات المجانية اللي بتكلف وقت مش فلوس.', 'الإعلان الممول يتقاس بالربح على الطلب مش باللايكات.', 'اطلب الترشيح صراحة وكافئ عليه.'],
    },
    en: {
      title: 'Marketing on a small budget: where to start',
      intro: 'A small budget is not an obstacle - it is a filter forcing you into channels that actually work.',
      sections: [
        { h: 'Free channels first', p: 'WhatsApp Business with a catalog and regular statuses, your area and field groups, a Google Business Profile if you have a location, and short useful content about something you know. These cost time, not money.' },
        { h: 'Paid ads done right', p: 'When you do pay: start at 50-100 EGP a day on a very narrow audience with one clear message. Measure cost per message or order, not likes. If an ad is not profitable per order, raising the budget just raises the loss.' },
        { h: 'The strongest channel: referrals', p: 'One happy customer brings two. Engineer the referral: service above expectations, a small gift with the order, or a discount for both the customer and the friend they bring. Ask for referrals explicitly - people do not think of it alone.' },
      ],
      points: ['Start with free channels that cost time, not money.', 'Judge paid ads by profit per order, not likes.', 'Ask for referrals explicitly and reward them.'],
    },
  },
  {
    slug: 'partners-and-money',
    ar: {
      title: 'الشراكة والفلوس: قواعد قبل ما توقع',
      intro: 'أخطر قرار في المشروع مش الفكرة، مين شريكك. الشراكات بتتكسر على الفلوس مش على النيات.',
      sections: [
        { h: 'اختار بمعايير مش بمشاعر', p: 'الصداقة مش أساس شراكة. اسأل: بيكملني في إيه؟ شغله الجاد اتحقق منه قبل كده؟ ظروفه المالية تسمحله يصبر على مشروع؟ شريك محتاج سحب مبكر من المشروع هيعصره في أضعف لحظاته.' },
        { h: 'اكتبوا كل حاجة', p: 'عقد مكتوب يوضح: نسب الملكية وعلى أي أساس، توزيع الأدوار والقرارات (مين يحسم في إيه)، إزاي يتسحب الربح، وإيه يحصل لو حد عايز يخرج أو اتوفى. كتابة سيناريو الخروج وأنتم متفقين أرخص من محامين وأنتم مختلفين.' },
        { h: 'فلوس الشركة مقدسة', p: 'حساب منفصل للمشروع من أول يوم. سحوبات الشركاء بقاعدة مكتوبة مش بالحاجة. ومراجعة شهرية للأرقام مع بعض، الثقة الكويسة بتتبني على شفافية مش على عمى.' },
      ],
      points: ['الشراكة قرار معاييره مهارة والتزام، مش صداقة.', 'اكتبوا سيناريو الخروج وأنتم متفقين.', 'حساب منفصل وسحوبات بقاعدة ومراجعة شهرية.'],
    },
    en: {
      title: 'Partnerships and money: rules before you sign',
      intro: "The riskiest decision in a business is not the idea - it is who partners with you. Partnerships break over money, not intentions.",
      sections: [
        { h: 'Choose by criteria, not feelings', p: 'Friendship is not a basis for partnership. Ask: what do they complement in me? Has their hard work been verified before? Can their finances let them be patient with a startup? A partner who needs early withdrawals will squeeze the business at its weakest moment.' },
        { h: 'Write everything down', p: 'A written contract covering: ownership shares and their basis, roles and decision rights (who decides what), how profits get withdrawn, and what happens if someone wants out or passes away. Writing the exit scenario while you agree is far cheaper than lawyers while you fight.' },
        { h: 'Company money is sacred', p: 'A separate account for the business from day one. Partner withdrawals by written rule, not by need. A monthly numbers review together - good trust is built on transparency, not blindness.' },
      ],
      points: ['Partnership is chosen by skills and commitment, not friendship.', 'Write the exit scenario while you still agree.', 'Separate account, rule-based withdrawals, monthly reviews.'],
    },
  },
]
