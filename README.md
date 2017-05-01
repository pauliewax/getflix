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

#### Series/Movie Overview Pane
The overview dropdown is a modular component that handles both series and movies. When fetching information about a title from the database, it determines whether an episode navigation tab should be rendered based on the amount of video content associated with the title.

![overview]

#### Search
GetFlix's search engine takes advantage of query strings to create sharable links to specific queries. It also allows for case-insensitive lookup, as well as search by fragment or substring of a title.

![query]

#### Navigation Bar

A single navigation bar is used across all routes, and renders the appropriate components (Account Menu vs Sign In), or receives distinct styling (absolute vs fixed) based on the location pathname.

![nav1]
![nav2]

#### Video Controls

![play]

Video streaming utilizes HTML5 video with a custom control panel. The controls encourage intuitive, full-screen viewing by disappearing when not hovered over. The progress bar displays time elapsed and total runtime, in addition to allowing for accurate seeking/skipping within the video.

### Row Highlighting

![hover]

Content in the same row as the currently selected video is pushed to either side and dimmed in order to highlight the focus video. This is achieved elegantly through layered CSS hover effects and sibling selectors. The active row is translated to the left by a fixed amount, and all successive children of the same type as the focus video are translated to the right by double that amount.

```
.seriesRow .seriesStrip:hover {
  transform: translate3d(-50px, 0, 0);
}

.seriesStrip {
  z-index: 50;
  width: 100%;
  display: flex;
  transition: transform 500ms ease;
  flex: 1;
}

.serieWrapper:hover ~ .serieWrapper {
  transform: translate3d(100px, 0, 0);
}

.seriesRow:hover .series {
  opacity: 0.3;

  &:hover {
    transform: scale(1.85);
    opacity: 1;
    z-index:51;
  }
}
```  

[getflix]:  https://getflix-app.herokuapp.com

[home]: ./docs/images/home.png
[overview]: ./docs/images/overview.png
[play]: ./docs/images/play.png
[query]: ./docs/images/query.png
[nav1]: ./docs/images/nav1.png
[nav2]: ./docs/images/nav2.png
[hover]: ./docs/images/hover.png
