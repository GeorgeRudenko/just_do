/**
 * Interface
 */
interface Color {
  id: number;
  name: string;
  label: string;
}

/**
 * Data
 */
const colors: Array<Color> = [
  { id: 1, name: 'Mint', label: 'mint' },
  { id: 2, name: 'Yellow', label: 'yellow' },
  { id: 3, name: 'Green', label: 'green' },
  { id: 4, name: 'Pink', label: 'pink' },
  { id: 5, name: 'Brown', label: 'brown' },
  { id: 6, name: 'Red', label: 'red' },
  { id: 7, name: 'Purple', label: 'purple' },
  { id: 8, name: 'Black', label: 'black' },
  { id: 9, name: 'Grey', label: 'grey' },
  { id: 10, name: 'Blue', label: 'blue' }
]

/**
 * Methods
 */
// # Get all icons
export const getAllColors = (): Array<Color> => {
  return colors
}
// # Get icon by id
export const getColorByID = (id: number): Color | null | any => {
  // Target icons
  let target = null

  // Get target by id
  colors.forEach((color: Color) => {
    if (color.id === id) {
      target = color
    }
  })

  // Return
  return target
}
