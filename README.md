# Movie Collection App (MovieVerse)

A simple collaborative movie collection web app that renders movie cards from a JSON dataset and allows users to filter movies by genre. This project was built to practice **HTML, CSS, JavaScript**, and **Git collaboration workflows**.

---

## Project Setup Instructions

This project uses **plain HTML, CSS, and JavaScript**.

To run the project locally:

1. Clone the repository
2. Open the project folder in **VS Code**
3. Right‑click `index.html` and select **Open with Live Server**
4. The app will open in your browser


---

## Available CLI / Git Commands Used

The following Git commands were used during development and collaboration:

```bash
git fetch
git pull
git branch
git checkout development
git checkout -b feature/adding-filtering
mkdir css
mkdir js/data
cd css
touch style.css
git add .
git commit -m "Add genre filtering functionality to movie list"
git push origin feature/adding-filtering
```

---

## Git Workflow Steps

The team followed a structured Git workflow:

1. The `main` branch represents the stable version of the application
2. The `development` branch is used for active integration
3. New features are created from `development`
4. Feature work is committed on `feature/*` branches
5. Pull Requests (PRs) are opened **into `development`**
6. After all features are complete and reviewed, a final PR is created from `development` into `main`

This workflow helps prevent breaking changes and encourages proper code review.

---

## Features and Implementation Details

* **Movie card rendering**
  JavaScript dynamically renders movie cards using data from a JSON file.

* **Genre filtering**
  Users can filter movies based on genre using a dropdown menu.

* **Structured movie data**
  Movie information is stored in `js/data/movies.json` under a `movies` array.

* **Responsive and styled UI**
  Custom CSS styling is used for layout, cards, and filtering components.

* **Basic empty/error handling**
  Handles cases where no movies match the selected genre.

---

## Data Format

Movies are stored in `js/data/movies.json` using the following structure:

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

---

## Team Member Contributions

* **Chijioke Uzodinma**
  Implemented the JavaScript logic for rendering movie cards and genre filtering, handled Git workflow, branching, and PR reviews.

* **Oluchi Okwuosa**
  Created the movie dataset, added CSS styling, and improved HTML structure and class naming consistency.

---

## Lessons Learned from Collaboration

* Importance of setting upstream branches correctly when pushing new feature branches
* Value of clear and descriptive commit messages
* Why PR descriptions matter, even for small changes
* How consistent class naming prevents CSS and layout bugs
* Benefits of using a `development` branch to safely integrate features
* Improved communication and review discipline during collaborative work

---

## Notes

* Genre filter values must match the `genre` strings in the JSON file
* Adding a new genre requires updating both the JSON data and the dropdown in `index.html`
