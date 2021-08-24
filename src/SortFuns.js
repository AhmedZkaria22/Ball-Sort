export const Shuffle = array => {
    var currentIndex = array.length,  randomIndex;
    
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
}


export const BubbleSort = ObjArr => {    
    for(var j=0; j<(ObjArr.length - 1); j++){
        for(var i=0; i<(ObjArr.length - 1 - j); i++){            
            if( parseInt(ObjArr[i]['weight']) > parseInt(ObjArr[i+1]['weight']) ){
                [ ObjArr[i], ObjArr[i+1] ] = [ ObjArr[i+1], ObjArr[i] ];
            }
        }
    }            
    console.log('Bubble Sort Done');
    return ObjArr;
}

export const SelectionSort = arr => {
    for(var j=0; j<arr.length - 1; j++){
        let minIndex = j;
        for(var i=j+1; i<arr.length; i++){                        
            if( parseInt(arr[i]['weight']) < parseInt(arr[minIndex]['weight']) ){ minIndex = i; }
        }
        // console.log( arr, arr[j] ,arr[minIndex] );
        const temp = arr[j]
        arr[j] = arr[minIndex] ;
        arr[minIndex] = temp ;
    }    
    
    console.log('Selection Sort Done');
    return arr;
}

export const merge = ( leftArr, rightArr ) => {
    const finalArr = [];
    let leftIndex = 0,  rightIndex = 0;

    while( leftIndex < leftArr.length && rightIndex < rightArr.length ){
        const leftEl = leftArr[leftIndex],
              rightEl = rightArr[rightIndex];

        if(parseInt(leftEl['weight']) < parseInt(rightEl['weight'])){
            finalArr.push(leftEl);
            leftIndex++;
        }else{
            finalArr.push(rightEl);
            rightIndex++;
        }
    }
    
    return [...finalArr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

export const MergeSort = Array => {

    if(Array.length <= 1){ return Array }

    const middleIndex = Math.floor(Array.length / 2);
    const leftArr = Array.slice(0, middleIndex);
    const rightArr = Array.slice(middleIndex);
    
    console.log('Merge Sort Done');
    return merge( MergeSort(leftArr), MergeSort(rightArr) ); 
};


export const QuickSort = arr => {
    const a = [...arr];
    if (a.length < 2) return a;
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = parseInt(a[pivotIndex]['weight']);
    const [lo, hi] = a.reduce(
      (acc, val, i) => {
        if ( parseInt(val['weight']) < pivot || (parseInt(val['weight']) === pivot && i != pivotIndex)) {
          acc[0].push(val);
        } else if (parseInt(val['weight']) > pivot) {
          acc[1].push(val);
        }
        return acc;
      },
      [[], []]
    );
        
    console.log('Quick Sort Done');
    return [...QuickSort(lo), a[pivotIndex], ...QuickSort(hi)];
};


export const InsertionSort = Array => {
    if(Array.length === 1){ return Array }
    for(let i=1; i<Array.length; i++){
        for( let j=i; j>0; j-- ){
        if( parseInt(Array[j]['weight']) < parseInt(Array[j-1]['weight']) ){
            [Array[j-1], Array[j]] = [Array[j], Array[j-1]];
        }
        else{ break; }
        }
    }    
    console.log('Insertion Sort Done');
    return Array
}


export const CountingSort = ObjArr => {
    
    let min = parseInt(ObjArr[0]['weight']),    max = parseInt(ObjArr[0]['weight']);
    for( let i=1; i<ObjArr.length; i++ ){
        if( parseInt(ObjArr[i]['weight']) > max ){
            max = parseInt(ObjArr[i]['weight']);
        }else if( parseInt(ObjArr[i]['weight']) < min ){
            min = parseInt(ObjArr[i]['weight']);
        }
    }

    let finalObj = {};
    for( let i=min; i<max+1; i++ ){        
        finalObj[`${i}`] = 0;
        for( let j=0; j<ObjArr.length; j++ ){         
            if( i === parseInt(ObjArr[j]['weight']) ){
                finalObj[`${i}`] += 1;
            }
        }        
    }

    let finalArrVl = [];
    let finalArrKy = [];
    for( let el in finalObj ){
        if(finalObj[el] > 0){ 
            finalArrVl.push(finalObj[el]);
            finalArrKy.push( parseInt(el) );
        }
    }

    let finalArr = [];
    for( let i=0; i<finalArrKy.length; i++ ){                    
        for(var o=0; o< ObjArr.length; o++){
            if( parseInt(ObjArr[o]['weight']) === finalArrKy[i] ){
                finalArr.push(ObjArr[o]);
            }
        }
    }
    console.log('Counting Sort Done');
    console.log(`Range ${min} : ${max}`);
    return finalArr;
}

export const DescSort = Array => {
    Array = Array.reverse();
    return Array
}