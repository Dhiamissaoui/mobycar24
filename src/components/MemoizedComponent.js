import React, { memo } from 'react';

// Higher-order component for memoization
const withMemo = (Component, areEqual) => {
    return memo(Component, areEqual);
};

// Custom hook for component optimization
export const useOptimizedRender = (dependencies) => {
    return React.useMemo(() => dependencies, dependencies);
};

// Memoized wrapper for expensive components
export const MemoizedWrapper = ({ children, dependencies = [] }) => {
    return React.useMemo(() => children, dependencies);
};

export default withMemo;
