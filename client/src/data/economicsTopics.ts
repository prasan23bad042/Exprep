export const economicsUnits = [
  {
    id: '1',
    title: 'Unit 1: Gross Domestic Product and Its Growth',
    summary: 'GDP measures the total value of goods and services produced in a country. India\'s economy is divided into agriculture, industry, and service sectors. GDP growth reflects economic development and employment trends. While services and industry contribute significantly, agriculture remains vital for rural livelihoods. Understanding GDP helps analyze national income, standard of living, and policy-making for sustainable growth.',
    topics: [
      { id: 'concept-of-gdp', title: 'Concept of GDP' },
      { id: 'sectors-of-economy', title: 'Sectors of the Economy' },
      { id: 'primary-sector', title: 'Primary Sector (Agriculture)' },
      { id: 'secondary-sector', title: 'Secondary Sector (Industry)' },
      { id: 'tertiary-sector', title: 'Tertiary Sector (Services)' },
      { id: 'gdp-growth', title: 'GDP Growth and Development' },
      { id: 'employment-trends', title: 'Employment Trends' }
    ]
  },
  {
    id: '2',
    title: 'Unit 2: Globalization and Trade',
    summary: 'Globalization refers to the increasing interconnection of countries in trade, investment, culture, and technology. Organizations like WTO facilitate international trade and economic cooperation. Globalization provides markets for Indian products, foreign investment, and technology transfer. However, it also brings challenges such as job competition, inequality, and cultural changes. India\'s policies balance growth opportunities with social and economic safeguards.',
    topics: [
      { id: 'meaning-of-globalization', title: 'Meaning of Globalization' },
      { id: 'factors-of-globalization', title: 'Factors Driving Globalization' },
      { id: 'wto', title: 'World Trade Organization (WTO)' },
      { id: 'impact-on-india', title: 'Impact of Globalization on India' },
      { id: 'benefits-and-challenges', title: 'Benefits and Challenges' },
      { id: 'india-trade-policy', title: 'India\'s Trade Policy' }
    ]
  },
  {
    id: '3',
    title: 'Unit 3: Food Security and Nutrition',
    summary: 'Food security ensures availability, access, and utilization of adequate food for all. Malnutrition, poverty, and population growth pose challenges. Government initiatives like the Public Distribution System (PDS) and nutrition programs support vulnerable groups. Improving agricultural productivity, promoting balanced diets, and addressing socio-economic disparities are key to achieving food security and a healthy population.',
    topics: [
      { id: 'concept-food-security', title: 'Concept of Food Security' },
      { id: 'dimensions-food-security', title: 'Dimensions of Food Security' },
      { id: 'malnutrition', title: 'Malnutrition and Its Effects' },
      { id: 'pds', title: 'Public Distribution System (PDS)' },
      { id: 'nutrition-programs', title: 'Government Nutrition Programs' },
      { id: 'challenges', title: 'Challenges in Achieving Food Security' }
    ]
  },
  {
    id: '4',
    title: 'Unit 4: Government and Taxes',
    summary: 'The government plays a central role in economic development through fiscal policies, taxation, and public services. Taxes are classified as direct (income, property) and indirect (GST, excise). Efficient tax collection funds infrastructure, education, and healthcare. Tackling tax evasion, black money, and ensuring transparency are essential for fiscal stability and equitable development.',
    topics: [
      { id: 'role-of-government', title: 'Role of Government in Economy' },
      { id: 'fiscal-policy', title: 'Fiscal Policy' },
      { id: 'types-of-taxes', title: 'Types of Taxes' },
      { id: 'direct-taxes', title: 'Direct Taxes' },
      { id: 'indirect-taxes', title: 'Indirect Taxes and GST' },
      { id: 'tax-evasion', title: 'Tax Evasion and Black Money' },
      { id: 'public-expenditure', title: 'Public Expenditure' }
    ]
  },
  {
    id: '5',
    title: 'Unit 5: Industrial Clusters in Tamil Nadu',
    summary: 'Industrial clusters are concentrations of interconnected industries in specific regions that boost production and employment. Tamil Nadu has major clusters in textiles (Coimbatore), automobiles (Chennai), leather (Vellore), and IT (Chennai). Clusters enhance efficiency, innovation, and regional economic growth. Government policies supporting infrastructure, skill development, and investment promote industrialization and attract both domestic and global businesses.',
    topics: [
      { id: 'concept-industrial-clusters', title: 'Concept of Industrial Clusters' },
      { id: 'textile-cluster', title: 'Textile Cluster (Coimbatore)' },
      { id: 'automobile-cluster', title: 'Automobile Cluster (Chennai)' },
      { id: 'leather-cluster', title: 'Leather Cluster (Vellore)' },
      { id: 'it-cluster', title: 'IT Cluster (Chennai)' },
      { id: 'benefits-of-clusters', title: 'Benefits of Industrial Clusters' },
      { id: 'government-support', title: 'Government Support and Policies' }
    ]
  }
];

export const getTopicContent = (lessonId: string, topicId: string) => {
  const unit = economicsUnits.find(u => u.id === lessonId);
  const topic = unit?.topics.find(t => t.id === topicId);
  
  if (!topic) return null;

  return {
    ...topic,
    summary: unit?.summary || `This topic covers ${topic.title}.`,
    unitTitle: unit?.title || ''
  };
};
