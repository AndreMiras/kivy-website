from flask import Flask


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config_name)

    if not app.config['FREEZING_SITE']:
        # load api, db, etc.
        pass

    if not app.config['FROZEN_SITE']:
        from app.assets import assets
        assets.init_app(app)
        from app.views import home, download
        app.register_blueprint(home)
        app.register_blueprint(download)

    return app
