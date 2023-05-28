import Stripe from "stripe";

export type NextResponseResult<T> = {
  data: T;
  message: string;
};

type Price = Stripe.Price;
type Product = Stripe.Product;

export type StripeProductWithPrice = Product & {
  price: Price;
};
export type StripeProductWithPriceResult = NextResponseResult<
  StripeProductWithPrice[]
>;
