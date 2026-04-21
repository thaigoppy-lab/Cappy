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
  calcSP();buildSlotCfg();buildLockGrid();_buildCG();buildSortBar();
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
  buildLockGrid(); // refresh inline grid
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
  if(CL[gi])h+=`<div style="font-size:9px;color:#fbbf24;margin-bottom:3px">★ ${CL[gi].name}</div>`;
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

/* ── BUILD GRID (inline lock grid) ── */
function buildLockGrid(){
  const el=document.getElementById("sg-inline");if(!el)return;
  el.innerHTML=_buildGridHTML("sgi");
  el.querySelectorAll(".cell.sm").forEach(cell=>{
    const gi=+cell.dataset.gi;
    cell.addEventListener("click",()=>toggleSL(gi));
    attachTT(cell,gi);
  });
  // apply char-lock styles
  for(let gi=0;gi<TC;gi++){if(CL[gi]||SL[gi])_refreshCellOnEl(gi,el);}
}
function _buildGridHTML(uid){
  const tabs=["j","c","s"];
  let h=`<div class="gtabs">`;
  tabs.forEach((g,i)=>h+=`<div class="gtab ${i===0?"on":""}" data-gt="${uid}-${g}" onclick="swTab('${uid}','${g}')">${t(g==="j"?"grJ":g==="c"?"grC":"grS")}</div>`);
  h+="</div>";
  tabs.forEach((tk,ti)=>{
    h+=`<div class="gpanel ${ti===0?"on":""}" id="${uid}-p-${tk}">`;
    GD.filter(g=>g.tg===tk).forEach(g=>{
      const st=GS[g.k],tot=g.cells.length;
      h+=`<div class="rgrid" style="grid-template-columns:repeat(${g.cols},1fr);margin-bottom:4px">`;
      for(let i=0;i<tot;i++){
        const gi=st+i,lb=shortLbl(gi);
        const lk=SL[gi],cl=!!CL[gi];
        const cls=cl?"cell sm char-locked":lk?"cell sm locked":"cell sm";
        h+=`<div class="${cls}" data-lgi="${gi}" data-gi="${gi}" style="${cl?`--char-col:${CL[gi].col};border-color:${CL[gi].col};background:${CL[gi].col}22`:""}">${cl?`<div class="cx" style="background:${CL[gi].col};color:#fff;border-radius:2px;padding:0 2px;font-size:6px">★</div>`:lk?'<div class="cx">X</div>':''}<div class="drow"></div><div class="clbl" data-cgi="${gi}">${lb}</div></div>`;
      }
      h+="</div>";
    });
    h+="</div>";
  });
  return h;
}
function _refreshCellOnEl(gi,container){
  container.querySelectorAll(`[data-lgi="${gi}"]`).forEach(el=>{
    el.classList.remove("locked","char-locked");
    el.style.removeProperty("border-color");el.style.removeProperty("background");el.style.removeProperty("--char-col");
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
function swTab(uid,key){
  document.querySelectorAll(`[data-gt^="${uid}-"]`).forEach(el=>el.classList.toggle("on",el.dataset.gt===`${uid}-${key}`));
  ["j","c","s"].forEach(g=>{const p=document.getElementById(`${uid}-p-${g}`);if(p)p.classList.toggle("on",g===key);});
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
        h+=`<div class="${cls}" data-gi="${gi}" data-tt="${ttJSON}" style="${inlineStyle}">${cxHtml}<div class="drow${mc}">${dh}</div><div class="clbl" data-cgi="${gi}">${lb}</div></div>`;
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
"special-week":"#30a0a0","silence-suzuka":"#ff3366","tokai-teio":"#ffaa00","mejiro-mcqueen":"#9966cc",
"maruzensky":"#cc2200","fuji-kiseki":"#cc3355","oguri-cap":"#669900","gold-ship":"#00aacc",
"daiwa-scarlet":"#dd2244","vodka":"#3344bb","el-condor-pasa":"#ccaa00","grass-wonder":"#ee6600",
"taiki-shuttle":"#007755","hishi-amazon":"#bb2255","tm-opera-o":"#bb3399","narita-brian":"#443388",
"air-groove":"#556677","mayano-top-gun":"#cc5500","super-creek":"#227744","manhattan-cafe":"#775544",
"mihono-bourbon":"#bb6611","mejiro-ryan":"#5577bb","biwa-hayahide":"#445588","rice-shower":"#cc5599",
"seiun-sky":"#4499cc","agnes-tachyon":"#cc3344","winning-ticket":"#2255aa","maruzensky":"#cc2200",
"nice-nature":"#ee7722","sakura-bakushin-o":"#ee5577","smart-falcon":"#55aa33","matikanefukukitaru":"#7755aa",
"curren-chan":"#dd3366","agnes-digital":"#ee4488","kawakami-princess":"#cc3399","fine-motion":"#6644bb",
"admire-vega":"#334499","eishin-flash":"#3366bb","tamamo-cross":"#228866","mejiro-dober":"#9944cc",
"tosen-jordan":"#2266bb","sakura-chiyono-o":"#cc5577","inari-one":"#775599","sweep-tosho":"#bb3366",
"air-shakur":"#3355aa","bamboo-memory":"#33aa66","yukino-bijin":"#cc5588","satono-diamond":"#4455bb",
"mejiro-bright":"#3366aa","nishino-flower":"#ee6688","yaeno-muteki":"#556622","ines-fujin":"#33aa77",
"mejiro-palmer":"#4466aa","matikanetannhauser":"#554499","hishi-miracle":"#6644aa","narita-top-road":"#224477",
"jungle-pocket":"#887722","duramente":"#3344aa","marvelous-sunday":"#996611","sakura-laurel":"#cc4466",
"twin-turbo":"#bb3322","zenno-rob-roy":"#445577","neo-universe":"#2255aa","dantsu-flame":"#bb2211",
"cesario":"#7744bb","orfevre":"#cc2233","gentildonna":"#cc3377","kizuna":"#33aa33",
"harp-star":"#cc7733","just-a-way":"#3377cc","shonan-pandora":"#995588","lovely-day":"#cc5533",
"real-steel":"#4455bb","mickey-queen":"#cc3377","lucky-lilac":"#9944cc","nakayama-festa":"#bb6622",
"seeking-the-pearl":"#cc6633","shinko-windy":"#bb3344","yamanin-zephyr":"#55aa77",
"aston-machan":"#cc4433","transcend":"#cc7722","satono-crown":"#4466aa","cheval-grand":"#3366bb",
"vivlos":"#bb33bb","mejiro-ramonu":"#5544aa","ksmiracle":"#33aa55","sounds-of-earth":"#3366aa",
"north-flight":"#bb3366","espoir-city":"#2277cc","still-in-love":"#bb3355","verxina":"#7744bb",
"no-reason":"#554477","fusaichi-pandora":"#cc4499","win-variation":"#33aacc","air-messiah":"#3366bb",
"bubble-gum-fellow":"#cc6699","durandal":"#4444aa","calstone-light-o":"#66aa33","dream-journey":"#885599",
"mr-cb":"#334488","symboli-kris-s":"#556699","daiichi-ruby":"#cc2244","tanino-gimlet":"#996633",
"katsuragi-ace":"#aa8833","hishi-miracle":"#6644aa","rhein-kraft":"#4455aa","tap-dance-city":"#cc3355",
"daitaku-helios":"#cc6622","hokko-tarumae":"#775533","wonder-acute":"#cc5533","gran-alegria":"#cc3355",
"fenomeno":"#cc7733","loves-only-you":"#cc5599","chrono-genesis":"#6655aa","almond-eye":"#2255bb",
"stay-gold":"#cc8822","kiseki":"#3333aa","victoire-pisa":"#bb5522","buena-vista":"#cc6677",
"believe":"#cc7722","furioso":"#cc6622","orfevre":"#cc2233","sirius-symboli":"#3344aa",
"admire-groove":"#996633","matikanefukukitaru":"#7755aa","narita-taishin":"#4455aa",
"meisho-doto":"#446677","gold-city":"#cc8822","hishi-akebono":"#334466","kitasan-black":"#224466",
"epiphaneia":"#bb4422","mejiro-ardan":"#228855","king-halo":"#bb2211","gold-ship":"#00aacc",
};

/* releaseOrder: index in URL list (0=newest lucky-lilac, higher=older) */
const CHARS=[
  ["Lucky Lilac","ラッキーライラック","Mile·Med","lucky-lilac",0,["j",5,1,"Make Debut"],["j",11,0,"Hanshin Juvenile Fillies"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["s",1,1,"Nakayama Kinen"],["s",2,1,"Osaka Hai"],["s",4,0,"Victoria Mile"],["s",10,0,"Queen Elizabeth II Cup"],["s",10,1,"Japan Cup"]],
  ["Victoire Pisa","ヴィクトワールピサ","Med·Long","victoire-pisa",1,["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",11,1,"Arima Kinen"]],
  ["Almond Eye","アーモンドアイ","Mile·Med","almond-eye",2,["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["s",10,1,"Japan Cup"]],
  ["Kiseki","キセキ","Long","kiseki",3,["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",11,1,"Arima Kinen"]],
  ["Stay Gold","ステイゴールド","Long","stay-gold",4,["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",11,1,"Arima Kinen"]],
  ["Buena Vista","ブエナビスタ","Mile·Med","buena-vista",5,["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Dantsu Flame","ダンツフレーム","Mile·Med","dantsu-flame",6,["j",5,1,"Make Debut"],["c",1,0,"Kisaragi Sho"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho (participate)"],["c",10,1,"Mile Championship"],["s",4,0,"Niigata Daishoten"],["s",5,0,"Yasuda Kinen"]],
  ["Believe","ビリーヴ","Sprint·Mile","believe",7,["j",5,1,"Make Debut"],["s",8,1,"Sprinters Stakes"],["s",10,1,"Mile Championship"]],
  ["Espoir City","エスポワールシチー","Dirt·Mile","espoir-city",8,["j",5,1,"Make Debut"],["c",10,0,"JBC Sprint"],["s",10,0,"JBC Classic"]],
  ["Still in Love","スティルインラブ","Mile·Med","still-in-love",9,["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"]],
  ["Fusaichi Pandora","フサイチパンドラ","Mile·Med","fusaichi-pandora",10,["j",5,1,"Make Debut"],["c",9,1,"Shuka Sho"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Chrono Genesis","クロノジェネシス","Med·Long","chrono-genesis",11,["j",5,1,"Make Debut"],["c",9,1,"Shuka Sho"],["s",5,1,"Takarazuka Kinen"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Loves Only You","ラヴズオンリーユー","Mile·Med","loves-only-you",12,["j",5,1,"Make Debut"],["c",4,1,"Japanese Oaks"],["s",4,0,"Victoria Mile"]],
  ["Verxina","ヴェルツァースカ","Mile·Med","verxina",13,["j",5,1,"Make Debut"],["c",9,1,"Shuka Sho"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Fenomeno","フェノーメノ","Long","fenomeno",14,["j",5,1,"Make Debut"],["s",3,1,"Tenno Sho (Spring)"],["s",3,1,"Tenno Sho (Spring) 2nd"]],
  ["No Reason","ノーリーズン","Long","no-reason",15,["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",11,1,"Arima Kinen"]],
  ["Gran Alegria","グランアレグリア","Sprint·Mile","gran-alegria",16,["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["s",4,0,"Victoria Mile"],["s",8,1,"Sprinters Stakes"],["s",10,1,"Mile Championship"]],
  ["Orfevre","オルフェーヴル","Long","orfevre",17,["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Furioso","フリオーソ","Dirt·Long","furioso",18,["j",5,1,"Make Debut"],["c",10,0,"JBC Classic"],["s",10,0,"JBC Classic"]],
  ["Win Variation","ウインヴァリアシオン","Mile","win-variation",19,["j",5,1,"Make Debut"],["s",5,0,"Yasuda Kinen"],["s",10,1,"Mile Championship"]],
  ["Air Messiah","エアメサイア","Mile·Med","air-messiah",20,["j",5,1,"Make Debut"],["c",9,1,"Shuka Sho"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Bubble Gum Fellow","バブルガムフェロー","Mile·Med","bubble-gum-fellow",21,["j",5,1,"Make Debut"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Mile Championship"]],
  ["Durandal","デュランダル","Sprint·Mile","durandal",22,["j",5,1,"Make Debut"],["s",8,1,"Sprinters Stakes"],["s",10,1,"Mile Championship"]],
  ["Cesario","シーザリオ","Med·Long","cesario",23,["j",5,1,"Make Debut"],["c",4,1,"Japanese Oaks"],["s",3,1,"Tenno Sho (Spring)"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Gentildonna","ジェンティルドンナ","Med·Long","gentildonna",24,["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Calstone Light O","カルストンライトオ","Sprint","calstone-light-o",25,["j",5,1,"Make Debut"],["s",2,1,"Takamatsunomiya Kinen"],["s",8,1,"Sprinters Stakes"]],
  ["Dream Journey","ドリームジャーニー","Med·Long","dream-journey",26,["j",5,1,"Make Debut"],["c",11,1,"Arima Kinen"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Jungle Pocket","ジャングルポケット","Med·Long","jungle-pocket",27,["j",5,1,"Make Debut"],["c",4,1,"Japanese Derby"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"]],
  ["North Flight","ノースフライト","Mile","north-flight",28,["j",5,1,"Make Debut"],["s",5,0,"Yasuda Kinen"],["s",10,1,"Mile Championship"]],
  ["Sounds of Earth","サウンズオブアース","Med·Long","sounds-of-earth",29,["j",5,1,"Make Debut"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Rhein Kraft","ラインクラフト","Mile","rhein-kraft",30,["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["s",4,0,"Victoria Mile"],["s",10,1,"Mile Championship"]],
  ["Transcend","トランセンド","Dirt·Med","transcend",31,["j",5,1,"Make Debut"],["c",11,1,"Tokyo Daishoten"],["s",10,0,"JBC Classic"],["s",11,0,"Champions Cup"]],
  ["Duramente","ドゥラメンテ","Med·Long","duramente",32,["j",5,1,"Make Debut"],["c",1,0,"Kyodo News Hai"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho (participate)"],["s",1,1,"Nakayama Kinen"],["s",2,1,"Osaka Hai"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"]],
  ["Vivlos","ヴィブロス","Mile·Med","vivlos",33,["j",5,1,"Make Debut"],["c",9,1,"Shuka Sho"],["s",4,0,"Victoria Mile"]],
  ["Cheval Grand","シュヴァルグラン","Long","cheval-grand",34,["j",5,1,"Make Debut"],["s",3,1,"Tenno Sho (Spring)"],["s",10,1,"Japan Cup"]],
  ["Satono Crown","サトノクラウン","Med·Long","satono-crown",35,["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Tap Dance City","タップダンスシチー","Med·Long","tap-dance-city",36,["j",5,1,"Make Debut"],["s",5,1,"Takarazuka Kinen"],["s",10,1,"Japan Cup"]],
  ["Mejiro Ramonu","メジロラモーヌ","Mile·Med","mejiro-ramonu",37,["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"]],
  ["KS Miracle","ミラクルレジェンド","Dirt·Med","ksmiracle",38,["j",5,1,"Make Debut"],["s",10,0,"JBC Classic"]],
  ["Narita Top Road","ナリタトップロード","Long","narita-top-road",39,["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",11,1,"Arima Kinen"]],
  ["Sirius Symboli","シリウスシンボリ","Medium","sirius-symboli",40,["j",5,1,"Make Debut"],["j",9,0,"Saudi Arabia Royal Cup"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho (participate)"],["c",11,1,"Arima Kinen"],["s",2,1,"Osaka Hai"],["s",5,1,"Takarazuka Kinen"]],
  ["Katsuragi Ace","カツラギエース","Medium","katsuragi-ace",41,["j",5,1,"Make Debut"],["s",10,1,"Japan Cup"]],
  ["Marvelous Sunday","マーベラスサンデー","Med·Long","marvelous-sunday",42,["j",5,1,"Make Debut"],["c",11,0,"Challenge Cup"],["s",2,1,"Osaka Hai"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Tanino Gimlet","タニノギムレット","Medium","tanino-gimlet",43,["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"]],
  ["Hishi Miracle","ヒシミラクル","Long","hishi-miracle",44,["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"]],
  ["Neo Universe","ネオユニヴァース","Medium","neo-universe",45,["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["s",11,1,"Arima Kinen"]],
  ["Sakura Laurel","サクラローレル","Long","sakura-laurel",46,["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Symboli Kris S","シンボリクリスエス","Med·Long","symboli-kris-s",47,["j",5,1,"Make Debut"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Daiichi Ruby","ダイイチルビー","Mile","daiichi-ruby",48,["j",5,1,"Make Debut"],["s",5,0,"Yasuda Kinen"],["s",10,1,"Mile Championship"]],
  ["Mr. C.B.","ミスターシービー","Long","mr-cb",49,["j",5,1,"Make Debut"],["c",1,0,"Kyodo News Hai"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Shinko Windy","シンコウウインディ","Dirt·Mile","shinko-windy",50,["j",5,1,"Make Debut"],["c",5,1,"Unicorn Stakes"],["c",6,0,"Japan Dirt Derby"],["s",0,1,"Tokai Stakes"],["s",1,1,"February Stakes"],["s",5,1,"Teio Sho"],["s",11,0,"Champions Cup"]],
  ["Daitaku Helios","ダイタクヘリオス","Mile","daitaku-helios",51,["j",5,1,"Make Debut"],["j",11,0,"Hanshin Juvenile Fillies"],["c",4,1,"Aoi Stakes"],["c",10,1,"Mile Championship"],["s",2,1,"Takamatsunomiya Kinen"],["s",3,1,"Milers Cup"],["s",5,0,"Yasuda Kinen"],["s",10,1,"Mile Championship"],["s",11,1,"Arima Kinen (participate)"]],
  ["Hokko Tarumae","ホッコータルマエ","Dirt·Med","hokko-tarumae",52,["j",5,1,"Make Debut"],["s",10,0,"JBC Classic"],["s",11,0,"Champions Cup"]],
  ["Zenno Rob Roy","ゼンノロブロイ","Med·Long","zenno-rob-roy",53,["j",5,1,"Make Debut"],["c",3,1,"Aoba Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Wonder Acute","ワンダーアキュート","Dirt·Med","wonder-acute",54,["j",5,1,"Make Debut"],["s",10,0,"JBC Classic"]],
  ["Nakayama Festa","ナカヤマフェスタ","Med·Long","nakayama-festa",55,["j",5,1,"Make Debut"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Yamanin Zephyr","ヤマニンゼファー","Mile","yamanin-zephyr",56,["j",5,1,"Make Debut"],["s",5,0,"Yasuda Kinen"],["s",10,1,"Mile Championship"]],
  ["Aston Machan","アストンマーチャン","Sprint","aston-machan",57,["j",5,1,"Make Debut"],["j",7,1,"Kokura Sho 2yo"],["s",2,1,"Takamatsunomiya Kinen"],["s",8,1,"Sprinters Stakes"]],
  ["Seeking the Pearl","シーキングザパール","Sprint·Mile","seeking-the-pearl",58,["j",5,1,"Make Debut"],["j",10,0,"Daily Hai Junior Stakes"],["j",11,0,"Hanshin Juvenile Fillies"],["c",3,0,"Oka Sho"],["c",4,0,"NHK Mile Cup"],["c",8,0,"Rose Stakes"],["c",10,1,"Mile Championship"],["s",2,1,"Takamatsunomiya Kinen"]],
  ["Yukino Bijin","ユキノビジン","Mile·Med","yukino-bijin",59,["j",5,1,"Make Debut"],["j",11,0,"Hanshin Juvenile Fillies"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",6,1,"Queen Stakes"],["c",9,1,"Shuka Sho"],["s",2,1,"Osaka Hai"],["s",4,0,"Victoria Mile"],["s",10,0,"Queen Elizabeth II Cup"],["s",10,1,"Japan Cup"]],
  ["Copano Rickey","コパノリッキー","Dirt·Mile","copano-rickey",60,["j",5,1,"Make Debut"],["s",10,0,"JBC"]],
  ["Bamboo Memory","バンブーメモリー","Sprint·Mile","bamboo-memory",61,["j",5,1,"Make Debut"],["s",2,1,"Takamatsunomiya Kinen"],["s",8,1,"Sprinters Stakes"],["s",10,1,"Mile Championship"]],
  ["Air Shakur","エアシャカール","Long","air-shakur",62,["j",5,1,"Make Debut"],["j",11,1,"Hopeful Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["c",10,1,"Japan Cup (participate)"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"]],
  ["Sweep Tosho","スイープトウショウ","Mile·Med","sweep-tosho",63,["j",5,1,"Make Debut"],["j",11,0,"Hanshin Juvenile Fillies"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["c",10,0,"Queen Elizabeth II Cup"],["s",5,0,"Yasuda Kinen"],["s",5,1,"Takarazuka Kinen"]],
  ["Inari One","イナリワン","Med·Long","inari-one",64,["j",5,1,"Make Debut"],["c",6,0,"Japan Dirt Derby"],["c",11,1,"Tokyo Daishoten"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,0,"Mainichi Okan"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["Mejiro Palmer","メジロパーマー","Long","mejiro-palmer",65,["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Ines Fujin","アイネスフウジン","Mile·Med","ines-fujin",66,["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho (participate)"],["s",2,1,"Osaka Hai"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"]],
  ["Yaeno Muteki","ヤエノムテキ","Med·Long","yaeno-muteki",67,["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Nishino Flower","ニシノフラワー","Sprint·Mile","nishino-flower",68,["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",3,0,"Oka Sho"],["s",2,1,"Takamatsunomiya Kinen"],["s",8,1,"Sprinters Stakes"]],
  ["Mejiro Bright","メジロブライト","Long","mejiro-bright",69,["j",5,1,"Make Debut"],["s",3,1,"Tenno Sho (Spring)"],["s",11,1,"Arima Kinen"]],
  ["Satono Diamond","サトノダイヤモンド","Med·Long","satono-diamond",70,["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",11,1,"Arima Kinen"]],
  ["Kitasan Black","キタサンブラック","Med·Long","kitasan-black",71,["j",5,1,"Make Debut"],["c",8,1,"St. Lite Kinen"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",2,1,"Osaka Hai"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Admire Vega","アドマイヤベガ","Med·Long","admire-vega",72,["j",5,1,"Make Debut"],["j",11,1,"Hopeful Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho (participate)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Japan Cup"]],
  ["Mejiro Ardan","メジロアルダン","Mile·Med","mejiro-ardan",73,["j",5,1,"Make Debut"],["s",5,0,"Yasuda Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",10,1,"Mile Championship"]],
  ["Sakura Chiyono O","サクラチヨノオー","Mile·Med","sakura-chiyono-o",74,["j",5,1,"Make Debut"],["c",1,0,"Yayoi Sho"],["c",4,1,"Japanese Derby"],["s",5,0,"Yasuda Kinen"]],
  ["Tamamo Cross","タマモクロス","Med·Long","tamamo-cross",75,["j",5,1,"Make Debut"],["s",2,1,"Hanshin Daishoten"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Fine Motion","ファインモーション","Mile·Med","fine-motion",76,["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["c",10,0,"Queen Elizabeth II Cup"],["s",2,1,"Osaka Hai"],["s",5,1,"Takarazuka Kinen"],["s",7,1,"Sapporo Kinen"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["Mejiro Dober","メジロドーベル","Mile·Med","mejiro-dober",77,["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Tosen Jordan","トーセンジョーダン","Mile·Med","tosen-jordan",78,["j",5,1,"Make Debut"],["c",4,0,"NHK Mile Cup"],["s",5,0,"Yasuda Kinen"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["Manhattan Cafe","マンハッタンカフェ","Long","manhattan-cafe",79,["j",5,1,"Make Debut"],["c",2,0,"Yayoi Sho"],["c",8,1,"St. Lite Kinen"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Kawakami Princess","カワカミプリンセス","Medium","kawakami-princess",80,["j",5,1,"Make Debut"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["c",10,0,"Queen Elizabeth II Cup"],["s",2,0,"Kinko Sho"],["s",4,0,"Victoria Mile"],["s",5,1,"Takarazuka Kinen"],["s",10,0,"Queen Elizabeth II Cup"]],
  ["Agnes Digital","アグネスデジタル","Mile·Med","agnes-digital",81,["j",5,1,"Make Debut"],["c",1,1,"Hyacinth Stakes"],["c",4,0,"NHK Mile Cup"],["c",6,0,"Japan Dirt Derby"],["c",10,1,"Mile Championship"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["Hishi Akebono","ヒシアケボノ","Dirt·Sprint","hishi-akebono",82,["j",5,1,"Make Debut"],["s",9,0,"JBC Sprint"]],
  ["Eishin Flash","エイシンフラッシュ","Medium","eishin-flash",83,["j",5,1,"Make Debut"],["c",0,0,"Keisei Hai"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",10,1,"Japan Cup (participate)"],["c",11,1,"Arima Kinen (participate)"],["s",2,1,"Osaka Hai"],["s",3,1,"Tenno Sho (Spring)"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Meisho Doto","メイショウドトウ","Med·Long","meisho-doto",84,["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Gold City","ゴールドシチー","Mile·Med","gold-city",85,["j",5,1,"Make Debut"],["j",11,0,"Hanshin Juvenile Fillies"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",2,1,"Osaka Hai"],["s",3,1,"Tenno Sho (Spring)"]],
  ["Fuji Kiseki","フジキセキ","Mile","fuji-kiseki",86,["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",2,0,"Yayoi Sho"],["c",3,0,"Satsuki Sho"],["c",4,0,"NHK Mile Cup"],["c",9,1,"Kikuka Sho (participate)"],["s",2,1,"Takamatsunomiya Kinen"],["s",5,0,"Yasuda Kinen"]],
  ["Hishi Amazon","ヒシアマゾン","Mile·Med","hishi-amazon",87,["j",5,1,"Make Debut"],["j",11,0,"Hanshin Juvenile Fillies"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["c",11,1,"Arima Kinen"],["s",2,1,"Osaka Hai"],["s",5,0,"Yasuda Kinen"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Seiun Sky","セイウンスカイ","Med·Long","seiun-sky",88,["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"]],
  ["Narita Brian","ナリタブライアン","Long","narita-brian",89,["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",2,1,"Hanshin Daishoten"],["s",3,1,"Tenno Sho (Spring)"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["Smart Falcon","スマートファルコン","Dirt·Long","smart-falcon",90,["j",5,1,"Make Debut"],["s",9,0,"JBC Sprint"]],
  ["Narita Taishin","ナリタタイシン","Medium","narita-taishin",91,["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho (participate)"],["s",2,1,"Nikkei Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Curren Chan","カレンチャン","Sprint","curren-chan",92,["j",5,1,"Make Debut"],["c",2,0,"Fillies Revue"],["c",4,1,"Aoi Stakes"],["c",5,1,"Hakodate Sprint Stakes"],["c",8,1,"Sprinters Stakes"],["s",2,0,"Ocean Stakes"],["s",2,1,"Takamatsunomiya Kinen"],["s",8,1,"Sprinters Stakes"]],
  ["Biwa Hayahide","ビワハヤヒデ","Med·Long","biwa-hayahide",93,["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Mihono Bourbon","ミホノブルボン","Med·Long","mihono-bourbon",94,["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",2,1,"Spring Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"]],
  ["T.M. Opera O","テイエムオペラオー","Med·Long","tm-opera-o",95,["j",5,1,"Make Debut"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",11,1,"Arima Kinen"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Special Week","スペシャルウィーク","Med·Long","special-week",96,["j",5,1,"Make Debut"],["c",1,0,"Kisaragi Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Silence Suzuka","サイレンススズカ","Mile·Med","silence-suzuka",97,["j",5,1,"Make Debut"],["c",2,0,"Yayoi Sho"],["c",8,1,"Kobe Shimbun Hai"],["s",2,0,"Kinko Sho"],["s",5,1,"Takarazuka Kinen"],["s",9,0,"Mainichi Okan"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["Tokai Teio","トウカイテイオー","Med·Long","tokai-teio",98,["j",5,1,"Make Debut"],["c",0,1,"Wakagoma Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Maruzensky","マルゼンスキー","Mile·Med","maruzensky",99,["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",2,1,"Spring Stakes"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",11,1,"Arima Kinen (participate)"],["s",2,1,"Osaka Hai"],["s",5,0,"Yasuda Kinen"]],
  // Extra chars (not in URL list but in game)
  ["Admire Groove","アドマイヤグルーヴ","Mile·Med","admire-groove",100,["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["c",10,0,"Queen Elizabeth II Cup"],["s",2,1,"Osaka Hai"],["s",5,1,"Takarazuka Kinen"]],
  ["Oguri Cap","オグリキャップ","Mile·Med","oguri-cap",101,["j",5,1,"Make Debut"],["c",4,0,"NHK Mile Cup"],["c",10,1,"Mile Championship"],["c",11,1,"Arima Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Gold Ship","ゴールドシップ","Long","gold-ship",102,["j",5,1,"Make Debut"],["j",11,1,"Hopeful Stakes"],["c",3,0,"Satsuki Sho"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Daiwa Scarlet","ダイワスカーレット","Mile·Med","daiwa-scarlet",103,["j",5,1,"Make Debut"],["c",2,0,"Tulip Sho"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["c",9,1,"Shuka Sho"],["c",10,0,"Queen Elizabeth II Cup"],["s",2,1,"Osaka Hai"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Vodka","ウオッカ","Mile·Med","vodka",104,["j",5,1,"Make Debut"],["j",11,0,"Hanshin Juvenile Fillies"],["c",2,0,"Tulip Sho"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Shuka Sho"],["c",11,1,"Arima Kinen (participate)"],["s",4,0,"Victoria Mile"],["s",5,0,"Yasuda Kinen"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["El Condor Pasa","エルコンドルパサー","Mile·Med","el-condor-pasa",105,["j",5,1,"Make Debut"],["c",1,0,"Kyodo News Hai"],["c",4,0,"NHK Mile Cup"],["c",4,1,"Japanese Derby"],["c",9,0,"Mainichi Okan"],["s",5,1,"Takarazuka Kinen"],["s",10,1,"Japan Cup"],["s",11,1,"Arima Kinen"]],
  ["Grass Wonder","グラスワンダー","Med·Long","grass-wonder",106,["j",5,1,"Make Debut"],["j",11,1,"Asahi Hai Futurity Stakes"],["c",4,1,"Japanese Derby"],["c",10,1,"Japan Cup"],["c",11,1,"Arima Kinen"],["s",5,1,"Takarazuka Kinen"],["s",9,0,"Mainichi Okan"],["s",11,1,"Arima Kinen"]],
  ["Taiki Shuttle","タイキシャトル","Mile","taiki-shuttle",107,["j",5,1,"Make Debut"],["c",0,0,"Shinzan Kinen"],["c",4,0,"NHK Mile Cup"],["c",5,1,"Unicorn Stakes"],["c",10,1,"Mile Championship"],["s",5,0,"Yasuda Kinen"],["s",8,1,"Sprinters Stakes"],["s",10,1,"Mile Championship"]],
  ["Mejiro McQueen","メジロマックイーン","Long","mejiro-mcqueen",108,["j",5,1,"Make Debut"],["c",8,1,"Kobe Shimbun Hai"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["Air Groove","エアグルーヴ","Medium","air-groove",109,["j",5,1,"Make Debut"],["c",3,0,"Oka Sho"],["c",4,1,"Japanese Oaks"],["s",9,1,"Tenno Sho (Autumn)"]],
  ["King Halo","キングヘイロー","Mile","king-halo",110,["j",5,1,"Make Debut"],["s",5,0,"Yasuda Kinen"],["s",10,1,"Mile Championship"]],
  ["Nice Nature","ナイスネイチャ","Long","nice-nature",111,["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",11,1,"Arima Kinen"]],
  ["Haru Urara","ハルウララ","Dirt·Sprint","haru-urara",112,["j",5,1,"Make Debut"],["s",1,0,"OP Race 1"],["s",2,1,"OP Race 2"]],
  ["Super Creek","スーパークリーク","Long","super-creek",113,["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",11,1,"Arima Kinen"]],
  ["Mayano Top Gun","マヤノトップガン","Long","mayano-top-gun",114,["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",2,1,"Hanshin Daishoten"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",9,1,"Tenno Sho (Autumn)"],["s",11,1,"Arima Kinen"]],
  ["Mejiro Ryan","メジロライアン","Med·Long","mejiro-ryan",115,["j",5,1,"Make Debut"],["j",11,0,"Junior Cup"],["c",3,0,"Satsuki Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["c",11,1,"Arima Kinen"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Agnes Tachyon","アグネスタキオン","Mile·Med","agnes-tachyon",116,["j",5,1,"Make Debut"],["c",1,0,"Yayoi Sho"],["c",3,0,"Satsuki Sho"]],
  ["Winning Ticket","ウイニングチケット","Medium","winning-ticket",117,["j",5,1,"Make Debut"],["c",1,0,"Yayoi Sho"],["c",4,1,"Japanese Derby"],["s",9,1,"Japan Cup"]],
  ["Rice Shower","ライスシャワー","Long","rice-shower",118,["j",5,1,"Make Debut"],["c",2,1,"Spring Stakes"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["s",2,1,"Nikkei Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",5,1,"Takarazuka Kinen"],["s",11,1,"Arima Kinen"]],
  ["Sakura Bakushin O","サクラバクシンオー","Sprint","sakura-bakushin-o",119,["j",5,1,"Make Debut"],["j",10,0,"Keio Hai Junior Stakes"],["c",2,1,"Spring Stakes (participate)"],["c",4,1,"Aoi Stakes"],["c",8,1,"Sprinters Stakes"],["s",2,1,"Takamatsunomiya Kinen"],["s",5,1,"Hakodate Sprint Stakes"],["s",6,0,"CBC Sho"]],
  ["Matikanefukukitaru","マチカネフクキタル","Long","matikanefukukitaru",120,["j",5,1,"Make Debut"],["c",2,0,"Yayoi Sho"],["c",4,1,"Japanese Derby"],["c",9,1,"Kikuka Sho"],["s",2,0,"Kinko Sho"],["s",5,1,"Takarazuka Kinen"]],
  ["Matikanetannhauser","マチカネタンホイザ","Long","matikanetannhauser",121,["j",5,1,"Make Debut"],["c",9,1,"Kikuka Sho"],["s",3,1,"Tenno Sho (Spring)"],["s",11,1,"Arima Kinen"]],
];

/* ── SORT ── */
let _sortKey="new",_sortAsc=false; // default: newest first
let _fC=[...CHARS];

function buildSortBar(){
  const el=document.getElementById("sortbar");if(!el)return;
  const sorts=[{k:"az",l:"sortAZ"},{k:"za",l:"sortZA"},{k:"goals",l:"sortGoals"},{k:"new",l:"sortNew"},{k:"old",l:"sortOld"}];
  el.innerHTML=`<span class="sort-lbl">${t("sortLbl")}</span>`+sorts.map(s=>{
    const on=_sortKey===s.k;
    return`<button class="sort-btn${on?" on":""}" onclick="setSort('${s.k}')">${t(s.l)}${on?`<span class="sort-dir">${_sortAsc?"↑":"↓"}</span>`:""}</button>`;
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
    if(_sortKey==="az")v=a[0].localeCompare(b[0]);
    else if(_sortKey==="za")v=b[0].localeCompare(a[0]);
    else if(_sortKey==="goals")v=(a.length-5)-(b.length-5);
    else if(_sortKey==="new")v=a[4]-b[4]; // lower releaseOrder = newer
    else if(_sortKey==="old")v=b[4]-a[4];
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
        <div class="cbtn-ph">🐎</div>
      </div>
      <div class="cbtn-info">
        <div class="cbtn-name">${nm}</div>
        ${L!=="JP"?`<div class="cbtn-kana">${kn}</div>`:""}
        <span class="cbtn-tag">${c[2]}</span>
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
    buildLockGrid();
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
  const nm=L==="JP"?c[1]:c[0];const kn=L==="JP"?c[2]:c[1];
  const e1=document.getElementById("pbnr-en"),e2=document.getElementById("pbnr-kn");
  if(e1)e1.textContent=nm;if(e2)e2.textContent=kn;
  document.getElementById("pd-n").textContent=nm;
  document.getElementById("pd-k").textContent=kn;
}

function _selChar(idx){
  if(_customMode)return; // in custom mode, clicking chars does nothing
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
  _selC.slice(5).forEach(g=>{
    const gi=_pci(g[0],g[1],g[2]);
    if(gi<0||gi>=TC)return;
    const k=g[0]+g[1]+g[2];
    if(seen.has(k))return;seen.add(k);
    CL[gi]={col,name:nm};
    _pLocks.add(gi);
    _refreshCellClass(gi);
  });
  updateCnt();savePrefs();
  buildLockGrid(); // refresh grid immediately — #5 requirement
}

/* ── INIT ── */
loadPrefs();
buildSlotCfg();
_fC=[...CHARS];_buildCG();
buildSortBar();
buildLockGrid();
updateCnt();
calcSP();
renderAll();
