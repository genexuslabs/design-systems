export const MERCURY_ASSETS = {
  iconsPath: null,
  getIconPath: (iconPath) => {
    return this.iconsPath + iconPath
  },
  icons: {
  windowsTools: {
    alphabeticalOrder: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#on-surface--enabled"),
          iconName: "windows-tools_alphabetical-order_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#on-surface--hover"),
          iconName: "windows-tools_alphabetical-order_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#on-surface--active"),
          iconName: "windows-tools_alphabetical-order_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#on-surface--disabled"),
          iconName: "windows-tools_alphabetical-order_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#on-primary--enabled"),
          iconName: "windows-tools_alphabetical-order_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#on-primary--hover"),
          iconName: "windows-tools_alphabetical-order_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#on-primary--active"),
          iconName: "windows-tools_alphabetical-order_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#on-primary--disabled"),
          iconName: "windows-tools_alphabetical-order_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#on-disabled--enabled"),
          iconName: "windows-tools_alphabetical-order_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#on-message--enabled"),
          iconName: "windows-tools_alphabetical-order_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#on-elevation--enabled"),
          iconName: "windows-tools_alphabetical-order_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#primary--enabled"),
          iconName: "windows-tools_alphabetical-order_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#primary--hover"),
          iconName: "windows-tools_alphabetical-order_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#primary--active"),
          iconName: "windows-tools_alphabetical-order_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#primary--disabled"),
          iconName: "windows-tools_alphabetical-order_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#neutral--enabled"),
          iconName: "windows-tools_alphabetical-order_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#neutral--hover"),
          iconName: "windows-tools_alphabetical-order_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#neutral--active"),
          iconName: "windows-tools_alphabetical-order_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#neutral--disabled"),
          iconName: "windows-tools_alphabetical-order_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#highlighted--enabled"),
          iconName: "windows-tools_alphabetical-order_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("windows-tools/alphabetical-order.svg#bright--enabled"),
          iconName: "windows-tools_alphabetical-order_bright--enabled"
        }
      }
    }
  },
  objects: {
    workflow: {
      path: "this.getIconPath(objects/workflow.svg)",
      name: "objects_workflow"
    },
    "work-panel": {
      path: "this.getIconPath(objects/work-panel.svg)",
      name: "objects_work-panel"
    },
    "web-panel": {
      path: "this.getIconPath(objects/web-panel.svg)",
      name: "objects_web-panel"
    },
    "web-component": {
      path: "this.getIconPath(objects/web-component.svg)",
      name: "objects_web-component"
    },
    version: {
      path: "this.getIconPath(objects/version.svg)",
      name: "objects_version"
    },
    "url-rewrite": {
      path: "this.getIconPath(objects/url-rewrite.svg)",
      name: "objects_url-rewrite"
    },
    transaction: {
      path: "this.getIconPath(objects/transaction.svg)",
      name: "objects_transaction"
    },
    "to-be-defined": {
      path: "this.getIconPath(objects/to-be-defined.svg)",
      name: "objects_to-be-defined"
    },
    theme: {
      path: "this.getIconPath(objects/theme.svg)",
      name: "objects_theme"
    },
    "theme-web": {
      path: "this.getIconPath(objects/theme-web.svg)",
      name: "objects_theme-web"
    },
    "theme-for-sd": {
      path: "this.getIconPath(objects/theme-for-sd.svg)",
      name: "objects_theme-for-sd"
    },
    table: {
      path: "this.getIconPath(objects/table.svg)",
      name: "objects_table"
    },
    "super-app": {
      path: "this.getIconPath(objects/super-app.svg)",
      name: "objects_super-app"
    },
    "subtype-group": {
      path: "this.getIconPath(objects/subtype-group.svg)",
      name: "objects_subtype-group"
    },
    "structured-data-type": {
      path: "this.getIconPath(objects/structured-data-type.svg)",
      name: "objects_structured-data-type"
    },
    stencil: {
      path: "this.getIconPath(objects/stencil.svg)",
      name: "objects_stencil"
    },
    roles: {
      path: "this.getIconPath(objects/roles.svg)",
      name: "objects_roles"
    },
    report: {
      path: "this.getIconPath(objects/report.svg)",
      name: "objects_report"
    },
    references: {
      path: "this.getIconPath(objects/references.svg)",
      name: "objects_references"
    },
    query: {
      path: "this.getIconPath(objects/query.svg)",
      name: "objects_query"
    },
    procedure: {
      path: "this.getIconPath(objects/procedure.svg)",
      name: "objects_procedure"
    },
    patterns: {
      path: "this.getIconPath(objects/patterns.svg)",
      name: "objects_patterns"
    },
    "panel-for-sd": {
      path: "this.getIconPath(objects/panel-for-sd.svg)",
      name: "objects_panel-for-sd"
    },
    "orphant-document": {
      path: "this.getIconPath(objects/orphant-document.svg)",
      name: "objects_orphant-document"
    },
    "offline-database": {
      path: "this.getIconPath(objects/offline-database.svg)",
      name: "objects_offline-database"
    },
    object: {
      path: "this.getIconPath(objects/object.svg)",
      name: "objects_object"
    },
    "notification-templates": {
      path: "this.getIconPath(objects/notification-templates.svg)",
      name: "objects_notification-templates"
    },
    module: {
      path: "this.getIconPath(objects/module.svg)",
      name: "objects_module"
    },
    "module-open": {
      path: "this.getIconPath(objects/module-open.svg)",
      name: "objects_module-open"
    },
    "mini-app": {
      path: "this.getIconPath(objects/mini-app.svg)",
      name: "objects_mini-app"
    },
    menubar: {
      path: "this.getIconPath(objects/menubar.svg)",
      name: "objects_menubar"
    },
    menu: {
      path: "this.getIconPath(objects/menu.svg)",
      name: "objects_menu"
    },
    masterpage: {
      path: "this.getIconPath(objects/masterpage.svg)",
      name: "objects_masterpage"
    },
    "main-object": {
      path: "this.getIconPath(objects/main-object.svg)",
      name: "objects_main-object"
    },
    language: {
      path: "this.getIconPath(objects/language.svg)",
      name: "objects_language"
    },
    "knowledge-base": {
      path: "this.getIconPath(objects/knowledge-base.svg)",
      name: "objects_knowledge-base"
    },
    image: {
      path: "this.getIconPath(objects/image.svg)",
      name: "objects_image"
    },
    generator: {
      path: "this.getIconPath(objects/generator.svg)",
      name: "objects_generator"
    },
    "generator-category": {
      path: "this.getIconPath(objects/generator-category.svg)",
      name: "objects_generator-category"
    },
    folder: {
      path: "this.getIconPath(objects/folder.svg)",
      name: "objects_folder"
    },
    "folder-open": {
      path: "this.getIconPath(objects/folder-open.svg)",
      name: "objects_folder-open"
    },
    file: {
      path: "this.getIconPath(objects/file.svg)",
      name: "objects_file"
    },
    "external-object": {
      path: "this.getIconPath(objects/external-object.svg)",
      name: "objects_external-object"
    },
    "environment-select": {
      path: "this.getIconPath(objects/environment-select.svg)",
      name: "objects_environment-select"
    },
    "environment-no-select": {
      path: "this.getIconPath(objects/environment-no-select.svg)",
      name: "objects_environment-no-select"
    },
    dso: {
      path: "this.getIconPath(objects/dso.svg)",
      name: "objects_dso"
    },
    domain: {
      path: "this.getIconPath(objects/domain.svg)",
      name: "objects_domain"
    },
    document: {
      path: "this.getIconPath(objects/document.svg)",
      name: "objects_document"
    },
    "document-workflow": {
      path: "this.getIconPath(objects/document-workflow.svg)",
      name: "objects_document-workflow"
    },
    diagram: {
      path: "this.getIconPath(objects/diagram.svg)",
      name: "objects_diagram"
    },
    design: {
      path: "this.getIconPath(objects/design.svg)",
      name: "objects_design"
    },
    "deployment-unit": {
      path: "this.getIconPath(objects/deployment-unit.svg)",
      name: "objects_deployment-unit"
    },
    "dataview-index": {
      path: "this.getIconPath(objects/dataview-index.svg)",
      name: "objects_dataview-index"
    },
    datastore: {
      path: "this.getIconPath(objects/datastore.svg)",
      name: "objects_datastore"
    },
    "datastore-category": {
      path: "this.getIconPath(objects/datastore-category.svg)",
      name: "objects_datastore-category"
    },
    "data-view": {
      path: "this.getIconPath(objects/data-view.svg)",
      name: "objects_data-view"
    },
    "data-selector": {
      path: "this.getIconPath(objects/data-selector.svg)",
      name: "objects_data-selector"
    },
    "data-provider": {
      path: "this.getIconPath(objects/data-provider.svg)",
      name: "objects_data-provider"
    },
    dashboard: {
      path: "this.getIconPath(objects/dashboard.svg)",
      name: "objects_dashboard"
    },
    customization: {
      path: "this.getIconPath(objects/customization.svg)",
      name: "objects_customization"
    },
    "conversational-flows": {
      path: "this.getIconPath(objects/conversational-flows.svg)",
      name: "objects_conversational-flows"
    },
    category: {
      path: "this.getIconPath(objects/category.svg)",
      name: "objects_category"
    },
    calendars: {
      path: "this.getIconPath(objects/calendars.svg)",
      name: "objects_calendars"
    },
    "business-process-diagram": {
      path: "this.getIconPath(objects/business-process-diagram.svg)",
      name: "objects_business-process-diagram"
    },
    "bg-color": {
      path: "this.getIconPath(objects/bg-color.svg)",
      name: "objects_bg-color"
    },
    attribute: {
      path: "this.getIconPath(objects/attribute.svg)",
      name: "objects_attribute"
    },
    api: {
      path: "this.getIconPath(objects/api.svg)",
      name: "objects_api"
    }
  },
  navigation: {
    pillOutlined: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#on-surface--enabled"),
          iconName: "navigation_pill-outlined_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#on-surface--hover"),
          iconName: "navigation_pill-outlined_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#on-surface--active"),
          iconName: "navigation_pill-outlined_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#on-surface--disabled"),
          iconName: "navigation_pill-outlined_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#on-primary--enabled"),
          iconName: "navigation_pill-outlined_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#on-primary--hover"),
          iconName: "navigation_pill-outlined_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#on-primary--active"),
          iconName: "navigation_pill-outlined_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#on-primary--disabled"),
          iconName: "navigation_pill-outlined_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#on-disabled--enabled"),
          iconName: "navigation_pill-outlined_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#on-message--enabled"),
          iconName: "navigation_pill-outlined_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#on-elevation--enabled"),
          iconName: "navigation_pill-outlined_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#primary--enabled"),
          iconName: "navigation_pill-outlined_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#primary--hover"),
          iconName: "navigation_pill-outlined_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#primary--active"),
          iconName: "navigation_pill-outlined_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#primary--disabled"),
          iconName: "navigation_pill-outlined_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#neutral--enabled"),
          iconName: "navigation_pill-outlined_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#neutral--hover"),
          iconName: "navigation_pill-outlined_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#neutral--active"),
          iconName: "navigation_pill-outlined_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#neutral--disabled"),
          iconName: "navigation_pill-outlined_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#highlighted--enabled"),
          iconName: "navigation_pill-outlined_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-outlined.svg#bright--enabled"),
          iconName: "navigation_pill-outlined_bright--enabled"
        }
      }
    },
    pillFilled: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#on-surface--enabled"),
          iconName: "navigation_pill-filled_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#on-surface--hover"),
          iconName: "navigation_pill-filled_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#on-surface--active"),
          iconName: "navigation_pill-filled_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#on-surface--disabled"),
          iconName: "navigation_pill-filled_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#on-primary--enabled"),
          iconName: "navigation_pill-filled_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#on-primary--hover"),
          iconName: "navigation_pill-filled_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#on-primary--active"),
          iconName: "navigation_pill-filled_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#on-primary--disabled"),
          iconName: "navigation_pill-filled_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#on-disabled--enabled"),
          iconName: "navigation_pill-filled_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#on-message--enabled"),
          iconName: "navigation_pill-filled_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#on-elevation--enabled"),
          iconName: "navigation_pill-filled_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#primary--enabled"),
          iconName: "navigation_pill-filled_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#primary--hover"),
          iconName: "navigation_pill-filled_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#primary--active"),
          iconName: "navigation_pill-filled_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#primary--disabled"),
          iconName: "navigation_pill-filled_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#neutral--enabled"),
          iconName: "navigation_pill-filled_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#neutral--hover"),
          iconName: "navigation_pill-filled_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#neutral--active"),
          iconName: "navigation_pill-filled_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#neutral--disabled"),
          iconName: "navigation_pill-filled_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#highlighted--enabled"),
          iconName: "navigation_pill-filled_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/pill-filled.svg#bright--enabled"),
          iconName: "navigation_pill-filled_bright--enabled"
        }
      }
    },
    levelUp: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-up.svg#on-surface--enabled"),
          iconName: "navigation_level-up_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/level-up.svg#on-surface--hover"),
          iconName: "navigation_level-up_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/level-up.svg#on-surface--active"),
          iconName: "navigation_level-up_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/level-up.svg#on-surface--disabled"),
          iconName: "navigation_level-up_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-up.svg#on-primary--enabled"),
          iconName: "navigation_level-up_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/level-up.svg#on-primary--hover"),
          iconName: "navigation_level-up_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/level-up.svg#on-primary--active"),
          iconName: "navigation_level-up_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/level-up.svg#on-primary--disabled"),
          iconName: "navigation_level-up_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-up.svg#on-disabled--enabled"),
          iconName: "navigation_level-up_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-up.svg#on-message--enabled"),
          iconName: "navigation_level-up_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-up.svg#on-elevation--enabled"),
          iconName: "navigation_level-up_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-up.svg#primary--enabled"),
          iconName: "navigation_level-up_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/level-up.svg#primary--hover"),
          iconName: "navigation_level-up_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/level-up.svg#primary--active"),
          iconName: "navigation_level-up_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/level-up.svg#primary--disabled"),
          iconName: "navigation_level-up_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-up.svg#neutral--enabled"),
          iconName: "navigation_level-up_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/level-up.svg#neutral--hover"),
          iconName: "navigation_level-up_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/level-up.svg#neutral--active"),
          iconName: "navigation_level-up_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/level-up.svg#neutral--disabled"),
          iconName: "navigation_level-up_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-up.svg#highlighted--enabled"),
          iconName: "navigation_level-up_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-up.svg#bright--enabled"),
          iconName: "navigation_level-up_bright--enabled"
        }
      }
    },
    levelDown: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-down.svg#on-surface--enabled"),
          iconName: "navigation_level-down_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/level-down.svg#on-surface--hover"),
          iconName: "navigation_level-down_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/level-down.svg#on-surface--active"),
          iconName: "navigation_level-down_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/level-down.svg#on-surface--disabled"),
          iconName: "navigation_level-down_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-down.svg#on-primary--enabled"),
          iconName: "navigation_level-down_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/level-down.svg#on-primary--hover"),
          iconName: "navigation_level-down_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/level-down.svg#on-primary--active"),
          iconName: "navigation_level-down_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/level-down.svg#on-primary--disabled"),
          iconName: "navigation_level-down_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-down.svg#on-disabled--enabled"),
          iconName: "navigation_level-down_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-down.svg#on-message--enabled"),
          iconName: "navigation_level-down_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-down.svg#on-elevation--enabled"),
          iconName: "navigation_level-down_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-down.svg#primary--enabled"),
          iconName: "navigation_level-down_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/level-down.svg#primary--hover"),
          iconName: "navigation_level-down_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/level-down.svg#primary--active"),
          iconName: "navigation_level-down_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/level-down.svg#primary--disabled"),
          iconName: "navigation_level-down_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-down.svg#neutral--enabled"),
          iconName: "navigation_level-down_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/level-down.svg#neutral--hover"),
          iconName: "navigation_level-down_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/level-down.svg#neutral--active"),
          iconName: "navigation_level-down_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/level-down.svg#neutral--disabled"),
          iconName: "navigation_level-down_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-down.svg#highlighted--enabled"),
          iconName: "navigation_level-down_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/level-down.svg#bright--enabled"),
          iconName: "navigation_level-down_bright--enabled"
        }
      }
    },
    gxArrowRight: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#on-surface--enabled"),
          iconName: "navigation_gx-arrow-right_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#on-surface--hover"),
          iconName: "navigation_gx-arrow-right_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#on-surface--active"),
          iconName: "navigation_gx-arrow-right_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#on-surface--disabled"),
          iconName: "navigation_gx-arrow-right_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#on-primary--enabled"),
          iconName: "navigation_gx-arrow-right_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#on-primary--hover"),
          iconName: "navigation_gx-arrow-right_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#on-primary--active"),
          iconName: "navigation_gx-arrow-right_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#on-primary--disabled"),
          iconName: "navigation_gx-arrow-right_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#on-disabled--enabled"),
          iconName: "navigation_gx-arrow-right_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#on-message--enabled"),
          iconName: "navigation_gx-arrow-right_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#on-elevation--enabled"),
          iconName: "navigation_gx-arrow-right_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#primary--enabled"),
          iconName: "navigation_gx-arrow-right_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#primary--hover"),
          iconName: "navigation_gx-arrow-right_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#primary--active"),
          iconName: "navigation_gx-arrow-right_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#primary--disabled"),
          iconName: "navigation_gx-arrow-right_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#neutral--enabled"),
          iconName: "navigation_gx-arrow-right_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#neutral--hover"),
          iconName: "navigation_gx-arrow-right_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#neutral--active"),
          iconName: "navigation_gx-arrow-right_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#neutral--disabled"),
          iconName: "navigation_gx-arrow-right_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#highlighted--enabled"),
          iconName: "navigation_gx-arrow-right_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/gx-arrow-right.svg#bright--enabled"),
          iconName: "navigation_gx-arrow-right_bright--enabled"
        }
      }
    },
    drag: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/drag.svg#on-surface--enabled"),
          iconName: "navigation_drag_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/drag.svg#on-surface--hover"),
          iconName: "navigation_drag_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/drag.svg#on-surface--active"),
          iconName: "navigation_drag_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/drag.svg#on-surface--disabled"),
          iconName: "navigation_drag_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/drag.svg#on-primary--enabled"),
          iconName: "navigation_drag_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/drag.svg#on-primary--hover"),
          iconName: "navigation_drag_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/drag.svg#on-primary--active"),
          iconName: "navigation_drag_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/drag.svg#on-primary--disabled"),
          iconName: "navigation_drag_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/drag.svg#on-disabled--enabled"),
          iconName: "navigation_drag_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/drag.svg#on-message--enabled"),
          iconName: "navigation_drag_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/drag.svg#on-elevation--enabled"),
          iconName: "navigation_drag_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/drag.svg#primary--enabled"),
          iconName: "navigation_drag_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/drag.svg#primary--hover"),
          iconName: "navigation_drag_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/drag.svg#primary--active"),
          iconName: "navigation_drag_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/drag.svg#primary--disabled"),
          iconName: "navigation_drag_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/drag.svg#neutral--enabled"),
          iconName: "navigation_drag_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/drag.svg#neutral--hover"),
          iconName: "navigation_drag_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/drag.svg#neutral--active"),
          iconName: "navigation_drag_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/drag.svg#neutral--disabled"),
          iconName: "navigation_drag_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/drag.svg#highlighted--enabled"),
          iconName: "navigation_drag_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/drag.svg#bright--enabled"),
          iconName: "navigation_drag_bright--enabled"
        }
      }
    },
    chevronUp: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#on-surface--enabled"),
          iconName: "navigation_chevron-up_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#on-surface--hover"),
          iconName: "navigation_chevron-up_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#on-surface--active"),
          iconName: "navigation_chevron-up_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#on-surface--disabled"),
          iconName: "navigation_chevron-up_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#on-primary--enabled"),
          iconName: "navigation_chevron-up_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#on-primary--hover"),
          iconName: "navigation_chevron-up_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#on-primary--active"),
          iconName: "navigation_chevron-up_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#on-primary--disabled"),
          iconName: "navigation_chevron-up_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#on-disabled--enabled"),
          iconName: "navigation_chevron-up_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#on-message--enabled"),
          iconName: "navigation_chevron-up_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#on-elevation--enabled"),
          iconName: "navigation_chevron-up_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#primary--enabled"),
          iconName: "navigation_chevron-up_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#primary--hover"),
          iconName: "navigation_chevron-up_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#primary--active"),
          iconName: "navigation_chevron-up_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#primary--disabled"),
          iconName: "navigation_chevron-up_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#neutral--enabled"),
          iconName: "navigation_chevron-up_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#neutral--hover"),
          iconName: "navigation_chevron-up_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#neutral--active"),
          iconName: "navigation_chevron-up_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#neutral--disabled"),
          iconName: "navigation_chevron-up_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#highlighted--enabled"),
          iconName: "navigation_chevron-up_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-up.svg#bright--enabled"),
          iconName: "navigation_chevron-up_bright--enabled"
        }
      }
    },
    chevronRight: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#on-surface--enabled"),
          iconName: "navigation_chevron-right_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#on-surface--hover"),
          iconName: "navigation_chevron-right_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#on-surface--active"),
          iconName: "navigation_chevron-right_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#on-surface--disabled"),
          iconName: "navigation_chevron-right_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#on-primary--enabled"),
          iconName: "navigation_chevron-right_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#on-primary--hover"),
          iconName: "navigation_chevron-right_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#on-primary--active"),
          iconName: "navigation_chevron-right_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#on-primary--disabled"),
          iconName: "navigation_chevron-right_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#on-disabled--enabled"),
          iconName: "navigation_chevron-right_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#on-message--enabled"),
          iconName: "navigation_chevron-right_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#on-elevation--enabled"),
          iconName: "navigation_chevron-right_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#primary--enabled"),
          iconName: "navigation_chevron-right_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#primary--hover"),
          iconName: "navigation_chevron-right_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#primary--active"),
          iconName: "navigation_chevron-right_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#primary--disabled"),
          iconName: "navigation_chevron-right_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#neutral--enabled"),
          iconName: "navigation_chevron-right_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#neutral--hover"),
          iconName: "navigation_chevron-right_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#neutral--active"),
          iconName: "navigation_chevron-right_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#neutral--disabled"),
          iconName: "navigation_chevron-right_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#highlighted--enabled"),
          iconName: "navigation_chevron-right_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-right.svg#bright--enabled"),
          iconName: "navigation_chevron-right_bright--enabled"
        }
      }
    },
    chevronLeft: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#on-surface--enabled"),
          iconName: "navigation_chevron-left_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#on-surface--hover"),
          iconName: "navigation_chevron-left_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#on-surface--active"),
          iconName: "navigation_chevron-left_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#on-surface--disabled"),
          iconName: "navigation_chevron-left_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#on-primary--enabled"),
          iconName: "navigation_chevron-left_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#on-primary--hover"),
          iconName: "navigation_chevron-left_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#on-primary--active"),
          iconName: "navigation_chevron-left_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#on-primary--disabled"),
          iconName: "navigation_chevron-left_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#on-disabled--enabled"),
          iconName: "navigation_chevron-left_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#on-message--enabled"),
          iconName: "navigation_chevron-left_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#on-elevation--enabled"),
          iconName: "navigation_chevron-left_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#primary--enabled"),
          iconName: "navigation_chevron-left_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#primary--hover"),
          iconName: "navigation_chevron-left_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#primary--active"),
          iconName: "navigation_chevron-left_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#primary--disabled"),
          iconName: "navigation_chevron-left_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#neutral--enabled"),
          iconName: "navigation_chevron-left_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#neutral--hover"),
          iconName: "navigation_chevron-left_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#neutral--active"),
          iconName: "navigation_chevron-left_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#neutral--disabled"),
          iconName: "navigation_chevron-left_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#highlighted--enabled"),
          iconName: "navigation_chevron-left_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-left.svg#bright--enabled"),
          iconName: "navigation_chevron-left_bright--enabled"
        }
      }
    },
    chevronDown: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#on-surface--enabled"),
          iconName: "navigation_chevron-down_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#on-surface--hover"),
          iconName: "navigation_chevron-down_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#on-surface--active"),
          iconName: "navigation_chevron-down_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#on-surface--disabled"),
          iconName: "navigation_chevron-down_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#on-primary--enabled"),
          iconName: "navigation_chevron-down_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#on-primary--hover"),
          iconName: "navigation_chevron-down_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#on-primary--active"),
          iconName: "navigation_chevron-down_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#on-primary--disabled"),
          iconName: "navigation_chevron-down_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#on-disabled--enabled"),
          iconName: "navigation_chevron-down_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#on-message--enabled"),
          iconName: "navigation_chevron-down_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#on-elevation--enabled"),
          iconName: "navigation_chevron-down_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#primary--enabled"),
          iconName: "navigation_chevron-down_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#primary--hover"),
          iconName: "navigation_chevron-down_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#primary--active"),
          iconName: "navigation_chevron-down_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#primary--disabled"),
          iconName: "navigation_chevron-down_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#neutral--enabled"),
          iconName: "navigation_chevron-down_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#neutral--hover"),
          iconName: "navigation_chevron-down_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#neutral--active"),
          iconName: "navigation_chevron-down_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#neutral--disabled"),
          iconName: "navigation_chevron-down_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#highlighted--enabled"),
          iconName: "navigation_chevron-down_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/chevron-down.svg#bright--enabled"),
          iconName: "navigation_chevron-down_bright--enabled"
        }
      }
    },
    bullet: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/bullet.svg#on-surface--enabled"),
          iconName: "navigation_bullet_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/bullet.svg#on-surface--hover"),
          iconName: "navigation_bullet_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/bullet.svg#on-surface--active"),
          iconName: "navigation_bullet_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/bullet.svg#on-surface--disabled"),
          iconName: "navigation_bullet_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/bullet.svg#on-primary--enabled"),
          iconName: "navigation_bullet_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/bullet.svg#on-primary--hover"),
          iconName: "navigation_bullet_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/bullet.svg#on-primary--active"),
          iconName: "navigation_bullet_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/bullet.svg#on-primary--disabled"),
          iconName: "navigation_bullet_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/bullet.svg#on-disabled--enabled"),
          iconName: "navigation_bullet_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/bullet.svg#on-message--enabled"),
          iconName: "navigation_bullet_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/bullet.svg#on-elevation--enabled"),
          iconName: "navigation_bullet_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/bullet.svg#primary--enabled"),
          iconName: "navigation_bullet_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/bullet.svg#primary--hover"),
          iconName: "navigation_bullet_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/bullet.svg#primary--active"),
          iconName: "navigation_bullet_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/bullet.svg#primary--disabled"),
          iconName: "navigation_bullet_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/bullet.svg#neutral--enabled"),
          iconName: "navigation_bullet_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/bullet.svg#neutral--hover"),
          iconName: "navigation_bullet_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/bullet.svg#neutral--active"),
          iconName: "navigation_bullet_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/bullet.svg#neutral--disabled"),
          iconName: "navigation_bullet_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/bullet.svg#highlighted--enabled"),
          iconName: "navigation_bullet_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/bullet.svg#bright--enabled"),
          iconName: "navigation_bullet_bright--enabled"
        }
      }
    },
    arrowUp: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#on-surface--enabled"),
          iconName: "navigation_arrow-up_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#on-surface--hover"),
          iconName: "navigation_arrow-up_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#on-surface--active"),
          iconName: "navigation_arrow-up_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#on-surface--disabled"),
          iconName: "navigation_arrow-up_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#on-primary--enabled"),
          iconName: "navigation_arrow-up_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#on-primary--hover"),
          iconName: "navigation_arrow-up_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#on-primary--active"),
          iconName: "navigation_arrow-up_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#on-primary--disabled"),
          iconName: "navigation_arrow-up_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#on-disabled--enabled"),
          iconName: "navigation_arrow-up_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#on-message--enabled"),
          iconName: "navigation_arrow-up_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#on-elevation--enabled"),
          iconName: "navigation_arrow-up_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#primary--enabled"),
          iconName: "navigation_arrow-up_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#primary--hover"),
          iconName: "navigation_arrow-up_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#primary--active"),
          iconName: "navigation_arrow-up_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#primary--disabled"),
          iconName: "navigation_arrow-up_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#neutral--enabled"),
          iconName: "navigation_arrow-up_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#neutral--hover"),
          iconName: "navigation_arrow-up_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#neutral--active"),
          iconName: "navigation_arrow-up_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#neutral--disabled"),
          iconName: "navigation_arrow-up_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#highlighted--enabled"),
          iconName: "navigation_arrow-up_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-up.svg#bright--enabled"),
          iconName: "navigation_arrow-up_bright--enabled"
        }
      }
    },
    arrowRight: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#on-surface--enabled"),
          iconName: "navigation_arrow-right_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#on-surface--hover"),
          iconName: "navigation_arrow-right_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#on-surface--active"),
          iconName: "navigation_arrow-right_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#on-surface--disabled"),
          iconName: "navigation_arrow-right_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#on-primary--enabled"),
          iconName: "navigation_arrow-right_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#on-primary--hover"),
          iconName: "navigation_arrow-right_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#on-primary--active"),
          iconName: "navigation_arrow-right_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#on-primary--disabled"),
          iconName: "navigation_arrow-right_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#on-disabled--enabled"),
          iconName: "navigation_arrow-right_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#on-message--enabled"),
          iconName: "navigation_arrow-right_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#on-elevation--enabled"),
          iconName: "navigation_arrow-right_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#primary--enabled"),
          iconName: "navigation_arrow-right_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#primary--hover"),
          iconName: "navigation_arrow-right_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#primary--active"),
          iconName: "navigation_arrow-right_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#primary--disabled"),
          iconName: "navigation_arrow-right_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#neutral--enabled"),
          iconName: "navigation_arrow-right_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#neutral--hover"),
          iconName: "navigation_arrow-right_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#neutral--active"),
          iconName: "navigation_arrow-right_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#neutral--disabled"),
          iconName: "navigation_arrow-right_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#highlighted--enabled"),
          iconName: "navigation_arrow-right_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-right.svg#bright--enabled"),
          iconName: "navigation_arrow-right_bright--enabled"
        }
      }
    },
    arrowLeft: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#on-surface--enabled"),
          iconName: "navigation_arrow-left_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#on-surface--hover"),
          iconName: "navigation_arrow-left_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#on-surface--active"),
          iconName: "navigation_arrow-left_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#on-surface--disabled"),
          iconName: "navigation_arrow-left_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#on-primary--enabled"),
          iconName: "navigation_arrow-left_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#on-primary--hover"),
          iconName: "navigation_arrow-left_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#on-primary--active"),
          iconName: "navigation_arrow-left_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#on-primary--disabled"),
          iconName: "navigation_arrow-left_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#on-disabled--enabled"),
          iconName: "navigation_arrow-left_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#on-message--enabled"),
          iconName: "navigation_arrow-left_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#on-elevation--enabled"),
          iconName: "navigation_arrow-left_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#primary--enabled"),
          iconName: "navigation_arrow-left_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#primary--hover"),
          iconName: "navigation_arrow-left_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#primary--active"),
          iconName: "navigation_arrow-left_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#primary--disabled"),
          iconName: "navigation_arrow-left_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#neutral--enabled"),
          iconName: "navigation_arrow-left_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#neutral--hover"),
          iconName: "navigation_arrow-left_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#neutral--active"),
          iconName: "navigation_arrow-left_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#neutral--disabled"),
          iconName: "navigation_arrow-left_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#highlighted--enabled"),
          iconName: "navigation_arrow-left_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-left.svg#bright--enabled"),
          iconName: "navigation_arrow-left_bright--enabled"
        }
      }
    },
    arrowDown: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#on-surface--enabled"),
          iconName: "navigation_arrow-down_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#on-surface--hover"),
          iconName: "navigation_arrow-down_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#on-surface--active"),
          iconName: "navigation_arrow-down_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#on-surface--disabled"),
          iconName: "navigation_arrow-down_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#on-primary--enabled"),
          iconName: "navigation_arrow-down_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#on-primary--hover"),
          iconName: "navigation_arrow-down_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#on-primary--active"),
          iconName: "navigation_arrow-down_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#on-primary--disabled"),
          iconName: "navigation_arrow-down_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#on-disabled--enabled"),
          iconName: "navigation_arrow-down_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#on-message--enabled"),
          iconName: "navigation_arrow-down_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#on-elevation--enabled"),
          iconName: "navigation_arrow-down_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#primary--enabled"),
          iconName: "navigation_arrow-down_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#primary--hover"),
          iconName: "navigation_arrow-down_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#primary--active"),
          iconName: "navigation_arrow-down_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#primary--disabled"),
          iconName: "navigation_arrow-down_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#neutral--enabled"),
          iconName: "navigation_arrow-down_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#neutral--hover"),
          iconName: "navigation_arrow-down_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#neutral--active"),
          iconName: "navigation_arrow-down_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#neutral--disabled"),
          iconName: "navigation_arrow-down_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#highlighted--enabled"),
          iconName: "navigation_arrow-down_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down.svg#bright--enabled"),
          iconName: "navigation_arrow-down_bright--enabled"
        }
      }
    },
    arrowDownSkyblue: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#on-surface--enabled"),
          iconName: "navigation_arrow-down-skyblue_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#on-surface--hover"),
          iconName: "navigation_arrow-down-skyblue_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#on-surface--active"),
          iconName: "navigation_arrow-down-skyblue_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#on-surface--disabled"),
          iconName: "navigation_arrow-down-skyblue_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#on-primary--enabled"),
          iconName: "navigation_arrow-down-skyblue_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#on-primary--hover"),
          iconName: "navigation_arrow-down-skyblue_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#on-primary--active"),
          iconName: "navigation_arrow-down-skyblue_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#on-primary--disabled"),
          iconName: "navigation_arrow-down-skyblue_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#on-disabled--enabled"),
          iconName: "navigation_arrow-down-skyblue_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#on-message--enabled"),
          iconName: "navigation_arrow-down-skyblue_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#on-elevation--enabled"),
          iconName: "navigation_arrow-down-skyblue_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#primary--enabled"),
          iconName: "navigation_arrow-down-skyblue_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#primary--hover"),
          iconName: "navigation_arrow-down-skyblue_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#primary--active"),
          iconName: "navigation_arrow-down-skyblue_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#primary--disabled"),
          iconName: "navigation_arrow-down-skyblue_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#neutral--enabled"),
          iconName: "navigation_arrow-down-skyblue_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#neutral--hover"),
          iconName: "navigation_arrow-down-skyblue_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#neutral--active"),
          iconName: "navigation_arrow-down-skyblue_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#neutral--disabled"),
          iconName: "navigation_arrow-down-skyblue_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#highlighted--enabled"),
          iconName: "navigation_arrow-down-skyblue_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("navigation/arrow-down-skyblue.svg#bright--enabled"),
          iconName: "navigation_arrow-down-skyblue_bright--enabled"
        }
      }
    }
  },
  menus: {
    undo: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/undo.svg#on-surface--enabled"),
          iconName: "menus_undo_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/undo.svg#on-surface--hover"),
          iconName: "menus_undo_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/undo.svg#on-surface--active"),
          iconName: "menus_undo_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/undo.svg#on-surface--disabled"),
          iconName: "menus_undo_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/undo.svg#on-primary--enabled"),
          iconName: "menus_undo_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/undo.svg#on-primary--hover"),
          iconName: "menus_undo_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/undo.svg#on-primary--active"),
          iconName: "menus_undo_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/undo.svg#on-primary--disabled"),
          iconName: "menus_undo_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/undo.svg#on-disabled--enabled"),
          iconName: "menus_undo_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/undo.svg#on-message--enabled"),
          iconName: "menus_undo_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/undo.svg#on-elevation--enabled"),
          iconName: "menus_undo_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/undo.svg#primary--enabled"),
          iconName: "menus_undo_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/undo.svg#primary--hover"),
          iconName: "menus_undo_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/undo.svg#primary--active"),
          iconName: "menus_undo_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/undo.svg#primary--disabled"),
          iconName: "menus_undo_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/undo.svg#neutral--enabled"),
          iconName: "menus_undo_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/undo.svg#neutral--hover"),
          iconName: "menus_undo_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/undo.svg#neutral--active"),
          iconName: "menus_undo_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/undo.svg#neutral--disabled"),
          iconName: "menus_undo_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/undo.svg#highlighted--enabled"),
          iconName: "menus_undo_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/undo.svg#bright--enabled"),
          iconName: "menus_undo_bright--enabled"
        }
      }
    },
    undoCloseObject: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#on-surface--enabled"),
          iconName: "menus_undo-close-object_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#on-surface--hover"),
          iconName: "menus_undo-close-object_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#on-surface--active"),
          iconName: "menus_undo-close-object_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#on-surface--disabled"),
          iconName: "menus_undo-close-object_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#on-primary--enabled"),
          iconName: "menus_undo-close-object_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#on-primary--hover"),
          iconName: "menus_undo-close-object_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#on-primary--active"),
          iconName: "menus_undo-close-object_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#on-primary--disabled"),
          iconName: "menus_undo-close-object_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#on-disabled--enabled"),
          iconName: "menus_undo-close-object_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#on-message--enabled"),
          iconName: "menus_undo-close-object_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#on-elevation--enabled"),
          iconName: "menus_undo-close-object_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#primary--enabled"),
          iconName: "menus_undo-close-object_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#primary--hover"),
          iconName: "menus_undo-close-object_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#primary--active"),
          iconName: "menus_undo-close-object_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#primary--disabled"),
          iconName: "menus_undo-close-object_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#neutral--enabled"),
          iconName: "menus_undo-close-object_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#neutral--hover"),
          iconName: "menus_undo-close-object_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#neutral--active"),
          iconName: "menus_undo-close-object_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#neutral--disabled"),
          iconName: "menus_undo-close-object_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#highlighted--enabled"),
          iconName: "menus_undo-close-object_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/undo-close-object.svg#bright--enabled"),
          iconName: "menus_undo-close-object_bright--enabled"
        }
      }
    },
    save: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/save.svg#on-surface--enabled"),
          iconName: "menus_save_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/save.svg#on-surface--hover"),
          iconName: "menus_save_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/save.svg#on-surface--active"),
          iconName: "menus_save_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/save.svg#on-surface--disabled"),
          iconName: "menus_save_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/save.svg#on-primary--enabled"),
          iconName: "menus_save_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/save.svg#on-primary--hover"),
          iconName: "menus_save_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/save.svg#on-primary--active"),
          iconName: "menus_save_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/save.svg#on-primary--disabled"),
          iconName: "menus_save_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/save.svg#on-disabled--enabled"),
          iconName: "menus_save_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/save.svg#on-message--enabled"),
          iconName: "menus_save_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/save.svg#on-elevation--enabled"),
          iconName: "menus_save_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/save.svg#primary--enabled"),
          iconName: "menus_save_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/save.svg#primary--hover"),
          iconName: "menus_save_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/save.svg#primary--active"),
          iconName: "menus_save_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/save.svg#primary--disabled"),
          iconName: "menus_save_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/save.svg#neutral--enabled"),
          iconName: "menus_save_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/save.svg#neutral--hover"),
          iconName: "menus_save_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/save.svg#neutral--active"),
          iconName: "menus_save_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/save.svg#neutral--disabled"),
          iconName: "menus_save_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/save.svg#highlighted--enabled"),
          iconName: "menus_save_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/save.svg#bright--enabled"),
          iconName: "menus_save_bright--enabled"
        }
      }
    },
    saveAll: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/save-all.svg#on-surface--enabled"),
          iconName: "menus_save-all_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/save-all.svg#on-surface--hover"),
          iconName: "menus_save-all_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/save-all.svg#on-surface--active"),
          iconName: "menus_save-all_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/save-all.svg#on-surface--disabled"),
          iconName: "menus_save-all_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/save-all.svg#on-primary--enabled"),
          iconName: "menus_save-all_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/save-all.svg#on-primary--hover"),
          iconName: "menus_save-all_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/save-all.svg#on-primary--active"),
          iconName: "menus_save-all_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/save-all.svg#on-primary--disabled"),
          iconName: "menus_save-all_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/save-all.svg#on-disabled--enabled"),
          iconName: "menus_save-all_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/save-all.svg#on-message--enabled"),
          iconName: "menus_save-all_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/save-all.svg#on-elevation--enabled"),
          iconName: "menus_save-all_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/save-all.svg#primary--enabled"),
          iconName: "menus_save-all_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/save-all.svg#primary--hover"),
          iconName: "menus_save-all_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/save-all.svg#primary--active"),
          iconName: "menus_save-all_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/save-all.svg#primary--disabled"),
          iconName: "menus_save-all_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/save-all.svg#neutral--enabled"),
          iconName: "menus_save-all_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/save-all.svg#neutral--hover"),
          iconName: "menus_save-all_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/save-all.svg#neutral--active"),
          iconName: "menus_save-all_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/save-all.svg#neutral--disabled"),
          iconName: "menus_save-all_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/save-all.svg#highlighted--enabled"),
          iconName: "menus_save-all_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/save-all.svg#bright--enabled"),
          iconName: "menus_save-all_bright--enabled"
        }
      }
    },
    run: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/run.svg#on-surface--enabled"),
          iconName: "menus_run_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/run.svg#on-surface--hover"),
          iconName: "menus_run_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/run.svg#on-surface--active"),
          iconName: "menus_run_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/run.svg#on-surface--disabled"),
          iconName: "menus_run_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/run.svg#on-primary--enabled"),
          iconName: "menus_run_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/run.svg#on-primary--hover"),
          iconName: "menus_run_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/run.svg#on-primary--active"),
          iconName: "menus_run_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/run.svg#on-primary--disabled"),
          iconName: "menus_run_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/run.svg#on-disabled--enabled"),
          iconName: "menus_run_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/run.svg#on-message--enabled"),
          iconName: "menus_run_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/run.svg#on-elevation--enabled"),
          iconName: "menus_run_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/run.svg#primary--enabled"),
          iconName: "menus_run_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/run.svg#primary--hover"),
          iconName: "menus_run_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/run.svg#primary--active"),
          iconName: "menus_run_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/run.svg#primary--disabled"),
          iconName: "menus_run_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/run.svg#neutral--enabled"),
          iconName: "menus_run_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/run.svg#neutral--hover"),
          iconName: "menus_run_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/run.svg#neutral--active"),
          iconName: "menus_run_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/run.svg#neutral--disabled"),
          iconName: "menus_run_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/run.svg#highlighted--enabled"),
          iconName: "menus_run_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/run.svg#bright--enabled"),
          iconName: "menus_run_bright--enabled"
        }
      }
    },
    redo: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/redo.svg#on-surface--enabled"),
          iconName: "menus_redo_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/redo.svg#on-surface--hover"),
          iconName: "menus_redo_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/redo.svg#on-surface--active"),
          iconName: "menus_redo_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/redo.svg#on-surface--disabled"),
          iconName: "menus_redo_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/redo.svg#on-primary--enabled"),
          iconName: "menus_redo_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/redo.svg#on-primary--hover"),
          iconName: "menus_redo_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/redo.svg#on-primary--active"),
          iconName: "menus_redo_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/redo.svg#on-primary--disabled"),
          iconName: "menus_redo_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/redo.svg#on-disabled--enabled"),
          iconName: "menus_redo_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/redo.svg#on-message--enabled"),
          iconName: "menus_redo_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/redo.svg#on-elevation--enabled"),
          iconName: "menus_redo_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/redo.svg#primary--enabled"),
          iconName: "menus_redo_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/redo.svg#primary--hover"),
          iconName: "menus_redo_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/redo.svg#primary--active"),
          iconName: "menus_redo_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/redo.svg#primary--disabled"),
          iconName: "menus_redo_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/redo.svg#neutral--enabled"),
          iconName: "menus_redo_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/redo.svg#neutral--hover"),
          iconName: "menus_redo_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/redo.svg#neutral--active"),
          iconName: "menus_redo_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/redo.svg#neutral--disabled"),
          iconName: "menus_redo_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/redo.svg#highlighted--enabled"),
          iconName: "menus_redo_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/redo.svg#bright--enabled"),
          iconName: "menus_redo_bright--enabled"
        }
      }
    },
    properties: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/properties.svg#on-surface--enabled"),
          iconName: "menus_properties_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/properties.svg#on-surface--hover"),
          iconName: "menus_properties_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/properties.svg#on-surface--active"),
          iconName: "menus_properties_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/properties.svg#on-surface--disabled"),
          iconName: "menus_properties_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/properties.svg#on-primary--enabled"),
          iconName: "menus_properties_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/properties.svg#on-primary--hover"),
          iconName: "menus_properties_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/properties.svg#on-primary--active"),
          iconName: "menus_properties_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/properties.svg#on-primary--disabled"),
          iconName: "menus_properties_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/properties.svg#on-disabled--enabled"),
          iconName: "menus_properties_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/properties.svg#on-message--enabled"),
          iconName: "menus_properties_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/properties.svg#on-elevation--enabled"),
          iconName: "menus_properties_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/properties.svg#primary--enabled"),
          iconName: "menus_properties_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/properties.svg#primary--hover"),
          iconName: "menus_properties_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/properties.svg#primary--active"),
          iconName: "menus_properties_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/properties.svg#primary--disabled"),
          iconName: "menus_properties_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/properties.svg#neutral--enabled"),
          iconName: "menus_properties_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/properties.svg#neutral--hover"),
          iconName: "menus_properties_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/properties.svg#neutral--active"),
          iconName: "menus_properties_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/properties.svg#neutral--disabled"),
          iconName: "menus_properties_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/properties.svg#highlighted--enabled"),
          iconName: "menus_properties_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/properties.svg#bright--enabled"),
          iconName: "menus_properties_bright--enabled"
        }
      }
    },
    paste: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/paste.svg#on-surface--enabled"),
          iconName: "menus_paste_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/paste.svg#on-surface--hover"),
          iconName: "menus_paste_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/paste.svg#on-surface--active"),
          iconName: "menus_paste_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/paste.svg#on-surface--disabled"),
          iconName: "menus_paste_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/paste.svg#on-primary--enabled"),
          iconName: "menus_paste_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/paste.svg#on-primary--hover"),
          iconName: "menus_paste_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/paste.svg#on-primary--active"),
          iconName: "menus_paste_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/paste.svg#on-primary--disabled"),
          iconName: "menus_paste_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/paste.svg#on-disabled--enabled"),
          iconName: "menus_paste_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/paste.svg#on-message--enabled"),
          iconName: "menus_paste_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/paste.svg#on-elevation--enabled"),
          iconName: "menus_paste_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/paste.svg#primary--enabled"),
          iconName: "menus_paste_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/paste.svg#primary--hover"),
          iconName: "menus_paste_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/paste.svg#primary--active"),
          iconName: "menus_paste_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/paste.svg#primary--disabled"),
          iconName: "menus_paste_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/paste.svg#neutral--enabled"),
          iconName: "menus_paste_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/paste.svg#neutral--hover"),
          iconName: "menus_paste_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/paste.svg#neutral--active"),
          iconName: "menus_paste_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/paste.svg#neutral--disabled"),
          iconName: "menus_paste_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/paste.svg#highlighted--enabled"),
          iconName: "menus_paste_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/paste.svg#bright--enabled"),
          iconName: "menus_paste_bright--enabled"
        }
      }
    },
    openObject: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/open-object.svg#on-surface--enabled"),
          iconName: "menus_open-object_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/open-object.svg#on-surface--hover"),
          iconName: "menus_open-object_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/open-object.svg#on-surface--active"),
          iconName: "menus_open-object_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/open-object.svg#on-surface--disabled"),
          iconName: "menus_open-object_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/open-object.svg#on-primary--enabled"),
          iconName: "menus_open-object_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/open-object.svg#on-primary--hover"),
          iconName: "menus_open-object_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/open-object.svg#on-primary--active"),
          iconName: "menus_open-object_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/open-object.svg#on-primary--disabled"),
          iconName: "menus_open-object_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/open-object.svg#on-disabled--enabled"),
          iconName: "menus_open-object_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/open-object.svg#on-message--enabled"),
          iconName: "menus_open-object_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/open-object.svg#on-elevation--enabled"),
          iconName: "menus_open-object_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/open-object.svg#primary--enabled"),
          iconName: "menus_open-object_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/open-object.svg#primary--hover"),
          iconName: "menus_open-object_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/open-object.svg#primary--active"),
          iconName: "menus_open-object_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/open-object.svg#primary--disabled"),
          iconName: "menus_open-object_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/open-object.svg#neutral--enabled"),
          iconName: "menus_open-object_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/open-object.svg#neutral--hover"),
          iconName: "menus_open-object_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/open-object.svg#neutral--active"),
          iconName: "menus_open-object_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/open-object.svg#neutral--disabled"),
          iconName: "menus_open-object_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/open-object.svg#highlighted--enabled"),
          iconName: "menus_open-object_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/open-object.svg#bright--enabled"),
          iconName: "menus_open-object_bright--enabled"
        }
      }
    },
    newObject: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/new-object.svg#on-surface--enabled"),
          iconName: "menus_new-object_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/new-object.svg#on-surface--hover"),
          iconName: "menus_new-object_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/new-object.svg#on-surface--active"),
          iconName: "menus_new-object_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/new-object.svg#on-surface--disabled"),
          iconName: "menus_new-object_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/new-object.svg#on-primary--enabled"),
          iconName: "menus_new-object_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/new-object.svg#on-primary--hover"),
          iconName: "menus_new-object_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/new-object.svg#on-primary--active"),
          iconName: "menus_new-object_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/new-object.svg#on-primary--disabled"),
          iconName: "menus_new-object_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/new-object.svg#on-disabled--enabled"),
          iconName: "menus_new-object_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/new-object.svg#on-message--enabled"),
          iconName: "menus_new-object_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/new-object.svg#on-elevation--enabled"),
          iconName: "menus_new-object_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/new-object.svg#primary--enabled"),
          iconName: "menus_new-object_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/new-object.svg#primary--hover"),
          iconName: "menus_new-object_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/new-object.svg#primary--active"),
          iconName: "menus_new-object_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/new-object.svg#primary--disabled"),
          iconName: "menus_new-object_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/new-object.svg#neutral--enabled"),
          iconName: "menus_new-object_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/new-object.svg#neutral--hover"),
          iconName: "menus_new-object_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/new-object.svg#neutral--active"),
          iconName: "menus_new-object_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/new-object.svg#neutral--disabled"),
          iconName: "menus_new-object_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/new-object.svg#highlighted--enabled"),
          iconName: "menus_new-object_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/new-object.svg#bright--enabled"),
          iconName: "menus_new-object_bright--enabled"
        }
      }
    },
    find: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/find.svg#on-surface--enabled"),
          iconName: "menus_find_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/find.svg#on-surface--hover"),
          iconName: "menus_find_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/find.svg#on-surface--active"),
          iconName: "menus_find_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/find.svg#on-surface--disabled"),
          iconName: "menus_find_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/find.svg#on-primary--enabled"),
          iconName: "menus_find_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/find.svg#on-primary--hover"),
          iconName: "menus_find_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/find.svg#on-primary--active"),
          iconName: "menus_find_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/find.svg#on-primary--disabled"),
          iconName: "menus_find_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/find.svg#on-disabled--enabled"),
          iconName: "menus_find_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/find.svg#on-message--enabled"),
          iconName: "menus_find_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/find.svg#on-elevation--enabled"),
          iconName: "menus_find_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/find.svg#primary--enabled"),
          iconName: "menus_find_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/find.svg#primary--hover"),
          iconName: "menus_find_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/find.svg#primary--active"),
          iconName: "menus_find_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/find.svg#primary--disabled"),
          iconName: "menus_find_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/find.svg#neutral--enabled"),
          iconName: "menus_find_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/find.svg#neutral--hover"),
          iconName: "menus_find_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/find.svg#neutral--active"),
          iconName: "menus_find_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/find.svg#neutral--disabled"),
          iconName: "menus_find_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/find.svg#highlighted--enabled"),
          iconName: "menus_find_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/find.svg#bright--enabled"),
          iconName: "menus_find_bright--enabled"
        }
      }
    },
    delete: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/delete.svg#on-surface--enabled"),
          iconName: "menus_delete_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/delete.svg#on-surface--hover"),
          iconName: "menus_delete_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/delete.svg#on-surface--active"),
          iconName: "menus_delete_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/delete.svg#on-surface--disabled"),
          iconName: "menus_delete_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/delete.svg#on-primary--enabled"),
          iconName: "menus_delete_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/delete.svg#on-primary--hover"),
          iconName: "menus_delete_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/delete.svg#on-primary--active"),
          iconName: "menus_delete_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/delete.svg#on-primary--disabled"),
          iconName: "menus_delete_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/delete.svg#on-disabled--enabled"),
          iconName: "menus_delete_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/delete.svg#on-message--enabled"),
          iconName: "menus_delete_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/delete.svg#on-elevation--enabled"),
          iconName: "menus_delete_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/delete.svg#primary--enabled"),
          iconName: "menus_delete_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/delete.svg#primary--hover"),
          iconName: "menus_delete_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/delete.svg#primary--active"),
          iconName: "menus_delete_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/delete.svg#primary--disabled"),
          iconName: "menus_delete_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/delete.svg#neutral--enabled"),
          iconName: "menus_delete_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/delete.svg#neutral--hover"),
          iconName: "menus_delete_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/delete.svg#neutral--active"),
          iconName: "menus_delete_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/delete.svg#neutral--disabled"),
          iconName: "menus_delete_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/delete.svg#highlighted--enabled"),
          iconName: "menus_delete_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/delete.svg#bright--enabled"),
          iconName: "menus_delete_bright--enabled"
        }
      }
    },
    cut: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/cut.svg#on-surface--enabled"),
          iconName: "menus_cut_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/cut.svg#on-surface--hover"),
          iconName: "menus_cut_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/cut.svg#on-surface--active"),
          iconName: "menus_cut_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/cut.svg#on-surface--disabled"),
          iconName: "menus_cut_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/cut.svg#on-primary--enabled"),
          iconName: "menus_cut_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/cut.svg#on-primary--hover"),
          iconName: "menus_cut_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/cut.svg#on-primary--active"),
          iconName: "menus_cut_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/cut.svg#on-primary--disabled"),
          iconName: "menus_cut_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/cut.svg#on-disabled--enabled"),
          iconName: "menus_cut_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/cut.svg#on-message--enabled"),
          iconName: "menus_cut_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/cut.svg#on-elevation--enabled"),
          iconName: "menus_cut_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/cut.svg#primary--enabled"),
          iconName: "menus_cut_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/cut.svg#primary--hover"),
          iconName: "menus_cut_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/cut.svg#primary--active"),
          iconName: "menus_cut_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/cut.svg#primary--disabled"),
          iconName: "menus_cut_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/cut.svg#neutral--enabled"),
          iconName: "menus_cut_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/cut.svg#neutral--hover"),
          iconName: "menus_cut_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/cut.svg#neutral--active"),
          iconName: "menus_cut_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/cut.svg#neutral--disabled"),
          iconName: "menus_cut_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/cut.svg#highlighted--enabled"),
          iconName: "menus_cut_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/cut.svg#bright--enabled"),
          iconName: "menus_cut_bright--enabled"
        }
      }
    },
    createDatabaseTables: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#on-surface--enabled"),
          iconName: "menus_create-database-tables_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#on-surface--hover"),
          iconName: "menus_create-database-tables_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#on-surface--active"),
          iconName: "menus_create-database-tables_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#on-surface--disabled"),
          iconName: "menus_create-database-tables_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#on-primary--enabled"),
          iconName: "menus_create-database-tables_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#on-primary--hover"),
          iconName: "menus_create-database-tables_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#on-primary--active"),
          iconName: "menus_create-database-tables_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#on-primary--disabled"),
          iconName: "menus_create-database-tables_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#on-disabled--enabled"),
          iconName: "menus_create-database-tables_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#on-message--enabled"),
          iconName: "menus_create-database-tables_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#on-elevation--enabled"),
          iconName: "menus_create-database-tables_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#primary--enabled"),
          iconName: "menus_create-database-tables_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#primary--hover"),
          iconName: "menus_create-database-tables_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#primary--active"),
          iconName: "menus_create-database-tables_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#primary--disabled"),
          iconName: "menus_create-database-tables_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#neutral--enabled"),
          iconName: "menus_create-database-tables_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#neutral--hover"),
          iconName: "menus_create-database-tables_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#neutral--active"),
          iconName: "menus_create-database-tables_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#neutral--disabled"),
          iconName: "menus_create-database-tables_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#highlighted--enabled"),
          iconName: "menus_create-database-tables_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/create-database-tables.svg#bright--enabled"),
          iconName: "menus_create-database-tables_bright--enabled"
        }
      }
    },
    copy: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/copy.svg#on-surface--enabled"),
          iconName: "menus_copy_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/copy.svg#on-surface--hover"),
          iconName: "menus_copy_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/copy.svg#on-surface--active"),
          iconName: "menus_copy_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/copy.svg#on-surface--disabled"),
          iconName: "menus_copy_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/copy.svg#on-primary--enabled"),
          iconName: "menus_copy_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/copy.svg#on-primary--hover"),
          iconName: "menus_copy_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/copy.svg#on-primary--active"),
          iconName: "menus_copy_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/copy.svg#on-primary--disabled"),
          iconName: "menus_copy_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/copy.svg#on-disabled--enabled"),
          iconName: "menus_copy_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/copy.svg#on-message--enabled"),
          iconName: "menus_copy_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/copy.svg#on-elevation--enabled"),
          iconName: "menus_copy_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/copy.svg#primary--enabled"),
          iconName: "menus_copy_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/copy.svg#primary--hover"),
          iconName: "menus_copy_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/copy.svg#primary--active"),
          iconName: "menus_copy_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/copy.svg#primary--disabled"),
          iconName: "menus_copy_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/copy.svg#neutral--enabled"),
          iconName: "menus_copy_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/copy.svg#neutral--hover"),
          iconName: "menus_copy_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/copy.svg#neutral--active"),
          iconName: "menus_copy_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/copy.svg#neutral--disabled"),
          iconName: "menus_copy_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/copy.svg#highlighted--enabled"),
          iconName: "menus_copy_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/copy.svg#bright--enabled"),
          iconName: "menus_copy_bright--enabled"
        }
      }
    },
    cancelBuild: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/cancel-build.svg#on-surface--enabled"),
          iconName: "menus_cancel-build_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/cancel-build.svg#on-surface--hover"),
          iconName: "menus_cancel-build_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/cancel-build.svg#on-surface--active"),
          iconName: "menus_cancel-build_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/cancel-build.svg#on-surface--disabled"),
          iconName: "menus_cancel-build_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/cancel-build.svg#on-primary--enabled"),
          iconName: "menus_cancel-build_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/cancel-build.svg#on-primary--hover"),
          iconName: "menus_cancel-build_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/cancel-build.svg#on-primary--active"),
          iconName: "menus_cancel-build_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/cancel-build.svg#on-primary--disabled"),
          iconName: "menus_cancel-build_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/cancel-build.svg#on-disabled--enabled"),
          iconName: "menus_cancel-build_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/cancel-build.svg#on-message--enabled"),
          iconName: "menus_cancel-build_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/cancel-build.svg#on-elevation--enabled"),
          iconName: "menus_cancel-build_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/cancel-build.svg#primary--enabled"),
          iconName: "menus_cancel-build_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/cancel-build.svg#primary--hover"),
          iconName: "menus_cancel-build_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/cancel-build.svg#primary--active"),
          iconName: "menus_cancel-build_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/cancel-build.svg#primary--disabled"),
          iconName: "menus_cancel-build_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/cancel-build.svg#neutral--enabled"),
          iconName: "menus_cancel-build_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/cancel-build.svg#neutral--hover"),
          iconName: "menus_cancel-build_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/cancel-build.svg#neutral--active"),
          iconName: "menus_cancel-build_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/cancel-build.svg#neutral--disabled"),
          iconName: "menus_cancel-build_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/cancel-build.svg#highlighted--enabled"),
          iconName: "menus_cancel-build_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/cancel-build.svg#bright--enabled"),
          iconName: "menus_cancel-build_bright--enabled"
        }
      }
    },
    build: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/build.svg#on-surface--enabled"),
          iconName: "menus_build_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/build.svg#on-surface--hover"),
          iconName: "menus_build_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/build.svg#on-surface--active"),
          iconName: "menus_build_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/build.svg#on-surface--disabled"),
          iconName: "menus_build_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/build.svg#on-primary--enabled"),
          iconName: "menus_build_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/build.svg#on-primary--hover"),
          iconName: "menus_build_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/build.svg#on-primary--active"),
          iconName: "menus_build_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/build.svg#on-primary--disabled"),
          iconName: "menus_build_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/build.svg#on-disabled--enabled"),
          iconName: "menus_build_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/build.svg#on-message--enabled"),
          iconName: "menus_build_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/build.svg#on-elevation--enabled"),
          iconName: "menus_build_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/build.svg#primary--enabled"),
          iconName: "menus_build_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/build.svg#primary--hover"),
          iconName: "menus_build_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/build.svg#primary--active"),
          iconName: "menus_build_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/build.svg#primary--disabled"),
          iconName: "menus_build_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/build.svg#neutral--enabled"),
          iconName: "menus_build_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/build.svg#neutral--hover"),
          iconName: "menus_build_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/build.svg#neutral--active"),
          iconName: "menus_build_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/build.svg#neutral--disabled"),
          iconName: "menus_build_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/build.svg#highlighted--enabled"),
          iconName: "menus_build_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/build.svg#bright--enabled"),
          iconName: "menus_build_bright--enabled"
        }
      }
    },
    buildAll: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("menus/build-all.svg#on-surface--enabled"),
          iconName: "menus_build-all_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/build-all.svg#on-surface--hover"),
          iconName: "menus_build-all_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/build-all.svg#on-surface--active"),
          iconName: "menus_build-all_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/build-all.svg#on-surface--disabled"),
          iconName: "menus_build-all_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("menus/build-all.svg#on-primary--enabled"),
          iconName: "menus_build-all_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/build-all.svg#on-primary--hover"),
          iconName: "menus_build-all_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/build-all.svg#on-primary--active"),
          iconName: "menus_build-all_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/build-all.svg#on-primary--disabled"),
          iconName: "menus_build-all_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("menus/build-all.svg#on-disabled--enabled"),
          iconName: "menus_build-all_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("menus/build-all.svg#on-message--enabled"),
          iconName: "menus_build-all_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("menus/build-all.svg#on-elevation--enabled"),
          iconName: "menus_build-all_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("menus/build-all.svg#primary--enabled"),
          iconName: "menus_build-all_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/build-all.svg#primary--hover"),
          iconName: "menus_build-all_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/build-all.svg#primary--active"),
          iconName: "menus_build-all_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/build-all.svg#primary--disabled"),
          iconName: "menus_build-all_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("menus/build-all.svg#neutral--enabled"),
          iconName: "menus_build-all_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("menus/build-all.svg#neutral--hover"),
          iconName: "menus_build-all_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("menus/build-all.svg#neutral--active"),
          iconName: "menus_build-all_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("menus/build-all.svg#neutral--disabled"),
          iconName: "menus_build-all_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("menus/build-all.svg#highlighted--enabled"),
          iconName: "menus_build-all_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("menus/build-all.svg#bright--enabled"),
          iconName: "menus_build-all_bright--enabled"
        }
      }
    }
  },
  geminiTools: {
    addCircle: {
      onSurface: {
        enabled: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#on-surface--enabled"),
          iconName: "gemini-tools_add-circle_on-surface--enabled"
        },
        hover: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#on-surface--hover"),
          iconName: "gemini-tools_add-circle_on-surface--hover"
        },
        active: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#on-surface--active"),
          iconName: "gemini-tools_add-circle_on-surface--active"
        },
        disabled: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#on-surface--disabled"),
          iconName: "gemini-tools_add-circle_on-surface--disabled"
        }
      },
      onPrimary: {
        enabled: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#on-primary--enabled"),
          iconName: "gemini-tools_add-circle_on-primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#on-primary--hover"),
          iconName: "gemini-tools_add-circle_on-primary--hover"
        },
        active: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#on-primary--active"),
          iconName: "gemini-tools_add-circle_on-primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#on-primary--disabled"),
          iconName: "gemini-tools_add-circle_on-primary--disabled"
        }
      },
      onDisabled: {
        enabled: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#on-disabled--enabled"),
          iconName: "gemini-tools_add-circle_on-disabled--enabled"
        }
      },
      onMessage: {
        enabled: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#on-message--enabled"),
          iconName: "gemini-tools_add-circle_on-message--enabled"
        }
      },
      onElevation: {
        enabled: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#on-elevation--enabled"),
          iconName: "gemini-tools_add-circle_on-elevation--enabled"
        }
      },
      primary: {
        enabled: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#primary--enabled"),
          iconName: "gemini-tools_add-circle_primary--enabled"
        },
        hover: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#primary--hover"),
          iconName: "gemini-tools_add-circle_primary--hover"
        },
        active: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#primary--active"),
          iconName: "gemini-tools_add-circle_primary--active"
        },
        disabled: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#primary--disabled"),
          iconName: "gemini-tools_add-circle_primary--disabled"
        }
      },
      neutral: {
        enabled: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#neutral--enabled"),
          iconName: "gemini-tools_add-circle_neutral--enabled"
        },
        hover: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#neutral--hover"),
          iconName: "gemini-tools_add-circle_neutral--hover"
        },
        active: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#neutral--active"),
          iconName: "gemini-tools_add-circle_neutral--active"
        },
        disabled: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#neutral--disabled"),
          iconName: "gemini-tools_add-circle_neutral--disabled"
        }
      },
      highlighted: {
        enabled: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#highlighted--enabled"),
          iconName: "gemini-tools_add-circle_highlighted--enabled"
        }
      },
      bright: {
        enabled: {
          iconPath: this.getIconPath("gemini-tools/add-circle.svg#bright--enabled"),
          iconName: "gemini-tools_add-circle_bright--enabled"
        }
      }
    }
  }
}
};