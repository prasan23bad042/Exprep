export const civicsUnits = [
  {
    id: '1',
    title: 'Unit 1: Indian Constitution',
    summary: 'The Indian Constitution, adopted in 1950, is the supreme law of the land, providing a framework for governance, rights, and duties. It defines the structure of the central and state governments, distribution of powers, and fundamental rights and duties of citizens. Principles such as democracy, secularism, and equality ensure justice and liberty. Citizenship laws, official languages, and procedures for amendments maintain legal and social order. The Constitution reflects India\'s diversity and commitment to participatory governance.',
    topics: [
      { id: 'making-of-constitution', title: 'Making of the Constitution' },
      { id: 'salient-features', title: 'Salient Features of the Constitution' },
      { id: 'fundamental-rights', title: 'Fundamental Rights' },
      { id: 'fundamental-duties', title: 'Fundamental Duties' },
      { id: 'directive-principles', title: 'Directive Principles of State Policy' },
      { id: 'citizenship', title: 'Citizenship' },
      { id: 'amendments', title: 'Constitutional Amendments' }
    ]
  },
  {
    id: '2',
    title: 'Unit 2: Central Government',
    summary: 'The central government comprises the Executive, Legislature, and Judiciary. The President is the constitutional head, while real executive powers rest with the Prime Minister and Council of Ministers. Parliament, with the Lok Sabha and Rajya Sabha, makes laws, approves budgets, and oversees the executive. The Supreme Court interprets the Constitution, protects rights, and ensures justice. The central government coordinates defense, foreign affairs, and national policies to maintain stability and development.',
    topics: [
      { id: 'president', title: 'The President of India' },
      { id: 'prime-minister', title: 'Prime Minister and Council of Ministers' },
      { id: 'parliament', title: 'Parliament: Lok Sabha and Rajya Sabha' },
      { id: 'law-making-process', title: 'Law-Making Process' },
      { id: 'supreme-court', title: 'The Supreme Court' },
      { id: 'functions-of-central-govt', title: 'Functions of Central Government' }
    ]
  },
  {
    id: '3',
    title: 'Unit 3: State Government',
    summary: 'The state government mirrors the central system with a Governor as constitutional head, Chief Minister and Council of Ministers as executive, and a State Legislature for law-making. The High Court ensures justice at the state level. Local self-government institutions like Panchayats and municipalities promote decentralization and citizen participation. State governments handle education, health, transport, and regional development, complementing central policies while addressing local needs.',
    topics: [
      { id: 'governor', title: 'The Governor' },
      { id: 'chief-minister', title: 'Chief Minister and Council of Ministers' },
      { id: 'state-legislature', title: 'State Legislature' },
      { id: 'high-court', title: 'High Court' },
      { id: 'local-self-government', title: 'Local Self-Government' },
      { id: 'panchayati-raj', title: 'Panchayati Raj System' },
      { id: 'municipalities', title: 'Municipalities' }
    ]
  },
  {
    id: '4',
    title: 'Unit 4: India\'s Foreign Policy',
    summary: 'India\'s foreign policy aims to maintain sovereignty, security, and development while promoting peaceful relations. Principles like non-alignment, Panchsheel, and cooperation guide its global engagement. India actively participates in regional and international organizations such as SAARC, UN, and G20. Key priorities include fostering trade, addressing global challenges, and maintaining strategic relations with neighboring and major powers.',
    topics: [
      { id: 'objectives-foreign-policy', title: 'Objectives of Foreign Policy' },
      { id: 'non-alignment', title: 'Non-Alignment Movement' },
      { id: 'panchsheel', title: 'Panchsheel Principles' },
      { id: 'international-organizations', title: 'India and International Organizations' },
      { id: 'regional-cooperation', title: 'Regional Cooperation (SAARC, BIMSTEC)' }
    ]
  },
  {
    id: '5',
    title: 'Unit 5: India\'s International Relations',
    summary: 'India interacts with the world through diplomacy, trade, and multilateral organizations. It works with the UN, WTO, IMF, and regional blocs to promote peace and development. Relations with neighbors (Pakistan, China, Bangladesh, Sri Lanka) focus on cooperation, security, and conflict resolution. India\'s growing role in global affairs includes contributions to peacekeeping, climate action, and sustainable development initiatives, reflecting its emergence as a responsible global player.',
    topics: [
      { id: 'india-and-un', title: 'India and the United Nations' },
      { id: 'relations-with-neighbors', title: 'Relations with Neighboring Countries' },
      { id: 'india-and-major-powers', title: 'Relations with Major Powers' },
      { id: 'economic-diplomacy', title: 'Economic Diplomacy and Trade' },
      { id: 'global-challenges', title: 'India\'s Role in Addressing Global Challenges' }
    ]
  }
];

export const getTopicContent = (lessonId: string, topicId: string) => {
  const unit = civicsUnits.find(u => u.id === lessonId);
  const topic = unit?.topics.find(t => t.id === topicId);
  
  if (!topic) return null;

  return {
    ...topic,
    summary: unit?.summary || `This topic covers ${topic.title}.`,
    unitTitle: unit?.title || ''
  };
};
