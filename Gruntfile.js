/* Grunt for compiling less files */
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        exec: {
            install: 'npm install',
            test: 'node node_modules/karma-cli/bin/karma start karma.debug.conf.js --auto-watch',
            coverage: 'node node_modules/karma-cli/bin/karma start karma.coverage.conf.js --auto-watch',
            ci: 'node node_modules/karma-cli/bin/karma start karma.conf.js --single-run'
        }
    });
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('karma-test', ['exec:install', 'exec:test']);
};