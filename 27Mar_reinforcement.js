//function to concatenate words in array (nested in interior)
//function to loop through array and shift out the first element in array, condition check that length of array is less than k

let test =['hi', 'marbles', 'mittens', 'bye', 'lorem', 'ipsum', 'to', 'a', 'hippocampus'];
let test2 = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"];
let fail = [];
function concatenateK(arr, k) {
  let conarray = [];
  for (var i = 0; i < k; i++) {
    conarray.push(arr[i]);
  }
  return conarray.join('');
}

function longestConsecutive(arr, k) {
  if(arr.length === 0 || k < 0 || arr.length < k){
    console.log("input error");
  }
  else {
    compareArray = [];
    while (arr.length >= k) {
      for (var i = 0; i < arr.length; i++) {
        compareArray.push(concatenateK(arr, k));
        var removed = arr.shift();
      }
    }
    var longest = compareArray.reduceRight((a, b) => a.length > b.length ? a : b, '');
    console.log(longest);
  }}

longestConsecutive(test,3);
//expected output
// marblesmittensbye
