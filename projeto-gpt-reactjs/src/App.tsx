import styles from "./App.module.scss";
import placeholderImage from "./assets/images/placeholder.png";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import type { Product } from "./components/ProductCard/types";

const mockProducts: Product[] = Array.from({ length: 10 }, (_, index) => ({
  id: String(index + 1),
  title: `Produto ${index + 1}`,
  description: "Descrição breve do produto.",
  image: placeholderImage,
}));

function App() {

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles["app__grid"]}>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
