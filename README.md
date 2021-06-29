## Music Controller Jam 
a collaborative music playing app system using react, django and spotify api, where friends can join/make rooms for shared experience of music

![demo_gif](music_app.gif)

### Technologies Used
used react for frontend, rest_framework - Django, and Spotify API

### Setup Spotify API
go to [Spotify Developers Dashboard](https://developer.spotify.com/dashboard/) and create a new app

within the django's spotify app create a `credentials.py` file and add these varibles which you'll get from spotify app dashboard
```python3
SPOTIFY_CLIENTID = "here"
SPOTIFY_CLIENTSECRET = "here"
REDIRECT_URI = "here"
```
after that authenticated spotify backend will send request to spotify api

![spotify_api](spotify_api.png)

### npm setup
go to frontend app and open terminal and paste these commands to setup
```powershell
npm init -y
npm i webpack webpack-cli --save-dev
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
npm i react react-dom --save-dev
npm install @material-ui/core
npm install @babel/plugin-proposal-class-properties
npm install react-router-dom
npm install @material-ui/icons
```
