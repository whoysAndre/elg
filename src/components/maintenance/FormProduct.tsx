"use client"
import { createOrUpdateProduct } from "@/actions/products/create-update-products.action";
import { Product, ProductImage as ProductWithImage } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Label } from "../ui/Label";
import { titleFont } from "@/config/fonts";
import { Input } from "../ui/Input";
import { sizes } from "@/helpers/sizes";
import clsx from "clsx";
import { deleteProductImage } from "@/actions/products/delete-product-image.action";
import { ProductImage } from "./ProductImage";


interface Props {
  product: Partial<Product> & { ProductImage?: ProductWithImage[] }
}

interface Inputs {
  code: string;
  slug:string;
  title: string;
  price: number;
  stock: number;
  sizes: string[];
  brand: string;
  type: string;
  category: string;
  gender: 'hombre' | 'mujer' | 'nino' | 'unisex';
  images?: FileList;
}


export const FormProduct = ({ product }: Props) => {

  const router = useRouter();
  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      ...product,
      sizes: product.sizes ?? [],
      images: undefined,
      stock: product.stock ?? 0
    },
  });

  watch("sizes");

  const onSizesChange = (size: string) => {
    const currentSizes = getValues('sizes') || [];
    const newSizes = currentSizes.includes(size)
      ? currentSizes.filter(s => s !== size)
      : [...currentSizes, size];
    setValue('sizes', newSizes);
  }

  const onSubmit = async (data: Inputs) => {

    const formData = new FormData();
    const { images, ...productToSave } = data;
    if (product.id) {
      formData.append('id', product.id ?? '');
    }
    formData.append('code', productToSave.code);
    formData.append('title', productToSave.title);
    formData.append('price', productToSave.price.toString());
    formData.append('stock', productToSave.stock.toString());
    formData.append('sizes', productToSave.sizes.toString());
    formData.append('brand', productToSave.brand);
    formData.append('type', productToSave.type);
    formData.append('category', productToSave.category);
    formData.append('gender', productToSave.gender);
    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
    }

    const { ok } = await createOrUpdateProduct(formData);

    if (!ok) {
      alert('Producto no se pudo actualizar');
      return;
    }
    router.replace(`/admin/products`);

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
        {/* COLUMN 1 */}
        <div className="col-span-1 flex flex-col gap-4">

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="code" className={`${titleFont.className}`}>Código</Label>
            <Input {...register('code', { required: true })} type="text" id="code" placeholder="Código" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="title" className={`${titleFont.className}`}>Nombre</Label>
            <Input {...register('title', { required: true })} type="text" id="title" placeholder="Título del producto" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="stock" className={`${titleFont.className}`}>Stock</Label>
            <Input {...register('stock', { required: true, min: 0 })} type="text" id="stock" placeholder="Cantidad" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="price" className={`${titleFont.className}`}>Precio</Label>
            <Input {...register('price', { required: true, min: 0 })} type="text" id="price" placeholder="Precio" />
          </div>

          <div className="flex flex-col mb-2 gap-1.5">

            <Label htmlFor="gender" className={`${titleFont.className}`}>Género</Label>
            <select {...register('gender', { required: true })} className="p-2 border rounded-md bg-white w-full lg:w-[385px]" id="gender">
              <option value="">[Seleccione]</option>
              <option value="hombre">hombre</option>
              <option value="mujer">mujer</option>
              <option value="nino">niña(a)</option>
              <option value="unisex">unisex</option>
            </select>
          </div>

          <div className="flex flex-col mb-2 gap-1.5">
            <Label htmlFor="gender" className={`${titleFont.className}`}>Marca</Label>
            <select {...register('brand', { required: true })} className="p-2 border rounded-md bg-white w-full lg:w-[385px]" id="gender">
              <option value="">[Seleccione]</option>
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
              <option value="puma">Puma</option>
              <option value="reebok">Reebok</option>
              <option value="reebok">Jordan</option>
            </select>
          </div>

          <div className="flex flex-col mb-2 gap-1.5">
            <Label htmlFor="type" className={`${titleFont.className}`}>Tipo</Label>
            <select {...register('type', { required: true })} className="p-2 w-full lg:w-[385px] border rounded-md bg-white" id="type">
              <option value="">[Seleccione]</option>
              <option value="zapatillas">Zapatilla</option>
            </select>
          </div>

          <div className="flex flex-col mb-2 gap-1.5">
            <Label htmlFor="category" className={`${titleFont.className}`}>Categoría</Label>
            <select {...register('category', { required: true })} className="p-2 w-full lg:w-[385px] border rounded-md bg-white" id="category">
              <option value="">[Seleccione]</option>
              <option value="estandar">Estandar</option>
              <option value="deportivas">Deportivas</option>
              <option value="chimpunes">Chimpunes</option>
              <option value="ultimas">Últimas</option>
              <option value="exclusivas">Exclusivas</option>
            </select>
          </div>

        </div>

        {/* COLUMN 2 */}
        <div className="col-span-1 flex flex-col gap-4">
          <div className="">
            <Label htmlFor="size" className={`${titleFont.className}`}>Tallas</Label>
            <div className="flex flex-wrap">
              {
                sizes.map((size) => (
                  <div
                    key={size}
                    onClick={() => onSizesChange(size)}
                    className={clsx(
                      "p-2 border cursor-pointer rounded-md mr-2 mb-2 w-14 transition-all text-center",
                      {
                        "bg-blue-500 text-white": getValues("sizes").includes(size),
                      }
                    )}
                  >
                    <span>{size}</span>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="image">Imágen</Label>
            <Input
              id="image"
              type="file"
              multiple
              accept="image/png, image/jpeg, image/avif, image/webp, images/svg"
              {...register('images', { required: false })}
            />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {
              product.ProductImage?.map((image) => (
                <div key={image.id}>
                  <ProductImage
                    alt={product.title ?? ""}
                    src={image.url}
                    width={300}
                    height={300}
                    className="rounded-t shadow-md"
                  />

                  <button
                    type="button"
                    className="btn-danger w-full rounded-b-xl"
                    onClick={() => deleteProductImage(image.id, image.url)}
                  >
                    Eliminar
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <input type="submit" className="bg-blue-600 text-white rounded-lg py-2 cursor-pointer hover:bg-blue-700 w-full mt-6" value="Guardar"/>
    </form>
  )
}
