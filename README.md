# The Jobseeker's Fate

*A mystical app for the jobseeker striving to find the path to their career. It might not tell you the future, but for sure it will tell you your present.*

![/mockup.webp](/public/mockup.webp)

## Table of contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Install](#install)
    - [Scripts](#scripts)
        - [Dev](#dev)
        - [Production build](#production-build)
        - [Preview](#preview)
- [Known limitations and TODOs](#known-limitations-and-todos)

## Features

The Jobseeker's Fate is a lightweight application to keep track of Job applications with a humorous touch (so you can keep the spirits up!). 

- **Job Application Tracking:** Uses local IndexedDB to store job applications and DexieDB for reactivity and ease of use with Svelte.
- **Sorting and filtering tools:** Job applications can be filtered and sorted by status, salary, application date.
- **A more compact approach:** The information can be displayed as easily readable cards or as a compact table.
- **Keep it up to date:** Job applications can be updated when needed, and even deleted.
- **Responsive Design:** Works on mobile, tablet, and desktop.

## Tech Stack

- **Svelte 5** - Light reactive framework using runes and modern syntax.
- **TypeScript** - Type safety.
- **TailwindCSS** - Fast, utility oriented styling.
- **DexieDB** - IndexedDB wrapper facilitating CRUD operations and reactivity.
- **Zod** - Runtime schema validation used in forms.

## Project structure

```
src/
├─ lib/                          # UI components
│   └─ common/                   # Reusable UI components
├─ data/
│   ├─  db.ts                    # DexieDB build and functions
│   ├─  jobStates.ts             # Dictionary for flavour text and dictionary based on states.
│   ├─  types.ts                 # Typescript types
│   └─  validation-schemas.ts    # Zod validation schema
├─ app.css                       # Tailwind setup and global styling.
├─ App.svelte                    # Root component.
└─ main.ts                       # Svelte's Root component mount function.
```
## Getting started

### Prerequisites
- [Node.js ^18](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)/[PNPM](https://pnpm.io/)

### Install

Reach the desired folder path and introduce the following commands:

```bash 
git clone https://github.com/adriangdp/thejobseekersfate
```
```bash 
cd thejobseekersfate
```
```bash 
npm install
```
```bash 
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts
#### Dev
```bash
npm run dev
```
*Note it runs on port 3000 instead of the default. It can be changed on package.json*
#### Production build
```bash
npm run build
```
#### Preview
```bash
npm run preview
```

#### Test:unit
```bash
npm run test
```

## Known limitations and TODOs
* <del> Zod validates forms correctly, but handling errors gracefully is not yet implemented.</del>
* <del>More form validation flexibility: defaults, optionals...</del>
* Improve accesibility and aria attributes.
* <del>Add application form needs to take into account unkown salary</del>.
* Possibility of adding notes.
* Right now, updating job applications is limited to status; but would be nice to be able to edit all fields.
* Component and unit tests.
* Job Application statistics: compile and show an history of job application and status, salary trends, etc.
* Add some details and decorations to certain aspects.
* Another color theme.
