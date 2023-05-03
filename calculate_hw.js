function Print() {
    document.getElementById("name").innerHTML =
      document.getElementById("username").value;
    document.getElementById("text").innerHTML =
      document.getElementById("anytext").value;
    Clear();
  }
  
  function Clear() {
    document.getElementById("username").value = "";
    document.getElementById("anytext").value = "";
  }