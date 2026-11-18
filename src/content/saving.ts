import type { Lesson } from './types'

export const savingLessons: Lesson[] = [
  {
    slug: 'pay-yourself-first',
    ar: {
      title: 'ادفع لنفسك الأول',
      intro: 'أشهر قاعدة ادخار في العالم: الادخار مش اللي بيفضل بعد الصرف، الادخار بيتخصم الأول والصرف بيتظبط على الباقي.',
      sections: [
        {
          h: 'المعادلة المقلوبة',
          p: 'أغلب الناس بتحسبها كده: دخل - مصاريف = ادخار. والنتيجة إن الادخار بيطلع صفر. الأغنياء بيحسبوها بالعكس: دخل - ادخار = مصاريف. حط الادخار في المعادلة الأول وباقي الشهر يتدبر نفسه.',
        },
        {
          h: 'التحويل التلقائي صديقك',
          p: 'ظبط تحويل تلقائي يوم القبض: نسبة ثابتة تروح لحساب تاني أو محفظة ادخار. لما الفلوس متبقاش قدام عينك، بتتعود تعيش من غيرها. أغلب البنوك المصرية ومحافظ الموبايل فيها الخاصية دي.',
        },
        {
          h: 'ابدأ صغير وارفع تدريجيا',
          p: 'لو 20% صعبة، ابدأ بـ 5% أو حتى 100 جنيه في الشهر. بعد 3 شهور زود 1%. الطريقة دي اسمها "التصعيد البطيء" وبتنجح لأنها متوجعش. العادة اللي بتتبني بهدوء هي اللي بتعيش.',
        },
      ],
      points: [
        'دخل - ادخار = مصاريف، مش العكس.',
        'التحويل التلقائي يوم القبض بيخلي الادخار يحصل من غير مجهود.',
        'ابدأ بأي نسبة وزودها تدريجيا كل كام شهر.',
      ],
    },
    en: {
      title: 'Pay yourself first',
      intro: 'The most famous saving rule in the world: saving is not what is left after spending - saving comes off first, and spending adjusts to the rest.',
      sections: [
        {
          h: 'The flipped equation',
          p: 'Most people compute: income - expenses = saving. The result is saving equals zero. Wealthy people flip it: income - saving = expenses. Put saving first in the equation and the rest of the month manages itself.',
        },
        {
          h: 'Automatic transfer is your friend',
          p: 'Set an automatic transfer on payday: a fixed share goes to a second account or a savings wallet. When the money is not in front of your eyes, you get used to living without it. Most Egyptian banks and mobile wallets support this.',
        },
        {
          h: 'Start small and raise gradually',
          p: 'If 20% is hard, start with 5% or even 100 EGP a month. After 3 months add 1%. This is called slow ramping and it works because it does not hurt. Habits built gently are the ones that survive.',
        },
      ],
      points: [
        'Income - saving = expenses, not the other way around.',
        'An automatic payday transfer makes saving happen with zero effort.',
        'Start with any rate and raise it gradually every few months.',
      ],
    },
  },
  {
    slug: 'bank-certificates-egypt',
    ar: {
      title: 'الشهادات البنكية في مصر',
      intro: 'الشهادات الادخارية من أشهر أدوات الادخار في مصر. هنتكلم عنها بصراحة: إيجابيات وسلبيات، من غير ما نكون إعلان لأي بنك.',
      sections: [
        {
          h: 'يعني إيه شهادة ادخار؟',
          p: 'بتدّي البنك مبلغ لفترة معينة (سنة، 3 سنين...) والبنك يديك عائد ثابت. العائد بيتغير مع قرارات البنك المركزي، فاسأل دايما عن السعر الحالي قبل ما تربط فلوسك. وممنوع نقترح سعر معين هنا لأنه بيتغير.',
        },
        {
          h: 'اللي محدش بيقولهولك',
          p: 'العائد الثابت مش دايما كسب: لو التضخم أعلى من العائد، قيمة فلوسك الحقيقية بتقل حتى لو الرقم بيكبر. وكمان كسر الشهادة قبل ميعادها بيخصم من العائد، فمتحطش فيها فلوس ممكن تحتاجها.',
        },
        {
          h: 'إمتى تناسبك؟',
          p: 'لو عندك مبلغ مش محتاجه قريب وعايز عائد مضمون ومخاطرة شبه معدومة. قارن بين البنوك (العائد، مدة الصرف: شهري ولا في الآخر، شروط الكسر) قبل ما تقرر. ومتربطش كل فلوسك في شهادة واحدة طويلة.',
        },
      ],
      points: [
        'الشهادات أمانها عالي وعائدها ثابت، لكن قارن الأسعار الحالية بنفسك.',
        'حاسب التضخم: عائد أقل من التضخم يعني قوة شرائية أقل.',
        'متحطش فلوس الطوارئ في شهادة طويلة الأجل.',
      ],
    },
    en: {
      title: 'Bank certificates in Egypt',
      intro: 'Savings certificates are among the most popular saving tools in Egypt. Let us talk honestly, pros and cons, without being an ad for any bank.',
      sections: [
        {
          h: 'What is a savings certificate?',
          p: 'You lend the bank an amount for a fixed term (1 year, 3 years...) and the bank pays you a fixed return. Returns change with Central Bank decisions, so always ask for the current rate before locking your money. We deliberately quote no rate here because it changes.',
        },
        {
          h: 'What nobody tells you',
          p: 'A fixed return is not always a win: if inflation is higher than the return, the real value of your money shrinks even while the number grows. Also, breaking a certificate early cuts the return, so never lock money you might need.',
        },
        {
          h: 'When does it suit you?',
          p: 'When you have an amount you will not need soon and want a guaranteed return with near-zero risk. Compare banks (return, payout schedule, early-break terms) before deciding, and do not lock all your money in one long certificate.',
        },
      ],
      points: [
        'Certificates are safe with fixed returns, but compare current rates yourself.',
        'Count inflation: a return below inflation means less buying power.',
        'Do not lock your emergency money in a long-term certificate.',
      ],
    },
  },
  {
    slug: 'gold-as-saving',
    ar: {
      title: 'الدهب كمخزن للقيمة',
      intro: 'المصريين بيحبوا الدهب من زمان، ومش من فراغ. لكن الدهب أداة ليها مميزات وعيوب، والشراء الغلط ممكن يضيع جزء من فلوسك.',
      sections: [
        {
          h: 'ليه الناس بتدخر في الدهب؟',
          p: 'الدهب تاريخيا بيحافظ على قيمته وقت زيادة الأسعار وتقليل قيمة العملة. سهل البيع في أي وقت، ومفيش حد في مصر مش عارف يقيّمه. عشان كده كتير بيعتبروه "بنك البيت".',
        },
        {
          h: 'احذر المصنعية',
          p: 'لما بتشتري مشغولات ذهبية بتدفع "مصنعية" فوق سعر الجرام، ولما تبيع بترجعلك بالوزن بس. يعني المصنعية خسارة مؤكدة عند البيع. لو هدفك الادخار مش الزينة: السبائك والجنيهات الذهبية مصنعيتها أقل بكتير.',
        },
        {
          h: 'الدهب مش استثمار بينمو',
          p: 'الدهب بيحافظ على القيمة أكتر ما بيزودها. مفيش عائد دوري منه زي الإيجار أو الفايدة. عشان كده الخبراء بيقولوا الدهب جزء من المحفظة (مثلا 5-15%) مش كلها.',
        },
      ],
      points: [
        'الدهب مخزن قيمة وسيولة سريعة، مش مصدر دخل.',
        'للادخار: سبائك أو جنيهات ذهبية بمصنعية قليلة، مش مشغولات.',
        'خليه جزء من خطتك مش كلها.',
      ],
    },
    en: {
      title: 'Gold as a store of value',
      intro: 'Egyptians have loved gold for ages, and not for nothing. But gold is a tool with pros and cons, and buying it wrong can burn part of your money.',
      sections: [
        {
          h: 'Why do people save in gold?',
          p: 'Historically, gold holds its value during inflation and currency devaluation. It is easy to sell any time, and everyone in Egypt knows how to price it. That is why many call it the home bank.',
        },
        {
          h: 'Watch out for workmanship fees',
          p: 'When you buy gold jewelry you pay a workmanship fee above the gram price, and when you sell you get paid by weight only. So the fee is a guaranteed loss on resale. If your goal is saving, not decoration: bars and gold coins carry much lower fees.',
        },
        {
          h: 'Gold is not a growing investment',
          p: 'Gold preserves value more than it grows it. There is no periodic return like rent or interest. That is why experts suggest gold is a slice of the portfolio (say 5-15%), not the whole thing.',
        },
      ],
      points: [
        'Gold stores value and sells fast; it is not an income source.',
        'For saving: bars or gold coins with low fees, not jewelry.',
        'Keep it a part of your plan, not all of it.',
      ],
    },
  },
  {
    slug: 'smart-saving-goals',
    ar: {
      title: 'أهداف ادخار ذكية',
      intro: '"عايز أدخر" مش هدف. "عايز أدخر 30,000 جنيه في 10 شهور عشان دفعة عربية" ده هدف. الفرق بينهم هو الفرق بين النية والتحقق.',
      sections: [
        {
          h: 'الهدف الذكي ليه 3 حاجات',
          p: 'رقم محدد، ومدة محددة، وسبب واضح. الرقم من غير سبب سهل يتصرف، والسبب من غير رقم مستحيل يتقاس. اكتب هدفك بالتفصيل دي وعلّقه قدامك.',
        },
        {
          h: 'قسّم الهدف لشهور',
          p: 'خد المبلغ واقسمه على عدد الشهور: دي قيمة القسط الشهري اللي لازم تدخّره. جرب حاسبة هدف الادخار في صفحة الحاسبات، وشوف لو الرقم كبير زوّد المدة أو صغّر الهدف - مش تشيل الهدف خالص.',
        },
        {
          h: 'هدف واحد ولا كذا هدف؟',
          p: 'للمبتدئ: هدف واحد أساسي + صندوق الطوارئ. الأهداف الكتير في نفس الوقت بتشتت وبتحسسك إنك واقف مكانك. خلص واحد وانت مبسوط، وبعدين ابدأ اللي بعده.',
        },
      ],
      points: [
        'هدف بلا رقم ومدة مجرد أمنية.',
        'حوّل الهدف لقسط شهري واضح وقارنه بميزانيتك.',
        'هدف واحد في وقت واحد أسرع من خمسة أهداف واقفة.',
      ],
    },
    en: {
      title: 'Smart saving goals',
      intro: '"I want to save" is not a goal. "I want to save 30,000 EGP in 10 months for a car down payment" is a goal. The difference between them is the difference between wishing and achieving.',
      sections: [
        {
          h: 'A smart goal has 3 things',
          p: 'A specific amount, a specific deadline, and a clear reason. An amount without a reason gets spent easily; a reason without an amount cannot be measured. Write your goal with these details and keep it in front of you.',
        },
        {
          h: 'Split the goal into months',
          p: 'Take the amount and divide by the months: that is the monthly installment you must save. Try the savings goal calculator on the calculators page, and if the number is too big, extend the timeline or shrink the goal - do not drop the goal entirely.',
        },
        {
          h: 'One goal or several?',
          p: 'For a beginner: one main goal plus the emergency fund. Many goals at once scatter you and make you feel stuck. Finish one while you are motivated, then start the next.',
        },
      ],
      points: [
        'A goal without an amount and a deadline is just a wish.',
        'Turn the goal into a clear monthly installment and compare it to your budget.',
        'One goal at a time beats five frozen goals.',
      ],
    },
  },
]
