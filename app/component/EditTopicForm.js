"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handlerSubmit = async (e) => {
    e.prevengDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Faliled");
      }

      router.push("/");
    } catch (error) {}
  };

  return (
    <form onSubmit={handlerSubmit} className="flex flex-col gap-3">
      <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Topic Title" className="border border-slate-500 px-8 py-2" />
      <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Topic Description" className="border border-slate-500 px-8 py-2" />
      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
}
