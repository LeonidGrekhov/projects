(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/theIntelligentInvestor.c54f98a0.jpeg"},function(e,t,a){e.exports=a.p+"static/media/CollegePhysics.cdeb5759.jpeg"},function(e,t,a){e.exports=a.p+"static/media/CollegeAlgebra.f2689056.jpeg"},,,,,function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(26);t.default=[{path:"/about",exact:!0,component:n.default},{path:"/about/:person",exact:!0,component:r.default}]},function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(7),o=a(5),c=a(4),i=a(6),l=a(0),s=a.n(l),m=a(71),u=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,"Placeholder About Page"),s.a.createElement("br",null),s.a.createElement(m.a,{to:"/"},s.a.createElement("button",{type:"button",className:"btn btn-info"},"Home Page")))}}]),t}(l.Component);t.default=u},function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(7),o=a(5),c=a(4),i=a(6),l=a(0),s=a.n(l),m=a(122),u=a(71),p=function(e){function t(e){var r;Object(n.a)(this,t),r=Object(o.a)(this,Object(c.a)(t).call(this,e));var i=e.match.params.person;try{r.state={profile:a(51)("./"+i)}}catch(l){r.state={fail:!0}}return r}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.state.fail?s.a.createElement(m.a,{to:"".concat(window.location.pathname,"/404")}):s.a.createElement("div",null,s.a.createElement("div",{className:"container"},s.a.createElement(u.a,{to:"/"},s.a.createElement("button",{type:"button",className:"btn btn-info"},"Home Page"))),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row mt-3"},s.a.createElement("div",{className:"col-3 text-center"},s.a.createElement("img",{src:a(51)("./".concat(this.state.profile.picture)),className:"img-fluid",alt:"fluid"}),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.profile.name),s.a.createElement("h4",null,this.state.profile.role),s.a.createElement("br",null),s.a.createElement("h6",null,s.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udce7")," ",this.state.profile.email),s.a.createElement("h6",null,s.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83c\udf10")," ",s.a.createElement("a",{href:this.state.profile.website},this.state.profile.website))),s.a.createElement("div",{className:"col"},s.a.createElement("p",{className:"lead h5"},this.state.profile.description)))))}}]),t}(l.Component);t.default=p},,function(e,t){var a="http://www.litlister.com";Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_LOCAL_SERVER&&(a="http://localhost:3000"),e.exports=a},,function(e,t,a){e.exports=a.p+"static/media/Socrates.23fe2d51.jpeg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.e391515f.svg"},,,,,,,,,,,,,,function(e,t,a){var n={"./About":25,"./About.js":25,"./AboutPerson":26,"./AboutPerson.js":26,"./Edwin Menjivar":52,"./Edwin Menjivar.json":52,"./Jesus Garnica":53,"./Jesus Garnica.json":53,"./John Mendoza":54,"./John Mendoza.json":54,"./Leonid Grekhov":55,"./Leonid Grekhov.json":55,"./Michael Winata":56,"./Michael Winata.json":56,"./Vismay Patel":57,"./Vismay Patel.json":57,"./VismayPatel.jpg":114,"./alpha.png":115,"./jesusGarnica.png":116,"./john.png":117,"./members":58,"./members.js":58,"./michael winata.jpg":118,"./route":24,"./route.js":24};function r(e){var t=o(e);return a(t)}function o(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=51},function(e){e.exports={name:"Edwin Menjivar",role:"Git Master",picture:"alpha.png",email:"emen15@mail.sfsu.edu",website:"none",description:"San Francisco State University Undergraduate senior, majoring in Computer Science and graduating in the Fall 2019. Mobile app developer is one of my passions, and I also love all kinds of sports."}},function(e){e.exports={name:"Jesus Garnica",role:"Front End Lead",picture:"jesusGarnica.png",email:"jgarnica1@mail.sfsu.edu",website:"none",description:"I am a student at San Francisco State University majoring in Computer Science. Most of my skills lie in front end work and app design. I primarily program in Java, Swift, and Python. I also however have a passion for investing and finance. "}},function(e){e.exports={name:"John Mendoza",role:"Backend-Lead",picture:"john.png",email:"jmendo.1024@gmail.com",website:"https://github.com/Jmendo12",description:"My name is John Mendoza, and I am a senior Computer Science Major at San Francisco State University. I will be graduating in May of 2019. My interests in Computer Science include machine learning, data structures and algorithms, software security, and back-end development. Some of my hobbies outside of Computer Science are hiking, music, and baseball."}},function(e){e.exports={name:"Leonid Grekhov",role:"front-end engineer",picture:"alpha.png",email:"lgrekhov@mail.sfsu.edu",website:"none",description:"I'm a senior student, majoring in computer science at SFSU."}},function(e){e.exports={name:"Michael Winata",role:"front-end engineer",picture:"michael winata.jpg",email:"mwinata@mail.sfsu.edu",website:"https://mwinata94.github.io/",description:"I'm a senior student, majoring in computer science at SFSU."}},function(e){e.exports={name:"Vismay Patel",role:"Team Lead",picture:"VismayPatel.jpg",email:"vpatel3@mail.sfsu.edu",website:"none",description:"I am a graduate student, studying computer science at San Francisco State University."}},function(e,t,a){"use strict";a.r(t),t.default=["Vismay Patel","John Mendoza","Jesus Garnica","Edwin Menjivar","Leonid Grekhov","Michael Winata"]},,,function(e,t,a){e.exports=a.p+"static/media/money_icon.63b405cd.svg"},function(e,t,a){e.exports=a.p+"static/media/book_icon.baaa27c7.svg"},function(e,t,a){e.exports=a.p+"static/media/chat_icon.cdf858b8.svg"},function(e,t,a){e.exports=a.p+"static/media/map_icon.e49b07f0.svg"},function(e,t,a){e.exports=a.p+"static/media/thumbs_up.945f1fe5.svg"},function(e,t,a){e.exports=a.p+"static/media/shield_icon.a7860448.svg"},,function(e,t,a){e.exports=a.p+"static/media/shoppingCart.b6859808.svg"},,,,function(e,t,a){e.exports=a(121)},,,,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/VismayPatel.ca873b4c.jpg"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAKCAYAAAD2Fg1xAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wIZACEgvCS90gAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAJElEQVQ4y2P8//8/w3AATAzDBIx6ZNQjox4Z9cioR0Y9QgkAAMgvAxGVrXxcAAAAAElFTkSuQmCC"},function(e,t,a){e.exports=a.p+"static/media/jesusGarnica.dea2646d.png"},function(e,t,a){e.exports=a.p+"static/media/john.21e912b7.png"},function(e,t,a){e.exports=a.p+"static/media/michael winata.335ac4a1.jpg"},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(73);var n=a(36),r=a.n(n),o=a(59),c=(a(74),a(0)),i=a.n(c),l=a(60),s=a.n(l),m=a(125),u=a(70),p=a(12),d=a(3),g=a(7),h=a(5),b=a(4),f=a(6),v=[{component:function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,"404")}}]),t}(c.Component)}],E=a(2),y=(a(79),a(61)),N=a.n(y),j=a(62),w=a.n(j),S=a(63),O=a.n(S),k=a(64),C=a.n(k),x=a(65),A=a.n(x),B=a(66),L=a.n(B),P=a(27),M=a(67),I=a.n(M),F=a(28),J=a.n(F),T=(I.a.connect(J.a),function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"post";return fetch(function(e){return"".concat(J.a,"/api").concat(e)}(e),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={method:arguments.length>1?arguments[1]:void 0,credentials:"include",headers:{"Content-Type":"application/json"}};return Object.keys(e).length>0&&(t.body=JSON.stringify(e)),t}(t,a))}),D=function(e){return e.json()},R={getLogin:function(){return T("/login",{},"get")},getRegister:function(){return T("/register",{},"get")},postLogin:function(e,t){return T("/login",{email:e,password:t}).then(D)},postLogout:function(){return T("/logout",{})},postRegister:function(e,t,a,n){return T("/register",{firstname:e,lastname:t,email:a,password:n})}},H={getSearchByAuthor:function(e,t){return T("/search/author/".concat(e,"/page/").concat(t),{},"get")},getSearchByIsbn:function(e,t){return T("/search/isbn/".concat(e,"/page/").concat(t),{},"get")},getSearchByTitle:function(e,t){return T("/search/title/".concat(e,"/page/").concat(t),{},"get")}},U=a(37),G=a.n(U),Q=(a(108),a(68)),V=a.n(Q),_=!1,W=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).componentDidMount=function(){_?a.setState({user:{firstname:"Rob"}}):R.getLogin().then(function(e){e.ok&&e.text().then(function(e){e.firstname&&a.setState({user:{firstname:e.firstname}})})})},a.onChange=function(e){a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onLogin=function(e){e.preventDefault(),R.postLogin(a.state.email,a.state.password).then(function(e){e.user?a.setState({user:e.user}):console.log(e.error)})},a.onRegister=function(e){e.preventDefault(),window.location="/register"},a.onSearch=function(e){e.preventDefault(),""!==a.state.search&&(window.location="/search/".concat(a.state.category,"/").concat(a.state.search,"/page/1"))},a.render=function(){var e=i.a.createElement("form",{className:"form-inline flex-fill mr-2",onSubmit:a.onSearch},i.a.createElement("div",{className:"input-group flex-fill",onSubmit:a.onSearch},i.a.createElement("div",{className:"input-group-prepend",onSubmit:a.onSearch},i.a.createElement("select",{id:"categorySelect",className:"form-control bg-warning text-dark border-warning",name:"category",value:a.state.category,onChange:a.onChange,style:{boxShadow:"0 0 0 0.2rem rgba(132, 0, 255, 0)"}},i.a.createElement("option",null,"title"),i.a.createElement("option",null,"author"),i.a.createElement("option",null,"isbn"))),i.a.createElement("input",{type:"text",className:"form-control",placeholder:"what are the books you are looking for?",name:"search",value:a.state.search,onChange:a.onChange,style:{boxShadow:"0 0 0 0.2rem rgba(132, 0, 255, 0)"},onSubmit:a.onSearch}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{className:"btn btn-success",type:"button",style:{boxShadow:"0 0 0 0.2rem rgba(132, 0, 255, 0)"},onClick:a.onSearch,onSubmit:a.onSearch},"Search")))),t=i.a.createElement("div",{className:"dropdown"},i.a.createElement("button",{variant:"primary",id:"LoginButton",className:"btn btn-outline-primary mr-2 my-2 my-sm-0 dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Login"),i.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"LoginButton"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",name:"email",placeholder:"  email",value:a.state.email,onChange:a.onChange,style:{marginBottom:"1em"}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"password",name:"password",placeholder:"  password",value:a.state.password,onChange:a.onChange,style:{marginBottom:"1em"}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("button",{className:"btn btn-block btn-outline-primary",type:"submit",onClick:a.onLogin},"Login"))))),n=i.a.createElement("button",{variant:"primary",id:"SignUpButton",className:"btn btn-primary my-2 mr-2 my-sm-0",type:"submit",onClick:a.onRegister},"Sign Up"),r=i.a.createElement("img",{src:V.a,className:"mr-2",height:"30",width:"30",alt:"banner"}),o=i.a.createElement("button",{variant:"primary",id:"cartDiv",className:"btn btn-primary my-2 mr-2 my-sm-0",type:"submit"}," ","0");return a.state.user?i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},i.a.createElement("a",{className:"navbar-brand",href:"/"},i.a.createElement("img",{src:G.a,height:"28",alt:"banner"}),"  "," ListLister"),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav mr-auto"}),e,i.a.createElement("form",{className:"form-inline my-2 my-lg-0"},i.a.createElement("div",{className:"text-light"},"Hi, ",a.state.user.firstname),r,o))):i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},i.a.createElement("a",{className:"navbar-brand",href:"/"},i.a.createElement("img",{src:G.a,height:"28",alt:"banner"}),"  "," ListLister"),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav"}),e,i.a.createElement("form",{className:"form-inline my-2 my-lg-0"},t,n,r,o)))},a.state={user:null,email:"",password:"",search:"",category:"title"},a.onChange=a.onChange.bind(Object(E.a)(Object(E.a)(a))),a.onLogin=a.onLogin.bind(Object(E.a)(Object(E.a)(a))),a.onRegister=a.onRegister.bind(Object(E.a)(Object(E.a)(a))),a.onSearch=a.onSearch.bind(Object(E.a)(Object(E.a)(a))),a}return Object(f.a)(t,e),t}(c.Component),z=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null)}}]),t}(c.Component),X=(a(109),{data:[{departmentName:"College of Business",departmentCollege:[{collegeQuery:"acctg",collegeName:"Accounting Department"},{collegeQuery:"buslab",collegeName:"Business Computer Lab"},{collegeQuery:"econ",collegeName:"Economics Department"}]},{departmentName:"College of Science and Engineering",departmentCollege:[{collegeQuery:"biology",collegeName:"Biology Department"},{collegeQuery:"cs",collegeName:"Department of Computer Science"},{collegeQuery:"statmath",collegeName:"Mathematics Department"}]}]}),Y=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).onSearchMacro=function(e){return window.location="/search/".concat(e.target.name,"/page/1")},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("nav",{id:"sidebar",style:{minHeight:"100%"}},i.a.createElement("div",{className:"sidebar-header"},i.a.createElement("h3",null,"San Francisco State University")),i.a.createElement("ul",{className:"list-unstyled components"},i.a.createElement("p",null,"Deparments"),X.data.map(function(t,a){return i.a.createElement("li",{key:a},i.a.createElement("a",{href:"#".concat(t.departmentName.replace(/\s+/g,"-"),"Submenu"),"data-toggle":"collapse","aria-expanded":"false",className:"dropdown-toggle",style:{fontSize:"0.85vw"}},t.departmentName),i.a.createElement("ul",{className:"collapse list-unstyled",id:"".concat(t.departmentName.replace(/\s+/g,"-"),"Submenu")},t.departmentCollege.map(function(t,a){return i.a.createElement("li",{key:a},i.a.createElement("a",{onClick:e.onSearchMacro,name:t.collegeQuery},t.collegeName))})))})))}}]),t}(c.Component),Z=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return i.a.createElement("div",{className:"container",style:{minHeight:"80vh"}},i.a.createElement("div",{align:"center",style:{minHeight:"68vh",paddingTop:"30vh"}},i.a.createElement("div",{className:"spinner-border text-info",style:{width:"8em",height:"8em"}},i.a.createElement("span",{className:"sr-only"},"Loading..."))))},a}return Object(f.a)(t,e),t}(c.Component),K=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={showSideBar:!e.noSideBar},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({showSideBar:!e.noSideBar})}},{key:"render",value:function(){return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},this.state.showSideBar&&i.a.createElement("div",{className:"col-2"},i.a.createElement(Y,null)),i.a.createElement("div",{className:"col"},this.props.content)))}}]),t}(c.Component);K.Loading=Z;var $=K,q=(a(110),a(71)),ee={NavBar:W,Header:z,Body:$,Footer:function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=["","About","Contact","Team","Invest","Terms of Service"].map(function(e,t){var a=e.split(" ").join("_");return i.a.createElement("div",{className:"d-inline  m-2",key:t},i.a.createElement(q.a,{to:"/".concat(a)},i.a.createElement("span",{className:"text-muted"},i.a.createElement("strong",{id:"footerLink"},e))))});return i.a.createElement("div",null,i.a.createElement("div",{id:"mainAppFooter",className:"container-fluid p-2 bg-dark justify-content-center"},i.a.createElement("div",{className:"row mx-auto justify-content-center"},i.a.createElement("div",{className:"m-2"},e)),i.a.createElement("div",{className:"row mt-2 mx-auto justify-content-center"},i.a.createElement("div",{className:"text-small"},"LitLister \xa92019"))))}}]),t}(c.Component)},te=a(17),ae=a.n(te),ne=a(18),re=a.n(ne),oe=a(30),ce=a.n(oe),ie=a(19),le=a.n(ie),se=(a(113),[{path:"/",exact:!0,component:function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).onShowOrHide=function(e){return a.setState({showSideBar:!a.state.showSideBar})},a.state={showSideBar:!1},a.onShowOrHide=a.onShowOrHide.bind(Object(E.a)(Object(E.a)(a))),a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=[ae.a,re.a,ce.a,le.a],t=[re.a,ce.a,le.a,ae.a],a=[ce.a,le.a,ae.a,re.a],n=function(e){return e.map(function(e,t){return i.a.createElement("div",{className:"carousel-item"},i.a.createElement("img",{id:"bookImage",className:"d-block",src:e}))})};return i.a.createElement("div",null,i.a.createElement(ee.NavBar,null),i.a.createElement(ee.Header,null),i.a.createElement(ee.Body,{noSideBar:!this.state.showSideBar,content:i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("div",{id:"bookGallery",className:"row flex-fill py-5  justify-content-center"},i.a.createElement("div",{className:"col-3"},i.a.createElement("div",{className:"carousel slide","data-ride":"carousel"},i.a.createElement("div",{className:"carousel-inner"},i.a.createElement("div",{className:"carousel-item active"},i.a.createElement("img",{id:"bookImage",className:"d-block",src:le.a,alt:"First slide"})),n(e)))),i.a.createElement("div",{className:"col-3"},i.a.createElement("div",{className:"carousel slide","data-ride":"carousel"},i.a.createElement("div",{className:"carousel-inner"},i.a.createElement("div",{className:"carousel-item active"},i.a.createElement("img",{id:"bookImage",className:"d-block",src:ae.a,alt:"First slide"})),n(t)))),i.a.createElement("div",{className:"col-3"},i.a.createElement("div",{className:"carousel slide ","data-ride":"carousel"},i.a.createElement("div",{className:"carousel-inner "},i.a.createElement("div",{className:"carousel-item  active"},i.a.createElement("img",{id:"bookImage",className:"d-block",src:re.a,alt:"First slide"})),n(a))))),i.a.createElement("div",{id:"intro1",className:"row flex-fill p-5 justify-content-center"},i.a.createElement("div",{className:"col-1 mx-auto mr-1"},i.a.createElement("img",{className:"d-block",src:N.a,alt:"Third slide"})),i.a.createElement("div",{className:"col-8 mx-auto"},i.a.createElement("h2",null,"LitLister is the future of buying and selling books for college students. Selling your old textbooks has never been faster or easier."))),i.a.createElement("div",{id:"intro2",className:"row flex-fill pt-3 justify-content-center"},i.a.createElement("h1",null,"Safe. Fast. Easy.")),i.a.createElement("div",{id:"intro2",className:"row flex-fill mt-0 pb-2 justify-content-center"},i.a.createElement("div",{className:"col-2 mx-auto  justify-content-center"},i.a.createElement("img",{className:"mx-auto",src:w.a}),i.a.createElement("h3",null,"List your book for sale on our site. You can either sell it at a set price or sell it as an auction.")),i.a.createElement("div",{className:"col-2 mx-auto"},i.a.createElement("img",{className:"mx-auto",src:O.a}),i.a.createElement("h3",null,"After your book has been bought, choose a place on campus to meet.")),i.a.createElement("div",{className:"col-2 mx-auto"},i.a.createElement("img",{className:"mx-auto",src:C.a}),i.a.createElement("h3",null,"Exchange books and take a small convenient code given by your buyer to prove they have it.")),i.a.createElement("div",{className:"col-2 mx-auto"},i.a.createElement("img",{className:"mx-auto",src:A.a}),i.a.createElement("h3",null,"Go home happy. There is no need to handle cash or anything. We handle the entire payment process online to make sure you get paid."))),i.a.createElement("div",{id:"intro3",className:"row flex-fill py-3 justify-content-center"},i.a.createElement("h1",null,"Buying has never. been. easier.")),i.a.createElement("div",{id:"intro3",className:"row flex-fill p-3 justify-content-center"},i.a.createElement("div",{className:"col-2"},i.a.createElement("img",{className:"mx-auto",src:L.a})),i.a.createElement("div",{className:"col-8 align-middle my-auto"},i.a.createElement("h3",null,"Buy books with ease. We handle the payment process. We also make sure you get the book you bought. We provide a moneyback guarantee with every purchase.")))))}),i.a.createElement(ee.Footer,null))}}]),t}(c.Component)}]),me=a(24),ue=[{path:"/register",exact:!0,component:function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).componentDidMount=function(){R.getRegister().then(function(e){e.ok||(window.location="/")})},a.onChange=function(e){a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),R.postRegister(a.state.firstname,a.state.lastname,a.state.email,a.state.password).then(function(e){e.ok?(console.log(e.text()),console.log(a.state)):console.log(e)})},a.render=function(){return i.a.createElement("div",null,i.a.createElement(ee.NavBar,null),i.a.createElement(ee.Body,{noSideBar:!a.state.showSideBar,content:i.a.createElement("div",{className:"container",style:{minHeight:"68vh",marginTop:"12vh"}},i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"col-sm-6",htmlFor:"form-first-name"},"First Name"),i.a.createElement("label",{className:"col-sm-6",htmlFor:"form-last-name"},"Last Name")),i.a.createElement("div",{className:"form-group row"},i.a.createElement("input",{type:"text",className:"form-control col",id:"form-first-name",placeholder:"Enter  first name",name:"firstname",value:a.state.name,onChange:a.onChange,style:{marginLeft:"1em",marginRight:"1em"}}),i.a.createElement("input",{type:"text",className:"form-control col",id:"form-last-name",placeholder:"Enter last name",name:"lastname",value:a.state.name,onChange:a.onChange,style:{marginLeft:"1em",marginRight:"1em"}}))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"form-email"},"Email address"),i.a.createElement("input",{type:"email",className:"form-control",id:"form-email",placeholder:"Enter email",name:"email",value:a.state.email,onChange:a.onChange})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"form-password"},"Password"),i.a.createElement("input",{type:"password",className:"form-control",id:"form-password",placeholder:"Password",name:"password",value:a.state.password,onChange:a.onChange})),i.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:a.onSubmit},"Register")))}),i.a.createElement(ee.Footer,null))},a.state={showSideBar:!1,firstname:"",lastname:"",email:"",password:""},a.onChange=a.onChange.bind(Object(E.a)(Object(E.a)(a))),a.onSubmit=a.onSubmit.bind(Object(E.a)(Object(E.a)(a))),a}return Object(f.a)(t,e),t}(c.Component)}],pe=!1,de={data:[{title:"book1",description:"nothing",pictureurl:"https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png"},{title:"book2",description:"nothing",pictureurl:"https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png"},{title:"book3",description:"nothing",pictureurl:"https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png"},{title:"book4",description:"nothing",pictureurl:"https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png"},{title:"book5",description:"nothing",pictureurl:"https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png"},{title:"book6",description:"nothing",pictureurl:"https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png"},{title:"book7",description:"nothing",pictureurl:"https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png"},{title:"book8",description:"nothing",pictureurl:"https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png"},{title:"book9",description:"nothing",pictureurl:"https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png"},{title:"book10",description:"nothing",pictureurl:"https://diybookcovers.com/wp-content/uploads/2017/02/newcovers3d.png"}]},ge=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).componentDidMount=function(){a.props.match.params.author?H.getSearchByAuthor(a.props.match.params.author,a.props.match.params.page).then(function(e){e.text().then(function(e){e=JSON.parse(e),a.setState({data:e.data,pageCount:e.pageCount})})}):a.props.match.params.isbn?H.getSearchByIsbn(a.props.match.params.isbn,a.props.match.params.page).then(function(e){e.text().then(function(e){e=JSON.parse(e),a.setState({data:e.data,pageCount:e.pageCount})})}):a.props.match.params.title&&H.getSearchByTitle(a.props.match.params.title,a.props.match.params.page).then(function(e){e.text().then(function(e){e=JSON.parse(e),a.setState({data:e.data,pageCount:e.pageCount})})})},a.bodyContent=function(){return pe?i.a.createElement("div",{className:"container"},a.pagination(a.state.page,9),a.result(de.data),a.pagination(a.state.page,9)):null===a.state.pageCount?i.a.createElement(ee.Body.Loading,null):i.a.createElement("div",{className:"container"},a.pagination(a.state.page,a.state.pageCount),a.result(a.state.data),a.pagination(a.state.page,a.state.pageCount))},a.pagination=function(e,t){if(null===t)return!1;for(var n=i.a.createElement("li",{className:"page-item active"},i.a.createElement("a",{className:"page-link",href:"# "},e)),r=1!==e&&i.a.createElement("li",{className:"page-item"},i.a.createElement("a",{className:"page-link",href:"# ",name:e-1,onClick:a.onPageChange},"Previous")),o=e!==t&&i.a.createElement("li",{className:"page-item"},i.a.createElement("a",{className:"page-link",href:"# ",name:e+1,onClick:a.onPageChange},"Next")),c=e-1,l=t-e,s=[],m=[],u=-3;u<0;u++)c+u<0||s.push(i.a.createElement("li",{key:e+u,className:"page-item"},i.a.createElement("a",{className:"page-link",href:"# ",name:e+u,onClick:a.onPageChange},e+u)));for(var p=1;p<5;p++)l-p<0||m.push(i.a.createElement("li",{key:e+p,className:"page-item"},i.a.createElement("a",{className:"page-link",href:"# ",name:e+p,onClick:a.onPageChange},e+p)));return i.a.createElement("nav",{"aria-label":"Page navigation"},i.a.createElement("ul",{className:"pagination justify-content-center"},r,s,n,m,o))},a.onPageChange=function(e){e.preventDefault(),pe?(a.setState({page:parseInt(e.target.name)}),window.history.pushState({html:document.innerHTML,pageTitle:document.title},"","./".concat(e.target.name))):a.props.match.params.author?H.getSearchByAuthor(a.props.match.params.author,a.props.match.params.page).then(function(e){e.text().then(function(e){e=JSON.parse(e),a.setState({data:e.data,pageCount:e.pageCount})})}):a.props.match.params.isbn?H.getSearchByIsbn(a.props.match.params.isbn,a.props.match.params.page).then(function(e){e.text().then(function(e){e=JSON.parse(e),a.setState({data:e.data,pageCount:e.pageCount})})}):a.props.match.params.title&&H.getSearchByTitle(a.props.match.params.title,a.props.match.params.page).then(function(e){e.text().then(function(e){e=JSON.parse(e),a.setState({data:e.data,pageCount:e.pageCount})})})},a.result=function(e){return e?e.map(function(e,t){return i.a.createElement("div",{className:"container",key:t},i.a.createElement("div",{className:"row mt-3"},i.a.createElement("div",{className:"col-3 text-center"},i.a.createElement("img",{src:e.pictureurl,className:"img-fluid",alt:"fluid"})),i.a.createElement("div",{className:"col"},i.a.createElement("h3",null,e.title),i.a.createElement("h4",null,e.description))))}):i.a.createElement("div",{className:"container mt-3"},"no result :(")},a.render=function(){return i.a.createElement("div",null,i.a.createElement(ee.NavBar,null),i.a.createElement(ee.Header,null),i.a.createElement(ee.Body,{noSideBar:!a.state.showSideBar,content:a.bodyContent()}),i.a.createElement(ee.Footer,null))},a.state={showSideBar:!0,data:null,page:parseInt(a.props.match.params.page),pageCount:null},a.bodyContent=a.bodyContent.bind(Object(E.a)(Object(E.a)(a))),a.pagination=a.pagination.bind(Object(E.a)(Object(E.a)(a))),a.onPageChange=a.onPageChange.bind(Object(E.a)(Object(E.a)(a))),a.result=a.result.bind(Object(E.a)(Object(E.a)(a))),a}return Object(f.a)(t,e),t}(c.Component),he=[{path:"/search/author/:author/page/:page",exact:!0,component:ge},{path:"/search/isbn/:isbn/page/:page",exact:!0,component:ge},{path:"/search/title/:title/page/:page",exact:!0,component:ge}],be="Once upon",fe="this book is about",ve="Seller@mail.sfsu.edu",Ee="used",ye="$8.99",Ne=[{path:"/book/:bid",exact:!0,component:function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).onShowOrHide=function(e){return a.setState({showSideBar:!a.state.showSideBar})},a.state={showSideBar:!0},a.onShowOrHide=a.onShowOrHide.bind(Object(E.a)(Object(E.a)(a))),a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=i.a.createElement("div",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row-1"},i.a.createElement("div",{className:"col-6"},i.a.createElement("img",{className:"d-block w-100",src:"https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"})),i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"text-default"},"Title: ",be),i.a.createElement("div",{className:"text-default"},"Description: ",fe),i.a.createElement("div",{className:"text-default"},"SellerInfo: ",ve),i.a.createElement("div",{className:"text-default"},"Book State: ",Ee),i.a.createElement("div",{className:"text-default"},"Price: ",ye)))));return i.a.createElement("div",null,i.a.createElement(ee.NavBar,null),i.a.createElement(ee.Header,null),i.a.createElement(ee.Body,{noSideBar:!this.state.showSideBar,content:e}),i.a.createElement(ee.Footer,null))}}]),t}(c.Component)}],je=[].concat(Object(p.a)(se),Object(p.a)(me.default),Object(p.a)(ue),Object(p.a)(he),Object(p.a)(Ne),Object(p.a)(v));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(120);null!==r.a&&null!==o.a&&(s.a.render(i.a.createElement(m.a,null,i.a.createElement("div",null,Object(u.a)(je))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}))}],[[72,1,2]]]);
//# sourceMappingURL=main.59bac286.chunk.js.map