Website of kivy.org
- Served at http://kivy.org
- Github at https://github.com/kivy/kivy-website


##Dependencies
```
pip install --upgrade Flask Frozen-Flask Flask-Assets pyyaml markdown cssutils
```

##Notes

* Content is declared in yaml files (short tutorial [here](http://learnxinyminutes.com/docs/yaml/)) which are kept in `site/app/content`
* Linked files (images, documents, videos, etc.) are kept in `site/app/static`
* When declaring a file path in yaml, it should be relative to the `static` folder (for `site/app/static/img/logo.png` use `img/logo.png`)