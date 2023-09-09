import container from '@/infrastructure/awilix';

const PostsHandler = () => {
  const getPosts = () => {
    return container.resolve('posts'); //  posts: asValue(useFetchPostsQuery),
  };

  return { getPosts };
};

export default PostsHandler;
