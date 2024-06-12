import Nav from "@/app/Components/Design/Nav";
import ProductPageHero from "@/app/Components/Design/ProductPage/ProductPageHero";
import { locks } from "@/app/Components/Listing/Listing";

const LockPage = ({ params }: { params: { id: string } }) => {
  const lockToRender = locks[+params.id - 1];

  return (
    <>
      <Nav darkColor />
      <ProductPageHero lock={lockToRender} />
    </>
  );
};

export default LockPage;
