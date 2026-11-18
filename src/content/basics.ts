import type { Lesson } from './types'

export const basicsLessons: Lesson[] = [
  {
    slug: 'where-does-money-go',
    ar: {
      title: 'فلوسك بتروح فين؟',
      intro: 'أول خطوة في أي خطة مالية إنك تعرف فلوسك بتروح فين بالظبط. مش نصيحة ولا حرمان، دي مجرد معرفة.',
      sections: [
        {
          h: 'ليه بنحس إن القبض بيخلص بسرعة؟',
          p: 'لأن المصاريف الصغيرة هي اللي بتاكل الفلوس من غير ما تحس: قهوة هنا، أوردر هناك، اشتراك نسيته شغال. المصاريف الكبيرة زي الإيجار بنفتكرها، لكن الصغيرة بتتراكم في صمت.',
        },
        {
          h: 'جرب تجربة الـ 30 يوم',
          p: 'لمدة شهر واحد بس، سجل كل جنيه بيخرج من جيبك: في نوتة الموبايل أو ورقة. في آخر الشهر هتلاقي 3 حاجات واضحة: مصاريف لازمة، مصاريف ممكن تقل، ومصاريف مش فاكرها أصلا.',
        },
        {
          h: 'قسّم مصاريفك لـ 3 مجموعات',
          p: 'احتياجات (أكل وشرب وسكن ومواصلات وفواتير)، رغبات (خروجات وترفيه وحاجات بتحبها)، وادخار. التقسيم ده هو اللي هيخليك تعرف فين المشكلة لو القبض مش مكفي.',
        },
      ],
      points: [
        'المصاريف الصغيرة المتكررة أخطر على ميزانيتك من مصروف كبير مرة واحدة.',
        'سجل مصاريفك شهر واحد على الأقل قبل ما تحكم على نفسك.',
        'المعرفة مش حرمان: الهدف إنك تصرف بوعي مش إنك تعيش محروم.',
      ],
    },
    en: {
      title: 'Where does your money go?',
      intro: 'The first step of any money plan is knowing exactly where your money goes. Not advice, not deprivation - just knowledge.',
      sections: [
        {
          h: 'Why does the salary vanish so fast?',
          p: 'Because small expenses eat money silently: a coffee here, a delivery order there, a subscription you forgot. Big expenses like rent are easy to remember, but the small ones pile up quietly.',
        },
        {
          h: 'Try the 30-day experiment',
          p: 'For one month only, write down every pound that leaves your pocket, in your phone notes or on paper. At the end of the month you will see 3 clear groups: necessary spending, spending you can trim, and spending you did not even remember.',
        },
        {
          h: 'Split your spending into 3 buckets',
          p: 'Needs (food, housing, transport, bills), wants (outings, entertainment, things you love), and saving. This split is what shows you where the problem is when the income is not enough.',
        },
      ],
      points: [
        'Small repeated expenses hurt your budget more than one big purchase.',
        'Track your spending for at least one month before judging yourself.',
        'Knowledge is not deprivation: the goal is conscious spending, not a miserable life.',
      ],
    },
  },
  {
    slug: 'budget-50-30-20',
    ar: {
      title: 'ميزانية 50/30/20',
      intro: 'أسهل طريقة تقسم بيها دخلك من غير ما تحتاج شهادة محاسبة. قاعدة مشهورة عالميا وبتنفع كنقطة بداية في مصر.',
      sections: [
        {
          h: 'القاعدة ببساطة',
          p: 'قسّم دخلك الشهري: 50% للاحتياجات (سكن وأكل ومواصلات وفواتير)، 30% للرغبات (خروجات وهوايات)، 20% ادخار واستثمار. مثال: لو دخلك 10,000 جنيه، يبقى 5,000 احتياجات و3,000 رغبات و2,000 ادخار.',
        },
        {
          h: 'لو النسب مش ماشية معاك',
          p: 'في مصر كتير بيلاقوا الاحتياجات واخدة 70% أو 80% من الدخل، وده طبيعي مع الأسعار الحالية. متقلقش: ابدأ بأي نسبة ادخار ولو 5%، والمهم العادة مش الرقم. كل ما دخلك يزيد، زود نسبة الادخار.',
        },
        {
          h: 'إزاي تخلي الميزانية تحصل فعلا؟',
          p: 'أول ما القبض يوصل، حوّل نسبة الادخار فورا لمكان تاني (حساب تاني أو محفظة منفصلة). اللي يفضل قدامك هو اللي تتصرف فيه. كده الادخار بيحصل بالإجبار مش بالنيّة.',
        },
      ],
      points: [
        '50% احتياجات، 30% رغبات، 20% ادخار - نقطة بداية مش قانون صارم.',
        'لو ميزانيتك ضاغطة، ابدأ بأي نسبة ادخار ولو صغيرة وبعدها زودها.',
        'الادخار التلقائي أول الشهر أنجح من "هشوف هيفضل إيه".',
      ],
    },
    en: {
      title: 'The 50/30/20 budget',
      intro: 'The easiest way to split your income without an accounting degree. A famous worldwide rule that works as a starting point in Egypt too.',
      sections: [
        {
          h: 'The rule, simply',
          p: 'Split your monthly income: 50% needs (housing, food, transport, bills), 30% wants (outings, hobbies), 20% saving and investing. Example: on a 10,000 EGP income that is 5,000 needs, 3,000 wants, 2,000 saving.',
        },
        {
          h: 'If the percentages do not fit you',
          p: 'In Egypt many people find needs taking 70% or 80% of income, which is normal with current prices. Do not worry: start with any saving rate, even 5%. The habit matters more than the number. As your income grows, raise the saving share.',
        },
        {
          h: 'How to make the budget actually happen',
          p: 'The moment your income arrives, move the saving share somewhere else right away (a second account or a separate wallet). What stays in front of you is what you may spend. That way saving happens by force, not by intention.',
        },
      ],
      points: [
        '50% needs, 30% wants, 20% saving - a starting point, not a strict law.',
        'If your budget is tight, start with any saving rate, even small, then grow it.',
        'Automatic saving at the start of the month beats "I will see what is left".',
      ],
    },
  },
  {
    slug: 'emergency-fund',
    ar: {
      title: 'صندوق الطوارئ',
      intro: 'قبل ما تفكر في استثمار أو مشروع، لازم يكون عندك حيطة صد: فلوس جانبية للظروف. دي أهم خطوة في الاستقرار المالي.',
      sections: [
        {
          h: 'يعني إيه صندوق طوارئ؟',
          p: 'مبلغ مدخر مخصوص للمفاجآت بس: مرض، فصل من الشغل، عربية أو موبايل اتعطل، ظرف عائلي. مش للخروجات ولا للفرص ولا لـ"العرض اللي لازم يتاخد دلوقتي".',
        },
        {
          h: 'قد إيه المبلغ المطلوب؟',
          p: 'القاعدة الشائعة: من 3 لـ 6 شهور من مصاريفك الأساسية. لو مصاريفك 8,000 جنيه في الشهر، يبقى هدفك من 24,000 لـ 48,000 جنيه. ابدأ بهدف صغير: أول 5,000 جنيه، وبعدين شهر كامل، وبعدين كمّل.',
        },
        {
          h: 'تحطه فين؟',
          p: 'المهم يكون سائل (تقدر توصله بسرعة) وآمن: حساب بنكي منفصل أو شهادة قصيرة تقدر تكسرها. مكانش في استثمار ممكن ينزل سعره وقت ما تحتاج الفلوس.',
        },
      ],
      points: [
        'صندوق الطوارئ قبل أي استثمار: هو اللي بيمنعك تستدين وقت الأزمة.',
        'الهدف 3-6 شهور مصاريف أساسية، وتبدأ بهدف صغير.',
        'سائل وآمن، مش لازم يجيب عائد كبير.',
      ],
    },
    en: {
      title: 'The emergency fund',
      intro: 'Before thinking about investing or a business, you need a shield: money set aside for hard times. This is the most important step in financial stability.',
      sections: [
        {
          h: 'What is an emergency fund?',
          p: 'A saved amount only for surprises: illness, losing a job, a broken car or phone, a family emergency. Not for outings, not for opportunities, not for "the deal you must take now".',
        },
        {
          h: 'How much should it be?',
          p: 'The common rule: 3 to 6 months of your essential expenses. If your monthly essentials are 8,000 EGP, your goal is 24,000 to 48,000 EGP. Start small: first 5,000, then one full month, then keep going.',
        },
        {
          h: 'Where to keep it?',
          p: 'It must be liquid (reachable fast) and safe: a separate bank account or a short certificate you can break early. Not in an investment that might be down exactly when you need the money.',
        },
      ],
      points: [
        'The emergency fund comes before any investment: it keeps you from borrowing in a crisis.',
        'Target 3-6 months of essential expenses, starting with a small goal.',
        'Liquid and safe; a big return is not the point here.',
      ],
    },
  },
  {
    slug: 'good-bad-debt',
    ar: {
      title: 'الدَين: الحسن والوحش',
      intro: 'الدَين مش عيب ولا فضيحة، لكنه أداة خطيرة: ممكن تبني بيها وممكن تهدم بيها. الفرق في الفايدة وفي سبب الاستدانة.',
      sections: [
        {
          h: 'دَين بياكل منك',
          p: 'الدَين الوحش هو اللي بتاخده عشان حاجة بتقل قيمتها أو بتخلص: موبايل بالتقسيط بفايدة عالية، سلفة للخروجات، كارت ائتمان متسحوب لآخره. الفايدة هنا بتشتغل ضدك كل شهر وبتكبر.',
        },
        {
          h: 'فايدة الكارت الائتماني',
          p: 'لو سحبت من كارت ائتمان ومش بتسدد كامل المبلغ، الفايدة الشهرية ممكن توصل 3% أو أكتر، يعني أكتر من 40% في السنة. ده أسرع طريق تخسر بيه فلوس من غير ما تحس.',
        },
        {
          h: 'لو عليك ديون دلوقتي',
          p: 'رتب ديونك من أعلى فايدة لأقلها، وسدد الأعلى الأول بأقصى ما تقدر (مع دفع الحد الأدنى للباقي). وقف أي دَين جديد لحد ما تخلص. لو فيه أقساط كتير، شوف لو توحيدها في قرض واحد أرخص هيقلل التكلفة.',
        },
      ],
      points: [
        'الدَين اللي فايدته عالية وسببه استهلاك هو أول عدو لفلوسك.',
        'سدد كامل مستحقات الكارت الائتماني كل شهر، وإلا الفايدة هتاكلك.',
        'خطة السداد: الأعلى فايدة الأول، وممنوع ديون جديدة أثناء السداد.',
      ],
    },
    en: {
      title: 'Debt: the good and the ugly',
      intro: 'Debt is not shameful, but it is a dangerous tool: it can build for you or demolish you. The difference is the interest rate and the reason for borrowing.',
      sections: [
        {
          h: 'Debt that eats you',
          p: 'Bad debt is what you take for things that lose value or get consumed: a phone on high-interest installments, borrowing for outings, a maxed-out credit card. Here the interest works against you and grows every month.',
        },
        {
          h: 'Credit card interest',
          p: 'If you carry a credit card balance without paying it in full, monthly interest can reach 3% or more - over 40% a year. That is the fastest way to lose money without noticing.',
        },
        {
          h: 'If you have debts right now',
          p: 'Order your debts from the highest interest to the lowest, and pay the highest one first as hard as you can (while paying minimums on the rest). Take no new debt until you finish. If installments are many, check whether combining them into one cheaper loan lowers the cost.',
        },
      ],
      points: [
        'High-interest debt taken for consumption is your money\'s first enemy.',
        'Pay your credit card in full every month, or interest will eat you.',
        'Payoff plan: highest interest first, and no new debt while paying off.',
      ],
    },
  },
]
