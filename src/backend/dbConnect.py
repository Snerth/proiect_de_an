import mysql.connector

class DB:

    def __init__(self):
        self.DB = mysql.connector.connect(
            host="localhost",
            user="root",
            passwd="webz33dab44",
            database="statistic",
            auth_plugin='mysql_native_password'
        )