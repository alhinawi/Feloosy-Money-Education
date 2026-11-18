import type { Lesson } from './types'

// Second wave of Saving lessons (PR: saving expansion).
export const savingLessons2: Lesson[] = [
  {
    slug: 'saving-on-small-income',
    ar: {
      title: 'الادخار بدخل صغير',
      intro: 'أشهر حجة: "دخلي صغير، أدخر منين؟" الحقيقة إن الادخار عادة قبل ما يكون مبلغ، والدخل الصغير هو اللي محتاج العادة دي أكتر.',
      sections: [
        {
          h: 'ابدأ بمبلغ يريحك نفسيا',
          p: '50 أو 100 جنيه في الشهر مش هيغيروا حياتك، لكن هيبنوا العضلة. اللي بيقدر يدخر من 5,000 هيقدر يدخر من 50,000. والعكس صح: اللي مش بيدخر من القليل مش هيدخر من الكتير.',
        },
        {
          h: 'فكك المصاريف الثابتة',
          p: 'مع دخل صغير، كل 100 جنيه بتفرق: اشتراكات مش بتستخدمها، باقة نت أكبر من احتياجك، مواصلات ممكن تركبها أرخص، سجاير أو مشروبات يومية. جردة واحدة للثوابت ممكن تحرر 10% من دخلك.',
        },
        {
          h: 'الحل الأكبر: زود الدخل',
          p: 'التوفير ليه سقف. لو دخلك صغير فعلا، أولويتك الأولى مهارة أو دخل جانبي (مسار الدخل الجانبي عندنا)، والادخار يشتغل بالتوازي ولو بمبلغ صغير. الاتنين مع بعض بيغيروا الصورة خلال سنة.',
        },
      ],
      points: ['العادة أهم من المبلغ: ابدأ ولو بـ 50 جنيه.', 'جردة المصاريف الثابتة بتحرر فلوس مش بتتحس.', 'الادخار + زيادة الدخل مع بعض أسرع من أي واحد لوحده.'],
    },
    en: {
      title: 'Saving on a small income',
      intro: 'The most common excuse: "My income is small, save from what?" The truth is saving is a habit before it is an amount, and a small income needs that habit most.',
      sections: [
        { h: 'Start with a psychologically easy amount', p: '50 or 100 EGP a month will not change your life, but they build the muscle. Whoever can save from 5,000 can save from 50,000 - and whoever cannot save from little will not save from much.' },
        { h: 'Break down your fixed expenses', p: 'On a small income every 100 EGP matters: unused subscriptions, a data bundle bigger than your need, transport you could take cheaper, daily cigarettes or drinks. One audit of fixed costs can free 10% of your income.' },
        { h: 'The bigger fix: grow income', p: 'Cutting costs has a ceiling. If your income is truly small, your first priority is a skill or side income (see our Side Income track), with saving running in parallel however small. Together they change the picture within a year.' },
      ],
      points: ['The habit beats the amount: start even with 50 EGP.', 'A fixed-expense audit frees money you did not feel.', 'Saving plus income growth beats either alone.'],
    },
  },
  {
    slug: 'money-market-funds',
    ar: {
      title: 'صناديق النقدية اليومية',
      intro: 'من أعمل أدوات الادخار في مصر وكثير من الناس لا يعرفها: صندوق نقدي بيخلي فلوسك تكسب عائد يومي وتسحبها وقت ما تحتاج.',
      sections: [
        {
          h: 'يعني إيه صندوق نقدي؟',
          p: 'صندوق استثمار بيشتغل في أدوات قصيرة الأجل آمنة (أذون خزانة وأدوات دين حكومية). بتشتري "وثائق" من البنك أو شركة الإدارة، والعائد بيتراكم يوميا، والسحب بياخد يوم أو يومين عمل غالبا.',
        },
        {
          h: 'إمتى تكون أحسن من الشهادات؟',
          p: 'للفلوس اللي ممكن تحتاجها في أي وقت: صندوق الطوارئ مثلا. الشهادة بتقفل فلوسك لفترة، الصندوق النقدي سائل تقريبا. لكن العائد متغير مش مضمون بسعر ثابت زي الشهادة، وبيتحرك مع أسعار الفايدة.',
        },
        {
          h: 'ازاي تبدأ؟',
          p: 'اسأل في بنكك عن صندوقهم النقدي: الحد الأدنى (في صناديق بتبدأ من مبالغ صغيرة)، ومصاريف الاشتراك والاسترداد. قارن بين كذا بنك زي ما بتقارن أسعار الشهادات بالظبط.',
        },
      ],
      points: ['صندوق نقدي = عائد يومي + سيولة عالية + مخاطرة قليلة.', 'مثالي لصندوق الطوارئ والفلوس قصيرة الأجل.', 'قارن الحد الأدنى والمصاريف بين البنوك قبل ما تبدأ.'],
    },
    en: {
      title: 'Daily money-market funds',
      intro: 'One of the hardest-working saving tools in Egypt that many people do not know: a money-market fund earning daily return while staying reachable.',
      sections: [
        { h: 'What is a money-market fund?', p: 'An investment fund working in safe short-term instruments (treasury bills and government debt). You buy "units" from the bank or asset manager, the return accrues daily, and redemption usually takes a business day or two.' },
        { h: 'When is it better than certificates?', p: 'For money you might need any time - like the emergency fund. A certificate locks your money for a term; the money-market fund is nearly liquid. But its return is variable, not locked like a certificate, and moves with interest rates.' },
        { h: 'How to start?', p: 'Ask your bank about their money-market fund: the minimum (some funds start small), and subscription/redemption fees. Compare a few banks exactly like you compare certificate rates.' },
      ],
      points: ['Money-market fund = daily return + high liquidity + low risk.', 'Ideal for the emergency fund and short-term money.', 'Compare minimums and fees across banks before starting.'],
    },
  },
  {
    slug: 'saving-for-marriage',
    ar: {
      title: 'الادخار للجواز',
      intro: 'الجواز في مصر من أكبر الأهداف المالية في حياة الشباب. خطة واضحة بتحوله من همّ ثقيل لهدف بيتقسم على شهور.',
      sections: [
        {
          h: 'احسب الرقم الحقيقي',
          p: 'اكتب كل حاجة: الشبكة، الجهاز، الإيجار أو الشقة، الفرح، المصاريف الافتتاحية للبيت. الأرقام الصادقة (حتى لو مؤلمة) أحسن من مفاجأت آخر السكة. حط 10-15% زيادة للطوارئ لأن الأسعار بتتحرك.',
        },
        {
          h: 'قسّمها على مراحل',
          p: 'بدل "رقم مرعب واحد": مرحلة الشبكة، مرحلة الجهاز الأساسي، مرحلة الفرح. كل مرحلة ليها مبلغ وموعد. ومتشتريش كل حاجة أحسن نوع - "كويس ومناسب" أحكم من "أفخر حاجة وديون".',
        },
        {
          h: 'ممنوع تبدأ البيت بالديون',
          p: 'قرض شخصي عشان الفرح أو الجهاز بيخلي أول سنين الجواز كلها أقساط وضغط. لو الخطة مش ماشية: زوّد المدة، صغّر التكاليف، أو زوّد الدخل - بس متستلفش للاستهلاك.',
        },
      ],
      points: ['اكتب الرقم الكامل الصادق + 10-15% طوارئ.', 'مراحل صغيرة بمواعيد أسهل من رقم واحد مرعب.', 'الجواز اللي بيبدأ بديون استهلاكية بيبدأ متعثر.'],
    },
    en: {
      title: 'Saving for marriage',
      intro: 'Marriage in Egypt is one of the biggest financial goals in a young person\'s life. A clear plan turns it from a heavy worry into a goal split over months.',
      sections: [
        { h: 'Compute the real number', p: 'Write everything: the engagement gift, furnishing, rent or the flat, the wedding, the home\'s starting expenses. Honest numbers (even painful) beat end-of-the-road surprises. Add 10-15% buffer because prices move.' },
        { h: 'Split it into stages', p: 'Instead of one scary number: the gift stage, the essential furnishing stage, the wedding stage. Each stage gets an amount and a date. And do not buy the best of everything - "good and fitting" is wiser than "finest plus debts".' },
        { h: 'Never start the home with debt', p: 'A personal loan for the wedding or furnishing turns the first years of marriage into installments and pressure. If the plan does not fit: extend the timeline, shrink costs, or grow income - but do not borrow for consumption.' },
      ],
      points: ['Write the full honest number plus a 10-15% buffer.', 'Small dated stages beat one scary number.', 'A marriage starting with consumer debt starts struggling.'],
    },
  },
  {
    slug: 'automated-saving-tools',
    ar: {
      title: 'أدوات الأتمتة في مصر',
      intro: 'أقوى ادخار هو اللي بيحصل من غير ما تفكر. الأدوات موجودة في موبايلك وبنكك - محتاجة بس تتظبط مرة واحدة.',
      sections: [
        {
          h: 'التحويل الدوري من البنك',
          p: 'أغلب تطبيقات البنوك فيها "تحويل مجدد": تختار مبلغ ويوم (يوم القبض) وحساب تاني. مرة واحدة تتظبط وتنسى. دي أهم خطوة أتمتة على الإطلاق.',
        },
        {
          h: 'محافظ الموبايل وانستاباي',
          p: 'لو بنكك مش سهل، حوّل يوم القبض لمحفظة مخصصة للادخار بس (مش اللي بتصرف منها). الفصل النفسي بين "فلوس الصرف" و"فلوس التحويش" نص المعركة.',
        },
        {
          h: 'قاعدة التقريب والفكة',
          p: 'عادة بسيطة بس بتلم: أي فكة أو مبالغ صغيرة في آخر اليوم تتحط في برطمان أو محفظة منفصلة. وفي ناس بتقرب كل شراء لأقرب 10 وتحوش الفرق. المبالغ الصغيرة بتتراكم بشكل مدهش.',
        },
      ],
      points: ['ظبط التحويل المجدول يوم القبض مرة واحدة وخلاص.', 'افصل محفظة التحويش عن محفظة الصرف.', 'الفكة والتقريب بيلموا مبالغ محترمة على السنة.'],
    },
    en: {
      title: 'Automation tools in Egypt',
      intro: 'The strongest saving is the one that happens without thinking. The tools are already in your phone and bank - they just need one-time setup.',
      sections: [
        { h: 'Recurring bank transfer', p: 'Most bank apps have a "scheduled transfer": pick an amount, a day (payday), and a second account. Set once and forget. This is the single most important automation step.' },
        { h: 'Mobile wallets and InstaPay', p: 'If your bank is awkward, transfer on payday to a wallet dedicated to saving only (not the one you spend from). The mental split between "spending money" and "saving money" is half the battle.' },
        { h: 'The rounding and change rule', p: 'A simple habit that adds up: any change or small amounts at day\'s end go to a jar or separate wallet. Some people round every purchase to the nearest 10 and save the difference. Small amounts accumulate surprisingly.' },
      ],
      points: ['Set the payday scheduled transfer once, done.', 'Separate the saving wallet from the spending wallet.', 'Change and rounding collect serious money over a year.'],
    },
  },
  {
    slug: 'big-purchase-planning',
    ar: {
      title: 'التخطيط لشراء كبير',
      intro: 'عربية، موبايل غالي، لابتوب للشغل: المشتريات الكبيرة إما خطوة للقدام أو حفرة ديون - الفرق هو التخطيط.',
      sections: [
        {
          h: 'قاعدة الاختبار التلاتة',
          p: 'قبل أي شراء كبير اسأل: هل ده احتياج شغل/حياة فعلا؟ هل عندي ثمنه كاش من غير ما أمس صندوق الطوارئ؟ هل استنيت أسبوعين على الأقل ولسه محتاجه؟ لو الإجابة "لا" لأي سؤال، استنى.',
        },
        {
          h: 'قارن التكلفة الكاملة مش القسط',
          p: 'البائع بيبيعلك "قسط صغير" لأن ده سهل يتبردمغك. احسب: إجمالي الأقساط + المقدم مقابل سعر الكاش. الفرق ممكن يوصل 20-40%. لو لازم تقسط، اختار أقل فايدة وأقصر مدة تقدر عليها.',
        },
        {
          h: 'ادخر له مخصوص',
          p: 'هدف الشراء الكبير يتحط في حاسبة هدف الادخار: مبلغ وموعد وقسط ادخار شهري. لما توصل للمبلغ، اشري كاش بثقة - ومتنساش تفاوض على السعر، السائح في السوق المصري هو اللي بيدفع السعر المعلن.',
        },
      ],
      points: ['الاختبار: احتياج حقيقي + كاش متاح + أسبوعين تفكير.', 'قارن إجمالي التقسيط بسعر الكاش قبل ما توقع.', 'ادخر مخصوص للهدف وافاوض على السعر وقت الشراء.'],
    },
    en: {
      title: 'Planning a big purchase',
      intro: 'A car, an expensive phone, a work laptop: big purchases are either a step forward or a debt pit - the difference is planning.',
      sections: [
        { h: 'The three-question test', p: 'Before any big purchase ask: is this a real work/life need? Do I have its price in cash without touching the emergency fund? Have I waited at least two weeks and still need it? If any answer is "no", wait.' },
        { h: 'Compare full cost, not the installment', p: 'The seller sells you a "small installment" because it is easy on the brain. Compute: total installments plus down payment versus the cash price. The gap can reach 20-40%. If you must use installments, pick the lowest interest and shortest term you can carry.' },
        { h: 'Save for it specifically', p: 'Put the big purchase into the savings-goal calculator: an amount, a date, and a monthly saving installment. When you reach the amount, buy in cash with confidence - and do not forget to negotiate; in Egyptian markets the asking price is the starting point.' },
      ],
      points: ['The test: real need + cash available + two weeks of thought.', 'Compare total installment cost to the cash price before signing.', 'Save specifically for the goal and negotiate when buying.'],
    },
  },
  {
    slug: 'saving-in-hard-currency',
    ar: {
      title: 'الادخار بالعملة الصعبة؟',
      intro: 'مع كل موجة تضخم بيتكرر السؤال: أحوش بالجنيه ولا بالدولار؟ الإجابة الصادقة: الموضوع له وجهين ومتاخدش قرارك من الخوف.',
      sections: [
        {
          h: 'ليه الناس بتحوش بالدولار؟',
          p: 'لأن الجنيه اتعرض لتخفيضات كبيرة قبل كده، فالدولار بيحافظ على القوة الشرائية العالمية. ده حقيقي، خصوصا لو التزاماتك بالعملة الصعبة (سفر، دراسة، استيراد).',
        },
        {
          h: 'اللي مش بيتقال',
          p: 'الدولار نفسه مفيش عليه عائد وهو قاعد، وعائدات الجنيه في فترات كتير كانت أعلى من نسبة التخفيض السنوية. يعني اللي حول كل حاجة للدولار ممكن يكون خسر عائد محترم. ومخاطر السوق الموازي (نصب وسعر وهمي) حقيقية - التعامل الرسمي من البنوك بس.',
        },
        {
          h: 'الحل المتوازن',
          p: 'زي أي حاجة في الفلوس: التنويع. جزء بالجنيه بعائد يغطي التضخم (شهادات/صناديق نقدية)، وجزء بعملة صعبة رسمي لو عندك التزامات أو قلق طويل المدى. القرار يتاخد بأرقامك انت، مش من تريند.',
        },
      ],
      points: ['الدولار بيحافظ على القيمة لكن بلا عائد وهو نايم.', 'عائد الجنيه ساعات بيغلب التخفيض - احسبها بأرقام.', 'تنويع عملاتك من القنوات الرسمية بس، وممنوع السوق الموازي.'],
    },
    en: {
      title: 'Saving in hard currency?',
      intro: 'With every inflation wave the question returns: save in pounds or dollars? The honest answer: it has two sides, and fear should not decide for you.',
      sections: [
        { h: 'Why do people save in dollars?', p: 'Because the pound has seen big devaluations, so the dollar preserves global buying power. That is true, especially if your obligations are in hard currency (travel, study, importing).' },
        { h: 'What is not said', p: 'The dollar itself earns no return while sitting, and pound returns in many periods exceeded the yearly devaluation rate. So whoever converted everything to dollars may have lost a respectable return. And black-market risks (scams, fake rates) are real - official bank channels only.' },
        { h: 'The balanced answer', p: 'Like everything in money: diversify. A part in pounds earning an inflation-covering return (certificates/money-market funds), and a part in hard currency through official channels if you have obligations or long-term concern. Decide with your own numbers, not from a trend.' },
      ],
      points: ['Dollars preserve value but earn nothing while idle.', 'Pound returns sometimes beat devaluation - do the math.', 'Diversify currencies through official channels only; no black market.'],
    },
  },
]
