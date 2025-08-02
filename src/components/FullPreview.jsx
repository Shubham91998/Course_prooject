import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function FullPaperView() {
  const { id } = useParams();
  const [paper, setPaper] = useState(null);

  useEffect(() => {
    const storedPapers = JSON.parse(localStorage.getItem("papers")) || [];
    const found = storedPapers.find(p => p.id === parseInt(id));
    if (found) setPaper(found);
  }, [id]);

  if (!paper) return <div className="text-center mt-20 text-lg text-gray-600">Paper not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow mt-10">
      <Link to="/" className="text-indigo-600 underline mb-4 block">← Back</Link>
      <h1 className="text-3xl font-bold text-indigo-800 mb-4">{paper.title}</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src={paper.authorImage || "https://via.placeholder.com/50"} className="w-12 h-12 rounded-full" />
        <div>
          <p className="font-semibold">{paper.author}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{paper.abstract}</p>
      {paper.file && (
        <a href={URL.createObjectURL(paper.file)} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mb-4 inline-block">View Attached File</a>
      )}
    </div>
  );
}
