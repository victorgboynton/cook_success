import Image from "next/image";
import Link from "next/link";
const Foods = [
  { id: "1", name: "Artichoke dip" },
  { id: "2", name: "Spinach fettuccini" },
  { id: "3", name: "Spinach Ravioli" },
];

export default function Home() {
  return (
    <div className="">
      <div className="flex text-6xl mx-auto bg-emerald-400 mb-10 font-bitter font-bold text-center lg:mt-10 justify-center items-center p-8 ">
        <h1>
          <u>Never</u> have left over ingredients again
        </h1>
      </div>
      <div className="flex mx-20">
        <div className=" items-center">
          <div className="col-span-2 max-w-4xl">
            <h1 className=" text-center text-3xl font-bold font-bitter border-b-2 border-black">
              Who we are:
            </h1>
            <p className="text-2xl font-bitter">
              We are CookSuccess, and we aim to save on grocery bills by making
              sure that everything in your pantry finds its place into a dish.
              Just tell us what you have, and we will make suggestions for
              recipes including the ingredients that you give us. Get started
              now, or make an account to start saving recipes to your cart for
              an easy-to-use shopping list.
            </p>
            <div className="flex justify-center items-center h-[30%]">
              <button className=" bg-emerald-600/75 text-4xl  border-green-700  border-4 font-extrabold">
                <Link href="/RecipePicker">Get started!</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="relative border border-black rounded aspect-video ml-10">
          <Image
            src="/peopleCooking.png"
            alt="people cooking"
            width={614}
            height={100}
          />
        </div>
      </div>
      <div className="mt-20">
        <div className="flex text-5xl font-bitter  font-semibold border-black max-w-3xl rounded text-center justify-center items-center  mx-auto sm:mt-8">
          <h2>Ingredient of the Week!</h2>
        </div>
        <div className="  mt-3">
          <div className="flex text-6xl font-semibold justify-center mt-3">
            <i>Spinach</i>
          </div>
          <div className="">
            <List listItems={Foods} />
          </div>
        </div>
      </div>
    </div>
  );
}
function Food({ foodObject }: any) {
  return (
    <div className="flex flex-col text-center mb-8 bg-blue-200">
      <button className="border-2 border-black">
        <p className="border-b-2 text-xl font-bitter border-black">
          {foodObject.name}
        </p>
        <div className="relative">
          <Image
            src="/spinach_ravioli.png"
            alt="Placeholder"
            height={200}
            width={200}
          />
        </div>
      </button>
    </div>
  );
}

function List({ listItems }: any) {
  return (
    <div className="flex justify-between lg:mx-80 mt-20">
      {listItems.map((item: any) => (
        <Food foodObject={item} key={item.id} />
      ))}
    </div>
  );
}
