import { asValue, AwilixContainer } from 'awilix';
import store, { useAppDispatch, useAppSelector } from './store/module.config';
import { useFetchPostsQuery } from './store/api/auth';

export const initInfraModule = (container: AwilixContainer) => {
  container.register({
    reduxStore: asValue(store),
    reduxDispatch: asValue(useAppDispatch),
    reduxSelector: asValue(useAppSelector),
    posts: asValue(useFetchPostsQuery),
  });
};
