import React, { useState, useMemo } from 'react'

export const UiTriggersContext = React.createContext({})

export const UiTriggersProvider= ({children}) => {
  const [showLoader, setShowLoader] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const toggleLoader = useMemo(() => () => setShowLoader(!showLoader), [showLoader])

  const hideLoader = useMemo(() => () => setShowLoader(false), [])
  const displayLoader = useMemo(() => () => setShowLoader(true), [])

  const hideModal = useMemo(() => () => setShowModal(false), [])
  const displayModal = useMemo(() => () => setShowModal(true), [])

  const state = {
    showLoader,
    showModal,
    toggleLoader,
    displayLoader,
    hideLoader,
    hideModal,
    displayModal,
  }

  return(
    <UiTriggersContext.Provider value={state}>
      {children}
    </UiTriggersContext.Provider>
  )
}