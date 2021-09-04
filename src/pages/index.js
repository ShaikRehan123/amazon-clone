import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductFeed from "../components/ProductFeed";
export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* <h1>Lets Build Amazon with Next.js and tailwind css</h1> */}
      <Header />
      <main className="max-w-screen-2xl mx-auto ">
        {/* Banner */}
        <Banner />
        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
// * Get >> https://fakestoreapi.com/products
