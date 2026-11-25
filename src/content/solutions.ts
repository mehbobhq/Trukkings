export const solutionsIndex = {
  meta: {
    title: "Solutions",
    description: "How carriers, owner-operators, drivers, shippers and brokers use Trukkings.",
  },
  hero: {
    eyebrow: "Solutions",
    title: "One platform, shaped around how you work.",
    lede: "Carriers, drivers, shippers and brokers each see a different slice of the same load. Choose your role to see how Trukkings fits.",
  },
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
  ],
  together: {
    eyebrow: "Better together",
    title: "Both sides of the load on the same page.",
    text: "When the carrier and the shipper or broker work in the same platform, the load carries its details, terms and documents from one side to the other. Fewer calls, fewer misunderstandings, one record.",
  },
};

export type Solution = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string };
  challenges: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  helps: { eyebrow: string; title: string; items: { title: string; text: string; href?: string }[] };
  week: { eyebrow: string; title: string; intro: string; items: { title: string; text: string }[] };
  start: { eyebrow: string; title: string; items: { title: string; text: string; href: string }[] };
  chat: { from: string; text: string; sources?: string[] }[];
};

export const carriers: Solution = {
  meta: {
    title: "For carriers & fleets",
    description:
      "Keep trucks full and the whole operation in view: find freight that fits, dispatch from one board and keep every load's records together.",
  },
  hero: {
    eyebrow: "For carriers & fleets",
    title: "Keep trucks full and the whole operation in view.",
    lede: "Find freight that fits your fleet, dispatch from one board and keep every load's records together, whether you run five trucks or five hundred.",
  },
  challenges: {
    eyebrow: "What's hard today",
    title: "The truck is rarely the bottleneck.",
    items: [
      { title: "Information in too many places", text: "Loads, drivers and trucks are tracked in different tools, so every decision starts with a search." },
      { title: "Paperwork after every trip", text: "Documents trickle in late, and someone has to chase each one before a load can be closed out." },
      { title: "Dispatch from memory", text: "Who is free, who can haul what and what is committed often lives in a dispatcher's head or a group chat." },
    ],
  },
  helps: {
    eyebrow: "How Trukkings helps",
    title: "From finding the load to closing it out.",
    items: [
      { title: "Find freight that fits your fleet", text: "Search by equipment, lane and timing, save searches and get alerted to good matches.", href: "/marketplace" },
      { title: "Dispatch from one board", text: "Loads, drivers and trucks together, with conflicts flagged as you plan.", href: "/operations" },
      { title: "Know what's missing before pickup", text: "The assistant checks a load's record and tells you what still needs attention.", href: "/ai-assistant" },
      { title: "Keep every load's records together", text: "Terms, status and documents live on the load, ready for billing." },
      { title: "Grow without growing the mess", text: "The same board and records work as you add drivers, trucks and people." },
      { title: "Give owners and managers a clear picture", text: "Everyone sees the same status instead of asking for updates." },
    ],
  },
  week: {
    eyebrow: "A typical week",
    title: "How a dispatch team might use it.",
    intro: "An example of how the pieces fit together over a week.",
    items: [
      { title: "Start of week: plan", text: "Review open loads and available capacity, save searches for lanes you want to run, and let the assistant list loads that fit idle trucks." },
      { title: "Midweek: dispatch and track", text: "Assign drivers, watch loads move across the board, and handle exceptions as they appear." },
      { title: "End of week: close out", text: "Check which loads are missing paperwork, close out the complete ones and hand clean records to billing." },
    ],
  },
  start: {
    eyebrow: "Where to start",
    title: "Begin with the part that hurts most.",
    items: [
      { title: "Dispatch is the pain", text: "Start with the operations board and bring your current loads across.", href: "/operations" },
      { title: "Finding freight is the pain", text: "Start with the marketplace and send booked loads to your board when you're ready.", href: "/marketplace" },
      { title: "Answers are the pain", text: "Start with the assistant on top of the records you already keep.", href: "/ai-assistant" },
    ],
  },
  chat: [
    { from: "you", text: "Which drivers can cover tomorrow's early pickup?" },
    {
      from: "ai",
      text: "Two drivers are free and hold the right equipment. One has a long trip ending late tonight, so I'd lean toward the other. Want me to assign them and draft the details for the driver?",
      sources: ["Driver records", "Dispatch board"],
    },
  ],
};

export const ownerOperators: Solution = {
  meta: {
    title: "For owner-operators & drivers",
    description:
      "Find loads that fit your truck and schedule, and keep your own trips and paperwork organized in one place.",
  },
  hero: {
    eyebrow: "For owner-operators & drivers",
    title: "Find work that fits your truck. Keep your paperwork in order.",
    lede: "Search for loads that match your equipment and lanes, keep every trip and document in one place, and ask the assistant instead of digging through your phone.",
  },
  challenges: {
    eyebrow: "What's hard today",
    title: "You run a business and drive it too.",
    items: [
      { title: "Hours lost searching for loads", text: "Finding the right freight takes calls, scrolling and luck, often at the end of a long day." },
      { title: "Paperwork that piles up", text: "Receipts, confirmations and delivery proof end up in photos and folders you hope you can find later." },
      { title: "A schedule in your head", text: "What is booked, what is open and what each trip paid are details you have to keep track of yourself." },
    ],
  },
  helps: {
    eyebrow: "How Trukkings helps",
    title: "Less admin, more time on the road.",
    items: [
      { title: "Loads that fit your truck", text: "Filter by equipment, lane and timing, and save searches so good matches come to you.", href: "/marketplace" },
      { title: "Trips and documents in one place", text: "Each load keeps its terms and paperwork, ready when you need them.", href: "/operations" },
      { title: "Your schedule at a glance", text: "See what is booked and what is open without keeping it all in your head." },
      { title: "Ask instead of searching", text: "\"What did I haul last month?\" or \"Which trips are missing paperwork?\" get answers from your own records.", href: "/ai-assistant" },
      { title: "Clean records for brokers and shippers", text: "Complete load records make you easier to work with and easier to pay." },
      { title: "Start alone, grow into a fleet", text: "The same tools work as you add a truck or a driver." },
    ],
  },
  week: {
    eyebrow: "A typical week",
    title: "How an owner-operator might use it.",
    intro: "An example of how the pieces fit together over a week.",
    items: [
      { title: "Before the week: find loads", text: "Check saved searches and alerts for loads that fit your truck and your lanes, and book what works." },
      { title: "On the road: keep it simple", text: "See the details and terms for each trip and upload documents as you go, so nothing waits until the weekend." },
      { title: "After the week: tidy up", text: "Ask the assistant what is missing, close out complete trips and keep a record you can trust." },
    ],
  },
  start: {
    eyebrow: "Where to start",
    title: "Begin with the part that saves you the most time.",
    items: [
      { title: "Finding loads", text: "Set up a saved search and let matches come to you.", href: "/marketplace" },
      { title: "Keeping records", text: "Put your current trips and paperwork on the load record.", href: "/operations" },
      { title: "Getting answers", text: "Ask the assistant about your trips and schedule.", href: "/ai-assistant" },
    ],
  },
  chat: [
    { from: "you", text: "What loads fit my truck next week?" },
    {
      from: "ai",
      text: "Here are loads for your equipment on lanes you've run before. Two have pickup windows that clash with your booked trip on Tuesday, so I've marked those.",
      sources: ["Marketplace", "Your trips"],
    },
  ],
};

export const shippersBrokers: Solution = {
  meta: {
    title: "For shippers & brokers",
    description:
      "Post freight, review interested carriers and follow each shipment, with documents and updates kept on the load.",
  },
  hero: {
    eyebrow: "For shippers & brokers",
    title: "Post freight and reach capable carriers without the trail of calls.",
    lede: "Describe the load once, see who is interested, agree terms in one place and follow the shipment to delivery with its documents attached.",
  },
  challenges: {
    eyebrow: "What's hard today",
    title: "Moving freight shouldn't take this many messages.",
    items: [
      { title: "Phone and email tag", text: "Finding a carrier and agreeing details often takes a chain of calls, texts and emails." },
      { title: "Unclear status", text: "Where is it, is it on time and has it been delivered? Answers depend on who you ask." },
      { title: "Documents everywhere", text: "Confirmations and delivery proof are scattered, which makes follow-up and billing harder than it should be." },
    ],
  },
  helps: {
    eyebrow: "How Trukkings helps",
    title: "From posting to proof of delivery.",
    items: [
      { title: "Post a load in minutes", text: "A guided form captures what carriers need to know, and repeat lanes can be reused.", href: "/marketplace" },
      { title: "Review interested carriers", text: "See who responded and what they offer, side by side.", href: "/marketplace" },
      { title: "Follow each shipment", text: "Status updates through each stage, visible to the people who need them.", href: "/operations" },
      { title: "Documents stay with the load", text: "Confirmations and delivery proof are attached, not hunted down." },
      { title: "One thread per load", text: "Questions and updates stay with the load instead of across inboxes." },
      { title: "Ask the assistant", text: "\"Where is this shipment now?\" gets an answer from the load's record.", href: "/ai-assistant" },
    ],
  },
  week: {
    eyebrow: "A typical week",
    title: "How a broker might use it.",
    intro: "An example of how the pieces fit together over a week.",
    items: [
      { title: "Post and review", text: "Post the week's loads, reuse repeat lanes and review the carriers who respond." },
      { title: "Confirm and monitor", text: "Agree terms, confirm bookings and watch each load move through its stages." },
      { title: "Close and follow up", text: "Check delivery proof, resolve gaps and keep a clean record of each completed load." },
    ],
  },
  start: {
    eyebrow: "Where to start",
    title: "Begin with your next load.",
    items: [
      { title: "Post a load", text: "See how interested carriers respond and compare them.", href: "/marketplace" },
      { title: "Track shipments", text: "Follow loads and their documents in one place.", href: "/operations" },
      { title: "Ask about a load", text: "Let the assistant answer status questions from the record.", href: "/ai-assistant" },
    ],
  },
  chat: [
    { from: "you", text: "Which carriers have shown interest in my load?" },
    {
      from: "ai",
      text: "Three carriers responded. Two meet your equipment and timing requirements and one has a pickup window that starts later than you asked. Want a side-by-side comparison?",
      sources: ["Load listing", "Carrier responses"],
    },
  ],
};
