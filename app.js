const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


//adding option in dropbox


for ( let select of dropdowns){
  for (let curcode in countryList){
    let newoption=document.createElement("option");
    newoption.innerText=curcode;
    newoption.value=curcode;
    select.append(newoption);


//setting defult for from

    if(select.name==="from" && curcode==="USD")
    {
      newoption.selected="selected";
    }
    else if (select.name==="to" && curcode==="BDT"){
      newoption.selected="selected";
    }  
  }
  select.addEventListener("change",(evt)=>{
  updateAll(evt.target);
})
}


//flag  and currency code update function


let updateAll=(element)=>{
  countryCode=countryList[element.value];
  img=element.parentElement.querySelector("img");
  newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
  img.src=newsrc;


}

btn.addEventListener("click", async (evt)=>
  { 
    evt.preventDefault();
    let amount=document.querySelector(".amount input")
    amount=amount.value;
    if(amount==="" || amount<1){
      amount.value="1"
    }
    console.log(fromCurr.value.toLowerCase());
//convertion
    url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.value.toLowerCase()}.json`;
    apiCall= await fetch(url);
    data= await apiCall.json()
    let finalamount=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]*amount;
    finalamount=finalamount.toFixed(3);
    msg.innerText=`${amount} ${fromCurr.value} = ${finalamount} ${toCurr.value}`;
   }
  )

//Changing background 

const images = [
  'image1.jpg',
  'image-2.jpg',
  'image-3.jpg'
];

let index = 0;
const backgroundDiv = document.getElementById('background');

function changeBackground() {
  backgroundDiv.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}
// Change every 10 seconds
setInterval(changeBackground, 20000);

// Initial load
changeBackground();



