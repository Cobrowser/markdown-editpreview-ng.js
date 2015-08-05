module.exports = function(grunt) {

  grunt.initConfig({

    release: {
      options: {
        additionalFiles: ['bower.json']
      },
      npm: false
    }

  });

  grunt.loadNpmTasks('grunt-release');

};
