
const requestBuilder = ()=>{
let xhr = new XMLHttpRequest();
xhr.onreadystatechange= ()=>{
if(xhr.readyState ===4){
    document.getElementById("ajax").innerHTML= xhr.responseText
}    
};
if(false){
requestSender({},xhr)
}
}
const requestSender = (event,request)=> {
if(event.currentTarget.id==="ajaxButton"){    
request.open('GET',"sidebar.html")

request.send()
}
}

export  {requestBuilder,requestSender}