function getMiddle(str) {
  let firstHalf = 0;
  let secondHalf = 0;
  if (str.length%2 === 0){
    let countLimit = str.indexOf(str.length/2);
    for (var i = 0; i < str[countLimit]; i++) {
      firstHalf += (parseInt(str[i],10));
    }
    console.log(firstHalf);
  }
  else {
    let midIndex = (Math.ceil(str.length/2)) - 1;

  }
}
getMiddle('78948309');
