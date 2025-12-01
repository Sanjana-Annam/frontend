export default function Testimonial({ t }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <p className="text-sm italic">"{t.text}"</p>
      <p className="mt-3 font-semibold text-sm">— {t.name}</p>
    </div>
  );
}
