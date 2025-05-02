import Image from "next/image";
import wykoj from "../../public/images/wykoj.png";
import fruitpanda from "../../public/images/fruitpanda.png";
import aahk from "../../public/images/aahk.png";
import Link from "next/link";
import FiveDotsSeparator from "@/components/FiveDotsSeparator";

const Page: React.FC = () => {
  return (
    <div className="p-5 md:p-10 flex flex-col items-center gap-4 overflow-x-hidden">
      <div className="bg-surface dark:bg-dark-surface p-4 w-fit">
        <h1 className="text-3xl md:text-5xl font-bold text-on-surface dark:text-on-dark-surface">
          hi, i&apos;m sunny.
        </h1>
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
      <FiveDotsSeparator />
      <div className="bg-surface dark:bg-dark-surface text-on-surface dark:text-on-dark-surface p-2 w-fit">
        <h1 className="text-3xl font-bold">projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-8 border-surface dark:border-dark-surface p-2 h-min w-full">
          <Image src={fruitpanda} width={200} alt="Panda" className="mx-auto" />
          <a href="https://github.com/PunnyBunny/FruitPanda">
            <h1 className="text-2xl font-bold pt-2">Fruit Panda</h1>
          </a>
          <p>dumb app that doesn&apos;t work</p>
        </div>
        <div className="border-8 border-surface dark:border-dark-surface p-2 h-min w-full">
          <Image src={wykoj} width={200} alt="WYKOJ" className="mx-auto" />
          <a href="https://wykoj.jonowo.dev/">
            <h1 className="text-2xl font-bold pt-2">WYKOJ</h1>
          </a>
          <p>online judge</p>
        </div>
        <div className="border-8 border-surface dark:border-dark-surface p-2 h-min w-full">
          <Image src={aahk} width={200} alt="WYKOJ" className="mx-auto" />
          <a href="https://mentorship.accessabroadhk.org/apply/">
            <h1 className="text-2xl font-bold pt-2">
              Access Abroad Hong Kong (AAHK)
            </h1>
          </a>
          <p>enhanced internal processing platform</p>
        </div>
      </div>
      <FiveDotsSeparator />
      <div className="bg-surface dark:bg-dark-surface text-on-surface dark:text-on-dark-surface p-4 mx-auto">
        <Link href="/blog">
          <h1 className="text-7xl font-bold">blog</h1>
        </Link>
      </div>
    </div>
  );
};
export default Page;
