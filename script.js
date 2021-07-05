function compute()
{
    //var declaration

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = parseFloat(interest) + parseFloat(principal);
    
    //validation for principal
    
    if(principal==0 || principal <0 ){
        alert("Enter a positive number");

        //focus and reset value
        document.getElementById("principal").focus();
        document.getElementById('principal').value = '';
    } else{
    document.getElementById("result").innerHTML="If you deposit <mark>"
    +principal+"</mark>,\<br\>at an interest rate of <mark>"
    +rate+"%</mark>\<br\>You will receive an amount of <mark>"
    +amount+"</mark>,\<br\>in the year <mark>"
    +year+"</mark>\<br\>";  
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        