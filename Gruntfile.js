var G ={
  host: "http://amail.com.local/",
  paths: {
    spec: "assets/spec/",
    src: {
      js: "assets/src/javascript/",
      css: "assets/src/stylesheet/",
      img: "assets/src/images/"
    },
    dev: {
      js: "assets/dist/javascript/dev/",
      css: "assets/dist/stylesheet/dev/",
      img: "assets/dist/images/dev/"
    },
    prod: {
      js: "assets/dist/javascript/prod/",
      css: "assets/dist/stylesheet/prod/",
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
          banner: '/* \n  Generates stylesheet file \n  Date : <%= grunt.template.today("yyyy-mm-dd HH:MM") %> \n*/\n'
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
          banner: '/* \n  Generates minified stylesheet file \n  Date : <%= grunt.template.today("yyyy-mm-dd HH:MM") %> \n*/\n',
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
    uglify: {
      dev: {
        options: {
          banner: '/* \n  Generates JavaScript file \n  Date : <%= grunt.template.today("yyyy-mm-dd HH:MM") %> \n*/\n',
          beautify: true
        },
        files: {
          'assets/dist/javascript/dev/script.js': ['assets/src/javascript/client-side/script.js']
        }
      },
      prod: {
        options: {
          banner: '/* \n  Generates minified JavaScript file \n  Date : <%= grunt.template.today("yyyy-mm-dd HH:MM") %> \n*/\n'
        },
        files: {
          'assets/dist/javascript/prod/script.min.js': ['components/angularjs/angular.js', 'assets/src/javascript/script.js']
        }
      }
    },
    // JASMINE :: Testing JavaScript Code
    jasmine: {
      pivotal: {
        src: G.paths.dev.js+'**/*.js',
        options: {
          vendor: 'components/angularjs/angular.min.js',
          specs: G.paths.spec+'/*Spec.js',
          junit: {
            path: 'junit/xml/',
            dn: true, //in grunt-contrib-jasmine/tasks/jasmine.js var d = (options.junit.dn)? Date() + ' - ' : '';
            consolidate: true
          }
          //helpers: 'spec/*Helper.js'
        }
      }
    },
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
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-jasmine')

  // Définition des tâches Grunt
  grunt.registerTask('app-init', ['bower'])
  grunt.registerTask('app-dev', ['less:dev', 'uglify:dev', 'jasmine'])
  grunt.registerTask('app-prod', ['less:prod', 'uglify:prod'])
  grunt.registerTask('app-build', ['app-dev', 'app-prod'])

}

