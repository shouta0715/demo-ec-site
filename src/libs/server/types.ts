import Stripe from "stripe";

export type NextResponseResult<T> = {
  data: T;
  message: string;
};

// dataの中身の型を定義する
type Price = Pick<
  Stripe.Price,
  "id" | "unit_amount" | "currency" | "transform_quantity"
>;

type Product = Pick<
  Stripe.Product,
  "id" | "description" | "name" | "images" | "unit_label"
>;

// 実際のresponseの型は
// type StripeResponseProduct = Stripe.Response<Stripe.ApiList<Stripe.Product>>;
// type StripeResponsePrice = Stripe.Response<Stripe.ApiList<Stripe.Price>>;

export type StripeProductWithPrice = Product & {
  prices: Price[];
};
export type StripeProductWithPriceResult = NextResponseResult<
  StripeProductWithPrice[]
>;
