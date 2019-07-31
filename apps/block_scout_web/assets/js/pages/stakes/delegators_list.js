import $ from 'jquery'
import { connectElements } from '../../lib/redux_helpers.js'
import { createAsyncLoadStore } from '../../lib/async_listing_load'
import { openModal } from '../../lib/modals'

export function openDelegatorsListModal (event, store) {
  const address = $(event.target).closest('[data-address]').data('address')

  store.getState().channel
    .push('render_delegators_list', { address })
    .receive('ok', msg => openModal($(msg.html)))
}
