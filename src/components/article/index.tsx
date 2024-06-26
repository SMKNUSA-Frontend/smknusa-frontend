import Image from "next/image";
import React from "react";

const ArticleHero = () => {
  return (
    <>
      <div className="relative h-full lg:w-full lg:h-[80%]">
        <div className="relative lg:pb-6 lg:h-full h-[12rem]">
          <Image
            src={"/assets/smkn1purwosari.svg"}
            alt="smknusa"
            width={1500}
            height={1500}
            className="object-cover w-full h-full lg:rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col px-10 lg:items-center justify-center text-white lg:mt-[11em]">
            <h1 className="lg:text-4xl text-2xl mb-4 font-[700] lg:text-[46px]">
              Artikel-Artikel SMK
            </h1>
            <p className="text-xs  lg:text-center font-[600] lg:text-[18px]">
              Update artikel terbaru karya siswa-siswi SMK Negeri 1 Purwosari
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleHero;
