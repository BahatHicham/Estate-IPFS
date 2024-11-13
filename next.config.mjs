/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    images: {
        domains: ['rose-total-dinosaur-689.mypinata.cloud'],
        unoptimized: true, // Needed for GitHub Pages compatibility with Next.js images
      },
      // sassOptions: {
      //   includePaths: [path.join(__dirname, 'styles')],
      // },
};

export default nextConfig;
