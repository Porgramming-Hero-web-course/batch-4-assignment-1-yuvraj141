{
    function removeDuplicates(numbers:number[]):number[]{
    return numbers.filter((num,index)=>
    numbers.indexOf(num)===index
     )
            }
    //console.log(removeDuplicates([1,1,33,6,4,5,6,6]));
}