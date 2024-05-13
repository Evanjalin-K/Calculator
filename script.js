const displayBox = document.getElementById("result")

function display(num){
  displayBox.value+= num;
}
function calculate(){
  try{
    displayBox.value = eval(displayBox.value)
  }
  catch(error){
    alert("Only Numbers Are Allowed")
  }

  }

  function Clear(){
    displayBox.value = ""
  }

  function del(){
    displayBox.value = displayBox.value.slice(0,-1)
  }
  