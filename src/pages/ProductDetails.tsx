import React from "react";
import { useParams } from "react-router-dom";
import PageHead from "../components/PageHead";
import ProductDetailsCompo from "../components/ProductDetails/ProductDetailsCompo";
import { productsData } from "../utils/data";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL

  // Find the product with the matching ID
  const product = productsData.find((item) => item.id === id);

  // Render the product details page
  return (
    <div>
      {product ? (
        <>
          <PageHead pageName={product.productName} link={`/shop/${id}`} />
          <ProductDetailsCompo product={product} />
        </>
      ) : (
        <div className="text-center text-red-500">Product not found</div>
      )}
    </div>
  );
};

export default ProductDetails;
