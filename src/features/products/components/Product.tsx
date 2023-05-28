/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
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
          <img
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
        <Link
          className="flex items-center justify-center rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          href={`/${id}`}
        >
          カートに追加<span className="sr-only">{name}をカートに追加する</span>
        </Link>
      </div>
    </div>
  );
};
