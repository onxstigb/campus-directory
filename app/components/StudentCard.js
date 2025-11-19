export default function StudentCard({ name, major, year }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">Major: {major}</p>
      <p className="text-gray-500 text-sm">Year: {year}</p>
    </div>
  );
}