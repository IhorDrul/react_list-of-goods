(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{46:function(e,t,a){e.exports=a(56)},51:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),s=a(28),c=a(29),i=a(34),u=a(33),g=a(57),m=a(35),d=a(87),h=a(93),p=a(92),f=a(91),b=(a(51),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).sortByAlpha=function(){n.setState((function(e){return{goods:Object(m.a)(e.goods).sort((function(t,a){return e.sortAlphabetToggler?t.localeCompare(a):a.localeCompare(t)})),sortAlphabetToggler:!e.sortAlphabetToggler}}))},n.sortByLength=function(){n.setState((function(e){return{goods:Object(m.a)(e.goods).sort((function(t,a){return e.sortLengthToggler?t.length-a.length:a.length-t.length})),sortLengthToggler:!e.sortLengthToggler}}))},n.reverse=function(){n.setState((function(e){return{goods:Object(m.a)(e.goods).reverse()}}))},n.onSelectClick=function(e){n.setState({selectedValue:e.target.value,goods:[].concat(b).filter((function(t){return t.length>=e.target.value}))})},n.reset=function(){n.setState({goods:b,selectedValue:1})},n.state={goods:b,sortLengthToggler:!0,sortAlphabetToggler:!0,selectedValue:1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.goods,a=e.selectedValue;return o.a.createElement("div",{className:"products"},o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{size:"large",color:"primary","aria-label":"large outlined primary button group"},o.a.createElement(g.a,{onClick:this.reverse},"Reverse"),o.a.createElement(g.a,{onClick:this.sortByAlpha},"Sort alphabetically"),o.a.createElement(g.a,{onClick:this.sortByLength},"Sort by length"),o.a.createElement(g.a,{onClick:this.reset},"Reset")),o.a.createElement(h.a,{id:"demo-simple-select-outlined-label"},"Select minimal product length"),o.a.createElement("div",{className:"products__select"},o.a.createElement(f.a,{variant:"outlined",onChange:this.onSelectClick,value:a,labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined"},[].concat(b).map((function(e,t){return o.a.createElement(p.a,{key:e,value:t+1},t+1)}))))),o.a.createElement("ul",{className:"products__list"},t.map((function(e){return o.a.createElement("li",{className:"products__item",key:e},e)}))))}}]),a}(o.a.Component),E=(a(55),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isListShown:!1},e.showList=function(){e.setState({isListShown:!0})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.isListShown;return o.a.createElement("div",{className:"app"},e?o.a.createElement(v,null):o.a.createElement("div",{className:"app__button"},o.a.createElement(g.a,{variant:"outlined",color:"primary",onClick:this.showList},"show list of goods")))}}]),a}(o.a.Component));l.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.75505e0e.chunk.js.map