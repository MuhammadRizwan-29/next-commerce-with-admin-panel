import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

export default async function Home({ searchParams }) {
  const category = await searchParams?.category;
  const params = await searchParams?.params;
  return (
    <>
      <main className="max-w-6xl mx-auto p-4">
        <Hero />
        <ProductList category={category} params="/" />
      </main>
    </>
  );
}
