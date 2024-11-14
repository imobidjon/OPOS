import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <NextSeo
        title="Plutonium"
        description="Plutonium – where darkness meets the web."
        canonical="https://plutonium.vercel.app/"
        openGraph={{
          url: "https://plutonium.vercel.app/",
          title: "Plutonium",
          description: "Plutonium – where darkness meets the web.",
          images: [
            {
              url: "blob:https://og-playground.vercel.app/8baff750-c782-4a04-b198-7ee3dd1e1974",
            },
          ],
          site_name: "Plutonium",
        }}
        twitter={{
          handle: "@saurishhh",
          site: "https://plutonium.vercel.app/",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              Restaurantingizni
              <br />O<span style={{ color: "#e57100" }}>POS</span> bilan
              raqamlashtiring.
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              "O
              <span style={{ color: "#e57100" }}>POS</span>" restaurant va
              fast-food biznesingizni oson va qulay raqamlashtirishga yordam
              beradi. Bu <span style={{ color: "#e57100" }}>platforma</span>  orqali siz mijozlaringizga qulaylik
              tug'durasiz va kunlik, oylik hisobotlarni osonlikcha olishingiz
              mumkin. <span style={{ color: "#e57100" }}>Hoziroq sinab ko'ring!!!</span> 
            </p>
            <div className="mt-6 text-center md:ml-6">
              <Link href="404">
                <a
                  className="inline-flex items-center px-20 py-3 bg-white mt-2 ml-0 text-sm font-medium transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                >
                  <span className="flex justify-center text-black font-bold">
                    SINAB KO'RISH
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="relative w-full py-10 mx-auto text-center md:py-32 md:my-12 md:w-10/12">
            <div className="relative z-10">
                <img
                  className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
                  src="/images/OPOS.png"
                  alt="Placeholder Image"
                />
            </div>
            <p className="z-10 my-8 text-sm font-medium text-gray-500">
              Maybe we&apos;re bringing brightness too?
            </p>
          </div>
        </div>
        {/* <div
          style={{ backgroundImage: "url(/images/blur.png)" }}
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover -z-1"
        /> */}
      </section>
      <Partners />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
