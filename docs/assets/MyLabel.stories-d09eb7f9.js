import{j as z}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const c=({label:e="No Label",size:M="normal",allCaps:x=!1,color:I="primary",fontColor:S=""})=>z.jsx("span",{className:`label ${M} text-${I}`,style:{color:S},children:x?e.toUpperCase():e});try{c.displayName="MyLabel",c.__docgenInfo={description:"",displayName:"MyLabel",props:{allCaps:{defaultValue:{value:"false"},description:"Is this all capitalize label",name:"allCaps",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"No Label"},description:"Is this is message in label",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Is this size of label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},color:{defaultValue:{value:"primary"},description:"Is this color label",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:{value:""},description:"Is this font color label",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const j={title:"UI/MyLabel",component:c,tags:["autodocs"],argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}},t=e=>z.jsx(c,{...e}),a=t.bind({});a.args={size:"normal",allCaps:!1};const r=t.bind({});r.args={size:"normal",allCaps:!0};const s=t.bind({});s.args={size:"normal",color:"secondary"};const o=t.bind({});o.args={size:"normal",color:"tertiary"};const l=t.bind({});l.args={size:"h1",fontColor:"#5517ac"};var n,i,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"args => <MyLabel {...args} />",...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"args => <MyLabel {...args} />",...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,g,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"args => <MyLabel {...args} />",...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,C,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"args => <MyLabel {...args} />",...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var L,h,_;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:"args => <MyLabel {...args} />",...(_=(h=l.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const T=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{r as AllCaps,a as Basic,l as CustomFontColor,s as Secondary,o as Tertiary,T as __namedExportsOrder,j as default};
//# sourceMappingURL=MyLabel.stories-d09eb7f9.js.map