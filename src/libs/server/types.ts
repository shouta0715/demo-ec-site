import Stripe from "stripe";

export type NextResponseResult<T> = {
  data: T;
  message: string;
};

export type StripeProductResult = NextResponseResult<
  Stripe.Response<Stripe.ApiList<Stripe.Product>>
>;
