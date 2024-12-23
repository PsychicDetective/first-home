import Image from "next/image";

function Home() {
  return (
    <div className="flex gap-[100px]">
      <div className="flex-1 flex flex-col gap-[50px]">
        <h1 className="text-[96px]">Creative Thoughts Agency.</h1>
        <p className="text-[20px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex gap-[20px]">
          <button className="px-[20px] min-w-[120px] cursor-pointer border-none rounded-[5px] bg-btn text-text">
            Learn More
          </button>
          <button className="px-[20px] min-w-[120px] cursor-pointer border-none rounded-[5px]">
            Contact
          </button>
        </div>
        <div className="relative w-[500px] h-[50px] grayscale">
          <Image src="/brands.png" alt="" fill className="object-contain" />
        </div>
      </div>
      <div className="flex-1 relative">
        <Image src="/hero.gif" alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Home;
