import { Pagination } from "@nextui-org/react";

export default function Paginations({ 
    totalPages, paginate
}: {
    totalPages: number;
    paginate: (pageNumber: number) => void;
}) {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return(
        <Pagination className="py-10" size="lg" variant="faded" showControls total={totalPages} initialPage={1} onChange={paginate} />
    )
}