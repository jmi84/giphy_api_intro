# GIPHY API

You have probably played around with GIPHY at some point. It is a massive database of
GIFs, and provides a variety of search tools through its API. Below are a description
of the available API methods, and a few ideas that might get you started. I would much rather see you approach some of your own project ideas, but feel free to use these as a springboard.

Included in this repository is a dead-simple example of the Translate endpoint in action.
There you can see how you can send an AJAX request, and use JQuery to place your
response on the page.

For more information on the API and it's endpoints, [visit the documentation on the GIPHY website.](https://developers.giphy.com/docs/).

## Endpoints

### Search (GET /v1/gifs/search)
We can use the API to perform the same searches that we would on
their website. This would return a collection of GIF objects that we can parse through.

**IDEA:** Create a breakdown of where the results come from. The GIF object tells us
where the GIF was posted.

```
...
"source_tld": "reddit.com",
"source_post_url": "https://reddit.com"
...
```

Using this, create a table, breaking down the sources for any given search. Maybe you could attempt to do some data visualization using a library like D3js or p5js!

### Translate (GET /v1/gifs/translate)
Translate allows you to submit a keyword, and retrieve a corresponding GIF. You might
have used this feature in Slack, where the GIPHY API is in use. It even has a 'weirdness'
parameter that you can use to shape your results.

**IDEA:** Take a passage from a favorite book of yours. Try to generate
a series of GIFs that generate the same meaning or sentiment of the passage.

*NOTE: This could be a good time to use the Stickers API as well!*

[Check out this project for a bit of inspiration](https://www.smithsonianmag.com/arts-culture/text-me-ishmael-reading-moby-dick-emoji-180949825/)

### Trending (GET /v1/gifs/trending)
Retrieve the GIFs that are currently trending on the GIPHY website.

**IDEA:** Create a chaotic grid of tiny thumbnail gifs, utilizing the various image
sizes available in the returned GIF Object (hint: 'fixed_height_small').

### Random (GET /v1/gifs/random)
This will allow you to retrieve a single random GIF, either selected by tag, or
if no tag is provided, total random from their database.

**IDEA:** Create your own weirdo game of MadLibs. Type out a short story, and allow the
user to swap out certain words with their own random GIF, constrained by a tag/keyword.
*NOTE: This could be a good time to use the Stickers API as well!*

### Stickers
Stickers are GIFs with transparent backgrounds, which could be more useful than
GIFs in certain situations. Stickers can be found using the same API methods above,
but will be accessed using their own endpoint (/v1/stickers/trending instead of /v1/gifs/trending , for example)

**IDEA:** For any other idea you might have, allow the user to toggle between the use
of stickers, or the use of normal GIFs.


### Upload
We won't get into this too much, but essentially this could allow you to generate
GIFs and upload them to the database from your own app. Maybe a user can select a video
on their machine, and it will generate a gif for them. Maybe you have a creative coding
project that produces a video every day, and you can upload them all to GIPHY automatically!
