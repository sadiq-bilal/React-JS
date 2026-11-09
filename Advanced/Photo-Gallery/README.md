# 📸 PhotoHub - Photo Gallery

A simple photo gallery website built with **React** and **Tailwind CSS**. Users can browse photos, search and filter them, open a photo to see its details, save favorites, and manage photos (add, edit, delete).

🔗 **Live Demo:** _add your Vercel/Netlify link here_

## 📸 Screenshots

_Add screenshots here (Photos, Albums, Photo Details, Favorites, Photo Manager)_

## 🚀 Features

- Home page with hero banner
- Photos page with search, album filter, sorting and pagination
- Albums page (open any album to see its photos)
- Photo details page with "More photos from this album"
- Add / remove favorites (saved in `localStorage`)
- Download a photo
- Photo Manager: add, edit and delete photos using API requests (POST, PUT, DELETE)
- Loading, error (with Retry) and empty states
- Responsive design

## 🛠️ Technologies

- React.js
- React Router
- Tailwind CSS
- Context API
- Lucide React (icons)
- Vite
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API for photo data and [Picsum](https://picsum.photos/) for images

## 📚 Concepts Covered

- Components and Props
- `useState`, `useEffect`, `useContext`
- Context API (Photos and Favorites)
- React Router: `useParams`, `useSearchParams`, `useNavigate`, `NavLink`
- Fetching data with `fetch` and `async/await`
- `map()`, `filter()`, `find()`, `sort()`, `slice()`
- Forms and validation
- Pagination

## 📂 Folder Structure

```
src/
├── Components/   (Navbar, PhotoCard, Pagination, Modal ...)
├── Context/      (PhotosContext, FavoritesContext)
├── Pages/        (Home, Photos, Albums, PhotoDetails, Favorites, PhotoManager, Profile)
├── Services/     (photoApi.js - all API calls)
└── Utils/        (helpers.js)
```

## ⚙️ Run Locally

```bash
npm install
npm run dev
```

## 🌐 API

All data goes through `src/Services/photoApi.js` (JSONPlaceholder):

| Action | Request |
| --- | --- |
| Get photos | `GET /photos?_limit=400` |
| Add photo | `POST /photos` |
| Edit photo | `PUT /photos/:id` |
| Delete photo | `DELETE /photos/:id` |

## 📝 Note

JSONPlaceholder is a fake API: it accepts add, edit and delete requests but does not really save them. So the changes show in the app, but reset when the page is refreshed. Favorites are saved in `localStorage` and stay.

## 👨‍💻 Author

Sadiq Bilal
