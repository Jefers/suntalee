module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'suntalee.min.js': 'public_html/*.js'
        },
        options: {
          banner: '/* This file is minified, built <%= grunt.template.today() %> */'
        }
      },
      addsub: {
        files: {
          'addsub.js': ['calculator/add.js', 'calculator/subtract.js']
        }
      }
    },
    watch: {
      files: ['*.js'],
      tasks: ['uglify:dist']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'uglify'
  ]);
};
