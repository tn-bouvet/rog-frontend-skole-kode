const elem = document.getElementById("manual-root")!;

const wrapperEl = document.createElement("div");
wrapperEl.className = "wrapper";
elem.appendChild(wrapperEl);

const headerEl = document.createElement("h1");
headerEl.innerText = "Manual";
wrapperEl.appendChild(headerEl);

let state = 1;

const displayEl = document.createElement("span");
displayEl.innerText = `Currently set to ${state}`;
wrapperEl.appendChild(displayEl);

const addEl = document.createElement("button");
addEl.onclick = () => {
  state++;
  displayEl.innerText = `Currently set to ${state}`;
};
addEl.innerText = "Add";
wrapperEl.appendChild(addEl);

const subtractEl = document.createElement("button");
subtractEl.onclick = () => {
  state--;
  displayEl.innerText = `Currently set to ${state}`;
};
subtractEl.innerText = "Subtract";
wrapperEl.appendChild(subtractEl);
