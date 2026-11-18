import type { Lesson } from './types'

export const investingLessons: Lesson[] = [
  {
    slug: 'what-is-investing',
    ar: {
      title: 'يعني إيه استثمار؟',
      intro: 'الاستثمار إنك تشتري حاجة النهاردة بتديلك فلوس أو تكبر قيمتها بكرة. بس كل استثمار ليه سعر: المخاطرة.',
      sections: [
        {
          h: 'الفرق بين الادخار والاستثمار',
          p: 'الادخار فلوس محفوظة وآمنة لكن نموها بطيء. الاستثمار فلوس شغالة: ممكن تكبر أكتر بكتير، وممكن تقل. عشان كده الترتيب الصح: صندوق طوارئ الأول، وبعدين استثمار بالفلوس اللي مش محتاجها قريب.',
        },
        {
          h: 'قانون المخاطرة والعائد',
          p: 'مفيش استثمار عائده عالي ومضمون. كل ما العائد المتوقع يزيد، المخاطرة تزيد معاه. حد وعدك بعائد كبير "مضمون 100%"؟ ده مش استثمار، ده نصب. احفظ القاعدة دي كويس لأنها هتحميك كتير.',
        },
        {
          h: 'أنواع الاستثمار الشائعة في مصر',
          p: 'البورصة (أسهم وصناديق)، العقار، الذهب، المشروعات، وأدوات الدخل الثابت زي الشهادات والصكوك. كل نوع ليه مميزات وعيوب وسيولة مختلفة. الدرس الجاي هيفصل أكتر في البورصة والصناديق.',
        },
      ],
      points: [
        'استثمر بس بالفلوس اللي مش محتاجها خلال سنين قريبة.',
        'عائد عالي مضمون = علامة نصب، مش فرصة.',
        'افهم الأداة كويس قبل ما تحط فيها جنيه واحد.',
      ],
    },
    en: {
      title: 'What is investing?',
      intro: 'Investing is buying something today that pays you or grows in value tomorrow. But every investment has a price: risk.',
      sections: [
        {
          h: 'Saving vs investing',
          p: 'Saving is money kept safe, but it grows slowly. Investing is money at work: it can grow much more, and it can shrink. That is why the right order is: emergency fund first, then invest only money you will not need soon.',
        },
        {
          h: 'The risk-return law',
          p: 'There is no high-return guaranteed investment. The higher the expected return, the higher the risk. Someone promised you a big "100% guaranteed" return? That is not investing, that is a scam. Memorize this rule; it will protect you a lot.',
        },
        {
          h: 'Common investment types in Egypt',
          p: 'The stock market (stocks and funds), real estate, gold, businesses, and fixed-income tools like certificates and sukuk. Each type has different pros, cons, and liquidity. The coming lessons go deeper into stocks and funds.',
        },
      ],
      points: [
        'Invest only money you will not need within the next few years.',
        'High guaranteed return = a scam flag, not an opportunity.',
        'Understand the tool well before putting in a single pound.',
      ],
    },
  },
  {
    slug: 'compound-interest',
    ar: {
      title: 'الفايدة المركبة: أعظم قوة',
      intro: 'أينشتاين وصف الفايدة المركبة بأنها أقوى قوة في الكون (حتى لو المقولة مش متأكد منها، الفكرة صح). الوقت هو سلاحك السري.',
      sections: [
        {
          h: 'يعني إيه فايدة مركبة؟',
          p: 'إن الربح اللي بتكسبه بيفضل جوه الاستثمار وبييجي عليه ربح كمان. مثال بأرقام تقريبية: 10,000 جنيه بعائد سنوي 15% تصبح حوالي 11,500 بعد سنة. لو سيبتهم: السنة التانية العائد بيتحسب على 11,500 مش على 10,000، وهكذا بشكل متسارع.',
        },
        {
          h: 'البداية المبكرة أهم من المبلغ',
          p: 'واحد بدأ يدخر 1,000 جنيه شهريا من سن 20، هيوصل لفلوس أكتر من واحد بدأ بـ 2,000 جنيه من سن 35 (بنفس العائد). الفرق؟ 15 سنة تراكم إضافية. جرب بنفسك في حاسبة الفايدة المركبة عندنا وشوف الفرق بعينك.',
        },
        {
          h: 'الفايدة المركبة سلاح ذو حدين',
          p: 'نفس القوة اللي بتكبر مدخراتك هي اللي بتكبر ديونك. فايدة الكارت الائتماني مركبة برضه، بس ضدك. عشان كده: سدد الديون الغالية الأول، وبعدين خلى التراكم يشتغل لصالحك.',
        },
      ],
      points: [
        'الربح بيتراكم على الربح: كل ما تسيب الفلوس أكتر، النمو يتسارع.',
        'ابدأ بدري ولو بمبلغ صغير - الوقت أقوى من المبلغ.',
        'سدد الديون المركبة الأول عشان متشتغلش ضدك.',
      ],
    },
    en: {
      title: 'Compound interest: the greatest force',
      intro: 'Einstein allegedly called compound interest the strongest force in the universe (even if the quote is uncertain, the idea is true). Time is your secret weapon.',
      sections: [
        {
          h: 'What is compound interest?',
          p: 'The profit you earn stays inside the investment and earns profit too. An example with rough numbers: 10,000 EGP at a 15% yearly return becomes about 11,500 after one year. Leave it, and next year the return is computed on 11,500, not 10,000, accelerating over time.',
        },
        {
          h: 'Starting early beats starting big',
          p: 'Someone saving 1,000 EGP monthly from age 20 ends up with more than someone saving 2,000 monthly from age 35 (at the same return). The difference? 15 extra years of compounding. Try it yourself in our compound interest calculator and see the gap with your own eyes.',
        },
        {
          h: 'Compounding cuts both ways',
          p: 'The same force that grows your savings grows your debts. Credit card interest compounds too, against you. So: pay off expensive debt first, then let compounding work for you.',
        },
      ],
      points: [
        'Profit compounds on profit: the longer money stays, the faster growth gets.',
        'Start early even with a small amount - time beats size.',
        'Kill compounding debts first so they stop working against you.',
      ],
    },
  },
  {
    slug: 'egx-and-funds',
    ar: {
      title: 'البورصة المصرية وصناديق الاستثمار',
      intro: 'البورصة مش قمار ولا لعبة أغنياء، دي سوق بتشتري فيه جزء من شركات حقيقية. بس دخولها من غير فهم طريقة مضمونة للخسارة.',
      sections: [
        {
          h: 'يعني إيه سهم؟',
          p: 'السهم حصة ملكية صغيرة في شركة. الشركة تكبر وتربح، حصتك تكبر معاها. الشركة تخسر، حصتك تنزل. عشان كده شراء سهم لازم يكون مبني على فهم الشركة، مش على "توصية" من جروب.',
        },
        {
          h: 'الأسهل للمبتدئ: الصناديق',
          p: 'صندوق الاستثمار بيجمع فلوس ناس كتير ويديرها محترفين في أدوات متنوعة. في مصر فيه صناديق نقدية (مخاطرة قليلة وسيولة عالية) وصناديق أسهم (مخاطرة أعلى وعائد متوقع أعلى على المدى الطويل). تقدر تشتري وثائق الصناديق من بنوك وشركات إدارة مرخصة.',
        },
        {
          h: 'قواعد لو هتدخل البورصة',
          p: 'ابدأ بمبلغ صغير خسارة جزء منه مش هتدمرك. فكّر بأفق سنين مش أسابيع. متشتريش بفلوس مستلفة. ومتصدقش "التوصيات المضمونة" - لو حد عنده توصية مضمونة كان استفاد بيها لوحده. اقرأ عن الشركة والقطاع قبل أي قرار.',
        },
      ],
      points: [
        'السهم حصة في شركة حقيقية: فهّم الشركة قبل ما تشتريها.',
        'الصناديق المتنوعة أنسب بداية لمعظم الناس من اختيار أسهم فردية.',
        'أفق طويل، مبلغ صغير، ومن غير استلاف: قواعد غير قابلة للتفاوض.',
      ],
    },
    en: {
      title: 'The Egyptian Exchange and investment funds',
      intro: 'The stock market is not gambling and not a rich-people game; it is a market where you buy pieces of real companies. But entering it without understanding is a guaranteed way to lose.',
      sections: [
        {
          h: 'What is a stock?',
          p: 'A stock is a small ownership share in a company. The company grows and profits, your share grows with it. The company loses, your share drops. That is why buying a stock must be based on understanding the company, not a "tip" from a group chat.',
        },
        {
          h: 'Easiest for beginners: funds',
          p: 'An investment fund pools money from many people and professionals invest it across diversified tools. In Egypt there are money-market funds (lower risk, high liquidity) and equity funds (higher risk, higher expected long-term return). You can buy fund units from licensed banks and asset managers.',
        },
        {
          h: 'Rules if you enter the market',
          p: 'Start with an amount small enough that losing part of it would not break you. Think in years, not weeks. Never buy with borrowed money. And never trust "guaranteed tips" - if someone had a guaranteed tip, they would use it alone. Read about the company and the sector before any decision.',
        },
      ],
      points: [
        'A stock is a share in a real company: understand the company before buying.',
        'Diversified funds suit most people better than picking individual stocks.',
        'Long horizon, small amount, no borrowing: non-negotiable rules.',
      ],
    },
  },
  {
    slug: 'diversification',
    ar: {
      title: 'التنويع: متتحطش البيض كله في سلة واحدة',
      intro: 'أقدم حكمة استثمارية وأكتر واحدة بيتم تجاهلها. التنويع مش بيخلي الفرص أكتر، هو بيخلي الخسارة الكاملة أصعب.',
      sections: [
        {
          h: 'إزاي التنويع بيحميك؟',
          p: 'لو كل فلوسك في أصل واحد وحدثت له مشكلة (شركة أفلست، سوق نزل، عملة اتخفضت)، انت خسرت كل حاجة. لو فلوسك موزعة، مشكلة واحدة بتاخد جزء بس. ده الفرق بين كبوة وبين كارثة.',
        },
        {
          h: 'تنويع عملي لموازنة مصرية',
          p: 'مثال توضيحي مش توصية: جزء في أدوات ثابتة (شهادات أو صندوق نقدي)، جزء في دهب، جزء في استثمار نامي (صندوق أسهم أو مشروعك)، وجزء سائل للطوارئ. النسب تتغير حسب سنك ودخلك وقدرتك على المخاطرة.',
        },
        {
          h: 'حدود التنويع',
          p: 'التنويع بيقلل المخاطرة مش بيلغيها، وأحيانا بيقلل المكسب كمان (لأن أحسن أصل مش واخد كل الفلوس). وهدفه الحقيقي: إنك تفضل في اللعبة وقت كافي عشان تكسب على المدى الطويل.',
        },
      ],
      points: [
        'التنويع بيحميك من الكارثة الكاملة، مش من الخسارة الصغيرة.',
        'وزع على أصول مختلفة الطبيعة: ثابت، دهب، نامي، سائل.',
        'الهدف إنك تفضل في اللعبة، مش إنك تكسب أسرع مكسب.',
      ],
    },
    en: {
      title: 'Diversification: never put all eggs in one basket',
      intro: 'The oldest investment wisdom and the most ignored one. Diversification does not multiply opportunities; it makes total loss much harder.',
      sections: [
        {
          h: 'How does diversification protect you?',
          p: 'If all your money is in one asset and trouble hits it (a company fails, a market drops, a currency is devalued), you lose everything. If your money is spread out, one problem takes only a part. That is the difference between a stumble and a disaster.',
        },
        {
          h: 'A practical Egyptian mix',
          p: 'An illustrative example, not a recommendation: a part in fixed-income tools (certificates or a money-market fund), a part in gold, a part in growth (an equity fund or your own business), and a liquid part for emergencies. The ratios change with your age, income, and risk tolerance.',
        },
        {
          h: 'The limits of diversification',
          p: 'Diversification lowers risk, it does not delete it, and sometimes it lowers gains too (since your best asset does not hold all the money). Its real goal: keeping you in the game long enough to win over the long run.',
        },
      ],
      points: [
        'Diversification protects you from total disaster, not small losses.',
        'Spread across different asset natures: fixed, gold, growth, liquid.',
        'The goal is staying in the game, not scoring the fastest win.',
      ],
    },
  },
]
