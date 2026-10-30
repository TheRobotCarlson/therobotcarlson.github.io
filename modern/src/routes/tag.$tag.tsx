import { createFileRoute } from '@tanstack/react-router';
import { Tag } from '../site';
export const Route = createFileRoute('/tag/$tag')({component: Tag, head: ({params}) => ({meta: [{title: `Tag: ${params.tag} - Brian Carlson`}]})});
