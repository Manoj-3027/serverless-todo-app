# serverless-todo-app
A serverless Todo application built with AWS Lambda, API Gateway, DynamoDB, and Amazon S3.


## 🚀 Live Demo

http://srvrls-todo-app.s3-website.ap-south-2.amazonaws.com

## 🛠️ Technologies Used

- AWS Lambda
- Amazon API Gateway (HTTP API)
- Amazon DynamoDB
- Amazon S3 Static Website Hosting
- IAM
- HTML
- CSS
- JavaScript

## ✨ Features

- Add new todos
- View all todos
- Serverless backend
- REST API integration
- Static website hosting on S3

## 🏗️ Architecture

```
Browser
   │
   ▼
Amazon S3
   │
   ▼
API Gateway
   │
   ├── GET /todo
   └── POST /todo
        │
        ▼
AWS Lambda
        │
        ▼
Amazon DynamoDB
```



## 👨‍💻 Author

Manoj G
