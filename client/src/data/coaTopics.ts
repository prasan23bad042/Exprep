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
  {
    id: '4',
    title: '4. Pipelining & Instruction-level Parallelism',
    topics: [
      { id: 'pipelining-concepts', title: 'Concepts of pipelining, pipeline hazards' },
      { id: 'hazard-types', title: 'Structural hazards, data hazards, control hazards' },
      { id: 'hazard-resolution', title: 'Hazard detection and resolution (stalling, forwarding)' },
      { id: 'branch-prediction', title: 'Branch prediction (static, dynamic)' },
      { id: 'superscalar', title: 'Superscalar, out-of-order execution (introduction)' }
    ]
  },
  {
    id: '5',
    title: '5. Memory System Organization',
    topics: [
      { id: 'memory-hierarchy', title: 'Memory hierarchy & principles (locality, temporal & spatial)' },
      { id: 'cache-memory', title: 'Cache memory: mapping techniques, replacement, write policies' },
      { id: 'virtual-memory', title: 'Virtual memory, page tables, TLBs' },
      { id: 'memory-types', title: 'Main memory, secondary storage' },
      { id: 'memory-organization', title: 'Memory interleaving, memory organization, cache coherence' }
    ]
  },
  {
    id: '6',
    title: '6. Input/Output & Bus Systems',
    topics: [
      { id: 'io-fundamentals', title: 'I/O fundamentals: polling, interrupts, DMA' },
      { id: 'bus-structures', title: 'Bus structures, bus arbitration, protocols' },
      { id: 'interfaces', title: 'Interfaces (e.g. PCI, USB, etc.)' },
      { id: 'io-performance', title: 'I/O performance & buffering' }
    ]
  },
  {
    id: '7',
    title: '7. Parallelism & Advanced Topics',
    topics: [
      { id: 'multiprocessor-architectures', title: 'Multiprocessor architectures — shared vs distributed memory' },
      { id: 'interconnection-networks', title: 'Interconnection networks, synchronization' },
      { id: 'vector-processors', title: 'Vector processors, SIMD, MIMD (overview)' },
      { id: 'gpu-architecture', title: 'GPU/TPU architecture' },
      { id: 'emerging-trends', title: 'Emerging trends: multicore, heterogeneous systems' }
    ]
  },
  {
    id: '8',
    title: '8. Case Studies & Quantitative Analysis',
    topics: [
      { id: 'performance-evaluation', title: 'Evaluating tradeoffs (cost, performance, power)' },
      { id: 'amdahls-law', title: 'Amdahl\'s Law' },
      { id: 'case-studies', title: 'Case studies of real processors (ARM, MIPS, etc.)' },
      { id: 'benchmarking', title: 'Benchmarking, workload analysis' }
    ]
  }
];

export const getTopicContent = (lessonId: string, topicId: string) => {
  const unit = coaUnits.find(u => u.id === lessonId);
  const topic = unit?.topics.find(t => t.id === topicId);
  
  if (!topic) return null;

  // Default content structure
  const defaultContent = {
    summary: `This topic covers ${topic.title}. In this section, we'll explore the key concepts, principles, and practical applications related to ${topic.title}.`,
    qa: [
      {
        question: `What is the main concept behind ${topic.title}?`,
        answer: `The main concept involves understanding how ${topic.title} functions within computer architecture. This includes its role, importance, and how it interacts with other system components.`
      },
      {
        question: `Why is ${topic.title} important in computer architecture?`,
        answer: `${topic.title} is crucial because it addresses fundamental aspects of computer system design and performance. Understanding this topic helps in analyzing and optimizing system behavior.`
      },
      {
        question: `How does ${topic.title} impact system performance?`,
        answer: `The implementation of ${topic.title} can significantly affect various performance metrics such as execution time, throughput, and resource utilization.`
      }
    ]
  };

  // Add specific content for certain topics
  const specificContent: Record<string, any> = {
    'function-and-structure': {
      summary: 'The function and structure of a computer system involves understanding the basic components that make up a computer and how they interact. This includes the CPU, memory, I/O devices, and the system bus that connects them all together.',
      qa: [
        {
          question: 'What are the main components of a computer system?',
          answer: 'The main components are the Central Processing Unit (CPU), memory, storage devices, input/output devices, and the system bus that connects all components together.'
        },
        {
          question: 'How do these components interact?',
          answer: 'The CPU fetches instructions from memory, decodes and executes them, and may read from or write to memory or I/O devices as needed. The system bus facilitates this communication between components.'
        },
        {
          question: 'What is the role of the system bus?',
          answer: 'The system bus is a communication system that transfers data between components of a computer system. It consists of data bus, address bus, and control bus, each serving specific purposes in data transfer and control signaling.'
        }
      ]
    },
    'isa': {
      summary: 'Instruction Set Architecture (ISA) defines the interface between the hardware and the software, specifying the instructions that a processor can execute, the registers it can access, and the memory organization.',
      qa: [
        {
          question: 'What is the role of ISA in computer architecture?',
          answer: 'ISA serves as the interface between software and hardware, defining what operations the processor can perform, how memory is accessed, and how the processor communicates with I/O devices.'
        },
        {
          question: 'What are the key components of an ISA?',
          answer: 'Key components include instruction formats, addressing modes, register set, memory organization, and exception handling mechanisms.'
        }
      ]
    },
    'datapath-control-for-singlecycle-cpu': {
      summary: 'The datapath and control unit in a single-cycle CPU work together to execute instructions. The datapath performs the actual operations while the control unit generates the necessary control signals.',
      qa: [
        {
          question: 'What is the role of the control unit in a single-cycle CPU?',
          answer: 'The control unit generates the necessary control signals to coordinate the movement of data through the datapath based on the current instruction being executed.'
        },
        {
          question: 'What are the main components of a CPU datapath?',
          answer: 'The main components include the instruction memory, register file, ALU, data memory, program counter, and various multiplexers and control lines that connect these components.'
        }
      ]
    },
    'pipelining-concepts': {
      summary: 'Pipelining is a technique used in computer processors to improve instruction throughput by overlapping the execution of multiple instructions. It divides the instruction execution into several stages that can operate concurrently.',
      qa: [
        {
          question: 'What is the basic concept of pipelining?',
          answer: 'Pipelining breaks down instruction execution into multiple stages, allowing multiple instructions to be processed simultaneously, with each instruction at a different stage of completion.'
        },
        {
          question: 'What are the common pipeline stages in a MIPS processor?',
          answer: 'The five classic pipeline stages are: Instruction Fetch (IF), Instruction Decode (ID), Execute (EX), Memory Access (MEM), and Write Back (WB).'
        }
      ]
    },
    'cache-memory': {
      summary: 'Cache memory is a small, fast memory that stores frequently accessed data and instructions to reduce the average time to access data from the main memory.',
      qa: [
        {
          question: 'What are the levels of cache memory?',
          answer: 'Modern processors typically have three levels: L1 (fastest, smallest), L2 (medium speed and size), and L3 (largest, slowest but still faster than main memory).'
        },
        {
          question: 'What is cache hit and cache miss?',
          answer: 'A cache hit occurs when the requested data is found in the cache, while a cache miss occurs when the data must be fetched from the next level of memory hierarchy.'
        }
      ]
    }
  };

  // Return specific content if available, otherwise return default content
  const content = specificContent[topicId] || defaultContent;
  
  return {
    ...topic,
    ...content
  };
};
