from flask import Flask, jsonify, make_response
import requests
import json

app = Flask(__name__)

# 手动处理跨域请求
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

def fetch_bonds_from_eastmoney():
    """从东方财富获取可转债数据"""
    url = "http://push2.eastmoney.com/api/qt/clist/get"
    params = {
        'pn': '1',
        'pz': '50',  # 获取50只转债
        'po': '1',
        'np': '1',
        'ut': 'bd1d9ddb04089700cf9c27f6f7426281',
        'fltt': '2',
        'invt': '2',
        'fid': 'f243',
        'fs': 'm:1,t:7,m:1,t:8',  # 沪市+深市转债
        'fields': 'f12,f14,f2,f3,f15,f16,f17,f18,f62,f63,f64,f65,f66,f67,f68,f69,f70,f71,f72,f73,f75,f76,f84,f85,f86,f92,f184,f185'  # 基础字段
    }
    
    try:
        print("正在请求数据...")
        res = requests.get(url, params=params, timeout=10)
        data = res.json()
        
        bonds = []
        # 解析数据
        for item in data['data']['diff']:
            # 获取并转换价格
            price = item.get('f2', 0)
            if price == '-' or price == '':
                price = 0
            else:
                try:
                    price = float(price)
                except:
                    price = 0
                    
            # 获取并转换涨跌幅
            change = item.get('f3', 0)
            if change == '-' or change == '':
                change = 0
            else:
                try:
                    change = float(change)
                except:
                    change = 0
                    
            # 获取并转换溢价率
            premium = item.get('f67', 0)
            if premium == '-' or premium == '':
                premium = 0
            else:
                try:
                    premium = float(premium)
                except:
                    premium = 0
                    
            # 获取并转换转股价值
            convert_value = item.get('f66', 0)
            if convert_value == '-' or convert_value == '':
                convert_value = 0
            else:
                try:
                    convert_value = float(convert_value)
                except:
                    convert_value = 0
                    
            # 获取并转换正股涨跌幅
            stock_change = item.get('f65', 0)
            if stock_change == '-' or stock_change == '':
                stock_change = 0
            else:
                try:
                    stock_change = float(stock_change)
                except:
                    stock_change = 0
                    
            # 获取正股名称
            stock_name = item.get('f63', '')
            if stock_name == '-' or stock_name == '':
                stock_name = '--'
            
            bond = {
                'code': item.get('f12', ''),           # 转债代码
                'name': item.get('f14', ''),           # 转债名称
                'price': round(price, 2),              # 最新价
                'change': round(change, 2),            # 涨跌幅
                'high': item.get('f15', 0),            # 最高价
                'low': item.get('f16', 0),              # 最低价
                'open': item.get('f17', 0),             # 开盘价
                'volume': item.get('f18', 0),           # 成交量
                'turnover': item.get('f69', 0),         # 成交额
                'stock_code': item.get('f62', ''),      # 正股代码
                'stock_name': stock_name,               # 正股名称
                'stock_price': item.get('f64', 0),      # 正股价格
                'stock_change': round(stock_change, 2), # 正股涨跌幅
                'convert_value': round(convert_value, 2), # 转股价值
                'premium': round(premium, 2),           # 溢价率
            }
            
            # 计算双低值 = 价格 + 溢价率
            if price > 0 and premium > 0:
                bond['double_low'] = round(price + premium, 2)
            else:
                bond['double_low'] = 0
            
            bonds.append(bond)
        
        print(f"成功获取 {len(bonds)} 只可转债")
        return bonds
    except Exception as e:
        print(f"获取数据失败: {e}")
        # 如果失败，返回模拟数据
        return [
            {'code': '123456', 'name': '金诚转债', 'price': 128.5, 'change': 2.3, 'high': 129.5, 'low': 127.0, 'open': 127.5, 'volume': 12345, 'turnover': 158.6, 'stock_code': '600123', 'stock_name': '金诚矿业', 'stock_price': 15.6, 'stock_change': 1.8, 'convert_value': 111.5, 'premium': 15.2, 'double_low': 143.7},
            {'code': '127045', 'name': '牧原转债', 'price': 115.2, 'change': -0.8, 'high': 116.0, 'low': 114.5, 'open': 115.8, 'volume': 23456, 'turnover': 270.3, 'stock_code': '002714', 'stock_name': '牧原股份', 'stock_price': 42.3, 'stock_change': -1.2, 'convert_value': 106.2, 'premium': 8.5, 'double_low': 123.7},
            {'code': '113050', 'name': '南银转债', 'price': 108.3, 'change': 0.5, 'high': 108.8, 'low': 107.9, 'open': 108.0, 'volume': 34567, 'turnover': 374.2, 'stock_code': '601009', 'stock_name': '南京银行', 'stock_price': 8.7, 'stock_change': 0.3, 'convert_value': 88.7, 'premium': 22.1, 'double_low': 130.4},
        ]

@app.route('/api/bonds', methods=['GET'])
def get_bonds():
    """API接口：返回可转债数据"""
    bonds = fetch_bonds_from_eastmoney()
    return jsonify(bonds)

@app.route('/')
def index():
    return "可转债数据API服务已启动！访问 /api/bonds 获取数据"

if __name__ == '__main__':
    print("="*50)
    print("🚀 可转债数据服务启动中...")
    print("📊 访问地址: http://localhost:5000")
    print("📈 数据接口: http://localhost:5000/api/bonds")
    print("="*50)
    app.run(debug=True, port=5000)