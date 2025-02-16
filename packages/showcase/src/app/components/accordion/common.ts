export const accordionCommonChildren = [
  {
    tag: "div",
    properties: [{ name: "slot", value: "file" }],
    class: "spacing-body",
    children: `{Accoridon "file" slotted content goes here}`
  },
  {
    tag: "div",
    properties: [{ name: "slot", value: "domain" }],
    class: "spacing-body",
    children: `{Accoridon "domain" slotted content goes here}`
  },
  {
    tag: "div",
    properties: [{ name: "slot", value: "procedure" }],
    class: "spacing-body",
    children: `{Accoridon "procedure" slotted content goes here}`
  },
  {
    tag: "div",
    properties: [{ name: "slot", value: "document" }],
    class: "spacing-body",
    children: `{Accoridon "document" slotted content goes here}`
  }
];

export const accordionCommon = {
  itemFile: {
    slot: "file",
    description: `The File object in GeneXus is designed to handle file-related operations within an application. It allows developers to work with files stored locally or on a server by providing methods to upload, download, open, read, write, and manipulate files in various formats. This object is particularly useful for managing documents, images, or any other type of file interaction, making it easier to handle file-based processes within business applications.`
  },
  itemDomain: {
    slot: "domain",
    description: `The Domain object in GeneXus allows developers to define a specific data type with associated validation rules, formatting, and constraints, which can be reused across various parts of an application. It helps ensure consistency and standardization for commonly used data types, such as emails, phone numbers, or currencies. By creating Domains, developers can streamline application maintenance and enforce uniform data validation throughout the system.`
  },
  itemProcedure: {
    slot: "procedure",
    description: `The Procedure object in GeneXus is used to define a sequence of actions or logic that can be executed within an application. It allows developers to create reusable routines to process data, perform calculations, update databases, or call external services. Procedures can be triggered by user actions or scheduled tasks, and they offer flexibility for handling complex business logic while improving the modularity and maintainability of the application.`
  },
  itemDocument: {
    slot: "document",
    description: `The Document object in GeneXus is designed to handle text-based content, such as generating, manipulating, and exporting documents in various formats like PDF, Word, or HTML. It allows developers to create dynamic reports, invoices, or other formal documents by merging static text with data from the application. The Document object is ideal for automating the creation of printable and shareable files within business workflows.`
  }
};
