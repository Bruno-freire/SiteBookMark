export function addParagraph(text,questionPosition){
  const paragraph = document.createElement('p')
  paragraph.innerText = text
  paragraph.id = "paragraph-"+questionPosition
  paragraph.classList = "paragraph"
  return paragraph
}