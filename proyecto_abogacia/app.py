from flask import Flask, redirect, render_template, request
from flaskext.mysql import MySQL

app = Flask(__name__)

mysql = MySQL ()
app.config['MYSQL_DATABASE_HOST']='localhost'
app.config['MYSQL_DATABASE_USER']='root'
app.config['MYSQL_DATABASE_PASSWORD']=''
app.config['MYSQL_DATABASE_DB']='usuarios'
mysql.init_app(app)

@app.route('/')
def  index():
    #sql = "INSERT INTO `usuarios` (`usuario`, `contraseña`) VALUES ('pepito', 'nodebora');"
    #conn=mysql.connect()
    #cursor=conn.cursor()
    #cursor.execute(sql)
    #conn.commit()
    return render_template('usuarios/index.html')

@app.route('/create')
def create():
    return render_template('usuarios/create.html')

@app.route('/store', methods=['POST'])
def storage():
    _usuario=request.form['txtUsuario']
    _contraseña=request.form['txtContraseña']
    sql = "INSERT INTO `usuarios` (`usuario`, `contraseña`) VALUES (%s, %s);"
    
    datos = (_usuario,_contraseña)

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql,datos)
    conn.commit()
    return render_template('usuarios/index.html')

if __name__ == '__main__':
    app.run(debug=True)
