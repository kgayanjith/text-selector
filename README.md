<p align="center">
  <img src="resources/icon.png" alt="Text Selector icon" width="128" height="128" />
</p>

<h1 align="center">Text Selector</h1>

<p align="center">
  Select text on any web page that tries to block it.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Chrome_Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Chrome Extension" />
  <img src="https://img.shields.io/badge/Manifest_V3-34A853?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Manifest V3" />
  <img src="https://img.shields.io/badge/License_MIT-yellow?style=for-the-badge" alt="License" />
</p>

<p align="center">
  <a href="#about">About</a> |
  <a href="#built-with">Built With</a> |
  <a href="#features">Features</a> |
  <a href="#install">Install</a> |
  <a href="#usage">Usage</a> |
  <a href="#icon">Icon</a>
</p>

## About

Some websites turn off text selection so you cannot highlight or copy their content. Text Selector is a small Chrome extension that switches selection back on with a single click. Click the toolbar icon once to turn it on and click again to turn it off.

## Built With

<p>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white" alt="JSON" />
  <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
</p>

JavaScript powers the extension itself including the content script and the background service worker. Python with the Pillow library is used only to generate the icon sizes from your source image. JSON is used for the extension manifest.

## Features

| Feature | Description |
|---|---|
| One click toggle | Click the toolbar icon to switch the extension on or off |
| ON badge | A small badge shows when the extension is active |
| Strong override | Beats page rules that use important flags |
| Event unblocking | Stops pages from cancelling selection and copy events |
| Dynamic pages | Works on content that loads after the page opens |
| Light and simple | No popup and no tracking and no extra permissions |

## Install

The icons folder is created by a Python script so run it once before loading the extension. The steps are in the Icon section below.

1. Download or clone this repository to your computer.
2. Create the icons folder by following the Icon section below.
3. Open Chrome and go to the Extensions page from the Chrome menu.
4. Turn on Developer mode using the switch at the top right.
5. Click Load unpacked and choose the project folder.
6. Click the puzzle icon in the toolbar and pin Text Selector.

## Usage

1. Open any website where you cannot select text.
2. Click the Text Selector icon. The ON badge appears and the page reloads.
3. Select the text as you normally would.
4. Click the icon again to turn the extension off.

> The on and off state applies to all tabs. Tabs that are already open need a manual reload after you switch it.

## Limits

Text Selector cannot select text that is drawn inside an image or a canvas. It also cannot run on the built in Chrome PDF viewer or on Chrome internal pages.

## Project structure

```
Text Selector
  manifest.json
  background.js
  content.js
  make_icon.py
  requirements.txt
  .gitignore
  README.md
  resources
    icon.png
  icons (created when you run make_icon.py)
    icon16.png
    icon32.png
    icon48.png
    icon128.png
```

## Icon

The image at the top of this page is resources/icon.png. This is the one file you replace when you want a new design. Keep the same file name and use a square image of at least 128 by 128 pixels.

When you run make_icon.py it reads that image and creates the icons folder with all four sizes that Chrome needs.

1. Open a terminal inside the project folder.
2. Create a virtual environment.

```
python -m venv .venv
```

On a Mac you may need to type python3 instead of python.

3. Activate the virtual environment.

On Mac or Linux

```
source .venv/bin/activate
```

On Windows PowerShell

```
.venv\Scripts\Activate.ps1
```

On Windows Command Prompt

```
.venv\Scripts\activate.bat
```

When it is active you will see (.venv) at the start of your terminal line.

4. Install everything listed in the requirements file.

```
pip install -r requirements.txt
```

5. Run the icon script.

```
python make_icon.py
```

6. Reload the extension in Chrome to see the new icon.
7. Leave the virtual environment when you finish.

```
deactivate
```

## License

This project is free to use for learning and personal projects.