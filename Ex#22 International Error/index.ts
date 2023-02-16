var my_list=["water","sugar",'salt','vegitable','Mango']
console.log("Intentional Error calling for console element at 6 which is out of range")
if (my_list.length > 6) {
    console.log(my_list[6]);
  } else {
    console.log('Index error: the index is out of bounds for the array.');
  }