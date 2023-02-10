/// <reference types="react-native-reanimated" />
import { MOVEMENT } from '../models';
declare const _default: ({ itemWidth, itemHeight, numColumns, isEditing, shouldVibrate, isDragging, isDraggingItem, index, animDirection, animMoveDuration }: {
    itemWidth: number;
    itemHeight: number;
    numColumns: number;
    isEditing: boolean;
    shouldVibrate: boolean;
    isDragging: boolean;
    isDraggingItem: boolean;
    index: number;
    animDirection: MOVEMENT;
    animMoveDuration: number;
}) => {
    movementOffset: import("react-native-reanimated").SharedValue<{
        x: number;
        y: number;
    }>;
    animatedStyles: {
        transform: ({
            translateX: number;
            translateY?: undefined;
            rotateZ?: undefined;
        } | {
            translateY: number;
            translateX?: undefined;
            rotateZ?: undefined;
        } | {
            rotateZ: string;
            translateX?: undefined;
            translateY?: undefined;
        })[];
    };
};
export default _default;
//# sourceMappingURL=useReanimHooks.d.ts.map