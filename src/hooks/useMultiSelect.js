import React, { useEffect, useState } from 'react'
import { arrayOf, object, node } from 'prop-types'

const MultiSelectContext = React.createContext({})

// eslint-disable-next-line react/prop-types
export const MultiSelectProvider = ({ options, children }) => {
  const [data, setData] = useState(options)

  useEffect(() => {
    setData(options)
  }, [options])

  return (
    <MultiSelectContext.Provider
      value={{ data, setData }}
    >
      {children}
    </MultiSelectContext.Provider>
  )
}

export const useMultiSelect = () => React.useContext(MultiSelectContext)

MultiSelectContext.defaulProps = {
  options: [{}],
  children: <></>
}

MultiSelectContext.propTypes = {
  options: arrayOf(object).isRequired,
  children: node.isRequired
}
