import mysql from "serverless-mysql"

 export const conn = mysql({
    config: {
        host:"localhost",
        user: "root",
        password: "naruto251",
        port: 3306,
        database: "nextmysqlcrud2"

    }
})