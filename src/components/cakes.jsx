import img from "../image/cake.jpg";
import img1 from "../image/cake1.jpg";
import img2 from "../image/cake2.jpg";
import img3 from "../image/cake3.jpg";
import img4 from "../image/cake4.jpg";
import img5 from "../image/cake5.jpg";

function Cakes() {
  const cakes = [
    { src: img, alt: "Cake 1" },
    { src: img1, alt: "Cake 2" },
    { src: img2, alt: "Cake 3" },
    { src: img3, alt: "Cake 4" },
    { src: img4, alt: "Cake 5" },
    { src: img5, alt: "Cake 6" },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-pink-400">
        Han Bai, Kon Sa Khilao Gi?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cakes.map((cake, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
          >
            <img
              src={cake.src || "/placeholder.svg"}
              alt={cake.alt}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cakes;
