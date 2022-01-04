const splitMarkdownByH2 = (markdownText) => {
  const pages = [];
  const markdownLines = markdownText.split('\n');
  let currentContent = '';

  markdownLines.forEach((markdownLine) => {
    if (markdownLine.startsWith('##') && currentContent !== '') {
      pages.push(currentContent);
      currentContent = '';
    }

    currentContent += markdownLine;
  })

  if (currentContent !== '') {
    pages.push(currentContent);
  }

  return pages;
}

export default splitMarkdownByH2