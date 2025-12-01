export default function ProgramCard({ p }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm cursor-pointer hover:shadow-md transition">
      <h4 className="text-lg font-semibold">{p.title}</h4>
      <p className="text-sm text-gray-600 mt-2">{p.summary}</p>
      <div className="mt-4 text-sm font-medium text-primary">{p.duration}</div>
    </div>
  );
}
