import { createFileRoute } from '@tanstack/react-router';
import { Detail } from '../site';
import content from '../content.json';
export const Route = createFileRoute('/experiences/$slug')({component: Detail, head: ({params}) => ({meta: [{title: `${content.find(e => e.slug === params.slug)?.title || 'Page Not Found'} - Brian Carlson`}]})});
