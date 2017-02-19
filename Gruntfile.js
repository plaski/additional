module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    },

    imagemin: {
	    dynamic: {
	        files: [{
	            expand: true,
	            cwd: 'photo/',
	            src: ['**/*.{png,jpg,gif,jpeg}'],
	            dest: 'photo/build/'
	        }]
	    }
	},

	watch: {
		scripts: {
			files: ['sass/*.scss'],
			tasks: ['sass'],
			options: {
				spawn: false,
			}
		}
	}
  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin', 'watch']);
};