import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
      <main>Hello World</main>
      <Link
        href="/users"
        className={`
        text-blue-500 underline block py-2
        hover:text-blue-700
      `}
      >
        to users page
      </Link>
      <ProductCard />
    </>
  );
}
