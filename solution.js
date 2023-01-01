function findOptimalBlock(blocks, reqs) {
  let minDistances = new Array(reqs.length).fill(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < blocks.length; i++) {
    for (let j = 0; j < reqs.length; j++) {
      if (blocks[i][reqs[j]]) {
        minDistances[j] = Math.min(minDistances[j], i);
      }
    }
  }
  let maxDistance = Math.max(...minDistances);
  let optimalBlockIndex = minDistances.indexOf(maxDistance);
  return optimalBlockIndex;
}
