(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var i=a(8),n=a.n(i),r=(a(16),a(11)),s=a(2),o=a(3),c=a(6),d=a(5),l=a(1),m=a.n(l),b=(a(17),a(9)),u=(a(18),a(19),a(0)),h=function(e){var t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-image",children:Object(u.jsx)("figure",{className:"image is-4by3",children:Object(u.jsx)("img",{src:i,alt:"Film logo"})})}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsxs)("div",{className:"media",children:[Object(u.jsx)("div",{className:"media-left",children:Object(u.jsx)("figure",{className:"image is-48x48",children:Object(u.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(u.jsx)("div",{className:"media-content",children:Object(u.jsx)("p",{className:"title is-8",children:t})})]}),Object(u.jsxs)("div",{className:"content",children:[a,Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:n,children:"IMDB"})]})]})]})},p=function(e){var t=e.movies;return Object(u.jsx)("div",{className:"movies",children:t.map((function(e){return Object(u.jsx)(h,Object(b.a)({},e),e.imdbId)}))})},j=a(4),f=function(e){var t=e.isRequired,a=e.pattern,i=e.className,n=e.placeholder,r=e.type,s=e.name,o=e.value,c=e.onChange;return Object(u.jsx)("input",{required:t,pattern:a,className:i,placeholder:n,type:r,name:s,value:o,onChange:c})},g=function(e){var t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl,r=e.imdbId,s=e.onChange,o=e.onReset;return Object(u.jsxs)("form",{onSubmit:function(s){s.preventDefault(),(0,e.onAdd)({title:t,description:a,imgUrl:i,imdbUrl:n,imdbId:r}),o()},className:"d-flex flex-column justify-content-center align-items-center",children:[Object(u.jsx)(f,{isRequired:!0,pattern:"^[A-Za-z0-9]+$",className:"rounded border border-secondary mb-2 py-2 w-100",placeholder:"Title",type:"text",name:"title",value:t,onChange:s}),Object(u.jsx)(f,{isRequired:!1,pattern:"^[A-Za-z0-9]+$",className:"rounded border border-secondary mb-2 py-2 w-100",placeholder:"Description",type:"text",name:"description",value:a,onChange:s}),Object(u.jsx)(f,{isRequired:!0,pattern:"[Hh][Tt][Tt][Pp][Ss]?:\\/\\/(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,}))(?::\\d{2,5})?(?:\\/[^\\s]*)?",className:"rounded border border-secondary mb-2 py-2 w-100",placeholder:"Image URL",type:"text",name:"imgUrl",value:i,onChange:s}),Object(u.jsx)(f,{isRequired:!0,pattern:"[Hh][Tt][Tt][Pp][Ss]?:\\/\\/(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,}))(?::\\d{2,5})?(?:\\/[^\\s]*)?",className:"rounded border border-secondary mb-2 py-2 w-100",placeholder:"IMDB URL",type:"text",name:"imdbUrl",value:n,onChange:s}),Object(u.jsx)(f,{isRequired:!0,pattern:"^[t][t][0-9]{7,9}",className:"rounded border border-secondary mb-2 py-2 w-100",placeholder:"IMDB ID",type:"text",name:"imdbId",value:r,onChange:s}),Object(u.jsx)("button",{className:"rounded border bg-primary text-light py-2",type:"submit",children:"Add a movie"})]})},v=(a(21),a(22),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},e.handleChange=function(t){var a=t.target,i=a.name,n=a.value;e.setState(Object(j.a)({},i,n))},e.resetState=function(){e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl,r=e.imdbId;return Object(u.jsx)(g,{title:t,description:a,imgUrl:i,imdbUrl:n,imdbId:r,onChange:this.handleChange,onAdd:this.props.onAdd,onReset:this.resetState})}}]),a}(l.Component)),O=a(10),x=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={movies:O},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(r.a)(e.movies),[t])}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.movies;return Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("div",{className:"page-content",children:Object(u.jsx)(p,{movies:e})}),Object(u.jsx)("div",{className:"sidebar",children:Object(u.jsx)(v,{onAdd:this.addMovie})})]})}}]),a}(m.a.Component);n.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.e67e4aa7.chunk.js.map