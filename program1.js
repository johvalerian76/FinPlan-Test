const angka = (n) => {
    for(let i=1; i<=n; i++){
        if(i % 3 === 0 && i % 7 === 0){
            console.log('z')
        } else if(i % 3 === 0){
            console.log(i)
        } else if(i % 7 === 0){
            console.log(i)
        }
    }
}

angka(50)