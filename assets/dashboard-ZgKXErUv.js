import{r as a,_ as l,j as e,c as d,s as m}from"./usa-map-HYk6JaHY.js";import"./d3--RtCTGgC.js";const p=a.lazy(()=>l(()=>import("./PieChart-Xs70joK_.js"),__vite__mapDeps([0,1,2]))),o=a.lazy(()=>l(()=>import("./usa-map-HYk6JaHY.js").then(s=>s.e),__vite__mapDeps([1,2]))),j=({data:s})=>{const[r,i]=a.useState(2019),[n,c]=a.useState("California"),u=a.useMemo(()=>[...new Set(s.map(t=>t.year))],[s]),x=t=>i(t.target.value),h=t=>c(t.target.value);return e.jsx("div",{className:"flex flex-col items-center justify-center p-5",children:e.jsxs(a.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:[e.jsx(p,{data:s,year:r,state:n,categoryTranslations:d}),e.jsxs("div",{className:"flex flex-row w-full gap-10",children:[e.jsx(o,{label:"Şehir seçin",onChange:x,options:u,value:r}),e.jsx(o,{label:"Eyalet seçin",onChange:h,options:m,value:n})]})]})})};export{j as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PieChart-Xs70joK_.js","assets/usa-map-HYk6JaHY.js","assets/d3--RtCTGgC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}