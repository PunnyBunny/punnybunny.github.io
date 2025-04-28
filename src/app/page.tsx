import Image from "next/image";
import fryegg from "../../public/images/fryegg.jpg";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="p-10 flex flex-col gap-4">
      <div className="bg-black text-white p-4 w-fit">
        <h1 className="text-7xl font-bold">hi. i am sunny.</h1>
      </div>
      <div className="flex flex-row">
        <div className="bg-black p-2 w-min" />
        <div className="p-4">
          <p>
            some text <br /> some text
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="bg-black p-2 w-min" />
        <div className="p-4">
          <p>
            some text <br /> some text
          </p>
        </div>
      </div>
      <div className="bg-black text-white p-2 w-fit">
        <h1 className="text-2xl font-bold">projects</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="border-8 border-black p-2 h-min">
          <Image src={fryegg} alt="Fried Egg" />
          <h1 className="text-2xl font-bold">project 1</h1>
          <p>
            some description <br /> some description
          </p>
        </div>
        <div className="border-8 border-black p-2 w-fit h-fit">
          <Image
            src="/images/fryegg.jpg"
            alt="Fried Egg"
            width={200}
            height={200}
          />
          <h1 className="text-2xl font-bold">project 2</h1>
        </div>
        <div className="border-8 border-black p-2 w-fit">
          <Image
            src="/images/fryegg.jpg"
            alt="Fried Egg"
            width={200}
            height={200}
          />
          <h1 className="text-2xl font-bold">project 3</h1>
        </div>
        <div className="border-8 border-black p-2 w-fit">
          <Image
            src="/images/fryegg.jpg"
            alt="Fried Egg"
            width={200}
            height={200}
          />
          <h1 className="text-2xl font-bold">project 4</h1>
        </div>
      </div>
      <div className="bg-black text-white p-4 mx-auto">
        <Link href="/blog">
          <h1 className="text-7xl font-bold underline hover:no-underline">
            blog
          </h1>
        </Link>
      </div>
    </div>
  );
};
export default Page;
