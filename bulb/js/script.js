let mybtn = document.getElementById("mybtn").addEventListener("click",function(){
    let image = document.getElementById("image");
    if(document.querySelector("div[bulb='off']")){

    image.innerHTML = `<img src="images/bulb2.png" alt="">`;
    image.setAttribute("bulb","on")
    mybtn.innerText="off";

}
    else if(document.querySelector("div[bulb='on']")){
    image.innerHTML = `<img src="images/bulb1.jpg" alt="">`;
    image.setAttribute("bulb","off")
    mybtn.value="On";
}
});
