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

    let utility = new Array(0);
    
    utility.forEach.call( buffer.deliminators);
}

/**
 * @param stream = the string to be tokenized
 * @param index the current index of main iteration
 * @returns the position of the nearest delimanotor from the index
 * */
function FindDelim ( stream, index ) {
    
    let delimBuffer = deliminator.map( function ( currentValue, index ) {
        
        let delimIndex = stream.indexOf( currentValue );
        
        if ( delimIndex !== -1 ) {
            
            return {
                delim: currentValue,
                pos: delimIndex
            };
            
        }
        
    }, stream);
    
    let position = delimBuffer.reduce( function ( accumulator, currentValue, currentIndex ) {
        
        let firstDelim = 0;
        
        if ( currentValue.pos <= accumulator ) {
        
            firstDelim = currentValue.pos;
            
        }
        
        return firstDelim;
        
    }, 0);
    
    return position;
}

var test1 = "82.132.219.219.55495";
stream = test1;

for ( let i = 0 ; i < stream.length ; i++ ) {
    
   let max = FindDelim( stream, i );
   
   let attempt = stream.slice(i,max);
   
   if ( function isIPByte ( attempt ) {
       
       let ipMax =  255;
       let ipDec = parseInt(attempt, 10);
       
       if (  ipDec === isNaN ) {
           
           return false;
           
       }else if ( ipDec/255 > 1 ) {

           return false;
       }
       return true;
   } ) {
       
       let ipBuffer = [];
       ipBuffer.push(attempt);
   }
}