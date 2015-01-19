from flask import Blueprint, render_template
from app.content import c_global, c_download


download = Blueprint('download', __name__)


@download.route('/download')
def v_download():
    return render_template('download.html', c_global=c_global, c_page=c_download)
