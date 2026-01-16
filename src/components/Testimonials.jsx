import clients from "../utilities/testimonials";

function Testimonials () {
  return (
    <section className="flex flex-col gap-8 py-8 px-16">
      <h2 className="text-3xl tracking-[0.5rem] md:text-center">
        What Our Clients Say About Us
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {clients.map(({ client, avatar, testimonial }) => {
          return (
            <div key={client} className="flex flex-col gap-4 p-4 bg-gray-900">
              <div className="flex items-center gap-4">
                <div className="rounded-full overflow-hidden h-16 w-16">
                  <img src={avatar} alt="avatar image" />
                </div>
                <div>
                  <span className="font-semibold tracking-[0.25rem]">{client}</span>
                </div>
              </div>
              <p className="tracking-[0.25rem]">"{testimonial}"</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials