import type { Lesson } from './types'

// Second wave of Money Basics lessons (PR: basics expansion).
export const basicsLessons2: Lesson[] = [
  {
    slug: 'understand-your-payslip',
    ar: {
      title: 'افهم قسيمة مرتبك',
      intro: 'كتير بيصرفوا المرتب من غير ما يفهموا القسيمة: إيه اللي بيتخصم وليه. فهمها أول خطوة عشان تعرف صافي دخلك الحقيقي.',
      sections: [
        {
          h: 'الأساسي والبدلات والخصومات',
          p: 'المرتب بيتكون من أساسي + بدلات + حوافز أحيانا. الخصومات بتشمل التأمينات الاجتماعية (نصيبك من المعاش والتأمين الصحي) والضرائب لو دخلك فوق حد الإعفاء. اسأل مواردكم البشرية عن أي بند مش واضح - ده حقك.',
        },
        {
          h: 'الصافي هو رقمك الحقيقي',
          p: 'الرقم اللي في العقد مش اللي بيوصل حسابك. ميزانيتك كلها لازم تتبني على الصافي بعد الخصومات، مش على الإجمالي. غلطة شائعة بتخلي الناس تصرف أكتر من دخلها الحقيقي.',
        },
        {
          h: 'راجع الخصومات كل فترة',
          p: 'أخطاء بتحصل: خصم تأميني غلط، بدل واقف، حافز ناقص. مراجعة سريعة كل 3 شهور ممكن ترجعلك فلوس كتير على مدار السنة.',
        },
      ],
      points: ['ابني ميزانيتك على صافي المرتب مش الإجمالي.', 'أي بند خصم مش مفهوم: اسأل، ده حقك.', 'راجع القسيمة كل كام شهر - الأخطاء موجودة.'],
    },
    en: {
      title: 'Understand your payslip',
      intro: 'Many spend their salary without understanding the payslip: what is deducted and why. Understanding it is the first step to knowing your real net income.',
      sections: [
        { h: 'Base, allowances and deductions', p: 'A salary is base pay plus allowances and sometimes incentives. Deductions include social insurance (your share of pension and health insurance) and taxes if your income passes the exemption threshold. Ask HR about any unclear line - that is your right.' },
        { h: 'Net is your real number', p: 'The number in the contract is not what reaches your account. Your whole budget must be built on the net after deductions, not the gross. A common mistake that makes people spend above their real income.' },
        { h: 'Review deductions regularly', p: 'Mistakes happen: a wrong insurance deduction, a stopped allowance, a missing bonus. A quick review every 3 months can return serious money over a year.' },
      ],
      points: ['Build your budget on net pay, not gross.', 'Any unclear deduction: ask - it is your right.', 'Review the payslip every few months; mistakes exist.'],
    },
  },
  {
    slug: 'banking-basics-egypt',
    ar: {
      title: 'أساسيات البنوك في مصر',
      intro: 'حساب جاري ولا توفير؟ بطاقة خصم ولا ائتمان؟ البنوك مش معقدة لو فهمت الفروق الأساسية دي.',
      sections: [
        {
          h: 'أنواع الحسابات',
          p: 'الحساب الجاري للصرف اليومي (سهل السحب، عائده شبه معدوم)، وحساب التوفير بيدي عائد بسيط على رصيدك. خلي مصاريفك في الجاري وادخارك القصير في التوفير - الفصل النفسي بيساعد.',
        },
        {
          h: 'بطاقة الخصم ≠ بطاقة الائتمان',
          p: 'بطاقة الخصم بتصرف من فلوسك الموجودة. بطاقة الائتمان بتصرف من فلوس البنك ولازم تسددها كاملة كل شهر وإلا فايدة ضخمة. ميزة الائتمان الوحيدة المقبولة: الطوارئ الحقيقية أو عروض التقسيط بفايدة صفر المدروسة.',
        },
        {
          h: 'التطبيقات وفرت عليك الفرع',
          p: 'أغلب البنوك المصرية عندها تطبيقات كاملة: تحويلات، فواتير، كشف حساب. وانستاباي بيحول بين البنوك فورا. استغلهم في أتمتة الادخار ومتابعة مصاريفك من غير ما تروح فرع.',
        },
      ],
      points: ['جاري للصرف وتوفير للادخار القصير.', 'الائتمان دَين بفايدة، مش فلوس زيادة.', 'التطبيقات وانستاباي أدوات أتمتة مجانية - استغلها.'],
    },
    en: {
      title: 'Banking basics in Egypt',
      intro: 'Current or savings account? Debit or credit card? Banks are not complicated once you get these basic differences.',
      sections: [
        { h: 'Account types', p: 'A current account is for daily spending (easy withdrawals, near-zero return), and a savings account pays a small return on your balance. Keep spending in current and short-term saving in savings - the mental separation helps.' },
        { h: 'Debit card ≠ credit card', p: 'A debit card spends your own money. A credit card spends the bank\'s money and must be paid in full every month or a huge interest hits. The only acceptable credit uses: real emergencies or carefully studied zero-interest installment offers.' },
        { h: 'Apps replaced the branch', p: 'Most Egyptian banks have full apps: transfers, bills, statements. InstaPay moves money between banks instantly. Use them to automate saving and track spending without visiting a branch.' },
      ],
      points: ['Current for spending, savings for short-term saving.', 'Credit is interest-bearing debt, not extra money.', 'Apps and InstaPay are free automation tools - use them.'],
    },
  },
  {
    slug: 'inflation-eats-money',
    ar: {
      title: 'التضخم بياكل فلوسك إزاي',
      intro: 'لو فلوسك قاعدة في الدرج، هي بتخسر كل سنة من غير ما تتحرك. الفهم ده بيفرق بين واحد بيحافظ على فلوسه وواحد بتتبخر.',
      sections: [
        {
          h: 'المثال البسيط',
          p: 'لو الأسعار بتزيد 20% في السنة، الـ 1,000 جنيه اللي في الدرج بتشتري بعد سنة حاجات كانت بـ 830 جنيه تقريبا. الرقم ثابت، لكن القوة الشرائية نزلت. ده التضخم.',
        },
        {
          h: 'إزاي تدافع عن فلوسك؟',
          p: 'الدفاع إن فلوسك تجيب عائد يعادل التضخم أو يعديه: شهادات، صناديق نقدية، أو أصول زي الدهب والعقار على الطويل. الكاش النايم هو الوحيد اللي بيخسر مضمون.',
        },
        {
          h: 'التضخم مش عذر للفزع',
          p: 'متحولش كل حاجة لدولار أو دهب من غير خطة، ومتحطش فلوس الطوارئ في أصول متذبذبة. الخطة المتوازنة اللي فهمتها في مسار الادخار والاستثمار هي الدفاع الصح.',
        },
      ],
      points: ['الكاش النايم بيخسر قيمته كل سنة مع الغلاء.', 'العائد اللي بيغطي التضخم هو خط الدفاع الأول.', 'الفزع غلط زي التجاهل: الخطة المتوازنة هي الحل.'],
    },
    en: {
      title: 'How inflation eats your money',
      intro: 'If your money sits in a drawer, it loses value every year without moving. Understanding this separates those who preserve their money from those whose money evaporates.',
      sections: [
        { h: 'The simple example', p: 'If prices rise 20% in a year, the 1,000 EGP in the drawer buys after a year what cost about 830 EGP. The number is fixed, but the buying power dropped. That is inflation.' },
        { h: 'How to defend your money?', p: 'Defense is money earning a return matching or beating inflation: certificates, money-market funds, or assets like gold and real estate long term. Sleeping cash is the only guaranteed loser.' },
        { h: 'Inflation is no excuse for panic', p: 'Do not convert everything to dollars or gold without a plan, and do not put emergency money in volatile assets. The balanced plan you learned in the saving and investing tracks is the right defense.' },
      ],
      points: ['Sleeping cash loses value every year with rising prices.', 'A return covering inflation is the first line of defense.', 'Panic is as wrong as ignoring it: the balanced plan wins.'],
    },
  },
  {
    slug: 'needs-vs-wants',
    ar: {
      title: 'احتياج ولا رغبة؟',
      intro: 'أصعب سؤال في الميزانية: ده احتياج ولا رغبة؟ الإجابة الصادقة بتحرر فلوس كتير من غير ما تحس بحرمان.',
      sections: [
        {
          h: 'الخط مش واضح دايما',
          p: 'الأكل احتياج، الأوردر اليومي رغبة. الموبايل احتياج للشغل، أحدث إصدار كل سنة رغبة. اسأل: هتتأثر حياتي الأساسية (أكل، سكن، شغل، صحة) لو الحاجة دي مش موجودة؟',
        },
        {
          h: 'الترقية التدريجية فخ',
          p: 'مع كل زيادة دخل، الرغبات بتحاول تتحول لاحتياجات: عربية أحسن، شقة أغلى، خروجات أغنى. ده طبيعي بس لازم يتحكم فيه - خلى جزء ثابت من أي زيادة دخل يروح للادخار الأول.',
        },
        {
          h: 'الرغبات مش حرام',
          p: 'الهدف مش حياة من غير مباهج، الهدف إن المباهج تكون مخططة وفي حدود الـ 30%. الرغبة اللي اتخطط ليها بتلذ أكتر من اللي بتشتريها وتندم.',
        },
      ],
      points: ['الاختبار: هتتأثر حياتك الأساسية لو الحاجة مش موجودة؟', 'مع كل زيادة دخل، اربط جزء منها بالادخار قبل الرغبات.', 'المتعة المخططة أفضل من المتعة الاندفاعية.'],
    },
    en: {
      title: 'Need or want?',
      intro: 'The hardest budget question: is this a need or a want? An honest answer frees a lot of money without feeling deprived.',
      sections: [
        { h: 'The line is not always clear', p: 'Food is a need; daily delivery is a want. A phone is a work need; the newest model every year is a want. Ask: would my basic life (food, housing, work, health) be hurt without it?' },
        { h: 'Lifestyle creep is a trap', p: 'With every raise, wants try to become needs: a better car, a pricier flat, fancier outings. Natural, but it must be controlled - route a fixed part of every raise to saving first.' },
        { h: 'Wants are not forbidden', p: 'The goal is not a joyless life; the goal is planned joys within the 30% limit. A planned want tastes better than one you buy and regret.' },
      ],
      points: ['The test: would your basic life suffer without it?', 'With every raise, lock part of it to saving before wants.', 'Planned pleasure beats impulsive pleasure.'],
    },
  },
  {
    slug: 'family-money-talk',
    ar: {
      title: 'الكلام عن الفلوس في البيت',
      intro: 'أكتر سبب للمشاكل الأسرية بعد الغلط نفسه هو الفلوس. الكلام الواضح عنها بيريح البيت كله.',
      sections: [
        {
          h: 'ميعاد الفلوس الشهري',
          p: 'ظبط مع شريك حياتك ميعاد ثابت كل شهر: نراجع اللي دخل واللي خرج ونخطط للي جاي. نص ساعة في ميعاد ثابت أحسن من خناقة عند كل مصروف مفاجئ.',
        },
        {
          h: 'اتفقوا على قواعد واضحة',
          p: 'مين مسئول عن إيه؟ حد الشراء الكبير اللي فوقه لازم نتكلم؟ قد إيه مصروف شخصي حر لكل واحد من غير أسئلة؟ الاتفاقات دي بتمنع 90% من الخلافات.',
        },
        {
          h: 'علّم ولادك الفلوس',
          p: 'الأطفال بيتعلموا الفلوس من تصرفاتك مش من كلامك. مصروف أسبوعي ثابت يتدبروا فيه نفسهم أحسن مدرسة. وخلي الحديث عن الميزانية طبيعي مش تابو في البيت.',
        },
      ],
      points: ['ميعاد شهري ثابت للمراجعة أفضل من نقاش عند كل أزمة.', 'قواعد مكتوبة متفق عليها بتمنع أغلب الخلافات.', 'أولادك بيتعلموا من تصرفاتك - خليك المثال.'],
    },
    en: {
      title: 'Money talk at home',
      intro: 'The top source of family conflict after mistakes themselves is money. Clear talk about it relaxes the whole house.',
      sections: [
        { h: 'The monthly money appointment', p: 'Set a fixed monthly time with your partner: review what came in, what went out, and plan what is next. Half an hour on schedule beats a fight at every surprise expense.' },
        { h: 'Agree on clear rules', p: 'Who is responsible for what? What is the big-purchase threshold above which we must talk? How much free personal spending does each get, no questions? These agreements prevent 90% of conflicts.' },
        { h: 'Teach your kids money', p: 'Children learn money from your behavior, not your words. A fixed weekly allowance they manage themselves is the best school. Make budget talk normal at home, not a taboo.' },
      ],
      points: ['A fixed monthly review beats a fight at every crisis.', 'Written agreed rules prevent most conflicts.', 'Your kids learn from your actions - be the example.'],
    },
  },
  {
    slug: 'first-paycheck-plan',
    ar: {
      title: 'أول مرتب: خطة أول 3 شهور',
      intro: 'أول مرتب لحظة فارقة: اللي بتعمله فيها بيرسم عاداتك لسنين. خطة بسيطة لأول 3 شهور تخليك تبدأ صح.',
      sections: [
        {
          h: 'الشهر الأول: مترفعش سقف معيشتك',
          p: 'أكبر فخ هو الاحتفال بزيادة معيشة فورية. عيش أول شهر بنفس مستواك السابق، وسجّل مصاريفك، وحوّل أول مبلغ ادخار (حتى لو رمزي) يوم القبض نفسه.',
        },
        {
          h: 'الشهر التاني: أساس الطوارئ',
          p: 'حدد مصاريفك الأساسية الشهرية بالظبط، وابدأ صندوق الطوارئ بهدف أول 5,000 أو 10,000 جنيه في حساب منفصل. ده درعك ضد أي ظرف مفاجئ.',
        },
        {
          h: 'الشهر التالت: نظام ثابت',
          p: 'ثبت النسب: احتياجات، رغبات، ادخار. فعّل التحويل التلقائي. وابدأ تتعلم مهارة تزود دخلك - أول مرتب مش نهاية الطموح، ده نقطة الانطلاق.',
        },
      ],
      points: ['أول شهر: عيش بمستواك القديم وسجّل كل حاجة.', 'ثاني شهر: ابدأ صندوق الطوارئ فورا.', 'تالت شهر: نظام ثابت + مهارة بتكبر بيها.'],
    },
    en: {
      title: 'First paycheck: a 3-month plan',
      intro: 'The first paycheck is a turning point: what you do with it shapes your habits for years. A simple 3-month plan to start right.',
      sections: [
        { h: 'Month one: do not raise your lifestyle', p: 'The biggest trap is an instant lifestyle celebration. Live the first month at your previous level, record your expenses, and move a first saving amount (even symbolic) on payday itself.' },
        { h: 'Month two: emergency fund foundation', p: 'Define your exact monthly essential expenses, and start the emergency fund targeting a first 5,000 or 10,000 EGP in a separate account. That is your shield against surprises.' },
        { h: 'Month three: a fixed system', p: 'Lock the ratios: needs, wants, saving. Turn on the automatic transfer. And start learning a skill that raises your income - the first paycheck is not the end of ambition, it is the launchpad.' },
      ],
      points: ['Month one: live at your old level and record everything.', 'Month two: start the emergency fund immediately.', 'Month three: a fixed system plus a growing skill.'],
    },
  },
]
