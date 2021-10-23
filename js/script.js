document.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop >= 400){
        document.getElementById("back").style.opacity="1"
        document.getElementById("back").style.visibility="visible"
        document.getElementById("back").style.transform="translate(0,0)"
    }else{
        document.getElementById("back").style.opacity=""
        document.getElementById("back").style.transform=""
    }

})
document.getElementById("back").addEventListener("click",function(){
    document.documentElement.scrollTop = 0
})