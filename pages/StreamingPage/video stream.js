let likeCount= document.querySelector(".like-value");
let dislikeCount= document.querySelector(".dislike-value");
let likeIcon= document.querySelector(".like-icon");
let dislikeIcon= document.querySelector(".dislike-icon");
likeIcon.addEventListener("click", function(){
    if(likeCount.innerHTML>=0){
        likeCount.innerHTML=+likeCount.innerHTML+1
    }
    if(dislikeCount.innerHTML>0){
        dislikeCount.innerHTML=+dislikeCount.innerHTML-1
    }
    likeIcon.innerHTML.style.color="blue"
})
dislikeIcon.addEventListener("click", function(){
    if(dislikeCount.innerHTML>=0){
        dislikeCount.innerHTML=+dislikeCount.innerHTML+1
    }
    if(likeCount.innerHTML>0){
        likeCount.innerHTML=+likeCount.innerHTML-1
    }
})