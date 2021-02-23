import React from 'react';
import {createStore} from 'redux';
import {reducer} from '../reducers';

//initial store
const initialStore={
    count:0
}

const store = createStore(reducer,store=initialStore);