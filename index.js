const mdnLink = "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/";

function genEntry(entryData) {
  const elName = document.createElement("summary");
  elName.innerText = entryData.name;
  elName.className = "element-name";
  const link = document.createElement("a");
  link.href = mdnLink + entryData.name;
  link.innerText = "\u2197";
  link.target = "_blank";
  elName.append(link);
  const description = document.createElement("p");
  description.innerText = entryData.text;
  description.className = "desc";
  const container = document.createElement("details");
  container.name = "element-details";
  container.append(elName, description);
  return container;
}

function genElements(title, elementList) {
  const containerLeft = document.querySelector(".left-data");
  const containerRight = document.querySelector(".right-data");
  containerLeft.innerHTML = "";
  containerRight.innerHTML = "";
  const heading = document.createElement("h2");
  heading.innerText = title;
  heading.className = "element-list-heading";
  const header = document.querySelector(".data-header");
  header.innerHTML = "";
  header.append(heading);
  const data = content[elementList];
  const midPoint = Math.ceil(data.length / 2);
  data.slice(0, midPoint).forEach((el) => {
    containerLeft.append(genEntry(el));
  });
  data.slice(midPoint).forEach((el) => {
    containerRight.append(genEntry(el));
  });
}

const content = {
  divs: [
    {
      name: "main",
      text: "Sectioning: Main content unique to the document (not nav/footer). Only one non-hidden allowed.",
    },
    {
      name: "section",
      text: "Sectioning: Generic standalone section of page, prefer article/etc. Should have an h1-6 header tag.",
    },
    {
      name: "article",
      text: "Sectioning: Self contained composition, independent. Blog post, product card, widget.",
    },
    {
      name: "aside",
      text: "Sectioning: Indirectly related to the content. In an article strictly about location, warning info about weather may be an aside.",
    },
    {
      name: "header",
      text: "Sectioning: Grouping of intro/nav content, top of body or top of article/main/etc. Heading elements, logo, search form.",
    },
    {
      name: "nav",
      text: "Sectioning: Grouping of links, can be multiple. Sidebar links within page.",
    },
    {
      name: "hgroup",
      text: "Sectioning: Groups one heading h with one or more p's as taglines/subheadings.",
    },
    {
      name: "footer",
      text: "Sectioning: Info about nearest article/etc ancestor. Copyright info, address block.",
    },
    {
      name: "address",
      text: "Sectioning: Contact info only for its nearest article/body ancestor. Address, email, contact info.",
    },
    {
      name: "search",
      text: "Sectioning: Contain form controls for search functionality.",
    },
    { name: "p", text: "Paragraph of text." },
    {
      name: "figure",
      text: "Self-contained content, may be referenced by document but could logically be moved to appendix/etc. Image, diagram, code block.",
    },
    { name: "blockquote", text: "Extended quotation, supports url citing." },
    {
      name: "output",
      text: "Container for interactive/calculated/result data. Default inline.",
    },
    {
      name: "menu",
      text: "Like ul, contains li elements that are interactable. An unordered list of buttons.",
    },
    {
      name: "ul",
      text: "Display li elements as a list of items. ol for numbered bullets.",
    },
    {
      name: "dl",
      text: "Larger list (of dts) with descriptions (dds). All 3 are blocks. Glossary, terms with definitions.",
    },
    {
      name: "details",
      text: "Clickable summary that opens to a block of information. Can make a simple accordion.",
    },
    {
      name: "dialog",
      text: "Popup like an alert, model, blocking or non blocking.",
    },
  ],
  spans: [
    { name: "b", text: "Draw attention to a word that isn't strong/em/mark." },
    { name: "strong", text: "Important, serious, or urgent text." },
    { name: "em", text: "Text with emphasis." },
    {
      name: "mark",
      text: "Text with some relevance, like highlighting. Highlighted search terms, highlighting text in a quote that wasn't originally highlighted.",
    },
    {
      name: "q",
      text: "Inline quoted text. A short sentence of someone speaking.",
    },
    { name: "cite", text: "Cite a creative work." },
    {
      name: "small",
      text: "Represents usually small side-text like copyright/legal info.",
    },
    {
      name: "dfn",
      text: "Denotes a term that is being defined in this sentence. Can be link target.",
    },
    {
      name: "time",
      text: "Time data, with optional machine-readable properties.",
    },
    { name: "code", text: "Code." },
    { name: "var", text: "Variable in a programming/mathematical expression." },
    {
      name: "data",
      text: "Give a non time related data text a machine-readable value.",
    },
    {
      name: "kbd",
      text: "Text that represents user input like keyboard keys, voice input.",
    },
    { name: "samp", text: "Represents output from a program." },
    {
      name: "ins",
      text: "To show diff-like added text. Green text that is new to this version.",
    },
    {
      name: "del",
      text: "To show diff-like removed text. Red text that is removed from this version.",
    },
    { name: "u", text: "Non decorational underlines. Spelling errors." },
    {
      name: "i",
      text: "Italic text without emphasis. Technical terms, foreign idiomatic terms, thoughts.",
    },
    {
      name: "s",
      text: "Indicate text that is no longer relevant/accurate with strikethrough, other than text edits.",
    },
    {
      name: "sub",
      text: "Subscript text for typographics, not decorative. Chemistry elements.",
    },
    {
      name: "sup",
      text: "Superscript text for typographics, not decorative. Exponents, ordinals.",
    },
  ],
};
