const array =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkpoint(array){
    let result = [];
    for(let i=0; i < array.length; i++){
        if (array[i] % 2 === 0)
            result.push("par");
        else
            result.push("impar");
    }
    return result;
}
const imprimir = checkpoint(array);
console.log(imprimir);