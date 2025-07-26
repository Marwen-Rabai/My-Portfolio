# Git Repository Setup Instructions for Marwen Rabai's Portfolio

This document provides step-by-step instructions to delete the old git history and set up a new git repository for Marwen Rabai's transformed portfolio.

## Prerequisites

1. Ensure you have Git installed on your system
2. Have access to Marwen Rabai's GitHub account
3. Ensure the target repository `https://github.com/Marwen-Rabai/My-Portfolio.git` exists and is empty

## Step-by-Step Instructions

### 1. Remove Old Git History

```bash
# Navigate to your project directory
cd /path/to/My-Portfolio

# Remove the existing .git folder (this deletes all git history)
rm -rf .git

# Alternatively, on Windows:
# rmdir /s .git
```

### 2. Initialize New Git Repository

```bash
# Initialize a new git repository
git init

# Add all files to staging
git add .

# Make the initial commit
git commit -m "Initial commit: Marwen Rabai Portfolio

- Transformed portfolio content for Marwen Rabai
- Updated personal information, projects, and skills
- Maintained original design and theme
- Ready for deployment"
```

### 3. Connect to New Remote Repository

```bash
# Add the new remote repository
git remote add origin https://github.com/Marwen-Rabai/My-Portfolio.git

# Verify the remote is set correctly
git remote -v
```

### 4. Push to New Repository

```bash
# Push to the main branch
git branch -M main
git push -u origin main
```

### 5. Verify Repository Setup

```bash
# Check the status
git status

# View the commit history
git log --oneline
```

## Alternative Method (If you prefer a clean slate)

If you want to start completely fresh:

### 1. Clone from Empty Repository

```bash
# Clone the empty repository
git clone https://github.com/Marwen-Rabai/My-Portfolio.git
cd My-Portfolio

# Copy all transformed files to this directory
# (Copy all files from the transformed portfolio)

# Add and commit
git add .
git commit -m "Initial commit: Marwen Rabai Portfolio"
git push origin main
```

## Post-Setup Configuration

### 1. Update Git Configuration (if needed)

```bash
# Set your name and email for this repository
git config user.name "Marwen Rabai"
git config user.email "marwenmagrii@gmail.com"
```

### 2. Set Up Branch Protection (Optional)

If you want to protect the main branch:
1. Go to GitHub repository settings
2. Navigate to "Branches"
3. Add branch protection rules for `main`

### 3. Configure GitHub Pages (Optional)

To deploy the portfolio:
1. Go to repository Settings → Pages
2. Select source: "Deploy from a branch"
3. Choose branch: `main`
4. Folder: `/ (root)`

## Important Notes

⚠️ **Warning**: Removing the `.git` folder will permanently delete all git history. Make sure you have backups if needed.

✅ **Success Indicators**:
- Repository shows Marwen Rabai as the author
- All personal information reflects Marwen's details
- Social links point to Marwen's profiles
- Project information is updated

## Troubleshooting

### If Push Fails

```bash
# If the repository is not empty, you might need to force push
git push -f origin main
```

### If Remote Already Exists

```bash
# Remove existing remote and add new one
git remote remove origin
git remote add origin https://github.com/Marwen-Rabai/My-Portfolio.git
```

## Verification Checklist

- [ ] Old git history removed
- [ ] New repository initialized
- [ ] All files committed with Marwen's information
- [ ] Remote repository connected
- [ ] Successfully pushed to GitHub
- [ ] Repository shows correct author information
- [ ] All social links updated (LinkedIn, Phone, Facebook)
- [ ] Personal information reflects Marwen Rabai's details
- [ ] Project descriptions updated

## Contact Information in Portfolio

The portfolio now includes:
- **LinkedIn**: https://www.linkedin.com/in/marwen-rabai/
- **Phone**: 213794236519
- **GitHub**: https://github.com/Marwen-Rabai/
- **Email**: marwenmagrii@gmail.com (based on GitHub profile)

## Next Steps

After setting up the repository:
1. Test the portfolio locally with `npm run dev`
2. Deploy to Vercel or your preferred hosting platform
3. Update any external links that reference the old portfolio
4. Share the new portfolio link

---

**Repository URL**: https://github.com/Marwen-Rabai/My-Portfolio.git
**Portfolio Owner**: Marwen Rabai
**Created**: $(date) 