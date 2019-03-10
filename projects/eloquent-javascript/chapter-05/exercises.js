// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
  return arr.reduce((flatArr, subArr) => {
    return flatArr.concat(subArr);
  }, []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(val, test, update, body) {
  while (test(val)) {
    body(val);
    val = update(val);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(arr, test) {
  for (let i = 0; i < arr.length; i++) {
    if (!test(arr[i])) {
      return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  // var scripts = `require('./path/to/scripts.js')`;
  let code;
  const direction = [];
  let dominant;
  for (let i = 0; i < text.length; i++) {
    code = text.charCodeAt(i);
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        direction.push(script.direction);
      }
    }
  }
  const dirTally = direction.reduce((tally, dir) => {
    if (!tally[dir]) {
      tally[dir] = 1;
    } else {
      tally[dir] += 1;
    }
    return tally;
  }, {});
  for (let key in dirTally) {
    if (!dominant) {
      dominant = key;
    } else if (dirTally[dominant] < dirTally[key]) {
      dominant = key;
    }
  }
  return dominant;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
