const fetchData = async (url, options = {}) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

    const data = await res.json();
    return [data, null];
  } catch (err) {
    return [null, err.message];
  }
};

export default fetchData;
