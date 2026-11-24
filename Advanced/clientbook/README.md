# ClientBook

A clean, responsive customer relationship management (CRM) front end built with **React**, **Vite** and **Tailwind CSS**. Use it to keep track of customers, deals and follow-up tasks in one place.

This is a front-end only project. There is no backend or database. All data is saved in your browser using `localStorage`, so it stays after you refresh the page.

## Features

- **Login page** (demo): any valid email and a password of 4 or more characters works
- **Dashboard** with key numbers, deals by stage and recent customers
- **Customers**: search, filter by status, add, edit and delete
- **Customer details page**: contact info, notes, and that customer's deals and tasks
- **Deals**: list view and board view (New, Negotiation, Won, Lost) with stage changes
- **Tasks**: follow-ups with due dates, a done checkbox and overdue highlighting
- **Responsive design**: table on desktop, cards on phones, slide-in menu on small screens
- **Dark mode** that follows your device setting
- Form validation, empty states and a 404 page

## Tech stack

| Tool | Purpose |
| --- | --- |
| React 18 | User interface |
| Vite 5 | Dev server and build tool |
| Tailwind CSS 3 | Styling |
| React Router 6 | Page navigation |

## Getting started

```bash
# 1. Install the packages
npm install

# 2. Start the development server
npm run dev
```

Open http://localhost:5173 in your browser and log in with any valid email and a password of 4 or more characters, for example `admin@example.com` and `1234`.

## Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the app in development mode |
| `npm run build` | Creates the production version in the `dist` folder |
| `npm run preview` | Opens the production build locally to check it |

## Project structure

```
clientbook/
├── index.html                 Page that loads the app
├── package.json               Packages and scripts
├── vite.config.js             Vite settings
├── tailwind.config.js         Tailwind settings
├── postcss.config.js          Lets Tailwind work with Vite
└── src/
    ├── main.jsx               Starts React and the router
    ├── App.jsx                App data and all routes
    ├── index.css              Tailwind import and base styles
    ├── layouts/
    │   └── MainLayout.jsx     Sidebar and header around the pages
    ├── pages/
    │   ├── Login.jsx
    │   ├── Dashboard.jsx
    │   ├── Customers.jsx
    │   ├── CustomerDetails.jsx
    │   ├── Deals.jsx
    │   ├── Tasks.jsx
    │   └── NotFound.jsx
    ├── components/            Small reusable parts
    │   ├── Sidebar.jsx
    │   ├── Header.jsx
    │   ├── Avatar.jsx
    │   ├── Badge.jsx
    │   └── CustomerForm.jsx
    ├── hooks/
    │   └── useSavedState.js   useState that also saves to localStorage
    ├── data/
    │   └── sampleData.js      Starting customers, deals and tasks
    └── utils/
        ├── helpers.js         money() and daysFromNow()
        └── styles.js          Shared Tailwind class names
```

## How it works

- `App.jsx` holds the customers, deals and tasks, and passes them to each page.
- `useSavedState` works like React's `useState` but also saves the value to `localStorage`.
- Pages only show after login. If you are not logged in, you are sent to `/login`.
- Sample data in `src/data/sampleData.js` appears the first time you open the app.

## Reset the data

To go back to the sample data, open your browser's developer tools, clear the site's local storage and refresh the page.

## Deploying

Run `npm run build` and upload the `dist` folder to any static host such as Netlify, Vercel or GitHub Pages. Because the app uses page addresses like `/customers`, set the host to send all requests to `index.html`.

## Ideas for next steps

- Connect to a real backend (for example Node.js with a database) instead of `localStorage`
- Add real authentication
- Add charts to the dashboard
- Add pagination for long customer lists
- Add an export-to-CSV button

## Author
Mohammad Sadiq Bilal
