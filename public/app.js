function count()
{
    let sentance = document.getElementById("text").value;
    let words = sentance.split(" ");  
    let count = 0;
    if(length(words) == 0)
        window.alert("enter text properly");
    let special = ['!','@','#','$','%','^','&','*','(',')','-','=','+']
    for(let i of words)
    {
        if(i  in special)
        {

        }
        else{
            count+=1;
        }
        document.getElementById("ans").innerHTML = "wordcount="+count;
    }
}