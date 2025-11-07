export const maths9Units = [
  {
    id: 'unit-1',
    title: 'Unit 1 - Sets',
    topics: [
      {
        id: 'sets-intro',
        title: 'Introduction to Sets',
        content: `<p class="mb-2"><strong>                                         </strong><strong>UNIT 1 – SETS</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2">A <strong>set</strong> is a <em>well-defined collection of distinct objects or elements</em>. Sets help us represent groups of numbers, letters, or things in a simple way. The concept of sets was introduced by the German mathematician <strong>Georg Cantor</strong>.</p>
<p class="mb-2"><strong>Representation of Sets</strong></p>
<p class="mb-2">Sets can be represented in three main ways:</p>
<p class="mb-2"><strong>Roster or Tabular Form:</strong>
All elements are listed inside curly brackets {} and separated by commas.
🔹 Example: A = {2, 4, 6, 8, 10}</p>
<p class="mb-2"><strong>Set-builder Form:</strong>
A property is used to describe the elements of the set.
🔹 Example: A = {x | x is an even number less than 12}
(“|” is read as “such that.”)</p>
<p class="mb-2"><strong>Venn Diagram:</strong>
Sets are represented as circles or closed shapes inside a rectangle (the <strong>universal set</strong>). These diagrams show relationships like overlap (intersection) or separation (disjoint sets).</p>
<p class="mb-2"><strong>Types of Sets</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Empty Set (Null Set)</td>
    <td class="border border-gray-300 px-4 py-2">No elements.</td>
    <td class="border border-gray-300 px-4 py-2">A = { } or ∅</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Singleton Set</td>
    <td class="border border-gray-300 px-4 py-2">Exactly one element.</td>
    <td class="border border-gray-300 px-4 py-2">B = {0}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Finite Set</td>
    <td class="border border-gray-300 px-4 py-2">Countable number of elements.</td>
    <td class="border border-gray-300 px-4 py-2">C = {1, 2, 3, 4, 5}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Infinite Set</td>
    <td class="border border-gray-300 px-4 py-2">Countless elements.</td>
    <td class="border border-gray-300 px-4 py-2">D = {1, 2, 3, 4, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equal Sets</td>
    <td class="border border-gray-300 px-4 py-2">Contain exactly the same elements.</td>
    <td class="border border-gray-300 px-4 py-2">{1, 2, 3} = {3, 2, 1}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equivalent Sets</td>
    <td class="border border-gray-300 px-4 py-2">Have the same number of elements (cardinality).</td>
    <td class="border border-gray-300 px-4 py-2">{a, b, c} and {1, 2, 3}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Subset (⊆)</td>
    <td class="border border-gray-300 px-4 py-2">Every element of A is also in B.</td>
    <td class="border border-gray-300 px-4 py-2">A = {1, 2}, B = {1, 2, 3} → A ⊆ B</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Proper Subset (⊂)</td>
    <td class="border border-gray-300 px-4 py-2">A ⊆ B but A ≠ B.</td>
    <td class="border border-gray-300 px-4 py-2">{1, 2} ⊂ {1, 2, 3}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Universal Set (U)</td>
    <td class="border border-gray-300 px-4 py-2">Contains all elements under consideration.</td>
    <td class="border border-gray-300 px-4 py-2">U = {1, 2, 3, 4, 5}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Complement of a Set (A′)</td>
    <td class="border border-gray-300 px-4 py-2">All elements in U that are not in A.</td>
    <td class="border border-gray-300 px-4 py-2">If U = {1–10}, A = {2, 4, 6, 8, 10} → A′ = {1, 3, 5, 7, 9}</td>
  </tr>
</table>
<p class="mb-2"><strong>Operations on Sets</strong></p>
<p class="mb-2"><strong>Union (A </strong><strong>∪</strong><strong> B):</strong>
All elements belonging to A or B or both.
🔹 Example: A = {1, 2, 3}, B = {3, 4, 5} → A ∪ B = {1, 2, 3, 4, 5}</p>
<p class="mb-2"><strong>Intersection (A ∩ B):</strong>
Common elements of both sets.
🔹 Example: A ∩ B = {3}</p>
<p class="mb-2"><strong>Difference (A − B):</strong>
Elements in A but not in B.
🔹 Example: A − B = {1, 2}</p>
<p class="mb-2"><strong>Complement (A′):</strong>
All elements not in A, with respect to the universal set.</p>
<p class="mb-2"><strong>Venn Diagrams and Laws</strong></p>
<p class="mb-2">Venn diagrams help visualize set relationships.</p>
<p class="mb-2"><strong>Key Laws:</strong></p>
<p class="mb-2"><strong>Commutative Laws:</strong>
A ∪ B = B ∪ A
A ∩ B = B ∩ A</p>
<p class="mb-2"><strong>Associative Laws:</strong>
(A ∪ B) ∪ C = A ∪ (B ∪ C)
(A ∩ B) ∩ C = A ∩ (B ∩ C)</p>
<p class="mb-2"><strong>Distributive Laws:</strong>
A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</p>
<p class="mb-2"><strong>De Morgan’s Laws:</strong>
(A ∪ B)′ = A′ ∩ B′
(A ∩ B)′ = A′ ∪ B′</p>
<p class="mb-2"><strong>Applications of Sets</strong></p>
<p class="mb-2">Sets are used in:</p>
<p class="mb-2">Database management</p>
<p class="mb-2">Probability and statistics</p>
<p class="mb-2">Computer programming (data grouping)</p>
<p class="mb-2">Logic and reasoning problems</p>
<p class="mb-2">Organizing data and surveys</p>
<p class="mb-2"><strong>Key Takeaways</strong></p>
<p class="mb-2">A set is a collection of distinct objects.</p>
<p class="mb-2">Operations on sets help analyze relationships between groups.</p>
<p class="mb-2">Venn diagrams are useful visual tools.</p>
<p class="mb-2">De Morgan’s laws are important for simplifying set expressions.</p>
`
      },
      {
        id: 'types-of-sets',
        title: 'Types of Sets',
        content: `<p class="mb-2"><strong>                                         </strong><strong>UNIT 1 – SETS</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2">A <strong>set</strong> is a <em>well-defined collection of distinct objects or elements</em>. Sets help us represent groups of numbers, letters, or things in a simple way. The concept of sets was introduced by the German mathematician <strong>Georg Cantor</strong>.</p>
<p class="mb-2"><strong>Representation of Sets</strong></p>
<p class="mb-2">Sets can be represented in three main ways:</p>
<p class="mb-2"><strong>Roster or Tabular Form:</strong>
All elements are listed inside curly brackets {} and separated by commas.
🔹 Example: A = {2, 4, 6, 8, 10}</p>
<p class="mb-2"><strong>Set-builder Form:</strong>
A property is used to describe the elements of the set.
🔹 Example: A = {x | x is an even number less than 12}
(“|” is read as “such that.”)</p>
<p class="mb-2"><strong>Venn Diagram:</strong>
Sets are represented as circles or closed shapes inside a rectangle (the <strong>universal set</strong>). These diagrams show relationships like overlap (intersection) or separation (disjoint sets).</p>
<p class="mb-2"><strong>Types of Sets</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Empty Set (Null Set)</td>
    <td class="border border-gray-300 px-4 py-2">No elements.</td>
    <td class="border border-gray-300 px-4 py-2">A = { } or ∅</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Singleton Set</td>
    <td class="border border-gray-300 px-4 py-2">Exactly one element.</td>
    <td class="border border-gray-300 px-4 py-2">B = {0}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Finite Set</td>
    <td class="border border-gray-300 px-4 py-2">Countable number of elements.</td>
    <td class="border border-gray-300 px-4 py-2">C = {1, 2, 3, 4, 5}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Infinite Set</td>
    <td class="border border-gray-300 px-4 py-2">Countless elements.</td>
    <td class="border border-gray-300 px-4 py-2">D = {1, 2, 3, 4, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equal Sets</td>
    <td class="border border-gray-300 px-4 py-2">Contain exactly the same elements.</td>
    <td class="border border-gray-300 px-4 py-2">{1, 2, 3} = {3, 2, 1}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equivalent Sets</td>
    <td class="border border-gray-300 px-4 py-2">Have the same number of elements (cardinality).</td>
    <td class="border border-gray-300 px-4 py-2">{a, b, c} and {1, 2, 3}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Subset (⊆)</td>
    <td class="border border-gray-300 px-4 py-2">Every element of A is also in B.</td>
    <td class="border border-gray-300 px-4 py-2">A = {1, 2}, B = {1, 2, 3} → A ⊆ B</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Proper Subset (⊂)</td>
    <td class="border border-gray-300 px-4 py-2">A ⊆ B but A ≠ B.</td>
    <td class="border border-gray-300 px-4 py-2">{1, 2} ⊂ {1, 2, 3}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Universal Set (U)</td>
    <td class="border border-gray-300 px-4 py-2">Contains all elements under consideration.</td>
    <td class="border border-gray-300 px-4 py-2">U = {1, 2, 3, 4, 5}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Complement of a Set (A′)</td>
    <td class="border border-gray-300 px-4 py-2">All elements in U that are not in A.</td>
    <td class="border border-gray-300 px-4 py-2">If U = {1–10}, A = {2, 4, 6, 8, 10} → A′ = {1, 3, 5, 7, 9}</td>
  </tr>
</table>
<p class="mb-2"><strong>Operations on Sets</strong></p>
<p class="mb-2"><strong>Union (A </strong><strong>∪</strong><strong> B):</strong>
All elements belonging to A or B or both.
🔹 Example: A = {1, 2, 3}, B = {3, 4, 5} → A ∪ B = {1, 2, 3, 4, 5}</p>
<p class="mb-2"><strong>Intersection (A ∩ B):</strong>
Common elements of both sets.
🔹 Example: A ∩ B = {3}</p>
<p class="mb-2"><strong>Difference (A − B):</strong>
Elements in A but not in B.
🔹 Example: A − B = {1, 2}</p>
<p class="mb-2"><strong>Complement (A′):</strong>
All elements not in A, with respect to the universal set.</p>
<p class="mb-2"><strong>Venn Diagrams and Laws</strong></p>
<p class="mb-2">Venn diagrams help visualize set relationships.</p>
<p class="mb-2"><strong>Key Laws:</strong></p>
<p class="mb-2"><strong>Commutative Laws:</strong>
A ∪ B = B ∪ A
A ∩ B = B ∩ A</p>
<p class="mb-2"><strong>Associative Laws:</strong>
(A ∪ B) ∪ C = A ∪ (B ∪ C)
(A ∩ B) ∩ C = A ∩ (B ∩ C)</p>
<p class="mb-2"><strong>Distributive Laws:</strong>
A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</p>
<p class="mb-2"><strong>De Morgan’s Laws:</strong>
(A ∪ B)′ = A′ ∩ B′
(A ∩ B)′ = A′ ∪ B′</p>
<p class="mb-2"><strong>Applications of Sets</strong></p>
<p class="mb-2">Sets are used in:</p>
<p class="mb-2">Database management</p>
<p class="mb-2">Probability and statistics</p>
<p class="mb-2">Computer programming (data grouping)</p>
<p class="mb-2">Logic and reasoning problems</p>
<p class="mb-2">Organizing data and surveys</p>
<p class="mb-2"><strong>Key Takeaways</strong></p>
<p class="mb-2">A set is a collection of distinct objects.</p>
<p class="mb-2">Operations on sets help analyze relationships between groups.</p>
<p class="mb-2">Venn diagrams are useful visual tools.</p>
<p class="mb-2">De Morgan’s laws are important for simplifying set expressions.</p>
`
      },
      {
        id: 'set-operations',
        title: 'Set Operations',
        content: `<p class="mb-2"><strong>                                         </strong><strong>UNIT 1 – SETS</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2">A <strong>set</strong> is a <em>well-defined collection of distinct objects or elements</em>. Sets help us represent groups of numbers, letters, or things in a simple way. The concept of sets was introduced by the German mathematician <strong>Georg Cantor</strong>.</p>
<p class="mb-2"><strong>Representation of Sets</strong></p>
<p class="mb-2">Sets can be represented in three main ways:</p>
<p class="mb-2"><strong>Roster or Tabular Form:</strong>
All elements are listed inside curly brackets {} and separated by commas.
🔹 Example: A = {2, 4, 6, 8, 10}</p>
<p class="mb-2"><strong>Set-builder Form:</strong>
A property is used to describe the elements of the set.
🔹 Example: A = {x | x is an even number less than 12}
(“|” is read as “such that.”)</p>
<p class="mb-2"><strong>Venn Diagram:</strong>
Sets are represented as circles or closed shapes inside a rectangle (the <strong>universal set</strong>). These diagrams show relationships like overlap (intersection) or separation (disjoint sets).</p>
<p class="mb-2"><strong>Types of Sets</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Empty Set (Null Set)</td>
    <td class="border border-gray-300 px-4 py-2">No elements.</td>
    <td class="border border-gray-300 px-4 py-2">A = { } or ∅</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Singleton Set</td>
    <td class="border border-gray-300 px-4 py-2">Exactly one element.</td>
    <td class="border border-gray-300 px-4 py-2">B = {0}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Finite Set</td>
    <td class="border border-gray-300 px-4 py-2">Countable number of elements.</td>
    <td class="border border-gray-300 px-4 py-2">C = {1, 2, 3, 4, 5}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Infinite Set</td>
    <td class="border border-gray-300 px-4 py-2">Countless elements.</td>
    <td class="border border-gray-300 px-4 py-2">D = {1, 2, 3, 4, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equal Sets</td>
    <td class="border border-gray-300 px-4 py-2">Contain exactly the same elements.</td>
    <td class="border border-gray-300 px-4 py-2">{1, 2, 3} = {3, 2, 1}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equivalent Sets</td>
    <td class="border border-gray-300 px-4 py-2">Have the same number of elements (cardinality).</td>
    <td class="border border-gray-300 px-4 py-2">{a, b, c} and {1, 2, 3}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Subset (⊆)</td>
    <td class="border border-gray-300 px-4 py-2">Every element of A is also in B.</td>
    <td class="border border-gray-300 px-4 py-2">A = {1, 2}, B = {1, 2, 3} → A ⊆ B</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Proper Subset (⊂)</td>
    <td class="border border-gray-300 px-4 py-2">A ⊆ B but A ≠ B.</td>
    <td class="border border-gray-300 px-4 py-2">{1, 2} ⊂ {1, 2, 3}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Universal Set (U)</td>
    <td class="border border-gray-300 px-4 py-2">Contains all elements under consideration.</td>
    <td class="border border-gray-300 px-4 py-2">U = {1, 2, 3, 4, 5}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Complement of a Set (A′)</td>
    <td class="border border-gray-300 px-4 py-2">All elements in U that are not in A.</td>
    <td class="border border-gray-300 px-4 py-2">If U = {1–10}, A = {2, 4, 6, 8, 10} → A′ = {1, 3, 5, 7, 9}</td>
  </tr>
</table>
<p class="mb-2"><strong>Operations on Sets</strong></p>
<p class="mb-2"><strong>Union (A </strong><strong>∪</strong><strong> B):</strong>
All elements belonging to A or B or both.
🔹 Example: A = {1, 2, 3}, B = {3, 4, 5} → A ∪ B = {1, 2, 3, 4, 5}</p>
<p class="mb-2"><strong>Intersection (A ∩ B):</strong>
Common elements of both sets.
🔹 Example: A ∩ B = {3}</p>
<p class="mb-2"><strong>Difference (A − B):</strong>
Elements in A but not in B.
🔹 Example: A − B = {1, 2}</p>
<p class="mb-2"><strong>Complement (A′):</strong>
All elements not in A, with respect to the universal set.</p>
<p class="mb-2"><strong>Venn Diagrams and Laws</strong></p>
<p class="mb-2">Venn diagrams help visualize set relationships.</p>
<p class="mb-2"><strong>Key Laws:</strong></p>
<p class="mb-2"><strong>Commutative Laws:</strong>
A ∪ B = B ∪ A
A ∩ B = B ∩ A</p>
<p class="mb-2"><strong>Associative Laws:</strong>
(A ∪ B) ∪ C = A ∪ (B ∪ C)
(A ∩ B) ∩ C = A ∩ (B ∩ C)</p>
<p class="mb-2"><strong>Distributive Laws:</strong>
A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</p>
<p class="mb-2"><strong>De Morgan’s Laws:</strong>
(A ∪ B)′ = A′ ∩ B′
(A ∩ B)′ = A′ ∪ B′</p>
<p class="mb-2"><strong>Applications of Sets</strong></p>
<p class="mb-2">Sets are used in:</p>
<p class="mb-2">Database management</p>
<p class="mb-2">Probability and statistics</p>
<p class="mb-2">Computer programming (data grouping)</p>
<p class="mb-2">Logic and reasoning problems</p>
<p class="mb-2">Organizing data and surveys</p>
<p class="mb-2"><strong>Key Takeaways</strong></p>
<p class="mb-2">A set is a collection of distinct objects.</p>
<p class="mb-2">Operations on sets help analyze relationships between groups.</p>
<p class="mb-2">Venn diagrams are useful visual tools.</p>
<p class="mb-2">De Morgan’s laws are important for simplifying set expressions.</p>
`
      },
      {
        id: 'venn-diagrams',
        title: 'Venn Diagrams',
        content: `<p class="mb-2"><strong>                                         </strong><strong>UNIT 1 – SETS</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2">A <strong>set</strong> is a <em>well-defined collection of distinct objects or elements</em>. Sets help us represent groups of numbers, letters, or things in a simple way. The concept of sets was introduced by the German mathematician <strong>Georg Cantor</strong>.</p>
<p class="mb-2"><strong>Representation of Sets</strong></p>
<p class="mb-2">Sets can be represented in three main ways:</p>
<p class="mb-2"><strong>Roster or Tabular Form:</strong>
All elements are listed inside curly brackets {} and separated by commas.
🔹 Example: A = {2, 4, 6, 8, 10}</p>
<p class="mb-2"><strong>Set-builder Form:</strong>
A property is used to describe the elements of the set.
🔹 Example: A = {x | x is an even number less than 12}
(“|” is read as “such that.”)</p>
<p class="mb-2"><strong>Venn Diagram:</strong>
Sets are represented as circles or closed shapes inside a rectangle (the <strong>universal set</strong>). These diagrams show relationships like overlap (intersection) or separation (disjoint sets).</p>
<p class="mb-2"><strong>Types of Sets</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Empty Set (Null Set)</td>
    <td class="border border-gray-300 px-4 py-2">No elements.</td>
    <td class="border border-gray-300 px-4 py-2">A = { } or ∅</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Singleton Set</td>
    <td class="border border-gray-300 px-4 py-2">Exactly one element.</td>
    <td class="border border-gray-300 px-4 py-2">B = {0}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Finite Set</td>
    <td class="border border-gray-300 px-4 py-2">Countable number of elements.</td>
    <td class="border border-gray-300 px-4 py-2">C = {1, 2, 3, 4, 5}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Infinite Set</td>
    <td class="border border-gray-300 px-4 py-2">Countless elements.</td>
    <td class="border border-gray-300 px-4 py-2">D = {1, 2, 3, 4, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equal Sets</td>
    <td class="border border-gray-300 px-4 py-2">Contain exactly the same elements.</td>
    <td class="border border-gray-300 px-4 py-2">{1, 2, 3} = {3, 2, 1}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equivalent Sets</td>
    <td class="border border-gray-300 px-4 py-2">Have the same number of elements (cardinality).</td>
    <td class="border border-gray-300 px-4 py-2">{a, b, c} and {1, 2, 3}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Subset (⊆)</td>
    <td class="border border-gray-300 px-4 py-2">Every element of A is also in B.</td>
    <td class="border border-gray-300 px-4 py-2">A = {1, 2}, B = {1, 2, 3} → A ⊆ B</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Proper Subset (⊂)</td>
    <td class="border border-gray-300 px-4 py-2">A ⊆ B but A ≠ B.</td>
    <td class="border border-gray-300 px-4 py-2">{1, 2} ⊂ {1, 2, 3}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Universal Set (U)</td>
    <td class="border border-gray-300 px-4 py-2">Contains all elements under consideration.</td>
    <td class="border border-gray-300 px-4 py-2">U = {1, 2, 3, 4, 5}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Complement of a Set (A′)</td>
    <td class="border border-gray-300 px-4 py-2">All elements in U that are not in A.</td>
    <td class="border border-gray-300 px-4 py-2">If U = {1–10}, A = {2, 4, 6, 8, 10} → A′ = {1, 3, 5, 7, 9}</td>
  </tr>
</table>
<p class="mb-2"><strong>Operations on Sets</strong></p>
<p class="mb-2"><strong>Union (A </strong><strong>∪</strong><strong> B):</strong>
All elements belonging to A or B or both.
🔹 Example: A = {1, 2, 3}, B = {3, 4, 5} → A ∪ B = {1, 2, 3, 4, 5}</p>
<p class="mb-2"><strong>Intersection (A ∩ B):</strong>
Common elements of both sets.
🔹 Example: A ∩ B = {3}</p>
<p class="mb-2"><strong>Difference (A − B):</strong>
Elements in A but not in B.
🔹 Example: A − B = {1, 2}</p>
<p class="mb-2"><strong>Complement (A′):</strong>
All elements not in A, with respect to the universal set.</p>
<p class="mb-2"><strong>Venn Diagrams and Laws</strong></p>
<p class="mb-2">Venn diagrams help visualize set relationships.</p>
<p class="mb-2"><strong>Key Laws:</strong></p>
<p class="mb-2"><strong>Commutative Laws:</strong>
A ∪ B = B ∪ A
A ∩ B = B ∩ A</p>
<p class="mb-2"><strong>Associative Laws:</strong>
(A ∪ B) ∪ C = A ∪ (B ∪ C)
(A ∩ B) ∩ C = A ∩ (B ∩ C)</p>
<p class="mb-2"><strong>Distributive Laws:</strong>
A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</p>
<p class="mb-2"><strong>De Morgan’s Laws:</strong>
(A ∪ B)′ = A′ ∩ B′
(A ∩ B)′ = A′ ∪ B′</p>
<p class="mb-2"><strong>Applications of Sets</strong></p>
<p class="mb-2">Sets are used in:</p>
<p class="mb-2">Database management</p>
<p class="mb-2">Probability and statistics</p>
<p class="mb-2">Computer programming (data grouping)</p>
<p class="mb-2">Logic and reasoning problems</p>
<p class="mb-2">Organizing data and surveys</p>
<p class="mb-2"><strong>Key Takeaways</strong></p>
<p class="mb-2">A set is a collection of distinct objects.</p>
<p class="mb-2">Operations on sets help analyze relationships between groups.</p>
<p class="mb-2">Venn diagrams are useful visual tools.</p>
<p class="mb-2">De Morgan’s laws are important for simplifying set expressions.</p>
`
      },
    ]
  },
  {
    id: 'unit-2',
    title: 'Unit 2 - Real Numbers',
    topics: [
      {
        id: 'number-system',
        title: 'Number System',
        content: `<p class="mb-2"><strong>                         </strong><strong>UNIT 2 – REAL NUMBERS</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2">The system of numbers we use every day is called the <strong>Real Number System</strong>.
It includes <strong>all rational and irrational numbers</strong> that can be represented on a <strong>number line</strong>.
Understanding real numbers helps in simplifying algebraic expressions and solving equations.</p>
<p class="mb-2"><strong>Number System Overview</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type of Number</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Definition</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Examples</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Natural Numbers (ℕ)</td>
    <td class="border border-gray-300 px-4 py-2">Counting numbers starting from 1</td>
    <td class="border border-gray-300 px-4 py-2">{1, 2, 3, 4, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Whole Numbers (W)</td>
    <td class="border border-gray-300 px-4 py-2">Natural numbers including 0</td>
    <td class="border border-gray-300 px-4 py-2">{0, 1, 2, 3, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Integers (ℤ)</td>
    <td class="border border-gray-300 px-4 py-2">Whole numbers and their negatives</td>
    <td class="border border-gray-300 px-4 py-2">{…, -3, -2, -1, 0, 1, 2, 3, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rational Numbers (ℚ)</td>
    <td class="border border-gray-300 px-4 py-2">Numbers that can be expressed as p/q, where q ≠ 0</td>
    <td class="border border-gray-300 px-4 py-2">½, -¾, 0.25, 2</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Irrational Numbers (ℚ′)</td>
    <td class="border border-gray-300 px-4 py-2">Numbers that cannot be expressed as p/q. Their decimal form is non-terminating and non-repeating.</td>
    <td class="border border-gray-300 px-4 py-2">√2, √3, π</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Real Numbers (ℝ)</td>
    <td class="border border-gray-300 px-4 py-2">All rational and irrational numbers together</td>
    <td class="border border-gray-300 px-4 py-2">-5, 0, ½, √2, π</td>
  </tr>
</table>
<p class="mb-2"><strong>Properties of Rational and Irrational Numbers</strong></p>
<p class="mb-2"><strong>Rational numbers</strong>:</p>
<p class="mb-2">Have terminating or repeating decimals.</p>
<p class="mb-2">Closed under addition, subtraction, multiplication, and division (except division by zero).</p>
<p class="mb-2"><strong>Irrational numbers</strong>:</p>
<p class="mb-2">Non-terminating and non-repeating decimals.</p>
<p class="mb-2">Examples: √2, √3, √5, π, e</p>
<p class="mb-2">Sum or product of a rational and irrational number is always <strong>irrational</strong>.</p>
<p class="mb-2"><strong>Representation on the Number Line</strong></p>
<p class="mb-2">Every <strong>real number</strong> corresponds to a <strong>unique point</strong> on the number line.</p>
<p class="mb-2">Decimal expansions help in locating rational and irrational numbers between integers.
Example: √2 ≈ 1.414 lies between 1 and 2.</p>
<p class="mb-2"><strong>Laws of Exponents for Real Numbers</strong></p>
<p class="mb-2">For any real numbers <strong>a, b</strong> and integers <strong>m, n</strong>, the following rules hold:</p>
<p class="mb-2">(a ≠ 0)</p>
<p class="mb-2">(b ≠ 0)</p>
<p class="mb-2">(a ≠ 0)</p>
<p class="mb-2">These laws help simplify expressions with powers and roots.</p>
<p class="mb-2"><strong>Simplification Using Exponents</strong></p>
<p class="mb-2">Examples:</p>
<p class="mb-2"><strong>Radicals and Surds</strong></p>
<p class="mb-2">A <strong>radical</strong> is a number expressed with a root sign (√).</p>
<p class="mb-2">A <strong>surd</strong> is an <strong>irrational number</strong> that can’t be simplified further into a rational form.
Example: √2, ³√5, √7 are surds.</p>
<p class="mb-2"><strong>Laws of Radicals:</strong></p>
<p class="mb-2"><strong>Operations with Surds</strong></p>
<p class="mb-2"><strong>Example:</strong></p>
<p class="mb-2">Rationalising the denominator:
</p>
<p class="mb-2"><strong>Irrational Numbers Between Two Rational Numbers</strong></p>
<p class="mb-2">There are infinitely many irrational numbers between any two rational numbers.
Example: Between 2 and 3 → √5 ≈ 2.236, √6 ≈ 2.449</p>
<p class="mb-2"><strong>Decimal Expansion of Real Numbers</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Decimal Form</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Terminating Decimal</td>
    <td class="border border-gray-300 px-4 py-2">Has finite digits after the decimal.</td>
    <td class="border border-gray-300 px-4 py-2">½ = 0.5</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Non-Terminating Repeating Decimal</td>
    <td class="border border-gray-300 px-4 py-2">Digits repeat in a pattern.</td>
    <td class="border border-gray-300 px-4 py-2">1/3 = 0.333…</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Non-Terminating Non-Repeating Decimal</td>
    <td class="border border-gray-300 px-4 py-2">No pattern (irrational).</td>
    <td class="border border-gray-300 px-4 py-2">√2 = 1.414213…</td>
  </tr>
</table>
<p class="mb-2"><strong>Key Points to Remember</strong></p>
<p class="mb-2">Real numbers include both rational and irrational numbers.</p>
<p class="mb-2">Exponent laws apply to all real numbers.</p>
<p class="mb-2">Surds are special irrational numbers used in radical form.</p>
<p class="mb-2">Every real number can be located on the number line.</p>
<p class="mb-2">Between any two real numbers, there are <strong>infinitely many real numbers</strong>.</p>
`
      },
      {
        id: 'rational-numbers',
        title: 'Rational Numbers',
        content: `<p class="mb-2"><strong>                         </strong><strong>UNIT 2 – REAL NUMBERS</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2">The system of numbers we use every day is called the <strong>Real Number System</strong>.
It includes <strong>all rational and irrational numbers</strong> that can be represented on a <strong>number line</strong>.
Understanding real numbers helps in simplifying algebraic expressions and solving equations.</p>
<p class="mb-2"><strong>Number System Overview</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type of Number</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Definition</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Examples</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Natural Numbers (ℕ)</td>
    <td class="border border-gray-300 px-4 py-2">Counting numbers starting from 1</td>
    <td class="border border-gray-300 px-4 py-2">{1, 2, 3, 4, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Whole Numbers (W)</td>
    <td class="border border-gray-300 px-4 py-2">Natural numbers including 0</td>
    <td class="border border-gray-300 px-4 py-2">{0, 1, 2, 3, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Integers (ℤ)</td>
    <td class="border border-gray-300 px-4 py-2">Whole numbers and their negatives</td>
    <td class="border border-gray-300 px-4 py-2">{…, -3, -2, -1, 0, 1, 2, 3, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rational Numbers (ℚ)</td>
    <td class="border border-gray-300 px-4 py-2">Numbers that can be expressed as p/q, where q ≠ 0</td>
    <td class="border border-gray-300 px-4 py-2">½, -¾, 0.25, 2</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Irrational Numbers (ℚ′)</td>
    <td class="border border-gray-300 px-4 py-2">Numbers that cannot be expressed as p/q. Their decimal form is non-terminating and non-repeating.</td>
    <td class="border border-gray-300 px-4 py-2">√2, √3, π</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Real Numbers (ℝ)</td>
    <td class="border border-gray-300 px-4 py-2">All rational and irrational numbers together</td>
    <td class="border border-gray-300 px-4 py-2">-5, 0, ½, √2, π</td>
  </tr>
</table>
<p class="mb-2"><strong>Properties of Rational and Irrational Numbers</strong></p>
<p class="mb-2"><strong>Rational numbers</strong>:</p>
<p class="mb-2">Have terminating or repeating decimals.</p>
<p class="mb-2">Closed under addition, subtraction, multiplication, and division (except division by zero).</p>
<p class="mb-2"><strong>Irrational numbers</strong>:</p>
<p class="mb-2">Non-terminating and non-repeating decimals.</p>
<p class="mb-2">Examples: √2, √3, √5, π, e</p>
<p class="mb-2">Sum or product of a rational and irrational number is always <strong>irrational</strong>.</p>
<p class="mb-2"><strong>Representation on the Number Line</strong></p>
<p class="mb-2">Every <strong>real number</strong> corresponds to a <strong>unique point</strong> on the number line.</p>
<p class="mb-2">Decimal expansions help in locating rational and irrational numbers between integers.
Example: √2 ≈ 1.414 lies between 1 and 2.</p>
<p class="mb-2"><strong>Laws of Exponents for Real Numbers</strong></p>
<p class="mb-2">For any real numbers <strong>a, b</strong> and integers <strong>m, n</strong>, the following rules hold:</p>
<p class="mb-2">(a ≠ 0)</p>
<p class="mb-2">(b ≠ 0)</p>
<p class="mb-2">(a ≠ 0)</p>
<p class="mb-2">These laws help simplify expressions with powers and roots.</p>
<p class="mb-2"><strong>Simplification Using Exponents</strong></p>
<p class="mb-2">Examples:</p>
<p class="mb-2"><strong>Radicals and Surds</strong></p>
<p class="mb-2">A <strong>radical</strong> is a number expressed with a root sign (√).</p>
<p class="mb-2">A <strong>surd</strong> is an <strong>irrational number</strong> that can’t be simplified further into a rational form.
Example: √2, ³√5, √7 are surds.</p>
<p class="mb-2"><strong>Laws of Radicals:</strong></p>
<p class="mb-2"><strong>Operations with Surds</strong></p>
<p class="mb-2"><strong>Example:</strong></p>
<p class="mb-2">Rationalising the denominator:
</p>
<p class="mb-2"><strong>Irrational Numbers Between Two Rational Numbers</strong></p>
<p class="mb-2">There are infinitely many irrational numbers between any two rational numbers.
Example: Between 2 and 3 → √5 ≈ 2.236, √6 ≈ 2.449</p>
<p class="mb-2"><strong>Decimal Expansion of Real Numbers</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Decimal Form</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Terminating Decimal</td>
    <td class="border border-gray-300 px-4 py-2">Has finite digits after the decimal.</td>
    <td class="border border-gray-300 px-4 py-2">½ = 0.5</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Non-Terminating Repeating Decimal</td>
    <td class="border border-gray-300 px-4 py-2">Digits repeat in a pattern.</td>
    <td class="border border-gray-300 px-4 py-2">1/3 = 0.333…</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Non-Terminating Non-Repeating Decimal</td>
    <td class="border border-gray-300 px-4 py-2">No pattern (irrational).</td>
    <td class="border border-gray-300 px-4 py-2">√2 = 1.414213…</td>
  </tr>
</table>
<p class="mb-2"><strong>Key Points to Remember</strong></p>
<p class="mb-2">Real numbers include both rational and irrational numbers.</p>
<p class="mb-2">Exponent laws apply to all real numbers.</p>
<p class="mb-2">Surds are special irrational numbers used in radical form.</p>
<p class="mb-2">Every real number can be located on the number line.</p>
<p class="mb-2">Between any two real numbers, there are <strong>infinitely many real numbers</strong>.</p>
`
      },
      {
        id: 'irrational-numbers',
        title: 'Irrational Numbers',
        content: `<p class="mb-2"><strong>                         </strong><strong>UNIT 2 – REAL NUMBERS</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2">The system of numbers we use every day is called the <strong>Real Number System</strong>.
It includes <strong>all rational and irrational numbers</strong> that can be represented on a <strong>number line</strong>.
Understanding real numbers helps in simplifying algebraic expressions and solving equations.</p>
<p class="mb-2"><strong>Number System Overview</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type of Number</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Definition</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Examples</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Natural Numbers (ℕ)</td>
    <td class="border border-gray-300 px-4 py-2">Counting numbers starting from 1</td>
    <td class="border border-gray-300 px-4 py-2">{1, 2, 3, 4, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Whole Numbers (W)</td>
    <td class="border border-gray-300 px-4 py-2">Natural numbers including 0</td>
    <td class="border border-gray-300 px-4 py-2">{0, 1, 2, 3, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Integers (ℤ)</td>
    <td class="border border-gray-300 px-4 py-2">Whole numbers and their negatives</td>
    <td class="border border-gray-300 px-4 py-2">{…, -3, -2, -1, 0, 1, 2, 3, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rational Numbers (ℚ)</td>
    <td class="border border-gray-300 px-4 py-2">Numbers that can be expressed as p/q, where q ≠ 0</td>
    <td class="border border-gray-300 px-4 py-2">½, -¾, 0.25, 2</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Irrational Numbers (ℚ′)</td>
    <td class="border border-gray-300 px-4 py-2">Numbers that cannot be expressed as p/q. Their decimal form is non-terminating and non-repeating.</td>
    <td class="border border-gray-300 px-4 py-2">√2, √3, π</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Real Numbers (ℝ)</td>
    <td class="border border-gray-300 px-4 py-2">All rational and irrational numbers together</td>
    <td class="border border-gray-300 px-4 py-2">-5, 0, ½, √2, π</td>
  </tr>
</table>
<p class="mb-2"><strong>Properties of Rational and Irrational Numbers</strong></p>
<p class="mb-2"><strong>Rational numbers</strong>:</p>
<p class="mb-2">Have terminating or repeating decimals.</p>
<p class="mb-2">Closed under addition, subtraction, multiplication, and division (except division by zero).</p>
<p class="mb-2"><strong>Irrational numbers</strong>:</p>
<p class="mb-2">Non-terminating and non-repeating decimals.</p>
<p class="mb-2">Examples: √2, √3, √5, π, e</p>
<p class="mb-2">Sum or product of a rational and irrational number is always <strong>irrational</strong>.</p>
<p class="mb-2"><strong>Representation on the Number Line</strong></p>
<p class="mb-2">Every <strong>real number</strong> corresponds to a <strong>unique point</strong> on the number line.</p>
<p class="mb-2">Decimal expansions help in locating rational and irrational numbers between integers.
Example: √2 ≈ 1.414 lies between 1 and 2.</p>
<p class="mb-2"><strong>Laws of Exponents for Real Numbers</strong></p>
<p class="mb-2">For any real numbers <strong>a, b</strong> and integers <strong>m, n</strong>, the following rules hold:</p>
<p class="mb-2">(a ≠ 0)</p>
<p class="mb-2">(b ≠ 0)</p>
<p class="mb-2">(a ≠ 0)</p>
<p class="mb-2">These laws help simplify expressions with powers and roots.</p>
<p class="mb-2"><strong>Simplification Using Exponents</strong></p>
<p class="mb-2">Examples:</p>
<p class="mb-2"><strong>Radicals and Surds</strong></p>
<p class="mb-2">A <strong>radical</strong> is a number expressed with a root sign (√).</p>
<p class="mb-2">A <strong>surd</strong> is an <strong>irrational number</strong> that can’t be simplified further into a rational form.
Example: √2, ³√5, √7 are surds.</p>
<p class="mb-2"><strong>Laws of Radicals:</strong></p>
<p class="mb-2"><strong>Operations with Surds</strong></p>
<p class="mb-2"><strong>Example:</strong></p>
<p class="mb-2">Rationalising the denominator:
</p>
<p class="mb-2"><strong>Irrational Numbers Between Two Rational Numbers</strong></p>
<p class="mb-2">There are infinitely many irrational numbers between any two rational numbers.
Example: Between 2 and 3 → √5 ≈ 2.236, √6 ≈ 2.449</p>
<p class="mb-2"><strong>Decimal Expansion of Real Numbers</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Decimal Form</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Terminating Decimal</td>
    <td class="border border-gray-300 px-4 py-2">Has finite digits after the decimal.</td>
    <td class="border border-gray-300 px-4 py-2">½ = 0.5</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Non-Terminating Repeating Decimal</td>
    <td class="border border-gray-300 px-4 py-2">Digits repeat in a pattern.</td>
    <td class="border border-gray-300 px-4 py-2">1/3 = 0.333…</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Non-Terminating Non-Repeating Decimal</td>
    <td class="border border-gray-300 px-4 py-2">No pattern (irrational).</td>
    <td class="border border-gray-300 px-4 py-2">√2 = 1.414213…</td>
  </tr>
</table>
<p class="mb-2"><strong>Key Points to Remember</strong></p>
<p class="mb-2">Real numbers include both rational and irrational numbers.</p>
<p class="mb-2">Exponent laws apply to all real numbers.</p>
<p class="mb-2">Surds are special irrational numbers used in radical form.</p>
<p class="mb-2">Every real number can be located on the number line.</p>
<p class="mb-2">Between any two real numbers, there are <strong>infinitely many real numbers</strong>.</p>
`
      },
      {
        id: 'real-number-operations',
        title: 'Operations on Real Numbers',
        content: `<p class="mb-2"><strong>                         </strong><strong>UNIT 2 – REAL NUMBERS</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2">The system of numbers we use every day is called the <strong>Real Number System</strong>.
It includes <strong>all rational and irrational numbers</strong> that can be represented on a <strong>number line</strong>.
Understanding real numbers helps in simplifying algebraic expressions and solving equations.</p>
<p class="mb-2"><strong>Number System Overview</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type of Number</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Definition</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Examples</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Natural Numbers (ℕ)</td>
    <td class="border border-gray-300 px-4 py-2">Counting numbers starting from 1</td>
    <td class="border border-gray-300 px-4 py-2">{1, 2, 3, 4, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Whole Numbers (W)</td>
    <td class="border border-gray-300 px-4 py-2">Natural numbers including 0</td>
    <td class="border border-gray-300 px-4 py-2">{0, 1, 2, 3, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Integers (ℤ)</td>
    <td class="border border-gray-300 px-4 py-2">Whole numbers and their negatives</td>
    <td class="border border-gray-300 px-4 py-2">{…, -3, -2, -1, 0, 1, 2, 3, …}</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rational Numbers (ℚ)</td>
    <td class="border border-gray-300 px-4 py-2">Numbers that can be expressed as p/q, where q ≠ 0</td>
    <td class="border border-gray-300 px-4 py-2">½, -¾, 0.25, 2</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Irrational Numbers (ℚ′)</td>
    <td class="border border-gray-300 px-4 py-2">Numbers that cannot be expressed as p/q. Their decimal form is non-terminating and non-repeating.</td>
    <td class="border border-gray-300 px-4 py-2">√2, √3, π</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Real Numbers (ℝ)</td>
    <td class="border border-gray-300 px-4 py-2">All rational and irrational numbers together</td>
    <td class="border border-gray-300 px-4 py-2">-5, 0, ½, √2, π</td>
  </tr>
</table>
<p class="mb-2"><strong>Properties of Rational and Irrational Numbers</strong></p>
<p class="mb-2"><strong>Rational numbers</strong>:</p>
<p class="mb-2">Have terminating or repeating decimals.</p>
<p class="mb-2">Closed under addition, subtraction, multiplication, and division (except division by zero).</p>
<p class="mb-2"><strong>Irrational numbers</strong>:</p>
<p class="mb-2">Non-terminating and non-repeating decimals.</p>
<p class="mb-2">Examples: √2, √3, √5, π, e</p>
<p class="mb-2">Sum or product of a rational and irrational number is always <strong>irrational</strong>.</p>
<p class="mb-2"><strong>Representation on the Number Line</strong></p>
<p class="mb-2">Every <strong>real number</strong> corresponds to a <strong>unique point</strong> on the number line.</p>
<p class="mb-2">Decimal expansions help in locating rational and irrational numbers between integers.
Example: √2 ≈ 1.414 lies between 1 and 2.</p>
<p class="mb-2"><strong>Laws of Exponents for Real Numbers</strong></p>
<p class="mb-2">For any real numbers <strong>a, b</strong> and integers <strong>m, n</strong>, the following rules hold:</p>
<p class="mb-2">(a ≠ 0)</p>
<p class="mb-2">(b ≠ 0)</p>
<p class="mb-2">(a ≠ 0)</p>
<p class="mb-2">These laws help simplify expressions with powers and roots.</p>
<p class="mb-2"><strong>Simplification Using Exponents</strong></p>
<p class="mb-2">Examples:</p>
<p class="mb-2"><strong>Radicals and Surds</strong></p>
<p class="mb-2">A <strong>radical</strong> is a number expressed with a root sign (√).</p>
<p class="mb-2">A <strong>surd</strong> is an <strong>irrational number</strong> that can’t be simplified further into a rational form.
Example: √2, ³√5, √7 are surds.</p>
<p class="mb-2"><strong>Laws of Radicals:</strong></p>
<p class="mb-2"><strong>Operations with Surds</strong></p>
<p class="mb-2"><strong>Example:</strong></p>
<p class="mb-2">Rationalising the denominator:
</p>
<p class="mb-2"><strong>Irrational Numbers Between Two Rational Numbers</strong></p>
<p class="mb-2">There are infinitely many irrational numbers between any two rational numbers.
Example: Between 2 and 3 → √5 ≈ 2.236, √6 ≈ 2.449</p>
<p class="mb-2"><strong>Decimal Expansion of Real Numbers</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Decimal Form</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Terminating Decimal</td>
    <td class="border border-gray-300 px-4 py-2">Has finite digits after the decimal.</td>
    <td class="border border-gray-300 px-4 py-2">½ = 0.5</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Non-Terminating Repeating Decimal</td>
    <td class="border border-gray-300 px-4 py-2">Digits repeat in a pattern.</td>
    <td class="border border-gray-300 px-4 py-2">1/3 = 0.333…</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Non-Terminating Non-Repeating Decimal</td>
    <td class="border border-gray-300 px-4 py-2">No pattern (irrational).</td>
    <td class="border border-gray-300 px-4 py-2">√2 = 1.414213…</td>
  </tr>
</table>
<p class="mb-2"><strong>Key Points to Remember</strong></p>
<p class="mb-2">Real numbers include both rational and irrational numbers.</p>
<p class="mb-2">Exponent laws apply to all real numbers.</p>
<p class="mb-2">Surds are special irrational numbers used in radical form.</p>
<p class="mb-2">Every real number can be located on the number line.</p>
<p class="mb-2">Between any two real numbers, there are <strong>infinitely many real numbers</strong>.</p>
`
      },
    ]
  },
  {
    id: 'unit-3',
    title: 'Unit 3 - Algebra',
    topics: [
      {
        id: 'algebraic-expressions',
        title: 'Algebraic Expressions',
        content: `<p class="mb-2"><strong>                                </strong><strong>UNIT 3 – ALGEBRA</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2"><strong>Algebra</strong> is the branch of mathematics that uses <strong>letters and symbols</strong> to represent numbers and express relationships among them.
It provides a way to generalize arithmetic operations and solve problems involving unknown quantities.</p>
<p class="mb-2"><strong>1. ALGEBRAIC EXPRESSIONS</strong></p>
<p class="mb-2">An <strong>algebraic expression</strong> is made up of <strong>constants, variables, and operations</strong> (+, −, ×, ÷, etc.).
Example: </p>
<p class="mb-2"><strong>Constant:</strong> A fixed number (e.g., 3, -5).</p>
<p class="mb-2"><strong>Variable:</strong> A symbol that can take different values (e.g., x, y, z).</p>
<p class="mb-2"><strong>Coefficient:</strong> A number multiplied by a variable (e.g., in 5x, the coefficient is 5).</p>
<p class="mb-2"><strong>Types of Algebraic Expressions:</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Monomial</td>
    <td class="border border-gray-300 px-4 py-2">3x</td>
    <td class="border border-gray-300 px-4 py-2">One term</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Binomial</td>
    <td class="border border-gray-300 px-4 py-2">x + 2y</td>
    <td class="border border-gray-300 px-4 py-2">Two terms</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trinomial</td>
    <td class="border border-gray-300 px-4 py-2">a² + 2a + 1</td>
    <td class="border border-gray-300 px-4 py-2">Three terms</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">x³ + 2x² + 3x + 4</td>
    <td class="border border-gray-300 px-4 py-2">More than one term</td>
  </tr>
</table>
<p class="mb-2"><strong>2. POLYNOMIALS</strong></p>
<p class="mb-2">A <strong>polynomial</strong> is an algebraic expression with one or more terms, where each term has a variable raised to a non-negative integer power.
Example: </p>
<p class="mb-2"><strong>Degree of a Polynomial</strong></p>
<p class="mb-2">The <strong>degree</strong> is the highest power of the variable.</p>
<p class="mb-2">Example: In , degree = 4</p>
<p class="mb-2"><strong>Types Based on Degree</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Degree</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">Constant Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">7</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">Linear Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">2x + 3</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">2</td>
    <td class="border border-gray-300 px-4 py-2">Quadratic Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">x² + 5x + 6</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">3</td>
    <td class="border border-gray-300 px-4 py-2">Cubic Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">2x³ - 3x + 1</td>
  </tr>
</table>
<p class="mb-2"><strong>3. IDENTITIES AND FACTORISATION</strong></p>
<p class="mb-2"><strong>Algebraic Identities</strong></p>
<p class="mb-2">These are formulas that are always true for all values of variables.</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Identity</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(1)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(2)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(3)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(4)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(5)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(6)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(7)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(8)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
</table>
<p class="mb-2"><strong>4. FACTORISATION METHODS</strong></p>
<p class="mb-2"><strong>Factorisation</strong> means expressing a given polynomial as a product of its factors.</p>
<p class="mb-2"><strong>Common Methods:</strong></p>
<p class="mb-2"><strong>By taking out common factors</strong>
Example: </p>
<p class="mb-2"><strong>By grouping terms</strong>
Example: </p>
<p class="mb-2"><strong>By using identities</strong>
Example: </p>
<p class="mb-2"><strong>By splitting the middle term (Quadratic factorisation)</strong>
Example:
</p>
<p class="mb-2"><strong>5. DIVISION OF POLYNOMIALS</strong></p>
<p class="mb-2">Polynomials can be divided similar to numbers.</p>
<p class="mb-2"><strong>Division Algorithm for Polynomials:</strong>
If and are two polynomials (G(x) ≠ 0), then
,
where <strong>Q(x)</strong> is the quotient and <strong>R(x)</strong> is the remainder.</p>
<p class="mb-2"><strong>Example:</strong>
Divide by :
Quotient = , Remainder = 0</p>
<p class="mb-2"><strong>6. REMAINDER AND FACTOR THEOREMS</strong></p>
<p class="mb-2"><strong>Remainder Theorem:</strong>
If a polynomial is divided by ,
then the remainder = .</p>
<p class="mb-2">Example: For ,
divide by (x − 2): remainder = f(2) = 4 − 10 + 6 = 0</p>
<p class="mb-2"><strong>Factor Theorem:</strong>
If , then (x − a) is a factor of f(x).
Conversely, if (x − a) is a factor, then f(a) = 0.</p>
<p class="mb-2"><strong>7. APPLICATIONS OF ALGEBRA</strong></p>
<p class="mb-2">Algebra is used in:</p>
<p class="mb-2">Solving equations and inequalities</p>
<p class="mb-2">Representing patterns and sequences</p>
<p class="mb-2">Geometry (formula derivation)</p>
<p class="mb-2">Computer programming and data analysis</p>
<p class="mb-2">Financial calculations (profit, loss, interest)</p>
<p class="mb-2"><strong>8. KEY POINTS TO REMEMBER</strong></p>
<p class="mb-2">Algebra uses symbols to represent numbers and relationships.</p>
<p class="mb-2">Factorisation simplifies expressions and helps find zeros of polynomials.</p>
<p class="mb-2">Identities help expand or simplify complex expressions quickly.</p>
<p class="mb-2">Remainder and Factor Theorems are key for polynomial division and root finding.</p>
`
      },
      {
        id: 'polynomials',
        title: 'Polynomials',
        content: `<p class="mb-2"><strong>                                </strong><strong>UNIT 3 – ALGEBRA</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2"><strong>Algebra</strong> is the branch of mathematics that uses <strong>letters and symbols</strong> to represent numbers and express relationships among them.
It provides a way to generalize arithmetic operations and solve problems involving unknown quantities.</p>
<p class="mb-2"><strong>1. ALGEBRAIC EXPRESSIONS</strong></p>
<p class="mb-2">An <strong>algebraic expression</strong> is made up of <strong>constants, variables, and operations</strong> (+, −, ×, ÷, etc.).
Example: </p>
<p class="mb-2"><strong>Constant:</strong> A fixed number (e.g., 3, -5).</p>
<p class="mb-2"><strong>Variable:</strong> A symbol that can take different values (e.g., x, y, z).</p>
<p class="mb-2"><strong>Coefficient:</strong> A number multiplied by a variable (e.g., in 5x, the coefficient is 5).</p>
<p class="mb-2"><strong>Types of Algebraic Expressions:</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Monomial</td>
    <td class="border border-gray-300 px-4 py-2">3x</td>
    <td class="border border-gray-300 px-4 py-2">One term</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Binomial</td>
    <td class="border border-gray-300 px-4 py-2">x + 2y</td>
    <td class="border border-gray-300 px-4 py-2">Two terms</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trinomial</td>
    <td class="border border-gray-300 px-4 py-2">a² + 2a + 1</td>
    <td class="border border-gray-300 px-4 py-2">Three terms</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">x³ + 2x² + 3x + 4</td>
    <td class="border border-gray-300 px-4 py-2">More than one term</td>
  </tr>
</table>
<p class="mb-2"><strong>2. POLYNOMIALS</strong></p>
<p class="mb-2">A <strong>polynomial</strong> is an algebraic expression with one or more terms, where each term has a variable raised to a non-negative integer power.
Example: </p>
<p class="mb-2"><strong>Degree of a Polynomial</strong></p>
<p class="mb-2">The <strong>degree</strong> is the highest power of the variable.</p>
<p class="mb-2">Example: In , degree = 4</p>
<p class="mb-2"><strong>Types Based on Degree</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Degree</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">Constant Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">7</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">Linear Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">2x + 3</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">2</td>
    <td class="border border-gray-300 px-4 py-2">Quadratic Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">x² + 5x + 6</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">3</td>
    <td class="border border-gray-300 px-4 py-2">Cubic Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">2x³ - 3x + 1</td>
  </tr>
</table>
<p class="mb-2"><strong>3. IDENTITIES AND FACTORISATION</strong></p>
<p class="mb-2"><strong>Algebraic Identities</strong></p>
<p class="mb-2">These are formulas that are always true for all values of variables.</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Identity</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(1)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(2)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(3)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(4)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(5)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(6)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(7)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(8)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
</table>
<p class="mb-2"><strong>4. FACTORISATION METHODS</strong></p>
<p class="mb-2"><strong>Factorisation</strong> means expressing a given polynomial as a product of its factors.</p>
<p class="mb-2"><strong>Common Methods:</strong></p>
<p class="mb-2"><strong>By taking out common factors</strong>
Example: </p>
<p class="mb-2"><strong>By grouping terms</strong>
Example: </p>
<p class="mb-2"><strong>By using identities</strong>
Example: </p>
<p class="mb-2"><strong>By splitting the middle term (Quadratic factorisation)</strong>
Example:
</p>
<p class="mb-2"><strong>5. DIVISION OF POLYNOMIALS</strong></p>
<p class="mb-2">Polynomials can be divided similar to numbers.</p>
<p class="mb-2"><strong>Division Algorithm for Polynomials:</strong>
If and are two polynomials (G(x) ≠ 0), then
,
where <strong>Q(x)</strong> is the quotient and <strong>R(x)</strong> is the remainder.</p>
<p class="mb-2"><strong>Example:</strong>
Divide by :
Quotient = , Remainder = 0</p>
<p class="mb-2"><strong>6. REMAINDER AND FACTOR THEOREMS</strong></p>
<p class="mb-2"><strong>Remainder Theorem:</strong>
If a polynomial is divided by ,
then the remainder = .</p>
<p class="mb-2">Example: For ,
divide by (x − 2): remainder = f(2) = 4 − 10 + 6 = 0</p>
<p class="mb-2"><strong>Factor Theorem:</strong>
If , then (x − a) is a factor of f(x).
Conversely, if (x − a) is a factor, then f(a) = 0.</p>
<p class="mb-2"><strong>7. APPLICATIONS OF ALGEBRA</strong></p>
<p class="mb-2">Algebra is used in:</p>
<p class="mb-2">Solving equations and inequalities</p>
<p class="mb-2">Representing patterns and sequences</p>
<p class="mb-2">Geometry (formula derivation)</p>
<p class="mb-2">Computer programming and data analysis</p>
<p class="mb-2">Financial calculations (profit, loss, interest)</p>
<p class="mb-2"><strong>8. KEY POINTS TO REMEMBER</strong></p>
<p class="mb-2">Algebra uses symbols to represent numbers and relationships.</p>
<p class="mb-2">Factorisation simplifies expressions and helps find zeros of polynomials.</p>
<p class="mb-2">Identities help expand or simplify complex expressions quickly.</p>
<p class="mb-2">Remainder and Factor Theorems are key for polynomial division and root finding.</p>
`
      },
      {
        id: 'factorization',
        title: 'Factorization',
        content: `<p class="mb-2"><strong>                                </strong><strong>UNIT 3 – ALGEBRA</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2"><strong>Algebra</strong> is the branch of mathematics that uses <strong>letters and symbols</strong> to represent numbers and express relationships among them.
It provides a way to generalize arithmetic operations and solve problems involving unknown quantities.</p>
<p class="mb-2"><strong>1. ALGEBRAIC EXPRESSIONS</strong></p>
<p class="mb-2">An <strong>algebraic expression</strong> is made up of <strong>constants, variables, and operations</strong> (+, −, ×, ÷, etc.).
Example: </p>
<p class="mb-2"><strong>Constant:</strong> A fixed number (e.g., 3, -5).</p>
<p class="mb-2"><strong>Variable:</strong> A symbol that can take different values (e.g., x, y, z).</p>
<p class="mb-2"><strong>Coefficient:</strong> A number multiplied by a variable (e.g., in 5x, the coefficient is 5).</p>
<p class="mb-2"><strong>Types of Algebraic Expressions:</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Monomial</td>
    <td class="border border-gray-300 px-4 py-2">3x</td>
    <td class="border border-gray-300 px-4 py-2">One term</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Binomial</td>
    <td class="border border-gray-300 px-4 py-2">x + 2y</td>
    <td class="border border-gray-300 px-4 py-2">Two terms</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trinomial</td>
    <td class="border border-gray-300 px-4 py-2">a² + 2a + 1</td>
    <td class="border border-gray-300 px-4 py-2">Three terms</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">x³ + 2x² + 3x + 4</td>
    <td class="border border-gray-300 px-4 py-2">More than one term</td>
  </tr>
</table>
<p class="mb-2"><strong>2. POLYNOMIALS</strong></p>
<p class="mb-2">A <strong>polynomial</strong> is an algebraic expression with one or more terms, where each term has a variable raised to a non-negative integer power.
Example: </p>
<p class="mb-2"><strong>Degree of a Polynomial</strong></p>
<p class="mb-2">The <strong>degree</strong> is the highest power of the variable.</p>
<p class="mb-2">Example: In , degree = 4</p>
<p class="mb-2"><strong>Types Based on Degree</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Degree</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">Constant Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">7</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">Linear Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">2x + 3</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">2</td>
    <td class="border border-gray-300 px-4 py-2">Quadratic Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">x² + 5x + 6</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">3</td>
    <td class="border border-gray-300 px-4 py-2">Cubic Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">2x³ - 3x + 1</td>
  </tr>
</table>
<p class="mb-2"><strong>3. IDENTITIES AND FACTORISATION</strong></p>
<p class="mb-2"><strong>Algebraic Identities</strong></p>
<p class="mb-2">These are formulas that are always true for all values of variables.</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Identity</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(1)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(2)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(3)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(4)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(5)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(6)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(7)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(8)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
</table>
<p class="mb-2"><strong>4. FACTORISATION METHODS</strong></p>
<p class="mb-2"><strong>Factorisation</strong> means expressing a given polynomial as a product of its factors.</p>
<p class="mb-2"><strong>Common Methods:</strong></p>
<p class="mb-2"><strong>By taking out common factors</strong>
Example: </p>
<p class="mb-2"><strong>By grouping terms</strong>
Example: </p>
<p class="mb-2"><strong>By using identities</strong>
Example: </p>
<p class="mb-2"><strong>By splitting the middle term (Quadratic factorisation)</strong>
Example:
</p>
<p class="mb-2"><strong>5. DIVISION OF POLYNOMIALS</strong></p>
<p class="mb-2">Polynomials can be divided similar to numbers.</p>
<p class="mb-2"><strong>Division Algorithm for Polynomials:</strong>
If and are two polynomials (G(x) ≠ 0), then
,
where <strong>Q(x)</strong> is the quotient and <strong>R(x)</strong> is the remainder.</p>
<p class="mb-2"><strong>Example:</strong>
Divide by :
Quotient = , Remainder = 0</p>
<p class="mb-2"><strong>6. REMAINDER AND FACTOR THEOREMS</strong></p>
<p class="mb-2"><strong>Remainder Theorem:</strong>
If a polynomial is divided by ,
then the remainder = .</p>
<p class="mb-2">Example: For ,
divide by (x − 2): remainder = f(2) = 4 − 10 + 6 = 0</p>
<p class="mb-2"><strong>Factor Theorem:</strong>
If , then (x − a) is a factor of f(x).
Conversely, if (x − a) is a factor, then f(a) = 0.</p>
<p class="mb-2"><strong>7. APPLICATIONS OF ALGEBRA</strong></p>
<p class="mb-2">Algebra is used in:</p>
<p class="mb-2">Solving equations and inequalities</p>
<p class="mb-2">Representing patterns and sequences</p>
<p class="mb-2">Geometry (formula derivation)</p>
<p class="mb-2">Computer programming and data analysis</p>
<p class="mb-2">Financial calculations (profit, loss, interest)</p>
<p class="mb-2"><strong>8. KEY POINTS TO REMEMBER</strong></p>
<p class="mb-2">Algebra uses symbols to represent numbers and relationships.</p>
<p class="mb-2">Factorisation simplifies expressions and helps find zeros of polynomials.</p>
<p class="mb-2">Identities help expand or simplify complex expressions quickly.</p>
<p class="mb-2">Remainder and Factor Theorems are key for polynomial division and root finding.</p>
`
      },
      {
        id: 'algebraic-identities',
        title: 'Algebraic Identities',
        content: `<p class="mb-2"><strong>                                </strong><strong>UNIT 3 – ALGEBRA</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2"><strong>Algebra</strong> is the branch of mathematics that uses <strong>letters and symbols</strong> to represent numbers and express relationships among them.
It provides a way to generalize arithmetic operations and solve problems involving unknown quantities.</p>
<p class="mb-2"><strong>1. ALGEBRAIC EXPRESSIONS</strong></p>
<p class="mb-2">An <strong>algebraic expression</strong> is made up of <strong>constants, variables, and operations</strong> (+, −, ×, ÷, etc.).
Example: </p>
<p class="mb-2"><strong>Constant:</strong> A fixed number (e.g., 3, -5).</p>
<p class="mb-2"><strong>Variable:</strong> A symbol that can take different values (e.g., x, y, z).</p>
<p class="mb-2"><strong>Coefficient:</strong> A number multiplied by a variable (e.g., in 5x, the coefficient is 5).</p>
<p class="mb-2"><strong>Types of Algebraic Expressions:</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Monomial</td>
    <td class="border border-gray-300 px-4 py-2">3x</td>
    <td class="border border-gray-300 px-4 py-2">One term</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Binomial</td>
    <td class="border border-gray-300 px-4 py-2">x + 2y</td>
    <td class="border border-gray-300 px-4 py-2">Two terms</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trinomial</td>
    <td class="border border-gray-300 px-4 py-2">a² + 2a + 1</td>
    <td class="border border-gray-300 px-4 py-2">Three terms</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">x³ + 2x² + 3x + 4</td>
    <td class="border border-gray-300 px-4 py-2">More than one term</td>
  </tr>
</table>
<p class="mb-2"><strong>2. POLYNOMIALS</strong></p>
<p class="mb-2">A <strong>polynomial</strong> is an algebraic expression with one or more terms, where each term has a variable raised to a non-negative integer power.
Example: </p>
<p class="mb-2"><strong>Degree of a Polynomial</strong></p>
<p class="mb-2">The <strong>degree</strong> is the highest power of the variable.</p>
<p class="mb-2">Example: In , degree = 4</p>
<p class="mb-2"><strong>Types Based on Degree</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Degree</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">Constant Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">7</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">Linear Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">2x + 3</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">2</td>
    <td class="border border-gray-300 px-4 py-2">Quadratic Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">x² + 5x + 6</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">3</td>
    <td class="border border-gray-300 px-4 py-2">Cubic Polynomial</td>
    <td class="border border-gray-300 px-4 py-2">2x³ - 3x + 1</td>
  </tr>
</table>
<p class="mb-2"><strong>3. IDENTITIES AND FACTORISATION</strong></p>
<p class="mb-2"><strong>Algebraic Identities</strong></p>
<p class="mb-2">These are formulas that are always true for all values of variables.</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Identity</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(1)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(2)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(3)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(4)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(5)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(6)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(7)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">(8)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
</table>
<p class="mb-2"><strong>4. FACTORISATION METHODS</strong></p>
<p class="mb-2"><strong>Factorisation</strong> means expressing a given polynomial as a product of its factors.</p>
<p class="mb-2"><strong>Common Methods:</strong></p>
<p class="mb-2"><strong>By taking out common factors</strong>
Example: </p>
<p class="mb-2"><strong>By grouping terms</strong>
Example: </p>
<p class="mb-2"><strong>By using identities</strong>
Example: </p>
<p class="mb-2"><strong>By splitting the middle term (Quadratic factorisation)</strong>
Example:
</p>
<p class="mb-2"><strong>5. DIVISION OF POLYNOMIALS</strong></p>
<p class="mb-2">Polynomials can be divided similar to numbers.</p>
<p class="mb-2"><strong>Division Algorithm for Polynomials:</strong>
If and are two polynomials (G(x) ≠ 0), then
,
where <strong>Q(x)</strong> is the quotient and <strong>R(x)</strong> is the remainder.</p>
<p class="mb-2"><strong>Example:</strong>
Divide by :
Quotient = , Remainder = 0</p>
<p class="mb-2"><strong>6. REMAINDER AND FACTOR THEOREMS</strong></p>
<p class="mb-2"><strong>Remainder Theorem:</strong>
If a polynomial is divided by ,
then the remainder = .</p>
<p class="mb-2">Example: For ,
divide by (x − 2): remainder = f(2) = 4 − 10 + 6 = 0</p>
<p class="mb-2"><strong>Factor Theorem:</strong>
If , then (x − a) is a factor of f(x).
Conversely, if (x − a) is a factor, then f(a) = 0.</p>
<p class="mb-2"><strong>7. APPLICATIONS OF ALGEBRA</strong></p>
<p class="mb-2">Algebra is used in:</p>
<p class="mb-2">Solving equations and inequalities</p>
<p class="mb-2">Representing patterns and sequences</p>
<p class="mb-2">Geometry (formula derivation)</p>
<p class="mb-2">Computer programming and data analysis</p>
<p class="mb-2">Financial calculations (profit, loss, interest)</p>
<p class="mb-2"><strong>8. KEY POINTS TO REMEMBER</strong></p>
<p class="mb-2">Algebra uses symbols to represent numbers and relationships.</p>
<p class="mb-2">Factorisation simplifies expressions and helps find zeros of polynomials.</p>
<p class="mb-2">Identities help expand or simplify complex expressions quickly.</p>
<p class="mb-2">Remainder and Factor Theorems are key for polynomial division and root finding.</p>
`
      },
    ]
  },
  {
    id: 'unit-4',
    title: 'Unit 4 - Geometry',
    topics: [
      {
        id: 'lines-angles',
        title: 'Lines and Angles',
        content: `<p class="mb-2"><strong>                          </strong><strong>UNIT 4 – GEOMETRY</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2"><strong>Geometry</strong> deals with the study of shapes, sizes, figures, positions, and the properties of space.
This unit builds on concepts from lower classes and introduces <strong>lines, angles, triangles, quadrilaterals</strong>, and theorems that form the base for higher-level geometry.</p>
<p class="mb-2"><strong>1. BASIC TERMS AND DEFINITIONS</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Term</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Definition</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Point</td>
    <td class="border border-gray-300 px-4 py-2">A position with no length, breadth, or thickness.</td>
    <td class="border border-gray-300 px-4 py-2">Represented by A, B, etc.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Line</td>
    <td class="border border-gray-300 px-4 py-2">Extends infinitely in both directions; no endpoints.</td>
    <td class="border border-gray-300 px-4 py-2">Line AB (↔AB)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Line Segment</td>
    <td class="border border-gray-300 px-4 py-2">A part of a line with two endpoints.</td>
    <td class="border border-gray-300 px-4 py-2">Segment AB</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Ray</td>
    <td class="border border-gray-300 px-4 py-2">A part of a line with one endpoint, extending infinitely in one direction.</td>
    <td class="border border-gray-300 px-4 py-2">Ray AB (→AB)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Plane</td>
    <td class="border border-gray-300 px-4 py-2">A flat surface extending infinitely.</td>
    <td class="border border-gray-300 px-4 py-2">Surface of paper</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Collinear Points</td>
    <td class="border border-gray-300 px-4 py-2">Points lying on the same line.</td>
    <td class="border border-gray-300 px-4 py-2">A, B, C on line l</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Concurrent Lines</td>
    <td class="border border-gray-300 px-4 py-2">Lines meeting at a single point.</td>
    <td class="border border-gray-300 px-4 py-2">Angle bisectors of a triangle</td>
  </tr>
</table>
<p class="mb-2"><strong>2. ANGLES AND THEIR TYPES</strong></p>
<p class="mb-2">An <strong>angle</strong> is formed when two rays meet at a common endpoint called the <strong>vertex</strong>.</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type of Angle</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Measure</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Acute Angle</td>
    <td class="border border-gray-300 px-4 py-2">Less than 90°</td>
    <td class="border border-gray-300 px-4 py-2">45°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Right Angle</td>
    <td class="border border-gray-300 px-4 py-2">Exactly 90°</td>
    <td class="border border-gray-300 px-4 py-2">90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Obtuse Angle</td>
    <td class="border border-gray-300 px-4 py-2">Between 90° and 180°</td>
    <td class="border border-gray-300 px-4 py-2">120°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Straight Angle</td>
    <td class="border border-gray-300 px-4 py-2">Exactly 180°</td>
    <td class="border border-gray-300 px-4 py-2">180°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Reflex Angle</td>
    <td class="border border-gray-300 px-4 py-2">Between 180° and 360°</td>
    <td class="border border-gray-300 px-4 py-2">270°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Complete Angle</td>
    <td class="border border-gray-300 px-4 py-2">Exactly 360°</td>
    <td class="border border-gray-300 px-4 py-2">360°</td>
  </tr>
</table>
<p class="mb-2"><strong>Adjacent Angles:</strong> Share a common vertex and one common arm.
<strong>Linear Pair:</strong> Two adjacent angles whose non-common arms form a straight line (sum = 180°).
<strong>Vertically Opposite Angles:</strong> Equal angles formed when two lines intersect.</p>
<p class="mb-2"><strong>3. PAIRS OF LINES</strong></p>
<p class="mb-2"><strong>Parallel Lines:</strong> Never meet, even when extended. (e.g., railway tracks)</p>
<p class="mb-2"><strong>Perpendicular Lines:</strong> Intersect to form a right angle (90°).</p>
<p class="mb-2"><strong>Transversal:</strong> A line that cuts two or more lines at distinct points.</p>
<p class="mb-2"><strong>Angles formed by a transversal:</strong></p>
<p class="mb-2">Corresponding angles – equal</p>
<p class="mb-2">Alternate interior angles – equal (if lines are parallel)</p>
<p class="mb-2">Consecutive interior angles – sum = 180°</p>
<p class="mb-2"><strong>4. TRIANGLES</strong></p>
<p class="mb-2">A <strong>triangle</strong> is a closed figure formed by three line segments.</p>
<p class="mb-2"><strong>Types Based on Sides</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Scalene</td>
    <td class="border border-gray-300 px-4 py-2">All sides unequal</td>
    <td class="border border-gray-300 px-4 py-2">5, 6, 7</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Isosceles</td>
    <td class="border border-gray-300 px-4 py-2">Two sides equal</td>
    <td class="border border-gray-300 px-4 py-2">5, 5, 8</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equilateral</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal</td>
    <td class="border border-gray-300 px-4 py-2">6, 6, 6</td>
  </tr>
</table>
<p class="mb-2"><strong>Types Based on Angles</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Acute-angled</td>
    <td class="border border-gray-300 px-4 py-2">All angles less than 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Right-angled</td>
    <td class="border border-gray-300 px-4 py-2">One angle is 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Obtuse-angled</td>
    <td class="border border-gray-300 px-4 py-2">One angle greater than 90°</td>
  </tr>
</table>
<p class="mb-2"><strong>Angle Sum Property:</strong>
Sum of the three interior angles of a triangle = <strong>180°</strong></p>
<p class="mb-2"><strong>5. CONGRUENCE OF TRIANGLES</strong></p>
<p class="mb-2">Two triangles are <strong>congruent</strong> if they have the same size and shape.
That means their corresponding sides and angles are equal.</p>
<p class="mb-2"><strong>Conditions for Congruence:</strong></p>
<p class="mb-2"><strong>SSS (Side-Side-Side)</strong> – All three sides equal.</p>
<p class="mb-2"><strong>SAS (Side-Angle-Side)</strong> – Two sides and the included angle equal.</p>
<p class="mb-2"><strong>ASA (Angle-Side-Angle)</strong> – Two angles and the included side equal.</p>
<p class="mb-2"><strong>AAS (Angle-Angle-Side)</strong> – Two angles and one corresponding side equal.</p>
<p class="mb-2"><strong>RHS (Right angle–Hypotenuse–Side)</strong> – Used for right-angled triangles.</p>
<p class="mb-2"><strong>6. IMPORTANT THEOREMS</strong></p>
<p class="mb-2"><strong>Theorem 1 (Sum of Angles of a Triangle):</strong>
The sum of the interior angles of a triangle is 180°.</p>
<p class="mb-2"><strong>Theorem 2 (Exterior Angle Theorem):</strong>
The exterior angle of a triangle is equal to the sum of the two interior opposite angles.
</p>
<p class="mb-2"><strong>Theorem 3 (Isosceles Triangle Theorem):</strong>
Angles opposite to equal sides are equal.</p>
<p class="mb-2"><strong>Converse of Isosceles Triangle Theorem:</strong>
Sides opposite to equal angles are equal.</p>
<p class="mb-2"><strong>Midpoint Theorem:</strong>
The line segment joining the midpoints of two sides of a triangle is <strong>parallel to the third side</strong> and <strong>half of it</strong>.</p>
<p class="mb-2"><strong>7. QUADRILATERALS</strong></p>
<p class="mb-2">A <strong>quadrilateral</strong> is a four-sided polygon.
The <strong>sum of its interior angles</strong> = <strong>360°</strong></p>
<p class="mb-2"><strong>Types of Quadrilaterals</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Key Properties</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2">Opposite sides parallel &amp; equal, opposite angles equal</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2">Parallelogram with all angles 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal, diagonals bisect at 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal, all angles 90°, diagonals equal</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2">One pair of opposite sides parallel</td>
  </tr>
</table>
<p class="mb-2"><strong>8. CIRCLES (Introduction Only)</strong></p>
<p class="mb-2">A <strong>circle</strong> is a set of all points in a plane equidistant from a fixed point (the <strong>centre</strong>).</p>
<p class="mb-2"><strong>Radius (r):</strong> Distance from centre to any point on the circle.</p>
<p class="mb-2"><strong>Diameter (d):</strong> Twice the radius. </p>
<p class="mb-2"><strong>Chord:</strong> A line segment joining two points on the circle.</p>
<p class="mb-2"><strong>Arc:</strong> A part of the circumference.</p>
<p class="mb-2"><strong>Sector:</strong> Region between two radii and the arc.</p>
<p class="mb-2"><strong>Segment:</strong> Region between a chord and the corresponding arc.</p>
<p class="mb-2"><strong>9. CONSTRUCTION OF TRIANGLES</strong></p>
<p class="mb-2">To construct triangles using compass and ruler:</p>
<p class="mb-2"><strong>SAS</strong> – Two sides and included angle given.</p>
<p class="mb-2"><strong>ASA</strong> – Two angles and included side given.</p>
<p class="mb-2"><strong>SSS</strong> – Three sides given.</p>
<p class="mb-2">Use compass to measure and draw arcs correctly.</p>
<p class="mb-2"><strong>10. KEY POINTS TO REMEMBER</strong></p>
<p class="mb-2">Sum of angles in a triangle = 180°</p>
<p class="mb-2">Exterior angle = Sum of opposite interior angles</p>
<p class="mb-2">Vertically opposite angles are equal</p>
<p class="mb-2">The line joining midpoints of two sides is parallel to the third side (Midpoint Theorem)</p>
<p class="mb-2">Quadrilateral angles sum to 360°</p>
<p class="mb-2">Practice geometric constructions accurately with compass and scale</p>
`
      },
      {
        id: 'triangles',
        title: 'Triangles',
        content: `<p class="mb-2"><strong>                          </strong><strong>UNIT 4 – GEOMETRY</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2"><strong>Geometry</strong> deals with the study of shapes, sizes, figures, positions, and the properties of space.
This unit builds on concepts from lower classes and introduces <strong>lines, angles, triangles, quadrilaterals</strong>, and theorems that form the base for higher-level geometry.</p>
<p class="mb-2"><strong>1. BASIC TERMS AND DEFINITIONS</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Term</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Definition</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Point</td>
    <td class="border border-gray-300 px-4 py-2">A position with no length, breadth, or thickness.</td>
    <td class="border border-gray-300 px-4 py-2">Represented by A, B, etc.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Line</td>
    <td class="border border-gray-300 px-4 py-2">Extends infinitely in both directions; no endpoints.</td>
    <td class="border border-gray-300 px-4 py-2">Line AB (↔AB)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Line Segment</td>
    <td class="border border-gray-300 px-4 py-2">A part of a line with two endpoints.</td>
    <td class="border border-gray-300 px-4 py-2">Segment AB</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Ray</td>
    <td class="border border-gray-300 px-4 py-2">A part of a line with one endpoint, extending infinitely in one direction.</td>
    <td class="border border-gray-300 px-4 py-2">Ray AB (→AB)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Plane</td>
    <td class="border border-gray-300 px-4 py-2">A flat surface extending infinitely.</td>
    <td class="border border-gray-300 px-4 py-2">Surface of paper</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Collinear Points</td>
    <td class="border border-gray-300 px-4 py-2">Points lying on the same line.</td>
    <td class="border border-gray-300 px-4 py-2">A, B, C on line l</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Concurrent Lines</td>
    <td class="border border-gray-300 px-4 py-2">Lines meeting at a single point.</td>
    <td class="border border-gray-300 px-4 py-2">Angle bisectors of a triangle</td>
  </tr>
</table>
<p class="mb-2"><strong>2. ANGLES AND THEIR TYPES</strong></p>
<p class="mb-2">An <strong>angle</strong> is formed when two rays meet at a common endpoint called the <strong>vertex</strong>.</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type of Angle</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Measure</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Acute Angle</td>
    <td class="border border-gray-300 px-4 py-2">Less than 90°</td>
    <td class="border border-gray-300 px-4 py-2">45°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Right Angle</td>
    <td class="border border-gray-300 px-4 py-2">Exactly 90°</td>
    <td class="border border-gray-300 px-4 py-2">90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Obtuse Angle</td>
    <td class="border border-gray-300 px-4 py-2">Between 90° and 180°</td>
    <td class="border border-gray-300 px-4 py-2">120°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Straight Angle</td>
    <td class="border border-gray-300 px-4 py-2">Exactly 180°</td>
    <td class="border border-gray-300 px-4 py-2">180°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Reflex Angle</td>
    <td class="border border-gray-300 px-4 py-2">Between 180° and 360°</td>
    <td class="border border-gray-300 px-4 py-2">270°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Complete Angle</td>
    <td class="border border-gray-300 px-4 py-2">Exactly 360°</td>
    <td class="border border-gray-300 px-4 py-2">360°</td>
  </tr>
</table>
<p class="mb-2"><strong>Adjacent Angles:</strong> Share a common vertex and one common arm.
<strong>Linear Pair:</strong> Two adjacent angles whose non-common arms form a straight line (sum = 180°).
<strong>Vertically Opposite Angles:</strong> Equal angles formed when two lines intersect.</p>
<p class="mb-2"><strong>3. PAIRS OF LINES</strong></p>
<p class="mb-2"><strong>Parallel Lines:</strong> Never meet, even when extended. (e.g., railway tracks)</p>
<p class="mb-2"><strong>Perpendicular Lines:</strong> Intersect to form a right angle (90°).</p>
<p class="mb-2"><strong>Transversal:</strong> A line that cuts two or more lines at distinct points.</p>
<p class="mb-2"><strong>Angles formed by a transversal:</strong></p>
<p class="mb-2">Corresponding angles – equal</p>
<p class="mb-2">Alternate interior angles – equal (if lines are parallel)</p>
<p class="mb-2">Consecutive interior angles – sum = 180°</p>
<p class="mb-2"><strong>4. TRIANGLES</strong></p>
<p class="mb-2">A <strong>triangle</strong> is a closed figure formed by three line segments.</p>
<p class="mb-2"><strong>Types Based on Sides</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Scalene</td>
    <td class="border border-gray-300 px-4 py-2">All sides unequal</td>
    <td class="border border-gray-300 px-4 py-2">5, 6, 7</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Isosceles</td>
    <td class="border border-gray-300 px-4 py-2">Two sides equal</td>
    <td class="border border-gray-300 px-4 py-2">5, 5, 8</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equilateral</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal</td>
    <td class="border border-gray-300 px-4 py-2">6, 6, 6</td>
  </tr>
</table>
<p class="mb-2"><strong>Types Based on Angles</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Acute-angled</td>
    <td class="border border-gray-300 px-4 py-2">All angles less than 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Right-angled</td>
    <td class="border border-gray-300 px-4 py-2">One angle is 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Obtuse-angled</td>
    <td class="border border-gray-300 px-4 py-2">One angle greater than 90°</td>
  </tr>
</table>
<p class="mb-2"><strong>Angle Sum Property:</strong>
Sum of the three interior angles of a triangle = <strong>180°</strong></p>
<p class="mb-2"><strong>5. CONGRUENCE OF TRIANGLES</strong></p>
<p class="mb-2">Two triangles are <strong>congruent</strong> if they have the same size and shape.
That means their corresponding sides and angles are equal.</p>
<p class="mb-2"><strong>Conditions for Congruence:</strong></p>
<p class="mb-2"><strong>SSS (Side-Side-Side)</strong> – All three sides equal.</p>
<p class="mb-2"><strong>SAS (Side-Angle-Side)</strong> – Two sides and the included angle equal.</p>
<p class="mb-2"><strong>ASA (Angle-Side-Angle)</strong> – Two angles and the included side equal.</p>
<p class="mb-2"><strong>AAS (Angle-Angle-Side)</strong> – Two angles and one corresponding side equal.</p>
<p class="mb-2"><strong>RHS (Right angle–Hypotenuse–Side)</strong> – Used for right-angled triangles.</p>
<p class="mb-2"><strong>6. IMPORTANT THEOREMS</strong></p>
<p class="mb-2"><strong>Theorem 1 (Sum of Angles of a Triangle):</strong>
The sum of the interior angles of a triangle is 180°.</p>
<p class="mb-2"><strong>Theorem 2 (Exterior Angle Theorem):</strong>
The exterior angle of a triangle is equal to the sum of the two interior opposite angles.
</p>
<p class="mb-2"><strong>Theorem 3 (Isosceles Triangle Theorem):</strong>
Angles opposite to equal sides are equal.</p>
<p class="mb-2"><strong>Converse of Isosceles Triangle Theorem:</strong>
Sides opposite to equal angles are equal.</p>
<p class="mb-2"><strong>Midpoint Theorem:</strong>
The line segment joining the midpoints of two sides of a triangle is <strong>parallel to the third side</strong> and <strong>half of it</strong>.</p>
<p class="mb-2"><strong>7. QUADRILATERALS</strong></p>
<p class="mb-2">A <strong>quadrilateral</strong> is a four-sided polygon.
The <strong>sum of its interior angles</strong> = <strong>360°</strong></p>
<p class="mb-2"><strong>Types of Quadrilaterals</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Key Properties</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2">Opposite sides parallel &amp; equal, opposite angles equal</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2">Parallelogram with all angles 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal, diagonals bisect at 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal, all angles 90°, diagonals equal</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2">One pair of opposite sides parallel</td>
  </tr>
</table>
<p class="mb-2"><strong>8. CIRCLES (Introduction Only)</strong></p>
<p class="mb-2">A <strong>circle</strong> is a set of all points in a plane equidistant from a fixed point (the <strong>centre</strong>).</p>
<p class="mb-2"><strong>Radius (r):</strong> Distance from centre to any point on the circle.</p>
<p class="mb-2"><strong>Diameter (d):</strong> Twice the radius. </p>
<p class="mb-2"><strong>Chord:</strong> A line segment joining two points on the circle.</p>
<p class="mb-2"><strong>Arc:</strong> A part of the circumference.</p>
<p class="mb-2"><strong>Sector:</strong> Region between two radii and the arc.</p>
<p class="mb-2"><strong>Segment:</strong> Region between a chord and the corresponding arc.</p>
<p class="mb-2"><strong>9. CONSTRUCTION OF TRIANGLES</strong></p>
<p class="mb-2">To construct triangles using compass and ruler:</p>
<p class="mb-2"><strong>SAS</strong> – Two sides and included angle given.</p>
<p class="mb-2"><strong>ASA</strong> – Two angles and included side given.</p>
<p class="mb-2"><strong>SSS</strong> – Three sides given.</p>
<p class="mb-2">Use compass to measure and draw arcs correctly.</p>
<p class="mb-2"><strong>10. KEY POINTS TO REMEMBER</strong></p>
<p class="mb-2">Sum of angles in a triangle = 180°</p>
<p class="mb-2">Exterior angle = Sum of opposite interior angles</p>
<p class="mb-2">Vertically opposite angles are equal</p>
<p class="mb-2">The line joining midpoints of two sides is parallel to the third side (Midpoint Theorem)</p>
<p class="mb-2">Quadrilateral angles sum to 360°</p>
<p class="mb-2">Practice geometric constructions accurately with compass and scale</p>
`
      },
      {
        id: 'congruence',
        title: 'Congruence of Triangles',
        content: `<p class="mb-2"><strong>                          </strong><strong>UNIT 4 – GEOMETRY</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2"><strong>Geometry</strong> deals with the study of shapes, sizes, figures, positions, and the properties of space.
This unit builds on concepts from lower classes and introduces <strong>lines, angles, triangles, quadrilaterals</strong>, and theorems that form the base for higher-level geometry.</p>
<p class="mb-2"><strong>1. BASIC TERMS AND DEFINITIONS</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Term</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Definition</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Point</td>
    <td class="border border-gray-300 px-4 py-2">A position with no length, breadth, or thickness.</td>
    <td class="border border-gray-300 px-4 py-2">Represented by A, B, etc.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Line</td>
    <td class="border border-gray-300 px-4 py-2">Extends infinitely in both directions; no endpoints.</td>
    <td class="border border-gray-300 px-4 py-2">Line AB (↔AB)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Line Segment</td>
    <td class="border border-gray-300 px-4 py-2">A part of a line with two endpoints.</td>
    <td class="border border-gray-300 px-4 py-2">Segment AB</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Ray</td>
    <td class="border border-gray-300 px-4 py-2">A part of a line with one endpoint, extending infinitely in one direction.</td>
    <td class="border border-gray-300 px-4 py-2">Ray AB (→AB)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Plane</td>
    <td class="border border-gray-300 px-4 py-2">A flat surface extending infinitely.</td>
    <td class="border border-gray-300 px-4 py-2">Surface of paper</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Collinear Points</td>
    <td class="border border-gray-300 px-4 py-2">Points lying on the same line.</td>
    <td class="border border-gray-300 px-4 py-2">A, B, C on line l</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Concurrent Lines</td>
    <td class="border border-gray-300 px-4 py-2">Lines meeting at a single point.</td>
    <td class="border border-gray-300 px-4 py-2">Angle bisectors of a triangle</td>
  </tr>
</table>
<p class="mb-2"><strong>2. ANGLES AND THEIR TYPES</strong></p>
<p class="mb-2">An <strong>angle</strong> is formed when two rays meet at a common endpoint called the <strong>vertex</strong>.</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type of Angle</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Measure</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Acute Angle</td>
    <td class="border border-gray-300 px-4 py-2">Less than 90°</td>
    <td class="border border-gray-300 px-4 py-2">45°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Right Angle</td>
    <td class="border border-gray-300 px-4 py-2">Exactly 90°</td>
    <td class="border border-gray-300 px-4 py-2">90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Obtuse Angle</td>
    <td class="border border-gray-300 px-4 py-2">Between 90° and 180°</td>
    <td class="border border-gray-300 px-4 py-2">120°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Straight Angle</td>
    <td class="border border-gray-300 px-4 py-2">Exactly 180°</td>
    <td class="border border-gray-300 px-4 py-2">180°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Reflex Angle</td>
    <td class="border border-gray-300 px-4 py-2">Between 180° and 360°</td>
    <td class="border border-gray-300 px-4 py-2">270°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Complete Angle</td>
    <td class="border border-gray-300 px-4 py-2">Exactly 360°</td>
    <td class="border border-gray-300 px-4 py-2">360°</td>
  </tr>
</table>
<p class="mb-2"><strong>Adjacent Angles:</strong> Share a common vertex and one common arm.
<strong>Linear Pair:</strong> Two adjacent angles whose non-common arms form a straight line (sum = 180°).
<strong>Vertically Opposite Angles:</strong> Equal angles formed when two lines intersect.</p>
<p class="mb-2"><strong>3. PAIRS OF LINES</strong></p>
<p class="mb-2"><strong>Parallel Lines:</strong> Never meet, even when extended. (e.g., railway tracks)</p>
<p class="mb-2"><strong>Perpendicular Lines:</strong> Intersect to form a right angle (90°).</p>
<p class="mb-2"><strong>Transversal:</strong> A line that cuts two or more lines at distinct points.</p>
<p class="mb-2"><strong>Angles formed by a transversal:</strong></p>
<p class="mb-2">Corresponding angles – equal</p>
<p class="mb-2">Alternate interior angles – equal (if lines are parallel)</p>
<p class="mb-2">Consecutive interior angles – sum = 180°</p>
<p class="mb-2"><strong>4. TRIANGLES</strong></p>
<p class="mb-2">A <strong>triangle</strong> is a closed figure formed by three line segments.</p>
<p class="mb-2"><strong>Types Based on Sides</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Scalene</td>
    <td class="border border-gray-300 px-4 py-2">All sides unequal</td>
    <td class="border border-gray-300 px-4 py-2">5, 6, 7</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Isosceles</td>
    <td class="border border-gray-300 px-4 py-2">Two sides equal</td>
    <td class="border border-gray-300 px-4 py-2">5, 5, 8</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equilateral</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal</td>
    <td class="border border-gray-300 px-4 py-2">6, 6, 6</td>
  </tr>
</table>
<p class="mb-2"><strong>Types Based on Angles</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Acute-angled</td>
    <td class="border border-gray-300 px-4 py-2">All angles less than 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Right-angled</td>
    <td class="border border-gray-300 px-4 py-2">One angle is 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Obtuse-angled</td>
    <td class="border border-gray-300 px-4 py-2">One angle greater than 90°</td>
  </tr>
</table>
<p class="mb-2"><strong>Angle Sum Property:</strong>
Sum of the three interior angles of a triangle = <strong>180°</strong></p>
<p class="mb-2"><strong>5. CONGRUENCE OF TRIANGLES</strong></p>
<p class="mb-2">Two triangles are <strong>congruent</strong> if they have the same size and shape.
That means their corresponding sides and angles are equal.</p>
<p class="mb-2"><strong>Conditions for Congruence:</strong></p>
<p class="mb-2"><strong>SSS (Side-Side-Side)</strong> – All three sides equal.</p>
<p class="mb-2"><strong>SAS (Side-Angle-Side)</strong> – Two sides and the included angle equal.</p>
<p class="mb-2"><strong>ASA (Angle-Side-Angle)</strong> – Two angles and the included side equal.</p>
<p class="mb-2"><strong>AAS (Angle-Angle-Side)</strong> – Two angles and one corresponding side equal.</p>
<p class="mb-2"><strong>RHS (Right angle–Hypotenuse–Side)</strong> – Used for right-angled triangles.</p>
<p class="mb-2"><strong>6. IMPORTANT THEOREMS</strong></p>
<p class="mb-2"><strong>Theorem 1 (Sum of Angles of a Triangle):</strong>
The sum of the interior angles of a triangle is 180°.</p>
<p class="mb-2"><strong>Theorem 2 (Exterior Angle Theorem):</strong>
The exterior angle of a triangle is equal to the sum of the two interior opposite angles.
</p>
<p class="mb-2"><strong>Theorem 3 (Isosceles Triangle Theorem):</strong>
Angles opposite to equal sides are equal.</p>
<p class="mb-2"><strong>Converse of Isosceles Triangle Theorem:</strong>
Sides opposite to equal angles are equal.</p>
<p class="mb-2"><strong>Midpoint Theorem:</strong>
The line segment joining the midpoints of two sides of a triangle is <strong>parallel to the third side</strong> and <strong>half of it</strong>.</p>
<p class="mb-2"><strong>7. QUADRILATERALS</strong></p>
<p class="mb-2">A <strong>quadrilateral</strong> is a four-sided polygon.
The <strong>sum of its interior angles</strong> = <strong>360°</strong></p>
<p class="mb-2"><strong>Types of Quadrilaterals</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Key Properties</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2">Opposite sides parallel &amp; equal, opposite angles equal</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2">Parallelogram with all angles 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal, diagonals bisect at 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal, all angles 90°, diagonals equal</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2">One pair of opposite sides parallel</td>
  </tr>
</table>
<p class="mb-2"><strong>8. CIRCLES (Introduction Only)</strong></p>
<p class="mb-2">A <strong>circle</strong> is a set of all points in a plane equidistant from a fixed point (the <strong>centre</strong>).</p>
<p class="mb-2"><strong>Radius (r):</strong> Distance from centre to any point on the circle.</p>
<p class="mb-2"><strong>Diameter (d):</strong> Twice the radius. </p>
<p class="mb-2"><strong>Chord:</strong> A line segment joining two points on the circle.</p>
<p class="mb-2"><strong>Arc:</strong> A part of the circumference.</p>
<p class="mb-2"><strong>Sector:</strong> Region between two radii and the arc.</p>
<p class="mb-2"><strong>Segment:</strong> Region between a chord and the corresponding arc.</p>
<p class="mb-2"><strong>9. CONSTRUCTION OF TRIANGLES</strong></p>
<p class="mb-2">To construct triangles using compass and ruler:</p>
<p class="mb-2"><strong>SAS</strong> – Two sides and included angle given.</p>
<p class="mb-2"><strong>ASA</strong> – Two angles and included side given.</p>
<p class="mb-2"><strong>SSS</strong> – Three sides given.</p>
<p class="mb-2">Use compass to measure and draw arcs correctly.</p>
<p class="mb-2"><strong>10. KEY POINTS TO REMEMBER</strong></p>
<p class="mb-2">Sum of angles in a triangle = 180°</p>
<p class="mb-2">Exterior angle = Sum of opposite interior angles</p>
<p class="mb-2">Vertically opposite angles are equal</p>
<p class="mb-2">The line joining midpoints of two sides is parallel to the third side (Midpoint Theorem)</p>
<p class="mb-2">Quadrilateral angles sum to 360°</p>
<p class="mb-2">Practice geometric constructions accurately with compass and scale</p>
`
      },
      {
        id: 'geometric-constructions',
        title: 'Geometric Constructions',
        content: `<p class="mb-2"><strong>                          </strong><strong>UNIT 4 – GEOMETRY</strong></p>
<p class="mb-2"><strong>Introduction</strong></p>
<p class="mb-2"><strong>Geometry</strong> deals with the study of shapes, sizes, figures, positions, and the properties of space.
This unit builds on concepts from lower classes and introduces <strong>lines, angles, triangles, quadrilaterals</strong>, and theorems that form the base for higher-level geometry.</p>
<p class="mb-2"><strong>1. BASIC TERMS AND DEFINITIONS</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Term</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Definition</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Point</td>
    <td class="border border-gray-300 px-4 py-2">A position with no length, breadth, or thickness.</td>
    <td class="border border-gray-300 px-4 py-2">Represented by A, B, etc.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Line</td>
    <td class="border border-gray-300 px-4 py-2">Extends infinitely in both directions; no endpoints.</td>
    <td class="border border-gray-300 px-4 py-2">Line AB (↔AB)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Line Segment</td>
    <td class="border border-gray-300 px-4 py-2">A part of a line with two endpoints.</td>
    <td class="border border-gray-300 px-4 py-2">Segment AB</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Ray</td>
    <td class="border border-gray-300 px-4 py-2">A part of a line with one endpoint, extending infinitely in one direction.</td>
    <td class="border border-gray-300 px-4 py-2">Ray AB (→AB)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Plane</td>
    <td class="border border-gray-300 px-4 py-2">A flat surface extending infinitely.</td>
    <td class="border border-gray-300 px-4 py-2">Surface of paper</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Collinear Points</td>
    <td class="border border-gray-300 px-4 py-2">Points lying on the same line.</td>
    <td class="border border-gray-300 px-4 py-2">A, B, C on line l</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Concurrent Lines</td>
    <td class="border border-gray-300 px-4 py-2">Lines meeting at a single point.</td>
    <td class="border border-gray-300 px-4 py-2">Angle bisectors of a triangle</td>
  </tr>
</table>
<p class="mb-2"><strong>2. ANGLES AND THEIR TYPES</strong></p>
<p class="mb-2">An <strong>angle</strong> is formed when two rays meet at a common endpoint called the <strong>vertex</strong>.</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type of Angle</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Measure</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Acute Angle</td>
    <td class="border border-gray-300 px-4 py-2">Less than 90°</td>
    <td class="border border-gray-300 px-4 py-2">45°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Right Angle</td>
    <td class="border border-gray-300 px-4 py-2">Exactly 90°</td>
    <td class="border border-gray-300 px-4 py-2">90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Obtuse Angle</td>
    <td class="border border-gray-300 px-4 py-2">Between 90° and 180°</td>
    <td class="border border-gray-300 px-4 py-2">120°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Straight Angle</td>
    <td class="border border-gray-300 px-4 py-2">Exactly 180°</td>
    <td class="border border-gray-300 px-4 py-2">180°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Reflex Angle</td>
    <td class="border border-gray-300 px-4 py-2">Between 180° and 360°</td>
    <td class="border border-gray-300 px-4 py-2">270°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Complete Angle</td>
    <td class="border border-gray-300 px-4 py-2">Exactly 360°</td>
    <td class="border border-gray-300 px-4 py-2">360°</td>
  </tr>
</table>
<p class="mb-2"><strong>Adjacent Angles:</strong> Share a common vertex and one common arm.
<strong>Linear Pair:</strong> Two adjacent angles whose non-common arms form a straight line (sum = 180°).
<strong>Vertically Opposite Angles:</strong> Equal angles formed when two lines intersect.</p>
<p class="mb-2"><strong>3. PAIRS OF LINES</strong></p>
<p class="mb-2"><strong>Parallel Lines:</strong> Never meet, even when extended. (e.g., railway tracks)</p>
<p class="mb-2"><strong>Perpendicular Lines:</strong> Intersect to form a right angle (90°).</p>
<p class="mb-2"><strong>Transversal:</strong> A line that cuts two or more lines at distinct points.</p>
<p class="mb-2"><strong>Angles formed by a transversal:</strong></p>
<p class="mb-2">Corresponding angles – equal</p>
<p class="mb-2">Alternate interior angles – equal (if lines are parallel)</p>
<p class="mb-2">Consecutive interior angles – sum = 180°</p>
<p class="mb-2"><strong>4. TRIANGLES</strong></p>
<p class="mb-2">A <strong>triangle</strong> is a closed figure formed by three line segments.</p>
<p class="mb-2"><strong>Types Based on Sides</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Example</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Scalene</td>
    <td class="border border-gray-300 px-4 py-2">All sides unequal</td>
    <td class="border border-gray-300 px-4 py-2">5, 6, 7</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Isosceles</td>
    <td class="border border-gray-300 px-4 py-2">Two sides equal</td>
    <td class="border border-gray-300 px-4 py-2">5, 5, 8</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equilateral</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal</td>
    <td class="border border-gray-300 px-4 py-2">6, 6, 6</td>
  </tr>
</table>
<p class="mb-2"><strong>Types Based on Angles</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Acute-angled</td>
    <td class="border border-gray-300 px-4 py-2">All angles less than 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Right-angled</td>
    <td class="border border-gray-300 px-4 py-2">One angle is 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Obtuse-angled</td>
    <td class="border border-gray-300 px-4 py-2">One angle greater than 90°</td>
  </tr>
</table>
<p class="mb-2"><strong>Angle Sum Property:</strong>
Sum of the three interior angles of a triangle = <strong>180°</strong></p>
<p class="mb-2"><strong>5. CONGRUENCE OF TRIANGLES</strong></p>
<p class="mb-2">Two triangles are <strong>congruent</strong> if they have the same size and shape.
That means their corresponding sides and angles are equal.</p>
<p class="mb-2"><strong>Conditions for Congruence:</strong></p>
<p class="mb-2"><strong>SSS (Side-Side-Side)</strong> – All three sides equal.</p>
<p class="mb-2"><strong>SAS (Side-Angle-Side)</strong> – Two sides and the included angle equal.</p>
<p class="mb-2"><strong>ASA (Angle-Side-Angle)</strong> – Two angles and the included side equal.</p>
<p class="mb-2"><strong>AAS (Angle-Angle-Side)</strong> – Two angles and one corresponding side equal.</p>
<p class="mb-2"><strong>RHS (Right angle–Hypotenuse–Side)</strong> – Used for right-angled triangles.</p>
<p class="mb-2"><strong>6. IMPORTANT THEOREMS</strong></p>
<p class="mb-2"><strong>Theorem 1 (Sum of Angles of a Triangle):</strong>
The sum of the interior angles of a triangle is 180°.</p>
<p class="mb-2"><strong>Theorem 2 (Exterior Angle Theorem):</strong>
The exterior angle of a triangle is equal to the sum of the two interior opposite angles.
</p>
<p class="mb-2"><strong>Theorem 3 (Isosceles Triangle Theorem):</strong>
Angles opposite to equal sides are equal.</p>
<p class="mb-2"><strong>Converse of Isosceles Triangle Theorem:</strong>
Sides opposite to equal angles are equal.</p>
<p class="mb-2"><strong>Midpoint Theorem:</strong>
The line segment joining the midpoints of two sides of a triangle is <strong>parallel to the third side</strong> and <strong>half of it</strong>.</p>
<p class="mb-2"><strong>7. QUADRILATERALS</strong></p>
<p class="mb-2">A <strong>quadrilateral</strong> is a four-sided polygon.
The <strong>sum of its interior angles</strong> = <strong>360°</strong></p>
<p class="mb-2"><strong>Types of Quadrilaterals</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Type</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Key Properties</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2">Opposite sides parallel &amp; equal, opposite angles equal</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2">Parallelogram with all angles 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal, diagonals bisect at 90°</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal, all angles 90°, diagonals equal</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2">One pair of opposite sides parallel</td>
  </tr>
</table>
<p class="mb-2"><strong>8. CIRCLES (Introduction Only)</strong></p>
<p class="mb-2">A <strong>circle</strong> is a set of all points in a plane equidistant from a fixed point (the <strong>centre</strong>).</p>
<p class="mb-2"><strong>Radius (r):</strong> Distance from centre to any point on the circle.</p>
<p class="mb-2"><strong>Diameter (d):</strong> Twice the radius. </p>
<p class="mb-2"><strong>Chord:</strong> A line segment joining two points on the circle.</p>
<p class="mb-2"><strong>Arc:</strong> A part of the circumference.</p>
<p class="mb-2"><strong>Sector:</strong> Region between two radii and the arc.</p>
<p class="mb-2"><strong>Segment:</strong> Region between a chord and the corresponding arc.</p>
<p class="mb-2"><strong>9. CONSTRUCTION OF TRIANGLES</strong></p>
<p class="mb-2">To construct triangles using compass and ruler:</p>
<p class="mb-2"><strong>SAS</strong> – Two sides and included angle given.</p>
<p class="mb-2"><strong>ASA</strong> – Two angles and included side given.</p>
<p class="mb-2"><strong>SSS</strong> – Three sides given.</p>
<p class="mb-2">Use compass to measure and draw arcs correctly.</p>
<p class="mb-2"><strong>10. KEY POINTS TO REMEMBER</strong></p>
<p class="mb-2">Sum of angles in a triangle = 180°</p>
<p class="mb-2">Exterior angle = Sum of opposite interior angles</p>
<p class="mb-2">Vertically opposite angles are equal</p>
<p class="mb-2">The line joining midpoints of two sides is parallel to the third side (Midpoint Theorem)</p>
<p class="mb-2">Quadrilateral angles sum to 360°</p>
<p class="mb-2">Practice geometric constructions accurately with compass and scale</p>
`
      },
    ]
  },
  {
    id: 'unit-5',
    title: 'Unit 5 - Coordinate Geometry',
    topics: [
      {
        id: 'cartesian-plane',
        title: 'Cartesian Plane',
        content: `<p class="mb-2"><strong>               </strong><strong>UNIT 5 – COORDINATE GEOMETRY </strong></p>
<p class="mb-2"><strong>1. Introduction</strong></p>
<p class="mb-2"><strong>Coordinate Geometry</strong> connects <strong>algebra and geometry</strong> — it helps locate points, find distances, and equations of lines using coordinates (x, y).</p>
<p class="mb-2"><strong>2. Cartesian Plane</strong></p>
<p class="mb-2">Invented by <strong>René Descartes</strong>.</p>
<p class="mb-2">A plane divided into <strong>four quadrants</strong> by:</p>
<p class="mb-2"><strong>X-axis</strong> (horizontal line)</p>
<p class="mb-2"><strong>Y-axis</strong> (vertical line)</p>
<p class="mb-2"><strong>Origin (O)</strong> – point where X and Y axes meet (0, 0)</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quadrant</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Sign of (x, y)</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">I</td>
    <td class="border border-gray-300 px-4 py-2">(+, +)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">II</td>
    <td class="border border-gray-300 px-4 py-2">(−, +)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">III</td>
    <td class="border border-gray-300 px-4 py-2">(−, −)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">IV</td>
    <td class="border border-gray-300 px-4 py-2">(+, −)</td>
  </tr>
</table>
<p class="mb-2"><strong>3. Coordinates of a Point</strong></p>
<p class="mb-2">A point is represented as <strong>P(</strong><strong>x, y)</strong></p>
<p class="mb-2">x → <strong>Abscissa</strong> (horizontal distance)</p>
<p class="mb-2">y → <strong>Ordinate</strong> (vertical distance)</p>
<p class="mb-2">Example:
If P(3, 4), move 3 units on X-axis and 4 units up on Y-axis.</p>
<p class="mb-2"><strong>4. Distance Formula</strong></p>
<p class="mb-2">For two points and :</p>
<p class="mb-2">👉 Used to find length between two points.</p>
<p class="mb-2"><strong>5. Section Formula</strong></p>
<p class="mb-2">If point P divides the line joining A(x₁, y₁) and B(x₂, y₂) in the ratio m : n,
then coordinates of P are:</p>
<p class="mb-2">👉 If m = n, P is the <strong>midpoint</strong> of AB.</p>
<p class="mb-2"><strong>6. Midpoint Formula</strong></p>
<p class="mb-2">For two points and :</p>
<p class="mb-2"><strong>7. Area of a Triangle</strong></p>
<p class="mb-2">If vertices are A(x₁, y₁), B(x₂, y₂), C(x₃, y₃):</p>
<p class="mb-2">👉 If area = 0, the points are <strong>collinear</strong> (lie on a straight line).</p>
<p class="mb-2"><strong>8. Key Notes</strong></p>
<p class="mb-2">X-axis and Y-axis divide the plane into 4 quadrants.</p>
<p class="mb-2">Distance formula helps find line lengths.</p>
<p class="mb-2">Section &amp; Midpoint formulas locate dividing points.</p>
<p class="mb-2">Area formula helps check if points form a triangle.</p>
`
      },
      {
        id: 'plotting-points',
        title: 'Plotting Points',
        content: `<p class="mb-2"><strong>               </strong><strong>UNIT 5 – COORDINATE GEOMETRY </strong></p>
<p class="mb-2"><strong>1. Introduction</strong></p>
<p class="mb-2"><strong>Coordinate Geometry</strong> connects <strong>algebra and geometry</strong> — it helps locate points, find distances, and equations of lines using coordinates (x, y).</p>
<p class="mb-2"><strong>2. Cartesian Plane</strong></p>
<p class="mb-2">Invented by <strong>René Descartes</strong>.</p>
<p class="mb-2">A plane divided into <strong>four quadrants</strong> by:</p>
<p class="mb-2"><strong>X-axis</strong> (horizontal line)</p>
<p class="mb-2"><strong>Y-axis</strong> (vertical line)</p>
<p class="mb-2"><strong>Origin (O)</strong> – point where X and Y axes meet (0, 0)</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quadrant</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Sign of (x, y)</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">I</td>
    <td class="border border-gray-300 px-4 py-2">(+, +)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">II</td>
    <td class="border border-gray-300 px-4 py-2">(−, +)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">III</td>
    <td class="border border-gray-300 px-4 py-2">(−, −)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">IV</td>
    <td class="border border-gray-300 px-4 py-2">(+, −)</td>
  </tr>
</table>
<p class="mb-2"><strong>3. Coordinates of a Point</strong></p>
<p class="mb-2">A point is represented as <strong>P(</strong><strong>x, y)</strong></p>
<p class="mb-2">x → <strong>Abscissa</strong> (horizontal distance)</p>
<p class="mb-2">y → <strong>Ordinate</strong> (vertical distance)</p>
<p class="mb-2">Example:
If P(3, 4), move 3 units on X-axis and 4 units up on Y-axis.</p>
<p class="mb-2"><strong>4. Distance Formula</strong></p>
<p class="mb-2">For two points and :</p>
<p class="mb-2">👉 Used to find length between two points.</p>
<p class="mb-2"><strong>5. Section Formula</strong></p>
<p class="mb-2">If point P divides the line joining A(x₁, y₁) and B(x₂, y₂) in the ratio m : n,
then coordinates of P are:</p>
<p class="mb-2">👉 If m = n, P is the <strong>midpoint</strong> of AB.</p>
<p class="mb-2"><strong>6. Midpoint Formula</strong></p>
<p class="mb-2">For two points and :</p>
<p class="mb-2"><strong>7. Area of a Triangle</strong></p>
<p class="mb-2">If vertices are A(x₁, y₁), B(x₂, y₂), C(x₃, y₃):</p>
<p class="mb-2">👉 If area = 0, the points are <strong>collinear</strong> (lie on a straight line).</p>
<p class="mb-2"><strong>8. Key Notes</strong></p>
<p class="mb-2">X-axis and Y-axis divide the plane into 4 quadrants.</p>
<p class="mb-2">Distance formula helps find line lengths.</p>
<p class="mb-2">Section &amp; Midpoint formulas locate dividing points.</p>
<p class="mb-2">Area formula helps check if points form a triangle.</p>
`
      },
      {
        id: 'distance-formula',
        title: 'Distance Formula',
        content: `<p class="mb-2"><strong>               </strong><strong>UNIT 5 – COORDINATE GEOMETRY </strong></p>
<p class="mb-2"><strong>1. Introduction</strong></p>
<p class="mb-2"><strong>Coordinate Geometry</strong> connects <strong>algebra and geometry</strong> — it helps locate points, find distances, and equations of lines using coordinates (x, y).</p>
<p class="mb-2"><strong>2. Cartesian Plane</strong></p>
<p class="mb-2">Invented by <strong>René Descartes</strong>.</p>
<p class="mb-2">A plane divided into <strong>four quadrants</strong> by:</p>
<p class="mb-2"><strong>X-axis</strong> (horizontal line)</p>
<p class="mb-2"><strong>Y-axis</strong> (vertical line)</p>
<p class="mb-2"><strong>Origin (O)</strong> – point where X and Y axes meet (0, 0)</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quadrant</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Sign of (x, y)</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">I</td>
    <td class="border border-gray-300 px-4 py-2">(+, +)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">II</td>
    <td class="border border-gray-300 px-4 py-2">(−, +)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">III</td>
    <td class="border border-gray-300 px-4 py-2">(−, −)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">IV</td>
    <td class="border border-gray-300 px-4 py-2">(+, −)</td>
  </tr>
</table>
<p class="mb-2"><strong>3. Coordinates of a Point</strong></p>
<p class="mb-2">A point is represented as <strong>P(</strong><strong>x, y)</strong></p>
<p class="mb-2">x → <strong>Abscissa</strong> (horizontal distance)</p>
<p class="mb-2">y → <strong>Ordinate</strong> (vertical distance)</p>
<p class="mb-2">Example:
If P(3, 4), move 3 units on X-axis and 4 units up on Y-axis.</p>
<p class="mb-2"><strong>4. Distance Formula</strong></p>
<p class="mb-2">For two points and :</p>
<p class="mb-2">👉 Used to find length between two points.</p>
<p class="mb-2"><strong>5. Section Formula</strong></p>
<p class="mb-2">If point P divides the line joining A(x₁, y₁) and B(x₂, y₂) in the ratio m : n,
then coordinates of P are:</p>
<p class="mb-2">👉 If m = n, P is the <strong>midpoint</strong> of AB.</p>
<p class="mb-2"><strong>6. Midpoint Formula</strong></p>
<p class="mb-2">For two points and :</p>
<p class="mb-2"><strong>7. Area of a Triangle</strong></p>
<p class="mb-2">If vertices are A(x₁, y₁), B(x₂, y₂), C(x₃, y₃):</p>
<p class="mb-2">👉 If area = 0, the points are <strong>collinear</strong> (lie on a straight line).</p>
<p class="mb-2"><strong>8. Key Notes</strong></p>
<p class="mb-2">X-axis and Y-axis divide the plane into 4 quadrants.</p>
<p class="mb-2">Distance formula helps find line lengths.</p>
<p class="mb-2">Section &amp; Midpoint formulas locate dividing points.</p>
<p class="mb-2">Area formula helps check if points form a triangle.</p>
`
      },
      {
        id: 'section-formula',
        title: 'Section Formula',
        content: `<p class="mb-2"><strong>               </strong><strong>UNIT 5 – COORDINATE GEOMETRY </strong></p>
<p class="mb-2"><strong>1. Introduction</strong></p>
<p class="mb-2"><strong>Coordinate Geometry</strong> connects <strong>algebra and geometry</strong> — it helps locate points, find distances, and equations of lines using coordinates (x, y).</p>
<p class="mb-2"><strong>2. Cartesian Plane</strong></p>
<p class="mb-2">Invented by <strong>René Descartes</strong>.</p>
<p class="mb-2">A plane divided into <strong>four quadrants</strong> by:</p>
<p class="mb-2"><strong>X-axis</strong> (horizontal line)</p>
<p class="mb-2"><strong>Y-axis</strong> (vertical line)</p>
<p class="mb-2"><strong>Origin (O)</strong> – point where X and Y axes meet (0, 0)</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quadrant</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Sign of (x, y)</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">I</td>
    <td class="border border-gray-300 px-4 py-2">(+, +)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">II</td>
    <td class="border border-gray-300 px-4 py-2">(−, +)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">III</td>
    <td class="border border-gray-300 px-4 py-2">(−, −)</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">IV</td>
    <td class="border border-gray-300 px-4 py-2">(+, −)</td>
  </tr>
</table>
<p class="mb-2"><strong>3. Coordinates of a Point</strong></p>
<p class="mb-2">A point is represented as <strong>P(</strong><strong>x, y)</strong></p>
<p class="mb-2">x → <strong>Abscissa</strong> (horizontal distance)</p>
<p class="mb-2">y → <strong>Ordinate</strong> (vertical distance)</p>
<p class="mb-2">Example:
If P(3, 4), move 3 units on X-axis and 4 units up on Y-axis.</p>
<p class="mb-2"><strong>4. Distance Formula</strong></p>
<p class="mb-2">For two points and :</p>
<p class="mb-2">👉 Used to find length between two points.</p>
<p class="mb-2"><strong>5. Section Formula</strong></p>
<p class="mb-2">If point P divides the line joining A(x₁, y₁) and B(x₂, y₂) in the ratio m : n,
then coordinates of P are:</p>
<p class="mb-2">👉 If m = n, P is the <strong>midpoint</strong> of AB.</p>
<p class="mb-2"><strong>6. Midpoint Formula</strong></p>
<p class="mb-2">For two points and :</p>
<p class="mb-2"><strong>7. Area of a Triangle</strong></p>
<p class="mb-2">If vertices are A(x₁, y₁), B(x₂, y₂), C(x₃, y₃):</p>
<p class="mb-2">👉 If area = 0, the points are <strong>collinear</strong> (lie on a straight line).</p>
<p class="mb-2"><strong>8. Key Notes</strong></p>
<p class="mb-2">X-axis and Y-axis divide the plane into 4 quadrants.</p>
<p class="mb-2">Distance formula helps find line lengths.</p>
<p class="mb-2">Section &amp; Midpoint formulas locate dividing points.</p>
<p class="mb-2">Area formula helps check if points form a triangle.</p>
`
      },
    ]
  },
  {
    id: 'unit-6',
    title: 'Unit 6 - Trigonometry',
    topics: [
      {
        id: 'trigonometric-ratios',
        title: 'Trigonometric Ratios',
        content: `<p class="mb-2">                                       <strong>UNIT 6 – TRIGONOMETRY </strong></p>
<p class="mb-2"><strong>1. Introduction</strong></p>
<p class="mb-2"><strong>Trigonometry</strong> (from Greek: <em>trigonon</em> = triangle, <em>metron</em> = measure) is the study of the relationship between the <strong>angles</strong> and <strong>sides</strong> of a <strong>right-angled triangle</strong>.
It is widely used in <strong>geometry, astronomy, navigation, and physics</strong>.</p>
<p class="mb-2"><strong>2. Basic Terms</strong></p>
<p class="mb-2"><strong>Hypotenuse:</strong> The longest side (opposite the right angle).</p>
<p class="mb-2"><strong>Adjacent Side:</strong> The side next to the given acute angle.</p>
<p class="mb-2"><strong>Opposite Side:</strong> The side opposite to the given angle.</p>
<p class="mb-2">Example: In right triangle ABC, right-angled at B:</p>
<p class="mb-2">Hypotenuse = AC</p>
<p class="mb-2">Opposite to ∠A = BC</p>
<p class="mb-2">Adjacent to ∠A = AB</p>
<p class="mb-2"><strong>3. Trigonometric Ratios</strong></p>
<p class="mb-2">For angle θ in a right triangle:</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Ratio</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Pronounced As</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">sin θ</td>
    <td class="border border-gray-300 px-4 py-2">Opposite / Hypotenuse</td>
    <td class="border border-gray-300 px-4 py-2">Sine theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cos θ</td>
    <td class="border border-gray-300 px-4 py-2">Adjacent / Hypotenuse</td>
    <td class="border border-gray-300 px-4 py-2">Cosine theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">tan θ</td>
    <td class="border border-gray-300 px-4 py-2">Opposite / Adjacent</td>
    <td class="border border-gray-300 px-4 py-2">Tangent theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cosec θ</td>
    <td class="border border-gray-300 px-4 py-2">1 / sin θ</td>
    <td class="border border-gray-300 px-4 py-2">Cosecant theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">sec θ</td>
    <td class="border border-gray-300 px-4 py-2">1 / cos θ</td>
    <td class="border border-gray-300 px-4 py-2">Secant theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cot θ</td>
    <td class="border border-gray-300 px-4 py-2">1 / tan θ</td>
    <td class="border border-gray-300 px-4 py-2">Cotangent theta</td>
  </tr>
</table>
<p class="mb-2"><strong>Mnemonic:</strong>
👉 <em>“Some People Have Curly Black Hair Through Proper Brushing”</em>
(Sin = Perpendicular/Hypotenuse, Cos = Base/Hypotenuse, Tan = Perpendicular/Base)</p>
<p class="mb-2"><strong>4. Reciprocal &amp; Quotient Relations</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Relation</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cosec θ = 1/sin θ</td>
    <td class="border border-gray-300 px-4 py-2">sec θ = 1/cos θ</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cot θ = 1/tan θ</td>
    <td class="border border-gray-300 px-4 py-2">tan θ = sin θ / cos θ</td>
  </tr>
</table>
<p class="mb-2"><strong>5. Trigonometric Ratios of Standard Angles</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">sin θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">cos θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">tan θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">cosec θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">sec θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">cot θ</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">0°</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">–</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">∞</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">30°</td>
    <td class="border border-gray-300 px-4 py-2">½</td>
    <td class="border border-gray-300 px-4 py-2">√3/2</td>
    <td class="border border-gray-300 px-4 py-2">1/√3</td>
    <td class="border border-gray-300 px-4 py-2">2</td>
    <td class="border border-gray-300 px-4 py-2">2/√3</td>
    <td class="border border-gray-300 px-4 py-2">√3</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">45°</td>
    <td class="border border-gray-300 px-4 py-2">1/√2</td>
    <td class="border border-gray-300 px-4 py-2">1/√2</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">√2</td>
    <td class="border border-gray-300 px-4 py-2">√2</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">60°</td>
    <td class="border border-gray-300 px-4 py-2">√3/2</td>
    <td class="border border-gray-300 px-4 py-2">½</td>
    <td class="border border-gray-300 px-4 py-2">√3</td>
    <td class="border border-gray-300 px-4 py-2">2/√3</td>
    <td class="border border-gray-300 px-4 py-2">2</td>
    <td class="border border-gray-300 px-4 py-2">1/√3</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">90°</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">∞</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">∞</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
  </tr>
</table>
<p class="mb-2"><strong>Note:</strong>
tan θ and cot θ are <strong>undefined</strong> for some angles (like tan 90°).</p>
<p class="mb-2"><strong>6. Trigonometric Identities</strong></p>
<p class="mb-2">These hold true for all θ values:</p>
<p class="mb-2"><strong>7. Complementary Angles</strong></p>
<p class="mb-2">If two angles add up to 90°, they are <strong>complementary</strong>.
Important relations:</p>
<p class="mb-2">sin(90° − θ) = cos θ</p>
<p class="mb-2">cos(90° − θ) = sin θ</p>
<p class="mb-2">tan(90° − θ) = cot θ</p>
<p class="mb-2">cot(90° − θ) = tan θ</p>
<p class="mb-2">sec(90° − θ) = cosec θ</p>
<p class="mb-2">cosec(90° − θ) = sec θ</p>
<p class="mb-2"><strong>8. Applications of Trigonometry</strong></p>
<p class="mb-2">Used to find:</p>
<p class="mb-2">Height of a tower or mountain</p>
<p class="mb-2">Distance of a ship or object from a point</p>
<p class="mb-2">Angles of elevation and depression in real-life measurements</p>
<p class="mb-2"><strong>9. Key Points to Remember</strong></p>
<p class="mb-2">Trigonometry relates sides and angles of a right triangle.</p>
<p class="mb-2">Memorize standard ratios (0°, 30°, 45°, 60°, 90°).</p>
<p class="mb-2">Always use the identity for simplifications.</p>
<p class="mb-2">tan θ = sin θ / cos θ is a key link between ratios.</p>
<p class="mb-2">Complementary angles help convert between sin, cos, tan, etc.</p>
`
      },
      {
        id: 'trigonometric-identities',
        title: 'Trigonometric Identities',
        content: `<p class="mb-2">                                       <strong>UNIT 6 – TRIGONOMETRY </strong></p>
<p class="mb-2"><strong>1. Introduction</strong></p>
<p class="mb-2"><strong>Trigonometry</strong> (from Greek: <em>trigonon</em> = triangle, <em>metron</em> = measure) is the study of the relationship between the <strong>angles</strong> and <strong>sides</strong> of a <strong>right-angled triangle</strong>.
It is widely used in <strong>geometry, astronomy, navigation, and physics</strong>.</p>
<p class="mb-2"><strong>2. Basic Terms</strong></p>
<p class="mb-2"><strong>Hypotenuse:</strong> The longest side (opposite the right angle).</p>
<p class="mb-2"><strong>Adjacent Side:</strong> The side next to the given acute angle.</p>
<p class="mb-2"><strong>Opposite Side:</strong> The side opposite to the given angle.</p>
<p class="mb-2">Example: In right triangle ABC, right-angled at B:</p>
<p class="mb-2">Hypotenuse = AC</p>
<p class="mb-2">Opposite to ∠A = BC</p>
<p class="mb-2">Adjacent to ∠A = AB</p>
<p class="mb-2"><strong>3. Trigonometric Ratios</strong></p>
<p class="mb-2">For angle θ in a right triangle:</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Ratio</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Pronounced As</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">sin θ</td>
    <td class="border border-gray-300 px-4 py-2">Opposite / Hypotenuse</td>
    <td class="border border-gray-300 px-4 py-2">Sine theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cos θ</td>
    <td class="border border-gray-300 px-4 py-2">Adjacent / Hypotenuse</td>
    <td class="border border-gray-300 px-4 py-2">Cosine theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">tan θ</td>
    <td class="border border-gray-300 px-4 py-2">Opposite / Adjacent</td>
    <td class="border border-gray-300 px-4 py-2">Tangent theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cosec θ</td>
    <td class="border border-gray-300 px-4 py-2">1 / sin θ</td>
    <td class="border border-gray-300 px-4 py-2">Cosecant theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">sec θ</td>
    <td class="border border-gray-300 px-4 py-2">1 / cos θ</td>
    <td class="border border-gray-300 px-4 py-2">Secant theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cot θ</td>
    <td class="border border-gray-300 px-4 py-2">1 / tan θ</td>
    <td class="border border-gray-300 px-4 py-2">Cotangent theta</td>
  </tr>
</table>
<p class="mb-2"><strong>Mnemonic:</strong>
👉 <em>“Some People Have Curly Black Hair Through Proper Brushing”</em>
(Sin = Perpendicular/Hypotenuse, Cos = Base/Hypotenuse, Tan = Perpendicular/Base)</p>
<p class="mb-2"><strong>4. Reciprocal &amp; Quotient Relations</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Relation</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cosec θ = 1/sin θ</td>
    <td class="border border-gray-300 px-4 py-2">sec θ = 1/cos θ</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cot θ = 1/tan θ</td>
    <td class="border border-gray-300 px-4 py-2">tan θ = sin θ / cos θ</td>
  </tr>
</table>
<p class="mb-2"><strong>5. Trigonometric Ratios of Standard Angles</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">sin θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">cos θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">tan θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">cosec θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">sec θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">cot θ</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">0°</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">–</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">∞</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">30°</td>
    <td class="border border-gray-300 px-4 py-2">½</td>
    <td class="border border-gray-300 px-4 py-2">√3/2</td>
    <td class="border border-gray-300 px-4 py-2">1/√3</td>
    <td class="border border-gray-300 px-4 py-2">2</td>
    <td class="border border-gray-300 px-4 py-2">2/√3</td>
    <td class="border border-gray-300 px-4 py-2">√3</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">45°</td>
    <td class="border border-gray-300 px-4 py-2">1/√2</td>
    <td class="border border-gray-300 px-4 py-2">1/√2</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">√2</td>
    <td class="border border-gray-300 px-4 py-2">√2</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">60°</td>
    <td class="border border-gray-300 px-4 py-2">√3/2</td>
    <td class="border border-gray-300 px-4 py-2">½</td>
    <td class="border border-gray-300 px-4 py-2">√3</td>
    <td class="border border-gray-300 px-4 py-2">2/√3</td>
    <td class="border border-gray-300 px-4 py-2">2</td>
    <td class="border border-gray-300 px-4 py-2">1/√3</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">90°</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">∞</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">∞</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
  </tr>
</table>
<p class="mb-2"><strong>Note:</strong>
tan θ and cot θ are <strong>undefined</strong> for some angles (like tan 90°).</p>
<p class="mb-2"><strong>6. Trigonometric Identities</strong></p>
<p class="mb-2">These hold true for all θ values:</p>
<p class="mb-2"><strong>7. Complementary Angles</strong></p>
<p class="mb-2">If two angles add up to 90°, they are <strong>complementary</strong>.
Important relations:</p>
<p class="mb-2">sin(90° − θ) = cos θ</p>
<p class="mb-2">cos(90° − θ) = sin θ</p>
<p class="mb-2">tan(90° − θ) = cot θ</p>
<p class="mb-2">cot(90° − θ) = tan θ</p>
<p class="mb-2">sec(90° − θ) = cosec θ</p>
<p class="mb-2">cosec(90° − θ) = sec θ</p>
<p class="mb-2"><strong>8. Applications of Trigonometry</strong></p>
<p class="mb-2">Used to find:</p>
<p class="mb-2">Height of a tower or mountain</p>
<p class="mb-2">Distance of a ship or object from a point</p>
<p class="mb-2">Angles of elevation and depression in real-life measurements</p>
<p class="mb-2"><strong>9. Key Points to Remember</strong></p>
<p class="mb-2">Trigonometry relates sides and angles of a right triangle.</p>
<p class="mb-2">Memorize standard ratios (0°, 30°, 45°, 60°, 90°).</p>
<p class="mb-2">Always use the identity for simplifications.</p>
<p class="mb-2">tan θ = sin θ / cos θ is a key link between ratios.</p>
<p class="mb-2">Complementary angles help convert between sin, cos, tan, etc.</p>
`
      },
      {
        id: 'heights-distances',
        title: 'Heights and Distances',
        content: `<p class="mb-2">                                       <strong>UNIT 6 – TRIGONOMETRY </strong></p>
<p class="mb-2"><strong>1. Introduction</strong></p>
<p class="mb-2"><strong>Trigonometry</strong> (from Greek: <em>trigonon</em> = triangle, <em>metron</em> = measure) is the study of the relationship between the <strong>angles</strong> and <strong>sides</strong> of a <strong>right-angled triangle</strong>.
It is widely used in <strong>geometry, astronomy, navigation, and physics</strong>.</p>
<p class="mb-2"><strong>2. Basic Terms</strong></p>
<p class="mb-2"><strong>Hypotenuse:</strong> The longest side (opposite the right angle).</p>
<p class="mb-2"><strong>Adjacent Side:</strong> The side next to the given acute angle.</p>
<p class="mb-2"><strong>Opposite Side:</strong> The side opposite to the given angle.</p>
<p class="mb-2">Example: In right triangle ABC, right-angled at B:</p>
<p class="mb-2">Hypotenuse = AC</p>
<p class="mb-2">Opposite to ∠A = BC</p>
<p class="mb-2">Adjacent to ∠A = AB</p>
<p class="mb-2"><strong>3. Trigonometric Ratios</strong></p>
<p class="mb-2">For angle θ in a right triangle:</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Ratio</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Pronounced As</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">sin θ</td>
    <td class="border border-gray-300 px-4 py-2">Opposite / Hypotenuse</td>
    <td class="border border-gray-300 px-4 py-2">Sine theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cos θ</td>
    <td class="border border-gray-300 px-4 py-2">Adjacent / Hypotenuse</td>
    <td class="border border-gray-300 px-4 py-2">Cosine theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">tan θ</td>
    <td class="border border-gray-300 px-4 py-2">Opposite / Adjacent</td>
    <td class="border border-gray-300 px-4 py-2">Tangent theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cosec θ</td>
    <td class="border border-gray-300 px-4 py-2">1 / sin θ</td>
    <td class="border border-gray-300 px-4 py-2">Cosecant theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">sec θ</td>
    <td class="border border-gray-300 px-4 py-2">1 / cos θ</td>
    <td class="border border-gray-300 px-4 py-2">Secant theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cot θ</td>
    <td class="border border-gray-300 px-4 py-2">1 / tan θ</td>
    <td class="border border-gray-300 px-4 py-2">Cotangent theta</td>
  </tr>
</table>
<p class="mb-2"><strong>Mnemonic:</strong>
👉 <em>“Some People Have Curly Black Hair Through Proper Brushing”</em>
(Sin = Perpendicular/Hypotenuse, Cos = Base/Hypotenuse, Tan = Perpendicular/Base)</p>
<p class="mb-2"><strong>4. Reciprocal &amp; Quotient Relations</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Relation</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cosec θ = 1/sin θ</td>
    <td class="border border-gray-300 px-4 py-2">sec θ = 1/cos θ</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cot θ = 1/tan θ</td>
    <td class="border border-gray-300 px-4 py-2">tan θ = sin θ / cos θ</td>
  </tr>
</table>
<p class="mb-2"><strong>5. Trigonometric Ratios of Standard Angles</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">sin θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">cos θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">tan θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">cosec θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">sec θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">cot θ</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">0°</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">–</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">∞</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">30°</td>
    <td class="border border-gray-300 px-4 py-2">½</td>
    <td class="border border-gray-300 px-4 py-2">√3/2</td>
    <td class="border border-gray-300 px-4 py-2">1/√3</td>
    <td class="border border-gray-300 px-4 py-2">2</td>
    <td class="border border-gray-300 px-4 py-2">2/√3</td>
    <td class="border border-gray-300 px-4 py-2">√3</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">45°</td>
    <td class="border border-gray-300 px-4 py-2">1/√2</td>
    <td class="border border-gray-300 px-4 py-2">1/√2</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">√2</td>
    <td class="border border-gray-300 px-4 py-2">√2</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">60°</td>
    <td class="border border-gray-300 px-4 py-2">√3/2</td>
    <td class="border border-gray-300 px-4 py-2">½</td>
    <td class="border border-gray-300 px-4 py-2">√3</td>
    <td class="border border-gray-300 px-4 py-2">2/√3</td>
    <td class="border border-gray-300 px-4 py-2">2</td>
    <td class="border border-gray-300 px-4 py-2">1/√3</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">90°</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">∞</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">∞</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
  </tr>
</table>
<p class="mb-2"><strong>Note:</strong>
tan θ and cot θ are <strong>undefined</strong> for some angles (like tan 90°).</p>
<p class="mb-2"><strong>6. Trigonometric Identities</strong></p>
<p class="mb-2">These hold true for all θ values:</p>
<p class="mb-2"><strong>7. Complementary Angles</strong></p>
<p class="mb-2">If two angles add up to 90°, they are <strong>complementary</strong>.
Important relations:</p>
<p class="mb-2">sin(90° − θ) = cos θ</p>
<p class="mb-2">cos(90° − θ) = sin θ</p>
<p class="mb-2">tan(90° − θ) = cot θ</p>
<p class="mb-2">cot(90° − θ) = tan θ</p>
<p class="mb-2">sec(90° − θ) = cosec θ</p>
<p class="mb-2">cosec(90° − θ) = sec θ</p>
<p class="mb-2"><strong>8. Applications of Trigonometry</strong></p>
<p class="mb-2">Used to find:</p>
<p class="mb-2">Height of a tower or mountain</p>
<p class="mb-2">Distance of a ship or object from a point</p>
<p class="mb-2">Angles of elevation and depression in real-life measurements</p>
<p class="mb-2"><strong>9. Key Points to Remember</strong></p>
<p class="mb-2">Trigonometry relates sides and angles of a right triangle.</p>
<p class="mb-2">Memorize standard ratios (0°, 30°, 45°, 60°, 90°).</p>
<p class="mb-2">Always use the identity for simplifications.</p>
<p class="mb-2">tan θ = sin θ / cos θ is a key link between ratios.</p>
<p class="mb-2">Complementary angles help convert between sin, cos, tan, etc.</p>
`
      },
      {
        id: 'complementary-angles',
        title: 'Complementary Angles',
        content: `<p class="mb-2">                                       <strong>UNIT 6 – TRIGONOMETRY </strong></p>
<p class="mb-2"><strong>1. Introduction</strong></p>
<p class="mb-2"><strong>Trigonometry</strong> (from Greek: <em>trigonon</em> = triangle, <em>metron</em> = measure) is the study of the relationship between the <strong>angles</strong> and <strong>sides</strong> of a <strong>right-angled triangle</strong>.
It is widely used in <strong>geometry, astronomy, navigation, and physics</strong>.</p>
<p class="mb-2"><strong>2. Basic Terms</strong></p>
<p class="mb-2"><strong>Hypotenuse:</strong> The longest side (opposite the right angle).</p>
<p class="mb-2"><strong>Adjacent Side:</strong> The side next to the given acute angle.</p>
<p class="mb-2"><strong>Opposite Side:</strong> The side opposite to the given angle.</p>
<p class="mb-2">Example: In right triangle ABC, right-angled at B:</p>
<p class="mb-2">Hypotenuse = AC</p>
<p class="mb-2">Opposite to ∠A = BC</p>
<p class="mb-2">Adjacent to ∠A = AB</p>
<p class="mb-2"><strong>3. Trigonometric Ratios</strong></p>
<p class="mb-2">For angle θ in a right triangle:</p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Ratio</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Pronounced As</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">sin θ</td>
    <td class="border border-gray-300 px-4 py-2">Opposite / Hypotenuse</td>
    <td class="border border-gray-300 px-4 py-2">Sine theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cos θ</td>
    <td class="border border-gray-300 px-4 py-2">Adjacent / Hypotenuse</td>
    <td class="border border-gray-300 px-4 py-2">Cosine theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">tan θ</td>
    <td class="border border-gray-300 px-4 py-2">Opposite / Adjacent</td>
    <td class="border border-gray-300 px-4 py-2">Tangent theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cosec θ</td>
    <td class="border border-gray-300 px-4 py-2">1 / sin θ</td>
    <td class="border border-gray-300 px-4 py-2">Cosecant theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">sec θ</td>
    <td class="border border-gray-300 px-4 py-2">1 / cos θ</td>
    <td class="border border-gray-300 px-4 py-2">Secant theta</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cot θ</td>
    <td class="border border-gray-300 px-4 py-2">1 / tan θ</td>
    <td class="border border-gray-300 px-4 py-2">Cotangent theta</td>
  </tr>
</table>
<p class="mb-2"><strong>Mnemonic:</strong>
👉 <em>“Some People Have Curly Black Hair Through Proper Brushing”</em>
(Sin = Perpendicular/Hypotenuse, Cos = Base/Hypotenuse, Tan = Perpendicular/Base)</p>
<p class="mb-2"><strong>4. Reciprocal &amp; Quotient Relations</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Relation</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cosec θ = 1/sin θ</td>
    <td class="border border-gray-300 px-4 py-2">sec θ = 1/cos θ</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">cot θ = 1/tan θ</td>
    <td class="border border-gray-300 px-4 py-2">tan θ = sin θ / cos θ</td>
  </tr>
</table>
<p class="mb-2"><strong>5. Trigonometric Ratios of Standard Angles</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">sin θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">cos θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">tan θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">cosec θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">sec θ</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">cot θ</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">0°</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">–</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">∞</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">30°</td>
    <td class="border border-gray-300 px-4 py-2">½</td>
    <td class="border border-gray-300 px-4 py-2">√3/2</td>
    <td class="border border-gray-300 px-4 py-2">1/√3</td>
    <td class="border border-gray-300 px-4 py-2">2</td>
    <td class="border border-gray-300 px-4 py-2">2/√3</td>
    <td class="border border-gray-300 px-4 py-2">√3</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">45°</td>
    <td class="border border-gray-300 px-4 py-2">1/√2</td>
    <td class="border border-gray-300 px-4 py-2">1/√2</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">√2</td>
    <td class="border border-gray-300 px-4 py-2">√2</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">60°</td>
    <td class="border border-gray-300 px-4 py-2">√3/2</td>
    <td class="border border-gray-300 px-4 py-2">½</td>
    <td class="border border-gray-300 px-4 py-2">√3</td>
    <td class="border border-gray-300 px-4 py-2">2/√3</td>
    <td class="border border-gray-300 px-4 py-2">2</td>
    <td class="border border-gray-300 px-4 py-2">1/√3</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">90°</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
    <td class="border border-gray-300 px-4 py-2">∞</td>
    <td class="border border-gray-300 px-4 py-2">1</td>
    <td class="border border-gray-300 px-4 py-2">∞</td>
    <td class="border border-gray-300 px-4 py-2">0</td>
  </tr>
</table>
<p class="mb-2"><strong>Note:</strong>
tan θ and cot θ are <strong>undefined</strong> for some angles (like tan 90°).</p>
<p class="mb-2"><strong>6. Trigonometric Identities</strong></p>
<p class="mb-2">These hold true for all θ values:</p>
<p class="mb-2"><strong>7. Complementary Angles</strong></p>
<p class="mb-2">If two angles add up to 90°, they are <strong>complementary</strong>.
Important relations:</p>
<p class="mb-2">sin(90° − θ) = cos θ</p>
<p class="mb-2">cos(90° − θ) = sin θ</p>
<p class="mb-2">tan(90° − θ) = cot θ</p>
<p class="mb-2">cot(90° − θ) = tan θ</p>
<p class="mb-2">sec(90° − θ) = cosec θ</p>
<p class="mb-2">cosec(90° − θ) = sec θ</p>
<p class="mb-2"><strong>8. Applications of Trigonometry</strong></p>
<p class="mb-2">Used to find:</p>
<p class="mb-2">Height of a tower or mountain</p>
<p class="mb-2">Distance of a ship or object from a point</p>
<p class="mb-2">Angles of elevation and depression in real-life measurements</p>
<p class="mb-2"><strong>9. Key Points to Remember</strong></p>
<p class="mb-2">Trigonometry relates sides and angles of a right triangle.</p>
<p class="mb-2">Memorize standard ratios (0°, 30°, 45°, 60°, 90°).</p>
<p class="mb-2">Always use the identity for simplifications.</p>
<p class="mb-2">tan θ = sin θ / cos θ is a key link between ratios.</p>
<p class="mb-2">Complementary angles help convert between sin, cos, tan, etc.</p>
`
      },
    ]
  },
  {
    id: 'unit-7',
    title: 'Unit 7 - Mensuration',
    topics: [
      {
        id: '2d-shapes',
        title: '2D Shapes - Area and Perimeter',
        content: `<p class="mb-2"><strong>                      </strong><strong>UNIT 7 – MENSURATION </strong></p>
<p class="mb-2"><strong>1. Introduction</strong></p>
<p class="mb-2"><strong>Mensuration</strong> deals with measuring the <strong>length, area, and volume</strong> of different <strong>2D and 3D shapes</strong>.
It helps in finding quantities like <strong>perimeter, surface area, curved surface area (C.S.A), total surface area (T.S.A)</strong>, and <strong>volume</strong>.</p>
<p class="mb-2"><strong>2. Plane Figures (2D Shapes)</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Shape</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Perimeter</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Area</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2">4a</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2">2(l + b)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Triangle</td>
    <td class="border border-gray-300 px-4 py-2">a + b + c</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equilateral Triangle</td>
    <td class="border border-gray-300 px-4 py-2">3a</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2">2(a + b)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2">4a</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2">a + b + c + d</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Circle</td>
    <td class="border border-gray-300 px-4 py-2"></td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
</table>
<p class="mb-2"><strong>3. Solid Figures (3D Shapes)</strong></p>
<p class="mb-2"><strong>(</strong><strong>i</strong><strong>) Cuboid</strong></p>
<p class="mb-2"><strong>T.S.A = 2(lb + </strong><strong>bh</strong><strong> + hl)</strong></p>
<p class="mb-2"><strong>Lateral Surface Area (L.S.A) = 2</strong><strong>h(</strong><strong>l + b)</strong></p>
<p class="mb-2"><strong>Volume = l × b × h</strong></p>
<p class="mb-2"><strong>(ii) Cube</strong></p>
<p class="mb-2"><strong>T.S.A = 6a²</strong></p>
<p class="mb-2"><strong>L.S.A = 4a²</strong></p>
<p class="mb-2"><strong>Volume = a³</strong></p>
<p class="mb-2"><strong>(iii) Cylinder</strong></p>
<p class="mb-2"><strong>C.S.A = 2πrh</strong></p>
<p class="mb-2"><strong>T.S.A = 2π</strong><strong>r(</strong><strong>h + r)</strong></p>
<p class="mb-2"><strong>Volume = πr²h</strong></p>
<p class="mb-2"><strong>(iv) Cone</strong></p>
<p class="mb-2"><strong>C.S.A = π</strong><strong>rl</strong> (where l = slant height)</p>
<p class="mb-2"><strong>T.S.A = π</strong><strong>r(</strong><strong>l + r)</strong></p>
<p class="mb-2"><strong>Volume = (1/</strong><strong>3)π</strong><strong>r²h</strong></p>
<p class="mb-2"><strong>(v) Sphere</strong></p>
<p class="mb-2"><strong>Surface Area = 4πr²</strong></p>
<p class="mb-2"><strong>Volume = (4/</strong><strong>3)π</strong><strong>r³</strong></p>
<p class="mb-2"><strong>(vi) Hemisphere</strong></p>
<p class="mb-2"><strong>C.S.A = 2πr²</strong></p>
<p class="mb-2"><strong>T.S.A = 3πr²</strong></p>
<p class="mb-2"><strong>Volume = (2/</strong><strong>3)π</strong><strong>r³</strong></p>
<p class="mb-2"><strong>4. Combination of Solids</strong></p>
<p class="mb-2">In real life, shapes can combine (e.g., ice-cream cone + hemisphere scoop).
To find volume or area:
→ Add or subtract the <strong>respective formulas</strong> of basic solids.</p>
<p class="mb-2">Example:
Volume of a solid = Volume of cone + Volume of hemisphere.</p>
<p class="mb-2"><strong>5. Conversion Between Units</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quantity</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Conversion</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1 m = 100 cm</td>
    <td class="border border-gray-300 px-4 py-2">1 cm = 10 mm</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1 m² = 10,000 cm²</td>
    <td class="border border-gray-300 px-4 py-2">1 cm² = 100 mm²</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1 m³ = 10⁶ cm³</td>
    <td class="border border-gray-300 px-4 py-2">1 cm³ = 1000 mm³</td>
  </tr>
</table>
<p class="mb-2"><strong>6. Key Points to Remember</strong></p>
<p class="mb-2"><strong>π = 3.1416 or 22/7</strong></p>
<p class="mb-2">T.S.A = C.S.A + area of bases</p>
<p class="mb-2">Volume measures <em>space occupied</em>, area measures <em>surface covered</em></p>
<p class="mb-2">Use correct <strong>units</strong>:</p>
<p class="mb-2">Perimeter → cm or m</p>
<p class="mb-2">Area → cm² or m²</p>
<p class="mb-2">Volume → cm³ or m³</p>
`
      },
      {
        id: '3d-shapes',
        title: '3D Shapes - Surface Area',
        content: `<p class="mb-2"><strong>                      </strong><strong>UNIT 7 – MENSURATION </strong></p>
<p class="mb-2"><strong>1. Introduction</strong></p>
<p class="mb-2"><strong>Mensuration</strong> deals with measuring the <strong>length, area, and volume</strong> of different <strong>2D and 3D shapes</strong>.
It helps in finding quantities like <strong>perimeter, surface area, curved surface area (C.S.A), total surface area (T.S.A)</strong>, and <strong>volume</strong>.</p>
<p class="mb-2"><strong>2. Plane Figures (2D Shapes)</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Shape</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Perimeter</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Area</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2">4a</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2">2(l + b)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Triangle</td>
    <td class="border border-gray-300 px-4 py-2">a + b + c</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equilateral Triangle</td>
    <td class="border border-gray-300 px-4 py-2">3a</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2">2(a + b)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2">4a</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2">a + b + c + d</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Circle</td>
    <td class="border border-gray-300 px-4 py-2"></td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
</table>
<p class="mb-2"><strong>3. Solid Figures (3D Shapes)</strong></p>
<p class="mb-2"><strong>(</strong><strong>i</strong><strong>) Cuboid</strong></p>
<p class="mb-2"><strong>T.S.A = 2(lb + </strong><strong>bh</strong><strong> + hl)</strong></p>
<p class="mb-2"><strong>Lateral Surface Area (L.S.A) = 2</strong><strong>h(</strong><strong>l + b)</strong></p>
<p class="mb-2"><strong>Volume = l × b × h</strong></p>
<p class="mb-2"><strong>(ii) Cube</strong></p>
<p class="mb-2"><strong>T.S.A = 6a²</strong></p>
<p class="mb-2"><strong>L.S.A = 4a²</strong></p>
<p class="mb-2"><strong>Volume = a³</strong></p>
<p class="mb-2"><strong>(iii) Cylinder</strong></p>
<p class="mb-2"><strong>C.S.A = 2πrh</strong></p>
<p class="mb-2"><strong>T.S.A = 2π</strong><strong>r(</strong><strong>h + r)</strong></p>
<p class="mb-2"><strong>Volume = πr²h</strong></p>
<p class="mb-2"><strong>(iv) Cone</strong></p>
<p class="mb-2"><strong>C.S.A = π</strong><strong>rl</strong> (where l = slant height)</p>
<p class="mb-2"><strong>T.S.A = π</strong><strong>r(</strong><strong>l + r)</strong></p>
<p class="mb-2"><strong>Volume = (1/</strong><strong>3)π</strong><strong>r²h</strong></p>
<p class="mb-2"><strong>(v) Sphere</strong></p>
<p class="mb-2"><strong>Surface Area = 4πr²</strong></p>
<p class="mb-2"><strong>Volume = (4/</strong><strong>3)π</strong><strong>r³</strong></p>
<p class="mb-2"><strong>(vi) Hemisphere</strong></p>
<p class="mb-2"><strong>C.S.A = 2πr²</strong></p>
<p class="mb-2"><strong>T.S.A = 3πr²</strong></p>
<p class="mb-2"><strong>Volume = (2/</strong><strong>3)π</strong><strong>r³</strong></p>
<p class="mb-2"><strong>4. Combination of Solids</strong></p>
<p class="mb-2">In real life, shapes can combine (e.g., ice-cream cone + hemisphere scoop).
To find volume or area:
→ Add or subtract the <strong>respective formulas</strong> of basic solids.</p>
<p class="mb-2">Example:
Volume of a solid = Volume of cone + Volume of hemisphere.</p>
<p class="mb-2"><strong>5. Conversion Between Units</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quantity</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Conversion</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1 m = 100 cm</td>
    <td class="border border-gray-300 px-4 py-2">1 cm = 10 mm</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1 m² = 10,000 cm²</td>
    <td class="border border-gray-300 px-4 py-2">1 cm² = 100 mm²</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1 m³ = 10⁶ cm³</td>
    <td class="border border-gray-300 px-4 py-2">1 cm³ = 1000 mm³</td>
  </tr>
</table>
<p class="mb-2"><strong>6. Key Points to Remember</strong></p>
<p class="mb-2"><strong>π = 3.1416 or 22/7</strong></p>
<p class="mb-2">T.S.A = C.S.A + area of bases</p>
<p class="mb-2">Volume measures <em>space occupied</em>, area measures <em>surface covered</em></p>
<p class="mb-2">Use correct <strong>units</strong>:</p>
<p class="mb-2">Perimeter → cm or m</p>
<p class="mb-2">Area → cm² or m²</p>
<p class="mb-2">Volume → cm³ or m³</p>
`
      },
      {
        id: 'volume',
        title: 'Volume of Solids',
        content: `<p class="mb-2"><strong>                      </strong><strong>UNIT 7 – MENSURATION </strong></p>
<p class="mb-2"><strong>1. Introduction</strong></p>
<p class="mb-2"><strong>Mensuration</strong> deals with measuring the <strong>length, area, and volume</strong> of different <strong>2D and 3D shapes</strong>.
It helps in finding quantities like <strong>perimeter, surface area, curved surface area (C.S.A), total surface area (T.S.A)</strong>, and <strong>volume</strong>.</p>
<p class="mb-2"><strong>2. Plane Figures (2D Shapes)</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Shape</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Perimeter</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Area</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2">4a</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2">2(l + b)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Triangle</td>
    <td class="border border-gray-300 px-4 py-2">a + b + c</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equilateral Triangle</td>
    <td class="border border-gray-300 px-4 py-2">3a</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2">2(a + b)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2">4a</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2">a + b + c + d</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Circle</td>
    <td class="border border-gray-300 px-4 py-2"></td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
</table>
<p class="mb-2"><strong>3. Solid Figures (3D Shapes)</strong></p>
<p class="mb-2"><strong>(</strong><strong>i</strong><strong>) Cuboid</strong></p>
<p class="mb-2"><strong>T.S.A = 2(lb + </strong><strong>bh</strong><strong> + hl)</strong></p>
<p class="mb-2"><strong>Lateral Surface Area (L.S.A) = 2</strong><strong>h(</strong><strong>l + b)</strong></p>
<p class="mb-2"><strong>Volume = l × b × h</strong></p>
<p class="mb-2"><strong>(ii) Cube</strong></p>
<p class="mb-2"><strong>T.S.A = 6a²</strong></p>
<p class="mb-2"><strong>L.S.A = 4a²</strong></p>
<p class="mb-2"><strong>Volume = a³</strong></p>
<p class="mb-2"><strong>(iii) Cylinder</strong></p>
<p class="mb-2"><strong>C.S.A = 2πrh</strong></p>
<p class="mb-2"><strong>T.S.A = 2π</strong><strong>r(</strong><strong>h + r)</strong></p>
<p class="mb-2"><strong>Volume = πr²h</strong></p>
<p class="mb-2"><strong>(iv) Cone</strong></p>
<p class="mb-2"><strong>C.S.A = π</strong><strong>rl</strong> (where l = slant height)</p>
<p class="mb-2"><strong>T.S.A = π</strong><strong>r(</strong><strong>l + r)</strong></p>
<p class="mb-2"><strong>Volume = (1/</strong><strong>3)π</strong><strong>r²h</strong></p>
<p class="mb-2"><strong>(v) Sphere</strong></p>
<p class="mb-2"><strong>Surface Area = 4πr²</strong></p>
<p class="mb-2"><strong>Volume = (4/</strong><strong>3)π</strong><strong>r³</strong></p>
<p class="mb-2"><strong>(vi) Hemisphere</strong></p>
<p class="mb-2"><strong>C.S.A = 2πr²</strong></p>
<p class="mb-2"><strong>T.S.A = 3πr²</strong></p>
<p class="mb-2"><strong>Volume = (2/</strong><strong>3)π</strong><strong>r³</strong></p>
<p class="mb-2"><strong>4. Combination of Solids</strong></p>
<p class="mb-2">In real life, shapes can combine (e.g., ice-cream cone + hemisphere scoop).
To find volume or area:
→ Add or subtract the <strong>respective formulas</strong> of basic solids.</p>
<p class="mb-2">Example:
Volume of a solid = Volume of cone + Volume of hemisphere.</p>
<p class="mb-2"><strong>5. Conversion Between Units</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quantity</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Conversion</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1 m = 100 cm</td>
    <td class="border border-gray-300 px-4 py-2">1 cm = 10 mm</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1 m² = 10,000 cm²</td>
    <td class="border border-gray-300 px-4 py-2">1 cm² = 100 mm²</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1 m³ = 10⁶ cm³</td>
    <td class="border border-gray-300 px-4 py-2">1 cm³ = 1000 mm³</td>
  </tr>
</table>
<p class="mb-2"><strong>6. Key Points to Remember</strong></p>
<p class="mb-2"><strong>π = 3.1416 or 22/7</strong></p>
<p class="mb-2">T.S.A = C.S.A + area of bases</p>
<p class="mb-2">Volume measures <em>space occupied</em>, area measures <em>surface covered</em></p>
<p class="mb-2">Use correct <strong>units</strong>:</p>
<p class="mb-2">Perimeter → cm or m</p>
<p class="mb-2">Area → cm² or m²</p>
<p class="mb-2">Volume → cm³ or m³</p>
`
      },
      {
        id: 'combined-shapes',
        title: 'Combined Shapes',
        content: `<p class="mb-2"><strong>                      </strong><strong>UNIT 7 – MENSURATION </strong></p>
<p class="mb-2"><strong>1. Introduction</strong></p>
<p class="mb-2"><strong>Mensuration</strong> deals with measuring the <strong>length, area, and volume</strong> of different <strong>2D and 3D shapes</strong>.
It helps in finding quantities like <strong>perimeter, surface area, curved surface area (C.S.A), total surface area (T.S.A)</strong>, and <strong>volume</strong>.</p>
<p class="mb-2"><strong>2. Plane Figures (2D Shapes)</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Shape</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Perimeter</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Area</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2">4a</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2">2(l + b)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Triangle</td>
    <td class="border border-gray-300 px-4 py-2">a + b + c</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Equilateral Triangle</td>
    <td class="border border-gray-300 px-4 py-2">3a</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2">2(a + b)</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2">4a</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2">a + b + c + d</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Circle</td>
    <td class="border border-gray-300 px-4 py-2"></td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
</table>
<p class="mb-2"><strong>3. Solid Figures (3D Shapes)</strong></p>
<p class="mb-2"><strong>(</strong><strong>i</strong><strong>) Cuboid</strong></p>
<p class="mb-2"><strong>T.S.A = 2(lb + </strong><strong>bh</strong><strong> + hl)</strong></p>
<p class="mb-2"><strong>Lateral Surface Area (L.S.A) = 2</strong><strong>h(</strong><strong>l + b)</strong></p>
<p class="mb-2"><strong>Volume = l × b × h</strong></p>
<p class="mb-2"><strong>(ii) Cube</strong></p>
<p class="mb-2"><strong>T.S.A = 6a²</strong></p>
<p class="mb-2"><strong>L.S.A = 4a²</strong></p>
<p class="mb-2"><strong>Volume = a³</strong></p>
<p class="mb-2"><strong>(iii) Cylinder</strong></p>
<p class="mb-2"><strong>C.S.A = 2πrh</strong></p>
<p class="mb-2"><strong>T.S.A = 2π</strong><strong>r(</strong><strong>h + r)</strong></p>
<p class="mb-2"><strong>Volume = πr²h</strong></p>
<p class="mb-2"><strong>(iv) Cone</strong></p>
<p class="mb-2"><strong>C.S.A = π</strong><strong>rl</strong> (where l = slant height)</p>
<p class="mb-2"><strong>T.S.A = π</strong><strong>r(</strong><strong>l + r)</strong></p>
<p class="mb-2"><strong>Volume = (1/</strong><strong>3)π</strong><strong>r²h</strong></p>
<p class="mb-2"><strong>(v) Sphere</strong></p>
<p class="mb-2"><strong>Surface Area = 4πr²</strong></p>
<p class="mb-2"><strong>Volume = (4/</strong><strong>3)π</strong><strong>r³</strong></p>
<p class="mb-2"><strong>(vi) Hemisphere</strong></p>
<p class="mb-2"><strong>C.S.A = 2πr²</strong></p>
<p class="mb-2"><strong>T.S.A = 3πr²</strong></p>
<p class="mb-2"><strong>Volume = (2/</strong><strong>3)π</strong><strong>r³</strong></p>
<p class="mb-2"><strong>4. Combination of Solids</strong></p>
<p class="mb-2">In real life, shapes can combine (e.g., ice-cream cone + hemisphere scoop).
To find volume or area:
→ Add or subtract the <strong>respective formulas</strong> of basic solids.</p>
<p class="mb-2">Example:
Volume of a solid = Volume of cone + Volume of hemisphere.</p>
<p class="mb-2"><strong>5. Conversion Between Units</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quantity</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Conversion</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1 m = 100 cm</td>
    <td class="border border-gray-300 px-4 py-2">1 cm = 10 mm</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1 m² = 10,000 cm²</td>
    <td class="border border-gray-300 px-4 py-2">1 cm² = 100 mm²</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">1 m³ = 10⁶ cm³</td>
    <td class="border border-gray-300 px-4 py-2">1 cm³ = 1000 mm³</td>
  </tr>
</table>
<p class="mb-2"><strong>6. Key Points to Remember</strong></p>
<p class="mb-2"><strong>π = 3.1416 or 22/7</strong></p>
<p class="mb-2">T.S.A = C.S.A + area of bases</p>
<p class="mb-2">Volume measures <em>space occupied</em>, area measures <em>surface covered</em></p>
<p class="mb-2">Use correct <strong>units</strong>:</p>
<p class="mb-2">Perimeter → cm or m</p>
<p class="mb-2">Area → cm² or m²</p>
<p class="mb-2">Volume → cm³ or m³</p>
`
      },
    ]
  },
  {
    id: 'unit-8',
    title: 'Unit 8 - Quadrilaterals',
    topics: [
      {
        id: 'types-quadrilaterals',
        title: 'Types of Quadrilaterals',
        content: `<p class="mb-2"><strong>                            </strong><strong>Unit 8 – Quadrilaterals</strong></p>
<p class="mb-2"><strong>1. Definition</strong></p>
<p class="mb-2">A <strong>quadrilateral</strong> is a <strong>closed figure with four sides and four vertices</strong>.</p>
<p class="mb-2"><strong>2. Types of Quadrilaterals</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quadrilateral</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Properties</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2">Opposite sides parallel &amp; equal. 
Opposite angles equal. 
Diagonals bisect each other.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2">All angles = 90°. 
Opposite sides equal. 
Diagonals equal &amp; bisect each other.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal. 
All angles = 90°. 
Diagonals equal &amp; perpendicular.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal. 
Opposite angles equal. 
Diagonals perpendicular &amp; bisect each other.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2">Only one pair of opposite sides parallel. 
Median = (sum of parallel sides)/2.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Kite</td>
    <td class="border border-gray-300 px-4 py-2">Two pairs of adjacent sides equal. 
Diagonals perpendicular. 
One diagonal bisected.</td>
  </tr>
</table>
<p class="mb-2"><strong>3. Properties of Quadrilaterals</strong></p>
<p class="mb-2">Sum of interior angles = <strong>360°</strong></p>
<p class="mb-2">Sum of exterior angles = <strong>360°</strong></p>
<p class="mb-2">Diagonals divide quadrilaterals into <strong>two triangles</strong></p>
<p class="mb-2"><strong>4. Area Formulas</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quadrilateral</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
</table>
<p class="mb-2"><strong>5. Key Theorems</strong></p>
<p class="mb-2">Diagonals of a parallelogram <strong>bisect each other</strong>.</p>
<p class="mb-2">Opposite sides of a parallelogram are <strong>equal</strong>.</p>
<p class="mb-2">Diagonals of a rhombus are <strong>perpendicular</strong>.</p>
<p class="mb-2">Diagonals of a rectangle are <strong>equal</strong>.</p>
<p class="mb-2">Sum of angles in any quadrilateral = <strong>360°</strong>.</p>
<p class="mb-2"><strong>6. Tips to Remember</strong></p>
<p class="mb-2">All <strong>squares</strong> are rectangles &amp; rhombuses.</p>
<p class="mb-2">Not all rectangles or rhombuses are squares.</p>
<p class="mb-2">Check <strong>parallel sides, equal sides, and angles</strong> to identify quadrilaterals.</p>
<p class="mb-2">Diagonals are key to <strong>classification and properties</strong>.</p>
`
      },
      {
        id: 'properties',
        title: 'Properties of Quadrilaterals',
        content: `<p class="mb-2"><strong>                            </strong><strong>Unit 8 – Quadrilaterals</strong></p>
<p class="mb-2"><strong>1. Definition</strong></p>
<p class="mb-2">A <strong>quadrilateral</strong> is a <strong>closed figure with four sides and four vertices</strong>.</p>
<p class="mb-2"><strong>2. Types of Quadrilaterals</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quadrilateral</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Properties</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2">Opposite sides parallel &amp; equal. 
Opposite angles equal. 
Diagonals bisect each other.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2">All angles = 90°. 
Opposite sides equal. 
Diagonals equal &amp; bisect each other.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal. 
All angles = 90°. 
Diagonals equal &amp; perpendicular.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal. 
Opposite angles equal. 
Diagonals perpendicular &amp; bisect each other.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2">Only one pair of opposite sides parallel. 
Median = (sum of parallel sides)/2.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Kite</td>
    <td class="border border-gray-300 px-4 py-2">Two pairs of adjacent sides equal. 
Diagonals perpendicular. 
One diagonal bisected.</td>
  </tr>
</table>
<p class="mb-2"><strong>3. Properties of Quadrilaterals</strong></p>
<p class="mb-2">Sum of interior angles = <strong>360°</strong></p>
<p class="mb-2">Sum of exterior angles = <strong>360°</strong></p>
<p class="mb-2">Diagonals divide quadrilaterals into <strong>two triangles</strong></p>
<p class="mb-2"><strong>4. Area Formulas</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quadrilateral</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
</table>
<p class="mb-2"><strong>5. Key Theorems</strong></p>
<p class="mb-2">Diagonals of a parallelogram <strong>bisect each other</strong>.</p>
<p class="mb-2">Opposite sides of a parallelogram are <strong>equal</strong>.</p>
<p class="mb-2">Diagonals of a rhombus are <strong>perpendicular</strong>.</p>
<p class="mb-2">Diagonals of a rectangle are <strong>equal</strong>.</p>
<p class="mb-2">Sum of angles in any quadrilateral = <strong>360°</strong>.</p>
<p class="mb-2"><strong>6. Tips to Remember</strong></p>
<p class="mb-2">All <strong>squares</strong> are rectangles &amp; rhombuses.</p>
<p class="mb-2">Not all rectangles or rhombuses are squares.</p>
<p class="mb-2">Check <strong>parallel sides, equal sides, and angles</strong> to identify quadrilaterals.</p>
<p class="mb-2">Diagonals are key to <strong>classification and properties</strong>.</p>
`
      },
      {
        id: 'theorems',
        title: 'Theorems on Quadrilaterals',
        content: `<p class="mb-2"><strong>                            </strong><strong>Unit 8 – Quadrilaterals</strong></p>
<p class="mb-2"><strong>1. Definition</strong></p>
<p class="mb-2">A <strong>quadrilateral</strong> is a <strong>closed figure with four sides and four vertices</strong>.</p>
<p class="mb-2"><strong>2. Types of Quadrilaterals</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quadrilateral</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Properties</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2">Opposite sides parallel &amp; equal. 
Opposite angles equal. 
Diagonals bisect each other.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2">All angles = 90°. 
Opposite sides equal. 
Diagonals equal &amp; bisect each other.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal. 
All angles = 90°. 
Diagonals equal &amp; perpendicular.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal. 
Opposite angles equal. 
Diagonals perpendicular &amp; bisect each other.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2">Only one pair of opposite sides parallel. 
Median = (sum of parallel sides)/2.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Kite</td>
    <td class="border border-gray-300 px-4 py-2">Two pairs of adjacent sides equal. 
Diagonals perpendicular. 
One diagonal bisected.</td>
  </tr>
</table>
<p class="mb-2"><strong>3. Properties of Quadrilaterals</strong></p>
<p class="mb-2">Sum of interior angles = <strong>360°</strong></p>
<p class="mb-2">Sum of exterior angles = <strong>360°</strong></p>
<p class="mb-2">Diagonals divide quadrilaterals into <strong>two triangles</strong></p>
<p class="mb-2"><strong>4. Area Formulas</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quadrilateral</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
</table>
<p class="mb-2"><strong>5. Key Theorems</strong></p>
<p class="mb-2">Diagonals of a parallelogram <strong>bisect each other</strong>.</p>
<p class="mb-2">Opposite sides of a parallelogram are <strong>equal</strong>.</p>
<p class="mb-2">Diagonals of a rhombus are <strong>perpendicular</strong>.</p>
<p class="mb-2">Diagonals of a rectangle are <strong>equal</strong>.</p>
<p class="mb-2">Sum of angles in any quadrilateral = <strong>360°</strong>.</p>
<p class="mb-2"><strong>6. Tips to Remember</strong></p>
<p class="mb-2">All <strong>squares</strong> are rectangles &amp; rhombuses.</p>
<p class="mb-2">Not all rectangles or rhombuses are squares.</p>
<p class="mb-2">Check <strong>parallel sides, equal sides, and angles</strong> to identify quadrilaterals.</p>
<p class="mb-2">Diagonals are key to <strong>classification and properties</strong>.</p>
`
      },
      {
        id: 'area-quadrilaterals',
        title: 'Area of Quadrilaterals',
        content: `<p class="mb-2"><strong>                            </strong><strong>Unit 8 – Quadrilaterals</strong></p>
<p class="mb-2"><strong>1. Definition</strong></p>
<p class="mb-2">A <strong>quadrilateral</strong> is a <strong>closed figure with four sides and four vertices</strong>.</p>
<p class="mb-2"><strong>2. Types of Quadrilaterals</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quadrilateral</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Properties</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2">Opposite sides parallel &amp; equal. 
Opposite angles equal. 
Diagonals bisect each other.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2">All angles = 90°. 
Opposite sides equal. 
Diagonals equal &amp; bisect each other.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal. 
All angles = 90°. 
Diagonals equal &amp; perpendicular.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2">All sides equal. 
Opposite angles equal. 
Diagonals perpendicular &amp; bisect each other.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2">Only one pair of opposite sides parallel. 
Median = (sum of parallel sides)/2.</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Kite</td>
    <td class="border border-gray-300 px-4 py-2">Two pairs of adjacent sides equal. 
Diagonals perpendicular. 
One diagonal bisected.</td>
  </tr>
</table>
<p class="mb-2"><strong>3. Properties of Quadrilaterals</strong></p>
<p class="mb-2">Sum of interior angles = <strong>360°</strong></p>
<p class="mb-2">Sum of exterior angles = <strong>360°</strong></p>
<p class="mb-2">Diagonals divide quadrilaterals into <strong>two triangles</strong></p>
<p class="mb-2"><strong>4. Area Formulas</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Quadrilateral</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Square</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rectangle</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Parallelogram</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Rhombus</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Trapezium</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
</table>
<p class="mb-2"><strong>5. Key Theorems</strong></p>
<p class="mb-2">Diagonals of a parallelogram <strong>bisect each other</strong>.</p>
<p class="mb-2">Opposite sides of a parallelogram are <strong>equal</strong>.</p>
<p class="mb-2">Diagonals of a rhombus are <strong>perpendicular</strong>.</p>
<p class="mb-2">Diagonals of a rectangle are <strong>equal</strong>.</p>
<p class="mb-2">Sum of angles in any quadrilateral = <strong>360°</strong>.</p>
<p class="mb-2"><strong>6. Tips to Remember</strong></p>
<p class="mb-2">All <strong>squares</strong> are rectangles &amp; rhombuses.</p>
<p class="mb-2">Not all rectangles or rhombuses are squares.</p>
<p class="mb-2">Check <strong>parallel sides, equal sides, and angles</strong> to identify quadrilaterals.</p>
<p class="mb-2">Diagonals are key to <strong>classification and properties</strong>.</p>
`
      },
    ]
  },
  {
    id: 'unit-9',
    title: 'Unit 9 - Circles',
    topics: [
      {
        id: 'circle-basics',
        title: 'Circle Basics',
        content: `<p class="mb-2"><strong>                              </strong><strong>Unit 9 – Circl</strong><strong>es</strong></p>
<p class="mb-2"><strong>1. Definition</strong></p>
<p class="mb-2">A <strong>circle</strong> is a closed curve where all points are at a <strong>constant distance (radius)</strong> from a <strong>fixed point (</strong><strong>center</strong><strong>)</strong>.</p>
<p class="mb-2"><strong>2. Parts of a Circle</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Part</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Center (O)</td>
    <td class="border border-gray-300 px-4 py-2">Fixed point from which all points are equidistant</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Radius (r)</td>
    <td class="border border-gray-300 px-4 py-2">Distance from center to any point on the circle</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Diameter (d)</td>
    <td class="border border-gray-300 px-4 py-2">Twice the radius:</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Chord</td>
    <td class="border border-gray-300 px-4 py-2">Line segment joining two points on the circle</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Tangent</td>
    <td class="border border-gray-300 px-4 py-2">Line touching the circle at exactly one point</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Secant</td>
    <td class="border border-gray-300 px-4 py-2">Line intersecting the circle at two points</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Arc</td>
    <td class="border border-gray-300 px-4 py-2">Part of the circle between two points</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Sector</td>
    <td class="border border-gray-300 px-4 py-2">Area enclosed by two radii and an arc</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Segment</td>
    <td class="border border-gray-300 px-4 py-2">Area enclosed by a chord and an arc</td>
  </tr>
</table>
<p class="mb-2"><strong>3. Properties of a Circle</strong></p>
<p class="mb-2">Radius is <strong>perpendicular</strong> to the tangent at the point of contact</p>
<p class="mb-2">Angle in a semicircle = <strong>90°</strong></p>
<p class="mb-2">Angles subtended by the same chord at the circumference are <strong>equal</strong></p>
<p class="mb-2">Opposite angles of a <strong>cyclic quadrilateral</strong> sum to <strong>180°</strong></p>
<p class="mb-2"><strong>4. Important Formulas</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Property</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Circumference</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Area</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Length of Arc</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Area of Sector</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Area of Segment</td>
    <td class="border border-gray-300 px-4 py-2">Segment Area = Sector Area − Triangle Area</td>
  </tr>
</table>
<p class="mb-2"><strong>5. Theorems</strong></p>
<p class="mb-2">Tangent at a point is <strong>perpendicular</strong> to the radius</p>
<p class="mb-2">Tangents from an external point are <strong>equal in length</strong></p>
<p class="mb-2">Angle subtended by an arc at the center = <strong>twice</strong> the angle at the circumference</p>
<p class="mb-2">Line joining center to midpoint of a chord is <strong>perpendicular</strong> to the chord</p>
<p class="mb-2"><strong>6. Tips to Remember</strong></p>
<p class="mb-2"><strong>Diameter</strong> = longest chord</p>
<p class="mb-2"><strong>Radius</strong> = shortest distance from center to circle</p>
<p class="mb-2">Use <strong>angles and perpendiculars</strong> to solve geometry problems</p>
<p class="mb-2">Always check <strong>units</strong> when using formulas</p>
`
      },
      {
        id: 'chord-properties',
        title: 'Chord Properties',
        content: `<p class="mb-2"><strong>                              </strong><strong>Unit 9 – Circl</strong><strong>es</strong></p>
<p class="mb-2"><strong>1. Definition</strong></p>
<p class="mb-2">A <strong>circle</strong> is a closed curve where all points are at a <strong>constant distance (radius)</strong> from a <strong>fixed point (</strong><strong>center</strong><strong>)</strong>.</p>
<p class="mb-2"><strong>2. Parts of a Circle</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Part</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Center (O)</td>
    <td class="border border-gray-300 px-4 py-2">Fixed point from which all points are equidistant</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Radius (r)</td>
    <td class="border border-gray-300 px-4 py-2">Distance from center to any point on the circle</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Diameter (d)</td>
    <td class="border border-gray-300 px-4 py-2">Twice the radius:</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Chord</td>
    <td class="border border-gray-300 px-4 py-2">Line segment joining two points on the circle</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Tangent</td>
    <td class="border border-gray-300 px-4 py-2">Line touching the circle at exactly one point</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Secant</td>
    <td class="border border-gray-300 px-4 py-2">Line intersecting the circle at two points</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Arc</td>
    <td class="border border-gray-300 px-4 py-2">Part of the circle between two points</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Sector</td>
    <td class="border border-gray-300 px-4 py-2">Area enclosed by two radii and an arc</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Segment</td>
    <td class="border border-gray-300 px-4 py-2">Area enclosed by a chord and an arc</td>
  </tr>
</table>
<p class="mb-2"><strong>3. Properties of a Circle</strong></p>
<p class="mb-2">Radius is <strong>perpendicular</strong> to the tangent at the point of contact</p>
<p class="mb-2">Angle in a semicircle = <strong>90°</strong></p>
<p class="mb-2">Angles subtended by the same chord at the circumference are <strong>equal</strong></p>
<p class="mb-2">Opposite angles of a <strong>cyclic quadrilateral</strong> sum to <strong>180°</strong></p>
<p class="mb-2"><strong>4. Important Formulas</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Property</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Circumference</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Area</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Length of Arc</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Area of Sector</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Area of Segment</td>
    <td class="border border-gray-300 px-4 py-2">Segment Area = Sector Area − Triangle Area</td>
  </tr>
</table>
<p class="mb-2"><strong>5. Theorems</strong></p>
<p class="mb-2">Tangent at a point is <strong>perpendicular</strong> to the radius</p>
<p class="mb-2">Tangents from an external point are <strong>equal in length</strong></p>
<p class="mb-2">Angle subtended by an arc at the center = <strong>twice</strong> the angle at the circumference</p>
<p class="mb-2">Line joining center to midpoint of a chord is <strong>perpendicular</strong> to the chord</p>
<p class="mb-2"><strong>6. Tips to Remember</strong></p>
<p class="mb-2"><strong>Diameter</strong> = longest chord</p>
<p class="mb-2"><strong>Radius</strong> = shortest distance from center to circle</p>
<p class="mb-2">Use <strong>angles and perpendiculars</strong> to solve geometry problems</p>
<p class="mb-2">Always check <strong>units</strong> when using formulas</p>
`
      },
      {
        id: 'tangent-properties',
        title: 'Tangent Properties',
        content: `<p class="mb-2"><strong>                              </strong><strong>Unit 9 – Circl</strong><strong>es</strong></p>
<p class="mb-2"><strong>1. Definition</strong></p>
<p class="mb-2">A <strong>circle</strong> is a closed curve where all points are at a <strong>constant distance (radius)</strong> from a <strong>fixed point (</strong><strong>center</strong><strong>)</strong>.</p>
<p class="mb-2"><strong>2. Parts of a Circle</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Part</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Center (O)</td>
    <td class="border border-gray-300 px-4 py-2">Fixed point from which all points are equidistant</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Radius (r)</td>
    <td class="border border-gray-300 px-4 py-2">Distance from center to any point on the circle</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Diameter (d)</td>
    <td class="border border-gray-300 px-4 py-2">Twice the radius:</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Chord</td>
    <td class="border border-gray-300 px-4 py-2">Line segment joining two points on the circle</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Tangent</td>
    <td class="border border-gray-300 px-4 py-2">Line touching the circle at exactly one point</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Secant</td>
    <td class="border border-gray-300 px-4 py-2">Line intersecting the circle at two points</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Arc</td>
    <td class="border border-gray-300 px-4 py-2">Part of the circle between two points</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Sector</td>
    <td class="border border-gray-300 px-4 py-2">Area enclosed by two radii and an arc</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Segment</td>
    <td class="border border-gray-300 px-4 py-2">Area enclosed by a chord and an arc</td>
  </tr>
</table>
<p class="mb-2"><strong>3. Properties of a Circle</strong></p>
<p class="mb-2">Radius is <strong>perpendicular</strong> to the tangent at the point of contact</p>
<p class="mb-2">Angle in a semicircle = <strong>90°</strong></p>
<p class="mb-2">Angles subtended by the same chord at the circumference are <strong>equal</strong></p>
<p class="mb-2">Opposite angles of a <strong>cyclic quadrilateral</strong> sum to <strong>180°</strong></p>
<p class="mb-2"><strong>4. Important Formulas</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Property</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Circumference</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Area</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Length of Arc</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Area of Sector</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Area of Segment</td>
    <td class="border border-gray-300 px-4 py-2">Segment Area = Sector Area − Triangle Area</td>
  </tr>
</table>
<p class="mb-2"><strong>5. Theorems</strong></p>
<p class="mb-2">Tangent at a point is <strong>perpendicular</strong> to the radius</p>
<p class="mb-2">Tangents from an external point are <strong>equal in length</strong></p>
<p class="mb-2">Angle subtended by an arc at the center = <strong>twice</strong> the angle at the circumference</p>
<p class="mb-2">Line joining center to midpoint of a chord is <strong>perpendicular</strong> to the chord</p>
<p class="mb-2"><strong>6. Tips to Remember</strong></p>
<p class="mb-2"><strong>Diameter</strong> = longest chord</p>
<p class="mb-2"><strong>Radius</strong> = shortest distance from center to circle</p>
<p class="mb-2">Use <strong>angles and perpendiculars</strong> to solve geometry problems</p>
<p class="mb-2">Always check <strong>units</strong> when using formulas</p>
`
      },
      {
        id: 'circle-theorems',
        title: 'Circle Theorems',
        content: `<p class="mb-2"><strong>                              </strong><strong>Unit 9 – Circl</strong><strong>es</strong></p>
<p class="mb-2"><strong>1. Definition</strong></p>
<p class="mb-2">A <strong>circle</strong> is a closed curve where all points are at a <strong>constant distance (radius)</strong> from a <strong>fixed point (</strong><strong>center</strong><strong>)</strong>.</p>
<p class="mb-2"><strong>2. Parts of a Circle</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Part</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Description</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Center (O)</td>
    <td class="border border-gray-300 px-4 py-2">Fixed point from which all points are equidistant</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Radius (r)</td>
    <td class="border border-gray-300 px-4 py-2">Distance from center to any point on the circle</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Diameter (d)</td>
    <td class="border border-gray-300 px-4 py-2">Twice the radius:</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Chord</td>
    <td class="border border-gray-300 px-4 py-2">Line segment joining two points on the circle</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Tangent</td>
    <td class="border border-gray-300 px-4 py-2">Line touching the circle at exactly one point</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Secant</td>
    <td class="border border-gray-300 px-4 py-2">Line intersecting the circle at two points</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Arc</td>
    <td class="border border-gray-300 px-4 py-2">Part of the circle between two points</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Sector</td>
    <td class="border border-gray-300 px-4 py-2">Area enclosed by two radii and an arc</td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Segment</td>
    <td class="border border-gray-300 px-4 py-2">Area enclosed by a chord and an arc</td>
  </tr>
</table>
<p class="mb-2"><strong>3. Properties of a Circle</strong></p>
<p class="mb-2">Radius is <strong>perpendicular</strong> to the tangent at the point of contact</p>
<p class="mb-2">Angle in a semicircle = <strong>90°</strong></p>
<p class="mb-2">Angles subtended by the same chord at the circumference are <strong>equal</strong></p>
<p class="mb-2">Opposite angles of a <strong>cyclic quadrilateral</strong> sum to <strong>180°</strong></p>
<p class="mb-2"><strong>4. Important Formulas</strong></p>
<table class="w-full border-collapse border border-gray-300 my-4">
  <tr>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Property</th>
    <th class="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">Formula</th>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Circumference</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Area</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Length of Arc</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Area of Sector</td>
    <td class="border border-gray-300 px-4 py-2"></td>
  </tr>
  <tr>
    <td class="border border-gray-300 px-4 py-2">Area of Segment</td>
    <td class="border border-gray-300 px-4 py-2">Segment Area = Sector Area − Triangle Area</td>
  </tr>
</table>
<p class="mb-2"><strong>5. Theorems</strong></p>
<p class="mb-2">Tangent at a point is <strong>perpendicular</strong> to the radius</p>
<p class="mb-2">Tangents from an external point are <strong>equal in length</strong></p>
<p class="mb-2">Angle subtended by an arc at the center = <strong>twice</strong> the angle at the circumference</p>
<p class="mb-2">Line joining center to midpoint of a chord is <strong>perpendicular</strong> to the chord</p>
<p class="mb-2"><strong>6. Tips to Remember</strong></p>
<p class="mb-2"><strong>Diameter</strong> = longest chord</p>
<p class="mb-2"><strong>Radius</strong> = shortest distance from center to circle</p>
<p class="mb-2">Use <strong>angles and perpendiculars</strong> to solve geometry problems</p>
<p class="mb-2">Always check <strong>units</strong> when using formulas</p>
`
      },
    ]
  },
  {
    id: 'unit-10',
    title: 'Unit 10 - Constructions',
    topics: [
      {
        id: 'basic-constructions',
        title: 'Basic Constructions',
        content: `<p class="mb-2"><strong>                       </strong><strong>Unit 10 – Constructions </strong></p>
<p class="mb-2"><strong>Definition</strong></p>
<p class="mb-2">Drawing geometrical figures accurately using <strong>compass, ruler, and protractor</strong>.</p>
<p class="mb-2"><strong>Key Constructions</strong></p>
<p class="mb-2"><strong>Bisector of a Line Segment</strong> – Draw arcs from endpoints → join intersections → get perpendicular bisector.</p>
<p class="mb-2"><strong>Angle Bisector</strong> – Draw arc from vertex → arcs from intersection points → join vertex to new intersection.</p>
<p class="mb-2"><strong>Perpendicular to Line</strong></p>
<p class="mb-2">From a point on line: draw arcs → join intersections → perpendicular line.</p>
<p class="mb-2">From a point outside line: draw arcs intersecting line → join → perpendicular line.</p>
<p class="mb-2"><strong>Triangle Construction</strong></p>
<p class="mb-2">Given <strong>3 sides (SSS)</strong></p>
<p class="mb-2">Given <strong>2 sides &amp; included angle (SAS)</strong></p>
<p class="mb-2">Given <strong>base, sum of other 2 sides, and altitude</strong></p>
<p class="mb-2"><strong>Dividing a Line Segment into </strong><strong>n</strong><strong> Equal Parts</strong> – Draw auxiliary line → mark equal parts → join endpoints → draw parallels.</p>
<p class="mb-2"><strong>Important Tips</strong></p>
<p class="mb-2">Use <strong>sharp compass &amp; pencil</strong></p>
<p class="mb-2"><strong>Label points clearly</strong></p>
<p class="mb-2">Draw arcs <strong>lightly</strong>, final lines <strong>darken</strong></p>
<p class="mb-2"><strong>Follow steps in sequence</strong></p>
<p class="mb-2">Practice <strong>all constructions 2–3 times</strong></p>
`
      },
      {
        id: 'triangle-constructions',
        title: 'Triangle Constructions',
        content: `<p class="mb-2"><strong>                       </strong><strong>Unit 10 – Constructions </strong></p>
<p class="mb-2"><strong>Definition</strong></p>
<p class="mb-2">Drawing geometrical figures accurately using <strong>compass, ruler, and protractor</strong>.</p>
<p class="mb-2"><strong>Key Constructions</strong></p>
<p class="mb-2"><strong>Bisector of a Line Segment</strong> – Draw arcs from endpoints → join intersections → get perpendicular bisector.</p>
<p class="mb-2"><strong>Angle Bisector</strong> – Draw arc from vertex → arcs from intersection points → join vertex to new intersection.</p>
<p class="mb-2"><strong>Perpendicular to Line</strong></p>
<p class="mb-2">From a point on line: draw arcs → join intersections → perpendicular line.</p>
<p class="mb-2">From a point outside line: draw arcs intersecting line → join → perpendicular line.</p>
<p class="mb-2"><strong>Triangle Construction</strong></p>
<p class="mb-2">Given <strong>3 sides (SSS)</strong></p>
<p class="mb-2">Given <strong>2 sides &amp; included angle (SAS)</strong></p>
<p class="mb-2">Given <strong>base, sum of other 2 sides, and altitude</strong></p>
<p class="mb-2"><strong>Dividing a Line Segment into </strong><strong>n</strong><strong> Equal Parts</strong> – Draw auxiliary line → mark equal parts → join endpoints → draw parallels.</p>
<p class="mb-2"><strong>Important Tips</strong></p>
<p class="mb-2">Use <strong>sharp compass &amp; pencil</strong></p>
<p class="mb-2"><strong>Label points clearly</strong></p>
<p class="mb-2">Draw arcs <strong>lightly</strong>, final lines <strong>darken</strong></p>
<p class="mb-2"><strong>Follow steps in sequence</strong></p>
<p class="mb-2">Practice <strong>all constructions 2–3 times</strong></p>
`
      },
      {
        id: 'angle-bisectors',
        title: 'Angle Bisectors',
        content: `<p class="mb-2"><strong>                       </strong><strong>Unit 10 – Constructions </strong></p>
<p class="mb-2"><strong>Definition</strong></p>
<p class="mb-2">Drawing geometrical figures accurately using <strong>compass, ruler, and protractor</strong>.</p>
<p class="mb-2"><strong>Key Constructions</strong></p>
<p class="mb-2"><strong>Bisector of a Line Segment</strong> – Draw arcs from endpoints → join intersections → get perpendicular bisector.</p>
<p class="mb-2"><strong>Angle Bisector</strong> – Draw arc from vertex → arcs from intersection points → join vertex to new intersection.</p>
<p class="mb-2"><strong>Perpendicular to Line</strong></p>
<p class="mb-2">From a point on line: draw arcs → join intersections → perpendicular line.</p>
<p class="mb-2">From a point outside line: draw arcs intersecting line → join → perpendicular line.</p>
<p class="mb-2"><strong>Triangle Construction</strong></p>
<p class="mb-2">Given <strong>3 sides (SSS)</strong></p>
<p class="mb-2">Given <strong>2 sides &amp; included angle (SAS)</strong></p>
<p class="mb-2">Given <strong>base, sum of other 2 sides, and altitude</strong></p>
<p class="mb-2"><strong>Dividing a Line Segment into </strong><strong>n</strong><strong> Equal Parts</strong> – Draw auxiliary line → mark equal parts → join endpoints → draw parallels.</p>
<p class="mb-2"><strong>Important Tips</strong></p>
<p class="mb-2">Use <strong>sharp compass &amp; pencil</strong></p>
<p class="mb-2"><strong>Label points clearly</strong></p>
<p class="mb-2">Draw arcs <strong>lightly</strong>, final lines <strong>darken</strong></p>
<p class="mb-2"><strong>Follow steps in sequence</strong></p>
<p class="mb-2">Practice <strong>all constructions 2–3 times</strong></p>
`
      },
      {
        id: 'perpendiculars',
        title: 'Perpendiculars',
        content: `<p class="mb-2"><strong>                       </strong><strong>Unit 10 – Constructions </strong></p>
<p class="mb-2"><strong>Definition</strong></p>
<p class="mb-2">Drawing geometrical figures accurately using <strong>compass, ruler, and protractor</strong>.</p>
<p class="mb-2"><strong>Key Constructions</strong></p>
<p class="mb-2"><strong>Bisector of a Line Segment</strong> – Draw arcs from endpoints → join intersections → get perpendicular bisector.</p>
<p class="mb-2"><strong>Angle Bisector</strong> – Draw arc from vertex → arcs from intersection points → join vertex to new intersection.</p>
<p class="mb-2"><strong>Perpendicular to Line</strong></p>
<p class="mb-2">From a point on line: draw arcs → join intersections → perpendicular line.</p>
<p class="mb-2">From a point outside line: draw arcs intersecting line → join → perpendicular line.</p>
<p class="mb-2"><strong>Triangle Construction</strong></p>
<p class="mb-2">Given <strong>3 sides (SSS)</strong></p>
<p class="mb-2">Given <strong>2 sides &amp; included angle (SAS)</strong></p>
<p class="mb-2">Given <strong>base, sum of other 2 sides, and altitude</strong></p>
<p class="mb-2"><strong>Dividing a Line Segment into </strong><strong>n</strong><strong> Equal Parts</strong> – Draw auxiliary line → mark equal parts → join endpoints → draw parallels.</p>
<p class="mb-2"><strong>Important Tips</strong></p>
<p class="mb-2">Use <strong>sharp compass &amp; pencil</strong></p>
<p class="mb-2"><strong>Label points clearly</strong></p>
<p class="mb-2">Draw arcs <strong>lightly</strong>, final lines <strong>darken</strong></p>
<p class="mb-2"><strong>Follow steps in sequence</strong></p>
<p class="mb-2">Practice <strong>all constructions 2–3 times</strong></p>
`
      },
    ]
  },
];
