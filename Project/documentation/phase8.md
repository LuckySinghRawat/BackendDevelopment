# Phase 8: Subscriptions, Profiles, and Watch History

In this phase, I created the subscription model and added more user-related functions to the backend. I also connected these functions to their respective routes.

### 1) `subscription.models.js`

The subscription model defines the structure of subscription data stored in the database. It describes the relationship between users and the channels or creators they subscribe to.

**Why it is used:**
- It provides a clear structure for storing subscription information.
- It helps manage which users subscribe to which channels.
- It makes subscription data easier to create, read, update, and maintain.

**Where and why I used it:**
- I created `subscription.models.js` in the project to learn how to design a separate model for relationships between users.
- It is used to store and manage subscription details in the YouTube clone backend.

### 2) `updateUserCoverImage`

The `updateUserCoverImage` function updates the cover image of the currently logged-in user.

**Why it is used:**
- It allows users to change their profile cover image.
- It keeps the user's profile information up to date.
- It handles the uploaded image and stores the updated image details in the database.

**Where and why I used it:**
- I created and used this function in the user controller to learn how to update user images.
- It is connected to a protected route so that only authenticated users can update their cover image.

### 3) `getUserProfile`

The `getUserProfile` function retrieves the profile information of a user from the database.

**Why it is used:**
- It allows the application to display a user's profile details.
- It provides information such as the username, avatar, cover image, and other public user data.
- It helps the frontend request and display the correct profile.

**Where and why I used it:**
- I created this function in the user controller to learn how to fetch a user profile using a route parameter.
- It is used in the project to retrieve and display user profile information.

### 4) `getWatchHistory`

The `getWatchHistory` function retrieves the videos watched by the currently logged-in user.

**Why it is used:**
- It allows users to view the videos they have watched previously.
- It helps the application keep track of a user's viewing activity.
- It provides personalized data for the user's account.

**Where and why I used it:**
- I created this function in the user controller to learn how to retrieve related data using MongoDB aggregation.
- It is used in the project to fetch and display the current user's watch history.

### 5) Connecting Functions to Routes

Routes define the API endpoints that allow clients to access controller functions.

**Why it is used:**
- Connecting a function to a route makes it available through an HTTP request.
- It keeps the API organized by separating URL paths from the controller logic.
- Protected routes can use authentication middleware before executing user-specific functions.

**Where and why I used it:**
- I connected `refreshAccessToken`, `changeCurrentPassword`, `getCurrentUser`, `updateUserDetails`, `updateUserAvatar`, `updateUserCoverImage`, `getUserProfile`, and `getWatchHistory` to their respective routes in `user.routes.js`.
- I used this to learn how controllers, routes, middleware, and client requests work together in the backend.

[Go back to README](../Readme.md)