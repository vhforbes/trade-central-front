import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const CommunitiesRoute = createFileRoute("/(app)/communities/")({
  component: Communities,
});

function Communities() {
  const { data: communinities } = useQuery({
    queryKey: ["getCommunities"],
    queryFn: getCommunities,
  });

  async function getCommunities() {
    const communitiesResp = ["communities"];
    return communitiesResp;
  }

  console.log(communinities);

  return (
    <>
      <div>Communities List Here</div>
    </>
  );
}
