(this.webpackJsonpmynoteapp=this.webpackJsonpmynoteapp||[]).push([[0],{120:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c),i=(n(60),n(2)),s=n(3),l=n(5),u=n(4),d=n(6),m=(n(61),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"My Note App"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},"Home",r.a.createElement("span",{className:"sr-only"},"(current)")))))))}}]),t}(a.Component)),p=function(){return r.a.createElement("footer",{className:"py-5 bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"m-0 text-center text-white"},"Copyright \xa9 Your Website 2019")))},b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.address;return r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ol",{className:"breadcrumb bg-light border-bottom"},r.a.createElement("li",{className:"breadcrumb-item"},"My Note App"),e.map((function(t,n){return n===e.length-1?r.a.createElement("li",{key:n,className:"breadcrumb-item active","aria-current":"page"},t):r.a.createElement("li",{key:n,className:"breadcrumb-item"},t)}))))}}]),t}(a.Component),f=n(8),h=n(7),E="SORT_TITLE_ASC",g="SORT_TITLE_DESC",y="SORT_DATE_ASC",v="SORT_DATE_DESC",O=n(31),N=n.n(O),S=(n(66),{apiKey:"AIzaSyCsvX7RdDeDk_Pu7oF0iljd9drSgyM6r5M",authDomain:"note-react-e1434.firebaseapp.com",databaseURL:"https://note-react-e1434.firebaseio.com",projectId:"note-react-e1434",storageBucket:"note-react-e1434.appspot.com",messagingSenderId:"575571829147",appId:"1:575571829147:web:2a0c70aa0f5f2e1822013e"});N.a.initializeApp(S);var j=N.a.database().ref("/noteData"),D=function(e){return function(){j.child(e).remove()}};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).handleOpenEdit=function(e,t){n.props.enterEditMode(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{id:t}))},n.renderNewFlag=function(e){if(Math.round((new Date).getTime()/1e3)-e<43200)return r.a.createElement("span",{className:"badge badge-danger badge-pill"},"new")},n.renderDateTime=function(e){var t=new Date(1e3*e);return r.a.createElement("abbr",{title:t},t.toLocaleDateString())},n.renderEditBtn=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=n.props,a=t.data,c=t.idItem,o=t.idEditing;return null!==o?r.a.createElement("button",{type:"button",disabled:!0,className:"btn btn-sm btn-outline-secondary"},e?"Editing ...":"Edit"):r.a.createElement("button",{type:"button",onClick:function(){return n.handleOpenEdit(a,c)},className:"btn btn-sm btn-outline-secondary"},"Edit")},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=t.title,a=t.lastEditDate,c=t.content,o=e.idItem,i=e.idEditing,s=e.showConfirmDeleteId,l=o===i;return r.a.createElement("div",{className:"card"+(l?" shadow":" shadow-sm")},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title mb-1"},n," ",this.renderNewFlag(a)),r.a.createElement("small",{className:"text-muted"},"Last updated:  ",this.renderDateTime(a)),r.a.createElement("p",{className:"card-text mb-1 text-justify"},c),r.a.createElement("div",{className:"btn-group mt-1 d-block text-right",role:"group"},this.renderEditBtn(l),l?"":r.a.createElement("button",{"data-toggle":"modal","data-target":"#confirmModal",type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){return s(o)}},"Delete"))))}}]),t}(a.Component),M=Object(h.b)(null,(function(e){return{deleteFunc:function(t){return e(D(t))},enterEditMode:function(t){e({type:"TURN_EDIT_ON",itemEdit:t})},showConfirmDeleteId:function(t){return e({type:"ADD_ID_TO_COFIRM_REMOVE",noteId:t})}}}))(C),A=function(){return r.a.createElement("p",null,r.a.createElement("span",{className:"spinner-border text-secondary",role:"status"})," Loading")},_=function(e,t){var n=[];return Object.keys(e).forEach((function(t){n.push([t,e[t]])})),n.sort((function(e,n){return t(e[1],n[1])})),Object.fromEntries(n)},k=function(e){return _(e,(function(e,t){return e.title.localeCompare(t.title)}))},T=function(e){return _(e,(function(e,t){return t.title.localeCompare(e.title)}))},R=function(e){return _(e,(function(e,t){return t.lastEditDate-e.lastEditDate}))},x=function(e){return _(e,(function(e,t){return e.lastEditDate-t.lastEditDate}))},F=function(e,t,n){return{id:Date.now(),title:e,content:t,type:n}},I=function(){return F("Add done","Add new note done!","success")},L=function(){return F("Edit mode","Edit note done!","success")},P=function(){return F("Search mode","Search mode turned off!","info")},U=function(){return F("Sort mode","Sort mode turned off!","info")},K=function(){return F("Deleted!","Delete done!","success")},G=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleDelete=function(e){var t=n.props,a=t.deleteNoteIdFunc,r=t.throwMessage;a(e),r(K())},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.noteId;return r.a.createElement("div",{className:"modal fade",id:"confirmModal",tabIndex:-1,role:"dialog","aria-labelledby":"confirmModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"confirmModalLabel"},"Confirm Delete"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},"Are you sure?"),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal"},"Cancel"),r.a.createElement("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:function(){return e.handleDelete(t)}},"Yes")))))}}]),t}(a.Component),B=Object(h.b)((function(e){return{noteId:e.appStatus.idToConfirmDelete}}),(function(e){return{deleteNoteIdFunc:function(t){return e(D(t))},throwMessage:function(t){return e({type:"ADD_MESSAGE",message:t})}}}))(G),V=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).hasKeywordInTitleAndContent=function(e,t,n){return-1!==t.search(e)||-1!==n.search(e)},n.getResultSearch=function(e,t){var a={};return Object.keys(t).forEach((function(r){n.hasKeywordInTitleAndContent(e,t[r].title,t[r].content)&&(a[r]=t[r])})),a},n.getResultSort=function(e,t){switch(e){case E:return k(t);case g:return T(t);case y:return R(t);case v:return x(t);default:return t}},n.getEditingId=function(){return null!==n.props.editModel?n.props.editModel.id:null},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getNotes()}},{key:"render",value:function(){var e=this,t=this.props,n=t.noteData,a=t.isLoading,c=t.searchKey,o=t.sortMode;return null!==c&&(n=this.getResultSearch(c,n)),null!==o&&(n=this.getResultSort(o,n)),a?r.a.createElement("div",{className:"card-columns px-3 vh-100 d-flex align-items-center justify-content-center"},r.a.createElement(A,null)):0===Object.entries(n).length?r.a.createElement("div",{className:"card-columns px-3 vh-100 d-flex justify-content-center"},r.a.createElement("p",{className:"font-italic"},"There is 0 result.")):r.a.createElement("div",{className:"card-columns px-3 min-vh-100"},r.a.createElement(B,null),Object.keys(n).map((function(t){return r.a.createElement(M,{key:t,idItem:t,data:n[t],idEditing:e.getEditingId()})})))}}]),t}(a.Component),H=Object(h.b)((function(e,t){return{noteData:e.noteData.data,isLoading:e.noteData.isLoading,editModel:e.appStatus.isEditMode,searchKey:e.appStatus.isSearchMode,sortMode:e.appStatus.isSortMode}}),(function(e){return{getNotes:function(){e((function(e){j.on("value",(function(t){e({type:"GET_ALL",payload:t.val()})}))}))}}}))(V),q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.handleSearchSubmit=function(e){e.preventDefault(),n.state.searchKey&&""!==n.state.searchKey.trim()&&n.props.turnSearchOn(n.state.searchKey)},n.handleCancelSearch=function(e){e.target.reset(),n.props.cancelSearch(),n.setState({searchKey:""}),n.props.throwMessage(P())},n.handleCancelSort=function(){n.props.cancelSort(),n.props.throwMessage(U())},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.isLoading,a=t.searchKey,c=t.turnSortOn;return n?r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"View Setting")),r.a.createElement("div",{className:"card-body d-flex align-items-center justify-content-center"},r.a.createElement(A,null))):r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"View Setting")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"search-form"},r.a.createElement("form",{onSubmit:function(t){return e.handleSearchSubmit(t)},onReset:function(t){return e.handleCancelSearch(t)}},r.a.createElement("input",{required:!0,onChange:function(t){return e.handleChange(t)},name:"searchKey",type:"text",className:"form-control mr-2",placeholder:"Search key ..."}),r.a.createElement("div",{className:"float-right btn-group mt-2"},null!==a?r.a.createElement("button",{type:"reset",className:"btn btn-secondary"},"Cancel"):null,r.a.createElement("button",{type:"submit",className:"order-last btn btn-secondary "},"Search"))),r.a.createElement("button",{className:"mt-2 btn btn-outline-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort"),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement("button",{className:"dropdown-item btn",onClick:function(){return c(E)}},"Title A-Z"),r.a.createElement("button",{className:"dropdown-item btn",onClick:function(){return c(g)}},"Title Z-A"),r.a.createElement("button",{className:"dropdown-item btn",onClick:function(){return c(y)}},"Date asc"),r.a.createElement("button",{className:"dropdown-item btn",onClick:function(){return c(v)}},"Date desc"),r.a.createElement("div",{role:"separator",className:"dropdown-divider"}),r.a.createElement("button",{className:"dropdown-item btn",onClick:this.handleCancelSort},"Reset sort")))))}}]),t}(a.Component),J=Object(h.b)((function(e,t){return{isLoading:e.noteData.isLoading,searchKey:e.appStatus.isSearchMode}}),(function(e){return{turnSearchOn:function(t){return e({type:"TURN_SEARCH_ON",keyword:t})},cancelSearch:function(){return e({type:"TURN_SEARCH_OFF"})},cancelSort:function(){return e({type:"TURN_SORT_OFF"})},turnSortOn:function(t){return e({type:"TURN_SORT_ON",modeName:t})},throwMessage:function(t){return e({type:"ADD_MESSAGE",message:t})}}}))(q),W=function(e,t,n){var a="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),r=document.createElement("a");r.setAttribute("href",a),r.setAttribute("download",t+"-"+Date.now()+".json"),document.body.appendChild(r),r.click(),r.remove(),n()},z=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleExport=function(e){n.setState({isExporting:!0}),setTimeout((function(){return W(e,"myappnote-data",(function(){return n.setState({isExporting:!1})}))}),3e3)},n.renderLoadingBtn=function(){return r.a.createElement("button",{className:"btn btn-block btn-success",disabled:!0},r.a.createElement("span",{className:"spinner-border-sm spinner-border",role:"status"}),r.a.createElement("span",{className:"sr-only"},"Loading..."))},n.state={isExporting:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.showNoteForm,a=t.noteData;return r.a.createElement("div",{className:"card my-2"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Action")),r.a.createElement("div",{className:"card-body"},r.a.createElement("button",{className:"btn btn-block btn-primary",onClick:n},"Add"),this.state.isExporting?this.renderLoadingBtn():r.a.createElement("button",{className:"btn btn-block btn-outline-success",onClick:function(){return e.handleExport(a)}},"Export all"),r.a.createElement("button",{className:"btn btn-block btn-outline-danger",onClick:function(){return alert("This function is disabled.")}},"Clear all")))}}]),t}(a.Component),Y=Object(h.b)((function(e){return{noteData:e.noteData.data}}),(function(e){return{showNoteForm:function(){e({type:"TURN_ADD_ON"})}}}))(z),Z=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).isEditMode=function(){return null!==n.props.editModel},n.handleCancel=function(e){e.preventDefault(),n.isEditMode()?n.props.cancelEdit():n.props.cancelAdd()},n.handleChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.handleSubmitAdd=function(e){try{var t=n.state,a=t.title,r=t.content;n.props.addNewFunc({title:a,content:r}),n.props.throwMessage(I()),e.target.reset(),n.setState({title:null,content:null})}catch(c){}},n.handleSubmitEdit=function(){var e=n.props,t=e.editModel,a=e.editSaveFunc,r=e.throwMessage,c=null===n.state?{}:n.state,o=c.title,i=void 0===o?t.title:o,s=c.content,l=void 0===s?t.content:s,u=(new Date).getTime()/1e3;a(Object(f.a)({},t.id,{title:i,content:l,lastEditDate:u})),r(L())},n.handleSubmit=function(e){e.preventDefault(),n.isEditMode()?(n.handleSubmitEdit(),n.props.cancelEdit()):n.handleSubmitAdd(e)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.isEditMode(),n=t?this.props.editModel:{},a=n.id,c=void 0===a?"":a,o=n.title,i=void 0===o?"":o,s=n.content,l=void 0===s?"":s,u=t?"Edit":"Add";return r.a.createElement("div",{className:"card my-2 border-primary"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},u)),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{type:"hidden",value:c}),r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{required:!0,defaultValue:i,type:"text",className:"form-control",name:"title",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{required:!0,onChange:function(t){return e.handleChange(t)},rows:6,type:"text",className:"form-control",name:"content",defaultValue:l}),r.a.createElement("button",{type:"submit",className:"mt-3 btn btn-block btn-outline-primary"},"Save"),r.a.createElement("button",{type:"reset",className:"btn btn-block btn-outline-secondary"},"Reset form"),r.a.createElement("button",{onClick:function(t){return e.handleCancel(t)},className:"btn btn-block btn-light"},"Cancel"))))}}]),t}(a.Component),X=Object(h.b)((function(e){return{editModel:e.appStatus.isEditMode}}),(function(e){return{cancelAdd:function(){return e({type:"TURN_ADD_OFF"})},addNewFunc:function(t){return e((n=t,function(){n.lastEditDate=(new Date).getTime()/1e3,j.push(n).getKey()}));var n},editSaveFunc:function(t){return e((n=t,function(){j.update(n)}));var n},cancelEdit:function(){return e({type:"TURN_EDIT_OFF"})},throwMessage:function(t){return e({type:"ADD_MESSAGE",message:t})}}}))(Z),$=n(33),Q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderClearAllBtn=function(){return r.a.createElement("button",{onClick:function(){return n.props.closeAllMessages()},type:"button",className:"btn btn-light btn-sm"},"Clear all")},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.messages;return r.a.createElement($.b,{position:"bottom-right"},t.map((function(t){return r.a.createElement($.a,{key:t.id,type:t.type,onDismiss:function(){return e.props.closeFunc(t.id)},timeout:4e3},r.a.createElement("h5",null,t.title),r.a.createElement("div",null,t.content))})),0===t.length?null:this.renderClearAllBtn())}}]),t}(a.Component),ee=Object(h.b)((function(e){return{messages:e.messages}}),(function(e){return{closeFunc:function(t){return e({type:"CLOSE_MESSAGE",messageId:t})},closeAllMessages:function(){return e({type:"CLOSE_ALL_MESSAGES"})}}}))(Q),te=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=[];return null!==this.props.status.isSearchMode&&e.push('Search "'+this.props.status.isSearchMode+'"'),null!==this.props.status.isSortMode&&e.push("Sort"),this.props.status.isAddMode&&e.push("Add"),null!==this.props.status.isEditMode&&e.push("Edit"),r.a.createElement("div",{className:"bg-light text-dark"},r.a.createElement(m,null),r.a.createElement(ee,null),r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",{className:"row flex-column-reverse flex-md-row"},r.a.createElement("div",{className:"col-sm-8 col-12 mb-3 px-2"},r.a.createElement("div",{className:"bg-white border rounded shadow-sm"},r.a.createElement(b,{address:e}),r.a.createElement(H,null))),r.a.createElement("div",{className:"col-sm-4 px-2"},r.a.createElement(J,null),this.props.status.isAddMode||null!=this.props.status.isEditMode?r.a.createElement(X,null):r.a.createElement(Y,null)))),r.a.createElement(p,null))}}]),t}(a.Component),ne=Object(h.b)((function(e,t){return{status:e.appStatus}}))(te);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=n(12);function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var oe={isLoading:!0,data:{}};function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var le={isAddMode:!1,isEditMode:null,isSearchMode:null,isSortMode:null,idToConfirmDelete:null},ue=n(54),de=[],me=Object(ae.c)({noteData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL":return ce({},e,{data:t.payload,isLoading:!1});default:return e}},appStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TURN_ADD_ON":return se({},e,{isAddMode:!0});case"TURN_ADD_OFF":return se({},e,{isAddMode:!1});case"TURN_EDIT_OFF":return se({},e,{isEditMode:null});case"TURN_EDIT_ON":return se({},e,{isEditMode:t.itemEdit,isAddMode:!1});case"TURN_SEARCH_OFF":return se({},e,{isSearchMode:null});case"TURN_SEARCH_ON":return se({},e,{isSearchMode:t.keyword});case"TURN_SORT_ON":return se({},e,{isSortMode:t.modeName});case"TURN_SORT_OFF":return se({},e,{isSortMode:null});case"ADD_ID_TO_COFIRM_REMOVE":return se({},e,{idToConfirmDelete:t.noteId});default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return[].concat(Object(ue.a)(e.slice(-4)),[t.message]);case"CLOSE_MESSAGE":return e.filter((function(e){return e.id!==t.messageId}));case"CLOSE_ALL_MESSAGES":return[];default:return e}}}),pe=n(53),be=Object(ae.d)(me,Object(ae.a)(pe.a));o.a.render(r.a.createElement(h.a,{store:be},r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,t,n){e.exports=n(120)},60:function(e,t,n){},61:function(e,t,n){}},[[55,1,2]]]);
//# sourceMappingURL=main.8bb7baf4.chunk.js.map