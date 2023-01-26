import { Badges } from "./Badges";
import { Goal } from "./Goal";
import { Name } from "./Name";

export function Profile({ user }) {
  return (
    <div>
      <Name name={user.name} />
      <Goal goal={user.goal} />
      <Badges badges={user.badges} />
      
    </div>
  );
}
