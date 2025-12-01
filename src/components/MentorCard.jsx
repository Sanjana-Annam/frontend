export default function MentorCard({ m }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h4 className="font-semibold">{m.name}</h4>
      <p className="text-xs text-gray-500">{m.expertise}</p>
      <p className="mt-2 text-sm text-gray-600">{m.bio}</p>
    </div>
  );
}
