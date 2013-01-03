/*
 * grunt-minified
 * https://github.com/phun-ky/grunt-minified
 *
 * Copyright (c) 2012 Alexander Vassbotn Røyne-Helgesen 
 * Licensed under the GPL license.
 */
'use strict';

var uglify            = require('uglify-js');
var path              = require('path');

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('minified', 'Minify given JavaScript files', function() {

    // Set up vars for task
    var _destPath = '';    
    
    // Set up callback function for file iteration
    var minifyJS = function(source){              

      // Sandboxed variables

      // Read file source
      var src       = grunt.file.read(source);

      // Minify file source
      var ast       = uglify.minify(source);
      var minSrc    = ast.code

      // Get file name
      var filename  = path.basename(source);
      
      // Verbose output by default for now
      console.log(filename + ", ");
      console.log('Original size: ' + src.length + ' bytes.' + ' Minified size: ' + minSrc.length + ' bytes.');      

      // Set up destiation variable
      var minDest = '';

      // Set destination
      minDest = _destPath + filename.replace('.js','.min.js')
            
      // Write minified sorce to destination file
      grunt.file.write( minDest, minSrc );      

    };
      
    // Set path of files to be stored
    _destPath = projectPath + this.file.dest;

    // Iterate over files to minify
    this.file.src.forEach(function(source){              
      
      // Bazinga!
      minifyJS(source);
    });     
  });  
};
