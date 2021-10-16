import { useParams } from "react-router-dom";

const ProductDetailComponent: React.FC = (props) => {

  const params = useParams() as Params;

  console.log('ProductsComponent', params.productId);

  return (
    <section>
      <h1>Product Detail</h1>
    </section>
  );
};

interface Params {
  readonly productId: string | number;
}

export default ProductDetailComponent;
