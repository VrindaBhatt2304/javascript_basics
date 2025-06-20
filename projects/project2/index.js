const form=document.querySelector('form');

form.addEventListener('submit',function(eve){
    eve.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results');

    if(height=='' || height<0 || isNaN(height))
    {result.innerHTML=`Please give a valid height ${height}`;}
    else if(weight=='' || weight<0 || isNaN(weight))
    {result.innerHTML=`Please give a valid weight ${weight}`;}
    else
    {const bmi=(weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.60)
        {result.innerHTML=`<span>${bmi}</span><br><span>Under Weight</span>`;}
        else if(bmi>18.60 && bmi<=24.9)
        {result.innerHTML=`<span>${bmi}</span style="alignment:center;"><br><span>Normal Weight</span>`;}
        else if(bmi>24.90)
        {result.innerHTML=`<span>${bmi}</span><br><span>Over Weight</span>`;}
    }
});