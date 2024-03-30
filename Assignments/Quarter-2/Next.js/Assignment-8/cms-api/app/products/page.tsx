import { client } from "@/app/Config/contentful"

const fetchProducts = async () => {
  try {
    const products = await client.getEntries({
      'content_type': 'products',
    })
    console.log("Product", products.items[0].fields);
    return products.items
  } catch (error) {
    console.log("error", error);
  }
}

export default async function Products() {
  const data = await fetchProducts()
  console.log("data", data);

  return (
    <div>
      <h1>List of Products</h1>

      {data?.map(product => {
        return (
          <div key={product.sys.id}>
            <h1>{product?.fields.title} - {product?.fields.stock}</h1>
          </div>
        );
      })}
    </div>
  )
}