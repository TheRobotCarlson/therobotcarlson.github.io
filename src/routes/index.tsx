import { createFileRoute } from '@tanstack/react-router';
import { Home } from '../site';
export const Route = createFileRoute('/')({component: Home, head: () => ({meta: [{title: 'Home - Brian Carlson'}]})});
