exports.nbOccurences = function (list, searchElement) {
   let count = 0; 
   for (const element of list) {
    if (element == searchElement) {
        count++;
    }
    return count; 
   }
   
    //loop through each element using for loop 
    // count the number of occurences for each element in question
}

exports.esrever = function (list) {
    const newlist = [];
    for (const element of list) {
        
    }    
}

exports.converter = function (base){
    return (a) => a.toString(base);
};
//convert number from base 10 to base passed as argument 
// ? how to convert a number from base 10 to another base 
// use tostring ()
