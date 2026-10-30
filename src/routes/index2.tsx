import { createFileRoute } from '@tanstack/react-router';
import { Index2 } from '../site';
export const Route = createFileRoute('/index2')({component: Index2, head: () => ({meta: [{title: 'Hello, world! - Brian Carlson'}]})});
