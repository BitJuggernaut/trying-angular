# Trying Angular

A sample Angular application for learning and experimenting with Angular framework features.

## Tech Stack

This project is built using the following technologies:

- **Angular**: Version 17.3.0 - A platform for building mobile and desktop web applications
- **TypeScript**: Version 5.4.2 - A strongly typed programming language that builds on JavaScript
- **RxJS**: Version 7.8.0 - A library for reactive programming using Observables
- **Zone.js**: Version 0.14.3 - A library that provides execution context that persists across async tasks
- **Vitest**: Version 4.0.18 - A fast unit test framework powered by Vite
- **Less**: A CSS preprocessor that extends CSS with dynamic behavior
- **Angular CLI**: Version 17.3.17 - A command-line interface tool for Angular

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 18.19.1 or higher (check with `node --version`)
- **npm**: Version 10.2.4 or higher (check with `npm --version`)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd trying-angular
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development Server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Tests

Run `npm test` to execute the unit tests via Vitest.

## Project Structure

```
src/
├── app/
│   ├── app.component.*          # Main app component
│   ├── app.config.ts            # App configuration
│   ├── app.routes.ts            # Routing configuration
│   └── homePage/
│       ├── homePage.component.* # Home page component
│       └── navBar/
│           └── navBar.component.* # Navigation bar component
├── assets/                      # Static assets
├── index.html                   # Main HTML file
├── main.ts                      # Application bootstrap
└── styles.less                  # Global styles
```

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
