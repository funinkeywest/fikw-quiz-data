/* Find Your Key West page: shows one quiz at a time.
   All three quizzes (Stay Finder, What's Happening, Right Now) stay hidden until a visitor picks one in the promo box.
   Links to #stay-finder, #whats-happening or #right-now open that quiz directly.
   Generated for funinkeywest.com. */
(function(){
  var css = document.createElement("style");
  css.textContent =
    "#kwsf-mount,#fikw-wh-mount,#fikw-rn-mount{display:none}" +
    "html.fikw-show-stay #kwsf-mount,html.fikw-show-wh #fikw-wh-mount,html.fikw-show-now #fikw-rn-mount{display:block}" +
    ".fikw-promo .fp-card.on{outline:4px solid #141414;outline-offset:3px}";
  document.head.appendChild(css);

  var root = document.documentElement;
  function show(which, scroll){
    root.classList.toggle("fikw-show-stay", which === "stay");
    root.classList.toggle("fikw-show-wh", which === "wh");
    root.classList.toggle("fikw-show-now", which === "now");
    var cards = document.querySelectorAll(".fikw-promo [data-quiz-card]");
    for (var i = 0; i < cards.length; i++) cards[i].classList.toggle("on", cards[i].getAttribute("data-quiz-card") === which);
    if (scroll !== false) {
      var target = document.getElementById(which === "stay" ? "stay-finder" : which === "now" ? "right-now" : "whats-happening");
      if (target) setTimeout(function(){ target.scrollIntoView({behavior:"smooth", block:"start"}); }, 30);
    }
  }
  function fromHash(scroll){
    var h = location.hash;
    if (h === "#stay-finder") show("stay", scroll);
    else if (h === "#whats-happening") show("wh", scroll);
    else if (h === "#right-now") show("now", scroll);
  }

  // Any link to a quiz on this page: promo buttons, the Stay Finder's "Plan my days",
  // and the quiz's "find your stay first" link. Runs first (capture), before the theme's own link handling.
  document.addEventListener("click", function(e){
    if (!document.getElementById("kwsf-mount")) return;   // not on the quiz page: let links work normally
    var a = e.target.closest && e.target.closest("a");
    if (!a) return;
    var which = a.getAttribute("data-open-quiz");
    if (!which) {
      var href = a.getAttribute("href") || "";
      if (/#stay-finder$/.test(href)) which = "stay";
      else if (/#whats-happening$/.test(href)) which = "wh";
      else if (/#right-now$/.test(href)) which = "now";
      else return;
    }
    var handoff = a.hasAttribute("data-next");             // Stay Finder passes answers along in its own click handler
    e.preventDefault();
    if (!handoff) e.stopPropagation();
    history.replaceState(null, "", location.pathname + location.search.replace(/([?&])now=[^&]*&?/, "$1").replace(/[?&]$/, "") + (which === "stay" ? "#stay-finder" : which === "now" ? "#right-now" : "#whats-happening"));
    show(which, !handoff);
  }, true);
  // Stay Finder's "Plan my days" hands off to the second quiz
  window.addEventListener("fikw:prefill", function(){ show("wh", false); });
  // "Still need a place to stay?" link and any other in-page links
  window.addEventListener("hashchange", function(){ fromHash(true); });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function(){ fromHash(true); });
  else fromHash(true);
})();
