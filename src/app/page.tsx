import { Products } from "@/features/products/components";

const Home = () => {
  return (
    <div>
      <h1>Next.js + TypeScript + Tailwind CSS</h1>
      {/* @ts-expect-error Server Component */}
      <Products />
    </div>
  );
};

export default Home;
