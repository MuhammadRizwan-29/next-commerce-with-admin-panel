import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

export default async function Home({ searchParams }) {
  const category = await searchParams.category;
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        <Hero />
        <ProductList category={category} />
      </main>
      <Footer />
    </>
  );
}
