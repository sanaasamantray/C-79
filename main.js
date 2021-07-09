student_names=[];
function submit(){
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;
    student_names.push(name1);
    student_names.push(name2);
    student_names.push(name3);
    student_names.push(name4);
    console.log(student_names);
    document.getElementById("display").innerHTML=student_names;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function sort(){
    student_names.sort();
    console.log(student_names);
    document.getElementById("display").innerHTML=student_names;
}