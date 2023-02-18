import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="max-w-[375px] mx-auto mt-[15px]">
        {/* top area save,share and back */}
        <div className="flex justify-between items-center px-[15px]">
          <div className="w-full flex flex-row justify-start items-center ">
            <Image src="/icon/right.svg" width={24} height={24} alt="back" />
            <p className="text-xs">Home</p>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex justify-start items-center flex-row text-xs gap-x-[8px]">
              <p className="underline">Save</p>
              <Image
                src="/icon/Vector (1).svg"
                width={24}
                height={21}
                alt="save"
              />
            </div>
            <div className="flex justify-start items-center flex-row text-xs gap-x-[8px]">
              <p className="underline">Share</p>
              <Image
                src="/icon/fi-rr-share.svg"
                width={24}
                height={24}
                alt="share"
              />
            </div>
          </div>
        </div>
        {/* higheliter */}
        <div className="bg-[#FEE29A] p-2 mt-[14px]">
          <p className="text-[#2A220E] text-xs text-center">
            Up to 60% Less for Bundle, compared to regular price!
          </p>
        </div>
        {/* hotel area */}
        <div className="px-[15px]">
          <Image
            src="/icon/Frame 950.svg"
            width={500}
            height={118}
            alt="hotel image"
          />

          {/* hotel details */}
          <div className="">
            <div className="flex justify-between items-center">
              <div className="div">
                <h2 className="text-2xl">Hotel Name Name</h2>
                <p className="text-xs flex justify-start items-center gap-x-1">
                  <Image
                    src="/icon/fi-rr-home-location.svg"
                    width={6}
                    height={7}
                    alt="location"
                  />
                  <span>Sajek, Bangladesh</span>
                </p>
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <Image
                  src="/icon/Vector.svg"
                  width={14}
                  height={14}
                  alt="rating"
                />
                <p className="text-xs">4.5</p>
              </div>
            </div>
          </div>
          {/* hotel description */}
          <div className="h-[1px] w-full bg-[#CAC5B7] mt-[16px]"></div>
          <div className="mt-[16px]">
            <div className="flex flex-row gap-x-[12px]">
              <Image
                src="/icon/fi-rr-home-location.svg"
                width={24}
                height={24}
                alt="great location image"
              />
              <div className="flex flex-col ">
                <p className="text-[16px]">Great Location</p>
                <p className="text-xs">
                  For this money, but you need to take care of the text
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-x-[12px] mt-[16px]">
              <Image
                src="/icon/fi-rr-following.svg"
                width={24}
                height={24}
                alt="great location image"
              />
              <div className="flex flex-col ">
                <p className="text-[16px]">The Great Owner</p>
                <p className="text-xs">
                  For this money, but you need to take care of the text
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-x-[12px] mt-[16px]">
              <Image
                src="/icon/fi-rr-key.svg"
                width={24}
                height={24}
                alt="great location image"
              />
              <div className="flex flex-col ">
                <p className="text-[16px]">Flexible Check In Options</p>
                <p className="text-xs">
                  For this money, but you need to take care of the text
                </p>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#CAC5B7] mt-[16px]"></div>
          {/* place buddge */}
          {/* {expandDetails && <h2>Geloo</h2>} */}
          <div className="mt-[24px]">
            <h2 className="text-2xl leading-8">
              Best Place to Stay in <br /> Sajek within the Budget
            </h2>
            <p className="text-[16px] mt-[16px]">
              Lorem Ipsum is simply dummied text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s.
            </p>

            <div className="h-[1px] w-full bg-[#CAC5B7] mt-[24px]"></div>
            {/* packege details */}
            <div className="mt-[24px]">
              <h2 className="text-2xl text-[#2A220E]">Package Details:</h2>

              <div className="mt-[16px] text-[#2A220E]">
                <p className="text-[16px] flex justify-start items-center gap-x-[6px]">
                  <div className="w-1 h-1 bg-black rounded-full"></div>2 Days
                  and 1 Night
                </p>
                <p className="text-[16px] flex justify-start items-center gap-x-[6px]">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  Stay at Eco Resort on top of Sajek
                </p>
                <p className="text-[16px] flex justify-start items-center leading-[22px] gap-x-[6px]">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  Alutila Cave, Hazachora & Risang Waterfall expedition
                </p>
                <p className="text-[16px] flex justify-start items-center gap-x-[6px]">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  Enjoy Chander Gari ride on hilly roads
                </p>
              </div>
            </div>

            <div className="h-[1px] w-full bg-[#CAC5B7] mt-[16px]"></div>

            {/* Top Amenities */}
            <div className="mt-[25px]">
              <h2 className="text-2xl">Top Amenities:</h2>

              <div className="mt-[25px]">
                <div className="flex justify-start gap-x-[20px] items-center">
                  <div className="flex justify-start items-center gap-x-[4px] text-[16px]">
                    <Image
                      src="/icon/car.svg"
                      width={22}
                      height={23}
                      alt="great location image"
                    />
                    <p className="">Parking</p>
                  </div>
                  <div className="flex justify-start items-center gap-x-[4px] text-[16px]">
                    <Image
                      src="/icon/statue.svg"
                      width={22}
                      height={23}
                      alt="great location image"
                    />
                    <p className="">Wellness</p>
                  </div>

                  <div className="flex justify-start items-center gap-x-[4px] text-[16px]">
                    <Image
                      src="/icon/Frame 500.svg"
                      width={22}
                      height={23}
                      alt="great location image"
                    />
                    <p className="">Transport</p>
                  </div>
                </div>
                <div className="flex justify-start gap-x-[20px] items-center mt-[18px]">
                  <div className="flex justify-start items-center gap-x-[4px] text-[16px]">
                    <Image
                      src="/icon/Frame 500.svg"
                      width={22}
                      height={23}
                      alt="great location image"
                    />
                    <p className="">Transport</p>
                  </div>
                  <div className="flex justify-start items-center gap-x-[4px] text-[16px]">
                    <Image
                      src="/icon/Frame 508.svg"
                      width={22}
                      height={23}
                      alt="great location image"
                    />
                    <p className="">Swimming pool</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-1 mt-[12px]">
              <p className="text-[16px] underline">Hide</p>
              <Image
                src="/icon/fi-rr-angle-small-right.svg"
                width={25}
                height={25}
                alt="great location image"
              />
            </div>
            {/* category list */}
            <div className="mt-[40px]">
              <h2 className="text-2xl ">Categories List</h2>

              <div className="grid grid-cols-12 mt-[24px] gap-x-[15px]">
                <div className="col-span-8">
                  <div className="border rounded-full flex justify-center items-center py-[7px] shadow-xl">
                    <div className="flex justify-between items-center gap-x-[25px]">
                      <div className="div">
                        <p className="text-[#868686] text-xs">Check In:</p>
                        <p className="text-[16px] text-[#2A220E] font-semibold">
                          5 Oct, 21
                        </p>
                      </div>
                      <div className="h-[16px] w-[1px] bg-[#868686]"></div>
                      <div className="div">
                        <p className="text-[#868686] text-xs">Check In:</p>
                        <p className="text-[16px] text-[#2A220E] font-semibold">
                          5 Oct, 21
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 ">
                  <div className="border rounded-full flex justify-center items-center py-[7px] shadow-xl">
                    <div className="flex justify-between items-center">
                      <div className="div">
                        <p className="text-[#868686] text-xs">Guests:</p>
                        <div className="flex justify-start gap-x-1">
                          <Image
                            src="/icon/Frame 941.svg"
                            width={23}
                            height={16}
                            alt="great location image"
                          />
                          <p>3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* economy family */}

        <div className="px-[16px] mt-[24px]">
          <div className="  shadow-lg rounded-lg border   py-3">
            <div className="pl-2">
              <div className="flex justify-between items-start ">
                <div className="div">
                  <h1 className="text-[16px] font-semibold">Economy Family</h1>
                  <div className="flex justify-start items-center gap-x-[2px]">
                    <p className="text-xs">Suitable for 5</p>
                  </div>
                </div>
                <div className="div">
                  <div className="bg-[#D82E3F] py-1 px-2 rounded-sm">
                    <p className="text-[8px] text-white ">
                      -24% Off 24 Jan - 18 Feb
                    </p>
                  </div>
                </div>
              </div>

              {/* image area */}
              <div className=" flex justify-between items-center gap-x-[4px] mt-[15px] w-full">
                <div className=" w-full">
                  <Image
                    src="/icon/Rectangle 40.svg"
                    width={160}
                    height={114}
                    alt="great location image"
                  />
                </div>
                <div className=" grid grid-cols-3 items-center justify-center w-full gap-1 h-full">
                  <Image
                    src="/icon/Rectangle 40.svg"
                    width={55}
                    height={55}
                    alt="great location image"
                  />
                  <Image
                    src="/icon/Rectangle 40.svg"
                    width={55}
                    height={55}
                    alt="great location image"
                  />
                  <Image
                    src="/icon/Rectangle 40.svg"
                    width={55}
                    height={55}
                    alt="great location image"
                  />
                  <Image
                    src="/icon/Rectangle 40.svg"
                    width={55}
                    height={55}
                    alt="great location image"
                  />
                  <Image
                    src="/icon/Rectangle 40.svg"
                    width={55}
                    height={55}
                    alt="great location image"
                  />
                  <Image
                    src="/icon/Rectangle 40.svg"
                    width={55}
                    height={55}
                    alt="great location image"
                  />
                </div>
              </div>
              {/* image details */}
              <div className="div">
                <div className="grid grid-cols-2 mt-[21px]">
                  <div className="div">
                    <p>Room</p>
                  </div>
                  <div className="div">
                    <p>Room</p>
                  </div>
                </div>
                <div className="underline flex justify-center mx-auto mt-[18px]">
                  + 15 more
                </div>

                <div className="flex flex-wrap justify-evenly gap-2 mt-[15px]">
                  <p
                    className="flex justify-start gap-x-[4px] items-center text-xs
                                "
                  >
                    <Image
                      src="/icon/signIcon.svg"
                      width={9}
                      height={9}
                      alt="share"
                    />
                    Linen
                  </p>

                  <p className="flex justify-start gap-x-[4px] items-center text-xs">
                    <Image
                      src="/icon/signIcon.svg"
                      width={9}
                      height={9}
                      alt="share"
                    />
                    TV
                  </p>

                  <p className="flex justify-start gap-x-[4px] items-center text-xs">
                    <Image
                      src="/icon/signIcon.svg"
                      width={9}
                      height={9}
                      alt="share"
                    />
                    Refrigerator
                  </p>

                  <p className="flex justify-start gap-x-[4px] items-center text-xs">
                    <Image
                      src="/icon/signIcon.svg"
                      width={9}
                      height={9}
                      alt="share"
                    />
                    Telephone
                  </p>
                  <p className="flex justify-start gap-x-[4px] items-center text-xs">
                    <Image
                      src="/icon/signIcon.svg"
                      width={9}
                      height={9}
                      alt="share"
                    />
                    Telephone
                  </p>
                  <p className="flex justify-start gap-x-[4px] items-center text-xs">
                    <Image
                      src="/icon/signIcon.svg"
                      width={9}
                      height={9}
                      alt="share"
                    />
                    Heating
                  </p>
                  <p className="flex justify-start gap-x-[4px] items-center text-xs">
                    <Image
                      src="/icon/signIcon.svg"
                      width={9}
                      height={9}
                      alt="share"
                    />
                    Iron
                  </p>
                  <p className="flex justify-start gap-x-[4px] items-center text-xs">
                    <Image
                      src="/icon/signIcon.svg"
                      width={9}
                      height={9}
                      alt="share"
                    />
                    Microwave
                  </p>
                  <p className="flex justify-start gap-x-[4px] items-center text-xs">
                    <Image
                      src="/icon/signIcon.svg"
                      width={9}
                      height={9}
                      alt="share"
                    />
                    Ironing facilities
                  </p>
                  <p className="flex justify-start gap-x-[4px] items-center text-xs">
                    <Image
                      src="/icon/signIcon.svg"
                      width={9}
                      height={9}
                      alt="share"
                    />
                    Hairdryer
                  </p>
                </div>
                <div className="underline flex justify-center mx-auto mt-[18px]">
                  + 15 more
                </div>

                <div className="mt-[19px] ">
                  <div className=" flex flex-col justify-center items-center text-xs mx-auto">
                    <p>Price per Person:</p>
                    <p className="">
                      <span className="font-semibold">10077 BDT</span>{" "}
                      <del>107290 BDT</del>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  justify-between items-center border rounded-lg h-[45px] mt-[12px] mx-2">
              <div className="border-r   rounded-lg w-[45px] h-full justify-center items-center flex">
                -
              </div>
              <div className="flex justify-center items-center flex-col">
                <p className="text-[16px] font-semibold">Add Rome</p>
                <p className="text-xs">(0 Selected)</p>
              </div>
              <div className="border-l bg-[#4E90A8] text-white rounded-lg w-[45px] h-full justify-center items-center flex">
                +
              </div>
            </div>
          </div>
        </div>

        {/* nearby place */}

        <div className="mt-[40px]">
          <h2 className="px-[16px] font-semibold text-[22px]">Places Nearby</h2>
          {/* map area */}
          <div className="div"></div>
          {/* duration nearby area */}

          <div className="grid grid-cols-4 justify-between items-center px-[16px] mt-[40px]">
            <div className="flex col-span-3 justify-start items-center w-full gap-x-1">
              <Image
                src="/icon/Frame 941.svg"
                width={23}
                height={16}
                alt="great location image"
              />
              <p>McDonald’s</p>
              <div className="border-dotted border w-full flex justify-end items-end mx-auto bg-black"></div>
            </div>
            <p className="w-full col-span-1">0,3 km</p>
          </div>
          <div className="flex justify-center mx-auto gap-x-1 underline mt-[15px]">
            <span className="text-[16px]">Expand </span>
            <Image
              src="/icon/Frame 941.svg"
              width={23}
              height={16}
              alt="great location image"
            />
          </div>
        </div>

        {/* Amneties area */}
        <div className="px-[16px]">
          <h2 className="text-2xl font-semibold">Amneties</h2>

          <div className="grid grid-cols-2 justify-between items-center mt-[12px]">
            <h2 className="flex justify-start items-center gap-x-2">
              <div className="w-1 h-1 rounded-full bg-black"></div>
              Swimming Pool
            </h2>
            <h2 className="flex justify-start items-center gap-x-2">
              <div className="w-1 h-1 rounded-full bg-black"></div>
              Swimming Pool
            </h2>
          </div>
        </div>

        {/* Hotel Rules: */}
        <div className="px-[16px] mt-[40px]">
          <h2 className="text-2xl font-semibold">Hotel Rules:</h2>
          <div className="grid grid-cols-2 justify-between items-center">
            <h2 className="flex justify-start items-center gap-x-2">
              <div className="w-1 h-1 rounded-full bg-black"></div>
              Swimming Pool
            </h2>
            <h2 className="flex justify-start items-center gap-x-2">
              <div className="w-1 h-1 rounded-full bg-black"></div>
              Swimming Pool
            </h2>
          </div>
        </div>

        {/* All Services */}

        <div className="px-[16px] mt-[16px]">
          <h2 className="text-2xl font-semibold">All Services</h2>

          <div className="flex justify-start items-start mt-[21px]">
            <div className=" w-3/6 ">
              <div className="flex justify-start items-center gap-x-1">
                <Image
                  src="/icon/Frame 496.svg"
                  width={23}
                  height={16}
                  alt="great location image"
                />
                <p className="text-[16px] font-semibold">Outdoors</p>
              </div>
              <div className="flex flex-col gap-[10px] mt-[10px]">
                <p className="text-xs">BBQ facilities</p>
                <p className="text-xs">Terrace</p>
                <p className="text-xs">Garden</p>
              </div>
            </div>
            <div className="w-3/6 ">
              <div className="flex justify-start items-center gap-x-1">
                <Image
                  src="/icon/Frame 511.svg"
                  width={23}
                  height={16}
                  alt="great location image"
                />
                <p className="text-[16px] font-semibold">Parking</p>
              </div>
              <div className="flex flex-col gap-[10px] mt-[10px]">
                <p className="text-xs">Free Parking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cancellation Policy */}

        <div className="mt-[26px] px-[16px]">
          <h2 className="text-2xl font-semibold">Cancellation Policy</h2>

          <p className="mt-[12px] text-[16px] font-semibold">
            Percentage returned, excluding <br /> Service Fee
          </p>

          <div className="mt-[12px] flex flex-col gap-[30px]">
            <div className="border shadow-lg rounded-2xl">
              <div className="bg-[#376576] rounded-t-2xl">
                <p className="text-[16px] text-white flex justify-center items-center p-1">
                  100%
                </p>
              </div>
              <p className="text-center p-3 mt-[12px] font-normal">
                If Customer Cancels between 14 to 2 days before the Arival time,
                (Not later than 48 hours before Check In)
              </p>
            </div>

            <div className="border shadow-lg rounded-2xl">
              <div className="bg-[#4E90A8] rounded-t-2xl">
                <p className="text-[16px] text-white flex justify-center items-center p-1">
                  75%
                </p>
              </div>
              <p className="text-center p-3 mt-[12px] font-normal">
                If Customer Cancels between 14 to 2 days before the Arival time,
                (Not later than 48 hours before Check In)
              </p>
            </div>

            <div className="border shadow-lg rounded-2xl">
              <div className="bg-[#FFCC00] rounded-t-2xl">
                <p className="text-[16px] text-white flex justify-center items-center p-1">
                  50%
                </p>
              </div>
              <p className="text-center p-3 mt-[12px] font-normal">
                If Customer Cancels between 14 to 2 days before the Arival time,
                (Not later than 48 hours before Check In)
              </p>
            </div>
            <div className="border shadow-lg rounded-2xl">
              <div className="bg-[#FF9500] rounded-t-2xl">
                <p className="text-[16px] text-white flex justify-center items-center p-1">
                  25%
                </p>
              </div>
              <p className="text-center p-3 mt-[12px] font-normal">
                If Customer Cancels between 14 to 2 days before the Arival time,
                (Not later than 48 hours before Check In)
              </p>
            </div>
            <div className="border shadow-lg rounded-2xl">
              <div className="bg-[#FE9A9A] rounded-t-2xl">
                <p className="text-[16px] text-white flex justify-center items-center p-1">
                  0%
                </p>
              </div>
              <p className="text-center p-3 mt-[12px] font-normal">
                If Customer Cancels between 14 to 2 days before the Arival time,
                (Not later than 48 hours before Check In)
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Stats */}
        <div className="div"></div>

        {/* Review */}
        <div className="px-[16px] mt-[36px]">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold">144 Reviews</div>
            <div className="text-2xl font-semibold">4.9</div>
          </div>

          <div className="mt-[12px] flex flex-col gap-4">
            <div className="div">
              <div className="flex justify-start gap-x-2">
                <div className="flex justify-start items-center gap-x-2">
                  <Image
                    src="/icon/Ellipse 9.svg"
                    width={36}
                    height={36}
                    alt="great location image"
                  />
                  <div className="flex flex-col">
                    <p className="text-[16px] font-medium">Tamara Holding</p>
                    <p className="text-[12px]">January, 12, 2020</p>
                  </div>
                </div>
                <div className="div">(5.0)</div>
              </div>
              <p className="mt-[8px] text-xs">
                Great place to stay at, especially, if you are travelling with
                children. Owners are extremely attentive to even smallest
                details. Highly reccomend.
              </p>
            </div>
            <div className="div">
              <div className="flex justify-start gap-x-2">
                <div className="flex justify-start items-center gap-x-2">
                  <Image
                    src="/icon/Ellipse 9.svg"
                    width={36}
                    height={36}
                    alt="great location image"
                  />
                  <div className="flex flex-col">
                    <p className="text-[16px] font-medium">Tamara Holding</p>
                    <p className="text-[12px]">January, 12, 2020</p>
                  </div>
                </div>
                <div className="div">(5.0)</div>
              </div>
              <p className="mt-[8px] text-xs">
                Great place to stay at, especially, if you are travelling with
                children. Owners are extremely attentive to even smallest
                details. Highly reccomend.
              </p>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="px-[16px] mt-[32px]">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <div className="mt-[16px] flex flex-col gap-2">
            <div className="flex justify-start items-center gap-x-3">
              <div className=" flex justify-center items-center">
                <Image
                  src="/icon/FAQ_down.svg"
                  width={33}
                  height={33}
                  alt="great location image"
                />
              </div>
              <p className="text-[16px] leading-[22px] font-medium">
                What’s the Company is doing about COVID-19?
              </p>
            </div>
            <div className="flex justify-start items-center gap-x-3">
              <div className=" flex justify-center items-center">
                <Image
                  src="/icon/FAQ_down.svg"
                  width={33}
                  height={33}
                  alt="great location image"
                />
              </div>
              <p className="text-[16px] leading-[22px] font-medium">
                Do I need to meet my host?
              </p>
            </div>
          </div>
        </div>

        {/* Hotel Policies */}
        <div className="mt-[45px] px-[16px]">
          <h2 className="text-center font-semibold text-2xl">Hotel Policies</h2>

          <div className="mt-[30px] flex flex-col gap-[10px]">
            <p className="text-lg">
              <span className="font-medium ">• Guarantee Policy: </span>
              Without advance or credit card authorization no reservations are
              guaranteed. Hotel authority has complete right to cancel the non
              guaranteed reservation at any time without prior notice.
            </p>
            <p className="text-lg">
              <span className="font-medium "> • Extension Policy: </span>
              The extension of stay has to be requested in 12 hours before check
              out and acceptance is based upon availability.
            </p>
            <p className="text-lg">
              <span className="font-medium ">• Late Check-out Policy: </span>
              Late check-out before 1800 hours will be half day charge and after
              1800 hours will be full day charge (subject to availability).
            </p>
          </div>

          <div className="underline text-center mt-[15px]">View All</div>
        </div>

        {/* Available Payment Methods */}

        <div className="div">
          <h2 className="text-2xl font-semibold text-center mt-[40px]">
            Available Payment Methods
          </h2>

          <div className="mt-[30px] flex flex-row justify-evenly items-center w-full">
            <Image
              src="/icon/visa.svg"
              width={60}
              height={60}
              alt="great location image"
            />
            <Image
              src="/icon/bkash.svg"
              width={60}
              height={60}
              alt="great location image"
            />
            <Image
              src="/icon/american.svg"
              width={60}
              height={60}
              alt="great location image"
            />
          </div>
        </div>

        {/* Still have questions? */}
        <div className="mt-[40px] px-[25px]">
          <h2 className="text-2xl font-semibold text-center mt-[40px]">
            Still have questions?
          </h2>

          <div className="mt-[15px]  text-center py-[12px] text-xs bg-[#4E90A8] rounded-full text-white">
            Ask Now!
          </div>
        </div>

        {/* footer */}

        <div className="mt-[33px]">
          <div className="flex justify-center mx-auto">
            <Image
              src="/icon/ghuddy-logo 1.svg"
              width={154}
              height={70}
              alt="great location image"
            />
          </div>

          <div className="mt-[17px] flex flex-col gap-[25px] px-[16px]">
            <div className="div">
              <div className="flex justify-start items-center">
                <Image
                  src="/icon/material-symbols_speed-outline-rounded.svg"
                  width={20}
                  height={16}
                  alt="great location image"
                />{" "}
                <span className="text-[16px] font-medium">Faster Delivery</span>
              </div>
              <p className="text-xs">Service is received within minutes</p>
            </div>
            <div className="div">
              <div className="flex justify-start items-center">
                <Image
                  src="/icon/ic_baseline-payment.svg"
                  width={20}
                  height={16}
                  alt="great location image"
                />{" "}
                <span className="text-[16px] font-medium">Secure Payment</span>
              </div>
              <p className="text-xs">100% Secure Payment</p>
            </div>

            <div className="div">
              <div className="flex justify-start items-center">
                <Image
                  src="/icon/ic_baseline-settings-backup-restore.svg"
                  width={20}
                  height={16}
                  alt="great location image"
                />{" "}
                <span className="text-[16px] font-medium">7 Days Return</span>
              </div>
              <p className="text-xs">If any troubles occur</p>
            </div>
            <div className="div">
              <div className="flex justify-start items-center">
                <Image
                  src="/icon/ic_baseline-support-agent.svg"
                  width={20}
                  height={16}
                  alt="great location image"
                />{" "}
                <span className="text-[16px] font-medium">Quick Support</span>
              </div>
              <p className="text-xs">Text us on Facebook or WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
