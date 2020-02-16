function calculate(){
    let totals = parseFloat(document.getElementById("total").value);
    console.log(typeof total);
    let rates = parseFloat(document.getElementById("rate").value);
    
    document.getElementById("tip").innerHTML = "$" + rates*totals/100;
    document.getElementById("tax").innerHTML = "$" + totals*0.055;
    document.getElementById("grand").innerHTML = "$" + (totals + (rates*totals/100) + (totals*0.055));
    return false;
}