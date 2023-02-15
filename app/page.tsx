import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <div className="max-w-[375px] mx-auto mt-[15px]">
                {/* top area save,share and back */}
                <div className="flex justify-between items-center px-[15px]">
                    <div className="w-full flex flex-row justify-start items-center text-xs">
                        <Image
                            src="/icon/right.svg"
                            width={7}
                            height={14}
                            alt="back"
                        />
                        <p>Home</p>
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
                    <p className="text-[#2A220E] text-xs text-center font-normal">
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
                                    For this money, but you need to take care of
                                    the text
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
                                    For this money, but you need to take care of
                                    the text
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
                                <p className="text-[16px]">
                                    Flexible Check In Options
                                </p>
                                <p className="text-xs">
                                    For this money, but you need to take care of
                                    the text
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-[#CAC5B7] mt-[16px]"></div>
                    {/* place buddge */}
                    <div className="mt-[24px]">
                        <h2 className="text-2xl leading-8">
                            Best Place to Stay in <br /> Sajek within the Budget
                        </h2>
                        <p className="text-[16px] mt-[16px]">
                            Lorem Ipsum is simply dummied text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the 1500s.
                        </p>

                        <div className="flex justify-center items-center gap-x-1">
                            <p className="text-[16px] underline">Hide</p>
                            <Image
                                src="/icon/fi-rr-angle-small-right.svg"
                                width={7}
                                height={14}
                                alt="great location image"
                            />
                        </div>

                        <div className="h-[1px] w-full bg-[#CAC5B7] mt-[24px]"></div>
                        {/* packege details */}
                        <div className="mt-[24px]">
                            <h2 className="text-2xl text-[#2A220E]">
                                Package Details:
                            </h2>

                            <div className="mt-[16px] text-[#2A220E]">
                                <p className="text-[16px]">
                                    2 Days and 1 Night
                                </p>
                                <p className="text-[16px]">
                                    Stay at Eco Resort on top of Sajek
                                </p>
                                <p className="text-[16px]">
                                    Alutila Cave, Hazachora & Risang Waterfall
                                    expedition
                                </p>
                                <p className="text-[16px]">
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
                        {/* category list */}
                        <div className="mt-[40px]">
                            <h2 className="text-2xl ">Categories List</h2>

                            <div className="grid grid-cols-12 mt-[24px] gap-x-[15px]">
                                <div className="col-span-8">
                                    <div className="border rounded-full flex justify-center items-center py-[7px] shadow-xl">
                                        <div className="flex justify-between items-center gap-x-[25px]">
                                            <div className="div">
                                                <p className="text-[#868686] text-xs">
                                                    Check In:
                                                </p>
                                                <p className="text-[16px] text-[#2A220E] font-semibold">
                                                    5 Oct, 21
                                                </p>
                                            </div>
                                            <div className="h-[16px] w-[1px] bg-[#868686]"></div>
                                            <div className="div">
                                                <p className="text-[#868686] text-xs">
                                                    Check In:
                                                </p>
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
                                                <p className="text-[#868686] text-xs">
                                                    Guests:
                                                </p>
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
            </div>
        </main>
    );
}
