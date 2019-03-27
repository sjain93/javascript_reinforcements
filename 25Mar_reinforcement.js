let names = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"];

names.forEach(function(name){
  if (name.length > 4 && name === name.toLowerCase()){
    console.log('long and lowercase');}
  else if (name === name.toLowerCase()){
    console.log('lowercase');
  }
  else if (name.length > 4) {
    console.log('long');
  }
  else {console.log(name);}
});
