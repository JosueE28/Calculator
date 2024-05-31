const display = document.querySelector("#display");
const button = document.querySelectorAll("button");

button.forEach((item) =>{
    item.onclick=() =>{
        if(item.id=='clear'){
            display.innerText="";

        }else if(item.id=="borrar"){
            let String = item.innerText.toString();
            display.innerText = String.substr(0, String.length-1);
        } else if(display.innerText !="" && item.id=="igual"){
            display.innerText = eval(display.innerText);

        } else if (display.innerText == "" && item.id=="igual"){
            display.innerText = "Null";
            setTimeout(() => (display.innerText=""), 2000);
        }else{
            display.innerText += item.id;
        }

    }

}
)