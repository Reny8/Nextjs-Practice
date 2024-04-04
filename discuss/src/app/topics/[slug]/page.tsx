import { findTopic } from "@/actions/functions";
import TopPostDisplay from "@/components/ListDisplay/TopPostDisplay";
import NewPost from "@/components/Popups/NewPost";

export default async function TopicShowPage({
  params,
}: {
  params: { slug: string };
}) {
  const currentTopic = await findTopic(decodeURI(params.slug));
  return (
    <div className="page">
      <div className="grid grid-cols-4 gap-4 p-4 h-full">
        <TopPostDisplay title={currentTopic?.slug || 'Posts'} topicId={currentTopic?.id}/>
        <div className="col-span-1 flex flex-col items-stretch gap-4">
          <NewPost topicId={currentTopic?.id ? currentTopic.id : ""}/>
          <div className="card">
            <h1 className="flex items-center justify-center mb-1">Description</h1>
            <p className="m-2">{currentTopic?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
