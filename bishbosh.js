function bishBosh() {
    var loopedValue = document.getElementById("loopnum").value;
    var divisionByDigit1 = document.getElementById("fdigit").value;
    var divisionByDigit2 = document.getElementById("sdigit").value;
    var text = "";

    for (var i = 1; i <= loopedValue; i++) {
        if (i % divisionByDigit1 == 0 && i % divisionByDigit2 == 0) {
            text += "Bish-Bosh, ";
        } else if (i % divisionByDigit1 == 0) {
            text += "Bish, ";
        } else if (i % divisionByDigit2 == 0) {
            text += "Bosh, ";
        } else {
            text += i + ", ";
        }
    }

    document.getElementById("result").value = text;
}
