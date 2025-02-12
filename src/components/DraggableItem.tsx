import { MOVEMENT } from '../models'
import React, { memo } from 'react'
import { Animated, ViewStyle } from 'react-native'
import Reanimated from 'react-native-reanimated'
import styles from './styles'
import useDraggableItemHooks from './useDraggableItemHooks'
import usePanResponderViewHooks from './usePanResponderViewHooks'
import useReanimHooks from './useReanimHooks'

const DraggableItem = ({
  children,
  style,
  itemWidth,
  itemHeight,
  sectionWidth,
  sectionHeight,
  numColumns,
  isEditing,
  shouldVibrate,
  shouldAnimOnRelease,
  index,
  itemLength,
  isDragging,
  animDirection,
  animMoveDuration,
  lockTouch,
  unlockTouch,
  onStartDrag,
  updateDragToIndex,
  onEndDrag
}: {
  children?: JSX.Element
  itemWidth: number
  itemHeight: number
  sectionWidth: number
  sectionHeight: number
  numColumns: number
  style?: ViewStyle
  isEditing: boolean
  shouldVibrate: boolean
  shouldAnimOnRelease: boolean
  index: number
  itemLength: number
  isDragging: boolean
  animDirection: MOVEMENT
  animMoveDuration: number
  lockTouch: () => void
  unlockTouch: () => void
  onStartDrag: (index: number) => void
  updateDragToIndex: (index: number | undefined) => void
  onEndDrag: (from: number, to: number) => void
}) => {
  const { isDraggingItem } = useDraggableItemHooks({
    animDirection
  })

  const { animatedStyles } = useReanimHooks({
    itemWidth,
    itemHeight,
    numColumns,
    isEditing,
    shouldVibrate,
    isDragging,
    isDraggingItem,
    index,
    animDirection,
    animMoveDuration
  })

  const { panResponder, dragXAnim, dragYAnim } = usePanResponderViewHooks({
    itemWidth,
    itemHeight,
    sectionWidth,
    sectionHeight,
    numColumns,
    index,
    itemLength,
    isEditing,
    animMoveDuration,
    shouldAnimOnRelease,
    lockTouch,
    unlockTouch,
    onStartDrag,
    updateDragToIndex,
    onEndDrag
  })

  return (
    <Animated.View
      style={[
        style,
        styles.wrapper,
        {
          width: itemWidth,
          height: itemHeight
        },
        {
          transform: [
            {
              translateX: dragXAnim
            },
            {
              translateY: dragYAnim
            }
          ]
        },
        isDraggingItem && styles.dragging
      ]}>
      <Reanimated.View
        {...panResponder.panHandlers}
        style={[styles.reanimatedWrapper, animatedStyles]}>
        {children}
      </Reanimated.View>
    </Animated.View>
  )
}

export default memo(DraggableItem)
