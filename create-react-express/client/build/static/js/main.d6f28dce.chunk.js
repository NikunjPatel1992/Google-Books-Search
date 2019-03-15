(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(56)},50:function(e,t,a){},51:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),o=a(58),s=a(60),i=a(59),m=a(6),u=a(7),d=a(9),h=a(8),E=a(10);var f=function(e){var t=e.children;return l.a.createElement("div",{style:{height:200,clear:"both",paddingTop:60,textAlign:"center"},className:"jumbotron"},t)},v=a(11),k=a.n(v),b={getBooks:function(){return k.a.get("/api/savedBooks")},getBook:function(e){return k.a.get("/api/savedBooks/"+e)},deleteBook:function(e){return k.a.delete("/api/savedBooks/"+e)},saveBook:function(e){return k.a.post("/api/savedBooks",e)},getBookSearch:function(e){return k.a.get("/api/bookSearch",{params:{q:e}})}};function p(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function g(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function B(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(50);function S(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function N(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}var y=function(e){var t=e.cardName,a=e.children;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},t),l.a.createElement("div",{className:"card-body"},a))};var j=function(e){var t=e.type,a=void 0===t?"default":t,n=e.className,r=e.children,c=e.onClick;return l.a.createElement("button",{onClick:c,className:["btn btn-lg","btn-".concat(a),n].join(" ")},r)};a(51);var z=function(e){var t=e.src;return l.a.createElement("div",{className:"thumbnail",role:"img","aria-label":"Book Image",style:{backgroundImage:"url(".concat(t,")")}})};function x(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function O(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}function I(e){return l.a.createElement("button",{className:"btn btn-lg btn-secondary"},l.a.createElement("a",Object.assign({target:"_blank",className:" "},e),e.children))}var w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],title:"",authors:"",link:"",description:"",image:""},a.loadBooks=function(){b.getBooks().then(function(e){return a.setState({books:e.data,title:"",author:"",link:"",description:"",image:""})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){b.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(p,{fluid:!0},l.a.createElement(g,null,l.a.createElement(B,{size:"md-12 sm-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"(React) Google Books Search"),l.a.createElement("h2",null,"Search for and Save Books of Interest")),l.a.createElement(p,null,this.state.books.length?l.a.createElement(y,{cardName:"Saved Books"},l.a.createElement(S,null,this.state.books.map(function(t){return l.a.createElement(N,{key:t._id},l.a.createElement(p,null,l.a.createElement(g,null,l.a.createElement(B,{size:"xs-8 sm-9"},l.a.createElement("h3",null,t.title),l.a.createElement("h4",null,"Written By ",t.authors)),l.a.createElement(B,{size:"xs-2"},l.a.createElement(I,{href:t.link},"View")),l.a.createElement(B,{size:"xs-2"},l.a.createElement(j,{onClick:function(){return e.deleteBook(t._id)},type:"danger",className:""},"Delete"))),l.a.createElement(g,null,l.a.createElement(B,{size:"xs-4 sm-2"},l.a.createElement(z,{src:t.image})),l.a.createElement(B,{size:"xs-8 sm-9"},l.a.createElement("p",null,t.description)))))}))):l.a.createElement(y,{cardName:"No Saved Books to Display"})))))}}]),t}(n.Component),C=a(57),D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={book:{}},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement(p,{fluid:!0},l.a.createElement(g,null,l.a.createElement(B,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),l.a.createElement(g,null,l.a.createElement(B,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,this.state.book.synopsis)))),l.a.createElement(g,null,l.a.createElement(B,{size:"md-2"},l.a.createElement(C.a,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(n.Component);var A=function(){return l.a.createElement(p,{fluid:!0},l.a.createElement(g,null,l.a.createElement(B,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};a(54);var F=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Search"),l.a.createElement("a",{className:"nav-item",href:"/search"},"Search"),l.a.createElement("a",{className:"nav-item",href:"/savedBooks"},"Saved"))},L=a(22),R=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],bookSearch:""},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(L.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),b.getBookSearch(a.state.bookSearch).then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.handleSaveSubmit=function(e){var t=a.state.books.find(function(t){return t.id===e});console.log(t.id),b.saveBook({googleId:t.id,title:t.volumeInfo.title,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail}),alert("Book saved")},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(p,{fluid:!0},l.a.createElement(g,null,l.a.createElement(B,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"(React) Google Books Search"),l.a.createElement("h2",null,"Search for and Save Books of Interest")),l.a.createElement(p,null,l.a.createElement(g,null,l.a.createElement(B,{size:"md-12"},l.a.createElement(y,{cardName:"Book Search"},l.a.createElement("form",null,l.a.createElement(g,null,l.a.createElement(B,{size:"xs-9 sm-10"},l.a.createElement(x,{name:"bookSearch",value:this.state.bookSearch,onChange:this.handleInputChange,placeholder:"Search For a Book"})),l.a.createElement(B,{size:"xs-3 sm-2"},l.a.createElement(O,{onClick:this.handleFormSubmit,type:"success"},"Search"))))))),l.a.createElement(g,null,l.a.createElement(B,{size:"md-12"},this.state.books.length?l.a.createElement(y,{cardName:"Result"},l.a.createElement(S,null,this.state.books.map(function(t){return l.a.createElement(N,{key:t.id},l.a.createElement(p,null,l.a.createElement(g,null,l.a.createElement(B,{size:"xs-8 sm-9"},l.a.createElement("h3",null,t.volumeInfo.title),l.a.createElement("h4",null,"Written By ",t.volumeInfo.authors)),l.a.createElement(B,{size:"xs-2"},l.a.createElement(I,{href:t.volumeInfo.infoLink},"View")),l.a.createElement(B,{size:"xs-2"},l.a.createElement(j,{onClick:function(){return e.handleSaveSubmit(t.id)},type:"success"},"Saved"))),l.a.createElement(g,null,l.a.createElement(B,{size:"xs-4 sm-2"},l.a.createElement(z,{src:t.volumeInfo.imageLinks.thumbnail})),l.a.createElement(B,{size:"xs-8 sm-9"},l.a.createElement("p",null,t.volumeInfo.description)))))}))):l.a.createElement(y,{cardName:"No Book to Display"})))))))}}]),t}(n.Component);var G=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(F,null),l.a.createElement(s.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:R}),l.a.createElement(i.a,{exact:!0,path:"/savedBooks",component:w}),l.a.createElement(i.a,{exact:!0,path:"/books/:id",component:D}),l.a.createElement(i.a,{exact:!0,path:"/search",component:R}),l.a.createElement(i.a,{component:A}))))};c.a.render(l.a.createElement(G,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d6f28dce.chunk.js.map