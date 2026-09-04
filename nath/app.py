from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

app.mount('/static', StaticFiles(directory='nath/static'), name='static')

templates = Jinja2Templates(directory='nath/templates')


@app.get('/')
def home(request: Request):
    usuario = 'Daniel'

    return templates.TemplateResponse(request=request, name='index.html', context={'usuario': usuario})
