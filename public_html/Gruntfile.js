module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: ['js/src/skel.min.js', 'js/src/init.js', 'js/src/jquery.scrolly.min.js', 'js/src/imagelightbox.js', 'js/src/lightbox.js', 'js/src/suntalee.js',  'js/src/isvisible.js'],
        dest: 'js/build/suntalee.global.min.js'
      }
    },


// sass: {
//     dist: {
//         options: {
//             style: 'compressed'
//         },
//         files: {
//             'css/build/global.css': 'css/src/global.scss'
//         }
//     }
// },

    // concat: {
    //     css: {
    //       src: ['css/skel.css', 'css/style.css', 'css/style-wide.css', 'css/responsive-menu.css', 'css/responsive6.css', 'css/grad.css', 'css/imagelightbox.css', 'css/experimental.css'],
    //       dest: 'css/suntalee.css'
    //     }
    // },

    // cssmin: {
    //   css:{
    //     src: 'css/suntalee.css',
    //     dest: 'css/suntalee.min.css'
    //   }
    // },

//   imagemin: {
//     dynamic: {
//         files: [{
//             expand: true,
//             cwd: 'imagesrc/',
//             src: ['**/*.{png,jpg,gif}'],
//             dest: 'images'
//         }]
//     }
// },

// watch: {
//     options: {
//         livereload: true,
//     },

//     scripts: {
//         files: ['js/src/*.js'],
//         tasks: ['uglify'],
//         options: {
//             spawn: false,
//         }
//     },

//     concat: {
//         css: {
//           src: ['css/skel.css', 'css/style.css', 'css/style-wide.css', 'css/responsive-menu.css', 'css/responsive6.css', 'css/grad.css', 'css/imagelightbox.css', 'css/experimental.css'],
//           dest: 'css/suntalee.css'
//         }
//     },

//     cssmin: {
//       css:{
//         src: 'css/suntalee.css',
//         dest: 'css/suntalee.min.css'
//       }
//     },


// }


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.loadNpmTasks('grunt-contrib-imagemin');
  // // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // // grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  // grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass']);
    grunt.registerTask('default', ['uglify']);



};
