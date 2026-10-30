import { createFileRoute } from '@tanstack/react-router';
import { NotFound } from '../site';
export const Route = createFileRoute('/404')({component: NotFound, head: () => ({meta: [{title: 'Page Not Found - Brian Carlson'}]})});
