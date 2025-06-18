const rand_color=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let interval_id;
const startChangingColor=function(){
    if(!interval_id)
    {interval_id=setInterval(changeBGColor,500);}
    function changeBGColor(){
        document.body.style.backgroundColor=rand_color();
    }
}

const stopChangingColor=function(){
    clearInterval(interval_id);
    interval_id=null;
}
document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)