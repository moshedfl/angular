function numberOnly(event) {

    var x = event.key;

    if(isNaN(parseInt(x))  ){
        event.preventDefault();

    }
}

document.querySelectorAll("button").forEach(function(btn){
    btn.addEventListener("click",function(){
        let num1 = parseInt( document.getElementById("num1").value);
        let num2 = parseInt( document.getElementById("num2").value);
        if(!isNaN(num1) && !isNaN(num2)){
            calculate(btn.innerHTML,num1,num2);
        }    
    })
});

function calculate(btn,num1,num2){
    let sum;
    switch(btn) {
        case "+":
            sum = num1 + num2;
            break;
        case "-":
            sum = num1 - num2;
            break;
        case "*":
            sum = num1 * num2;
            break;
        case "/":
            sum = num1 / num2;
            break;		
    }
    let result = `${num1} ${btn} ${num2} = ${sum}`
    document.getElementById("sum").innerHTML = result;
    addToTable(result);    
}

function addToTable(result){
        
    document.querySelector("tbody").innerHTML+=
        `<tr>
            <td class="resultRows" onkeypress="numberOrOperator(event)">
               <h5> ${result}
            <td class="edit">
                <button class="btn btn-warning" onclick="edit(this)">ערוך
            <td class="delete">
                <button class="btn btn-danger" onclick="remove(this)">מחק`
            ;
                      
}

function edit(e){
    e.parentNode.parentNode.childNodes[1].contentEditable = "true";
    e.innerHTML=("שמור");
    e.classList.remove("btn-warning");
    e.classList.add("btn-success");
    e.addEventListener("click",function(){
        e.parentNode.parentNode.childNodes[1].contentEditable = "false";
        e.innerHTML=("ערוך");
        e.classList.remove("btn-success");
        e.classList.add("btn-warning");
        e.addEventListener("click",function(){
            edit(e);
        });   
    });
}

function numberOrOperator(event) {

    var x = event.key;

    if(isNaN(parseInt(x)) && x != "+"  && x != "-" && x != "*" && x != "/" && x != "=" ){
        event.preventDefault();

    }
}

function remove(e){
    e.parentNode.parentNode.remove();
}

new MutationObserver(function(mutationsList) {
    for(mutation of mutationsList) {
        
        let message = document.getElementById('stage3');
            message.style.display = "flex";
            setTimeout(function(){
                message.style.display = "none";
            },1000);
       
    }
}).observe(document.getElementById('tbody'), {childList: true});








