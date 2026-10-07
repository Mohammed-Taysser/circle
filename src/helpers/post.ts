function getPostAsset(post: Post, type: PostAssets['type']) {
  return post.assets.find((asset) => asset.type === type);
}

function getPostAssetUrls(post: Post, type: PostAssets['type']) {
  return post.assets.reduce((urls, asset) => {
    if (asset.type === type && asset.url) {
      return [...urls, asset.url];
    }
    return urls;
  }, [] as string[]);
}

export { getPostAsset, getPostAssetUrls };
