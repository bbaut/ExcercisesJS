const ball=document.getElementById("ball");
const button=document.getElementById("start-btn");

let timer;
let marginTop=0, marginTopMax =0;
let bottomToTop=false;

button.addEventListener("click", () => {
    timer=setInterval(function () {
        ballMov();      
    },100);
})

function ballMov () {
    if(marginTopMax==500){
        clearInterval(timer);
        return;
    }

    if(bottomToTop){
        marginTop -=50;
    }else{
        marginTop +=50;
    }
     
    ball.style.marginTop= marginTop+"px";

    if(marginTop==500){
        bottomToTop=true;
        marginTopMax = marginTopMax + 50; 
    }
    if(marginTop==marginTopMax){
        bottomToTop=false;
    }
}