import Image from "next/image";
import fryegg from "../../public/images/fryegg.jpg";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="p-10 flex flex-col gap-4 overflow-x-hidden">
      <div>
        <div className="bg-surface dark:bg-dark-surface text-on-surface dark:text-on-dark-surface p-4 w-fit">
          <h1 className="text-7xl font-bold">hi, i&apos;m sunny.</h1>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="bg-surface dark:bg-dark-surface p-2 w-min" />
        <div className="p-4">
          <p>
            i&apos;m currently in my second year of computer science at the
            university of cambridge. i did a lot of competitive programming back
            in the days, but not anymore.
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="bg-surface dark:bg-dark-surface p-2 w-min" />
        <div className="p-4">
          <p>
            i am interested in making products that has a visible or mental
            impact. i&apos;m also generally interested in math that works. i
            currently specialise in nothing.
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="bg-surface dark:bg-dark-surface p-2 w-min" />
        <div className="p-4">
          <p>
            i also like to cycle. i almost completed a route of 140km from
            cambridge to oxford in one day. but i got a flat tire. oh well
          </p>
          <p>
            have a chat:{" "}
            <a href="mailto:sunnycheungabc@gmail.com">
              sunnycheungabc@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="-mx-96 my-10 h-4 bg-[repeating-linear-gradient(to_right,transparent_0,transparent_30px,black_30px,black_120px,transparent_120px,transparent_150px,black_150px,black_180px)]"></div>

      <div className="bg-surface dark:bg-dark-surface text-on-surface dark:text-on-dark-surface p-2 w-fit">
        <h1 className="text-2xl font-bold">projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-8 border-surface dark:border-dark-surface p-2 h-min w-fit">
          <Image src={fryegg} width={200} height={200} alt="Fried Egg" />
          <h1 className="text-2xl font-bold">project 1</h1>
          <p>
            some description <br /> some description
          </p>
        </div>
        <div className="border-8 border-surface dark:border-dark-surface p-2 h-min w-fit">
          <Image src={fryegg} width={200} height={200} alt="Fried Egg" />
          <h1 className="text-2xl font-bold">project 1</h1>
          <p>
            some description <br /> some description
          </p>
        </div>
      </div>
      <div className="bg-surface dark:bg-dark-surface text-on-surface dark:text-on-dark-surface p-4 mx-auto">
        <Link href="/blog">
          <h1 className="text-7xl font-bold">blog</h1>
        </Link>
      </div>
    </div>
  );
};
export default Page;
