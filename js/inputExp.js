document.getElementById("test").onclick = function() {
  var exp = document.getElementById("toukei_EXP").innerHTML;
  document.getElementById("toukei_EXP").innerHTML = Number(exp) + 1;
}
