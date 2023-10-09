import { async } from 'regenerator-runtime';
import { TIME_OUT_SEC } from './configs.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} seconds.`));
    }, s * 1000);
  });
};

// API call for getting recipe, search results and uploading recipe
export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIME_OUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

// API call for deleting the recipe
export const deleteJSON = async function (url) {
  try {
    await fetch(url, {
      method: 'DELETE',
    });
  } catch (err) {
    throw err;
  }
};
