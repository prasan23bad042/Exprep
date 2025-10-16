export const coaUnits = [
  {
    id: '1',
    title: '1. Introduction & Basic Concepts',
    topics: [
      { id: 'function-and-structure', title: 'Function and structure of a computer system' },
      { id: 'isa', title: 'Instruction Set Architecture (ISA) — abstraction, role' },
      { id: 'performance-metrics', title: 'Performance metrics (CPU time, throughput, MIPS, CPI)' },
      { id: 'risc-vs-cisc', title: 'Types of computers: RISC vs CISC' },
      { id: 'addressing-modes', title: 'Addressing modes, instruction formats, instruction set' },
      { id: 'register-organization', title: 'Register organization & operations' }
    ]
  },
  {
    id: '2',
    title: '2. Arithmetic & Logic Unit',
    topics: [
      { id: 'number-systems', title: 'Number systems (signed, unsigned)' },
      { id: 'fixed-point-arithmetic', title: 'Fixed-point arithmetic: addition, subtraction' },
      { id: 'multiplication-algorithms', title: 'Multiplication algorithms (shift-add, Booth)' },
      { id: 'division-algorithms', title: 'Division: restoring, non‑restoring' },
      { id: 'floating-point', title: 'Floating point representation and operations (IEEE 754)' },
      { id: 'alu-design', title: 'ALU design, combinational & sequential logic' }
    ]
  },
  {
    id: '3',
    title: '3. Processor Design & Control',
    topics: [
      { id: 'datapath-control-for-singlecycle-cpu', title: 'Datapath & control for single‑cycle CPU' },
      { id: 'multicycle-cpu', title: 'Multi‑cycle CPU design' },
      { id: 'control-units', title: 'Hardwired control vs microprogrammed control' },
      { id: 'microinstructions', title: 'Microinstruction formats, control memory' },
      { id: 'control-unit-implementation', title: 'Control unit implementation' }
    ]
  },
  // Add more units as needed
];

export const getTopicContent = (lessonId: string, topicId: string) => {
  const unit = coaUnits.find(u => u.id === lessonId);
  const topic = unit?.topics.find(t => t.id === topicId);
  
  if (!topic) return null;
  
  // Mock content - in a real app, this would come from an API
  const mockContent = {
    summary: `This topic covers the ${topic.title}. Detailed information about ${topic.title} would be displayed here.`,
    qa: [
      {
        question: `What is the main concept behind ${topic.title}?`,
        answer: `The main concept involves understanding how ${topic.title} works in computer architecture. This is a placeholder answer and should be replaced with actual content.`
      },
      {
        question: `Why is ${topic.title} important?`,
        answer: `${topic.title} is crucial because it helps in understanding fundamental computer architecture concepts. This is a placeholder answer.`
      }
    ]
  };
  
  return {
    ...topic,
    ...mockContent
  };
};
