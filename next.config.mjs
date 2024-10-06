/** @type {import('next').NextConfig} */
const nextConfig = {
    // ↓ next build を実行する際に Static Export を利用します。
    // output: 'export',
    images: {
        domains: ['placehold.jp'], // 許可する外部ドメイン
    },

}


export default nextConfig;
