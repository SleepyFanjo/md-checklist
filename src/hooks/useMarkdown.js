import { useState, useEffect } from 'react'

const useMarkdown = (markdownFile) => {
  const [ loading, setLoading ] = useState(false)
  const [ markdownData, setMarkdownData ] = useState('')
  const [ error, setError ] = useState(null)

  useEffect(() => {
    setLoading(true);
    
    fetch(markdownFile)
    .then(response => response.text())
    .then(text => {
      setLoading(false);
      setMarkdownData(text);
    })
    .catch(e => {
      setError(e)
      setLoading(false)
    })
  }, [markdownFile])

  return [ markdownData, loading, error ]
}

export default useMarkdown;