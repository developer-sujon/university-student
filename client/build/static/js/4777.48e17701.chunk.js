"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[4777],{283:function(e,n,a){a.d(n,{Z:function(){return j}});var s=a(3433),t=a(1413),l=a(5987),r=a(9439),i=a(2791),c=a(1358),o=a(1694),d=a.n(o),u=a(1087),p=a(6053),g=a(184),m=function(e){var n=e.tableProps,a=e.sizePerPageList,s=e.link,t=(0,i.useState)(n.pageCount),l=(0,r.Z)(t,2),c=l[0],o=l[1],m=(0,i.useState)(n.state.pageIndex),x=(0,r.Z)(m,2),h=x[0],f=x[1];(0,i.useEffect)((function(){o(n.pageCount),f(n.state.pageIndex)}),[n.pageCount,n.state.pageIndex]);var j=(0,i.useCallback)((function(e,n){return e.filter((function(e){return e<=c}))}),[c]),b=(0,i.useCallback)((function(e,n){return n<7?j([1,2,3,4,5,6],n):e%5>=0&&e>4&&e+2<n?[1,e-1,e,e+1,n]:e%5>=0&&e>4&&e+2>=n?[1,n-3,n-2,n-1,n]:[1,2,3,4,5,n]}),[j]),v=function(e){if(e!==h+1){var a=b(e,c);C(j(a,c)),n.gotoPage(e-1)}};(0,i.useEffect)((function(){var e=b(0,c);C(e)}),[c,b]);var Z=(0,i.useState)(b(0,c)),N=(0,r.Z)(Z,2),k=N[0],C=N[1],P=h+1;return(0,g.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[a.length>0&&(0,g.jsxs)("div",{className:"d-inline-block me-3",children:[(0,g.jsx)("label",{className:"me-1",children:"Display :"}),(0,g.jsx)("select",{value:n.state.pageSize,onChange:function(e){n.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:(a||[]).map((function(e,n){return(0,g.jsx)("option",{value:e.value,children:e.text},n)}))})]}),(0,g.jsxs)("span",{className:"me-3",children:["Page"," ",(0,g.jsxs)("strong",{children:[h+1," of ",n.pageOptions.length]})," "]}),(0,g.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[(0,g.jsx)("label",{children:"Go to page : "}),(0,g.jsx)("input",{type:"number",value:h+1,min:"1",onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;n.gotoPage(a),f(n.state.pageIndex)},className:"form-control w-25 ms-1 d-inline-block"})]}),(0,g.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,g.jsx)("li",{className:d()("page-item","paginate_button","previous",{disabled:1===P}),onClick:function(){1!==P&&v(P-1)},children:(0,g.jsx)(u.rU,{to:s,className:"page-link",children:(0,g.jsx)(p.Ugn,{})})},"prevpage"),(k||[]).map((function(e,n,a){return a[n-1]+1<e?(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,g.jsx)(u.rU,{to:s,className:"page-link",children:"..."})}),(0,g.jsx)("li",{className:d()("page-item","d-none","d-xl-inline-block",{active:P===e}),onClick:function(n){return v(e)},children:(0,g.jsx)(u.rU,{to:s,className:"page-link",children:e})})]},e):(0,g.jsx)("li",{className:d()("page-item","d-none","d-xl-inline-block",{active:P===e}),onClick:function(n){return v(e)},children:(0,g.jsx)(u.rU,{to:s,className:"page-link",children:e})},e)})),(0,g.jsx)("li",{className:d()("page-item","paginate_button","next",{disabled:P===n.pageCount}),onClick:function(){P!==n.pageCount&&v(P+1)},children:(0,g.jsx)(u.rU,{to:s,className:"page-link",children:(0,g.jsx)(p.ULj,{})})},"nextpage")]})]})},x=["indeterminate"],h=function(e){var n=e.preGlobalFilteredRows,a=e.globalFilter,s=e.setGlobalFilter,t=e.searchBoxClass,l=n.length,o=i.useState(a),u=(0,r.Z)(o,2),p=u[0],m=u[1],x=(0,c.useAsyncDebounce)((function(e){s(e||void 0)}),200);return(0,g.jsx)("div",{className:d()(t),children:(0,g.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",(0,g.jsx)("input",{value:p||"",onChange:function(e){m(e.target.value),x(e.target.value)},placeholder:"".concat(l," records..."),className:"form-control w-auto ms-1"})]})})},f=(0,i.forwardRef)((function(e,n){var a=e.indeterminate,s=(0,l.Z)(e,x),r=(0,i.useRef)(),c=n||r;return(0,i.useEffect)((function(){c.current.indeterminate=a}),[c,a]),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"form-check",children:[(0,g.jsx)("input",(0,t.Z)({type:"checkbox",className:"form-check-input",ref:c},s)),(0,g.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),j=function(e){var n=e.isSearchable||!1,a=e.isSortable||!1,l=e.pagination||!1,r=e.isSelectable||!1,i=e.isExpandable||!1,o=(0,c.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},n&&c.useGlobalFilter,a&&c.useSortBy,i&&c.useExpanded,l&&c.usePagination,r&&c.useRowSelect,(function(e){r&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var n=e.getToggleAllPageRowsSelectedProps;return(0,g.jsx)("div",{children:(0,g.jsx)(f,(0,t.Z)({},n()))})},Cell:function(e){var n=e.row;return(0,g.jsx)("div",{children:(0,g.jsx)(f,(0,t.Z)({},n.getToggleRowSelectedProps()))})}}].concat((0,s.Z)(e))})),i&&e.visibleColumns.push((function(e){return[{id:"expander",Header:function(e){var n=e.getToggleAllRowsExpandedProps,a=e.isAllRowsExpanded;return(0,g.jsx)("span",(0,t.Z)((0,t.Z)({},n()),{},{children:a?"-":"+"}))},Cell:function(e){var n=e.row;return n.canExpand?(0,g.jsx)("span",(0,t.Z)((0,t.Z)({},n.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*n.depth,"rem")}})),{},{children:n.isExpanded?"-":"+"})):null}}].concat((0,s.Z)(e))}))})),u=l?o.page:o.rows;return(0,g.jsxs)(g.Fragment,{children:[n&&(0,g.jsx)(h,{preGlobalFilteredRows:o.preGlobalFilteredRows,globalFilter:o.state.globalFilter,setGlobalFilter:o.setGlobalFilter,searchBoxClass:e.searchBoxClass}),(0,g.jsx)("div",{className:"table-responsive",children:(0,g.jsxs)("table",(0,t.Z)((0,t.Z)({},o.getTableProps()),{},{className:d()("table table-centered react-table",e.tableClass),children:[(0,g.jsx)("thead",{className:e.theadClass,children:o.headerGroups.map((function(e){return(0,g.jsx)("tr",(0,t.Z)((0,t.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,g.jsx)("th",(0,t.Z)((0,t.Z)({},e.getHeaderProps(e.sort&&e.getSortByToggleProps())),{},{className:d()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")}))}))}))}))}),(0,g.jsx)("tbody",(0,t.Z)((0,t.Z)({},o.getTableBodyProps()),{},{children:(u||[]).map((function(e,n){return o.prepareRow(e),(0,g.jsx)("tr",(0,t.Z)((0,t.Z)({},e.getRowProps()),{},{children:e.cells.map((function(e){return(0,g.jsx)("td",(0,t.Z)((0,t.Z)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}),l&&(0,g.jsx)(m,{link:e.link,tableProps:o,sizePerPageList:e.sizePerPageList})]})}},4777:function(e,n,a){a.r(n);a(2791);var s=a(7022),t=a(9140),l=a(9743),r=a(2677),i=a(4849),c=a(9230),o=a(1724),d=a(283),u=a(396),p=a(184);n.default=function(){var e=(0,c.$G)().t,n=(0,u.wv)(),a=n.data,g=n.isLoading,m=[{Header:"#",accessor:function(e,n){return n+1},sort:!0},{Header:e("student id"),accessor:function(e){return(0,p.jsxs)("span",{className:"ms-1",children:[" ",e.id]})},sort:!0},{Header:e("name"),accessor:function(e){return(0,p.jsxs)("span",{className:"ms-1",children:[" ",e.name]})},sort:!0},{Header:e("email"),accessor:function(e){return(0,p.jsxs)("span",{className:"ms-1",children:[" ",e.email]})},sort:!0},{Header:e("address"),accessor:function(e){return(0,p.jsxs)("span",{className:"ms-1",children:[" ",e.address]})},sort:!0}],x=[{text:e("5"),value:5},{text:e("10"),value:10},{text:e("25"),value:25},{text:e("all"),value:null===a||void 0===a?void 0:a.length}];return(0,p.jsx)(o.Z,{children:(0,p.jsx)(s.Z,{children:(0,p.jsx)(t.Z,{children:(0,p.jsx)(t.Z.Body,{children:(0,p.jsx)(l.Z,{children:(0,p.jsx)(r.Z,{sm:12,children:g?(0,p.jsx)(i.Z,{size:"lg",variant:"primary"}):null!==a&&void 0!==a&&a.length?(0,p.jsx)(d.Z,{columns:m,data:a,pageSize:5,sizePerPageList:x,isSortable:!0,pagination:!0}):e("no data found")})})})})})})}}}]);
//# sourceMappingURL=4777.48e17701.chunk.js.map