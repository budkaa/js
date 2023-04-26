let myLuckyNum = 9;
console.log("lucky",myLuckyNum);

window.onload = print();

function print(){
    document.getElementById("lucky").innerHTML= "1.Lucky" + " " +myLuckyNum;
}
function printSecond() {
    document.getElementById("lucky2").innerHTML="2.Lucky" + " " + myLuckyNum;
}
function Save() {
    let name = document.getElementById("name").value;
    console.log("UserName: ", name);
}