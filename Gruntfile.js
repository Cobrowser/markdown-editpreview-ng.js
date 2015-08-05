module.exports = function(grunt) {

  grunt.initConfig({

    release: {
      options: {
        additionalFiles: ['bower.json'],
        npm: false,
        commitMessage: 'feat(release): release <%= version %>'
      }
    }

  });

  grunt.loadNpmTasks('grunt-release');

};
