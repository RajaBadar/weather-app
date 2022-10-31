import { API_KEY } from "../local/Constants";

const WEB_HANDLERS = (url, success, error) => {
  url = url + `&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((rawData) => {
      return success(rawData);
    })
    .catch((err) => {
      return error(err);
    });
};

export { WEB_HANDLERS };
