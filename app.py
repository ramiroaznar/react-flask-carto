import requests
from flask import Flask

app = Flask(__name__)

@app.route('/data', methods=['GET'])
def data():
  
  query = 'select * from populated_places limit 10'
  url = f'https://ramiroaznar.carto.com/api/v2/sql?q={query}&format=geojson'
  
  session = requests.Session()
  r = session.get(url)
  features = r.json()

  return features

if __name__ == '__main__':
  app.run(debug=True)
