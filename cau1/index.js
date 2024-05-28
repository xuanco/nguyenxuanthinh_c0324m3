function calculateDifference() {
    var input = document.getElementById("inputArray").value;
    var array = input.split(",").map(Number);
    var sumEven = 0;
    var sumOdd = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sumEven += array[i];
        } else {
            sumOdd += array[i];
        }
    }

    var difference = sumEven - sumOdd;
    var result = "(" + sumEven + ")-(" + sumOdd + ") = " + difference;

    document.getElementById("result").innerText = "Kết quả sau khi thực hiện là: " + result;
}