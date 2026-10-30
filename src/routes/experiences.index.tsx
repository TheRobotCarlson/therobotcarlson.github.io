import { createFileRoute } from '@tanstack/react-router';
import { Work } from '../site';
export const Route = createFileRoute('/experiences/')({component: Work, head: () => ({meta: [{title: 'Brian Carlson - Brian Carlson'}]})});
