function display(){
    
 let name=document.getElementById("name").value;
 let comment=document.getElementById("comments1").value;
console.log(name);
if(name!="" && comment!=""){
 let commentcon=document.getElementById("commentcon");
 let commentcon1=document.createElement('div');
 commentcon1.id="commentcon1"
 let commentname=document.createElement('p');
 let sendcomment=document.createElement('p'); 
 commentname.innerHTML="name="+name;
 sendcomment.innerHTML="comment="+comment;
 commentcon1.appendChild(commentname);
 commentcon1.appendChild(sendcomment);
 commentcon.appendChild(commentcon1);
 
 

}
else{
    alert("fill  name and comment");
}


};