const rootEl = document.getElementById("manual-root")!;

const wrapperEl = document.createElement("div");
wrapperEl.className = "wrapper";
rootEl.appendChild(wrapperEl);

const headerEl = document.createElement("h1");
headerEl.innerText = "Manual";
wrapperEl.appendChild(headerEl);

let state = 1;

const setState = (val: number) => {
  state = val;
  displayEl.innerText = `Currently set to ${state}`;
};

const displayEl = document.createElement("span");
setState(1);
wrapperEl.appendChild(displayEl);

const addEl = document.createElement("button");
addEl.onclick = () => {
  setState(state + 1);
};
addEl.innerText = "Add";
wrapperEl.appendChild(addEl);

const subtractEl = document.createElement("button");
subtractEl.onclick = () => {
  setState(state - 1);
};
subtractEl.innerText = "Subtract";
wrapperEl.appendChild(subtractEl);
