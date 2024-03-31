Sorting Website

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->
**Table of Contents**

- [Sorting Website](#sorting-website)
    - [Learning Objectives](#learning-objectives)
    - [Setup](#setup)
        - [Install Git](#install-git)
        - [Downloading Repository](#downloading-repository)
        - [Create Virtual Environment](#create-virtual-environment)
    - [Brief Overview of Flask Project Structure](#brief-overview-of-flask-project-structure)
        - [HTML for Exercise 1](#html-for-exercise-1)
        - [Using Transcrypt](#using-transcrypt)
        - [Run Flask](#run-flask)
            - [Vocareum](#vocareum)
            - [Local Computer](#local-computer)
    - [Task 1: Generating Random Integers](#task-1-generating-random-integers)
    - [Task 2: Sorting Numbers](#task-2-sorting-numbers)
    - [Task 3: Creating a Text Input](#task-3-creating-a-text-input)
    - [Task 4: Sorting User Input](#task-4-sorting-user-input)
    - [Expected Output](#expected-output)

<!-- markdown-toc end -->


## Learning Objectives
In this mini project, you will develop a web app to sort numbers. By the end of this assignment, you should be able to:
- Create a simple web app using Flask web framework
- Use Transcrypt Python library to create front-end web script with Python
- Run a localhost web server 

## Setup

### Install Git

You need to have Git to do the project. Download and install the software according to your OS:
- Windows: [Git for Windows](https://git-scm.com/download/win)
- Mac OS: [Git for MacOS](https://git-scm.com/download/mac)

### Downloading Repository
Clone this repository from Github. On your terminal or Git Bash, type the following:

```shell
cd Downloads
git clone https://github.com/ArnoKenway/Sorting-Website.git
```

### Go to sorting folder

Once you have downloaded the repository, you can go to the folder called `sorting` for this project.

Windows:
```dos
cd Sorting-Website\sorting
dir
```

Unix/MacOS
```shell
cd Sorting-Website/sorting
ls
```

The last command should output the following:

```shell
Readme.md		
application.py
Pipfile
app
```

This handout can be found in the file `Readme.md`.

### Create Virtual Environment 

**You should open Anaconda Prompt to do the following steps.**

In the following steps, whenever there is a different between the OS commands, the **Windows** prompt will be represented by:
```shell
>
```
while the MacOS/Linux prompt will be represented by:
```shell
$
```

Go to the root folder `mp_sort`.

Windows:
```dos
> cd %USERPROFILE%\Downloads\Sorting-Website\sorting
```

Unix/MacOS:
```shell
$ cd ~/Downloads/Sorting-Website/sorting
```

First make sure that you have installed `pipenv` package.

```shell
pip install --user pipenv
```

If you are running the above commands in Vocareum, you may encounter the following message at the end of the installation.

```shell
WARNING: The script virtualenv is installed in '/voc/work/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
WARNING: The scripts pipenv and pipenv-resolver are installed in '/voc/work/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
```

It is basically saying that you need to add the newly installed `pipenv` program into the `PATH` so that you can use it from anywhere in the terminal. To do that, run the following command in the terminal.

```shell
export PATH='/voc/work/.local/bin':$PATH
```

We will call `sorting` folder as the **root** folder of our application. 

From the root folder, install the packages specified in the `Pipfile`.
```shell
pipenv install
```

The above steps will install Flask and Transcrypt Python libraries and some other necessary packages.


To activate the virtualenv, run
```shell
pipenv shell OR python -m pipenv shell
```

Alternatively, you can choose everytime you run a command to prepend that command with the following:
```shell
pipenv run
```

Ok, so let's enter into the shell by typing:
```shell
pipenv shell
```

You should see the word `(sorting)` in your prompt something like:

Windows:
```dos
(sorting) folder >
```
Unix/MacOS:
```shell
(sorting) user $
```

_To exit the virtual environment at the end of this mini project, simply type:_
```shell
exit
```

All the subsequent exercises assumes you are in the virtualenv shell. 


## Brief Overview of Flask Project Structure

We are using Flask web framework to create this web app. The first file you may notice is `application.py` in the root folder. Open that file using a text editor. You should see the following:

```python
from app import application

if __name__ == "__main__":
	application.run(host="0.0.0.0", port=8080, debug=True)
```

The last two lines runs the `application` object when it is run on the shell. The value will be used when you deploy it to Amazon Elastic Beanstalk. It also enables the debug mode to `True` so that you can see any error messages when they occur. The `application` object is imported in the first line from the `app` package. The `app` package is in a folder called `app`:

```shell
sorting/
  app/
    __init__.py
    routes.py
    static/
    templates/
```

The file `__init__.py` contains the line that creates the `application` object as a `Flask` instance.

```python
from flask import Flask

application = Flask(__name__)

from app import routes
```

This file also import the file `routes.py` which defines the URL routing.

```python
from flask import render_template
from app import application

@application.route('/')
@application.route('/index')
def index():
    return render_template('index.html', title='Mini Project 1 Home')

@application.route('/ex1')
def exercise1():
    return render_template('ex1.html', title='Mini Project 1 Exercise 1')

@application.route('/ex2')
def exercise2():
    return render_template('ex2.html', title='Mini Project 1 Exercise 2')
```

The first route indicates when a user enter the URL with "/" or "/index" at the end, our web app will serve this request by calling `index()` function. The `index()` function will return a HTML response following a template called `index.html`. This file `index.html` can be found inside the `templates` folder.

```shell
sorting/
  app/
    __init__.py
    routes.py
    static/
    templates/
      index.html
      ex1.html
      ex2.html
```

The other two routes does the same by serving any request to "/ex1" and "/ex2". The templates for these two are provided inside the `template` folder. 

For Exercise 1, you may want to look into the file `ex1.html`. Open this file in a text editor.

### HTML for Exercise 1

HTML code normally contains of two section, the header and the body. Each of the elements can be identified by their tags. The header element for `ex1.html` is as below:

```html
<head>
	<title>{{title}}</title>
	<script type="module">import * as library from '/static/__target__/library.js'; window.library = library;</script>
</head>
```

The `<title>` set the title of the page. Inside this tag we found `{{title}}`. The two curly braces is a Jinja template syntax that allow you to change the HTML code. It is a kind of variable that you can set. This variable `title` is actually set when `render_template()` is called in `routes.py`.

```python
@application.route('/ex1')
def exercise1():
    return render_template('ex1.html', title='Mini Project 1 Exercise 1')
```

In this code, the variable `title` is set to `Mini Project 1 Exercise 1`.

The second tag `<script ...>...</script>` is to import our script. We will generate this Javascript file `library.js` from our Python `library.py` file inside the `static` folder. 

```shell
sorting/
  app/
    __init__.py
    routes.py
    static/
      library.py
```

All your work for this mini project will be done inside `library.py`.

### Using Transcrypt

Javascript is the commonly used language for front-end web development. However, since this course only covers Python. We will use `Transcrypt` library which can compile and translate Python script into a Javascript file. To compile `library.py`, first we need to go into the `static` folder.

Windows:
```dos
> cd %USERPROFILE\Downloads\sorting\app\static
> dir
```

Unix/MacOS:
```shell
$ cd ~/Downloads/d2w_mini_projects/sorting/app/static
$ ls
```


The last command will list the file in that folder, and you should see:
```shell
library.py
```

Run Transcrypt on `library.py`:

```shell
python -m transcrypt -b -n library
```

The option `-b` means to build the javascript library. You can use `--help` for more options. Once it is done, you should be able to see a folder called `__target__` containing several files. To see the content of that folder:

Windows:
```dos
> dir
> dir __target__
```

Unix/MacOS:
```shell
$ ls
$ ls __target__
```

The output should be something like the following:
```shell
__target__/
  library.js
  library.project
  math.js
  org.transcrypt.__runtime__.js
  random.js
```

You should see `library.js` created inside this folder.

### Run Flask

Now you are ready to run your web app in your local computer. To do so, you need to go back to the root directory. This can be done with the following:

Windows:
```dos
> cd ..\..
```

Unix/MacOS:
```shell
$ cd ../..
```
which means go up the folder two times. Or, simply

Windows:
```dos
> cd %USERPROFILE\Downloads\sorting
```

Unix/MacOS:
```shell
$ cd ~/Downloads/sorting/
```


You should see `application.py` in this root folder. 

Now, you can run Flask by typing:

```shell
flask run
```

You should see that some output will be thrown out, which one of them would be:

```shell
* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

Now you can open your browser at `http://127.0.0.1:5000/` to see the web app. You should see something like the following:

![](https://www.dropbox.com/s/a2fqx5svvyqtqf9/mp1_home.png?raw=1)

To stop the web app, type `CTRL+C`. 

If you are doing your mini project in Vocareum, you can do a CTRL-click (Windows) or CMD-click on the `http://127.0.0.1:5000` link in the terminal and it will open a new tab in your browser. 

To stop the web app, type `CTRL+C`.

