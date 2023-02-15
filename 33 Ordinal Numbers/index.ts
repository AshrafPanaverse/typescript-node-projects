const ord_numbers=[1,2,3,4,5,6,7,8,9];
ord_numbers.forEach(num => {
    if(num<=3){
        console.log(`${num}st`)
    }else{
        console.log(`${num}th`)
    }
});