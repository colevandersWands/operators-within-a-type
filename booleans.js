{ console.log('--- boolean operators ---')

console.log('--- || ---')

  const or_cases = [
    // all args must be numbers
  ];
  function or(_a, _b) {
    if (typeof a === 'boolean' && typeof b === 'boolean') {
      return a || b;
    } else {
      return 'phht'
    }
  }
  // run tests

console.log('--- && ---')

  const subtraction_cases = [
    // all args must be numbers
  ];
  function and(_a, _b) {
    if (typeof a === 'boolean' && typeof b === 'boolean') {
      return a && b;
    } else {
      return 'phht'
    }
  }
  // run tests

console.log('--- ! ---')

  const not_cases = [
    // all args must be numbers
  ];
  function not(_a) {
    if (typeof a === 'boolean') {
      return !a;
    } else {
      return 'phht'
    }
  }
  // run tests





// testing utils
  function run_tests(_target, _cases, _log) {
    for (let t_case of _cases) {
      let expected = t_case.expected;

      let actual;
      let msg;
      let log;
      if (_log) {
        log = _target(... t_case.args, true);
        actual = log.result;
      } else {
        actual = _target(... t_case.args, false);
      };

      let pass;
      if (typeof expected === 'object') {
        actual = JSON.stringify(actual);
        expected = JSON.stringify(expected);
        pass = actual === expected;
      } else {
        pass = actual === expected;
      };

      if (!pass && _log) {
        console.log(`    ${t_case.name}: \n` + 
            "actual: ", log, "\n" +
            `expected: {${typeof expected}, ${expected}}`);
      } else if (!pass) {
        console.log(`${t_case.name}: \n` + 
            `   actual: {${typeof actual}, ${actual}} \n` +
            `   expected: {${typeof expected}, ${expected}}`);
      };
    };
  };
}