import Container from "@/src/common/components/Container"
import Image from "next/image"

const HowToOrder = () => {
    return (
        <Container className="py-10">
            <p className="typo-label-section text-center">How to order</p>
            <h1 className="typo-title-section text-center mt-2">
                Scan, Find and Order
            </h1>

            <div className="flex justify-between items-center mt-10">
                <Image src="/home/scan.svg" alt="scan" width={300} height={300} />
                <Image src="/home/find.svg" alt="find" width={300} height={300} />
                <Image src="/home/order.svg" alt="order" width={300} height={300} />
            </div>
            <div className="flex justify-between items-center mt-10">
                <h1 className="text-center flex-grow typo-title-md">Scan QR</h1>
                <h1 className="text-center flex-grow typo-title-md">Scan QR</h1>
                <h1 className="text-center flex-grow typo-title-md">Scan QR</h1>
            </div>
        </Container>
    )
}

export default HowToOrder