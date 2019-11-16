// why are these going to console log 6 five times?

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 1; i <= 5; i++) {
//   (function() {
//     setTimeout(function timer() {
//       console.log(i);
//     }, i * 1000);
//   })();
// }

// why does the following work the way that we expect it to?

// for (var i = 1; i <= 5; i++) {
//   (function() {
//     var j = i;
//     setTimeout(function timer() {
//       console.log(j);
//     }, j * 1000);
//   })();
// }

// slight, possibly cleaner, version of the above code 

// for (var i = 1; i <= 5; i++) {
//   (function(j) {
//     setTimeout(function timer() {
//       console.log(j);
//     }, j * 1000);
//   })(i);
// }

// using let and block scope to solve the problem 

// for (var i = 1; i <= 5; i++) {
//   let j = i; // yay, block-scope for closure!
//   setTimeout(function timer() {
//     console.log(j);
//   }, j * 1000);
// }

// for (let i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }

function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log( something );
    }

    function doAnother() {
        console.log( another.join( " ! " ) );
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}

var foo = CoolModule();

// console.log(foo);

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

//singleton module example below using an IIFE, same result on the return object but can only be used once, can't be used to
//create multiple instance of the module

var foo = (function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log( something );
    }

    function doAnother() {
        console.log( another.join( " ! " ) );
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
})();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

//naming the return object as publicAPI is a common pattern

var foo = (function CoolModule(id) {
    function change() {
        // modifying the public API
        publicAPI.identify = identify2;
    }

    function identify1() {
        console.log( id );
    }

    function identify2() {
        console.log( id.toUpperCase() );
    }

    var publicAPI = {
        change: change,
        identify: identify1
    };

    return publicAPI;
})( "foo module" );

foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE

