### Task: Create an Instagram Clone with React and Local Storage

Your task is to create a simple Instagram clone using React.js and local storage. This application will allow users to upload posts with image URLs and captions, view the posts on the homepage, like the posts, and delete them. Finally, you will deploy the application using GitHub Pages.

#### Requirements:
1. **User should be able to upload a post with an image URL and a caption.**
2. **User should be able to view all posts on the homepage.**
3. **User should be able to like a post.**
4. **User should be able to delete a post.**
5. **Deploy the application using GitHub Pages.**

### Step-by-Step Guide

#### Step 1: Set Up the React Project
1. Create a new React application using `create-react-app`.
   - Command: `npx create-react-app instagram-clone`
2. Navigate into your project directory.
   - Command: `cd instagram-clone`
3. Install Bootstrap for styling.
   - Command: `npm install bootstrap`

#### Step 2: Create Components

1. **Create the `PostForm` Component**
   - File Path: `src/components/PostForm.js`
   - Hints:
     - Use the `useState` hook to manage form inputs.
     - Create a form with fields for `image URL` and `caption`.
     - On form submission, call a function passed via props to add a new post.

2. **Create the `PostList` Component**
   - File Path: `src/components/PostList.js`
   - Hints:
     - Iterate over the `posts` array and display each post.
     - Include buttons for "Like" and "Delete" functionalities.
     - Display the number of likes.

3. **Style Your Components**
   - File Path: `src/App.css`
   - Hints:
     - Add styling for the form and post list to enhance appearance.
     - Ensure the form is centered and the post list items are styled neatly.

#### Step 3: Integrate Components and Add Logic

1. **Update the Main Application Logic in `App.js`**
   - File Path: `src/App.js`
   - Hints:
     - Use `useState` to manage the list of posts.
     - Use `useEffect` to load posts from local storage when the app loads.
     - Implement functions to add a post, like a post, and delete a post.
     - Pass these functions as props to the `PostForm` and `PostList` components.

#### Step 4: Deployment

1. **Install `gh-pages` Package**
   - Command: `npm install --save gh-pages`

2. **Update `package.json`**
   - Hints:
     - Add a `homepage` field with the URL where your app will be hosted (e.g., `https://your-username.github.io/your-repo-name`).
     - Add `predeploy` and `deploy` scripts to your `package.json`.

3. **Initialize a Git Repository and Push to GitHub**
   - Commands:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/your-username/your-repo-name.git
     git push -u origin main
     ```

4. **Deploy to GitHub Pages**
   - Command: `npm run deploy`

### Summary

1. **Set up your React app** using `create-react-app`.
2. **Install Bootstrap** for styling.
3. **Create components** (`PostForm` and `PostList`) with the necessary functionality.
4. **Add styles** to make your app look nice.
5. **Update the main app logic** in `App.js` to handle state and interactions.
6. **Install `gh-pages`** and configure `package.json` for deployment.
7. **Initialize a Git repository** and push your code to GitHub.
8. **Deploy your application** to GitHub Pages.

### Tips
- Make sure each component is well-organized and functional before moving to the next step.
- Test your application thoroughly before deploying.
- If you encounter issues, use the browser console and React DevTools to debug.