/**
 * Process command-line arguments in phantomjs
 * 
 * Usage:
 *   $ phantomjs some-script.js -u bob -password poop
 *   arg(['user', 'u'])         // => 'bob'
 *   arg(['password', 'p'])     // => 'poop'
 *   arg( 's', 'Some Value' )   // => 'Some Value'
 * 
 * @param  {String|Array} options  Switches to look for
 * @param  {Mixed}        fallback Default value for param
 * @return {Mixed}                 Value of the switch
 */
module.exports = function( options, fallback ){
  if ( !Array.isArray( options ) ) options = [ options ];

  var option, pos;

  do {
    option = options.pop();

    if ( option.length === 1 ) option = '-' + option;
    else option = '--' + option;

    pos = system.args.indexOf( option );
  } while ( options.length && pos === -1 );

  if ( pos === -1 ) return fallback;

  return system.args[ pos + 1 ];
};