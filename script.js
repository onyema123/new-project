const Button = document.getElementById("catch-in");
// var Button = document.getElementById("catch-in");

function myFunction(){
    var monthPayment = document.getElementsByClassName("monthly");
    var annualPayment = document.getElementsByClassName("annually");
    var i;
    var n;
    
    console.log('monthly', monthPayment)
    console.log('annual', annualPayment)
    for (i = 0; i< monthPayment.length; i++){
        for (n =0; n < annualPayment.length; i++){
            
            if(monthPayment[i].style.display === "none"){
                monthPayment[i].style.display = "block";
                annualPayment[i].style.display = "none";
                Button.style.justifyContent = "flex-end"
            }
            else{
                monthPayment[i].style.display = "none";
                annualPayment[i].style.display = "block";
                Button.style.justifyContent = "flex-start"
            }
        //     if(monthPayment[i].style.display === "block"){
        //         monthPayment[i].style.display = "none";
        //         annualPayment[i].style.display = "block";
        //         Button.style.justifyContent = "flex-start"
        // }
        // else{
        //     monthPayment[i].style.display = "block";
        //     annualPayment[i].style.display = "none";
        //     Button.style.justifyContent = "flex-end";
        // }
    }
 }
}        
Button.addEventListener('click', myFunction);

// document.getElementById("catch-in").addEventListener("click", ()=>{
//     document.getElementById("catch-in").style.backgroundColor = "#333"
// })
