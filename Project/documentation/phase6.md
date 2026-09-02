# Phase 6: Login, Logout, and JWT Authentication

In this phase, I learned how to build the login and logout logic in the user controller and connect them with routes.

### 1) `loginUser`

I built `loginUser` in `user.controller.js` and created the route in `user.routes.js`:

```js
router.route("/login").post(loginUser)
```

### Steps to Login

1. **Get the request body data** from the client.
2. **Get the username or email** from the request.
3. **Find the user** in the database.
4. **Check the password** to verify it matches.
5. **Generate the access token and refresh token**.
6. **Send the tokens in secure cookies** to the client.

**Why it is used:**
- It allows a user to log in by sending credentials and receiving a token.
- It is an important step in user authentication.

**Where and why I used it:**
- I used this in the project to authenticate users and generate access tokens after a successful login.

### 2) `logoutUser`

I built `logoutUser` in `user.controller.js` and created the route in `user.routes.js`:

```js
router.route("/logout").post(verifyJWT, logoutUser)
```

Here, I had to create `verifyJWT` in `auth.middlewares.js` to check whether the access token is present in the header or in the cookie before moving to the `logoutUser` route.

**Why it is used:**
- It makes sure only authenticated users can log out.
- It protects the logout route from unauthorized requests.

**Where and why I used it:**
- I used this in the project to verify the user before logging them out and clearing the token/session.

### 3) Access Token Handling

I also learned the following important things:

- `req.cookies?.accessToken` → reads the stored token from the client side.
- `req.header("Authorization")?.replace("Bearer ", "")` → reads the access token from the request header.
  - This means we must send the token in the header as:

 - ```text
   Authorization: Bearer <AccessToken>
   ```

**Why it is used:**
- Authentication tokens can be passed either in cookies or in headers.
- The server must read the token correctly to verify the user.

**Where and why I used it:**
- I used this while implementing login and logout logic to check whether the user is valid and authorized.

### 4) Cookie Options for HTTP and HTTPS

While creating the login flow, I learned that the token is sent as a cookie using `.cookie("Token", Token, options)`. The options depend on whether the request is sent over HTTP or HTTPS.

#### For HTTP

```js
options = {
    httpOnly: true,
    secure: false
}
```

#### For HTTPS

```js
options = {
    httpOnly: true,
    secure: true
}
```

**Why it is used:**
- `httpOnly: true` prevents JavaScript from accessing the cookie.
- `secure: true` ensures the cookie is sent only over HTTPS, which is safer.

**Where and why I used it:**
- I used this while sending authentication tokens to the browser so they could be stored safely and used in future requests.

### 5) Mongoose `findOneAndUpdate` Option Change

```js
const updatedUser = await User.findOneAndUpdate(
  { _id: id },
  { name: "Lucky" },
  { new: true } // return the updated document
);

const updatedUser = await User.findOneAndUpdate(
  { _id: id },
  { name: "Lucky" },
  { returnDocument: 'after' }
);
```

- **Old way (deprecated):** `{ new: true }`
- **New way (recommended):** `{ returnDocument: 'after' }`

**Why the change?**
- Mongoose is aligning with the MongoDB Node.js driver, which uses `returnDocument` instead of `new`.
- This makes the API more consistent and avoids confusion.

[Go back to README](../Readme.md)