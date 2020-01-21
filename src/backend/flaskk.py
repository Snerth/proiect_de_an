from flask import Flask ,jsonify, request
from dbConnect import DB
from flask_cors import CORS

db = DB()
mycursor = db.DB.cursor()
app = Flask(__name__)
CORS(app)

@app.route('/regions/get/number_of_shops')
def get_number_of_shops():
    country = request.args.get('country')
    mycursor.execute(f"select number_of_stores from regions where country like '{country}'")
    myresult = mycursor.fetchall()
    dataArr = []
    print(myresult)
    for data in myresult:
        dataArr.append(data[0])
    return jsonify(data = dataArr)

@app.route('/shops/get/shops')
def get_shops_info():
    mycursor.execute(f"select r.country, r.city, s.name_, s.number_of_items, s.id from regions r join stores s on r.id = s.region")
    myresult = mycursor.fetchall()
    dataArr = []
    print(myresult)
    for data in myresult:
        dataArr.append({
            "country": data[0],
            "city": data[1],
            "name": data[2],
            "num_of_stores": data[3],
            "id": data[4]
        })
    mycursor.execute(f"select p.date_of_purchase, p.num_of_sales, i.name_of_item, i.price, i.cost_price, i.profit, s.name_, i.stores_id from purchases p join (items i join stores s on i.stores_id = s.id) on p.item = i.id")
    sales = mycursor.fetchall()
    salesArr = []
    print(sales)
    for sale in sales:
        salesArr.append({
            "date_of_purchase": sale[0],
            "num_of_sales": sale[1],
            "name_of_item": sale[2],
            "price": sale[3],
            "cost_price": sale[4],
            "profit": sale[5],
            "name_": sale[6],
            "stores_id": sale[7]
        }) 
    return jsonify(data = dataArr, sales = salesArr)

@app.route('/items/get/items')
def get_items():
    mycursor.execute(f"select i.name_of_item, s.name_ from items i join stores s on i.stores_id = s.id")
    myresult = mycursor.fetchall()
    dataArr = []
    print(myresult)
    for data in myresult:
        dataArr.append(data[0] + ' | ' + data[1])
    return jsonify(data = dataArr)

@app.route('/items/get/item_id')
def get_id():
    store = request.args.get('store')
    item = request.args.get('item')
    mycursor.execute(f"select i.id from items i join stores s on i.stores_id = s.id where i.name_of_item like '{item}' and s.name_ like '{store}'")
    result = mycursor.fetchall()
    dataa = []
    for data in result:
        dataa.append(data[0])
    return jsonify(data = dataa)

@app.route('/add/purchase',methods=['POST','GET'])
def postTask():
    data = request.get_json(force=True)
    print(data)
    mycursor.execute(f"insert into purchases (date_of_purchase, item, num_of_sales) values ('{data['date']}','{data['selectedItem']}','{data['quantity']}')")
    db.DB.commit()
    return data

if __name__ == '__main__':
    app.debug = True
    app.run()