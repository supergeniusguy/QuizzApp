(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{175:function(t,e,n){var content=n(199);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("27d4cd56",content,!0,{sourceMap:!1})},176:function(t,e,n){var content=n(201);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("56219a3a",content,!0,{sourceMap:!1})},177:function(t,e,n){var content=n(203);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("8b198312",content,!0,{sourceMap:!1})},178:function(t,e,n){var content=n(205);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("57072b13",content,!0,{sourceMap:!1})},179:function(t,e,n){var content=n(208);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("608e0d4a",content,!0,{sourceMap:!1})},198:function(t,e,n){"use strict";n(175)},199:function(t,e,n){var o=n(50)(!1);o.push([t.i,".topComponent .title[data-v-9a9ddf50]{margin-top:50px;font-size:60px;color:red;text-align:center}.topComponent .contents .select_question[data-v-9a9ddf50]{margin-top:30px;padding:0 200px}.topComponent .contents .select_question ul[data-v-9a9ddf50]{border:1px solid;max-height:200px}.topComponent .contents .select_question ul li[data-v-9a9ddf50]{height:30px;line-height:30px;padding-left:20px;border:1px solid;cursor:pointer}.topComponent .contents .select_question ul li.selected[data-v-9a9ddf50],.topComponent .contents .select_question ul li[data-v-9a9ddf50]:hover{background-color:#adff2f}.topComponent .contents .btn[data-v-9a9ddf50]{position:absolute;margin:0 auto;left:0;right:0;bottom:30px}",""]),t.exports=o},200:function(t,e,n){"use strict";n(176)},201:function(t,e,n){var o=n(50)(!1);o.push([t.i,".qInfoComponent[data-v-fbfb19c4]{margin-bottom:20px}.qInfoComponent .header[data-v-fbfb19c4]{font-size:32px}.qInfoComponent .header .title span[data-v-fbfb19c4]{font-weight:700}.qInfoComponent .header .title span.answer-correct[data-v-fbfb19c4]{color:#259025}.qInfoComponent .header .title span.answer-incorrect[data-v-fbfb19c4]{color:#ec164b}.qInfoComponent .contents[data-v-fbfb19c4]{font-size:24px;margin-top:20px}.qInfoComponent .contents .choiceList__item .choice span.is-correct[data-v-fbfb19c4]{background-color:#90ee90}.qInfoComponent .contents .choiceList__item .choice span.is-incorrect[data-v-fbfb19c4]{background-color:#ec164b}",""]),t.exports=o},202:function(t,e,n){"use strict";n(177)},203:function(t,e,n){var o=n(50)(!1);o.push([t.i,".questionsComponent .header[data-v-7d828a78]{height:30px}.questionsComponent .contents[data-v-7d828a78]{margin-top:10px}",""]),t.exports=o},204:function(t,e,n){"use strict";n(178)},205:function(t,e,n){var o=n(50)(!1);o.push([t.i,".resultComponent .answers[data-v-9eeabffe]{padding:15px 0 0 15px;background-color:#eaeaea;margin-top:20px;border-radius:15px}.resultComponent .answers ul[data-v-9eeabffe]{height:370px;overflow:auto}.resultComponent .btns-area[data-v-9eeabffe]{margin-top:15px;text-align:center}",""]),t.exports=o},206:function(t){t.exports=JSON.parse('{"title":"ウルトCDクイズ","btnName":"やってみる","questionPaths":[{"filePath":"./json/question_level1.json","title":"初級"}],"randam":false,"choiceRandam":false}')},207:function(t,e,n){"use strict";n(179)},208:function(t,e,n){var o=n(50)(!1);o.push([t.i,".main[data-v-c73b9688]{width:80%;min-height:550px;border:1px solid;border-radius:15px;position:relative;top:40px;left:0;margin:auto;padding:30px;background-color:#fff}",""]),t.exports=o},209:function(t,e,n){"use strict";n.r(e);n(39),n(18),n(29),n(48),n(49);var o=n(19),c=n(40),r=n(180),l=n.n(r);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={data:function(){return{title:"",btnName:"",selectQuestionPath:""}},created:function(){this.selectQuestionPath="",this.setSettingName()},computed:d({},Object(c.d)("common",["questionList","settingOption"])),methods:d(d({},Object(c.c)("common",["setDispType","setQuestionList"])),{},{setSettingName:function(){this.title=this.settingOption.title,this.btnName=this.settingOption.btnName},showQuestionCoponent:function(){this.readQuestions()},readQuestions:function(){var t=this;l.a.get(this.selectQuestionPath).then((function(e){t.setReadQuestions(e.data.questionList),t.setDispType("questions")})).catch((function(t){console.log(t)}))},setReadQuestions:function(t){var e=this;this.settingOption.randam&&(t=this.shuffleArray(t)),this.settingOption.choiceRandam&&t.forEach((function(t,n){t.choice=e.shuffleArray(t.choice)})),this.setQuestionList(t)},selectQuestion:function(t){t===this.selectQuestionPath?this.selectQuestionPath="":this.selectQuestionPath=t}})},m=(n(198),n(30)),v=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topComponent"},[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"contents"},[n("div",{staticClass:"select_question"},[n("p",[t._v("問題を選択")]),t._v(" "),n("ul",t._l(t.settingOption.questionPaths,(function(e,o){return n("li",{key:o,class:{selected:t.selectQuestionPath===e.filePath},on:{click:function(n){return t.selectQuestion(e.filePath)}}},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t")])})),0)]),t._v(" "),n("div",{staticClass:"btns-area"},[n("button",{staticClass:"btn",attrs:{disabled:!t.selectQuestionPath},on:{click:function(e){return t.showQuestionCoponent()}}},[t._v(t._s(t.btnName))])])])])}),[],!1,null,"9a9ddf50",null).exports;function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={data:function(){return{selectChoice:""}},created:function(){this.initSelectChoice()},watch:{questionInfo:function(){var t=this;this.$nextTick((function(){t.initSelectChoice()}))},selectChoice:function(t){this.setSelectChoiceStore(t)}},computed:C({},Object(c.d)("common",["selectAnswerList","settingOption"])),props:["qIndex","questionInfo","mode","answerList"],methods:C(C({},Object(c.c)("common",["setSelectChoiceStore"])),{},{initSelectChoice:function(){"question"===this.mode?this.selectChoice=this.answerList[this.qIndex]||this.questionInfo.choice[0]:"answer"===this.mode&&(this.selectChoice=this.questionInfo.answer)},checkCorrectClass:function(t){return"answer"!==this.mode?"":t===this.selectAnswerList[this.qIndex]?t===this.questionInfo.answer?"is-correct":"is-incorrect":t===this.questionInfo.answer?"is-correct":void 0}})},_=(n(200),Object(m.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qInfoComponent"},[n("div",{staticClass:"header"},[n("p",{staticClass:"title"},[t._v("\n            問"+t._s(t.qIndex+1)+"\n            "),"answer"===t.mode&&t.questionInfo.answer===t.selectAnswerList[t.qIndex]?n("span",{staticClass:"answer-correct"},[t._v(": 正解")]):t._e(),t._v(" "),"answer"===t.mode&&t.questionInfo.answer!==t.selectAnswerList[t.qIndex]?n("span",{staticClass:"answer-incorrect"},[t._v(": 不正解")]):t._e()]),t._v(" "),n("p",{staticClass:"question",domProps:{innerHTML:t._s(t.questionInfo.question)}}),t._v(" "),n("p",[t._v("レベル："+t._s(t.questionInfo.level))]),t._v(" "),n("video",{attrs:{src:t.questionInfo.movie1,preload:"metadata",playsinline:"true",autoplay:"true",loop:"true",muted:"true",width:"30%",height:"30%"},domProps:{muted:!0}}),t._v(" "),n("p",[t._v("読み込んだ動画は："+t._s(t.questionInfo.movie1))])]),t._v(" "),n("div",{staticClass:"contents"},[n("ul",{staticClass:"choiceList"},t._l(t.questionInfo.choice,(function(e,o){return n("li",{key:o,staticClass:"choiceList__item"},[n("label",{staticClass:"choice"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectChoice,expression:"selectChoice"}],attrs:{type:"radio",disabled:"answer"===t.mode&&e!==t.questionInfo.answer},domProps:{value:e,checked:t._q(t.selectChoice,e)},on:{change:function(n){t.selectChoice=e}}}),t._v(" "),n("span",{class:t.checkCorrectClass(e),domProps:{innerHTML:t._s(e)}})])])})),0)])])}),[],!1,null,"fbfb19c4",null).exports);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={data:function(){return{questionInfo:{},qIndex:0,correctCount:0,selectAnswerList:[]}},created:function(){this.showQustion()},computed:j(j({},Object(c.d)("common",["questionList"])),Object(c.b)("common",["getSelectChoiceStore"])),components:{QuestionInfo:_},methods:j(j({},Object(c.c)("common",["setDispType","setCorrectCount","setSelectAnswerList"])),{},{showQustion:function(){this.questionInfo=this.questionList[this.qIndex]},answerQuestion:function(t){this.checkCorrectAnswer(),this.qIndex=t,this.questionList[this.qIndex]?(this.selectChoise="",this.showQustion()):(this.setCorrectCount(this.correctCount),this.setSelectAnswerList(this.selectAnswerList),this.setDispType("result"))},showPreviousQuestion:function(){this.qIndex=this.qIndex-1,this.showQustion(),this.selectChoise=this.selectAnswerList[this.qIndex]},checkCorrectAnswer:function(){this.getSelectChoiceStore===this.questionInfo.answer&&this.correctCount++,this.selectAnswerList[this.qIndex]=this.getSelectChoiceStore}})},P=(n(202),Object(m.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"questionsComponent"},[n("div",{staticClass:"header"},[n("button",{staticClass:"btn btn-back",attrs:{disabled:0===t.qIndex},on:{click:function(e){return t.showPreviousQuestion()}}},[t._v("前の問題に戻る")])]),t._v(" "),n("div",{staticClass:"contents"},[n("div",{staticClass:"quetion-area"},[n("question-info",{attrs:{qIndex:t.qIndex,questionInfo:t.questionInfo,answerList:t.selectAnswerList,mode:"question"}})],1),t._v(" "),n("div",{staticClass:"btns-area"},[n("button",{staticClass:"btn",on:{click:function(e){return t.answerQuestion(t.qIndex+1)}}},[t._v("解答")])])])])}),[],!1,null,"7d828a78",null).exports);function I(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var L={data:function(){return{}},created:function(){},computed:S({},Object(c.d)("common",["correctCount","questionList"])),components:{QuestionInfo:_},methods:S(S({},Object(c.c)("common",["setDispType"])),{},{backTop:function(){this.setDispType("top")}})},k=(n(204),Object(m.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resultComponent"},[n("h2",{staticClass:"title"},[t._v("全"+t._s(t.questionList.length)+"問中、"+t._s(t.correctCount)+"問正解です。")]),t._v(" "),n("div",{staticClass:"contents"},[n("div",{staticClass:"answers"},[n("ul",t._l(t.questionList,(function(t,e){return n("li",{key:e},[n("question-info",{attrs:{qIndex:e,questionInfo:t,mode:"answer"}})],1)})),0)]),t._v(" "),n("div",{staticClass:"btns-area"},[n("button",{staticClass:"btn",on:{click:function(e){return t.backTop()}}},[t._v("終了")])])])])}),[],!1,null,"9eeabffe",null).exports),D=n(206);function Q(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function T(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Q(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):Q(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var E={data:function(){return{}},computed:T({},Object(c.d)("common",["dispType","settingOption"])),created:function(){this.readSettings()},components:{Top:v,Questions:P,Result:k},methods:T(T({},Object(c.c)("common",["setSettingOption","setDispType"])),{},{readSettings:function(){this.setSettingOption(D),this.setDispType("top")}})},A=(n(207),Object(m.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"top"},["top"===t.dispType?n("top"):t._e(),t._v(" "),"questions"===t.dispType?n("questions"):t._e(),t._v(" "),"result"===t.dispType?n("result"):t._e()],1)])}),[],!1,null,"c73b9688",null));e.default=A.exports}}]);