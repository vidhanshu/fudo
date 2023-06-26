import Container from "@/src/common/components/Container";
import Image from "next/image";

const HowToOrder = () => {
  return (
    <Container>
      <p className="typo-label-section text-center">How to order</p>
      <h1 className="typo-title-section text-center mt-2">
        Scan, Find and Order
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mt-10">
        <div>
          <Image src="/home/scan.svg" alt="scan" width={250} height={300} />
          <h1 className="mt-8 text-center flex-grow typo-title-md">Scan QR</h1>
        </div>
        <div>
          <Image src="/home/find.svg" alt="find" width={250} height={300} />
          <h1 className="mt-8 text-center flex-grow typo-title-md">
            Find your favorite food
          </h1>
        </div>
        <div>
          <Image src="/home/order.svg" alt="order" width={250} height={300} />
          <h1 className="mt-8 text-center flex-grow typo-title-md">Order</h1>
        </div>
      </div>
    </Container>
  );
};

export default HowToOrder;
