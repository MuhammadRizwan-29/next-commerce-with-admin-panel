import ProductList from "@/components/ProductList";

export default async function Products({ searchParams }) {
  const category = await searchParams.category;
  const params = await searchParams?.params;
  return (
    <>
      <main className="max-w-6xl mx-auto p-4">
        <ProductList category={category} params="products" />
      </main>
    </>
  );
}
