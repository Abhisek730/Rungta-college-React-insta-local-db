Deploying a simple React application can be done in several ways, but one of the simplest methods is using GitHub Pages. Here's a step-by-step guide to deploying your React app using GitHub Pages:

### Step 1: Prepare Your Project for Deployment

1. **Install the `gh-pages` package**:
   ```bash
   npm install --save gh-pages
   ```

2. **Add `homepage` to `package.json`**:
   Open your `package.json` file and add the following line. Replace `your-username` and `your-repo-name` with your GitHub username and repository name:
   ```json
   "homepage": "https://your-username.github.io/your-repo-name"
   ```

3. **Add deployment scripts to `package.json`**:
   In your `package.json`, add the following `predeploy` and `deploy` scripts:
   ```json
   "scripts": {
     // ...other scripts
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

### Step 2: Initialize a Git Repository and Push to GitHub

1. **Initialize a Git repository** (if you haven't already):
   ```bash
   git init
   ```

2. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Initial commit"
   ```

3. **Create a new repository on GitHub**:
   Go to GitHub and create a new repository. Do not initialize it with a README, .gitignore, or license.

4. **Add the GitHub remote repository**:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   ```

5. **Push your code to the repository**:
   ```bash
   git push -u origin main
   ```

### Step 3: Deploy Your Application

1. **Deploy the app**:
   ```bash
   npm run deploy
   ```

This command will create a `gh-pages` branch in your repository and deploy the app to GitHub Pages.

### Step 4: Access Your Deployed Application

After the deployment process is complete, you can access your application at:
```
https://your-username.github.io/your-repo-name
```

### Summary

1. **Install `gh-pages`**:
   ```bash
   npm install --save gh-pages
   ```

2. **Update `package.json`**:
   ```json
   "homepage": "https://your-username.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Access your app** at `https://your-username.github.io/your-repo-name`.

This is a straightforward and efficient way to deploy a React app using GitHub Pages.