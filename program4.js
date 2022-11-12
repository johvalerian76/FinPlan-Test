const findMissingNumber = (data) => {
    const newData = data.sort((a,b) => a - b)

    for(let i=0; i<newData.length; i++){
        if(!(newData[i]+1 === newData[i+1])) return newData[i]+1
    }
}

console.log(findMissingNumber([8, 6, 7, 12]))
