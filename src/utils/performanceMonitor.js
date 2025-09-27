// Performance monitoring utilities
export const measurePerformance = (name, fn) => {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
};

// Web Vitals monitoring
export const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

// Bundle size analyzer
export const analyzeBundleSize = () => {
    if (process.env.NODE_ENV === 'development') {
        console.log('Bundle analysis available in development mode');
        console.log('Run "npm run build" to see bundle size analysis');
    }
};

// Memory usage monitor
export const monitorMemoryUsage = () => {
    if (performance.memory) {
        const memory = performance.memory;
        console.log('Memory Usage:', {
            used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
            total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        });
    }
};
