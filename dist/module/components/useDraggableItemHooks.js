import { MOVEMENT } from '../models';
import { useMemo } from 'react';
export default (_ref => {
  let {
    animDirection
  } = _ref;
  const isDraggingItem = useMemo(() => animDirection === MOVEMENT.dragging, [animDirection]);
  return {
    isDraggingItem
  };
});
//# sourceMappingURL=useDraggableItemHooks.js.map