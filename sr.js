var calcRoots = function() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  
  var x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  var x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  
  document.getElementById("x1").value = x1;
  document.getElementById("x2").value = x2;  
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calc").addEventListener("click", calcRoots);
});