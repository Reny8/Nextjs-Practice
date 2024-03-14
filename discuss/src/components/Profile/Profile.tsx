import NotAllowed from "../NotAllowed";
import NewTopic from "../Popups/NewTopic";
import TopicDisplay from "../ListDisplay/TopicDisplay";
import { auth } from "@/auth";

export default async function Profile() {
  const session = await auth();
  if (session?.user) {
    return (
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-3">
          <h1 className="text-xl m-2">Placeholder</h1>
        </div>
        <div className="col-span-1 flex flex-col items-stretch gap-4">
          <NewTopic />
          <TopicDisplay />
        </div>
      </div>
    );
  } else return <NotAllowed />;
}
