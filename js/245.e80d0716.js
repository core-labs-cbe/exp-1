"use strict";(self["webpackChunkexp_1"]=self["webpackChunkexp_1"]||[]).push([[245],{3245:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var a=r(3396),i=r(7139),o=r(9242);const n=e=>((0,a.dD)("data-v-11bd1256"),e=e(),(0,a.Cn)(),e),l={class:"app"},d=n((()=>(0,a._)("div",{id:"snackbar"},"Some text some message..",-1))),s=n((()=>(0,a._)("header",{style:{padding:"20px"}},[(0,a._)("h1",null,"Step 3: Identifying conceptual classes and attributes"),(0,a._)("p",null,"To identify conceptual classes and related attributes, drag phrases from the bottom and place them in boxes. First phrase is the class name.")],-1))),c={class:"flex-horizontal"},g=["onDragstart"],v=["onDragstart"],u=["onDragstart"],p=["onDragstart"],D={class:"flexbox"},f=["Key","onDragstart"],h={id:"buttons",class:"relative"};function w(e,t,r,n,w,m){return(0,a.wg)(),(0,a.iD)("main",l,[d,s,(0,a._)("div",c,[(0,a._)("div",{class:(0,i.C_)(["drop-zone",{correct:w.validated&&w.valid[0],inCorrect:w.validated&&!w.valid[0],unidentified:!w.validated}]),onDrop:t[0]||(t[0]=e=>n.onDrop(e,6)),onDragenter:t[1]||(t[1]=(0,o.iM)((()=>{}),["prevent"])),onDragover:t[2]||(t[2]=(0,o.iM)((()=>{}),["prevent"]))},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.getList(6),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,class:"identified drag-el-horizontal",draggable:"true",onDragstart:t=>n.startDrag(t,e)},[(0,a._)("p",null,(0,i.zw)(e.word),1)],40,g)))),128))],34),(0,a._)("div",{class:(0,i.C_)(["drop-zone",{correct:w.validated&&w.valid[0],inCorrect:w.validated&&!w.valid[0],unidentified:!w.validated}]),onDrop:t[3]||(t[3]=e=>n.onDrop(e,7)),onDragenter:t[4]||(t[4]=(0,o.iM)((()=>{}),["prevent"])),onDragover:t[5]||(t[5]=(0,o.iM)((()=>{}),["prevent"]))},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.getList(7),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,class:"identified drag-el-horizontal",draggable:"true",onDragstart:t=>n.startDrag(t,e)},[(0,a._)("p",null,(0,i.zw)(e.word),1)],40,v)))),128))],34),(0,a._)("div",{class:(0,i.C_)(["drop-zone",{correct:w.validated&&w.valid[0],inCorrect:w.validated&&!w.valid[0],unidentified:!w.validated}]),onDrop:t[6]||(t[6]=e=>n.onDrop(e,8)),onDragenter:t[7]||(t[7]=(0,o.iM)((()=>{}),["prevent"])),onDragover:t[8]||(t[8]=(0,o.iM)((()=>{}),["prevent"]))},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.getList(8),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,class:"identified drag-el-horizontal",draggable:"true",onDragstart:t=>n.startDrag(t,e)},[(0,a._)("p",null,(0,i.zw)(e.word),1)],40,u)))),128))],34),(0,a._)("div",{class:(0,i.C_)(["drop-zone",{correct:w.validated&&w.valid[0],inCorrect:w.validated&&!w.valid[0],unidentified:!w.validated}]),onDrop:t[9]||(t[9]=e=>n.onDrop(e,9)),onDragenter:t[10]||(t[10]=(0,o.iM)((()=>{}),["prevent"])),onDragover:t[11]||(t[11]=(0,o.iM)((()=>{}),["prevent"]))},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.getList(9),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,class:"identified drag-el-horizontal",draggable:"true",onDragstart:t=>n.startDrag(t,e)},[(0,a._)("p",null,(0,i.zw)(e.word),1)],40,p)))),128))],34)]),(0,a._)("main",D,[(0,a._)("div",{class:"drop-zone-horizontal",onDrop:t[12]||(t[12]=e=>n.onDrop(e,1)),onDragenter:t[13]||(t[13]=(0,o.iM)((()=>{}),["prevent"])),onDragover:t[14]||(t[14]=(0,o.iM)((()=>{}),["prevent"]))},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.getList(1),(e=>((0,a.wg)(),(0,a.iD)("div",{Key:e.id,class:"drag-el-horizontal",draggable:"true",onDragstart:t=>n.startDrag(t,e)},[(0,a._)("p",null,(0,i.zw)(e.word),1)],40,f)))),256))],32)]),(0,a._)("footer",null,[(0,a._)("div",h,[(0,a._)("button",{class:"navitem",onClick:t[15]||(t[15]=e=>m.validate())},"Next")])])])}r(7658);var m=r(4870),_={setup(){const e=(0,m.iH)([{id:0,word:"Customer",list:1},{id:1,word:"Reservation",list:1},{id:2,word:"Clerk",list:1},{id:3,word:"Vehicle",list:1},{id:4,word:"Customer name",list:1},{id:5,word:"Office",list:1},{id:6,word:"Key",list:1},{id:7,word:"Vehicle reservation contract",list:1},{id:8,word:"Reservation number",list:1},{id:9,word:"Vehicle release date",list:1},{id:10,word:"Clerk name",list:1}]),t=t=>e.value.filter((e=>e.list===t)),r=(e,t)=>{console.log(t),e.dataTransfer.setData("itemID",t.id),e.dataTransfer.effectAllowed="move",e.dataTransfer.dropEffect="move"},a=(t,r)=>{t.preventDefault();const a=t.dataTransfer.getData("itemID"),i=e.value.find((e=>e.id===parseInt(a)));i.list=r};return{getList:t,startDrag:r,onDrop:a}},methods:{correct(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3)},incorrect(e){var t=document.getElementById("snackbar");t.innerHTML=e,t.style.backgroundColor="red",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},validate(){let e=[],t=0;for(t=6;t<10;t++)e.push(this.getList(t));console.log(e);for(let i=0;i<e.length;i++)if(0==e[i].length)return void this.incorrect("Please fill all the boxes");let r=0,a="";for(t=0;t<e.length;t++){let i="";for(r=0;r<e[t].length;r++)i=i+e[t][r].word+" ";a=a+i+" "}console.log(a),a.includes("Customer Customer name")&&a.includes("Reservation Vehicle reservation contract Reservation number Vehicle release date")&&a.includes("Clerk Office Clerk name")&&a.includes("Vehicle Key")?(this.correct(),this.$router.push("/screen-four")):this.incorrect("Incorrect")}},data(){return{valid:[!1,!1,!1,!1],validated:!1}}},b=r(89);const C=(0,b.Z)(_,[["render",w],["__scopeId","data-v-11bd1256"]]);var k=C}}]);
//# sourceMappingURL=245.e80d0716.js.map