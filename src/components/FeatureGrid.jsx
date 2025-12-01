const Feature = ({ title, children }) => (
  <div className="p-4 bg-white rounded-lg shadow-sm">
    <h4 className="font-semibold">{title}</h4>
    <p className="mt-2 text-sm text-gray-600">{children}</p>
  </div>
);

export default function FeatureGrid() {
  return (
    <section className="container py-12">
      <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <Feature title="Vocational Training"> Hands-on training in tailoring, food processing, digital services & more. </Feature>
        <Feature title="Entrepreneurship Skills"> Branding, pricing, customer engagement & business planning. </Feature>
        <Feature title="Digital Literacy"> Smartphone usage, UPI, online banking & e-commerce setup. </Feature>
        <Feature title="Mentorship"> Guidance from industry experts & successful women entrepreneurs. </Feature>
        <Feature title="Funding Support"> Microloans, Mudra loan support & micro-financing connections. </Feature>
        <Feature title="Marketplace Access"> Dedicated platform to sell products & grow business. </Feature>
      </div>
    </section>
  );
}
