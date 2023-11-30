import FormEdit from "@/app/components/FormEdit";

const getTopicById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function editData({ params }: any) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { no, desc } = topic;
  return <FormEdit id={id} no={no} desc={desc} />;
}
