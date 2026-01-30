# Movie Collection App (MovieVerse)

A simple movie collection UI that renders movie cards from JSON and lets you filter by genre.

## Features
- Movie card rendering (poster, title, year, genre, description)
- Genre filtering
- Basic empty/error state handling

## Project Structure
```
movie-collection-app/
  css/
    style.css
  js/
    app.js
    data/
      movies.json
  index.html
```



## Data Format
Movies live in `js/data/movies.json` under the `movies` array. Each movie looks like:

```json
{
  "id": 1,
  "title": "Movie Title",
  "year": 2024,
  "genre": "action",
  "description": "Short summary...",
  "poster": "https://..."
}
```

## Notes
- The filter values match the `genre` strings in the JSON.
- If you add a new genre, also add it to the dropdown in `index.html`.
