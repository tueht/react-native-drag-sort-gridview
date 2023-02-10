import { Animated } from 'react-native';
declare const _default: ({ itemWidth, itemHeight, sectionWidth, sectionHeight, numColumns, index, itemLength, isEditing, animMoveDuration, shouldAnimOnRelease, lockTouch, unlockTouch, onStartDrag, updateDragToIndex, onEndDrag }: {
    itemWidth: number;
    itemHeight: number;
    sectionWidth: number;
    sectionHeight: number;
    numColumns: number;
    index: number;
    itemLength: number;
    isEditing: boolean;
    animMoveDuration: number;
    shouldAnimOnRelease: boolean;
    lockTouch: () => void;
    unlockTouch: () => void;
    onStartDrag: (index: number) => void;
    updateDragToIndex: (index: number | undefined) => void;
    onEndDrag: (from: number, to: number) => void;
}) => {
    panResponder: {
        panHandlers: {};
    };
    dragXAnim: Animated.Value;
    dragYAnim: Animated.Value;
};
export default _default;
//# sourceMappingURL=usePanResponderViewHooks.d.ts.map