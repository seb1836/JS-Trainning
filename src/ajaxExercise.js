
let xhr = new XMLHttpRequest();


xhr.onreadystatechange= ()=>{
if(xhr.readyState ===4){
    document.getElementById("ajax").innerHTML= xhr.responseText
    console.log(xhr.responseText)
}    
};





   
    
xhr.open('GET', 'section.html')
const requestSender = ()=> {

xhr.send()
}
document.getElementById("ajaxButton").addEventListener("click",requestSender)

