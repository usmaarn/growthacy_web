import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_dashboard_layout/dashboard/')({
  component: () => <div>Hello /_dashboard/!</div>,
})
