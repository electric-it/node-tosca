module.exports = function(grunt) {

  grunt.initConfig({
    jshint : {
      options : { asi : true },  // leave me alone about ;         
      files : ['lib/**/*js']
    },
    watch : {
      files : ['lib/**/*js'],
      tasks : ['jshint']
    }
  })

  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-watch')                   
}
