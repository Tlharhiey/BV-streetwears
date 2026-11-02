# BV Streetwear — WEDE5020 Part 3

## Project overview
BV Streetwear is a South African streetwear website concept built with HTML5, CSS3 and vanilla JavaScript. It showcases clothing, gives visitors ways to enquire about products and provides a general contact route. The site is a static front-end project; it does not process payments or confirm stock. Prices are illustrative guide prices.

## Pages
- `index.html` — landing page and brand introduction.
- `about.html` — brand story, mission and vision.
- `products.html` — dynamically generated product cards with category filters, search and sorting.
- `gallery.html` — image gallery with descriptive alternative text.
- `enquiry.html` — product/custom-order enquiry form with validation and an estimated total.
- `contact.html` — general contact form, validation, email composition and embedded OpenStreetMap.

## Technologies and functionality
- HTML5 semantic structure, labels, native input types and validation constraints.
- CSS3 responsive layouts, hover effects, scroll reveal transitions and reduced-motion support.
- Vanilla JavaScript for mobile navigation, dynamic JSON product data, category filtering, search, sorting, enquiry calculations, form validation, local enquiry history and back-to-top interaction.
- OpenStreetMap embed for location context.
- `robots.txt`, `sitemap.xml`, page-specific titles/descriptions, canonical URLs, heading hierarchy, internal links, descriptive image alt text and clean lowercase page names.

## Form behaviour and important limitation
The enquiry form validates the visitor's details, calculates an estimate for the three listed products and prepares an email addressed to `basancemahlathi@gmail.com`. Enquiry details are also stored in that visitor's browser local storage; this is not a shared database and the website owner does not automatically receive the data. The contact form validates the general message and opens the visitor's default email application with the message filled in. The visitor must press Send. A static GitHub Pages/Netlify site cannot securely send email or provide AJAX server processing by itself. For true automatic delivery, connect a form backend such as Netlify Forms or Formspree and configure it before claiming that messages are delivered automatically.

## SEO work completed
- Unique page title and meta description on every page.
- Relevant brand/product/location keywords used naturally in page copy and metadata.
- One main H1 per page and logical subheadings.
- Descriptive image filenames retained where supplied, plus meaningful alt text and lazy loading on product images.
- Consistent lowercase URLs and internal navigation links.
- Responsive/mobile-friendly design and reduced-motion accessibility support.
- `robots.txt` allows public pages to be crawled; `sitemap.xml` lists the six public pages.
- Canonical links and sitemap currently point to the GitHub Pages address `https://tlharhiey.github.io/Vutlharhi/`, based on the repository remote configured in this project. Update these if the repository or deployment URL changes.
- Off-page SEO is an ongoing activity: share the live site on relevant social profiles and seek genuine links from relevant local/community directories or partners. Do not buy spam backlinks.

## Changelog

### Part 3 — 2 November 2026
- Reworked the project structure so the deployable website files are available in the repository root, making GitHub Pages deployment from the `main` branch / root folder straightforward. Existing Part 1–2 planning and research folders have been retained.
- Rebuilt all public pages with consistent semantic HTML, responsive navigation, page-specific SEO titles and descriptions, canonical metadata, accessible labels and internal links.
- Added a dedicated `enquiry.html` page to distinguish product/service enquiries from general contact messages. The form checks required fields, email and phone formats, quantity and size, then calculates an estimated price for T-shirts (R399), hoodies (R699) and jackets (R899). Custom design and group-order requests are marked as quote-required.
- Updated `contact.html` with name, email, optional phone, message category and full-message fields. JavaScript validates the form and composes a mailto email to the contact address already used by the project. The visitor must send it from their email application.
- Replaced the earlier JavaScript product array, which referred to image files that were not in the project, with a JSON-style product dataset using the images that actually exist. Product cards now render dynamically and can be searched, filtered by category and sorted by price or name.
- Added mobile menu interaction, scroll reveal animation, back-to-top button, live result count and form feedback. Added reduced-motion styling for accessibility.
- Embedded an OpenStreetMap view for Polokwane and provided a link to open the map separately.
- Added `robots.txt`, `sitemap.xml`, `.nojekyll`, a custom `404.html` and `netlify.toml` security headers configuration.
- Added responsive image sizing, descriptive alt text, lazy loading where appropriate, and improved heading structure and keyboard focus styles.
- Updated this README with Part 3 functionality, deployment instructions, form limitations and references.

### Part 2 feedback and corrections
The specific lecturer feedback document/marking comments were not included in the material available for this update. The following general corrections were made to strengthen the Part 2 website: corrected inconsistent page structure and navigation, ensured the stylesheet and JavaScript load consistently, removed broken product-image references, added missing enquiry page, improved mobile layout, and made the page content and branding more consistent. Add any lecturer-specific correction here once the feedback sheet is available.

## Running locally
1. Download or clone the repository.
2. Open the repository folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the Live Server extension.
4. Keep the `images` folder beside the HTML files so image paths resolve.

## Deploying with GitHub Pages
1. Commit and push the updated files to the `main` branch of `Tlharhiey/Vutlharhi`.
2. On GitHub, open the repository **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**, then save.
5. Wait for the deployment to complete. The expected address is `https://tlharhiey.github.io/Vutlharhi/`.
6. Open the live website and test every page, image, navigation link and form.
7. Submit the repository URL and deployed website URL to the LMS.

Alternative: import the GitHub repository into Netlify and use the repository root (`.`) as the publish directory. The included `netlify.toml` adds basic browser security headers.

## Git commands
Run these in the VS Code terminal from the repository root:
```bash
git status
git add .
git commit -m "Complete BV Streetwear Part 3 functionality and SEO"
git push origin main
```
If your current branch is not `main`, check it with `git branch` and push that branch instead. Review `git status` before committing.

## Testing checklist
- [ ] Open all six pages and check navigation on desktop and mobile widths.
- [ ] Search for a product, filter each category and test all sorting options.
- [ ] Submit an empty enquiry form and confirm browser validation appears.
- [ ] Test a valid T-shirt enquiry with quantity 2; expected estimate is R798.
- [ ] Test custom design enquiry; it should say that a quote is required.
- [ ] Submit a valid contact message and confirm the email application opens with the fields populated.
- [ ] Check the map, telephone link, email link, images and browser console.
- [ ] Check `robots.txt` and `sitemap.xml` on the deployed domain.
- [ ] Test the deployed site on a phone and a desktop browser.

## References
- Google Search Central. (n.d.). *SEO Starter Guide*. Google. https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed 2 November 2026).
- Google Search Central. (n.d.). *Build and submit a sitemap*. Google. https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (Accessed 2 November 2026).
- MDN Web Docs. (n.d.). *Client-side form validation*. Mozilla. https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed 2 November 2026).
- MDN Web Docs. (n.d.). *HTML forms*. Mozilla. https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms (Accessed 2 November 2026).
- MDN Web Docs. (n.d.). *Using the Fetch API*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (Accessed 2 November 2026).
- OpenStreetMap contributors. (n.d.). *OpenStreetMap*. https://www.openstreetmap.org/ (Accessed 2 November 2026).
- GitHub Docs. (n.d.). *Configuring a publishing source for your GitHub Pages site*. GitHub. https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site (Accessed 2 November 2026).
- Netlify Docs. (n.d.). *Deploy overview*. Netlify. https://docs.netlify.com/site-deploys/overview/ (Accessed 2 November 2026).

## Author and project status
**Project:** BV Streetwear — WEDE5020 Part 3  
**Author/brand:** BV Streetwear  
**Stack:** HTML5, CSS3, JavaScript  
**Status:** Part 3 implementation prepared; deployment and live testing must be completed by the repository owner.
