"use client";
import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    []
  );
  const [name, setName] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (name.trim() === "" || newComment.trim() === "") {
      alert("Please enter both your name and comment!");
      return;
    }

    setComments([...comments, { name, comment: newComment }]);
    setName("");
    setNewComment("");
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl text-slate-500 font-bold mb-4">Your Feed Back is Valueable for us:-</h2>

      {/* Comments List */}
      <ul className="space-y-4">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="bg-gray-100 p-4 rounded shadow-md border border-gray-200"
          >
            <p className="text-lg font-semibold text-gray-800">{comment.name}</p>
            <p className="text-gray-600 mt-1">{comment.comment}</p>
          </li>
        ))}
      </ul>

      {/* Add Comment Form */}
      <div className="mt-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-white font-medium mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="comment"
              className="block text-white font-medium mb-1"
            >
              Your Comment
            </label>
            <textarea
              id="comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={3}
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700"
              placeholder="Write your comment here..."
            />
          </div>
        </div>
        <button
          onClick={handleAddComment}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
