function add() {
    var result =
      Number(document.getElementById("firstno").value) +
      Number(document.getElementById("secondno").value);
    console.log(result);
    window.alert(result);
  }
  function sub() {
    var result =
      Number(document.getElementById("firstno").value) -
      Number(document.getElementById("secondno").value);
    console.log(result);
    window.alert(result);
  }
  function multi() {
    var result =
      Number(document.getElementById("firstno").value) *
      Number(document.getElementById("secondno").value);
    console.log(result);
    window.alert(result);
  }
  function div() {
    var result =
      Number(document.getElementById("firstno").value) /
      Number(document.getElementById("secondno").value);
    console.log(result);
    window.alert(result);
  }
  function back(){
    window.location = "choose.html";
}