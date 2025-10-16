import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const units = [
  {
    title: '1. Introduction to Operating Systems',
    topics: [
      'Definition and Objectives of OS',
      'Functions of OS',
      'OS as Resource Manager',
      'OS Services',
      'Components of OS',
      'OS Architecture (Monolithic, Microkernel, Layered, Modular, Hybrid)',
      'Kernel vs Shell',
      'System Calls',
      'System Programs',
      'User Interface (CLI, GUI)',
      'Booting Process',
      'Types of OS',
      'Batch OS',
      'Time-Sharing OS',
      'Multiprogramming OS',
      'Multitasking OS',
      'Real-Time OS',
      'Distributed OS',
      'Network OS',
      'Mobile OS',
      'Embedded OS',
      'Virtual Machines and Virtualization',
      'System Design Goals',
      'System Structure (User Mode, Kernel Mode)'
    ]
  },
  {
    title: '2. Process Management',
    topics: [
      'Definition of Process',
      'Process States and State Diagram',
      'Process Control Block (PCB)',
      'Process Lifecycle',
      'Process Creation and Termination',
      'Parent and Child Processes',
      'Context Switching',
      'Process Scheduling Concepts',
      'CPU–I/O Burst Cycle',
      'Preemptive vs Non-preemptive Scheduling',
      'Scheduling Criteria',
      'CPU Scheduling Algorithms (FCFS, SJF, SRTF, Round Robin, Priority, etc.)',
      'Thread Concept',
      'User-level Threads',
      'Kernel-level Threads',
      'Multithreading Models',
      'Inter-Process Communication (IPC)',
      'Process Synchronization',
      'Deadlocks and Deadlock Handling'
    ]
  },
  {
    title: '3. CPU Scheduling',
    topics: [
      'Need for Scheduling',
      'Scheduling Levels (Long, Short, Medium-term)',
      'Dispatcher and Context Switch',
      'Performance Metrics',
      'Scheduling Algorithms with Examples',
      'Real-Time Scheduling',
      'Multicore Scheduling',
      'Processor Affinity'
    ]
  },
  {
    title: '4. Memory Management',
    topics: [
      'Basic Memory Management Concepts',
      'Memory Allocation Methods',
      'Paging',
      'Segmentation',
      'Virtual Memory',
      'Page Replacement Algorithms',
      'Thrashing',
      'Memory Protection'
    ]
  },
  {
    title: '5. File System Management',
    topics: [
      'File Concept and Attributes',
      'File Operations',
      'File Access Methods',
      'Directory Structure',
      'File System Implementation',
      'File Allocation Methods',
      'Free-Space Management'
    ]
  },
  {
    title: '6. Disk and Storage Management',
    topics: [
      'Disk Structure',
      'Disk Scheduling Algorithms',
      'Disk Management',
      'RAID Concepts',
      'Storage Technologies'
    ]
  },
  {
    title: '7. I/O System',
    topics: [
      'I/O Hardware',
      'I/O Techniques',
      'Kernel I/O Subsystem',
      'Transforming I/O to Hardware Operations'
    ]
  },
  {
    title: '8. Protection and Security',
    topics: [
      'Security Problems',
      'Program Threats',
      'System and Network Threats',
      'Cryptography',
      'User Authentication',
      'Implementing Security Defenses'
    ]
  },
  {
    title: '9. Advanced Topics',
    topics: [
      'Distributed Systems',
      'Real-time Systems',
      'Multimedia Systems',
      'Linux System',
      'Windows Architecture'
    ]
  }
];

export default function OperatingSystems() {
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
        <h1 className="text-3xl font-bold mb-2">Operating Systems</h1>
        <p className="text-muted-foreground">Comprehensive guide to operating system concepts and implementations</p>
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
