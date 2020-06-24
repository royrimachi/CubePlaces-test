const callFetch = async (endpoint, options = {}) => {
  const opts = options;
  opts.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const fetchResponse = await fetch(endpoint, opts)
    .then((res) => res.json())
    .then((response) => response)
    .catch((error) => error);

  return fetchResponse;
};

const Fetch = {
  Product: {
    ReadAll(signal) {
      return callFetch('/api/product', { method: 'GET', signal });
    },
    ReadById(id, signal) {
      return callFetch(`/api/product/${id}`, { method: 'GET', signal });
    },
  },
};

export default Fetch;
