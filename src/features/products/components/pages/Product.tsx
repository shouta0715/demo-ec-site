import { Image } from "@/components/Elements/Image";
import { CartButton } from "@/features/products/components/client/CartButton";
import { StripeProductWithPrice } from "@/libs/server/types";

type Props = StripeProductWithPrice;

export const Product = async ({
  name,
  images,
  prices,
  id,
  description,
}: Props) => {
  return (
    <div key={id} className="flex flex-col justify-between">
      <div className="relative">
        <div className="relative h-72 w-full overflow-hidden rounded-lg">
          <Image
            alt={name}
            className="h-full w-full object-cover object-center"
            src={images[0]}
          />
        </div>
        <div className="relative mt-4">
          <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
          />
          <p className="relative text-lg font-semibold text-white">
            {prices[0].unit_amount}円
          </p>
        </div>
      </div>
      <div className="mt-6">
        <CartButton name={name} />
      </div>
    </div>
  );
};
