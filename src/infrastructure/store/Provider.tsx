'use client';

import { Provider } from 'react-redux';
import store from './module.config';

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
