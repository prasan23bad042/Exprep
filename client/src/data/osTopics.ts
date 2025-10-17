export interface Topic {
  id: string;
  title: string;
}

export interface Unit {
  id: string;
  title: string;
  topics: Topic[];
}

export const osUnits: Unit[] = [
  {
    id: '1',
    title: '1. Introduction & System Structures',
    topics: [
      { id: 'overview', title: 'OS Overview & Functions' },
      { id: 'system-structures', title: 'System Structures & Components' },
      { id: 'system-calls', title: 'System Calls & APIs' },
      { id: 'os-services', title: 'OS Services & Interfaces' },
      { id: 'virtualization', title: 'Virtualization Concepts' }
    ]
  },
  {
    id: '2',
    title: '2. Process Management',
    topics: [
      { id: 'process-concept', title: 'Process Concept & States' },
      { id: 'scheduling', title: 'CPU Scheduling' },
      { id: 'threads', title: 'Threads & Concurrency' },
      { id: 'process-sync', title: 'Process Synchronization' },
      { id: 'deadlocks', title: 'Deadlocks' }
    ]
  },
  {
    id: '3',
    title: '3. Memory Management',
    topics: [
      { id: 'memory-strategies', title: 'Memory Management Strategies' },
      { id: 'virtual-memory', title: 'Virtual Memory' },
      { id: 'paging', title: 'Paging & Page Replacement' },
      { id: 'segmentation', title: 'Segmentation' }
    ]
  },
  {
    id: '4',
    title: '4. Storage Management',
    topics: [
      { id: 'file-system', title: 'File System Interface' },
      { id: 'file-implementation', title: 'File System Implementation' },
      { id: 'mass-storage', title: 'Mass Storage Structure' },
      { id: 'io-systems', title: 'I/O Systems' }
    ]
  },
  {
    id: '5',
    title: '5. Advanced Topics',
    topics: [
      { id: 'protection', title: 'Protection' },
      { id: 'security', title: 'Security' },
      { id: 'distributed', title: 'Distributed Systems' },
      { id: 'case-studies', title: 'Case Studies (Linux, Windows)' }
    ]
  }
];
