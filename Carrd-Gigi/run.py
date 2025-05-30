from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, template_folder='templates', static_folder='static')

# Rota principal
@app.route('/')
def home():
    return render_template('index.html')

# Rotas para arquivos estáticos
@app.route('/static/css/<path:filename>')
def serve_css(filename):
    return send_from_directory('static/css', filename)

@app.route('/static/js/<path:filename>')
def serve_js(filename):
    return send_from_directory('static/js', filename)

# Rota para música
@app.route('/api/music')
def serve_music():
    try:
        return send_from_directory('static/music', 'song.mp3')
    except FileNotFoundError:
        return "Música não encontrada", 404

if __name__ == '__main__':
    app.run(debug=True, port=80)