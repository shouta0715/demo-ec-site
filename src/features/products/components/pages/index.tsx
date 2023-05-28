import { getProducts } from "@/features/products/api/getProducts";
import { Product } from "@/features/products/components/pages/Product";

export const Products = async () => {
  const products = await getProducts();

  return (
    <>
      <h2 className="text-xl font-bold text-gray-900">Customers also bought</h2>
      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 lg:gap-x-6 xl:gap-x-8">
        {products.map((product) => (
          /* @ts-expect-error Server Component */
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};
