/**
 * Interface
 */
interface Icon {
  id: number;
  name: string;
  label: string;
}

/**
 * Data
 */
const icons: Array<Icon> = [
  { id: 1, name: 'Dashboard', label: 'dashboard' },
  { id: 2, name: 'Folder', label: 'folder' },
  { id: 3, name: 'Search', label: 'search' },
  { id: 4, name: 'Bell', label: 'bell' },
  { id: 5, name: 'User', label: 'user' },
  { id: 6, name: 'Arrow', label: 'arrow' },
  { id: 7, name: 'Check mark', label: 'check' },
  { id: 8, name: 'Calendar', label: 'calendar' },
  { id: 9, name: 'Heart #1', label: 'favourite' },
  { id: 10, name: 'Heart #2', label: 'favouriteEmpty' },
  { id: 11, name: 'Structure', label: 'structure' },
  { id: 12, name: 'Pie chart', label: 'pieChart' },
  { id: 13, name: 'Pencil', label: 'pencil' },
  { id: 14, name: 'Flag', label: 'flag' }
]

/**
 * Methods
 */
// # Get all icons
export const getAllIcons = (): Array<Icon> => {
  return icons
}
// # Get icon by id
export const getIconByID = (id: number): Icon | null | any => {
  // Target icons
  let target = null

  // Get target by id
  icons.forEach((icon: Icon) => {
    if (icon.id === id) {
      target = icon
    }
  })

  // Return
  return target
}
