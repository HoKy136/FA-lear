// ~~~~~~~~~~Problem 1~~~~~~~~~~~

// setTimeout(() => {
//     console.log('Hello Fresher Academy');
// },1000);

// ~~~~~~~~~Problem 2~~~~~~~~~~~

// setInterval(()=>{
//     console.log('Hello Fresher Academy repeatedly after every 3 seconds.')
// },3000);

// ~~~~~~~~~~Problem 3~~~~~~~~
// this function output : 1 > 4 > 3 >2
// JS JavaScript is single-threaded: so output handle up to down
// but 3>2 is a async so they move to Callback queue and waiting timeout
// 2 waiting 1s  > 2 output after 3

// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
//     })();

// ~~~~~~~~~~Problem 4~~~~~~~
// ~~~~~~~~~~Case 1~~~~~~~~~~~~
// this function output : A > D > B >C
// JS JavaScript is single-threaded: so output handle up to down
// but B-C is a async so they move to Callback queue and waiting timeout

// console.log('A');
// setTimeout(function() { console.log('B'); }, 0);
// setTimeout(function() { console.log('C'); }, 0);
// console.log('D');

// ~~~~~~~~~~Case 2~~~~~~~~~~~~
// this function output : B > D > A > C
// B , D handle only 1 event loop and they waiting same time 0s > up to down
// A , C have 2 event loop and A 0ms , C 10ms > A output before C

// setTimeout(function() {
//   setTimeout(function() {
//     console.log('A');
//   }, 0);
// }, 0);

// setTimeout(function() {
//   console.log('B');
// }, 0);

// 	setTimeout(function() {
//       setTimeout(function() {
//         console.log('C');
//       }, 0);
//     }, 10);

//     setTimeout(function() {
//       console.log('D');
//     }, 0);

// ~~~~~~~~~~Case 3~~~~~~~~~~~~ incomplete

// var x = 'A';

// setTimeout(function() {
//   console.log(x);
//   x = 'B';
// }, 3);

// setTimeout(function() {
//   console.log(x);
//   x = 'C';
// }, 2);

// setTimeout(function() {
//   console.log(x);
//   x = 'D';
// }, 1);

// setTimeout(function() {
//   console.log(x);
// }, 4);

// ~~~~~~~~~~Case 4~~~~~~~~~~~~
// this function output C > D
// t1(A,B) have event clearTimeout > remove t1 in this case
// t2(C,D) same t1 but event clearTimeout inside event setTimeout > waiting 250ms , but C > D have 200ms so C > D output before event clearTimeout implementing it

// var t1 = setTimeout(function () {
//   console.log("A");
//   setTimeout(function () {
//     console.log("B");
//   }, 0);
// }, 100);

// var t2 = setTimeout(function () {
//   console.log("C");
//   setTimeout(function () {
//     console.log("D");
//   }, 0);
// }, 200);

// clearTimeout(t1);

// setTimeout(function () {
//   clearTimeout(t2);
// }, 250);

// ~~~~~~~~Problem 5~~~~~~~~~
// ~~~~~~~~~Case 1~~~~~~~~~~~
// this function output : C > B > A > D first in last out

// function logA() {
//   console.log("A");
// }

// function logB() {
//   console.log("B");
// }

// function logC() {
//   console.log("C");
// }

// function logD() {
//   console.log("D");
// }

// logD(logA(logB(logC())));

// ~~~~~~~~~~Case 2~~~~~~~~~~
// this function output : C > B > A > D first in last out they have same time 0ms

	// function alogA() {
    //   setTimeout(function() {
    //     console.log('A');
    //   }, 0);
    // }
    
    // function alogB() {
    //   setTimeout(function() {
    //     console.log('B');
    // 	  }, 0);
    // 	}
    	
    // 	function alogC() {
    // 	  setTimeout(function() {
    // 	    console.log('C');
    // 	  }, 0);
    // 	}
    	
    // 	function alogD() {
    // 	  setTimeout(function() {
    // 	    console.log('D');
    // 	  }, 0);
    // 	}
    	
    // 	alogD(alogA(alogB(alogC())));
    
// ~~~~~~~~~~Case 3~~~~~~~~~~     incomplete
	// setTimeout(function() {
    //   console.log('A');
    //   setTimeout(function() {
    //     console.log('B');
    //     setTimeout(function() {
    //       console.log('C');
    //       setTimeout(function() {
    //         console.log('D');
    //       }, 0);
    // 	    }, 100);
    // 	  }, 200);
    // 	}, 300);
    
// ~~~~~~~~~~Case 4~~~~~~~~~~
// this function output : C > A > B > D

	// setTimeout(function() {
    //   console.log('A');
    //   setTimeout(function() {
    //     console.log('B');
    //   }, 100);
    // }, 200);
    
    // setTimeout(function() {
    //   console.log('C');
    // 	  setTimeout(function() {
    // 	    console.log('D');
    // 	  }, 200);
    // 	}, 100);
    

// ~~~~~~~~Problem 6~~~~~~~~~ 
// this function output : 5 times 5
// for (var i = 0; i < 5; i++) {
// 	    setTimeout(function() { console.log(i); }, i * 1000 );
// 	}

// ~~~~~~~~Problem 7~~~~~~~~~
	function Promise_all(promises) {
      return new Promise((resolve, reject) => {
        // Your code here.
       try {
        resolve(Promise.all(promises))
       }catch(err){
        reject(promises)
       }
        
      });
    }
    
    Promise_all([]).then(array => {
      console.log("This should be []:", array);
      
      
    	});
    	function soon(val) {
    	  return new Promise(resolve => {
    	    setTimeout(() => resolve(val), Math.random() * 500);
    	  });
    	}

    	Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    	  console.log("This should be [1, 2, 3]:", array);
    	});

    	Promise_all([soon(1), Promise.reject("X"), soon(3)])
    	  .then(array => {
    	    console.log("We should not get here");
    	  })
    	  .catch(error => {
    	    if (error != "X") {
    	      console.log("Unexpected failure:", error);
    	    }
    	  });
    
        