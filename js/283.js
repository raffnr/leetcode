function moveZeroes(nums) {
    const len = nums.length;
    let i = 0;
    let j = 0;
    while (j < len) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        } else {
            i++;
        }
        j++;
    }
    return nums;
}

const testArr = [];

for(let i = 0; i < 100000000; i++){
    const number = Math.floor(Math.random() * 9);
    testArr.push(number);
}

console.log(moveZeroes2(testArr));


function moveZeroes2(nums) {
    let count = 0;
    const newArr = [];
    for(const num of nums){
        if(num !== 0){
            newArr.push(num);
        }else {
            count++;
        }
    }

    for(let i = 0; i < count; i++){
        newArr.push(0);
    }

    return newArr;
}
