const filePatterns = ['tests/**/*.ts'];
module.exports = function (config) {
  const options = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './src/',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: filePatterns,


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'sonarqubeUnit'],

    sonarQubeUnitReporter: {
      sonarQubeVersion: 'LATEST',
      outputFile: '../TestResults/ut_report.xml',
      useBrowserName: false,
      //filenameFormatter: (nextPath, result) => {console.dir(JSON.stringify(result)); return "ME"+nextPath}
      overrideTestDescription: true,
    },
    // configure optional coverage, enable via --env.codeCoverage
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'lcovonly' },
        { type: 'text-summary' }
      ]
    },
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [],

    customLaunchers: {
      android: {
        base: 'NS',
        platform: 'android'
      },
      ios: {
        base: 'NS',
        platform: 'ios'
      },
      ios_simulator: {
        base: 'NS',
        platform: 'ios',
        arguments: ['--emulator']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  };

  if(config._NS && config._NS.env && config._NS.env.codeCoverage) {
    options.reporters = (options.reporters || []).concat(['coverage']);
  }

  config.set(options);

}
