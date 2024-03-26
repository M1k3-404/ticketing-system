import Image from "next/image";

export default function Page() {
    return (
        <div className="bg-white w-full h-full">
            <Image
                className="mx-auto pt-80"
                src="https://cdn-icons-gif.flaticon.com/14447/14447632.gif"
                alt="Under Maintenance"
                width={400}
                height={400}
            />
            <h1 className="text-black text-5xl mt-5 text-center font-semibold">Under Development</h1>
        </div>
    );
}