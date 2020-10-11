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
