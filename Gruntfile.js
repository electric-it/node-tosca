module.exports = function(grunt) {

  grunt.initConfig({
    jshint : {
      options : {
        asi : true
      , laxcomma : true
     }
     , files : [
       'lib/**/*js'
     , 'test/**/*js']
    },
    watch : {
      files : [
        'lib/**/*js'
      , 'test/**/*js'
      ],
      tasks : ['jshint']
    }
  })

  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-watch')                   
}
