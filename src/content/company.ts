export const howPage = {
  meta: {
    title: "How it works",
    description:
      "How a load moves through Trukkings, from listing and booking to dispatch, delivery and close-out, and how to get started.",
  },
  hero: {
    eyebrow: "How it works",
    title: "From a load on the board to a closed-out trip.",
    lede: "Five stages, one record. Here's what happens at each step, who does what and where the assistant helps.",
  },
  stages: {
    eyebrow: "The load lifecycle",
    title: "What happens at each stage.",
    items: [
      {
        title: "Find or post",
        text: "Carriers and drivers search for freight that fits their equipment, lanes and schedule. Shippers and brokers post what needs to move and the requirements that matter.",
        who: [
          { role: "Carrier or driver", does: "Searches, filters and saves searches for loads that fit." },
          { role: "Shipper or broker", does: "Posts the load with timing, equipment and terms." },
          { role: "Assistant", does: "Suggests matches and notes what each load needs." },
        ],
      },
      {
        title: "Agree and book",
        text: "Interested carriers respond and the poster reviews them. Terms are agreed and recorded on the load, and the booking is confirmed.",
        who: [
          { role: "Carrier or driver", does: "Shows interest and confirms availability." },
          { role: "Shipper or broker", does: "Compares responses and confirms the booking." },
          { role: "Assistant", does: "Summarizes responses and flags unclear terms." },
        ],
      },
      {
        title: "Plan and dispatch",
        text: "The booked load lands on the carrier's dispatch board with its details attached. A driver and truck are assigned and the schedule is set.",
        who: [
          { role: "Carrier", does: "Assigns the driver and truck and sets the plan." },
          { role: "Driver", does: "Receives the details and confirms the trip." },
          { role: "Assistant", does: "Checks for schedule conflicts and missing items." },
        ],
      },
      {
        title: "Move and track",
        text: "The load moves through its stages and updates are recorded. Everyone with access sees the same status.",
        who: [
          { role: "Carrier and driver", does: "Update status and upload documents as the trip progresses." },
          { role: "Shipper or broker", does: "Follows the shipment without chasing for updates." },
          { role: "Assistant", does: "Answers status questions and drafts updates for review." },
        ],
      },
      {
        title: "Deliver and close out",
        text: "Delivery is recorded, documents are collected and the load is closed out with a complete record, ready for billing.",
        who: [
          { role: "Carrier and driver", does: "Complete delivery and attach proof." },
          { role: "Shipper or broker", does: "Confirms delivery and has the record they need." },
          { role: "Assistant", does: "Lists anything still missing before close-out." },
        ],
      },
    ],
  },
  start: {
    eyebrow: "Getting started",
    title: "How early access works.",
    intro: "We're onboarding a small number of teams so the product is shaped by real use.",
    items: [
      { title: "Tell us how you work", text: "Share your role, the freight you move and the tools you use today." },
      { title: "We set you up", text: "We talk through what fits, then set up your account and the people on it." },
      { title: "Start with one piece", text: "Begin with the marketplace, operations or the assistant, whichever matters most." },
      { title: "Expand when it makes sense", text: "Add the rest as it proves its worth, and tell us what to improve." },
    ],
  },
};

export const aboutPage = {
  meta: {
    title: "About",
    description:
      "Why Trukkings exists, what we believe and how we build freight software that works the way freight works.",
  },
  hero: {
    eyebrow: "About Trukkings",
    title: "Freight software that works the way freight works.",
    lede: "We're building one platform for finding freight, running it and getting answers about it, designed with the people who actually do the work.",
  },
  story: {
    eyebrow: "Why we exist",
    title: "The trucks aren't the slow part.",
    paragraphs: [
      "Trukkings started with an observation from people who have worked in trucking operations and compliance: the work of moving freight is rarely slowed down by the trucks. It's slowed down by the gaps between the tools around them.",
      "A load is found in one place, planned in another and documented in a third. The same details are retyped, the same documents are chased and the same questions are asked over and over. Each gap costs time, and sometimes money.",
      "We're building Trukkings to close those gaps: a marketplace, operations software and an AI assistant that share one record for every load, driver and truck. The goal is simple. Spend less time on the work around freight and more on moving it.",
    ],
  },
  beliefs: {
    eyebrow: "What we believe",
    title: "Four ideas that shape the product.",
    items: [
      { title: "Practical beats clever", text: "A feature earns its place by saving someone real time on a real load, not by sounding impressive." },
      { title: "One record beats many copies", text: "When everyone works from the same facts, fewer mistakes happen and fewer calls are needed." },
      { title: "People stay in control", text: "Automation should take on the busywork. Decisions and important changes stay with people." },
      { title: "Be straightforward", text: "Clear terms, clear status and honest answers, including when something is missing or uncertain." },
    ],
  },
  how: {
    eyebrow: "How we work",
    title: "Building with the people who use it.",
    items: [
      { title: "Early access, on purpose", text: "We're onboarding a small number of carriers, drivers, shippers and brokers so real use shapes the product." },
      { title: "Industry knowledge, plus AI engineering", text: "The team combines hands-on trucking operations and compliance experience with engineers who build AI systems." },
      { title: "Ship, listen, improve", text: "We prefer putting something that works in front of real users and letting their feedback decide what's next." },
    ],
  },
};

export const partnersPage = {
  meta: {
    title: "Partners & investors",
    description:
      "Work with Trukkings as an early-access carrier, shipper or broker, a technology partner or an investor.",
  },
  hero: {
    eyebrow: "Partners & investors",
    title: "We're building in the open, and we'd like to talk.",
    lede: "Trukkings is early, and the right partners can shape what it becomes. Here's how you can get involved.",
  },
  ways: {
    eyebrow: "Ways to work together",
    title: "Find where you fit.",
    items: [
      { title: "Early-access carriers and fleets", text: "Run real loads on the platform and tell us what to fix first. You get early input into how dispatch and records work." },
      { title: "Shippers and brokers", text: "Post freight, work with carriers on the platform and help us make the marketplace useful from both sides." },
      { title: "Technology and data partners", text: "If your product complements freight operations, we're interested in how our platforms could work together." },
      { title: "Investors", text: "If you back early-stage logistics and AI software, we'd be glad to share where we're headed and listen to your view." },
    ],
  },
  looking: {
    eyebrow: "What we look for",
    title: "People who care about how freight actually moves.",
    points: [
      "Hands-on experience with carrier, driver or shipper operations",
      "Willingness to try early software and give direct feedback",
      "A practical view of where logistics software falls short",
      "Interest in AI that's accountable and keeps people in control",
    ],
  },
};

export const faqPage = {
  meta: {
    title: "FAQ",
    description: "Answers to common questions about Trukkings, the marketplace, operations, the AI assistant and early access.",
  },
  hero: {
    eyebrow: "FAQ",
    title: "Questions we hear first.",
    lede: "Can't find yours? Write to us and we'll answer it.",
  },
  groups: [
    {
      title: "General",
      items: [
        { q: "What is Trukkings?", a: "Trukkings is a freight platform that combines a marketplace for finding and posting loads, operations software for dispatch and records, and an AI assistant that answers questions from your own data. All three work from one record for every load, driver and truck." },
        { q: "Is Trukkings available now?", a: "We're in early access. We're onboarding a small number of carriers, drivers, shippers and brokers so the product is shaped by real use. Request access and we'll be in touch." },
        { q: "Who is Trukkings for?", a: "Carriers and fleets, owner-operators and drivers, and shippers and brokers. The three parts work together, and you can start with the part that matters most to you." },
        { q: "Where does Trukkings operate?", a: "Freight crosses borders and so do we. Tell us where you operate when you get in touch and we'll let you know how we can support you." },
        { q: "How much does it cost?", a: "Pricing will be published when we leave early access. Early participants will hear about it first, and we'll keep it simple and upfront." },
      ],
    },
    {
      title: "Marketplace",
      items: [
        { q: "How do I find loads?", a: "Search and filter by equipment, lane, load type and timing, and save searches to get alerts when matching loads appear." },
        { q: "Can I post freight as a shipper or broker?", a: "Yes. Post a load with the details carriers need, review the carriers who respond and confirm the booking in the platform." },
        { q: "How are terms agreed?", a: "Timing, requirements and payment terms are shown on the listing, and the agreed terms are recorded on the load when it's booked." },
      ],
    },
    {
      title: "Operations",
      items: [
        { q: "Do I need to replace the software I use today?", a: "No. Start with one piece, such as finding loads or organizing dispatch, and expand when it makes sense. Tell us what you use now and we'll talk through what fits." },
        { q: "Can I use only part of the platform?", a: "Yes. The marketplace, operations tools and assistant work together, but each is useful on its own." },
        { q: "Can my drivers use it too?", a: "Yes. Drivers can see their trips and details and add documents as the load progresses." },
      ],
    },
    {
      title: "AI assistant",
      items: [
        { q: "What can the AI assistant do?", a: "It answers questions about your loads, drivers and equipment, drafts routine messages and summaries, and flags missing or conflicting information. It suggests. You decide." },
        { q: "Can it change my records?", a: "Not on its own. Changes are proposals until a person approves them, and approved changes appear in the record's history." },
        { q: "How do I know the answers are right?", a: "Answers show the records they came from, so you can check them. When information is missing or conflicting, the assistant says so rather than guessing." },
        { q: "Does it replace dispatchers?", a: "No. It takes on lookups and drafting so people can spend their time on decisions and relationships." },
      ],
    },
    {
      title: "Data & control",
      items: [
        { q: "Who can see my records?", a: "People on your account, with the access you give them. We'll describe how data is handled in our privacy policy." },
        { q: "Can I get my data out?", a: "Your records are yours. Tell us what you need during onboarding and we'll walk through the options as the platform matures." },
      ],
    },
    {
      title: "Getting started",
      items: [
        { q: "How do I join early access?", a: "Use the form on the contact page. Tell us your role, the freight you move and the tools you use today." },
        { q: "What happens after I apply?", a: "We read every request and reply to talk through what fits. If it's a match, we set up your account and help you start with one piece of the platform." },
        { q: "Can I give feedback?", a: "Please do. Early-access feedback directly shapes what we build next." },
      ],
    },
  ],
};

export const contactPage = {
  meta: {
    title: "Contact",
    description: "Request early access or get in touch about partnerships and investment.",
  },
  hero: {
    eyebrow: "Contact",
    title: "Tell us how you move freight.",
    lede: "Share a few details and we'll reach out about early access, partnerships or investment conversations.",
  },
  include: {
    title: "What helps us help you",
    items: [
      "Your role: carrier, driver, shipper, broker, partner or investor",
      "The kind of freight you move and the equipment you use",
      "Where you operate, in regions or lanes",
      "The tools you use today, and what you'd fix first",
    ],
  },
  roles: ["Carrier or fleet", "Owner-operator or driver", "Shipper or broker", "Partner or investor", "Other"],
  submit: "Request early access",
};

export const privacyPage = {
  meta: { title: "Privacy", description: "How Trukkings handles information you share with us." },
  title: "Privacy policy",
  updated: "[EFFECTIVE DATE]",
  sections: [
    { h: "Who we are", p: ["This policy explains how [LEGAL ENTITY NAME] (\"Trukkings\", \"we\") handles information. You can reach us at the email address on our contact page."] },
    { h: "Information we collect", p: ["Information you give us, such as your name, email address, role, the regions you operate in and anything you write in our contact form.", "Technical information about how the website is used, such as pages visited and device type, if we enable analytics."] },
    { h: "How we use it", p: ["To respond to your requests, run the early-access program, improve our website and product, and keep our services secure.", "We do not sell your personal information."] },
    { h: "Sharing", p: ["We share information only with service providers who help us run the website and communications, when the law requires it, or with your permission."] },
    { h: "Retention", p: ["We keep information for as long as we need it for the purposes above, then delete or anonymize it."] },
    { h: "Your choices", p: ["You can ask us to access, correct or delete the personal information we hold about you by writing to us. Depending on where you live, you may have additional rights under local law."] },
    { h: "Changes", p: ["We may update this policy and will change the date above when we do."] },
  ],
};

export const termsPage = {
  meta: { title: "Terms", description: "Terms for using the Trukkings website and early-access program." },
  title: "Terms of use",
  updated: "[EFFECTIVE DATE]",
  sections: [
    { h: "Using this website", p: ["By using this website you agree to these terms. If you do not agree, please do not use it."] },
    { h: "Early access", p: ["Trukkings is in early access. Features may change, be limited or be withdrawn, and the service is provided as is while we develop it."] },
    { h: "Acceptable use", p: ["Do not misuse the website or the platform, attempt to access it without permission, or use it to break the law or harm others."] },
    { h: "Your content and records", p: ["You keep ownership of the information you provide. You give us permission to use it to operate and improve the service for you."] },
    { h: "AI assistant", p: ["The assistant's answers and drafts are provided to help you. Please review them before relying on them or sending them. You remain responsible for decisions made using them."] },
    { h: "Liability", p: ["To the extent permitted by law, Trukkings is not liable for indirect or consequential losses arising from use of the website or early-access service."] },
    { h: "Governing law", p: ["These terms are governed by the laws of [GOVERNING LAW], and disputes will be handled in the courts of [JURISDICTION]."] },
    { h: "Contact", p: ["Questions about these terms can be sent to the email address on our contact page."] },
  ],
};
