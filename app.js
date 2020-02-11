function evenOddSum(args){
  let n = args.length;
  let odd = 0;
  let even = 0;

  for(var i = 1; i < n; i+=2){
    let currentNum = args[i];
    odd += currentNum;
  }
  for(var j = 1 + 1; j < n; j+=2){
    let currentNums = args[j];
    even += currentNums;
  }

  if(odd === even){
    console.log('Yes! Sum = ' + odd);
  } else{
    console.log("No! Diff = " + Math.abs(odd - even));
  }
  
}
evenOddSum([4,3,5,8,1]);
