import Image from "next/image";
export default function Home() {
  return ( 
  <div className="flex justify-between items-center h-screen">
    <div className="w-1/2 mx-12">
    <div className="flex flex-col gap-6">
    <h1 className="font-bold text-5xl">Welcome To Our Website</h1>
    <p className="text-[32px]">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard
    </p>
    <button className="bg-black text-white w-[237px] h-[66px] ">
      Contact Us
    </button>
  </div>
    </div>
    <div className="w-[560px] h-[465px] w-1/2 mx-10">
    <Image src="/images/hero.png" 
    alt="hero-image"
    width={560} 
    height={465} 
    />
     </div>
        </div>
  );
}