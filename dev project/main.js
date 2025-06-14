let flag=false
const btn1=document.getElementById("next1")
const btn2=document.getElementById("next2")
const btn3=document.getElementById("next3")
document.getElementById("nameip").addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        event.preventDefault();
        document.getElementById("sapidip").focus();
        
    }
})
document.getElementById("sapidip").addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        event.preventDefault();
        document.getElementById("next1").focus();
        
        
    }
})
document.getElementById("next1").addEventListener("click",function(event){
    if(document.getElementById("nameip").value===""){
        event.preventDefault();
        document.getElementById("error1").style.display="block"
        flag=true
        
    }
    else{
        document.getElementById("error1").style.display="none"
    }
    if(document.getElementById("sapidip").value===""){
        event.preventDefault();
        document.getElementById("error2").style.display="block"
        flag=true
    }
    else{
        document.getElementById("error2").style.display="none"
    }
    if(flag){event.preventDefault();
        return;
    }
    if(document.getElementById("nameip").value!==""&&document.getElementById("sapidip").value!==""){
        document.getElementById("branch").style.display="block"
        document.getElementById("next1").style.display="none"
        document.getElementById("next2").style.display="block"
    }
    

})

document.getElementById("next2").addEventListener("click",function(event){
    flag=false;
    if(document.getElementById("branchip").value==="select")
    {

        event.preventDefault();
        document.getElementById("error3").style.display="block"

        flag=true
    }
    else{
        document.getElementById("error3").style.display="none"
    }
    if(flag){
        event.preventDefault();
        return;
    }
        document.getElementById("sem").style.display="block"
        document.getElementById("next2").style.display="none"
        document.getElementById("next3").style.display="block"

})
document.getElementById("next3").addEventListener("click",function(event){
    flag=false;
    if(document.getElementById("semip").value==="select")
    {

        event.preventDefault();
        document.getElementById("error4").style.display="block"

        flag=true
    }
    else{
        document.getElementById("error4").style.display="none"
    }
    if(flag){
        event.preventDefault();
        return;
    }
    document.getElementById("mks").style.display="block"
    document.getElementById("next3").style.display="none"
    document.getElementById("submitbtn").style.display="block"

})
document.getElementById("submitbtn").addEventListener("click",function(event){
    flag=false;
    if(document.getElementById("mk1ip").value===""||document.getElementById("mk2ip").value===""||document.getElementById("mk3ip").value==="")
    {

        event.preventDefault();
        document.getElementById("error5").style.display="block"

        flag=true
    }
    else{
        document.getElementById("error5").style.display="none"
    }
    if(flag){
        event.preventDefault();
        return;
    }

})

document.getElementById("submitbtn").addEventListener("click", function () {
let mk1=Number(document.getElementById("mk1ip").value)
let mk2=Number(document.getElementById("mk2ip").value)
let mk3=Number(document.getElementById("mk3ip").value)
let pointer=[];
let gpa
function gpacalc(marks){
    if(marks>=90)
        return 10
    else if(marks>=80)
        return 9
    else if(marks>=70)
        return 8
    else if(marks>=60)
        return 7
    else if(marks>=55)
        return 6
    else if(marks>=50)
        return 5
    else if(marks>=40)
        return 4
    else 
    pointer.push(0)
}
gpa=((gpacalc(mk1)*3)+(gpacalc(mk2)*2)+(gpacalc(mk3)*1))/6
    document.getElementById("submitbtn").style.display="none"
    document.getElementById("gpaval").textContent = gpa.toFixed(2);
    document.getElementById("gpaop").style.display = "block";
});