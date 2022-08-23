function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log( checkSpam('buy VIAgRA now'));
console.log( checkSpam('free xxxx'));
console.log( checkSpam("innocent rabbit"));