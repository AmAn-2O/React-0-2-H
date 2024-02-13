const heading=React.createElement("h1",{},"namaste REACT");
 
const root=ReactDOM.createRoot(document.getElementById("root1"));

// root.render(heading);

const heading1=React.createElement("h1",{id:"title"},"Namaste JavaScript");
const heading2=React.createElement("h2",{id:"title"},"Namaste React.js");
const heading3=React.createElement("h3",{id:"title"},"Node.js");

const container=React.createElement("div",{id:"container"},[heading1,heading2,heading3]);

root.render(container);