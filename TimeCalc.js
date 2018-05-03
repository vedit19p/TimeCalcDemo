var number_of_rows = 1;
function calculateTime() {
    for(i = 1 ; i <= number_of_rows; i++) {
        if(document.getElementById("StartTime_" + i).value != undefined && document.getElementById("EndTime_" + i).value != undefined)
            var time_1 = document.getElementById("StartTime_" + i).value;
            var time_2 = document.getElementById("EndTime_" + i).value;
        var time = time_2.split(':')[0] - time_1.split(':')[0];
        document.getElementById("totalTime_" + i).value = time;
    }
}

