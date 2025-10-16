import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const units = [
  {
    title: '1. Introduction & Basic Concepts',
    topics: [
      'Function and structure of a computer system',
      'Instruction Set Architecture (ISA) — abstraction, role',
      'Performance metrics (CPU time, throughput, MIPS, CPI)',
      'Types of computers: RISC vs CISC',
      'Addressing modes, instruction formats, instruction set',
      'Register organization & operations'
    ]
  },
  {
    title: '2. Arithmetic & Logic Unit',
    topics: [
      'Number systems (signed, unsigned)',
      'Fixed-point arithmetic: addition, subtraction',
      'Multiplication algorithms (shift-add, Booth)',
      'Division: restoring, non‑restoring',
      'Floating point representation and operations (IEEE 754)',
      'ALU design, combinational & sequential logic'
    ]
  },
  {
    title: '3. Processor Design & Control',
    topics: [
      'Datapath & control for single‑cycle CPU',
      'Multi‑cycle CPU design',
      'Hardwired control vs microprogrammed control',
      'Microinstruction formats, control memory',
      'Control unit implementation'
    ]
  },
  {
    title: '4. Pipelining & Instruction-level Parallelism',
    topics: [
      'Concepts of pipelining, pipeline hazards',
      'Structural hazards, data hazards, control hazards',
      'Hazard detection and resolution (stalling, forwarding)',
      'Branch prediction (static, dynamic)',
      'Superscalar, out-of-order execution (introduction)'
    ]
  },
  {
    title: '5. Memory System Organization',
    topics: [
      'Memory hierarchy & principles (locality, temporal & spatial)',
      'Cache memory: mapping techniques, replacement, write policies',
      'Virtual memory, page tables, TLBs',
      'Main memory, secondary storage',
      'Memory interleaving, memory organization, cache coherence'
    ]
  },
  {
    title: '6. Input/Output & Bus Systems',
    topics: [
      'I/O fundamentals: polling, interrupts, DMA',
      'Bus structures, bus arbitration, protocols',
      'Interfaces (e.g. PCI, USB, etc.)',
      'I/O performance & buffering'
    ]
  },
  {
    title: '7. Parallelism & Advanced Topics',
    topics: [
      'Multiprocessor architectures — shared vs distributed memory',
      'Interconnection networks, synchronization',
      'Vector processors, SIMD, MIMD (overview)',
      'GPU/TPU architecture',
      'Emerging trends: multicore, heterogeneous systems'
    ]
  },
  {
    title: '8. Case Studies & Quantitative Analysis',
    topics: [
      'Evaluating tradeoffs (cost, performance, power)',
      'Amdahl\'s Law',
      'Case studies of real processors (ARM, MIPS, etc.)',
      'Benchmarking, workload analysis'
    ]
  }
];

export default function ComputerArchitecture() {
  const [expandedUnits, setExpandedUnits] = useState<Record<number, boolean>>({});
  const [, setLocation] = useLocation();

  const toggleUnit = (index: number) => {
    setExpandedUnits(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={() => setLocation('/')}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Courses
      </Button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Computer Organization & Architecture</h1>
        <p className="text-muted-foreground">Comprehensive guide to computer architecture concepts and implementations</p>
      </div>

      <div className="space-y-4">
        {units.map((unit, index) => (
          <Card key={index} className="overflow-hidden">
            <button 
              className="w-full text-left"
              onClick={() => toggleUnit(index)}
            >
              <CardHeader className="py-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{unit.title}</CardTitle>
                  {expandedUnits[index] ? (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </CardHeader>
            </button>
            
            {expandedUnits[index] && (
              <CardContent className="pt-0">
                <ul className="space-y-2 pl-6 list-disc">
                  {unit.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-muted-foreground">
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
