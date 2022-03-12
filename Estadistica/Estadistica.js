const dataList = [
    100,
    100,
    100,
    100,
    100,
    115,
    125,
    215,
    321,
    213,
    154,
    258,
    211,
    211,
    211,

];
console.group("Calculando la Media Estadistica");
const media = dataList.reduce((acc, cur) => (acc + cur ));
console.log("La media de la lista es " + (media/dataList.length).toFixed(2));
console.groupEnd();

console.group("Calculando la Mediana Estadistica");
const mediana = dataList.length % 2 === 0 ? (dataList[dataList.length/2] + dataList[dataList.length/2 - 1])/2 : dataList[Math.floor(dataList.length/2)];
console.log("La mediana de la lista es " + mediana);
console.groupEnd();

console.group("Calculando la Moda Estadistica");
const moda = {};
dataList.map(item => moda[item] ? moda[item]++ : moda[item] = 1);
const modaArray = Object.entries(moda);
console.log("La moda de la lista es " + modaArray.sort((a, b) => b[1] - a[1])[0][0]);
console.groupEnd();