(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var s=a(0),c=a(1),n=a(3),i=a.n(n),o=a(4),r=a(5),l=a(6),b=a(8),d=a(7),j=function(t){var e=t.good,a=t.neutral,c=t.bad,n=t.total,i=t.positivePercentage;return Object(s.jsxs)("div",{className:"buttonPanel",children:[Object(s.jsx)("h2",{children:"Statistics"}),Object(s.jsxs)("ul",{className:"statistickList",children:[Object(s.jsxs)("li",{className:"statistickListItem",children:["Good: ",Object(s.jsx)("br",{}),e]}),Object(s.jsxs)("li",{className:"statistickListItem",children:["Neutral: ",Object(s.jsx)("br",{}),a]}),Object(s.jsxs)("li",{className:"statistickListItem",children:["Bad: ",Object(s.jsx)("br",{}),c]}),Object(s.jsxs)("li",{className:"statistickListItem",children:["Total: ",Object(s.jsx)("br",{}),n]}),Object(s.jsxs)("li",{className:"statistickListItem",children:["Positive: ",Object(s.jsx)("br",{}),i,"%"]})]})]})},u=function(t){Object(b.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.onChangeGood=function(e){t.setState((function(t){return Object(o.a)({},e.target.name,t[e.target.name]+1)}))},t}return Object(l.a)(a,[{key:"countTotalFeedback",value:function(){var t=this.state;return t.good+t.neutral+t.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var t=this.state,e=t.good,a=e+t.neutral+t.bad,s=(100/a*e).toFixed(1);return a>0?s:a?void 0:"0 "}},{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,c=t.bad;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"buttonPanel",children:[Object(s.jsx)("h2",{children:"Please leave feedback"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"buttonPanelItem",name:"good",onClick:this.onChangeGood,children:"Good"}),Object(s.jsx)("button",{className:"buttonPanelItem",name:"neutral",onClick:this.onChangeGood,children:"Neutral"}),Object(s.jsx)("button",{className:"buttonPanelItem",name:"bad",onClick:this.onChangeGood,children:"Bad"})]})]}),this.countTotalFeedback()?Object(s.jsx)(j,{good:e,neutral:a,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(s.jsx)("div",{className:"message",children:Object(s.jsx)("h2",{children:"No feedback given"})})]})}}]),a}(c.Component);a(14);i.a.render(Object(s.jsx)(u,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f4bce07a.chunk.js.map