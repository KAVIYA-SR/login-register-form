import mysql.connector
from flask import Flask, request, jsonify
from ast import literal_eval
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
con=mysql.connector.connect(host="localhost",user="root",password="root",database="user")

@app.route("/signup",methods=['POST'])
def signup():
    data=request.json
    res=con.cursor()
    sql="insert into user(name,email,password) values(%s,%s,%s)"
    name=data['name']
    email=data['mail']
    password=data['passs']
    value =(name,email,password)
    try:
        res.execute(sql,value)
        con.commit()
        return jsonify({'result':"Succuessfully registered"})
    except:
        return jsonify({'result':"You've already registered"})

@app.route("/signin",methods=['POST'])
def signin():
    data=request.json
    res=con.cursor()
    sql="select * from user"
    res.execute(sql)
    answer=res.fetchall()
    email=(data['mail'])
    password=(data['pas1'])
    for ans in answer:
        if(ans[1]==email):
            if(ans[2]==password):
                return jsonify({'result':"you have successfully logged in"})
            else:    
                return jsonify({'result':"password / email missmatch "})
    return jsonify({'result':"you don't have an account"})

if __name__ == '__main__':
    app.run(debug=True)