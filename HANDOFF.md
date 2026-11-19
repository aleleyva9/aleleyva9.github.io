# Handoff for aleleyva9.github.io

Written on 19 November 2026 by Claude, for whichever assistant or person maintains this site next. Everything marked **Verified** was checked against the repository and the live site on that date. Everything else is labelled as a decision from earlier conversations, an inference, or an open task.

This repository is public and GitHub Pages serves every file in it, so this document is readable at `https://aleleyva9.github.io/HANDOFF.md`. It contains no passwords, tokens or private information. Keep it that way.

## 0. Read this first

- The site belongs to Alejandra Leyva. Live address `https://aleleyva9.github.io`. Repository `aleleyva9/aleleyva9.github.io`, branch `main`.
- It is a hand-written static site. No framework, no build step, no package manager. Editing a file on `main` is the whole deployment.
- The repository is the single source of truth. An older copy of the site existed as a Claude artifact together with a helper script called `build-gh.sh`. Both are obsolete and neither lives in this repository. Do not look for them and do not recreate them.
- Do not redesign anything unless Alejandra asks. When she asks for a visual change, show her options first and wait for her choice. When she asks to change one tab, change only that tab.
- House rules for any text you write for her are in section 2.6. The two that matter most are no colons in drafted text and no blue anywhere.

## 1. Repository and website structure

### 1.1 How it is built and deployed

| Item | Status | Detail |
|---|---|---|
| Hosting | Verified | GitHub Pages, user site, served from `https://aleleyva9.github.io/` |
| Repository visibility | Verified | Public |
| Default and only branch | Verified | `main` |
| Deployment | Inferred | Pages publishes the root of `main` on every push. There is no workflow file and no `gh-pages` branch. The Pages settings screen could not be read from this session, so confirm under Settings, Pages if it ever matters |
| Jekyll | Verified | Disabled by the empty `.nojekyll` file. Files are served exactly as stored. Do not delete `.nojekyll` |
| Build step | Verified | None |
| Custom domain | Verified | None. No `CNAME` file |
| Repository name | Decision | Must stay exactly `aleleyva9.github.io` (username plus `.github.io`) or the site stops being served at the root address. It was renamed once from `alejandraleyva.github.io` for this reason |
| Live site equals repository | Verified | `index.html`, `style.css`, `track.js`, the report page, both PDFs and `og-image.jpg` were downloaded from the live site and are byte-identical to commit `1566629` |

After a push the site updates in one to two minutes. GitHub Pages sends `cache-control: max-age=600`, so a browser can show the old version for up to ten minutes. Use a hard refresh (Cmd+Shift+R or Ctrl+Shift+R), a private window, or add `?v=something` to the address when checking a change.

### 1.2 External dependencies

There are only two, both loaded from other servers at page load.

| Dependency | Where it is referenced | Purpose |
|---|---|---|
| Google Fonts, Roboto (weights 300, 400, 500, italics 300, 400) | `<head>` of both HTML files | The only typeface on the site |
| GoatCounter `//gc.zgo.at/count.js` | Bottom of both HTML files | Analytics, see section 4 |

Nothing else. No jQuery, no CSS framework, no icons library, no npm.

### 1.3 Files

| File | Function |
|---|---|
| `index.html` | The whole main site. One page with five views (About, Work, CV, More, Contact). Also holds the small inline script that switches views |
| `human-claims-and-cooperation.html` | Stand-alone page for the report "Human claims and cooperation: what remains when we lose control over AI?" |
| `style.css` | All styles for both pages. Colour and font variables are at the top |
| `track.js` | Analytics logic shared by both pages (section views and click events) |
| `Alejandra_Leyva_CV.pdf` | The downloadable CV (2 pages, exported from Canva, last replaced 17 Nov 2026) |
| `Human_Claims_and_Cooperation_Report.pdf` | The report PDF (15 pages, exported from Canva, final version of 15 Nov 2026) |
| `photo.jpg` | Portrait on the About view |
| `og-image.jpg` | 1200 by 628 link preview image for the home page |
| `og-report.jpg` | 1200 by 628 link preview image for the report page |
| `img/report-cover.jpg` | First page of the report, shown on the report page |
| `img/art-*.jpg` | Ten photos for the Latin Hands gallery in More |
| `img/travel-*.jpg` | Eight photos for the Travel gallery in More |
| `.nojekyll` | Tells GitHub Pages to serve files as they are |
| `README.md` | One line with the repository name. Not used by the site |
| `HANDOFF.md` | This document |

### 1.4 How `index.html` works

- Each tab is a `<div class="view" id="view-NAME">`. All except About carry the `hidden` attribute in the markup.
- The nav links are `<a href="#work" data-view="work">`. The inline script at the bottom reads `location.hash`, shows the matching view, hides the others, sets `aria-current="page"` on the active link and scrolls to the top. An unknown or empty hash shows About.
- Direct links to a tab work, for example `https://aleleyva9.github.io/#cv`.
- The same script wires the CV side links (they scroll to `cv-ai`, `cv-experience`, `cv-earlier`, `cv-education`) and the two Copy buttons for the email addresses.
- CV entries are native `<details class="entry">` elements, collapsed by default. No script is involved in opening them.
- The report page is a normal separate page. Its nav links go back to `./#about`, `./#work` and so on.

### 1.5 Commit history in short

| Date | What changed |
|---|---|
| 26 Oct 2026 | First version, tab switching fixed for GitHub Pages, photo, More page with galleries, link preview tags |
| 30 Oct 2026 | Third-person bio, About hero, colour bands, navy and stone palette (later replaced), Selected Work, earlier publications, contact |
| 4 Nov 2026 | CV tab rebuilt from the November CV (sticky sidebar, timeline, collapsible entries, PDF download), publications removed from the CV tab, two hackathons merged into one entry |
| 14 Nov 2026 | Full restyle to the current look (Roboto, white ground, dark red accent), Work cards reordered |
| 15 Nov 2026 | Report page and PDF added, styles moved out of `index.html` into `style.css`, mentorship credit added |
| 16 Nov 2026 | Wording of the report card on Work |
| 17 Nov 2026 | CV entries for Sentient Futures and Sapiens First updated, CV PDF replaced, GoatCounter analytics added |
| 19 Nov 2026 | This handoff document added. No change to the site itself |

## 2. Design and implementation decisions

### 2.1 Visual design (current, live)

Alejandra chose this look on 14 November 2026 from several options. Her reference was `jsjol.github.io`. Earlier palettes (deep green, then ink navy on stone) were replaced and must not come back.

| Element | Value |
|---|---|
| Typeface | Roboto for everything. Body weight 300, links and nav 400, emphasis 500 |
| Background | White `#ffffff`, secondary `#f6f6f4` |
| Text | `#111111`, secondary `#595959` |
| Lines | `#e6e6e6` |
| Accent | Dark red `#990000`, hover `#5c0000`. Used for links, the active tab, card labels, buttons |
| Text column | `.wrap` at 930px maximum. Report page text at 760px |
| Base size | 17px, line height 1.65 |
| Corners and shadows | Small radius (2 to 4px), one soft shadow on the portrait and the report cover |

There is no blue anywhere in `style.css` (verified by search). Keep it that way, including in dark mode.

### 2.2 Dark mode

`style.css` contains a dark palette that applies automatically when the visitor's system is in dark mode (`prefers-color-scheme: dark`). Accent becomes a soft red `#e08585`. There is no toggle on the page. The attribute `data-theme="light"` or `data-theme="dark"` on `<html>` would force one mode, and nothing sets it today.

### 2.3 Navigation and layout

- Sticky top bar with the name on the left (links to About) and five tabs on the right. Tab labels are written "About", "Work", "CV", "More", "Contact".
- The active tab is dark red with a 2px underline.
- **About.** Name with the first name in medium weight, a one-line role, bio on the left and portrait on the right, then "Areas of Inquiry" as three rows (title on the left in red, bullet list on the right).
- **Work.** A grid of bordered cards. Each has a label and year, title, organisation in italics, a description and one or more links at the bottom. Below the grid, "Earlier Publications" as a simple list.
- **CV.** Two columns. A sticky sidebar (title, role line, Download PDF button, section links, skills, languages) and a main column with a thin vertical timeline of collapsible entries.
- **More.** One sentence heading, then Latin Hands and Travel, each with a short text and a photo grid.
- **Contact.** Two email addresses with Copy buttons, and LinkedIn.
- **Footer.** "Alejandra Leyva · 2026". This year will need changing by hand in January, in both HTML files.

### 2.4 Responsive behaviour

| Width | What changes |
|---|---|
| 820px and below | About becomes one column with the photo on top (maximum 300px). Areas rows stack. CV becomes one column and the sidebar stops being sticky, with section links in a row. Contact rows stack. Headings shrink. Report page heading shrinks and its credit rows stack |
| 600px and below | Earlier Publications rows stack |
| 480px and below | Galleries become two columns |

The Work grid and the galleries use `auto-fill` with a minimum column width, so they reflow without breakpoints. The page respects phone safe areas (`env(safe-area-inset-*)`). The top bar wraps onto two lines on narrow phones.

The restyle was checked by screenshot at 1280px and 390px on 14 Nov 2026. It has not been re-checked visually today.

### 2.5 Technical decisions to preserve

1. **One page with views, switched by hash.** Do not split the tabs into separate files and do not introduce a framework or a build step.
2. **Keep `[hidden] { display: none !important; }` in `style.css`.** Without it every tab renders stacked on top of the others. This was a real bug on 26 Oct 2026.
3. **Keep `.nojekyll`.**
4. **All styles live in `style.css`.** Both pages share it. Do not add inline `<style>` blocks. Colours and fonts are changed only through the variables at the top.
5. **The view names are listed in two places.** `var views` in the inline script of `index.html` and `var sections` in `track.js`. A new tab must be added to both, plus the nav link and the `view-NAME` div.
6. **CV section links depend on order.** The script pairs the links inside `.jump` with the list `['cv-ai','cv-experience','cv-earlier','cv-education']` by position. Adding, removing or reordering a CV section means updating both.
7. **Order of the three scripts at the bottom of each page.** First the `window.goatcounter` settings, then GoatCounter's `count.js`, then `track.js`.
8. **Links to other sites** use `target="_blank" rel="noopener"`. Links that should be measured carry `data-track` and `data-track-title` (section 4).
9. **Link preview tags.** Each page has Open Graph and Twitter tags pointing to a 1200 by 628 image. LinkedIn caches previews, so after changing them use LinkedIn's Post Inspector to refresh.
10. **File names of the two PDFs are fixed.** Many links point to them. Replace the file, keep the name.
11. **Images** in the galleries use `loading="lazy"` and are already compressed (60 to 310 KB). Keep new photos in that range.

### 2.6 Content and wording rules from Alejandra

These came up repeatedly. Treat them as standing instructions.

- **No colons in any text drafted or edited for her**, in English or Spanish. Rephrase instead. The one exception is the report title, which she wants exactly as "Human claims and cooperation: what remains when we lose control over AI?" with its colon.
- **No blue tones** in anything designed.
- **Voice.** Third person in the bio and across the site. First person only in the More tab.
- **About and Areas of Inquiry** must not name the fellowships, the organisations behind them, her mentor or any client.
- **No mention** of Mexico City as her location and no "open to roles" or availability line.
- **British spelling** (recognises, organisations, synthesised).
- **Titles.** She dislikes titles with Every Word Capitalised for the report. Use the report's exact title in sentence case.
- **Work card order.** Post-Control report first, then AI Risks and Sovereignty, then No Killer Robots, then the rest.
- **Report card on Work.** Label stays "Convening & Report". Do not call the report "a synthesis" and do not call the roundtables "small". The text says the report is part of the Post-Control Initiative with the link on that name. No separate Roundtables button.
- **Report authorship.** Alejandra Leyva is the only author. Gagana Madhugiri Devaraja (both surnames, always) appears only under roundtable facilitation. Julia Bossmann appears under Mentorship. "Post-Control Initiative" is the umbrella the report belongs to, not the name of Alejandra's project.
- **No Killer Robots card.** Do not describe the campaign as demanding a human decision for every use of force, or as opposing all autonomous defensive systems. The current card text is her approved wording.
- **CV tab.** No contact block, no summary paragraph, no publications section. The two hackathons stay merged in one entry. Roles she still holds are written in the present tense.
- **Reference sites.** She rejected the sites of Rishi Bommasani and Iris Wang as references. Do not suggest them.
- **Working style.** She wants short, concrete fixes, changes limited to what she asked, and options shown before any visual change.

## 3. CV and content management

### 3.1 Where the CV lives

The CV exists in two forms that are maintained separately.

| Form | Location | Notes |
|---|---|---|
| Downloadable PDF | `Alejandra_Leyva_CV.pdf` in the repository root | Exported by Alejandra from Canva. The site only stores and links it |
| CV tab | `index.html`, the block that starts at `<!-- CV -->` (`<div class="view cv" id="view-cv">`) | Hand-written HTML that mirrors the PDF |

Nothing generates one from the other. When the CV changes, both must be updated.

### 3.2 Updating the PDF

1. Export the new CV as PDF and name it exactly `Alejandra_Leyva_CV.pdf`.
2. Replace the file in the repository root (on github.com use Add file, Upload files, drop the file, Commit changes. An upload with the same name replaces the old one).
3. In `index.html`, find `Alejandra_Leyva_CV.pdf?v=2026-11-17` and change the date after `?v=` to today's date. This forces browsers to fetch the new file instead of a cached one.
4. Commit, wait two minutes, open `https://aleleyva9.github.io/#cv` in a private window and press Download PDF.

### 3.3 Updating the CV tab

Each entry follows one pattern. Copy an existing one and edit it.

```html
<details class="entry"><summary><span class="role"><b>ROLE TITLE</b><span class="org">ORGANISATION, PLACE</span></span><span class="when">START — END</span></summary><div class="body"><p class="desc">One paragraph.</p></div></details>
```

For bullet points use `<div class="body"><ul><li>…</li></ul></div>` instead of the paragraph. The sections are `cv-ai`, `cv-experience`, `cv-earlier` (uses `class="tl compact"`) and `cv-education`. Skills and languages are plain lists in the sidebar.

### 3.4 Differences between the PDF and the CV tab today

Verified by reading both. These are intentional unless noted.

- The PDF has a contact line and a professional summary. The tab has neither, by her decision.
- The PDF says "2026 – ongoing" or "2026 – Present". The tab says "2026 — present".
- The PDF's Sapiens First entry starts with "Developing" and the tab's starts with "Develop". Minor, undecided.
- The role line in the CV tab and in the PDF is "Political Scientist · AI Safety Researcher". The About view says "Political Scientist and AI Governance Researcher". See section 5.2.

### 3.5 Adding or editing a Work card

Copy an `<article class="card">` block inside `<div class="work">` in `index.html`.

```html
<article class="card">
  <div class="kind"><span>LABEL</span><em>YEAR</em></div>
  <h3>Title</h3>
  <p class="org">Organisation</p>
  <p>Description.</p>
  <a class="go" href="https://…" data-track="paper-short-name" data-track-title="Readable name" target="_blank" rel="noopener">Read on …</a>
</article>
```

Two or more links go inside `<div class="outputs">…</div>`. A status without a link is `<span class="go muted">In Progress</span>`.

### 3.6 Status of the Post-Control research report

| Item | Status |
|---|---|
| Report page `human-claims-and-cooperation.html` | Done and live. Verified |
| Report PDF | Done and live. Final version with the page 5 sentence fixed, committed 15 Nov 2026. Alejandra confirmed it was reviewed and could be public |
| Work card linking to the page and the PDF | Done and live, first in the grid |
| Link from the CV tab ("research report") | Done and live |
| Link preview image `og-report.jpg` | Done |
| Sole author, facilitation credit, mentorship credit | Done, as described in 2.6 |
| Word version of the report | Must not be published |
| Replacing the report later | Upload a new PDF with the same name. If the first page changed, also replace `img/report-cover.jpg` (1000 by 1415) and review the Key Findings text on the page, which was copied from the report by hand |

### 3.7 Status of other content

| Item | Status on the site |
|---|---|
| AI Risks and Sovereignty paper | Card links to Zenodo. Live |
| No Killer Robots | Open Letter linked. Policy Brief shown as "In Progress" with no link |
| Project AWARE, Colombia | Shown as "Ongoing" with no link |
| Substack essay | Linked. Live |
| Four earlier op-eds (Nexos, Animal Político) | Linked. Live |
| Latin Hands and Travel galleries | Live |

## 4. Website analytics

### 4.1 What is installed (completed)

GoatCounter was installed on 17 November 2026. Verified in the code today.

| Item | Detail |
|---|---|
| Service | GoatCounter, hosted, free plan. No cookies and no consent banner needed |
| Account | Created and owned by Alejandra. Site code `aleleyva9` |
| Dashboard | `https://aleleyva9.goatcounter.com` (her email and password, never stored here) |
| Secrets in the repository | None. The site code is public by design |
| Tracking code location | Last three `<script>` lines before `</body>` in `index.html` and in `human-claims-and-cooperation.html`, plus the file `track.js` |

How it works.

- **Sections of the home page.** `index.html` sets `no_onload: true`, so GoatCounter does not count the page by itself. `track.js` counts each view as its own page (`/about`, `/work`, `/cv`, `/more`, `/contact`) when it is shown. Only the first one in a visit carries the referrer.
- **Report page.** Sets `no_onload: false`, so it is counted automatically as `/human-claims-and-cooperation.html`.
- **Clicks.** Any element with `data-track="name"` sends an event with that name when clicked (middle clicks included). `data-track-title` is the readable label shown in the dashboard.
- GoatCounter's own automatic click handling is turned off (`no_events: true`) so that nothing is counted twice.

### 4.2 Events currently in the code (verified)

| What it measures | Event name | Where |
|---|---|---|
| CV download | `download-cv` | CV tab |
| Open the report page | `report-open` | Work card (title and "Read the Report") |
| Open the report page from the CV | `report-open-from-cv` | CV tab |
| Report PDF from the Work card | `report-pdf` | Work card |
| Report PDF read in browser | `report-pdf-read` | Report page (button and cover image) |
| Report PDF download | `report-pdf-download` | Report page (top button and footer link) |
| Paper on Zenodo | `paper-ai-sovereignty-zenodo` | Work card |
| Substack essay | `essay-ai-race-substack` | Work card |
| Open letter | `letter-no-killer-robots` | Work card |
| Open letter from the CV | `letter-no-killer-robots-from-cv` | CV tab |
| Post-Control Initiative page | `post-control-initiative` | Work card text |
| Earlier op-eds | `oped-nexos-2019`, `oped-nexos-2018`, `oped-animal-politico-2021`, `oped-animal-politico-2020` | Work, Earlier Publications |
| LinkedIn | `link-linkedin` | About and Contact |
| Substack profile | `link-substack` | About |
| Email link | `link-email` | Contact (both addresses share the name) |
| Copy email button | `copy-email` | Contact (both buttons share the name) |
| Latin Hands | `link-latin-hands` | More |

### 4.3 How to read the dashboard

- **Daily visits.** The chart at the top. The date picker changes the range.
- **Per tab.** In the pages list look for `/about`, `/work`, `/cv`, `/more`, `/contact` and `/human-claims-and-cooperation.html`.
- **Per article, report, link or CV download.** Events appear in the same list under the names in 4.2. Click one to see its daily chart.
- **Traffic sources.** The referrers panel.
- **Excluding her own visits.** Open `https://aleleyva9.github.io/#toggle-goatcounter` once in each browser she uses. This is a GoatCounter feature that stores a flag in that browser.

### 4.4 How to track something new

- **A new link.** Add `data-track="type-short-name"` and `data-track-title="Readable name"` to the `<a>` tag. Nothing else is needed. Use lowercase with hyphens and one of the prefixes `paper-`, `report-`, `essay-`, `oped-`, `letter-`, `link-`.
- **A new stand-alone page.** Copy the last three `<script>` lines of `human-claims-and-cooperation.html` to the bottom of the new page.
- **A new tab in `index.html`.** Add its name to `sections` in `track.js` (and to `views` in the inline script).

### 4.5 How to verify it works

1. Open the live site in a browser where tracking was not disabled, with the developer tools open on the Network tab, filtered by `goatcounter`.
2. Each tab change should produce one request to `aleleyva9.goatcounter.com/count` with `p=/work` and so on. Each tracked click should produce one with `p=` the event name and `e=true`.
3. A few minutes later the same items should appear in the dashboard.

Ad blockers and some privacy browsers block GoatCounter, so real numbers are always somewhat lower than real traffic.

### 4.6 Completed versus outstanding

| Item | Status |
|---|---|
| Script on both pages, section views, named click events | Completed. Code verified today |
| Automated test on the live site (17 Nov 2026) | Completed. GoatCounter accepted all 12 test hits. Not repeated today, to avoid adding fake visits |
| Confirmation in the dashboard by the account owner | **Outstanding.** Claude could never see the dashboard. Alejandra needs to open it and check that `/work`, `/cv` and events such as `download-cv` appear |
| How the dashboard separates unique visitors from total views | **Outstanding.** Not confirmed. Check in the dashboard or GoatCounter's help pages |
| Clicks on a GitHub link | **Not possible yet.** She asked to measure this, and the site has no link to GitHub. If she wants one, add it in Contact with `data-track="link-github"` |
| Excluding her own visits | **Unknown** whether she already opened the toggle link in her browsers |
| History before 17 Nov 2026 | Does not exist. GitHub Pages keeps no visit logs |

## 5. Outstanding tasks and known issues

### 5.1 Discussed and not implemented

1. A link to her GitHub profile in Contact, with its click event (offered twice, never decided).
2. Dashboard confirmation and the unique versus total question (section 4.6).
3. Google Search Console was mentioned as a way to see search appearances. Not set up.
4. A custom domain was never set up. The site uses the default GitHub address.
5. An editable Canva copy of the designed report was requested. That is outside this repository and its status is unknown.

### 5.2 Inconsistencies to raise with Alejandra (do not fix without asking)

1. **Two different addresses for the open letter.** The Work card uses `https://app.notion.com/p/NO-KILLER-ROBOTS-3ea177ae16e180f2b513fc5650080a98`. The CV tab uses `https://tar-price-366.notion.site/NO-KILLER-ROBOTS-3ea177ae16e180f2b513fc5650080a98?pvs=143`. Both answered today. The `app.notion.com` form may ask visitors to sign in, so the `notion.site` one is probably the safer public link. Ask her which one to keep and use it in both places.
2. **Role line.** About says "AI Governance Researcher". The CV tab and the PDF say "AI Safety Researcher". This may be deliberate.
3. **The word "synthesis".** She rejected it for the Work card. The report page still uses "Roundtable synthesis" in its small heading line and in its description and preview tags, and the page text says "This synthesis explores". That wording followed the report itself. Ask before changing.
4. **Dates that will go stale.** The three fellowship entries say "2026 — present" and her fellowships are due to end in December 2026. The Signal AI entry says "Jan 2026 — present". "Paper submitted to SLAS 2027", "Policy Brief · In Progress" and "Ongoing" on the Project AWARE card also need a decision once things change. Any change here must be made in the CV tab and in the PDF together.
5. **Footer year** "2026" in both HTML files.

### 5.3 Technical limitations and small improvements

None of these is urgent and none should be done without her asking.

- No favicon (the browser tab shows a blank icon) and no custom 404 page. A wrong address shows GitHub's default error page.
- No `sitemap.xml` or `robots.txt`. Fine for a site this size.
- `README.md` is a single line.
- The CV download link has a `?v=` cache marker. The report PDF links do not, so a replaced report PDF can stay cached for up to ten minutes.
- The CV section links depend on order (section 2.5, point 6).
- Roboto and the analytics script come from other servers. If either is blocked the site still works, with a system font or without statistics.
- Dark mode follows the visitor's system and has no switch. It was built together with the restyle and has had less visual review than the light version.
- LinkedIn and Zenodo refuse automated link checks (they answer 999 and 403 to scripts). Both links should be checked by hand in a browser. All other outbound links answered 200 on 19 Nov 2026.
- This `HANDOFF.md` is publicly reachable. Do not add anything private to it.

### 5.4 Maintenance recommendations

- Change one thing per commit and write a clear message, in the style already used (`CV: …`, `Work: …`, `Report: …`).
- After every change, check the live page in a private window on a computer and on a phone, and click through all five tabs. A broken tag inside one view can hide or merge the others.
- Twice a year, click every outbound link. The Notion links are the most likely to break.
- Before any larger change, create a tag or download a ZIP (section 6.4).
- Keep new images under about 300 KB.

## 6. Instructions for continuing with another assistant

### 6.1 What the assistant should do first

1. Read this file in full.
2. Read `index.html`, `style.css`, `track.js` and `human-claims-and-cooperation.html`. They are short (about 520 lines in total besides the stylesheet).
3. Before proposing an edit, quote the exact lines that will change.
4. Never rewrite a whole file to make a small change. Never reformat, reorder or "clean up" code that was not part of the request.

### 6.2 Making a change

There are two ways, depending on what the assistant is allowed to do.

**If the assistant can only read the repository.** It should give Alejandra the exact text to find and the exact text to put in its place. She then applies it herself.

1. Open the file on github.com and press the pencil icon (Edit this file).
2. Use Cmd+F or Ctrl+F inside the editor to find the text, and replace it.
3. Press Commit changes, write a short message, and commit directly to `main`.
4. Wait two minutes and check the live site in a private window.

To replace a PDF or an image, use Add file, Upload files in the same folder, with the same file name.

**If the assistant can write to the repository.** It should commit directly to `main` with a descriptive message, one logical change per commit, and never force-push or rewrite history. It should then fetch the live page and confirm the change is visible.

For someone working with git on a computer.

```bash
git clone https://github.com/aleleyva9/aleleyva9.github.io.git
cd aleleyva9.github.io
# edit, then preview by opening index.html in a browser
git add -A
git commit -m "Work: short description"
git push origin main
```

The site can be previewed by opening `index.html` straight from the folder. Analytics requests may not register from a local file, which is expected.

### 6.3 Permissions and configuration

- **GitHub account.** `aleleyva9`. She owns the repository. Only she can grant an assistant access, through GitHub's own connection screen for that assistant. Never ask her to paste a password or token into a chat, and never commit one.
- **Claude GitHub App.** Installed on her account in October 2026 so Claude could push. It is no longer needed. She can remove it under GitHub Settings, Applications, Installed GitHub Apps.
- **GitHub Pages.** Already enabled. Nothing to configure. The repository must stay public (or she would need a paid plan) and keep its name.
- **GoatCounter.** Account under her email. The assistant needs no access to it. To change the site code, edit the `data-goatcounter` address in both HTML files.
- **Domain.** None.

### 6.4 Backups

- Commit `1566629` (17 Nov 2026, "Add GoatCounter analytics") is the last change to the site itself, and the handoff state is that commit plus this document. To see the site exactly as it was, open that commit on GitHub under Commits and press Browse files. Claude could not create a tag from its session, so Alejandra may want to add one herself on GitHub under Releases, Tags, for example `backup-2026-11-19`.
- Alejandra also received a ZIP of the whole repository with its full history on 19 Nov 2026, to keep outside GitHub.
- A ZIP of any state can be downloaded from GitHub with Code, Download ZIP.
- The full git history is the real backup. Every earlier version of every file can be recovered from the commit list.
