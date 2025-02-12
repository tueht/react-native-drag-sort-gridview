"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=require("react");var _reactNative=require("react-native");var _default=function _default(_ref){var itemWidth=_ref.itemWidth,itemHeight=_ref.itemHeight,sectionWidth=_ref.sectionWidth,sectionHeight=_ref.sectionHeight,numColumns=_ref.numColumns,index=_ref.index,itemLength=_ref.itemLength,isEditing=_ref.isEditing,animMoveDuration=_ref.animMoveDuration,shouldAnimOnRelease=_ref.shouldAnimOnRelease,lockTouch=_ref.lockTouch,unlockTouch=_ref.unlockTouch,onStartDrag=_ref.onStartDrag,updateDragToIndex=_ref.updateDragToIndex,onEndDrag=_ref.onEndDrag;var duration=(0,_react.useMemo)(function(){return animMoveDuration/3;},[animMoveDuration]);var row=(0,_react.useMemo)(function(){return index%numColumns;},[index,numColumns]);var column=(0,_react.useMemo)(function(){return Math.floor(index/numColumns);},[index,numColumns]);var normaliseXOffset=(0,_react.useMemo)(function(){return itemWidth*row+sectionWidth;},[itemWidth,sectionWidth,row]);var normaliseYOffset=(0,_react.useMemo)(function(){return itemHeight*column+sectionHeight;},[itemHeight,sectionHeight,column]);var dummyPanResponder=(0,_react.useMemo)(function(){return{panHandlers:{}};},[]);var dragXAnimRef=(0,_react.useRef)(new _reactNative.Animated.Value(0));var dragYAnimRef=(0,_react.useRef)(new _reactNative.Animated.Value(0));var toIndexRef=(0,_react.useRef)(index);var onPressRelease=(0,_react.useCallback)(function(toIndex){onEndDrag(index,Math.max(0,toIndex));dragXAnimRef.current.setValue(0);dragYAnimRef.current.setValue(0);},[index,onEndDrag]);var panResponder=(0,_react.useMemo)(function(){return _reactNative.PanResponder.create({onStartShouldSetPanResponder:function onStartShouldSetPanResponder(_evt,_gestureState){return true;},onStartShouldSetPanResponderCapture:function onStartShouldSetPanResponderCapture(_evt,_gestureState){return true;},onMoveShouldSetPanResponder:function onMoveShouldSetPanResponder(_evt,_gestureState){return true;},onMoveShouldSetPanResponderCapture:function onMoveShouldSetPanResponderCapture(_evt,_gestureState){return true;},onPanResponderStart:function onPanResponderStart(_evt,_gestureState){onStartDrag(index);},onPanResponderMove:function onPanResponderMove(_evt,gestureState){var dx=gestureState.dx,dy=gestureState.dy;var sectionX=Math.floor((normaliseXOffset+dx)/sectionWidth/2);var sectionY=Math.floor((normaliseYOffset+dy)/sectionHeight/2);var newToIndex=sectionY*numColumns+sectionX;if(newToIndex!==toIndexRef.current){toIndexRef.current=newToIndex;updateDragToIndex(newToIndex);}dragXAnimRef.current.setValue(dx);dragYAnimRef.current.setValue(dy);},onPanResponderTerminationRequest:function onPanResponderTerminationRequest(_evt,_gestureState){return false;},onPanResponderRelease:function onPanResponderRelease(_evt,_gestureState){var toIndex=Math.min(Math.max(0,toIndexRef.current),itemLength-1);if(shouldAnimOnRelease===false){onPressRelease(toIndex);return;}lockTouch();_reactNative.Animated.parallel([_reactNative.Animated.timing(dragXAnimRef.current,{toValue:(toIndex%3-index%3)*itemWidth,duration:duration,useNativeDriver:true}),_reactNative.Animated.timing(dragYAnimRef.current,{toValue:(Math.floor(toIndex/3)-Math.floor(index/3))*itemHeight,duration:duration,useNativeDriver:true})]).start(function(){onPressRelease(toIndex);unlockTouch();});},onPanResponderTerminate:function onPanResponderTerminate(_evt,_gestureState){},onShouldBlockNativeResponder:function onShouldBlockNativeResponder(_evt,_gestureState){return true;}});},[index,normaliseXOffset,normaliseYOffset,sectionWidth,sectionHeight,numColumns,itemWidth,itemHeight,itemLength,duration,shouldAnimOnRelease,lockTouch,unlockTouch,onPressRelease,onStartDrag,updateDragToIndex]);return{panResponder:isEditing?panResponder:dummyPanResponder,dragXAnim:dragXAnimRef.current,dragYAnim:dragYAnimRef.current};};exports.default=_default;
//# sourceMappingURL=usePanResponderViewHooks.js.map