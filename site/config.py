import os
from os.path import join, abspath, dirname


_base_dir = abspath(dirname(__file__))

DEBUG = False
THREADS_PER_PAGE = 2
JSONIFY_PRETTYPRINT_REGULAR = False
# SESSION_COOKIE_SECURE = True
# PREFERRED_URL_SCHEME = 'https'
JSON_AS_ASCII = False
SECRET_KEY = 'This string will be replaced with a proper key.'

WTF_CSRF_SECRET_KEY = 'This string will be replaced with a proper key.'

SQLALCHEMY_DATABASE_URI = 'sqlite:///' + join(_base_dir, 'storage.sqlite')

FREEZER_DESTINATION = join(_base_dir, 'build')
FREEZER_DEFAULT_MIMETYPE = 'text/html'

FROZEN_SITE = False
FREEZING_SITE = int(os.getenv('FREEZING_SITE', '0'))
