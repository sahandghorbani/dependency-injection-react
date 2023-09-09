import { useFetchPostsQuery } from '@/infrastructure/store/api/auth';

export interface PostsHandlerImpl {
  getPosts: () => typeof useFetchPostsQuery;
}
