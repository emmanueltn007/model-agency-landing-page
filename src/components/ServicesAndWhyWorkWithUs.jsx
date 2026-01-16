import services from "../utilities/services.js";

function ServicesAndWhyWorkWithUs () {
  return (
    <section className="bg-gray-900 grid md:grid-cols-2 gap-8 py-8 px-16">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl tracking-[0.5rem]">
          Services Offfered
        </h2>
        <div className="flex flex-col gap-4">
          {services.map((service) => {
            return (
              <div key={service} className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold tracking-[0.15rem]">{service.title}</h3>
                <p className="text-gray-400 tracking-[0.15rem]">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl tracking-[0.5rem]">
          Why Work With Us
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-gray-400 tracking-[0.15rem]">
            Every project is treated as a collaboration, not a transaction. We value creative freedom, attention to detail, and visuals that feel honest and powerful.
          </p>
          <br />
          <p className="text-gray-400 tracking-[0.15rem]">
            Your story matters. We just help you show it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesAndWhyWorkWithUs