function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { ScrollView, View } from 'react-native';
import DraggableItem from './components/DraggableItem';
import styles from './styles';
import useDraggableGridViewHooks from './useDraggableGridViewHooks';
const DraggableGridView = props => {
  const {
    style,
    contentContainerStyle,
    data,
    isEditing,
    shouldVibrate = true,
    shouldAnimOnRelease = false,
    itemContainerStyle,
    listWidth,
    itemHeight: propsItemHeight,
    numColumns,
    animMoveDuration,
    debounce,
    keyExtractor,
    onOrderChanged,
    gridHeader,
    gridFooter
  } = props;
  const {
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
  } = useDraggableGridViewHooks({
    data,
    listWidth,
    propsItemHeight,
    numColumns,
    debounce,
    onOrderChanged
  });
  const renderItem = _ref => {
    let {
      item,
      index
    } = _ref;
    return /*#__PURE__*/React.createElement(DraggableItem, {
      key: keyExtractor(item),
      style: itemContainerStyle,
      itemWidth: itemWidth,
      itemHeight: itemHeight,
      sectionWidth: sectionWidth,
      sectionHeight: sectionHeight,
      numColumns: numColumns || 1,
      itemLength: count,
      isDragging: isDragging,
      animDirection: animDirectionArray[index],
      index: index,
      isEditing: isEditing,
      shouldVibrate: shouldVibrate,
      shouldAnimOnRelease: shouldAnimOnRelease,
      animMoveDuration: animMoveDuration || 1000,
      lockTouch: lockTouch,
      unlockTouch: unlockTouch,
      onStartDrag: onStartDrag,
      updateDragToIndex: updateDragToIndex,
      onEndDrag: onEndDrag
    }, /*#__PURE__*/React.createElement(React.Fragment, null, props.renderItem({
      item,
      index
    })));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScrollView, _extends({}, props, {
    style: [styles.list, style],
    contentContainerStyle: [contentContainerStyle, styles.content],
    scrollEnabled: isEnableScroll
  }), gridHeader === null || gridHeader === void 0 ? void 0 : gridHeader(), data.map((item, index) => renderItem({
    item,
    index
  })), gridFooter === null || gridFooter === void 0 ? void 0 : gridFooter()), isLock === true && /*#__PURE__*/React.createElement(View, {
    style: styles.uiBlock
  }));
};
export default DraggableGridView;
//# sourceMappingURL=DraggableGridView.js.map