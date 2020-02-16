function finalbill(){
    let totals = parseFloat(document.getElementById("total").value);
    console.log(typeof totalIn);
    let rates = parseFloat(document.getElementById("rate").value);
    
    document.getElementById("tip").innerHTML = "$" + totals*rates/100;
    document.getElementById("tax").innerHTML = "$" + totals*0.055;
    document.getElementById("grand").innerHTML = "$" + (totals + (totals*rates/100) + (totals*0.055));
    return false;

}