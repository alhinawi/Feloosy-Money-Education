import type { Lesson } from './types'

// Second wave of Side Income lessons (PR: side income expansion).
export const sideIncomeLessons2: Lesson[] = [
  {
    slug: 'freelance-first-client',
    ar: {
      title: 'أول عميل فريلانس: منين وإزاي',
      intro: 'أصعب خطوة في الشغل الحر مش المهارة، إنك تلاقي أول حد يدفع لك. دي خطة عملية لأول عميل.',
      sections: [
        { h: 'جهز إثبات شغلك', p: 'محتاج 3-5 نماذج شغل حتى لو عملتهم مجانا لنفسك أو لمعارفك. صفحة بسيطة أو حساب منظم عليه شغلك أقنع من أي كلام. من غير نماذج، هتنافس بالسعر بس وده سباق للقاع.' },
        { h: 'قنوات أول عميل', p: 'دايرتك القريبة أسرع قناة: قول لكل معارفك إنك بتقدم الخدمة دي. بعدين المنصات: مستقل وخمسات للعربي، Upwork وFiverr للإنجليزي. وجروبات المجال بتاعتك على فيسبوك وتيليجرام فيها طلبات حقيقية.' },
        { h: 'عرضك الأول', p: 'اقرأ طلب العميل كويس ورد على نقطته هو، مش قالب جاهز بتبعته للكل. اعرض حل لمشكلته بجملة أو اتنين، ونموذج شغل قريب من طلبه، وسعر واضح. أول 3 عملاء هدفهم التقييمات مش الربح.' },
      ],
      points: ['نماذج الشغل أقوى من أي وصف.', 'دايرتك القريبة أسرع من المنصات في البداية.', 'أول عملاء بيوصلوك للتقييمات، والتقييمات بتوصلك للأسعار الكويسة.'],
    },
    en: {
      title: 'Your first freelance client: where and how',
      intro: 'The hardest step in freelancing is not the skill - it is finding the first person who pays you. Here is a practical plan.',
      sections: [
        { h: 'Prepare proof of work', p: 'You need 3-5 work samples even if made free for yourself or friends. A simple page or organized profile showing your work convinces more than any pitch. Without samples you compete on price alone, and that is a race to the bottom.' },
        { h: 'First-client channels', p: 'Your close circle is the fastest channel: tell everyone you offer this service. Then platforms: Mostaql and Khamsat for Arabic, Upwork and Fiverr for English. Facebook and Telegram groups in your field carry real requests.' },
        { h: 'Your first proposal', p: "Read the client's request carefully and reply to their specific point, not a copy-paste template. Offer a fix to their problem in a sentence or two, a sample close to their need, and a clear price. Your first 3 clients are for reviews, not profit." },
      ],
      points: ['Work samples beat any description.', 'Your close circle is faster than platforms early on.', 'First clients bring reviews; reviews bring good rates.'],
    },
  },
  {
    slug: 'pricing-your-service',
    ar: {
      title: 'تسعير خدمتك من غير ما تظلم نفسك',
      intro: 'أغلب المبتدئين بيسعروا أرخص من اللازم بكتير. التسعير الصح بيغطي وقتك ومجهودك وخبرتك.',
      sections: [
        { h: 'احسب تكلفة ساعتك', p: 'قسم دخلك الشهري الحالي على ساعات شغلك الفعلية عشان تعرف ساعتك بتسوى كام النهاردة. سعرك كفريلانسر لازم يكون أعلى من ده بوضوح، لأنك بتدفع ضرايب ومصاريف ومفيش شغل مضمون.' },
        { h: 'اسعر بالمشروع مش بالساعة لما تقدر', p: 'العميل بيشتري نتيجة مش وقتك. لو شغلك بيوفر أو بيكسب للعميل فلوس، سعرك جزء من القيمة دي مش من تكلفة ساعتك. لوجو لمحل صغير غير لوجو لشركة كبيرة حتى لو نفس المجهود.' },
        { h: 'إزاي ترفع أسعارك', p: 'ارفع سعرك مع كل 3-5 مشاريع ناجحة أو لما الطلب عليك يزيد عن وقتك. عميل بيشتكي من السعر مش دايما عميل وحش: أحيانا انت بتكلم الفئة الغلط. خصم بسيط مقابل دفع مقدم أحسن من تخفيض السعر الأساسي.' },
      ],
      points: ['سعرك أعلى من تكلفة ساعتك الحالية بهامش واضح.', 'سعر على القيمة للعميل مش على وقتك بس.', 'ارفع السعر تدريجيا مع التقييمات والطلب.'],
    },
    en: {
      title: 'Pricing your service without shortchanging yourself',
      intro: 'Most beginners price far too low. Right pricing covers your time, effort and experience.',
      sections: [
        { h: 'Calculate your hourly cost', p: 'Divide your current monthly income by your actual work hours to know what your hour is worth today. Your freelance rate must be clearly above that, because you carry taxes, expenses and no guaranteed work.' },
        { h: 'Price per project, not per hour, when you can', p: 'The client buys an outcome, not your time. If your work saves or earns the client money, your price is a share of that value, not of your hours. A logo for a small shop differs from one for a big company even at equal effort.' },
        { h: 'How to raise your prices', p: 'Raise your rate every 3-5 successful projects or when demand exceeds your time. A client complaining about price is not always a bad client: sometimes you are talking to the wrong segment. A small discount for upfront payment beats cutting your base rate.' },
      ],
      points: ['Price clearly above your current hourly cost.', 'Price on client value, not just your hours.', 'Raise prices gradually with reviews and demand.'],
    },
  },
  {
    slug: 'delivery-apps-truth',
    ar: {
      title: 'الشغل في تطبيقات التوصيل: الحسابات الحقيقية',
      intro: 'أكبر وأشهر دخل جانبي في مصر دلوقتي. بس معظم اللي بيشتغلوا فيه مش بيحسبوا صافي الربح صح.',
      sections: [
        { h: 'الإيراد مش الربح', p: 'اللي بيدخل جيبك من التطبيق مش كله ربح. اخصم بنزين، صيانة، استهلاك الموتوسيكل أو العربية (قيمتها بتقل مع الكيلومترات)، وباقة النت. ناس كتير بتكتشف إنها بتحول قيمة عربيتها لكاش مش أكتر.' },
        { h: 'احسبها بالساعة الصافية', p: 'سجل أسبوع كامل: كل الفلوس اللي دخلت وكل المصاريف وكل الساعات من خروجك لرجوعك. اقسم الصافي على الساعات. الرقم ده هو الحقيقة، وقارنه بأي بديل متاح ليك بنفس الساعات.' },
        { h: 'إمتى يكون قرار كويس', p: 'كدخل مؤقت سريع السيولة: ممتاز. كمشروع طويل الأمد: ضعيف، لأنه مش بيبني مهارة ولا أصل ولا سمعة بتكبر. لو هتشتغل فيه، حدد هدف (مبلغ معين أو فترة معينة) واستغله في بناء الخطوة اللي بعدها.' },
      ],
      points: ['صافي الساعة بعد كل المصاريف هو الرقم الوحيد المهم.', 'استهلاك المركبة تكلفة حقيقية حتى لو مش بتدفعها دلوقتي.', 'دخل مؤقت ممتاز، خطة طويلة الأمد لأ.'],
    },
    en: {
      title: 'Delivery-app work: the real math',
      intro: 'The biggest and most famous side income in Egypt right now. But most riders never compute their true net profit.',
      sections: [
        { h: 'Revenue is not profit', p: 'What the app pays into your pocket is not all profit. Deduct fuel, maintenance, vehicle depreciation (its value falls with kilometers), and data. Many discover they are just converting their vehicle value into cash.' },
        { h: 'Compute net per hour', p: 'Log one full week: all money in, all expenses, all hours door to door. Divide the net by the hours. That number is the truth - compare it to any alternative you could do with the same hours.' },
        { h: 'When it is a good call', p: 'As fast, liquid, temporary income: excellent. As a long-term plan: weak, because it builds no skill, asset or growing reputation. If you do it, set a goal (an amount or a period) and use it to fund the next step.' },
      ],
      points: ['Net per hour after all expenses is the only number that matters.', 'Vehicle wear is a real cost even if unpaid today.', 'Great temporary income, poor long-term plan.'],
    },
  },
  {
    slug: 'digital-products',
    ar: {
      title: 'المنتجات الرقمية: اشتغل مرة وبيع كتير',
      intro: 'قالب، كورس، كتاب إلكتروني، أو أداة بسيطة: المنتج الرقمي بيتصنع مرة ويتباع من غير تكلفة إضافية تقريبا.',
      sections: [
        { h: 'أمثلة تناسب السوق المصري والعربي', p: 'قوالب إكسل للميزانية أو إدارة المخزون، ملخصات ومراجعات دراسية، قوالب سوشيال ميديا، كورس قصير في مهارة بتتقنها، أو أدلة عملية لمجال بتعرفه. المفتاح: حل مشكلة محددة لجمهور محدد.' },
        { h: 'فين تبيع', p: 'المنصات العربية والدولية للمنتجات الرقمية، أو صفحة بسيطة مع فودافون كاش أو انستاباي للتحويل. ابدأ بجمهورك الحالي ولو صغير: جروب واتساب أو صفحة فيها 500 شخص مهتمين أحسن من 10,000 مش مهتمين.' },
        { h: 'الحقيقة المرة', p: 'المنتج الرقمي مش دخل سلبي من أول يوم. التصنيع سهل نسبيا، البيع هو الشغل الحقيقي: محتوى وتسويق مستمر. خطط إن التسويق هياخد 70% من مجهودك بعد ما المنتج يخلص.' },
      ],
      points: ['حل مشكلة محددة لجمهور محدد.', 'ابدأ بجمهور صغير مهتم مش جمهور كبير بارد.', 'التسويق هو الشغل الحقيقي بعد التصنيع.'],
    },
    en: {
      title: 'Digital products: build once, sell many times',
      intro: 'A template, course, ebook or simple tool: a digital product is made once and sold at near-zero extra cost.',
      sections: [
        { h: 'Examples fitting the Egyptian and Arab market', p: 'Excel templates for budgeting or inventory, study notes and summaries, social-media templates, a short course in a skill you master, or practical guides in a field you know. The key: solve a specific problem for a specific audience.' },
        { h: 'Where to sell', p: 'Arab and international digital-product platforms, or a simple page with Vodafone Cash or InstaPay for payment. Start with your current audience however small: a WhatsApp group or page with 500 interested people beats 10,000 cold followers.' },
        { h: 'The hard truth', p: 'A digital product is not passive income from day one. Building is the relatively easy part; selling is the real work: continuous content and marketing. Plan for marketing to take 70% of your effort after the product is done.' },
      ],
      points: ['Solve a specific problem for a specific audience.', 'Start with a small warm audience, not a big cold one.', 'Marketing is the real work after building.'],
    },
  },
  {
    slug: 'weekend-business',
    ar: {
      title: 'مشروع الويك إند: دخل جانبي من غير ما تسيب شغلك',
      intro: 'مش كل دخل جانبي أونلاين. مشاريع الويك إند المحلية لسه شغالة وبقوة في مصر.',
      sections: [
        { h: 'أفكار محلية مجربة', p: 'أكل بيتي بطلبات مسبقة، تنظيم رحلات يوم واحد لمنطقتك، تأجير حاجة عندك (عدة، كاميرا، شقة مصيف)، خدمات للمحلات الصغيرة جنبك (تصوير منتجات، إدارة صفحاتهم)، أو بيع في معارض الويك إند. اختار حاجة تناسب وقتك ومنطقتك.' },
        { h: 'جرب من غير مخاطرة', p: 'ابدأ بأقل نسخة: منيو واحد، رحلة واحدة، عميل واحد. الالتزام المسبق (طلبات مدفوعة قبل التجهيز) بيمنع الخسارة تقريبا. لو الطلبات قلت، خسارتك وقت ويك إند مش مدخرات.' },
        { h: 'نقطتك القوية المحلية', p: 'الميزة الحقيقية للمشروع المحلي إن المنافسة فيه أقل والثقة أسرع. الناس بتشتري من اللي تعرفه أو اللي جارها رشحه. اعتمد على ترشيحات منطقتك قبل أي إعلان مدفوع.' },
      ],
      points: ['الطلبات المسبقة المدفوعة أمان من الخسارة.', 'ابدأ بأصغر نسخة ممكنة من الفكرة.', 'الثقة المحلية أسرع قناة تسويق ليك.'],
    },
    en: {
      title: 'The weekend business: side income without quitting your job',
      intro: 'Not every side income is online. Local weekend businesses still work strongly in Egypt.',
      sections: [
        { h: 'Proven local ideas', p: 'Pre-ordered home cooking, one-day trips organized around your area, renting out something you own (tools, camera, a beach flat), services for the small shops near you (product photos, managing their pages), or selling at weekend fairs. Pick what fits your time and area.' },
        { h: 'Test without risk', p: 'Start with the smallest version: one menu, one trip, one client. Prepaid orders remove almost all loss. If orders fall short, you lose a weekend, not your savings.' },
        { h: 'Your local edge', p: 'The real advantage of a local business is less competition and faster trust. People buy from who they know or who their neighbor recommended. Rely on local referrals before any paid ad.' },
      ],
      points: ['Prepaid orders protect you from loss.', 'Start with the smallest version of the idea.', 'Local trust is your fastest marketing channel.'],
    },
  },
  {
    slug: 'side-income-taxes-legal',
    ar: {
      title: 'الدخل الجانبي والقانون: نظم ورقك بدري',
      intro: 'أول ما الدخل الجانبي يبقى منتظم، الموضوع بيتحول من "فلوس زيادة" لنشاط ليه التزامات. نظمها بدري أرخص بكتير.',
      sections: [
        { h: 'سجل كل حاجة من أول يوم', p: 'شيت بسيط: تاريخ، عميل، مبلغ، طريقة دفع، مصروف. السجل ده بيريحك لو احتجت تثبت دخلك (فيزا، قرض، إيجار) وبيسهل أي تسوية رسمية بعدين. خلي فلوس المشروع في محفظة أو حساب منفصل عن مصروف البيت.' },
        { h: 'إمتى تسجل رسمي', p: 'لما الدخل يبقى منتظم وملموس، استشر محاسب قانوني عن وضعك: التسجيل الضريبي للمشاريع الصغيرة في مصر بقى أسهل وأرخص من زمان، وفيه مزايا للمشروعات الصغيرة ومتناهية الصغر. الرسوم البسيطة دي بتشتري لك راحة بال ووضع قانوني.' },
        { h: 'العقود حتى مع المعارف', p: 'أي شغل أكبر من مبلغ بسيط يتكتب: إيه المطلوب، التسليم إمتى، الدفع إزاي. رسالة واتساب واضحة بالتفاصيل والسعر أحسن من اتفاق شفهي. الكتابة بتحمي العلاقة مش بتوترها.' },
      ],
      points: ['سجل الدخل والمصاريف من أول يوم.', 'افصل فلوس المشروع عن فلوس البيت.', 'الكتابة تحمي العلاقات قبل الفلوس.'],
    },
    en: {
      title: 'Side income and the law: organize your paperwork early',
      intro: 'Once side income becomes regular, it turns from "extra cash" into an activity with obligations. Organizing early is far cheaper.',
      sections: [
        { h: 'Record everything from day one', p: 'A simple sheet: date, client, amount, payment method, expense. This record helps when you need to prove income (visa, loan, rent) and eases any formal settlement later. Keep business money in a wallet or account separate from household spending.' },
        { h: 'When to register formally', p: 'When income becomes regular and meaningful, consult an accountant about your status: tax registration for small businesses in Egypt is easier and cheaper than it used to be, with benefits for micro and small enterprises. Those small fees buy you peace of mind and legal standing.' },
        { h: 'Contracts even with friends', p: 'Any job beyond a trivial amount gets written down: what is required, when delivery happens, how payment works. A clear WhatsApp message with details and price beats a verbal agreement. Writing protects the relationship, it does not strain it.' },
      ],
      points: ['Log income and expenses from day one.', 'Keep business money separate from home money.', 'Writing protects relationships before money.'],
    },
  },
]
