const memo = function () {
  let cache = [];
  return function (n) {
    if (cache.includes(n)) { console.log("already in memory") }
    else { console.log("first"); cache.push(n); }
  }
}();

memo(1) //first
memo(1) //already in memory
memo(2) //first
memo(2) //already in memory