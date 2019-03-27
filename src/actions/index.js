import jsonPlaceholder from '../APIs/jsonPlaceholder';
import _ from 'lodash';

// Whenever we call an action creator inside of an action creator we need to make sure we dispatch the result of calling the action creator
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); // The AWAIT is making sure we do not progress to the next line of code until we have successfully fetched list of post dispatch an action and updated our reducer with all this different fetched post
  
  const userIds = _.uniq(_.map(getState().posts, 'userId')) // the result of this lodash implementation is an array with just the uniqs 'userId'
  userIds.forEach(id => dispatch(fetchUser(id))); // We need to iterate over our list of Ids and for every Id we need to call our fetchUser Action Creator
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
        
  dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

  
export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
      
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

    
    
/* // A Func that returns a Func that calls _fetchUser(id, dispatch) using MEMOIZE --- this is the "simpler" way of fixing the OVERFETCHING problem
export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);   
  const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
            
    dispatch({ type: 'FETCH_USER', payload: response.data });
    });
 */