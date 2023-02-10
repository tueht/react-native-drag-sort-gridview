import React from 'react';
import { ScrollViewProps, ViewStyle } from 'react-native';
declare const DraggableGridView: <T>(props: ScrollViewProps & {
    data: T[];
    listWidth?: number;
    itemHeight?: number;
    isEditing: boolean;
    shouldVibrate?: boolean;
    shouldAnimOnRelease?: boolean;
    itemContainerStyle?: ViewStyle;
    animMoveDuration?: number;
    numColumns: number;
    debounce?: number | undefined;
    renderItem: ({ item, index }: {
        item: T;
        index: number;
    }) => React.ReactElement | null;
    keyExtractor: (item: T) => string;
    onOrderChanged: (orderedData: T[], from: number, to: number) => void;
    gridHeader?: () => React.ReactElement | null;
    gridFooter?: () => React.ReactElement | null;
}) => JSX.Element;
export default DraggableGridView;
//# sourceMappingURL=DraggableGridView.d.ts.map