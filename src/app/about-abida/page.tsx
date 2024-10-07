import Image from "next/image";
import React from "react";
import { Della_Respira, Nunito_Sans } from "next/font/google";

const font = Della_Respira({
  subsets: ["latin"],
  weight: "400",
});

const Secfont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800", "900", "1000"],
});

const Page = () => {
  return (
    <div className={`${Secfont.className}flex flex-col  `}>
      <div className="w-screen p-6  xl:px-14 2xl:px-20 my-10 md:my-0 flex flex-col md:flex-row justify-between items-center  ">
        <div className="h-screen flex justify-center items-center text-center md:text-left p-6 md:ml-6 flex-1 flex-col">
          <h1
            className={`${font.className} text-3xl md:text-4xl xl:text-5xl  2xl:text-6xl mb-10`}
          >
            Discover the heart and soul behind Malabar's renowned cuisine.
          </h1>
          <h1 className={`${Secfont.className} text-stone-800/70`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            fugiat reprehenderit ullam, excepturi eaque vero voluptatem esse
            minus earum debitis facilis id at illo ducimus culpa commodi
            dignissimos non consequatur
          </h1>
        </div>
        <div className="w-full md:w-auto flex flex-1">
          <div className="w-full md:h-[36rem] rounded-md overflow-hidden relative xl:top-14 2xl:top-20 flex-1">
            <Image
              src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=3211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={1000}
              height={1000}
              alt="image"
              className=" h-full  object-cover rounded-md"
            />
          </div>
          <Image
            src="https://images.unsplash.com/photo-1607567144049-fd6336563076?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1000}
            height={1000}
            alt="image"
            className="w-[9rem] md:w-[17rem]   xl:w-[16rem] 2xl:w-auto xl:h-[30rem] 2xl:h-[36rem] object-cover ml-6 rounded-md"
          />
        </div>
      </div>
      <div className="relative flex w-full justify-center items-center">
        <Image
          src="/svg/food_1.svg"
          width={200}
          height={200}
          alt="image"
          className="hidden md:block absolute xl:w-[16rem] 2xl:w-[20rem] left-20 z-0"
        />
        <Image
          src="/svg/food_2.svg"
          width={200}
          height={200}
          alt="image"
          className=" hidden md:block absolute xl:w-[16rem] 2xl:w-[20rem] right-20 top-10 z-0"
        />
        <h1 className=" p-6 md:w-2/5 md:text-lg text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
          suscipit accusamus ab. Eius sed mollitia eos incidunt nemo iusto
          illum. Natus sit ipsum quae dolor repellat praesentium dolorem,
          quisquam numquam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Neque ea sint sunt fugiat in praesentium iste laudantium
          corporis, voluptatum aut mollitia quae quod quaerat quisquam! Sit
          illum ipsa eaque? Obcaecati?
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
          suscipit accusamus ab. Eius sed mollitia eos incidunt nemo iusto
          illum. Natus sit ipsum quae dolor repellat praesentium dolorem,
          quisquam numquam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Neque ea sint sunt fugiat in praesentium iste laudantium
          corporis, voluptatum aut mollitia quae quod quaerat quisquam! Sit
          illum ipsa eaque? Obcaecati?
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
          suscipit accusamus ab. Eius sed mollitia eos incidunt nemo iusto
          illum. Natus sit ipsum quae dolor repellat praesentium dolorem,
          quisquam numquam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Neque ea sint sunt fugiat in praesentium iste laudantium
          corporis, voluptatum aut mollitia quae quod quaerat quisquam! Sit
          illum ipsa eaque? Obcaecati?
        </h1>
      </div>
      <div className="md:p-20 p-6 h-[42rem] flex flex-col md:flex-row justify-between items-center ">
        <div className="rounded-md h-full overflow-hidden relative flex-1">
          <Image
            src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=3211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1000}
            height={1000}
            alt="image"
            className="w-full md:h-full  object-cover rounded-md"
          />
        </div>
        <div className="mt-10 md:mt-0 md:ml-10 h-full flex flex-col flex-1 justify-between ">
          <Image
            src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=3211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1000}
            height={1000}
            alt="image"
            className="w-full h-full md:h-60  object-cover rounded-md"
          />
          <h1
            className={`${font.className} relative my-10 md:mt-0 md:bottom-20 text-3xl xl:text-4xl  2xl:text-4xl `}
          >
            Discover the heart and soul behind Malabar's renowned cuisine.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
