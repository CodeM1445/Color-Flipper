const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const directions = ["gradient","to-right","to-bottom-right","degrees","repeat"]
const colors = ["green","red","purple","yellow", "orange","blue","rgba(133,22,200)","#f15025","beige","brown","grey","lightseagreen","aqua","blueviolet","burlywood","chocolate","coral","cornflowerblue","cornsilk","cyan","darkgoldenrod","darkolivegreen","darkorange","darkorchid", "darkslateblue","darkturquoise","deepskyblue","deeppink","darkviolet","forestgreen","fuchsia","gold","lawngreen","indigo","honeydew"]
const colorsTwo = ["lime","magneta","mediumspringgreen","mediumvioletred","midnightblue","mintcream","navy","olive","olivedrab","navajowhite","palegreen","peachpuff","papayawhip","pink","rosybrown","rebeccapurple","plum","salmon","sienna","silver","seashell","teal","wheat","yellowgreen","yellow"]
const degrees = ["45deg", "60deg", "75deg","90deg","95deg","120deg","180deg","230deg","270deg","320deg","360deg"];
const percentages = ["5%","10%","15%","20%","25%"]


btn.addEventListener("click",function(){   
        const direction = directions[getRandomDirection()]
        const randomDegree = degrees[getRandomDegree()]
        const colorOne = colors[getRandomColor()]
        const colorTwo = colors[getRandomColor()]
        const percentageColorOne = colors[getRandomColor()]
        const percentage = percentages[getRandomPercentage()]
        
        let text

        color.style.fontWeight = "bold"

        switch(true){
            case direction === "gradient":
                console.log("gradient")
                text = `linear-gradient(${colorOne},${colorTwo})`
                color.textContent = text;
                
                document.body.style.backgroundImage = text
                break;

            case direction ==="to-right":
                console.log("to-right")
                text = `linear-gradient(to right,${colorOne},${colorTwo})`
                color.textContent = text;
                document.body.style.backgroundImage = text
                break;

            case direction === "to-bottom-right":
                console.log("to-bottom-right")
                text = `linear-gradient(to bottom right,${colorOne},${colorTwo})`
                color.textContent = text;
                document.body.style.backgroundImage = text
                break;

            case direction === "degrees":
                console.log("degrees");
                text = `linear-gradient(${randomDegree},${colorOne},${colorTwo})`
                color.textContent = text;
                document.body.style.backgroundImage = text
                break;  
            
            case direction === "repeat":
                console.log("repeat")
                text = `repeating-linear-gradient(${percentageColorOne},${colorOne} ${percentage},${colorTwo} ${percentage})`
                color.textContent = text;
                document.body.style.backgroundImage = text
                break;  
        }
})

// Get A Random Direction For Gradient
function getRandomDirection(){
    return Math.floor(Math.random()* directions.length)
}
// Get a Random Color
function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}
// Get A Random Degree
function getRandomDegree(){
    return Math.floor(Math.random()*degrees.length)
}

function getRandomPercentage(){
    return Math.floor(Math.random()* percentages.length)
}