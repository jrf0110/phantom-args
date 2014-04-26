# PhantomJS Argument Process

Process command-line arguments in phantomjs

__Install:__

```
npm install phantom-args
```

__Usage:__

```javascript
// $ phantomjs some-script.js -u bob -password poop

var arg = require('phantom-args');

arg(['user', 'u'])        // => 'bob'
arg(['password', 'p'])    // => 'poop'
arg( 's', 'Some Value' )  // => 'Some Value'

phantom.exit();
```