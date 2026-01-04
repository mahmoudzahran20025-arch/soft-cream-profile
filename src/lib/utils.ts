const isProd = process.env.NODE_ENV === 'production';
const basePath = '/soft-cream-profile';

export const getAssetPath = (path: string) => {
    if (!isProd) return path;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${cleanPath}`;
};
