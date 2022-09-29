function btncolor(element, color) {
  element.style.backgroundColor = color;
}
function getform(element) {
  var name_element = document.getElementById('name');
  var name = name_element.value;
  alert("Thanks " + name + "!");
}