let prevDemands = [120, 125, 100, 110, 95, 130, 85, 105, 105, 95, 110, 90, 110, 112, 80, 95, 90];

function movingAvg(arr, n) {
    console.log(`${n}-WEEK MA:`);

    let left = 0;
    let right = n;

    let results = [];

    while(right < arr.length) {
        let result = 0;
        for(let i = left; i < right; i++) {
            result += arr[i];
        }

        results.push(result/n);

        let forecast = `F${right + 1}:`;
        console.log(forecast, result/n);
        left++
        right++
    }

    //getForecastErrors(prevDemands, results, n);
    console.log('==========================');
}

function getForecastErrors(actual, forecasts, n) {
    let errors = [];

    //trim actual data to match forecasts periods
    actual.splice(0, n);

    for(let i = 0; i < forecasts.length; i++) {
        let e = actual[0] - forecasts[0];
        errors.push(e);
    }

    console.log(errors);
    return errors;
}

movingAvg(prevDemands, 3);
movingAvg(prevDemands, 5);
movingAvg(prevDemands, 7);