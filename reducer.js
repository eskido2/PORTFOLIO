import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};
// action
// plain js obj with a type field that specifies how to
// change something in the state

/**
 * 
    Pure functions:     A function which is called Reducer in Redux,
                     that take the current state and action and return a 
                     new state
                        - Update data immutably ( do not modify inputs ) 
 */

export const Reducer = (state = initialState, action) => {
    return state;
};