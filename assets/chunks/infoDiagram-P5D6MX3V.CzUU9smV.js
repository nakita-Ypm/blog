import{_ as e,l as o,I as i,k as n,K as p}from"../app.CBzr5829.js";import{p as g}from"./gitGraph-YCYPL57B.DhFYuVXF.js";import"./framework.HlDq-tuG.js";import"./theme.B1pp47vG.js";import"./baseUniq.59kUYOQY.js";import"./basePickBy.DdhGreGY.js";import"./clone.0Wa-R8vC.js";var m={parse:e(async r=>{const a=await g("info",r);o.debug(a)},"parse")},v={version:p},d=e(()=>v.version,"getVersion"),c={getVersion:d},l=e((r,a,s)=>{o.debug(`rendering info diagram
`+r);const t=i(a);n(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${s}`)},"draw"),f={draw:l},D={parser:m,db:c,renderer:f};export{D as diagram};