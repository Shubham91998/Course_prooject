import React, { useState, useEffect } from "react";

export default function ExploreResearchPapers() {
  const [papers, setPapers] = useState(() => {
    const saved = localStorage.getItem("papers");
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        title: "A Novel Approach to AI in Healthcare",
        abstract: "This paper explores the use of deep learning for early disease detection...",
        author: "Dr. A. Sharma",
        file: null,
        likes: 2,
        unlikes: 0,
        comments: [
          { user: "Student1", text: "Great work!" },
          { user: "Mentor2", text: "How can this be applied to rural clinics?" },
        ],
        authorImage: "https://i.pravatar.cc/150?img=1",  // You can use random avatars
      },
    ];
  });

  const [form, setForm] = useState({ title: "", abstract: "", author: "", file: null });
  const [comment, setComment] = useState("");
  const [activePaper, setActivePaper] = useState(null);

  // ⬇️ Sync papers to localStorage every time papers state changes
  useEffect(() => {
    localStorage.setItem("papers", JSON.stringify(papers));
  }, [papers]);

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handlePostPaper = (e) => {
    e.preventDefault();
    if (!form.title || !form.abstract || !form.author) return;
    const newPaper = {
      id: Date.now(),
      ...form,
      likes: 0,
      unlikes: 0,
      comments: [],
      authorImage: `https://i.pravatar.cc/150?u=${form.author}`, // Use gravatar-like image
    };
    setPapers([newPaper, ...papers]);
    setForm({ title: "", abstract: "", author: "", file: null });
  };

  const handleLike = (id) => {
    setPapers(papers.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleUnlike = (id) => {
    setPapers(papers.map(p => p.id === id ? { ...p, unlikes: p.unlikes + 1 } : p));
  };

  const handleAddComment = (id) => {
    if (!comment.trim()) return;
    setPapers(papers.map(p =>
      p.id === id ? { ...p, comments: [...p.comments, { user: "You", text: comment }] } : p
    ));
    setComment("");
    setActivePaper(id);
  };

  const handleShare = () => {
    alert("Share functionality coming soon!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-10 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-10">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Post a Research Paper</h2>
        <form className="space-y-4" onSubmit={handlePostPaper}>
          <input name="title" value={form.title} onChange={handleFormChange} required placeholder="Title" className="w-full px-4 py-2 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-300" />
          <textarea name="abstract" value={form.abstract} onChange={handleFormChange} required placeholder="Abstract" className="w-full px-4 py-2 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-300" />
          <input name="author" value={form.author} onChange={handleFormChange} required placeholder="Author" className="w-full px-4 py-2 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-300" />
          <input name="file" type="file" accept=".pdf,.doc,.docx" onChange={handleFormChange} className="w-full" />
          <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-indigo-600 hover:to-blue-600 transition">Post Paper</button>
        </form>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {papers.map((paper) => (
          <div key={paper.id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              {paper.authorImage && <img src={paper.authorImage} alt="Author" className="w-10 h-10 rounded-full" />}
              <div className="text-sm text-gray-700">
                <div className="font-bold">{paper.author}</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-indigo-800 mb-1">{paper.title}</h3>
            <p className="text-gray-700 mb-2">{paper.abstract}</p>
            {paper.file instanceof File && (
              <div className="mb-2">
                <a href={URL.createObjectURL(paper.file)} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Read Full Now</a>
              </div>
            )}

            <div className="flex items-center gap-3 mb-3">
              <button onClick={() => handleLike(paper.id)} className="flex items-center gap-1 text-green-600 hover:text-green-800 font-semibold"><span role="img">👍</span> {paper.likes}</button>
              <button onClick={() => handleUnlike(paper.id)} className="flex items-center gap-1 text-red-500 hover:text-red-700 font-semibold"><span role="img">👎</span> {paper.unlikes}</button>
              <button onClick={handleShare} className="flex items-center gap-1 text-blue-500 hover:text-blue-700 font-semibold"><span role="img">🔗</span> Share</button>
            </div>

            <div className="border-t pt-3 mt-2">
              <div className="font-semibold text-gray-700 mb-2">Comments</div>
              <div className="space-y-2 mb-2 max-h-32 overflow-y-auto">
                {paper.comments.map((c, idx) => (
                  <div key={idx} className="bg-gray-50 rounded px-3 py-1 text-sm"><span className="font-semibold text-indigo-600">{c.user}:</span> {c.text}</div>
                ))}
              </div>
              <form onSubmit={e => { e.preventDefault(); handleAddComment(paper.id); }} className="flex gap-2 mt-2">
                <input value={activePaper === paper.id ? comment : ""} onChange={e => { setActivePaper(paper.id); setComment(e.target.value); }} placeholder="Add a comment..." className="flex-1 px-3 py-1 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-300 text-sm" />
                <button type="submit" className="bg-indigo-500 text-white px-4 py-1 rounded-lg font-semibold hover:bg-indigo-600 text-sm">Post</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
