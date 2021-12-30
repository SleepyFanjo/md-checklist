import { useState, useEffect } from 'react'
import useMarkdown from './useMarkdown'
import splitMarkdownByH2 from '../utils/splitMarkdownByH2'

const usePaginatedMarkdown = (markdown) => {
  const [ markdownData ] = useMarkdown(markdown)
  const [ pages, setPages ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0)
  

  function next () {
    setCurrentPage(currentPage + 1)
  }

  function previous () {
    setCurrentPage(currentPage - 1)
  }

  useEffect(() => {
    setPages(splitMarkdownByH2(markdownData));
  }, [markdownData, setPages])

  return [ 
    pages.length ? pages[currentPage] : '', // page data
    currentPage < pages.length - 1 ? next : null, // next function
    currentPage > 0 ? previous : null // previous function
  ]
}

export default usePaginatedMarkdown