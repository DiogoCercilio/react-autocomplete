import React, { useState, useEffect } from 'react'
import { ApiResultItem, AutoCompleteProps } from '../models/ApiResult'
import './AutoComplete.css'

function AutoComplete({ data, onChooseItem, onClickHandler }: AutoCompleteProps) {
  const [filteredData, setfilteredData] = useState<ApiResultItem[]>([])
  const [activeItem, setActiveItem] = useState<number>(-1)

  useEffect(() => {
    setfilteredData(data)
  }, [data])

  const isHighlight = (i: string) => /\.*\./.test(i)

  const highlightSearch = (str: string, search: string) => {
    return str.toLowerCase().replaceAll(search.toLowerCase(), `__.${search.toLowerCase()}.__`).split('__')
  }

  const checkIfMatches = (str: string, search: string) => {
    return !search || !!(new RegExp(search, 'gi')).test(`${str}`)
  }

  const applyMatches = (search: string) => {
    return data.filter((i: any) => {
      const matches = checkIfMatches(i.first_name, search)
      i.highlight = (matches && !!search) ? highlightSearch(i.first_name, search) : []
      return matches
    })
  }

  const inputHandler = async (evt: any) => {
    const item = filteredData.findIndex(data => data.id === activeItem)
    switch (evt.code) {
      case 'ArrowDown':
        
        setActiveItem(filteredData[(item + 1) > filteredData.length ? filteredData.length : item + 1].id)
        break;

      case 'ArrowUp':
        setActiveItem(filteredData[(item - 1) < 0 ? 0 : item - 1].id)
        break;

      case 'Enter':
        handleClick(filteredData.find(data => data.id === activeItem) || null)
        break;

      default:
        setfilteredData(applyMatches(evt.currentTarget.value))
        break;
    }
  }

  const highlightedTerm = (item: string, index: number) => {
    return (
      <span key={index}>
        {item.replaceAll('.', '')}
      </span>
    )
  }

  const handleClick = (item: ApiResultItem | null) => {
    setfilteredData([])
    onChooseItem(item)
  }

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Type some user name here"
        onKeyUpCapture={inputHandler}
        onClick={() => onClickHandler()}
      />

      <ul className="absolute w-full">
        {filteredData.map((item) => (
          item.highlight?.length ? (
            <li
              key={item.id}
              onClick={() => handleClick(item)}
              className={activeItem === item.id ? 'active' : ''}
            >
              <>
                {item.highlight.map((i: string, index: number) =>
                  isHighlight(i) ? highlightedTerm(i, index) : i
                )}
              </>
            </li>
          ) : null
        ))}
      </ul>
    </div>
  )
}

export default AutoComplete