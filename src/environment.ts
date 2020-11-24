export const windowEnv = (window as any).env;

export const isProduction = windowEnv.API_BASE_URL === 'https://api.humanitec.io';
