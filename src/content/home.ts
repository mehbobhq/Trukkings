export const home = {
  meta: {
    title: "Freight, run smarter",
    description:
      "Trukkings brings a freight marketplace, carrier operations software and an AI freight assistant into one platform for carriers, drivers, shippers and brokers.",
  },
  hero: {
    eyebrow: "Freight platform · early access",
    headlineStart: "Move freight with",
    headlineEmphasis: "fewer moving parts.",
    subhead:
      "Trukkings brings a freight marketplace, carrier operations software and an AI freight assistant into one place, so carriers, drivers, shippers and brokers spend less time chasing and more time moving.",
    primary: { label: "Get early access", href: "/contact" },
    secondary: { label: "See the platform", href: "/platform" },
    tags: ["Freight marketplace", "Operations & TMS", "AI assistant"],
  },
  problem: {
    eyebrow: "The problem",
    title: "Freight runs on too many tabs.",
    intro:
      "Loads on one screen, dispatch in a spreadsheet, paperwork in an inbox and answers in somebody's head. Every handoff between them is a chance to lose time, money or a load.",
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
    eyebrow: "The platform",
    title: "Three tools that used to be three tabs.",
    intro:
      "Trukkings connects them around one record for every load, driver and truck, so what you learn in one step carries into the next.",
    items: [
      {
        title: "Freight marketplace",
        text: "Find loads that suit your equipment, lanes and schedule, and post freight you need moved. Shippers and brokers reach capacity. Carriers reach work.",
        points: ["Search and filter by equipment, lane and timing", "Post loads and review interested carriers", "Clear terms before anyone commits"],
        href: "/marketplace",
        tag: "01",
      },
      {
        title: "Operations & TMS",
        text: "Plan, dispatch and track every load from booking to paperwork. One record for each load, driver and truck, available to the people who need it.",
        points: ["Dispatch board for loads, drivers and equipment", "Load status from booked to delivered", "Documents attached to the load they belong to"],
        href: "/operations",
        tag: "02",
      },
      {
        title: "AI freight assistant",
        text: "Ask in plain language. The assistant reads your loads, drivers and documents, answers operational questions and drafts the routine work, with you making the final call.",
        points: ["Answers grounded in your own records", "Drafts messages and summaries for review", "Flags what's missing before it becomes a problem"],
        href: "/ai-assistant",
        tag: "03",
      },
    ],
  },
  lifecycle: {
    eyebrow: "How it works",
    title: "From a load on the board to a closed-out trip.",
    intro:
      "The same flow works whether you run one truck or a fleet, and whether you are moving freight or tendering it.",
  },
  who: {
    eyebrow: "Who it's for",
    title: "Built for everyone on the load.",
    intro: "Freight only moves when carriers, drivers, shippers and brokers can work from the same picture.",
    items: [
      {
        title: "Carriers & fleets",
        text: "Fill trucks, dispatch with confidence and keep every load's records in one place as the fleet grows.",
        href: "/solutions/carriers",
      },
      {
        title: "Owner-operators & drivers",
        text: "Find work that fits your truck and your schedule, and keep your own trips and paperwork organized.",
        href: "/solutions/owner-operators",
      },
      {
        title: "Shippers & brokers",
        text: "Post freight, reach capable carriers and follow each shipment without a trail of calls and emails.",
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
  cta: {
    title: "Be one of the first on the platform.",
    text: "We're onboarding a small number of carriers, drivers, shippers and brokers. Tell us how you move freight and we'll be in touch.",
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
