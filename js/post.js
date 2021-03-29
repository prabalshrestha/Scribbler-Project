var editState="edit";

function edit(){
    
    if(editState==="edit"){
        var ed=document.getElementById("edit");
        ed.innerHTML="Save"+"<i class=\"fa fa-edit\"></i>";
        editState="Save";
        document.getElementById("blogTitle").style.border="1px solid red";
        document.getElementById("blogTitle").contentEditable= true;
        document.getElementById("blogBody").style.border="1px solid darkgray";
        document.getElementById("blogBody").contentEditable= true;
        
    }
    else{
        var ed=document.getElementById("edit");
        ed.innerHTML="Edit"+"<i class=\"fa fa-edit\"></i>";
        editState="edit"
        document.getElementById("blogTitle").style.border="none";
        document.getElementById("blogTitle").contentEditable= false;
        document.getElementById("blogBody").style.border="none";
        document.getElementById("blogBody").contentEditable= false;
    }
}

var likecount=0;
function liking(){
    
    if(likecount===0){
        document.getElementById("likeButton").innerHTML="<i class=\"fa fa-thumbs-up\"></i>Liked";
        document.getElementById("likecount").innerHTML="1 person likes this!";
        likecount++;
    }
    else{
        likecount++;
       document.getElementById("likecount").innerHTML=likecount+" people have liked this!";
        
    }
}



function addComment(){
    var com=document.getElementById("comments").value;
    document.getElementById("comments").value='';
    if(com!=""){
    var node=document.createElement("DIV");
    var textnode=document.createTextNode(com);
    node.appendChild(textnode);
    node.classList.add("mainComment");
    var contain=document.getElementsByClassName("commentContainer")[0];
    contain.insertBefore(node,contain.childNodes[0]);
    
    }
}