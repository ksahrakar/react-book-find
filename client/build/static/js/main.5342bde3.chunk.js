(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(61)},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),c=a.n(r),l=(a(29),a(3)),u=a(4),s=a(6),i=a(5),m=a(7),h=a(63),d=a(65),f=a(64),k=(a(31),a(21));a(33);var b=function(e){return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"searchLabel",htmlFor:"search"},"Search:"),o.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"uk-input uk-width-1-2",placeholder:"Search for a Book",id:"search"}),o.a.createElement("button",{onClick:e.handleFormSubmit,className:"uk-button uk-button-default"},"Search")))},p=a(11),v=a.n(p),E={search:function(e){return v.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&printType=books&maxResults=10")},saveBook:function(e){return v.a.post("/api/saved",e)},getBooks:function(){return v.a.get("/api/saved")},deleteBook:function(e){return v.a.delete("/api/saved/"+e)}},g=(a(54),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={search:"National Parks",results:[]},a.searchBook=function(e){E.search(e).then(function(e){return a.setState({results:e.data.items})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(k.a)({},t,n))},a.handleFormSubmit=function(e){e.preventDefault(),a.searchBook(a.state.search),a.setState({search:""})},a.addBook=function(e){E.saveBook({title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,pages:e.volumeInfo.pageCount,info:e.volumeInfo.infoLink}).then(alert("That book was saved to the list")).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.searchBook("National Parks")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"cardPage"},o.a.createElement(b,{value:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),o.a.createElement("div",{className:"cardContainer"},this.state.results.map(function(t){return o.a.createElement("div",{className:"uk-card uk-card-small uk-card-hover uk-width-5-6 uk-align-center",id:"bookcard",key:t.id},o.a.createElement("div",null,o.a.createElement("img",{alt:"OOPS...no pic available",src:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:"x"}),o.a.createElement("h3",{className:"uk-card-title"},t.volumeInfo.title),o.a.createElement("p",{className:"uk-article-meta"},"Written by ",t.volumeInfo.authors?t.volumeInfo.authors:"Unknown"," in ",t.volumeInfo.pageCount," pages"),o.a.createElement("p",{className:"uk-card-body"},t.volumeInfo.description),o.a.createElement("a",{href:t.volumeInfo.infoLink,className:"uk-button uk-button-default uk-button-small"},"Details"),o.a.createElement("button",{onClick:function(){return e.addBook(t)},className:"uk-button uk-button-default uk-button-small"},"Save")))})))}}]),t}(n.Component)),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"SResCont"},o.a.createElement(g,null))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={results:[]},a.savedBks=function(){E.getBooks().then(function(e){return a.setState({results:e.data})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){E.deleteBook(e).then(function(e){return a.savedBks()}).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.savedBks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"cardContainer"},this.state.results.map(function(t){return o.a.createElement("div",{className:"uk-card uk-card-small uk-card-hover uk-width-5-6",id:"bookcard",key:t._id},o.a.createElement("div",null,o.a.createElement("img",{alt:"OOPS...no pic available",src:t.image?t.image:"x"}),o.a.createElement("h3",{className:"uk-card-title"},t.title),o.a.createElement("p",{className:"uk-article-meta"},"Written by ",t.authors?t.authors:"Unknown"," in ",t.pages," pages"),o.a.createElement("p",{className:"uk-card-body"},t.description),o.a.createElement("a",{href:t.info,className:"uk-button uk-button-default uk-button-small"},"Details"),o.a.createElement("button",{onClick:function(){return e.deleteBook(t._id)},className:"uk-button uk-button-default uk-button-small"},"Delete")))}))}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(j,null))}}]),t}(n.Component),y=(a(56),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{id:"noMatch"},o.a.createElement("p",null,"404 Error..."),o.a.createElement("p",null,"BLUE SCREEN BABY!"),o.a.createElement("p",null,"Yeah- can't reach that route..."),o.a.createElement("p",null,"Simple as that...")))}}]),t}(n.Component)),B=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"NavBar"},o.a.createElement("header",{className:"App-header"},"The Top 10 GoogleBooks Titles for ...",o.a.createElement("a",{href:"/Saved ",id:"bookbutton",className:"uk-button uk-button-default"},"Saved Books"),o.a.createElement("a",{href:"/",id:"searchbutton",className:"uk-button uk-button-default"},"Home")))}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(B,null),o.a.createElement(d.a,null,o.a.createElement(f.a,{exact:!0,path:"/",component:O}),o.a.createElement(f.a,{exact:!0,path:"/Saved",component:N}),o.a.createElement(f.a,{component:y}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.5342bde3.chunk.js.map