import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Carousel({ 
    images 
}: {
    images: object[];
}) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    }

    useEffect(() => {
        const intervalId = setInterval(() => nextSlide(), 7000);
        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <Card
            isBlurred
            className="relative aspect-video mx-auto mt-10 w-2/3"
            shadow="sm"
        >
            <CardBody className="w-full flex justify-center">
                <button
                    className="absolute h-full bg-transparent opacity-50 hover:opacity-100 left-0 px-3 top-1/2 transform z-50 -translate-y-1/2"
                    onClick={prevSlide}
                >
                    <IoIosArrowDropleftCircle color="white" size={24} />
                </button>
                <Image
                    src={images[currentSlide].src}
                    alt="carousel image"
                    layout="fill"
                    objectFit="cover"
                />
                <button
                    className="absolute h-full bg-transparent opacity-50 hover:opacity-100 right-0 px-3 top-1/2 transform z-50 -translate-y-1/2"
                    onClick={nextSlide}
                >
                    <IoIosArrowDroprightCircle color="white" size={24} />
                </button>
            </CardBody>
            <CardFooter className="absolute bg-black/30 bottom-0 border-t-1 border-zinc-100/50 z-10">
                <div className="w-full">
                    <p className="text-white text-center text-2xl">{images[currentSlide].title}</p>
                    <p className="text-white text-center text-md mx-8 mt-2 mb-5">
                        {images[currentSlide].description}
                    </p>
                    <div className="mx-auto flex justify-center">
                        <Button className="w-3/4 mx-auto">Book Now!</Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}