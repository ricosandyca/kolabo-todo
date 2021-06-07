/**
 * Reorder array position
 * Used to reorder drag and drop (react-beautiful-dnd)
 *
 * @param {Array<any>} data - data to reorder
 * @param {Number} source - index of source
 * @param {Number} destination - index of destination
 * @param {Boolean} [refProcessing=true] - if true, the data source will be changed
 * @returns {Array<any>} reordered data
 */
 export default function reorder(
  data,
  source,
  destination,
  refProcessing = true,
) {
  // reference processing will change the data source
  if (!refProcessing) data = [...data];
  const [removed] = data.splice(source, 1);
  data.splice(destination, 0, removed);
  return data;
}
