import{R as a,j as e}from"./usa-map-HYk6JaHY.js";import"./d3--RtCTGgC.js";const i=({href:s,children:r,isExternal:t})=>e.jsx("li",{children:e.jsx("a",{href:s,target:t?"_blank":"_self",rel:t?"noopener noreferrer":"",className:"text-gray-600 hover:text-gray-900 block mb-1",children:r})}),o=({title:s,items:r})=>e.jsxs("div",{className:"flex-1 min-w-[200px] mb-4",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:s}),e.jsx("ul",{className:"list-none p-0",children:r.map((t,l)=>e.jsx(i,{href:t.href,isExternal:t.isExternal,children:t.label},l))})]}),n=()=>{const s=[{title:"About Us",items:[{label:"Our Mission",href:"#about"},{label:"Our Team",href:"#team"},{label:"Careers",href:"#careers"}]},{title:"Services",items:[{label:"Crime Data",href:"#data"},{label:"Reports",href:"#reports"},{label:"Resources",href:"#resources"}]},{title:"Links",items:[{label:"Privacy Policy",href:"#privacy"},{label:"Terms of Service",href:"#terms"},{label:"Contact Us",href:"#contact"}]},{title:"Follow Us",items:[{label:"X",href:"https://twitter.com",isExternal:!0},{label:"Facebook",href:"https://facebook.com",isExternal:!0},{label:"LinkedIn",href:"https://linkedin.com",isExternal:!0},{label:"Instagram",href:"https://instagram.com",isExternal:!0}]}];return e.jsxs("footer",{className:"bg-slate-200 text-gray-800 py-6 px-4 border-t border-gray-300",children:[e.jsx("div",{className:"container mx-auto flex flex-wrap justify-between",children:s.map((r,t)=>e.jsx(o,{title:r.title,items:r.items},t))}),e.jsx("div",{className:"text-center mt-6 border-t border-gray-300 pt-4",children:e.jsxs("p",{className:"text-sm text-gray-600",children:["© ",new Date().getFullYear()," Metin Isakhanli. All rights reserved."]})})]})},h=a.memo(n);export{h as default};
