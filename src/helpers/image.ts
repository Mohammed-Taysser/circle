import { SERVER_URL } from '../core/config';

function getImageURL(image: string) {
  return SERVER_URL + image;
}

export { getImageURL };
