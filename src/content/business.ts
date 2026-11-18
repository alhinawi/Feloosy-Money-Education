import type { Lesson } from './types'

export const businessLessons: Lesson[] = [
  {
    slug: 'validate-your-idea',
    ar: {
      title: 'الفكرة والتحقق منها',
      intro: 'الأفكار كتيرة ورخيصة، التنفيذ والسوق هما اللي بيفرقوا. قبل ما تصرف جنيه على مشروع، تأكد إن فيه حد مستعد يدفع فيه.',
      sections: [
        {
          h: 'المشكلة قبل الفكرة',
          p: 'المشروع الناجح بيحل مشكلة حقيقية أو بيلبي احتياج موجود. بدل "عايز أعمل إيه؟" اسأل "الناس حواليا بتتنرفز من إيه؟" أحسن الأفكار بتيجي من ملاحظة مشاكل الناس اليومية، مش من الخيال.',
        },
        {
          h: 'اختبار الـ 10 أشخاص',
          p: 'قبل أي مصروف: كلم 10 أشخاص من الجمهور المستهدف. متسألش "الفكرة حلوة؟" (هيقولوك أيوه مجاملة)، اسأل "آخر مرة واجهت المشكلة دي كانت إمتى؟ دفعت فيها فلوس؟ قد إيه؟" الأجوبة دي ذهب.',
        },
        {
          h: 'البيع المسبق أقوى اختبار',
          p: 'لو تقدر، اعرض المنتج أو الخدمة قبل ما تعملها وخد عربون أو طلبات. ناس تدفع قبل التنفيذ = دليل حقيقي على الطلب. كلام وإعجابات = مجاملة. الفلوس هي الاستفتاء الوحيد الصادق.',
        },
      ],
      points: [
        'ابحث عن مشكلة حقيقية، مش فكرة شكلها جذاب.',
        'اسأل عن سلوك سابق وفلوس اتدفعت، مش عن رأي.',
        'البيع المسبق أصدق اختبار لأي فكرة.',
      ],
    },
    en: {
      title: 'The idea and its validation',
      intro: 'Ideas are many and cheap; execution and the market make the difference. Before spending one pound on a project, make sure someone is willing to pay for it.',
      sections: [
        {
          h: 'Problem before idea',
          p: 'A successful project solves a real problem or serves an existing need. Instead of "what should I make?" ask "what annoys people around me?" The best ideas come from watching daily problems, not from fantasy.',
        },
        {
          h: 'The 10-people test',
          p: 'Before any expense: talk to 10 people from your target audience. Do not ask "is the idea nice?" (they will say yes to be polite). Ask "when did you last face this problem? Did you pay to solve it? How much?" Those answers are gold.',
        },
        {
          h: 'Pre-selling is the strongest test',
          p: 'If you can, offer the product or service before making it and take a deposit or orders. People paying before execution = real proof of demand. Compliments and likes = politeness. Money is the only honest referendum.',
        },
      ],
      points: [
        'Look for a real problem, not a shiny idea.',
        'Ask about past behavior and money paid, not opinions.',
        'Pre-selling is the most honest test of any idea.',
      ],
    },
  },
  {
    slug: 'start-small',
    ar: {
      title: 'ابدأ صغير واكبر صح',
      intro: 'أكبر غلطة بياخد بيها رواد الأعمال الجداد قرض كبير عشان مشروع مجربوش. الاحتراف إنك تبدأ بأقل نسخة ممكنة.',
      sections: [
        {
          h: 'نسخة البداية (MVP)',
          p: 'اعمل أبسط نسخة من فكرتك تحقق بيها النتيجة الأساسية: مطعم؟ ابدأ أوردرات أونلاين من المطبخ. براند هدوم؟ ابدأ بـ 5 قطع مش 500. الهدف تتعلم من السوق الحقيقي بأقل خسارة ممكنة.',
        },
        {
          h: 'قاعدة الفلوس اللي تتحمل خسارتها',
          p: 'أي مشروع ممكن يفشل، حتى أفكار العباقرة فشلت. عشان كده: رأس مال البداية لازم يكون مبلغ خسارته مؤلمة بس مش مدمرة. ممنوع الاستلاف لمشروع أول، وممنوع فلوس الطوارئ وفلوس البيت.',
        },
        {
          h: 'النمو يتموّل من الربح',
          p: 'أحسن مصدر تمويل هو ربح المشروع نفسه: اكسب، رجّع جزء من الربح في المشروع، اكسب أكتر. النمو البطيء الممول ذاتيا أقوى من نمو سريع بالديون اللي ممكن يقلب عليك عند أول أزمة.',
        },
      ],
      points: [
        'أبسط نسخة شغالة أحسن من أضخم نسخة متخيلة.',
        'مخاطر بس بفلوس خسارتها مش هتدمر حياتك.',
        'خلى الربح يموّل النمو، مش الديون.',
      ],
    },
    en: {
      title: 'Start small and grow right',
      intro: 'The biggest mistake new entrepreneurs make is a large loan for an untested project. Professionalism is starting with the smallest possible version.',
      sections: [
        {
          h: 'The starter version (MVP)',
          p: 'Build the simplest version of your idea that delivers the core result: a restaurant? Start with online orders from a kitchen. A clothing brand? Start with 5 pieces, not 500. The goal is learning from the real market at the lowest possible loss.',
        },
        {
          h: 'The money-you-can-lose rule',
          p: 'Any project can fail; even geniuses\' ideas failed. So your starting capital must be an amount whose loss hurts but does not destroy. No borrowing for a first project, and never touch emergency money or household money.',
        },
        {
          h: 'Growth funded by profit',
          p: 'The best funding source is the project\'s own profit: earn, reinvest part of the profit, earn more. Slow self-funded growth beats fast debt-funded growth that can turn on you at the first crisis.',
        },
      ],
      points: [
        'The simplest working version beats the grandest imagined one.',
        'Risk only money whose loss would not destroy your life.',
        'Let profit fund growth, not debt.',
      ],
    },
  },
  {
    slug: 'pricing',
    ar: {
      title: 'التسعير: أصعب قرار',
      intro: 'سعر قليل بيكسرك، وسعر عالي بيطرد العملاء. التسعير مش تخمين، ده حساب وفهم للناس.',
      sections: [
        {
          h: 'ابدأ من التكلفة',
          p: 'احسب كل حاجة بتدخل في المنتج أو الخدمة: خامات، وقتك (سعر ساعتك!)، شحن، تغليف، إعلانات، ونسبة المنصة. السعر لازم يغطي التكلفة الكاملة ويسيب هامش ربح واضح، وإلا بتشغل نفسك بالبلاش.',
        },
        {
          h: 'بص على السوق',
          p: 'شوف المنافسين بيبيعوا بكام، بس متحسبش إن أرخص سعر هو الحل: الرخيص بيجيب عميل بيدور على الأرخص، وبيخلي مفيش هامش للجودة أو التسويق. نافس على القيمة والثقة مش على السعر بس.',
        },
        {
          h: 'متتكسفش من سعرك',
          p: 'لو شغلك كويس ومحسوب صح، سعرك عادل. العميل اللي بيفاصل بعناد من غير سبب غالبا مش عميلك. خصم مدروس بمناسبة أفضل من سعر ناقص طول السنة.',
        },
      ],
      points: [
        'التكلفة الكاملة (منها وقتك) + هامش = أقل سعر مقبول.',
        'منافسة السعر الوحدة طريق للخسارة؛ نافس بالقيمة.',
        'الخصم المدروس استراتيجية، السعر الناقص عادة مضرة.',
      ],
    },
    en: {
      title: 'Pricing: the hardest decision',
      intro: 'A low price breaks you; a high price drives clients away. Pricing is not guessing - it is math plus understanding people.',
      sections: [
        {
          h: 'Start from cost',
          p: 'Count everything going into the product or service: materials, your time (your hourly rate!), shipping, packaging, ads, and platform fees. The price must cover the full cost and leave a clear profit margin, or you are working for free.',
        },
        {
          h: 'Look at the market',
          p: 'See what competitors charge, but do not assume the cheapest price wins: cheap attracts the bargain hunter and leaves no margin for quality or marketing. Compete on value and trust, not price alone.',
        },
        {
          h: 'Do not be shy about your price',
          p: 'If your work is good and your math is right, your price is fair. A client who haggles aggressively without reason is usually not your client. A planned discount for an occasion beats an undercut price all year.',
        },
      ],
      points: [
        'Full cost (including your time) + margin = your minimum price.',
        'Price competition alone is a road to loss; compete on value.',
        'A planned discount is strategy; a permanently low price is harm.',
      ],
    },
  },
  {
    slug: 'simple-marketing',
    ar: {
      title: 'التسويق البسيط',
      intro: 'مش لازم وكالة إعلانات. التسويق في أوله 3 حاجات: ناس تعرفك، ناس تثق فيك، ناس تشتري منك.',
      sections: [
        {
          h: 'محتوى بيفيد، مش بيزعق',
          p: 'أقوى تسويق مجاني هو المحتوى المفيد: علّم الناس حاجة ليها علاقة بمنتجك. بتبيع أدوات مطبخ؟ انشر وصفات. بتقدم خدمة تصميم؟ ورّي قبل وبعد. المحتوى المفيد بيبني ثقة قبل ما يطلب بيع.',
        },
        {
          h: 'الدليل الاجتماعي',
          p: 'صور الشغل الحقيقي، آراء العملاء الحقيقيين (بإذنهم)، وأرقام صادقة زي "300 عميل في 6 شهور" لو فعلا حصلت. ممنوع الآراء المفبركة: لو اتكشفت - وهتتكشف - بتضيع سمعتك كلها في لحظة.',
        },
        {
          h: 'إعلان ممول صغير ومحسوب',
          p: 'لما تجرب الإعلانات: ابدأ بميزانية يومية صغيرة (مثلا 50-100 جنيه)، واستهدف جمهور محدد، وقيس النتيجة: كل جنيه إعلان جاب قد إيه مبيعات؟ اللي مش بيتقاس بيتحرق.',
        },
      ],
      points: [
        'علّم قبل ما تبيع: المحتوى المفيد بيبني ثقة بتتحول لمبيعات.',
        'آراء حقيقية فقط - الفبركة فضيحة مؤجلة.',
        'إعلان صغير مقاس النتيجة أحسن من حملة كبيرة عمياء.',
      ],
    },
    en: {
      title: 'Simple marketing',
      intro: 'You do not need an ad agency. Early marketing is 3 things: people know you, people trust you, people buy from you.',
      sections: [
        {
          h: 'Helpful content, not shouting',
          p: 'The strongest free marketing is useful content: teach people something related to your product. Selling kitchen tools? Post recipes. Offering design? Show before and after. Useful content builds trust before it asks for a sale.',
        },
        {
          h: 'Social proof',
          p: 'Photos of real work, reviews from real customers (with permission), and honest numbers like "300 customers in 6 months" if it actually happened. Fake reviews are banned: when exposed - and they will be - your whole reputation goes in a moment.',
        },
        {
          h: 'A small, measured paid ad',
          p: 'When trying ads: start with a small daily budget (say 50-100 EGP), target a specific audience, and measure: how many sales did each ad pound bring? What is not measured gets burned.',
        },
      ],
      points: [
        'Teach before you sell: useful content builds trust that converts.',
        'Real reviews only - fabrication is a postponed scandal.',
        'A small measured ad beats a big blind campaign.',
      ],
    },
  },
]
