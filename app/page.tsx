import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <div className="flex items-center justify-center lg:h-screen ">
          <div className="flex items-center justify-center lg:w-[850px] lg:h-[700px]">
            <div className="flex items-center justify-center  h-[100%] w-[100%]">
              <div className="grid grid-cols-1 lg:grid-cols-4  lg:grid-rows-6 gap-4 p-4 w-full h-full">
                {/*Create */}
                <div className="order-7 lg:order-none col-span-1 row-span-3 flex lg:items-center justify-center flex-col bg-[#FAEEE2] rounded-lg pb-14 lg:pb-0">
                  <div className="flex items-center lg:sjustify-center p-6 lg:p-4 text-4xl lg:text-2xl font-bold">
                    <p className="text-black leading-[2.3rem] lg:leading-[1.7rem] font-semibold tracking-tighter">
                      Create and schedule content
                      <span className="text-blue-500 italic font-medium">
                        {" "}
                        quicker.
                      </span>
                    </p>
                  </div>
                  <div className="pl-5 lg:pl-0">
                    <Image
                      src="/images/illustration-create-post.webp"
                      alt="Description of image"
                      width={150}
                      height={50}
                      objectFit="cover"
                    />
                  </div>
                </div>

                {/* Social */}
                <div className="order-1 lg:order-none flex items-center justify-center col-span-1 lg:col-span-2 row-span-2 bg-[#7651dc] rounded-lg flex-col">
                  <div className="w-[340px] lg:w-[100%]">
                    <p className="font-semibold text-center p-7 lg:p-4 text-[42px] lg:text-4xl text-white leading-[2.7rem] ">
                      Social Media{" "}
                      <span className="text-[#FFD355] "> 10x </span>
                      <span className=" italic">Faster</span> with AI
                    </p>
                  </div>
                  <div className="-translate-y-3 lg:-translate-y-0">
                    <Image
                      src="/images/illustration-five-stars.webp"
                      alt="Description of image"
                      width={120}
                      height={50}
                      objectFit="cover"
                    />
                  </div>
                  <div className="text-white lg:p-1 -translate-y-2 lg:-translate-y-0 mb-5 lg:mb-0">
                    <p className="text-white text-[14px] lg:text-[12px]">
                      Over 4,000 5-star reviews
                    </p>
                  </div>
                </div>

                {/* Schedules */}
                <div className="order-4 lg:order-none col-span-1 row-span-4 bg-[#dcd1fc] flex items-center lg:items-end justify-center flex-col overflow-hidden rounded-lg">
                  <div className="w-[90%]">
                    <div className="flex items-center pt-8 lg:pt-0 justify-center mb-4">
                      <p className="text-black mb-4 lg:mb-0 mt-3 lg:mt-0 lg:ml-2 leading-[1.1rem] text-[30px] lg:text-[20px] font-bold">
                        Schedule to social media.
                      </p>
                    </div>
                    <div className=" bg-white p-4 rounded-lg items-top flex-col lg:translate-x-2 ">
                      <div className="flex lg:w-[200px] justify-center items-center lg:flex-none">
                        <Image
                          src="/images/illustration-schedule-posts.webp"
                          alt="Description of image"
                          width={470}
                          height={300}
                          objectFit="default"
                        />
                      </div>
                    </div>
                    <div className=" lg:w-[90%] mb-8 lg:mb-0  mt-7 lg:mt-0">
                      <p className="text-black mt-5 ml-2 leading-[1.4rem] lg:leading-[1.1rem] text-[18px] lg:text-[14px]">
                        Optimize post timings to publish content at the perfect
                        time for your audience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Manage multiple accounts and platforms */}
                <div className="order-2 lg:order-none col-span-1 row-span-2 bg-white rounded-lg overflow-hidden">
                  <div className="h-[30%] w-[95%] lg:w-[100%] pt-5 pl-5  ">
                    <Image
                      src="/images/illustration-multiple-platforms.webp"
                      alt="Description of image"
                      width={575}
                      height={520}
                      objectFit="none"
                    />
                  </div>
                  <div className="h-[70%] w-[90%] bg-blue pl-4 pt-8 lg:pt-3 flex items-center justify-center ">
                    <p className="text-black leading-[1.5rem] text-2xl font-semibold">
                      Manage multiple accounts and platforms.
                    </p>
                  </div>
                </div>

                {/* Maintain multiple accounts and platforms. */}
                <div className="order-3 lg:order-none col-span-1 row-span-2 bg-[#ffcc69] rounded-lg  overflow-hidden">
                  <div className="h-[50%] w-[70%] lg:w-[90%] pt-6 pl-5">
                    <p className="text-black leading-[1.4rem] text-2xl font-semibold">
                      Maintain a consistent posting schedule.
                    </p>
                  </div>
                  <div className="flex items-center justify-center h-[50%] translate-x-[20px] lg:-translate-x-[0px] lg:translate-y-[45px]">
                    <div className="w-[100%] lg:w-[80%]">
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
                <div className="order-8 lg:order-none col-span-1 row-span-3 bg-[#ffcc69] rounded-lg">
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

                {/* 56%*/}
                <div className="order-6 lg:order-none col-span-1 row-span-2 bg-white rounded-lg pb-2 lg:pb-0">
                  <div className="h-[50%] w-[80%] pt-5 pl-5">
                    <p className="text-black text-5xl font-semibold">
                      {">"}56%
                    </p>
                    <p className="text-black mb-6 lg:mb-0 text-[15px] lg:text-[12.5px] pt-2">
                      faster audience growth
                    </p>
                  </div>
                  <div className="lg:h-[50%] flex items-center ml-3 lg:ml-0 lg:mb-0 lg:justify-center rounded-lg">
                    <Image
                      src="/images/illustration-audience-growth.webp"
                      alt="Description of image"
                      width={160}
                      height={200}
                      objectFit="none"
                    />
                  </div>
                </div>

                {/* Grow followers with non-stop content.*/}
                <div className="order-5 lg:order-none col-span-1 lg:col-span-2 row-span-2 bg-[#7651dc] rounded-lg flex flex-col lg:flex-row items-center justify-center">
                  <div className="lg:h-[100%] w-[75%] lg:w-[45%]  p-4 flex items-center justify-center ">
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
                  <div className="lg:h-full w-[70%] lg:w-[55%] mt-5 lg:mt-0 mb-8 lg:mb-5 flex items-center pl-3 pr-3 justify-center">
                    <p className="text-white font-medium text-[23px] leading-[1.7rem] tracking-[1px] text-center lg:text-left">
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
