import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="flex h-full basis-1/5 bg-cstm-white-smoke flex-col px-3 py-4 md:px-4">
            {/* Profile */}
            <Link 
                className="mb-2 flex h-10 items-end justify-start rounded-md bg-cstm-platinum p-4 md:h-32"
                href="/"
            >
                <p className="text-left text-cstm-onyx text-4xl font-bold">Ticketing<br />System</p>
            </Link>

            {/* Navigation */}
            <div className="flex grow w-full flex-row space-x-4 mt-10 md:flex-col md:space-x-0 md:space-y-5">
                <Link
                    className="text-cstm-onyx text-xl bg-transparent hover:bg-cstm-platinum px-4 py-2 w-full"
                    href="/"
                >
                    <p>Home</p>
                </Link>
                <Link
                    className="text-cstm-onyx text-xl bg-transparent hover:bg-cstm-platinum px-4 py-2 w-full"
                    href="/events"
                >
                    <p>Events</p>
                </Link>
                <Link
                    className="text-cstm-onyx text-xl bg-transparent hover:bg-cstm-platinum px-4 py-2 w-full"
                    href="/contact-us"
                >
                    <p>Contact Us</p>
                </Link>
            </div>
        </div>
    );
}