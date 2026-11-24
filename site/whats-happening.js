/* Generated for funinkeywest.com. Injects styles and markup, then runs the quiz. */
(function(){
var m=document.getElementById("fikw-wh-mount"); if(!m) return;
if(!document.getElementById("fikw-wh-mount-css")){var st=document.createElement("style");st.id="fikw-wh-mount-css";st.textContent="\n\n#fikw-wh{color-scheme:light;\n  --bg:#fffbef; --surface:#fff; --ink:#141414; --muted:#4f4e4b; --line:#141414; --soft:#e9e4d6;\n  --pink:#ff4fa3; --coral:#ff7a45; --yellow:#ffe14d; --lime:#b8fe6a; --cyan:#2ee6e6;\n  --display:\"Poppins\",\"Arial Black\",system-ui,sans-serif; --body:\"Inter\",system-ui,-apple-system,\"Segoe UI\",sans-serif}\n#fikw-wh, #fikw-wh *{box-sizing:border-box;min-width:0}\n#fikw-wh [hidden]{display:none!important}\n#fikw-wh{background:var(--bg)}\n#fikw-wh{margin:0;background:var(--bg);color:var(--ink);font:16px/1.55 var(--body);overflow-x:clip;\n  padding:0 max(16px,env(safe-area-inset-left,0px)) 56px max(16px,env(safe-area-inset-right,0px))}\n#fikw-wh .stripe{height:10px;margin:0;background:linear-gradient(90deg,var(--pink) 0 20%,var(--coral) 20% 40%,var(--yellow) 40% 60%,var(--lime) 60% 80%,var(--cyan) 80%)}\n#fikw-wh a{color:inherit;text-decoration-color:var(--pink);text-decoration-thickness:2px;text-underline-offset:2px}\n#fikw-wh .wrap{max-width:860px;margin:0 auto;display:flex;flex-direction:column;gap:20px}\n#fikw-wh .top{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:16px;align-items:start;padding-top:28px}\n#fikw-wh .logo{width:clamp(96px,16vw,150px);height:auto;display:block}\n#fikw-wh .chip{display:inline-block;align-self:flex-start;font:700 12px/1 var(--body);letter-spacing:.06em;text-transform:uppercase;border:2px solid var(--ink);border-radius:999px;padding:6px 11px;background:var(--lime)}\n#fikw-wh .c0{background:var(--lime)}#fikw-wh .c1{background:var(--coral)}#fikw-wh .c2{background:var(--cyan)}#fikw-wh .c3{background:var(--pink)}#fikw-wh .c4{background:var(--yellow)}\n#fikw-wh h1{font-family:var(--display);font-weight:800;font-size:clamp(34px,6.4vw,58px);line-height:1.02;margin:10px 0 8px;letter-spacing:-.02em;text-wrap:balance}\n#fikw-wh h1 mark,#fikw-wh h2 mark{background:var(--yellow);color:inherit;padding:0 .14em;border-radius:6px;box-decoration-break:clone;-webkit-box-decoration-break:clone}\n#fikw-wh h2{font-family:var(--display);font-weight:800;font-size:clamp(24px,4vw,32px);line-height:1.12;margin:4px 0 4px;letter-spacing:-.01em;text-wrap:balance}\n#fikw-wh h3{font-family:var(--display);font-size:17px;font-weight:700;line-height:1.25;margin:0}\n#fikw-wh .lede{color:var(--muted);margin:0;max-width:64ch}\n#fikw-wh .sig{font-weight:700;font-size:14px;margin:8px 0 0}\n#fikw-wh .card{background:var(--surface);border:2px solid var(--ink);border-radius:16px;padding:26px clamp(18px,4vw,32px);box-shadow:5px 5px 0 var(--ink)}\n#fikw-wh .progress{display:flex;gap:5px;margin-bottom:18px}#fikw-wh .progress span{flex:1;height:8px;border-radius:4px;background:var(--soft);border:1.5px solid var(--ink)}\n#fikw-wh .progress span.on:nth-child(5n+1){background:var(--pink)}#fikw-wh .progress span.on:nth-child(5n+2){background:var(--coral)}#fikw-wh .progress span.on:nth-child(5n+3){background:var(--yellow)}#fikw-wh .progress span.on:nth-child(5n+4){background:var(--lime)}#fikw-wh .progress span.on:nth-child(5n){background:var(--cyan)}\n#fikw-wh .stepnum{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:700;margin:0 0 4px}\n#fikw-wh .hint{color:var(--muted);margin:0 0 16px;font-size:15px}\n#fikw-wh .options{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\n#fikw-wh .opt{font:inherit;color:var(--ink);text-align:left;cursor:pointer;background:var(--bg);border:2px solid var(--ink);border-radius:12px;padding:13px 15px;min-height:44px;display:flex;flex-direction:column;gap:2px}\n#fikw-wh .opt b{font-family:var(--display);font-weight:700}#fikw-wh .opt small{color:var(--muted);font-size:13.5px;line-height:1.35}\n#fikw-wh .opt:hover{background:#fff}\n#fikw-wh .opt[aria-pressed=\"true\"]{background:var(--yellow);box-shadow:3px 3px 0 var(--ink)}#fikw-wh .opt[aria-pressed=\"true\"] small{color:var(--ink)}\n#fikw-wh .opt:focus-visible,#fikw-wh .btn:focus-visible,#fikw-wh input:focus-visible,#fikw-wh select:focus-visible,#fikw-wh a:focus-visible{outline:3px solid var(--pink);outline-offset:2px}\n#fikw-wh .dates{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}\n#fikw-wh label.f{display:flex;flex-direction:column;gap:6px;font-weight:700;font-size:14px}\n#fikw-wh input,#fikw-wh select{font:inherit;font-size:16px;padding:11px 12px;border-radius:10px;border:2px solid var(--ink);background:#fff;color:var(--ink);min-height:46px}\n#fikw-wh .linkish{background:none;border:0;padding:0;color:var(--ink);font:inherit;font-weight:700;cursor:pointer;text-decoration:underline;text-decoration-color:var(--pink);text-decoration-thickness:2px;margin-top:14px}\n#fikw-wh .err{color:#b3123f;font-weight:700;font-size:14px;margin:10px 0 0;min-height:1em}\n#fikw-wh .nav{display:flex;justify-content:space-between;gap:12px;margin-top:22px}\n#fikw-wh .btn{font:700 15px/1.1 var(--body);border:2px solid var(--ink);border-radius:999px;padding:12px 20px;min-height:46px;cursor:pointer;background:var(--coral);color:var(--ink);text-decoration:none;display:inline-flex;align-items:center;gap:8px;justify-content:center;box-shadow:3px 3px 0 var(--ink);white-space:nowrap}\n#fikw-wh .btn:active{transform:translate(2px,2px);box-shadow:1px 1px 0 var(--ink)}\n#fikw-wh .btn.ghost{background:#fff}#fikw-wh .btn.teal{background:var(--cyan)}#fikw-wh .btn.pinkb{background:var(--pink)}\n#fikw-wh .btn:disabled{opacity:.45;cursor:not-allowed}#fikw-wh .btn.sm{padding:8px 14px;min-height:38px;font-size:14px}\n#fikw-wh .sec{display:flex;flex-direction:column;gap:12px}\n#fikw-wh .glance{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}\n#fikw-wh .stat{border:2px solid var(--ink);border-radius:12px;padding:12px 14px}\n#fikw-wh .stat:nth-child(1){background:var(--cyan)}#fikw-wh .stat:nth-child(2){background:var(--pink)}#fikw-wh .stat:nth-child(3){background:var(--yellow)}#fikw-wh .stat:nth-child(4){background:var(--coral)}\n#fikw-wh .stat b{display:block;font-family:var(--display);font-size:clamp(24px,4vw,34px);font-weight:800;line-height:1.05}\n#fikw-wh .stat span{font-size:13.5px;font-weight:600}\n#fikw-wh .tags{display:flex;flex-wrap:wrap;gap:6px}#fikw-wh .tag{font-size:13px;background:#fff;border:1.5px solid var(--ink);border-radius:999px;padding:3px 10px;font-weight:600}\n#fikw-wh .list{display:flex;flex-direction:column;gap:10px}\n#fikw-wh .item{background:var(--surface);border:2px solid var(--ink);border-radius:12px;padding:14px 18px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:6px 16px;align-items:start}\n#fikw-wh .item.hero-pick{background:var(--yellow);box-shadow:5px 5px 0 var(--ink)}\n#fikw-wh .item p{margin:3px 0 0;color:var(--muted);font-size:15px}#fikw-wh .item.hero-pick p{color:var(--ink)}\n#fikw-wh .item .meta{font-size:13.5px;color:var(--muted);margin-top:2px;font-weight:500}#fikw-wh .item.hero-pick .meta{color:var(--ink)}\n#fikw-wh .item .side{display:flex;flex-direction:column;gap:6px;align-items:flex-end}\n#fikw-wh .badge{display:inline-block;font:700 11px/1 var(--body);letter-spacing:.04em;text-transform:uppercase;border:1.5px solid var(--ink);border-radius:999px;padding:4px 8px;background:var(--pink);margin-bottom:5px}\n#fikw-wh .badge.t{background:var(--cyan)}#fikw-wh .badge.s{background:var(--yellow)}\n#fikw-wh .num{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;border:2px solid var(--ink);font:800 13px/1 var(--display);margin-right:8px;vertical-align:2px}\n#fikw-wh .list .item:nth-child(5n+1) .num{background:var(--pink)}#fikw-wh .list .item:nth-child(5n+2) .num{background:var(--yellow)}#fikw-wh .list .item:nth-child(5n+3) .num{background:var(--cyan)}#fikw-wh .list .item:nth-child(5n+4) .num{background:var(--lime)}#fikw-wh .list .item:nth-child(5n) .num{background:var(--coral)}\n#fikw-wh .when{display:grid;grid-template-columns:150px minmax(0,1fr);gap:6px 16px;padding:14px 16px;border:2px solid var(--ink);border-radius:12px;background:#fff;align-items:start}\n#fikw-wh .when .d{font:800 14px/1.2 var(--display);border:2px solid var(--ink);border-radius:8px;padding:6px 9px;justify-self:start;max-width:100%;overflow-wrap:anywhere}\n#fikw-wh .whens{display:flex;flex-direction:column;gap:10px}\n#fikw-wh .evact{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:10px}\n#fikw-wh .whens .when:nth-child(5n+1) .d{background:var(--yellow)}#fikw-wh .whens .when:nth-child(5n+2) .d{background:var(--lime)}#fikw-wh .whens .when:nth-child(5n+3) .d{background:var(--pink)}#fikw-wh .whens .when:nth-child(5n+4) .d{background:var(--cyan)}#fikw-wh .whens .when:nth-child(5n) .d{background:var(--coral)}\n#fikw-wh .when p{margin:3px 0 0;color:var(--muted);font-size:15px}\n#fikw-wh .calhead{display:flex;align-items:end;justify-content:space-between;gap:12px;flex-wrap:wrap}\n#fikw-wh .cal{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:5px}\n#fikw-wh .cal .h{font:800 12px/1 var(--display);background:var(--ink);color:#fff;text-align:center;padding:7px 0;border-radius:6px;text-transform:uppercase}\n#fikw-wh .cal .c{background:#fff;border:2px solid var(--ink);border-radius:8px;min-height:104px;padding:5px;font-size:11px;line-height:1.2;display:flex;flex-direction:column;gap:3px}\n#fikw-wh .cal .c.off{background:transparent;border:2px dashed var(--soft)}\n#fikw-wh .cal .c .n{font:800 14px/1.1 var(--display)}\n#fikw-wh .cal .c i{font-style:normal;border-radius:4px;padding:2px 4px;font-weight:600;background:var(--yellow)}\n#fikw-wh .cal i.k-move{background:var(--ink);color:#fff}#fikw-wh .route{display:grid;gap:12px}#fikw-wh .stop{border:2px solid var(--ink);border-radius:14px;background:#fff;padding:14px 16px}#fikw-wh .stop h3{margin:2px 0 2px}#fikw-wh .stop .meta{margin-bottom:6px}#fikw-wh .stop ul{margin:6px 0 0;padding-left:18px}#fikw-wh .stop li{margin:3px 0}#fikw-wh .stop li b{font-weight:700}#fikw-wh .legs{display:grid;gap:8px;margin-top:14px}#fikw-wh .leg{display:flex;align-items:center;gap:10px;flex-wrap:wrap;border:2px solid var(--ink);border-radius:12px;padding:10px 12px;background:#fff}#fikw-wh .leg b{flex:1 1 160px}#fikw-wh .leg select{font:inherit;border:2px solid var(--ink);border-radius:8px;padding:6px 8px;background:var(--bg)}#fikw-wh .leg button{font:inherit;cursor:pointer;border:2px solid var(--ink);border-radius:8px;background:var(--bg);padding:5px 10px;min-height:36px}#fikw-wh .legsum{font-weight:600;margin:8px 0 0}\n#fikw-wh .cal i.k-show{background:var(--cyan)}#fikw-wh .cal i.k-fest{background:var(--pink)}#fikw-wh .cal i.k-spec{background:var(--lime)}#fikw-wh .cal i.k-week{background:var(--yellow)}\n#fikw-wh .cal .c i.sun{background:transparent;padding:0 2px;color:var(--muted);margin-top:auto}\n#fikw-wh .legend{display:flex;flex-wrap:wrap;gap:6px;font-size:12px}#fikw-wh .legend i{font-style:normal;border:1.5px solid var(--ink);border-radius:5px;padding:2px 6px;font-weight:600}\n#fikw-wh .day{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}\n#fikw-wh .slot{background:#fff;border:2px solid var(--ink);border-left-width:9px;border-radius:10px;padding:12px 14px}\n#fikw-wh .day .slot:nth-child(1){border-left-color:var(--coral)}#fikw-wh .day .slot:nth-child(2){border-left-color:var(--yellow)}#fikw-wh .day .slot:nth-child(3){border-left-color:var(--lime)}#fikw-wh .day .slot:nth-child(4){border-left-color:var(--pink)}#fikw-wh .day .slot:nth-child(5){border-left-color:var(--cyan)}#fikw-wh .day .slot:nth-child(6){border-left-color:var(--coral)}\n#fikw-wh .slot small{display:block;font:800 12px/1.2 var(--body);letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px}\n#fikw-wh .upsell{background:var(--pink);border:2px solid var(--ink);border-radius:16px;box-shadow:6px 6px 0 var(--ink);padding:26px clamp(18px,4vw,32px);display:flex;flex-direction:column;gap:12px}\n#fikw-wh .upsell .btn{background:var(--yellow);align-self:flex-start}\n#fikw-wh .upsell ul{margin:0;padding-left:20px}\n#fikw-wh .two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}\n#fikw-wh .club{background:#fff;border:2px solid var(--ink);border-radius:14px;padding:20px}\n#fikw-wh .club.y{background:var(--cyan)}\n#fikw-wh .sponsor{background:#fff;border:2px dashed var(--ink);border-radius:12px;padding:14px 18px}\n#fikw-wh .sponsor small{font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}\n#fikw-wh .signup{display:flex;gap:8px;flex-wrap:wrap}#fikw-wh .signup input{flex:1 1 220px}\n#fikw-wh .actions{display:flex;flex-wrap:wrap;gap:10px}\n#fikw-wh .note{font-size:14.5px;color:var(--muted)}#fikw-wh .fine{font-size:13px;color:var(--muted)}\n#fikw-wh .ok{font-weight:700}\n#fikw-wh .foot{display:flex;justify-content:space-between;gap:12px;font-size:12.5px;border-top:2px solid var(--ink);padding-top:10px}\n@media(max-width:640px){#fikw-wh .options,#fikw-wh .dates,#fikw-wh .two,#fikw-wh .day{grid-template-columns:minmax(0,1fr)}#fikw-wh .glance{grid-template-columns:repeat(2,minmax(0,1fr))}\n  #fikw-wh .item{grid-template-columns:minmax(0,1fr)}#fikw-wh .item .side{align-items:flex-start;flex-direction:row;flex-wrap:wrap}\n  #fikw-wh .when{grid-template-columns:minmax(0,1fr)}#fikw-wh .cal{gap:3px}#fikw-wh .cal .c{min-height:74px;font-size:10px;padding:3px;border-width:1.5px}#fikw-wh .cal .c i:nth-of-type(n+3){display:none}#fikw-wh .cal .h{font-size:10px}}\n@page{size:letter;margin:.45in .45in .6in}\n@media print{body *{visibility:hidden!important}#fikw-wh,#fikw-wh *{visibility:visible!important}#fikw-wh{position:absolute;left:0;top:0;width:100%}\n  #fikw-wh{padding:0;font-size:12.5px}#fikw-wh .wrap{max-width:none;gap:14px}\n  #fikw-wh .card,#fikw-wh .nav,#fikw-wh .actions,#fikw-wh .upsell,#fikw-wh .two,#fikw-wh .signup,#fikw-wh .noprint,#fikw-wh .btn,#fikw-wh .item .side a.note{display:none!important}\n  #fikw-wh .item .side{display:none}#fikw-wh .item{grid-template-columns:1fr;box-shadow:none}#fikw-wh .item.hero-pick{box-shadow:none}\n  #fikw-wh .stripe{margin:0}#fikw-wh .top{padding-top:10px}\n  #fikw-wh .item,#fikw-wh .when,#fikw-wh .slot,#fikw-wh .stat,#fikw-wh .cal .c,#fikw-wh .sponsor{break-inside:avoid}#fikw-wh .sec h2{break-after:avoid}\n  #fikw-wh .sec.cal-page{break-before:page}\n  #fikw-wh .cal .c{min-height:88px}\n  #fikw-wh a{text-decoration:none}\n  #fikw-wh, #fikw-wh *{-webkit-print-color-adjust:exact;print-color-adjust:exact}}\n@media (prefers-reduced-motion:no-preference){#fikw-wh .opt,#fikw-wh .btn{transition:transform .08s,box-shadow .08s,background .15s}}\n#fikw-wh{padding:0 0 32px;max-width:1000px;margin:0 auto;border-radius:18px}#fikw-wh a.btn,#fikw-wh a.btn:visited{color:var(--ink)}#fikw-wh button{text-transform:none;letter-spacing:normal}#fikw-wh h1,#fikw-wh h2,#fikw-wh h3{color:var(--ink);text-transform:none;letter-spacing:-.01em;border:0;background:none}#fikw-wh p,#fikw-wh li{color:inherit}#fikw-wh .card{display:block!important;visibility:visible!important}#fikw-wh .nav{display:flex!important}#fikw-wh #wh-results[hidden],#fikw-wh #wh-quiz[hidden],#fikw-wh #wh-intro[hidden]{display:none!important}";document.head.appendChild(st);}
if(!document.querySelector('link[href*="family=Poppins"]')){var l=document.createElement("link");l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Inter:wght@400;500;600;700;800&display=swap";document.head.appendChild(l);}
m.innerHTML="<div id=\"fikw-wh\">\n\n<div class=\"wrap\">\n  <div class=\"stripe\" aria-hidden=\"true\"></div>\n  <header class=\"top\" id=\"wh-intro\">\n    <div>\n      <span class=\"chip c0\">Your insider trip planner</span>\n      <h1>What's happening while I'm <mark>there?</mark></h1>\n      <p class=\"lede\">Tell me your dates and what you love. In about two minutes you'll have your own Florida Keys guide, from Key Largo to Key West: what's on while you're in town, the sunset cruise that fits you, food and drinks, things you'd never think to look for, and a fridge calendar for your trip.</p>\n      <p class=\"sig\">\u2014 Michele, Fun in Key West \u00b7 Chief Rooster Wrangler &amp; Island Story Collector</p>\n    </div>\n    <img class=\"logo\" alt=\"Fun in Key West\" src=\"https://funinkeywest.github.io/fikw-quiz-data/brand/fikw-logo-badge.png\" width=\"150\" height=\"110\">\n  </header>\n\n  <section class=\"card\" id=\"wh-quiz\" aria-live=\"polite\">\n    <div class=\"progress\" aria-hidden=\"true\"></div>\n    <div id=\"wh-step\"></div>\n    <p class=\"err\" id=\"wh-err\" role=\"alert\"></p>\n    <div class=\"nav\">\n      <button class=\"btn ghost\" id=\"wh-back\" type=\"button\">Back</button>\n      <button class=\"btn\" id=\"wh-next\" type=\"button\">Next</button>\n    </div>\n  </section>\n\n  <section id=\"wh-results\" class=\"wrap\" hidden style=\"gap:28px\"></section>\n</div>\n\n</div>";
})();

{
/* ---------------- Your details: edit these lines ---------------- */
const SITE_URL   = "https://funinkeywest.com";
const STAY_URL   = "#stay-finder";   /* Stay Finder page, for people who haven't booked yet */
const SIGNUP_URL = "https://funinkeywest.kit.com/cb52d6c3b6";   /* Kit landing page (Trip Countdown) used until the new one is ready */
const KIT_FORM_ID = "10237799";   /* Kit form: "What's Happening While I'm There? - Keys Trip Guide" landing page */
const GUIDE_PAGE  = "https://funinkeywest.com/find-your-key-west/";   /* where a saved guide link reopens */
const GUIDE_OFFER = {price:"$49", url:"https://funinkeywest.kit.com/products/custom-key-west-trip-guide", email:"funinkeywest.com@gmail.com"}; /* url = checkout or intake form for the Custom Guide */
const INSIDER_CLUB_URL = "https://funinkeywest.kit.com/products/fun-in-key-west-insider-club"; /* Insider Club sales page */
/* Sponsor placements. slot: "top" | "sunset" | "water" | "food" | "night". months: [] = all year. Leave the array empty for none. */
const SPONSORS = [
  /* {slot:"sunset", name:"Business name", blurb:"One line in Michele's voice.", url:"https://...", months:[12,1,2,3]} */
];
/* ---------------------------------------------------------------- */

const ON_SITE = !/claude|anthropic|usercontent/i.test(location.hostname);
const ROOT = document.getElementById("fikw-wh");
const $ = s => ROOT.querySelector(s);
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fhLink = (s,id) => `https://fareharbor.com/embeds/book/${s}/items/${id}/?asn=fhdn&asn-ref=funinkw&ref=funinkw&bookable-only=yes&full-items=yes&marketplace=yes&flow=no&branding=no`;
const bookUrl = x => x.link || fhLink(x.fh[0], x.fh[1]);
const postUrl = slug => `${SITE_URL}/${slug}/`;
const PLACE = {kw:"Key West", lower:"the Lower Keys", middle:"Marathon", upper:"Key Largo & Islamorada", road:"the Florida Keys"};
const LOGO = ROOT.querySelector(".logo")?.src || "";
const AREA = {kw:"Key West", lower:"Lower Keys", middle:"Marathon & Middle Keys", upper:"Key Largo & Islamorada", road:"The whole chain"};
const DOW = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MON = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

/* ---------- dates ---------- */
const D = s => { const [y,m,d] = s.split("-").map(Number); return new Date(y, m-1, d); };
const iso = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const addDays = (d,n) => { const x = new Date(d); x.setDate(x.getDate()+n); return x; };
const fmt = d => `${DOW[d.getDay()]}, ${MON[d.getMonth()]} ${d.getDate()}`;
const fmtShort = d => `${MON[d.getMonth()]} ${d.getDate()}`;
const daysBetween = (a,b) => Math.round((b - a) / 864e5);

/* Sunset for Key West (sunrise equation), shown in Eastern time */
function sunset(d){
  const lat = 24.555*Math.PI/180, lw = -81.78, rad = Math.PI/180;
  const jd = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 12) / 864e5 + 2440587.5;
  const n = Math.ceil(jd - 2451545 + 0.0008), J = n - lw/360;
  const M = (357.5291 + 0.98560028*J) % 360, Mr = M*rad;
  const C = 1.9148*Math.sin(Mr) + 0.02*Math.sin(2*Mr) + 0.0003*Math.sin(3*Mr);
  const L = ((M + C + 282.9372) % 360) * rad;
  const Jt = 2451545 + J + 0.0053*Math.sin(Mr) - 0.0069*Math.sin(2*L);
  const dec = Math.asin(Math.sin(L)*Math.sin(23.4397*rad));
  const w = Math.acos((Math.sin(-0.833*rad) - Math.sin(lat)*Math.sin(dec)) / (Math.cos(lat)*Math.cos(dec)));
  const ms = (Jt + w/(2*Math.PI) - 2440587.5) * 864e5;
  return new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit",timeZone:"America/New_York"}).format(new Date(ms)).replace(" PM"," pm").replace(" AM"," am");
}
/* Full moons (about ±1 day) */
function fullMoons(a,b){
  const syn = 29.530588853, ref = Date.UTC(2000,0,6,18,14) + 14.765*864e5, out = [];
  let k = Math.floor((a.getTime() - ref) / (syn*864e5)) - 1;
  for(;;k++){ const t = new Date(ref + k*syn*864e5); if(t > addDays(b,1)) break; if(t >= a) out.push(new Date(t.getFullYear(), t.getMonth(), t.getDate())); }
  return out;
}

/* ---------- quiz ---------- */
const STEPS = [
  {key:"dates", type:"dates", q:"When are you coming to the Keys?", hint:"Your dates decide what's on. Not booked yet? Pick a month instead."},
  {key:"area", type:"stops", q:"Where are you staying?", hint:"Splitting your trip? Pick each place in the order you'll stay, then set the nights.", opts:[
    ["kw","Key West","Old Town, Duval and the end of the road"],["lower","Lower Keys","Stock Island, Sugarloaf, Big Pine"],
    ["middle","Marathon & Middle Keys","Seven Mile Bridge country"],["upper","Key Largo & Islamorada","The Upper Keys"],
    ["road","Road-tripping the whole chain","A little of everything"]]},
  {key:"party", q:"Who's coming?", hint:"Pick the one that fits best.", opts:[
    ["couple","Couple","Romance and slow sunsets"],["family","Family with kids","Easy, safe, wildly fun"],["friends","Friends trip","Girls' or guys' getaway"],
    ["celebrate","Celebration","Bachelorette, birthday, reunion"],["solo","Just me","Easy to join in, easy to explore"],["lgbtq","LGBTQ+ getaway","Gay-owned spots and LGBTQ+ favorites"]]},
  {key:"first", q:"Have you been before?", opts:[
    ["first","First time","Show me the must-dos"],["some","Once or twice","Mix the classics with something new"],
    ["lots","I've lost count","Hidden gems only, please"]]},
  {key:"sunset", q:"How do you want to see the sunset?", hint:"Sunset is a nightly event here. Let's make one of them unforgettable.", opts:[
    ["romantic","Under sail, romantic","Schooners, wine, quiet"],["party","Party boat","Music, drinks, a happy crowd"],
    ["private","Just our group","A private boat or tiki bar"],["land","With my feet on land","Rooftops, a lighthouse, Mallory Square"],
    ["surprise","Surprise me","Pick the best one for my dates"]]},
  {key:"water", multi:true, q:"What sounds good on the water?", hint:"Choose as many as you like.", opts:[
    ["snorkel","Snorkeling the reef","The only living coral reef in the continental U.S."],["sandbar","Sandbar day","Wade in turquoise water"],
    ["dolphins","Dolphins","Wild dolphins in the backcountry"],["kayak","Kayak & paddle","Mangroves, clear kayaks, night paddles"],
    ["thrill","Jet ski & parasail","Speed and altitude"],["tortugas","Dry Tortugas","A fort 70 miles out to sea"],
    ["fishing","Fishing","Catch your dinner"],["dive","Scuba","For certified divers"],["dry","Staying dry","Glass-bottom boats and views"]]},
  {key:"food", multi:true, q:"Food and drinks?", hint:"Choose as many as you like.", opts:[
    ["foodtour","Food tours","Taste a lot, learn a lot"],["cookingshow","Dinner and a show","Island cooking with a storyteller"],
    ["special","One special dinner","The night to dress up a little"],["cheap","Local, cheap and real","Where the locals eat"],
    ["happyhour","Happy hours","Oysters and cold drinks at 4 pm"],["cocktails","Rum and cocktails","Distilleries, piña coladas, craft bars"],
    ["pie","Key lime pie","Every slice, ranked"],["coffee","Cuban coffee","Café con leche, every morning"]]},
  {key:"night", multi:true, q:"What about your evenings?", hint:"Choose as many as you like.", opts:[
    ["music","Live music","Dive bars, jazz jams, concerts"],["theater","Theater","It's high season for Key West stages"],
    ["drag","Drag and cabaret","Big wit, bigger wigs"],["ghost","Ghost tours","Robert the Doll is waiting"],
    ["pubcrawl","Pub crawl","Meet people, skip the lines"],["early","Early nights","Sunset, dinner, bed"]]},
  {key:"gems", multi:true, optional:true, q:"Things you might not think of?", hint:"Optional, but this is where the magic is.", opts:[
    ["history","History & museums","Hemingway, Truman, wreckers, forts"],["festivals","Festivals & events","Whatever's on while you're here"],
    ["art","Art & galleries","Studios, art walks, First Friday"],["bike","Biking","The best way to see Old Town"],
    ["air","From the air","Seaplanes and small-plane tours"],["quirky","Wonderfully weird","UFO tours, tiki pedicabs, cursed dolls"],
    ["nature","Nature & wildlife","Birds, butterflies, mangroves"]]},
  {key:"occasion", q:"Celebrating anything?", opts:[
    ["none","Just a vacation","Isn't that enough?"],["birthday","A birthday",""],["anniv","Anniversary or honeymoon",""],
    ["propose","A proposal","I'll keep it a secret"],["bach","Bachelorette or bachelor",""],["reunion","Family or friend reunion",""]]},
  {key:"spend", q:"How should I spend your money?", opts:[
    ["easy","Easy on the wallet","Free and fun first"],["mix","A good mix","A splurge or two"],["splurge","Splurge","Private boats and the best seats"]]}
];

const state = {step:0, mode:"dates", arrive:"", depart:"", month:"", nights:"5", area:null, stops:[], party:null, first:null, sunset:null, water:[], food:[], night:[], gems:[], occasion:null, spend:null};

/* Stops: one or more places, each with nights. state.area is the main stop (most nights). */
const STOP_AREAS = ["kw","lower","middle","upper"];
function syncArea(){
  if(!state.stops.length){ state.area = null; return; }
  state.area = state.stops.length===1 ? state.stops[0].a : state.stops.reduce((m,x) => (x.n||0) > (m.n||0) ? x : m, state.stops[0]).a;
}
function totalNights(){
  if(state.mode==="dates" && state.arrive && state.depart) return Math.max(1, daysBetween(D(state.arrive), D(state.depart)));
  return Number(state.nights) || 5;
}
function spreadNights(){
  const k = state.stops.length; if(!k) return;
  const N = totalNights(); if(k===1){ state.stops[0].n = N; return; }
  const base = Math.max(1, Math.floor(N/k));
  state.stops.forEach((x,i) => x.n = base); state.stops[k-1].n = Math.max(1, N - base*(k-1));
}
const multiStop = () => state.stops.length > 1;
const stopAreas = () => state.stops.map(x => x.a);
const placeName = () => state.stops.length > 2 ? "the Florida Keys" : state.stops.length===2 ? `${PLACE[state.stops[0].a]}, then ${PLACE[state.stops[1].a]}` : PLACE[state.area];
const areaName = () => state.stops.map(x => AREA[x.a]).join(" → ");

/* Answers carried over from the Stay Finder (?who=couple&arrive=YYYY-MM-DD&depart=YYYY-MM-DD) */
let fromStay = false;
try {
  const q = new URLSearchParams(location.search), okD = v => /^\d{4}-\d{2}-\d{2}$/.test(v||"");
  if(okD(q.get("arrive")) && okD(q.get("depart")) && q.get("depart") > q.get("arrive") && q.get("arrive") >= iso(new Date())){ state.arrive = q.get("arrive"); state.depart = q.get("depart"); fromStay = true; }
  if(["couple","family","friends","celebrate","solo","lgbtq"].includes(q.get("who"))){ state.party = q.get("who"); fromStay = true; }
  if(STOP_AREAS.includes(q.get("area"))){ state.stops = [{a:q.get("area"), n:null}]; syncArea(); fromStay = true; }
} catch(e){}

/* A guide link: the answers, packed into the URL, so the guide can be reopened (and emailed) */
function planCode(){
  const j = v => (v || []).join(".");
  return [state.mode==="month"?"m":"d", (state.arrive||"").replace(/-/g,""), (state.depart||"").replace(/-/g,""), (state.month||"").replace(/-/g,""), state.nights,
    multiStop() ? state.stops.map(x => x.a + x.n).join(".") : state.area, state.party, state.first, state.sunset, j(state.water), j(state.food), j(state.night), j(state.gems), state.occasion, state.spend].map(v => v ?? "").join("~");
}
function readPlan(code){
  const p = code.split("~"), dt = v => v && v.length===8 ? `${v.slice(0,4)}-${v.slice(4,6)}-${v.slice(6)}` : "", ls = v => v ? v.split(".") : [];
  if(p.length < 15) return null;
  return {mode:p[0]==="m"?"month":"dates", arrive:dt(p[1]), depart:dt(p[2]), month:p[3]?`${p[3].slice(0,4)}-${p[3].slice(4)}`:"", nights:p[4]||"5",
    stops:(p[5]||"").split(".").map(v => { const m = v.match(/^([a-z]+)(\d*)$/); return m && (STOP_AREAS.includes(m[1]) || m[1]==="road") ? {a:m[1], n:m[2]?Number(m[2]):null} : null; }).filter(Boolean),
    party:p[6]||null, first:p[7]||null, sunset:p[8]||null, water:ls(p[9]), food:ls(p[10]), night:ls(p[11]), gems:ls(p[12]), occasion:p[13]||null, spend:p[14]||null};
}
function planLink(){ return GUIDE_PAGE + "?plan=" + planCode() + "#whats-happening"; }
let restoredPlan = false;
try {
  const code = new URLSearchParams(location.search).get("plan");
  if(code){ const o = readPlan(code); if(o){ Object.assign(state, o); if(state.stops.length===1) state.stops[0].n = totalNights(); if(state.mode==="month" && multiStop()) state.nights = String(state.stops.reduce((t,x)=>t+(x.n||0),0)); syncArea(); restoredPlan = !!(state.area && state.party && (state.mode==="month" ? state.month : (state.arrive && state.depart))); } }
} catch(e){}

function renderStep(){
  const s = STEPS[state.step];
  $(".progress").innerHTML = STEPS.map((_,i)=>`<span class="${i<=state.step?"on":""}"></span>`).join("");
  $("#wh-err").textContent = "";
  let body = "";
  if(s.type === "dates"){
    const today = iso(new Date());
    const months = Array.from({length:14},(_,i)=>{const d=new Date(); d.setDate(1); d.setMonth(d.getMonth()+i); return [iso(d).slice(0,7), `${MONTHS[d.getMonth()]} ${d.getFullYear()}`];});
    body = state.mode === "dates" ? `
      <div class="dates">
        <label class="f">Arriving<input type="date" id="wh-arrive" min="${today}" value="${esc(state.arrive)}"></label>
        <label class="f">Leaving<input type="date" id="wh-depart" min="${today}" value="${esc(state.depart)}"></label>
      </div>
      <button class="linkish" type="button" id="wh-toggleMode">Not booked yet? Pick a month instead</button>
      ${fromStay && state.arrive ? `<p class="note" style="margin:10px 0 0">Welcome back from the Stay Finder! I filled in your dates.</p>` : ""}
      <p class="note" style="margin:10px 0 0">Still need a place to stay? <a href="${STAY_URL}">Find your Key West stay first →</a></p>` : `
      <div class="dates">
        <label class="f">Month<select id="wh-month">${months.map(([v,t])=>`<option value="${v}" ${state.month===v?"selected":""}>${t}</option>`).join("")}</select></label>
        <label class="f">How many nights?<select id="wh-nights">${["3","4","5","7","10","14"].map(n=>`<option ${state.nights===n?"selected":""}>${n}</option>`).join("")}</select></label>
      </div>
      <button class="linkish" type="button" id="wh-toggleMode">I have my dates</button>`;
  } else if(s.type === "stops"){
    const N = totalNights(), sum = state.stops.reduce((t,x)=>t+(x.n||0),0), dm = state.mode==="dates";
    const nOpts = cur => Array.from({length: dm ? N : 21},(_,i)=>i+1).map(n=>`<option ${cur===n?"selected":""}>${n}</option>`).join("");
    body = `<div class="options">${s.opts.map(([v,t,sub])=>{ const i = state.stops.findIndex(x=>x.a===v), on = i>=0;
      return `<button type="button" class="opt" data-v="${v}" aria-pressed="${on}"><b>${on&&multiStop()?`${i+1}. `:""}${t}</b>${sub?`<small>${sub}</small>`:""}</button>`;}).join("")}</div>
      ${multiStop() ? `<div class="legs" aria-label="Your stops">${state.stops.map((x,i)=>`<div class="leg"><b>${i+1}. ${esc(AREA[x.a])}</b>
        <label>Nights <select data-leg="${i}" aria-label="Nights in ${esc(AREA[x.a])}">${nOpts(x.n)}</select></label>
        ${i?`<button type="button" data-up="${i}" aria-label="Move ${esc(AREA[x.a])} earlier">↑ Earlier</button>`:""}</div>`).join("")}</div>
        <p class="legsum">${dm ? (sum===N ? `✓ ${N} nights, all planned.` : `Your stops add up to ${sum} of your ${N} nights.`) : `${sum} nights in all.`}</p>` : ""}`;
  } else {
    const cur = state[s.key];
    body = `<div class="options">${s.opts.map(([v,t,sub])=>{
      const on = s.multi ? cur.includes(v) : cur === v;
      return `<button type="button" class="opt" data-v="${v}" aria-pressed="${on}"><b>${t}</b>${sub?`<small>${sub}</small>`:""}</button>`;}).join("")}</div>`;
  }
  $("#wh-step").innerHTML = `<p class="stepnum">Question ${state.step+1} of ${STEPS.length}</p><h2>${s.q}</h2>${s.hint?`<p class="hint">${s.hint}</p>`:""}${body}`;
  $("#wh-back").style.visibility = state.step ? "visible" : "hidden";
  $("#wh-next").textContent = state.step === STEPS.length-1 ? "Build my guide" : (s.optional && !state[s.key].length ? "Skip" : "Next");
  if(s.type === "dates"){
    $("#wh-toggleMode").addEventListener("click",()=>{ readDates(); state.mode = state.mode==="dates"?"month":"dates"; if(state.mode==="month"&&!state.month) state.month = iso(new Date()).slice(0,7); renderStep(); });
  } else if(s.type === "stops"){
    $("#wh-step").querySelectorAll(".opt").forEach(b=>b.addEventListener("click",()=>{
      const v = b.dataset.v, i = state.stops.findIndex(x=>x.a===v);
      if(v==="road") state.stops = i>=0 ? [] : [{a:"road", n:null}];
      else { state.stops = state.stops.filter(x=>x.a!=="road"); i>=0 ? state.stops.splice(i,1) : state.stops.push({a:v, n:null}); }
      spreadNights(); syncArea(); renderStep();
    }));
    $("#wh-step").querySelectorAll("[data-leg]").forEach(sel=>sel.addEventListener("change",()=>{ state.stops[+sel.dataset.leg].n = Number(sel.value); syncArea(); renderStep(); }));
    $("#wh-step").querySelectorAll("[data-up]").forEach(btn=>btn.addEventListener("click",()=>{ const i = +btn.dataset.up; [state.stops[i-1], state.stops[i]] = [state.stops[i], state.stops[i-1]]; syncArea(); renderStep(); }));
  } else {
    $("#wh-step").querySelectorAll(".opt").forEach(b=>b.addEventListener("click",()=>{
      const v = b.dataset.v;
      if(s.multi){ const a = state[s.key]; const i = a.indexOf(v); i<0 ? a.push(v) : a.splice(i,1); renderStep(); }
      else { state[s.key] = v; renderStep(); setTimeout(()=>go(1), 160); }
    }));
  }
}
function readDates(){
  if(state.mode==="dates"){ state.arrive = $("#wh-arrive")?.value || ""; state.depart = $("#wh-depart")?.value || ""; }
  else { state.month = $("#wh-month")?.value || state.month; state.nights = $("#wh-nights")?.value || state.nights; }
}
function valid(){
  const s = STEPS[state.step];
  if(s.type === "dates"){
    readDates();
    if(state.mode==="month") return state.month ? "" : "Pick a month.";
    if(!state.arrive || !state.depart) return "Add both dates, or pick a month instead.";
    const n = daysBetween(D(state.arrive), D(state.depart));
    if(n < 1) return "Your leaving date needs to be after your arrival.";
    if(n > 45) return "That's a long stay! Pick up to 45 nights, or plan one month at a time.";
    return "";
  }
  if(s.type === "stops"){
    if(!state.stops.length) return "Pick where you're staying.";
    if(state.stops.length===1){ state.stops[0].n = totalNights(); syncArea(); return ""; }
    const sum = state.stops.reduce((t,x)=>t+(x.n||0),0), N = totalNights();
    if(state.mode==="dates" && sum !== N) return `Your stops add up to ${sum} nights, but your dates are ${N} nights. Adjust the nights so they match.`;
    if(state.mode==="month") state.nights = String(sum);
    syncArea(); return "";
  }
  if(s.optional) return "";
  return (s.multi ? state[s.key].length : state[s.key]) ? "" : (s.multi ? "Pick at least one." : "Pick one to continue.");
}
function go(dir){
  if(dir > 0){ const e = valid(); if(e){ $("#wh-err").textContent = e; return; }
    if(STEPS[state.step].type==="dates" && state.stops.length){ const sum = state.stops.reduce((t,x)=>t+(x.n||0),0); if(state.stops.length===1 || (state.mode==="dates" && sum!==totalNights())) spreadNights(); } }
  else readDates();
  state.step += dir;
  if(state.step >= STEPS.length){ state.step = STEPS.length-1; build(); return; }
  renderStep();
}
$("#wh-next").addEventListener("click",()=>go(1));
$("#wh-back").addEventListener("click",()=>{ if(state.step) go(-1); });

/* ---------- matching ---------- */
function tripRange(){
  if(state.mode==="month"){ const a = D(state.month+"-01"); const b = new Date(a.getFullYear(), a.getMonth()+1, 0); return {a, b, byMonth:true}; }
  return {a:D(state.arrive), b:D(state.depart), byMonth:false};
}
const NEAR = {kw:["kw","lower"], lower:["lower","kw"], middle:["middle","lower"], upper:["upper","middle"], road:["kw","lower","middle","upper","road"]};
const nearAreas = ar => state.stops.length ? [...new Set(state.stops.flatMap(x => NEAR[x.a]))] : (NEAR[ar] || NEAR.kw);
const WANT = {
  snorkel:["snorkel"], sandbar:["sandbar"], dolphins:["dolphins"], kayak:["kayak"], thrill:["jetski","thrill"], tortugas:["tortugas"], fishing:["fishing"], dive:["dive"], dry:["dry"],
  foodtour:["foodtour"], cocktails:["cocktails","rum"], pie:["pie","sweets"], special:["special"], cheap:["cheap"], happyhour:["happyhour"], coffee:["coffee"], cookingshow:["cookingshow"],
  music:["music"], theater:["theater"], drag:["drag"], ghost:["ghost"], pubcrawl:["pubcrawl"],
  history:["history","museum"], art:["art"], bike:["bike"], air:["air"], quirky:["quirky"], nature:["nature"], festivals:[]
};
function wantedTags(){ return [...state.water, ...state.food, ...state.night, ...state.gems].flatMap(k => WANT[k] || []); }
let TRIP_MONTHS = [];
function score(x){
  if(x.m && !x.m.some(mm => TRIP_MONTHS.includes(mm))) return -99;
  const near = nearAreas(state.area); if(!near.includes(x.a) && x.a !== "road") return -99;
  const t = x.t || [], want = wantedTags();
  let s = (stopAreas().includes("road") || stopAreas().includes(x.a)) ? 4 : 1;
  want.forEach(w => { if(t.includes(w)) s += 3; });
  if(x.pick) s += 2;
  const p = state.party;
  if(p==="family"){ if(t.some(v=>["adults","pubcrawl","drag"].includes(v))) return -99; if(t.includes("family")) s += 3; }
  if(p==="couple" && t.includes("romantic")) s += 2;
  if((p==="friends"||p==="celebrate") && t.some(v=>["friends","party","celebrate"].includes(v))) s += 2;
  if(p==="lgbtq" && t.some(v=>["lgbtq","drag","romantic"].includes(v))) s += 2;
  if(p==="solo" && t.some(v=>["small","walk","foodtour"].includes(v))) s += 1;
  if(state.first==="first" && t.includes("firsttime")) s += 2;
  if(state.first==="lots"){ if(t.includes("hidden")) s += 3; if(t.includes("firsttime")) s -= 3; }
  if(state.first==="some" && t.includes("hidden")) s += 1;
  if(state.spend==="easy" && t.some(v=>["private","splurge"].includes(v))) s -= 3;
  if(state.spend==="splurge" && t.some(v=>["private","splurge"].includes(v))) s += 2;
  if(["anniv","propose"].includes(state.occasion) && t.includes("romantic")) s += 2;
  if(state.occasion==="bach" && t.some(v=>["celebrate","party","drag"].includes(v))) s += 2;
  if(state.water.includes("dry") && t.includes("dry")) s += 2;
  return s;
}
function pickFrom(list, filter, n, used, focus=[]){
  return list.filter(x => !x.ev && filter(x) && !used.has(x.id || x.n)).map(x => ({x, s:score(x) + 6*(x.t||[]).filter(t=>focus.includes(t)).length})).filter(o => o.s > -50)
    .sort((a,b) => b.s - a.s).slice(0,n).map(o => { used.add(o.x.id || o.x.n); return o.x; });
}

/* one pick per chosen answer first, then fill with the best of the rest */
function pickEach(keys, n, used){
  const out = [];
  keys.forEach(k => { const tags = WANT[k] || []; if(!tags.length || out.length >= n) return; out.push(...pickFrom(EXPERIENCES, x => x.t.some(t => tags.includes(t)), 1, used, tags)); });
  const all = keys.flatMap(k => WANT[k] || []);
  if(out.length < n && all.length) out.push(...pickFrom(EXPERIENCES, x => x.t.some(t => all.includes(t)), n - out.length, used, all));
  return out;
}

const DAYS_PL = ["Sundays","Mondays","Tuesdays","Wednesdays","Thursdays","Fridays","Saturdays"];
function rhythmLabel(w){
  if(w.d && w.d.length===7) return "Every night";
  if(w.d) return w.d.map(i => DAYS_PL[i]).join(" & ");
  return ["","First","Second","Third","Fourth"][w.nth[0]] + " " + DAYS_PL[w.nth[1]].replace(/s$/,"");
}

/* ---------- build results ---------- */
function build(){
  const {a, b, byMonth} = tripRange();
  const nights = byMonth ? Number(state.nights) : daysBetween(a,b);
  const near = nearAreas(state.area);
  TRIP_MONTHS = [...new Set([a.getMonth()+1, b.getMonth()+1])];
  const used = new Set();
  const has = (arr,v) => arr.includes(v);
  const lg = state.party === "lgbtq", fam = state.party === "family";
  const moons = fullMoons(a,b);

  /* stops: which place they're in on each date */
  let cursor = 0;
  const legs = state.stops.map((x,i) => { const from = byMonth ? null : addDays(a, cursor), to = byMonth ? null : addDays(a, cursor + x.n); const leg = {...x, i, from, to, start:cursor+1, end:cursor+x.n}; cursor += x.n; return leg; });
  const legAt = d => { if(byMonth || !legs.length) return null; const k = iso(d); return legs.find((l,i) => k >= iso(l.from) && (k < iso(l.to) || i===legs.length-1)) || legs[legs.length-1]; };
  const nearOn = (d, ar) => { const l = legAt(d); return l ? (NEAR[l.a]||[]).includes(ar) : near.includes(ar); };

  /* events in range */
  const evs = EVENTS.filter(e => { const s = D(e.s), en = D(e.e || e.s); return s <= b && en >= a; })
    .sort((x,y) => x.s.localeCompare(y.s))
    .map(e => { let leg = null, ok = false;
      if(byMonth || !multiStop()) ok = near.includes(e.a);
      else for(let d = new Date(Math.max(D(e.s), a)); d <= b && d <= D(e.e||e.s); d = addDays(d,1)) if(nearOn(d, e.a)){ ok = true; leg = legAt(d); break; }
      return {...e, near: ok, leg}; });
  /* weekly items in range */
  const days = []; for(let d = new Date(a); d <= b && days.length < 46; d = addDays(d,1)) days.push(new Date(d));
  const wk = WEEKLY.filter(w => (state.area==="road" || near.includes(w.a)) && !(fam && w.t.includes("drag")) && !(w.t.includes("drag") && !has(state.night,"drag") && !lg && state.night.includes("early")))
    .map(w => ({...w, dates: days.filter(d => (w.d ? w.d.includes(d.getDay()) : (d.getDay()===w.nth[1] && Math.ceil(d.getDate()/7)===w.nth[0])) && (byMonth || !multiStop() || state.area==="road" || nearOn(d, w.a)))}))
    .filter(w => w.dates.length);

  /* sunset */
  const sunsets = EXPERIENCES.filter(x => x.t.includes("sunset") && !x.ev);
  const ssFilter = {romantic:x=>x.t.includes("sail") || (x.t.includes("romantic") && !x.t.includes("land")), party:x=>x.t.includes("party"), private:x=>x.t.includes("private"), land:x=>x.t.includes("land"), surprise:()=>true}[state.sunset];
  let sunsetPicks = pickFrom(sunsets, ssFilter, 3, used, {romantic:["sail","romantic"],party:["party"],private:["private"],land:["land"],surprise:[]}[state.sunset]);
  if(sunsetPicks.length < 3) sunsetPicks = sunsetPicks.concat(pickFrom(sunsets, ()=>true, 3 - sunsetPicks.length, used));
  const moonSail = EXPERIENCES.find(x => x.id === "chl-fullmoon");
  const showMoon = moons.length && near.includes("kw") && ["romantic","surprise"].includes(state.sunset) && !sunsetPicks.includes(moonSail);

  /* water, land, evenings, gems */
  const waterTags = state.water.flatMap(k => WANT[k]);
  const water = pickEach(state.water, 5, used);
  const foodX = pickEach(state.food.filter(k => ["foodtour","cookingshow","cocktails","pie"].includes(k)), 3, used);
  const nightTags = state.night.flatMap(k => WANT[k] || []);
  const nightX = pickEach(state.night.filter(k => k!=="early"), 3, used);
  const gemTags = state.gems.flatMap(k => WANT[k] || []).concat(state.first==="lots" ? ["hidden"] : []);
  const gems = pickEach(state.gems, 4, used).concat(state.first!=="first" ? pickFrom(EXPERIENCES, x => x.t.includes("hidden"), 2, used, ["hidden"]) : []).slice(0,5);

  /* Michele's picks (eat, drink, hidden) */
  const foodTags = state.food.flatMap(k => WANT[k] || []);
  const picksNear = PICKS.filter(p => near.includes(p.a) && !(fam && p.t.includes("adults")));
  const eat = picksNear.map(p => ({p, s: p.t.filter(t => foodTags.includes(t)).length*3 + (stopAreas().includes(p.a)?2:0) + (["dinner","happyhour","drinks","coffee","sweets"].includes(p.c)?1:0)}))
    .filter(o => o.s > 2 && o.p.c !== "hidden").sort((x,y)=>y.s-x.s).slice(0,6).map(o=>o.p);
  const hiddenPicks = picksNear.filter(p => p.c === "hidden" && !eat.includes(p)).slice(0,3);
  const guides = [...new Set([...state.food.filter(k => GUIDES[k]), ...(state.sunset==="land"?["sunsetland"]:[]), ...(fam?["family"]:[]), ...(state.party==="couple"?["couples"]:[]),
    ...(state.first==="lots"?["unusual"]:[]), ...(state.spend==="easy"?["free"]:[]), ...(has(state.night,"music")?["music"]:[]), ...(has(state.night,"ghost")?["ghost"]:[]),
    ...(has(state.water,"snorkel")?["snorkel"]:[]), ...(stopAreas().includes("upper")?["upper","islamorada"]:[]), ...(stopAreas().includes("middle")?["middle"]:[])])].slice(0,6).map(k=>GUIDES[k]).filter(Boolean);

  /* day trips */
  const SA = stopAreas(), TRIPS = {kw:["upper","middle"], lower:["upper","middle"], middle:["kw"], upper:["kw"], road:[]};
  const tripTo = SA.includes("road") ? [] : [...new Set(SA.flatMap(x => TRIPS[x]))].filter(x => !SA.includes(x) && !(x==="middle" && SA.includes("lower") && SA.includes("upper")));
  const daytrips = tripTo.length ? EXPERIENCES.filter(x => !x.ev && tripTo.includes(x.a) && !(x.id==="utk-daytrip" && !SA.some(v => ["upper","middle"].includes(v))) && !used.has(x.id))
    .map(x => ({x, s: score({...x, a: state.area}) + (x.id==="utk-daytrip"?4:0)})).filter(o=>o.s>-50).sort((p,q)=>q.s-p.s).slice(0,3).map(o=>o.x) : [];

  /* book-ahead list */
  const bookNow = [];
  evs.filter(e => e.tix && e.near).slice(0,4).forEach(e => bookNow.push({aff:false, n:e.n, w:`${fmtShort(D(e.s))}${e.e?`–${fmtShort(D(e.e))}`:""}`, why:e.c==="theater"?"Shows sell out in season.":"Tickets sell out.", url:e.url}));
  if(near.includes("kw") && (has(state.food,"special") || ["couple","lgbtq"].includes(state.party) || ["anniv","propose"].includes(state.occasion))) bookNow.unshift({n:"Red Shoe Island Bistro", w:"Mon–Sat", why:"The best dinner in town books up fast. Reserve on OpenTable.", url:""});
  evs.filter(e => e.book && e.near).forEach(e => { const bk = EXPERIENCES.find(x => x.id===e.book); if(bk && !bookNow.some(x => x.n===bk.n)) bookNow.push({n:bk.n, w:fmtShort(D(e.s)), why:"A once-a-year sailing. These sell out.", url:bookUrl(bk), aff:true}); });
  if(sunsetPicks[0]) bookNow.push({n:sunsetPicks[0].n, w:"Your sunset night", why:"Weekend sunsets fill first.", url:bookUrl(sunsetPicks[0]), aff:true});
  if(water[0]) bookNow.push({n:water[0].n, w:"Your day on the water", why:"Boats have limited seats in season.", url:bookUrl(water[0]), aff:true});
  if(foodX[0]) bookNow.push({n:foodX[0].n, w:"Your food and drink day", why:"Small groups, so spots go quickly.", url:bookUrl(foodX[0]), aff:true});

  /* perfect day */
  const pd = (c, tags) => picksNear.find(p => p.c===c && (!tags || p.t.some(t=>tags.includes(t))));
  const perfect = [
    ["Morning", pd("coffee")?.n ? `Coffee at ${pd("coffee").n}.` : "Coffee with a water view."],
    ["Afternoon", water[0] ? `${water[0].n}.` : gems[0] ? `${gems[0].n}.` : "Beach time and a bike ride."],
    ["Happy hour", (pd("happyhour") || pd("drinks"))?.n ? `${(pd("happyhour")||pd("drinks")).n}.` : "Something frozen, with a view."],
    ["Sunset", sunsetPicks[0] ? `${sunsetPicks[0].n}.` : "Mallory Square."],
    ["Dinner", (has(state.food,"special") ? pd("dinner",["special"]) : pd("dinner",["cheap","cuban"]))?.n || (pd("dinner")?.n) || "Fresh fish, on the water."],
    ["Nightcap", nightX[0] ? `${nightX[0].n}.` : near.includes("kw") ? "One more scoop at Wicked Lick. You're on vacation." : "Stars over the water."]
  ];

  /* stop by stop */
  const chosen = [...sunsetPicks, ...water, ...foodX, ...nightX, ...gems];
  const route = multiStop() ? legs.map(l => {
    const nearL = NEAR[l.a] || [];
    let todo = chosen.filter(x => x.a === l.a).slice(0,3);
    if(todo.length < 2) todo = todo.concat(pickFrom(EXPERIENCES, x => x.a === l.a, 2 - todo.length, used));
    const bites = PICKS.filter(p => p.a === l.a && p.c !== "hidden" && !(fam && p.t.includes("adults")))
      .map(p => ({p, s: p.t.filter(t => foodTags.includes(t)).length*3 + (eat.includes(p)?2:0) + (["dinner","happyhour","drinks"].includes(p.c)?1:0)})).sort((x,y)=>y.s-x.s).slice(0,2).map(o=>o.p);
    const on = byMonth ? [] : evs.filter(e => e.near && e.leg && e.leg.i === l.i).slice(0,3);
    const rit = byMonth ? [] : wk.filter(w => !(w.d && w.d.length===7) && w.dates.some(d => legAt(d)?.i === l.i)).slice(0,2);
    return {l, todo, bites, on, rit};
  }) : [];

  /* Custom Guide pitch, tailored to their answers */
  const occ = {anniv:"anniversary", propose:"proposal", birthday:"birthday", bach:"bachelorette or bachelor weekend", reunion:"reunion"}[state.occasion];
  const pitch = occ ? {h:`Let me plan your ${occ} with you`,
      p:`A ${occ} in the Keys deserves more than a list. I'll build a custom guide just for your group, with the special touches planned and the reservations that matter flagged, just like the ones I make for friends and family.`,
      li:[state.occasion==="propose"?"Where and when to pop the question (sunset matters!)":state.occasion==="bach"?"A night-by-night party plan that still leaves time for the beach":"The dinner, sail and surprise that make the day","Your trip, day by day, around what you told me here","Every event and show on your dates, with links","Delivered as a beautiful printable guide"]}
    : fam ? {h:"Let me plan your family's Keys trip with you",
      p:"Traveling with kids means timing matters: early starts, pool breaks, and the tours that are actually worth it for little ones. I'll build a custom guide around your crew.",
      li:["Your trip, day by day, paced for your kids' ages","Kid-approved tours, beaches and rainy-day backups","Every family-friendly event on your dates","Delivered as a beautiful printable guide"]}
    : multiStop() ? {h:"Let me plan your Keys road trip with you",
      p:`Splitting your stay between ${state.stops.map(x=>AREA[x.a]).join(" and ")} is the best way to see the Keys. I'll build a custom guide that times each stop, the drive and the stops worth making along the way.`,
      li:["Each stop, day by day, around what you told me here","The drive down the Overseas Highway, with the best pull-offs","Every event and show on your dates, with links","Delivered as a beautiful printable guide"]}
    : nights >= 10 ? {h:"Staying a while? Let me plan it with you",
      p:`${nights} nights means you can really live like a local. I'll build a custom guide that mixes the big moments with the slow island days, just like the ones I make for friends and family.`,
      li:["Your stay, week by week, with room to breathe","Day trips up the Keys worth taking","Every event and show on your dates, with links","Delivered as a beautiful printable guide"]}
    : state.first === "lots" ? {h:"Been here before? Let me show you something new",
      p:"You know the classics. I'll build a custom guide of the places and experiences most visitors never find, timed to your dates.",
      li:["Hidden gems and new openings since your last trip","Your days mapped out around what you told me here","Every event and show on your dates, with links","Delivered as a beautiful printable guide"]}
    : {h:"Let me build your personal Keys guide",
      p:"This guide is a great start. If you'd like me to plan it with you, I'll build a custom guide just like the ones I make for friends and family: your days mapped out, my insider picks for your exact dates, what to book now, and a printable fridge calendar.",
      li:["Your trip, day by day, around what you told me here","Restaurant, sunset and tour picks I'd send my own family to","Every event and show on your dates, with links","Delivered as a beautiful printable guide"]};

  /* sponsors */
  const m = a.getMonth()+1;
  const sp = slot => SPONSORS.filter(s => s.slot===slot && (!s.months || !s.months.length || s.months.includes(m))).map(s => `
    <div class="sponsor"><small>Featured partner</small><h3>${esc(s.name)}</h3><p class="note" style="margin:4px 0 8px">${esc(s.blurb)}</p>
    <a class="btn sm teal" href="${esc(s.url)}" target="_blank" rel="noopener sponsored">Take a look →</a></div>`).join("");

  /* ---------- render ---------- */
  let ci = 0; const chip = t => `<span class="chip c${(ci++)%5}">${t}</span>`;
  const card = (x, {hero=false, why=""}={}) => `
    <article class="item${hero?" hero-pick":""}">
      <div>${hero?`<span class="badge">Your pick</span> `:""}${x.pick?`<span class="badge t">Michele's been</span> `:""}
        <h3>${esc(x.n)}</h3><div class="meta">${esc(x.op)} · ${AREA[x.a]||""}</div>${x.b?`<p>${esc(x.b)}</p>`:""}${why?`<p><b>${esc(why)}</b></p>`:""}</div>
      <div class="side"><a class="btn sm" href="${esc(bookUrl(x))}" target="_blank" rel="noopener sponsored">See dates & book →</a>
        ${x.post?`<a class="note" href="${esc(postUrl(x.post))}" target="_blank" rel="noopener">Read Michele's review</a>`:""}</div>
    </article>`;
  const pickCard = p => `
    <article class="item"><div><h3>${esc(p.n)}</h3><div class="meta">${esc(p.where||"")} · ${AREA[p.a]}</div><p>${esc(p.b)}</p></div>
    <div class="side">${p.post?`<a class="btn sm ghost" href="${esc(postUrl(p.post))}" target="_blank" rel="noopener">Michele's take →</a>`:p.book?`<span class="note">${esc(p.book)}</span>`:""}</div></article>`;
  const eventRow = e => {
    const bk = e.book && EXPERIENCES.find(x=>x.id===e.book);
    return `<div class="when"><div class="d">${fmtShort(D(e.s))}${e.e?` – ${fmtShort(D(e.e))}`:""}</div>
      <div><h3>${esc(e.n)}${e.tent?` <span class="badge t">Dates expected</span>`:""}</h3>
      <div class="meta">${esc([e.time, e.v, e.near?(e.leg&&multiStop()?"During your "+AREA[e.leg.a]+" stay":""):AREA[e.a]+" (worth the drive)"].filter(Boolean).join(" · "))}</div>
      ${e.b?`<p>${esc(e.b)}</p>`:""}
      ${bk||e.url||e.tix?`<div class="evact">${bk?`<a class="btn sm" href="${esc(bookUrl(bk))}" target="_blank" rel="noopener sponsored">${esc(bk.n)}: book →</a>`:""}${e.url?`<a class="btn sm${bk?" ghost":""}" href="${esc(e.url)}" target="_blank" rel="noopener">${e.tix?"Get tickets →":"Details →"}</a>`:""}${e.tix&&!e.url&&!bk?`<span class="note">Tickets sell out, so buy ahead.</span>`:""}</div>`:""}</div></div>`;
  };

  const dateLabel = byMonth ? `${MONTHS[a.getMonth()]} ${a.getFullYear()} · ${nights} nights` : `${fmtShort(a)} – ${fmtShort(b)}, ${b.getFullYear()} · ${nights} night${nights>1?"s":""}`;
  const seasonNow = SEASONS.filter(s => { const md = iso(a).slice(5); return s.from <= s.to ? (md>=s.from && md<=s.to) : (md>=s.from || md<=s.to); });
  const firstSun = sunset(a), lastSun = sunset(b);
  const monthLabel = a.getMonth()===b.getMonth() || byMonth ? MONTHS[a.getMonth()] : `${MONTHS[a.getMonth()]}–${MONTHS[b.getMonth()]}`;
  const who = {couple:"you two",family:"your crew",friends:"your crew",celebrate:"the celebration",solo:"you",lgbtq:"you two"}[state.party];
  const intro = `${nights >= 14 ? "A whole " + (nights>=28?"month":"couple of weeks") + " in the Keys? Lucky " + who + "!" : "Your Keys trip is coming together!"} Here's my insider's guide to the best nights, bites and only-in-the-Keys moments on your dates${evs.length?", including "+evs.length+" event"+(evs.length>1?"s":"")+" happening while you're here":""}.`;

  /* calendar grid */
  const calDays = byMonth ? days : days;
  const lead = calDays[0].getDay();
  const cells = [];
  for(let i=0;i<lead;i++) cells.push(`<div class="c off" aria-hidden="true"></div>`);
  calDays.forEach(d => {
    const k = iso(d);
    const todays = evs.filter(e => k >= e.s && k <= (e.e||e.s) && e.near).slice(0,3).map(e=>`<i class="${["theater","music"].includes(e.c)?"k-show":["festival","food","art"].includes(e.c)?"k-fest":"k-spec"}">${esc(e.n.split(":")[0].replace(/\s*\(.*\)/,""))}</i>`);
    const reg = wk.filter(w => !(w.d && w.d.length===7) && w.dates.some(x=>iso(x)===k)).slice(0,2).map(w=>`<i class="k-week">${esc(w.n.replace(/ at .*/,"").replace("The Fabulous ",""))}</i>`);
    const moon = moons.some(x=>iso(x)===k) ? `<i class="k-spec">Full moon</i>` : "";
    const mv = !byMonth && multiStop() ? legs.find(l => iso(l.from)===k) : null;
    cells.push(`<div class="c"><span class="n">${d.getDate()}${d.getDate()===1||d===calDays[0]?` ${MON[d.getMonth()]}`:""}</span>${mv?`<i class="k-move">${mv.i?"→ ":""}${esc(AREA[mv.a])}</i>`:""}${todays.join("")}${reg.join("")}${moon}<i class="sun">Sunset ${sunset(d)}</i></div>`);
  });

  const html = `
  <header class="top" style="padding-top:8px">
    <div>
      <span class="chip c0">An insider guide · ${esc(a.getFullYear()===b.getFullYear()||byMonth ? monthLabel+" "+a.getFullYear() : MONTHS[a.getMonth()]+" "+a.getFullYear()+" – "+MONTHS[b.getMonth()]+" "+b.getFullYear())}</span>
      <h1>Your <mark>${esc(monthLabel)}</mark> in ${esc(placeName())}</h1>
      <p class="lede" style="font-weight:600;color:var(--ink)">${esc(dateLabel)}</p>
      <p class="lede">${esc(intro)}</p>
      <p class="sig">— Michele, Fun in Key West · Chief Rooster Wrangler &amp; Island Story Collector</p>
      <div class="tags" style="margin-top:10px">${summaryTags().map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>
    </div>
    <img class="logo" alt="Fun in Key West" src="${LOGO}">
  </header>
  <div class="glance">
    <div class="stat"><b>${HIGHS[a.getMonth()]}°</b><span>Typical high in ${MONTHS[a.getMonth()]}</span></div>
    <div class="stat"><b>${esc(firstSun)}</b><span>Sunset on ${byMonth?"the 1st":"arrival day"}</span></div>
    <div class="stat"><b>${evs.length}</b><span>Event${evs.length===1?"":"s"} during your stay</span></div>
    <div class="stat"><b>${wk.length}</b><span>Weekly local rituals</span></div>
  </div>
  ${seasonNow.length?`<p class="note">In season while you're here: ${seasonNow.map(s=>`<b>${esc(s.n)}</b> (${esc(s.b)})`).join(" ")}</p>`:""}
  ${sp("top")}

  ${route.length?`<section class="sec">${chip("Stop by stop")}<h2>Your route</h2><div class="route">
    ${route.map(({l,todo,bites,on,rit})=>`<article class="stop"><span class="badge">Stop ${l.i+1}</span>
      <h3>${esc(AREA[l.a])}</h3>
      <div class="meta">${byMonth ? `Nights ${l.start}–${l.end}` : `${esc(fmt(l.from))} – ${esc(fmt(l.to))}`} · ${l.n} night${l.n>1?"s":""}${byMonth?"":` · Sunset ${esc(sunset(l.from))} on night one`}</div>
      <ul>
        ${on.map(e=>`<li><b>On while you're here:</b> ${esc(e.n)} (${esc(fmtShort(D(e.s)))}${e.e?`–${esc(fmtShort(D(e.e)))}`:""})</li>`).join("")}
        ${rit.map(w=>`<li><b>Local ritual:</b> ${esc(w.n)} (${esc(w.dates.filter(d=>legAt(d)?.i===l.i).map(fmtShort).join(", "))})</li>`).join("")}
        ${todo.map(x=>`<li><b>Don't miss:</b> <a href="${esc(bookUrl(x))}" target="_blank" rel="noopener sponsored">${esc(x.n)}</a></li>`).join("")}
        ${bites.map(p=>`<li><b>Eat &amp; drink:</b> ${p.post?`<a href="${esc(postUrl(p.post))}" target="_blank" rel="noopener">${esc(p.n)}</a>`:esc(p.n)}${p.where?` · ${esc(p.where)}`:""}</li>`).join("")}
      </ul></article>`).join("")}
    </div>${!byMonth&&legs.length>1?`<p class="note">Moving day${legs.length>2?"s":""}: ${legs.slice(1).map(l=>`<b>${esc(fmt(l.from))}</b> to ${esc(AREA[l.a])}`).join(", ")}. Check out, take the scenic drive, and check in by sunset.</p>`:""}</section>`:""}

  ${bookNow.length?`<section class="sec">${chip("Before you go")}<h2>Book these now</h2><div class="list">
    ${bookNow.map((x,i)=>`<article class="item"><div><span class="num">${i+1}</span><h3 style="display:inline">${esc(x.n)}</h3><div class="meta">${esc(x.w)}</div><p>${esc(x.why)}</p></div>
    <div class="side">${x.url?`<a class="btn sm" href="${esc(x.url)}" target="_blank" rel="noopener${x.aff?" sponsored":""}">${x.aff?"Book →":"Tickets →"}</a>`:""}</div></article>`).join("")}</div></section>`:""}

  <section class="sec">${chip("Mark your calendar")}<h2>What's happening while you're there</h2>
    ${evs.length?`<div class="whens">${evs.map(eventRow).join("")}</div>`:`<p class="note">No big festivals land on your dates, which means smaller crowds and easier dinner reservations. Your weekly rhythm below still has plenty going on.</p>`}
    ${moons.length?`<p class="note">🌕 Full moon around <b>${moons.map(fmt).join(" and ")}</b>. Moonrise over the water is worth planning a night around.</p>`:""}
    <p class="fine">Dates gathered from venue and festival listings, last checked ${esc(fmtShort(D(UPDATED)))}, ${D(UPDATED).getFullYear()}. Island plans change, so confirm before you go.</p>
  </section>

  ${wk.length?`<section class="sec">${chip("Live like a local")}<h2>Your weekly rhythm</h2><p class="note" style="margin:0">Staying a while means you get to have regular spots. Here's the week the way locals do it.</p><div class="whens">
    ${wk.map(w=>`<div class="when"><div class="d">${esc(rhythmLabel(w))}</div>
    <div><h3>${esc(w.n)}</h3><div class="meta">${esc(w.time)} · ${AREA[w.a]}${w.d&&w.d.length===7?"":" · On your trip: "+esc(w.dates.map(fmtShort).join(", "))}</div><p>${esc(w.b)}</p></div></div>`).join("")}</div></section>`:""}

  <section class="sec">${chip("Sunset, sorted")}<h2>Your sunset pick</h2>
    <div class="list">${sunsetPicks.map((x,i)=>card(x,{hero:i===0})).join("")}
    ${showMoon?card(moonSail,{why:`A full moon lands on ${fmt(moons[0])}. This sail only runs around it.`}):""}</div>
    <p class="note">Sunset is around <b>${esc(firstSun)}</b> when you arrive${byMonth?"":` and <b>${esc(lastSun)}</b> when you leave`}. Most cruises board about 90 minutes before.</p>
    ${sp("sunset")}
  </section>

  ${water.length?`<section class="sec">${chip("On the water")}<h2>Your water days</h2><div class="list">${water.map(x=>card(x)).join("")}</div>${sp("water")}</section>`:""}

  <section class="sec">${chip("Michele's must-stops")}<h2>Eat, drink and be merry</h2>
    <div class="list">${eat.map(pickCard).join("")}${foodX.map(x=>card(x)).join("")}</div>
    ${guides.length?`<p class="note">More from Michele: ${guides.map(([s,t])=>`<a href="${esc(postUrl(s))}" target="_blank" rel="noopener">${esc(t)}</a>`).join(" · ")}</p>`:""}
    ${sp("food")}
  </section>

  ${nightX.length||has(state.night,"theater")?`<section class="sec">${chip("After dark")}<h2>Your evenings</h2>
    <div class="list">${nightX.map(x=>card(x)).join("")}</div>
    ${has(state.night,"theater")?`<p class="note">Key West's stages: <a href="https://redbarntheatre.com" target="_blank" rel="noopener">Red Barn Theatre</a> · <a href="https://waterfrontplayhouse.org" target="_blank" rel="noopener">Waterfront Playhouse</a> · <a href="https://thekeywesttheater.com" target="_blank" rel="noopener">Key West Theater</a> · Tennessee Williams Theatre on Stock Island. Shows on your dates are listed above.</p>`:""}
    ${sp("night")}</section>`:""}

  ${lg?`<section class="sec">${chip("Gay Key West")}<h2>Out on the town</h2>
    <p class="note">Key West has been welcoming everyone for a very long time. It was the first North American city to elect an openly gay mayor. The heart of it all is the "pink triangle" around Duval and Petronia.</p>
    <div class="list">
      ${pickCard({n:"Bourbon St. Pub", where:"724 Duval St", a:"kw", b:"The anchor of gay Key West nightlife: five bars, the Men of Bourbon nightly, and a men-only, clothing-optional garden bar with a pool."})}
      ${pickCard({n:"801 Bourbon Bar", where:"801 Duval St · open till 4 am", a:"kw", b:"Home of Sushi and the famous 801 Girls, with shows nightly at 9 and 11. More comedy than glamour, and the queens love to tease the crowd."})}
      ${pickCard({n:"La Te Da", where:"1125 Duval St", a:"kw", b:"The classy night out. Have dinner, then catch the cabaret in the Crystal Room: big wit, stunning costumes and real live vocals."})}
      ${pickCard({n:"Gay Key West Visitor Center", where:"808 Duval St", a:"kw", b:"Run by the Key West Business Guild, the nation's first LGBTQ+ tourism organization. Pop in on day one for recommendations and the LGBTQ map."})}
    </div><p class="note"><b>Michele's perfect night:</b> dinner at Red Shoe on Petronia, a nightcap at Bourbon St. Pub, then the 11 pm show at 801.</p></section>`:""}

  ${gems.length||hiddenPicks.length?`<section class="sec">${chip("You might not think of")}<h2>Hidden gems for you</h2>
    <div class="list">${gems.map(x=>card(x)).join("")}${hiddenPicks.map(pickCard).join("")}</div></section>`:""}

  ${daytrips.length?`<section class="sec">${chip("Worth the drive")}<h2>Day trips</h2><div class="list">${daytrips.map(x=>card(x)).join("")}</div></section>`:""}

  <section class="sec">${chip("Put it all together")}<h2>Your perfect day</h2>
    <div class="day">${perfect.map(([k,v])=>`<div class="slot"><small>${k}</small>${esc(v)}</div>`).join("")}</div></section>

  <section class="sec cal-page"><div class="calhead"><div>${chip("Stick it on the fridge")}<h2>Your <mark>${esc(byMonth?MONTHS[a.getMonth()]+" "+a.getFullYear():monthLabel)}</mark> at a glance</h2></div>
    <div class="legend">${multiStop()&&!byMonth?`<i style="background:var(--ink);color:#fff">Where you're staying</i>`:""}<i style="background:var(--yellow)">Weekly locals' rituals</i><i style="background:var(--cyan)">Shows &amp; concerts</i><i style="background:var(--pink)">Festivals</i><i style="background:var(--lime)">Special events</i></div></div>
    <div class="cal">${DOW.map(d=>`<div class="h">${d}</div>`).join("")}${cells.join("")}</div>
    <p class="fine">Every night: Sunset Celebration at Mallory Square${near.includes("kw")&&!fam?" and drag at 801 Bourbon, 9 &amp; 11 pm":""}. Sunset times are for Key West (a few minutes later up the Keys). Confirm times before you go.</p></section>

  <section class="upsell">
    <span class="chip c4">Want it made just for you?</span>
    <h2>${esc(pitch.h)}</h2>
    <p style="margin:0">${esc(pitch.p)}</p>
    <ul>${pitch.li.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
    <a class="btn" id="wh-guideBtn" href="${esc(GUIDE_OFFER.url || "#")}" target="_blank" rel="noopener">Get my custom guide · ${esc(GUIDE_OFFER.price)}</a>
    ${GUIDE_OFFER.url?"":`<p class="note" style="color:inherit;opacity:.85;margin:0">Or email me: <b>${esc(GUIDE_OFFER.email)}</b></p>`}
  </section>

  <div class="two">
    <section class="club">${chip("Stay in the know")}<h3 style="margin:4px 0 6px">Fun in Key West Insider Club</h3>
      <p class="note" style="margin:0 0 12px">The full digital magazine, first word on events and openings, and the hidden gems I don't post anywhere else. ${daysBetween(new Date(),a)>30?"You've got time before your trip to enjoy a few issues.":""}</p>
      <a class="btn sm teal" href="${esc(INSIDER_CLUB_URL)}" target="_blank" rel="noopener">Join the Insider Club →</a></section>
    <section class="club" style="border-color:var(--line)">${chip("Free")}<h3 style="margin:4px 0 6px">Email me my guide (and the PDF)</h3>
      <p class="note" style="margin:0 0 12px">I'll send you a link to this exact guide, ready to save as a PDF, plus my Key West Trip Countdown tips as your trip gets closer.</p>
      ${ON_SITE && KIT_FORM_ID ? `<form class="signup" id="wh-signup"><input type="text" placeholder="First name" aria-label="First name" id="wh-firstName" autocomplete="given-name"><input type="email" required placeholder="you@email.com" aria-label="Email address" id="wh-email" autocomplete="email"><button class="btn sm" type="submit">Send my guide</button></form><p class="note" id="wh-signupMsg" aria-live="polite"></p>`
        : `<a class="btn sm" href="${esc(SIGNUP_URL)}" target="_blank" rel="noopener">Send me my guide →</a>`}</section>
  </div>

  <div class="actions noprint">
    ${ON_SITE?`<button class="btn ghost sm" type="button" id="wh-printPlan">Print or save as PDF</button><button class="btn ghost sm" type="button" id="wh-icsPlan">Add events to my calendar</button>`:""}
    <button class="btn ghost sm" type="button" id="wh-restart">↺ Start over</button>
    
  </div>
  <div class="foot"><b>FUN IN KEY WEST · Your ${esc(monthLabel)} in ${esc(placeName())}</b><span>funinkeywest.com</span></div>
  <p class="fine">Some links are affiliate links: if you book through them, I may earn a small commission at no extra cost to you. Thank you for supporting Fun in Key West! Tour availability and event dates change, so confirm with each business before you go. More at <a href="${SITE_URL}" target="_blank" rel="noopener">funinkeywest.com</a>.</p>`;

  const el = $("#wh-results");
  el.innerHTML = html; el.hidden = false; $("#wh-quiz").hidden = true; $("#wh-intro").hidden = true;
  el.scrollIntoView({behavior:"smooth", block:"start"});

  /* actions */
  $("#wh-restart").addEventListener("click", () => { Object.assign(state,{step:0,area:null,stops:[],party:null,first:null,sunset:null,water:[],food:[],night:[],gems:[],occasion:null,spend:null}); el.hidden = true; $("#wh-quiz").hidden = false; $("#wh-intro").hidden = false; renderStep(); ROOT.scrollIntoView({behavior:"smooth"}); });
  if(!GUIDE_OFFER.url) $("#wh-guideBtn").addEventListener("click", ev => { ev.preventDefault(); location.href = `mailto:${GUIDE_OFFER.email}?subject=${encodeURIComponent("Custom Keys guide: "+dateLabel)}&body=${encodeURIComponent("Hi Michele! I'd love a custom guide.\n\n"+summaryTags().join(", ")+"\n\n")}`; });
  if(ON_SITE){
    $("#wh-printPlan").addEventListener("click", () => window.print());
    $("#wh-icsPlan").addEventListener("click", () => {
      const lines = ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Fun in Key West//Whats Happening//EN"];
      const stamp = new Date().toISOString().replace(/[-:]/g,"").slice(0,15)+"Z";
      evs.filter(e=>e.near).forEach((e,i) => { const end = iso(addDays(D(e.e||e.s),1)).replace(/-/g,"");
        lines.push("BEGIN:VEVENT",`UID:fikw-${e.s}-${i}@funinkeywest.com`,`DTSTAMP:${stamp}`,`DTSTART;VALUE=DATE:${e.s.replace(/-/g,"")}`,`DTEND;VALUE=DATE:${end}`,
          `SUMMARY:${e.n.replace(/[,;]/g,"\\$&")}`,`LOCATION:${(e.v||"").replace(/[,;]/g,"\\$&")}`,`DESCRIPTION:${((e.b||"")+" "+(e.url||"")).replace(/[,;]/g,"\\$&")}`,"END:VEVENT"); });
      lines.push("END:VCALENDAR");
      const blob = new Blob([lines.join("\r\n")],{type:"text/calendar"}); const u = URL.createObjectURL(blob);
      const link = document.createElement("a"); link.href = u; link.download = "my-keys-trip.ics"; document.body.appendChild(link); link.click(); link.remove();
    });
    const f = $("#wh-signup");
    if(f) f.addEventListener("submit", async ev => { ev.preventDefault(); const msg = $("#wh-signupMsg");
      const btn = f.querySelector("button"); btn.disabled = true; msg.textContent = "Sending…";
      try { const fd = new FormData(); fd.append("email_address", $("#wh-email").value.trim());
        if($("#wh-firstName").value.trim()) fd.append("first_name", $("#wh-firstName").value.trim());
        fd.append("fields[trip_guide_link]", planLink()); fd.append("fields[trip_start]", iso(a)); fd.append("fields[trip_area]", areaName());
        const r = await fetch(`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`, {method:"POST", body:fd, headers:{Accept:"application/json"}});
        msg.textContent = r.ok ? "You're in! Check your inbox for your guide. (If you don't see it in a few minutes, peek in Promotions or Spam.)" : "Hmm, that didn't go through. Try again?"; }
      catch(e){ msg.textContent = "Hmm, that didn't go through. Try again?"; }
      btn.disabled = false; });
  }
}
function summaryTags(){
  const lab = (k,v) => { const s = STEPS.find(x=>x.key===k); const o = s && s.opts.find(o=>o[0]===v); return o ? o[1] : null; };
  return [...(multiStop()?[areaName()]:[]), lab("party",state.party), lab("first",state.first), ...state.water.map(v=>lab("water",v)), ...state.food.map(v=>lab("food",v)), ...state.night.map(v=>lab("night",v)), state.occasion!=="none"?lab("occasion",state.occasion):null].filter(Boolean);
}

window.addEventListener("fikw:prefill", ev => {
  const d = ev.detail || {}, okD = v => /^\d{4}-\d{2}-\d{2}$/.test(v||"");
  if(okD(d.arrive) && okD(d.depart) && d.depart > d.arrive){ state.arrive = d.arrive; state.depart = d.depart; state.mode = "dates"; fromStay = true; }
  if(["couple","family","friends","celebrate","solo","lgbtq"].includes(d.who)){ state.party = d.who; fromStay = true; }
  if(STOP_AREAS.includes(d.area)){ state.stops = [{a:d.area, n:null}]; spreadNights(); syncArea(); fromStay = true; }
  state.step = 0; $("#wh-results").hidden = true; $("#wh-quiz").hidden = false; $("#wh-intro").hidden = false; renderStep();
  setTimeout(() => ROOT.scrollIntoView({behavior:"smooth", block:"start"}), 50);
});
renderStep();
if(restoredPlan) build();
}

