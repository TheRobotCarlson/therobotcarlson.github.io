import { createFileRoute } from '@tanstack/react-router';
import { About } from '../site';
export const Route = createFileRoute('/about')({component: About, head: () => ({meta: [{title: 'About us - Brian Carlson'}]})});
