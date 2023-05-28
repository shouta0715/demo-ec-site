import { Products } from "@/features/products/components/pages";

const Home = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Products />
    </>
  );
};

export default Home;
