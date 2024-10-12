import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full h-screen"> */}
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center  w-3/5 h-[90%]">
          <div className="grid grid-cols-4 grid-rows-6 gap-4 p-4 w-full h-full">
            {/*Create */}
            <div className="col-span-1 row-span-3  flex items-center justify-center flex-col bg-[#FAEEE2] rounded-lg">
              <div className="flex items-center justify-center p-4 text-2xl font-bold">
                <p className="text-black">
                  Create and schedule content
                  <span className="text-blue-500 italic"> quicker.</span>
                </p>
              </div>

              <div className="flex items-center justify-center  p-4  py-2 px-6 rounded-full bg-[#fdcd6b]">
                <p className="text-blue-500 font-bold">Create post.</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center justify-center col-span-2 row-span-2 bg-[#7651dc] rounded-lg flex-col">
              <div>
                <p className="text-center p-4 text-5xl font-bold text-white">
                  Social Media <span className="text-[#FFD355] "> 10x </span>
                  <br /> <span className=" italic">Faster</span> with AI
                </p>
              </div>
              <div>
                <p className="text-white  font-thin">
                  Over 4,000 5-star reviews
                </p>
              </div>
            </div>

            {/* Schedules */}
            <div className="col-span-1 row-span-4 bg-[#dcd1fc] rounded-lg flex items-end justify-center flex-col">
              <div className="w-[90%]">
                <div className="flex items-center justify-center mb-4">
                  <p className="text-black  text-2xl font-bold">
                    Schedule to social media.
                  </p>
                </div>
                <div className="flex bg-white h-32 p-4 rounded-l-xl items-top ">
                  <p className="text-black   font-bold">Best time to post</p>
                </div>
                <div>
                  <p className="text-black mt-5">
                    Optimize post timings to publish content at the perfect time
                    for your audience.
                  </p>
                </div>
              </div>
            </div>

            {/* TODO */}
            <div className="col-span-1 row-span-2 bg-white rounded-lg ">
              <div className="h-[30%] w-[80%] pt-5 pl-5  ">
                <p className="text-black  ">*image</p>
              </div>
              <div className="h-[70%] w-[90%] bg-blue pl-4 flex items-center justify-center ">
                <p className="text-black leading-[1.5rem] text-2xl">
                  Manage multiple accounts and platforms.
                </p>
              </div>
            </div>

            {/* Manage multiple accounts and platforms. */}
            <div className="col-span-1 row-span-2 bg-yellow-500 rounded-lg ">
              <div className="h-[50%] w-[90%] pt-4 pl-4">
                <p className="text-black leading-[1.5rem] text-2xl">
                  Maintain a consistent posting schedule.
                </p>
              </div>
              <div className="flex items-center justify-center h-[50%]">
                *image
              </div>
            </div>

            {/* Write your content using AI. */}
            <div className="col-span-1 row-span-3 bg-[#ffcc69] rounded-lg">
              <div className="h-[50%] w-[80%] pt-5 pl-5  ">
                <p className="text-black  text-3xl">
                  Write your content using AI.
                </p>
              </div>
              <div className="h-[50%] bg-blue flex items-center justify-center bg-2hite">
                *image
              </div>
            </div>

            {/* TODO 2 */}
            <div className="col-span-1 row-span-2 bg-white rounded-lg ">
              <div className="h-[50%] w-[80%] pt-5 pl-5">
                <p className="text-black text-5xl">{">"}56%</p>
                <p className="text-black text-sm pt-2">
                  faster audience growth
                </p>
              </div>
              <div className="h-[50%] flex  items-center justify-center rounded-lg">
                *image
              </div>
            </div>

            {/*   Grow followers with non-stop content.*/}
            <div className="col-span-2 row-span-2 bg-[#7651dc] rounded-lg">
              <div className="h-full flex items-center justify-center">
                <p className="text-white">
                  Grow followers with non-stop content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer> */}
    </>
  );
}
