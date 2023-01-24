// imageloader/loader.js

const myImageLoader = ({ src, width, quality }) => {
  return `https://davestryker.com/${src}?w=${width}&q=${quality || 75}`
}

export default myImageLoader;