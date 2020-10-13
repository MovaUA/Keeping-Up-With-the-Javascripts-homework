export function removeAllChildren(parentElement) {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}

export function loadChild(parentElement, childHTML) {
  removeAllChildren(parentElement);

  const child = document.createElement('DIV');
  child.innerHTML = childHTML;
  parentElement.appendChild(child);

  return child;
}

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}