module.exports = function(grunt) {

  // Configuration de Grunt
  grunt.initConfig({
  	less: {
      dev: {
        options: {

        },
        files: {
          "assets/dist/stylesheet/style.css": "assets/src/stylesheet/style.less"
        }
      },
      prod: {
        options: {
          paths: ["assets/css"],
          cleancss: true,
          modifyVars: {
            imgPath: '"http://mycdn.com/path/to/images"',
            bgColor: 'red'
          }
        },
        files: {
          "assets/dist/stylesheet/style.css": "assets/src/stylesheet/style.less"
        }
      }
    },
    cssmin: {
      combine: {
        options: {
          banner: '/* \n  Minified css file \n  Date : <%= grunt.template.today("yyyy-mm-dd HH:MM") %> \n*/'
        },
        files: {
          'assets/dist/stylesheet/output.min.css': ['assets/dist/stylesheet/style.css', 'assets/dist/stylesheet/test.css']
        }
      }
    }
  })

  // Import package
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-cssmin')

  // Définition des tâches Grunt
  grunt.registerTask('app-dev', ['less:dev', 'cssmin:combine'])

}

