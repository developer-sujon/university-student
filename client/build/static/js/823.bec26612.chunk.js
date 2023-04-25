"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[823],{283:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(3433),s=n(1413),r=n(5987),i=n(9439),l=n(2791),o=n(1358),c=n(1694),d=n.n(c),u=n(1087),p=n(6053),h=n(184),v=function(e){var t=e.tableProps,n=e.sizePerPageList,a=e.link,s=(0,l.useState)(t.pageCount),r=(0,i.Z)(s,2),o=r[0],c=r[1],v=(0,l.useState)(t.state.pageIndex),f=(0,i.Z)(v,2),x=f[0],m=f[1];(0,l.useEffect)((function(){c(t.pageCount),m(t.state.pageIndex)}),[t.pageCount,t.state.pageIndex]);var g=(0,l.useCallback)((function(e,t){return e.filter((function(e){return e<=o}))}),[o]),j=(0,l.useCallback)((function(e,t){return t<7?g([1,2,3,4,5,6],t):e%5>=0&&e>4&&e+2<t?[1,e-1,e,e+1,t]:e%5>=0&&e>4&&e+2>=t?[1,t-3,t-2,t-1,t]:[1,2,3,4,5,t]}),[g]),b=function(e){if(e!==x+1){var n=j(e,o);C(g(n,o)),t.gotoPage(e-1)}};(0,l.useEffect)((function(){var e=j(0,o);C(e)}),[o,j]);var Z=(0,l.useState)(j(0,o)),N=(0,i.Z)(Z,2),y=N[0],C=N[1],P=x+1;return(0,h.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[n.length>0&&(0,h.jsxs)("div",{className:"d-inline-block me-3",children:[(0,h.jsx)("label",{className:"me-1",children:"Display :"}),(0,h.jsx)("select",{value:t.state.pageSize,onChange:function(e){t.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:(n||[]).map((function(e,t){return(0,h.jsx)("option",{value:e.value,children:e.text},t)}))})]}),(0,h.jsxs)("span",{className:"me-3",children:["Page"," ",(0,h.jsxs)("strong",{children:[x+1," of ",t.pageOptions.length]})," "]}),(0,h.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[(0,h.jsx)("label",{children:"Go to page : "}),(0,h.jsx)("input",{type:"number",value:x+1,min:"1",onChange:function(e){var n=e.target.value?Number(e.target.value)-1:0;t.gotoPage(n),m(t.state.pageIndex)},className:"form-control w-25 ms-1 d-inline-block"})]}),(0,h.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,h.jsx)("li",{className:d()("page-item","paginate_button","previous",{disabled:1===P}),onClick:function(){1!==P&&b(P-1)},children:(0,h.jsx)(u.rU,{to:a,className:"page-link",children:(0,h.jsx)(p.Ugn,{})})},"prevpage"),(y||[]).map((function(e,t,n){return n[t-1]+1<e?(0,h.jsxs)(l.Fragment,{children:[(0,h.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,h.jsx)(u.rU,{to:a,className:"page-link",children:"..."})}),(0,h.jsx)("li",{className:d()("page-item","d-none","d-xl-inline-block",{active:P===e}),onClick:function(t){return b(e)},children:(0,h.jsx)(u.rU,{to:a,className:"page-link",children:e})})]},e):(0,h.jsx)("li",{className:d()("page-item","d-none","d-xl-inline-block",{active:P===e}),onClick:function(t){return b(e)},children:(0,h.jsx)(u.rU,{to:a,className:"page-link",children:e})},e)})),(0,h.jsx)("li",{className:d()("page-item","paginate_button","next",{disabled:P===t.pageCount}),onClick:function(){P!==t.pageCount&&b(P+1)},children:(0,h.jsx)(u.rU,{to:a,className:"page-link",children:(0,h.jsx)(p.ULj,{})})},"nextpage")]})]})},f=["indeterminate"],x=function(e){var t=e.preGlobalFilteredRows,n=e.globalFilter,a=e.setGlobalFilter,s=e.searchBoxClass,r=t.length,c=l.useState(n),u=(0,i.Z)(c,2),p=u[0],v=u[1],f=(0,o.useAsyncDebounce)((function(e){a(e||void 0)}),200);return(0,h.jsx)("div",{className:d()(s),children:(0,h.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",(0,h.jsx)("input",{value:p||"",onChange:function(e){v(e.target.value),f(e.target.value)},placeholder:"".concat(r," records..."),className:"form-control w-auto ms-1"})]})})},m=(0,l.forwardRef)((function(e,t){var n=e.indeterminate,a=(0,r.Z)(e,f),i=(0,l.useRef)(),o=t||i;return(0,l.useEffect)((function(){o.current.indeterminate=n}),[o,n]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"form-check",children:[(0,h.jsx)("input",(0,s.Z)({type:"checkbox",className:"form-check-input",ref:o},a)),(0,h.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),g=function(e){var t=e.isSearchable||!1,n=e.isSortable||!1,r=e.pagination||!1,i=e.isSelectable||!1,l=e.isExpandable||!1,c=(0,o.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},t&&o.useGlobalFilter,n&&o.useSortBy,l&&o.useExpanded,r&&o.usePagination,i&&o.useRowSelect,(function(e){i&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllPageRowsSelectedProps;return(0,h.jsx)("div",{children:(0,h.jsx)(m,(0,s.Z)({},t()))})},Cell:function(e){var t=e.row;return(0,h.jsx)("div",{children:(0,h.jsx)(m,(0,s.Z)({},t.getToggleRowSelectedProps()))})}}].concat((0,a.Z)(e))})),l&&e.visibleColumns.push((function(e){return[{id:"expander",Header:function(e){var t=e.getToggleAllRowsExpandedProps,n=e.isAllRowsExpanded;return(0,h.jsx)("span",(0,s.Z)((0,s.Z)({},t()),{},{children:n?"-":"+"}))},Cell:function(e){var t=e.row;return t.canExpand?(0,h.jsx)("span",(0,s.Z)((0,s.Z)({},t.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*t.depth,"rem")}})),{},{children:t.isExpanded?"-":"+"})):null}}].concat((0,a.Z)(e))}))})),u=r?c.page:c.rows;return(0,h.jsxs)(h.Fragment,{children:[t&&(0,h.jsx)(x,{preGlobalFilteredRows:c.preGlobalFilteredRows,globalFilter:c.state.globalFilter,setGlobalFilter:c.setGlobalFilter,searchBoxClass:e.searchBoxClass}),(0,h.jsx)("div",{className:"table-responsive",children:(0,h.jsxs)("table",(0,s.Z)((0,s.Z)({},c.getTableProps()),{},{className:d()("table table-centered react-table",e.tableClass),children:[(0,h.jsx)("thead",{className:e.theadClass,children:c.headerGroups.map((function(e){return(0,h.jsx)("tr",(0,s.Z)((0,s.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,h.jsx)("th",(0,s.Z)((0,s.Z)({},e.getHeaderProps(e.sort&&e.getSortByToggleProps())),{},{className:d()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")}))}))}))}))}),(0,h.jsx)("tbody",(0,s.Z)((0,s.Z)({},c.getTableBodyProps()),{},{children:(u||[]).map((function(e,t){return c.prepareRow(e),(0,h.jsx)("tr",(0,s.Z)((0,s.Z)({},e.getRowProps()),{},{children:e.cells.map((function(e){return(0,h.jsx)("td",(0,s.Z)((0,s.Z)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}),r&&(0,h.jsx)(v,{link:e.link,tableProps:c,sizePerPageList:e.sizePerPageList})]})}},1828:function(e,t,n){var a=n(1413),s=n(5671),r=n(3144),i=n(1830),l=n.n(i),o=n(6787),c=function(){function e(){(0,s.Z)(this,e)}return(0,r.Z)(e,null,[{key:"Delete",value:function(e,t){return l().fire({title:o.Z.t("Are you sure?"),text:o.Z.t("You won't be able to revert this!"),icon:o.Z.t("warning"),showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:o.Z.t("Cancel")}).then((function(n){if(n.isConfirmed)return t(e).then((function(e){if(e)return!0}))}))}},{key:"Update",value:function(e,t){return l().fire({title:"Do you want to enrolled courses?",showCancelButton:!0,confirmButtonText:"yes"}).then((function(n){if(n.isConfirmed)return t({coursesID:e}).then((function(e){return l().fire("enrolled!","","success"),window.location.reload(),e}));n.isDenied&&l().fire("Changes are not saved","","info")}))}},{key:"StatusUpdate",value:function(e,t,n){return l().fire({title:"Change Status",input:"select",inputOptions:{PENDING:"PENDING",REJECTED:"REJECTED",APPROVED:"APPROVED"}}).then((function(s){if(s.isConfirmed)return n({id:e,postBody:(0,a.Z)((0,a.Z)({},t),{},{status:s.value})}).then((function(e){return e}))}))}}]),e}();t.Z=c},5940:function(e,t,n){n.d(t,{EL:function(){return o},JS:function(){return d},_j:function(){return c},bt:function(){return l}});var a=n(4165),s=n(5861),r=n(7218),i=r.E.injectEndpoints({endpoints:function(e){return{scholarshipList:e.query({query:function(){return{url:"scholarship/scholarshipList",method:"GET"}}}),scholarshipCreate:e.mutation({query:function(e){return{url:"scholarship/scholarshipCreate",method:"POST",body:e}},onQueryStarted:function(e,t){return(0,s.Z)((0,a.Z)().mark((function e(){var n,s,i,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,s=t.queryFulfilled,e.prev=1,e.next=4,s;case 4:i=e.sent,l=i.data,n(r.E.util.updateQueryData("scholarshipList",void 0,(function(e){e.data.push(l.data)}))),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}),scholarshipUpdate:e.mutation({query:function(e){var t=e.id,n=e.postBody;return{url:"scholarship/scholarshipUpdate/".concat(t),method:"PATCH",body:n}},onQueryStarted:function(e,t){return(0,s.Z)((0,a.Z)().mark((function n(){var s,i,l,o,c,d;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=e.id,i=e.postBody,l=t.dispatch,o=t.queryFulfilled,n.prev=2,n.next=5,o;case 5:c=n.sent,d=c.data,l(r.E.util.updateQueryData("scholarshipList",void 0,(function(e){var t,n=e.data.findIndex((function(e){return e.id===s}));e.data[n].description=i.description,e.data[n].scholarshipType=i.scholarshipType,e.data[n].status=null===d||void 0===d||null===(t=d.data)||void 0===t?void 0:t.status,e.data[n].studentID=i.studentID,e.data[n].subject=i.subject}))),n.next=12;break;case 10:n.prev=10,n.t0=n.catch(2);case 12:case"end":return n.stop()}}),n,null,[[2,10]])})))()}}),scholarshipDelete:e.mutation({query:function(e){return{url:"scholarship/scholarshipDelete/".concat(e),method:"DELETE"}},onQueryStarted:function(e,t){return(0,s.Z)((0,a.Z)().mark((function n(){var s,i,l;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=t.dispatch,i=t.queryFulfilled,l=s(r.E.util.updateQueryData("scholarshipList",void 0,(function(t){t.data=t.data.filter((function(t){return t.id!==e}))}))),n.prev=2,n.next=5,i;case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),l.undo();case 10:case"end":return n.stop()}}),n,null,[[2,7]])})))()}})}}}),l=i.useScholarshipCreateMutation,o=i.useScholarshipListQuery,c=i.useScholarshipUpdateMutation,d=i.useScholarshipDeleteMutation},9823:function(e,t,n){n.r(t);var a=n(5987),s=n(9439),r=n(2791),i=n(5736),l=n(7798),o=n(2576),c=n(3360),d=n(7022),u=n(9140),p=n(9743),h=n(2677),v=n(4849),f=n(9230),x=n(8820),m=n(1087),g=n(9126),j=n(6053),b=n(1724),Z=n(5940),N=n(283),y=n(1828),C=n(396),P=n(184),D=["id","createdAt","updatedAt","studentID"];t.default=function(){var e,t=(0,r.useState)({}),n=(0,s.Z)(t,2),E=(n[0],n[1],(0,C.IQ)().data),k=(0,Z._j)(),S=(0,s.Z)(k,1)[0],w=(0,f.$G)().t,T=(0,Z.EL)(),I=T.data,R=T.isLoading,U=(0,Z.JS)(),A=(0,s.Z)(U,1)[0],G=(null===I||void 0===I?void 0:I.data)||[],B=[{Header:"#",accessor:function(e,t){return t+1},sort:!0},{Header:w("student id"),accessor:function(e){return(0,P.jsxs)("span",{className:"ms-1",children:[" ",e.studentID]})},sort:!0},{Header:w("subject"),accessor:function(e){return(0,P.jsxs)("span",{className:"ms-1",children:[" ",e.subject]})},sort:!0},{Header:w("scholarship type"),accessor:function(e){return(0,P.jsxs)("span",{className:"ms-1",children:[" ",e.scholarshipType]})},sort:!0},{Header:w("description"),accessor:function(e){return(0,P.jsxs)("span",{className:"ms-1",children:[" ",e.description]})},sort:!0},{Header:w("status"),accessor:function(e){return(0,P.jsx)("div",{className:"bodySmall",children:"PENDING"===(null===e||void 0===e?void 0:e.status)?(0,P.jsx)(i.Z,{bg:"primary",pill:!0,children:(0,P.jsx)("span",{className:"ms-1",children:w(null===e||void 0===e?void 0:e.status)})}):"REJECTED"===(null===e||void 0===e?void 0:e.status)?(0,P.jsx)(i.Z,{bg:"danger",pill:!0,children:(0,P.jsx)("span",{className:"ms-1",children:w(null===e||void 0===e?void 0:e.status)})}):"APPROVED"===(null===e||void 0===e?void 0:e.status)?(0,P.jsx)(i.Z,{bg:"success",pill:!0,children:(0,P.jsx)("span",{className:"ms-1",children:w(null===e||void 0===e?void 0:e.status)})}):""})},sort:!0},{Header:w("action"),accessor:function(e){var t,n,s,r,i;return(0,P.jsxs)("div",{className:"bodySmall",children:["STUDENT"!==(null===E||void 0===E||null===(t=E.data)||void 0===t?void 0:t.role)&&(0,P.jsx)(l.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,P.jsx)(o.Z,{id:"button-tooltip",children:w("status")}),children:(0,P.jsx)(c.Z,{className:"mr-10",variant:"warning",style:{padding:"5px 10px"},onClick:function(){return function(e){var t=e.id,n=(e.createdAt,e.updatedAt,e.studentID,(0,a.Z)(e,D));y.Z.StatusUpdate(t,n,S)}(e)},children:(0,P.jsx)(j.aXP,{})})}),(0,P.jsx)(l.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,P.jsx)(o.Z,{id:"button-tooltip",children:w("edit")}),children:(0,P.jsx)(m.rU,{to:"/scholarship-create-update?id=".concat(null===e||void 0===e?void 0:e.id),onClick:function(t){var n,a;return"PENDING"!==(null===e||void 0===e?void 0:e.status)&&"STUDENT"===(null===E||void 0===E||null===(n=E.data)||void 0===n?void 0:n.role)||"ADMIN"===(null===E||void 0===E||null===(a=E.data)||void 0===a?void 0:a.role)?t.preventDefault():void 0},children:(0,P.jsx)(c.Z,{variant:"primary",style:{padding:"5px 10px"},className:"me-1",disabled:"PENDING"!==(null===e||void 0===e?void 0:e.status)&&"STUDENT"===(null===E||void 0===E||null===(n=E.data)||void 0===n?void 0:n.role)||"ADMIN"===(null===E||void 0===E||null===(s=E.data)||void 0===s?void 0:s.role),children:(0,P.jsx)(x.$iz,{})})})}),(0,P.jsx)(l.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,P.jsx)(o.Z,{id:"button-tooltip",children:w("delete")}),children:(0,P.jsx)(c.Z,{variant:"danger",style:{padding:"5px 10px"},onClick:function(){return t=e.id,void y.Z.Delete(t,A);var t},disabled:"PENDING"!==(null===e||void 0===e?void 0:e.status)&&"STUDENT"===(null===E||void 0===E||null===(r=E.data)||void 0===r?void 0:r.role)||"ADMIN"===(null===E||void 0===E||null===(i=E.data)||void 0===i?void 0:i.role),children:(0,P.jsx)(g.yvY,{})})})]})}}],F=[{text:w("5"),value:5},{text:w("10"),value:10},{text:w("25"),value:25},{text:w("all"),value:null===G||void 0===G?void 0:G.length}];return(0,P.jsx)(b.Z,{children:(0,P.jsx)(d.Z,{children:(0,P.jsx)(u.Z,{children:(0,P.jsx)(u.Z.Body,{children:(0,P.jsxs)(p.Z,{children:[(0,P.jsxs)(h.Z,{className:"d-flex justify-content-between p-2",sm:12,children:[(0,P.jsx)("h5",{children:w("scholarship")}),(0,P.jsx)(m.rU,{to:"/scholarship-create-update",onClick:function(e){var t;return"ADMIN"===(null===E||void 0===E||null===(t=E.data)||void 0===t?void 0:t.role)?e.preventDefault():void 0},children:(0,P.jsx)(c.Z,{size:"sm",variant:"primary",disabled:"ADMIN"===(null===E||void 0===E||null===(e=E.data)||void 0===e?void 0:e.role),children:w("create scholarship")})})]}),(0,P.jsx)(h.Z,{sm:12,children:R?(0,P.jsx)(v.Z,{size:"lg",variant:"primary"}):null!==G&&void 0!==G&&G.length?(0,P.jsx)(N.Z,{columns:B,data:G,pageSize:5,sizePerPageList:F,isSortable:!0,pagination:!0}):w("no data found")})]})})})})})}},5736:function(e,t,n){var a=n(1413),s=n(5987),r=n(1694),i=n.n(r),l=n(2791),o=n(162),c=n(184),d=["bsPrefix","bg","pill","text","className","as"],u=l.forwardRef((function(e,t){var n=e.bsPrefix,r=e.bg,l=e.pill,u=e.text,p=e.className,h=e.as,v=void 0===h?"span":h,f=(0,s.Z)(e,d),x=(0,o.vE)(n,"badge");return(0,c.jsx)(v,(0,a.Z)((0,a.Z)({ref:t},f),{},{className:i()(p,x,l&&"rounded-pill",u&&"text-".concat(u),r&&"bg-".concat(r))}))}));u.displayName="Badge",u.defaultProps={bg:"primary",pill:!1},t.Z=u}}]);
//# sourceMappingURL=823.bec26612.chunk.js.map