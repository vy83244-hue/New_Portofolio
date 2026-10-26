WINDOWSERVER PORTFOLIO WEBSITE
==============================

Files:
- index.html
- css/style.css
- js/main.js
- assets/logos/     portfolio-style SVG logo placeholders
- assets/projects/  locally included SVG project illustrations

LOCAL TEST:
1. Extract this folder.
2. Open index.html in a browser, or use a local static web server.
3. Navigation and email enquiry form should work without a backend.

DEPLOY TO IIS:
1. Copy index.html, css, js, and assets into your deployed website's web root.
2. Keep the folder structure unchanged.
3. Open your site and press Ctrl+F5.

IMPORTANT:
- The company logo-style SVGs are custom placeholders, not official company logos.
  Replace assets/logos/kyndryl.svg, sk-finance.svg, suryoday.svg and solicon.svg
  with approved official image assets if you have permission to use them.
- Contact form uses mailto and opens the visitor's default email application.
  It does not send/store submissions server-side.
- Replace the LinkedIn link in index.html with your actual LinkedIn profile URL.
- No resume PDF is included. Add your final resume as assets/resume.pdf and add a
  download link if desired.
- The 10M+ alert metric is carried over from the supplied CV; verify it before
  publishing.
- This package is a static website and does not require .NET. It can be hosted on IIS.
