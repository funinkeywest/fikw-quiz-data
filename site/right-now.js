/* Generated for funinkeywest.com. Injects styles and markup, then runs the quiz. */
(function(){
var m=document.getElementById("fikw-rn-mount"); if(!m) return;
if(!document.getElementById("fikw-rn-mount-css")){var st=document.createElement("style");st.id="fikw-rn-mount-css";st.textContent="\n/* RIGHT NOW: \"I'm in the Keys, what should I do today / tonight / tomorrow?\"\n   Four taps, phone-first. Same brand as the other quizzes: brights on cream, black outlines, Poppins + Inter. */\n#fikw-rn{--bg:#fffbef;--ink:#141414;--muted:#4f4e4b;--soft:#e9e4d6;--pink:#ff4fa3;--coral:#ff7a45;--yellow:#ffe14d;--lime:#b8fe6a;--cyan:#2ee6e6;\n  --display:\"Poppins\",\"Arial Black\",system-ui,sans-serif;--body:\"Inter\",system-ui,-apple-system,\"Segoe UI\",sans-serif;\n  color:var(--ink);font:16px/1.55 var(--body);max-width:760px;margin:24px auto;text-align:left}\n#fikw-rn *{box-sizing:border-box;min-width:0}\n#fikw-rn [hidden]{display:none!important}\n#fikw-rn a{color:inherit;text-decoration-color:var(--pink);text-decoration-thickness:2px;text-underline-offset:2px}\n#fikw-rn h2,#fikw-rn h3,#fikw-rn h4{color:var(--ink)!important;text-transform:none!important;letter-spacing:-.01em;padding:0!important}\n#fikw-rn h2{font:800 clamp(26px,6vw,38px)/1.12 var(--display)!important;margin:8px 0 6px!important;text-wrap:balance}\n#fikw-rn h2 mark{background:var(--yellow)!important;color:inherit!important;padding:.04em .14em 0!important;border-radius:6px;line-height:1!important;box-decoration-break:clone;-webkit-box-decoration-break:clone}\n#fikw-rn h3{font:800 20px/1.2 var(--display)!important;margin:0 0 4px!important}\n#fikw-rn h4{font:700 16px/1.3 var(--display)!important;margin:0!important}\n#fikw-rn p{margin:0;padding:0}\n#fikw-rn .rn-box{display:block!important;background:#fff;border:2px solid var(--ink);border-radius:16px;box-shadow:5px 5px 0 var(--ink);overflow:hidden}\n#fikw-rn .rn-stripe{height:10px;background:linear-gradient(90deg,var(--pink) 0 20%,var(--coral) 20% 40%,var(--yellow) 40% 60%,var(--lime) 60% 80%,var(--cyan) 80%)}\n#fikw-rn .rn-in{padding:22px clamp(16px,4vw,30px) 26px;background:var(--bg)}\n#fikw-rn .rn-chip{display:inline-block;font:700 12px/1 var(--body);letter-spacing:.06em;text-transform:uppercase;border:2px solid var(--ink);border-radius:999px;padding:6px 11px;background:var(--lime)}\n#fikw-rn .rn-lede{color:var(--muted);margin:0 0 14px}\n#fikw-rn .rn-dots{display:flex;gap:6px;margin:0 0 14px}\n#fikw-rn .rn-dots span{flex:1;height:8px;border-radius:4px;background:var(--soft);border:1.5px solid var(--ink)}\n#fikw-rn .rn-dots span.on:nth-child(1){background:var(--pink)}#fikw-rn .rn-dots span.on:nth-child(2){background:var(--coral)}#fikw-rn .rn-dots span.on:nth-child(3){background:var(--yellow)}#fikw-rn .rn-dots span.on:nth-child(4){background:var(--lime)}\n#fikw-rn .rn-q{font:800 22px/1.2 var(--display);margin:0 0 4px}\n#fikw-rn .rn-hint{color:var(--muted);font-size:14px;margin:0 0 14px}\n#fikw-rn .rn-opts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\n#fikw-rn .rn-opt{all:unset;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:column;gap:2px;min-height:64px;padding:12px 14px;border:2px solid var(--ink);border-radius:12px;background:#fff;font:700 16px/1.25 var(--body);color:var(--ink)}\n#fikw-rn .rn-opt small{font:500 13px/1.3 var(--body);color:var(--muted)}\n#fikw-rn .rn-opt:hover{background:#fff6c7}\n#fikw-rn .rn-opt:focus-visible,#fikw-rn .rn-btn:focus-visible,#fikw-rn .rn-link:focus-visible{outline:3px solid var(--pink);outline-offset:2px}\n#fikw-rn .rn-opt[aria-pressed=\"true\"]{background:var(--yellow);box-shadow:3px 3px 0 var(--ink)}\n#fikw-rn .rn-nav{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:16px;flex-wrap:wrap}\n#fikw-rn .rn-btn{all:unset;box-sizing:border-box;cursor:pointer;display:inline-flex;align-items:center;gap:6px;min-height:46px;padding:10px 20px;border:2px solid var(--ink);border-radius:999px;background:var(--yellow);font:800 16px/1.2 var(--display);color:var(--ink);box-shadow:3px 3px 0 var(--ink);text-decoration:none!important}\n#fikw-rn .rn-btn.alt{background:#fff;box-shadow:none;font-weight:700}\n#fikw-rn .rn-btn.sm{min-height:40px;padding:8px 16px;font-size:15px}\n#fikw-rn .rn-btn[disabled]{opacity:.45;cursor:not-allowed}\n#fikw-rn .rn-link{all:unset;cursor:pointer;font-weight:700;text-decoration:underline;text-decoration-color:var(--pink);text-decoration-thickness:2px;text-underline-offset:3px}\n#fikw-rn .rn-err{color:#b3261e;font-weight:600;font-size:14px;min-height:1px}\n#fikw-rn .rn-facts{display:flex;flex-wrap:wrap;gap:8px;margin:4px 0 0}\n#fikw-rn .rn-fact{border:2px solid var(--ink);border-radius:999px;padding:5px 12px;background:#fff;font:600 14px/1.3 var(--body)}\n#fikw-rn .rn-fact.sun{background:var(--coral)}#fikw-rn .rn-fact.moon{background:var(--cyan)}\n#fikw-rn .rn-sec{margin-top:22px}\n#fikw-rn .rn-list{display:grid;gap:10px;margin-top:10px}\n#fikw-rn .rn-item{border:2px solid var(--ink);border-radius:12px;background:#fff;padding:12px 14px}\n#fikw-rn .rn-item .rn-when{display:inline-block;font:700 12px/1 var(--body);letter-spacing:.05em;text-transform:uppercase;padding:5px 9px;border-radius:999px;border:1.5px solid var(--ink);background:var(--yellow);margin-bottom:6px}\n#fikw-rn .rn-item p{font-size:15px;color:var(--muted);margin-top:3px}\n#fikw-rn .rn-item .rn-meta{font-size:13px;color:var(--muted);margin-top:2px}\n#fikw-rn .rn-slot{border:2px solid var(--ink);border-radius:14px;overflow:hidden;background:#fff}\n#fikw-rn .rn-slot>header{display:flex;justify-content:space-between;gap:10px;align-items:baseline;padding:9px 14px;border-bottom:2px solid var(--ink);font:800 15px/1.2 var(--display)}\n#fikw-rn .rn-slot>header span{font:600 13px/1.2 var(--body)}\n#fikw-rn .rn-slot.s-morning>header{background:var(--lime)}#fikw-rn .rn-slot.s-afternoon>header{background:var(--cyan)}#fikw-rn .rn-slot.s-sunset>header{background:var(--coral)}#fikw-rn .rn-slot.s-night>header{background:var(--pink)}\n#fikw-rn .rn-slot .rn-body{padding:12px 14px;display:grid;gap:12px}\n#fikw-rn .rn-pick p{font-size:15px;color:var(--muted);margin:3px 0 8px}\n#fikw-rn .rn-eat{font-size:15px;border-top:1.5px dashed var(--soft);padding-top:10px}\n#fikw-rn .rn-eat b{font-weight:700}\n#fikw-rn .rn-tip{font-size:13px;color:var(--muted);margin-top:8px}\n#fikw-rn .rn-next{margin-top:22px;border:2px solid var(--ink);border-radius:14px;padding:16px;background:var(--lime);display:grid;gap:8px}\n#fikw-rn .rn-fine{font-size:12px;color:var(--muted);margin-top:16px}\n@media (max-width:520px){#fikw-rn .rn-opts{grid-template-columns:minmax(0,1fr)}#fikw-rn .rn-opt{min-height:54px}}\n@media (prefers-reduced-motion:reduce){#fikw-rn *{transition:none!important;scroll-behavior:auto!important}}\n";document.head.appendChild(st);}
if(!document.querySelector('link[href*="family=Poppins"]')){var l=document.createElement("link");l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Inter:wght@400;500;600;700;800&display=swap";document.head.appendChild(l);}
m.innerHTML="<div id=\"fikw-rn\">\n  <div class=\"rn-box\">\n    <div class=\"rn-stripe\"></div>\n    <div class=\"rn-in\">\n      <div id=\"rn-quiz\">\n        <span class=\"rn-chip\">Already in the Keys? \u00b7 4 taps</span>\n        <h2>What should we do <mark>right now?</mark></h2>\n        <p class=\"rn-lede\">Tell me when, where and what you're in the mood for, and I'll hand you a plan with what's on, my picks and where to eat. The same thing I'd text a friend.</p>\n        <div class=\"rn-dots\" aria-hidden=\"true\"><span></span><span></span><span></span><span></span></div>\n        <div id=\"rn-step\" aria-live=\"polite\"></div>\n        <p class=\"rn-err\" id=\"rn-err\" role=\"alert\"></p>\n        <div class=\"rn-nav\"><button type=\"button\" class=\"rn-btn alt sm\" id=\"rn-back\">\u2190 Back</button><button type=\"button\" class=\"rn-btn\" id=\"rn-go\" hidden>Show my plan \u2192</button></div>\n      </div>\n      <div id=\"rn-results\" hidden></div>\n    </div>\n  </div>\n</div>";
})();

(() => {
/* ---- Analytics: counts quiz starts, finishes and clicks in your Google Analytics (and Meta pixel) ---- */
const FIKW_QUIZ = "right_now";
const fikwTrack = (ev, p) => { try { const d = Object.assign({quiz: FIKW_QUIZ}, p || {}); if(typeof window.gtag === "function") window.gtag("event", ev, d); if(typeof window.fbq === "function") window.fbq("trackCustom", ev, d); } catch(e){} };
let fikwStarted = false;
document.addEventListener("click", e => {
  if(!e.target.closest || !e.target.closest("#fikw-rn")) return;
  if(!fikwStarted && e.target.closest(".rn-opt")){ fikwStarted = true; fikwTrack("quiz_start"); }
  const a = e.target.closest("a[href]"); if(!a) return;
  const h = a.href || "", text = (a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80);
  let host = ""; try { host = new URL(h).hostname; } catch(err){}
  if(/custom-key-west-trip-guide/.test(h)) fikwTrack("custom_guide_click");
  else if(/insider-club/.test(h)) fikwTrack("insider_club_click");
  else if(a.hasAttribute("data-next") || /#whats-happening$/.test(h)) fikwTrack("plan_rest_of_trip_click");
  else if(/sponsored/.test(a.rel || "") || /fareharbor|stay22|trustedtours|\/conch\//i.test(h)) fikwTrack("booking_click", {link_text: text, link_domain: host});
  else if(host && !/funinkeywest\.com$/.test(host)) fikwTrack("outbound_click", {link_text: text, link_domain: host});
}, true);
let fikwFirstBuild = true;
/* ---------------- Settings ---------------- */
const SITE_URL = "https://funinkeywest.com";
const PAGE_URL = "https://funinkeywest.com/find-your-key-west/";
const INSIDER_CLUB_URL = "https://funinkeywest.kit.com/products/fun-in-key-west-insider-club";
/* ------------------------------------------- */
const EXP = window.EXPERIENCES || (typeof EXPERIENCES !== "undefined" ? EXPERIENCES : []);
const PK  = window.PICKS || (typeof PICKS !== "undefined" ? PICKS : []);
const EV  = window.EVENTS || (typeof EVENTS !== "undefined" ? EVENTS : []);
const WK  = window.WEEKLY || (typeof WEEKLY !== "undefined" ? WEEKLY : []);
const root = document.getElementById("fikw-rn"); if(!root) return;
const $ = s => root.querySelector(s);
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fhLink = (s,id) => `https://fareharbor.com/embeds/book/${s}/items/${id}/?asn=fhdn&asn-ref=funinkw&ref=funinkw&bookable-only=yes&full-items=yes&marketplace=yes&flow=no&branding=no`;
const bookUrl = x => x.link || (x.fh ? fhLink(x.fh[0], x.fh[1]) : "");
const postUrl = slug => `${SITE_URL}/${slug}/`;
const AREA = {kw:"Key West", lower:"the Lower Keys", middle:"Marathon & the Middle Keys", upper:"Key Largo & Islamorada"};
const NEAR = {kw:["kw","lower"], lower:["lower","kw"], middle:["middle","lower"], upper:["upper","middle"]};
const DOW = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MON = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const iso = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const addDays = (d,n) => { const x = new Date(d); x.setDate(x.getDate()+n); return x; };
const D = s => { const [y,m,d] = s.split("-").map(Number); return new Date(y, m-1, d); };

/* Key West clock, whatever time zone the phone is set to */
function keysNow(){
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",hourCycle:"h23"}).formatToParts(new Date()).map(x => [x.type, x.value]));
  return {date: new Date(+p.year, +p.month-1, +p.day), mins: (+p.hour)*60 + (+p.minute)};
}
/* Sunset in Key West (sunrise equation): minutes after midnight, Eastern time */
function sunsetMins(d){
  const rad = Math.PI/180, lat = 24.555*rad, lw = -81.78;
  const jd = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 12) / 864e5 + 2440587.5;
  const n = Math.ceil(jd - 2451545 + 0.0008), J = n - lw/360;
  const M = (357.5291 + 0.98560028*J) % 360, Mr = M*rad;
  const C = 1.9148*Math.sin(Mr) + 0.02*Math.sin(2*Mr) + 0.0003*Math.sin(3*Mr);
  const L = ((M + C + 282.9372) % 360) * rad;
  const Jt = 2451545 + J + 0.0053*Math.sin(Mr) - 0.0069*Math.sin(2*L);
  const dec = Math.asin(Math.sin(L)*Math.sin(23.4397*rad));
  const w = Math.acos((Math.sin(-0.833*rad) - Math.sin(lat)*Math.sin(dec)) / (Math.cos(lat)*Math.cos(dec)));
  const t = new Date((Jt + w/(2*Math.PI) - 2440587.5) * 864e5);
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",hour:"numeric",minute:"numeric",hourCycle:"h23"}).formatToParts(t).map(x => [x.type, x.value]));
  return (+p.hour)*60 + (+p.minute);
}
const clock = m => { const h = Math.floor(m/60) % 24, mm = String(m%60).padStart(2,"0"); return `${h%12 || 12}:${mm} ${h<12 ? "am" : "pm"}`; };
function isFullMoon(d){
  const syn = 29.530588853, ref = Date.UTC(2000,0,6,18,14) + 14.765*864e5;
  const age = ((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 20) - ref) / 864e5) % syn;
  const a = (age + syn) % syn; return a < 1 || a > syn - 1;
}

/* ---------- questions ---------- */
const STEPS = [
  {key:"when", q:"When are you free?", hint:"I'll work from Key West time.", opts:[
    ["now","Right now","Something I can do soon"],["later","Later today","This afternoon into sunset"],
    ["tonight","Tonight","Sunset, dinner and after dark"],["tomorrow","Tomorrow","Plan me a whole day"]]},
  {key:"where", q:"Where are you?", hint:"I'll keep it close, a short drive at most.", opts:[
    ["kw","Key West","Old Town and nearby"],["lower","Lower Keys","Stock Island to Big Pine"],
    ["middle","Marathon & Middle Keys","Duck Key to the Seven Mile Bridge"],["upper","Key Largo & Islamorada","The Upper Keys"]]},
  {key:"who", q:"Who's with you?", hint:"", opts:[
    ["couple","Just the two of us",""],["family","Family with kids",""],["friends","A group of friends",""],
    ["solo","Just me",""],["lgbtq","LGBTQ+ crew","I'll add the best of gay Key West"]]},
  {key:"mood", multi:true, q:"What are you in the mood for?", hint:"Pick one or two.", opts:[
    ["water","On the water","Snorkel, sail, sandbar, kayak"],["eat","Eat & drink","Food tours, happy hour, pie"],
    ["chill","Chill & sunset","Easy, scenic, no rush"],["explore","Explore & history","Museums, hidden gems, walks"],
    ["night","Music, shows & nightlife","Live music, drag, ghost tours"],["rain","Rainy day or indoors","Out of the sun or the rain"]]}
];
const state = {step:0, when:null, where:null, who:null, mood:[]};

/* ---------- matching ---------- */
const MOOD_TAGS = {
  water:["snorkel","jetski","sandbar","kayak","dolphins","fishing","reef","dive","sail","tortugas","dry"],
  eat:["foodtour","cocktails","rum","pie","sweets","pubcrawl","cookingshow","seafood"],
  chill:["sunset","easy","wellness","nature","sandbar","romantic","small"],
  explore:["history","museum","hidden","quirky","walk","bike","ghost","firsttime","classic","nature"],
  night:["night","music","party","drag","ghost","theater","pubcrawl"],
  rain:["museum","theater","cookingshow"]};
const INDOOR = ["museum","theater","cookingshow"];
const has = (x, list) => (x.t||[]).some(t => list.includes(t));
/* when an experience happens: all day (early start), day, sunset or night */
function timeOf(x){
  if(has(x,["allday","tortugas","dry","daytrip"])) return "allday";
  if(has(x,["night","ghost","drag","pubcrawl","theater","fullmoon"])) return "night";
  if(has(x,["sunset"])) return "sunset";
  return "day";
}
function slotsFor(when, now){
  const ss = sunsetMins(now.date);
  if(when === "tomorrow") return ["morning","afternoon","sunset","night"];
  if(when === "tonight") return now.mins >= ss + 15 || now.mins < 5*60 ? ["night"] : ["sunset","night"];
  const m = now.mins;
  const start = m < 5*60 ? "night" : m < 11*60 ? "morning" : m < ss - 100 ? "afternoon" : m < ss + 30 ? "sunset" : "night";
  const order = ["morning","afternoon","sunset","night"];
  let i = order.indexOf(start);
  if(when === "later") i = Math.max(i + (start === "morning" ? 1 : 0), 1);
  return order.slice(Math.min(i, 3));
}
const FITS = {morning:["day","allday"], afternoon:["day"], sunset:["sunset"], night:["night"]};
function score(x, d){
  const near = NEAR[state.where] || [];
  if(!near.includes(x.a)) return -1;
  const fam = state.who === "family";
  if(fam && has(x,["adults","pubcrawl","drag"])) return -1;
  if(x.t && x.t.includes("fullmoon") && !isFullMoon(d)) return -1;
  if(state.mood.includes("rain") && state.mood.length === 1 && !has(x, INDOOR)) return -1;
  let s = x.a === state.where ? 3 : 0;
  state.mood.forEach(m => { s += (x.t||[]).filter(t => MOOD_TAGS[m].includes(t)).length * 3; });
  if(fam && has(x,["family"])) s += 3;
  if(state.who === "couple" && has(x,["romantic"])) s += 3;
  if(state.who === "friends" && has(x,["friends","party","celebrate"])) s += 3;
  if(state.who === "lgbtq" && has(x,["lgbtq","drag"])) s += 5;
  if(state.who === "solo" && has(x,["small","walk","history","firsttime"])) s += 2;
  if(x.pick) s += 1;
  return s;
}
function pickExp(slot, d, used, n){
  return EXP.filter(x => bookUrl(x) && FITS[slot].includes(timeOf(x)) && !used.has(x.id))
    .map(x => ({x, s: score(x, d)})).filter(o => o.s >= 0)
    .sort((a,b) => b.s - a.s).slice(0, n).map(o => { used.add(o.x.id); return o.x; });
}
const EAT_FOR = {morning:["coffee","sweets"], afternoon:["happyhour","sweets","coffee"], sunset:["happyhour","drinks"], night:["dinner","drinks"]};
function pickEat(slot, used){
  const near = NEAR[state.where] || [];
  const fam = state.who === "family";
  const local = PK.some(p => p.a === state.where && EAT_FOR[slot].includes(p.c) && !used.has(p.n));
  return PK.filter(p => (local ? p.a === state.where : near.includes(p.a)) && EAT_FOR[slot].includes(p.c) && !used.has(p.n) && !(fam && p.c === "drinks"))
    .map(p => ({p, s: (p.a === state.where ? 3 : 0) + (EAT_FOR[slot].indexOf(p.c) === 0 ? 2 : 0)
      + (state.who === "lgbtq" && (p.t||[]).includes("lgbtq") ? 3 : 0) + (state.who === "couple" && (p.t||[]).includes("romantic") ? 2 : 0)
      + (fam && (p.t||[]).includes("family") ? 2 : 0) + (slot === "sunset" && (p.t||[]).some(t => ["sunset","waterfront"].includes(t)) ? 3 : 0)
      + (state.mood.includes("eat") ? 1 : 0)}))
    .sort((a,b) => b.s - a.s).slice(0,1).map(o => { used.add(o.p.n); return o.p; })[0];
}
function onThisDay(d){
  const k = iso(d), near = NEAR[state.where] || [], dow = d.getDay(), fam = state.who === "family";
  const events = EV.filter(e => k >= e.s && k <= (e.e || e.s) && near.includes(e.a))
    .map(e => ({n:e.n, when: e.time || (e.e && e.e !== e.s ? "Running now · check times" : "Today"), where:e.v, b:e.b, url:e.url, tix:e.tix}));
  const rituals = WK.filter(w => near.includes(w.a) && (w.d ? w.d.includes(dow) : (dow === w.nth[1] && Math.ceil(d.getDate()/7) === w.nth[0])))
    .filter(w => !(fam && (w.t||[]).some(t => ["drag","night"].includes(t))))
    .map(w => ({n:w.n, when:w.time, where:"", b:w.b, url:"", tix:false, lg:(w.t||[]).includes("lgbtq")}))
    .filter(w => state.who === "lgbtq" || !w.lg || state.mood.includes("night"));
  return [...events, ...rituals];
}

/* ---------- quiz screens ---------- */
function renderStep(){
  const s = STEPS[state.step];
  root.querySelectorAll(".rn-dots span").forEach((el,i) => el.classList.toggle("on", i <= state.step));
  const cur = state[s.key];
  $("#rn-step").innerHTML = `<p class="rn-q">${esc(s.q)}</p>${s.hint ? `<p class="rn-hint">${esc(s.hint)}</p>` : ""}
    <div class="rn-opts" role="group" aria-label="${esc(s.q)}">${s.opts.map(([v,t,sub]) => {
      const on = s.multi ? cur.includes(v) : cur === v;
      return `<button type="button" class="rn-opt" data-v="${v}" aria-pressed="${on}">${esc(t)}${sub ? `<small>${esc(sub)}</small>` : ""}</button>`; }).join("")}</div>`;
  $("#rn-back").style.visibility = state.step ? "visible" : "hidden";
  $("#rn-go").hidden = !s.multi;
  $("#rn-go").disabled = s.multi && !cur.length;
  $("#rn-err").textContent = "";
  root.querySelectorAll(".rn-opt").forEach(b => b.addEventListener("click", () => {
    const v = b.dataset.v;
    if(s.multi){
      const i = cur.indexOf(v);
      if(i >= 0) cur.splice(i,1); else { if(cur.length >= 2) cur.shift(); cur.push(v); }
      renderStep();
    } else { state[s.key] = v; state.step++; renderStep(); }
  }));
}
$("#rn-back").addEventListener("click", () => { if(state.step){ state.step--; renderStep(); } });
$("#rn-go").addEventListener("click", () => { if(!state.mood.length){ $("#rn-err").textContent = "Pick at least one."; return; } build(true); });

/* ---------- results ---------- */
const SLOT_NAME = {morning:"Morning", afternoon:"Afternoon", sunset:"Sunset", night:"Tonight"};
function planCode(){ return [state.when, state.where, state.who, state.mood.join(".")].join("~"); }
function readCode(c){
  const [when, where, who, mood] = String(c||"").split("~");
  const ok = (k,v) => STEPS.find(s => s.key === k).opts.some(o => o[0] === v);
  if(!ok("when",when) || !ok("where",where) || !ok("who",who)) return null;
  const m = (mood||"").split(".").filter(v => ok("mood",v)).slice(0,2);
  return m.length ? {when, where, who, mood:m} : null;
}
function shareLink(){ return `${PAGE_URL}?now=${encodeURIComponent(planCode())}#right-now`; }

function build(scroll){
  fikwTrack(fikwFirstBuild && !scroll ? "plan_reopened" : "quiz_complete", {when: state.when || "", where: state.where || "", party: state.who || "", mood: state.mood.join("+")}); fikwFirstBuild = false;
  const now = keysNow();
  const day = state.when === "tomorrow" ? addDays(now.date, 1) : now.date;
  const slots = slotsFor(state.when, now);
  const ss = sunsetMins(day), full = isFullMoon(day);
  const label = state.when === "tomorrow" ? `${DOW[day.getDay()]}` : slots[0] === "night" ? `${DOW[day.getDay()]} night` : `${DOW[day.getDay()]} ${state.when === "tonight" ? "night" : slots[0] === "morning" ? "morning" : slots[0] === "afternoon" ? "afternoon" : "evening"}`;
  const late = state.when !== "tomorrow" && now.mins >= ss + 240;
  const usedE = new Set(), usedP = new Set();
  const plan = slots.map(slot => {
    const ex = pickExp(slot, day, usedE, state.when === "tomorrow" || slots.length <= 2 ? 1 : 1);
    return {slot, ex: ex[0], eat: pickEat(slot, usedP)};
  });
  const more = pickExp(slots.includes("night") ? "night" : slots.at(-1), day, usedE, 1).concat(pickExp(slots[0] === "morning" ? "afternoon" : slots[0], day, usedE, 1));
  const happening = onThisDay(day);
  const rainy = state.mood.includes("rain") ? [] : EXP.filter(x => has(x, INDOOR) && !usedE.has(x.id) && (NEAR[state.where]||[]).includes(x.a) && bookUrl(x) && !(state.who === "family" && has(x,["adults"]))).slice(0,2);
  const slotTime = s => s === "sunset" ? `Sunset ${clock(ss)}` : s === "morning" ? "Before noon" : s === "afternoon" ? `Until about ${clock(ss - 90)}` : `After ${clock(ss + 30)}`;

  const exCard = x => `<div class="rn-pick"><h4>${esc(x.n)}</h4>${x.b ? `<p>${esc(x.b)}</p>` : ""}
      <a class="rn-btn sm" href="${esc(bookUrl(x))}" target="_blank" rel="noopener sponsored">${state.when === "tomorrow" ? "See tomorrow's times" : "Check today's times"} →</a>
      ${x.post ? ` <a class="rn-link" style="margin-left:10px;font-size:14px" href="${esc(postUrl(x.post))}" target="_blank" rel="noopener">My review</a>` : ""}</div>`;
  const eatLine = (p, slot) => p ? `<div class="rn-eat"><b>${slot === "morning" ? "Fuel up" : slot === "night" ? "Dinner or drinks" : slot === "sunset" ? "Sunset drinks" : "Then"}:</b> ${esc(p.n)}${p.where ? ` · ${esc(p.where)}` : ""}${p.b ? `<div class="rn-meta">${esc(p.b)}</div>` : ""}</div>` : "";

  $("#rn-quiz").hidden = true;
  const r = $("#rn-results"); r.hidden = false;
  r.innerHTML = `
    <span class="rn-chip">${state.when === "tomorrow" ? "Tomorrow" : "Today"} · ${esc(MON[day.getMonth()])} ${day.getDate()}</span>
    <h2>Your <mark>${esc(label)}</mark> in ${esc(AREA[state.where])}</h2>
    <div class="rn-facts"><span class="rn-fact sun">Sunset ${clock(ss)}</span>${full ? `<span class="rn-fact moon">Full moon tonight</span>` : ""}</div>
    ${late ? `<p class="rn-lede" style="margin-top:12px">It's getting late in the Keys, so here's tonight's last call, plus a plan for tomorrow if you'd rather start fresh. <button type="button" class="rn-link" data-tomorrow>Plan tomorrow instead</button></p>` : ""}

    <section class="rn-sec"><h3>${state.when === "tomorrow" ? "Your day, start to finish" : "Your plan"}</h3><div class="rn-list">${plan.map(({slot, ex, eat}) => (ex || eat) ? `
      <div class="rn-slot s-${slot}"><header>${SLOT_NAME[slot]}<span>${esc(slotTime(slot))}</span></header><div class="rn-body">
        ${ex ? exCard(ex) : ""}${eatLine(eat, slot)}</div></div>` : "").join("")}</div>
      <p class="rn-tip">Same-day spots go fast in season, so check times before you head out.</p></section>

    ${happening.length ? `<section class="rn-sec"><h3>${state.when === "tomorrow" ? "Also on tomorrow" : "Also on today"}</h3><div class="rn-list">${happening.map(h => `
      <div class="rn-item"><span class="rn-when">${esc(h.when)}</span><h4>${esc(h.n)}</h4>${h.where ? `<div class="rn-meta">${esc(h.where)}</div>` : ""}${h.b ? `<p>${esc(h.b)}</p>` : ""}
      ${h.url ? `<p style="margin-top:8px"><a class="rn-link" href="${esc(h.url)}" target="_blank" rel="noopener">${h.tix ? "Get tickets" : "Details"} →</a></p>` : ""}</div>`).join("")}</div></section>` : ""}

    ${more.length ? `<section class="rn-sec"><h3>Or try</h3><div class="rn-list">${more.map(x => `<div class="rn-item">${exCard(x)}</div>`).join("")}</div></section>` : ""}

    ${rainy.length ? `<section class="rn-sec"><h3>If it rains</h3><div class="rn-list">${rainy.map(x => `<div class="rn-item">${exCard(x)}</div>`).join("")}</div></section>` : ""}

    <div class="rn-next">
      <h3>Here a few more days?</h3>
      <p>Get the festivals, shows and my picks for the rest of your trip, on your dates.</p>
      <p><a class="rn-btn" href="#whats-happening" data-next data-area="${esc(state.where)}" data-who="${esc(state.who === "lgbtq" ? "lgbtq" : state.who === "solo" ? "solo" : state.who)}">Plan the rest of my trip →</a></p>
    </div>
    <div class="rn-nav" style="margin-top:16px">
      <button type="button" class="rn-btn alt sm" data-share>Share this plan</button>
      <button type="button" class="rn-btn alt sm" data-again>↺ Start over</button>
    </div>
    <p class="rn-err" data-shared aria-live="polite"></p>
    <p class="rn-fine">Some links are affiliate links: if you book through them, I may earn a small commission at no extra cost to you. Thank you for supporting Fun in Key West! Want my picks every week? <a href="${esc(INSIDER_CLUB_URL)}" target="_blank" rel="noopener">Join the Insider Club</a>.</p>`;

  r.querySelector("[data-again]").addEventListener("click", () => {
    Object.assign(state, {step:0, when:null, where:null, who:null, mood:[]});
    r.hidden = true; $("#rn-quiz").hidden = false; renderStep();
    try { history.replaceState(null, "", location.pathname + "#right-now"); } catch(e){}
    root.scrollIntoView({behavior:"smooth", block:"start"});
  });
  const tm = r.querySelector("[data-tomorrow]"); if(tm) tm.addEventListener("click", () => { state.when = "tomorrow"; build(true); });
  r.querySelector("[data-share]").addEventListener("click", async () => { fikwTrack("share_plan");
    const url = shareLink(), out = r.querySelector("[data-shared]");
    try {
      if(navigator.share){ await navigator.share({title:"Our Keys plan", text:"Here's what we're doing in the Keys:", url}); return; }
      await navigator.clipboard.writeText(url); out.style.color = "inherit"; out.textContent = "Link copied. Paste it in your group chat!";
    } catch(e){ out.style.color = "inherit"; out.textContent = url; }
  });
  const nx = r.querySelector("[data-next]");
  nx.addEventListener("click", e => {
    const d = {who:nx.dataset.who, area:nx.dataset.area};
    if(document.getElementById("fikw-wh-mount")){ e.preventDefault(); window.dispatchEvent(new CustomEvent("fikw:prefill", {detail:d})); }
    else { nx.href = `${PAGE_URL}?who=${encodeURIComponent(d.who)}&area=${encodeURIComponent(d.area)}#whats-happening`; }
  });
  try { const u = new URL(location.href); u.searchParams.set("now", planCode()); u.hash = "right-now"; history.replaceState(null, "", u.toString()); } catch(e){}
  if(scroll) root.scrollIntoView({behavior:"smooth", block:"start"});
}

/* a shared plan link reopens the results */
let restored = null;
try { restored = readCode(new URLSearchParams(location.search).get("now")); } catch(e){}
if(restored){ Object.assign(state, restored, {step:3}); build(false); } else renderStep();
})();

