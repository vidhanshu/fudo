import Image from "next/image";

import { BsPlayFill, BsStar, BsStarFill } from "react-icons/bs"
import { IoCallOutline } from "react-icons/io5"

import Container from "@/src/common/components/Container";
import CustomButton from '@/src/common/components/CustomButton';
import BadgeText from "@/src/common/components/BadgeText";

const Hero = () => {
    return (
        <Container className="flex items-center justify-between p-0 h-[calc(100vh-100px)]">
            <div className="lg:max-w-xl flex flex-col gap-10">
                <BadgeText>
                    More than faster 🍒
                </BadgeText>
                <h1 className="typo-title-hero">
                    Order the food by scanning the <span className="text-primary-main">QR</span>
                </h1>
                <p className="typo-detail-hero">
                    Our job is to filling your tummy with delicious food
                    and with fast and free ordering system.
                </p>
                <div className="flex gap-6 items-center">
                    <CustomButton>
                        Get Started
                    </CustomButton>

                    <button className="flex gap-2 items-center">
                        <span className="shadow-sm-all p-1 rounded-full">
                            <BsPlayFill className="text-secondary" size={25} />
                        </span>
                        Watch Video
                    </button>
                </div>

                <div className="flex gap-2">
                    <div className="flex">
                        <Image src="/home/avatar.png" alt="avatar" className="rounded-full border-3 border-white" width={50} height={50} />
                        <Image src="/home/avatar.png" alt="avatar" className="-translate-x-3 rounded-full border-3 border-white" width={50} height={50} />
                        <Image src="/home/avatar.png" alt="avatar" className="-translate-x-6 rounded-full border-3 border-white" width={50} height={50} />
                    </div>
                    <div>
                        <h5 className="text-sm md:text-base font-semibold">Our Happy Customers</h5>
                        <span className="flex gap-2">
                            <span className="text-sm md:text-base flex gap-1"><BsStarFill size={20} color="#FFC107" /> 4.5</span>
                            <p className="text-sm md:text-base text-gray-500">(12.5 reviews)</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block relative">
                <Image src="/home/hero.svg" alt="hero" width={600} height={700} />

                <div className="absolute -left-20 top-3/4 bg-white shadow-sm-all  flex gap-3 w-fit h-fit items-center px-4 py-2 rounded-full">
                    <Image className="rounded-full" src="/home/avatar.png" alt="avatar" width={50} height={50} />
                    <div>
                        <h4 className="text-sm font-semibold">Vidhanshu Borade</h4>
                        <p className="text-xs text-gray-500">Food Courier</p>
                    </div>
                    <span className="bg-primary-main rounded-full p-2">
                        <IoCallOutline size={20} color="white" />
                    </span>
                </div>

                <div className="absolute -right-0 top-[90%] bg-white shadow-sm-all  flex gap-3 w-fit h-fit p-4 rounded-lg">
                    <Image className="rounded-lg" src="/home/food.jpeg" alt="avatar" width={80} height={80} />
                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">Samosa</h4>
                        <span className="flex gap-2 items-center text-secondary">
                            <BsStarFill size={12} />
                            <BsStarFill size={12} />
                            <BsStarFill size={12} />
                            <BsStar size={12} />
                        </span>
                        <h4 className="font-semibold">
                            <span className="text-xs text-primary-main">₹</span> 7.49
                        </h4>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Hero