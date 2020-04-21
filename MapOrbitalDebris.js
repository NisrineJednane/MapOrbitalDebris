//orbital period formula: T = 2*pi*sqrt(r^3/GM) where r = earthRadius+avgAlt

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let newArr = [];

  for (let i=0; i<arr.length; i++) {
    let result = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt,3)/GM));
    newArr.push({name : arr[i].name, orbitalPeriod: result});
  }
  return newArr;
}
