
// corresponding word for each digit in number
var dict = {
    '0' : "Zero",
    '1' : "One",
    '2' : "Two",
    '3' : "Three",
    '4' : "Four",
    '5' : "Five",
    '6' : "Six",
    '7' : "Seven",
    '8' : "Eight",
    '9' : "Nine"
};

// converts a number in string form into the phonetic equivalent
function converter(s){
    res = "";
    for (var i = 0; i < s.length; i++){
        res += dict[s[i]];
    }
    return res;
}

// takes in arguments from command line and slices into array.
var myArgs = process.argv.slice(2);
// maps converter function on array of args.
var map = myArgs.map(s => converter(s));

console.log(map);
