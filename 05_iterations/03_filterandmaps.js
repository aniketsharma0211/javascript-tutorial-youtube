const nums = [1,2,3,4,5,6,7,8,9]

nums.filter((element)=> element > 4)
    .map((element) => element + 1)
    .map((element) => {
        return element *10
    })
    .forEach((element)=> console.log(element))
