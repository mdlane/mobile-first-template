module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      build: {
        src: ['js/app.js', 'js/services.js', 'js/controllers.js'],
        dest: 'js/site.js'
      }
    },
    uglify: {
      build: {
        options: {
          sourceMap: true
        },
        files: {
          'js/site.min.js': ['js/site.js']
        }
      }
    },
    jshint: {
      options: {
        globals: {
          window: true,
          angular: true,
          console: true,
          cred: true,
          updateDelay: true,
          location: true,
          require: true
        },
        eqnull: true,
        strict: false,
        '-W097': true
      },
      beforeconcat: ['Gruntfile.js', 'js/app.js', 'js/services.js', 'js/controllers.js'],
      afterconcat: ['js/site.min.js']
    },
    watch: {
      scripts: {
        files: ['js/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint:beforeconcat', 'concat', 'uglify']);
};