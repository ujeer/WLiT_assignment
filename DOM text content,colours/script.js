function updateText() {
    var textColor = document.getElementById("textColor").value;
    var bgColor = document.getElementById("bgColor").value;
    var textContent = document.getElementById("textContent").value;
  
    document.getElementById("output").innerHTML = 
      "<p style='color:" + textColor + "; background-color:" + bgColor + "'>" + 
      textContent + "</p>";
  }
