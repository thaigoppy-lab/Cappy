/* ── i18n ── */
const D={
EN:{appTitle:"Uma Musume - Specialty Priority Tester",warnTitle:"Notice",warnBody:"The RNG simulation in this tool may not be 100% accurate. The in-game RNG system may be more complex than what can be replicated in a browser. Use as reference only.",spCardTitle:"Specialty Priority Calculator",spFormula:"Formula: (100+SP)×UniqueEffect×100 ÷ [(100×4+50)+(100+SP×UniqueEffect)]",spLblSP:"Specialty Priority (SP)",spLblUE:"Unique Effect Bonus (%)",spLblRes:"Result",lblRuns:"Test Runs",btnRollC:"Roll Combined",btnReset:"Reset",sumTitle:"Total Summary",lbRb:"Rainbow Training",lbOt:"Other Training",lbNo:"Not in Any Training",lbTot:"Total Rolled",s2Title:"Combined Test (5 Slots)",slotSettings:"Slot Settings",slotSumTitle:"Per-Slot Summary",grandTotal:"Grand Total",eyeLbl:"Filter by Slot Color:",simTitle:"10,000-Run Simulation",thCount:"Count",thBar:"Bar",resultHint:"Tap to lock/unlock",holdHint:"Hold a cell to see details",slotActive:"Active",slotRb:"Rainbow Chance (%)",slotCells:"Active Cells",slotColor:"Color",pRolling:"Rolling",pSim:"Running 10,000 sim…",pDone:"Done!",ttLocked:"(Locked)",ttRb:"Rainbow training",ttOt:"Other training",ttNo:"Not in any training",grJ:"Junior",grC:"Classic",grS:"Senior + URA",M:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],hE:"Early",hL:"Late",ura:["URA Early","URA Late","FINAL"],presetTitle:"Character Lock RNG Presets",presetApply:"Apply → Lock Goals",customMode:"Custom Lock Mode",customApply:"Apply Custom Locks",customHint:"Click cells below to select/deselect. Press Apply when done.",legendManual:"Manual lock (clickable)",legendChar:"Char lock (preset, no click)",lockGridTitle:"Lock Grid",sortLbl:"Sort:",sortAZ:"A→Z",sortZA:"Z→A",sortGoals:"# Goals",sortNew:"Newest",sortOld:"Oldest"},
TH:{appTitle:"Uma Musume - Specialty Priority Tester",warnTitle:"คำเตือน",warnBody:"การสุ่ม RNG ในเว็บนี้ไม่ได้มีความถูกต้องแบบ 100% ใช้เพื่ออ้างอิงเท่านั้น ขอบคุณครับ",spCardTitle:"คำนวณ Specialty Priority",spFormula:"สูตร: (100+SP)×UniqueEffect×100 ÷ [(100×4+50)+(100+SP×UniqueEffect)]",spLblSP:"Specialty Priority (SP)",spLblUE:"Unique Effect โบนัส (%)",spLblRes:"ผลลัพธ์",lblRuns:"จำนวนรอบ",btnRollC:"เริ่มสุ่มรวม",btnReset:"รีเซต",sumTitle:"สรุปรวม",lbRb:"การฝึกรุ้ง",lbOt:"การฝึกอื่น",lbNo:"ไม่ตกการฝึกใดเลย",lbTot:"สุ่มทั้งหมด",s2Title:"ทดสอบแบบรวม (5 ส่วน)",slotSettings:"ตั้งค่า 5 ส่วน",slotSumTitle:"สรุปแต่ละส่วน",grandTotal:"รวมทั้งหมด",eyeLbl:"กรองตามสีส่วน:",simTitle:"จำลอง 10,000 รอบ",thCount:"ครั้ง",thBar:"กราฟ",resultHint:"แตะเพื่อล็อค/ปลดล็อค",holdHint:"กดค้างที่ช่องเพื่อดูรายละเอียด",slotActive:"ใช้งาน",slotRb:"เปอร์เซนต์รุ้ง (%)",slotCells:"ช่องที่สุ่ม",slotColor:"สี",pRolling:"กำลังสุ่ม",pSim:"กำลังจำลอง 10,000 รอบ…",pDone:"เสร็จแล้ว!",ttLocked:"(ล็อก)",ttRb:"ตกการฝึกรุ้ง",ttOt:"ตกการฝึกอื่น",ttNo:"ไม่ตกการฝึกใดเลย",grJ:"จูเนียร์",grC:"คลาสสิก",grS:"ซีเนียร์ + URA",M:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],hE:"ต้น",hL:"ปลาย",ura:["URA ต้น","URA ปลาย","FINAL"],presetTitle:"เซ็ตล็อคช่องฝึกตามตัวละคร",presetApply:"ใช้ → ล็อค Goal",customMode:"โหมดล็อคเอง",customApply:"บันทึกการล็อค",customHint:"กดช่องในตารางด้านล่างเพื่อเลือก/ยกเลิก แล้วกด Apply",legendManual:"ล็อคด้วยตัวเอง (กดได้)",legendChar:"ล็อคตัวละคร (preset, กดไม่ออก)",lockGridTitle:"ตารางล็อค",sortLbl:"เรียง:",sortAZ:"A→Z",sortZA:"Z→A",sortGoals:"# เป้าหมาย",sortNew:"ใหม่สุด",sortOld:"เก่าสุด"},
JP:{appTitle:"Uma Musume - 得意率アップ計算機",warnTitle:"ご注意",warnBody:"このツールのRNGシミュレーションは100%正確ではない場合があります。参考としてご利用ください。",spCardTitle:"得意率アップ計算機",spFormula:"計算式: (100+得意率)×固有効果×100 ÷ [(100×4+50)+(100+得意率×固有効果)]",spLblSP:"得意率アップ (SP)",spLblUE:"固有効果 得意率アップ (%)",spLblRes:"結果",lblRuns:"テスト回数",btnRollC:"複合抽選",btnReset:"リセット",sumTitle:"合計サマリー",lbRb:"得意練習（虹枠）",lbOt:"その他の練習",lbNo:"どこにも現れず",lbTot:"総抽選数",s2Title:"複合テスト (5スロット)",slotSettings:"スロット設定",slotSumTitle:"スロット別サマリー",grandTotal:"総合計",eyeLbl:"スロット色でフィルター:",simTitle:"1万回シミュレーション",thCount:"回数",thBar:"グラフ",resultHint:"マスをクリックしてロック/解除",holdHint:"セルを長押しして詳細表示",slotActive:"有効",slotRb:"得意練習確率 (%)",slotCells:"有効マス数",slotColor:"カラー",pRolling:"抽選中",pSim:"1万回シミュレーション実行中…",pDone:"完了!",ttLocked:"(ロック)",ttRb:"得意練習（虹枠）",ttOt:"その他の練習",ttNo:"どこにも現れず",grJ:"ジュニア",grC:"クラシック",grS:"シニア + URA",M:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],hE:"前半",hL:"後半",ura:["URA前半","URA後半","FINAL"],presetTitle:"キャラクターロックプリセット",presetApply:"適用→ゴールロック",customMode:"カスタムロック",customApply:"ロックを適用",customHint:"下のカレンダーでセルをクリックして選択。適用ボタンを押してください。",legendManual:"手動ロック（クリック可）",legendChar:"キャラロック（プリセット、ロック解除不可）",lockGridTitle:"ロックグリッド",sortLbl:"並び替え:",sortAZ:"A→Z",sortZA:"Z→A",sortGoals:"目標数",sortNew:"新順",sortOld:"旧順"},
};
let L="EN";
function t(k){return D[L][k]??D.EN[k]??k;}

/* ── LOCAL STORAGE ── */
const LS="uma_prefs_v2";
function savePrefs(){
  try{
    const p={lang:L,theme:window._theme||"blue",customHex:document.getElementById("ccolor")?.value||"#1a6eb5",
      noticeDismissed:document.getElementById("notice")?.style.display==="none",
      spv:document.getElementById("spv")?.value||"80",uev:document.getElementById("uev")?.value||"20",
      slots:slotData.map(s=>({n:s.n,c:s.c,pct:s.pct,en:s.en})),
      manualLocks:SL.reduce((a,v,i)=>{if(v)a.push(i);return a;},[]),
      sortKey:_sortKey,sortAsc:_sortAsc};
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
    if(p.slots&&Array.isArray(p.slots)){p.slots.forEach((s,i)=>{if(slotData[i]){Object.assign(slotData[i],s);}});}
    if(p.manualLocks&&Array.isArray(p.manualLocks)){p.manualLocks.forEach(gi=>{if(gi>=0&&gi<TC)SL[gi]=true;});}
    if(p.sortKey)_sortKey=p.sortKey;
    if(p.sortAsc!==undefined)_sortAsc=p.sortAsc;
    if(p.theme==="custom"&&p.customHex){const cc=document.getElementById("ccolor");if(cc)cc.value=p.customHex;applyCustomSilent(p.customHex);}
    else if(p.theme)applyThemeSilent(p.theme);
    document.querySelectorAll(".ltab").forEach(el=>el.classList.toggle("on",el.textContent.trim()===L));
  }catch(e){}
}
function closeNotice(){const n=document.getElementById("notice");if(n)n.style.display="none";savePrefs();}

/* ── LANG ── */
function setLang(l){L=l;document.querySelectorAll(".ltab").forEach(el=>el.classList.toggle("on",el.textContent.trim()===l));renderAll();savePrefs();}
function renderAll(){
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
  calcSP();buildSlotCfg();_buildCG();buildSortBar();
  document.querySelectorAll("[data-cgi]").forEach(el=>el.textContent=shortLbl(+el.dataset.cgi));
  document.querySelectorAll("[data-rg]").forEach(el=>el.textContent=t(el.dataset.rg==="j"?"grJ":el.dataset.rg==="c"?"grC":"grS"));
  document.querySelectorAll(".rhint").forEach(el=>el.textContent=t("resultHint"));
  document.querySelectorAll("[data-rs]").forEach(el=>{const d=JSON.parse(el.dataset.rs);el.innerHTML=`${t("lbRb")}: <b>${d.rb}</b> | ${t("lbOt")}: <b>${d.ot}</b> | ${t("lbNo")}: <b>${d.no}</b>`;});
  document.querySelectorAll("[data-sk]").forEach(el=>el.textContent=t(el.dataset.sk));
  buildEye();updateCnt();
  if(_selC)_updateBannerText(_selC);
}

/* ── THEMES ── */
const TH2={blue:{c2:"#1a6eb5",c4:"#0d4f8a",c3:"#d0e8f7",bg:"#f0f6fc",sur:"#fff",bdr:"#b8d4ed",tx:"#0d2137",tx2:"#4a6080"},pink:{c2:"#c03070",c4:"#8a1a50",c3:"#f7d0e5",bg:"#fcf0f6",sur:"#fff",bdr:"#edadd0",tx:"#370d22",tx2:"#803a60"},green:{c2:"#1a7a3c",c4:"#0d5a28",c3:"#d0f7e0",bg:"#f0fcf4",sur:"#fff",bdr:"#b8edd0",tx:"#0d2118",tx2:"#3a6050"},purple:{c2:"#6a2eb5",c4:"#4a1a8a",c3:"#e4d0f7",bg:"#f6f0fc",sur:"#fff",bdr:"#d4b8ed",tx:"#1a0d37",tx2:"#603a80"},orange:{c2:"#b85c1a",c4:"#8a3e0d",c3:"#f7e2d0",bg:"#fcf4f0",sur:"#fff",bdr:"#edc8b8",tx:"#371a0d",tx2:"#805a3a"},dark:{c2:"#4a90d9",c4:"#2a70b9",c3:"#1e2e42",bg:"#111827",sur:"#1a2535",bdr:"#2a3a50",tx:"#e0eaf5",tx2:"#7a9abf"}};
function applyThemeSilent(n){const th=TH2[n];if(!th)return;window._theme=n;Object.entries(th).forEach(([k,v])=>document.documentElement.style.setProperty("--"+k,v));}
function applyTheme(n){applyThemeSilent(n);savePrefs();}
function applyCustomSilent(hex){window._theme="custom";const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);document.documentElement.style.setProperty("--c2",hex);document.documentElement.style.setProperty("--c4",`rgb(${Math.max(0,r-40)},${Math.max(0,g-40)},${Math.max(0,b-40)})`);document.documentElement.style.setProperty("--c3",`rgba(${r},${g},${b},0.2)`);}
function applyCustom(hex){applyCustomSilent(hex);savePrefs();}
function toggleTP(){document.getElementById("tp").classList.toggle("open");}
function toggleSec(id){const b=document.getElementById(id+"-body"),a=document.getElementById(id+"-arr");if(!b)return;const h=b.classList.toggle("hidden");if(a)a.textContent=h?"+ Show":"- Hide";}

/* ── SP CALC ── */
function calcSP(){
  const sp=parseFloat(document.getElementById("spv").value)||0,ue=parseFloat(document.getElementById("uev").value)||0;
  const eff=1+ue/100,num=(100+sp)*eff*100,den=(100*4+50)+(100+sp*eff),res=num/den;
  document.getElementById("sp-res").innerHTML=`eff = <b style="color:#1a6eb5">${eff.toFixed(2)}</b> | <span class="sp-pct">${res.toFixed(2)}%</span>`;
  document.getElementById("sp-steps").textContent=`= (100+${sp})×${eff.toFixed(2)}×100 ÷ [(450)+(100+${sp}×${eff.toFixed(2)})]\n= ${num.toFixed(1)} ÷ ${den.toFixed(2)} ≈ ${res.toFixed(4)}%`;
}

/* ── GRID DEFINITIONS ── */
function jrCells(){return[{t:"m",m:3,h:0},{t:"m",m:3,h:0},{t:"m",m:3,h:1},{t:"m",m:3,h:1},{t:"m",m:4,h:0},{t:"m",m:4,h:0},{t:"m",m:4,h:1},{t:"m",m:4,h:1},{t:"m",m:5,h:0},{t:"m",m:5,h:0},{t:"m",m:5,h:1},{t:"m",m:5,h:1},{t:"m",m:6,h:0},{t:"m",m:6,h:1},{t:"m",m:7,h:0},{t:"m",m:7,h:1},{t:"m",m:8,h:0},{t:"m",m:8,h:1},{t:"m",m:9,h:0},{t:"m",m:9,h:1},{t:"m",m:10,h:0},{t:"m",m:10,h:1},{t:"m",m:11,h:0},{t:"m",m:11,h:1}];}
function mCells(s,n){const c=[];for(let i=0;i<n;i++)c.push({t:"m",m:(s+Math.floor(i/2))%12,h:i%2});return c;}
const GD=[{k:"j",cells:jrCells(),cols:4,tg:"j"},{k:"c",cells:mCells(0,24),cols:4,tg:"c"},{k:"s",cells:mCells(0,24),cols:4,tg:"s"},{k:"u",cells:[{t:"u",i:0},{t:"u",i:1},{t:"u",i:2}],cols:3,tg:"s"}];
const GS={};let _ci=0;GD.forEach(g=>{GS[g.k]=_ci;_ci+=g.cells.length;});const TC=_ci;

function shortLbl(gi){for(const g of GD){const s=GS[g.k];if(gi>=s&&gi<s+g.cells.length){const c=g.cells[gi-s];if(c.t==="u")return t("ura")[c.i];return t("M")[c.m]+(c.h===0?t("hE"):t("hL"));}}return "";}
function fullLbl(gi){for(const g of GD){const s=GS[g.k];if(gi>=s&&gi<s+g.cells.length){const c=g.cells[gi-s];if(c.t==="u")return t("ura")[c.i];return t("M")[c.m]+" "+(c.h===0?t("hE"):t("hL"));}}return "";}
function _pci(gr,m,h){
  if(gr==="j"){if(m<3||m>11)return-1;if(m<=5)return(m-3)*4+h*2;return 12+(m-6)*2+h;}
  if(gr==="c")return 24+m*2+h;if(gr==="s")return 48+m*2+h;return -1;
}

/* ── LOCKS: SL=manual, CL=char-preset ── */
const SL=new Array(TC).fill(false); // manual locks
const CL=new Array(TC).fill(null);  // char locks: null or {col,name}
const RL=new Set(); // result remove
function getAct(){return SL.reduce((n,v,i)=>(!v&&!CL[i]&&!RL.has(i))?n+1:n,0);}
function updateCnt(){const a=getAct();slotData.forEach((_,i)=>{const e=document.getElementById("sc-"+i);if(e)e.value=a;});}

function toggleSL(gi){
  if(CL[gi])return; // cannot toggle char-locked
  SL[gi]=!SL[gi];
  _refreshCellClass(gi);
  updateCnt();savePrefs();
   // refresh inline grid
}
function toggleRL(gi,el){
  if(CL[gi])return; // can't RL a char-locked cell from result
  if(RL.has(gi)){RL.delete(gi);el.classList.remove("rl");}else{RL.add(gi);el.classList.add("rl");}
  updateCnt();
}
function _refreshCellClass(gi){
  document.querySelectorAll(`[data-lgi="${gi}"]`).forEach(el=>{
    el.classList.remove("locked","char-locked");
    el.style.removeProperty("border-color");el.style.removeProperty("background");
    el.style.removeProperty("--char-col");
    const cx=el.querySelector(".cx");if(cx)cx.remove();
    if(CL[gi]){
      el.classList.add("char-locked");
      el.style.setProperty("--char-col",CL[gi].col);
      el.style.borderColor=CL[gi].col;
      el.style.background=CL[gi].col+"22";
      el.insertAdjacentHTML("afterbegin",`<div class="cx" style="background:${CL[gi].col};color:#fff;border-radius:2px;padding:0 2px;font-size:6px">★</div>`);
    }else if(SL[gi]){
      el.classList.add("locked");
      el.insertAdjacentHTML("afterbegin","<div class=\"cx\">X</div>");
    }
  });
}

/* ── TOOLTIP ── */
const ttEl=document.getElementById("tt");
let ttVis=false,holdTimer=null;
function buildTTContent(gi,cellEl){
  const lk=SL[gi]||!!CL[gi]||RL.has(gi);const fl=fullLbl(gi);
  let data={d:[],o:[],n:[]};
  if(cellEl&&cellEl.dataset.tt){try{data=JSON.parse(cellEl.dataset.tt);}catch(e){}}
  let h=`<div class="tt-m">${fl}${lk?" "+t("ttLocked"):""}</div>`;
  // Show char lock with goal races from that char
  if(CL[gi]){
    h+=`<div style="font-size:9px;color:#fbbf24;margin-bottom:3px">★ ${CL[gi].name}</div>`;
    if(CL[gi].races&&CL[gi].races.length){
      CL[gi].races.forEach(r=>{h+=`<div style="font-size:9px;color:#d1d5db;margin-bottom:1px">→ ${r}</div>`;});
    }
  }
  // Show manual lock race names if available
  if(SL[gi]&&cellEl&&cellEl.dataset.races){
    try{JSON.parse(cellEl.dataset.races).forEach(r=>{h+=`<div style="font-size:9px;color:#d1d5db">→ ${r}</div>`;});}catch(e){}
  }
  if(data.d?.length)data.d.forEach(x=>{h+=`<div class="tt-r"><div class="tt-d" style="background:${x.c}"></div><span>${x.n}: ${t("ttRb")}</span></div>`;});
  if(data.o?.length)data.o.forEach(x=>{h+=`<div class="tt-r"><div class="tt-d" style="background:${x.c};opacity:.5"></div><span>${x.n}: ${t("ttOt")}</span></div>`;});
  if(data.n?.length)data.n.forEach(x=>{h+=`<div class="tt-r"><div class="tt-d" style="background:${x.c};opacity:.25"></div><span>${x.n}: ${t("ttNo")}</span></div>`;});
  if(!data.d?.length&&!data.o?.length&&!data.n?.length&&!CL[gi]&&!SL[gi])h+=`<div class="tt-n">—</div>`;
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


function swTab(uid,key){
  // Preserve scroll position to prevent layout jump
  const sy=window.scrollY;
  document.querySelectorAll(`[data-gt^="${uid}-"]`).forEach(el=>el.classList.toggle("on",el.dataset.gt===`${uid}-${key}`));
  ["j","c","s"].forEach(g=>{const p=document.getElementById(`${uid}-p-${g}`);if(p)p.classList.toggle("on",g===key);});
  requestAnimationFrame(()=>window.scrollTo({top:sy,behavior:"instant"}));
}

/* ── RNG ── */
function roll(pct){const r=Math.floor(Math.random()*10000)/100,rem=100-pct,oth=rem*(72.8/81.8);if(r<pct)return"rb";if(r<pct+oth)return"ot";return"no";}

/* ── EYE FILTER ── */
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
  document.getElementById("s2out")?.querySelectorAll(".cell").forEach(cell=>{
    const dots=cell.querySelectorAll(".dot");
    if(color===null){cell.style.opacity="";dots.forEach(d=>{d.style.filter="";d.style.opacity="";});}
    else{const has=[...dots].some(d=>d.dataset.c===color);cell.style.opacity=has?"":"0.4";dots.forEach(d=>{if(d.dataset.c===color){d.style.filter="";d.style.opacity="1";}else{d.style.filter="grayscale(1)";d.style.opacity="0.15";}});}
  });
}

/* ── RESULT CALENDAR ── */
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
        const gi=st+i,dots=cr[gi]||[],lk=SL[gi],cl=!!CL[gi],rl=RL.has(gi),lb=shortLbl(gi);
        const mc=dots.length>3?" many":"";
        const dh=dots.map(d=>`<div class="dot" data-c="${d.c}" style="background:${d.c}"></div>`).join("");
        const ttData=cr[`_tt_${gi}`]||{d:[],o:[],n:[]};
        const ttJSON=JSON.stringify(ttData).replace(/"/g,"&quot;");
        let cls="cell rm";
        let inlineStyle="";
        if(cl){
          cls+=" char-locked";
          inlineStyle=`--char-col:${CL[gi].col};border-color:${CL[gi].col};background:${CL[gi].col}22`;
        }else if(lk)cls+=" locked";
        if(rl)cls+=" rl";
        const cxHtml=cl?`<div class="cx" style="background:${CL[gi].col};color:#fff;border-radius:2px;padding:0 2px;font-size:6px">★</div>`:lk||rl?'<div class="cx">X</div>':'';
        const goalChars=_GOAL_MAP[gi]||[];
        const charImgHtml=cl&&CL[gi].slug?`<div class="cell-chars"><div class="cell-char-wrap"><img class="cell-char-img" src="./umamusumebanner/${CL[gi].slug}.png" alt="${CL[gi].name}" loading="lazy" onerror="this.style.display='none'"><div class="cell-char-dot" style="background:${CL[gi].col}"></div></div><div class="cell-race-name">${CL[gi].races&&CL[gi].races.length?CL[gi].races.join('<br>'):''}</div></div>`:"";
        h+=`<div class="${cls}" data-gi="${gi}" data-tt="${ttJSON}" style="${inlineStyle}">${cxHtml}<div class="drow${mc}">${dh}</div>${charImgHtml}<div class="clbl" data-cgi="${gi}">${lb}</div></div>`;
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
  block.querySelectorAll(".cell.rm").forEach(cell=>{
    const gi=+cell.dataset.gi;
    if(!CL[gi])cell.addEventListener("click",()=>toggleRL(gi,cell));
    attachTT(cell,gi);
  });
  return block;
}
function togRun(h){const b=h.nextElementSibling,a=h.querySelector(".sa");const hd=b.classList.toggle("hidden");a.textContent=hd?"+ Show":"- Hide";}

/* ── SIM ── */
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

/* ── SLOTS ── */
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

/* ── COMBINED ── */
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
        if(SL[gi]||CL[gi]||RL.has(gi))continue;
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
  document.getElementById("s2grand").innerHTML=`<div class="smbox"><div class="smval">${gRb}</div><div class="smlbl" data-sk="lbRb">${t("lbRb")}</div></div><div class="smbox"><div class="smval">${gOt}</div><div class="smlbl" data-sk="lbOt">${t("lbOt")}</div></div><div class="smbox"><div class="smval">${gNo}</div><div class="smlbl" data-sk="lbNo">${t("lbNo")}</div></div><div class="smbox"><div class="smval">${gTot}</div><div class="smlbl" data-sk="lbTot">${t("lbTot")}</div></div>`;
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
  document.getElementById("s2out").innerHTML="";
  document.getElementById("s2sum").style.display="none";
  document.getElementById("s2sim").style.display="none";
  document.getElementById("s2pw").style.display="none";
  document.getElementById("s2pf").style.width="0%";
  document.getElementById("ewrap").style.display="none";
  eye=null;RL.clear();updateCnt();
}

/* ════════════════════════════════════
   CHARACTERS DATA
   Format: [en, kana, style, slug, releaseOrder, ...goals]
   releaseOrder: lower = older (used for sort)
════════════════════════════════════ */
/* Personal Colors sourced from official Uma Musume character profiles */
const CTHEME={
// Official personal colors from character profiles
"special-week":"#ff69b4",      // pink (ピンク)
"silence-suzuka":"#228b22",    // green (緑)
"tokai-teio":"#ffd700",        // gold/yellow
"mejiro-mcqueen":"#9370db",    // purple
"maruzensky":"#dc143c",        // crimson red
"fuji-kiseki":"#cc3355",       // rose
"oguri-cap":"#6b8e23",         // olive green
"gold-ship":"#dc143c",         // red (actually red in game)
"daiwa-scarlet":"#dc143c",     // scarlet red
"vodka":"#4169e1",             // royal blue
"el-condor-pasa":"#daa520",    // golden rod
"grass-wonder":"#ff8c00",      // dark orange
"taiki-shuttle":"#008080",     // teal
"hishi-amazon":"#c71585",      // medium violet red
"tm-opera-o":"#9932cc",        // dark orchid
"narita-brian":"#483d8b",      // dark slate blue
"air-groove":"#708090",        // slate gray
"mayano-top-gun":"#ff4500",    // orange red
"super-creek":"#2e8b57",       // sea green
"manhattan-cafe":"#8b6914",    // dark goldenrod brown
"mihono-bourbon":"#cd853f",    // peru/brown
"mejiro-ryan":"#4682b4",       // steel blue
"biwa-hayahide":"#2f4f8f",     // dark blue
"rice-shower":"#da70d6",       // orchid pink
"seiun-sky":"#1e90ff",         // dodger blue
"agnes-tachyon":"#dc143c",     // crimson
"winning-ticket":"#1e3a8a",    // dark blue
"nice-nature":"#ff8c00",       // orange
"sakura-bakushin-o":"#ff1493", // deep pink
"smart-falcon":"#556b2f",      // dark olive
"matikanefukukitaru":"#8a2be2",// blue violet
"curren-chan":"#ff3366",        // rose red
"agnes-digital":"#ff69b4",     // hot pink
"kawakami-princess":"#c71585", // violet red
"fine-motion":"#6a0dad",       // purple
"admire-vega":"#00008b",       // dark blue
"eishin-flash":"#1e5799",      // dark blue
"tamamo-cross":"#006400",      // dark green
"mejiro-dober":"#9932cc",      // dark orchid
"tosen-jordan":"#1e90ff",      // dodger blue
"sakura-chiyono-o":"#ff69b4",  // pink
"inari-one":"#8b008b",         // dark magenta
"sweep-tosho":"#e91e63",       // pink
"air-shakur":"#1565c0",        // dark blue
"bamboo-memory":"#228b22",     // forest green
"yukino-bijin":"#db7093",      // pale violet red
"satono-diamond":"#3f51b5",    // indigo
"mejiro-bright":"#2196f3",     // blue
"nishino-flower":"#e91e63",    // pink
"yaeno-muteki":"#4caf50",      // green
"ines-fujin":"#00bcd4",        // cyan
"mejiro-palmer":"#1976d2",     // blue
"matikanetannhauser":"#673ab7",// deep purple
"hishi-miracle":"#7b1fa2",     // purple
"narita-top-road":"#0d47a1",   // dark blue
"jungle-pocket":"#795548",     // brown
"duramente":"#1a237e",         // dark indigo
"marvelous-sunday":"#8d6e63",  // brown gray
"sakura-laurel":"#f06292",     // light pink
"twin-turbo":"#d32f2f",        // red
"zenno-rob-roy":"#37474f",     // blue gray
"neo-universe":"#1565c0",      // blue
"dantsu-flame":"#b71c1c",      // dark red
"cesario":"#7e57c2",           // purple
"orfevre":"#c62828",           // dark red
"gentildonna":"#e91e63",       // pink
"kizuna":"#388e3c",            // green
"harp-star":"#f57c00",         // orange
"just-a-way":"#1976d2",        // blue
"shonan-pandora":"#7b1fa2",    // purple
"lovely-day":"#e64a19",        // deep orange
"real-steel":"#455a64",        // blue gray
"mickey-queen":"#ad1457",      // dark pink
"lucky-lilac":"#7b1fa2",       // purple
"nakayama-festa":"#ef6c00",    // orange
"seeking-the-pearl":"#c0392b", // red
"shinko-windy":"#c0392b",      // red
"yamanin-zephyr":"#27ae60",    // green
"aston-machan":"#e53935",      // red
"transcend":"#ff8f00",         // amber
"satono-crown":"#2980b9",      // blue
"cheval-grand":"#1a6eb5",      // blue
"vivlos":"#8e24aa",            // purple
"mejiro-ramonu":"#5e35b1",     // deep purple
"ksmiracle":"#43a047",         // green
"sounds-of-earth":"#2196f3",   // blue
"north-flight":"#e91e63",      // pink
"espoir-city":"#0288d1",       // blue
"still-in-love":"#e91e63",     // pink
"verxina":"#6a1b9a",           // purple
"no-reason":"#4527a0",         // deep purple
"fusaichi-pandora":"#d81b60",  // pink
"win-variation":"#00acc1",     // cyan
"air-messiah":"#1565c0",       // blue
"bubble-gum-fellow":"#e91e63", // pink
"durandal":"#3949ab",          // indigo
"calstone-light-o":"#558b2f",  // green
"dream-journey":"#6a1b9a",     // purple
"mr-cb":"#1a237e",             // dark blue
"symboli-kris-s":"#455a64",    // blue gray
"daiichi-ruby":"#c62828",      // dark red
"tanino-gimlet":"#6d4c41",     // brown
"katsuragi-ace":"#8d6e63",     // brown
"hishi-miracle":"#6a1b9a",     // purple
"rhein-kraft":"#1565c0",       // blue
"tap-dance-city":"#c62828",    // red
"daitaku-helios":"#f57f17",    // yellow
"hokko-tarumae":"#5d4037",     // brown
"wonder-acute":"#e53935",      // red
"gran-alegria":"#e53935",      // red
"fenomeno":"#f57c00",          // orange
"loves-only-you":"#d81b60",    // pink
"chrono-genesis":"#5e35b1",    // purple
"almond-eye":"#1976d2",        // blue
"stay-gold":"#f9a825",         // yellow/gold
"kiseki":"#1565c0",            // blue
"victoire-pisa":"#9c27b0",     // purple
"buena-vista":"#e91e63",       // pink
"believe":"#1976d2",           // blue
"furioso":"#bf360c",           // deep orange
"admire-groove":"#8d6e63",     // brown
"sirius-symboli":"#1a237e",    // dark blue
"narita-taishin":"#3f51b5",    // indigo
"meisho-doto":"#546e7a",       // blue gray
"gold-city":"#f9a825",         // amber/gold
"hishi-akebono":"#37474f",     // dark gray
"kitasan-black":"#1a237e",     // dark blue
"mejiro-ardan":"#2e7d32",      // dark green
"king-halo":"#d32f2f",         // red
"epiphaneia":"#bf360c",        // deep orange
"admire-vega":"#0d47a1",       // dark blue
"haru-urara":"#ff80ab",        // pink
"super-creek":"#2e7d32",       // green
"mayano-top-gun":"#e64a19",    // deep orange
"mejiro-ryan":"#1565c0",       // blue
"agnes-tachyon":"#b71c1c",     // dark red
"winning-ticket":"#283593",    // dark blue
"rice-shower":"#ad1457",       // dark pink
"sakura-bakushin-o":"#e91e63", // pink
"matikanefukukitaru":"#6a1b9a",// purple
"matikanetannhauser":"#4527a0",// deep purple
"nice-nature":"#f57c00",       // orange
};

/* releaseOrder: index in URL list (0=newest lucky-lilac, higher=older) */
const CHARS=[
  ["Lucky Lilac","ラッキーライラック","Mile·Med","lucky-lilac",0,["j", 5, 1, "Make Debut"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["s", 1, 1, "Nakayama Kine"],["s", 2, 1, "Osaka Hai"],["s", 4, 0, "Victoria Mile"],["s", 10, 0, "Queen Elizabeth Cup"],["s", 10, 1, "Japan Cup"]],
  ["Victoire Pisa","ヴィクトワールピサ","Med·Long","victoire-pisa",1,["j", 5, 1, "Make Debut"],["j", 11, 1, "Hopeful Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 10, 1, "Japan Cup"],["c", 11, 1, "Arima Kine"],["s", 1, 1, "Nakayama Kine"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Almond Eye","アーモンドアイ","Mile·Med","almond-eye",2,["j", 5, 1, "Make Debut"],["c", 0, 0, "Shinzan Kine"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["c", 10, 1, "Japan Cup"],["s", 2, 1, "Osaka Hai"],["s", 4, 0, "Victoria Mile"],["s", 5, 0, "Yasuda Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"]],
  ["Kiseki","キセキ","Long","kiseki",3,["j", 5, 1, "Make Debut"],["c", 9, 1, "Kikuka Sho"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 0, "Kyoto Daishote"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Stay Gold","ステイゴールド","Long","stay-gold",4,["j", 5, 1, "Make Debut"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Buena Vista","ブエナビスタ","Mile·Med","buena-vista",5,["j", 5, 1, "Make Debut"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["c", 11, 1, "Arima Kine"],["s", 4, 0, "Victoria Mile"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Dantsu Flame","ダンツフレーム","Mile·Med","dantsu-flame",6,["j", 5, 1, "Make Debut"],["c", 1, 0, "Kisaragi Sho"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["c", 10, 1, "Mile Championship"],["s", 4, 0, "Niigata Daishote"],["s", 5, 0, "Yasuda Kine"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"]],
  ["Believe","ビリーヴ","Sprint·Mile","believe",7,["j", 5, 1, "Make Debut"],["c", 2, 1, "Falcon Stakes"],["c", 7, 1, "Kitakyushu Kine"],["c", 8, 0, "Centaur Stakes"],["c", 8, 1, "Sprinters Stakes"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 8, 0, "Centaur Stakes"],["s", 8, 1, "Sprinters Stakes"]],
  ["Espoir City","エスポワールシチー","Dirt·Mile","espoir-city",8,["j", 5, 1, "Make Debut"],["c", 9, 0, "Mile Championship Nambu Hai"],["c", 11, 0, "Champions Cup"],["s", 1, 1, "February Stakes"],["s", 4, 0, "Kashiwa Kine"],["s", 5, 1, "Teio Sho"],["s", 9, 0, "Mile Championship Nambu Hai"],["s", 10, 0, "JBC Sprint"]],
  ["Still in Love","スティルインラブ","Mile·Med","still-in-love",9,["j", 5, 1, "Make Debut"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["c", 10, 0, "Queen Elizabeth II Cup"],["s", 2, 0, "Kinko Sho"],["s", 5, 1, "Takarazuka Kine"],["s", 10, 0, "Queen Elizabeth II Cup"],["s", 10, 1, "Japan Cup"]],
  ["Fusaichi Pandora","フサイチパンドラ","Mile·Med","fusaichi-pandora",10,["j", 5, 1, "Make Debut"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["c", 10, 0, "Queen Elizabeth II Cup"],["s", 4, 0, "Victoria Mile"],["s", 7, 1, "Sapporo Kine"],["s", 10, 0, "Queen Elizabeth II Cup"]],
  ["Chrono Genesis","クロノジェネシス","Med·Long","chrono-genesis",11,["j", 5, 1, "Make Debut"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["s", 2, 1, "Osaka Hai"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kine"]],
  ["Loves Only You","ラヴズオンリーユー","Mile·Med","loves-only-you",12,["j", 5, 1, "Make Debut"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["s", 1, 0, "Kyoto Kine"],["s", 4, 0, "Victoria Mile"],["s", 5, 1, "Takarazuka Kine"],["s", 10, 0, "Queen Elizabeth Cup"],["s", 10, 1, "Japan Cup"]],
  ["Verxina","ヴェルツァースカ","Mile·Med","verxina",13,["j", 5, 1, "Make Debut"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["s", 2, 1, "Osaka Hai"],["s", 4, 0, "Victoria Mile"],["s", 10, 0, "Queen Elizabeth II Cup"],["s", 10, 1, "Japan Cup"]],
  ["Fenomeno","フェノーメノ","Long","fenomeno",14,["j", 5, 1, "Make Debut"],["j", 11, 1, "Hopeful Stakes"],["c", 3, 1, "Aoba Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Tenno Sho (Autumn)"],["c", 10, 1, "Japan Cup"],["s", 2, 1, "Nikkei Sho"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 11, 1, "Arima Kine"]],
  ["No Reason","ノーリーズン","Long","no-reason",15,["j", 5, 1, "Make Debut"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["c", 11, 1, "Arima Kine"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"]],
  ["Gran Alegria","グランアレグリア","Sprint·Mile","gran-alegria",16,["j", 5, 1, "Make Debut"],["j", 11, 0, "Asahi Hai Futurity Stakes"],["c", 3, 0, "Oka Sho"],["c", 4, 0, "NHK Mile Cup"],["c", 11, 1, "Hanshin Cup"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 5, 0, "Yasuda Kine"],["s", 8, 1, "Sprinters Stakes"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Mile Championship"]],
  ["Orfevre","オルフェーヴル","Long","orfevre",17,["j", 5, 1, "Make Debut"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["c", 11, 1, "Arima Kine"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Furioso","フリオーソ","Dirt·Long","furioso",18,["j", 5, 1, "Make Debut"],["j", 11, 1, "Zen-Nippon Junior Yush"],["c", 6, 0, "Japan Dirt Derby"],["c", 10, 0, "JBC Classic"],["c", 11, 0, "Champions Cup"],["c", 11, 1, "Tokyo Daishote"],["s", 1, 1, "February Stakes"],["s", 2, 1, "Diolite Kine"],["s", 4, 0, "Kashiwa Kine"],["s", 5, 1, "Teio Sho"],["s", 10, 0, "JBC Classic"]],
  ["Win Variation","ウインヴァリアシオン","Mile","win-variation",19,["j", 5, 1, "Make Debut"],["c", 3, 1, "Aoba Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["c", 10, 1, "Japan Cup"],["s", 2, 1, "Nikkei Sho"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 11, 1, "Arima Kine"]],
  ["Air Messiah","エアメサイア","Mile·Med","air-messiah",20,["j", 5, 1, "Make Debut"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["c", 10, 0, "Queen Elizabeth II Cup"],["s", 4, 0, "Victoria Mile"],["s", 10, 0, "Queen Elizabeth II Cup"]],
  ["Bubble Gum Fellow","バブルガムフェロー","Mile·Med","bubble-gum-fellow",21,["j", 5, 1, "Make Debut"],["j", 11, 0, "Asahi Hai Futurity Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Tenno Sho (Autumn)"],["c", 10, 1, "Japan Cup"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"]],
  ["Durandal","デュランダル","Sprint·Mile","durandal",22,["j", 5, 1, "Make Debut"],["c", 4, 0, "NHK Mile Cup"],["c", 8, 0, "Centaur Stakes"],["c", 8, 1, "Sprinters Stakes"],["c", 10, 1, "Mile Championship"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 5, 0, "Yasuda Kine"],["s", 8, 1, "Sprinters Stakes"],["s", 10, 1, "Mile Championship"]],
  ["Cesario","シーザリオ","Med·Long","cesario",23,["j", 5, 1, "Make Debut"],["c", 2, 1, "Flower Cup"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["s", 4, 0, "Victoria Mile"],["s", 10, 0, "Queen Elizabeth II Cup"],["s", 10, 1, "Japan Cup"]],
  ["Gentildonna","ジェンティルドンナ","Med·Long","gentildonna",24,["j", 5, 1, "Make Debut"],["c", 0, 0, "Shinzan Kine"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["c", 10, 1, "Japan Cup"],["s", 2, 1, "Osaka Hai"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Calstone Light O","カルストンライトオ","Sprint","calstone-light-o",25,["j", 5, 1, "Make Debut"],["j", 11, 0, "Asahi Hai Futurity Stakes"],["c", 4, 1, "Aoi Stakes"],["c", 6, 1, "Ibis Summer Dash"],["c", 8, 1, "Sprinters Stakes"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 6, 1, "Ibis Summer Dash"],["s", 8, 1, "Sprinters Stakes"]],
  ["Dream Journey","ドリームジャーニー","Med·Long","dream-journey",26,["j", 5, 1, "Make Debut"],["j", 11, 0, "Asahi Hai Futurity Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 2, 1, "Osaka Hai"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 8, 1, "All Comers"],["s", 11, 1, "Arima Kine"]],
  ["Jungle Pocket","ジャングルポケット","Med·Long","jungle-pocket",27,["j", 5, 1, "Make Debut"],["j", 11, 1, "Hopeful Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["c", 10, 1, "Japan Cup"],["s", 2, 1, "Hanshin Daishote"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["North Flight","ノースフライト","Mile","north-flight",28,["j", 5, 1, "Make Debut"],["c", 9, 0, "Fuchu Umamusume Stakes"],["c", 9, 1, "Shuka Sho"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 3, 1, "Milers Cup"],["s", 5, 0, "Yasuda Kine"],["s", 9, 1, "Swan Stakes"],["s", 10, 1, "Mile Championship"]],
  ["Sounds of Earth","サウンズオブアース","Med·Long","sounds-of-earth",29,["j", 5, 1, "Make Debut"],["c", 4, 0, "Kyoto Shimbun Hai"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 2, 1, "Nikkei Sho"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 7, 1, "Sapporo Kine"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Rhein Kraft","ラインクラフト","Mile","rhein-kraft",30,["j", 5, 1, "Make Debut"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 2, 0, "Fillies' Revue"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 4, 0, "Victoria Mile"],["s", 8, 1, "Sprinters Stakes"],["s", 10, 0, "Queen Elizabeth II Cup"]],
  ["Transcend","トランセンド","Dirt·Med","transcend",31,["j", 5, 1, "Make Debut"],["c", 7, 0, "Leopard Stakes"],["c", 10, 0, "Miyako Stakes"],["c", 11, 0, "Champions Cup"],["s", 1, 1, "February Stakes"],["s", 5, 1, "Teio Sho"],["s", 9, 0, "Mile Championship Nambu Hai"],["s", 10, 0, "JBC Classic"],["s", 11, 0, "Champions Cup"]],
  ["Duramente","ドゥラメンテ","Med·Long","duramente",32,["j", 5, 1, "Make Debut"],["c", 1, 0, "Kyodo News Hai"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 1, 1, "Nakayama Kine"],["s", 2, 1, "Osaka Hai"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"]],
  ["Vivlos","ヴィブロス","Mile·Med","vivlos",33,["j", 5, 1, "Make Debut"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 8, 0, "Shion Stakes"],["c", 9, 1, "Shuka Sho"],["s", 1, 1, "Nakayama Kine"],["s", 4, 0, "Victoria Mile"],["s", 5, 1, "Takarazuka Kine"],["s", 10, 1, "Japan Cup"]],
  ["Cheval Grand","シュヴァルグラン","Long","cheval-grand",34,["j", 5, 1, "Make Debut"],["s", 2, 1, "Hanshin Daishote"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 0, "Kyoto Daishote"],["s", 10, 1, "Japan Cup"]],
  ["Satono Crown","サトノクラウン","Med·Long","satono-crown",35,["j", 5, 1, "Make Debut"],["j", 10, 1, "Tokyo Sports Hai Junior Stakes"],["c", 2, 0, "Yayoi Sho"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["s", 1, 0, "Kyoto Kine"],["s", 2, 1, "Osaka Hai"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"]],
  ["Tap Dance City","タップダンスシチー","Med·Long","tap-dance-city",36,["j", 5, 1, "Make Debut"],["c", 11, 0, "Challenge Cup"],["s", 2, 0, "Kinko Sho"],["s", 5, 1, "Takarazuka Kine"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Mejiro Ramonu","メジロラモーヌ","Mile·Med","mejiro-ramonu",37,["j", 5, 1, "Make Debut"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["s", 4, 0, "Victoria Mile"],["s", 5, 1, "Takarazuka Kine"],["s", 10, 0, "Queen Elizabeth II Cup"],["s", 10, 1, "Japan Cup"]],
  ["KS Miracle","ミラクルレジェンド","Dirt·Med","ksmiracle",38,["j", 5, 1, "Make Debut"],["c", 4, 1, "Aoi Stakes"],["c", 5, 1, "Hakodate Sprint Stakes"],["c", 7, 1, "Keeneland Cup"],["c", 8, 0, "Centaur Stakes"],["c", 8, 1, "Sprinters Stakes"],["c", 9, 1, "Swan Stakes"],["c", 10, 1, "Mile Championship"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 5, 0, "Yasuda Kine"],["s", 8, 1, "Sprinters Stakes"]],
  ["Narita Top Road","ナリタトップロード","Long","narita-top-road",39,["j", 5, 1, "Make Debut"],["c", 2, 0, "Yayoi Sho"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Sirius Symboli","シリウスシンボリ","Medium","sirius-symboli",40,["j", 5, 1, "Make Debut"],["j", 9, 0, "Saudi Arabia Royal Cup"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["c", 11, 1, "Arima Kine"],["s", 2, 1, "Osaka Hai"],["s", 5, 1, "Takarazuka Kine"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Katsuragi Ace","カツラギエース","Medium","katsuragi-ace",41,["j", 5, 1, "Make Debut"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 2, 1, "Osaka Hai"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Marvelous Sunday","マーベラスサンデー","Med·Long","marvelous-sunday",42,["j", 5, 1, "Make Debut"],["c", 11, 0, "Challenge Cup"],["s", 2, 1, "Osaka Hai"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Tanino Gimlet","タニノギムレット","Medium","tanino-gimlet",43,["j", 5, 1, "Make Debut"],["c", 0, 0, "Shinzan Kine"],["c", 3, 0, "Satsuki Sho"],["c", 4, 0, "NHK Mile Cup"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 8, 1, "Kobe Shimbun Hai"],["c", 9, 1, "Tenno Sho (Autumn)"],["s", 5, 0, "Yasuda Kine"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"]],
  ["Hishi Miracle","ヒシミラクル","Long","hishi-miracle",44,["j", 5, 1, "Make Debut"],["c", 8, 1, "Kobe Shimbun Hai"],["c", 9, 1, "Kikuka Sho"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Neo Universe","ネオユニヴァース","Medium","neo-universe",45,["j", 5, 1, "Make Debut"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 5, 1, "Takarazuka Kine"],["c", 9, 1, "Kikuka Sho"],["c", 10, 1, "Japan Cup"],["s", 2, 1, "Osaka Hai"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"]],
  ["Sakura Laurel","サクラローレル","Long","sakura-laurel",46,["j", 5, 1, "Make Debut"],["s", 0, 0, "Nakayama Kimpai"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Symboli Kris S","シンボリクリスエス","Med·Long","symboli-kris-s",47,["j", 5, 1, "Make Debut"],["c", 3, 1, "Aoba Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Tenno Sho (Autumn)"],["c", 11, 1, "Arima Kine"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Daiichi Ruby","ダイイチルビー","Mile","daiichi-ruby",48,["j", 5, 1, "Make Debut"],["c", 2, 0, "Fillies' Revue"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 8, 0, "Rose Stakes"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 5, 0, "Yasuda Kine"],["s", 8, 1, "Sprinters Stakes"],["s", 10, 1, "Mile Championship"]],
  ["Mr. C.B.","ミスターシービー","Long","mr-cb",49,["j", 5, 1, "Make Debut"],["c", 1, 0, "Kyodo News Hai"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Shinko Windy","シンコウウインディ","Dirt·Mile","shinko-windy",50,["j", 5, 1, "Make Debut"],["c", 5, 1, "Unicorn Stakes"],["c", 6, 0, "Japan Dirt Derby"],["s", 0, 1, "Tokai Stakes"],["s", 1, 1, "February Stakes"],["s", 5, 1, "Teio Sho"],["s", 11, 0, "Champions Cup"]],
  ["Daitaku Helios","ダイタクヘリオス","Mile","daitaku-helios",51,["j", 5, 1, "Make Debut"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 4, 1, "Aoi Stakes"],["c", 10, 1, "Mile Championship"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 3, 1, "Milers Cup"],["s", 5, 0, "Yasuda Kine"],["s", 10, 1, "Mile Championship"],["s", 11, 1, "Arima Kine"]],
  ["Hokko Tarumae","ホッコータルマエ","Dirt·Med","hokko-tarumae",52,["j", 5, 1, "Make Debut"],["c", 7, 0, "Leopard Stakes"],["c", 11, 0, "Champions Cup"],["s", 1, 0, "Kawasaki Kine"],["s", 4, 0, "Kashiwa Kine"],["s", 5, 1, "Teio Sho"],["s", 10, 0, "JBC Classic"],["s", 11, 0, "Champions Cup"],["s", 11, 1, "Tokyo Daishote"]],
  ["Zenno Rob Roy","ゼンノロブロイ","Med·Long","zenno-rob-roy",53,["j", 5, 1, "Make Debut"],["c", 3, 1, "Aoba Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["c", 11, 1, "Arima Kine"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Wonder Acute","ワンダーアキュート","Dirt·Med","wonder-acute",54,["j", 5, 1, "Make Debut"],["c", 6, 0, "Japan Dirt Derby"],["c", 8, 1, "Sirius Stakes"],["c", 11, 1, "Tokyo Daishote"],["s", 1, 0, "Kawasaki Kine"],["s", 4, 0, "Kashiwa Kine"],["s", 5, 1, "Teio Sho"],["s", 10, 0, "JBC Classic"],["s", 11, 0, "Champions Cup"],["s", 11, 1, "Tokyo Daishote"]],
  ["Nakayama Festa","ナカヤマフェスタ","Med·Long","nakayama-festa",55,["j", 5, 1, "Make Debut"],["c", 0, 0, "Keisei Hai"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["c", 11, 0, "Chunichi Shimbun Hai"],["s", 5, 1, "Takarazuka Kine"],["s", 10, 1, "Japan Cup"]],
  ["Yamanin Zephyr","ヤマニンゼファー","Mile","yamanin-zephyr",56,["j", 5, 1, "Make Debut"],["c", 3, 0, "New Zealand Trophy"],["c", 4, 1, "Aoi Stakes"],["c", 8, 1, "Sprinters Stakes"],["c", 10, 1, "Mile Championship"],["s", 5, 0, "Yasuda Kine"],["s", 8, 1, "Sprinters Stakes"],["s", 9, 1, "Tenno Sho (Autumn)"]],
  ["Aston Machan","アストンマーチャン","Sprint","aston-machan",57,["j", 5, 1, "Make Debut"],["j", 10, 0, "Fantasy Stakes"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 2, 0, "Fillies' Revue"],["c", 3, 0, "Oka Sho"],["c", 8, 1, "Sprinters Stakes"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 8, 1, "Sprinters Stakes"]],
  ["Seeking the Pearl","シーキングザパール","Sprint·Mile","seeking-the-pearl",58,["j", 5, 1, "Make Debut"],["j", 10, 0, "Daily Hai Junior Stakes"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 3, 0, "Oka Sho"],["c", 4, 0, "NHK Mile Cup"],["c", 8, 0, "Rose Stakes"],["c", 10, 1, "Mile Championship"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 5, 0, "Yasuda Kine"],["s", 8, 1, "Sprinters Stakes"],["s", 10, 1, "Mile Championship"]],
  ["Yukino Bijin","ユキノビジン","Mile·Med","yukino-bijin",59,["j", 5, 1, "Make Debut"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 6, 1, "Queen Stakes"],["c", 9, 1, "Shuka Sho"],["s", 2, 1, "Osaka Hai"],["s", 4, 0, "Victoria Mile"],["s", 10, 0, "Queen Elizabeth II Cup"],["s", 10, 1, "Japan Cup"]],
  ["Copano Rickey","コパノリッキー","Dirt·Mile","copano-rickey",60,["j", 5, 1, "Make Debut"],["c", 3, 0, "Fukuryu Stakes"],["c", 11, 0, "Champions Cup"],["s", 1, 1, "February Stakes"],["s", 4, 0, "Kashiwa Kine"],["s", 5, 1, "Teio Sho"],["s", 9, 0, "Mile Championship Nambu Hai"],["s", 10, 0, "JBC Classic"],["s", 11, 1, "Tokyo Daishote"]],
  ["Bamboo Memory","バンブーメモリー","Sprint·Mile","bamboo-memory",61,["j", 5, 1, "Make Debut"],["c", 9, 1, "Swan Stakes"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 5, 0, "Yasuda Kine"],["s", 5, 1, "Takarazuka Kine"],["s", 8, 1, "Sprinters Stakes"],["s", 10, 1, "Mile Championship"]],
  ["Air Shakur","エアシャカール","Long","air-shakur",62,["j", 5, 1, "Make Debut"],["j", 11, 1, "Hopeful Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["c", 10, 1, "Japan Cup"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kine"]],
  ["Sweep Tosho","スイープトウショウ","Mile·Med","sweep-tosho",63,["j", 5, 1, "Make Debut"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["c", 10, 0, "Queen Elizabeth II Cup"],["s", 5, 0, "Yasuda Kine"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 0, "Queen Elizabeth II Cup"]],
  ["Inari One","イナリワン","Med·Long","inari-one",64,["j", 5, 1, "Make Debut"],["c", 6, 0, "Japan Dirt Derby"],["c", 11, 1, "Tokyo Daishote"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 0, "Mainichi Oka"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kine"]],
  ["Mejiro Palmer","メジロパーマー","Long","mejiro-palmer",65,["j", 5, 1, "Make Debut"],["c", 6, 0, "Hakodate Kine"],["s", 0, 0, "Nikkei Shinshun Hai"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kine"]],
  ["Ines Fujin","アイネスフウジン","Mile·Med","ines-fujin",66,["j", 5, 1, "Make Debut"],["j", 11, 0, "Asahi Hai Futurity Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 2, 1, "Osaka Hai"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"]],
  ["Yaeno Muteki","ヤエノムテキ","Med·Long","yaeno-muteki",67,["j", 5, 1, "Make Debut"],["c", 2, 1, "Mainichi Hai"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 2, 1, "Osaka Hai"],["s", 5, 0, "Yasuda Kine"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"]],
  ["Nishino Flower","ニシノフラワー","Sprint·Mile","nishino-flower",68,["j", 5, 1, "Make Debut"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 8, 1, "Sprinters Stakes"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 3, 1, "Milers Cup"],["s", 5, 0, "Yasuda Kine"],["s", 8, 1, "Sprinters Stakes"]],
  ["Mejiro Bright","メジロブライト","Long","mejiro-bright",69,["j", 5, 1, "Make Debut"],["j", 11, 1, "Hopeful Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["c", 11, 0, "Stayers Stakes"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kine"]],
  ["Satono Diamond","サトノダイヤモンド","Med·Long","satono-diamond",70,["j", 5, 1, "Make Debut"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["c", 11, 1, "Arima Kine"],["s", 2, 1, "Osaka Hai"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 9, 0, "Kyoto Daishote"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kine"]],
  ["Kitasan Black","キタサンブラック","Med·Long","kitasan-black",71,["j", 5, 1, "Make Debut"],["c", 8, 1, "St. Lite Kine"],["c", 9, 1, "Kikuka Sho"],["c", 11, 1, "Arima Kine"],["s", 2, 1, "Osaka Hai"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Admire Vega","アドマイヤベガ","Med·Long","admire-vega",72,["j", 5, 1, "Make Debut"],["j", 11, 1, "Hopeful Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"]],
  ["Mejiro Ardan","メジロアルダン","Mile·Med","mejiro-ardan",73,["j", 5, 1, "Make Debut"],["c", 3, 1, "Aoba Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 2, 1, "Osaka Hai"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 0, "Mainichi Oka"],["s", 9, 1, "Tenno Sho (Autumn)"]],
  ["Sakura Chiyono O","サクラチヨノオー","Mile·Med","sakura-chiyono-o",74,["j", 5, 1, "Make Debut"],["j", 11, 0, "Asahi Hai Futurity Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Tenno Sho (Autumn)"],["s", 5, 0, "Yasuda Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"]],
  ["Tamamo Cross","タマモクロス","Med·Long","tamamo-cross",75,["j", 5, 1, "Make Debut"],["s", 2, 1, "Hanshin Daishote"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kine"]],
  ["Fine Motion","ファインモーション","Mile·Med","fine-motion",76,["j", 5, 1, "Make Debut"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["c", 10, 0, "Queen Elizabeth II Cup"],["s", 2, 1, "Osaka Hai"],["s", 5, 1, "Takarazuka Kine"],["s", 7, 1, "Sapporo Kine"],["s", 9, 1, "Tenno Sho (Autumn)"]],
  ["Mejiro Dober","メジロドーベル","Mile·Med","mejiro-dober",77,["j", 5, 1, "Make Debut"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["c", 11, 1, "Arima Kine"],["s", 2, 1, "Osaka Hai"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 0, "Fuchu Umamusume Stakes"],["s", 10, 0, "Queen Elizabeth II Cup"]],
  ["Tosen Jordan","トーセンジョーダン","Mile·Med","tosen-jordan",78,["j", 5, 1, "Make Debut"],["j", 11, 1, "Hopeful Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 10, 0, "Copa Republica Argentina"],["c", 11, 1, "Arima Kine"],["s", 2, 1, "Osaka Hai"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"]],
  ["Manhattan Cafe","マンハッタンカフェ","Long","manhattan-cafe",79,["j", 5, 1, "Make Debut"],["c", 2, 0, "Yayoi Sho"],["c", 8, 1, "St. Lite Kine"],["c", 9, 1, "Kikuka Sho"],["c", 11, 1, "Arima Kine"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Kawakami Princess","カワカミプリンセス","Medium","kawakami-princess",80,["j", 5, 1, "Make Debut"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["c", 10, 0, "Queen Elizabeth II Cup"],["s", 2, 0, "Kinko Sho"],["s", 4, 0, "Victoria Mile"],["s", 5, 1, "Takarazuka Kine"],["s", 10, 0, "Queen Elizabeth II Cup"]],
  ["Agnes Digital","アグネスデジタル","Mile·Med","agnes-digital",81,["j", 5, 1, "Make Debut"],["c", 1, 1, "Hyacinth Stakes"],["c", 4, 0, "NHK Mile Cup"],["c", 6, 0, "Japan Dirt Derby"],["c", 10, 1, "Mile Championship"],["s", 9, 1, "Tenno Sho (Autumn)"]],
  ["Hishi Akebono","ヒシアケボノ","Dirt·Sprint","hishi-akebono",82,["j", 5, 1, "Make Debut"],["c", 8, 1, "Sprinters Stakes"],["c", 9, 1, "Swan Stakes"],["c", 10, 1, "Mile Championship"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 5, 0, "Yasuda Kine"],["s", 8, 1, "Sprinters Stakes"],["s", 10, 1, "Mile Championship"]],
  ["Eishin Flash","エイシンフラッシュ","Medium","eishin-flash",83,["j", 5, 1, "Make Debut"],["c", 0, 0, "Keisei Hai"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 10, 1, "Japan Cup"],["c", 11, 1, "Arima Kine"],["s", 2, 1, "Osaka Hai"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kine"]],
  ["Meisho Doto","メイショウドトウ","Med·Long","meisho-doto",84,["j", 5, 1, "Make Debut"],["s", 0, 0, "Nikkei Shinshun Hai"],["s", 2, 0, "Kinko Sho"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Gold City","ゴールドシチー","Mile·Med","gold-city",85,["j", 5, 1, "Make Debut"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["c", 11, 1, "Arima Kine"],["s", 2, 1, "Osaka Hai"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 10, 1, "Japan Cup"]],
  ["Fuji Kiseki","フジキセキ","Mile","fuji-kiseki",86,["j", 5, 1, "Make Debut"],["j", 11, 0, "Asahi Hai Futurity Stakes"],["c", 2, 0, "Yayoi Sho"],["c", 3, 0, "Satsuki Sho"],["c", 4, 0, "NHK Mile Cup"],["c", 9, 1, "Kikuka Sho"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 5, 0, "Yasuda Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kine"]],
  ["Hishi Amazon","ヒシアマゾン","Mile·Med","hishi-amazon",87,["j", 5, 1, "Make Debut"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["c", 11, 1, "Arima Kine"],["s", 2, 1, "Osaka Hai"],["s", 5, 0, "Yasuda Kine"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Seiun Sky","セイウンスカイ","Med·Long","seiun-sky",88,["j", 5, 1, "Make Debut"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["c", 11, 1, "Arima Kine"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kine"]],
  ["Narita Brian","ナリタブライアン","Long","narita-brian",89,["j", 5, 1, "Make Debut"],["j", 11, 0, "Asahi Hai Futurity Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["c", 11, 1, "Arima Kine"],["s", 2, 1, "Hanshin Daishote"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Smart Falcon","スマートファルコン","Dirt·Long","smart-falcon",90,["j", 5, 1, "Make Debut"],["c", 3, 0, "Satsuki Sho"],["c", 6, 0, "Japan Dirt Derby"],["c", 10, 0, "JBC Classic"],["c", 11, 1, "Tokyo Daishote"],["s", 1, 1, "February Stakes"],["s", 5, 1, "Teio Sho"],["s", 10, 0, "JBC Classic"],["s", 11, 0, "Champions Cup"],["s", 11, 1, "Tokyo Daishote"]],
  ["Narita Taishin","ナリタタイシン","Medium","narita-taishin",91,["j", 5, 1, "Make Debut"],["j", 11, 1, "Hopeful Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 2, 1, "Nikkei Sho"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kine"]],
  ["Curren Chan","カレンチャン","Sprint","curren-chan",92,["j", 5, 1, "Make Debut"],["c", 2, 0, "Fillies' Revue"],["c", 4, 1, "Aoi Stakes"],["c", 5, 1, "Hakodate Sprint Stakes"],["c", 8, 1, "Sprinters Stakes"],["s", 2, 0, "Ocean Stakes"],["s", 2, 1, "Takamatsunomiya Kine"],["s", 8, 1, "Sprinters Stakes"]],
  ["Biwa Hayahide","ビワハヤヒデ","Med·Long","biwa-hayahide",93,["j", 5, 1, "Make Debut"],["j", 11, 0, "Asahi Hai Futurity Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kine"]],
  ["Mihono Bourbon","ミホノブルボン","Med·Long","mihono-bourbon",94,["j", 5, 1, "Make Debut"],["j", 11, 0, "Asahi Hai Futurity Stakes"],["c", 2, 1, "Spring Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["T.M. Opera O","テイエムオペラオー","Med·Long","tm-opera-o",95,["j", 5, 1, "Make Debut"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 11, 1, "Arima Kine"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kine"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Special Week","スペシャルウィーク","Med·Long","special-week",96,["j", 5, 1, "Make Debut"],["c", 1, 0, "Kisaragi Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Silence Suzuka","サイレンススズカ","Mile·Med","silence-suzuka",97,["j", 5, 1, "Make Debut"],["c", 2, 0, "Yayoi Sho"],["c", 8, 1, "Kobe Shimbun Hai"],["s", 2, 0, "Kinko Sho"],["s", 5, 1, "Takarazuka Kine"],["s", 9, 0, "Mainichi Oka"],["s", 9, 1, "Tenno Sho (Autumn)"]],
  ["Tokai Teio","トウカイテイオー","Med·Long","tokai-teio",98,["j", 5, 1, "Make Debut"],["c", 0, 1, "Wakagoma Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 9, 1, "Kikuka Sho"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kine"]],
  ["Maruzensky","マルゼンスキー","Mile·Med","maruzensky",99,["j", 5, 1, "Make Debut"],["j", 11, 0, "Asahi Hai Futurity Stakes"],["c", 2, 1, "Spring Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Tokyo Yushun (Japanese Derby)"],["c", 11, 1, "Arima Kine"],["s", 2, 1, "Osaka Hai"],["s", 5, 0, "Yasuda Kine"],["s", 9, 1, "Tenno Sho (Autumn)"]],
  ["Admire Groove","アドマイヤグルーヴ","Mile·Med","admire-groove",-1,["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["c",10,0,"Queen Elizabeth II Cup"],["s",2,1,"Osaka Hai"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Oguri Cap","オグリキャップ","Mile·Med","oguri-cap",101,["j", 5, 1, "Make Debut"],["c", 4, 0, "NHK Mile Cup"],["c", 10, 1, "Mile Championship"],["c", 11, 1, "Arima Kinen"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kinen"]],
  ["Gold Ship","ゴールドシップ","Long","gold-ship",102,["j", 5, 1, "Make Debut"],["j", 11, 1, "Hopeful Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 9, 1, "Kikuka Sho"],["c", 11, 1, "Arima Kinen"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kinen"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kinen"]],
  ["Daiwa Scarlet","ダイワスカーレット","Mile·Med","daiwa-scarlet",103,["j", 5, 1, "Make Debut"],["c", 2, 0, "Tulip Sho"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["c", 10, 0, "Queen Elizabeth II Cup"],["s", 2, 1, "Osaka Hai"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kinen"]],
  ["Vodka","ウオッカ","Mile·Med","vodka",104,["j", 5, 1, "Make Debut"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 2, 0, "Tulip Sho"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Derby"],["c", 9, 1, "Shuka Sho"],["c", 11, 1, "Arima Kinen"],["s", 4, 0, "Victoria Mile"],["s", 5, 0, "Yasuda Kinen"],["s", 9, 1, "Tenno Sho (Autumn)"]],
  ["El Condor Pasa","エルコンドルパサー","Mile·Med","el-condor-pasa",105,["j", 5, 1, "Make Debut"],["c", 1, 0, "Kyodo News Hai"],["c", 4, 0, "NHK Mile Cup"],["c", 4, 1, "Japanese Derby"],["c", 9, 0, "Mainichi Okan"],["s", 5, 1, "Takarazuka Kinen"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kinen"]],
  ["Grass Wonder","グラスワンダー","Med·Long","grass-wonder",106,["j", 5, 1, "Make Debut"],["j", 11, 1, "Asahi Hai Futurity Stakes"],["c", 4, 1, "Japanese Derby"],["c", 10, 1, "Japan Cup"],["c", 11, 1, "Arima Kinen"],["s", 5, 1, "Takarazuka Kinen"],["s", 9, 0, "Mainichi Okan"],["s", 11, 1, "Arima Kinen"]],
  ["Taiki Shuttle","タイキシャトル","Mile","taiki-shuttle",107,["j", 5, 1, "Make Debut"],["c", 0, 0, "Shinzan Kinen"],["c", 4, 0, "NHK Mile Cup"],["c", 5, 1, "Unicorn Stakes"],["c", 10, 1, "Mile Championship"],["s", 5, 0, "Yasuda Kinen"],["s", 8, 1, "Sprinters Stakes"],["s", 10, 1, "Mile Championship"]],
  ["Mejiro McQueen","メジロマックイーン","Long","mejiro-mcqueen",108,["j", 5, 1, "Make Debut"],["c", 8, 1, "Kobe Shimbun Hai"],["c", 9, 1, "Kikuka Sho"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kinen"],["s", 9, 1, "Tenno Sho (Autumn)"]],
  ["Air Groove","エアグルーヴ","Medium","air-groove",109,["j", 5, 1, "Make Debut"],["j", 11, 0, "Hanshin Juvenile Fillies"],["c", 3, 0, "Oka Sho"],["c", 4, 1, "Japanese Oaks"],["c", 9, 1, "Shuka Sho"],["s", 2, 1, "Osaka Hai"],["s", 5, 1, "Takarazuka Kinen"],["s", 7, 0, "Sapporo Kinen"],["s", 9, 1, "Tenno Sho (Autumn)"]],
  ["King Halo","キングヘイロー","Mile","king-halo",110,["j", 5, 1, "Make Debut"],["j", 11, 1, "Hopeful Stakes"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Japanese Derby"],["c", 9, 1, "Kikuka Sho"],["s", 2, 1, "Takamatsunomiya Kinen"],["s", 5, 0, "Yasuda Kinen"],["s", 8, 1, "Sprinters Stakes"]],
  ["Nice Nature","ナイスネイチャ","Long","nice-nature",111,["j", 5, 1, "Make Debut"],["c", 0, 1, "Wakagoma Stakes"],["c", 7, 0, "Kokura Kinen"],["c", 9, 1, "Kikuka Sho"],["c", 11, 1, "Arima Kinen"],["s", 5, 1, "Takarazuka Kinen"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 0, "Chunichi Shimbun Hai"],["s", 11, 1, "Arima Kinen"]],
  ["Haru Urara","ハルウララ","Dirt·Sprint","haru-urara",112,["j", 5, 1, "Make Debut"],["c", 6, 0, "Negishi Stakes"],["s", 1, 1, "February Stakes"],["s", 7, 0, "Elm Stakes"],["s", 10, 0, "JBC Sprint"],["s", 11, 1, "Arima Kinen"]],
  ["Super Creek","スーパークリーク","Long","super-creek",113,["j", 5, 1, "Make Debut"],["c", 9, 1, "Kikuka Sho"],["c", 11, 1, "Arima Kinen"],["s", 2, 1, "Osaka Hai"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kinen"]],
  ["Mayano Top Gun","マヤノトップガン","Long","mayano-top-gun",114,["j", 5, 1, "Make Debut"],["c", 9, 1, "Kikuka Sho"],["c", 11, 1, "Arima Kinen"],["s", 2, 1, "Hanshin Daishoten"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kinen"],["s", 9, 1, "Tenno Sho (Autumn)"],["s", 11, 1, "Arima Kinen"]],
  ["Mejiro Ryan","メジロライアン","Med·Long","mejiro-ryan",115,["j", 5, 1, "Make Debut"],["j", 11, 0, "Junior Cup"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Japanese Derby"],["c", 9, 1, "Kikuka Sho"],["c", 11, 1, "Arima Kinen"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kinen"],["s", 11, 1, "Arima Kinen"]],
  ["Agnes Tachyon","アグネスタキオン","Mile·Med","agnes-tachyon",116,["j", 5, 1, "Make Debut"],["c", 2, 0, "Yayoi Sho"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Japanese Derby"],["c", 9, 1, "Kikuka Sho"],["s", 2, 1, "Osaka Hai"],["s", 5, 1, "Takarazuka Kinen"],["s", 9, 1, "Tenno Sho (Autumn)"]],
  ["Winning Ticket","ウイニングチケット","Medium","winning-ticket",117,["j", 5, 1, "Make Debut"],["j", 11, 1, "Hopeful Stakes"],["c", 2, 0, "Yayoi Sho"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Japanese Derby"],["c", 9, 1, "Kikuka Sho"],["s", 2, 1, "Osaka Hai"],["s", 5, 1, "Takarazuka Kinen"]],
  ["Rice Shower","ライスシャワー","Long","rice-shower",118,["j", 5, 1, "Make Debut"],["c", 2, 1, "Spring Stakes"],["c", 4, 1, "Japanese Derby"],["c", 9, 1, "Kikuka Sho"],["s", 2, 1, "Nikkei Sho"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kinen"],["s", 11, 1, "Arima Kinen"]],
  ["Sakura Bakushin O","サクラバクシンオー","Sprint","sakura-bakushin-o",119,["j", 5, 1, "Make Debut"],["j", 10, 0, "Keio Hai Junior Stakes"],["c", 2, 1, "Spring Stakes"],["c", 4, 1, "Aoi Stakes"],["c", 8, 1, "Sprinters Stakes"],["s", 2, 1, "Takamatsunomiya Kinen"],["s", 5, 1, "Hakodate Sprint Stakes"],["s", 6, 0, "CBC Sho"]],
  ["Matikanefukukitaru","マチカネフクキタル","Long","matikanefukukitaru",120,["j", 5, 1, "Make Debut"],["c", 2, 0, "Yayoi Sho"],["c", 4, 1, "Japanese Derby"],["c", 9, 1, "Kikuka Sho"],["s", 2, 0, "Kinko Sho"],["s", 5, 1, "Takarazuka Kinen"],["s", 6, 0, "Hakodate Kinen"],["s", 11, 1, "Arima Kinen"]],
  ["Matikanetannhauser","マチカネタンホイザ","Long","matikanetannhauser",121,["j", 5, 1, "Make Debut"],["c", 3, 0, "Satsuki Sho"],["c", 4, 1, "Japanese Derby"],["c", 9, 1, "Kikuka Sho"],["s", 1, 1, "Diamond Stakes"],["s", 3, 1, "Tenno Sho (Spring)"],["s", 5, 1, "Takarazuka Kinen"],["s", 10, 1, "Japan Cup"],["s", 11, 1, "Arima Kinen"]]
]
/* ── CHAR-GOAL MAP: gi -> [{slug,name,col,race}] ── */
function _buildGoalMap(){
  const map={};for(let gi=0;gi<TC;gi++)map[gi]=[];
  CHARS.forEach(ch=>{
    const slug=ch[3],col=CTHEME[slug]||"#4a90d9",name=ch[0];
    for(let gi2=5;gi2<ch.length;gi2++){
      const g=ch[gi2];if(!Array.isArray(g)||g.length<4)continue;
      const[gr,m,h,race]=g;
      if(race==="Make Debut")continue; // skip debut - all chars share it
      const base=GS[gr];if(base===undefined)continue;
      const cells=GD.find(x=>x.k===gr)?.cells||[];
      for(let ci=0;ci<cells.length;ci++){
        const cell=cells[ci];
        if(cell.t==="m"&&cell.m===m&&cell.h===h){
          const gi=base+ci;
          if(!map[gi].some(x=>x.slug===slug))map[gi].push({slug,name,col,race});
          break;
        }
      }
    }
  });
  return map;
}
const _GOAL_MAP=_buildGoalMap();

/* ── SORT ── */
let _sortKey="new",_sortAsc=false; // default: newest first
let _fC=[...CHARS];

function buildSortBar(){
  const el=document.getElementById("sortbar");if(!el)return;
  // Merged: A-Z (toggles asc/desc), Goals (toggles), Newest/Oldest (toggle)
  const sorts=[{k:"az",l:"sortAZ"},{k:"goals",l:"sortGoals"},{k:"new",l:"sortNew"}];
  el.innerHTML=`<span class="sort-lbl">${t("sortLbl")}</span>`+sorts.map(s=>{
    const on=_sortKey===s.k;
    const arrow=on?(_sortAsc?"↑":"↓"):"";
    return`<button class="sort-btn${on?" on":""}" onclick="setSort('${s.k}')">${t(s.l)}${arrow?` ${arrow}`:""}</button>`;
  }).join("");
}
function setSort(k){
  if(_sortKey===k)_sortAsc=!_sortAsc;
  else{_sortKey=k;_sortAsc=(k==="az"||k==="goals");}
  buildSortBar();_buildCG();savePrefs();
}
function _sortedChars(arr){
  return [...arr].sort((a,b)=>{
    let v=0;
    // JP mode: sort by kana (index 1); otherwise EN (index 0)
    if(_sortKey==="az")v=(L==="JP"?a[1].localeCompare(b[1],"ja"):a[0].localeCompare(b[0]));
    else if(_sortKey==="goals")v=(a.length-5)-(b.length-5);
    else if(_sortKey==="new")v=a[4]-b[4];
    return _sortAsc?v:-v;
  });
}

/* ── CUSTOM LOCK MODE ── */
let _customMode=false,_selC=null,_pLocks=new Set();

function filterC(q){
  const ql=q.toLowerCase().trim();
  _fC=ql?CHARS.filter(c=>c[0].toLowerCase().includes(ql)||c[1].includes(q)||c[3].includes(ql)):CHARS.slice();
  _buildCG();
}

function _buildCG(){
  const el=document.getElementById("cgrid");if(!el)return;
  const sorted=_sortedChars(_fC);
  const months=t("M"),hE=t("hE"),hL=t("hL");
  // Add custom lock button first
  const customCol=_customMode?"var(--c2)":"var(--bdr)";
  let html=`<button class="cbtn custom-mode${_customMode?" on":""}" onclick="toggleCustomMode()" type="button" style="border-color:${customCol}">
    <div class="cbtn-imgwrap" style="background:${_customMode?"var(--c3)":"var(--bg)"}">
      <img class="cbtn-img${_customMode?"":""}" src="./umamusumebanner/${_customMode?"customlock_jp":"customlock_gb"}.png" alt="Custom" loading="lazy" onerror="this.classList.add('img-err')" style="object-position:center;object-fit:contain;padding:4px">
      <div class="cbtn-ph" style="display:none">✏️</div>
    </div>
    <div class="cbtn-info"><div class="cbtn-name">${_customMode?t("customApply"):t("customMode")}</div></div>
  </button>`;
  html+=sorted.map(c=>{
    const idx=CHARS.indexOf(c);
    const slug=c[3];
    const col=CTHEME[slug]||"#4a90d9";
    const nm=L==="JP"?c[1]:c[0];
    const kn=L==="JP"?c[2]:c[1];
    const isOn=_selC===c;
    const borderStyle=isOn?`border-color:${col}`:"";
    return`<button class="cbtn${isOn?" on":""}" onclick="_selChar(${idx})" type="button" style="${borderStyle}">
      <div class="cbtn-imgwrap" style="background:${col}22">
        <img class="cbtn-img" src="./umamusumebanner/${slug}.png" alt="${nm}" loading="lazy" onerror="this.classList.add('img-err')">
        <div class="cbtn-ph"></div>
      </div>
      <div class="cbtn-info">
        <div class="cbtn-name">${nm}</div>
        ${L==="JP"?`<div class="cbtn-kana" style="font-size:7px;color:var(--tx2)">${c[0]}</div>`:`<div class="cbtn-kana">${kn}</div>`}
        <span class="cbtn-tag">${c.length-5} goals</span>
      </div>
    </button>`;
  }).join("");
  el.innerHTML=html;
}

function toggleCustomMode(){
  if(_customMode){
    // Apply: clear char locks, keep manual locks for custom-selected cells (already SL)
    _customMode=false;
    _buildCG();
    document.getElementById("custom-hint").classList.remove("on");
    document.getElementById("pd-app").textContent=t("presetApply");
    document.getElementById("pd-app").dataset.mode="preset";
    updateCnt();savePrefs();
  }else{
    // Enter custom mode: clear char locks from current char, allow manual clicking
    _customMode=true;
    _buildCG();
    const hint=document.getElementById("custom-hint");
    if(hint){hint.textContent=t("customHint");hint.classList.add("on");}
    document.getElementById("pd-app").textContent=t("customApply");
    document.getElementById("pd-app").dataset.mode="custom";
    // show pdet without char
    document.getElementById("pdet").classList.remove("hidden");
    document.getElementById("pbnr").classList.remove("on");
    document.getElementById("pd-n").textContent=t("customMode");
    document.getElementById("pd-k").textContent="";
    document.getElementById("pd-g").innerHTML="";
  }
}

function _updateBannerText(c){
  // JP: show kana as main, EN as sub; others: EN main, kana sub
  const nm=L==="JP"?c[1]:c[0];const kn=L==="JP"?c[0]:c[1];
  const e1=document.getElementById("pbnr-en"),e2=document.getElementById("pbnr-kn");
  if(e1)e1.textContent=nm;if(e2)e2.textContent=kn;
  const pdN=document.getElementById("pd-n"),pdK=document.getElementById("pd-k");
  if(pdN){pdN.textContent=nm;pdN.style.fontSize=L==="JP"?"15px":"13px";}
  if(pdK){pdK.textContent=kn;pdK.style.fontSize=L==="JP"?"10px":"10px";}
}

function _selChar(idx){
  if(_customMode){
    // Exit custom mode first, then select char
    _customMode=false;
    document.getElementById("custom-hint").classList.remove("on");
  }
  const c=CHARS[idx];if(!c)return;
  // Clear old char locks
  for(let gi=0;gi<TC;gi++){
    if(CL[gi]){CL[gi]=null;_refreshCellClass(gi);}
  }
  _pLocks.clear();
  updateCnt();
  _selC=c;_buildCG();
  const slug=c[3];
  const col=CTHEME[slug]||"#4a90d9";
  const months=t("M"),hE=t("hE"),hL=t("hL");
  const grl={j:t("grJ").split("+")[0].trim(),c:t("grC"),s:t("grS").split("+")[0].trim()};
  // banner
  const bnr=document.getElementById("pbnr");
  const img=document.getElementById("pbnr-img");
  const bg=document.getElementById("pbnr-bg");
  bg.style.background=col;
  img.src="./umamusumebanner/"+slug+".png";
  img.style.display="block";
  img.onerror=()=>{img.style.display="none";};
  img.onload=()=>{img.style.display="block";};
  bnr.style.borderColor=col;
  bnr.classList.add("on");
  _updateBannerText(c);
  document.getElementById("pd-app").textContent=t("presetApply");
  document.getElementById("pd-app").dataset.mode="preset";
  document.getElementById("custom-hint").classList.remove("on");
  document.getElementById("pdet").style.borderTopColor=col+"88";
  const goals=c.slice(5);
  document.getElementById("pd-g").innerHTML=goals.map(g=>{
    const mLbl=months[g[1]]+" "+(g[2]===0?hE:hL);
    return`<div class="gi"><span class="gg ${g[0]}">${grl[g[0]]||g[0]}</span><span class="gm">${mLbl}</span><span class="gn">${g[3]}</span></div>`;
  }).join("");
  document.getElementById("pdet").classList.remove("hidden");
}

function applyOrCustom(){
  const mode=document.getElementById("pd-app").dataset.mode||"preset";
  if(mode==="custom"){toggleCustomMode();return;}
  applyPreset();
}

function applyPreset(){
  if(!_selC)return;
  const slug=_selC[3];
  const col=CTHEME[slug]||"#4a90d9";
  const nm=L==="JP"?_selC[1]:_selC[0];
  // Clear old char locks
  for(let gi=0;gi<TC;gi++){if(CL[gi]){CL[gi]=null;_refreshCellClass(gi);}}
  _pLocks.clear();
  const seen=new Set();
  // Build map: gi -> list of race names
  const giRaces={};
  _selC.slice(5).forEach(g=>{
    const gi=_pci(g[0],g[1],g[2]);
    if(gi<0||gi>=TC)return;
    if(!giRaces[gi])giRaces[gi]=[];
    giRaces[gi].push(g[3]);
  });
  Object.entries(giRaces).forEach(([gi,races])=>{
    gi=+gi;
    const k=String(gi);
    if(seen.has(k))return;seen.add(k);
    CL[gi]={col,name:nm,races,slug};
    _pLocks.add(gi);
    _refreshCellClass(gi);
  });
  updateCnt();savePrefs();
}

/* ── INIT ── */
loadPrefs();
buildSlotCfg();
_fC=[...CHARS];_buildCG();
buildSortBar();
updateCnt();
calcSP();
renderAll();
