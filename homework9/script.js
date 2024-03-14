
function concatStrings() {
    var str1 = document.getElementById("input1").value;
    var str2 = document.getElementById("input2").value;
    var str3 = document.getElementById("input3").value;
    
    var result = str2 + " " + str3 + " " + str1;
    document.getElementById("result").innerText = "Об'єднані рядки: " + result;
}

// Функція для розбиття п'ятизначного числа на цифри
function splitNumber() {
    var number = document.getElementById("numberInput").value;
    var digits = number.split("");
    
    var result = digits.join(" ");
    document.getElementById("result").innerText = "Цифри п'ятизначного числа: " + result;
}
