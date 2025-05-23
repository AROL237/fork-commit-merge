// NextJS - Easy

export default function Home() {
  const sampleProducts = [
    // TODO: Create a sample product list with names and prices
    {name: "tomato", price: "$1.00"},
    {name: "potato", price: "$0.50"},
    {name: "onion", price: "$0.75"},
    {name: "carrot", price: "$0.80"},
    {name: "cabbage", price: "$1.20"},
    {name: "broccoli", price: "$1.50"},
    {name: "spinach", price: "$1.00"},
    {name: "lettuce", price: "$0.90"},
    {name: "pepper", price: "$1.30"},
    {name: "eggplant", price: "$1.40"},
    {name: "zucchini", price: "$1.10"},
    {name: "cucumber", price: "$0.60"},
    {name: "radish", price: "$0.70"},
    {name: "celery", price: "$1.20"},
    {name: "beetroot", price: "$1.50"},
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to XYZ Store!</h1>
      <p className="text-lg mb-8">
        Your one-stop shop for the best products in town.
      </p>

      <div className="w-1/2 flex flex-col space-y-4">
        {sampleProducts.map((product, index) => (
          <div
            key={index}
            className="flex justify-between p-4 border rounded shadow"
          >
            <span>{product.name}</span>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
