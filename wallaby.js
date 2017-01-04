  module.exports = function (w) {
    return {
      files: [
        'src/**/*.ts',
      ],
      tests: [
        'tests/**/*.spec.ts'
      ],
      env: {
        type: 'node'
      },
      testFramework: 'mocha',
      debug: true,
    };
  };