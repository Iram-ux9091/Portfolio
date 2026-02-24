function meta(){
    let loan=Number(document.getElementById("amount").value);
    let interest=Number(document.getElementById("rate").value);
    let time=Number(document.getElementById("time").value);

    let pay = (interest / 100 )*loan;
    let total = (pay + loan)/time;

    

    document.getElementById("result").innerHTML= `
    Loan:<b>${loan}</b><br>
    Interest Rate:<b>${pay}</b><br>
    Pay Every month:<b>${total.toFixed(1)}</b><br>
     `;
    }