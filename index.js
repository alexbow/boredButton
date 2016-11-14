document.getElementById('input').onkeypress = function(e){
    if (!e) e = window.event;
    if (e.keyCode == '13'){
        var data = this.value;
        var div = document.createElement("DIV");
		div.setAttribute("id", "hobbyItem");
		div.innerHTML = this.value;
		document.getElementById("HobbyList").appendChild(div);
		document.getElementById("input").value = "";
        return false;
    }
}

document.getElementById('button').onclick = function() {
   var children = document.getElementById("HobbyList").children;
   if(children.length < 1){
   		alert("You must add some hobbies first");
   }
   else{
   		var selection = Math.floor(Math.random() * children.length);
   		console.log(selection);
   }
}

// document.getElementById('close').onclick = function(){
//     this.parentNode.parentNode.parentNode
//     .removeChild(this.parentNode.parentNode);
//     return false;
// };
