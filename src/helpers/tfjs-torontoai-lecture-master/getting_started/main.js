// ********************************
// Tensor Operations in the Browser
// ********************************

// NOTE: View results by opening up Chrome's developer tools
// and selecting the "console" tab. 

// Link to TFJS documentation: https://js.tensorflow.org/api/1.0.0/ 


//    ***
// 1. *** Tensor Construction ***
//    ***

// define a scalar


// define a 1d tensor
const x = tf.tensor( [ 1, 2, 3 ] );

// define a 2d tensor
const y = tf.tensor( [
    [ 1, 2 ],
    [ 3, 4 ]
] );

// if we try logging to the console in the usual way 
// we'll get the object, and not the values
console.log( 'y tensor:', y );


// use the built-in print method instead
y.print();


// convert a tensor back into an array
let xArr = Array.from( x );
console.log( xArr.dataSync() );



//    ***
// 2. *** Simple Math Operations ***
//    ***
// good for custom loss() - loss regression backpropagation
// to delete tensor

const y_squared = y.square();

// poly == polynomial for linear regression
const poly = tf.tidy( () => {
    const x2 = x.square();
    const x3 = tf.mull( x2, x );
    let sum = x3.add( x2 );


} )


//    ***
// 3. *** Memory Management ***
//    ***

// When running within the browser, we need to be
// conscientious of memory usage. If we are creating
// intermediate tensors are part of a computation, 
// we should dispose of them afterwards to remove
// their burden on memory. 



// Use tf.tidy() to automatically dispose of tensors that
// are no longer needed.

// construct x^3+ x^2 + x^1 + c