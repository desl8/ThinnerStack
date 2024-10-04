let array = [];
function updateCalendar(){
    let schedule = document.getElementById("InnerSchedule");
    Array.from(document.getElementsByClassName("RemovableRow")).forEach((e)=>{e.remove();console.log(e.innerText)});
    for(let i = 0; i < array.length; i ++)
    {
        let row = document.createElement("tr");
        schedule.appendChild(row);
        let activityCell = document.createElement("td");   
        activityCell.innerText = array[i][0];
        let expectedTimeCell = document.createElement("td");
        expectedTimeCell.innerText = array[i][1];
        row.appendChild(activityCell);
        row.appendChild(expectedTimeCell);
        row.className = "RemovableRow";
    }
}
function thinTheStack(){
    desiredtime = document.getElementById("reqtimefield").value;
    var sumtime = 0
    for(let i = 0; i < array.length; i ++){
        sumtime += parseInt(array[i][1]);
    }
    console.log(sumtime);
    while (desiredtime < sumtime && sumtime > 0){
        array.splice(Math.floor(Math.random() * array.length), 1);
        sumtime = 0
        for(let i = 0; i < array.length; i ++){
            sumtime += parseInt(array[i][1]);
        }
        console.log(sumtime);
        updateCalendar();
    }
    document.getElementById("schedtitle").innerText = "Your New Schedule!";
    var newlink = document.createElement("a");
    newlink.href = "https://www.youtube.com/watch?v=qyYHWkVWQ4o"
    newlink.innerHTML = "That's too hard, I want to procrastinate"
    document.body.appendChild(newlink);

}
document.querySelector("#clearbutton").addEventListener("click", function(){array = []; updateCalendar();});
document.querySelector("#addbutton").addEventListener("click", function(){array.push([document.getElementById("namefield").value,document.getElementById("timefield").value]); updateCalendar();});
document.querySelector("#superbutton").addEventListener("click", function(){thinTheStack();});

//Henrick absolutely cooked

/*
var canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d")
canvas.width = 1000
canvas.height = 1000;

for(let i = 0; i < 330; i ++)
{
    for(let j = 0; j<330; j++)
    {

        setTimeout(()=>{
            ctx.fillRect(i*3,j*3,3,3);
            ctx.fillStyle = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
        },4*i+j*4);
    }
}
document.body.appendChild(canvas);
canvas.style.position = "absolute";
canvas.style.zIndex = -1;
canvas.style.left = 0;
canvas.style.top = 0;

setInterval(() => {
    ctx.fillRect(Math.floor(Math.random()*1000),Math.floor(Math.random()*1000),3,3);
    ctx.fillStyle = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}, (0));
*/