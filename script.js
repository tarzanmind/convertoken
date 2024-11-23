const convertButton = document.querySelector(".convertbutton")
const convertOf = document.querySelector("#convertOf")
const convertTo = document.querySelector("#convert-to")

function convertMoney() {
    const inputConvert = document.querySelector('.inputValue').value

    const value1 = document.querySelector('.value1')

    const value2= document.querySelector(".value2") 
    
    const dolar = 5.79

    const euro = 6.08

    value1.innerHTML = new Intl.NumberFormat ("pt-BR",{style: "currency", currency:"BRL"}).format(inputConvert); 

    if (convertTo.value == "dolar"){
      
        const convertedValue = inputConvert / dolar
       
        value2.innerHTML = new Intl.NumberFormat ("en-US",{style: "currency", currency:"USD"}).format(convertedValue); 
    }
    if (convertTo.value == "euro"){
       
        const convertedValue = inputConvert / euro
        value2.innerHTML = new Intl.NumberFormat ("en-US",{style: "currency", currency:"EUR"}).format(convertedValue); 

    }
    if (convertTo.value == "btc"){
        const btc=543417.34
      
        const convertedValue = inputConvert / btc
       
        value2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
        }).format(convertedValue);
    }
}

    function changeSelect(){
       const flagimage = document.querySelector(".bandeira2");
       const value2= document.querySelector(".value2")
        
        if (convertTo.value == "dolar"){
            flagimage.src="/Dolar.png"
            value2.innerHTML= "$ 0,00"
            convertMoney();
        }
        if (convertTo.value == "euro"){
            flagimage.src = "/Euro.png"
            value2.innerHTML="€ 0,00"
            convertMoney();
        }
        if (convertTo.value == "btc"){
            flagimage.src = "/Btc.png"
            value2.innerHTML="₿ 0,00"
            convertMoney();
        }
    }
convertButton.addEventListener('click', convertMoney)
convertTo.addEventListener("change", changeSelect)

 
       
