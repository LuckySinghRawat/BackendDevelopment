# Phase 7: Account and Profile Management

In this phase, I created and learned about several important user-related functions that help manage authentication, security, and profile updates in the backend.

### 1) `refreshAccessToken`

This function is used to generate a new access token when the previous one expires.

**Why it is used:**
- Access tokens are short-lived for security reasons.
- When a token expires, the user should not have to log in again immediately.
- It helps keep the session active without compromising security.

**Where and why I used it:**
- I used this while learning JWT-based authentication in the project.
- It is important for managing user sessions and protecting authenticated routes.

### 2) `changeCurrentPassword`

This function allows a logged-in user to change their password.

**Why it is used:**
- Users often need to update their password for security or account management.
- It helps make sure the account remains protected and controlled by the rightful user.

**Where and why I used it:**
- I used this while learning how to handle account security in the backend.
- It is necessary for protecting the user account and allowing safe password updates.

### 3) `getCurrentUser`

This function fetches the currently logged-in user's details from the database.

**Why it is used:**
- The backend needs to know which user is currently authenticated.
- It helps return the correct user information to the frontend or client.

**Where and why I used it:**
- I used this while learning how to access user information after login.
- It is important for personalizing the user experience and validating the logged-in state.

### 4) `updateUserDetails`

This function updates the information of the current user, such as their details and profile information.

**Why it is used:**
- Users may want to edit their personal information.
- It allows the backend to update stored data while keeping the account information accurate.

**Where and why I used it:**
- I used this in the project while learning how to update user profile information.
- It helps manage account changes and keeps the database in sync with the user.

### 5) `updateUserAvatar`

This function updates the user's avatar or profile image.

**Why it is used:**
- A profile image is an important part of a user account.
- It allows the user to change their photo and keeps their profile up to date.

**Where and why I used it:**
- I used this while learning how to work with uploaded files and Cloudinary.
- It helps store and update the image URL associated with the user's account.

### 6) `updateUserCoverImage`

This function updates the user's cover image.

**Why it is used:**
- A cover image helps give the profile a more complete and personalized look.
- It allows users to change the banner or background image for their profile.

**Where and why I used it:**
- I used this while learning how to manage multiple image uploads in the backend.
- It is important for handling profile customization and storing image data properly in the database.

[Go back to README](../Readme.md)