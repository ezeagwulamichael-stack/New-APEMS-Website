/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Testimonial, FAQItem, Sector, MetricItem, WhyChooseCard, ParticipationMode, ProcessStep } from "./types";

import electronicVotingPhone from "./assets/images/electronic_voting_phone_1784501726743.jpg";
import boardroomProxyMeeting from "./assets/images/boardroom_proxy_meeting_1784501739000.jpg";
import votingKeypadDelegate from "./assets/images/voting_keypad_delegate_1784501752863.jpg";
import audienceTabletUser from "./assets/images/audience_tablet_user_1784501763128.jpg";

export const metrics: MetricItem[] = [
  { value: "100+", label: "EVENTS MANAGED" },
  { value: "50k+", label: "PARTICIPANTS SERVED" },
  { value: "5+", label: "YEARS OF EXPERIENCE" },
  { value: "99.5%", label: "SYSTEM UPTIME" },
  { value: "97%", label: "CUSTOMER SATISFACTION" },
];

export const clientLogos = [
  { name: "UBA", type: "text", logo: "UBA" },
  { name: "Transcorp", type: "text", logo: "Transcorp" },
  { name: "VFD Group", type: "text", logo: "VFD Group" },
  { name: "Afriland Properties", type: "text", logo: "Afriland" },
  { name: "Abbey Mortgage Bank", type: "text", logo: "Abbey" },
  { name: "UCAP", type: "text", logo: "UCAP" },
  { name: "BUA Group", type: "text", logo: "BUA Group" }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Aigboje Aig-Imoukhuede",
    role: "President of National Council",
    company: "Nigerian Exchange Group",
    text: "APEMS transformed our annual general meetings completely. The ability to verify thousands of shareholders remotely, aggregate proxy weights automatically, and cast auditable electronic votes in real-time is a regulatory masterpiece.",
    rating: 5,
    initials: "AA"
  },
  {
    id: "test-2",
    name: "Adaeze Nwosu",
    role: "Director of Corporate Affairs",
    company: "Zenith Bank Plc",
    text: "APEMS gave us the enterprise-grade control we needed to manage our AGMs and board elections seamlessly. The live-updating voting percentages and instant compliance certificates were incredibly reassuring for our auditors.",
    rating: 5,
    initials: "AN"
  },
  {
    id: "test-3",
    name: "Oladele Adebayo",
    role: "Company Secretary & Head of Legal",
    company: "VFD Group",
    text: "Our cooperative and shareholder networks span across rural and urban Africa. With APEMS' dual support for smartphones and USSD, we achieved a historic 94% quorum attendance in our last election. Outstanding execution!",
    rating: 5,
    initials: "OA"
  }
];

export const whyChooseCards: WhyChooseCard[] = [
  {
    id: "why-1",
    num: "01",
    title: "Meeting notices via SMS and email",
    description: "Broadcast personalized notifications, schedules, and instant login URLs to thousands of delegates simultaneously.",
    iconName: "message"
  },
  {
    id: "why-2",
    num: "02",
    title: "Secure member registration",
    description: "Ensure complete integrity from point-of-entry using multi-factor credentials, secure OTP tokens, and fast registry lookup.",
    iconName: "shield"
  },
  {
    id: "why-3",
    num: "03",
    title: "Attendance management",
    description: "Monitor and record physical and virtual delegate entries in a centralized dashboard for real-time quorum validation.",
    iconName: "users"
  },
  {
    id: "why-4",
    num: "04",
    title: "Proxy activation & audit",
    description: "Process complex proxy representation workflows seamlessly, including digital validation, allocation of voting rights, and audit logs.",
    iconName: "file-text"
  }
];

export const services: Service[] = [
  {
    id: "registration",
    tabLabel: "Registration & Accreditation",
    title: "Registration & Accreditation",
    description: "Manage delegate registries and verify identities with bank-grade security and zero friction.",
    features: [
      "Meeting notice management via SMS & Email",
      "Online participant registration portal",
      "Dynamic Event ID & secure URL generation",
      "Encrypted QR code / Event identification",
      "Secure attendee authentication & OTP checks",
      "On-site physical accreditation support",
      "Real-time attendance & quorum tracking"
    ],
    metrics: [
      { label: "Total Registered", value: 1482, color: "text-blue-600" },
      { label: "Accredited", value: 848, color: "text-green-600" },
      { label: "Quorum Rate", value: "58%", color: "text-amber-600" }
    ],
    accentColor: "red"
  },
  {
    id: "voting",
    tabLabel: "Electronic Voting & Elections",
    title: "Electronic Voting & Elections",
    description: "Deploy tamper-proof online and hybrid voting systems built for strict regulatory compliance.",
    features: [
      "Real-time immutable audit trail",
      "Weighted voting engine for corporate shareholdings",
      "Multi-criteria resolution voting options",
      "Encrypted ballot casting & end-to-end verification",
      "Instant automated result certification",
      "Biometric & sovereign digital identity verification",
      "Continuous live quorum recalculations"
    ],
    metrics: [
      { label: "Active Resolutions", value: "3 Pending", color: "text-blue-600" },
      { label: "Votes Cast", value: "11,842 Shares", color: "text-green-600" },
      { label: "Electoral Quorum", value: "74.2%", color: "text-purple-600" }
    ],
    accentColor: "red"
  },
  {
    id: "proxy",
    tabLabel: "Proxy Voting",
    title: "Proxy Voting Management",
    description: "Streamline proxy forms upload, automated verification, and instant voting weight calculations.",
    features: [
      "Digital proxy form upload with OCR data reading",
      "Automated registrar verification & database matching",
      "Dual-custody verification workflow for auditors",
      "Instant proxy revocation & override management",
      "Dynamic proxy weight split & multi-proxy assignment",
      "Historic proxy ledger with tamper-proof signatures",
      "Seamless integration with live plenary statistics"
    ],
    metrics: [
      { label: "Proxy Forms Filed", value: 342, color: "text-blue-600" },
      { label: "Verified Cards", value: 339, color: "text-green-600" },
      { label: "Proxy Share Weight", value: "24.8%", color: "text-cyan-600" }
    ],
    accentColor: "red"
  },
  {
    id: "engagement",
    tabLabel: "Stakeholder Engagement",
    title: "Stakeholder Engagement & Plenaries",
    description: "Enhance participant experiences with interactive feeds, moderated Q&As, and clear visual streaming.",
    features: [
      "Moderated Q&A panel with digital speaker queue",
      "Instant live poll creation & broadcast-to-screen",
      "High-speed real-time chat & speaker reactions",
      "Broadcast-quality, ultra-low latency video feed",
      "Speaker request-to-speak queue management",
      "Multi-language support with automatic translation",
      "Interactive noticeboard & live document sharing"
    ],
    metrics: [
      { label: "Live Stream Listeners", value: 1205, color: "text-red-600" },
      { label: "Q&A Submissions", value: 48, color: "text-green-600" },
      { label: "Poll response rate", value: "89.2%", color: "text-indigo-600" }
    ],
    accentColor: "red"
  },
  {
    id: "reporting",
    tabLabel: "Reporting & Analytics",
    title: "Reporting & Statutory Analytics",
    description: "Generate instant, audit-ready certified reports and analytics in multiple legal formats.",
    features: [
      "Official Quorum validation certificates",
      "Electoral audit ledgers with cryptographic timestamps",
      "Participation analytics by location and segment",
      "Instant PDF/Excel export for registrars & SEC",
      "Regulatory compliance auto-matching & stamps",
      "Visual real-time attendance and voting charts",
      "Complete system-level tamper-proof security log"
    ],
    metrics: [
      { label: "Reports Compiled", value: 14, color: "text-emerald-600" },
      { label: "Compliance Score", value: "100%", color: "text-green-600" },
      { label: "Audit Log Status", value: "SEC Approved", color: "text-indigo-600" }
    ],
    accentColor: "red"
  },
  {
    id: "hybrid",
    tabLabel: "Hybrid Event Manage",
    title: "Hybrid Event Management",
    description: "Bridge the gap between physical and digital spaces seamlessly with hardware-software synchronizations.",
    features: [
      "Wireless voting keypad transceiver synchronization",
      "Dual-venue quorum aggregation in real-time",
      "Secure contact/contactless smartcard validation",
      "Offline / SMS / USSD backup voting channels",
      "Multi-operator central event control console",
      "On-site thermal badge printing integration",
      "Coordinated low-latency video and audio streams"
    ],
    metrics: [
      { label: "Keypads Synced", value: 450, color: "text-blue-600" },
      { label: "Smartcards Active", value: 112, color: "text-indigo-600" },
      { label: "USSD Fallbacks", value: "15 Active", color: "text-amber-600" }
    ],
    accentColor: "red"
  }
];

export const participationModes: ParticipationMode[] = [
  {
    id: "mode-1",
    title: "Electronic Voting",
    description: "Participants can securely log in, register, vote on agendas, and pose formal questions during live meetings.",
    iconName: "smartphone",
    imageBg: electronicVotingPhone
  },
  {
    id: "mode-2",
    title: "Proxy Voting",
    description: "Submit verified proxy forms and shareholdings ahead of time, fully integrated with live plenary statistics.",
    iconName: "mail",
    imageBg: boardroomProxyMeeting
  },
  {
    id: "mode-3",
    title: "Voting Keypads",
    description: "Dedicated cryptographic keypad transceivers for physical delegates to record accurate in-room votes.",
    iconName: "dialpad",
    imageBg: votingKeypadDelegate
  },
  {
    id: "mode-4",
    title: "Hybrid Participation",
    description: "Unifies streaming web feeds, mobile applications, SMS/USSD codes, and smartcards in real-time.",
    iconName: "monitor",
    imageBg: audienceTabletUser
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: "proc-1",
    num: "01",
    title: "Everyone Connected",
    tag: "UBIQUITOUS ACCESS",
    description: "Stakeholders can participate regardless of location or device. APEMS provides comprehensive infrastructure supporting smartphones, laptops, standard calls, SMS pipelines, and even remote USSD channels so no shareholder is left behind."
  },
  {
    id: "proc-2",
    num: "02",
    title: "Professional Experiences",
    tag: "ELITE EXECUTION",
    description: "Enhance organizational reputation through efficient and transparent event execution. Streamline credentials, eliminate paper counting, and execute live resolutions flawlessly to show modern transparency to institutional investors."
  },
  {
    id: "proc-3",
    num: "03",
    title: "Transparent Elections",
    tag: "TAMPER PROOF",
    description: "Replace manual voting with secure, auditable digital processes. All votes are timestamped, encrypted, and compiled in real time with comprehensive system logs that satisfy international regulatory audits."
  },
  {
    id: "proc-4",
    num: "04",
    title: "Cost Efficiency",
    tag: "HIGH ROI",
    description: "Reduce administrative burden and optimize event expenditure. Save significantly on physical hall bookings, long-distance transport, printing thousands of physical proxy manuals, and manually tallying paper counts."
  },
  {
    id: "proc-5",
    num: "05",
    title: "Accessibility",
    tag: "FULLY INCLUSIVE",
    description: "Provide inclusive participation through multiple voting channels. Our system accommodates multiple voting channels concurrently, offering specialized accessibility configurations for elderly and remote participants."
  }
];

export const sectors: Sector[] = [
  {
    id: "corp",
    name: "Corporate",
    title: "Listed Companies & Conglomerates",
    description: "Highly regulated Annual and Extraordinary General Meetings (AGMs), corporate elections, board of directors meetings requiring deep registrar synchronization, real-time proxy allocation, and dynamic quorum verification.",
    imageTheme: "corporate"
  },
  {
    id: "sec",
    name: "Security",
    title: "Military, Regulators & Security Agencies",
    description: "Elections and administrative hearings requiring absolute multi-factor cryptographic security, biometric clearance, sealed result registries, and disconnected private-cloud database structures.",
    imageTheme: "security"
  },
  {
    id: "fin",
    name: "Finance",
    title: "Banks, Pension Funds & Asset Managers",
    description: "Shareholder voting on critical fiscal policies, acquisitions, executive board appointments, and risk assessments, backed by detailed reporting structures compliant with central bank guidelines.",
    imageTheme: "finance"
  },
  {
    id: "pub",
    name: "Public Sector",
    title: "Government Assemblies & Agencies",
    description: "Public inquiries, town halls, legislative assemblies, and citizen initiatives seeking feedback with robust geofencing, verified identities, and seamless scaling to handle millions of concurrent participants.",
    imageTheme: "public"
  },
  {
    id: "assoc",
    name: "Associations",
    title: "Professional Associations & Unions",
    description: "National executive elections and annual general meetings for medical, legal, and engineering societies requiring secure membership database cross-checks and instant certificates of return.",
    imageTheme: "associations"
  },
  {
    id: "coop",
    name: "Cooperatives",
    title: "Agricultural & Employee Cooperatives",
    description: "Distributed voting structures for cooperative societies, local credit unions, and trade guilds with simple, high-accessibility mobile and USSD channels that don't require internet connectivity.",
    imageTheme: "cooperatives"
  },
  {
    id: "elec",
    name: "Elections",
    title: "Sovereign & Local Government Bodies",
    description: "High-volume independent electoral boards, municipal council polls, and public referendums with live results broadcasting, strict multi-factor auditing, and compliance tracking.",
    imageTheme: "elections"
  },
  {
    id: "ent",
    name: "Entertainment",
    title: "Public Voting, Awards & Reality Shows",
    description: "Super-scaled television and digital media awards voting requiring high-availability API endpoints, real-time vote capping, fraud-prevention modules, and beautiful live-updating results feeds.",
    imageTheme: "entertainment"
  },
  {
    id: "edu",
    name: "Education",
    title: "Universities, Unions & Student Guilds",
    description: "Governing council elections, student union body polls, and parent-teacher association convocations with integrated student registries and secure digital voting credentials.",
    imageTheme: "education"
  },
  {
    id: "health",
    name: "Health",
    title: "Hospital Boards, Research Groups & Trusts",
    description: "Stakeholder voting for healthcare networks, medical research trusts, and hospital management boards demanding strict patient-identity privacy and encrypted data pathways.",
    imageTheme: "health"
  },
  {
    id: "nonprofit",
    name: "Nonprofit",
    title: "International NGOs, Foundations & Trusts",
    description: "Board convocations and donor-representative voting for developmental organizations requiring transparent financial-audits integration, remote country voting, and multi-currency reporting.",
    imageTheme: "nonprofit"
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of events can APEMS support?",
    answer: "APEMS (Africa Prudential Event Management Solution) is designed to handle high-stakes governance events, such as Annual General Meetings (AGMs), corporate elections, board of directors meetings, extraordinary general meetings (EGMs), trust elections, and large-scale professional association conferences."
  },
  {
    id: "faq-2",
    question: "Does APEMS support hybrid events?",
    answer: "Yes, APEMS is built from the ground up for hybrid events. It integrates physical attendee hardware (such as wireless radio frequency voting keypads and thermal badge printers) with virtual streaming, online registration, and remote browser-based or mobile voting panels in real-time."
  },
  {
    id: "faq-3",
    question: "Can participants vote remotely?",
    answer: "Absolutely. Remote participants can securely log in using single-use unique URLs received via SMS or email, authenticate using OTP tokens, view the live broadcast, and cast their votes directly inside their web browser or mobile application."
  },
  {
    id: "faq-4",
    question: "How secure is the voting process?",
    answer: "The APEMS security architecture includes end-to-end encryption (TLS 1.3), secure multi-factor OTP verification, tokenized voting sessions to prevent duplicate ballot casting, and an unalterable system-level database log. The software complies with SEC regulations, national data protection guidelines, and is regularly audited by independent third-party firms."
  },
  {
    id: "faq-5",
    question: "Does APEMS support proxy voting?",
    answer: "Yes, APEMS has a comprehensive Proxy Management module. Registrars can upload thousands of physical proxy forms, utilize optical character recognition (OCR) and registrar database verification to validate signatures, allocate weighted voting percentages according to shareholding registries, and manage revocations live on the plenary floor."
  },
  {
    id: "faq-6",
    question: "Can non-smartphone users participate?",
    answer: "Yes, this is one of APEMS' core differentiators. Remote participants without smartphones or active internet connections can dial a dedicated, secure USSD code (e.g., *7006#) to check in, view active resolutions, and cast their votes via standard cellular text pipelines."
  },
  {
    id: "faq-7",
    question: "Can reports be exported after events?",
    answer: "Yes, APEMS instantly compiles comprehensive statutory reports immediately following the close of an event. You can download certified attendee lists, quorum certificates, full electoral audit ledgers, resolution voting breakdowns, and system-event logs in Excel, CSV, or PDF formats."
  },
  {
    id: "faq-8",
    question: "Can multiple events be managed simultaneously?",
    answer: "Yes, the enterprise dashboard provides administrators and registrars with a multi-tenant interface to create, monitor, and manage dozens of concurrent physical or virtual meetings safely, with independent database isolation and operator privilege control."
  }
];
