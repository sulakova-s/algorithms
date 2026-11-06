const graph = {
  you: ['alice', 'bob', 'claire'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  claire: ['tom', 'jonny'],
  anuj: [],
  peggy: [],
  tom: [],
  jonny: [],
};

const isSeller = (person) => person.endsWith('m');

// Time complexity: O(V + E) — V vertices (people), E edges (connections)
// Space complexity: O(V)
function breadthFirstSearch(name) {
  const queue = [...graph[name]];
  const searched = new Set();

  while (queue.length > 0) {
    const person = queue.shift();

    if (searched.has(person)) continue;
    searched.add(person);

    if (isSeller(person)) {
      console.log(`${person} is a mango seller!`)
      return true;
    }

    queue.push(...graph[person]);
  }

  return false;
}

console.log(breadthFirstSearch('you'));