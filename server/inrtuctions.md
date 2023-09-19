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

2. Run npm install to install the packages in each directory
3. Run npm start to start the server or npm run dev in the client directory


4. Can create new users and companies. 
    Or Login with:
        account: user@user.com
        password: 1234567
