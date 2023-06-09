# Jamming
A portfolio project from CodeCademy. React + Vite + TailwindCSS + HeroIcons + Spotify API.

## Project Requirements

- Build a web app using React
- Version control your application with Git and host the repository on GitHub
- Integrate with Spotify or another API
- Deploy your application
- Write a README (using Markdown) that documents your project, including:
  - The purpose of your project
  - Technologies used
  - Features
  - Future work
  
## Purpose
1. To put my newly found knowledge into use
2. Problem solve
3. Have fun

## Technologies used / Stack
- Vite
- React
- TailwindCSS
- HeroIcons
- Spotify API

## Features:
- Users can search for songs by song title.
- You can also include functionality to search by other attributes like artist’s name, genre, etc.
- Users can see information about each song like title, artist, and album for songs they queried
- You can also include other information – the design is up to you
- Users can export their custom playlist to their personal Spotify account

## Work / Progress:
- [x] Setup local environment
- [x] Setup version control
- [x] Static components
  - [x] Create static components
  - [x] JSX + Styling (Good enough for now)
- [x] Implement track listing in the component tree
- [x] Implement playlists in the component tree
- [x] Implement adding songs to a custom playlist
- [x] Implement removing songs from a custom playlist
- [x] Implement playlist renaming
- [x] Obtain a Spotify Access Token
- [x] Implement Spotify search request
- [x] Implement saving the playlist to a users account
- [x] Testing and debugging
- [x] Review project

# How to run

## Development environment
1. Clone the repository
2. 
```zsh
npm install
```
3. 
```zsh
cp .env.example .env
```
4. Fill in the two mandatory environment variables. (These details can be found in your https://developer.spotify.com app.)
5. 
```zsh
npm run dev
```

## Production environment
This project is not meant to be ran in production.