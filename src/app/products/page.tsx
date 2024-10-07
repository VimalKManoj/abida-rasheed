import Banner from "@/components/Banner";
import Filter from "@/components/Filter";
import ProductsList from "@/components/Products/ProductsList";
import React from "react";

function Products() {
  return (
    <div className="w-full">
      <Banner
        className="m-0 h-[24rem] md:h-[23rem] xl:h-96"
        src="https://images.unsplash.com/photo-1517646458010-ea6bd9f4a75f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        caption="Authentic flavors with Abida's curated selection of spices, masalas, and culinary essentials."
      />
      <Filter />
      <ProductsList />
    </div>
  );
}

export default Products;
