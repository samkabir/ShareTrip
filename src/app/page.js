import Navbar from "@/components/Navbar/Navbar";
import AllProducts from "@/components/WebPages/AllProductsPage/AllProducts";

export default function Home() {
  return (
    <div className="customContainer">
      <Navbar />
      <AllProducts />
    </div>
  );
}
