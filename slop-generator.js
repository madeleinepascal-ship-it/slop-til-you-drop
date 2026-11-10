// ── LinkedIn slop generator ───────────────────────────────────────────────────
// Endless, original LinkedIn thought-leadership slop: one sentence per line,
// em dashes everywhere, unlikely teachers, humble announcements, listicles,
// AI evangelism, engagement-bait polls, hashtags and a call to engage.
(function () {
  const pick  = a => a[Math.random() * a.length | 0];
  const pickN = (a, n) => [...a].sort(() => Math.random() - 0.5).slice(0, Math.min(n, a.length));
  const num   = (lo, hi) => lo + (Math.random() * (hi - lo + 1) | 0);
  const cap   = s => s[0].toUpperCase() + s.slice(1);

  const HOOKS = [
    "I wasn't going to post this — but my therapist said I should.",
    "Three years ago I was sleeping in my car. Today I sleep in a slightly nicer car.",
    "I just got off a call that changed my life. It was a wrong number.",
    "Nobody claps for you at 5am. That's why I clap for myself.",
    "My calendar is fully booked until 2031 — and I've never felt more free.",
    "I cried at a team offsite. Then I made everyone else cry. That's leadership.",
    "Today I said no to a meeting. The meeting happened anyway. I've never felt more seen.",
    "I almost didn't hit 'post' on this one.",
    "Some personal news — and a little vulnerability. 🧵",
    "I've been quiet on here for 48 hours. Here's what I learned.",
    "I asked my AI assistant what my purpose is. It said 'synergy'. I wept.",
    "Let me be vulnerable for a second — in a way that also shows I'm crushing it.",
    "This photo of me laughing at a whiteboard tells a story.",
    "I got rejected by 312 VCs. Number 313 also rejected me. Here's what I learned.",
    "I don't usually share personal stuff on here — but here's my entire life story.",
    "Yesterday my Roomba got stuck under the couch. It reminded me of middle management.",
    "I hired someone with zero experience. Then I gave them none. They thrived.",
    "I took a nap during a board meeting. Revenue is up 40%.",
    "My flight got delayed 6 hours. I used it to write this post — and 4 others.",
    "Everyone's talking about AI. Nobody's talking about how AI makes me feel.",
    "I deleted Slack for a week. My team didn't notice. Neither did I. Growth.",
    "At 4:12am this morning, the universe sent me a calendar invite.",
    "Plot twist: the real KPI was the friends we made along the way.",
    "I fired myself last week. Then I rehired myself — with better boundaries.",
    "Nobody told me leadership would involve this much eye contact.",
    "I gave a TEDx talk to an empty room. Here's why it was my best audience yet.",
    "Unpopular opinion — and I say this with love:",
    "I've reviewed 40,000 résumés. Only one used the font I like.",
  ];

  const TEACHERS = [
    "my dentist", "a goose in our office park", "the guy who fixes the office printer", "my 3-year-old nephew",
    "an AI chatbot at 2am", "my yoga instructor's yoga instructor", "a toll booth operator", "my Roomba",
    "a man selling hot dogs outside a stadium", "the hotel concierge in Lisbon", "my Peloton instructor",
    "a parking meter", "my sourdough starter", "the intern who replies-all", "a stranger at a TED afterparty",
    "the barista who spells my name wrong on purpose", "my grandmother's cat", "a cloud I saw from seat 14C",
    "the Wi-Fi password at a co-working space", "a kid who beat me at chess", "my smart fridge",
    "an elevator that stopped on every floor", "a delivery robot stuck on a curb", "my sleep tracking app",
  ];

  const LESSONS = [
    "taught me that consistency isn't a habit — it's a lifestyle",
    "showed me that the best leaders don't lead — they facilitate",
    "reminded me that every 'no' is just a 'yes' that hasn't been optimized yet",
    "taught me more about customer retention than any MBA program",
    "showed me that rest isn't a reward — it's a deliverable",
    "proved that you don't need a title to have a LinkedIn banner",
    "reminded me that burnout is just passion without a content calendar",
    "taught me that the meeting could have been an email — and the email could have been a vibe",
    "showed me that vulnerability scales",
    "taught me that patience is a growth strategy",
    "reminded me that every bottleneck is a bottle — and every bottle can be opened",
    "taught me that the real ROI is return on intention",
    "showed me that silence is the loudest form of stakeholder alignment",
    "reminded me that you can't pour from an empty Notion doc",
  ];

  const INSIGHTS = [
    "Your morning routine is your moat.",
    "Busy isn't a personality — but it is a brand.",
    "Burnout is just ambition that forgot to hydrate.",
    "Hustle quietly. Post loudly.",
    "Your calendar is a mirror — and mine is booked.",
    "The best networking happens when you're not networking — but you should still bring cards.",
    "Gratitude is free. My coaching program is $4,999.",
    "AI won't replace you — but someone who posts about AI every day might.",
    "Leadership isn't a title — it's a mindset, a lifestyle, and a quarterly OKR.",
    "Feedback is a gift — and I'm returning it to the store.",
    "You don't need more time — you need more frameworks.",
    "A goal without a deck is just a wish.",
    "Rest is a strategy — and I strategize for 4 hours a night.",
    "The comfort zone is where dreams go to schedule a sync.",
    "Your vibe attracts your pipeline.",
    "Success is 10% inspiration, 90% reposting your own posts.",
    "Embrace the pivot — then pivot the embrace.",
    "The future of work is — and I can't stress this enough — the future.",
    "Inbox zero is a mindset — not a number.",
    "It's not a side hustle — it's a parallel growth journey.",
    "Every 'circle back' is a second chance.",
    "Don't chase money — chase alignment. Then invoice it.",
    "Authenticity is my most important brand pillar.",
    "Sleep is the original agentic workflow.",
    "If you're not uncomfortable, you're not on LinkedIn enough.",
    "You are the CEO of your own nervous system.",
    "Be the person your Slack status thinks you are.",
    "Disruption starts with a single unsolicited DM.",
    "Your network is a garden — water it with thought leadership.",
    "Doing less is the new doing more — and I'm doing so much less.",
  ];

  const ACHIEVEMENTS = [
    "After my third Forbes 30 Under 30 rejection",
    "Fresh off a 14-hour flight back from my keynote in Dubai",
    "As someone who has scaled four startups and one personal brand",
    "Having mentored over 900 founders (and counting 🙏)",
    "Now that my podcast has cracked the top 200 in Self-Improvement",
    "While closing our Series B from a sauna in Helsinki",
    "As a 6x top voice in a category I invented",
    "After my book sold out (we printed 40 copies)",
    "Between back-to-back fireside chats at Web Summit",
    "As someone who wakes up before their alarm wakes up",
    "After walking 15 miles on a treadmill desk during earnings",
    "Having just been named 'Most Likely to Pivot' by my own newsletter",
  ];

  const ANNOUNCEMENTS = [
    "I'm thrilled to announce I'm starting a new position as Chief Vibes Officer",
    "I'm humbled to share that I've been accepted into a 12-week program on gratitude leadership",
    "I'm excited to announce that I've left my job to focus on my personal brand full-time",
    "After a lot of reflection — I've decided to take a step back to take a bigger step forward",
    "I'm honored to share that I've been certified in Advanced Synergy (Level II)",
    "Big news: I'm launching a newsletter about launching newsletters",
    "I'm beyond grateful to announce my sabbatical — starting Monday, ending Tuesday",
    "Some personal news: I've been promoted to Senior Thought Leader",
    "I'm proud to announce our AI-powered pillow just closed a $40M seed round",
  ];

  const LIST_TITLES = [
    "lessons I learned from losing a pickleball tournament",
    "things my sourdough starter taught me about scaling",
    "signs you're ready to become a thought leader",
    "habits of people who reply to every comment",
    "truths about leadership nobody wants to post",
    "things I'd tell my 22-year-old self (who was also crushing it)",
    "ways to make your morning routine more like a board meeting",
    "lessons from 10 years of saying 'per my last email'",
    "rules I follow to protect my peace — and my pipeline",
    "things I learned from a 3-day silent retreat (that I'm now posting about)",
    "reasons naps are the ultimate productivity hack",
  ];

  const LIST_ITEMS = [
    "Say no to everything — then say yes to yourself",
    "Journal for 40 minutes before you look at a screen (except this one)",
    "Treat every inbox like a garden",
    "Hydrate before you ideate",
    "Never eat lunch alone — eat it with your goals",
    "Block focus time — then post about your focus time",
    "Hire for vibe, train for spreadsheets",
    "Turn every setback into a carousel",
    "Read one book a week (the summaries count)",
    "Celebrate tiny wins — loudly, publicly, here",
    "Take cold showers — then take warm ones, for balance",
    "Visualize your quarterly targets before bed",
    "Keep your circle small and your follower count large",
    "Delete the apps that don't serve your growth (not this one)",
    "Make your bed — it's your first deliverable of the day",
    "Wake up at 4:44am — it's a powerful number",
    "Fail fast — but post slowly, with a thoughtful caption",
    "Treat your nap like a standup — short, focused, no laptops",
    "Mute anyone who doesn't believe in your vision",
    "Answer every DM like it's a Series A",
    "Ask 'why?' five times — then ask 'why not?' once",
    "Schedule time to be spontaneous",
  ];

  const HOT_TAKE_OPENERS = ["Unpopular opinion:", "Hot take 🔥", "I'll say it:", "Controversial — but true:",
    "This might get me unfollowed:", "Here's what nobody in leadership will admit:"];

  const AI_LINES = [
    "AI isn't coming for your job — it's coming for your calendar invites.",
    "I asked ChatGPT to write this post. It refused — said it was 'too inspirational'.",
    "Every company is an AI company now — including my dog-walking side hustle.",
    "In 18 months, every meeting will be attended by agents. Mine already is.",
    "My AI assistant now writes my gratitude journal. I've never been more grateful.",
    "Agentic workflows aren't the future — they're the present, wearing a hoodie.",
    "If your AI strategy isn't keeping you up at night — you're doing it wrong.",
    "Prompt engineering is just leadership — for computers.",
    "We replaced our standup with an AI summary of the standup. Nobody has spoken since. Productivity is up.",
  ];

  const POLL_QUESTIONS = [
    ["When do you do your best thinking?", ["At 5am", "In the shower", "During other people's presentations", "While writing this poll"]],
    ["What's your leadership style?", ["Servant", "Visionary", "Agentic", "Asleep"]],
    ["What's the biggest blocker to your growth?", ["Meetings", "More meetings", "Meetings about meetings", "Sleep"]],
    ["How many hours do you sleep?", ["8 (weak)", "6 (balanced)", "4 (founder)", "I'm reading this in bed"]],
  ];

  const CLOSERS = [
    "Agree? 👇", "Thoughts? 💭", "Let that marinate.", "Read that again — slowly.",
    "♻️ Repost to help someone in your network grow.", "Follow me for daily insights like this. 🔔",
    "Comment 'SLOP' and I'll DM you the framework.", "Tag a leader who needs to hear this.",
    "What would you add? Drop it below. 👇", "Save this for your next 1:1. 🔖",
    "If this resonated — hit that 💡.", "Like if you agree. Comment if you really agree.",
    "DM me 'ALIGN' for my free 63-page playbook.", "Who else is building in public? 🙋",
    "The algorithm loves comments — and so do I. 🙏", "Onward. 🚀", "Stay curious. Stay humble. Stay posting.",
    "Be honest — which one are you? 👇", "You've got this. And I've got a webinar. Link in comments.",
  ];

  const HASHTAGS = ["#Leadership", "#Growth", "#Mindset", "#AI", "#Innovation", "#FutureOfWork", "#Gratitude",
    "#Hustle", "#ThoughtLeadership", "#PersonalBranding", "#OpenToWork", "#Motivation", "#Resilience",
    "#GrowthMindset", "#Productivity", "#Authenticity", "#AgenticAI", "#BuildInPublic", "#Founders",
    "#Wellness", "#Sleep", "#Synergy", "#Vulnerability", "#Alignment", "#Disruption", "#CareerGrowth",
    "#WorkLifeHarmony", "#Hiring", "#Networking", "#Blessed", "#ServantLeadership", "#Agile", "#Mindfulness"];

  const tags = (n = 4) => pickN(HASHTAGS, n).join(' ');
  const post = lines => lines.filter(Boolean).join('\n');

  const STYLES = {
    'STORY': () => post([pick(HOOKS), `Last week, ${pick(TEACHERS)} ${pick(LESSONS)}.`,
      pick(["I sat with that for a long time.", "I had to pull the car over.", "I closed my laptop. Then I opened it to write this.",
        "I'm still processing it — in public."]), pick(INSIGHTS), pick(INSIGHTS), pick(CLOSERS), tags()]),
    'LISTICLE': () => {
      const n = num(5, 7);
      return post([`${n} ${pick(LIST_TITLES)}:`, ...pickN(LIST_ITEMS, n).map((x, i) => `${i + 1}. ${x}`),
        pick(["Bonus: post about it.", "Number 4 changed my life.", "Which one hit hardest?"]), pick(CLOSERS), tags()]);
    },
    'HOT TAKE': () => post([pick(HOT_TAKE_OPENERS), pick(INSIGHTS), pick(INSIGHTS), "Most people aren't ready for that conversation.",
      "But you are. 🫵", pick(CLOSERS), tags(3)]),
    'HUMBLE BRAG': () => post([`${pick(ACHIEVEMENTS)} — I keep coming back to one simple truth:`, pick(INSIGHTS),
      "It's not about the wins.", "It's about the person you become while posting about them.", pick(CLOSERS), tags()]),
    'ANNOUNCEMENT': () => post([`${pick(ANNOUNCEMENTS)}! 🎉`,
      `This journey wasn't easy — there were late nights, early mornings, and at least one ${pick(["podcast", "retreat", "breathwork session", "keynote"])}.`,
      `Huge thanks to ${pick(TEACHERS)}, my mentors, and everyone who believed in me before my banner did.`,
      `Onward — and ${pick(["upward", "inward", "agentically forward", "sideways, strategically"])}. 🚀`, tags(5)]),
    'AI EVANGELIST': () => post([pick(AI_LINES), pick(AI_LINES), pick(INSIGHTS),
      `Here's my ${num(3, 9)}-step framework for ${pick(["agentic leadership", "AI-native napping", "prompting your way to purpose", "synergizing with your copilot"])} 👇`,
      pick(CLOSERS), tags()]),
    'POLL': () => { const [q, opts] = pick(POLL_QUESTIONS);
      return post([`Quick poll for my network 📊`, q, ...opts.map(o => `○ ${o}`), "Vote — then tell me why in the comments. 👇", tags(3)]); },
    'BROETRY': () => post([pick(HOOKS), "I said nothing.", "I just listened.", pick(INSIGHTS), "Then I opened a spreadsheet.",
      "And I smiled.", "Because I knew —", pick(INSIGHTS), pick(CLOSERS), tags(3)]),
  };
  const styleNames = Object.keys(STYLES);

  window.makeSlop = () => {
    const style = pick(styleNames);
    return { tag: `LINKEDIN · ${style}`, text: STYLES[style]() };
  };

  // A run-on paragraph of pure LinkedIn slop for the background wall
  window.makeSlopParagraph = () => {
    const parts = [];
    const n = num(7, 12);
    for (let i = 0; i < n; i++) {
      parts.push(pick([
        () => pick(HOOKS), () => pick(INSIGHTS), () => pick(INSIGHTS), () => pick(AI_LINES), () => pick(CLOSERS),
        () => `${cap(pick(TEACHERS))} ${pick(LESSONS)}.`, () => `${pick(ACHIEVEMENTS)} — ${pick(INSIGHTS).toLowerCase()}`,
        () => `${pick(ANNOUNCEMENTS)}! 🎉`, () => tags(num(2, 4)),
      ])());
    }
    return parts.join(' ');
  };
})();
