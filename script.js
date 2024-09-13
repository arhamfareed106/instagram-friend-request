var istatus= document.querySelector("h5")

var addFriend = document.querySelector("#add")


var chek = 0

addFriend.addEventListener("click",function(){
    if (chek==0){

    istatus.innerHTML= "Friend"
    istatus.style.color="green"
    addFriend.innerHTML = "Remove Friend"
    chek = 1
}

else{
    istatus.innerHTML= "Stranger"
    istatus.style.color="red"
    chek = 0
}
})

removeFriend.addEventListener("click", function(){
    istatus.innerHTML= "Stranger"
    istatus.style.color="red"    
})