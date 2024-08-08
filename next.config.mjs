/** @type {import('next').NextConfig} */
const config = {
  images: { remotePatterns: [{ hostname: 'cdn.sanity.io' }] },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
}

export default config
