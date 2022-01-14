function freshNode(oldElement) {
var newElement = oldElement.cloneNode(true);
oldElement.parentNode.replaceChild(newElement, oldElement);
}

document.querySelectorAll('video').forEach(element => {
  freshNode(element);
});
