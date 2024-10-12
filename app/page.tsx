import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <div className="flex items-center justify-center h-screen ">
          <div className="flex items-center justify-center w-[850px] h-[700px]">
            <div className="flex items-center justify-center  h-[100%] w-[100%]">
              <div className="grid grid-cols-4 grid-rows-6 gap-4 p-4 w-full h-full">
                {/*Create */}
                <div className="col-span-1 row-span-3  flex items-center justify-center flex-col bg-[#FAEEE2] rounded-lg">
                  <div className="flex items-center justify-center  p-4 text-2xl font-bold ">
                    <p className="text-black leading-[1.7rem] font-semibold tracking-tighter">
                      Create and schedule content
                      <span className="text-blue-500 italic font-medium">
                        {" "}
                        quicker.
                      </span>
                    </p>
                  </div>

                  <Image
                    src="/images/illustration-create-post.webp"
                    alt="Description of image"
                    width={150}
                    height={50}
                    objectFit="cover"
                  />
                </div>

                {/* Social */}
                <div className="flex items-center justify-center col-span-2 row-span-2 bg-[#7651dc] rounded-lg flex-col">
                  <div>
                    <p className="font-semibold text-center p-4 text-4xl  text-white">
                      Social Media{" "}
                      <span className="text-[#FFD355] "> 10x </span>
                      <br /> <span className=" italic">Faster</span> with AI
                    </p>
                  </div>
                  <Image
                    src="/images/illustration-five-stars.webp"
                    alt="Description of image"
                    width={120}
                    height={50}
                    objectFit="cover"
                  />
                  <div className="text-white p-1">
                    <p className="text-white text-[12px]">
                      Over 4,000 5-star reviews
                    </p>
                  </div>
                </div>

                {/* Schedules */}
                <div className="col-span-1 row-span-4 bg-[#dcd1fc] flex items-end justify-center flex-col overflow-hidden  rounded-lg">
                  <div className="w-[90%]">
                    <div className="flex items-center justify-center mb-4 ">
                      <p className="text-black ml-2 leading-[1.1rem] text-[20px] font-bold">
                        Schedule to social media.
                      </p>
                    </div>
                    <div className=" bg-white p-4 rounded-lg items-top flex-col  translate-x-2 ">
                      <p className="text-black font-bold">Best time to post</p>
                      <Image
                        src="/images/illustration-schedule-posts.webp"
                        alt="Description of image"
                        width={370}
                        height={200}
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-[90%]">
                      <p className="text-black mt-5 ml-2 leading-[1.1rem] text-[14px]">
                        Optimize post timings to publish content at the perfect
                        time for your audience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Manage multiple accounts and platforms */}
                <div className="col-span-1 row-span-2 bg-white rounded-lg overflow-hidden">
                  <div className="h-[30%] w-[100%] pt-5 pl-5  ">
                    <Image
                      src="/images/illustration-multiple-platforms.webp"
                      alt="Description of image"
                      width={575}
                      height={520}
                      objectFit="none"
                    />
                  </div>
                  <div className="h-[70%] w-[90%] bg-blue pl-4 pt-3 flex items-center justify-center ">
                    <p className="text-black leading-[1.5rem] text-2xl font-semibold">
                      Manage multiple accounts and platforms.
                    </p>
                  </div>
                </div>

                {/* Maintain multiple accounts and platforms. */}
                <div className="col-span-1 row-span-2 bg-[#ffcc69] rounded-lg  overflow-hidden">
                  <div className="h-[50%] w-[90%] pt-6 pl-5">
                    <p className="text-black leading-[1.4rem] text-2xl font-semibold">
                      Maintain a consistent posting schedule.
                    </p>
                  </div>
                  <div className="flex items-center justify-center h-[50%] translate-y-[45px]">
                    <div className="w-[80%]">
                      <Image
                        src="/images/illustration-consistent-schedule.webp"
                        alt="Description of image"
                        width={175}
                        height={220}
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Write your content using AI. */}
                <div className="col-span-1 row-span-3 bg-[#ffcc69] rounded-lg">
                  <div className="h-[40%] w-[70%] pt-4 pl-4 font-semibold ">
                    <p className="text-black leading-[1.6rem] text-[27px] tracking-tighter">
                      Write your content using AI.
                    </p>
                  </div>
                  <div className="h-[60%] p-6 flex items-center justify-center">
                    <div className="translate-x-1.5 -translate-y-5">
                      <Image
                        src="/images/illustration-ai-content.webp"
                        alt="Description of image"
                        width={270}
                        height={200}
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>

                {/* TODO 2 */}
                <div className="col-span-1 row-span-2 bg-white rounded-lg ">
                  <div className="h-[50%] w-[80%] pt-5 pl-5">
                    <p className="text-black text-5xl font-semibold">
                      {">"}56%
                    </p>
                    <p className="text-black text-[12.5px] pt-2">
                      faster audience growth
                    </p>
                  </div>
                  <div className="h-[50%] flex  items-center justify-center rounded-lg">
                    <Image
                      src="/images/illustration-audience-growth.webp"
                      alt="Description of image"
                      width={160}
                      height={200}
                      objectFit="cover"
                    />
                  </div>
                </div>

                {/* Grow followers with non-stop content.*/}
                <div className="col-span-2 row-span-2 bg-[#7651dc] rounded-lg flex flex-row">
                  <div className="h-[100%] w-[45%]  p-4 flex items-center justify-center">
                    <div className="translate-x-2 translate-y-1">
                      <Image
                        src="/images/illustration-grow-followers.webp"
                        alt="Description of image"
                        width={475}
                        height={420}
                        objectFit="none"
                      />
                    </div>
                  </div>
                  <div className="h-full w-[50%] flex items-center pl-3 pr-3 justify-center">
                    <p className="text-white font-medium text-[23px] leading-[1.7rem] tracking-[1px]">
                      Grow followers with non-stop content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
