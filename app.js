// 
var list = document.getElementById ('list');
var typing = document.getElementById ('typing');
function sendMessages (){
    if (event.keyCode === 13){
        var elem = event.target;
        list.innerHTML += "<li>" +elem.value+ "</li>";
        typing.style.display='block'; 
        if(elem.value.toLowerCase() === "hi" ) {
           setTimeout(function(){
            list.innerHTML += "<li> hello </li>"
           },2000
           )
           setTimeout(function(){
            list.innerHTML += "<li> how are you?</li>"
            typing.style.display='none';
           },4000
           )
        }
        else if(['fine','thik','thik hn','alhamdullilah','mast','set','mazy m','good','great'].indexOf(elem.value)!== -1){
            setTimeout (function(){
                list.innerHTML += "<li> how can i help you? </li>"
                typing.style.display='none';
            },2000)
        }
        else{
            setTimeout (function(){
                list.innerHTML += "<li> sorry i can not understand... </li>"
                typing.style.display='none';
            },2000)

        }
            

        
        elem.value =""
    }
}