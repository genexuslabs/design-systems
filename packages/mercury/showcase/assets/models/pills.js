// Status pills
export const pillStatusModel = [
  {
    value: "enabled",
    caption: "Enabled"
  },
  {
    value: "processing",
    caption: "Processing"
  },
  {
    value: "success",
    caption: "Success"
  },
  {
    value: "error",
    caption: "Error"
  },
  {
    value: "warning",
    caption: "Warning"
  }
];

// Dummy pills for showing "grouped" pills:

export const devStatusModel = [
  { value: "draft", caption: "Draft" },
  { value: "in_progress", caption: "In Progress" },
  { value: "review", caption: "In Review" },
  { value: "approved", caption: "Approved" },
  { value: "deployed", caption: "Deployed" },
  { value: "archived", caption: "Archived" }
];

export const projectPhasesModel = [
  { value: "analysis", caption: "Analysis" },
  { value: "design", caption: "Design" },
  { value: "development", caption: "Development" },
  { value: "testing", caption: "Testing" },
  { value: "deployment", caption: "Deployment" },
  { value: "maintenance", caption: "Maintenance" }
];

export const moduleTypesModel = [
  { value: "backend", caption: "Backend" },
  { value: "frontend", caption: "Frontend" },
  { value: "api", caption: "API" },
  { value: "integration", caption: "Integration" },
  { value: "security", caption: "Security" },
  { value: "ui", caption: "UI/UX" }
];

export const userRolesModel = [
  { value: "admin", caption: "Admin" },
  { value: "developer", caption: "Developer" },
  { value: "analyst", caption: "Analyst" },
  { value: "tester", caption: "Tester" },
  { value: "client", caption: "Client" }
];

export const issueTypesModel = [
  { value: "bug", caption: "Bug" },
  { value: "feature", caption: "Feature" },
  { value: "improvement", caption: "Improvement" },
  { value: "task", caption: "Task" },
  { value: "support", caption: "Support" }
];

export const priorityLevelsModel = [
  { value: "low", caption: "Low" },
  { value: "medium", caption: "Medium" },
  { value: "high", caption: "High" },
  { value: "critical", caption: "Critical" }
];

export const environmentTypesModel = [
  { value: "development", caption: "Development" },
  { value: "testing", caption: "Testing" },
  { value: "staging", caption: "Staging" },
  { value: "production", caption: "Production" }
];

export const taskStatusModel = [
  { value: "todo", caption: "To Do" },
  { value: "in_progress", caption: "In Progress" },
  { value: "review", caption: "In Review" },
  { value: "done", caption: "Done" },
  { value: "blocked", caption: "Blocked" }
];

export const componentCategoriesModel = [
  { value: "ui_component", caption: "UI Component" },
  { value: "logic_component", caption: "Logic Component" },
  { value: "service", caption: "Service" },
  { value: "database", caption: "Database" },
  { value: "api", caption: "API" }
];
