/* Find Your Key West page: shows one quiz at a time.
   Both quizzes stay hidden until a visitor picks one in the promo box.
   Links to #stay-finder or #whats-happening open that quiz directly.
   Generated for funinkeywest.com. */
(function(){
  var css = document.createElement("style");
  css.textContent =
    "#kwsf-mount,#fikw-wh-mount{display:none}" +
    "html.fikw-show-stay #kwsf-mount,html.fikw-show-wh #fikw-wh-mount{display:block}" +
    ".fikw-promo .fp-card.on{outline:4px solid #141414;outline-offset:3px}";
  document.head.appendChild(css);

  var root = document.documentElement;
  function show(which, scroll){
    root.classList.toggle("fikw-show-stay", which === "stay");
    root.classList.toggle("fikw-show-wh", which === "wh");
    var cards = document.querySelectorAll(".fikw-promo [data-quiz-card]");
    for (var i = 0; i < cards.length; i++) cards[i].classList.toggle("on", cards[i].getAttribute("data-quiz-card") === which);
    if (scroll !== false) {
      var target = document.getElementById(which === "stay" ? "stay-finder" : "whats-happening");
      if (target) setTimeout(function(){ target.scrollIntoView({behavior:"smooth", block:"start"}); }, 30);
    }
  }
  function fromHash(scroll){
    var h = location.hash;
    if (h === "#stay-finder") show("stay", scroll);
    else if (h === "#whats-happening") show("wh", scroll);
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
      else return;
    }
    var handoff = a.hasAttribute("data-next");             // Stay Finder passes answers along in its own click handler
    e.preventDefault();
    if (!handoff) e.stopPropagation();
    history.replaceState(null, "", which === "stay" ? "#stay-finder" : "#whats-happening");
    show(which, !handoff);
  }, true);
  // Stay Finder's "Plan my days" hands off to the second quiz
  window.addEventListener("fikw:prefill", function(){ show("wh", false); });
  // "Still need a place to stay?" link and any other in-page links
  window.addEventListener("hashchange", function(){ fromHash(true); });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function(){ fromHash(true); });
  else fromHash(true);
})();
