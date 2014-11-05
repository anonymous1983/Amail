var G ={
  host: "http://amail.com.local/",
  paths: {
    src: {},
    dev: {},
    prod: {
      img: "assets/dist/images/prod/"
    }
  }
}

module.exports = function(grunt) {
  // Configuration de Grunt
  grunt.initConfig({
    // BOWER
    bower: {
      install: {
        options: {
          //targetDir: './components',
          //layout: 'byType',
          //install: true,
          //verbose: false,
          //cleanTargetDir: false,
          //cleanBowerDir: false,
          //bowerOptions: {}
        }
      }
    },
    // LESS
  	less: {
      dev: {
        options: {
          banner: '/* \n  Generates stylesheet file \n  Date : <%= grunt.template.today("yyyy-mm-dd HH:MM") %> \n*/'
        },
        files: {
          "assets/dist/stylesheet/dev/style.css": ["assets/src/stylesheet/style.less"]
        }
      },
      prod: {
        options: {
          //paths: ["assets/css"],
          compress:true,
          cleancss: true,
          banner: '/* \n  Generates minified stylesheet file \n  Date : <%= grunt.template.today("yyyy-mm-dd HH:MM") %> \n*/',
          modifyVars: {
            imgPath: '"'+G.host+G.paths.prod.img+'"',
            bgColor: '#f00'
          }
        },
        files: {
          "assets/dist/stylesheet/prod/style.min.css": ["assets/src/stylesheet/style.less"]
        }
      }
    },
    // JS :: minification and compression

    // WATCH
    watch: {
      //scripts: {
        //files: '**/*.js', // tous les fichiers JavaScript de n'importe quel dossier
        //tasks: ['concat:dist']
      //},
      styles: {
        files: '**/*.less', // tous les fichiers Sass de n'importe quel dossier
        tasks: ['app-build']
      }
    }


  })

  // Import package
  grunt.loadNpmTasks('grunt-bower-task')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-watch')

  // Définition des tâches Grunt
  grunt.registerTask('app-init', ['bower'])
  grunt.registerTask('app-dev', ['less:dev'])
  grunt.registerTask('app-prod', ['less:prod'])
  grunt.registerTask('app-build', ['app-dev', 'app-prod'])

}

