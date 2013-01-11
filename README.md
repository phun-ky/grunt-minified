# grunt-minified

> A grunt plugin to minify given JavaScript files

## Getting Started
Install this grunt plugin next to your project's [Gruntfile.js][getting_started] with: 

`npm install grunt-minified`

Then add this line to your project's `Gruntfile.js`:

`grunt.loadNpmTasks('grunt-minified');`

[grunt]: https://github.com/gruntjs/grunt
[getting_started]: https://github.com/gruntjs/grunt/wiki/Getting-started

## Documentation
Add something like this in your gruntfile:

```javascript
minified : {
  files: {
    src: [
    '/js/src/**/*.js',                
    '/js/src/*.js'
    ],
    dest: '/js/min/'
  },
  options : {
    sourcemap: true,
    allinone: false
  }
} 
```

With this configuration, grunt-minified will output a minified file and a sourcemap per parsed file with this filename structure: `<filename>.min.js` in the `dest` folder.

### Options

Grunt-minified currently supports these options:

#### sourcemap
* Type: `Boolean`
* Defaults: `false`

Generate a sourcemap for the generated files(s) if toggled. The output files is saved with this filename structure: `<filename>.js.map` in the `dest` folder.

#### allinone
* Type: `Boolean`
* Defaults: `false`

Generate just one minified file if toggled. Output file is saved as `minified.js` if `options.dest_filename` is not set.

#### dest_filename
* Type: `String`
* Defaults: `minified.js`

If `allinone` is set, grunt-minified will use `dest_filename` for the generated sourcemap. No point of setting this if `allinone` is set to false.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
_(Until v1.0.0, this will only be updated when major or breaking changes are made)_

10/01/2013: Added support for grunt v 0.4.0rc5


## License
Copyright (c) 2012 Alexander Vassbotn Røyne-Helgesen  
Licensed under the GPL license.
