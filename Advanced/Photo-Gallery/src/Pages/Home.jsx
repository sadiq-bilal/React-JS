import { Camera, Folder, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";

const cards = [
  {
    to: "/photos",
    title: "Photos",
    text: "Browse beautiful photos.",
    icon: <Camera size={30} />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    to: "/albums",
    title: "Albums",
    text: "Explore photos by album.",
    icon: <Folder size={30} />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    to: "/favorites",
    title: "Favorites",
    text: "View your saved photos.",
    icon: <Heart size={30} />,
    color: "bg-red-100 text-red-500",
  },
];

function Home() {
  return (
    <div>
      <Hero showButton={true} />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold">PhotoHub</h2>
          <p className="mt-1 text-gray-500">
            Discover, explore and save your favorite photos.
          </p>
        </div>

        <div className="grid gap-6 mt-10 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="bg-white rounded-lg border border-gray-100 shadow-sm p-8 hover:-translate-y-1 hover:shadow-md transition"
            >
              <div
                className={
                  "h-14 w-14 rounded-full flex items-center justify-center " +
                  card.color
                }
              >
                {card.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
              <p className="mt-1 text-gray-500">{card.text}</p>
              <p className="mt-4 text-right text-2xl text-blue-600">&gt;</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
