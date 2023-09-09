// YourComponent.js

'use client';
import container from '@/infrastructure/awilix';
import { PostsHandlerImpl } from './application/interfaces/IPosts';

function YourComponent() {
  const useLoginMutation = container.resolve<PostsHandlerImpl>('postsService').getPosts();
  const { data, isLoading } = useLoginMutation({});

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {data.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default YourComponent;
