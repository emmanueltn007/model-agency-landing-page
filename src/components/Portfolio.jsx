import images from "../utilities/portfolio";

function Portfolio () {
  return (
    <section className="flex flex-col gap-8 py-8 px-16">
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-3xl tracking-[0.5rem]">
          A Thoughtful Creative Process
        </h2>
        <p className="text-lg md:text-xl tracking-[0.25rem]">
          We focus on authenticity - guiding you, not forcing you.
          The goal is to capture who you are, not who you're trying to be.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {images.map((image) => {
          return (
            <div key={image} className="min-h-75">
              <img className="h-full w-full" src={image} alt="grid image" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio