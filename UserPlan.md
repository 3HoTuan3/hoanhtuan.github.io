# TASK: Full Clone & Rebuild — lukebaffait.fr → hoanhtuan.github.io

## Objective
Perform a FULL FEATURE CLONE of the reference website (lukebaffait.fr) 
and rebuild it as my personal portfolio at hoanhtuan.github.io using 
Next.js + Tailwind CSS.

## Step 1 — Read Reference Source (MANDATORY FIRST STEP)
- Read ALL files recursively in: D:\Document(D)\Các môn học ở trường\Web Design And Development\CodeForWeb\Portfolio\lukebaffait.fr\
- Catalog every component, page, animation, interaction, and asset found
- Do NOT skip any file — understand the full structure before writing code

## Step 2 — Full Feature Clone Requirements
Clone EVERYTHING from the reference site, including but not limited to:

### Layout & Structure
- [ ] Exact page layout and section order
- [ ] Navigation bar (desktop + mobile/responsive behavior)
- [ ] Header, Hero section, Footer
- [ ] All pages and routes

### UI Components
- [ ] Every UI component (cards, buttons, modals, tooltips, etc.)
- [ ] Exact typography (font family, sizes, weights, spacing)
- [ ] Exact color palette and theming (light/dark mode if present)
- [ ] Spacing, padding, margin — pixel-accurate where possible

### Animations & Interactions
- [ ] All scroll animations (fade-in, slide, parallax, etc.)
- [ ] Hover effects on every interactive element
- [ ] Page transitions
- [ ] Loading animations or skeleton screens
- [ ] Any cursor custom effects

### Functionality
- [ ] All interactive features (forms, filters, toggles, etc.)
- [ ] Language switcher (if present)
- [ ] Theme switcher (if present)
- [ ] Any API calls or dynamic data — replicate the behavior

### Assets
- [ ] Replicate icon usage (use same library or equivalent)
- [ ] Replicate image layout and placeholders
- [ ] Replicate any SVG illustrations or decorative elements

## Step 3 — Replace Content With My Info
Only replace the personal content (keep structure 100% intact):
- Name: [Ho Tuan]
- Role/Title: [Full Stack Developer]
- Bio/About: [your description]
- Skills: [your skills]
- Projects: [your projects]
- Contact info: [hotuan400@gmail.com, [GitHub](https://github.com/3HoTuan3), [Facebook](https://www.facebook.com/H41u4n03), etc...]

## Step 4 — Tech Stack
- Framework: Next.js (App Router preferred)
- Styling: Tailwind CSS (no other CSS frameworks)
- Animations: Framer Motion (or match whatever library reference uses)
- Language: TypeScript preferred
- Icons: Match reference or use Lucide / React Icons

## Step 5 — GitHub Actions Deployment
Set up full CI/CD pipeline:
- Trigger: push to main branch
- Build: next build + next export (static output)
- Deploy: publish /out folder to gh-pages branch
- Result: live at https://hoanhtuan.github.io

## Output Expected From You
1. Full Next.js project file structure
2. All component files (no placeholders, fully implemented)
3. All page files
4. tailwind.config.js fully configured
5. next.config.js configured for static export + GitHub Pages base path
6. .github/workflows/deploy.yml for GitHub Actions
7. README.md with setup instructions

## Quality Checklist (verify before finishing)
- [ ] Every section from reference is present
- [ ] All animations are implemented
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] No broken links or missing assets
- [ ] GitHub Actions workflow is valid YAML
- [ ] Site builds successfully with `npm run build`