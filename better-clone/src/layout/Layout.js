import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Better.com Clone using Next.js" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
