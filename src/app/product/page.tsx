import { getSingleProduct, getTrendingProducts } from "@/helpers";
import Container from "@/components/Container";
import { Productss } from "../../../types";
import SingleProduct from "@/components/SingleProduct";
import ProductsData from "@/components/ProductsData";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const ProductPage = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const product = getSingleProduct(_id);

  const data = await getTrendingProducts();

  return (
    <div>
      <Container>
        <SingleProduct product={product} />
        <div>
          <p className="text-xl py-1 font-semibold">Trending Products</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {data?.map((item: Productss) => (
              <ProductsData key={item._id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
