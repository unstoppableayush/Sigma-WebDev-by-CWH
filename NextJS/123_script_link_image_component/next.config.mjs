/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.simplilearn.com',
            port: '',
            
          },
        ],
      },
};

export default nextConfig;
