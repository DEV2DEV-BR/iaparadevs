import placeholderImage from "./assets/placeholder.png";
import ProductCard from "./components/ProductCard/ProductCard";

const product = {
  id: "1",
  title: "Camiseta React",
  description: "Camiseta confortável e estilosa para devs.",
  image: placeholderImage,
};

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <ProductCard product={product} />
    </div>
  );
}

export default App;
