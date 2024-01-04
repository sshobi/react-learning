const heading = React.createElement("div", { id: "parent" ,  key:"16"},[ React.createElement("div", { id: "child", key:"1" }, [React.createElement("h1", { id: "heading", key:"1" }, "I'm h1 tag"), React.createElement("h2", { id: "head2",  key:"4" }, "I'm h2 tag")]), React.createElement("div", { id: "child", key:"1" }, [React.createElement("h1", { id: "heading", key:"1" }, "I'm h1 tag"), React.createElement("h2", { id: "head2",  key:"4" }, "I'm h2 tag")])])

const heading1 = React.createElement("h1", { id: "heading1", key:"13" }, [React.createElement("div", { id: "container1" ,  key:"6"}, "I'm div"), React.createElement("div", { id: "container2",  key:"9" }, "I'm div2")])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render([heading,heading1])

