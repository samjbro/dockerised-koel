import { event } from '@/utils'

export function loadMainView (view, ...args) {
  event.emit(event.$names.LOAD_MAIN_VIEW, view, ...args)
}
