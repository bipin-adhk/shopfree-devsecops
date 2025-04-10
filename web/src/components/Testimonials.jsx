export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-primary text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-black p-6 rounded shadow">
          <p>"Shopfree revamped our website and doubled our traffic in 3 months. Incredible work!"</p>
          <span className="block mt-4 font-semibold">– Sarah K., Retail Business Owner</span>
        </div>
        <div className="bg-black p-6 rounded shadow">
          <p>"The team is highly skilled and always available. Our marketing ROI improved dramatically."</p>
          <span className="block mt-4 font-semibold">– James R., SaaS Startup CEO</span>
        </div>
      </div>
    </section>
  );
}
