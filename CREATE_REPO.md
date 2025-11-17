# Create GitHub Repository

## Step 1: Create the Repository on GitHub

1. Go to: https://github.com/new
2. Repository name: `law-park-educational-trust-ngo-10-years-journey`
3. Description: "Law Park Educational Trust NGO 10 years of journey"
4. Visibility: **Public** (required for GitHub Pages free tier)
5. **DO NOT** initialize with README, .gitignore, or license (we already have files)
6. Click "Create repository"

## Step 2: Authenticate Properly

### Option A: Use SSH (Recommended)

1. Make sure your SSH key is added to GitHub:
   - Go to: https://github.com/settings/keys
   - If you don't see your key, add it:
     ```
     ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINStfz/Xz09wP+qxZle0CMHYUdl4+85TG+Epspqtgu8W chetan.nr@gmail.com
     ```

2. Set remote to SSH:
   ```bash
   git remote set-url origin git@github.com:chetannr/law-park-educational-trust-ngo-10-years-journey.git
   ```

3. Test connection:
   ```bash
   ssh -T git@github.com
   ```

### Option B: Use Personal Access Token

1. Create a token at: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Name: "Law Park Website"
   - Select: `repo` and `workflow` scopes
   - Generate and copy the token

2. When pushing, use:
   - Username: `chetannr` (or your GitHub username)
   - Password: `<your personal access token>`

## Step 3: Push Your Code

After creating the repository and authenticating:

```bash
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository: https://github.com/chetannr/law-park-educational-trust-ngo-10-years-journey
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save

The GitHub Actions workflow will automatically deploy your site!

