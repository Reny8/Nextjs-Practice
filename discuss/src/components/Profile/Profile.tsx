import NotAllowed from "../NotAllowed";
import NewTopic from "../Popups/NewTopic";
import TopicDisplay from "../ListDisplay/TopicDisplay";
import { auth } from "@/auth";
import TopPostDisplay from "../ListDisplay/TopPostDisplay";

export default async function Profile() {
  const session = await auth();
  if (session?.user) {
    return (
      <div className="grid grid-cols-4 gap-4 p-4 h-full">
        <TopPostDisplay />
        <div className="col-span-1 flex flex-col items-stretch gap-4 justify-center">
          <NewTopic />
          <TopicDisplay />
        </div>
      </div>
    );
  } else return <NotAllowed />;
}
