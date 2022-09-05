let worker = {
  slow(min, max) {
    console.log(`slow(${min},${max})을/를 호출함`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }    

    let result = func.call(this, ...arguments);

    cache.set(key, result);
    return result;
  };

  function hasg(args) {
    return args[0] + ',' + args[1];
  }

  worker.slow = cachingDecorator(worker.slow, hash);

  console.log( worker.slow(3, 5));
  console.log( "다시 호출: " + worker.slow(3, 5));
}