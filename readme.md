# TV Browser

Use the [TV Maze API docs](http://www.tvmaze.com/api) to build a **jQuery** single-page app that allows a user to search TV shows. The documentation lists the various **endpoints** that the TV Maze development team has made available. Identify which endpoint(s) would most useful for your TV show searching app. Try clicking on the URL examples for each endpoint to see the structure of the JSON data at that endpoint. Each of the API's endpoints may have differently structured JSON responses.

When testing out the API's endpoint URLs, you will want to install [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) to make the JSON responses more readable.

## Requirements

 1. The `"#show-select"` should be hidden by default.

 2. When the user may submits a search for a TV show...
  - the `"#show-select"` field should be un-hidden.
  - it should be populated with all search results.
  - the first select option should read "Shows matching `keyword`…".

 3. Whenever the user selects a title from the `#show-select` field (HINT: listen for a `"change"` event), the app should populate the `"#show-detail"` div with that show's name and image.

## Take a look:

http://ga-wdi-exercises.github.io/tv-browser/
