export default function Sponsors() {
  return (
    <section className="pb-10" id="sponsors">
      <div className="px-4 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-5xl">
          Ular O<span style={{ color: "#e57100" }}>POS</span> ni tanlashdi!{" "}
        </h1>
        <p className="max-w-md mx-auto mb-12 text-lg text-gray-600 dark:text-gray-400 text-left md:text-center md:text-lg">
          Hozircha ushbu platforma demo versiyada ishlamoqda!
        </p>
        <div className="flex justify-center gap-10 ">
          <div style={{ width: "150px", height: "150px" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/otagozal_icecream/">
              <img src="/images/otagozal.jpg" style={{ borderRadius: "50%" }} />
            </a>
          </div>
          <div style={{ width: "150px", height: "150px" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/otagozal_icecream/">
              <img src="/images/icode.jpg" style={{ borderRadius: "50%" }} />
            </a>
          </div>
        </div>
      </div>
      <p className="z-10 my-8 text-sm text-center font-medium text-gray-500">
        SIZCHI 🫵🏻?
      </p>
    </section>
  );
}
