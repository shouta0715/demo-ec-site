import { path } from "@/libs/server";
import {
  StripeProductWithPrice,
  StripeProductWithPriceResult,
} from "@/libs/server/types";

export const getProducts = async (): Promise<StripeProductWithPrice[]> => {
  const resp: StripeProductWithPriceResult = await fetch(`${path()}/stripe`, {
    method: "GET",
  }).then((res) => res.json());

  return resp.data;
};
