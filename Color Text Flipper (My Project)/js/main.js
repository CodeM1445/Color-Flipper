const colors = ["green","red","purple","yellow", "orange","blue","rgba(133,22,200)","#f15025","beige","brown","grey","lightseagreen","aqua","blueviolet","burlywood","chocolate","coral","cornflowerblue","cornsilk","cyan","darkgoldenrod","darkolivegreen","darkorange","darkorchid", "darkslateblue","darkturquoise","deepskyblue","deeppink","darkviolet","forestgreen","fuchsia","gold","lawngreen","indigo","honeydew"]

const click_Me_Btn = document.getElementById("btn");
const color = document.querySelector(".color")




click_Me_Btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]
   

        
        

    color.textContent = colors[randomNumber].charAt(0).toUpperCase() + colors[randomNumber].slice(1);
})

function getRandomNumber(){
    return Math.floor( Math.random()*colors.length);
}

