let a = prompt('Side A size of the triangle', '');
let b = prompt('Side B size of the triangle', '');
let c = prompt('Side C size of the triangle', '');

    if  (parseFloat(a) < parseFloat(b) + parseFloat(c) &&
	    parseFloat(b) < parseFloat(a) + parseFloat(c) &&
	    parseFloat(c) < parseFloat(b) + parseFloat(a)) {
	        if (a===b && b===c && c===a) {
		    console.log('Equivalent triangle');
	    }   else {
		    if (a===b || b===c || c===a) {
			    console.log('Isosceles triangle');
		    }   else {
			    console.log('Normal triangle');
		    }
	    }
    } else {
	    console.log('Triangle doesn’t exist');
    }