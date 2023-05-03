"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[2639],{283:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(3433),a=n(1413),o=n(5987),i=n(9439),s=n(2791),c=n(1358),l=n(1694),u=n.n(l),d=n(1087),f=n(6053),p=n(184),v=function(e){var t=e.tableProps,n=e.sizePerPageList,r=e.link,a=(0,s.useState)(t.pageCount),o=(0,i.Z)(a,2),c=o[0],l=o[1],v=(0,s.useState)(t.state.pageIndex),m=(0,i.Z)(v,2),h=m[0],x=m[1];(0,s.useEffect)((function(){l(t.pageCount),x(t.state.pageIndex)}),[t.pageCount,t.state.pageIndex]);var b=(0,s.useCallback)((function(e,t){return e.filter((function(e){return e<=c}))}),[c]),g=(0,s.useCallback)((function(e,t){return t<7?b([1,2,3,4,5,6],t):e%5>=0&&e>4&&e+2<t?[1,e-1,e,e+1,t]:e%5>=0&&e>4&&e+2>=t?[1,t-3,t-2,t-1,t]:[1,2,3,4,5,t]}),[b]),j=function(e){if(e!==h+1){var n=g(e,c);w(b(n,c)),t.gotoPage(e-1)}};(0,s.useEffect)((function(){var e=g(0,c);w(e)}),[c,g]);var y=(0,s.useState)(g(0,c)),C=(0,i.Z)(y,2),Z=C[0],w=C[1],N=h+1;return(0,p.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[n.length>0&&(0,p.jsxs)("div",{className:"d-inline-block me-3",children:[(0,p.jsx)("label",{className:"me-1",children:"Display :"}),(0,p.jsx)("select",{value:t.state.pageSize,onChange:function(e){t.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:(n||[]).map((function(e,t){return(0,p.jsx)("option",{value:e.value,children:e.text},t)}))})]}),(0,p.jsxs)("span",{className:"me-3",children:["Page"," ",(0,p.jsxs)("strong",{children:[h+1," of ",t.pageOptions.length]})," "]}),(0,p.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[(0,p.jsx)("label",{children:"Go to page : "}),(0,p.jsx)("input",{type:"number",value:h+1,min:"1",onChange:function(e){var n=e.target.value?Number(e.target.value)-1:0;t.gotoPage(n),x(t.state.pageIndex)},className:"form-control w-25 ms-1 d-inline-block"})]}),(0,p.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,p.jsx)("li",{className:u()("page-item","paginate_button","previous",{disabled:1===N}),onClick:function(){1!==N&&j(N-1)},children:(0,p.jsx)(d.rU,{to:r,className:"page-link",children:(0,p.jsx)(f.Ugn,{})})},"prevpage"),(Z||[]).map((function(e,t,n){return n[t-1]+1<e?(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,p.jsx)(d.rU,{to:r,className:"page-link",children:"..."})}),(0,p.jsx)("li",{className:u()("page-item","d-none","d-xl-inline-block",{active:N===e}),onClick:function(t){return j(e)},children:(0,p.jsx)(d.rU,{to:r,className:"page-link",children:e})})]},e):(0,p.jsx)("li",{className:u()("page-item","d-none","d-xl-inline-block",{active:N===e}),onClick:function(t){return j(e)},children:(0,p.jsx)(d.rU,{to:r,className:"page-link",children:e})},e)})),(0,p.jsx)("li",{className:u()("page-item","paginate_button","next",{disabled:N===t.pageCount}),onClick:function(){N!==t.pageCount&&j(N+1)},children:(0,p.jsx)(d.rU,{to:r,className:"page-link",children:(0,p.jsx)(f.ULj,{})})},"nextpage")]})]})},m=["indeterminate"],h=function(e){var t=e.preGlobalFilteredRows,n=e.globalFilter,r=e.setGlobalFilter,a=e.searchBoxClass,o=t.length,l=s.useState(n),d=(0,i.Z)(l,2),f=d[0],v=d[1],m=(0,c.useAsyncDebounce)((function(e){r(e||void 0)}),200);return(0,p.jsx)("div",{className:u()(a),children:(0,p.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",(0,p.jsx)("input",{value:f||"",onChange:function(e){v(e.target.value),m(e.target.value)},placeholder:"".concat(o," records..."),className:"form-control w-auto ms-1"})]})})},x=(0,s.forwardRef)((function(e,t){var n=e.indeterminate,r=(0,o.Z)(e,m),i=(0,s.useRef)(),c=t||i;return(0,s.useEffect)((function(){c.current.indeterminate=n}),[c,n]),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"form-check",children:[(0,p.jsx)("input",(0,a.Z)({type:"checkbox",className:"form-check-input",ref:c},r)),(0,p.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),b=function(e){var t=e.isSearchable||!1,n=e.isSortable||!1,o=e.pagination||!1,i=e.isSelectable||!1,s=e.isExpandable||!1,l=(0,c.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},t&&c.useGlobalFilter,n&&c.useSortBy,s&&c.useExpanded,o&&c.usePagination,i&&c.useRowSelect,(function(e){i&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllPageRowsSelectedProps;return(0,p.jsx)("div",{children:(0,p.jsx)(x,(0,a.Z)({},t()))})},Cell:function(e){var t=e.row;return(0,p.jsx)("div",{children:(0,p.jsx)(x,(0,a.Z)({},t.getToggleRowSelectedProps()))})}}].concat((0,r.Z)(e))})),s&&e.visibleColumns.push((function(e){return[{id:"expander",Header:function(e){var t=e.getToggleAllRowsExpandedProps,n=e.isAllRowsExpanded;return(0,p.jsx)("span",(0,a.Z)((0,a.Z)({},t()),{},{children:n?"-":"+"}))},Cell:function(e){var t=e.row;return t.canExpand?(0,p.jsx)("span",(0,a.Z)((0,a.Z)({},t.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*t.depth,"rem")}})),{},{children:t.isExpanded?"-":"+"})):null}}].concat((0,r.Z)(e))}))})),d=o?l.page:l.rows;return(0,p.jsxs)(p.Fragment,{children:[t&&(0,p.jsx)(h,{preGlobalFilteredRows:l.preGlobalFilteredRows,globalFilter:l.state.globalFilter,setGlobalFilter:l.setGlobalFilter,searchBoxClass:e.searchBoxClass}),(0,p.jsx)("div",{className:"table-responsive",children:(0,p.jsxs)("table",(0,a.Z)((0,a.Z)({},l.getTableProps()),{},{className:u()("table table-centered react-table",e.tableClass),children:[(0,p.jsx)("thead",{className:e.theadClass,children:l.headerGroups.map((function(e){return(0,p.jsx)("tr",(0,a.Z)((0,a.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,p.jsx)("th",(0,a.Z)((0,a.Z)({},e.getHeaderProps(e.sort&&e.getSortByToggleProps())),{},{className:u()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")}))}))}))}))}),(0,p.jsx)("tbody",(0,a.Z)((0,a.Z)({},l.getTableBodyProps()),{},{children:(d||[]).map((function(e,t){return l.prepareRow(e),(0,p.jsx)("tr",(0,a.Z)((0,a.Z)({},e.getRowProps()),{},{children:e.cells.map((function(e){return(0,p.jsx)("td",(0,a.Z)((0,a.Z)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}),o&&(0,p.jsx)(v,{link:e.link,tableProps:l,sizePerPageList:e.sizePerPageList})]})}},1828:function(e,t,n){var r=n(1413),a=n(5671),o=n(3144),i=n(1830),s=n.n(i),c=n(6787),l=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Delete",value:function(e,t){return s().fire({title:c.Z.t("Are you sure?"),text:c.Z.t("You won't be able to revert this!"),icon:c.Z.t("warning"),showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:c.Z.t("Cancel")}).then((function(n){if(n.isConfirmed)return t(e).then((function(e){if(e)return!0}))}))}},{key:"DeleteHistory",value:function(e,t,n){return s().fire({title:c.Z.t("Are you sure?"),text:c.Z.t("You won't be able to revert this!"),icon:c.Z.t("warning"),showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:c.Z.t("Cancel")}).then((function(r){if(r.isConfirmed)return n({id:e,hid:t}).then((function(e){if(e)return!0}))}))}},{key:"Update",value:function(e,t){return s().fire({title:"Do you want to enrolled courses?",showCancelButton:!0,confirmButtonText:"yes"}).then((function(n){if(n.isConfirmed)return t({coursesID:e}).then((function(e){return s().fire("enrolled!","","success"),window.location.reload(),e}));n.isDenied&&s().fire("Changes are not saved","","info")}))}},{key:"StatusUpdate",value:function(e,t,n){return s().fire({title:"Change Status",input:"select",inputOptions:{PENDING:"PENDING",REJECTED:"REJECTED",APPROVED:"APPROVED"}}).then((function(a){if(a.isConfirmed)return n({id:e,postBody:(0,r.Z)((0,r.Z)({},t),{},{status:a.value})}).then((function(e){return e}))}))}}]),e}();t.Z=l},1660:function(e,t,n){n.d(t,{J5:function(){return d},Kk:function(){return u},rB:function(){return c},u_:function(){return s},zQ:function(){return l}});var r=n(4165),a=n(5861),o=n(7218),i=o.E.injectEndpoints({endpoints:function(e){return{insCoursesList:e.query({query:function(){return{url:"insCourses/insCoursesList",method:"GET"}}}),insCoursesCreate:e.mutation({query:function(e){return{url:"insCourses/insCoursesCreate",method:"POST",body:e}},onQueryStarted:function(e,t){return(0,a.Z)((0,r.Z)().mark((function e(){var n,a,i,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.queryFulfilled,e.prev=1,e.next=4,a;case 4:i=e.sent,s=i.data,n(o.E.util.updateQueryData("insCoursesList",void 0,(function(e){e.data.push(s.data)}))),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}),insCoursesUpdate:e.mutation({query:function(e){var t=e.id,n=e.postBody;return{url:"insCourses/insCoursesUpdate/".concat(t),method:"PATCH",body:n}},onQueryStarted:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){var a,i,s,c,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.id,e.postBody,i=t.dispatch,s=t.queryFulfilled,n.prev=2,n.next=5,s;case 5:c=n.sent,l=c.data,i(o.E.util.updateQueryData("insCoursesList",void 0,(function(e){var t,n,r,o,i,s=e.data.findIndex((function(e){return e.id===a}));e.data[s].coursesCode=null===l||void 0===l||null===(t=l.data)||void 0===t?void 0:t.coursesCode,e.data[s].coursesName=null===l||void 0===l||null===(n=l.data)||void 0===n?void 0:n.coursesName,e.data[s].coursesInstructor=null===l||void 0===l||null===(r=l.data)||void 0===r?void 0:r.coursesInstructor,e.data[s].resources=null===l||void 0===l||null===(o=l.data)||void 0===o?void 0:o.resources,e.data[s].coursesHistory=null===l||void 0===l||null===(i=l.data)||void 0===i?void 0:i.coursesHistory}))),l&&window.location.reload(),n.next=13;break;case 11:n.prev=11,n.t0=n.catch(2);case 13:case"end":return n.stop()}}),n,null,[[2,11]])})))()}}),insCoursesDelete:e.mutation({query:function(e){return{url:"insCourses/insCoursesDelete/".concat(e),method:"DELETE"}},onQueryStarted:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){var a,i,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.dispatch,i=t.queryFulfilled,s=a(o.E.util.updateQueryData("insCoursesList",void 0,(function(t){t.data=t.data.filter((function(t){return t.id!==e}))}))),n.prev=2,n.next=5,i;case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),s.undo();case 10:case"end":return n.stop()}}),n,null,[[2,7]])})))()}}),insCoursesHistoryDelete:e.mutation({query:function(e){var t=e.id,n=e.hid;return{url:"insCourses/insCoursesHistoryDelete/".concat(t,"/").concat(n),method:"DELETE"}},onQueryStarted:function(e,t){return(0,a.Z)((0,r.Z)().mark((function e(){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch,n=t.queryFulfilled,e.prev=1,e.next=4,n;case 4:a=e.sent,a.data&&window.location.reload(),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))()}})}}}),s=i.useInsCoursesCreateMutation,c=i.useInsCoursesListQuery,l=i.useInsCoursesUpdateMutation,u=i.useInsCoursesDeleteMutation,d=i.useInsCoursesHistoryDeleteMutation},2639:function(e,t,n){n.r(t);var r=n(9439),a=(n(2791),n(7798)),o=n(2576),i=n(3360),s=n(7022),c=n(9140),l=n(9743),u=n(2677),d=n(4849),f=n(9230),p=n(8820),v=n(1087),m=n(9126),h=n(1724),x=n(1660),b=n(283),g=n(1828),j=n(1239),y=n(396),C=n(2969),Z=n(184);t.default=function(){var e,t=(0,f.$G)().t,n=(0,x.rB)(),w=n.data,N=n.isLoading,k=(0,x.Kk)(),E=(0,r.Z)(k,1)[0],P=(null===w||void 0===w?void 0:w.data)||[],R=(0,y.IQ)().data,S=[{Header:t("courses code"),accessor:function(e){return(0,Z.jsxs)("span",{className:"ms-1",children:[" ",e.coursesCode]})},sort:!0},{Header:t("courses name"),accessor:function(e){return(0,Z.jsxs)("span",{className:"ms-1",children:[" ",e.coursesName]})},sort:!0},{Header:t("courses instructor"),accessor:function(e){return(0,Z.jsxs)("span",{className:"ms-1",children:[" ",e.coursesInstructor]})},sort:!0},{Header:t("created at"),accessor:function(e){return(0,Z.jsxs)("span",{className:"ms-1",children:[" ",(0,j.ZP)(e.createdAt)]})},sort:!0},{Header:t("action"),accessor:function(e){return(0,Z.jsxs)("div",{className:"bodySmall",children:[(0,Z.jsx)(a.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,Z.jsx)(o.Z,{id:"button-tooltip",children:t("view")}),children:(0,Z.jsx)(v.rU,{to:"/inscourses-view/".concat(null===e||void 0===e?void 0:e.id),children:(0,Z.jsx)(i.Z,{variant:"primary",style:{padding:"5px 10px"},className:"me-1",children:(0,Z.jsx)(p.$aU,{})})})}),(0,Z.jsx)(a.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,Z.jsx)(o.Z,{id:"button-tooltip",children:t("edit")}),children:(0,Z.jsx)(v.rU,{to:"/inscourses-create-update?id=".concat(null===e||void 0===e?void 0:e.id),children:(0,Z.jsx)(i.Z,{variant:"primary",style:{padding:"5px 10px"},className:"me-1",children:(0,Z.jsx)(p.$iz,{})})})}),(0,Z.jsx)(a.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,Z.jsx)(o.Z,{id:"button-tooltip",children:t("delete")}),children:(0,Z.jsx)(i.Z,{variant:"danger",style:{padding:"5px 10px"},onClick:function(){return t=e.id,void g.Z.Delete(t,E);var t},children:(0,Z.jsx)(m.yvY,{})})})]})}}],U=[{text:t("5"),value:5},{text:t("10"),value:10},{text:t("25"),value:25},{text:t("all"),value:null===P||void 0===P?void 0:P.length}];return(0,Z.jsx)(h.Z,{children:(0,Z.jsx)(s.Z,{children:(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(c.Z.Body,{children:(0,Z.jsxs)(l.Z,{children:[(0,Z.jsxs)(u.Z,{className:"d-flex justify-content-between p-2",sm:12,children:[(0,Z.jsx)("h5",{children:t("courses")}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(v.rU,{to:"/insCourses-create-update",children:(0,Z.jsx)(i.Z,{size:"sm",variant:"primary",children:t("create courses")})}),(0,Z.jsx)(i.Z,{className:"mx-2",size:"sm",variant:"primary",onClick:function(){return(0,C.Z)(P,"courses-report","xls")},children:t("download report")})]})]}),(0,Z.jsx)(u.Z,{sm:12,children:N?(0,Z.jsx)(d.Z,{size:"lg",variant:"primary"}):null!==P&&void 0!==P&&P.length?(0,Z.jsx)(b.Z,{columns:S,data:"INSTRUCTOR"===(null===R||void 0===R||null===(e=R.data)||void 0===e?void 0:e.role)?null===P||void 0===P?void 0:P.filter((function(e){var t,n;return(null===(t=e.coursesInstructor)||void 0===t?void 0:t.trim())===(null===R||void 0===R||null===(n=R.data)||void 0===n?void 0:n.name)})):P,pageSize:5,sizePerPageList:U,isSortable:!0,pagination:!0}):t("no data found")})]})})})})})}},1239:function(e,t,n){n.d(t,{p6:function(){return i}});n(2791);var r=n(6431),a=n.n(r),o=n(184);function i(e){var t=new Date(e),n=""+(t.getMonth()+1),r=""+t.getDate(),a=t.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[a,n,r].join("-")}t.ZP=function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a(),{format:"D MMM YYYY",withTitle:!0,children:e})," ",(0,o.jsx)("br",{})]})}},2969:function(e,t,n){var r=n(4942),a=n(3433),o=n(3589);t.Z=function(e,t,n){var i=e.map((function(t){return Object.assign.apply(Object,[{}].concat((0,a.Z)(function e(t){var n;return(n=[]).concat.apply(n,(0,a.Z)(Object.keys(t).map((function(n){return"object"===typeof t[n]?e(t[n]):(0,r.Z)({},n,t[n])}))))}(e))))}));if("csv"===n){var s=o.Z.types.csv;return(0,o.Z)({data:i,fileName:t,exportType:s})}if("xls"===n){var c=o.Z.types.xls;return(0,o.Z)({data:i,fileName:t,exportType:c})}}},3589:function(e,t,n){function r(e){return"[object Array]"===Object.prototype.toString.call(e)}function a(e,t){if(!e)throw new Error(t)}function o(e){return Object.keys(e)}function i(e){return Object.keys(e).map((function(t){return[t,e[t]]}))}function s(e,t,n){var r="."+t,a=new RegExp("(\\".concat(t,")?$"));return n(e).replace(a,r)}function c(e,t,n,r){void 0===n&&(n="download"),void 0===r&&(r=!0);var a=function(e,t,n){switch(t){case"txt":var r="text/plain;charset=utf-8";return n?URL.createObjectURL(new Blob([e],{type:r})):"data:,".concat(r)+encodeURIComponent(e);case"css":return r="text/css;charset=utf-8",n?URL.createObjectURL(new Blob([e],{type:r})):"data:,".concat(r)+encodeURIComponent(e);case"html":return r="text/html;charset=utf-8",n?URL.createObjectURL(new Blob([e],{type:r})):"data:,".concat(r)+encodeURIComponent(e);case"json":return r="text/json;charset=utf-8",n?URL.createObjectURL(new Blob([e],{type:r})):"data:,".concat(r)+encodeURIComponent(e);case"csv":return r="text/csv;charset=utf-8",n?URL.createObjectURL(new Blob([e],{type:r})):"data:,".concat(r)+encodeURIComponent(e);case"xls":return r="text/application/vnd.ms-excel;charset=utf-8",n?URL.createObjectURL(new Blob([e],{type:r})):"data:,".concat(r)+encodeURIComponent(e);case"xml":return r="text/application/xml;charset=utf-8",n?URL.createObjectURL(new Blob([e],{type:r})):"data:,".concat(r)+encodeURIComponent(e);default:return""}}(e,t,r),o=document.createElement("a");o.href=a,o.download=n,o.setAttribute("style","visibility:hidden"),document.body.appendChild(o),o.dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!1,view:window})),document.body.removeChild(o)}n.d(t,{Z:function(){return j}});var l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},u=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(s){a={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i};function d(e){return e.map(i).reduce((function(t,n,r){return n.reduce((function(t,n){var a=u(n,2),o=a[0],i=a[1],s=t[o]||Array.from({length:e.length}).map((function(e){return""}));return s[r]=("string"!==typeof i?JSON.stringify(i):i)||"",t[o]=s,t}),t)}),Object.create(null))}function f(e,t){return void 0===t&&(t=function(e){return e}),t(i(e).map((function(e){var t=u(e,2);return{fieldName:t[0],fieldValues:t[1]}})))}function p(e){var t=/,|"|\n/.test(e)?'"':"",n=e.replace(/"/g,'""');return"".concat(t).concat(n).concat(t)}var v={beforeTableEncode:function(e){return e},delimiter:","};var m={beforeTableEncode:function(e){return e}};function h(e,t){var n=l(l({},m),t).beforeTableEncode;if(!e.length)return"";var r='<html>\n  <head>\n    <meta charset="UTF-8" />\n  </head >\n  <body>\n    '.concat(function(e,t){a(e.length>0);var n=f(d(e),t),r=n.map((function(e){return e.fieldName})).join("</b></th><th><b>"),o=n.map((function(e){return e.fieldValues})).map((function(e){return e.map((function(e){return"<td>".concat(e,"</td>")}))})).reduce((function(e,t){return e.map((function(e,n){return"".concat(e).concat(t[n])}))}));return"\n    <table>\n      <thead>\n        <tr><th><b>".concat(r,"</b></th></tr>\n      </thead>\n      <tbody>\n        <tr>").concat(o.join("</tr>\n        <tr>"),"</tr>\n      </tbody>\n    </table>\n  ")}(e,n),"\n  </body>\n</html >\n");return r}function x(e){return'<?xml version="1.0" encoding="utf-8"?><!DOCTYPE base>\n'.concat(b(e,"base"),"\n")}function b(e,t,n,a){void 0===n&&(n="element"),void 0===a&&(a=0);var o,s=(o=t,"555xmlHello .  world!".trim().replace(/^([0-9,;]|(xml))+/,""),o.replace(/[^_a-zA-Z 0-9:\-\.]/g,"").replace(/^([ 0-9-:\-\.]|(xml))+/i,"").replace(/ +/g,"-")),c=function(e){return Array(e+1).join(" ")}(a);if(null===e||void 0===e)return"".concat(c,"<").concat(s," />");var l=r(e)?e.map((function(e){return b(e,n,n,a+2)})).join("\n"):"object"===typeof e?i(e).map((function(e){var t=u(e,2),r=t[0];return b(t[1],r,n,a+2)})).join("\n"):c+"  "+String(e).replace(/([<>&])/g,(function(e,t){switch(t){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";default:return""}}));return"".concat(c,"<").concat(s,">\n").concat(l,"\n").concat(c,"</").concat(s,">")}function g(e){var t=e.data,n=e.fileName,m=void 0===n?"download":n,b=e.extension,g=e.fileNameFormatter,j=void 0===g?function(e){return e.replace(/\s+/,"_")}:g,y=e.fields,C=e.exportType,Z=void 0===C?"txt":C,w=e.replacer,N=void 0===w?null:w,k=e.space,E=void 0===k?4:k,P=e.processor,R=void 0===P?c:P,S=e.withBOM,U=void 0!==S&&S,O=e.beforeTableEncode,T=void 0===O?function(e){return e}:O,D=e.delimiter,B=void 0===D?",":D,I="Invalid export data. Please provide an array of objects",L="Can't export unknown data type ".concat(Z,"."),F="Can't export string data to ".concat(Z,".");if("string"===typeof t)switch(Z){case"txt":case"css":case"html":return R(t,Z,s(m,null!==b&&void 0!==b?b:Z,j));default:throw new Error(F)}var H=function(e){if(!e||r(e)&&!e.length||!r(e)&&!o(e).length)return function(e){return e};var t=r(e)?e.reduce((function(e,t){var n;return l(l({},e),((n={})[t]=t,n))}),Object.create(null)):e;return function(e){return r(e)?e.map((function(e){return i(e).reduce((function(e,n){var r=u(n,2),a=r[0],o=r[1];return a in t&&(e[t[a]]=o),e}),Object.create(null))})).filter((function(e){return o(e).length})):i(e).reduce((function(e,n){var r=u(n,2),a=r[0],o=r[1];return a in t&&(e[t[a]]=o),e}),Object.create(null))}}(y),z=H(function(t){try{return"string"===typeof t?JSON.parse(t):t}catch(e){throw new Error("Invalid export data. Please provide a valid JSON")}}(t)),A=function(t,n,r){void 0===n&&(n=null);try{return JSON.stringify(t,n,r)}catch(e){throw new Error("Invalid export data. Please provide valid JSON object")}}(z,N,E);switch(Z){case"txt":case"css":case"html":return R(A,Z,s(m,null!==b&&void 0!==b?b:Z,j));case"json":return R(A,Z,s(m,null!==b&&void 0!==b?b:"json",j));case"csv":a(r(z),I);var G=function(e,t){void 0===t&&(t={});var n=l(l({},v),t),r=n.beforeTableEncode,a=n.delimiter;if(!e.length)return"";var o=f(d(e),r),i=o.map((function(e){return e.fieldName})).join(a)+"\r\n",s=o.map((function(e){return e.fieldValues})).map((function(e){return e.map(p)}));return i+s.reduce((function(e,t){return e.map((function(e,n){return"".concat(e).concat(a).concat(t[n])}))})).join("\r\n")}(z,{beforeTableEncode:T,delimiter:B});return R(U?"\ufeff"+G:G,Z,s(m,null!==b&&void 0!==b?b:"csv",j));case"xls":return a(r(z),I),R(h(z,{beforeTableEncode:T}),Z,s(m,null!==b&&void 0!==b?b:"xls",j));case"xml":return R(x(z),Z,s(m,null!==b&&void 0!==b?b:"xml",j));default:throw new Error(L)}}g.types={txt:"txt",css:"css",html:"html",json:"json",csv:"csv",xls:"xls",xml:"xml"},g.processors={downloadFile:c};var j=g}}]);
//# sourceMappingURL=2639.cf9b4dc9.chunk.js.map