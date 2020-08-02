# import requests
import Flask, request, render_template
app = Flask(__name__)

@app.route('/')
def my_form():
    return render_template('EmailForm.js')

@app.route('/', methods=['POST'])
def my_form_post():
    variable = request.form['page_input']
    return variable

url = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup"

result = my_form_post()

querystring = {"term": result,"country":"us"}

headers = {
    'x-rapidapi-host': "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    'x-rapidapi-key': "f9db16f536mshf948f438121596fp10112bjsn077ae1a6a928"
    }

def getAvail():
    response = request("GET", url, headers=headers, params=querystring)
    print(response.text)