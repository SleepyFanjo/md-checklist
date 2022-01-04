import { useState, useEffect, useCallback } from 'react'
import useMarkdown from './useMarkdown'
import splitMarkdownByH2 from '../utils/splitMarkdownByH2'

const initMarkdownData = (items) => {
  return items.map((md) => ({checked: false, md}))
}

const useSplitedMarkdown = (markdown) => {
  const [ markdownData ] = useMarkdown(markdown)
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    setItems(initMarkdownData(splitMarkdownByH2(markdownData)));
  }, [markdownData, setItems])

  const checkItem = useCallback((itemIndex) => {
    setItems(items.map((item, i) => i === itemIndex ? {checked: true, md: item.md} : item))
  }, [items])

  const unCheckItem = useCallback((itemIndex) => {
    setItems(items.map((item, i) => i === itemIndex ? {checked: false, md: item.md} : item))
  }, [items])

  return [ 
    items,
    checkItem,
    unCheckItem
  ]
}

export default useSplitedMarkdown