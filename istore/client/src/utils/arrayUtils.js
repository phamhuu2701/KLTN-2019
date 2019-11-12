// get array by size
export function getProductsBySize(array, firstIndex, size){

    let newArray = [];
    if(array && array.length - firstIndex > size){
        for(let i=firstIndex; i<(firstIndex+size); i++){
            newArray.push(array[i]);
        }
        return newArray;
    }
    else{
        return array;
    }
}