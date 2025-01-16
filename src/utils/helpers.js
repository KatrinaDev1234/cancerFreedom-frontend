

export function toArrayOfObjects(obj){
    let arr= [];
    for(let key in obj){
        arr.push({heading: key, value: obj[key]})
    }
    return arr;
}