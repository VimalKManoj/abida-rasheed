import About from "@/components/About/About";
import Banner from "@/components/Banner";
import FeaturedBlogs from "@/components/Blog/FeaturedBlogs";
import Hero from "@/components/Hero/Hero";
import FeaturedProducts from "@/components/Products/FeaturedProducts";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <Hero />
      <About />
      <FeaturedProducts />
      <Banner
        src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        caption=" Discover the authentic flavors of Malabar with Abida's handpicked spices and masalas."
      />
      <FeaturedBlogs />
    </div>
  );
}
