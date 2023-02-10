import { MOVEMENT } from './models';
declare const _default: <T>({ data, debounce, listWidth, propsItemHeight, numColumns, onOrderChanged }: {
    data: T[];
    debounce?: number | undefined;
    listWidth: number | undefined;
    propsItemHeight?: number | undefined;
    numColumns: number | undefined;
    onOrderChanged: (orderedData: T[], from: number, to: number) => void;
}) => {
    isLock: boolean;
    isDragging: boolean;
    count: number;
    animDirectionArray: MOVEMENT[];
    isEnableScroll: boolean;
    itemWidth: number;
    itemHeight: number;
    sectionWidth: number;
    sectionHeight: number;
    lockTouch: () => void;
    unlockTouch: () => void;
    onStartDrag: (index: number) => void;
    updateDragToIndex: (index: number | undefined) => void;
    onEndDrag: (from: number, to: number) => void;
};
export default _default;
//# sourceMappingURL=useDraggableGridViewHooks.d.ts.map