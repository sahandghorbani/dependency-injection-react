import { AwilixContainer, asFunction } from 'awilix';
import PostsHandler from './handlers/posts';

export const initAppModule = (container: AwilixContainer) => {
  container.register({
    postsService: asFunction(PostsHandler),
    // brandService: asFunction(BrandHandler),
  });
};
