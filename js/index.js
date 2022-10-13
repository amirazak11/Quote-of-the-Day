 var x = document.getElementById("quoteOutput");
 var myArray = ["“Be yourself; everyone else is already taken.” <br> --Oscar Wilde " , 
 "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” <br>--Marilyn Monroe",
 "“So many books, so little time. ”<br>--Frank Zappa"
]

function  addQuote(){
    var randomQuotes =myArray[ Math.floor(Math.random()* myArray.length)];

    document.getElementById("quoteOutput").innerHTML=randomQuotes;
}



