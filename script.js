var timer = prompt("enter the time");
var Score = 0;
var hitNum = 0;


const MakeBubble = () =>{
    var Clutter =  "";
    for (let i = 1; i<=78 ; i++ ){
        Clutter += `<div class="bubble"> ${Math.floor(Math.random()*10)} </div>`;
    }
    document.querySelector("#pbottom").innerHTML = Clutter;
}
MakeBubble();


const Timer = () =>{
    
    var Time = setInterval(()=>{
        if(timer > 0){
            timer--;
        }else{
            clearInterval(Time);
            document.querySelector("#pbottom").innerHTML=`<h1 id="h1">YOUR SCORE ${Score}</h1>`
        }
        document.querySelector("#Timmer").innerHTML = timer
    },1000);
}
Timer();


const Hit = ()=>{
    hitNum = Math.floor(Math.random()*10);
    document.querySelector("#HIT").innerHTML = hitNum;
}
Hit();


const score = ()=>{
    Score += 10;
    document.querySelector("#SCORE").innerHTML = Score;
}


document.querySelector("#pbottom").addEventListener("click",(dets)=>{
   var num = Number(dets.target.innerHTML);
   if(num === hitNum){
    score();
    Hit();
    MakeBubble();
   }
})