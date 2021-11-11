from flask import Flask, redirect, render_template, request, flash, url_for
from flaskext.mysql import MySQL
import numpy as np

app = Flask(__name__)
app.secret_key="Develoteca"

mysql = MySQL ()
app.config['MYSQL_DATABASE_HOST']='localhost'
app.config['MYSQL_DATABASE_USER']='root'
app.config['MYSQL_DATABASE_PASSWORD']=''
app.config['MYSQL_DATABASE_DB']='usuarios'
mysql.init_app(app)

@app.route('/')
def  index():
    sql = "SELECT * FROM `usuarios`;"
    conn=mysql.connect()
    cursor=conn.cursor()
    cursor.execute(sql)
    
    usuarios = cursor.fetchall() #selecciona todos los datos
    print(usuarios)

    conn.commit()
    return render_template('usuarios/index.html', usuarios=usuarios)

@app.route('/create')
def create():
    return render_template('usuarios/create.html')

@app.route('/store', methods=['POST'])
def storage():
    _usuario=request.form['txtUsuario']
    _contraseña=request.form['txtContraseña']

    #sql = "INSERT INTO `usuarios` (`usuario`, `contraseña`) VALUES (%s, %s);"
    
    #datos = (_usuario,_contraseña) 
    sql = "SELECT * FROM `usuarios`;"
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql)
    usuarios = cursor.fetchall()
    for i in usuarios:
        print(i)
        print(i[0])
        if _usuario==i[0] and _contraseña==i[1]:
            conn.commit()
            return render_template('usuarios/login.html')
        else:
            continue
    flash('Usuario incorrecto')
    return redirect(url_for('create'))

if __name__ == '__main__':
    app.run(debug=True)
