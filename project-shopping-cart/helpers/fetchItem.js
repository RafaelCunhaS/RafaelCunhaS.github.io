const fetchItem = async (id) => {
  try {
    return await (await fetch(`https://api.mercadolibre.com/items/${id}`)).json();
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
