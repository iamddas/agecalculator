// function valid(){
//     var d1 = document.getElementById("day").value;
//     var m1 = document.getElementById("month").value;
//     var y1 = document.getElementById("year").value;
//     if (d1 =="" && m1 =="" && y1 =="") 
//     {
//         document.write("Kindly Fill the Form,With Proper Values");
//     }
// }

function valid1() {
    let day = document.getElementById("day").value;
    document.getElementById("dayerr").innerHTML = "";
    if (day==0 || day>31) {
        document.getElementById("dayerr").innerHTML = "Oops, that's not a valid day!";
        document.getElementById("dayerr").style.color = "red";
    }
}
function valid2() {
    let month = document.getElementById("month").value;
    document.getElementById("montherr").innerHTML = "";
    if (month==0 || month>12) {
        document.getElementById("montherr").innerHTML = "Oops, that's not a valid month!";
        document.getElementById("montherr").style.color = "red";
    }
}

function valid3() {
    let year = document.getElementById("year").value;
    document.getElementById("yearerr").innerHTML = "";
    if (year <= 1000 || year>2023) {
        document.getElementById("yearerr").innerHTML = "Oops, that's not a valid year!";
        document.getElementById("yearerr").style.color = "red";
    }
}

function Calculate() {
    var d1 = document.getElementById("day").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    while (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    while(m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    document.getElementById("result").innerHTML ="Hey, You are " + y + " Years, " + m + " Months, & " + d + " Days" + " old.";
    if (d1 =="" && m1 =="" && y1 =="") 
    {
        alert("Kindly Fill the Form,With Proper Values");
    }

}    