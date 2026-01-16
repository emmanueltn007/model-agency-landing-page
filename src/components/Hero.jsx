function Hero () {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 py-8 px-16">
      <div className="md:col-start-2 md:rounded-b-full overflow-hidden">
        <img src="/images/1000357600.png" alt="hero image" />
      </div>
      <div className="flex flex-col gap-8 md:justify-center md:row-start-1">
        <h1 className="text-6xl tracking-[0.5rem]">
          More Than Just Photos
        </h1>
        <p className="text-lg md:text-xl">
          This is storytelling through light, shadow, and emotion.
          Every image is crafted to feel real, raw, and timeless.
        </p>
      </div>
    </section>
  );
}

export default Hero