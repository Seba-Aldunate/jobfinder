INTRUCTIONS

Firstly move to the server or client directory (eg: cd server)

1. Create a .env file
    The .env file will contain the following:
    i. MONGODB_URL = database connection string
    ii. JWT_SECRET_KEY = your secreate key
    iii. PORT = 8801
    iv. AUTH_EMAIL= email address
    v. AUTH_PASSWORD=email access password
    vi. APP_URL = http://localhost:8801/api-v1

    Note: I used hotmail account to send verification email,
     so you can just create one because hotmail account is reliable 
     in product and has no configuration.

    Alos, change API_URL when you deploy your app else use localhost
    with the appropriate port number

2. Run npm install to install the packages in each directory
3. Run npm start to start the server or npm run dev in the client directory


4. Can create new users and companies. 
    Or Login with:
        account: user@user.com
        password: 1234567