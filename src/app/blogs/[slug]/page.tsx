import React from "react";
import { Della_Respira, Nunito_Sans } from "next/font/google";
import Image from "next/image";

const font = Della_Respira({
  subsets: ["latin"],
  weight: "400",
});

const Secfont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800", "900", "1000"],
});

function page() {
  return (
    <div className="w-screen min-h-screen p-6  xl:px-14 2xl:px-20 py-20  flex flex-col justify-center items-center  ">
      <h1 className="p-4 md:p-10 md:pt-20">October 21 , 2023</h1>
      <h1
        className={`${font.className} text-3xl md:text-5xl 2xl:text-6xl md:w-2/3 my-6  md:my-12 text-center `}
      >
        Exploring the Flavors of the World: A Journey Through Global Cuisines
      </h1>
      <Image
        src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=3211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={1000}
        height={1000}
        alt="image"
        className="md:w-4/5 md:h-[40rem] object-cover rounded-lg mb-10"
      />
      <h1 className="md:w-4/5 text-justify md:text-pretty ">
        Indian cuisine is renowned for its vibrant spices and bold, complex
        flavors that awaken the senses. The country's culinary diversity is a
        direct reflection of its vast geography, varied climate, and rich
        cultural heritage. Each region in India boasts its own unique food
        culture, with distinct cooking techniques, ingredients, and flavor
        profiles that tell a story of the land, the people, and their history.
        <br />
        <br /> A Regional Exploration of Indian Cuisine Northern India: In the
        north, wheat is a staple, and the cuisine is characterized by rich,
        hearty curries like butter chicken (murgh makhani), paneer tikka masala,
        and dal makhani. Northern dishes often use dairy products such as ghee,
        yogurt, cream, and paneer (Indian cottage cheese) to add richness and
        texture. Flatbreads like naan, roti, and paratha are commonly served
        with meals, perfect for scooping up thick, flavorful gravies. Popular
        spices include cumin, coriander, turmeric, and the famous garam masala—a
        fragrant blend of ground spices that brings depth and warmth to many
        dishes.
        <br />
        <br /> Southern India: In contrast, southern India is known for its
        rice-based dishes and liberal use of coconut in all its forms (coconut
        milk, grated coconut, coconut oil). The cuisine here is spicier and more
        tangy, with tamarind, mustard seeds, curry leaves, and dried red chilies
        playing a central role. Some iconic southern dishes include dosas
        (crispy rice pancakes), idlis (steamed rice cakes), and sambar (a tangy
        lentil stew). Seafood is also popular in the coastal regions, where
        dishes like fish curry and prawn masala are staples. Western India: The
        west of India, home to states like Maharashtra, Gujarat, and Rajasthan,
        showcases a wide variety of flavors. In Gujarat, the cuisine is largely
        vegetarian and known for its sweet and savory flavors coexisting in
        harmony. Dishes like dhokla, thepla, and undhiyu are famous for their
        balanced taste. Maharashtra, on the other hand, offers a mix of coastal
        and inland flavors, with dishes like vada pav, puran poli, and bombay
        duck standing out. The Rajasthani desert cuisine, born from a scarcity
        of water and fresh produce, focuses on the use of legumes, milk, and
        yogurt to create dishes like dal baati churma and gatte ki sabzi.
        <br />
        <br />
        Eastern India: The eastern regions of India, particularly West Bengal,
        are famous for their love of fish, sweets, and mustard oil-based dishes.
        Fish curry (especially with hilsa) is a must-try, while vegetarian
        options like shukto (a mixed vegetable stew) offer a more delicate
        flavor profile. The region is also the home of famous sweets like
        rasgulla, sandesh, and mishti doi, which use milk and sugar to create
        desserts that are both rich and refreshing. The Role of Spices in Indian
        Cuisine The secret to Indian cuisine lies in its extensive use of
        spices. Indian cooking is not about heat alone but rather the delicate
        layering of spices to create depth and complexity.
        <br />
        <br /> Here are some key spices commonly used across India: Cumin: A
        staple in almost every Indian dish, cumin seeds are often fried in hot
        oil to release their nutty, earthy aroma. Ground cumin is also used to
        flavor curries, lentils, and vegetable dishes. Coriander: Known for its
        slightly sweet, citrusy flavor, coriander seeds are toasted and ground
        to add freshness to Indian dishes. Both the seeds and the leaves are
        widely used in Indian cooking. Turmeric: Revered for its vibrant yellow
        color and numerous health benefits, turmeric is a common spice in Indian
        cuisine. It lends a subtle bitterness and earthy flavor to dishes like
        curries, rice, and vegetables. Garam Masala: A quintessential spice
        blend in Indian cuisine, garam masala is made from cinnamon, cloves,
        cardamom, cumin, and other spices. It is often added toward the end of
        cooking to impart a rich aroma and warm flavors. Mustard Seeds:
        Particularly popular in the south and east of India, mustard seeds are
        tempered in oil to release their slightly pungent flavor.
        <br />
        <br /> They are often used in dals, chutneys, and pickles. Asafoetida
        (Hing): Often used as a digestive aid, this strong-smelling spice is
        usually fried in oil to mellow its pungency and add a deep umami flavor
        to vegetarian dishes like dals and curries. Fenugreek: With its slightly
        bitter taste, fenugreek seeds and leaves (called methi) are used to
        flavor curries, chutneys, and pickles, providing a unique and aromatic
        depth. Beyond Curries: The Breadth of Indian Cuisine While many
        associate Indian cuisine with curries, it is so much more than that.
        Indian cuisine encompasses a wide range of foods, from savory snacks
        like samosas and pakoras to flavorful rice dishes like biryani and
        pulao. Street foods like pani puri, chaat, and pav bhaji offer bold,
        tangy flavors that have become beloved not only across India but also
        internationally.
      </h1>
    </div>
  );
}

export default page;
