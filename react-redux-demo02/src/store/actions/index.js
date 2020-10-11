import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import * as actionType from './actionType'

export const useBarChartData = (url) => {
  const dispatch = useDispatch()
  return useCallback(
    async () => {
      const result = await fetch(url)
      const resJSON = await result.json()
      dispatch({
        payload: {
          barChartData: resJSON
        },
        type: actionType.BAR_CHART_DATA
      })
    }, [dispatch, url],
  )
}