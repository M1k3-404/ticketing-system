import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";

export default function EventCard({
    event
}: {
    event: object
}) {
    return (
        <Card
            isPressable
            className="relative mx-auto"
            shadow="sm"
        >
            <CardBody className="w-full aspect-square">
                <Image
                    src={event.src}
                    alt="event image"
                    layout="fill"
                    objectFit="cover"
                />
            </CardBody>
            <CardFooter className="border-t-1 aspect-video border-zinc-100/50">
                <div className="w-full overflow-y-hidden">
                    <p className="text-cstm-onyx text-center  text-2xl">{event.title}</p>
                    <p className="text-cstm-onyx text-center text-md mx-8 mt-2 mb-5 text-ellipsis overflow-hidden">
                        {event.description}
                    </p>
                </div>
            </CardFooter>
        </Card>
    );
}