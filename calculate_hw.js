function Print(params){
  let a = parseInt(document.getElementById('a').value); 
  let b = parseInt(document.getElementById('b').value);
  

  if(params == "+"){
    document.getElementById('result').innerHTML = a + b
  }
  else if (params == "-"){
    document.getElementById('result').innerHTML = a - b
  }
  else if (params == "*"){
    document.getElementById('result').innerHTML = a * b
  }
  else if (params == "/"){
    document.getElementById('result').innerHTML = a / b
  }
  
}