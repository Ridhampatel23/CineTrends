# Movie Search & Trending App

A web application that allows users to:
- Search for movies (via [TMDB](https://www.themoviedb.org/) API).
- Track the number of times each search term is used (via [Appwrite](https://appwrite.io/)).
- Display the top five most-searched movies as “trending.”

---

## Overview

1. **Movie Data**: Fetched from the TMDB API using [Axios](https://github.com/axios/axios).  
2. **Search Tracking**: Every time a user searches, the search term is stored or updated in an [Appwrite](https://appwrite.io/) database.  
3. **Trending Movies**: Displays the most frequently used (top 5) search terms.

---

## Features

- **Search Functionality**: Instantly search for movies by title.
- **Appwrite Integration**: Tracks and updates the search count in real time.
- **Trending Page**: Shows the top 5 most-searched movies (according to Appwrite data).
- **Responsive UI**: Built with modern React best practices.

---

## Tech Stack

- **React** (Frontend)
- **Axios** (HTTP client for TMDB API calls)
- **Appwrite** (Backend-as-a-Service for database)
- **Vite** (Build tool)
- **JavaScript/ES6+**

---

## Getting Started

### Prerequisites

- **Node.js** (v14+ recommended)
- **NPM** or **Yarn** (for dependency management)
- **Appwrite Account** (on [cloud.appwrite.io](https://cloud.appwrite.io/) or self-hosted)
- **TMDB API Key** (sign up at [TMDB](https://www.themoviedb.org/))

### Environment Variables

Create a `.env` (or `.env.local`) file in your project root:

VITE_APPWRITE_PROJECT_ID=<Your Appwrite Project ID> VITE_APPWRITE_DATABASE_ID=<Your Appwrite Database ID> VITE_APPWRITE_COLLECTION_ID=<Your Appwrite Collection ID> TMDB_API_KEY=<Your TMDB API key>


> **Note**: If you're using Vite, ensure these variables are prefixed with `VITE_` so they're available to the client.

### Installation

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
   cd <YOUR_REPO_NAME>
2. **Install Dependencies** 
   ```bash
    npm install

4. **(Optional) Configure Appwrite** 
  In your code, confirm the Appwrite project, database, and collection IDs match the environment variables

 ### Running the App

 **Start the Development Server** 
   ```bash
    npm run dev

