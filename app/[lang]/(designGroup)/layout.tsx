import Footer from "@/app/Components/Design/Footer/Footer";


export default function Layout({
    children
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <main>{children}</main>
      </>
    )
  }