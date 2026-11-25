export const home = {
  meta: {
    title: "Find what is slowing your freight down",
    description:
      "Trukkings brings a freight marketplace, carrier operations software and an AI freight assistant into one platform for carriers, drivers, shippers and brokers.",
  },
  hero: {
    eyebrow: "For carriers, drivers, shippers & brokers",
    headlineStart: "The trucks aren't the slow part.",
    headlineEmphasis: "Everything around them is.",
    subhead:
      "Loads found in one place, planned in another, documented in a third. The retyping, the chasing and the \u201cwho knows?\u201d add up every single day, and most teams have stopped noticing. Trukkings makes it visible, then removes it.",
    primary: { label: "Find where your day leaks", href: "#check" },
    secondary: { label: "Get early access", href: "/contact" },
    tags: ["Scattered tools", "Chasing paperwork", "Answers in people's heads"],
  },
  strip: [
    { icon: "doc", title: "\u201cCan you resend that rate con?\u201d", text: "A document living in someone's inbox." },
    { icon: "users", title: "\u201cWhich driver is free Thursday?\u201d", text: "An answer living in someone's head." },
    { icon: "eye", title: "\u201cDid the delivery proof ever come in?\u201d", text: "Proof living in a phone photo." },
    { icon: "link", title: "\u201cWhy is this invoice still waiting?\u201d", text: "A gap between two tools." },
  ],
  hidden: {
    eyebrow: "What you don't see",
    title: "You see a late invoice. Here's what's behind it.",
    intro:
      "Most freight problems show up as something else, which is why they're so hard to fix. Look underneath and the same few gaps keep turning up.",
    items: [
      { sees: "A truck sat empty on Thursday.", really: "Which trucks were free lived in a spreadsheet last touched on Monday. Nobody was wrong. The information was just somewhere else." },
      { sees: "A delivery went out late.", really: "The driver's hours were running short, but that fact sat in a different place than the dispatch plan. Nobody connected the two in time." },
      { sees: "An invoice is stuck.", really: "Delivery proof is a photo on a driver's phone. Billing is waiting, the driver forgot, and someone has to chase it." },
      { sees: "A load was booked wrong.", really: "The same details were typed into three places. One typo or one outdated copy, and now there's a dispute to untangle." },
    ],
    outro: "None of these is a people problem. They are gaps between tools, and every gap is filled by someone retyping, forwarding, asking or remembering.",
  },
  check: {
    eyebrow: "Quick check",
    title: "How many of these happened this week?",
    intro: "Tick what's true for you. No email, no sign-up. It just shows where the gaps are.",
    items: [
      "We typed the same load details into more than one place",
      "Someone asked for a rate confirmation or delivery proof that already existed",
      "A dispatcher asked a driver or colleague something the records should answer",
      "We found out about a problem after it had already cost us",
      "A document lived in email or a phone photo instead of on the load",
      "We weren't sure which truck or driver was actually free",
    ],
  },
  stats: [
    { value: "1", unit: "record", text: "for every load, driver and truck, shared by every tool" },
    { value: "3", unit: "tools", text: "marketplace, operations and an AI assistant in one place" },
    { value: "5", unit: "stages", text: "from finding a load to a billing-ready close-out" },
    { value: "4", unit: "roles", text: "carriers, drivers, shippers and brokers on the same picture" },
  ],
  problem: {
    eyebrow: "Why it keeps happening",
    title: "It's not your people. It's the gaps between your tools.",
    intro:
      "Freight software grew up as separate pieces: a load board here, a TMS there, a spreadsheet, an inbox. The real work of moving freight lives in the spaces between them.",
    items: [
      {
        title: "Scattered tools",
        text: "Finding freight, planning it and closing it out happen in different places, so the same details get typed again and again.",
      },
      {
        title: "Chasing paperwork",
        text: "Rate confirmations, delivery proof and other documents sit in email threads and phone photos until someone hunts them down.",
      },
      {
        title: "Answers in people's heads",
        text: "Can this driver take that load? What is still missing? The answer exists, but only if you know where to look or who to ask.",
      },
    ],
  },
  platform: {
    eyebrow: "The fix",
    title: "Close the gaps, don't add another tab.",
    intro:
      "Trukkings connects finding, running and answering around one record for every load, driver and truck, so nothing has to be retyped, chased or remembered.",
    items: [
      {
        title: "Freight marketplace",
        text: "Stop hunting across boards and phone calls. Search by equipment, lane and timing, or post freight and review interested carriers, on the same records as dispatch.",
        points: ["Search and filter by equipment, lane and timing", "Post loads and review interested carriers", "Clear terms before anyone commits"],
        href: "/marketplace",
        tag: "Fixes scattered tools",
        icon: "search",
      },
      {
        title: "Operations & TMS",
        text: "Stop retyping and chasing. One dispatch board, load status from booked to delivered, and documents attached to the load they belong to.",
        points: ["Dispatch board for loads, drivers and equipment", "Load status from booked to delivered", "Documents attached to the load they belong to"],
        href: "/operations",
        tag: "Fixes chasing paperwork",
        icon: "board",
      },
      {
        title: "AI freight assistant",
        text: "Stop asking around. Ask in plain language and it answers from your own records, shows its sources and drafts the routine work for your review.",
        points: ["Answers grounded in your own records", "Drafts messages and summaries for review", "Flags what's missing before it becomes a problem"],
        href: "/ai-assistant",
        tag: "Fixes answers in heads",
        icon: "chat",
      },
    ],
  },
  demo: {
    eyebrow: "The same day, connected",
    title: "One record, three views.",
    text: "Find the load, plan the truck and ask the question without leaving the record. The marketplace, the dispatch board and the assistant all read the same facts.",
    points: ["Change a detail once and everyone sees it", "Documents live on the load, not in an inbox", "Answers show the records they came from"],
  },
  lifecycle: {
    eyebrow: "How it works",
    title: "From a load on the board to a closed-out trip.",
    intro:
      "The same flow works whether you run one truck or a fleet, and whether you are moving freight or tendering it.",
  },
  who: {
    eyebrow: "Who it's for",
    title: "Where it hurts depends on your seat.",
    intro: "Same gaps, different pain. Here is how each side of the load feels it.",
    items: [
      {
        title: "Carriers & fleets",
        text: "Trucks sit empty, dispatch lives in spreadsheets and paperwork follows you home. Fill trucks and keep every load's records in one place.",
        href: "/solutions/carriers",
      },
      {
        title: "Owner-operators & drivers",
        text: "You are the driver, dispatcher and bookkeeper. Find work that fits your truck and keep trips and paperwork organized without extra hours.",
        href: "/solutions/owner-operators",
      },
      {
        title: "Shippers & brokers",
        text: "You post freight, then chase calls and emails to learn where it is. Reach capable carriers and follow each shipment in one place.",
        href: "/solutions/shippers-brokers",
      },
      {
        title: "Partners & investors",
        text: "We are building in the open and glad to talk. Reach out if you'd like to work with us or follow our progress.",
        href: "/partners",
      },
    ],
  },
  assistant: {
    eyebrow: "AI assistant",
    title: "An assistant that knows your operation.",
    text: "Generic chatbots don't know your drivers, your trucks or your open loads. The Trukkings assistant does, because it works from the same records you do.",
    points: [
      { lead: "Shows its reasoning.", text: "You see what it looked at, not just a verdict." },
      { lead: "Says when it isn't sure.", text: "Gaps and conflicts are surfaced, never smoothed over." },
      { lead: "You stay in control.", text: "It suggests and drafts. People approve and send." },
    ],
    chat: [
      { from: "you", text: "Which of my trucks are free on Thursday?" },
      {
        from: "ai",
        text: "Two trucks have no assignments on Thursday. One has a service visit booked that morning, so I'd start with the other. Want me to list loads that fit it?",
        sources: ["Dispatch board", "Equipment records"],
      },
      { from: "you", text: "Yes, dry van only." },
      {
        from: "ai",
        text: "Here are the best matches for that truck and driver. I've noted which ones need extra paperwork so nothing is a surprise at pickup.",
        sources: ["Marketplace", "Driver records"],
      },
    ],
    link: { label: "Meet the assistant", href: "/ai-assistant" },
  },
  principles: {
    eyebrow: "How we build",
    title: "Practical first. Clever second.",
    items: [
      {
        title: "Built around real trucking work.",
        text: "Our team comes from trucking operations and compliance. We design for dispatchers and drivers, not for demos.",
      },
      {
        title: "Your records, your control.",
        text: "Automation helps with the busywork. It doesn't silently change the records you rely on, and important changes stay reviewable.",
      },
      {
        title: "Straightforward by default.",
        text: "Clear terms, clear status, no hidden steps. If something is missing or uncertain, the platform says so.",
      },
    ],
  },
  trust: {
    eyebrow: "Trust & control",
    title: "Built so you can check its work.",
    intro:
      "Freight records carry money, compliance and reputations. These are the commitments we design around, from the first release.",
    items: [
      { icon: "users", title: "You approve changes", text: "Automation drafts and proposes. Changes to your records stay proposals until a person approves them." },
      { icon: "eye", title: "Sources on every answer", text: "The assistant shows the records it looked at, and says so when information is missing or conflicting." },
      { icon: "history", title: "A history you can review", text: "What changed, who changed it and when, kept on the record it belongs to." },
      { icon: "shield", title: "Access you control", text: "People on your account see what you give them access to, and nothing more." },
      { icon: "lock", title: "Your records are yours", text: "We don't sell personal information. Tell us what you need to take with you and we'll walk through the options." },
      { icon: "doc", title: "Plain terms", text: "Clear status, clear terms, no hidden steps. Pricing will be published upfront when we leave early access." },
    ],
    note: "We are in early access. Security and compliance details, including any certifications, will be published here as they are earned, not before.",
  },
  compare: {
    eyebrow: "Before and after",
    title: "What changes when the gaps close.",
  },
  access: {
    eyebrow: "Early access",
    title: "How getting started works.",
    intro: "No long procurement, no big switch. We start with the part of your operation that hurts most.",
    items: [
      { title: "Tell us how you move freight", text: "Share your role, lanes and the tools you use today with the short form." },
      { title: "We reply and talk it through", text: "We read every request and talk through what fits, without a sales script." },
      { title: "Start with one piece", text: "If it's a match, we set up your account around marketplace, operations or the assistant." },
      { title: "Shape what we build next", text: "Your feedback decides the roadmap. Early participants hear about pricing first." },
    ],
  },
  cta: {
    title: "Find out where your day is leaking.",
    text: "Tell us how you move freight. We'll show you where the gaps are and whether Trukkings fits, with no sales script.",
    primary: { label: "Get early access", href: "/contact" },
    secondary: { label: "Read the FAQ", href: "/faq" },
  },
};

export const lifecycleStages = [
  { name: "Find", text: "Search for freight that fits, or post what needs to move.", part: "Marketplace" },
  { name: "Book", text: "Agree the terms and confirm the load.", part: "Marketplace" },
  { name: "Dispatch", text: "Assign the driver and truck and set the schedule.", part: "Operations" },
  { name: "Deliver", text: "Track the trip and collect the documents.", part: "Operations" },
  { name: "Close out", text: "Keep a clean, billing-ready record of the load.", part: "Operations" },
];
