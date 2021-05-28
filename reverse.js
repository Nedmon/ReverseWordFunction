document.getElementById("reverstButton").addEventListener("click", function() {
	wordReverse()
})

// This function uses the method of starting at the center point of a word and using a loop to go forward and backward changing the indexes
// of the original array with a second array that is an exact copy of the original

function wordReverse() {
	let userInput = document.getElementById("textBox");
	document.getElementById("reverseResult").innerHTML = getReverse(userInput.value); // Return the word given in reverse
}

function getReverse(s) {
    let a = s.split("");     // Connot operate on original string, so I used the Split() method.
    let copy = s;            // Make a copy of the arrag
    let half = Math.floor(a.length / 2);    // Where the word is even in length, the middle is closer to the end than the start.
    if(s.length % 2 == 0) {					// Where the word is odd in length, the middle is the exact middle letter.
        let forward = half;					// The varibles Forward and Backward more along the indexes of the array 
        let backward = half - 1;            // in their directions.
        do {
            a[forward] = s[backward];		// The 'swap' eg. changing the indexes of the original array with the ones of the 'coppy' array
            a[backward] = s[forward];
            forward++;
            backward--;
        }
        while(forward < a.length);
    } else {
        let forward = half + 1;
        let backward = half - 1;
        do {
            a[forward] = s[backward];
            a[backward] = s[forward];
            forward++;
            backward--;
        }
        while(forward < a.length);
    }

    return a.join("")
}