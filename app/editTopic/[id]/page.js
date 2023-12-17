import EditTopicForm from "@/app/component/EditTopicForm";

const getTopicbyId = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed");
    }

    return res.json();
  } catch (error) {
    console.error();
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const topic = await getTopicbyId(id);
  const { title, description } = topic;
  console.log(id);
  return <EditTopicForm id={id} title={title} description={description} />;
}
