export const fetchData = (endpoint) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    try {
      const response = await fetch(`https://swapi.dev/api/${endpoint}/`); 
      if (!response.ok) {
        throw new Error('Network response was not ok'); 
      }
      const data = await response.json();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
  };
};

export const clearData = () => {
  return { type: 'CLEAR_DATA' };
};