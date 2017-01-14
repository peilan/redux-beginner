import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS
} from '../constants/Page'

import {ajax} from 'jquery'

export function getPhotos(year) {

  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    })
  
    ajax({
      type: 'get',
      url: 'users'
    }).then((data) => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: data
      })
    }, (error) => {
      console.error(error)
    })
  }
}