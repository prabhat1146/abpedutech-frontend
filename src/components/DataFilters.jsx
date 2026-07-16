const filters = [
  {
    type: "text",
    name: "search",
    label: "Search",
    placeholder: "Title, Test ID..."
  },
  {
    type: "select",
    name: "status",
    label: "Status",
    options: [
      { label: "All", value: "" },
      { label: "Published", value: "published" },
      { label: "Draft", value: "draft" }
    ]
  }
];