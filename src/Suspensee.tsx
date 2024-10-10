import React, { Suspense, lazy } from 'react';

const LazyButton = lazy(() => import('./LazyButton'));
const Suspensee = () => {
  return (
    <Suspense fallback={'loading'}>
      <LazyButton />
    </Suspense>
  )
}

export default Suspensee
