import {createFileRoute, useParams} from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_dashboard_layout/campaigns/$campaignId',
)({
  component: Campaign,
    loader: ({params, route}) => {
        return {campaign: `Campaign ${params.campaignId}`}
    }
})

function Campaign() {
    const {campaign} = Route.useLoaderData();
    console.log(campaign)
  return (
    <div>
      <h1>{campaign}</h1>
    </div>
  )
}