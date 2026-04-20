/* ─────────────────────────────────────────────
   i18n
───────────────────────────────────────────── */
const D={
  EN:{appTitle:"Uma Musume - Specialty Priority Tester",warnTitle:"Notice",warnBody:"The RNG simulation in this tool may not be 100% accurate. The in-game RNG system may be more complex than what can be replicated in a browser. While I have personally tested it against real in-game results and confirmed it can be used as a reference, please apply your own judgment. Thank you.",spCardTitle:"Specialty Priority Calculator",spFormula:"Formula: (100+SP)×UniqueEffect×100 ÷ [(100×4+50)+(100+SP×UniqueEffect)]",spLblSP:"Specialty Priority (SP)",spLblUE:"Unique Effect Bonus (%)",spLblRes:"Result",s1Title:"Solo Rainbow Test",s1Pct:"Rainbow Training Chance (%)",lblCells:"Active Cells",lblRuns:"Test Runs",btnRoll:"Roll",btnReset:"Reset",btnRollC:"Roll Combined",sumTitle:"Total Summary",lbRb:"Rainbow Training",lbOt:"Other Training",lbNo:"Not in Any Training",lbTot:"Total Rolled",s2Title:"Combined Test (5 Slots)",slotSettings:"Slot Settings",slotSumTitle:"Per-Slot Summary",grandTotal:"Grand Total",eyeLbl:"Filter by Slot Color:",simTitle:"10,000-Run Simulation",thCount:"Count",thBar:"Bar",resultHint:"Tap to lock/unlock",holdHint:"Hold a cell to see details",slotActive:"Active",slotRb:"Rainbow Chance (%)",slotCells:"Active Cells",slotColor:"Color",pRolling:"Rolling",pSim:"Running 10,000 sim…",pDone:"Done!",ttLocked:"(Locked)",ttRb:"Rainbow training",ttOt:"Other training",ttNo:"Not in any training",grJ:"Junior",grC:"Classic",grS:"Senior + URA",M:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],hE:"Early",hL:"Late",ura:["URA Early","URA Late","FINAL"],presetTitle:"Character Lock RNG Presets",presetApply:"Apply → Lock Goals"},
  TH:{appTitle:"Uma Musume - Specialty Priority Tester",warnTitle:"คำเตือน",warnBody:"การสุ่ม RNG ในเว็บนี้ไม่ได้มีความถูกต้องแบบ 100% เพราะภายในเกมระบบ RNG \"อาจจะ\" ซับซ้อนมากกว่าในระบบเว็บไซต์ จึงมีโอกาสที่จะผิดพลาดได้ ถึงแม้ตัวผมจะทำการทดสอบจากในเกมโดยตรงมาแล้วว่าสามารถใช้เพื่ออ้างอิงได้ แต่ได้โปรดใช้วิจารณญาณในการใช้งาน ขอบคุณครับ",spCardTitle:"คำนวณ Specialty Priority",spFormula:"สูตร: (100+SP)×UniqueEffect×100 ÷ [(100×4+50)+(100+SP×UniqueEffect)]",spLblSP:"Specialty Priority (SP)",spLblUE:"Unique Effect โบนัส (%)",spLblRes:"ผลลัพธ์",s1Title:"ทดสอบการฝึกรุ้งแบบเดี่ยว",s1Pct:"เปอร์เซนต์ตกการฝึกรุ้ง (%)",lblCells:"จำนวนช่องที่สุ่ม",lblRuns:"จำนวนรอบ",btnRoll:"เริ่มสุ่ม",btnReset:"รีเซต",btnRollC:"เริ่มสุ่มรวม",sumTitle:"สรุปรวม",lbRb:"การฝึกรุ้ง",lbOt:"การฝึกอื่น",lbNo:"ไม่ตกการฝึกใดเลย",lbTot:"สุ่มทั้งหมด",s2Title:"ทดสอบแบบรวม (5 ส่วน)",slotSettings:"ตั้งค่า 5 ส่วน",slotSumTitle:"สรุปแต่ละส่วน",grandTotal:"รวมทั้งหมด",eyeLbl:"กรองตามสีส่วน:",simTitle:"จำลอง 10,000 รอบ",thCount:"ครั้ง",thBar:"กราฟ",resultHint:"แตะเพื่อล็อค/ปลดล็อค",holdHint:"กดค้างที่ช่องเพื่อดูรายละเอียด",slotActive:"ใช้งาน",slotRb:"เปอร์เซนต์รุ้ง (%)",slotCells:"ช่องที่สุ่ม",slotColor:"สี",pRolling:"กำลังสุ่ม",pSim:"กำลังจำลอง 10,000 รอบ…",pDone:"เสร็จแล้ว!",ttLocked:"(ล็อก)",ttRb:"ตกการฝึกรุ้ง",ttOt:"ตกการฝึกอื่น",ttNo:"ไม่ตกการฝึกใดเลย",grJ:"จูเนียร์",grC:"คลาสสิก",grS:"ซีเนียร์ + URA",M:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],hE:"ต้น",hL:"ปลาย",ura:["URA ต้น","URA ปลาย","FINAL"],presetTitle:"เซ็ตล็อคช่องฝึกตามตัวละคร",presetApply:"ใช้ → ล็อค Goal"},
  JP:{appTitle:"Uma Musume - 得意率アップ計算機",warnTitle:"ご注意",warnBody:"このツールのRNGシミュレーションは100%正確ではない場合があります。ゲーム内のRNGシステムはブラウザ上で再現できるものより複雑な可能性があります。実際のゲームで検証した結果、参考として使用できることは確認済みですが、ご自身の判断でご利用ください。ありがとうございます。",spCardTitle:"得意率アップ計算機",spFormula:"計算式: (100+得意率)×固有効果×100 ÷ [(100×4+50)+(100+得意率×固有効果)]",spLblSP:"得意率アップ (SP)",spLblUE:"固有効果 得意率アップ (%)",spLblRes:"結果",s1Title:"虹枠単独テスト",s1Pct:"得意練習（虹枠）確率 (%)",lblCells:"有効マス数",lblRuns:"テスト回数",btnRoll:"抽選",btnReset:"リセット",btnRollC:"複合抽選",sumTitle:"合計サマリー",lbRb:"得意練習（虹枠）",lbOt:"その他の練習",lbNo:"どこにも現れず",lbTot:"総抽選数",s2Title:"複合テスト (5スロット)",slotSettings:"スロット設定",slotSumTitle:"スロット別サマリー",grandTotal:"総合計",eyeLbl:"スロット色でフィルター:",simTitle:"1万回シミュレーション",thCount:"回数",thBar:"グラフ",resultHint:"マスをクリックしてロック/解除",holdHint:"セルを長押しして詳細表示",slotActive:"有効",slotRb:"得意練習確率 (%)",slotCells:"有効マス数",slotColor:"カラー",pRolling:"抽選中",pSim:"1万回シミュレーション実行中…",pDone:"完了!",ttLocked:"(ロック)",ttRb:"得意練習（虹枠）",ttOt:"その他の練習",ttNo:"どこにも現れず",grJ:"ジュニア",grC:"クラシック",grS:"シニア + URA",M:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],hE:"前半",hL:"後半",ura:["URA前半","URA後半","FINAL"],presetTitle:"キャラクターロックプリセット",presetApply:"適用→ゴールロック"},
};
let L="EN";
function t(k){return D[L][k]??D.EN[k]??k;}

/* ─────────────────────────────────────────────
   LOCAL STORAGE
───────────────────────────────────────────── */
const LS="uma_prefs_v1";
function savePrefs(){
  try{
    const p={lang:L,theme:window._theme||"blue",customHex:document.getElementById("ccolor")?.value||"#1a6eb5",noticeDismissed:document.getElementById("notice")?.style.display==="none",spv:document.getElementById("spv")?.value||"80",uev:document.getElementById("uev")?.value||"20",s1pct:document.getElementById("s1pct")?.value||"18.18",slots:slotData.map(s=>({n:s.n,c:s.c,pct:s.pct,en:s.en})),locks:SL.reduce((a,v,i)=>{if(v)a.push(i);return a;},[])};
    localStorage.setItem(LS,JSON.stringify(p));
  }catch(e){}
}
function loadPrefs(){
  try{
    const raw=localStorage.getItem(LS);if(!raw)return;const p=JSON.parse(raw);
    if(p.lang&&D[p.lang])L=p.lang;
    if(p.noticeDismissed){const n=document.getElementById("notice");if(n)n.style.display="none";}
    if(p.spv){const el=document.getElementById("spv");if(el)el.value=p.spv;}
    if(p.uev){const el=document.getElementById("uev");if(el)el.value=p.uev;}
    if(p.s1pct){const el=document.getElementById("s1pct");if(el)el.value=p.s1pct;}
    if(p.slots&&Array.isArray(p.slots)){p.slots.forEach((s,i)=>{if(slotData[i]){slotData[i].n=s.n;slotData[i].c=s.c;slotData[i].pct=s.pct;slotData[i].en=s.en;}});}
    if(p.locks&&Array.isArray(p.locks)){p.locks.forEach(gi=>{if(gi>=0&&gi<TC)SL[gi]=true;});}
    if(p.theme==="custom"&&p.customHex){const cc=document.getElementById("ccolor");if(cc)cc.value=p.customHex;applyCustomSilent(p.customHex);}
    else if(p.theme){applyThemeSilent(p.theme);}
    document.querySelectorAll(".ltab").forEach(el=>el.classList.toggle("on",el.textContent.trim()===L));
  }catch(e){}
}
function closeNotice(){const n=document.getElementById("notice");if(n)n.style.display="none";savePrefs();}

/* ─────────────────────────────────────────────
   LANG
───────────────────────────────────────────── */
function setLang(l){L=l;document.querySelectorAll(".ltab").forEach(el=>el.classList.toggle("on",el.textContent.trim()===l));renderAll();savePrefs();}
function renderAll(){
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
  calcSP();buildSlotCfg();if(document.getElementById("sg1"))buildSGrid("sg1");
  document.querySelectorAll("[data-cgi]").forEach(el=>el.textContent=shortLbl(+el.dataset.cgi));
  document.querySelectorAll("[data-rg]").forEach(el=>el.textContent=t(el.dataset.rg==="j"?"grJ":el.dataset.rg==="c"?"grC":"grS"));
  document.querySelectorAll(".rhint").forEach(el=>el.textContent=t("resultHint"));
  document.querySelectorAll("[data-rs]").forEach(el=>{const d=JSON.parse(el.dataset.rs);el.innerHTML=`${t("lbRb")}: <b>${d.rb}</b> | ${t("lbOt")}: <b>${d.ot}</b> | ${t("lbNo")}: <b>${d.no}</b>`;});
  document.querySelectorAll("[data-sk]").forEach(el=>el.textContent=t(el.dataset.sk));
  buildEye();updateCnt();_buildCG();
  // re-render banner name if char selected
  if(_selC) _updateBannerText(_selC);
}

/* ─────────────────────────────────────────────
   THEMES
───────────────────────────────────────────── */
const TH2={blue:{c2:"#1a6eb5",c4:"#0d4f8a",c3:"#d0e8f7",bg:"#f0f6fc",sur:"#fff",bdr:"#b8d4ed",tx:"#0d2137",tx2:"#4a6080"},pink:{c2:"#c03070",c4:"#8a1a50",c3:"#f7d0e5",bg:"#fcf0f6",sur:"#fff",bdr:"#edadd0",tx:"#370d22",tx2:"#803a60"},green:{c2:"#1a7a3c",c4:"#0d5a28",c3:"#d0f7e0",bg:"#f0fcf4",sur:"#fff",bdr:"#b8edd0",tx:"#0d2118",tx2:"#3a6050"},purple:{c2:"#6a2eb5",c4:"#4a1a8a",c3:"#e4d0f7",bg:"#f6f0fc",sur:"#fff",bdr:"#d4b8ed",tx:"#1a0d37",tx2:"#603a80"},orange:{c2:"#b85c1a",c4:"#8a3e0d",c3:"#f7e2d0",bg:"#fcf4f0",sur:"#fff",bdr:"#edc8b8",tx:"#371a0d",tx2:"#805a3a"},dark:{c2:"#4a90d9",c4:"#2a70b9",c3:"#1e2e42",bg:"#111827",sur:"#1a2535",bdr:"#2a3a50",tx:"#e0eaf5",tx2:"#7a9abf"}};
function applyThemeSilent(n){const th=TH2[n];if(!th)return;window._theme=n;Object.entries(th).forEach(([k,v])=>document.documentElement.style.setProperty("--"+k,v));}
function applyTheme(n){applyThemeSilent(n);savePrefs();}
function applyCustomSilent(hex){window._theme="custom";const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);document.documentElement.style.setProperty("--c2",hex);document.documentElement.style.setProperty("--c4",`rgb(${Math.max(0,r-40)},${Math.max(0,g-40)},${Math.max(0,b-40)})`);document.documentElement.style.setProperty("--c3",`rgba(${r},${g},${b},0.2)`);}
function applyCustom(hex){applyCustomSilent(hex);savePrefs();}
function toggleTP(){document.getElementById("tp").classList.toggle("open");}
function toggleSec(id){const b=document.getElementById(id+"-body"),a=document.getElementById(id+"-arr");if(!b)return;const h=b.classList.toggle("hidden");if(a)a.textContent=h?"+ Show":"- Hide";}

/* ─────────────────────────────────────────────
   SP CALC
───────────────────────────────────────────── */
function calcSP(){
  const sp=parseFloat(document.getElementById("spv").value)||0,ue=parseFloat(document.getElementById("uev").value)||0;
  const eff=1+ue/100,num=(100+sp)*eff*100,den=(100*4+50)+(100+sp*eff),res=num/den;
  document.getElementById("sp-res").innerHTML=`eff = <b style="color:#1a6eb5">${eff.toFixed(2)}</b> | <span class="sp-pct">${res.toFixed(2)}%</span>`;
  document.getElementById("sp-steps").textContent=`= (100+${sp})×${eff.toFixed(2)}×100 ÷ [(450)+(100+${sp}×${eff.toFixed(2)})]\n= ${num.toFixed(1)} ÷ ${den.toFixed(2)} ≈ ${res.toFixed(4)}%`;
}

/* ─────────────────────────────────────────────
   GRID DEFINITIONS
───────────────────────────────────────────── */
function jrCells(){return[{t:"m",m:3,h:0},{t:"m",m:3,h:0},{t:"m",m:3,h:1},{t:"m",m:3,h:1},{t:"m",m:4,h:0},{t:"m",m:4,h:0},{t:"m",m:4,h:1},{t:"m",m:4,h:1},{t:"m",m:5,h:0},{t:"m",m:5,h:0},{t:"m",m:5,h:1},{t:"m",m:5,h:1},{t:"m",m:6,h:0},{t:"m",m:6,h:1},{t:"m",m:7,h:0},{t:"m",m:7,h:1},{t:"m",m:8,h:0},{t:"m",m:8,h:1},{t:"m",m:9,h:0},{t:"m",m:9,h:1},{t:"m",m:10,h:0},{t:"m",m:10,h:1},{t:"m",m:11,h:0},{t:"m",m:11,h:1}];}
function mCells(s,n){const c=[];for(let i=0;i<n;i++)c.push({t:"m",m:(s+Math.floor(i/2))%12,h:i%2});return c;}
const GD=[{k:"j",cells:jrCells(),cols:4,tg:"j"},{k:"c",cells:mCells(0,24),cols:4,tg:"c"},{k:"s",cells:mCells(0,24),cols:4,tg:"s"},{k:"u",cells:[{t:"u",i:0},{t:"u",i:1},{t:"u",i:2}],cols:3,tg:"s"}];
const GS={};let _ci=0;GD.forEach(g=>{GS[g.k]=_ci;_ci+=g.cells.length;});const TC=_ci;
function shortLbl(gi){for(const g of GD){const s=GS[g.k];if(gi>=s&&gi<s+g.cells.length){const c=g.cells[gi-s];if(c.t==="u")return t("ura")[c.i];return t("M")[c.m]+(c.h===0?t("hE"):t("hL"));}}return "";}
function fullLbl(gi){for(const g of GD){const s=GS[g.k];if(gi>=s&&gi<s+g.cells.length){const c=g.cells[gi-s];if(c.t==="u")return t("ura")[c.i];return t("M")[c.m]+" "+(c.h===0?t("hE"):t("hL"));}}return "";}

/* ─────────────────────────────────────────────
   LOCKS
───────────────────────────────────────────── */
const SL=new Array(TC).fill(false),RL=new Set();
function getAct(){return SL.reduce((n,v,i)=>(!v&&!RL.has(i))?n+1:n,0);}
function updateCnt(){const a=getAct();const el=document.getElementById("s1cells");if(el)el.value=a;slotData.forEach((_,i)=>{const e=document.getElementById("sc-"+i);if(e)e.value=a;});}
function toggleSL(gi){SL[gi]=!SL[gi];document.querySelectorAll(`[data-lgi="${gi}"]`).forEach(el=>{el.classList.toggle("locked",SL[gi]);const x=el.querySelector(".cx");if(x)x.remove();if(SL[gi])el.insertAdjacentHTML("afterbegin","<div class=\"cx\">X</div>");});updateCnt();savePrefs();}
function toggleRL(gi,el){if(RL.has(gi)){RL.delete(gi);el.classList.remove("rl");}else{RL.add(gi);el.classList.add("rl");}updateCnt();}

/* ─────────────────────────────────────────────
   TOOLTIP
───────────────────────────────────────────── */
const ttEl=document.getElementById("tt");
let ttVis=false,holdTimer=null;
function buildTTContent(gi,cellEl){
  const lk=SL[gi]||RL.has(gi);const fl=fullLbl(gi);
  let data={d:[],o:[],n:[]};
  if(cellEl&&cellEl.dataset.tt){try{data=JSON.parse(cellEl.dataset.tt);}catch(e){}}
  let h=`<div class="tt-m">${fl}${lk?" "+t("ttLocked"):""}</div>`;
  if(data.d?.length)data.d.forEach(x=>{h+=`<div class="tt-r"><div class="tt-d" style="background:${x.c}"></div><span>${x.n}: ${t("ttRb")}</span></div>`;});
  if(data.o?.length)data.o.forEach(x=>{h+=`<div class="tt-r"><div class="tt-d" style="background:${x.c};opacity:.5"></div><span>${x.n}: ${t("ttOt")}</span></div>`;});
  if(data.n?.length)data.n.forEach(x=>{h+=`<div class="tt-r"><div class="tt-d" style="background:${x.c};opacity:.25"></div><span>${x.n}: ${t("ttNo")}</span></div>`;});
  if(!data.d?.length&&!data.o?.length&&!data.n?.length)h+=`<div class="tt-n">—</div>`;
  return h;
}
function posTT(cx,cy){
  ttEl.style.visibility="hidden";ttEl.classList.add("on");
  const w=ttEl.offsetWidth,hh=ttEl.offsetHeight,vw=window.innerWidth,vh=window.innerHeight;
  ttEl.style.visibility="";
  let l=cx+14,tp=cy-8;
  if(l+w>vw-8)l=Math.max(8,cx-w-14);
  if(tp+hh>vh-8)tp=Math.max(8,vh-hh-8);
  ttEl.style.left=l+"px";ttEl.style.top=tp+"px";
}
function showTT(cx,cy,gi,cellEl){ttEl.innerHTML=buildTTContent(gi,cellEl);posTT(cx,cy);ttEl.classList.add("on");ttVis=true;}
function hidTT(){ttEl.classList.remove("on");ttVis=false;}
function attachTT(el,gi){
  el.addEventListener("mouseenter",e=>{showTT(e.clientX,e.clientY,gi,el);});
  el.addEventListener("mousemove",e=>{if(ttVis)posTT(e.clientX,e.clientY);});
  el.addEventListener("mouseleave",()=>hidTT());
  el.addEventListener("touchstart",e=>{holdTimer=setTimeout(()=>{e.preventDefault();const tc=e.touches[0];showTT(tc.clientX,tc.clientY,gi,el);},500);},{passive:true});
  el.addEventListener("touchend",()=>{clearTimeout(holdTimer);holdTimer=null;if(ttVis)setTimeout(()=>hidTT(),1500);});
  el.addEventListener("touchmove",()=>{clearTimeout(holdTimer);holdTimer=null;});
}

/* ─────────────────────────────────────────────
   SETUP GRID
───────────────────────────────────────────── */
function buildSGrid(cid){
  const el=document.getElementById(cid);if(!el)return;
  const tabs=["j","c","s"],uid=cid;
  let h=`<div class="gtabs">`;
  tabs.forEach((g,i)=>h+=`<div class="gtab ${i===0?"on":""}" data-gt="${uid}-${g}" onclick="swTab('${uid}','${g}')">${t(g==="j"?"grJ":g==="c"?"grC":"grS")}</div>`);
  h+="</div>";
  tabs.forEach((tk,ti)=>{
    h+=`<div class="gpanel ${ti===0?"on":""}" id="${uid}-p-${tk}">`;
    GD.filter(g=>g.tg===tk).forEach(g=>{
      const st=GS[g.k],tot=g.cells.length;
      h+=`<div class="rgrid" style="grid-template-columns:repeat(${g.cols},1fr);margin-bottom:4px">`;
      for(let i=0;i<tot;i++){const gi=st+i,lk=SL[gi],lb=shortLbl(gi);h+=`<div class="cell sm${lk?" locked":""}" data-lgi="${gi}" data-gi="${gi}">${lk?"<div class=\"cx\">X</div>":""}<div class="drow"></div><div class="clbl" data-cgi="${gi}">${lb}</div></div>`;}
      h+="</div>";
    });
    h+="</div>";
  });
  el.innerHTML=h;
  el.querySelectorAll(".cell.sm").forEach(cell=>{const gi=+cell.dataset.gi;cell.addEventListener("click",()=>toggleSL(gi));attachTT(cell,gi);});
}
function swTab(uid,key){
  document.querySelectorAll(`[data-gt^="${uid}-"]`).forEach(el=>el.classList.toggle("on",el.dataset.gt===`${uid}-${key}`));
  ["j","c","s"].forEach(g=>{const p=document.getElementById(`${uid}-p-${g}`);if(p)p.classList.toggle("on",g===key);});
}

/* ─────────────────────────────────────────────
   RNG
───────────────────────────────────────────── */
function roll(pct){const r=Math.floor(Math.random()*10000)/100,rem=100-pct,oth=rem*(72.8/81.8);if(r<pct)return"rb";if(r<pct+oth)return"ot";return"no";}

/* ─────────────────────────────────────────────
   EYE FILTER
───────────────────────────────────────────── */
let eye=null;
function buildEye(){
  const wrap=document.getElementById("ewrap"),er=document.getElementById("erow");
  const en=slotData.filter(s=>s.en);
  if(!en.length){wrap.style.display="none";return;}
  wrap.style.display="block";
  let h=`<div class="ebtn${eye===null?" on":""}" style="${eye===null?"background:var(--c2);border-color:var(--c2)":""}" onclick="setEye(null)">All</div>`;
  en.forEach(s=>{const a=eye===s.c;h+=`<div class="ebtn${a?" on":""}" style="${a?`background:${s.c};border-color:${s.c}`:""}" onclick="setEye('${s.c}')"><div class="edot" style="background:${s.c}"></div>${s.n}</div>`;});
  er.innerHTML=h;
}
function setEye(color){
  eye=color;buildEye();
  const s2o=document.getElementById("s2out");if(!s2o)return;
  s2o.querySelectorAll(".cell").forEach(cell=>{
    const dots=cell.querySelectorAll(".dot");
    if(color===null){cell.style.opacity="";dots.forEach(d=>{d.style.filter="";d.style.opacity="";});}
    else{const has=[...dots].some(d=>d.dataset.c===color);cell.style.opacity=has?"":"0.4";dots.forEach(d=>{if(d.dataset.c===color){d.style.filter="";d.style.opacity="1";}else{d.style.filter="grayscale(1)";d.style.opacity="0.15";}});}
  });
}

/* ─────────────────────────────────────────────
   RESULT CALENDAR
───────────────────────────────────────────── */
function buildResGrid(pfx,ri,cr){
  const tabs=["j","c","s"],uid=`r${pfx}${ri}`;
  let h=`<div class="gtabs">`;
  tabs.forEach((g,i)=>h+=`<div class="gtab ${i===0?"on":""}" data-gt="${uid}-${g}" data-rg="${g}" onclick="swTab('${uid}','${g}')">${t(g==="j"?"grJ":g==="c"?"grC":"grS")}</div>`);
  h+="</div>";
  tabs.forEach((tk,ti)=>{
    h+=`<div class="gpanel ${ti===0?"on":""}" id="${uid}-p-${tk}">`;
    GD.filter(g=>g.tg===tk).forEach(g=>{
      const st=GS[g.k],tot=g.cells.length;
      h+=`<div class="rgrid" style="grid-template-columns:repeat(${g.cols},1fr);margin-bottom:4px">`;
      for(let i=0;i<tot;i++){
        const gi=st+i,dots=cr[gi]||[],lk=SL[gi],rl=RL.has(gi),lb=shortLbl(gi);
        const mc=dots.length>3?" many":"";
        const dh=dots.map(d=>`<div class="dot" data-c="${d.c}" style="background:${d.c}"></div>`).join("");
        const ttData=cr[`_tt_${gi}`]||{d:[],o:[],n:[]};
        const ttJSON=JSON.stringify(ttData).replace(/"/g,"&quot;");
        h+=`<div class="cell rm${lk?" locked":""}${rl?" rl":""}" data-gi="${gi}" data-tt="${ttJSON}"><div class="cx">X</div><div class="drow${mc}">${dh}</div><div class="clbl" data-cgi="${gi}">${lb}</div></div>`;
      }
      h+="</div>";
    });
    h+="</div>";
  });
  return h;
}
function mkRun(pfx,ri,cr,rb,ot,no){
  const html=buildResGrid(pfx,ri,cr);
  const block=document.createElement("div");
  block.className="rb";
  block.innerHTML=`<div class="rh" onclick="togRun(this)"><span class="rht">Run ${ri+1}</span><span class="rhs" data-rs='${JSON.stringify({rb,ot,no})}'>${t("lbRb")}: <b>${rb}</b> | ${t("lbOt")}: <b>${ot}</b> | ${t("lbNo")}: <b>${no}</b></span><span class="sa">- Hide</span></div><div class="rbody"><span class="rhint">${t("resultHint")}</span>${html}</div>`;
  block.querySelectorAll(".cell.rm").forEach(cell=>{const gi=+cell.dataset.gi;cell.addEventListener("click",()=>toggleRL(gi,cell));attachTT(cell,gi);});
  return block;
}
function togRun(h){const b=h.nextElementSibling,a=h.querySelector(".sa");const hd=b.classList.toggle("hidden");a.textContent=hd?"+ Show":"- Hide";}

/* ─────────────────────────────────────────────
   SIM
───────────────────────────────────────────── */
function runSim(pct,act){
  const S=10000,f={};
  for(let s=0;s<S;s++){let c=0;for(let i=0;i<act;i++){if(roll(pct)==="rb")c++;}f[c]=(f[c]||0)+1;}
  return Object.entries(f).map(([k,v])=>({h:+k,c:v,p:v/S*100})).sort((a,b)=>b.c-a.c);
}
function rendSim(rows,tb){
  const mx=Math.max(...rows.map(r=>r.p));
  function clr(r){if(r>.6)return"#1a7a3c";if(r>.3)return"#4a9a5c";if(r>.15)return"#8ab83a";if(r>.08)return"#c8b800";if(r>.03)return"#e08800";if(r>.01)return"#c84400";return"#a81c1c";}
  tb.innerHTML=rows.map(r=>{const c=clr(r.p/mx),bw=Math.max(2,Math.round(r.p/mx*130));return`<tr><td style="font-weight:700">${r.h}</td><td>${r.c.toLocaleString()}</td><td style="color:${c};font-weight:700">${r.p.toFixed(2)}%</td><td><div class="bar" style="background:${c};width:${bw}px"></div></td></tr>`;}).join("");
}

/* ─────────────────────────────────────────────
   SOLO
───────────────────────────────────────────── */
async function runSolo(){
  const pct=parseFloat(document.getElementById("s1pct").value)||18.18;
  const runs=+document.getElementById("s1runs").value||1;
  const act=getAct();
  document.getElementById("s1out").innerHTML="";
  document.getElementById("s1sum").style.display="none";
  document.getElementById("s1sim").style.display="none";
  document.getElementById("s1pw").style.display="block";
  let gRb=0,gOt=0,gNo=0;
  for(let ri=0;ri<runs;ri++){
    document.getElementById("s1pt").textContent=`${t("pRolling")} ${ri+1}/${runs}`;
    document.getElementById("s1pf").style.width=((ri/runs)*70)+"%";
    await new Promise(r=>setTimeout(r,5));
    let rb=0,ot=0,no=0;const cr={};
    for(let gi=0;gi<TC;gi++){
      if(SL[gi]||RL.has(gi)){cr[gi]=[];cr[`_tt_${gi}`]={d:[],o:[],n:[]};continue;}
      const res=roll(pct);
      if(res==="rb"){rb++;cr[gi]=[{c:"var(--c2)",n:"Solo"}];cr[`_tt_${gi}`]={d:[{c:"var(--c2)",n:"Solo"}],o:[],n:[]};}
      else if(res==="ot"){cr[gi]=[];ot++;cr[`_tt_${gi}`]={d:[],o:[{c:"var(--c2)",n:"Solo"}],n:[]};}
      else{cr[gi]=[];no++;cr[`_tt_${gi}`]={d:[],o:[],n:[{c:"var(--c2)",n:"Solo"}]};}
    }
    gRb+=rb;gOt+=ot;gNo+=no;
    document.getElementById("s1out").appendChild(mkRun("s1",ri,cr,rb,ot,no));
  }
  document.getElementById("s1rb").textContent=gRb;
  document.getElementById("s1ot").textContent=gOt;
  document.getElementById("s1no").textContent=gNo;
  document.getElementById("s1tot").textContent=act*runs;
  document.getElementById("s1sum").style.display="block";
  document.getElementById("s1pt").textContent=t("pSim");
  document.getElementById("s1pf").style.width="80%";
  await new Promise(r=>setTimeout(r,10));
  rendSim(runSim(pct,act),document.getElementById("s1simtbody"));
  document.getElementById("s1sim").style.display="block";
  document.getElementById("s1pf").style.width="100%";
  document.getElementById("s1pt").textContent=t("pDone");
  setTimeout(()=>{document.getElementById("s1pw").style.display="none";},700);
}
function resetSolo(){
  document.getElementById("s1out").innerHTML="";
  document.getElementById("s1sum").style.display="none";
  document.getElementById("s1sim").style.display="none";
  document.getElementById("s1pw").style.display="none";
  document.getElementById("s1pf").style.width="0%";
  RL.clear();updateCnt();
}

/* ─────────────────────────────────────────────
   SLOTS
───────────────────────────────────────────── */
const slotData=[{n:"Slot 1",c:"#22d3ee",pct:18.18,en:true},{n:"Slot 2",c:"#ef4444",pct:18.18,en:true},{n:"Slot 3",c:"#ca8a04",pct:18.18,en:true},{n:"Slot 4",c:"#22c55e",pct:18.18,en:true},{n:"Slot 5",c:"#6d28d9",pct:18.18,en:true}];
function buildSlotCfg(){
  const act=getAct();
  document.getElementById("scfg").innerHTML=slotData.map((s,i)=>`
    <div class="sc">
      <div class="sch"><div class="snum" style="background:${s.c}">${i+1}</div>
        <input value="${s.n}" style="border:none;background:none;font-size:10px;font-weight:700;color:var(--tx);outline:none;flex:1;min-width:0;width:0" onchange="slotData[${i}].n=this.value;buildEye();savePrefs()">
      </div>
      <div class="sf"><label>${t("slotRb")}</label><input type="number" value="${s.pct}" step="0.01" min="0" max="100" onchange="slotData[${i}].pct=parseFloat(this.value)||18.18;savePrefs()"></div>
      <div class="sf"><label>${t("slotCells")}</label><input type="text" id="sc-${i}" value="${act}" readonly></div>
      <div style="display:flex;align-items:center;gap:2px;margin-top:2px"><label style="font-size:9px;color:var(--tx2);flex:1">${t("slotColor")}</label>
        <input type="color" class="cpick" value="${s.c}" oninput="slotData[${i}].c=this.value;buildSlotCfg();savePrefs()"></div>
      <div class="trow"><div class="tog ${s.en?"on":""}" id="tog-${i}" onclick="togSlot(${i})"></div><label>${t("slotActive")}</label></div>
    </div>`).join("");
}
function togSlot(i){slotData[i].en=!slotData[i].en;document.getElementById("tog-"+i).classList.toggle("on",slotData[i].en);buildEye();savePrefs();}

/* ─────────────────────────────────────────────
   COMBINED
───────────────────────────────────────────── */
let s2SimD=[];
async function runCombined(){
  buildSlotCfg();
  const runs=+document.getElementById("s2runs").value||1;
  const en=slotData.map((s,i)=>({...s,idx:i})).filter(s=>s.en);
  if(!en.length){alert("Enable at least one slot.");return;}
  const act=getAct();
  document.getElementById("s2out").innerHTML="";
  document.getElementById("s2sum").style.display="none";
  document.getElementById("s2sim").style.display="none";
  document.getElementById("s2pw").style.display="block";
  eye=null;
  const bySlot=slotData.map(()=>({rb:0,ot:0,no:0,tot:0}));
  let gRb=0,gOt=0,gNo=0,gTot=0;
  for(let ri=0;ri<runs;ri++){
    document.getElementById("s2pt").textContent=`${t("pRolling")} ${ri+1}/${runs}`;
    document.getElementById("s2pf").style.width=((ri/runs)*70)+"%";
    await new Promise(r=>setTimeout(r,5));
    const cr={};
    for(let gi=0;gi<TC;gi++){cr[gi]=[];cr[`_tt_${gi}`]={d:[],o:[],n:[]};}
    let runRb=0,runOt=0,runNo=0;
    en.forEach(s=>{
      let sb=0,so=0,sn=0;
      for(let gi=0;gi<TC;gi++){
        if(SL[gi]||RL.has(gi))continue;
        const res=roll(s.pct);
        if(res==="rb"){sb++;cr[gi].push({c:s.c,n:s.n});cr[`_tt_${gi}`].d.push({c:s.c,n:s.n});}
        else if(res==="ot"){so++;cr[`_tt_${gi}`].o.push({c:s.c,n:s.n});}
        else{sn++;cr[`_tt_${gi}`].n.push({c:s.c,n:s.n});}
      }
      bySlot[s.idx].rb+=sb;bySlot[s.idx].ot+=so;bySlot[s.idx].no+=sn;bySlot[s.idx].tot+=act;
      runRb+=sb;runOt+=so;runNo+=sn;
    });
    gRb+=runRb;gOt+=runOt;gNo+=runNo;gTot+=act*en.length;
    document.getElementById("s2out").appendChild(mkRun("s2",ri,cr,runRb,runOt,runNo));
  }
  document.getElementById("s2stbody").innerHTML=en.map(s=>{const d=bySlot[s.idx];return`<tr><td style="text-align:left"><span class="sdot" style="background:${s.c}"></span>${s.n}</td><td style="font-weight:700;color:${s.c}">${d.rb}</td><td>${d.ot}</td><td>${d.no}</td><td style="color:var(--tx2)">${d.tot}</td></tr>`;}).join("");
  document.getElementById("s2sum").style.display="block";
  document.getElementById("s2grand").innerHTML=`
    <div class="smbox"><div class="smval">${gRb}</div><div class="smlbl" data-sk="lbRb">${t("lbRb")}</div></div>
    <div class="smbox"><div class="smval">${gOt}</div><div class="smlbl" data-sk="lbOt">${t("lbOt")}</div></div>
    <div class="smbox"><div class="smval">${gNo}</div><div class="smlbl" data-sk="lbNo">${t("lbNo")}</div></div>
    <div class="smbox"><div class="smval">${gTot}</div><div class="smlbl" data-sk="lbTot">${t("lbTot")}</div></div>`;
  s2SimD=en.map(s=>({pct:s.pct,act,c:s.c,n:s.n}));
  document.getElementById("s2stabs").innerHTML=s2SimD.map((sd,i)=>`<div class="stab${i===0?" on":""}" id="s2t-${i}" onclick="selS2(${i})" style="${i===0?`background:${sd.c};border-color:${sd.c};color:#fff`:""}"><div class="td" style="background:${sd.c}"></div>${sd.n}</div>`).join("");
  document.getElementById("s2sim").style.display="block";
  await new Promise(r=>setTimeout(r,5));selS2(0);
  document.getElementById("s2pf").style.width="100%";document.getElementById("s2pt").textContent=t("pDone");
  setTimeout(()=>{document.getElementById("s2pw").style.display="none";},700);
  buildEye();
}
function selS2(idx){
  s2SimD.forEach((_,i)=>{const tab=document.getElementById("s2t-"+i);if(!tab)return;if(i===idx){tab.classList.add("on");tab.style.cssText=`background:${s2SimD[i].c};border-color:${s2SimD[i].c};color:#fff`;}else{tab.classList.remove("on");tab.style.cssText="";}});
  const sd=s2SimD[idx];if(!sd)return;rendSim(runSim(sd.pct,sd.act),document.getElementById("s2simtbody"));
}
function resetCombined(){
  document.getElementById("s2out").innerHTML="";document.getElementById("s2sum").style.display="none";
  document.getElementById("s2sim").style.display="none";document.getElementById("s2pw").style.display="none";
  document.getElementById("s2pf").style.width="0%";document.getElementById("ewrap").style.display="none";
  eye=null;RL.clear();updateCnt();
}

/* ─────────────────────────────────────────────
   PRESET — CHARACTER DATA
   Format: [en, kana, style, ...goals]
   Goal: [gr, m, h, race_en]
   gr: "j"|"c"|"s"  m:0-11  h:0|1
   Only characters in the URL list are included.
───────────────────────────────────────────── */
function _pci(gr,m,h){
  if(gr==="j"){if(m<3||m>11)return-1;if(m<=5)return(m-3)*4+h*2;return 12+(m-6)*2+h;}
  if(gr==="c")return 24+m*2+h;
  if(gr==="s")return 48+m*2+h;
  return -1;
}

const CTHEME={
  "special-week":"#4a90d9","silence-suzuka":"#e04040","tokai-teio":"#f5a623",
  "mejiro-mcqueen":"#7c5cbf","oguri-cap":"#7fba00","gold-ship":"#00a0c8",
  "daiwa-scarlet":"#e8294a","vodka":"#3a78c9","el-condor-pasa":"#c8a020",
  "grass-wonder":"#e87840","taiki-shuttle":"#1a9a5c","hishi-amazon":"#c83060",
  "tm-opera-o":"#b04090","narita-brian":"#303080","air-groove":"#6a6a8a",
  "mayano-top-gun":"#d45020","super-creek":"#308050","manhattan-cafe":"#605040",
  "mihono-bourbon":"#c06020","mejiro-ryan":"#5080c0","biwa-hayahide":"#404880",
  "rice-shower":"#d060a0","seiun-sky":"#4090c0","agnes-tachyon":"#c04050",
  "winning-ticket":"#2060a0","maruzensky":"#c83020","nice-nature":"#e07030",
  "sakura-bakushin-o":"#e85888","smart-falcon":"#60a030","matikanefukukitaru":"#8060a0",
  "fuji-kiseki":"#a03060","curren-chan":"#d84070","agnes-digital":"#e05090",
  "kawakami-princess":"#d050a0","fine-motion":"#6850b8","admire-vega":"#3848a8",
  "eishin-flash":"#3870b0","tamamo-cross":"#308070","mejiro-dober":"#a060c8",
  "tosen-jordan":"#2870b8","sakura-chiyono-o":"#d06080","inari-one":"#9060a0",
  "sweep-tosho":"#c84878","air-shakur":"#4060a0","bamboo-memory":"#38a868",
  "yukino-bijin":"#d86090","satono-diamond":"#5060c0","mejiro-bright":"#4878b8",
  "nishino-flower":"#e07898","yaeno-muteki":"#607030","ines-fujin":"#38a878",
  "mejiro-palmer":"#4878a8","matikanetannhauser":"#6050a8","hishi-miracle":"#7848a8",
  "narita-top-road":"#305090","jungle-pocket":"#907030","duramente":"#4050a0",
  "marvelous-sunday":"#a06020","sakura-laurel":"#e06080","twin-turbo":"#c04028",
  "zenno-rob-roy":"#505890","neo-universe":"#3860a8","dantsu-flame":"#b03828",
  "cesario":"#8860b8","deep-impact":"#2050a0","mejiro-ardan":"#308860",
  "orfevre":"#c03840","gentildonna":"#c04888","kizuna":"#40a038",
  "epiphaneia":"#c05030","harp-star":"#d87840","just-a-way":"#3880c0",
  "shonan-pandora":"#a05890","lovely-day":"#e06848","real-steel":"#5870b0",
  "mickey-queen":"#d04898","lucky-lilac":"#a058c0","king-halo":"#d04020",
  "kitasan-black":"#303080","symboli-rudolf":"#404060","narita-taishin":"#5070a8",
  "haru-urara":"#e87898","gold-city":"#d89020","meisho-doto":"#507890",
  "hishi-akebono":"#405898","shinko-windy":"#d04858","seeking-the-pearl":"#e07050",
  "copano-rickey":"#806030","narita-brian":"#303080","sirius-symboli":"#3848a8",
  "nakayama-festa":"#c07030","bamboo-memory":"#38a868","narita-top-road":"#305090",
  "yamanin-zephyr":"#60a870","aston-machan":"#e06050","transcend":"#d08030",
  "satono-crown":"#5870b0","cheval-grand":"#4878c0","vivlos":"#d050c0",
  "mejiro-ramonu":"#7050a8","ksmiracle":"#50a060","hokko-tarumae":"#806840",
  "wonder-acute":"#e06040","sounds-of-earth":"#4080b8","north-flight":"#d84870",
  "espoir-city":"#3890c0","still-in-love":"#c85878","verxina":"#9858b8",
  "no-reason":"#d06830","fusaichi-pandora":"#e070a0","cesario":"#8860b8",
  "gentildonna":"#c04888","orfevre":"#c03840","win-variation":"#40a8c0",
  "air-messiah":"#5090d0","bubble-gum-fellow":"#e080b0","durandal":"#5058b0",
  "calstone-light-o":"#70a840","dream-journey":"#a06090","gran-alegria":"#e05870",
  "fenomeno":"#d08848","loves-only-you":"#e068a0","chrono-genesis":"#7860c0",
  "almond-eye":"#3878c0","stay-gold":"#d09028","kiseki":"#5058a8",
  "victoire-pisa":"#c06840","buena-vista":"#e07888","believe":"#e08838",
  "daitaku-helios":"#d07020","mr-cb":"#4050a0","symboli-kris-s":"#706080",
  "daiichi-ruby":"#e05070","tanino-gimlet":"#a06030","katsuragi-ace":"#c08030",
  "hishi-miracle":"#7848a8","rhein-kraft":"#5070a8","tap-dance-city":"#d05858",
  "furioso":"#e07048",
};

function _slugOf(name){
  return name.toLowerCase().replace(/[().]/g,'').replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');
}

/* Characters — เรียงตาม URL list
   Format: [en, kana, style, slug, ...goals]
   Goal: [gr, m, h, race_name]  gr=j/c/s  m=0-11  h=0/1 */
const CHARS=[
  // ── URL order from document ──
  ["Lucky Lilac","ラッキーライラック","Mile·Med","lucky-lilac",["j",5,1,"Make Debut"],["j",11,0,"Hanshin Juvenile Fillies"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["s",1,1,"Nakayama Kinen"],["s",2,1,"Osaka Hai"],["s",4,0,"Victoria Mile"],["s",10,0,"Queen Elizabeth II Cup"],["s",10,1,"Japan Cup"]],
  ["Victoire Pisa","ヴィクトワールピサ","Med·Long","victoire-pisa",["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",11,1,"Arima Kinen"]],
  ["Almond Eye","アーモンドアイ","Mile·Med","almond-eye",["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["s",10,1,"Japan Cup"]],
  ["Kiseki","キセキ","Long","kiseki",["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",11,1,"Arima Kinen"]],
  ["Stay Gold","ステイゴールド","Long","stay-gold",["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",11,1,"Arima Kinen"]],
  ["Buena Vista","ブエナビスタ","Mile·Med","buena-vista",["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Dantsu Flame","ダンツフレーム","Mile·Med","dantsu-flame",["j",5,1,"Make Debut"],["c",1,0,"Kisaragi Sho"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho (participate)"],["c",10,1,"Mile Championship"],["s",4,0,"Niigata Daishoten"],["s",5,0,"Yasuda Kinen"]],
  ["Believe","ビリーヴ","Sprint·Mile","believe",["j",5,1,"Make Debut"],["s",8,1,"Sprinters Stakes"],["s",10,1,"Mile Championship"]],
  ["Espoir City","エスポワールシチー","Dirt·Mile","espoir-city",["j",5,1,"Make Debut"],["c",10,0,"JBC Sprint"],["s",10,0,"JBC Classic"]],
  ["Still in Love","スティルインラブ","Mile·Med","still-in-love",["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"]],
  ["Fusaichi Pandora","フサイチパンドラ","Mile·Med","fusaichi-pandora",["j",5,1,"Make Debut"],["c",9,1,"Shuka Sho"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Chrono Genesis","クロノジェネシス","Med·Long","chrono-genesis",["j",5,1,"Make Debut"],["c",9,1,"Shuka Sho"],["s",5,1,"Takarazuka Kinen"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Loves Only You","ラヴズオンリーユー","Mile·Med","loves-only-you",["j",5,1,"Make Debut"],["c",4,1,"Japanese Oaks"],["s",4,0,"Victoria Mile"]],
  ["Verxina","ヴェルツァースカ","Mile·Med","verxina",["j",5,1,"Make Debut"],["c",9,1,"Shuka Sho"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Fenomeno","フェノーメノ","Long","fenomeno",["j",5,1,"Make Debut"],["s",3,1,"Tenno Sho (Spring)"],["s",3,1,"Tenno Sho (Spring)"]],
  ["No Reason","ノーリーズン","Long","no-reason",["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",11,1,"Arima Kinen"]],
  ["Gran Alegria","グランアレグリア","Sprint·Mile","gran-alegria",["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["s",4,0,"Victoria Mile"],["s",8,1,"Sprinters Stakes"],["s",10,1,"Mile Championship"]],
  ["Orfevre","オルフェーヴル","Long","orfevre",["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Furioso","フリオーソ","Dirt·Long","furioso",["j",5,1,"Make Debut"],["c",10,0,"JBC Classic"],["s",10,0,"JBC Classic"]],
  ["Win Variation","ウインヴァリアシオン","Mile","win-variation",["j",5,1,"Make Debut"],["s",5,0,"Yasuda Kinen"],["s",10,1,"Mile Championship"]],
  ["Air Messiah","エアメサイア","Mile·Med","air-messiah",["j",5,1,"Make Debut"],["c",9,1,"Shuka Sho"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Bubble Gum Fellow","バブルガムフェロー","Mile·Med","bubble-gum-fellow",["j",5,1,"Make Debut"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Mile Championship"]],
  ["Durandal","デュランダル","Sprint·Mile","durandal",["j",5,1,"Make Debut"],["s",8,1,"Sprinters Stakes"],["s",10,1,"Mile Championship"]],
  ["Cesario","シーザリオ","Med·Long","cesario",["j",5,1,"Make Debut"],["c",4,1,"Japanese Oaks"],["s",3,1,"Tenno Sho (Spring)"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Gentildonna","ジェンティルドンナ","Med·Long","gentildonna",["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Calstone Light O","カルストンライトオ","Sprint","calstone-light-o",["j",5,1,"Make Debut"],["s",2,1,"Takamatsunomiya Kinen"],["s",8,1,"Sprinters Stakes"]],
  ["Dream Journey","ドリームジャーニー","Med·Long","dream-journey",["j",5,1,"Make Debut"],["c",11,1,"Arima Kinen"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Jungle Pocket","ジャングルポケット","Med·Long","jungle-pocket",["j",5,1,"Make Debut"],["c",4,1,"Japanese Derby"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"]],
  ["North Flight","ノースフライト","Mile","north-flight",["j",5,1,"Make Debut"],["s",5,0,"Yasuda Kinen"],["s",10,1,"Mile Championship"]],
  ["Sounds of Earth","サウンズオブアース","Med·Long","sounds-of-earth",["j",5,1,"Make Debut"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Rhein Kraft","ラインクラフト","Mile","rhein-kraft",["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["s",4,0,"Victoria Mile"],["s",10,1,"Mile Championship"]],
  ["Transcend","トランセンド","Dirt·Med","transcend",["j",5,1,"Make Debut"],["c",11,1,"Tokyo Daishoten"],["s",10,0,"JBC Classic"],["s",11,0,"Champions Cup"]],
  ["Duramente","ドゥラメンテ","Med·Long","duramente",["j",5,1,"Make Debut"],["c",1,0,"Kyodo News Hai"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho (participate)"],["s",1,1,"Nakayama Kinen"],["s",2,1,"Osaka Hai"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"]],
  ["Vivlos","ヴィブロス","Mile·Med","vivlos",["j",5,1,"Make Debut"],["c",9,1,"Shuka Sho"],["s",4,0,"Victoria Mile"]],
  ["Cheval Grand","シュヴァルグラン","Long","cheval-grand",["j",5,1,"Make Debut"],["s",3,1,"Tenno Sho (Spring)"],["s",10,1,"Japan Cup"]],
  ["Satono Crown","サトノクラウン","Med·Long","satono-crown",["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Tap Dance City","タップダンスシチー","Med·Long","tap-dance-city",["j",5,1,"Make Debut"],["s",5,1,"Takarazuka Kinen"],["s",10,1,"Japan Cup"]],
  ["Mejiro Ramonu","メジロラモーヌ","Mile·Med","mejiro-ramonu",["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"]],
  ["KS Miracle","ミラクルレジェンド","Dirt·Med","ksmiracle",["j",5,1,"Make Debut"],["s",10,0,"JBC Classic"]],
  ["Narita Top Road","ナリタトップロード","Long","narita-top-road",["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",11,1,"Arima Kinen"]],
  ["Sirius Symboli","シリウスシンボリ","Medium","sirius-symboli",["j",5,1,"Make Debut"],["j",9,0,"Saudi Arabia Royal Cup"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho (participate)"],["c",11,1,"Arima Kinen"],["s",2,1,"Osaka Hai"],["s",5,1,"Takarazuka Kinen"]],
  ["Katsuragi Ace","カツラギエース","Medium","katsuragi-ace",["j",5,1,"Make Debut"],["s",10,1,"Japan Cup"]],
  ["Marvelous Sunday","マーベラスサンデー","Med·Long","marvelous-sunday",["j",5,1,"Make Debut"],["c",11,0,"Challenge Cup"],["s",2,1,"Osaka Hai"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Tanino Gimlet","タニノギムレット","Medium","tanino-gimlet",["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"]],
  ["Hishi Miracle","ヒシミラクル","Long","hishi-miracle",["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"]],
  ["Neo Universe","ネオユニヴァース","Medium","neo-universe",["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["s",11,1,"Arima Kinen"]],
  ["Sakura Laurel","サクラローレル","Long","sakura-laurel",["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Symboli Kris S","シンボリクリスエス","Med·Long","symboli-kris-s",["j",5,1,"Make Debut"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Daiichi Ruby","ダイイチルビー","Mile","daiichi-ruby",["j",5,1,"Make Debut"],["s",5,0,"Yasuda Kinen"],["s",10,1,"Mile Championship"]],
  ["Mr. C.B.","ミスターシービー","Long","mr-cb",["j",5,1,"Make Debut"],["c",1,0,"Kyodo News Hai"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Shinko Windy","シンコウウインディ","Dirt·Mile","shinko-windy",["j",5,1,"Make Debut"],["c",5,1,"Unicorn Stakes"],["c",6,0,"Japan Dirt Derby"],["s",0,1,"Tokai Stakes"],["s",1,1,"February Stakes"],["s",5,1,"Teio Sho"],["s",11,0,"Champions Cup"]],
  ["Daitaku Helios","ダイタクヘリオス","Mile","daitaku-helios",["j",5,1,"Make Debut"],["j",11,0,"Hanshin Juvenile Fillies"],["c",4,1,"Aoi Stakes"],["c",10,1,"Mile Championship"],["s",2,1,"Takamatsunomiya Kinen"],["s",3,1,"Milers Cup"],["s",5,0,"Yasuda Kinen"],["s",10,1,"Mile Championship"],["s",11,1,"Arima Kinen (participate)"]],
  ["Hokko Tarumae","ホッコータルマエ","Dirt·Med","hokko-tarumae",["j",5,1,"Make Debut"],["s",10,0,"JBC Classic"],["s",11,0,"Champions Cup"]],
  ["Zenno Rob Roy","ゼンノロブロイ","Med·Long","zenno-rob-roy",["j",5,1,"Make Debut"],["c",3,1,"Aoba Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Wonder Acute","ワンダーアキュート","Dirt·Med","wonder-acute",["j",5,1,"Make Debut"],["s",10,0,"JBC Classic"]],
  ["Nakayama Festa","ナカヤマフェスタ","Med·Long","nakayama-festa",["j",5,1,"Make Debut"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Yamanin Zephyr","ヤマニンゼファー","Mile","yamanin-zephyr",["j",5,1,"Make Debut"],["s",5,0,"Yasuda Kinen"],["s",10,1,"Mile Championship"]],
  ["Aston Machan","アストンマーチャン","Sprint","aston-machan",["j",5,1,"Make Debut"],["j",7,1,"Kokura Sho 2yo"],["s",2,1,"Takamatsunomiya Kinen"],["s",8,1,"Sprinters Stakes"]],
  ["Seeking the Pearl","シーキングザパール","Sprint·Mile","seeking-the-pearl",["j",5,1,"Make Debut"],["j",10,0,"Daily Hai Junior Stakes"],["j",11,0,"Hanshin Juvenile Fillies"],["c",3,0,"Oka Sho"],["c",4,0,"NHK Mile Cup"],["c",8,0,"Rose Stakes"],["c",10,1,"Mile Championship"],["s",2,1,"Takamatsunomiya Kinen"]],
  ["Yukino Bijin","ユキノビジン","Mile·Med","yukino-bijin",["j",5,1,"Make Debut"],["j",11,0,"Hanshin Juvenile Fillies"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",6,1,"Queen Stakes"],["c",9,1,"Shuka Sho"],["s",2,1,"Osaka Hai"],["s",4,0,"Victoria Mile"],["s",10,0,"Queen Elizabeth II Cup"],["s",10,1,"Japan Cup"]],
  ["Copano Rickey","コパノリッキー","Dirt·Mile","copano-rickey",["j",5,1,"Make Debut"],["s",10,0,"JBC"]],
  ["Bamboo Memory","バンブーメモリー","Sprint·Mile","bamboo-memory",["j",5,1,"Make Debut"],["s",2,1,"Takamatsunomiya Kinen"],["s",8,1,"Sprinters Stakes"],["s",10,1,"Mile Championship"]],
  ["Air Shakur","エアシャカール","Long","air-shakur",["j",5,1,"Make Debut"],["j",11,1,"Hopeful Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["c",10,1,"Japan Cup (participate)"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"]],
  ["Sweep Tosho","スイープトウショウ","Mile·Med","sweep-tosho",["j",5,1,"Make Debut"],["j",11,0,"Hanshin Juvenile Fillies"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["c",10,0,"Queen Elizabeth II Cup"],["s",5,0,"Yasuda Kinen"],["s",5,1,"Takarazuka Kinen"]],
  ["Inari One","イナリワン","Med·Long","inari-one",["j",5,1,"Make Debut"],["c",6,0,"Japan Dirt Derby"],["c",11,1,"Tokyo Daishoten"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,0,"Mainichi Okan"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["Mejiro Palmer","メジロパーマー","Long","mejiro-palmer",["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Ines Fujin","アイネスフウジン","Mile·Med","ines-fujin",["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho (participate)"],["s",2,1,"Osaka Hai"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"]],
  ["Yaeno Muteki","ヤエノムテキ","Med·Long","yaeno-muteki",["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Nishino Flower","ニシノフラワー","Sprint·Mile","nishino-flower",["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",3,0,"Oka Sho"],["s",2,1,"Takamatsunomiya Kinen"],["s",8,1,"Sprinters Stakes"]],
  ["Mejiro Bright","メジロブライト","Long","mejiro-bright",["j",5,1,"Make Debut"],["s",3,1,"Tenno Sho (Spring)"],["s",11,1,"Arima Kinen"]],
  ["Satono Diamond","サトノダイヤモンド","Med·Long","satono-diamond",["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",11,1,"Arima Kinen"]],
  ["Kitasan Black","キタサンブラック","Med·Long","kitasan-black",["j",5,1,"Make Debut"],["c",8,1,"St. Lite Kinen"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",2,1,"Osaka Hai"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Admire Vega","アドマイヤベガ","Med·Long","admire-vega",["j",5,1,"Make Debut"],["j",11,1,"Hopeful Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho (participate)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"]],
  ["Mejiro Ardan","メジロアルダン","Mile·Med","mejiro-ardan",["j",5,1,"Make Debut"],["s",5,0,"Yasuda Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Mile Championship"]],
  ["Sakura Chiyono O","サクラチヨノオー","Mile·Med","sakura-chiyono-o",["j",5,1,"Make Debut"],["c",1,0,"Yayoi Sho"],["c",4,1,"Japanese Derby"],["s",5,0,"Yasuda Kinen"]],
  ["Tamamo Cross","タマモクロス","Med·Long","tamamo-cross",["j",5,1,"Make Debut"],["s",2,1,"Hanshin Daishoten"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Fine Motion","ファインモーション","Mile·Med","fine-motion",["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["c",10,0,"Queen Elizabeth II Cup"],["s",2,1,"Osaka Hai"],["s",5,1,"Takarazuka Kinen"],["s",7,1,"Sapporo Kinen"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["Mejiro Dober","メジロドーベル","Mile·Med","mejiro-dober",["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Tosen Jordan","トーセンジョーダン","Mile·Med","tosen-jordan",["j",5,1,"Make Debut"],["c",4,0,"NHK Mile Cup"],["s",5,0,"Yasuda Kinen"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["Manhattan Cafe","マンハッタンカフェ","Long","manhattan-cafe",["j",5,1,"Make Debut"],["c",2,0,"Yayoi Sho"],["c",8,1,"St. Lite Kinen"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Kawakami Princess","カワカミプリンセス","Medium","kawakami-princess",["j",5,1,"Make Debut"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["c",10,0,"Queen Elizabeth II Cup"],["s",2,0,"Kinko Sho"],["s",4,0,"Victoria Mile"],["s",5,1,"Takarazuka Kinen"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Agnes Digital","アグネスデジタル","Mile·Med","agnes-digital",["j",5,1,"Make Debut"],["c",1,1,"Hyacinth Stakes"],["c",4,0,"NHK Mile Cup"],["c",6,0,"Japan Dirt Derby"],["c",10,1,"Mile Championship"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["Hishi Akebono","ヒシアケボノ","Dirt·Sprint","hishi-akebono",["j",5,1,"Make Debut"],["s",9,0,"JBC Sprint"]],
  ["Eishin Flash","エイシンフラッシュ","Medium","eishin-flash",["j",5,1,"Make Debut"],["c",0,0,"Keisei Hai"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",10,1,"Japan Cup (participate)"],["c",11,1,"Arima Kinen (participate)"],["s",2,1,"Osaka Hai"],["s",3,1,"Tenno Sho (Spring)"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Meisho Doto","メイショウドトウ","Med·Long","meisho-doto",["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Gold City","ゴールドシチー","Mile·Med","gold-city",["j",5,1,"Make Debut"],["j",11,0,"Hanshin Juvenile Fillies"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",2,1,"Osaka Hai"],["s",3,1,"Tenno Sho (Spring)"]],
  ["Fuji Kiseki","フジキセキ","Mile","fuji-kiseki",["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",2,0,"Yayoi Sho"],["c",3,0,"Satsuki Sho"],["c",4,0,"NHK Mile Cup"],["c",9,1,"Kikuka Sho (participate)"],["s",2,1,"Takamatsunomiya Kinen"],["s",5,0,"Yasuda Kinen"]],
  ["Hishi Amazon","ヒシアマゾン","Mile·Med","hishi-amazon",["j",5,1,"Make Debut"],["j",11,0,"Hanshin Juvenile Fillies"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["c",11,1,"Arima Kinen"],["s",2,1,"Osaka Hai"],["s",5,0,"Yasuda Kinen"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Seiun Sky","セイウンスカイ","Med·Long","seiun-sky",["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"]],
  ["Narita Brian","ナリタブライアン","Long","narita-brian",["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",2,1,"Hanshin Daishoten"],["s",3,1,"Tenno Sho (Spring)"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["Smart Falcon","スマートファルコン","Dirt·Long","smart-falcon",["j",5,1,"Make Debut"],["s",9,0,"JBC Sprint"]],
  ["Narita Taishin","ナリタタイシン","Medium","narita-taishin",["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho (participate)"],["s",2,1,"Nikkei Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Curren Chan","カレンチャン","Sprint","curren-chan",["j",5,1,"Make Debut"],["c",2,0,"Fillies Revue"],["c",4,1,"Aoi Stakes"],["c",5,1,"Hakodate Sprint Stakes"],["c",8,1,"Sprinters Stakes"],["s",2,0,"Ocean Stakes"],["s",2,1,"Takamatsunomiya Kinen"],["s",8,1,"Sprinters Stakes"]],
  ["Biwa Hayahide","ビワハヤヒデ","Med·Long","biwa-hayahide",["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Mihono Bourbon","ミホノブルボン","Med·Long","mihono-bourbon",["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",2,1,"Spring Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"]],
  ["T.M. Opera O","テイエムオペラオー","Med·Long","tm-opera-o",["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",11,1,"Arima Kinen"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Special Week","スペシャルウィーク","Med·Long","special-week",["j",5,1,"Make Debut"],["c",1,0,"Kisaragi Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Silence Suzuka","サイレンススズカ","Mile·Med","silence-suzuka",["j",5,1,"Make Debut"],["c",2,0,"Yayoi Sho"],["c",8,1,"Kobe Shimbun Hai"],["s",2,0,"Kinko Sho"],["s",5,1,"Takarazuka Kinen"],["s",9,0,"Mainichi Okan"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["Tokai Teio","トウカイテイオー","Med·Long","tokai-teio",["j",5,1,"Make Debut"],["c",0,1,"Wakagoma Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Maruzensky","マルゼンスキー","Mile·Med","maruzensky",["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",2,1,"Spring Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",11,1,"Arima Kinen (participate)"],["s",2,1,"Osaka Hai"],["s",5,0,"Yasuda Kinen"]],
  // ── extra chars confirmed in game but not in main URL list ──
  ["Oguri Cap","オグリキャップ","Mile·Med","oguri-cap",["j",5,1,"Make Debut"],["c",4,0,"NHK Mile Cup"],["c",10,1,"Mile Championship"],["c",11,1,"Arima Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Gold Ship","ゴールドシップ","Long","gold-ship",["j",5,1,"Make Debut"],["j",11,1,"Hopeful Stakes"],["c",3,0,"Satsuki Sho"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Daiwa Scarlet","ダイワスカーレット","Mile·Med","daiwa-scarlet",["j",5,1,"Make Debut"],["c",2,0,"Tulip Sho"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["c",10,0,"Queen Elizabeth II Cup"],["s",2,1,"Osaka Hai"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Vodka","ウオッカ","Mile·Med","vodka",["j",5,1,"Make Debut"],["j",11,0,"Hanshin Juvenile Fillies"],["c",2,0,"Tulip Sho"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Shuka Sho"],["c",11,1,"Arima Kinen (participate)"],["s",4,0,"Victoria Mile"],["s",5,0,"Yasuda Kinen"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["El Condor Pasa","エルコンドルパサー","Mile·Med","el-condor-pasa",["j",5,1,"Make Debut"],["c",1,0,"Kyodo News Hai"],["c",4,0,"NHK Mile Cup"],["c",4,1,"Japanese Derby"],["c",9,0,"Mainichi Okan"],["s",5,1,"Takarazuka Kinen"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Grass Wonder","グラスワンダー","Med·Long","grass-wonder",["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",4,1,"Japanese Derby"],["c",10,1,"Japan Cup"],["c",11,1,"Arima Kinen"],["s",5,1,"Takarazuka Kinen"],["s",9,0,"Mainichi Okan"],["s",11,1,"Arima Kinen"]],
  ["Taiki Shuttle","タイキシャトル","Mile","taiki-shuttle",["j",5,1,"Make Debut"],["c",0,0,"Shinzan Kinen"],["c",4,0,"NHK Mile Cup"],["c",5,1,"Unicorn Stakes"],["c",10,1,"Mile Championship"],["s",5,0,"Yasuda Kinen"],["s",8,1,"Sprinters Stakes"],["s",10,1,"Mile Championship"]],
  ["Mejiro McQueen","メジロマックイーン","Long","mejiro-mcqueen",["j",5,1,"Make Debut"],["c",8,1,"Kobe Shimbun Hai"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["Air Groove","エアグルーヴ","Medium","air-groove",["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["King Halo","キングヘイロー","Mile","king-halo",["j",5,1,"Make Debut"],["s",5,0,"Yasuda Kinen"],["s",10,1,"Mile Championship"]],
  ["Nice Nature","ナイスネイチャ","Long","nice-nature",["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",11,1,"Arima Kinen"]],
  ["Haru Urara","ハルウララ","Dirt·Sprint","haru-urara",["j",5,1,"Make Debut"],["s",1,0,"OP Race 1"],["s",2,1,"OP Race 2"]],
  ["Super Creek","スーパークリーク","Long","super-creek",["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",11,1,"Arima Kinen"]],
  ["Mayano Top Gun","マヤノトップガン","Long","mayano-top-gun",["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",2,1,"Hanshin Daishoten"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Mejiro Ryan","メジロライアン","Med·Long","mejiro-ryan",["j",5,1,"Make Debut"],["j",11,0,"Junior Cup"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Agnes Tachyon","アグネスタキオン","Mile·Med","agnes-tachyon",["j",5,1,"Make Debut"],["c",1,0,"Yayoi Sho"],["c",3,0,"Satsuki Sho"]],
  ["Winning Ticket","ウイニングチケット","Medium","winning-ticket",["j",5,1,"Make Debut"],["c",1,0,"Yayoi Sho"],["c",4,1,"Japanese Derby"],["s",9,1,"Japan Cup"]],
  ["Rice Shower","ライスシャワー","Long","rice-shower",["j",5,1,"Make Debut"],["c",2,1,"Spring Stakes"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["s",2,1,"Nikkei Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Sakura Bakushin O","サクラバクシンオー","Sprint","sakura-bakushin-o",["j",5,1,"Make Debut"],["j",10,0,"Keio Hai Junior Stakes"],["c",2,1,"Spring Stakes (participate)"],["c",4,1,"Aoi Stakes"],["c",8,1,"Sprinters Stakes"],["s",2,1,"Takamatsunomiya Kinen"],["s",5,1,"Hakodate Sprint Stakes"],["s",6,0,"CBC Sho"]],
  ["Matikanefukukitaru","マチカネフクキタル","Long","matikanefukukitaru",["j",5,1,"Make Debut"],["c",2,0,"Yayoi Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["s",2,0,"Kinko Sho"],["s",5,1,"Takarazuka Kinen"]],
  ["Matikanetannhauser","マチカネタンホイザ","Long","matikanetannhauser",["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",11,1,"Arima Kinen"]],
];

let _selC=null,_pLocks=new Set(),_fC=[...CHARS];

function filterC(q){
  const ql=q.toLowerCase().trim();
  _fC=ql?CHARS.filter(c=>c[0].toLowerCase().includes(ql)||c[1].includes(q)||c[3].includes(ql)):CHARS.slice();
  _buildCG();
}

function _buildCG(){
  const el=document.getElementById("cgrid");if(!el)return;
  el.innerHTML=_fC.map(c=>{
    const idx=CHARS.indexOf(c);
    const slug=c[3];
    const col=CTHEME[slug]||"#4a90d9";
    const nm=L==="JP"?c[1]:c[0];
    const kn=L==="JP"?c[2]:c[1];
    const isOn=_selC===c;
    const imgUrl=`./umamusumebanner/${slug}.png`;
    return`<button class="cbtn${isOn?" on":""}" onclick="_selChar(${idx})" type="button" style="border-color:${isOn?col:'transparent'}">
      <div class="cbtn-imgwrap" style="background:${col}33">
        <img class="cbtn-img" src="${imgUrl}" alt="${nm}" loading="lazy" onerror="this.classList.add('img-err')" onload="this.classList.add('img-ok')">
      </div>
      <div class="cbtn-info">
        <div class="cbtn-name">${nm}</div>
        ${L!=="JP"?`<div class="cbtn-kana">${kn}</div>`:""}
        <span class="cbtn-tag">${c[2]}</span>
      </div>
    </button>`;
  }).join("");
}

function _updateBannerText(c){
  const nm=L==="JP"?c[1]:c[0];
  const kn=L==="JP"?c[2]:c[1];
  const bnmEl=document.getElementById("pbnr-en");
  const bknEl=document.getElementById("pbnr-kn");
  if(bnmEl)bnmEl.textContent=nm;
  if(bknEl)bknEl.textContent=kn;
  document.getElementById("pd-n").textContent=nm;
  document.getElementById("pd-k").textContent=kn;
}

function _selChar(idx){
  const c=CHARS[idx];if(!c)return;
  _pLocks.forEach(gi=>{
    if(SL[gi]){SL[gi]=false;document.querySelectorAll('[data-lgi="'+gi+'"]').forEach(el=>{el.classList.remove("locked");const x=el.querySelector(".cx");if(x)x.remove();});}
  });
  _pLocks.clear();
  updateCnt();
  _selC=c;_buildCG();

  const months=t("M"),hE=t("hE"),hL=t("hL");
  const grl={j:t("grJ").split("+")[0].trim(),c:t("grC"),s:t("grS").split("+")[0].trim()};
  const slug=c[3];
  const col=CTHEME[slug]||"#4a90d9";

  // ── BANNER (FIX: set textContent not innerHTML to avoid name bug) ──
  const bnr=document.getElementById("pbnr");
  const img=document.getElementById("pbnr-img");
  const bg=document.getElementById("pbnr-bg");
  const bnmEl=document.getElementById("pbnr-en");
  const bknEl=document.getElementById("pbnr-kn");

  bg.style.background=col;
  img.src="umamusumebanner/"+slug+".png";
  img.style.display="block";
  img.onerror=()=>{img.style.display="none";};
  img.onload=()=>{img.style.display="block";};
  bnr.style.borderColor=col;
  bnr.classList.add("on");

  // FIX: use textContent directly — no innerHTML manipulation
  _updateBannerText(c);

  // Goal list
  document.getElementById("pd-app").textContent=t("presetApply");
  document.getElementById("pdet").style.borderTopColor=col+"88";
  const goals=c.slice(4);
  document.getElementById("pd-g").innerHTML=goals.map(g=>{
    const mLbl=months[g[1]]+" "+(g[2]===0?hE:hL);
    return`<div class="gi"><span class="gg ${g[0]}">${grl[g[0]]||g[0]}</span><span class="gm">${mLbl}</span><span class="gn">${g[3]}</span></div>`;
  }).join("");
  document.getElementById("pdet").classList.remove("hidden");
}

function applyPreset(){
  if(!_selC)return;
  _pLocks.forEach(gi=>{
    if(SL[gi]){SL[gi]=false;document.querySelectorAll('[data-lgi="'+gi+'"]').forEach(el=>{el.classList.remove("locked");const x=el.querySelector(".cx");if(x)x.remove();});}
  });
  _pLocks.clear();
  const seen=new Set();
  _selC.slice(4).forEach(g=>{
    const gi=_pci(g[0],g[1],g[2]);
    if(gi<0||gi>=TC)return;
    const k=g[0]+g[1]+g[2];
    if(seen.has(k))return;seen.add(k);
    if(!SL[gi]){
      SL[gi]=true;_pLocks.add(gi);
      document.querySelectorAll('[data-lgi="'+gi+'"]').forEach(el=>{
        el.classList.add("locked");
        if(!el.querySelector(".cx"))el.insertAdjacentHTML("afterbegin","<div class=\"cx\">X</div>");
      });
    }else _pLocks.add(gi);
  });
  updateCnt();savePrefs();
}

/* ─────────────────────────────────────────────
   INIT
───────────────────────────────────────────── */
loadPrefs();
buildSlotCfg();
_fC=[...CHARS];_buildCG();
if(document.getElementById("sg1"))buildSGrid("sg1");
updateCnt();
calcSP();
renderAll();
