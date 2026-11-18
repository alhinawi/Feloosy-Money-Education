import type { Lesson } from './types'

// Second wave of Investing lessons (PR: investing expansion).
export const investingLessons2: Lesson[] = [
  {
    slug: 'first-investment-order',
    ar: {
      title: 'أول استثمار ليك خطوة بخطوة',
      intro: 'من قرار "هستثمر" لحد أول جنيه يشتغل، الترتيب الصح بيوفر عليك تلخبطة وخسائر المبتدئين.',
      sections: [
        { h: 'ابدأ بالأسهل نفسيا', p: 'مش لازم أعلى عائد يكون أول خطوة. صندوق نقدي يومي أو وثيقة بنكية أحسن بداية من الأسهم، لأن هدفك الأول تتعود على الإيداع المنتظم مش إنك تكسب كتير بسرعة. مبلغ صغير ثابت كل شهر أحسن من مبلغ كبير مرة واحدة وخلاص.' },
        { h: 'الإجراءات عمليا', p: 'للصناديق البنكية: فرع البنك أو التطبيق، بطاقة الرقم القومي، ومبلغ بداية غالبا من 100 لـ 1,000 جنيه. للأسهم: بتصدر كود موحد من البورصة عن طريق شركة وساطة مرخصة، وبعدها بتشتري من التطبيق. اكتب رسوم الشراء والإدارة في حساب العائد.' },
        { h: 'بعد أول استثمار', p: 'ثبت ميعاد إيداع شهري، يوم المرتب مثلا. متتابعش السعر كل يوم، راجع كل 3 شهور. وسجل سبب كل قرار شراء عشان تراجع نفسك بعد سنة وتتعلم من قراراتك.' },
      ],
      points: ['العادة قبل العائد: ابدأ بأداة بسيطة ومبلغ صغير ثابت.', 'الرسوم جزء من العائد الحقيقي، احسبها.', 'راجع كل 3 شهور مش كل يوم.'],
    },
    en: {
      title: 'Your first investment, step by step',
      intro: 'From deciding to invest to your first pound working - the right order saves you beginner confusion and losses.',
      sections: [
        { h: 'Start with the psychologically easiest', p: 'The highest yield need not come first. A daily money-market fund or a bank CD beats stocks as a first step, because your first goal is building a deposit habit, not fast gains. A small fixed monthly amount beats one big lump sum then nothing.' },
        { h: 'The practical steps', p: 'For bank funds: branch or app, national ID, and a starting amount usually between 100 and 1,000 EGP. For stocks: issue a unified investor code through a licensed brokerage, then buy from the app. Record purchase and management fees inside your return math.' },
        { h: 'After the first investment', p: 'Fix a monthly deposit date, payday for example. Do not watch the price daily; review every 3 months. Write down the reason for every buy so you can audit yourself a year later.' },
      ],
      points: ['Habit before yield: start with a simple tool and a small fixed amount.', 'Fees are part of your real return - count them.', 'Review every 3 months, not daily.'],
    },
  },
  {
    slug: 'stock-red-days',
    ar: {
      title: 'لما الأسهم تنزل: إزاي تتصرف',
      intro: 'النزول جزء طبيعي من اللعبة. الفرق بين المستثمر والمضارب المتوتر هو وجود خطة وقت الأحمر.',
      sections: [
        { h: 'ليه الأسهم بتنزل', p: 'أخبار اقتصادية، أرباح شركات أقل من المتوقع، أو ذعر عام في السوق. النزول المؤقت عادي حتى للشركات القوية. وافهم الرقم: اللي بينزل 50% محتاج يطلع 100% عشان يرجع زي ما كان، فالخسارة الكبيرة أصعب في التعويض.' },
        { h: 'قواعد وقت النزول', p: 'متبيعش بسبب الخوف. البيع الصح ليه سبب واحد: إن سبب الشراء الأصلي اتغير. والفلوس اللي هتحتاجها قريب مفروض مكنتش في أسهم أصلا. لو مؤمن بالشركة والسبب الأساسي لسه موجود، النزول فرصة شراء أرخص مش كارثة.' },
        { h: 'اتعلم من كل نزول', p: 'راجع قرارك الأصلي: كان مبني على تحليل ولا على ترند؟ قيس تحملك الحقيقي للمخاطرة مش اللي كنت متخيله وانت مرتاح. ولو اكتشفت إنك خاطرت بأكتر من طاقتك، عدل التوزيع فورا.' },
      ],
      points: ['البيع بسبب تغير الأساسيات، مش بسبب الخوف.', 'خسارة 50% محتاجة مكسب 100% للتعويض.', 'فلوس قريبة الاحتياج مكانها مش الأسهم.'],
    },
    en: {
      title: 'When stocks fall: how to act',
      intro: 'Drops are a normal part of the game. What separates an investor from a nervous speculator is having a plan for red days.',
      sections: [
        { h: 'Why stocks fall', p: 'Economic news, earnings below expectations, or general market panic. Temporary drops are normal even for strong companies. Know the math: a 50% drop needs a 100% gain to recover, so big losses are the hardest to make back.' },
        { h: 'Rules for red days', p: 'Do not sell out of fear. The only sound reason to sell is that your original reason to buy changed. Money you will need soon should never have been in stocks. If you believe in the company and the thesis still holds, a drop is a cheaper entry, not a disaster.' },
        { h: 'Learn from every drop', p: 'Review your original decision: was it analysis or trend-chasing? Measure your real risk tolerance, not the one you imagined while comfortable. If you find you risked more than you can handle, adjust your allocation now.' },
      ],
      points: ['Sell when fundamentals change, not from fear.', 'A 50% loss needs a 100% gain to recover.', 'Soon-needed money does not belong in stocks.'],
    },
  },
  {
    slug: 'gold-coins-bullion',
    ar: {
      title: 'الذهب بالتفصيل: سبايك وجنيهات وعيارات',
      intro: 'الدهب استثمار المصريين المفضل من زمان، بس الفرق بين أشكاله ممكن يكلفك 20% من فلوسك وانت مش واخد بالك.',
      sections: [
        { h: 'الأشكال المتاحة', p: 'السبايك 24 قيراط أقل مصنعية وأنسب شكل للاستثمار الصافي. الجنيه الذهب 21 قيراط سهل البيع والشراء ومعروف في كل محل. أما المشغولات فمصنعيتها ممكن تاكل 10-20% من القيمة، فهي زينة مش استثمار.' },
        { h: 'إزاي تشتري صح', p: 'قارن سعر البيع والشراء في أكتر من محل، لأن الفرق بينهم هو هامش التاجر. اشتري من محل معروف وبفاتورة مختومة بالوزن والعيار. وابعرف سعر الجرام العالمي والمحلي قبل ما تتحرك من البيت.' },
        { h: 'حدود الدهب كاستثمار', p: 'الدهب مبيدرش دخل دوري، مكسبه من فرق السعر بس. وسعره في مصر بيتحرك مع الدولار وسعر الأونصة العالمية مع بعض. وبيعه محتاج وقت وتدوير، فهو مش سائل زي الصندوق النقدي.' },
      ],
      points: ['للاستثمار: سبايك أو جنيهات، مش مشغولات.', 'الفاتورة المختومة بالوزن والعيار إثباتك.', 'الدهب بيحافظ على القيمة لكن مبيدرش دخل.'],
    },
    en: {
      title: 'Gold in detail: bullion, coins and karats',
      intro: "Gold has been Egyptians' favorite investment for generations, but the difference between its forms can cost you 20% without noticing.",
      sections: [
        { h: 'The available forms', p: '24k bullion bars carry the lowest making charges and suit pure investment best. 21k gold coins are easy to trade and known in every shop. Jewelry carries making charges that can eat 10-20% of value, so it is adornment, not investment.' },
        { h: 'How to buy right', p: 'Compare buy and sell prices across shops, because the spread is the dealer margin. Buy from a known shop with a stamped invoice showing weight and karat. Check the global and local gram price before you leave home.' },
        { h: 'Gold limits as an investment', p: 'Gold pays no periodic income; gains come only from price moves. Its Egypt price moves with both the dollar and the global ounce price. Selling takes time and shopping around, so it is less liquid than a money-market fund.' },
      ],
      points: ['For investment: bars or coins, not jewelry.', 'A stamped invoice with weight and karat is your proof.', 'Gold preserves value but pays no income.'],
    },
  },
  {
    slug: 'real-estate-investing-egypt',
    ar: {
      title: 'العقار كاستثمار: يستاهل ولا لأ؟',
      intro: 'العقار حلم كل مصري، بس الحلم ليه حسابات. قبل ما تحط كل مدخراتك في شقة، اعمل الأرقام دي.',
      sections: [
        { h: 'مميزات العقار', p: 'أصل ملموس بيحافظ على قيمته مع التضخم على المدى الطويل، وبيديك دخل إيجار شهري لو أجرته، ونفسيا مريح لناس كتير لأنه حاجة شايفها بعينك.' },
        { h: 'الحسابات اللي لازم تتعمل', p: 'العائد الإيجاري في مصر غالبا 3-6% سنويا من سعر العقار، قارنه بعائد الوثائق والصناديق قبل ما تفتكر إن العقار دايما أحسن. وضيف التكاليف الخفية: صيانة وضرايب وشهور الفراغ بين المستأجرين. وفاكر إن العقار مش سائل: بيعه ممكن ياخد شهور لو احتجت فلوسك.' },
        { h: 'بدائل بمبالغ أصغر', p: 'لو رأس مالك لسه صغير: صناديق الاستثمار العقاري لما تكون متاحة، أو مشاركة مع شريك موثوق بعقد مكتوب وواضح، أو بناء رأس المال في أدوات تانية لحد ما المبلغ المناسب يتجمع.' },
      ],
      points: ['قارن العائد الإيجاري بعوائد البنوك قبل القرار.', 'الصيانة والفراغ والضرايب بتاكل من العائد.', 'العقار بطيء البيع: متعلقش فلوس الطوارئ فيه.'],
    },
    en: {
      title: 'Real estate as an investment: worth it or not?',
      intro: "Property is every Egyptian's dream, but dreams need math. Before putting all your savings into an apartment, run these numbers.",
      sections: [
        { h: 'Advantages of property', p: 'A tangible asset that holds value against inflation over the long term, pays monthly rent if leased, and feels psychologically safe to many because you can see it with your own eyes.' },
        { h: 'The math you must do', p: 'Rental yield in Egypt is usually 3-6% of the property price per year - compare it with CD and fund yields before assuming property always wins. Add the hidden costs: maintenance, taxes, and vacant months between tenants. And remember property is illiquid: selling can take months when you need cash.' },
        { h: 'Smaller-ticket alternatives', p: 'If your capital is still small: real-estate investment funds when available, partnering with a trusted person under a clear written contract, or building capital in other instruments until the right amount is ready.' },
      ],
      points: ['Compare rental yield to bank yields before deciding.', 'Maintenance, vacancy and taxes eat the return.', 'Property sells slowly: never park emergency money in it.'],
    },
  },
  {
    slug: 'asset-allocation',
    ar: {
      title: 'توزيع الأصول: متحطش كل فلوسك في سلة واحدة',
      intro: 'أهم قاعدة في الاستثمار وأبسطها، ومع ذلك أكتر قاعدة بتتكسر لما حاجة واحدة تبان مضمونة.',
      sections: [
        { h: 'ليه التنويع مهم', p: 'أي استثمار واحد ممكن يخسر، والتنويع بيخلي خسارة واحد متهلكش كل حاجة. الأدوات المختلفة بتتحرك بطرق مختلفة في نفس الظروف: لما الأسهم تنزل، الودائع ثابتة والدهب ممكن يطلع. الهدف مش أعلى عائد ممكن، الهدف عائد كويس بأقل قلق.' },
        { h: 'توزيع بسيط للمبتدئين', p: 'مثال توضيحي مش توصية شخصية: 40% ودائع ووثائق، 30% صناديق نقدية، 20% أسهم أو صناديق أسهم، 10% دهب. التوزيع يتغير مع سنك وظروفك: كل ما تكبر أو يقرب موعد احتياج الفلوس، قلل المخاطرة. واعمل إعادة توازن مرة في السنة: قلل اللي زاد عن نسبته وزود اللي قل.' },
        { h: 'أخطاء شائعة', p: 'تنويع وهمي: 5 أسهم في نفس القطاع مش تنويع لأنهم بينزلوا مع بعض. وتنويع زيادة عن اللزوم بمبالغ صغيرة بياكل العائد في الرسوم. وانسان كتير ينسى إن شغله نفسه مصدر دخل: لو شغلك في العقارات، قلل العقار في استثماراتك.' },
      ],
      points: ['التنويع بيحميك من كارثة استثمار واحد.', 'نوع عبر أدوات وقطاعات مختلفة مش داخل نفس القطاع.', 'راجع التوزيع مرة في السنة وأعد التوازن.'],
    },
    en: {
      title: "Asset allocation: don't put all your money in one basket",
      intro: 'The most important and simplest investing rule, and yet the one most often broken when a single thing looks like a sure bet.',
      sections: [
        { h: 'Why diversification matters', p: 'Any single investment can lose, and diversification keeps one loss from wrecking everything. Different instruments move differently under the same conditions: when stocks fall, deposits stay put and gold may rise. The goal is not maximum return - it is good return with less anxiety.' },
        { h: 'A simple starter allocation', p: 'An illustrative example, not personal advice: 40% deposits and CDs, 30% money-market funds, 20% stocks or equity funds, 10% gold. The split changes with age and situation: as you get older or the need date approaches, de-risk. Rebalance once a year: trim what exceeded its share, add to what fell below it.' },
        { h: 'Common mistakes', p: 'Fake diversification: 5 stocks in the same sector fall together. Over-diversifying tiny amounts eats returns in fees. And many forget their job is an income source: if you work in real estate, hold less property in your investments.' },
      ],
      points: ["Diversification shields you from one investment's disaster.", 'Spread across instruments and sectors, not within one sector.', 'Review the allocation yearly and rebalance.'],
    },
  },
  {
    slug: 'long-term-investing',
    ar: {
      title: 'الاستثمار طويل الأجل: قوة الصبر',
      intro: 'الوقت اللي فلوسك بتقضيه في السوق أهم بكتير من محاولة ضبط توقيت الدخول المثالي.',
      sections: [
        { h: 'الفائدة المركبة', p: 'التراكم معناه إن أرباحك بتكسب أرباح هي كمان، وهنا السحر الحقيقي. 10,000 جنيه بعائد 15% سنويا تبقى حوالي 40,000 بعد 10 سنين من غير ما تضيف قرش. والبداية المبكرة أهم من المبلغ الكبير: اللي بيبدأ بدري بمبلغ صغير بيكسب اللي بيبدأ متأخر بمبلغ أكبر.' },
        { h: 'إزاي تفضل ثابت', p: 'حول الاستثمار لعادة شهرية آلية مش قرار جديد كل مرة. اكتب هدفك المالي وخليه قدامك، لأن الانسحاب المبكر بيكسر التراكم في أحلى سنينه. وتوقع إن في سنين خسارة، ده جزء طبيعي من التجربة مش علامة فشل.' },
        { h: 'علامات المستثمر طويل الأجل', p: 'بتشتري في النزول زي ما بتشتري في الطلوع لأن خطتك ثابتة. مش بتفتح التطبيق كل يوم تشوف السعر. وبتفكر بالسنين مش بالشهور. لو التلاتة دول موجودين، انت على الطريق الصح.' },
      ],
      points: ['التراكم بيشتغل بالوقت: ابدأ بدري ولو بمبلغ صغير.', 'الانسحاب المبكر أغلى غلطة في الاستثمار طويل الأجل.', 'سنين الخسارة جزء من الرحلة مش نهايتها.'],
    },
    en: {
      title: 'Long-term investing: the power of patience',
      intro: 'Time your money spends in the market matters far more than trying to nail the perfect entry moment.',
      sections: [
        { h: 'Compound interest', p: 'Compounding means your gains earn gains of their own - that is the real magic. 10,000 EGP at 15% yearly becomes about 40,000 in 10 years without adding a pound. Starting early beats starting big: the small early starter outgrows the larger late one.' },
        { h: 'How to stay consistent', p: 'Turn investing into an automated monthly habit, not a fresh decision each time. Write your financial goal and keep it visible, because early withdrawal breaks compounding in its best years. Expect losing years; they are a normal part of the ride, not a sign of failure.' },
        { h: 'Marks of a long-term investor', p: 'You buy in drops just as in rallies because your plan is steady. You do not open the app daily to check prices. You think in years, not months. If all three hold, you are on the right track.' },
      ],
      points: ['Compounding works through time: start early, even small.', 'Early withdrawal is the costliest long-term mistake.', 'Losing years are part of the journey, not its end.'],
    },
  },
]
