import { NextResponse } from "next/server";
import Stripe from "stripe";
import { StripeProductResult } from "@/libs/server/types";

const API_KEY = process.env.STRIPE_API_KEY as string;

export async function GET() {
  const stripe = new Stripe(API_KEY, {
    apiVersion: "2022-11-15",
    maxNetworkRetries: 2,
  });

  try {
    // 100件までしか取得できない has_more が true の場合は、更に取得する必要がある
    // * ending before は、指定した ID 以前のデータを取得する
    // * starting after は、指定した ID 以降のデータを取得する
    // * limit は、取得する件数を指定する
    // * created は、指定した日時で絞り込む gt(e) + lt(e) で指定する
    // ? https://stripe.com/docs/api/products/list

    const products = await stripe.products.list();

    // productsにはpriceが含まれていないので、priceを取得する、取得したらproductsにpriceを追加する

    return NextResponse.json<StripeProductResult>({
      data: products,
      message: "ok",
    });
  } catch (error) {
    return NextResponse.json({
      data: null,
      message: "error",
    });
  }
}
