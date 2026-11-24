/* Generated for funinkeywest.com. Injects styles and markup, then runs the quiz. */
(function(){
var m=document.getElementById("kwsf-mount"); if(!m) return;
if(!document.getElementById("kwsf-mount-css")){var st=document.createElement("style");st.id="kwsf-mount-css";st.textContent="\n#kwsf h2, #kwsf h3, #kwsf p, #kwsf ul, #kwsf li{margin:0; padding:0; border:0; background:none; text-transform:none; letter-spacing:normal; text-align:inherit; line-height:inherit}\n#kwsf ul{list-style:none}\n#kwsf button, #kwsf a.kw-btn{box-shadow:none; text-shadow:none; text-transform:none; letter-spacing:normal; line-height:1.3; min-height:0; width:auto; margin:0}\n#kwsf button:hover, #kwsf a.kw-btn:hover{text-decoration:none}\n#kwsf h2, #kwsf h3{font-family:var(--display); color:var(--ink)}\n#kwsf img{max-width:100%}\n#kwsf [hidden]{display:none!important}\n#kwsf .kw-lede{color:var(--muted); margin:0 0 4px; max-width:62ch; font-size:17px}\n#kwsf{--bg:#eaf6fc;          \n  --surface:#ffffff;\n  --ink:#2f3437;\n  --muted:#5f6b70;\n  --line:#cfe3ec;\n  --accent:#e8603f;      \n  --accent-text:#c94a2b; \n  --accent-ink:#ffffff;\n  --teal:#04b2ab;        \n  --sun:#f9b233;\n  --chip:#f4fafd;\n  --chip-on:#037b76;     \n  --chip-on-ink:#ffffff;\n  --why:#e2f5f3;\n  --why-ink:#03615d;\n  --cta:#037b76;\n  --cta-ink:#ffffff;\n  --display:\"Epilogue\", \"Arial Black\", system-ui, sans-serif;\n  --body:\"Epilogue\", system-ui, -apple-system, \"Segoe UI\", sans-serif;}\n#kwsf, #kwsf *{box-sizing:border-box}\n#kwsf{background:var(--bg); color:var(--ink); font-family:var(--body); font-size:16px; line-height:1.55;\n  padding:28px 16px 40px; border-radius:20px; text-align:left;}\n#kwsf a{color:inherit}\n#kwsf .kw-wrap{max-width:760px; margin:0 auto; display:flex; flex-direction:column; gap:20px}\n#kwsf .kw-masthead{display:flex; align-items:center; gap:14px}\n#kwsf .kw-buoy{width:54px; height:54px; flex:none}\n#kwsf .kw-eyebrow{font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:var(--teal); font-weight:700}\n#kwsf h1{font-family:var(--display); font-weight:900; text-transform:uppercase; letter-spacing:.01em; font-size:clamp(28px, 6vw, 42px); line-height:1.05; margin:2px 0 0; text-wrap:balance}\n#kwsf .kw-lede{color:var(--muted); margin:0; max-width:60ch}\n#kwsf .kw-card{background:var(--surface); border:1px solid var(--line); border-radius:18px; padding:28px clamp(18px, 4vw, 32px)}\n#kwsf .kw-progress{display:flex; gap:6px; margin-bottom:20px}\n#kwsf .kw-progress span{flex:1; height:6px; border-radius:3px; background:var(--line); transition:background .25s}\n#kwsf .kw-progress span.kw-on{background:var(--teal)}\n#kwsf .kw-stepnum{font-size:12px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); font-weight:600; margin:0 0 4px}\n#kwsf h2{font-family:var(--display); font-weight:800; font-size:25px; line-height:1.2; margin:0 0 6px; text-wrap:balance}\n#kwsf .kw-hint{color:var(--muted); margin:0 0 18px; font-size:15px}\n#kwsf .kw-options{display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:10px}\n#kwsf .kw-options.kw-three{grid-template-columns:repeat(3, minmax(0,1fr))}\n#kwsf .kw-opt{font:inherit; color:var(--ink); text-align:left; cursor:pointer;\n  background:var(--chip); border:1.5px solid var(--line); border-radius:14px; padding:14px 16px;\n  display:flex; flex-direction:column; gap:2px; min-width:0; transition:border-color .15s, background .15s, color .15s;}\n#kwsf .kw-opt:hover{border-color:var(--accent)}\n#kwsf .kw-opt:focus-visible{outline:3px solid var(--sun); outline-offset:2px}\n#kwsf .kw-opt[aria-pressed=\"true\"]{background:var(--chip-on); color:var(--chip-on-ink); border-color:var(--chip-on)}\n#kwsf .kw-opt b{font-weight:700; font-size:16px}\n#kwsf .kw-opt small{font-size:13.5px; opacity:.8}\n#kwsf .kw-opt .kw-big{font-family:var(--display); font-size:22px; font-weight:800}\n#kwsf .kw-nav{display:flex; justify-content:space-between; align-items:center; gap:12px; margin-top:22px; flex-wrap:wrap}\n#kwsf .kw-btn{font:inherit; font-weight:700; cursor:pointer; border-radius:999px; padding:12px 22px; border:1.5px solid transparent;\n  background:var(--accent); color:var(--accent-ink); transition:transform .1s, opacity .15s; text-decoration:none; display:inline-block;}\n#kwsf .kw-btn:disabled{opacity:.4; cursor:not-allowed}\n#kwsf .kw-btn:not(:disabled):active{transform:translateY(1px)}\n#kwsf .kw-btn:focus-visible{outline:3px solid var(--sun); outline-offset:2px}\n#kwsf .kw-btn.kw-ghost{background:transparent; color:var(--ink); border-color:var(--line)}\n#kwsf .kw-btn.kw-small{padding:8px 16px; font-size:14px}\n#kwsf .kw-btn.kw-restart{background:var(--ink); color:var(--surface); border-color:var(--ink); display:inline-flex; align-items:center; gap:8px; box-shadow:0 2px 0 color-mix(in srgb, var(--ink) 35%, transparent)}\n#kwsf .kw-btn.kw-restart span{font-size:18px; line-height:1}\n#kwsf .kw-btn.kw-restart:hover{filter:brightness(1.25)}\n#kwsf .kw-again{display:flex; justify-content:center; padding:4px 0}\n#kwsf .kw-results{display:flex; flex-direction:column; gap:14px}\n#kwsf .kw-res-head{display:flex; justify-content:space-between; align-items:flex-end; gap:12px; flex-wrap:wrap}\n#kwsf .kw-res-head > div{min-width:0}\n#kwsf .kw-summary{display:flex; flex-wrap:wrap; gap:6px; margin-top:8px}\n#kwsf .kw-tag{font-size:12.5px; font-weight:600; background:var(--chip); border:1px solid var(--line); border-radius:999px; padding:3px 10px}\n#kwsf .kw-hotel{background:var(--surface); border:1px solid var(--line); border-radius:16px; padding:20px 22px; display:grid; grid-template-columns:auto minmax(0,1fr) auto; gap:6px 16px; align-items:start}\n#kwsf .kw-hotel.kw-top{border-color:var(--accent); border-width:2px}\n#kwsf .kw-rank{font-family:var(--display); font-weight:900; font-size:30px; line-height:1; color:var(--teal); grid-row:span 2}\n#kwsf .kw-hotel h3{font-family:var(--display); font-weight:800; font-size:20px; line-height:1.2; margin:0; min-width:0}\n#kwsf .kw-area{font-size:13px; color:var(--muted); margin:0}\n#kwsf .kw-price{text-align:right; white-space:nowrap}\n#kwsf .kw-price strong{font-family:var(--display); font-weight:800; font-size:21px; font-variant-numeric:tabular-nums}\n#kwsf .kw-price span{display:block; font-size:12px; color:var(--muted)}\n#kwsf .kw-hotel .kw-body{grid-column:2 / -1; display:flex; flex-direction:column; gap:10px; margin-top:6px; min-width:0}\n#kwsf .kw-why{display:flex; flex-wrap:wrap; gap:6px}\n#kwsf .kw-why span{font-size:12.5px; font-weight:600; background:var(--why); color:var(--why-ink); border-radius:999px; padding:3px 10px}\n#kwsf .kw-perks{list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:6px}\n#kwsf .kw-perks li{display:flex; gap:10px; align-items:flex-start; font-size:15px}\n#kwsf .kw-perks li::before{content:\"\"; flex:none; width:8px; height:8px; margin-top:8px; border-radius:50%; background:var(--sun); box-shadow:0 0 0 2px var(--accent)}\n#kwsf .kw-note{font-size:13.5px; font-weight:600; color:var(--accent-text); margin:0}\n#kwsf .kw-look{display:inline-flex; align-items:center; justify-content:center; gap:8px; align-self:flex-start; font-size:16px; font-weight:700; line-height:1.2; text-decoration:none; color:var(--chip-on-ink); background:var(--chip-on); border:1.5px solid var(--chip-on); border-radius:999px; padding:12px 22px; margin-top:4px; transition:filter .15s, transform .1s}\n#kwsf .kw-look:hover{filter:brightness(1.12)}\n#kwsf .kw-look:active{transform:translateY(1px)}\n#kwsf .kw-look:focus-visible{outline:3px solid var(--sun); outline-offset:2px}\n@media (max-width:560px){#kwsf .kw-look:not(.kw-sm){align-self:stretch; padding:13px 16px}}\n#kwsf .kw-look.kw-sm{font-size:14px; padding:8px 16px; margin-top:0; align-self:center; white-space:nowrap}\n#kwsf .kw-badge{display:inline-block; font-size:11px; letter-spacing:.1em; text-transform:uppercase; font-weight:700; color:var(--accent-text); margin-bottom:2px}\n#kwsf .kw-more{background:var(--surface); border:1px solid var(--line); border-radius:16px; padding:18px 22px}\n#kwsf .kw-more h3{font-family:var(--display); font-weight:800; font-size:19px; margin:0 0 8px}\n#kwsf .kw-more ul{list-style:none; margin:0; padding:0; display:flex; flex-direction:column}\n#kwsf .kw-more li{display:flex; justify-content:space-between; gap:12px; padding:10px 0; border-top:1px solid var(--line); flex-wrap:wrap}\n#kwsf .kw-more li:first-child{border-top:0}\n#kwsf .kw-more li > div{min-width:0}\n#kwsf .kw-more b{font-weight:700}\n#kwsf .kw-more small{display:block; color:var(--muted); font-size:13px}\n#kwsf .kw-more .kw-r{font-variant-numeric:tabular-nums; white-space:nowrap; font-weight:600}\n#kwsf .kw-more li{align-items:center}\n#kwsf .kw-more li > div{flex:1 1 200px}\n#kwsf .kw-more .kw-side{display:flex; align-items:center; gap:12px; flex-wrap:wrap}\n#kwsf .kw-season{background:var(--chip); border:1px solid var(--line); border-radius:16px; padding:16px 20px; display:flex; gap:14px; align-items:flex-start}\n#kwsf .kw-season svg{flex:none; width:28px; height:28px; margin-top:2px}\n#kwsf .kw-season p{margin:0; font-size:15px}\n#kwsf .kw-season b{display:block; font-size:15px}\n#kwsf .kw-next{background:#fff3c4; color:#2f3437; border:2px solid var(--accent); border-radius:18px; padding:24px clamp(18px,4vw,30px); display:flex; flex-direction:column; gap:10px; align-items:flex-start}\n#kwsf .kw-next h2{margin:0; color:#2f3437}\n#kwsf .kw-next p{margin:0; max-width:60ch}\n#kwsf .kw-cta{background:var(--cta); color:var(--cta-ink); border-radius:18px; padding:26px clamp(18px,4vw,30px); display:flex; flex-direction:column; gap:10px}\n#kwsf .kw-cta h2{color:inherit; margin:0}\n#kwsf .kw-cta p{margin:0; opacity:.85; max-width:56ch}\n#kwsf .kw-cta .kw-row{display:flex; gap:10px; flex-wrap:wrap; margin-top:6px}\n#kwsf .kw-cta .kw-chat{display:flex; flex-direction:column; gap:12px; align-items:flex-start; margin-top:10px; padding-top:18px; border-top:1px solid color-mix(in srgb, var(--cta-ink) 25%, transparent)}\n#kwsf .kw-cta .kw-chat p{font-size:15px}\n#kwsf .kw-cta .kw-chat b{font-weight:700}\n#kwsf .kw-cta .kw-btn.kw-ghost{color:var(--cta-ink); border-color:currentColor}\n#kwsf .kw-dates{margin-top:18px; padding-top:18px; border-top:1px solid var(--line); display:flex; flex-direction:column; gap:10px}\n#kwsf .kw-dates b{font-size:15px}\n#kwsf .kw-dates .kw-grid{display:grid; grid-template-columns:repeat(4, minmax(0,1fr)); gap:10px}\n#kwsf .kw-dates label{display:flex; flex-direction:column; gap:4px; font-size:13px; font-weight:600; color:var(--muted); min-width:0}\n#kwsf .kw-dates input, #kwsf .kw-dates select{font:inherit; font-size:15px; color:var(--ink); background:var(--chip); border:1.5px solid var(--line); border-radius:10px; padding:9px 10px; min-width:0; width:100%}\n#kwsf .kw-dates input:focus-visible, #kwsf .kw-dates select:focus-visible{outline:3px solid var(--sun); outline-offset:1px}\n#kwsf .kw-dates .kw-err{font-size:13px; color:var(--accent); margin:0; min-height:1em}\n@media (max-width:560px){#kwsf .kw-dates .kw-grid{grid-template-columns:repeat(2, minmax(0,1fr))}}\n#kwsf .kw-fine{font-size:12.5px; color:var(--muted); margin:0}\n#kwsf .kw-copied{font-size:13px; color:var(--muted); align-self:center}\n@media (max-width:560px){#kwsf .kw-options, #kwsf .kw-options.kw-three{grid-template-columns:minmax(0,1fr)} #kwsf .kw-hotel{grid-template-columns:auto minmax(0,1fr)} #kwsf .kw-price{grid-column:2; text-align:left} #kwsf .kw-hotel .kw-body{grid-column:1 / -1}}\n@media (prefers-reduced-motion: reduce){#kwsf, #kwsf *{transition:none!important; scroll-behavior:auto!important}}\n";document.head.appendChild(st);}
if(!document.querySelector('link[href*="family=Epilogue"]')){var l=document.createElement("link");l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800;900&display=swap";document.head.appendChild(l);}
m.innerHTML="<div id=\"kwsf\">\n<div class=\"kw-wrap\">\n  <p class=\"kw-lede\">Seven quick questions, about a minute. I'll match you with hotels, inns and guesthouses from Key Largo to Key West that fit your group, your budget and the way you like to spend a day in the Keys.</p>\n\n  <section class=\"kw-card\" id=\"kwsf-quiz\" aria-live=\"polite\">\n    <div class=\"kw-progress\" aria-hidden=\"true\"></div>\n    <div id=\"kwsf-step\"></div>\n    <div class=\"kw-nav\">\n      <button class=\"kw-btn kw-ghost\" id=\"kwsf-back\" type=\"button\">Back</button>\n      <button class=\"kw-btn\" id=\"kwsf-next\" type=\"button\" disabled>Next</button>\n    </div>\n  </section>\n\n  <section id=\"kwsf-results\" class=\"kw-results\" hidden></section>\n</div>\n</div>";
})();

(function(){
/* ---- Your details: edit these lines ---- */
const HOST_NAME   = "Michele & Kevin";
const SITE_URL    = "https://funinkeywest.com";
const NEXT_URL    = "#whats-happening";   /* Link to the "What's Happening While I'm There?" quiz page. Leave empty to hide the box. */
const GUIDE_URL   = "https://funinkeywest.kit.com/products/custom-key-west-trip-guide";   /* $49 Custom Key West Trip Guide (Kit product) */
const SIGNUP_URL  = "https://funinkeywest.kit.com/cb52d6c3b6";   /* Kit landing page: "Key West Trip Countdown - Landing Page" */
const STAY22_AID  = "688a62a4b2767c86413b7786";   /* Your Stay22 affiliate ID. Leave empty and hotel links fall back to a Google search. */
const STAY22_CAMPAIGN = "stay_finder";
/* ---------------------------------------- */

const STEPS = [
  { key:"where", multi:false, q:"Where in the Keys?", hint:"Splitting your trip? Pick your first stop. You can take the quiz again for the next one.",
    opts:[
      {v:"kw",     t:"Key West",               s:"Old Town, Duval Street and the end of the road"},
      {v:"upper",  t:"Key Largo & Islamorada", s:"The Upper Keys: diving, fishing, bayside sunsets"},
      {v:"middle", t:"Marathon & Duck Key",    s:"The Middle Keys: beaches, families, Seven Mile Bridge"},
      {v:"lower",  t:"Lower Keys",             s:"Big Pine to Sugarloaf: quiet, wild, near Looe Key reef"},
      {v:"any",    t:"Not sure yet",           s:"Show me the best fit anywhere in the Keys"}
    ]},
  { key:"party", multi:false, q:"Who's coming to the Keys?", hint:"Pick the one that fits best.",
    opts:[
      {v:"couple",    t:"Couple",               s:"Romance, quiet pools, adults-only options"},
      {v:"family",    t:"Family with kids",     s:"Space to spread out, pools, easy logistics"},
      {v:"friends",   t:"Friends trip",         s:"Girls' or guys' getaway, room for the group"},
      {v:"celebrate", t:"Celebration",          s:"Bachelorette, birthday, anniversary, reunion"},
      {v:"solo",      t:"Just me",              s:"Walkable, social, easy to explore alone"},
      {v:"lgbtq",     t:"LGBTQ+ getaway",       s:"Gay-owned guesthouses and LGBTQ+ favorites"}
    ]},
  { key:"style", multi:false, q:"What kind of place feels like vacation?", hint:"This shapes your matches more than anything else.",
    opts:[
      {v:"resort",   t:"Full-service resort",  s:"Big pools, spa, restaurants on site"},
      {v:"boutique", t:"Boutique hotel",       s:"Stylish, smaller, walk to everything"},
      {v:"inn",      t:"Historic inn or guesthouse", s:"Conch-house charm, breakfast, local feel"},
      {v:"hotel",    t:"Simple and good value", s:"Clean, comfortable, money saved for fun"},
      {v:"any",      t:"No preference",        s:"Show me the best fit, any style"}
    ]},
  { key:"budget", multi:false, q:"What's your price point per night?", hint:"Typical room rate before taxes and resort fees.",
    opts:[
      {v:1, t:"Under $250",  s:"Smart value", big:"$"},
      {v:2, t:"$250 – $400", s:"Comfortable", big:"$$"},
      {v:3, t:"$400 – $600", s:"Upscale", big:"$$$"},
      {v:4, t:"$600+",       s:"All-out luxury", big:"$$$$"}
    ]},
  { key:"acts", multi:true, q:"What do you love to do on vacation?", hint:"Choose as many as you like.",
    opts:[
      {v:"beach",    t:"Beach & pool days",       s:"Sun, sand, swim-up drinks"},
      {v:"snorkel",  t:"Snorkeling & diving",     s:"The only living coral reef in the continental U.S."},
      {v:"fish",     t:"Fishing charters",        s:"Backcountry, flats and offshore"},
      {v:"sail",     t:"Sailing & sunset cruises", s:"Schooners, catamarans, harbor sails"},
      {v:"kayak",    t:"Kayaking & eco tours",    s:"Mangroves, paddleboards, wildlife"},
      {v:"daytrip",  t:"Dry Tortugas & day trips", s:"Fort Jefferson by ferry or seaplane"},
      {v:"night",    t:"Nightlife & live music",  s:"Duval Street, tiki bars, late nights"},
      {v:"food",     t:"Food & cocktails",        s:"Key lime pie, Cuban coffee, rum bars"},
      {v:"history",  t:"History & old Keys charm", s:"Hemingway, Truman, conch houses"},
      {v:"arts",     t:"Arts, galleries & shopping", s:"Studios, boutiques, Bahama Village"},
      {v:"spa",      t:"Spa & slow mornings",     s:"Massages, quiet pools, naps"},
      {v:"wellness", t:"Yoga & wellness",         s:"Sunrise yoga, bikes, healthy eats"},
      {v:"sunset",   t:"Sunsets & waterfront dining", s:"Mallory Square, tables on the water"}
    ]},
  { key:"musts", multi:true, optional:true, q:"Any must-haves?", hint:"Optional. Pick anything that's a dealbreaker, or skip.",
    opts:[
      {v:"walk",    t:"Walk to dinner & bars",  s:"In Key West: steps from Duval Street"},
      {v:"water",   t:"On the water",           s:"Beachfront, oceanfront or marina"},
      {v:"adults",  t:"Adults only",            s:"No kids around the pool"},
      {v:"pets",    t:"Pet-friendly",           s:"The dog is coming too"},
      {v:"kitchen", t:"Kitchen or suite space", s:"Cottages, villas, room to cook"},
      {v:"quiet",   t:"Quiet and tucked away",  s:"Away from the Duval crowds"}
    ]},
  { key:"when", multi:false, q:"When are you thinking of coming?", hint:"Pick a season, or add your exact dates below to see live prices.",
    opts:[
      {v:"peak",   t:"December – April",   s:"Peak season, warm and dry"},
      {v:"summer", t:"May – August",       s:"Hot, lively, Hemingway Days in July"},
      {v:"fall",   t:"September – November", s:"Quietest stretch, best deals, Fantasy Fest"},
      {v:"unsure", t:"Not sure yet",       s:"Just dreaming for now"}
    ]}
];

/* Hotel data.
   z  = style: resort | boutique | inn | hotel
   p  = price tiers it fits (1 <$250, 2 $250-400, 3 $400-600, 4 $600+)
   t  = activities it's good for
   f  = features: walk, water, adults, pets, kitchen, quiet
   lg = 2 for LGBTQ+ guesthouses, 1 for LGBTQ+ favorites
   men = true for men-only guesthouses
   url = optional: paste your own or affiliate link here; otherwise results link to a search
   Prices are typical nightly ranges and change a lot by season. */
/* Hotel list: loads the latest from GitHub (fikw-quiz-data/stay-finder/hotels.js); the list below is the backup. */
const HOTELS = (window.FIKW_HOTELS && window.FIKW_HOTELS.length) ? window.FIKW_HOTELS : [
  {n:"Casa Marina Key West", a:"Old Town, south-shore oceanfront", z:"resort", p:[3,4], t:["beach","snorkel","kayak","spa","history","wellness"], f:["water","pets"], range:"$400–$800",
   perks:["Largest private beach in Key West","Flagler-era 1920s landmark, now part of Hilton's Curio Collection","Two oceanfront pools and a pier"]},
  {n:"The Reach Key West", a:"Old Town, oceanfront at Simonton Street", z:"resort", p:[3,4], t:["beach","snorkel","kayak","history","spa"], f:["water","walk","pets"], range:"$400–$750",
   perks:["Private natural-sand beach","Short walk to Duval Street","Water sports right off the beach"]},
  {n:"Sunset Key Cottages", a:"Private island, a short launch ride from Old Town", z:"resort", p:[4], t:["beach","spa","sunset","food","wellness","snorkel"], f:["water","kitchen","quiet"], range:"$900+",
   perks:["Car-free private island reached by boat","One to four-bedroom cottages with full kitchens","Front-row Gulf sunsets and a white-sand beach"]},
  {n:"Pier House Resort & Spa", a:"Old Town, top of Duval Street", z:"resort", p:[3,4], t:["spa","night","sunset","beach","food"], f:["water","walk","pets"], range:"$400–$700",
   perks:["Full-service spa on site","Private beach steps from Duval Street","Waterfront bar and dining for sunset"]},
  {n:"Ocean Key Resort & Spa", a:"Mallory Square waterfront", z:"resort", p:[3,4], t:["sunset","night","spa","food","sail"], f:["water","walk","pets"], range:"$400–$700",
   perks:["Next door to the Mallory Square sunset celebration","Duval Street at your doorstep","Spa and harbor-view pool"]},
  {n:"The Marker Key West Harbor Resort", a:"Historic Seaport", z:"resort", p:[3,4], t:["sail","fish","sunset","night","food","snorkel"], f:["water","walk"], range:"$400–$700",
   perks:["On the harbor where the charter boats dock","Saltwater pool overlooking the marina","Walk to Duval Street and Mallory Square"]},
  {n:"Opal Key Resort & Marina", a:"Historic Seaport", z:"resort", p:[3], t:["sail","fish","sunset","night","snorkel","daytrip"], f:["water","walk","pets"], range:"$350–$600",
   perks:["Marina-front on the harbor","Steps from Mallory Square and the Dry Tortugas ferry","Easy access to boat charters"]},
  {n:"Hyatt Centric Key West Resort & Spa", a:"Downtown Gulf waterfront", z:"resort", p:[3], t:["sunset","spa","snorkel","sail","food"], f:["water","walk","pets"], range:"$350–$600",
   perks:["Waterfront in the middle of downtown","Spa and small private beach","Walk to Mallory Square for sunset"]},
  {n:"Southernmost Beach Resort", a:"South end of Duval Street", z:"resort", p:[3], t:["beach","night","history","snorkel"], f:["water","walk"], range:"$300–$550",
   perks:["Oceanfront with beach access","Next to the Southernmost Point buoy","Walk the length of Duval Street"]},
  {n:"Margaritaville Beach House Key West", a:"Across from Smathers Beach", z:"resort", p:[2,3], t:["beach","kayak","food"], f:["water","pets"], range:"$300–$500",
   perks:["Faces Smathers Beach, Key West's longest","All-suite rooms with space to spread out","Oceanfront pool and laid-back island vibe"]},
  {n:"Key West Marriott Beachside Hotel", a:"New Town, Gulf side", z:"resort", p:[2,3], t:["beach","kayak","spa","sunset"], f:["water","kitchen"], range:"$300–$550",
   perks:["Private beach on the Gulf","Condo-style suites with kitchens","Pools and room for the whole crew"]},
  {n:"Hilton Key West Resort & Marina", a:"Stock Island, 10 minutes from Old Town", z:"resort", p:[2,3], t:["fish","kayak","wellness","sail","beach"], f:["water","quiet"], range:"$250–$450",
   perks:["Six saltwater pools on 20 waterfront acres","Free paddleboards, kayaks, bikes and yoga","Full marina for fishing charters"]},
  {n:"Parrot Key Hotel & Villas", a:"New Town, North Roosevelt Blvd", z:"resort", p:[2,3], t:["beach","kayak"], f:["kitchen"], range:"$250–$500",
   perks:["Four pools spread across the property","Villas with full kitchens for families and groups","Free parking and easy drive into Old Town"]},
  {n:"DoubleTree by Hilton Grand Key Resort", a:"New Town, near the airport", z:"resort", p:[1,2], t:["beach","spa"], f:["pets"], range:"$170–$330",
   perks:["Big resort pool kids love","Short drive to Smathers Beach","Roomy rooms and pet-friendly"]},

  {n:"La Concha Key West", a:"Right on Duval Street", z:"boutique", p:[2,3], t:["night","history","sunset","food"], f:["walk"], lg:1, range:"$250–$450",
   perks:["In the middle of Duval Street","Rooftop bar with island-wide sunset views","Historic 1920s hotel"]},
  {n:"The Saint Hotel Key West", a:"Old Town, just off Duval", z:"boutique", p:[3], t:["night","food","arts","spa"], f:["walk"], range:"$300–$500",
   perks:["Moody, design-forward boutique hotel","Courtyard pool and cocktail bar","Steps to Duval Street"]},
  {n:"Kimpton Winslow's Bungalows", a:"Old Town, two blocks off Duval", z:"boutique", p:[2,3], t:["history","night","food"], f:["walk"], range:"$250–$450",
   perks:["Conch-style bungalows around lush courtyards","Welcomes couples, families and groups","Walk to Duval and the seaport"]},
  {n:"Kimpton Ella's Cottages", a:"Old Town, Simonton Street", z:"boutique", p:[2,3], t:["history","arts"], f:["walk","quiet"], range:"$250–$450",
   perks:["Leafy cottage compound, great for groups","Peaceful pool hidden in greenery","Walk to Duval in minutes"]},
  {n:"Kimpton Lighthouse Hotel", a:"Old Town, across from the Hemingway Home", z:"boutique", p:[2,3], t:["history","arts"], f:["walk"], range:"$250–$450",
   perks:["Across the street from the Hemingway Home and the lighthouse","Pool and tropical gardens","Quiet end of Duval, still walkable"]},
  {n:"Kimpton Ridley House", a:"Old Town, Caroline Street", z:"boutique", p:[3], t:["history","wellness","food","spa"], f:["walk","adults","quiet"], range:"$300–$500",
   perks:["Adults-only","Intimate front-porch feel, made for honeymooners","Near the Historic Seaport and Duval"]},
  {n:"Kimpton Fitch Lodge", a:"Old Town, Eaton Street", z:"boutique", p:[2], t:["history","wellness"], f:["walk","quiet"], range:"$200–$400",
   perks:["Small, quiet retreat on a residential street","Pool and porches","Walk or bike to Duval"]},
  {n:"The Perry Hotel & Marina", a:"Stock Island, 10 minutes from Old Town", z:"boutique", p:[2], t:["fish","food","sail","kayak"], f:["water","pets","quiet"], range:"$220–$400",
   perks:["Full-service marina for fishing charters","Quieter, local-feel Stock Island","Waterfront dining and pet-friendly"]},
  {n:"The Gates Hotel Key West", a:"Entrance to Key West, North Roosevelt Blvd", z:"boutique", p:[2], t:["food","night","beach"], f:["pets"], range:"$220–$400",
   perks:["Lively pool scene with a bar and food truck","Pet-friendly","Easy parking and a quick drive into Old Town"]},
  {n:"The Laureate Key West", a:"New Town", z:"boutique", p:[1,2], t:["wellness","beach"], f:["pets","quiet"], range:"$170–$320",
   perks:["Calm, modern rooms at a fair price","Pool with cabanas","Pet-friendly"]},
  {n:"24 North Hotel", a:"New Town, North Roosevelt Blvd", z:"boutique", p:[1,2], t:["beach","food"], f:[], range:"$180–$350",
   perks:["Big pool and poolside bar","Good value for Key West","Easy drive or ride into Old Town"]},
  {n:"Orchid Key Inn", a:"Upper Duval Street", z:"boutique", p:[2], t:["night","wellness"], f:["walk","adults"], lg:1, range:"$200–$380",
   perks:["Adults-only","Pool and hot tub","Walk to Duval bars and restaurants"]},
  {n:"H2O Suites", a:"Old Town, near Duval", z:"boutique", p:[3], t:["spa","night","wellness"], f:["walk","adults"], range:"$350–$600",
   perks:["Adults-only suites","Some suites with private plunge pools","Walk to Duval Street"]},
  {n:"Silver Palms Inn", a:"Old Town, Truman Avenue", z:"boutique", p:[2], t:["night","history"], f:["walk"], lg:1, range:"$220–$380",
   perks:["Bright boutique rooms around a pool","Walk to Duval Street","Quiet side street, still close to the action"]},
  {n:"La Te Da", a:"Duval Street", z:"boutique", p:[2], t:["night","food","arts"], f:["walk"], lg:1, range:"$200–$380",
   perks:["Key West's famous cabaret stage","Poolside bar and restaurant on Duval","An LGBTQ+ institution"]},
  {n:"Santa Maria Suites", a:"Old Town, near South Beach", z:"boutique", p:[3], t:["beach","spa"], f:["walk","kitchen"], range:"$350–$600",
   perks:["Two and three-bedroom suites with full kitchens","Sleek pool courtyard","Steps to South Beach and Duval"]},
  {n:"Banyan Resort", a:"Old Town, Whitehead Street", z:"boutique", p:[2,3], t:["history","beach"], f:["walk","kitchen"], range:"$250–$450",
   perks:["Suites with kitchens in restored historic homes","Pools under a giant banyan tree","Walk to Duval and Mallory Square"]},

  {n:"The Marquesa Hotel", a:"Old Town historic district", z:"inn", p:[3], t:["history","food","spa","arts"], f:["walk","adults"], range:"$350–$550",
   perks:["Adults-only","Restored 1880s homes in the heart of Old Town","Two garden pools and a well-loved restaurant"]},
  {n:"The Gardens Hotel", a:"Old Town", z:"inn", p:[3], t:["spa","history","wellness","arts"], f:["walk","adults","quiet"], lg:1, range:"$350–$600",
   perks:["Adults-only retreat","Lush tropical gardens and pool","Short walk to Duval Street"]},
  {n:"Southernmost House", a:"Oceanfront at the south end of Duval", z:"inn", p:[3], t:["beach","history","sunset"], f:["water","walk"], range:"$350–$600",
   perks:["Victorian mansion on the ocean","Oceanfront pool and bar","Next to the Southernmost Point"]},
  {n:"Island City House Hotel", a:"Old Town, Eaton Street", z:"inn", p:[2,3], t:["history","arts"], f:["walk","kitchen","quiet"], range:"$250–$450",
   perks:["Three historic houses around a garden","Suites with kitchens, great for families","Breakfast included"]},
  {n:"Curry Mansion Inn", a:"Old Town, Caroline Street", z:"inn", p:[2,3], t:["history","arts"], f:["walk","pets"], range:"$250–$450",
   perks:["Victorian mansion steps from Duval","Breakfast and evening happy hour","Pet-friendly rooms"]},
  {n:"Heron House", a:"Old Town, Simonton Street", z:"inn", p:[2,3], t:["history","wellness"], f:["walk","adults","quiet"], range:"$250–$450",
   perks:["Adults-only","Orchid-filled gardens and pool","One block from Duval"]},
  {n:"Simonton Court", a:"Old Town", z:"inn", p:[2,3], t:["history","wellness"], f:["walk","adults","quiet"], range:"$250–$450",
   perks:["Adults-only","Four pools tucked among cottages","Hidden lane just off Duval"]},
  {n:"Mermaid & the Alligator", a:"Old Town, Truman Avenue", z:"inn", p:[2,3], t:["history","wellness","food"], f:["walk","quiet"], range:"$250–$400",
   perks:["Intimate 1904 Queen Anne inn","Gourmet breakfast","Garden pool and hammocks"]},
  {n:"Weatherstation Inn", a:"Truman Annex, Old Town", z:"inn", p:[2,3], t:["history"], f:["walk","quiet"], range:"$250–$400",
   perks:["Inside the gated Truman Annex","Historic 1912 building","Near the Truman Little White House"]},
  {n:"Avalon Bed & Breakfast", a:"Old Town, upper Duval", z:"inn", p:[2], t:["history"], f:["walk","adults"], range:"$200–$350",
   perks:["Adults-only","Restored Victorian with porches","Pool and breakfast included"]},
  {n:"La Pensione Inn", a:"Old Town, Truman Avenue", z:"inn", p:[2], t:["history","arts"], f:["walk","adults"], range:"$200–$350",
   perks:["Adults-only","1891 cigar-maker's home with wraparound porches","Breakfast included"]},
  {n:"Ambrosia Key West", a:"Old Town, near the seaport", z:"inn", p:[2], t:["history","arts"], f:["walk","pets"], range:"$220–$400",
   perks:["Pet-friendly tropical compound","Pools and garden suites","Walk to Duval and the seaport"]},
  {n:"Key Lime Inn", a:"Old Town, Truman Avenue", z:"inn", p:[2], t:["history"], f:["walk"], range:"$200–$350",
   perks:["Cottages under shady palms","Pool and continental breakfast","Walk to Duval Street"]},
  {n:"Eden House", a:"Old Town, Fleming Street", z:"inn", p:[1,2], t:["history","night"], f:["walk"], range:"$200–$350",
   perks:["Classic, unfussy Old Town hotel","Pool, hammocks and a free happy hour","One block from Duval"]},
  {n:"Douglas House", a:"Old Town, Fleming Street", z:"inn", p:[1,2], t:["night","history"], f:["walk","pets"], lg:1, range:"$180–$320",
   perks:["Spacious rooms in historic houses","Two pools and a hot tub","Pet-friendly and a block from Duval"]},
  {n:"The Palms Hotel", a:"Old Town, White Street", z:"inn", p:[1,2], t:["history"], f:["walk","pets"], range:"$180–$320",
   perks:["1889 plantation-style home","Big pool and tiki bar","Pet-friendly"]},
  {n:"Alexander's Guesthouse", a:"Old Town, Fleming Street", z:"inn", p:[2], t:["night","history","wellness"], f:["walk","adults"], lg:2, range:"$200–$380",
   perks:["Adults-only LGBTQ+ guesthouse","Pool, sundecks and daily happy hour","Short walk to Duval's gay bars"]},
  {n:"Island House", a:"Old Town, William Street", z:"inn", p:[2,3], t:["night","wellness","spa"], f:["walk","adults"], lg:2, men:true, range:"$250–$450",
   note:"Men only, clothing optional",
   perks:["Iconic gay resort with pool, gym and café","On-site spa services","Walk to Duval Street"]},
  {n:"Equator Resort", a:"Old Town, Fleming Street", z:"inn", p:[2,3], t:["night","wellness"], f:["walk","adults"], lg:2, men:true, range:"$250–$450",
   note:"Men only, clothing optional",
   perks:["Popular men's resort","Pool and hot tub","One block from Duval"]},
  {n:"New Orleans House", a:"On Duval Street", z:"inn", p:[1,2], t:["night"], f:["walk","adults"], lg:2, men:true, range:"$150–$300",
   note:"Men only, clothing optional",
   perks:["Above the Duval gay bar scene","Rooftop sundeck and pool","Budget-friendly"]},

  {n:"Courtyard Key West Waterfront", a:"New Town waterfront", z:"hotel", p:[2], t:["sunset","kayak","fish"], f:["water"], range:"$220–$400",
   perks:["On the water with sunset views","Pool and outdoor bar","Easy parking"]},
  {n:"Hampton Inn Key West", a:"New Town waterfront", z:"hotel", p:[1,2], t:["sunset","beach"], f:["water"], range:"$170–$330",
   perks:["Free hot breakfast","Waterfront pool and tiki bar","Good value for families"]},
  {n:"Hilton Garden Inn Key West", a:"New Town, The Keys Collection", z:"hotel", p:[1,2], t:["beach"], f:[], range:"$180–$350",
   perks:["Shares pools with sister hotels in The Keys Collection","Reliable rooms at fair rates","Easy drive into Old Town"]},
  {n:"Fairfield Inn & Suites Key West", a:"New Town, The Keys Collection", z:"hotel", p:[1,2], t:["beach"], f:[], range:"$170–$330",
   perks:["Free breakfast","Shared resort-style pools","Easy drive into Old Town"]},
  {n:"Blue Flamingo Resort", a:"New Town, North Roosevelt Blvd", z:"hotel", p:[1], t:["beach","night"], f:[], range:"$150–$280",
   perks:["Reopened in 2025 after a full makeover","Resort-style pools","Budget-friendly rates"]},
  {n:"Havana Cabana Key West", a:"New Town, North Roosevelt Blvd", z:"hotel", p:[1], t:["beach","night","food"], f:["pets"], range:"$150–$280",
   perks:["Lively, colorful pool scene","Great value for Key West","Pet-friendly with Cuban-inspired style"]},
  /* ===== UPPER KEYS: Key Largo ===== */
  {n:"Bungalows Key Largo", a:"Key Largo, on Florida Bay", r:"upper", town:"Key Largo", z:"resort", p:[4], t:["spa","sunset","kayak","food","wellness"], f:["water","adults","quiet"], range:"$1,000+ all-inclusive",
   perks:["Adults-only and all-inclusive","Private bungalows on the water","Sunset over Florida Bay every night"]},
  {n:"Playa Largo Resort & Spa, Autograph Collection", a:"Key Largo, bayside", r:"upper", town:"Key Largo", z:"resort", p:[3,4], t:["beach","spa","sunset","kayak","snorkel"], f:["water"], range:"$400–$750",
   perks:["Private bayside beach","Full-service spa","Front-row Gulf-side sunsets"]},
  {n:"Baker's Cay Resort Key Largo, Curio Collection by Hilton", a:"Key Largo, bayside", r:"upper", town:"Key Largo", z:"resort", p:[3], t:["beach","kayak","sunset","snorkel"], f:["water"], range:"$350–$600",
   perks:["Waterfront pools and a small beach","Kayaks and paddleboards on the bay","Easy drive to John Pennekamp"]},
  {n:"Kona Kai Resort, Gallery & Botanic Gardens", a:"Key Largo, bayside", r:"upper", town:"Key Largo", z:"boutique", p:[3], t:["arts","kayak","sunset","wellness"], f:["water","adults","quiet"], range:"$350–$600",
   perks:["Adults-only hideaway","Botanic gardens and an art gallery on site","Quiet bayside beach for sunset"]},
  {n:"Key Largo Bay Marriott Beach Resort", a:"Key Largo, bayside", r:"upper", town:"Key Largo", z:"resort", p:[2,3], t:["beach","snorkel","sail","sunset"], f:["water"], range:"$250–$450",
   perks:["Bayside beach and pool","Snorkel and dive trips nearby","Sunset views over the bay"]},
  {n:"Ocean Pointe Suites at Key Largo", a:"Tavernier, oceanside", r:"upper", town:"Tavernier", z:"hotel", p:[2], t:["beach","kayak","fish"], f:["water","kitchen","quiet"], range:"$220–$400",
   perks:["Suites with room to spread out","Oceanfront pool and marina","Halfway between Key Largo and Islamorada"]},
  {n:"Amoray Dive Resort", a:"Key Largo, bayside", r:"upper", town:"Key Largo", z:"hotel", p:[1,2], t:["snorkel","beach"], f:["water"], range:"$150–$300",
   perks:["Built for divers and snorkelers","Small private beach on the bay","Good value near John Pennekamp"]},
  {n:"The Pelican Key Largo Cottages", a:"Key Largo, bayside", r:"upper", town:"Key Largo", z:"inn", p:[1,2], t:["beach","kayak","fish"], f:["water","kitchen"], range:"$150–$300",
   perks:["Old-Keys cottages on the water","A little beach on the bay","Easy, relaxed and affordable"]},
  {n:"Drift Hotel", a:"Key Largo", r:"upper", town:"Key Largo", z:"boutique", p:[1], t:["food","snorkel"], f:[], range:"$150–$280",
   perks:["Retro motel with a fresh redo","Great value base for the Upper Keys","Close to Key Largo's dive shops"]},
  {n:"Jules' Undersea Lodge", a:"Key Largo, underwater lagoon", r:"upper", town:"Key Largo", z:"boutique", p:[4], t:["snorkel"], f:["water"], range:"$700+",
   perks:["You sleep underwater, for real","Scuba to your room (certified divers, or take the short course)","A once-in-a-lifetime story"], note:"Check the dive requirements before you book"},

  /* ===== UPPER KEYS: Islamorada ===== */
  {n:"Cheeca Lodge & Spa", a:"Islamorada, oceanfront", r:"upper", town:"Islamorada", z:"resort", p:[4], t:["beach","spa","fish","snorkel","kayak","wellness"], f:["water"], range:"$600–$1,100",
   perks:["Classic Islamorada luxury on the ocean","Long fishing pier and a full spa","Beach, pools and water sports"]},
  {n:"The Moorings Village", a:"Islamorada, oceanfront", r:"upper", town:"Islamorada", z:"inn", p:[4], t:["beach","spa","wellness"], f:["water","kitchen","quiet"], range:"$700+",
   perks:["Private cottages in a palm grove","A quiet, uncrowded beach","Feels like a private estate"]},
  {n:"Casa Morada", a:"Islamorada, bayside", r:"upper", town:"Islamorada", z:"boutique", p:[3,4], t:["sunset","wellness","kayak"], f:["water","quiet"], range:"$450–$800",
   perks:["Stylish boutique on the bay","Saltwater pool and sunset views","Small and calm"]},
  {n:"Three Waters Resort & Marina", a:"Islamorada, oceanfront", r:"upper", town:"Islamorada", z:"resort", p:[3], t:["fish","sail","snorkel","night","food","beach"], f:["water","pets"], range:"$350–$650",
   perks:["15 oceanfront acres (the old Holiday Isle)","Tiki bar that invented the Rum Runner","Adults-focused Cove section, plus pools for families"]},
  {n:"Amara Cay Resort", a:"Islamorada, oceanfront", r:"upper", town:"Islamorada", z:"resort", p:[2,3], t:["fish","beach","kayak","sunset"], f:["water"], range:"$300–$500",
   perks:["Oceanfront pool and fire pits","\"Fish Like a Local\" classes","Sister resorts nearby share the fun"]},
  {n:"La Siesta Resort & Villas", a:"Islamorada, oceanfront", r:"upper", town:"Islamorada", z:"resort", p:[2,3], t:["kayak","beach","fish"], f:["water","kitchen"], range:"$280–$480",
   perks:["Suites and villas with room to cook","Pool and paddle craft on site","Great for families and groups"]},
  {n:"Islander Resort", a:"Islamorada, oceanfront", r:"upper", town:"Islamorada", z:"resort", p:[3], t:["beach","fish","sail","food"], f:["water"], range:"$350–$550",
   perks:["Beach, pools and palm-shaded cabanas","Boat taxi to sister restaurants","Classic Islamorada resort feel"]},
  {n:"Chesapeake Beach Resort", a:"Islamorada, oceanfront", r:"upper", town:"Islamorada", z:"hotel", p:[2], t:["beach","snorkel"], f:["water"], range:"$230–$400",
   perks:["Oceanfront with a lagoon and beach","Family friendly and relaxed","Easy on the budget for Islamorada"]},
  {n:"Drop Anchor Resort & Marina", a:"Islamorada, oceanfront", r:"upper", town:"Islamorada", z:"inn", p:[1,2], t:["fish","beach","kayak"], f:["water","kitchen","quiet"], range:"$200–$350",
   perks:["Small, old-Keys charm","Beach and dock on the ocean","Many rooms with kitchens"]},
  {n:"Ragged Edge Resort & Marina", a:"Islamorada, oceanfront", r:"upper", town:"Islamorada", z:"inn", p:[1,2], t:["fish","kayak"], f:["water","kitchen","quiet"], range:"$180–$330",
   perks:["Quiet, no-frills waterfront","Great for anglers","Many units with kitchens"]},
  {n:"Breezy Palms Resort", a:"Islamorada, oceanfront", r:"upper", town:"Islamorada", z:"inn", p:[2], t:["beach","fish","kayak"], f:["water","kitchen"], range:"$220–$380",
   perks:["Cottages and suites with kitchens","Small beach and pool","Laid-back and family friendly"]},

  /* ===== MIDDLE KEYS: Long Key, Duck Key, Marathon ===== */
  {n:"Lime Tree Bay Resort", a:"Long Key, bayside", r:"middle", town:"Long Key", z:"inn", p:[1,2], t:["kayak","sunset","fish"], f:["water","quiet"], range:"$180–$330",
   perks:["Hammocks and sunsets on the bay","Quiet, between Islamorada and Marathon","Great value"]},
  {n:"Hawks Cay Resort", a:"Duck Key, near Marathon", r:"middle", town:"Duck Key", z:"resort", p:[3,4], t:["snorkel","fish","sail","kayak","beach","spa"], f:["water","kitchen"], range:"$400–$750",
   perks:["Saltwater lagoon, pools and a marina","Villas with kitchens for families","Dolphin experiences on site"]},
  {n:"Isla Bella Beach Resort & Spa", a:"Marathon, Knights Key", r:"middle", town:"Marathon", z:"resort", p:[3,4], t:["beach","spa","kayak","fish","snorkel","sunset"], f:["water","kitchen"], range:"$350–$650",
   perks:["Every room faces the ocean","Five oceanfront pools and a private beach","Next to the Seven Mile Bridge"]},
  {n:"Tranquility Bay Beach House Resort", a:"Marathon, Gulf side", r:"middle", town:"Marathon", z:"resort", p:[3], t:["beach","kayak","sunset"], f:["water","kitchen","quiet"], range:"$330–$600",
   perks:["Two- and three-bedroom beach houses with full kitchens","Long private beach","Three pools, including one for adults only"]},
  {n:"Faro Blanco Resort & Yacht Club, Curio Collection by Hilton", a:"Marathon, bayside marina", r:"middle", town:"Marathon", z:"resort", p:[3], t:["sail","fish","sunset","food"], f:["water"], range:"$350–$550",
   perks:["Historic lighthouse on the marina","Infinity pool and waterfront dining","Sunset over the bay"]},
  {n:"Courtyard by Marriott Faro Blanco Resort", a:"Marathon, bayside", r:"middle", town:"Marathon", z:"hotel", p:[2], t:["sail","fish","sunset"], f:["water"], range:"$230–$400",
   perks:["On the Faro Blanco waterfront","Easy, reliable and well run","Good base for the middle Keys"]},
  {n:"Glunz Ocean Beach Hotel & Resort", a:"Marathon, oceanfront", r:"middle", town:"Marathon", z:"inn", p:[2], t:["beach","snorkel"], f:["water","kitchen","quiet"], range:"$230–$400",
   perks:["Small and personal on the ocean","Rooms with kitchens","Private beach and pool"]},
  {n:"Knight's Key Suites", a:"Marathon, by the Seven Mile Bridge", r:"middle", town:"Marathon", z:"hotel", p:[1,2], t:["fish","sunset"], f:["water"], range:"$170–$320",
   perks:["Suites at the start of the Seven Mile Bridge","Good value","Easy for day trips both ways"]},
  {n:"Hampton Inn Marathon – Florida Keys", a:"Marathon, bayside", r:"middle", town:"Marathon", z:"hotel", p:[1,2], t:["sunset","fish"], f:["water"], range:"$170–$330",
   perks:["Bayside pool and dock","Free breakfast","Reliable and family friendly"]},

  /* ===== LOWER KEYS ===== */
  {n:"Little Palm Island Resort & Spa", a:"Private island off Little Torch Key", r:"lower", town:"Little Torch Key", z:"resort", p:[4], t:["snorkel","spa","wellness","sunset","fish"], f:["water","adults","quiet"], range:"$1,000+",
   perks:["Adults-only private island, by boat or seaplane","Thatched bungalows and a lagoon pool","Snorkel trips to Looe Key reef"]},
  {n:"Sugarloaf Key Hotel at KOA Resort", a:"Summerland Key, oceanfront", r:"lower", town:"Summerland Key", z:"hotel", p:[1,2], t:["snorkel","kayak","fish","beach"], f:["water","kitchen","pets"], range:"$180–$350",
   perks:["Private beach, marina and pool","Paddleboards and snorkel gear on hand","About 30 minutes to Key West"]},
  {n:"Parmer's Resort", a:"Little Torch Key, waterfront", r:"lower", town:"Little Torch Key", z:"inn", p:[1,2], t:["fish","kayak","snorkel"], f:["water","quiet"], range:"$160–$300",
   perks:["Old-Keys cottages on the water","Close to Bahia Honda and Looe Key","Quiet and affordable"]},
  {n:"Looe Key Reef Resort & Dive Center", a:"Ramrod Key", r:"lower", town:"Ramrod Key", z:"hotel", p:[1], t:["snorkel","night"], f:["water"], range:"$140–$260",
   perks:["Dive shop on site for Looe Key trips","Lively tiki bar","Budget-friendly base for reef days"]}
];

const MUST_LABEL = {walk:"Walkable", water:"On the water", adults:"Adults only", pets:"Pet-friendly", kitchen:"Kitchen or suite", quiet:"Quiet"};
const STYLE_LABEL = {resort:"Resort", boutique:"Boutique hotel", inn:"Historic inn", hotel:"Good value"};

const REGION = {kw:"Key West", upper:"Key Largo & Islamorada", middle:"Marathon & Duck Key", lower:"the Lower Keys", any:"the Keys"};
const REGION_SHORT = {kw:"Key West", upper:"Upper Keys", middle:"Middle Keys", lower:"Lower Keys"};
const regionOf = h => h.r || "kw";
const inRegion = h => state.where==="any" || !state.where || regionOf(h)===state.where || (state.where==="lower" && /Stock Island/.test(h.a));
const state = {step:0, where:null, party:null, style:null, budget:null, acts:[], musts:[], when:null, checkin:"", checkout:"", adults:2, children:0};
const root = document.getElementById("kwsf");
const $ = s => root.querySelector(s);
const has = (h,f) => h.f.includes(f);

/* progress bar */
$(".kw-progress").innerHTML = STEPS.map(()=>"<span></span>").join("");

function renderStep(){
  const S = STEPS[state.step];
  const opts = S.opts.filter(o=>!(S.key==="musts" && o.v==="adults" && state.party==="family"));
  if(S.key==="musts" && state.party==="family") state.musts = state.musts.filter(m=>m!=="adults");
  root.querySelectorAll(".kw-progress span").forEach((el,i)=>el.classList.toggle("kw-on", i<=state.step));
  const cls = "kw-options";
  $("#kwsf-step").innerHTML = `
    <p class="kw-stepnum">Step ${state.step+1} of ${STEPS.length}</p>
    <h2>${S.q}</h2>
    <p class="kw-hint">${S.hint}</p>
    <div class="${cls}" role="group" aria-label="${S.q}">
      ${opts.map((o,i)=>`<button type="button" class="kw-opt" id="opt-${S.key}-${i}" data-v="${o.v}" aria-pressed="${isOn(S,o.v)}">
        ${o.big?`<span class="kw-big">${o.big}</span>`:""}<b>${o.t}</b><small>${o.s}</small></button>`).join("")}
    </div>`;
  if(S.key==="when") renderDates();
  $("#kwsf-step").querySelectorAll(".kw-opt").forEach(b=>b.addEventListener("click",()=>choose(S,b.dataset.v)));
  $("#kwsf-back").style.visibility = state.step===0 ? "hidden" : "visible";
  updateNext();
}
function isOn(S,v){
  if(S.multi) return state[S.key].includes(v);
  return String(state[S.key])===String(v);
}
function choose(S,v){
  if(S.multi){
    const arr = state[S.key];
    state[S.key] = arr.includes(v) ? arr.filter(x=>x!==v) : [...arr, v];
  } else {
    state[S.key] = S.key==="budget" ? Number(v) : v;
  }
  $("#kwsf-step").querySelectorAll(".kw-opt").forEach(b=>b.setAttribute("aria-pressed", isOn(S,b.dataset.v)));
  updateNext();
}
function updateNext(){
  const S = STEPS[state.step];
  const last = state.step===STEPS.length-1;
  const empty = S.multi ? state[S.key].length===0 : (state[S.key]===null && !(S.key==="when" && datesOk()));
  $("#kwsf-next").disabled = empty && !S.optional;
  $("#kwsf-next").textContent = last ? "See my matches" : (S.optional && empty ? "Skip" : "Next");
}

/* ---------- scoring ---------- */
function score(h, relaxBudget, relaxMusts){
  const why = [];
  const P = state.party;
  /* hard filters */
  if(P==="family" && has(h,"adults")) return null;
  if(h.men && P!=="lgbtq") return null;
  if(!relaxMusts && state.musts.includes("adults") && !has(h,"adults")) return null;
  if(!relaxMusts && state.musts.includes("pets") && !has(h,"pets")) return null;
  if(!inRegion(h)) return null;

  let s = 0;
  /* budget */
  if(h.p.includes(state.budget)){ s += 8; why.push("In your budget"); }
  else if(h.p.some(t=>Math.abs(t-state.budget)===1)){ s += 2; }
  else if(!relaxBudget) return null;

  /* style */
  if(state.style!=="any" && h.z===state.style){ s += 5; why.push(STYLE_LABEL[h.z]); }
  if(state.where==="any" && state.acts.includes("night") && regionOf(h)==="kw") s += 2;

  /* who's coming */
  if(P==="couple"){ if(has(h,"adults")){ s+=3; why.push("Adults only"); } if(has(h,"quiet")) s+=1; if(h.z==="inn"||h.z==="boutique") s+=1; }
  if(P==="family"){ if(has(h,"kitchen")){ s+=3; why.push("Room to spread out"); } if(h.z==="resort"||h.z==="hotel") s+=2; if(h.t.includes("beach")) s+=1; }
  if(P==="friends"){ if(has(h,"kitchen")){ s+=3; why.push("Space for the group"); } if(h.t.includes("night")) s+=1; if(has(h,"walk")) s+=1; }
  if(P==="celebrate"){ if(h.t.includes("night")){ s+=2; why.push("Party-ready"); } if(has(h,"walk")) s+=2; if(h.z==="resort") s+=1; }
  if(P==="solo"){ if(has(h,"walk")){ s+=3; why.push("Easy to explore on foot"); } if(h.z==="inn"||h.z==="boutique") s+=1; }
  if(P==="lgbtq"){ if(h.lg===2){ s+=8; why.push("LGBTQ+ guesthouse"); } else if(h.lg===1){ s+=3; why.push("LGBTQ+ favorite"); } }
  else if(h.lg===2) s-=2;

  /* activities */
  const hits = state.acts.filter(a=>h.t.includes(a));
  s += hits.length*2;
  hits.slice(0,2).forEach(a=>why.push(STEPS.find(x=>x.key==="acts").opts.find(o=>o.v===a).t));

  /* must-haves */
  state.musts.forEach(m=>{
    if((m==="adults"||m==="pets") && !has(h,m)) return;
    if(m==="adults"||m==="pets"){ s+=2; why.push(MUST_LABEL[m]); return; }
    if(has(h,m)){ s+=4; why.push(MUST_LABEL[m]); } else s-=3;
  });

  return {h, s, why:[...new Set(why)].slice(0,5)};
}

function rank(){
  let list = HOTELS.map(h=>score(h,false,false)).filter(Boolean);
  if(list.length<6){
    const extra = HOTELS.map(h=>score(h,true,false)).filter(Boolean).filter(x=>!list.some(y=>y.h===x.h));
    list = list.concat(extra.map(x=>({...x, s:x.s-6})));
  }
  if(list.length<3){
    const extra = HOTELS.map(h=>score(h,true,true)).filter(Boolean).filter(x=>!list.some(y=>y.h===x.h));
    list = list.concat(extra.map(x=>({...x, s:x.s-12})));
  }
  return list.sort((a,b)=>b.s-a.s || a.h.n.localeCompare(b.h.n));
}

const SEASON = {
  peak:{t:"Book early for December to April.", d:"This is peak season. Expect the top end of these ranges, minimum stays on weekends, and higher rates around holidays and spring break."},
  summer:{t:"Summer brings fair rates and hot days.", d:"Prices ease from May through August. July brings Hemingway Days and the Lobster mini-season, which fill rooms fast."},
  fall:{t:"Fall is the best deal of the year.", d:"September through November is the quietest and cheapest stretch. Fantasy Fest in late October is the big exception, when rates jump and many places book out. It's also hurricane season, so look at travel insurance."},
  unsure:{t:"Rates change a lot by season.", d:"December to April is the priciest. September to early November is the best value, except during Fantasy Fest in late October."}
};

function nextLink(){
  const q = new URLSearchParams();
  if(state.party) q.set("who", state.party);
  if(state.where && state.where!=="any") q.set("area", state.where);
  if(datesOk()){ q.set("arrive", state.checkin); q.set("depart", state.checkout); }
  const qs = q.toString();
  if(NEXT_URL.startsWith("#")) return NEXT_URL;
  const [base, hash] = NEXT_URL.split("#");
  return base + (qs ? (base.includes("?") ? "&" : "?") + qs : "") + (hash ? "#" + hash : "");
}
function lookUrl(h){
  if(h.url) return h.url;
  const town = h.town || "Key West";
  if(!STAY22_AID) return "https://www.google.com/search?q=" + encodeURIComponent(h.n + " " + town);
  const q = new URLSearchParams({aid:STAY22_AID, hotelname:h.n, address:town + ", FL", campaign:STAY22_CAMPAIGN, currency:"USD"});
  if(datesOk()){ q.set("checkin",state.checkin); q.set("checkout",state.checkout); }
  q.set("adults", String(state.adults));
  if(state.children>0) q.set("children", String(state.children));
  return "https://www.stay22.com/allez/roam?" + q.toString();
}
function lookLabel(){ return datesOk() ? "Prices for your dates" : "See photos & prices"; }

/* ---------- travel dates (optional) ---------- */
function datesOk(){
  return /^\d{4}-\d{2}-\d{2}$/.test(state.checkin) && /^\d{4}-\d{2}-\d{2}$/.test(state.checkout) && state.checkout > state.checkin;
}
function seasonFrom(d){
  const m = Number(d.slice(5,7));
  return (m===12 || m<=4) ? "peak" : (m<=8 ? "summer" : "fall");
}
function renderDates(){
  const today = new Date().toISOString().slice(0,10);
  const opt = (n,sel)=>Array.from({length:n.max-n.min+1},(_,i)=>i+n.min).map(v=>`<option value="${v}"${v===sel?" selected":""}>${v}</option>`).join("");
  const box = document.createElement("div");
  box.className = "kw-dates";
  box.innerHTML = `
    <b>Know your dates? (optional)</b>
    <div class="kw-grid">
      <label for="kwsf-ci">Check-in<input type="date" id="kwsf-ci" min="${today}" value="${state.checkin}"></label>
      <label for="kwsf-co">Check-out<input type="date" id="kwsf-co" min="${today}" value="${state.checkout}"></label>
      <label for="kwsf-ad">Adults<select id="kwsf-ad">${opt({min:1,max:10},state.adults)}</select></label>
      <label for="kwsf-ch">Kids<select id="kwsf-ch">${opt({min:0,max:6},state.children)}</select></label>
    </div>
    <p class="kw-err" id="kwsf-dateerr" aria-live="polite"></p>`;
  $("#kwsf-step").appendChild(box);
  const sync = ()=>{
    state.checkin = $("#kwsf-ci").value; state.checkout = $("#kwsf-co").value;
    state.adults = Number($("#kwsf-ad").value); state.children = Number($("#kwsf-ch").value);
    if(state.checkin && state.checkout && !datesOk()) $("#kwsf-dateerr").textContent = "Check-out needs to be after check-in.";
    else $("#kwsf-dateerr").textContent = "";
    if(state.checkin && !state.checkout) $("#kwsf-co").min = state.checkin;
    updateNext();
  };
  ["kwsf-ci","kwsf-co","kwsf-ad","kwsf-ch"].forEach(id=>$("#"+id).addEventListener("change", sync));
  $("#kwsf-ci").addEventListener("input", sync); $("#kwsf-co").addEventListener("input", sync);
}
function fmtDate(d){
  const [y,m,day] = d.split("-").map(Number);
  return new Date(y,m-1,day).toLocaleDateString("en-US",{month:"short", day:"numeric"});
}

function labelsSummary(){
  const lab = (k,v)=>STEPS.find(s=>s.key===k).opts.find(o=>String(o.v)===String(v)).t;
  return [lab("where",state.where||"any"), lab("party",state.party), lab("style",state.style), lab("budget",state.budget),
    ...state.acts.map(a=>lab("acts",a)), ...state.musts.map(m=>lab("musts",m)),
    datesOk() ? `${fmtDate(state.checkin)} – ${fmtDate(state.checkout)} · ${state.adults} adult${state.adults>1?"s":""}${state.children?`, ${state.children} kid${state.children>1?"s":""}`:""}` : lab("when",state.when||"unsure")];
}

let lastRanked = [];
function showResults(){
  const ranked = rank();
  lastRanked = ranked;
  const top = ranked.slice(0,3), more = ranked.slice(3,8);
  const seasonKey = datesOk() ? seasonFrom(state.checkin) : (state.when || "unsure");
  const se = SEASON[seasonKey];
  const el = $("#kwsf-results");
  el.innerHTML = `
    <div class="kw-res-head">
      <div>
        <div class="kw-eyebrow">Your matches</div>
        <h2 style="font-size:28px;margin:2px 0 0">Where to stay in ${REGION[state.where||"any"]}</h2>
        <div class="kw-summary">${labelsSummary().map(t=>`<span class="kw-tag">${t}</span>`).join("")}</div>
      </div>
      <button class="kw-btn kw-restart" id="kwsf-restart" data-restart type="button"><span aria-hidden="true">↺</span> Start over</button>
    </div>
    ${top.map((x,i)=>`
      <article class="kw-hotel${i===0?" kw-top":""}">
        <div class="kw-rank">${i+1}</div>
        <div style="min-width:0">
          ${i===0?`<div class="kw-badge">Best match</div>`:""}
          <h3>${x.h.n}</h3>
          <p class="kw-area">${x.h.a}${state.where==="any"&&regionOf(x.h)!=="kw"?` · ${REGION_SHORT[regionOf(x.h)]}`:""}</p>
        </div>
        <div class="kw-price"><strong>${x.h.range}</strong><span>per night, approx.</span></div>
        <div class="kw-body">
          ${x.why.length?`<div class="kw-why" aria-label="Why it matches">${x.why.map(w=>`<span>${w}</span>`).join("")}</div>`:""}
          ${x.h.note?`<p class="kw-note">${x.h.note}</p>`:""}
          <ul class="kw-perks">${x.h.perks.map(p=>`<li>${p}</li>`).join("")}</ul>
          <a class="kw-look" href="${lookUrl(x.h)}" target="_blank" rel="noopener">${lookLabel()} <span aria-hidden="true">→</span></a>
        </div>
      </article>`).join("")}
    ${more.length?`
    <div class="kw-more">
      <h3>Also worth a look</h3>
      <ul>${more.map(x=>`<li><div><b>${x.h.n}</b><small>${x.h.a}${x.h.note?` · ${x.h.note}`:""}</small></div><div class="kw-side"><span class="kw-r">${x.h.range}</span><a class="kw-look kw-sm" href="${lookUrl(x.h)}" target="_blank" rel="noopener" aria-label="See photos and prices for ${x.h.n}">See prices <span aria-hidden="true">→</span></a></div></li>`).join("")}</ul>
    </div>`:""}
    <div class="kw-season">
      <svg viewBox="0 0 28 28" aria-hidden="true"><circle cx="14" cy="14" r="6" fill="var(--sun)"/><g stroke="var(--accent)" stroke-width="2" stroke-linecap="round"><path d="M14 2v3M14 23v3M2 14h3M23 14h3M5.5 5.5l2.1 2.1M20.4 20.4l2.1 2.1M5.5 22.5l2.1-2.1M20.4 7.6l2.1-2.1"/></g></svg>
      <p><b>${se.t}</b>${se.d}</p>
    </div>
    ${NEXT_URL?`<div class="kw-next">
      <div class="kw-eyebrow">Step 2 of your trip planning</div>
      <h2>Now, what's happening while you're there?</h2>
      <p>You've got your place to stay. Next, my second quiz builds your own Keys guide: festivals and shows on your dates, the sunset cruise that fits you, food tours, happy hours, hidden gems and a fridge calendar. I'll carry over your answers.</p>
      <a class="kw-btn" data-next data-area="${state.where&&state.where!=="any"?state.where:""}" data-who="${state.party||""}" data-arrive="${datesOk()?state.checkin:""}" data-depart="${datesOk()?state.checkout:""}" href="${nextLink()}">Plan my days <span aria-hidden="true">→</span></a>
      <p style="margin:14px 0 0;font-size:15px">Rather have me plan the whole trip for you? <a href="${GUIDE_URL}" target="_blank" rel="noopener" style="font-weight:700;color:inherit;text-decoration:underline">Get my custom guide · $49 →</a></p>
    </div>`:""}
    <div class="kw-cta">
      <div class="kw-eyebrow" style="color:inherit;opacity:.75">Found your place to stay?</div>
      <h2>Start your free Key West Trip Countdown</h2>
      <p>Five short emails from Michele to get you island-ready: how to get around, what to pack, your first day mapped out and the local spots you shouldn't miss.</p>
      <div class="kw-row">
        <a class="kw-btn" href="${SIGNUP_URL}" target="_blank" rel="noopener">Send me my free Trip Countdown</a>
      </div>
    </div>
    <div class="kw-again"><button class="kw-btn kw-restart" data-restart type="button"><span aria-hidden="true">↺</span> Take the quiz again</button></div>
    <p class="kw-fine">Some hotel links are affiliate links: if you book through them, I may earn a small commission at no extra cost to you. Thank you for supporting Fun in Key West! Nightly prices are typical ranges before taxes and resort fees. Keys rates change a lot by season, holidays and events, and hotel policies (adults-only, pets) can change, so confirm with the hotel before you book. More Key West planning at <a href="${SITE_URL}" target="_blank" rel="noopener">funinkeywest.com</a>.</p>`;
  $("#kwsf-quiz").hidden = true;
  el.hidden = false;
  el.querySelectorAll("[data-next]").forEach(a => a.addEventListener("click", () => {
    window.dispatchEvent(new CustomEvent("fikw:prefill", {detail:{who:a.dataset.who, area:a.dataset.area, arrive:a.dataset.arrive, depart:a.dataset.depart}}));
  }));
  el.querySelectorAll("[data-restart]").forEach(b=>b.addEventListener("click", ()=>{
    Object.assign(state,{step:0,where:null,party:null,style:null,budget:null,acts:[],musts:[],when:null,checkin:"",checkout:"",adults:2,children:0});
    el.hidden = true; $("#kwsf-quiz").hidden = false; renderStep();
    root.scrollIntoView({behavior:"smooth", block:"start"});
  }));
  el.scrollIntoView({behavior:"smooth", block:"start"});
}

function copyMatches(){
  const txt = "My Keys stay matches (Fun in Key West Stay Finder)\n" +
    lastRanked.slice(0,3).map((x,i)=>`${i+1}. ${x.h.n} – ${x.h.a} – ${x.h.range}/night`).join("\n") +
    "\n\nAlso worth a look: " + lastRanked.slice(3,8).map(x=>x.h.n).join(", ");
  const done = msg => { $("#kwsf-copied").textContent = msg; };
  try{
    navigator.clipboard.writeText(txt).then(()=>done("Copied"), ()=>fallback());
  }catch(e){ fallback(); }
  function fallback(){
    const ta = document.createElement("textarea");
    ta.value = txt; ta.setAttribute("readonly",""); ta.style.position="fixed"; ta.style.opacity="0";
    document.body.appendChild(ta); ta.select();
    let ok=false; try{ ok = document.execCommand("copy"); }catch(e){}
    ta.remove(); done(ok ? "Copied" : "Couldn't copy here");
  }
}

$("#kwsf-next").addEventListener("click", ()=>{
  if(state.step < STEPS.length-1){ state.step++; renderStep(); }
  else showResults();
});
$("#kwsf-back").addEventListener("click", ()=>{ if(state.step>0){ state.step--; renderStep(); } });

renderStep();
})();

