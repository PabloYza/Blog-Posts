import jsonPlaceholder from '../APIs/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
        
  dispatch({ type: 'FETCH_POSTS', payload: response.data })
  };

//                  the ID of the user we want to fetch
export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
        
  dispatch({ type: 'FETCH_USER', payload: response.data });
  };
