export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
):number[] {
    const result: number[] = [];
    let i = 0, j = collection_2.length - 1, k = 0;
    while (i < collection_1.length || j >= 0 || k <collection_3.length){
        const value1 = i < collection_1.length ? collection_1[i] : Infinity;
        const value2 = j >= 0 ? collection_2[j] : Infinity;
        const value3 = k < collection_3.length ? collection_3[k] : Infinity;    
        
        const minValue = Math.min(value1, value2, value3);
        
        if (minValue === value1) {
            result.push(value1);
            i++;
        } else if (minValue === value2) {
            result.push(value2);
            j--;
        }
        else {
            result.push(value3);
            k++;
        }
    }
    console.log(result);
    return result;
}
