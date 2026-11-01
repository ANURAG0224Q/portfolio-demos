# How to customise a portfolio (5–15 minutes)

Each style is its own folder. A customer gets ONE folder.

| Folder | Style | Good for |
|---|---|---|
| `minimal-tech/` | Clean & minimal, dark mode | CS / engineering students |
| `bold-creative/` | Dark, bold, animated | Designers, creative students |
| `classic-resume/` | One-page online resume, prints to PDF | MBA, commerce, job-seeking freshers |

## Steps for a new order

1. **Copy the folder** you need (e.g. `minimal-tech/`) into a new repo or folder.
2. **Open `content.js`.** Every word, link and colour is in there. Replace the demo person's details with the customer's CV.
   - Empty a list (`[]`) to hide that section's items. Set `resume: ""` or `photo: ""` to hide them.
   - Links: put a full URL like `"https://github.com/username"`. The value `"demo"` only shows a "demo link" note, so replace all of them.
   - Colours: change `colors` at the top (any CSS colour like `"#0d9488"`).
3. **Swap the files in `assets/`:**
   - `photo.jpg`: a square photo (about 800×800, under 200 KB).
   - Resume PDF: put the customer's PDF in `assets/` and set `resume:` to its file name.
   - `bold-creative`: replace `work-1.svg` … with the customer's artwork (JPG/PNG/WebP fine, 4:3 shape looks best).
4. **Edit `index.html` `<head>` only:** the `<title>`, the `description` and the two `og:` lines (they show in WhatsApp/LinkedIn link previews).
5. **Check it:** open `index.html` in a browser (or use VS Code "Live Server"), look at it on phone width too (DevTools → phone icon).
6. **Publish free on GitHub Pages:** new public repo → upload the folder's files to the root → Settings → Pages → Branch `main` / root → Save. Live in about a minute at `https://USERNAME.github.io/REPO/`.

For the classic resume, the page itself prints as a clean A4 resume: press **Print → Save as PDF** to make the customer's PDF.

## Contact form

The form opens the visitor's email app with the message ready (a `mailto:` link). It needs no server and no account, so it always works.

If a customer wants messages sent straight to their inbox without opening an email app, use a free form service:
- **Formspree** (free plan, limited messages a month) or **Web3Forms** (free, access key by email).
- Make the form submit to the service: in `main.js`, replace the `mailto` lines in the form's submit handler with a `fetch()` POST to the service URL (their docs show the 3 lines). Test it once with the customer's email.

## Rules worth keeping

- Keep image files small (photos under 200 KB) so the site stays fast on phones.
- Don't remove the `alt` text or labels; they make the site usable with screen readers.
- Fonts are free (SIL Open Font License): Inter, Space Grotesk, Fraunces.
