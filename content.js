/* Website text. Edit with editor.html (easy) or by hand. */
const CONTENT = {
  brand: "House of Pri",
  tagline: "A Home for Ambitious Brands.",
  email: "radhekrishnavarma0@gmail.com",                      // e.g. "hello@yourdomain.com" (required for the contact form to work)
  social: [],                     // e.g. [{label:"Instagram", url:"https://instagram.com/yourhandle"}]
  hero: { title: "Your Vision. Our Design.", text: "We create thoughtful digital experiences for ambitious brands.", cta1: "Start a Project", cta2: "Explore Our Work" },
  intro: "House of Pri is a founder-led digital creative studio. We design and build websites for cafés, jewellery and fashion labels, beauty brands, local businesses and independent founders — with clear goals, careful design and straightforward communication.",
  about: [
    "House of Pri is a founder-led creative studio. Every project is shaped directly by Pri, so the person you speak to at the start is the person who guides the work.",
    "Our approach balances three things: creativity that gives a brand its character, usability that makes a site easy to use, and business goals that keep the design useful."
  ],
  founder: { name: "Pri", bio: "[OWNER TO CONFIRM] Write your own introduction here: who you are, what you care about, and how you work with clients." },
  services: [
    { name: "Business Website Design", desc: "A complete multi-page website that presents your business clearly and builds trust with new customers.", items: ["Page structure and design", "Responsive build", "Basic SEO setup"], price: "Price on request [OWNER TO CONFIRM]", cta: "Discuss a website" },
    { name: "Landing Pages", desc: "A focused single page built around one goal, such as a launch, an offer or enquiries.", items: ["Page copy layout", "Responsive build", "Enquiry form"], price: "Price on request [OWNER TO CONFIRM]", cta: "Plan a landing page" },
    { name: "Website Redesign", desc: "A refresh of an existing site so it looks current, loads well and works on every screen.", items: ["Review of the current site", "New design direction", "Responsive optimisation"], price: "Price on request [OWNER TO CONFIRM]", cta: "Request a redesign" },
    { name: "AI-Assisted Website Creation", desc: "Faster drafting and iteration using AI tools, with every page reviewed and refined by a person.", items: ["AI-assisted drafts", "Human design review", "Handover guidance"], price: "Price on request [OWNER TO CONFIRM]", cta: "Ask about this service" },
    { name: "Digital Branding & Creative Design", desc: "Visual direction for your online presence: colour, type and layout that feel like one brand.", items: ["Colour and type direction", "Layout style guide", "Social-ready visuals"], price: "Price on request [OWNER TO CONFIRM]", cta: "Talk branding" }
  ],
  // To show a photo: upload it to an "images" folder on GitHub, then set image: "images/yourfile.jpg" on that project.
  projects: [
    { id: "jewellery", image: "jewellery.svg", title: "Luxury Jewellery Website", cat: "E-commerce Concepts", kind: "Concept", color: "#8A765E", desc: "A concept store layout exploring large product imagery, quiet typography and a simple path to enquiry.", link: "" },
    { id: "cafe", image: "cafe.svg", title: "Premium Café Website", cat: "Business Websites", kind: "Concept", color: "#171717", desc: "A concept site for a neighbourhood café with menu, story and opening hours presented clearly on mobile.", link: "" },
    { id: "skincare", image: "skincare.svg", title: "Skincare Brand Website", cat: "Landing Pages", kind: "Concept", color: "#6b5d4a", desc: "A concept landing page for a skincare line focused on calm layout, ingredients and a single call to action.", link: "" }
  ],
  process: [
    { t: "Discovery & Requirements", d: "We learn about your business, audience and goals." },
    { t: "Design Direction", d: "We agree on look, layout and content structure." },
    { t: "Website Development", d: "We build a responsive, fast website." },
    { t: "Testing & Revisions", d: "We test on phones and desktops and refine with your feedback." },
    { t: "Launch & Handover", d: "We publish the site and show you how to manage it." }
  ],
  why: [
    { t: "Founder-led", d: "You work directly with the person designing your site." },
    { t: "Clear communication", d: "Defined steps, so you always know what comes next." },
    { t: "Designed to be used", d: "Mobile-first, accessible and focused on your goals." }
  ],
  budgets: ["Not sure yet", "Discuss with me", "[OWNER TO CONFIRM — add ranges]"],
  privacy: [
    ["Draft notice", "[OWNER TO CONFIRM] This is a draft template. It has not been legally reviewed. Have it checked for the laws that apply to you before relying on it."],
    ["Information we collect", "Only what you type into the contact form: name, business or brand name, email, project type, optional budget, project description and optional deadline."],
    ["Why we collect it", "To reply to your enquiry and discuss your project. We do not use it for anything else."],
    ["Storage and retention", "[OWNER TO CONFIRM] This site has no database: your enquiry is sent by email through your own email app and is kept in our inbox. State how long you keep enquiries."],
    ["Third-party services", "This page loads fonts from Google Fonts, which may receive your IP address. [OWNER TO CONFIRM] List any other services you add."],
    ["Security", "We limit what we collect and do not store passwords or payment details through this site. No method of transmission is completely secure."],
    ["Your requests", "You can ask to see, correct or delete the information you sent us by emailing the address below."],
    ["Privacy contact", "[OWNER TO CONFIRM] Add the email address for privacy questions."]
  ],
  terms: [
    ["Draft notice", "[OWNER TO CONFIRM] Draft only. Have it reviewed before publishing."],
    ["Service scope", "[OWNER TO CONFIRM] Each project’s scope, deliverables and timeline are agreed in writing before work starts."],
    ["Approvals", "[OWNER TO CONFIRM] Describe how and when you need client sign-off at each stage."],
    ["Revisions", "[OWNER TO CONFIRM] State how many revision rounds are included."],
    ["Payments", "[OWNER TO CONFIRM] State your pricing, deposit and payment schedule."],
    ["Cancellations", "[OWNER TO CONFIRM] State what happens if a project is cancelled."],
    ["Intellectual property", "[OWNER TO CONFIRM] State who owns the final work and when ownership transfers."],
    ["Third-party dependencies", "[OWNER TO CONFIRM] Hosting, domains, plugins and stock assets may be provided by third parties with their own terms."],
    ["Limitation of liability", "[OWNER TO CONFIRM] Have a professional write this section."],
    ["Contact", "[OWNER TO CONFIRM] Add your contact details."]
  ]
};
