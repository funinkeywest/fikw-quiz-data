/* Fun in Key West: Historic Marker Trail analytics.
   Counts how people use the walking tour map and sends each action to Google Analytics (and the Meta pixel)
   as an event, so you can see them in GA4 under Reports > Engagement > Events.
   Loaded by one line at the bottom of the Historic Marker Trail page (funinkeywest.com/historic-marker-trail/). */
(function () {
  if (window.__fikwTrail) return; window.__fikwTrail = true;
  var started = false, searched = false;
  function track(ev, p) {
    try {
      var d = { tool: "walking_tour" }; for (var k in (p || {})) d[k] = p[k];
      if (typeof window.gtag === "function") window.gtag("event", ev, d);
      if (typeof window.fbq === "function") window.fbq("trackCustom", ev, d);
    } catch (e) {}
  }
  function label(el) { return (el.textContent || "").replace(/\d+$/, "").replace(/\s+/g, " ").trim().slice(0, 60); }
  function start() { if (!started) { started = true; track("trail_start"); } }

  document.addEventListener("click", function (e) {
    var t = e.target; if (!t || !t.closest) return;
    var map = document.getElementById("kw-mapwrap"); if (!map) return;
    var main = map.closest("main") || document.body; if (!main.contains(t)) return;
    var el = t.closest("button, a"); if (!el) { if (t.closest("#kw-map")) start(); return; }
    var text = (el.textContent || "").replace(/\s+/g, " ").trim();
    if (el.matches(".chip[data-t]")) { start(); track("trail_theme", { theme: label(el) }); }
    else if (el.matches(".chip[data-m]")) { start(); track("trail_walk_length", { length: text }); }
    else if (el.id === "kw-loc") { start(); track("trail_use_location"); }
    else if (el.id === "kw-copy") { track("trail_copy_stops"); }
    else if (/google maps/i.test(text)) { track("trail_google_maps"); }
    else if (/found it/i.test(text)) { track("trail_found_marker", { marker: el.getAttribute("data-id") || "" }); }
    else if (/add to picks/i.test(text)) { track("trail_add_pick", { marker: el.getAttribute("data-id") || "" }); }
    else if (/save my progress/i.test(text)) { track("trail_save_progress"); }
    else if (/marker page/i.test(text)) { track("trail_marker_page"); }
    else if (/read the story/i.test(text)) { track("trail_read_story"); }
    else if (el.closest(".leaflet-container")) { start(); }
  }, true);

  document.addEventListener("change", function (e) {
    var t = e.target; if (!t) return;
    if (t.id === "kw-start") { start(); track("trail_start_point"); }
    if (t.id === "kw-loop") { track("trail_loop", { loop: t.checked ? "on" : "off" }); }
  }, true);
  document.addEventListener("input", function (e) {
    if (e.target && e.target.id === "kw-q" && !searched) { searched = true; start(); track("trail_search"); }
  }, true);
})();
