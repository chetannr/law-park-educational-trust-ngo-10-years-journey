# GitHub Authentication Setup

## Option 1: SSH Authentication (Recommended)

### Step 1: Add SSH Key to GitHub

1. Your SSH public key is:
   ```
   ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINStfz/Xz09wP+qxZle0CMHYUdl4+85TG+Epspqtgu8W chetan.nr@gmail.com
   ```

2. Go to: https://github.com/settings/keys
3. Click "New SSH key"
4. Title: "MacBook Pro" (or any descriptive name)
5. Paste the key above
6. Click "Add SSH key"

### Step 2: Test Connection

```bash
ssh -T git@github.com
```

You should see: "Hi chetannr! You've successfully authenticated..."

### Step 3: Push Your Code

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

---

## Option 2: Personal Access Token (HTTPS)

### Step 1: Create Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: "Law Park Website Deployment"
4. Select scopes:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)

### Step 2: Use Token for Push

When pushing, use the token as your password:

```bash
git push origin main
# Username: chetan.nr@gmail.com
# Password: <paste your token here>
```

Or configure Git credential helper:

```bash
git config --global credential.helper osxkeychain
```

Then on first push, enter:
- Username: `chetan.nr@gmail.com`
- Password: `<your personal access token>`

---

## Current Status

- ✅ SSH key generated: `~/.ssh/id_ed25519_github`
- ✅ SSH config configured
- ✅ Remote URL set to: `git@github.com:chetannr/law-park-educational-trust-ngo-10-years-journey.git`

**Next Step:** Choose one of the options above and complete the authentication setup.

