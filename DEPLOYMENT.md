# Deployment Guide for GitHub Pages

This guide explains how to deploy the Law Park Educational Trust website to GitHub Pages.

## Prerequisites

- GitHub repository: `chetannr/law-park-educational-trust-ngo-10-years-journey`
- Node.js and npm installed
- Git configured

## Deployment Methods

### Method 1: Automatic Deployment via GitHub Actions (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys your site when you push to the `main` branch.

**Steps:**

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Monitor the deployment:**
   - Go to the **Actions** tab in your repository
   - You should see a workflow run called "Deploy to GitHub Pages"
   - Wait for it to complete (usually takes 2-3 minutes)

4. **Access your site:**
   - Once deployed, your site will be available at:
   - `https://chetannr.github.io/law-park-educational-trust-ngo-10-years-journey/`

### Method 2: Manual Deployment using gh-pages

If you prefer manual deployment:

1. **Build the project:**
   ```bash
   cd website
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

   This will:
   - Build the project
   - Create/update a `gh-pages` branch
   - Push the built files to GitHub

3. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select `gh-pages` branch and `/ (root)` folder
   - Click **Save**

4. **Access your site:**
   - Your site will be available at:
   - `https://chetannr.github.io/law-park-educational-trust-ngo-10-years-journey/`

## Important Notes

- The base path is configured as `/law-park-educational-trust-ngo-10-years-journey/` in `vite.config.ts`
- All assets (images, JSON files) should be in the `public` folder
- The site uses client-side routing, so GitHub Pages needs to be configured to handle 404s properly
- After deployment, it may take a few minutes for changes to be visible

## Troubleshooting

### 404 Errors on Routes

If you're getting 404 errors when navigating to routes, you need to add a `404.html` file that redirects to `index.html`. GitHub Pages doesn't support client-side routing by default.

### Assets Not Loading

Make sure all assets are in the `public` folder and referenced with absolute paths starting with `/`.

### Build Errors

If you encounter build errors:
1. Make sure all dependencies are installed: `npm install`
2. Check for TypeScript errors: `npm run lint`
3. Try building locally: `npm run build`

## Local Development

For local development, the base path is set to `/` so you can run:

```bash
cd website
npm run dev
```

The site will be available at `http://localhost:5173`

## Updating the Site

After making changes:
1. Commit and push your changes to the `main` branch
2. If using GitHub Actions, deployment will happen automatically
3. If using manual deployment, run `npm run deploy` from the `website` directory

