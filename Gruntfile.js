module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'src/app.js'
        }
      }
    },

    connect: {
      devserver: {
        options: {
          keepalive: grunt.option('keepalive') || false,
        }
      }
    },

    watch: {
      express: {
        files:  ['src/**/*'],
        tasks:  ['express:dev'],
        options: {
          spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
        }
      }
    },

    shell: {
      mongodb: {
        command: 'mongod ./data/db',
        options: {
            async: true,
            stdout: false,
            stderr: true,
            failOnError: true,
            execOptions: {
                cwd: '.'
            }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-shell-spawn');

  grunt.registerTask('default', ['express:dev', 'watch:express', 'connect:devserver:keepalive']);

  grunt.registerTask('server', ['express:dev', 'watch:express', 'connect:devserver:keepalive']);
};