module.exports = function(grunt) {

  grunt.initConfig({

    release: {
      options: {
        additionalFiles: ['bower.json'],
        commitMessage: 'feat(release): release <%= version %>', //default: 'release <%= version %>'
        npm:false
      },
      npm: false
    }

  });

  grunt.loadNpmTasks('grunt-release');

};
