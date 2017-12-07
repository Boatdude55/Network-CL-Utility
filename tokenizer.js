const fail = false;
const pass = true;

var stream = [];

var deliminator = [
    ':',
    '.',
    ',',
    '(',
    ')',
    '[',
    '>'
];

var numBase = {
    hex: 'x',
    dec: ' '
};

var port = {
    min: 0,
    max: 65535
};


/**
 * @param currPos = current position in stream
 * @param stream = the current stream
 * returns the next value in the stream
 * */
var peek = function ( currPos , stream ) {
  
  let value = 0;
  
  return value;
  
};

var seek = function ( target , currPos , stream ) {
  
  let pos = 0;
  
  return pos;
  
};

/**
 * Store values while seeking deliminator
 * */
var buffer = [];

/**
 * Store value that may be token
 * */
var potentialToken = {
    string: '',
    deliminators: {
        delim: {
            type: '',
            count: 0
        }
    },
    base: ''
};

var tokenTest = function ( pattern , test , prevTest ) {
  
  if ( value === test ) {
      return pass;
  } else {
      return fail;  
  }
};

var isAddr = function ( buffer ) {
    
    let addrDelim = deliminator["period"];
    let utility = new Array(0);
    
    utility.forEach.call( buffer.deliminators , );
}
for ( let i = 0 ; i < stream.length ; i++ ) {
    
    
}

var TCPLexer = function () {
    
}