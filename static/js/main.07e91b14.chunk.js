(this.webpackJsonpmoviereview=this.webpackJsonpmoviereview||[]).push([[0],{34:function(e,t,a){e.exports=a(66)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(26),i=a.n(c),o=(a(39),a(27)),r=a(28),m=a(8),s=a(33),u=a(32),v=(a(40),a(41),a(2));var h=Object(v.g)((function(e){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),console.log(t),e.handleSubmit(t),e.history.push("/movie-review")}(t)}},l.a.createElement("input",{className:"ipt",placeholder:"movie...",type:"text",value:e.text||"",onChange:e.handleinput})))})),d=a(13),E=a.n(d),p=(a(64),a(6));var f=function(e){var t=e.movies.map((function(e){return l.a.createElement("div",{className:"movie",key:e.imdbID},l.a.createElement(p.b,{to:"/".concat(e.imdbID)},l.a.createElement("img",{src:e.Poster})),l.a.createElement("p",null,e.Title))}));return l.a.createElement("div",{className:"movieslist"},t)},b=a(31);a(65);var g=function(e){var t=Object(n.useState)({}),a=Object(b.a)(t,2),c=a[0],i=a[1],o=Object(v.f)().movieID;Object(n.useEffect)((function(){console.log(o);var e="https://www.omdbapi.com/?&plot=full&apikey=ed691149&i=".concat(o);E.a.get(e).then((function(e){var t=e.data;console.log(t),i(t)}))}),[]);var r=l.a.createElement("div",null,l.a.createElement(p.b,{to:"/movie-review",className:"lk"},l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"hm"},l.a.createElement("h1",{className:"home"},"home")))),l.a.createElement("img",{src:c.Poster}),l.a.createElement("h1",null,"Actors")," ",l.a.createElement("div",{className:"jtext"},c.Actors),l.a.createElement("h1",null,"Description")," ",l.a.createElement("div",{className:"jtext"},c.Plot),l.a.createElement("h1",null,"Rating ")," ",l.a.createElement("div",{className:"jtext"},c.imdbRating),l.a.createElement("h1",null,"Released Date ")," ",l.a.createElement("div",{className:"jtext"},c.Released),l.a.createElement("h1",null,"BoxOffice Collection ")," ",l.a.createElement("div",{className:"jtext"},c.BoxOffice));return l.a.createElement("div",null,r)},w=a(30),j=Object(w.a)(),x=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={text:"",movies:[],movie:[],movieUrl:""},n.handleInput=n.handleInput.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.getMoviesData=n.getMoviesData.bind(Object(m.a)(n)),n}return Object(r.a)(a,[{key:"handleInput",value:function(e){this.setState({text:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({text:e.target.value,movieUrl:"/"}),this.getMoviesData()}},{key:"getMoviesData",value:function(){var e=this,t="https://www.omdbapi.com/?&plot=full&apikey=ed691149&s=".concat(this.state.text);E.a.get(t).then((function(t){var a=t.data.Search;console.log(a),"True"==t.data.Response&&e.setState({movies:a})}))}},{key:"componentDidMount",value:function(){console.log(this.props,"abs")}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"header"},l.a.createElement("div",null,l.a.createElement("h1",null,"Movie Information"))),l.a.createElement(p.a,{history:j},l.a.createElement("div",null,l.a.createElement(h,{handleinput:this.handleInput,text:this.state.text,handleSubmit:this.handleSubmit}),l.a.createElement(v.c,null,l.a.createElement(v.a,{exact:!0,path:"/movie-review"},l.a.createElement(f,{movies:this.state.movies})),l.a.createElement(v.a,{path:"/:movieID"},l.a.createElement(g,null))))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.07e91b14.chunk.js.map