# GetFlix

![home]

[GetFlix][getflix] is a NetFlix inspired, full-stack web application. Built on an RoR backend, PostgreSQL database, and React/Redux frontend architecture - it provides similar functionality to the popular video-streaming service.

## Summary

* Create an account
* Sign in / out
* Homepage populates with videos from every genre
* Browse by category
* Search by title
* Navigate movies, TV series, and episodes
* Add / remove shows from 'My List' page
* Custom video controls

## Technical Details

#### Title Overview Pane
The overview dropdown is a modular component that handles both series and movies. When fetching information about a title from the database, it determines whether an episode navigation tab should be rendered based on the amount of video content associated with the title.

#### Search
The search engine takes advantage of query strings to create sharable links to specific queries. It also allows for case-insensitive lookup, as well as search by fragment or substring of a title.

#### Navigation Bar

A single navigation bar is used across all routes, and renders the appropriate components (Account Menu vs Sign In), or receives distinct styling (Absolute vs Fixed) based on the location pathname.

[getflix]:  https://getflix-app.herokuapp.com

[home]: ./docs/images/home.png
