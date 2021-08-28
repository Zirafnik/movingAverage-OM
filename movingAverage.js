let prevDemands = [120, 125, 100, 110, 95, 130, 85, 105, 105, 95, 110, 90, 110, 112, 80, 95, 90];

function movingAvg(arr, n) {
    console.log(`${n}-WEEK MA:`);

    let left = 0;
    let right = n;

    while(right < arr.length) {
        let result = 0;
        for(let i = left; i < right; i++) {
            result += arr[i];
        }

        let forecast = `F${right + 1}:`;
        console.log(forecast, result/n);
        left++
        right++
    }

    console.log('==========================');
}

movingAvg(prevDemands, 3);
movingAvg(prevDemands, 5);
movingAvg(prevDemands, 7);