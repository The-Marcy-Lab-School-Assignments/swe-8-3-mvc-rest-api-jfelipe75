const fetchData = async (url, options = {}) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

    const data = await res.json();
    return [data, null]; // ✅ Tuple: [data, error]
  } catch (err) {
    return [null, err.message]; // ✅ Tuple again
  }
};

export default fetchData;
