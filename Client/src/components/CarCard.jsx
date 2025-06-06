const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-2xl   shadow-lg p-4 hover:shadow-2xl transition">
      <img
        src={car.imageUrl}
        alt={car.name}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h2 className="text-xl font-bold">{car.name}</h2>
      <p className="text-gray-500 mb-1">{car.model} • {car.year}</p>
      <p className="text-gray-600 mb-2">{car.description}</p>
      <div className="flex justify-between text-sm text-gray-700">
        <span>💰 ${car.price}</span>
        <span>⛽ {car.fuelType}</span>
        <span>⚙️ {car.transmission}</span>
      </div>
    </div>
  );
};

export default CarCard;
