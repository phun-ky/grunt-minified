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
Add something like this in yer gruntfile:

	minified : {
      files: {
        src: [
          '/js/src/**/*.js',                
          '/js/src/*.js'
        ],
        dest: '/js/min/'
      }
    }


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
_(Until v1.0.0, this will only be updated when major or breaking changes are made)_



## License
Copyright (c) 2012 Alexander Vassbotn Røyne-Helgesen  
Licensed under the GPL license.
