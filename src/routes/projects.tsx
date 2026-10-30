import { createFileRoute } from '@tanstack/react-router';
import { Projects } from '../site';
export const Route = createFileRoute('/projects')({component: Projects, head: () => ({meta: [{title: 'Projects - Brian Carlson'}]})});
