<script>
function scheck()
{
    alert("");

    var name=document.getElementById("sname").value;
    var sem=document.getElementById("sem").value;
    var code=document.getElementById("code").value;

    var sub1=document.getElementById("sub1").value;
    var sub2=document.getElementById("sub2").value;
    var sub3=document.getElementById("sub3").value;
    var sub4=document.getElementById("sub4").value;
    var sub5=document.getElementById("sub5").value;
    var sub6=document.getElementById("sub6").value;
    
    var total1=parseInt(document.getElementById("total1").value);
    var total2=number(document.getElementById("total2").value);
    var total3=number(document.getElementById("total3").value);
    var total4=number(document.getElementById("total4").value);
    var total5=number(document.getElementById("total5").value);
    var total6=number(document.getElementById("total6").value);

    var mark1=numberdocument.getElementById("mark1").value;
    var mark2=document.getElementById("mark2").value;
    var mark3=document.getElementById("mark3").value;
   // var mark4=document.getElementById("mark4").value;
    var mark5=document.getElementById("mark5").value;
    var mark6=document.getElementById("mark6").value;

    document.getElementById("lname").innerHTML=name;
    document.getElementById("lcode").innerHTML=code;
    document.getElementById("lsem").innerHTML=sem;

    document.getElementById("su1").innerHTML=sub1;
    document.getElementById("mar1").innerHTML=mark1;
    document.getElementById("to1").innerHTML=total1;
    document.getElementById("grade1").innerHTML=sgrade(mark1,total1);

    document.getElementById("su2").innerHTML=sub2;
    document.getElementById("mar2").innerHTML=mark2;
    document.getElementById("to2").innerHTML=total2;
    document.getElementById("grade2").innerHTML=sgrade(mark2,total2);

    document.getElementById("su3").innerHTML=sub3;
    document.getElementById("mar3").innerHTML=mark3;
    document.getElementById("to3").innerHTML=total3;
    document.getElementById("grade3").innerHTML=sgrade(mark3,total3);

    document.getElementById("su4").innerHTML=sub4;
    document.getElementById("mar4").innerHTML=mark4;
    document.getElementById("to4").innerHTML=total4;
    document.getElementById("grade4").innerHTML=sgrade(mark4,total4);

    document.getElementById("su5").innerHTML=sub5;
    document.getElementById("mar5").innerHTML=mark5;
    document.getElementById("to5").innerHTML=total5;
    document.getElementById("grade5").innerHTML=sgrade(mark5,total5);

    document.getElementById("su6").innerHTML=sub6;
    document.getElementById("mar6").innerHTML=mark6;
    document.getElementById("to6").innerHTML=total6;
    document.getElementById("grade6").innerHTML=sgrade(mark6,total6);
}
function sgrade(a,b)
{
    var g;
    var r=(a/b)*100;
    if(r>=95)
    {
       g="s";
    }
    else if(r>=90)
    {
        g="A+";
    }
    else if(r>=85)
    {
        g="A";
    }
    else if(r>=80)
    {
        g="B+";
    }
    else if(r>=75)
    {
        g="B";
    }
    else if(r>=70)
    {
        g="C+";
    }
    else if(r>=65)
    {
        g="C";
    }
    else if(r>=60)
    {
        g="D+";
    }
    else if(r>=55)
    {
        g="D";
    }
    else if(r>=50)
    {
        g="E";
    }
    else
    {
        g="F";
    }
    return g;
}
</script>