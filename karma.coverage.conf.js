// Karma configuration
// Generated on Thu May 2 2017 13:30:46 GMT+1000 (AEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // web server port
    port: 9876,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    plugins: [
        'karma-junit-reporter',
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-coverage'
    ],
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // used for coverage report
    preprocessors: {
      'AGLCodeChallenge/app/**/*.js': ['coverage']
    },

    // list of files / patterns to load in the browser
    files: [
      'http://cdn.gigya.com/js/gigya.js?apiKey=3_dmxd_R4-5EB7Uovg8BezkTaHWgzwN8voD6_lPy4sly7QU3zAGaYrdbg0XMiSHtPr',
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js',
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-mocks.js',
      'AGLCodeChallenge/Scripts/jquery-1.10.2.min.js',
      'AGLCodeChallenge/Scripts/angular-animate.min.js',
      'AGLCodeChallenge/Scripts/angular-touch.min.js',
      'AGLCodeChallenge/Scripts/angular-adaptive-detection.min.js',
      'AGLCodeChallenge/Scripts/angular-ui-router.min.js',
      'AGLCodeChallenge/Scripts/bootstrap-select.min.js',
      'AGLCodeChallenge/Scripts/ui-bootstrap-tpls.min.js',
      'AGLCodeChallenge/Scripts/highcharts.js',
      'AGLCodeChallenge/Scripts/highcharts-ng.js',
      'AGLCodeChallenge/Scripts/moment.min.js',
      'AGLCodeChallenge/Scripts/moment-timezone.js',
      'AGLCodeChallenge/Scripts/lodash.min.js',
      'AGLCodeChallenge/Scripts/angular-local-storage.min.js',
      'AGLCodeChallenge/App/**/*.js',
      'AGLCodeChallengeTests/ng-tests/**/*.js',
      'AGLCodeChallenge/Scripts/angular-sanitize.min.js',
      'AGLCodeChallenge/Scripts/angular-filter.min.js'
    ],

    // list of files to exclude
    exclude: [

    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit', 'coverage'],
    junitReporter: {
        outputFile: 'TestResults/karma-results.xml'
    },

    coverageReporter: {
      type : 'text',
      dir : 'TestResults/'
    }
  });
};
