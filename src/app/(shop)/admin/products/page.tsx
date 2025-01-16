import { getAllProducts } from "@/actions/products/get-all-product";
import { columns, DataTable } from "@/components";


export default async function ProductMantePage() {
  
  const products = await getAllProducts();


  return (
    <div className="px-10">
      <DataTable columns={columns} data={ products } />
    </div>
  );
}