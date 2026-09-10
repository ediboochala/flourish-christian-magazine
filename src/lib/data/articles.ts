import { Article } from "@/lib/types";

/**
 * EDITORIAL CONTENT
 * The four September 2026 issue pieces at the top of this list are real
 * contributor submissions, ordered by editorial priority (`priority: 1`
 * leads the issue) and flagged `isNew` so they carry a "New" badge and
 * sort ahead of everything else. Everything below them is still
 * illustrative placeholder content demonstrating layout, tone, and
 * structure. Replace the placeholders with real Flourish editorial
 * content before launch. No claims, statistics, or quotes in the
 * placeholder entries should be treated as official M.F.M Women
 * Foundation Florida or Flourish statements.
 *
 * Adding a new issue piece: give it `isNew: true`, a `priority` number,
 * and a `publishedAt` in the issue month. It will surface at the top of
 * the homepage "Latest Stories" and the magazine archive automatically.
 */
export const articles: Article[] = [
  {
    slug: "from-brokenness-to-wholeness-overcoming-lifes-toughest-battles",
    title: "From Brokenness to Wholeness: Overcoming Life's Toughest Battles",
    subtitle:
      "God desires wholeness for every woman: spiritually, emotionally, mentally, and physically.",
    excerpt:
      "Life's battles touch the body, mind, relationships, finances, and purpose. A pastoral look at eight areas where women fight for healing, and the path back to wholeness in Christ.",
    categorySlug: "health-wellness",
    authorSlug: "tayo-oluwayemiwo",
    publishedAt: "2026-09-03",
    readingTimeMinutes: 8,
    heroImage: {
      src: "/images/articles/from-brokenness-to-wholeness-overcoming-lifes-toughest-battles.jpg",
      alt: "A broken patterned saucer pieced back together around a full cup of coffee",
      tone: "burgundy",
      motif: "vine",
      credit: "AI-generated image",
    },
    isNew: true,
    priority: 1,
    featured: true,
    editorsPick: true,
    tags: ["new", "healing", "wholeness", "faith"],
    body: [
      "Life can bring battles that affect the body, mind, relationships, finances, and purpose. As women of faith, we must remember that God desires wholeness for us spiritually, emotionally, mentally, and physically.",
      "Yet Jesus Christ came to destroy the works of the devil and bring redemption.",
      "> For this purpose, the Son of God was manifested, that he might destroy the works of the devil. (1 John 3:8, KJV)",
      "Through Christ, we have salvation, healing, wisdom, strength, and hope.",
      "## 1. Spiritual Sickness",
      "One of the deepest forms of sickness is spiritual separation from God. A person may appear successful outwardly while inwardly battling sin, bitterness, unforgiveness, guilt, rebellion, or spiritual emptiness.",
      "In Acts 8, Simon's encounter with the apostles showed that serious issues remained within his heart. The greatest deliverance anyone can experience is freedom from sin. When the heart is surrendered to Christ, transformation begins.",
      "## 2. Mental and Emotional Sickness",
      "Mental and emotional struggles affect many women today. Anxiety, depression, trauma, eating disorders, chronic stress, and intrusive thoughts may range from mild to severe.",
      "Medical care, counselling, therapy, appropriate medication, exercise, rest, and lifestyle changes can support recovery. Prayer and faith also provide comfort and hope.",
      "## 3. Psychosomatic Illness",
      "The mind and body are closely connected. Counselling, good sleep, supportive relationships, prayer, and meditation on Scripture can help restore balance.",
      "> Casting all your care upon him; for he careth for you. (1 Peter 5:7, KJV)",
      "## 4. Physiological Sickness",
      "Some illnesses result from dysfunction in the body, affecting organs, hormones, nerves, bones, or the immune system. They may require medical tests, medication, specialist care, surgery, or lifestyle changes.",
      "Faith and medicine need not oppose each other. We can pray fervently while seeking appropriate medical care.",
      "## 5. Inherited and Generational Patterns",
      "Some illnesses have genetic or hereditary components and may appear repeatedly within families. Destructive behavioral, emotional, relational, or spiritual patterns can also pass from one generation to another.",
      "Our family history may inform us, but it does not have to define our future.",
      "## 6. A Wounded Destiny",
      "Sometimes the battle is not physical sickness but a life that seems unable to move forward. A hindered destiny may show through rejection, backwardness, missed opportunities, opposition, repeated failure, shame, confusion, or lack of direction.",
      "God created every woman with purpose. Prayer, wise counsel, discipline, discernment, and obedience to God can help move us from stagnation into purposeful living.",
      "## 7. Marital and Relationship Affliction",
      "Relationships can become areas of deep pain. Some women experience broken relationships, marital conflict, betrayal, separation, divorce, abuse, or the death of a spouse.",
      "Healing may require prayer, counselling, forgiveness, healthy boundaries, community support, and professional or legal intervention. No woman should remain in an unsafe situation believing abuse is a spiritual obligation.",
      "## 8. Financial Sickness",
      "Financial struggles may appear as chronic lack, debt, poor decisions, unemployment, lack of opportunities, dependency, repeated business failure, or inability to save.",
      "Prayer is important, but financial restoration also requires wisdom. Budgeting, saving, learning new skills, pursuing opportunities, avoiding unnecessary debt, and becoming financially disciplined can contribute to stability.",
      "## The Path to Wholeness",
      "Whatever area of life is under attack, our foundation must remain Jesus Christ. Prayer and meditation on God's Word remain essential. Spiritual devotion should produce wisdom, discipline, compassion, responsibility, and appropriate action.",
      "When medical attention is necessary, seek it. When counselling is necessary, receive it. When boundaries are necessary, establish them. When financial discipline is necessary, practice it. And when prayer is necessary, which is always, pray without ceasing.",
      "## Final Encouragement",
      "Living victoriously does not mean we will never face challenges. It means we do not face them without hope. Jesus Christ remains our Saviour, strength, refuge, and source of eternal life.",
      "Whatever plague has tried to define your life, remember: your struggle does not have to become your identity. God is still able to restore, heal, redirect, and give beauty for ashes.",
      "> He sent his word, and healed them, and delivered them from their destructions. (Psalm 107:20, KJV)",
      "## Prayers for Your Wholeness",
      "Every plague of sin, sickness, affliction, and destruction assigned against my life and destiny, be consumed by the fire of the Holy Ghost, in the name of Jesus.",
      "Every inherited, ancestral, foundational, mental, marital, financial, and destiny affliction troubling my life, lose your hold and die, in the name of Jesus.",
      "Blood of Jesus, penetrate every area of my life and flush out every root of sickness, bondage, failure, rejection, backwardness, and satanic oppression, in the name of Jesus.",
    ],
  },
  {
    slug: "faith-that-presses-through-lessons-from-the-woman-with-the-issue-of-blood",
    title: "Faith That Presses Through: Lessons from the Woman with the Issue of Blood",
    subtitle:
      "What the woman with the issue of blood teaches us about relentless, breakthrough faith.",
    excerpt:
      "For twelve years she was sick, broke, and isolated. Then she heard Jesus was passing by. A study in the faith that refuses to stay put.",
    categorySlug: "faith-inspiration",
    authorSlug: "suzan-olunuga",
    publishedAt: "2026-09-02",
    readingTimeMinutes: 6,
    heroImage: {
      src: "/images/articles/faith-that-presses-through-lessons-from-the-woman-with-the-issue-of-blood.jpg",
      alt: "A broad, decisive stroke of vivid red paint drawn across a white wall with a loaded brush",
      tone: "burgundy",
      motif: "wheat",
      credit: "Photo via Unsplash",
    },
    isNew: true,
    priority: 2,
    trending: true,
    tags: ["new", "faith", "perseverance", "healing"],
    body: [
      "Life has a way of throwing up walls that feel completely impassable. When you are facing prolonged hardship, chronic burnout, or delays that stretch on for years, the urge to throw in the towel is overwhelming.",
      "But transformation usually requires a very specific kind of faith, a faith that refuses to stay put.",
      "If you need a masterclass in relentless resilience, look no further than the biblical account of the woman with the issue of blood. For twelve long, exhausting years, this unnamed woman lived with constant hemorrhaging. Her crisis wasn't just physical. It touched every single area of her life.",
      "The Gospel of Mark points out that she spent every penny she had on doctors, only to grow worse. Under the social laws of her time, her continuous condition labeled her \"unclean,\" cutting her off from community, family, and public life. She was isolated, financially broke, and running on absolutely empty.",
      "By every logical standard, she had every reason to give up. Yet the moment she heard Jesus was walking through her town, something inside her shifted. Her faith refused to stay quiet.",
      "> Breakthrough faith doesn't wait for a clear path; it carves one through the crowd.",
      "## The Three Barriers She Had to Overcome",
      "To get her miracle, she had to press through three massive obstacles.",
      "The trauma of past failures. She had to process twelve years of disappointment and medical dead ends, choosing to risk opening her heart to hope one more time.",
      "The fear of public shame. Stepping into a packed crowd meant risking public anger, harsh judgment, and severe consequences for breaking social isolation rules.",
      "Severe physical exhaustion. Weakened by chronic illness, she had to physically push her way through a dense, suffocating sea of people.",
      "She didn't demand center stage. She didn't wait for an official invitation. She simply anchored her heart on one thought: \"If I can just touch His cloak, I will be healed.\"",
      "Reaching through the dust and crowd, she touched the hem of His garment. Instantly, the bleeding stopped.",
      "## From Invisible to Seen",
      "When Jesus stopped the crowd and asked who touched Him, she stepped forward trembling, expecting anger. Instead, Jesus redefined her entire story. He didn't focus on the rules she broke; He honored her courage.",
      "> Daughter, your faith has made you whole. Go in peace.",
      "In that single moment, she wasn't just physically healed. She was restored socially, emotionally, and spiritually.",
      "## Your Turn to Reach Out",
      "This story reminds us that breakthrough faith is rarely neat, quiet, or convenient. It doesn't wait for circumstances to align perfectly. When you feel like you are at the absolute end of your rope, that is your invitation to reach out one more time. Your breakthrough lives on the other side of your willingness to keep pressing in.",
      "## Prayer Points for Your Faith",
      "For strength beyond circumstance: Lord, build my faith so that it is grounded in Your promises rather than my feelings or current struggles. Give me steady endurance when the journey feels long.",
      "For courage to hope again: Father, heal the places where past disappointments have made me hesitant to trust You. I receive the grace to step out in expectation, even when I can't see the full picture.",
    ],
  },
  {
    slug: "gratitude-in-the-dark",
    title: "Gratitude in the Dark",
    subtitle: "How to thank God in the seasons when nothing feels praiseworthy.",
    excerpt:
      "Gratitude in the dark is not denial. It is defiant faith. A look at Habakkuk's declaration, and why praise is a weapon against despair.",
    categorySlug: "faith-inspiration",
    authorSlug: "suzan-olunuga",
    publishedAt: "2026-09-01",
    readingTimeMinutes: 6,
    heroImage: {
      src: "/images/articles/gratitude-in-the-dark.jpg",
      alt: "Two open hands lifted out of deep shadow toward a single warm glow of light",
      tone: "charcoal",
      motif: "olive",
      credit: "Photo via Unsplash",
    },
    isNew: true,
    priority: 3,
    tags: ["new", "gratitude", "praise", "worship"],
    body: [
      "Gratitude in the dark describes the believer's decision to thank God in seasons where nothing feels praiseworthy. It is the act of praising God in the pit, when life is confusing, painful, or seemingly hopeless. The phrase functions as a metaphor, comparing the literal absence of light to the emotional and spiritual darkness of hardship, grief, or crisis. It illustrates the discipline of finding thankfulness and hope even when you cannot see a way forward.",
      "Habakkuk 3:18-19 stands as Scripture's clearest example of this truth. In a time of total agricultural failure, economic collapse, and national despair, Habakkuk declares, \"Yet I will rejoice in the Lord. The Lord God is my strength.\" His gratitude is not rooted in circumstances but in God's unchanging character. He chooses joy in God as Savior even while lacking every earthly security. This is gratitude in the dark: praise offered when life provides no visible reason to rejoice.",
      "Three salient truths define this kind of gratitude.",
      "## 1. Gratitude Is a Choice",
      "If gratitude depended on feelings, no one would thank God in seasons of pain. Feelings shift with circumstances, but God's character never changes. Gratitude becomes a deliberate act of faith: thanking God while carrying burdens no one sees, while hurting silently, or while facing situations that defy understanding. It is choosing God's truth over emotional instability. Gratitude in the dark says, \"My feelings may change, but my God does not.\"",
      "## 2. Praise Is a Weapon Against Despair",
      "Praise is not passive; it is spiritual warfare. It functions as both an offensive and defensive weapon in the believer's armory. As an offensive weapon, praise disrupts the kingdom of darkness. When a believer responds to unpleasant situations with worship instead of fear, sorrow, or complaint, it creates confusion in the enemy's camp. This is why songs like \"It Is Well with My Soul\" were birthed out of devastating seasons. Praise became a counterattack.",
      "As a defensive weapon, praise breaks the grip of anxiety and heaviness. Complaining feeds fear, but worship feeds faith. Acts 16 shows Paul and Silas praising at midnight in prison; their worship triggered divine intervention. Where God's presence dwells, darkness cannot remain.",
      "## 3. The Sacrifice of Praise Changes Us",
      "The sacrifice of praise means choosing to thank God when you are hurting, confused, or facing crisis. It is costly because it demands surrender of comfort, pride, and the natural desire to complain. When problems feel overwhelming, praise forces your eyes away from circumstances and back onto God's unchanging character. Psalm 42:11 reflects this shift: \"Hope in God, for I shall yet praise Him.\" Sacrificial praise realigns the heart with truth and strengthens the believer internally.",
      "## Cultivating a Lifestyle of Gratitude",
      "Reflect on how God saved your soul, the gift of salvation. Reflect on God's past and present provision and protection. Reject complaining as a habit. Develop a lifestyle of gratitude.",
      "Gratitude in the dark is not denial. It is defiant faith. It is choosing worship in the valley and trusting God until the dawn breaks.",
      "## Prayer Point",
      "My Father, my Father, please empower me to praise You in seasons and out of seasons, in the name of Jesus. Amen.",
    ],
  },
  {
    slug: "there-is-no-fear-in-love",
    title: "There Is No Fear in Love",
    subtitle:
      "Why genuine love shows up on ordinary days, not only when goodbye feels near.",
    excerpt:
      "It is easy to become gentle when we sense that time is running out. But love was never meant to be a performance prompted by fear. A call to steady, unhurried, everyday love.",
    categorySlug: "marriage-relationships",
    authorSlug: "winnie-darius",
    publishedAt: "2026-09-04",
    readingTimeMinutes: 5,
    heroImage: {
      src: "/images/articles/there-is-no-fear-in-love.jpg",
      alt: "The word LOVE spelled in pale wooden letters on a cream background, a small red heart standing in for the O",
      tone: "rose",
      motif: "fern",
      credit: "Photo via Unsplash",
    },
    isNew: true,
    priority: 4,
    editorsPick: true,
    tags: ["new", "love", "relationships", "presence"],
    body: [
      "It is often easy to become more attentive when we sense that time is running out.",
      "When someone is preparing to leave, when a relationship begins to fall apart, or when illness reminds us that life is fragile, we suddenly become more present. We speak more gently, listen more carefully and begin doing the thoughtful things we repeatedly postponed. Moments we once treated casually become precious because we now know they are numbered.",
      "But why must the fear of losing someone teach us how to value them?",
      "The Bible tells us that there is no fear in love. Genuine love should not be driven by panic, guilt or the fear of future regret. We should not wait until the clock is running out before becoming gentle with someone. We should not save our presence for the moment when goodbye feels near. Neither should we suddenly begin giving what should have been freely given all along.",
      "When kindness appears only because someone is leaving, it may look like love, but it can become a performance prompted by fear.",
      "True love does not need an audience or an emergency. It shows up during ordinary days, when there is no applause and nothing to gain. It calls to ask, \"How are you?\" It listens without being in a hurry. It notices when someone is tired, remembers what matters to them and offers kindness without waiting to be asked.",
      "Love makes people feel valued even when there is no reason to believe that they will be gone tomorrow. It does not reserve affection for farewell moments, hospital rooms, funerals or failing relationships. Its kindness is not activated only by the threat of loss.",
      "The way we treat people should not suddenly change because their time with us has become limited.",
      "Do what is right while there is still time, not because you are afraid of what their absence might feel like, but because they matter today. Speak your words of appreciation now. Offer your support now. Make the telephone call now. Forgive where you can, apologize where you should and create time for those you claim to love.",
      "> Every moment was precious before you discovered that it was numbered.",
      "We sometimes behave as though there will always be another opportunity: another weekend to visit, another evening to talk, another birthday to celebrate or another chance to say, \"I appreciate you,\" \"Please forgive me,\" or simply, \"I love you.\"",
      "Life, however, does not always announce the final opportunity.",
      "This does not mean that we should live anxiously, constantly fearing that something terrible may happen. Fear has torment, and love was never intended to keep us in emotional bondage. Instead, love teaches us to live intentionally. The uncertainty of tomorrow should inspire us to be faithful today, not fearful, but grateful.",
      "Perfect love casts out fear because it does not wait for a crisis before expressing itself. It gives without calculating what it will receive in return. It remains present when there is no immediate reward. It chooses patience when frustration would be easier and kindness when indifference would require less effort.",
      "## Let Your Love Be Steady",
      "Steady love does not disappear when life becomes busy. It does not become warm only when a person begins withdrawing. It does not neglect someone for years and then become generous when the relationship is almost over. Steady love remains dependable through ordinary routines, difficult seasons and quiet moments that may never be seen or celebrated by anyone else.",
      "## Let Your Kindness Become Ordinary",
      "Kindness should not be a rare event reserved for special occasions. It should become part of how we speak, respond and relate to others every day. A gentle answer, a patient conversation, a thoughtful gesture and a willingness to help may appear small, but these are the daily expressions from which meaningful relationships are built.",
      "## Let Your Presence Be Freely Given",
      "No one should have to become temporary before earning our attention. People should not have to walk away before we recognize their value. They should not have to become sick before we visit them, grow silent before we listen to them or become exhausted before we offer help.",
      "The truest way to love someone is not to become better to them when you realize that you are running out of time. It is to have been good to them while you still believed you had all the time in the world.",
      "Love them now, not because goodbye feels near. Honor them now, not merely because others are watching. Be present now, not because time is running out, but because sincere love is steadfast, intentional and free from fear.",
      "> There is no fear in love; but perfect love casteth out fear: because fear hath torment. He that feareth is not made perfect in love. (1 John 4:18, KJV)",
    ],
  },
  {
    slug: "seasons-of-waiting-finding-god-in-the-in-between",
    title: "Seasons of Waiting: Finding God in the In-Between",
    subtitle: "What Scripture teaches us about the sacred, often silent, space between promise and fulfillment.",
    excerpt:
      "Waiting is rarely comfortable, but it is rarely wasted. A look at how women of faith can steward the in-between seasons of life.",
    categorySlug: "faith-inspiration",
    authorSlug: "adaeze-okafor",
    publishedAt: "2026-08-12",
    readingTimeMinutes: 7,
    heroImage: {
      src: "/images/articles/seasons-of-waiting-finding-god-in-the-in-between.jpg",
      alt: "A row of people leaning against a wall at a city bus stop, each waiting alone on their phone",
      tone: "charcoal",
      motif: "lily",
      credit: "Photo via Unsplash",
    },
    editorsPick: true,
    tags: ["faith", "patience", "trust"],
    body: [
      "There is a particular kind of ache that comes with waiting. Not the dramatic ache of crisis, but the quiet, persistent ache of unanswered timing. If you are in a season of waiting, you are in good company. Scripture is full of women and men who waited: Sarah, Hannah, Ruth, the disciples in the upper room.",
      "## The Discipline of Unseen Faithfulness",
      "Waiting well is not passive. It is an active discipline of continuing to obey, continuing to worship, and continuing to trust, even when the outcome is not yet visible. This is where character is formed.",
      "> Waiting is not the absence of God's work. It is often the very place where His deepest work happens in us.",
      "Consider Hannah in 1 Samuel 1. Her waiting was marked by grief, prayer, and persistence, and it was in the temple, in her lowest moment, that she poured out her heart before the Lord. Her waiting was not wasted; it shaped the intensity and clarity of her devotion.",
      "## Practical Steps for the Waiting Season",
      "Stay rooted in community. Isolation makes waiting heavier than it needs to be. Keep serving where you are. Purpose does not pause simply because a promise has not yet arrived. Journal what you are learning. Waiting seasons often produce insight that only becomes visible in hindsight.",
      "Wherever you are today, be encouraged: the in-between is not empty space. It is sacred ground.",
    ],
  },
  {
    slug: "the-quiet-strength-of-a-woman-who-knows-her-purpose",
    title: "The Quiet Strength of a Woman Who Knows Her Purpose",
    subtitle: "Purpose is not always loud. Sometimes it is the steady confidence that shapes every decision.",
    excerpt:
      "A reflection on how clarity of purpose changes the way women lead, love, and make decisions, even in the ordinary.",
    categorySlug: "womens-stories",
    authorSlug: "chiamaka-nwosu",
    publishedAt: "2026-08-14",
    readingTimeMinutes: 6,
    heroImage: {
      src: "/images/articles/the-quiet-strength-of-a-woman-who-knows-her-purpose.jpg",
      alt: "A carefully balanced stack of river stones holding steady against a green, wooded background",
      tone: "gold",
      motif: "vine",
      credit: "Photo via Unsplash",
    },
    featured: false,
    trending: true,
    tags: ["purpose", "identity"],
    body: [
      "Purpose is often portrayed as a grand, singular calling: a moment of clarity that arrives fully formed. For most women, it is quieter than that. It shows up in the decision to keep showing up, in the discipline of stewarding what is already in your hand.",
      "## Purpose Is Discovered in Faithfulness",
      "Before David faced Goliath, he faced a lion and a bear in obscurity, tending sheep no one was watching. His purpose was being formed long before it was publicly confirmed.",
      "When you know your purpose, you stop measuring your life against everyone else's timeline. You are freed to build, one faithful decision at a time.",
    ],
  },
  {
    slug: "raising-children-who-know-the-lord",
    title: "Raising Children Who Know the Lord, Not Just About Him",
    subtitle: "The difference between religious information and spiritual formation in the home.",
    excerpt:
      "Practical, grace-filled reflections for mothers who want faith to be caught, not only taught, in their homes.",
    categorySlug: "the-homefront",
    authorSlug: "grace-adeyemi",
    publishedAt: "2026-08-10",
    readingTimeMinutes: 8,
    heroImage: {
      src: "/images/articles/raising-children-who-know-the-lord.jpg",
      alt: "A young child sitting on a bed, absorbed in a well-worn Holy Bible held open in both hands",
      tone: "gold",
      motif: "fern",
      credit: "Photo via Unsplash",
    },
    featured: false,
    editorsPick: true,
    tags: ["motherhood", "family", "discipleship"],
    body: [
      "Every mother wants her children to know God, not merely know about Him. That distinction matters more than it first appears. Knowledge can be recited. Relationship must be lived.",
      "## Small, Repeated Moments Matter More Than Big Speeches",
      "Children absorb faith less from formal lessons and more from what they observe: how you pray when you're anxious, how you speak about others, how you respond when things go wrong.",
      "Faith formation is rarely a single conversation. It is a thousand small, ordinary moments, at the dinner table, in the car, before bed, where the reality of God becomes evident, not performed.",
    ],
  },
  {
    slug: "rest-is-not-a-reward-a-theology-of-sabbath-for-busy-women",
    title: "Rest Is Not a Reward: A Theology of Sabbath for Busy Women",
    subtitle: "Why rest is a command, not a luxury reserved for when the to-do list is finally empty.",
    excerpt:
      "For women carrying the weight of home, work, and ministry, rest can feel indulgent. Scripture says otherwise.",
    categorySlug: "health-wellness",
    authorSlug: "temitope-bello",
    publishedAt: "2026-08-08",
    readingTimeMinutes: 6,
    heroImage: {
      src: "/images/articles/rest-is-not-a-reward-a-theology-of-sabbath-for-busy-women.jpg",
      alt: "A red DO NOT DISTURB tag hanging from the brass lever handle of a dark wooden door",
      tone: "burgundy",
      motif: "lily",
      credit: "Photo via Unsplash",
    },
    featured: false,
    tags: ["wellness", "rest", "sabbath"],
    body: [
      "Many women wear exhaustion as evidence of devotion: to family, to ministry, to work. But the God who created us also modeled rest, and commanded it, long before burnout was a modern vocabulary word.",
      "## Sabbath Is a Statement of Trust",
      "To rest is to declare, in practice, that the world will not fall apart without your constant management. It is an act of trust in God's sufficiency, not a reward for productivity.",
      "This week, consider one small act of Sabbath: a screen-free morning, an unhurried hour, a genuine pause. Rest is not the opposite of faithfulness. It may be one of its clearest expressions.",
    ],
  },
  {
    slug: "the-art-of-gracious-hospitality-at-home",
    title: "The Art of Gracious Hospitality at Home",
    subtitle: "Hospitality that reflects Christ isn't about perfection. It's about presence.",
    excerpt:
      "Simple, elegant ways to open your home and your table without the pressure of Pinterest-perfect hosting.",
    categorySlug: "the-homefront",
    authorSlug: "grace-adeyemi",
    publishedAt: "2026-08-05",
    readingTimeMinutes: 5,
    heroImage: {
      src: "/images/articles/the-art-of-gracious-hospitality-at-home.jpg",
      alt: "An elegant place setting: white plates on a wooden charger, gold cutlery, a linen napkin, and stoneware cups",
      tone: "gold",
      motif: "olive",
      credit: "Photo via Unsplash",
    },
    tags: ["hospitality", "home"],
    body: [
      "Biblical hospitality was never about matching table settings. It was about welcome, making room for someone to feel seen, fed, and safe.",
      "## Practicing Presence Over Perfection",
      "The tidiest home means little if the host is too anxious to be present. Aim for warmth over flawlessness; a full heart over a full spread.",
    ],
  },
  {
    slug: "healing-from-comparison-in-the-age-of-social-media",
    title: "Healing from Comparison in the Age of Social Media",
    subtitle: "Reclaiming contentment when your feed constantly whispers that you're behind.",
    excerpt: "A candid look at comparison, identity, and how to root your worth in something that doesn't scroll away.",
    categorySlug: "health-wellness",
    authorSlug: "temitope-bello",
    publishedAt: "2026-08-02",
    readingTimeMinutes: 7,
    heroImage: {
      src: "/images/articles/healing-from-comparison-in-the-age-of-social-media.jpg",
      alt: "Two hands against a pink wall, one holding a large pineapple, the other a much smaller one",
      tone: "rose",
      motif: "lily",
      credit: "Photo via Unsplash",
    },
    trending: true,
    tags: ["identity", "mental health"],
    body: [
      "Comparison has always existed, but never with this much fuel. The curated highlight reels of others can quietly convince us we are falling behind in a race no one actually signed up to run.",
      "## Naming the Lie Beneath the Scroll",
      "Comparison often whispers a lie: that someone else's visible blessing is evidence of your invisible lack. Scripture offers a different measure entirely, one rooted in identity, not comparison.",
    ],
  },
  {
    slug: "leading-with-both-conviction-and-compassion",
    title: "Leading with Both Conviction and Compassion",
    subtitle: "Why the best women leaders refuse to choose between strength and softness.",
    excerpt: "Notes on leadership for women navigating ministry, business, and community responsibility.",
    categorySlug: "faith-inspiration",
    authorSlug: "adaeze-okafor",
    publishedAt: "2026-07-29",
    readingTimeMinutes: 6,
    heroImage: {
      src: "/images/articles/leading-with-both-conviction-and-compassion.jpg",
      alt: "Rows of black and white chess pawns facing one another across a polished wooden board",
      tone: "charcoal",
      motif: "palm",
      credit: "Photo via Unsplash",
    },
    tags: ["leadership"],
    body: [
      "Women leaders are too often asked to choose: be strong, or be warm. Scripture presents a better model: leaders who hold firm conviction and deep compassion at once.",
      "## Deborah's Example",
      "Deborah led with clarity and courage while still being sought out for wisdom and comfort. Conviction and compassion were never in tension in her leadership; they were partners.",
    ],
  },
  {
    slug: "a-simple-morning-prayer-practice-for-busy-seasons",
    title: "A Simple Morning Prayer Practice for Busy Seasons",
    subtitle: "You don't need an hour of silence to meet with God. You need consistency.",
    excerpt: "A five-minute framework for women who want a devotional life that survives a demanding season.",
    categorySlug: "faith-inspiration",
    authorSlug: "joy-eze",
    publishedAt: "2026-07-25",
    readingTimeMinutes: 4,
    heroImage: {
      src: "/images/articles/a-simple-morning-prayer-practice-for-busy-seasons.jpg",
      alt: "Early morning sun breaking through the branches of a tall tree, light rays raking across a misty park",
      tone: "gold",
      motif: "olive",
      credit: "Photo via Unsplash",
    },
    editorsPick: true,
    tags: ["prayer", "devotion"],
    body: [
      "Perfectionism has quietly killed more devotional lives than busyness has. If you're waiting for the ideal hour of silence, consider a smaller, sustainable rhythm instead.",
      "## A Five-Minute Framework",
      "Begin with one minute of gratitude, two minutes of scripture, and two minutes of honest prayer, spoken or written. Small and consistent will carry you further than ambitious and abandoned.",
    ],
  },
  {
    slug: "you-are-not-behind-a-word-for-the-comparing-heart",
    title: "You Are Not Behind: A Word for the Comparing Heart",
    subtitle: "There is no such thing as behind when you are walking in God's timing.",
    excerpt: "A short, encouraging read for the woman quietly wondering if she has missed her moment.",
    categorySlug: "faith-inspiration",
    authorSlug: "joy-eze",
    publishedAt: "2026-07-20",
    readingTimeMinutes: 3,
    heroImage: {
      src: "/images/articles/you-are-not-behind-a-word-for-the-comparing-heart.jpg",
      alt: "Lavender catching warm low sunlight, hills fading behind",
      tone: "gold",
      motif: "wheat",
      credit: "Photo via Unsplash",
    },
    trending: true,
    tags: ["encouragement"],
    body: [
      "There is no universal clock for marriage, motherhood, career, or ministry, only God's specific, unhurried plan for your specific life.",
      "Wherever you are, you are not behind. You are exactly where formation is happening.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.categorySlug === categorySlug);
}

export function getArticlesByAuthor(authorSlug: string): Article[] {
  return articles.filter((a) => a.authorSlug === authorSlug);
}

export function getFeaturedArticle(): Article {
  return articles.find((a) => a.featured) ?? articles[0];
}

/**
 * Editorial ordering for every listing: brand-new issue pieces first,
 * then by ascending `priority` (1 leads the issue), then newest by date.
 * A story with no `priority` sorts after every prioritised one.
 */
export function byIssuePriority(a: Article, b: Article): number {
  if (!!a.isNew !== !!b.isNew) return a.isNew ? -1 : 1;
  const pa = a.priority ?? Number.POSITIVE_INFINITY;
  const pb = b.priority ?? Number.POSITIVE_INFINITY;
  if (pa !== pb) return pa - pb;
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
}

export function getLatestArticles(limit?: number): Article[] {
  const sorted = [...articles].sort(byIssuePriority);
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

/** Articles flagged `isNew`, in editorial priority order. */
export function getNewArticles(limit?: number): Article[] {
  const sorted = articles.filter((a) => a.isNew).sort(byIssuePriority);
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

/** Every article published in the given month (`"YYYY-MM"`), ordered
 *  new-and-prioritised first. Defaults to the current September 2026 issue. */
export function getIssueArticles(month = "2026-09"): Article[] {
  return articles.filter((a) => a.publishedAt.startsWith(`${month}-`)).sort(byIssuePriority);
}

export function getTrendingArticles(limit = 4): Article[] {
  return articles.filter((a) => a.trending).slice(0, limit);
}

export function getEditorsPicks(limit = 4): Article[] {
  return articles.filter((a) => a.editorsPick).slice(0, limit);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return articles
    .filter((a) => a.slug !== article.slug && a.categorySlug === article.categorySlug)
    .slice(0, limit)
    .concat(
      articles.filter((a) => a.slug !== article.slug && a.categorySlug !== article.categorySlug)
    )
    .slice(0, limit);
}
