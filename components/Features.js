export default function Features() {
  return (
    <section id="features" className="py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-6xl">
          O<span style={{ color: "#e57100" }}>POS</span> bilan siz!
        </h1>
        <p className="max-w-md mx-auto text-center mb-10 text-lg text-gray-600 dark:text-gray-400 md:text-lg">
          Bu hammasi boshlanishi! Tez orada OPOS sizga har bir sohada yordam
          beradi va yanada ishingizga qulaylik olib keladi InshaAllah!
        </p>
        <div className="mt-16 mx-16">
          <div className="mb-10 mt-14 flex justify-around gap-10">
            <div className="w-full">
              <img
                className="transition duration-700 rounded shadow-2xl w-[80%] hover:shadow-3xl md:hover:transform md:hover:scale-105"
                src="/images/1.svg"
                alt="Placeholder for Next.js"
              />
            </div>
            <div className="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
              <h2 className="text-4xl font-bold">
                Istalgan <span style={{ color: "#e57100" }}>joyda</span> va{" "}
                <span style={{ color: "#e57100" }}>vaqtda</span> sozlashingiz
                mumkin
              </h2>
              <p className="paragraph text-gray-500 dark:text-gray-400">
                Platformada siz o'zingiz hohlagan va sizga qulay bo'lgan usulda sozlab olishingiz va yangi chiqgan maxsulotlaringizni savdoga osongina qo'shasiz!
              </p>
            </div>
          </div>
          <div className="mb-10 mt-14 flex justify-around gap-10">
            <div className="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
              <h2 className="text-4xl font-bold">
                Biznesingiz <span style={{ color: "#e57100" }}>statistikasini</span> osongina bilishingiz mumkin
              </h2>
              <p className="paragraph text-gray-500 dark:text-gray-400">
                Restaurantingiz haqida hisobotlarni olish imkoniyati - soatlik, kunlik, oylik, yillik hisobotlarni ko'rishingiz mumkin!
              </p>
            </div>
            <div className="w-full">
              <img
                className="transition duration-700 rounded shadow-2xl w-[80%] hover:shadow-3xl md:hover:transform md:hover:scale-105"
                src="/images/2.svg"
                alt="Placeholder for Next.js"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
