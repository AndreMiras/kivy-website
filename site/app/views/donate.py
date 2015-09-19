from flask import Blueprint, render_template
from app.content import c_global, c_donate


donate = Blueprint('donate', __name__)


@donate.route('/donate')
def v_donate():
    return render_template('donate.html', c_global=c_global, c_page=c_donate)
