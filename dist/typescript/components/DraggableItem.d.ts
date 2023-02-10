import { MOVEMENT } from '../models';
import React from 'react';
import { ViewStyle } from 'react-native';
declare const _default: React.MemoExoticComponent<({ children, style, itemWidth, itemHeight, sectionWidth, sectionHeight, numColumns, isEditing, shouldVibrate, shouldAnimOnRelease, index, itemLength, isDragging, animDirection, animMoveDuration, lockTouch, unlockTouch, onStartDrag, updateDragToIndex, onEndDrag }: {
    children?: JSX.Element;
    itemWidth: number;
    itemHeight: number;
    sectionWidth: number;
    sectionHeight: number;
    numColumns: number;
    style?: ViewStyle;
    isEditing: boolean;
    shouldVibrate: boolean;
    shouldAnimOnRelease: boolean;
    index: number;
    itemLength: number;
    isDragging: boolean;
    animDirection: MOVEMENT;
    animMoveDuration: number;
    lockTouch: () => void;
    unlockTouch: () => void;
    onStartDrag: (index: number) => void;
    updateDragToIndex: (index: number) => void;
    onEndDrag: (from: number, to: number) => void;
}) => JSX.Element>;
export default _default;
//# sourceMappingURL=DraggableItem.d.ts.map