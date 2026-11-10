// ── AI slop generator ─────────────────────────────────────────────────────────
// Endless LinkedIn-post / chatbot-answer style copy, built from the tropes of
// AI writing: em dashes, "it's not X — it's Y", delving, tapestries, humble
// announcements, emoji bullets, hashtags and a call to engage.
(function () {
  const pick = a => a[Math.random() * a.length | 0];
  const some = (a, n) => [...a].sort(() => Math.random() - 0.5).slice(0, n);
  const chance = p => Math.random() < p;

  const HOOKS = [
    "I almost didn't post this.", "Unpopular opinion:", "Let's be honest —", "Nobody talks about this, but",
    "Here's the thing:", "Stop scrolling. This matters.", "In today's fast-paced world,",
    "I've been reflecting a lot lately.", "Hot take 🔥", "This might ruffle some feathers.",
    "I was rejected from 47 jobs. Today I'm a Chief Vision Officer.", "Read this twice.",
    "I need to share something vulnerable.", "Real talk:", "Most people won't understand this.",
    "Yesterday I fired my best employee. Hear me out.", "I cried in an airport lounge today. Here's why.",
    "My 4-year-old taught me more about leadership than my MBA.", "Can we talk about this for a second?",
    "Big news. 🚀", "I'm humbled and honored to announce", "After 3 years of silence — I'm back.",
  ];
  const STORIES = [
    "Last week, a junior developer asked me a question I'll never forget.",
    "On my way to the airport, my Uber driver said something profound.",
    "At 3am, staring at the ceiling, it hit me.",
    "I spent 12 years building my company. Then everything changed.",
    "My grandmother never used a computer — but she understood product-market fit better than anyone I've met.",
    "During a 6am ice bath, I had a realization.",
    "A barista misspelled my name today. It was the best leadership lesson of my career.",
    "My dog doesn't check Slack. My dog is thriving.",
    "I asked ChatGPT to describe my leadership style. It said \"transformative.\" I wept.",
    "I turned down a seven-figure offer last Tuesday — and I'd do it again.",
    "Our intern stayed late to help a colleague. Nobody asked her to.",
    "I took my first vacation in nine years. On day two, I opened my laptop.",
  ];
  const NOT_X = [
    ["It's not about the hustle", "it's about the heart"], ["It's not a setback", "it's a setup"],
    ["Sleep isn't a luxury", "it's a strategy"], ["This isn't just a product", "it's a movement"],
    ["It's not a job", "it's a journey"], ["You're not tired", "you're unaligned"],
    ["It isn't noise", "it's signal"], ["It's not burnout", "it's growth wearing a disguise"],
    ["It's not about working harder", "it's about working with intention"],
    ["Rest isn't the opposite of productivity", "it's the foundation"],
    ["It's not a meeting", "it's an alignment opportunity"], ["It's not content", "it's connection"],
    ["This isn't a pivot", "it's an evolution"], ["Failure isn't the end", "it's data"],
    ["It's not a nap", "it's a strategic recharge"],
  ];
  const VERBS = ["unlock", "leverage", "elevate", "empower", "navigate", "foster", "delve into", "supercharge",
    "reimagine", "harness", "optimize", "democratize", "amplify", "unpack", "operationalize", "embrace"];
  const OBJECTS = ["the full potential of your team", "a rich tapestry of insights", "the ever-evolving landscape of work",
    "meaningful connections", "authentic engagement", "a culture of excellence", "holistic synergy",
    "actionable insights", "your north star", "the intersection of innovation and empathy",
    "the human side of AI", "your authentic personal brand", "a growth mindset", "next-level outcomes",
    "the future of work", "deep, restorative sleep at scale", "cross-functional alignment", "the power of storytelling"];
  const ADJ = ["game-changing", "transformative", "seamless", "robust", "cutting-edge", "pivotal", "invaluable",
    "groundbreaking", "holistic", "scalable", "best-in-class", "paradigm-shifting", "mission-critical", "AI-powered"];
  const LESSONS = [
    "Consistency beats intensity — every single time.", "Your network is your net worth — but your rest is your interest.",
    "Done is better than perfect — but rested is better than done.", "Feedback is a gift — unwrap it daily.",
    "Empathy isn't soft — it's a competitive advantage.", "Leaders don't create followers — they create leaders.",
    "Culture eats strategy for breakfast — and synergy for lunch.", "Show up. Even when it's hard. Especially when it's hard.",
    "Vulnerability is the new KPI.", "Your comfort zone is a beautiful place — but nothing ever grows there.",
    "Gratitude is the ultimate productivity hack.", "The best investment you can make — is in yourself.",
    "Small wins compound — quietly, then all at once.", "Listen to understand — not to respond.",
    "Hire for attitude — train for skill.", "Be so good they can't ignore you — then be kind anyway.",
    "Clarity is kindness.", "Energy is contagious — make sure yours is worth catching.",
  ];
  const BULLETS = ["✅", "👉", "🔹", "💡", "🚀", "✨", "📈", "🎯", "→"];
  const CLOSERS = ["Let that sink in.", "Agree? 👇", "Thoughts?", "Read that again.", "♻️ Repost if this resonated.",
    "What would you add? 💬", "Follow for more insights like this. 🚀", "Food for thought. 🧠", "And that's okay.",
    "Be the change. ✨", "Drop a 🙌 if you agree.", "Who needs to hear this today?", "The future is now. Are you ready?",
    "Tag someone who needs this. 👇", "Stay hungry. Stay humble. 🙏", "Onwards and upwards. 📈"];
  const TAGS = ["#Leadership", "#Growth", "#Mindset", "#AI", "#Innovation", "#FutureOfWork", "#Gratitude", "#Hustle",
    "#Synergy", "#Sleep", "#Wellness", "#ThoughtLeadership", "#PersonalBranding", "#OpenToWork", "#Motivation",
    "#Resilience", "#GrowthMindset", "#Productivity", "#Authenticity", "#AgileLeadership", "#Disruption"];
  const ASSIST_OPEN = ["Great question! 🌟", "Absolutely! Here's a comprehensive overview:", "Certainly! Let's delve into this.",
    "What a thoughtful question!", "Of course! Here's a breakdown:", "That's a fascinating topic — let's explore it together."];
  const ASSIST_MID = ["It's important to note that", "It's worth mentioning that", "In many ways,", "At its core,",
    "When it comes to sleep,", "In the ever-evolving world of rest,", "From a holistic perspective,"];
  const ASSIST_CLOSE = ["I hope this helps! Let me know if you'd like me to expand on any of these points. 😊",
    "In conclusion, it's a nuanced topic with no one-size-fits-all answer.",
    "Ultimately, the best approach depends on your unique needs and goals.",
    "Would you like me to turn this into a bulleted list, a haiku, or a 12-week action plan?",
    "Remember — every journey begins with a single step. 🌱"];
  const TOPICS = ["sleep", "leadership", "rest", "the future of work", "productivity", "AI", "burnout", "gratitude",
    "remote work", "networking", "failure", "self-care", "content creation", "the hiring process", "your morning routine"];

  const cap = s => s[0].toUpperCase() + s.slice(1);
  const an = w => (/^[aeiouAEIOU]/.test(w) ? 'an ' : 'a ') + w;
  const notX = () => { const [a, b] = pick(NOT_X); return `${a} — ${b}.`; };
  const verbLine = () => `${cap(pick(VERBS))} ${pick(OBJECTS)} — and watch what happens.`;
  const hashtags = n => some(TAGS, n).join(' ');

  const MAKERS = [
    // classic LinkedIn post
    () => ({ tag: 'LINKEDIN POST', text: [
      pick(HOOKS), pick(STORIES), notX(),
      "Here's what I learned:",
      ...some(LESSONS, 3).map(l => `${pick(BULLETS)} ${l}`),
      pick(CLOSERS), hashtags(3)].join('\n') }),
    // humble announcement
    () => ({ tag: 'PRODUCT LAUNCH', text: [
      `I'm ${pick(['thrilled', 'humbled', 'beyond excited', 'incredibly proud'])} to announce our ${pick(ADJ)}, ${pick(ADJ)} platform — built to ${pick(VERBS)} ${pick(OBJECTS)}.`,
      `This isn't just a launch — it's a ${pick(['movement', 'mindset', 'new chapter', 'revolution in rest'])}.`,
      `Huge thanks to my incredible team. 🙏`, pick(CLOSERS), hashtags(4)].join('\n') }),
    // chatbot answer
    () => ({ tag: 'AI ASSISTANT', text: [
      pick(ASSIST_OPEN),
      `${pick(ASSIST_MID)} ${pick(TOPICS)} is ${an(pick(ADJ))} and multifaceted topic — one that touches on ${pick(OBJECTS)}, ${pick(OBJECTS)}, and ${pick(OBJECTS)}.`,
      `1. ${cap(pick(VERBS))} ${pick(OBJECTS)}`, `2. ${cap(pick(VERBS))} ${pick(OBJECTS)}`, `3. ${cap(pick(VERBS))} ${pick(OBJECTS)}`,
      pick(ASSIST_CLOSE)].join('\n') }),
    // aphorism stack
    () => ({ tag: 'THOUGHT LEADERSHIP', text: [notX(), notX(), notX(), pick(LESSONS), pick(CLOSERS)].join('\n') }),
    // listicle carousel
    () => ({ tag: 'MOTIVATIONAL CAROUSEL', text: [
      `${3 + (Math.random() * 5 | 0)} ${pick(ADJ)} habits of highly ${pick(['effective', 'rested', 'aligned', 'intentional'])} leaders 🧵`,
      ...some(LESSONS, 4).map((l, i) => `${i + 1}/ ${l}`), pick(CLOSERS)].join('\n') }),
    // newsletter intro
    () => ({ tag: 'NEWSLETTER', text:
      `In today's fast-paced world, ${pick(TOPICS)} has never been more important. As we navigate the ever-evolving landscape of ${pick(TOPICS)}, ` +
      `it's crucial to ${pick(VERBS)} ${pick(OBJECTS)} — not just for today, but for tomorrow. In this edition, we'll delve into ` +
      `${pick(OBJECTS)}, explore ${pick(OBJECTS)}, and ultimately ${pick(VERBS)} ${pick(OBJECTS)}. Let's dive in. 🌊` }),
    // short punchy
    () => ({ tag: 'AI-GENERATED INSIGHT', text: `${pick(HOOKS)} ${notX()} ${verbLine()} ${pick(CLOSERS)}` }),
  ];

  window.makeSlop = () => pick(MAKERS)();

  // A run-on paragraph of pure slop for the background wall
  window.makeSlopParagraph = () => {
    const bits = [];
    const n = 6 + (Math.random() * 6 | 0);
    for (let i = 0; i < n; i++) {
      bits.push(pick([
        () => pick(HOOKS), notX, verbLine, () => pick(LESSONS), () => pick(STORIES), () => pick(CLOSERS),
        () => `${pick(ASSIST_MID)} ${pick(TOPICS)} — at its core — is about ${pick(OBJECTS)}.`,
        () => `This ${pick(ADJ)} approach doesn't just ${pick(VERBS)} ${pick(OBJECTS)} — it helps you ${pick(VERBS)} ${pick(OBJECTS)}.`,
        () => hashtags(2 + (Math.random() * 3 | 0)),
      ])());
    }
    return bits.join(' ');
  };
})();
