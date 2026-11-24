# Fun in Key West quiz data

The lists behind the quizzes on [funinkeywest.com](https://funinkeywest.com). The quizzes load these files every time someone opens them, so a change here shows on the site within a few minutes, with no need to re-paste any code into WordPress.

| File | Used by | What's in it |
| --- | --- | --- |
| `whats-happening/data.js` | What's Happening While I'm There? | Tours and FareHarbor/Trusted Tours affiliate links, Michele's picks, dated events, weekly local rituals |
| `stay-finder/hotels.js` | Keys Stay Finder | Hotels, inns and guesthouses from Key Largo to Key West, with price ranges and features. Each place has `r` (region: kw, upper, middle, lower; missing = kw) and, outside Key West, `town` (used in hotel search links). Keep every region covered when reviewing: check that places are open, names are current (e.g. Postcard Inn is now Three Waters Resort) and price ranges are still about right. |

Each quiz also keeps a backup copy of its list built into the page, so it still works if this site can't be reached.

**Updates:** a weekly scheduled task refreshes the events and checks the tours; a monthly one reviews the hotels. Michele gets a short note on what changed.

## Website pages
- `site/whats-happening.js` and `site/stay-finder.js` hold the quiz code. The Find Your Key West page loads them, so the WordPress blocks are just one line each (`site/2-…` and `site/3-…`).
- `site/1-promo-block.html` is the promo block with links to both quizzes.
