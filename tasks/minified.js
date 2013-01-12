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
var colors            = require('colors');

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('minified', 'Minify given JavaScript files', function() {

    // Set up vars for task
    var _destPath = '';
    var _opts     = this.options();


    // Set up destiation variable
    var minDest = '';
    var uglifyOpts = (_opts.uglifyOpts) ? _opts.uglifyOpts : {};
    var mapDest;

    // Set up callback function for file iteration
    var minify_file = function(file){

      // Sandboxed variables



      // Read file source
      var src       = grunt.file.read(file);
      // Get file name
      var filename  = path.basename(file);



      if(_opts.sourcemap){
        uglifyOpts.outSourceMap = filename + '.map';
        mapDest = _destPath + uglifyOpts.outSourceMap;
      }
      // Minify file source
      var result       = uglify.minify(file, uglifyOpts);

      if(_opts.sourcemap){

        // Write source map to file
        grunt.file.write( mapDest, result.map );
      }

      var minSrc    = result.code

      // Verbose output by default for now
      if(_opts.verbose){

        grunt.log.ok(filename.yellow + ': original size: ' + String(src.length).cyan + ' bytes' + ', minified size: ' + String(minSrc.length).cyan + ' bytes.');
        if(_opts.sourcemap){
          grunt.log.ok('sourcemap generated to ' + uglifyOpts.outSourceMap.yellow);
        }
      } else {
        var _non_verbose_output = filename.yellow + ' minified';

        if(_opts.sourcemap){
          _non_verbose_output += ', and sourcemapped to ' + uglifyOpts.outSourceMap.yellow;
        }
        grunt.log.ok(_non_verbose_output);
      }





      // Set destination
      minDest = _destPath + filename.replace('.js','.min.js')

      // Write minified sorce to destination file
      grunt.file.write( minDest, minSrc );

    };

    var minify_files = function(files){

      if(!_opts.dest_filename){
        _opts.dest_filename = 'minified.js'
      }

      // Set destination
      minDest = _destPath + _opts.dest_filename.replace('.js','.min.js')

      // Minify file source
      var result       = uglify.minify(files, uglifyOpts);

      grunt.file.write( minDest, result.code );

      if(_opts.sourcemap){

        uglifyOpts = {
          outSourceMap: _opts.dest_filename + '.map'
        };

        mapDest = _destPath + uglifyOpts.outSourceMap;

        grunt.file.write( mapDest, result.map );
      }



      // Verbose output by default for now
      if(_opts.verbose){

        grunt.log.ok(_opts.dest_filename.yellow + ' minified to ' + String(result.code.length).cyan + ' bytes');
        if(_opts.sourcemap){
          grunt.log.ok('sourcemap generated to ' + uglifyOpts.outSourceMap.yellow);
        }
      } else {
        var _non_verbose_output = _opts.dest_filename.yellow + ' minified';

        if(_opts.sourcemap){
          _non_verbose_output += ', and sourcemapped to ' + uglifyOpts.outSourceMap.yellow;
        }
        grunt.log.ok(_non_verbose_output);
      }
    };

    // Set path of files to be stored
    _destPath = this.data.dest;

    if(_opts.allinone){

      minify_files(this.filesSrc);

    } else {

      // Iterate over files to minify
      this.filesSrc.forEach(function(file){
        if(_opts.verbose){
          grunt.log.writeln();
        }
        // Bazinga!
        minify_file(file);
      });
    }
  });
};
