function converter() {
    let USD, EUR, GBP;

    USD = 412.50;
    EUR = 503.91;
    GBP = 583.92;

    var choice=prompt("what currency are you converting to Naira: available currency include USD, EUR, GBP")
    let dollars = "USD";
    let euro = "EUR";
    let pound = "GBP";

    
    if(choice == dollars) {
        var amount = prompt("enter amount you want to convert");
        let result = amount / USD;
        console.log(result);
    } else if(choice == euro) {
        var amount = prompt("enter amount you want to convert");
        let result = amount / EUR;
        console.log(result);
    } else  if(choice == pound) {
        var amount = prompt("enter amount you want to convert");
        let result = amount / GBP;
        console.log(result);
    } else {
        console.log("you didnt enter a valid currency")
    }

    

   


}

converter();