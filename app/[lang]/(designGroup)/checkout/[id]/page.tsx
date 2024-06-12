import CheckoutHero from "@/app/Components/Design/CheckoutPage/CheckoutHero";
import Nav from "@/app/Components/Design/Nav";
import { locks } from "@/app/Components/Listing/Listing";

const CheckoutPage = ({ params }: { params: { id: string } }) => {
  const lockToRender = locks[+params.id - 1];

  return (
    <>
      <Nav darkColor />
      <CheckoutHero lock={lockToRender} />
    </>
  );
};

export default CheckoutPage;
