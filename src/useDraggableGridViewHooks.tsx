import { useCallback, useMemo, useRef, useState } from 'react'
import update from 'react-addons-update'
import { Dimensions } from 'react-native'
import { MOVEMENT } from './models'

export default <T,>({
  data,
  debounce,
  listWidth,
  propsItemHeight,
  numColumns,
  onOrderChanged
}: {
  data: Array<T>
  debounce?: number | undefined
  listWidth: number | undefined
  propsItemHeight?: number | undefined
  numColumns: number | undefined
  onOrderChanged: (orderedData: Array<T>, from: number, to: number) => void
}) => {
  const [isLock, setIsLock] = useState<boolean>(false)
  const [isEnableScroll, setIsEnableScroll] = useState<boolean>(true)
  const [dragIndex, setDragIndex] = useState<number | undefined>(undefined)
  const [dragToIndex, setDragToIndex] = useState<number | undefined>(undefined)
  const count = useMemo<number>(() => data.length, [data])
  const isDragging = useMemo<boolean>(() => dragIndex !== undefined, [dragIndex])
  const animDirectionArray = useMemo<Array<MOVEMENT>>(() => {
    return new Array(count).fill(0).map((_, index: number) => {
      if (dragIndex === undefined || dragToIndex === undefined) {
        return MOVEMENT.restore
      }
      if (dragIndex === index) {
        return MOVEMENT.dragging
      }
      if (dragToIndex < dragIndex) {
        // drag to prev
        if (index > dragIndex) {
          return MOVEMENT.restore
        }
        if (index >= dragToIndex) {
          return MOVEMENT.next
        }
      } else if (dragToIndex > dragIndex) {
        // drag to next
        if (index < dragIndex) {
          return MOVEMENT.restore
        }
        if (index <= dragToIndex) {
          return MOVEMENT.prev
        }
      }
      return MOVEMENT.restore
    })
  }, [count, dragIndex, dragToIndex])

  const timerRef = useRef<number | undefined>()

  const itemWidth = useMemo(
    () => (listWidth || Dimensions.get('screen').width) / (numColumns || 1),
    [listWidth, numColumns]
  )
  const itemHeight = useMemo(() => propsItemHeight || itemWidth, [propsItemHeight, itemWidth])
  const sectionWidth = useMemo(() => itemWidth / 2, [itemWidth])
  const sectionHeight = useMemo(() => itemHeight / 2, [itemHeight])

  const lockTouch = useCallback(() => setIsLock(true), [])

  const unlockTouch = useCallback(() => setIsLock(false), [])

  const onStartDrag = useCallback((index: number) => {
    setIsEnableScroll(false)
    setDragIndex(index)
  }, [])

  const updateDragToIndex = useCallback(
    (index: number | undefined) => {
      if (debounce === undefined) {
        setDragToIndex(index)
        return
      }
      if (timerRef.current !== undefined) {
        clearTimeout(timerRef.current)
      }
      timerRef.current = setTimeout(() => {
        setDragToIndex(index)
      }, debounce)
    },
    [debounce]
  )

  const onEndDrag = useCallback(
    (from: number, to: number) => {
      setIsEnableScroll(true)
      setDragIndex(undefined)
      setDragToIndex(undefined)
      if (from === to) {
        return
      }
      const temp = data[from]
      const orderedData = update(data, {
        $splice: [
          [from, 1],
          [to, 0, temp]
        ]
      })
      onOrderChanged(orderedData, from, to)
    },
    [data, onOrderChanged]
  )

  return {
    isLock,
    isDragging,
    count,
    animDirectionArray,
    isEnableScroll,
    itemWidth,
    itemHeight,
    sectionWidth,
    sectionHeight,
    lockTouch,
    unlockTouch,
    onStartDrag,
    updateDragToIndex,
    onEndDrag
  }
}
