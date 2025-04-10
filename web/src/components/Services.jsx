export default function Services() {
  return (
    <section id="services" className="bg-primary text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-black rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p>Custom websites built with performance, scalability, and responsiveness in mind.</p>
        </div>
        <div className="p-6 bg-black rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-2">SEO & Analytics</h3>
          <p>Boost your visibility with advanced SEO and performance tracking tools.</p>
        </div>
        <div className="p-6 bg-black rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
          <p>Grow your brand with targeted campaigns across all major platforms.</p>
        </div>
      </div>
    </section>
  );
}
