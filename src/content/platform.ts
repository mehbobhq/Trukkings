export const platformPage = {
  meta: {
    title: "Platform",
    description:
      "One record for every load, driver and truck, shared by a freight marketplace, operations software and an AI assistant.",
  },
  hero: {
    eyebrow: "Platform",
    title: "One load. One record. Three tools working together.",
    lede: "Trukkings connects the freight marketplace, carrier operations and an AI assistant around a single record for every load, driver and truck. Nothing is retyped, and nothing lives only in someone's inbox.",
    actions: [
      { label: "Get early access", href: "/contact", variant: "primary" },
      { label: "See how it works", href: "/how-it-works", variant: "ghost" },
    ],
  },
  shared: {
    eyebrow: "The shared record",
    title: "Everything points at the same facts.",
    intro:
      "The marketplace, the dispatch board and the assistant all read from the same records. Change a detail once and everyone who needs it sees it.",
    items: [
      { title: "Loads", text: "Lane, equipment, timing, requirements, terms and status, from the first listing to close-out." },
      { title: "Drivers", text: "Who they are, what they can haul, when they are available and what their trips look like." },
      { title: "Equipment", text: "Trucks and trailers, their type and capacity, and where they are committed." },
      { title: "Documents", text: "Confirmations, delivery proof and other paperwork, attached to the load they belong to." },
      { title: "People & companies", text: "Carriers, shippers, brokers and contacts, so every load has a clear counterpart." },
      { title: "History", text: "What changed, who changed it and when, so records stay reviewable." },
    ],
  },
  compare: {
    eyebrow: "Why one platform",
    title: "What changes when it's all connected.",
    rows: [
      { label: "Finding freight", before: "Separate boards, calls and messages", after: "A marketplace built on the same records as dispatch" },
      { label: "Dispatching", before: "Spreadsheets and group chats", after: "One board for loads, drivers and trucks" },
      { label: "Paperwork", before: "Email threads and phone photos", after: "Documents attached to the load" },
      { label: "Getting answers", before: "Ask a colleague or dig through files", after: "Ask the assistant, with sources shown" },
      { label: "Tracking changes", before: "Nobody is sure who changed what", after: "A reviewable history on every record" },
    ],
  },
  start: {
    eyebrow: "Start small",
    title: "Use one piece, or all three.",
    intro: "You don't have to switch everything at once. Most teams begin with the part that hurts most and add the rest when it makes sense.",
    items: [
      { title: "Start with the marketplace", text: "If your biggest problem is finding loads or finding carriers.", href: "/marketplace" },
      { title: "Start with operations", text: "If dispatch, paperwork and records are where the time goes.", href: "/operations" },
      { title: "Start with the assistant", text: "If you mostly need faster answers from the records you already keep.", href: "/ai-assistant" },
    ],
  },
};

export const marketplacePage = {
  meta: {
    title: "Freight marketplace",
    description:
      "Find loads that fit your equipment, lanes and schedule, or post freight and review interested carriers, with clear terms before anyone commits.",
  },
  hero: {
    eyebrow: "Freight marketplace",
    title: "Find the right load. Or the right carrier.",
    lede: "A marketplace where loads and capacity meet, with the details that decide a booking stated up front. When a load is booked, it flows straight into dispatch.",
    actions: [
      { label: "Get early access", href: "/contact", variant: "primary" },
      { label: "See operations", href: "/operations", variant: "ghost" },
    ],
  },
  sides: {
    eyebrow: "Two sides of one load",
    title: "Built for the people who haul and the people who ship.",
    items: [
      {
        title: "For carriers and drivers",
        text: "Spend less time searching and more time hauling.",
        points: [
          "Filter by equipment, lane, load type and timing",
          "Save searches and get alerts for loads that fit",
          "See pickup and delivery windows, requirements and payment terms before you commit",
          "Book and hand the load straight to your dispatch board",
        ],
      },
      {
        title: "For shippers and brokers",
        text: "Move freight without a trail of calls and emails.",
        points: [
          "Post a load with the details carriers need",
          "Review interested carriers side by side",
          "Agree terms and confirm the booking in one place",
          "Follow the shipment and keep its documents with it",
        ],
      },
    ],
  },
  features: {
    eyebrow: "What you get",
    title: "The details that decide a booking, in plain sight.",
    items: [
      { title: "Filters that match real needs", text: "Equipment type, lanes, load type, weight, timing and requirements, so results fit before you open them." },
      { title: "Saved searches and alerts", text: "Describe the freight you want once and hear about matches as they appear." },
      { title: "Clear load details", text: "Pickup and delivery windows, handling needs, requirements and payment terms are stated up front." },
      { title: "Post in minutes", text: "A guided form captures what carriers need to know, and repeat lanes can be reused." },
      { title: "Compare interested carriers", text: "See who is interested and what they offer, then choose with the full picture." },
      { title: "Confirm and book", text: "Terms are agreed and recorded in the platform, then the load moves on to dispatch." },
    ],
  },
  steps: {
    eyebrow: "How a booking works",
    title: "From listing to dispatch in four steps.",
    items: [
      { title: "Post or search", text: "Shippers and brokers post a load. Carriers search or get alerted when one fits." },
      { title: "Show interest", text: "Carriers respond with availability and terms. Posters review responses together." },
      { title: "Agree terms", text: "Rate, timing and requirements are confirmed and recorded on the load." },
      { title: "Book and hand off", text: "The booked load appears on the carrier's dispatch board with its details attached." },
    ],
  },
  connected: {
    eyebrow: "Why it's different",
    title: "A marketplace that doesn't end at the booking.",
    text: "Most boards stop when the load is booked, and everything after that is retyped somewhere else. In Trukkings the booked load carries its details, terms and documents straight into operations, so dispatch starts from a complete record.",
    points: ["No retyping load details", "Terms recorded where dispatch can see them", "One thread of history from listing to close-out"],
  },
};

export const operationsPage = {
  meta: {
    title: "Operations & TMS",
    description:
      "Plan, dispatch and track every load from booking to paperwork, with one record for each load, driver and truck.",
  },
  hero: {
    eyebrow: "Operations & TMS",
    title: "Run every load from booking to paperwork.",
    lede: "Plan, dispatch and track in one place. Each load, driver and truck has a single record that the right people can see, and the paperwork stays with the load.",
    actions: [
      { label: "Get early access", href: "/contact", variant: "primary" },
      { label: "Meet the assistant", href: "/ai-assistant", variant: "ghost" },
    ],
  },
  features: {
    eyebrow: "What you get",
    title: "Everything dispatch needs on one screen.",
    items: [
      { title: "Dispatch board", text: "See loads, drivers and trucks together. Assign, reassign and spot gaps without switching tools." },
      { title: "Driver and equipment records", text: "Who can haul what, when they are free and what each truck is committed to." },
      { title: "Load status, start to finish", text: "Every load moves through clear stages from booked to closed out, visible to the people who need it." },
      { title: "Documents on the load", text: "Confirmations, delivery proof and other paperwork are attached to the load, not scattered across inboxes." },
      { title: "Schedule checks", text: "Conflicts and gaps are flagged as you plan, so a double-booked driver is caught before pickup." },
      { title: "Billing-ready records", text: "When a load is closed out, its details and documents are together and ready for your invoicing process." },
    ],
  },
  board: {
    eyebrow: "The dispatch board",
    title: "See the whole operation at a glance.",
    text: "Every load sits in a column that matches its stage. Open a card to see the driver, the truck, the terms and the documents, and move it forward when the work is done.",
    points: ["Loads, drivers and trucks in one view", "Missing documents shown on the card", "Everyone works from the same status"],
  },
  stages: {
    eyebrow: "A load's life",
    title: "Six stages. No guessing where a load stands.",
    items: [
      { title: "Booked", text: "The load is confirmed and waiting for assignment." },
      { title: "Assigned", text: "A driver and truck are matched and the schedule is set." },
      { title: "Dispatched", text: "The driver has the details and is on the way to pickup." },
      { title: "In transit", text: "Freight is moving and updates are recorded." },
      { title: "Delivered", text: "Delivery is complete and proof is collected." },
      { title: "Closed out", text: "Records and documents are complete and ready for billing." },
    ],
  },
  stop: {
    eyebrow: "What you stop doing",
    title: "Less retyping. Less chasing. Fewer side spreadsheets.",
    items: [
      { title: "Retyping load details", text: "Booked loads arrive with their details, so dispatch starts from a complete record." },
      { title: "Chasing paperwork", text: "Documents attach to the load and missing ones are flagged early." },
      { title: "Keeping parallel spreadsheets", text: "The board is the record, so there is nothing to reconcile at the end of the week." },
    ],
  },
};

export const assistantPage = {
  meta: {
    title: "AI freight assistant",
    description:
      "An AI assistant that answers operational questions from your own loads, drivers and documents, drafts routine work and flags what's missing, with people in control.",
  },
  hero: {
    eyebrow: "AI freight assistant",
    title: "Ask a question. Get an answer from your own records.",
    lede: "The Trukkings assistant reads your loads, drivers, trucks and documents. It answers in plain language, drafts the routine work and flags what's missing, and you stay in control of every change.",
    actions: [
      { label: "Get early access", href: "/contact", variant: "primary" },
      { label: "Read the FAQ", href: "/faq", variant: "ghost" },
    ],
  },
  does: {
    eyebrow: "What it does",
    title: "The routine questions and drafts, handled.",
    items: [
      { title: "Answers operational questions", text: "Who is free Thursday? What is still missing on this load? Ask in your own words and get an answer with its sources." },
      { title: "Suggests matches", text: "Finds loads that fit a truck and driver, and notes what each one needs." },
      { title: "Flags what's missing", text: "Spots absent documents, schedule conflicts and unclear terms before they cause a problem." },
      { title: "Drafts messages and summaries", text: "Prepares updates, load summaries and handoff notes for you to review and send." },
      { title: "Summarizes a load or a trip", text: "Pulls the key facts from a load's record into a short, readable summary." },
      { title: "Prepares checklists", text: "Lists the paperwork and steps a load still needs, so nothing is a surprise at pickup or delivery." },
    ],
  },
  control: {
    eyebrow: "Human in control",
    title: "It suggests. You decide.",
    intro: "The assistant is built to be checked, not trusted blindly. Every answer shows where it came from, and nothing changes without a person approving it.",
    steps: [
      { title: "You ask", text: "In plain language, from anywhere in the platform." },
      { title: "It reads your records", text: "Loads, drivers, trucks and documents you have access to." },
      { title: "It answers or proposes", text: "With the sources it used and any gaps it found." },
      { title: "You review", text: "Accept, edit or ignore. Nothing is applied on its own." },
      { title: "The change is recorded", text: "Approved changes appear in the record's history." },
    ],
  },
  wont: {
    eyebrow: "Guardrails",
    title: "What it will never do.",
    items: [
      { title: "Change records without approval", text: "Edits are proposals until a person accepts them." },
      { title: "Send messages on its own", text: "Drafts wait for you to review and send." },
      { title: "Hide uncertainty", text: "If information is missing or conflicting, it says so instead of guessing." },
      { title: "Invent a source", text: "Answers point to real records, and if there isn't one, it tells you." },
    ],
  },
  examples: {
    eyebrow: "Examples",
    title: "What people ask, by role.",
    groups: [
      {
        title: "Dispatchers",
        questions: ["Which drivers can cover tomorrow's pickup?", "What is still missing on this load?", "Summarize today's deliveries for the owner."],
      },
      {
        title: "Owner-operators",
        questions: ["What loads fit my truck next week?", "Which of my trips are missing paperwork?", "What did I haul last month?"],
      },
      {
        title: "Shippers and brokers",
        questions: ["Which carriers have shown interest in my load?", "Where is this shipment now?", "Draft an update for the receiver."],
      },
    ],
  },
  chat: [
    { from: "you", text: "What's still missing on the load for tomorrow morning?" },
    {
      from: "ai",
      text: "Delivery proof isn't needed yet, but the signed confirmation hasn't been uploaded and the driver's schedule overlaps with a service visit. I can draft a note to the shipper and suggest another driver. Want me to?",
      sources: ["Load record", "Documents", "Driver schedule"],
    },
    { from: "you", text: "Draft the note first." },
    {
      from: "ai",
      text: "Drafted for your review. I haven't sent anything.",
      sources: ["Load record"],
    },
  ],
};
