function CTA () {
  return (
    <section className="py-8 px-16 flex flex-col gap-8 md:items-center">
      <h2 className="text-3xl tracking-[0.5rem]">Let's Create</h2>
      <p className="text-lg md:text-xl tracking-[0.25rem]">
        Have a vision? Let's bring it to life.
      </p>
      <button className="text-lg md:text-xl tracking-[0.25rem] border border-white px-6 py-2 cursor-pointer md:self-start hover:bg-white hover:text-black transition-all duration-300 ease-in-out md:ml-auto md:mr-auto">
        Start a Project
      </button>
    </section>
  );
}

export default CTA