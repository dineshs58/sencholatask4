
var ul=document.getElementById("ul");
var i=document.getElementById("input");
function removeitem(event)
{
    event.target.parentElement.remove();
}
function todo()
{
    if(i.value==="")
    {
        alert("You cannot enter the text");
    }
    else{
        var list=document.createElement("li");
        list.innerHTML=i.value+"   <button onclick=\"removeitem(event)\">Delete</button>";
        
        ul.appendChild(list);
        list.style.background="rgb(255,255,255,0.8)";
        list.style.padding="10px";
        list.style.marginBottom="5px";
        list.style.listStyleType="none";
        list.style.width="100%";
        list.style.height="auto";
        
    }
    i.value="";
    
    
}