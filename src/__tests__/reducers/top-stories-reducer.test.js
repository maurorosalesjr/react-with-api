import * as c from './../../actions/ActionTypes';
import topStoriesReducer from '../../reducers/top-stories-reducer';

describe('topStoriesReducer', () => {

  let action;

  const initialState = {
    isLoaded: false,
    topStories: [],
    error: null
  };

  test('successfully getting top stories should change isLoaded to true and update topStories', () => {
    const topStories = "An article";
    action = {
      type: c.GET_TOP_STORIES_SUCCESS,
      topStories
    };

    expect(topStoriesReducer(initialState, action)).toEqual({
        isLoaded: true,
        topStories: "An article",
        error: null
    });
  });

  test('failing to get topStories should change isLoaded to true and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_TOP_STORIES_FAILURE,
      error
    };

    expect(topStoriesReducer(initialState, action)).toEqual({
        isLoaded: true,
        topStories: [],
        error: "An error"
    });
  });

});