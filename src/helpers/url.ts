function youtubeUrlParser(url: string) {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : '';
}

function vimeoUrlParser(url: string) {
  const regExp =
    /^(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*(\d{6,11})[?]?.*/;
  const match = url.match(regExp);

  return match && match[5] ? match[5] : '';
}

export { youtubeUrlParser, vimeoUrlParser };
