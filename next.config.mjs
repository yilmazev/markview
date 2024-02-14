/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },
                    {
                        key: "Set-Cookie",
                        value: "name=value; SameSite=None; Secure",
                    },
                    {
                        key: "Content-Security-Policy",
                        value: "default-src 'self' https:; img-src 'self' data: https:; media-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline'; connect-src 'self' https:; frame-src 'self'; frame-ancestors 'none';"
                    },                                       
                    {
                        key: "Permissions-Policy",
                        value: ""
                    },
                    {
                        key: "Permissions-Policy",
                        value: "browsing-topics=()",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "X-Powered-By",
                        value: "makromusic"
                    },
                ],
            },
            {
                source: "/_next/static/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable"
                    }
                ]
            }
        ]
    }
};

export default nextConfig;