const freeze = <T extends { [key in string]: any }>(objectToFreeze: T) =>
  Object.freeze(objectToFreeze);

export const MERCURY_ASSETS = freeze({
  config: freeze({
  defaultColorType: "on-surface"
}),
  icons: freeze({
  "window-tools": freeze({
    workflow: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_workflow_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_workflow_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_workflow_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_workflow_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_workflow_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_workflow_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_workflow_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_workflow_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_workflow_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_workflow_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_workflow_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_workflow_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_workflow_primary--hover"
        }),
        active: freeze({
          name: "window-tools_workflow_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_workflow_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_workflow_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_workflow_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_workflow_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_workflow_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_workflow_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_workflow_bright--enabled"
        })
      })
    }),
    "workflow-settings": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_workflow-settings_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_workflow-settings_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_workflow-settings_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_workflow-settings_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_workflow-settings_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_workflow-settings_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_workflow-settings_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_workflow-settings_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_workflow-settings_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_workflow-settings_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_workflow-settings_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_workflow-settings_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_workflow-settings_primary--hover"
        }),
        active: freeze({
          name: "window-tools_workflow-settings_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_workflow-settings_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_workflow-settings_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_workflow-settings_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_workflow-settings_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_workflow-settings_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_workflow-settings_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_workflow-settings_bright--enabled"
        })
      })
    }),
    "work-with-attributes": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_work-with-attributes_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_work-with-attributes_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_work-with-attributes_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_work-with-attributes_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_work-with-attributes_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_work-with-attributes_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_work-with-attributes_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_work-with-attributes_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_work-with-attributes_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_work-with-attributes_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_work-with-attributes_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_work-with-attributes_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_work-with-attributes_primary--hover"
        }),
        active: freeze({
          name: "window-tools_work-with-attributes_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_work-with-attributes_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_work-with-attributes_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_work-with-attributes_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_work-with-attributes_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_work-with-attributes_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_work-with-attributes_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_work-with-attributes_bright--enabled"
        })
      })
    }),
    watch: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_watch_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_watch_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_watch_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_watch_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_watch_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_watch_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_watch_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_watch_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_watch_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_watch_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_watch_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_watch_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_watch_primary--hover"
        }),
        active: freeze({
          name: "window-tools_watch_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_watch_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_watch_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_watch_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_watch_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_watch_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_watch_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_watch_bright--enabled"
        })
      })
    }),
    toolbox: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_toolbox_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_toolbox_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_toolbox_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_toolbox_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_toolbox_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_toolbox_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_toolbox_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_toolbox_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_toolbox_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_toolbox_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_toolbox_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_toolbox_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_toolbox_primary--hover"
        }),
        active: freeze({
          name: "window-tools_toolbox_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_toolbox_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_toolbox_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_toolbox_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_toolbox_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_toolbox_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_toolbox_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_toolbox_bright--enabled"
        })
      })
    }),
    teamdev: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_teamdev_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_teamdev_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_teamdev_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_teamdev_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_teamdev_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_teamdev_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_teamdev_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_teamdev_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_teamdev_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_teamdev_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_teamdev_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_teamdev_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_teamdev_primary--hover"
        }),
        active: freeze({
          name: "window-tools_teamdev_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_teamdev_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_teamdev_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_teamdev_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_teamdev_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_teamdev_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_teamdev_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_teamdev_bright--enabled"
        })
      })
    }),
    services: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_services_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_services_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_services_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_services_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_services_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_services_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_services_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_services_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_services_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_services_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_services_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_services_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_services_primary--hover"
        }),
        active: freeze({
          name: "window-tools_services_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_services_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_services_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_services_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_services_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_services_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_services_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_services_bright--enabled"
        })
      })
    }),
    roles: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_roles_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_roles_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_roles_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_roles_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_roles_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_roles_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_roles_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_roles_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_roles_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_roles_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_roles_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_roles_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_roles_primary--hover"
        }),
        active: freeze({
          name: "window-tools_roles_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_roles_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_roles_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_roles_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_roles_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_roles_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_roles_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_roles_bright--enabled"
        })
      })
    }),
    rol: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_rol_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_rol_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_rol_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_rol_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_rol_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_rol_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_rol_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_rol_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_rol_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_rol_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_rol_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_rol_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_rol_primary--hover"
        }),
        active: freeze({
          name: "window-tools_rol_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_rol_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_rol_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_rol_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_rol_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_rol_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_rol_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_rol_bright--enabled"
        })
      })
    }),
    "responsive-sizes": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_responsive-sizes_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_responsive-sizes_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_responsive-sizes_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_responsive-sizes_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_responsive-sizes_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_responsive-sizes_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_responsive-sizes_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_responsive-sizes_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_responsive-sizes_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_responsive-sizes_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_responsive-sizes_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_responsive-sizes_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_responsive-sizes_primary--hover"
        }),
        active: freeze({
          name: "window-tools_responsive-sizes_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_responsive-sizes_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_responsive-sizes_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_responsive-sizes_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_responsive-sizes_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_responsive-sizes_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_responsive-sizes_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_responsive-sizes_bright--enabled"
        })
      })
    }),
    references: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_references_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_references_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_references_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_references_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_references_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_references_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_references_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_references_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_references_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_references_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_references_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_references_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_references_primary--hover"
        }),
        active: freeze({
          name: "window-tools_references_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_references_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_references_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_references_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_references_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_references_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_references_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_references_bright--enabled"
        })
      })
    }),
    properties: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_properties_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_properties_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_properties_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_properties_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_properties_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_properties_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_properties_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_properties_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_properties_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_properties_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_properties_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_properties_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_properties_primary--hover"
        }),
        active: freeze({
          name: "window-tools_properties_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_properties_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_properties_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_properties_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_properties_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_properties_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_properties_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_properties_bright--enabled"
        })
      })
    }),
    preferences: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_preferences_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_preferences_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_preferences_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_preferences_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_preferences_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_preferences_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_preferences_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_preferences_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_preferences_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_preferences_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_preferences_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_preferences_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_preferences_primary--hover"
        }),
        active: freeze({
          name: "window-tools_preferences_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_preferences_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_preferences_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_preferences_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_preferences_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_preferences_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_preferences_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_preferences_bright--enabled"
        })
      })
    }),
    "performance-test-objects": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_performance-test-objects_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_performance-test-objects_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_performance-test-objects_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_performance-test-objects_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_performance-test-objects_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_performance-test-objects_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_performance-test-objects_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_performance-test-objects_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_performance-test-objects_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_performance-test-objects_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_performance-test-objects_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_performance-test-objects_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_performance-test-objects_primary--hover"
        }),
        active: freeze({
          name: "window-tools_performance-test-objects_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_performance-test-objects_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_performance-test-objects_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_performance-test-objects_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_performance-test-objects_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_performance-test-objects_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_performance-test-objects_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_performance-test-objects_bright--enabled"
        })
      })
    }),
    output: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_output_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_output_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_output_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_output_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_output_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_output_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_output_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_output_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_output_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_output_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_output_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_output_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_output_primary--hover"
        }),
        active: freeze({
          name: "window-tools_output_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_output_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_output_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_output_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_output_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_output_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_output_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_output_bright--enabled"
        })
      })
    }),
    logout: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_logout_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_logout_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_logout_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_logout_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_logout_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_logout_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_logout_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_logout_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_logout_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_logout_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_logout_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_logout_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_logout_primary--hover"
        }),
        active: freeze({
          name: "window-tools_logout_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_logout_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_logout_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_logout_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_logout_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_logout_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_logout_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_logout_bright--enabled"
        })
      })
    }),
    "last-changes-view": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_last-changes-view_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_last-changes-view_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_last-changes-view_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_last-changes-view_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_last-changes-view_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_last-changes-view_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_last-changes-view_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_last-changes-view_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_last-changes-view_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_last-changes-view_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_last-changes-view_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_last-changes-view_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_last-changes-view_primary--hover"
        }),
        active: freeze({
          name: "window-tools_last-changes-view_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_last-changes-view_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_last-changes-view_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_last-changes-view_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_last-changes-view_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_last-changes-view_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_last-changes-view_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_last-changes-view_bright--enabled"
        })
      })
    }),
    "kb-explorer": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_kb-explorer_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_kb-explorer_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_kb-explorer_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_kb-explorer_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_kb-explorer_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_kb-explorer_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_kb-explorer_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_kb-explorer_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_kb-explorer_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_kb-explorer_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_kb-explorer_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_kb-explorer_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_kb-explorer_primary--hover"
        }),
        active: freeze({
          name: "window-tools_kb-explorer_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_kb-explorer_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_kb-explorer_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_kb-explorer_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_kb-explorer_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_kb-explorer_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_kb-explorer_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_kb-explorer_bright--enabled"
        })
      })
    }),
    "indexer-monitor": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_indexer-monitor_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_indexer-monitor_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_indexer-monitor_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_indexer-monitor_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_indexer-monitor_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_indexer-monitor_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_indexer-monitor_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_indexer-monitor_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_indexer-monitor_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_indexer-monitor_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_indexer-monitor_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_indexer-monitor_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_indexer-monitor_primary--hover"
        }),
        active: freeze({
          name: "window-tools_indexer-monitor_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_indexer-monitor_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_indexer-monitor_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_indexer-monitor_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_indexer-monitor_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_indexer-monitor_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_indexer-monitor_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_indexer-monitor_bright--enabled"
        })
      })
    }),
    history: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_history_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_history_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_history_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_history_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_history_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_history_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_history_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_history_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_history_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_history_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_history_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_history_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_history_primary--hover"
        }),
        active: freeze({
          name: "window-tools_history_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_history_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_history_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_history_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_history_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_history_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_history_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_history_bright--enabled"
        })
      })
    }),
    "genexus-cloud": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_genexus-cloud_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_genexus-cloud_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_genexus-cloud_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_genexus-cloud_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_genexus-cloud_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_genexus-cloud_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_genexus-cloud_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_genexus-cloud_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_genexus-cloud_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_genexus-cloud_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_genexus-cloud_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_genexus-cloud_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_genexus-cloud_primary--hover"
        }),
        active: freeze({
          name: "window-tools_genexus-cloud_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_genexus-cloud_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_genexus-cloud_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_genexus-cloud_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_genexus-cloud_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_genexus-cloud_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_genexus-cloud_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_genexus-cloud_bright--enabled"
        })
      })
    }),
    frontend: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_frontend_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_frontend_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_frontend_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_frontend_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_frontend_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_frontend_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_frontend_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_frontend_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_frontend_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_frontend_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_frontend_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_frontend_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_frontend_primary--hover"
        }),
        active: freeze({
          name: "window-tools_frontend_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_frontend_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_frontend_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_frontend_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_frontend_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_frontend_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_frontend_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_frontend_bright--enabled"
        })
      })
    }),
    filter: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_filter_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_filter_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_filter_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_filter_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_filter_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_filter_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_filter_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_filter_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_filter_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_filter_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_filter_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_filter_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_filter_primary--hover"
        }),
        active: freeze({
          name: "window-tools_filter_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_filter_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_filter_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_filter_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_filter_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_filter_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_filter_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_filter_bright--enabled"
        })
      })
    }),
    "filter-conditions": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_filter-conditions_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_filter-conditions_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_filter-conditions_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_filter-conditions_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_filter-conditions_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_filter-conditions_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_filter-conditions_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_filter-conditions_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_filter-conditions_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_filter-conditions_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_filter-conditions_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_filter-conditions_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_filter-conditions_primary--hover"
        }),
        active: freeze({
          name: "window-tools_filter-conditions_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_filter-conditions_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_filter-conditions_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_filter-conditions_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_filter-conditions_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_filter-conditions_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_filter-conditions_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_filter-conditions_bright--enabled"
        })
      })
    }),
    "error-list": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_error-list_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_error-list_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_error-list_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_error-list_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_error-list_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_error-list_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_error-list_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_error-list_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_error-list_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_error-list_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_error-list_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_error-list_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_error-list_primary--hover"
        }),
        active: freeze({
          name: "window-tools_error-list_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_error-list_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_error-list_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_error-list_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_error-list_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_error-list_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_error-list_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_error-list_bright--enabled"
        })
      })
    }),
    debugx: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_debugx_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_debugx_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_debugx_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_debugx_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_debugx_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_debugx_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_debugx_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_debugx_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_debugx_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_debugx_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_debugx_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_debugx_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_debugx_primary--hover"
        }),
        active: freeze({
          name: "window-tools_debugx_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_debugx_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_debugx_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_debugx_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_debugx_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_debugx_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_debugx_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_debugx_bright--enabled"
        })
      })
    }),
    datastores: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_datastores_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_datastores_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_datastores_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_datastores_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_datastores_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_datastores_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_datastores_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_datastores_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_datastores_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_datastores_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_datastores_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_datastores_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_datastores_primary--hover"
        }),
        active: freeze({
          name: "window-tools_datastores_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_datastores_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_datastores_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_datastores_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_datastores_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_datastores_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_datastores_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_datastores_bright--enabled"
        })
      })
    }),
    "category-groups": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_category-groups_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_category-groups_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_category-groups_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_category-groups_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_category-groups_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_category-groups_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_category-groups_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_category-groups_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_category-groups_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_category-groups_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_category-groups_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_category-groups_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_category-groups_primary--hover"
        }),
        active: freeze({
          name: "window-tools_category-groups_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_category-groups_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_category-groups_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_category-groups_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_category-groups_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_category-groups_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_category-groups_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_category-groups_bright--enabled"
        })
      })
    }),
    breakpoints: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_breakpoints_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_breakpoints_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_breakpoints_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_breakpoints_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_breakpoints_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_breakpoints_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_breakpoints_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_breakpoints_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_breakpoints_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_breakpoints_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_breakpoints_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_breakpoints_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_breakpoints_primary--hover"
        }),
        active: freeze({
          name: "window-tools_breakpoints_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_breakpoints_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_breakpoints_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_breakpoints_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_breakpoints_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_breakpoints_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_breakpoints_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_breakpoints_bright--enabled"
        })
      })
    }),
    backend: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_backend_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_backend_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_backend_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_backend_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_backend_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_backend_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_backend_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_backend_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_backend_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_backend_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_backend_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_backend_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_backend_primary--hover"
        }),
        active: freeze({
          name: "window-tools_backend_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_backend_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_backend_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_backend_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_backend_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_backend_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_backend_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_backend_bright--enabled"
        })
      })
    }),
    "alphabetical-order": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "window-tools_alphabetical-order_on-surface--enabled"
        }),
        hover: freeze({
          name: "window-tools_alphabetical-order_on-surface--hover"
        }),
        active: freeze({
          name: "window-tools_alphabetical-order_on-surface--active"
        }),
        disabled: freeze({
          name: "window-tools_alphabetical-order_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "window-tools_alphabetical-order_on-primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_alphabetical-order_on-primary--hover"
        }),
        active: freeze({
          name: "window-tools_alphabetical-order_on-primary--active"
        }),
        disabled: freeze({
          name: "window-tools_alphabetical-order_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "window-tools_alphabetical-order_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "window-tools_alphabetical-order_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "window-tools_alphabetical-order_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "window-tools_alphabetical-order_primary--enabled"
        }),
        hover: freeze({
          name: "window-tools_alphabetical-order_primary--hover"
        }),
        active: freeze({
          name: "window-tools_alphabetical-order_primary--active"
        }),
        disabled: freeze({
          name: "window-tools_alphabetical-order_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "window-tools_alphabetical-order_neutral--enabled"
        }),
        hover: freeze({
          name: "window-tools_alphabetical-order_neutral--hover"
        }),
        active: freeze({
          name: "window-tools_alphabetical-order_neutral--active"
        }),
        disabled: freeze({
          name: "window-tools_alphabetical-order_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "window-tools_alphabetical-order_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "window-tools_alphabetical-order_bright--enabled"
        })
      })
    })
  }),
  system: freeze({
    "zoom-out": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_zoom-out_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_zoom-out_on-surface--hover"
        }),
        active: freeze({
          name: "system_zoom-out_on-surface--active"
        }),
        disabled: freeze({
          name: "system_zoom-out_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_zoom-out_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_zoom-out_on-primary--hover"
        }),
        active: freeze({
          name: "system_zoom-out_on-primary--active"
        }),
        disabled: freeze({
          name: "system_zoom-out_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_zoom-out_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_zoom-out_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_zoom-out_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_zoom-out_primary--enabled"
        }),
        hover: freeze({
          name: "system_zoom-out_primary--hover"
        }),
        active: freeze({
          name: "system_zoom-out_primary--active"
        }),
        disabled: freeze({
          name: "system_zoom-out_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_zoom-out_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_zoom-out_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_zoom-out_error-actionable--hover"
        }),
        active: freeze({
          name: "system_zoom-out_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_zoom-out_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_zoom-out_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_zoom-out_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_zoom-out_neutral--enabled"
        }),
        hover: freeze({
          name: "system_zoom-out_neutral--hover"
        }),
        active: freeze({
          name: "system_zoom-out_neutral--active"
        }),
        disabled: freeze({
          name: "system_zoom-out_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_zoom-out_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_zoom-out_bright--enabled"
        })
      })
    }),
    "zoom-in": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_zoom-in_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_zoom-in_on-surface--hover"
        }),
        active: freeze({
          name: "system_zoom-in_on-surface--active"
        }),
        disabled: freeze({
          name: "system_zoom-in_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_zoom-in_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_zoom-in_on-primary--hover"
        }),
        active: freeze({
          name: "system_zoom-in_on-primary--active"
        }),
        disabled: freeze({
          name: "system_zoom-in_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_zoom-in_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_zoom-in_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_zoom-in_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_zoom-in_primary--enabled"
        }),
        hover: freeze({
          name: "system_zoom-in_primary--hover"
        }),
        active: freeze({
          name: "system_zoom-in_primary--active"
        }),
        disabled: freeze({
          name: "system_zoom-in_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_zoom-in_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_zoom-in_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_zoom-in_error-actionable--hover"
        }),
        active: freeze({
          name: "system_zoom-in_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_zoom-in_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_zoom-in_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_zoom-in_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_zoom-in_neutral--enabled"
        }),
        hover: freeze({
          name: "system_zoom-in_neutral--hover"
        }),
        active: freeze({
          name: "system_zoom-in_neutral--active"
        }),
        disabled: freeze({
          name: "system_zoom-in_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_zoom-in_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_zoom-in_bright--enabled"
        })
      })
    }),
    warning: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_warning_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_warning_on-surface--hover"
        }),
        active: freeze({
          name: "system_warning_on-surface--active"
        }),
        disabled: freeze({
          name: "system_warning_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_warning_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_warning_on-primary--hover"
        }),
        active: freeze({
          name: "system_warning_on-primary--active"
        }),
        disabled: freeze({
          name: "system_warning_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_warning_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_warning_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_warning_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_warning_primary--enabled"
        }),
        hover: freeze({
          name: "system_warning_primary--hover"
        }),
        active: freeze({
          name: "system_warning_primary--active"
        }),
        disabled: freeze({
          name: "system_warning_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_warning_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_warning_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_warning_error-actionable--hover"
        }),
        active: freeze({
          name: "system_warning_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_warning_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_warning_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_warning_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_warning_neutral--enabled"
        }),
        hover: freeze({
          name: "system_warning_neutral--hover"
        }),
        active: freeze({
          name: "system_warning_neutral--active"
        }),
        disabled: freeze({
          name: "system_warning_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_warning_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_warning_bright--enabled"
        })
      })
    }),
    version: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_version_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_version_on-surface--hover"
        }),
        active: freeze({
          name: "system_version_on-surface--active"
        }),
        disabled: freeze({
          name: "system_version_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_version_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_version_on-primary--hover"
        }),
        active: freeze({
          name: "system_version_on-primary--active"
        }),
        disabled: freeze({
          name: "system_version_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_version_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_version_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_version_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_version_primary--enabled"
        }),
        hover: freeze({
          name: "system_version_primary--hover"
        }),
        active: freeze({
          name: "system_version_primary--active"
        }),
        disabled: freeze({
          name: "system_version_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_version_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_version_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_version_error-actionable--hover"
        }),
        active: freeze({
          name: "system_version_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_version_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_version_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_version_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_version_neutral--enabled"
        }),
        hover: freeze({
          name: "system_version_neutral--hover"
        }),
        active: freeze({
          name: "system_version_neutral--active"
        }),
        disabled: freeze({
          name: "system_version_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_version_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_version_bright--enabled"
        })
      })
    }),
    user: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_user_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_user_on-surface--hover"
        }),
        active: freeze({
          name: "system_user_on-surface--active"
        }),
        disabled: freeze({
          name: "system_user_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_user_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_user_on-primary--hover"
        }),
        active: freeze({
          name: "system_user_on-primary--active"
        }),
        disabled: freeze({
          name: "system_user_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_user_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_user_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_user_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_user_primary--enabled"
        }),
        hover: freeze({
          name: "system_user_primary--hover"
        }),
        active: freeze({
          name: "system_user_primary--active"
        }),
        disabled: freeze({
          name: "system_user_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_user_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_user_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_user_error-actionable--hover"
        }),
        active: freeze({
          name: "system_user_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_user_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_user_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_user_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_user_neutral--enabled"
        }),
        hover: freeze({
          name: "system_user_neutral--hover"
        }),
        active: freeze({
          name: "system_user_neutral--active"
        }),
        disabled: freeze({
          name: "system_user_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_user_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_user_bright--enabled"
        })
      })
    }),
    upload: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_upload_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_upload_on-surface--hover"
        }),
        active: freeze({
          name: "system_upload_on-surface--active"
        }),
        disabled: freeze({
          name: "system_upload_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_upload_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_upload_on-primary--hover"
        }),
        active: freeze({
          name: "system_upload_on-primary--active"
        }),
        disabled: freeze({
          name: "system_upload_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_upload_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_upload_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_upload_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_upload_primary--enabled"
        }),
        hover: freeze({
          name: "system_upload_primary--hover"
        }),
        active: freeze({
          name: "system_upload_primary--active"
        }),
        disabled: freeze({
          name: "system_upload_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_upload_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_upload_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_upload_error-actionable--hover"
        }),
        active: freeze({
          name: "system_upload_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_upload_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_upload_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_upload_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_upload_neutral--enabled"
        }),
        hover: freeze({
          name: "system_upload_neutral--hover"
        }),
        active: freeze({
          name: "system_upload_neutral--active"
        }),
        disabled: freeze({
          name: "system_upload_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_upload_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_upload_bright--enabled"
        })
      })
    }),
    undo: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_undo_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_undo_on-surface--hover"
        }),
        active: freeze({
          name: "system_undo_on-surface--active"
        }),
        disabled: freeze({
          name: "system_undo_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_undo_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_undo_on-primary--hover"
        }),
        active: freeze({
          name: "system_undo_on-primary--active"
        }),
        disabled: freeze({
          name: "system_undo_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_undo_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_undo_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_undo_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_undo_primary--enabled"
        }),
        hover: freeze({
          name: "system_undo_primary--hover"
        }),
        active: freeze({
          name: "system_undo_primary--active"
        }),
        disabled: freeze({
          name: "system_undo_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_undo_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_undo_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_undo_error-actionable--hover"
        }),
        active: freeze({
          name: "system_undo_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_undo_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_undo_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_undo_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_undo_neutral--enabled"
        }),
        hover: freeze({
          name: "system_undo_neutral--hover"
        }),
        active: freeze({
          name: "system_undo_neutral--active"
        }),
        disabled: freeze({
          name: "system_undo_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_undo_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_undo_bright--enabled"
        })
      })
    }),
    tools: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_tools_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_tools_on-surface--hover"
        }),
        active: freeze({
          name: "system_tools_on-surface--active"
        }),
        disabled: freeze({
          name: "system_tools_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_tools_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_tools_on-primary--hover"
        }),
        active: freeze({
          name: "system_tools_on-primary--active"
        }),
        disabled: freeze({
          name: "system_tools_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_tools_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_tools_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_tools_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_tools_primary--enabled"
        }),
        hover: freeze({
          name: "system_tools_primary--hover"
        }),
        active: freeze({
          name: "system_tools_primary--active"
        }),
        disabled: freeze({
          name: "system_tools_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_tools_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_tools_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_tools_error-actionable--hover"
        }),
        active: freeze({
          name: "system_tools_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_tools_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_tools_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_tools_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_tools_neutral--enabled"
        }),
        hover: freeze({
          name: "system_tools_neutral--hover"
        }),
        active: freeze({
          name: "system_tools_neutral--active"
        }),
        disabled: freeze({
          name: "system_tools_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_tools_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_tools_bright--enabled"
        })
      })
    }),
    "toggle-theme": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_toggle-theme_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_toggle-theme_on-surface--hover"
        }),
        active: freeze({
          name: "system_toggle-theme_on-surface--active"
        }),
        disabled: freeze({
          name: "system_toggle-theme_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_toggle-theme_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_toggle-theme_on-primary--hover"
        }),
        active: freeze({
          name: "system_toggle-theme_on-primary--active"
        }),
        disabled: freeze({
          name: "system_toggle-theme_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_toggle-theme_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_toggle-theme_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_toggle-theme_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_toggle-theme_primary--enabled"
        }),
        hover: freeze({
          name: "system_toggle-theme_primary--hover"
        }),
        active: freeze({
          name: "system_toggle-theme_primary--active"
        }),
        disabled: freeze({
          name: "system_toggle-theme_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_toggle-theme_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_toggle-theme_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_toggle-theme_error-actionable--hover"
        }),
        active: freeze({
          name: "system_toggle-theme_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_toggle-theme_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_toggle-theme_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_toggle-theme_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_toggle-theme_neutral--enabled"
        }),
        hover: freeze({
          name: "system_toggle-theme_neutral--hover"
        }),
        active: freeze({
          name: "system_toggle-theme_neutral--active"
        }),
        disabled: freeze({
          name: "system_toggle-theme_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_toggle-theme_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_toggle-theme_bright--enabled"
        })
      })
    }),
    time: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_time_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_time_on-surface--hover"
        }),
        active: freeze({
          name: "system_time_on-surface--active"
        }),
        disabled: freeze({
          name: "system_time_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_time_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_time_on-primary--hover"
        }),
        active: freeze({
          name: "system_time_on-primary--active"
        }),
        disabled: freeze({
          name: "system_time_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_time_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_time_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_time_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_time_primary--enabled"
        }),
        hover: freeze({
          name: "system_time_primary--hover"
        }),
        active: freeze({
          name: "system_time_primary--active"
        }),
        disabled: freeze({
          name: "system_time_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_time_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_time_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_time_error-actionable--hover"
        }),
        active: freeze({
          name: "system_time_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_time_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_time_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_time_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_time_neutral--enabled"
        }),
        hover: freeze({
          name: "system_time_neutral--hover"
        }),
        active: freeze({
          name: "system_time_neutral--active"
        }),
        disabled: freeze({
          name: "system_time_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_time_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_time_bright--enabled"
        })
      })
    }),
    thunder: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_thunder_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_thunder_on-surface--hover"
        }),
        active: freeze({
          name: "system_thunder_on-surface--active"
        }),
        disabled: freeze({
          name: "system_thunder_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_thunder_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_thunder_on-primary--hover"
        }),
        active: freeze({
          name: "system_thunder_on-primary--active"
        }),
        disabled: freeze({
          name: "system_thunder_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_thunder_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_thunder_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_thunder_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_thunder_primary--enabled"
        }),
        hover: freeze({
          name: "system_thunder_primary--hover"
        }),
        active: freeze({
          name: "system_thunder_primary--active"
        }),
        disabled: freeze({
          name: "system_thunder_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_thunder_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_thunder_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_thunder_error-actionable--hover"
        }),
        active: freeze({
          name: "system_thunder_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_thunder_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_thunder_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_thunder_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_thunder_neutral--enabled"
        }),
        hover: freeze({
          name: "system_thunder_neutral--hover"
        }),
        active: freeze({
          name: "system_thunder_neutral--active"
        }),
        disabled: freeze({
          name: "system_thunder_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_thunder_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_thunder_bright--enabled"
        })
      })
    }),
    "thumb-up": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_thumb-up_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_thumb-up_on-surface--hover"
        }),
        active: freeze({
          name: "system_thumb-up_on-surface--active"
        }),
        disabled: freeze({
          name: "system_thumb-up_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_thumb-up_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_thumb-up_on-primary--hover"
        }),
        active: freeze({
          name: "system_thumb-up_on-primary--active"
        }),
        disabled: freeze({
          name: "system_thumb-up_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_thumb-up_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_thumb-up_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_thumb-up_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_thumb-up_primary--enabled"
        }),
        hover: freeze({
          name: "system_thumb-up_primary--hover"
        }),
        active: freeze({
          name: "system_thumb-up_primary--active"
        }),
        disabled: freeze({
          name: "system_thumb-up_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_thumb-up_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_thumb-up_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_thumb-up_error-actionable--hover"
        }),
        active: freeze({
          name: "system_thumb-up_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_thumb-up_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_thumb-up_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_thumb-up_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_thumb-up_neutral--enabled"
        }),
        hover: freeze({
          name: "system_thumb-up_neutral--hover"
        }),
        active: freeze({
          name: "system_thumb-up_neutral--active"
        }),
        disabled: freeze({
          name: "system_thumb-up_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_thumb-up_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_thumb-up_bright--enabled"
        })
      })
    }),
    "thumb-down": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_thumb-down_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_thumb-down_on-surface--hover"
        }),
        active: freeze({
          name: "system_thumb-down_on-surface--active"
        }),
        disabled: freeze({
          name: "system_thumb-down_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_thumb-down_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_thumb-down_on-primary--hover"
        }),
        active: freeze({
          name: "system_thumb-down_on-primary--active"
        }),
        disabled: freeze({
          name: "system_thumb-down_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_thumb-down_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_thumb-down_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_thumb-down_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_thumb-down_primary--enabled"
        }),
        hover: freeze({
          name: "system_thumb-down_primary--hover"
        }),
        active: freeze({
          name: "system_thumb-down_primary--active"
        }),
        disabled: freeze({
          name: "system_thumb-down_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_thumb-down_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_thumb-down_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_thumb-down_error-actionable--hover"
        }),
        active: freeze({
          name: "system_thumb-down_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_thumb-down_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_thumb-down_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_thumb-down_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_thumb-down_neutral--enabled"
        }),
        hover: freeze({
          name: "system_thumb-down_neutral--hover"
        }),
        active: freeze({
          name: "system_thumb-down_neutral--active"
        }),
        disabled: freeze({
          name: "system_thumb-down_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_thumb-down_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_thumb-down_bright--enabled"
        })
      })
    }),
    "text-compare": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_text-compare_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_text-compare_on-surface--hover"
        }),
        active: freeze({
          name: "system_text-compare_on-surface--active"
        }),
        disabled: freeze({
          name: "system_text-compare_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_text-compare_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_text-compare_on-primary--hover"
        }),
        active: freeze({
          name: "system_text-compare_on-primary--active"
        }),
        disabled: freeze({
          name: "system_text-compare_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_text-compare_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_text-compare_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_text-compare_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_text-compare_primary--enabled"
        }),
        hover: freeze({
          name: "system_text-compare_primary--hover"
        }),
        active: freeze({
          name: "system_text-compare_primary--active"
        }),
        disabled: freeze({
          name: "system_text-compare_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_text-compare_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_text-compare_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_text-compare_error-actionable--hover"
        }),
        active: freeze({
          name: "system_text-compare_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_text-compare_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_text-compare_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_text-compare_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_text-compare_neutral--enabled"
        }),
        hover: freeze({
          name: "system_text-compare_neutral--hover"
        }),
        active: freeze({
          name: "system_text-compare_neutral--active"
        }),
        disabled: freeze({
          name: "system_text-compare_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_text-compare_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_text-compare_bright--enabled"
        })
      })
    }),
    table: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_table_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_table_on-surface--hover"
        }),
        active: freeze({
          name: "system_table_on-surface--active"
        }),
        disabled: freeze({
          name: "system_table_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_table_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_table_on-primary--hover"
        }),
        active: freeze({
          name: "system_table_on-primary--active"
        }),
        disabled: freeze({
          name: "system_table_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_table_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_table_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_table_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_table_primary--enabled"
        }),
        hover: freeze({
          name: "system_table_primary--hover"
        }),
        active: freeze({
          name: "system_table_primary--active"
        }),
        disabled: freeze({
          name: "system_table_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_table_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_table_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_table_error-actionable--hover"
        }),
        active: freeze({
          name: "system_table_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_table_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_table_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_table_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_table_neutral--enabled"
        }),
        hover: freeze({
          name: "system_table_neutral--hover"
        }),
        active: freeze({
          name: "system_table_neutral--active"
        }),
        disabled: freeze({
          name: "system_table_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_table_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_table_bright--enabled"
        })
      })
    }),
    substract: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_substract_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_substract_on-surface--hover"
        }),
        active: freeze({
          name: "system_substract_on-surface--active"
        }),
        disabled: freeze({
          name: "system_substract_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_substract_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_substract_on-primary--hover"
        }),
        active: freeze({
          name: "system_substract_on-primary--active"
        }),
        disabled: freeze({
          name: "system_substract_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_substract_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_substract_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_substract_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_substract_primary--enabled"
        }),
        hover: freeze({
          name: "system_substract_primary--hover"
        }),
        active: freeze({
          name: "system_substract_primary--active"
        }),
        disabled: freeze({
          name: "system_substract_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_substract_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_substract_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_substract_error-actionable--hover"
        }),
        active: freeze({
          name: "system_substract_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_substract_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_substract_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_substract_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_substract_neutral--enabled"
        }),
        hover: freeze({
          name: "system_substract_neutral--hover"
        }),
        active: freeze({
          name: "system_substract_neutral--active"
        }),
        disabled: freeze({
          name: "system_substract_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_substract_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_substract_bright--enabled"
        })
      })
    }),
    star: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_star_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_star_on-surface--hover"
        }),
        active: freeze({
          name: "system_star_on-surface--active"
        }),
        disabled: freeze({
          name: "system_star_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_star_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_star_on-primary--hover"
        }),
        active: freeze({
          name: "system_star_on-primary--active"
        }),
        disabled: freeze({
          name: "system_star_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_star_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_star_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_star_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_star_primary--enabled"
        }),
        hover: freeze({
          name: "system_star_primary--hover"
        }),
        active: freeze({
          name: "system_star_primary--active"
        }),
        disabled: freeze({
          name: "system_star_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_star_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_star_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_star_error-actionable--hover"
        }),
        active: freeze({
          name: "system_star_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_star_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_star_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_star_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_star_neutral--enabled"
        }),
        hover: freeze({
          name: "system_star_neutral--hover"
        }),
        active: freeze({
          name: "system_star_neutral--active"
        }),
        disabled: freeze({
          name: "system_star_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_star_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_star_bright--enabled"
        })
      })
    }),
    "star-unselected": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_star-unselected_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_star-unselected_on-surface--hover"
        }),
        active: freeze({
          name: "system_star-unselected_on-surface--active"
        }),
        disabled: freeze({
          name: "system_star-unselected_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_star-unselected_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_star-unselected_on-primary--hover"
        }),
        active: freeze({
          name: "system_star-unselected_on-primary--active"
        }),
        disabled: freeze({
          name: "system_star-unselected_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_star-unselected_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_star-unselected_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_star-unselected_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_star-unselected_primary--enabled"
        }),
        hover: freeze({
          name: "system_star-unselected_primary--hover"
        }),
        active: freeze({
          name: "system_star-unselected_primary--active"
        }),
        disabled: freeze({
          name: "system_star-unselected_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_star-unselected_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_star-unselected_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_star-unselected_error-actionable--hover"
        }),
        active: freeze({
          name: "system_star-unselected_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_star-unselected_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_star-unselected_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_star-unselected_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_star-unselected_neutral--enabled"
        }),
        hover: freeze({
          name: "system_star-unselected_neutral--hover"
        }),
        active: freeze({
          name: "system_star-unselected_neutral--active"
        }),
        disabled: freeze({
          name: "system_star-unselected_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_star-unselected_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_star-unselected_bright--enabled"
        })
      })
    }),
    show: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_show_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_show_on-surface--hover"
        }),
        active: freeze({
          name: "system_show_on-surface--active"
        }),
        disabled: freeze({
          name: "system_show_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_show_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_show_on-primary--hover"
        }),
        active: freeze({
          name: "system_show_on-primary--active"
        }),
        disabled: freeze({
          name: "system_show_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_show_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_show_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_show_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_show_primary--enabled"
        }),
        hover: freeze({
          name: "system_show_primary--hover"
        }),
        active: freeze({
          name: "system_show_primary--active"
        }),
        disabled: freeze({
          name: "system_show_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_show_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_show_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_show_error-actionable--hover"
        }),
        active: freeze({
          name: "system_show_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_show_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_show_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_show_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_show_neutral--enabled"
        }),
        hover: freeze({
          name: "system_show_neutral--hover"
        }),
        active: freeze({
          name: "system_show_neutral--active"
        }),
        disabled: freeze({
          name: "system_show_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_show_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_show_bright--enabled"
        })
      })
    }),
    share: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_share_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_share_on-surface--hover"
        }),
        active: freeze({
          name: "system_share_on-surface--active"
        }),
        disabled: freeze({
          name: "system_share_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_share_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_share_on-primary--hover"
        }),
        active: freeze({
          name: "system_share_on-primary--active"
        }),
        disabled: freeze({
          name: "system_share_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_share_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_share_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_share_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_share_primary--enabled"
        }),
        hover: freeze({
          name: "system_share_primary--hover"
        }),
        active: freeze({
          name: "system_share_primary--active"
        }),
        disabled: freeze({
          name: "system_share_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_share_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_share_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_share_error-actionable--hover"
        }),
        active: freeze({
          name: "system_share_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_share_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_share_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_share_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_share_neutral--enabled"
        }),
        hover: freeze({
          name: "system_share_neutral--hover"
        }),
        active: freeze({
          name: "system_share_neutral--active"
        }),
        disabled: freeze({
          name: "system_share_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_share_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_share_bright--enabled"
        })
      })
    }),
    settings: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_settings_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_settings_on-surface--hover"
        }),
        active: freeze({
          name: "system_settings_on-surface--active"
        }),
        disabled: freeze({
          name: "system_settings_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_settings_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_settings_on-primary--hover"
        }),
        active: freeze({
          name: "system_settings_on-primary--active"
        }),
        disabled: freeze({
          name: "system_settings_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_settings_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_settings_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_settings_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_settings_primary--enabled"
        }),
        hover: freeze({
          name: "system_settings_primary--hover"
        }),
        active: freeze({
          name: "system_settings_primary--active"
        }),
        disabled: freeze({
          name: "system_settings_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_settings_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_settings_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_settings_error-actionable--hover"
        }),
        active: freeze({
          name: "system_settings_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_settings_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_settings_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_settings_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_settings_neutral--enabled"
        }),
        hover: freeze({
          name: "system_settings_neutral--hover"
        }),
        active: freeze({
          name: "system_settings_neutral--active"
        }),
        disabled: freeze({
          name: "system_settings_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_settings_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_settings_bright--enabled"
        })
      })
    }),
    send: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_send_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_send_on-surface--hover"
        }),
        active: freeze({
          name: "system_send_on-surface--active"
        }),
        disabled: freeze({
          name: "system_send_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_send_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_send_on-primary--hover"
        }),
        active: freeze({
          name: "system_send_on-primary--active"
        }),
        disabled: freeze({
          name: "system_send_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_send_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_send_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_send_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_send_primary--enabled"
        }),
        hover: freeze({
          name: "system_send_primary--hover"
        }),
        active: freeze({
          name: "system_send_primary--active"
        }),
        disabled: freeze({
          name: "system_send_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_send_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_send_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_send_error-actionable--hover"
        }),
        active: freeze({
          name: "system_send_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_send_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_send_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_send_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_send_neutral--enabled"
        }),
        hover: freeze({
          name: "system_send_neutral--hover"
        }),
        active: freeze({
          name: "system_send_neutral--active"
        }),
        disabled: freeze({
          name: "system_send_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_send_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_send_bright--enabled"
        })
      })
    }),
    search: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_search_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_search_on-surface--hover"
        }),
        active: freeze({
          name: "system_search_on-surface--active"
        }),
        disabled: freeze({
          name: "system_search_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_search_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_search_on-primary--hover"
        }),
        active: freeze({
          name: "system_search_on-primary--active"
        }),
        disabled: freeze({
          name: "system_search_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_search_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_search_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_search_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_search_primary--enabled"
        }),
        hover: freeze({
          name: "system_search_primary--hover"
        }),
        active: freeze({
          name: "system_search_primary--active"
        }),
        disabled: freeze({
          name: "system_search_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_search_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_search_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_search_error-actionable--hover"
        }),
        active: freeze({
          name: "system_search_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_search_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_search_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_search_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_search_neutral--enabled"
        }),
        hover: freeze({
          name: "system_search_neutral--hover"
        }),
        active: freeze({
          name: "system_search_neutral--active"
        }),
        disabled: freeze({
          name: "system_search_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_search_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_search_bright--enabled"
        })
      })
    }),
    save: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_save_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_save_on-surface--hover"
        }),
        active: freeze({
          name: "system_save_on-surface--active"
        }),
        disabled: freeze({
          name: "system_save_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_save_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_save_on-primary--hover"
        }),
        active: freeze({
          name: "system_save_on-primary--active"
        }),
        disabled: freeze({
          name: "system_save_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_save_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_save_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_save_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_save_primary--enabled"
        }),
        hover: freeze({
          name: "system_save_primary--hover"
        }),
        active: freeze({
          name: "system_save_primary--active"
        }),
        disabled: freeze({
          name: "system_save_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_save_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_save_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_save_error-actionable--hover"
        }),
        active: freeze({
          name: "system_save_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_save_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_save_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_save_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_save_neutral--enabled"
        }),
        hover: freeze({
          name: "system_save_neutral--hover"
        }),
        active: freeze({
          name: "system_save_neutral--active"
        }),
        disabled: freeze({
          name: "system_save_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_save_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_save_bright--enabled"
        })
      })
    }),
    run: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_run_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_run_on-surface--hover"
        }),
        active: freeze({
          name: "system_run_on-surface--active"
        }),
        disabled: freeze({
          name: "system_run_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_run_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_run_on-primary--hover"
        }),
        active: freeze({
          name: "system_run_on-primary--active"
        }),
        disabled: freeze({
          name: "system_run_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_run_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_run_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_run_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_run_primary--enabled"
        }),
        hover: freeze({
          name: "system_run_primary--hover"
        }),
        active: freeze({
          name: "system_run_primary--active"
        }),
        disabled: freeze({
          name: "system_run_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_run_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_run_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_run_error-actionable--hover"
        }),
        active: freeze({
          name: "system_run_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_run_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_run_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_run_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_run_neutral--enabled"
        }),
        hover: freeze({
          name: "system_run_neutral--hover"
        }),
        active: freeze({
          name: "system_run_neutral--active"
        }),
        disabled: freeze({
          name: "system_run_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_run_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_run_bright--enabled"
        })
      })
    }),
    "right-panel-open": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_right-panel-open_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_right-panel-open_on-surface--hover"
        }),
        active: freeze({
          name: "system_right-panel-open_on-surface--active"
        }),
        disabled: freeze({
          name: "system_right-panel-open_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_right-panel-open_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_right-panel-open_on-primary--hover"
        }),
        active: freeze({
          name: "system_right-panel-open_on-primary--active"
        }),
        disabled: freeze({
          name: "system_right-panel-open_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_right-panel-open_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_right-panel-open_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_right-panel-open_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_right-panel-open_primary--enabled"
        }),
        hover: freeze({
          name: "system_right-panel-open_primary--hover"
        }),
        active: freeze({
          name: "system_right-panel-open_primary--active"
        }),
        disabled: freeze({
          name: "system_right-panel-open_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_right-panel-open_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_right-panel-open_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_right-panel-open_error-actionable--hover"
        }),
        active: freeze({
          name: "system_right-panel-open_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_right-panel-open_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_right-panel-open_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_right-panel-open_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_right-panel-open_neutral--enabled"
        }),
        hover: freeze({
          name: "system_right-panel-open_neutral--hover"
        }),
        active: freeze({
          name: "system_right-panel-open_neutral--active"
        }),
        disabled: freeze({
          name: "system_right-panel-open_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_right-panel-open_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_right-panel-open_bright--enabled"
        })
      })
    }),
    retry: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_retry_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_retry_on-surface--hover"
        }),
        active: freeze({
          name: "system_retry_on-surface--active"
        }),
        disabled: freeze({
          name: "system_retry_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_retry_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_retry_on-primary--hover"
        }),
        active: freeze({
          name: "system_retry_on-primary--active"
        }),
        disabled: freeze({
          name: "system_retry_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_retry_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_retry_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_retry_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_retry_primary--enabled"
        }),
        hover: freeze({
          name: "system_retry_primary--hover"
        }),
        active: freeze({
          name: "system_retry_primary--active"
        }),
        disabled: freeze({
          name: "system_retry_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_retry_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_retry_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_retry_error-actionable--hover"
        }),
        active: freeze({
          name: "system_retry_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_retry_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_retry_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_retry_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_retry_neutral--enabled"
        }),
        hover: freeze({
          name: "system_retry_neutral--hover"
        }),
        active: freeze({
          name: "system_retry_neutral--active"
        }),
        disabled: freeze({
          name: "system_retry_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_retry_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_retry_bright--enabled"
        })
      })
    }),
    refresh: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_refresh_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_refresh_on-surface--hover"
        }),
        active: freeze({
          name: "system_refresh_on-surface--active"
        }),
        disabled: freeze({
          name: "system_refresh_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_refresh_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_refresh_on-primary--hover"
        }),
        active: freeze({
          name: "system_refresh_on-primary--active"
        }),
        disabled: freeze({
          name: "system_refresh_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_refresh_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_refresh_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_refresh_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_refresh_primary--enabled"
        }),
        hover: freeze({
          name: "system_refresh_primary--hover"
        }),
        active: freeze({
          name: "system_refresh_primary--active"
        }),
        disabled: freeze({
          name: "system_refresh_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_refresh_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_refresh_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_refresh_error-actionable--hover"
        }),
        active: freeze({
          name: "system_refresh_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_refresh_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_refresh_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_refresh_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_refresh_neutral--enabled"
        }),
        hover: freeze({
          name: "system_refresh_neutral--hover"
        }),
        active: freeze({
          name: "system_refresh_neutral--active"
        }),
        disabled: freeze({
          name: "system_refresh_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_refresh_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_refresh_bright--enabled"
        })
      })
    }),
    query: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_query_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_query_on-surface--hover"
        }),
        active: freeze({
          name: "system_query_on-surface--active"
        }),
        disabled: freeze({
          name: "system_query_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_query_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_query_on-primary--hover"
        }),
        active: freeze({
          name: "system_query_on-primary--active"
        }),
        disabled: freeze({
          name: "system_query_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_query_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_query_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_query_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_query_primary--enabled"
        }),
        hover: freeze({
          name: "system_query_primary--hover"
        }),
        active: freeze({
          name: "system_query_primary--active"
        }),
        disabled: freeze({
          name: "system_query_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_query_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_query_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_query_error-actionable--hover"
        }),
        active: freeze({
          name: "system_query_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_query_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_query_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_query_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_query_neutral--enabled"
        }),
        hover: freeze({
          name: "system_query_neutral--hover"
        }),
        active: freeze({
          name: "system_query_neutral--active"
        }),
        disabled: freeze({
          name: "system_query_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_query_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_query_bright--enabled"
        })
      })
    }),
    "qr-code": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_qr-code_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_qr-code_on-surface--hover"
        }),
        active: freeze({
          name: "system_qr-code_on-surface--active"
        }),
        disabled: freeze({
          name: "system_qr-code_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_qr-code_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_qr-code_on-primary--hover"
        }),
        active: freeze({
          name: "system_qr-code_on-primary--active"
        }),
        disabled: freeze({
          name: "system_qr-code_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_qr-code_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_qr-code_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_qr-code_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_qr-code_primary--enabled"
        }),
        hover: freeze({
          name: "system_qr-code_primary--hover"
        }),
        active: freeze({
          name: "system_qr-code_primary--active"
        }),
        disabled: freeze({
          name: "system_qr-code_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_qr-code_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_qr-code_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_qr-code_error-actionable--hover"
        }),
        active: freeze({
          name: "system_qr-code_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_qr-code_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_qr-code_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_qr-code_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_qr-code_neutral--enabled"
        }),
        hover: freeze({
          name: "system_qr-code_neutral--hover"
        }),
        active: freeze({
          name: "system_qr-code_neutral--active"
        }),
        disabled: freeze({
          name: "system_qr-code_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_qr-code_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_qr-code_bright--enabled"
        })
      })
    }),
    publish: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_publish_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_publish_on-surface--hover"
        }),
        active: freeze({
          name: "system_publish_on-surface--active"
        }),
        disabled: freeze({
          name: "system_publish_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_publish_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_publish_on-primary--hover"
        }),
        active: freeze({
          name: "system_publish_on-primary--active"
        }),
        disabled: freeze({
          name: "system_publish_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_publish_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_publish_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_publish_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_publish_primary--enabled"
        }),
        hover: freeze({
          name: "system_publish_primary--hover"
        }),
        active: freeze({
          name: "system_publish_primary--active"
        }),
        disabled: freeze({
          name: "system_publish_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_publish_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_publish_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_publish_error-actionable--hover"
        }),
        active: freeze({
          name: "system_publish_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_publish_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_publish_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_publish_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_publish_neutral--enabled"
        }),
        hover: freeze({
          name: "system_publish_neutral--hover"
        }),
        active: freeze({
          name: "system_publish_neutral--active"
        }),
        disabled: freeze({
          name: "system_publish_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_publish_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_publish_bright--enabled"
        })
      })
    }),
    property: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_property_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_property_on-surface--hover"
        }),
        active: freeze({
          name: "system_property_on-surface--active"
        }),
        disabled: freeze({
          name: "system_property_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_property_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_property_on-primary--hover"
        }),
        active: freeze({
          name: "system_property_on-primary--active"
        }),
        disabled: freeze({
          name: "system_property_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_property_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_property_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_property_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_property_primary--enabled"
        }),
        hover: freeze({
          name: "system_property_primary--hover"
        }),
        active: freeze({
          name: "system_property_primary--active"
        }),
        disabled: freeze({
          name: "system_property_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_property_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_property_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_property_error-actionable--hover"
        }),
        active: freeze({
          name: "system_property_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_property_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_property_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_property_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_property_neutral--enabled"
        }),
        hover: freeze({
          name: "system_property_neutral--hover"
        }),
        active: freeze({
          name: "system_property_neutral--active"
        }),
        disabled: freeze({
          name: "system_property_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_property_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_property_bright--enabled"
        })
      })
    }),
    photo: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_photo_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_photo_on-surface--hover"
        }),
        active: freeze({
          name: "system_photo_on-surface--active"
        }),
        disabled: freeze({
          name: "system_photo_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_photo_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_photo_on-primary--hover"
        }),
        active: freeze({
          name: "system_photo_on-primary--active"
        }),
        disabled: freeze({
          name: "system_photo_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_photo_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_photo_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_photo_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_photo_primary--enabled"
        }),
        hover: freeze({
          name: "system_photo_primary--hover"
        }),
        active: freeze({
          name: "system_photo_primary--active"
        }),
        disabled: freeze({
          name: "system_photo_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_photo_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_photo_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_photo_error-actionable--hover"
        }),
        active: freeze({
          name: "system_photo_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_photo_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_photo_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_photo_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_photo_neutral--enabled"
        }),
        hover: freeze({
          name: "system_photo_neutral--hover"
        }),
        active: freeze({
          name: "system_photo_neutral--active"
        }),
        disabled: freeze({
          name: "system_photo_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_photo_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_photo_bright--enabled"
        })
      })
    }),
    pause: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_pause_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_pause_on-surface--hover"
        }),
        active: freeze({
          name: "system_pause_on-surface--active"
        }),
        disabled: freeze({
          name: "system_pause_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_pause_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_pause_on-primary--hover"
        }),
        active: freeze({
          name: "system_pause_on-primary--active"
        }),
        disabled: freeze({
          name: "system_pause_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_pause_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_pause_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_pause_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_pause_primary--enabled"
        }),
        hover: freeze({
          name: "system_pause_primary--hover"
        }),
        active: freeze({
          name: "system_pause_primary--active"
        }),
        disabled: freeze({
          name: "system_pause_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_pause_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_pause_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_pause_error-actionable--hover"
        }),
        active: freeze({
          name: "system_pause_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_pause_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_pause_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_pause_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_pause_neutral--enabled"
        }),
        hover: freeze({
          name: "system_pause_neutral--hover"
        }),
        active: freeze({
          name: "system_pause_neutral--active"
        }),
        disabled: freeze({
          name: "system_pause_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_pause_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_pause_bright--enabled"
        })
      })
    }),
    "order-numberically": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_order-numberically_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_order-numberically_on-surface--hover"
        }),
        active: freeze({
          name: "system_order-numberically_on-surface--active"
        }),
        disabled: freeze({
          name: "system_order-numberically_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_order-numberically_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_order-numberically_on-primary--hover"
        }),
        active: freeze({
          name: "system_order-numberically_on-primary--active"
        }),
        disabled: freeze({
          name: "system_order-numberically_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_order-numberically_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_order-numberically_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_order-numberically_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_order-numberically_primary--enabled"
        }),
        hover: freeze({
          name: "system_order-numberically_primary--hover"
        }),
        active: freeze({
          name: "system_order-numberically_primary--active"
        }),
        disabled: freeze({
          name: "system_order-numberically_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_order-numberically_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_order-numberically_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_order-numberically_error-actionable--hover"
        }),
        active: freeze({
          name: "system_order-numberically_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_order-numberically_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_order-numberically_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_order-numberically_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_order-numberically_neutral--enabled"
        }),
        hover: freeze({
          name: "system_order-numberically_neutral--hover"
        }),
        active: freeze({
          name: "system_order-numberically_neutral--active"
        }),
        disabled: freeze({
          name: "system_order-numberically_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_order-numberically_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_order-numberically_bright--enabled"
        })
      })
    }),
    "order-alphabetically": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_order-alphabetically_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_order-alphabetically_on-surface--hover"
        }),
        active: freeze({
          name: "system_order-alphabetically_on-surface--active"
        }),
        disabled: freeze({
          name: "system_order-alphabetically_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_order-alphabetically_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_order-alphabetically_on-primary--hover"
        }),
        active: freeze({
          name: "system_order-alphabetically_on-primary--active"
        }),
        disabled: freeze({
          name: "system_order-alphabetically_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_order-alphabetically_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_order-alphabetically_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_order-alphabetically_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_order-alphabetically_primary--enabled"
        }),
        hover: freeze({
          name: "system_order-alphabetically_primary--hover"
        }),
        active: freeze({
          name: "system_order-alphabetically_primary--active"
        }),
        disabled: freeze({
          name: "system_order-alphabetically_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_order-alphabetically_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_order-alphabetically_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_order-alphabetically_error-actionable--hover"
        }),
        active: freeze({
          name: "system_order-alphabetically_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_order-alphabetically_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_order-alphabetically_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_order-alphabetically_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_order-alphabetically_neutral--enabled"
        }),
        hover: freeze({
          name: "system_order-alphabetically_neutral--hover"
        }),
        active: freeze({
          name: "system_order-alphabetically_neutral--active"
        }),
        disabled: freeze({
          name: "system_order-alphabetically_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_order-alphabetically_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_order-alphabetically_bright--enabled"
        })
      })
    }),
    notification: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_notification_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_notification_on-surface--hover"
        }),
        active: freeze({
          name: "system_notification_on-surface--active"
        }),
        disabled: freeze({
          name: "system_notification_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_notification_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_notification_on-primary--hover"
        }),
        active: freeze({
          name: "system_notification_on-primary--active"
        }),
        disabled: freeze({
          name: "system_notification_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_notification_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_notification_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_notification_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_notification_primary--enabled"
        }),
        hover: freeze({
          name: "system_notification_primary--hover"
        }),
        active: freeze({
          name: "system_notification_primary--active"
        }),
        disabled: freeze({
          name: "system_notification_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_notification_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_notification_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_notification_error-actionable--hover"
        }),
        active: freeze({
          name: "system_notification_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_notification_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_notification_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_notification_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_notification_neutral--enabled"
        }),
        hover: freeze({
          name: "system_notification_neutral--hover"
        }),
        active: freeze({
          name: "system_notification_neutral--active"
        }),
        disabled: freeze({
          name: "system_notification_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_notification_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_notification_bright--enabled"
        })
      })
    }),
    news: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_news_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_news_on-surface--hover"
        }),
        active: freeze({
          name: "system_news_on-surface--active"
        }),
        disabled: freeze({
          name: "system_news_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_news_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_news_on-primary--hover"
        }),
        active: freeze({
          name: "system_news_on-primary--active"
        }),
        disabled: freeze({
          name: "system_news_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_news_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_news_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_news_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_news_primary--enabled"
        }),
        hover: freeze({
          name: "system_news_primary--hover"
        }),
        active: freeze({
          name: "system_news_primary--active"
        }),
        disabled: freeze({
          name: "system_news_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_news_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_news_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_news_error-actionable--hover"
        }),
        active: freeze({
          name: "system_news_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_news_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_news_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_news_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_news_neutral--enabled"
        }),
        hover: freeze({
          name: "system_news_neutral--hover"
        }),
        active: freeze({
          name: "system_news_neutral--active"
        }),
        disabled: freeze({
          name: "system_news_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_news_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_news_bright--enabled"
        })
      })
    }),
    "more-vertical": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_more-vertical_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_more-vertical_on-surface--hover"
        }),
        active: freeze({
          name: "system_more-vertical_on-surface--active"
        }),
        disabled: freeze({
          name: "system_more-vertical_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_more-vertical_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_more-vertical_on-primary--hover"
        }),
        active: freeze({
          name: "system_more-vertical_on-primary--active"
        }),
        disabled: freeze({
          name: "system_more-vertical_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_more-vertical_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_more-vertical_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_more-vertical_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_more-vertical_primary--enabled"
        }),
        hover: freeze({
          name: "system_more-vertical_primary--hover"
        }),
        active: freeze({
          name: "system_more-vertical_primary--active"
        }),
        disabled: freeze({
          name: "system_more-vertical_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_more-vertical_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_more-vertical_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_more-vertical_error-actionable--hover"
        }),
        active: freeze({
          name: "system_more-vertical_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_more-vertical_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_more-vertical_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_more-vertical_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_more-vertical_neutral--enabled"
        }),
        hover: freeze({
          name: "system_more-vertical_neutral--hover"
        }),
        active: freeze({
          name: "system_more-vertical_neutral--active"
        }),
        disabled: freeze({
          name: "system_more-vertical_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_more-vertical_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_more-vertical_bright--enabled"
        })
      })
    }),
    "more-horizontal": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_more-horizontal_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_more-horizontal_on-surface--hover"
        }),
        active: freeze({
          name: "system_more-horizontal_on-surface--active"
        }),
        disabled: freeze({
          name: "system_more-horizontal_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_more-horizontal_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_more-horizontal_on-primary--hover"
        }),
        active: freeze({
          name: "system_more-horizontal_on-primary--active"
        }),
        disabled: freeze({
          name: "system_more-horizontal_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_more-horizontal_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_more-horizontal_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_more-horizontal_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_more-horizontal_primary--enabled"
        }),
        hover: freeze({
          name: "system_more-horizontal_primary--hover"
        }),
        active: freeze({
          name: "system_more-horizontal_primary--active"
        }),
        disabled: freeze({
          name: "system_more-horizontal_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_more-horizontal_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_more-horizontal_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_more-horizontal_error-actionable--hover"
        }),
        active: freeze({
          name: "system_more-horizontal_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_more-horizontal_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_more-horizontal_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_more-horizontal_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_more-horizontal_neutral--enabled"
        }),
        hover: freeze({
          name: "system_more-horizontal_neutral--hover"
        }),
        active: freeze({
          name: "system_more-horizontal_neutral--active"
        }),
        disabled: freeze({
          name: "system_more-horizontal_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_more-horizontal_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_more-horizontal_bright--enabled"
        })
      })
    }),
    mobile: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_mobile_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_mobile_on-surface--hover"
        }),
        active: freeze({
          name: "system_mobile_on-surface--active"
        }),
        disabled: freeze({
          name: "system_mobile_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_mobile_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_mobile_on-primary--hover"
        }),
        active: freeze({
          name: "system_mobile_on-primary--active"
        }),
        disabled: freeze({
          name: "system_mobile_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_mobile_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_mobile_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_mobile_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_mobile_primary--enabled"
        }),
        hover: freeze({
          name: "system_mobile_primary--hover"
        }),
        active: freeze({
          name: "system_mobile_primary--active"
        }),
        disabled: freeze({
          name: "system_mobile_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_mobile_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_mobile_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_mobile_error-actionable--hover"
        }),
        active: freeze({
          name: "system_mobile_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_mobile_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_mobile_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_mobile_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_mobile_neutral--enabled"
        }),
        hover: freeze({
          name: "system_mobile_neutral--hover"
        }),
        active: freeze({
          name: "system_mobile_neutral--active"
        }),
        disabled: freeze({
          name: "system_mobile_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_mobile_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_mobile_bright--enabled"
        })
      })
    }),
    mic: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_mic_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_mic_on-surface--hover"
        }),
        active: freeze({
          name: "system_mic_on-surface--active"
        }),
        disabled: freeze({
          name: "system_mic_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_mic_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_mic_on-primary--hover"
        }),
        active: freeze({
          name: "system_mic_on-primary--active"
        }),
        disabled: freeze({
          name: "system_mic_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_mic_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_mic_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_mic_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_mic_primary--enabled"
        }),
        hover: freeze({
          name: "system_mic_primary--hover"
        }),
        active: freeze({
          name: "system_mic_primary--active"
        }),
        disabled: freeze({
          name: "system_mic_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_mic_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_mic_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_mic_error-actionable--hover"
        }),
        active: freeze({
          name: "system_mic_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_mic_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_mic_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_mic_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_mic_neutral--enabled"
        }),
        hover: freeze({
          name: "system_mic_neutral--hover"
        }),
        active: freeze({
          name: "system_mic_neutral--active"
        }),
        disabled: freeze({
          name: "system_mic_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_mic_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_mic_bright--enabled"
        })
      })
    }),
    "mic-off": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_mic-off_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_mic-off_on-surface--hover"
        }),
        active: freeze({
          name: "system_mic-off_on-surface--active"
        }),
        disabled: freeze({
          name: "system_mic-off_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_mic-off_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_mic-off_on-primary--hover"
        }),
        active: freeze({
          name: "system_mic-off_on-primary--active"
        }),
        disabled: freeze({
          name: "system_mic-off_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_mic-off_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_mic-off_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_mic-off_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_mic-off_primary--enabled"
        }),
        hover: freeze({
          name: "system_mic-off_primary--hover"
        }),
        active: freeze({
          name: "system_mic-off_primary--active"
        }),
        disabled: freeze({
          name: "system_mic-off_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_mic-off_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_mic-off_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_mic-off_error-actionable--hover"
        }),
        active: freeze({
          name: "system_mic-off_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_mic-off_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_mic-off_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_mic-off_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_mic-off_neutral--enabled"
        }),
        hover: freeze({
          name: "system_mic-off_neutral--hover"
        }),
        active: freeze({
          name: "system_mic-off_neutral--active"
        }),
        disabled: freeze({
          name: "system_mic-off_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_mic-off_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_mic-off_bright--enabled"
        })
      })
    }),
    message: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_message_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_message_on-surface--hover"
        }),
        active: freeze({
          name: "system_message_on-surface--active"
        }),
        disabled: freeze({
          name: "system_message_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_message_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_message_on-primary--hover"
        }),
        active: freeze({
          name: "system_message_on-primary--active"
        }),
        disabled: freeze({
          name: "system_message_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_message_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_message_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_message_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_message_primary--enabled"
        }),
        hover: freeze({
          name: "system_message_primary--hover"
        }),
        active: freeze({
          name: "system_message_primary--active"
        }),
        disabled: freeze({
          name: "system_message_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_message_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_message_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_message_error-actionable--hover"
        }),
        active: freeze({
          name: "system_message_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_message_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_message_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_message_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_message_neutral--enabled"
        }),
        hover: freeze({
          name: "system_message_neutral--hover"
        }),
        active: freeze({
          name: "system_message_neutral--active"
        }),
        disabled: freeze({
          name: "system_message_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_message_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_message_bright--enabled"
        })
      })
    }),
    menu: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_menu_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_menu_on-surface--hover"
        }),
        active: freeze({
          name: "system_menu_on-surface--active"
        }),
        disabled: freeze({
          name: "system_menu_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_menu_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_menu_on-primary--hover"
        }),
        active: freeze({
          name: "system_menu_on-primary--active"
        }),
        disabled: freeze({
          name: "system_menu_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_menu_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_menu_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_menu_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_menu_primary--enabled"
        }),
        hover: freeze({
          name: "system_menu_primary--hover"
        }),
        active: freeze({
          name: "system_menu_primary--active"
        }),
        disabled: freeze({
          name: "system_menu_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_menu_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_menu_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_menu_error-actionable--hover"
        }),
        active: freeze({
          name: "system_menu_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_menu_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_menu_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_menu_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_menu_neutral--enabled"
        }),
        hover: freeze({
          name: "system_menu_neutral--hover"
        }),
        active: freeze({
          name: "system_menu_neutral--active"
        }),
        disabled: freeze({
          name: "system_menu_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_menu_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_menu_bright--enabled"
        })
      })
    }),
    mail: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_mail_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_mail_on-surface--hover"
        }),
        active: freeze({
          name: "system_mail_on-surface--active"
        }),
        disabled: freeze({
          name: "system_mail_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_mail_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_mail_on-primary--hover"
        }),
        active: freeze({
          name: "system_mail_on-primary--active"
        }),
        disabled: freeze({
          name: "system_mail_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_mail_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_mail_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_mail_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_mail_primary--enabled"
        }),
        hover: freeze({
          name: "system_mail_primary--hover"
        }),
        active: freeze({
          name: "system_mail_primary--active"
        }),
        disabled: freeze({
          name: "system_mail_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_mail_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_mail_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_mail_error-actionable--hover"
        }),
        active: freeze({
          name: "system_mail_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_mail_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_mail_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_mail_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_mail_neutral--enabled"
        }),
        hover: freeze({
          name: "system_mail_neutral--hover"
        }),
        active: freeze({
          name: "system_mail_neutral--active"
        }),
        disabled: freeze({
          name: "system_mail_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_mail_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_mail_bright--enabled"
        })
      })
    }),
    logout: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_logout_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_logout_on-surface--hover"
        }),
        active: freeze({
          name: "system_logout_on-surface--active"
        }),
        disabled: freeze({
          name: "system_logout_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_logout_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_logout_on-primary--hover"
        }),
        active: freeze({
          name: "system_logout_on-primary--active"
        }),
        disabled: freeze({
          name: "system_logout_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_logout_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_logout_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_logout_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_logout_primary--enabled"
        }),
        hover: freeze({
          name: "system_logout_primary--hover"
        }),
        active: freeze({
          name: "system_logout_primary--active"
        }),
        disabled: freeze({
          name: "system_logout_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_logout_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_logout_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_logout_error-actionable--hover"
        }),
        active: freeze({
          name: "system_logout_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_logout_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_logout_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_logout_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_logout_neutral--enabled"
        }),
        hover: freeze({
          name: "system_logout_neutral--hover"
        }),
        active: freeze({
          name: "system_logout_neutral--active"
        }),
        disabled: freeze({
          name: "system_logout_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_logout_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_logout_bright--enabled"
        })
      })
    }),
    "log-out": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_log-out_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_log-out_on-surface--hover"
        }),
        active: freeze({
          name: "system_log-out_on-surface--active"
        }),
        disabled: freeze({
          name: "system_log-out_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_log-out_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_log-out_on-primary--hover"
        }),
        active: freeze({
          name: "system_log-out_on-primary--active"
        }),
        disabled: freeze({
          name: "system_log-out_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_log-out_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_log-out_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_log-out_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_log-out_primary--enabled"
        }),
        hover: freeze({
          name: "system_log-out_primary--hover"
        }),
        active: freeze({
          name: "system_log-out_primary--active"
        }),
        disabled: freeze({
          name: "system_log-out_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_log-out_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_log-out_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_log-out_error-actionable--hover"
        }),
        active: freeze({
          name: "system_log-out_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_log-out_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_log-out_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_log-out_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_log-out_neutral--enabled"
        }),
        hover: freeze({
          name: "system_log-out_neutral--hover"
        }),
        active: freeze({
          name: "system_log-out_neutral--active"
        }),
        disabled: freeze({
          name: "system_log-out_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_log-out_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_log-out_bright--enabled"
        })
      })
    }),
    lock: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_lock_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_lock_on-surface--hover"
        }),
        active: freeze({
          name: "system_lock_on-surface--active"
        }),
        disabled: freeze({
          name: "system_lock_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_lock_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_lock_on-primary--hover"
        }),
        active: freeze({
          name: "system_lock_on-primary--active"
        }),
        disabled: freeze({
          name: "system_lock_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_lock_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_lock_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_lock_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_lock_primary--enabled"
        }),
        hover: freeze({
          name: "system_lock_primary--hover"
        }),
        active: freeze({
          name: "system_lock_primary--active"
        }),
        disabled: freeze({
          name: "system_lock_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_lock_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_lock_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_lock_error-actionable--hover"
        }),
        active: freeze({
          name: "system_lock_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_lock_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_lock_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_lock_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_lock_neutral--enabled"
        }),
        hover: freeze({
          name: "system_lock_neutral--hover"
        }),
        active: freeze({
          name: "system_lock_neutral--active"
        }),
        disabled: freeze({
          name: "system_lock_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_lock_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_lock_bright--enabled"
        })
      })
    }),
    loading: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_loading_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_loading_on-surface--hover"
        }),
        active: freeze({
          name: "system_loading_on-surface--active"
        }),
        disabled: freeze({
          name: "system_loading_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_loading_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_loading_on-primary--hover"
        }),
        active: freeze({
          name: "system_loading_on-primary--active"
        }),
        disabled: freeze({
          name: "system_loading_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_loading_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_loading_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_loading_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_loading_primary--enabled"
        }),
        hover: freeze({
          name: "system_loading_primary--hover"
        }),
        active: freeze({
          name: "system_loading_primary--active"
        }),
        disabled: freeze({
          name: "system_loading_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_loading_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_loading_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_loading_error-actionable--hover"
        }),
        active: freeze({
          name: "system_loading_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_loading_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_loading_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_loading_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_loading_neutral--enabled"
        }),
        hover: freeze({
          name: "system_loading_neutral--hover"
        }),
        active: freeze({
          name: "system_loading_neutral--active"
        }),
        disabled: freeze({
          name: "system_loading_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_loading_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_loading_bright--enabled"
        })
      })
    }),
    list: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_list_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_list_on-surface--hover"
        }),
        active: freeze({
          name: "system_list_on-surface--active"
        }),
        disabled: freeze({
          name: "system_list_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_list_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_list_on-primary--hover"
        }),
        active: freeze({
          name: "system_list_on-primary--active"
        }),
        disabled: freeze({
          name: "system_list_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_list_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_list_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_list_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_list_primary--enabled"
        }),
        hover: freeze({
          name: "system_list_primary--hover"
        }),
        active: freeze({
          name: "system_list_primary--active"
        }),
        disabled: freeze({
          name: "system_list_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_list_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_list_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_list_error-actionable--hover"
        }),
        active: freeze({
          name: "system_list_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_list_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_list_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_list_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_list_neutral--enabled"
        }),
        hover: freeze({
          name: "system_list_neutral--hover"
        }),
        active: freeze({
          name: "system_list_neutral--active"
        }),
        disabled: freeze({
          name: "system_list_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_list_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_list_bright--enabled"
        })
      })
    }),
    link: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_link_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_link_on-surface--hover"
        }),
        active: freeze({
          name: "system_link_on-surface--active"
        }),
        disabled: freeze({
          name: "system_link_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_link_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_link_on-primary--hover"
        }),
        active: freeze({
          name: "system_link_on-primary--active"
        }),
        disabled: freeze({
          name: "system_link_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_link_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_link_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_link_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_link_primary--enabled"
        }),
        hover: freeze({
          name: "system_link_primary--hover"
        }),
        active: freeze({
          name: "system_link_primary--active"
        }),
        disabled: freeze({
          name: "system_link_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_link_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_link_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_link_error-actionable--hover"
        }),
        active: freeze({
          name: "system_link_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_link_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_link_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_link_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_link_neutral--enabled"
        }),
        hover: freeze({
          name: "system_link_neutral--hover"
        }),
        active: freeze({
          name: "system_link_neutral--active"
        }),
        disabled: freeze({
          name: "system_link_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_link_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_link_bright--enabled"
        })
      })
    }),
    "link-off": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_link-off_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_link-off_on-surface--hover"
        }),
        active: freeze({
          name: "system_link-off_on-surface--active"
        }),
        disabled: freeze({
          name: "system_link-off_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_link-off_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_link-off_on-primary--hover"
        }),
        active: freeze({
          name: "system_link-off_on-primary--active"
        }),
        disabled: freeze({
          name: "system_link-off_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_link-off_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_link-off_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_link-off_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_link-off_primary--enabled"
        }),
        hover: freeze({
          name: "system_link-off_primary--hover"
        }),
        active: freeze({
          name: "system_link-off_primary--active"
        }),
        disabled: freeze({
          name: "system_link-off_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_link-off_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_link-off_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_link-off_error-actionable--hover"
        }),
        active: freeze({
          name: "system_link-off_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_link-off_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_link-off_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_link-off_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_link-off_neutral--enabled"
        }),
        hover: freeze({
          name: "system_link-off_neutral--hover"
        }),
        active: freeze({
          name: "system_link-off_neutral--active"
        }),
        disabled: freeze({
          name: "system_link-off_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_link-off_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_link-off_bright--enabled"
        })
      })
    }),
    "left-panel-open": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_left-panel-open_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_left-panel-open_on-surface--hover"
        }),
        active: freeze({
          name: "system_left-panel-open_on-surface--active"
        }),
        disabled: freeze({
          name: "system_left-panel-open_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_left-panel-open_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_left-panel-open_on-primary--hover"
        }),
        active: freeze({
          name: "system_left-panel-open_on-primary--active"
        }),
        disabled: freeze({
          name: "system_left-panel-open_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_left-panel-open_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_left-panel-open_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_left-panel-open_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_left-panel-open_primary--enabled"
        }),
        hover: freeze({
          name: "system_left-panel-open_primary--hover"
        }),
        active: freeze({
          name: "system_left-panel-open_primary--active"
        }),
        disabled: freeze({
          name: "system_left-panel-open_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_left-panel-open_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_left-panel-open_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_left-panel-open_error-actionable--hover"
        }),
        active: freeze({
          name: "system_left-panel-open_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_left-panel-open_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_left-panel-open_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_left-panel-open_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_left-panel-open_neutral--enabled"
        }),
        hover: freeze({
          name: "system_left-panel-open_neutral--hover"
        }),
        active: freeze({
          name: "system_left-panel-open_neutral--active"
        }),
        disabled: freeze({
          name: "system_left-panel-open_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_left-panel-open_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_left-panel-open_bright--enabled"
        })
      })
    }),
    launch: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_launch_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_launch_on-surface--hover"
        }),
        active: freeze({
          name: "system_launch_on-surface--active"
        }),
        disabled: freeze({
          name: "system_launch_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_launch_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_launch_on-primary--hover"
        }),
        active: freeze({
          name: "system_launch_on-primary--active"
        }),
        disabled: freeze({
          name: "system_launch_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_launch_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_launch_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_launch_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_launch_primary--enabled"
        }),
        hover: freeze({
          name: "system_launch_primary--hover"
        }),
        active: freeze({
          name: "system_launch_primary--active"
        }),
        disabled: freeze({
          name: "system_launch_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_launch_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_launch_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_launch_error-actionable--hover"
        }),
        active: freeze({
          name: "system_launch_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_launch_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_launch_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_launch_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_launch_neutral--enabled"
        }),
        hover: freeze({
          name: "system_launch_neutral--hover"
        }),
        active: freeze({
          name: "system_launch_neutral--active"
        }),
        disabled: freeze({
          name: "system_launch_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_launch_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_launch_bright--enabled"
        })
      })
    }),
    language: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_language_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_language_on-surface--hover"
        }),
        active: freeze({
          name: "system_language_on-surface--active"
        }),
        disabled: freeze({
          name: "system_language_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_language_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_language_on-primary--hover"
        }),
        active: freeze({
          name: "system_language_on-primary--active"
        }),
        disabled: freeze({
          name: "system_language_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_language_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_language_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_language_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_language_primary--enabled"
        }),
        hover: freeze({
          name: "system_language_primary--hover"
        }),
        active: freeze({
          name: "system_language_primary--active"
        }),
        disabled: freeze({
          name: "system_language_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_language_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_language_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_language_error-actionable--hover"
        }),
        active: freeze({
          name: "system_language_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_language_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_language_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_language_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_language_neutral--enabled"
        }),
        hover: freeze({
          name: "system_language_neutral--hover"
        }),
        active: freeze({
          name: "system_language_neutral--active"
        }),
        disabled: freeze({
          name: "system_language_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_language_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_language_bright--enabled"
        })
      })
    }),
    key: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_key_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_key_on-surface--hover"
        }),
        active: freeze({
          name: "system_key_on-surface--active"
        }),
        disabled: freeze({
          name: "system_key_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_key_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_key_on-primary--hover"
        }),
        active: freeze({
          name: "system_key_on-primary--active"
        }),
        disabled: freeze({
          name: "system_key_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_key_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_key_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_key_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_key_primary--enabled"
        }),
        hover: freeze({
          name: "system_key_primary--hover"
        }),
        active: freeze({
          name: "system_key_primary--active"
        }),
        disabled: freeze({
          name: "system_key_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_key_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_key_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_key_error-actionable--hover"
        }),
        active: freeze({
          name: "system_key_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_key_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_key_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_key_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_key_neutral--enabled"
        }),
        hover: freeze({
          name: "system_key_neutral--hover"
        }),
        active: freeze({
          name: "system_key_neutral--active"
        }),
        disabled: freeze({
          name: "system_key_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_key_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_key_bright--enabled"
        })
      })
    }),
    information: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_information_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_information_on-surface--hover"
        }),
        active: freeze({
          name: "system_information_on-surface--active"
        }),
        disabled: freeze({
          name: "system_information_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_information_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_information_on-primary--hover"
        }),
        active: freeze({
          name: "system_information_on-primary--active"
        }),
        disabled: freeze({
          name: "system_information_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_information_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_information_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_information_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_information_primary--enabled"
        }),
        hover: freeze({
          name: "system_information_primary--hover"
        }),
        active: freeze({
          name: "system_information_primary--active"
        }),
        disabled: freeze({
          name: "system_information_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_information_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_information_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_information_error-actionable--hover"
        }),
        active: freeze({
          name: "system_information_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_information_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_information_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_information_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_information_neutral--enabled"
        }),
        hover: freeze({
          name: "system_information_neutral--hover"
        }),
        active: freeze({
          name: "system_information_neutral--active"
        }),
        disabled: freeze({
          name: "system_information_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_information_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_information_bright--enabled"
        })
      })
    }),
    home: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_home_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_home_on-surface--hover"
        }),
        active: freeze({
          name: "system_home_on-surface--active"
        }),
        disabled: freeze({
          name: "system_home_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_home_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_home_on-primary--hover"
        }),
        active: freeze({
          name: "system_home_on-primary--active"
        }),
        disabled: freeze({
          name: "system_home_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_home_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_home_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_home_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_home_primary--enabled"
        }),
        hover: freeze({
          name: "system_home_primary--hover"
        }),
        active: freeze({
          name: "system_home_primary--active"
        }),
        disabled: freeze({
          name: "system_home_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_home_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_home_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_home_error-actionable--hover"
        }),
        active: freeze({
          name: "system_home_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_home_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_home_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_home_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_home_neutral--enabled"
        }),
        hover: freeze({
          name: "system_home_neutral--hover"
        }),
        active: freeze({
          name: "system_home_neutral--active"
        }),
        disabled: freeze({
          name: "system_home_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_home_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_home_bright--enabled"
        })
      })
    }),
    hide: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_hide_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_hide_on-surface--hover"
        }),
        active: freeze({
          name: "system_hide_on-surface--active"
        }),
        disabled: freeze({
          name: "system_hide_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_hide_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_hide_on-primary--hover"
        }),
        active: freeze({
          name: "system_hide_on-primary--active"
        }),
        disabled: freeze({
          name: "system_hide_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_hide_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_hide_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_hide_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_hide_primary--enabled"
        }),
        hover: freeze({
          name: "system_hide_primary--hover"
        }),
        active: freeze({
          name: "system_hide_primary--active"
        }),
        disabled: freeze({
          name: "system_hide_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_hide_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_hide_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_hide_error-actionable--hover"
        }),
        active: freeze({
          name: "system_hide_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_hide_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_hide_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_hide_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_hide_neutral--enabled"
        }),
        hover: freeze({
          name: "system_hide_neutral--hover"
        }),
        active: freeze({
          name: "system_hide_neutral--active"
        }),
        disabled: freeze({
          name: "system_hide_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_hide_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_hide_bright--enabled"
        })
      })
    }),
    help: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_help_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_help_on-surface--hover"
        }),
        active: freeze({
          name: "system_help_on-surface--active"
        }),
        disabled: freeze({
          name: "system_help_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_help_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_help_on-primary--hover"
        }),
        active: freeze({
          name: "system_help_on-primary--active"
        }),
        disabled: freeze({
          name: "system_help_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_help_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_help_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_help_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_help_primary--enabled"
        }),
        hover: freeze({
          name: "system_help_primary--hover"
        }),
        active: freeze({
          name: "system_help_primary--active"
        }),
        disabled: freeze({
          name: "system_help_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_help_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_help_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_help_error-actionable--hover"
        }),
        active: freeze({
          name: "system_help_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_help_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_help_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_help_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_help_neutral--enabled"
        }),
        hover: freeze({
          name: "system_help_neutral--hover"
        }),
        active: freeze({
          name: "system_help_neutral--active"
        }),
        disabled: freeze({
          name: "system_help_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_help_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_help_bright--enabled"
        })
      })
    }),
    "help-variant": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_help-variant_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_help-variant_on-surface--hover"
        }),
        active: freeze({
          name: "system_help-variant_on-surface--active"
        }),
        disabled: freeze({
          name: "system_help-variant_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_help-variant_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_help-variant_on-primary--hover"
        }),
        active: freeze({
          name: "system_help-variant_on-primary--active"
        }),
        disabled: freeze({
          name: "system_help-variant_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_help-variant_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_help-variant_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_help-variant_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_help-variant_primary--enabled"
        }),
        hover: freeze({
          name: "system_help-variant_primary--hover"
        }),
        active: freeze({
          name: "system_help-variant_primary--active"
        }),
        disabled: freeze({
          name: "system_help-variant_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_help-variant_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_help-variant_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_help-variant_error-actionable--hover"
        }),
        active: freeze({
          name: "system_help-variant_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_help-variant_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_help-variant_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_help-variant_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_help-variant_neutral--enabled"
        }),
        hover: freeze({
          name: "system_help-variant_neutral--hover"
        }),
        active: freeze({
          name: "system_help-variant_neutral--active"
        }),
        disabled: freeze({
          name: "system_help-variant_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_help-variant_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_help-variant_bright--enabled"
        })
      })
    }),
    folder: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_folder_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_folder_on-surface--hover"
        }),
        active: freeze({
          name: "system_folder_on-surface--active"
        }),
        disabled: freeze({
          name: "system_folder_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_folder_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_folder_on-primary--hover"
        }),
        active: freeze({
          name: "system_folder_on-primary--active"
        }),
        disabled: freeze({
          name: "system_folder_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_folder_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_folder_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_folder_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_folder_primary--enabled"
        }),
        hover: freeze({
          name: "system_folder_primary--hover"
        }),
        active: freeze({
          name: "system_folder_primary--active"
        }),
        disabled: freeze({
          name: "system_folder_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_folder_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_folder_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_folder_error-actionable--hover"
        }),
        active: freeze({
          name: "system_folder_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_folder_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_folder_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_folder_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_folder_neutral--enabled"
        }),
        hover: freeze({
          name: "system_folder_neutral--hover"
        }),
        active: freeze({
          name: "system_folder_neutral--active"
        }),
        disabled: freeze({
          name: "system_folder_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_folder_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_folder_bright--enabled"
        })
      })
    }),
    filters: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_filters_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_filters_on-surface--hover"
        }),
        active: freeze({
          name: "system_filters_on-surface--active"
        }),
        disabled: freeze({
          name: "system_filters_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_filters_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_filters_on-primary--hover"
        }),
        active: freeze({
          name: "system_filters_on-primary--active"
        }),
        disabled: freeze({
          name: "system_filters_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_filters_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_filters_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_filters_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_filters_primary--enabled"
        }),
        hover: freeze({
          name: "system_filters_primary--hover"
        }),
        active: freeze({
          name: "system_filters_primary--active"
        }),
        disabled: freeze({
          name: "system_filters_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_filters_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_filters_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_filters_error-actionable--hover"
        }),
        active: freeze({
          name: "system_filters_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_filters_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_filters_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_filters_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_filters_neutral--enabled"
        }),
        hover: freeze({
          name: "system_filters_neutral--hover"
        }),
        active: freeze({
          name: "system_filters_neutral--active"
        }),
        disabled: freeze({
          name: "system_filters_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_filters_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_filters_bright--enabled"
        })
      })
    }),
    eyedropper: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_eyedropper_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_eyedropper_on-surface--hover"
        }),
        active: freeze({
          name: "system_eyedropper_on-surface--active"
        }),
        disabled: freeze({
          name: "system_eyedropper_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_eyedropper_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_eyedropper_on-primary--hover"
        }),
        active: freeze({
          name: "system_eyedropper_on-primary--active"
        }),
        disabled: freeze({
          name: "system_eyedropper_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_eyedropper_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_eyedropper_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_eyedropper_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_eyedropper_primary--enabled"
        }),
        hover: freeze({
          name: "system_eyedropper_primary--hover"
        }),
        active: freeze({
          name: "system_eyedropper_primary--active"
        }),
        disabled: freeze({
          name: "system_eyedropper_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_eyedropper_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_eyedropper_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_eyedropper_error-actionable--hover"
        }),
        active: freeze({
          name: "system_eyedropper_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_eyedropper_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_eyedropper_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_eyedropper_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_eyedropper_neutral--enabled"
        }),
        hover: freeze({
          name: "system_eyedropper_neutral--hover"
        }),
        active: freeze({
          name: "system_eyedropper_neutral--active"
        }),
        disabled: freeze({
          name: "system_eyedropper_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_eyedropper_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_eyedropper_bright--enabled"
        })
      })
    }),
    expand: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_expand_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_expand_on-surface--hover"
        }),
        active: freeze({
          name: "system_expand_on-surface--active"
        }),
        disabled: freeze({
          name: "system_expand_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_expand_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_expand_on-primary--hover"
        }),
        active: freeze({
          name: "system_expand_on-primary--active"
        }),
        disabled: freeze({
          name: "system_expand_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_expand_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_expand_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_expand_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_expand_primary--enabled"
        }),
        hover: freeze({
          name: "system_expand_primary--hover"
        }),
        active: freeze({
          name: "system_expand_primary--active"
        }),
        disabled: freeze({
          name: "system_expand_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_expand_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_expand_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_expand_error-actionable--hover"
        }),
        active: freeze({
          name: "system_expand_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_expand_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_expand_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_expand_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_expand_neutral--enabled"
        }),
        hover: freeze({
          name: "system_expand_neutral--hover"
        }),
        active: freeze({
          name: "system_expand_neutral--active"
        }),
        disabled: freeze({
          name: "system_expand_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_expand_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_expand_bright--enabled"
        })
      })
    }),
    "expand-content": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_expand-content_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_expand-content_on-surface--hover"
        }),
        active: freeze({
          name: "system_expand-content_on-surface--active"
        }),
        disabled: freeze({
          name: "system_expand-content_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_expand-content_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_expand-content_on-primary--hover"
        }),
        active: freeze({
          name: "system_expand-content_on-primary--active"
        }),
        disabled: freeze({
          name: "system_expand-content_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_expand-content_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_expand-content_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_expand-content_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_expand-content_primary--enabled"
        }),
        hover: freeze({
          name: "system_expand-content_primary--hover"
        }),
        active: freeze({
          name: "system_expand-content_primary--active"
        }),
        disabled: freeze({
          name: "system_expand-content_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_expand-content_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_expand-content_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_expand-content_error-actionable--hover"
        }),
        active: freeze({
          name: "system_expand-content_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_expand-content_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_expand-content_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_expand-content_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_expand-content_neutral--enabled"
        }),
        hover: freeze({
          name: "system_expand-content_neutral--hover"
        }),
        active: freeze({
          name: "system_expand-content_neutral--active"
        }),
        disabled: freeze({
          name: "system_expand-content_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_expand-content_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_expand-content_bright--enabled"
        })
      })
    }),
    error: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_error_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_error_on-surface--hover"
        }),
        active: freeze({
          name: "system_error_on-surface--active"
        }),
        disabled: freeze({
          name: "system_error_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_error_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_error_on-primary--hover"
        }),
        active: freeze({
          name: "system_error_on-primary--active"
        }),
        disabled: freeze({
          name: "system_error_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_error_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_error_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_error_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_error_primary--enabled"
        }),
        hover: freeze({
          name: "system_error_primary--hover"
        }),
        active: freeze({
          name: "system_error_primary--active"
        }),
        disabled: freeze({
          name: "system_error_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_error_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_error_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_error_error-actionable--hover"
        }),
        active: freeze({
          name: "system_error_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_error_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_error_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_error_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_error_neutral--enabled"
        }),
        hover: freeze({
          name: "system_error_neutral--hover"
        }),
        active: freeze({
          name: "system_error_neutral--active"
        }),
        disabled: freeze({
          name: "system_error_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_error_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_error_bright--enabled"
        })
      })
    }),
    edit: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_edit_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_edit_on-surface--hover"
        }),
        active: freeze({
          name: "system_edit_on-surface--active"
        }),
        disabled: freeze({
          name: "system_edit_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_edit_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_edit_on-primary--hover"
        }),
        active: freeze({
          name: "system_edit_on-primary--active"
        }),
        disabled: freeze({
          name: "system_edit_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_edit_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_edit_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_edit_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_edit_primary--enabled"
        }),
        hover: freeze({
          name: "system_edit_primary--hover"
        }),
        active: freeze({
          name: "system_edit_primary--active"
        }),
        disabled: freeze({
          name: "system_edit_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_edit_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_edit_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_edit_error-actionable--hover"
        }),
        active: freeze({
          name: "system_edit_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_edit_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_edit_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_edit_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_edit_neutral--enabled"
        }),
        hover: freeze({
          name: "system_edit_neutral--hover"
        }),
        active: freeze({
          name: "system_edit_neutral--active"
        }),
        disabled: freeze({
          name: "system_edit_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_edit_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_edit_bright--enabled"
        })
      })
    }),
    drag: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_drag_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_drag_on-surface--hover"
        }),
        active: freeze({
          name: "system_drag_on-surface--active"
        }),
        disabled: freeze({
          name: "system_drag_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_drag_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_drag_on-primary--hover"
        }),
        active: freeze({
          name: "system_drag_on-primary--active"
        }),
        disabled: freeze({
          name: "system_drag_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_drag_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_drag_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_drag_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_drag_primary--enabled"
        }),
        hover: freeze({
          name: "system_drag_primary--hover"
        }),
        active: freeze({
          name: "system_drag_primary--active"
        }),
        disabled: freeze({
          name: "system_drag_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_drag_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_drag_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_drag_error-actionable--hover"
        }),
        active: freeze({
          name: "system_drag_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_drag_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_drag_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_drag_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_drag_neutral--enabled"
        }),
        hover: freeze({
          name: "system_drag_neutral--hover"
        }),
        active: freeze({
          name: "system_drag_neutral--active"
        }),
        disabled: freeze({
          name: "system_drag_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_drag_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_drag_bright--enabled"
        })
      })
    }),
    download: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_download_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_download_on-surface--hover"
        }),
        active: freeze({
          name: "system_download_on-surface--active"
        }),
        disabled: freeze({
          name: "system_download_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_download_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_download_on-primary--hover"
        }),
        active: freeze({
          name: "system_download_on-primary--active"
        }),
        disabled: freeze({
          name: "system_download_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_download_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_download_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_download_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_download_primary--enabled"
        }),
        hover: freeze({
          name: "system_download_primary--hover"
        }),
        active: freeze({
          name: "system_download_primary--active"
        }),
        disabled: freeze({
          name: "system_download_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_download_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_download_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_download_error-actionable--hover"
        }),
        active: freeze({
          name: "system_download_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_download_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_download_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_download_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_download_neutral--enabled"
        }),
        hover: freeze({
          name: "system_download_neutral--hover"
        }),
        active: freeze({
          name: "system_download_neutral--active"
        }),
        disabled: freeze({
          name: "system_download_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_download_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_download_bright--enabled"
        })
      })
    }),
    "double-chevron-right": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_double-chevron-right_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_double-chevron-right_on-surface--hover"
        }),
        active: freeze({
          name: "system_double-chevron-right_on-surface--active"
        }),
        disabled: freeze({
          name: "system_double-chevron-right_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_double-chevron-right_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_double-chevron-right_on-primary--hover"
        }),
        active: freeze({
          name: "system_double-chevron-right_on-primary--active"
        }),
        disabled: freeze({
          name: "system_double-chevron-right_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_double-chevron-right_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_double-chevron-right_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_double-chevron-right_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_double-chevron-right_primary--enabled"
        }),
        hover: freeze({
          name: "system_double-chevron-right_primary--hover"
        }),
        active: freeze({
          name: "system_double-chevron-right_primary--active"
        }),
        disabled: freeze({
          name: "system_double-chevron-right_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_double-chevron-right_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_double-chevron-right_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_double-chevron-right_error-actionable--hover"
        }),
        active: freeze({
          name: "system_double-chevron-right_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_double-chevron-right_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_double-chevron-right_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_double-chevron-right_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_double-chevron-right_neutral--enabled"
        }),
        hover: freeze({
          name: "system_double-chevron-right_neutral--hover"
        }),
        active: freeze({
          name: "system_double-chevron-right_neutral--active"
        }),
        disabled: freeze({
          name: "system_double-chevron-right_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_double-chevron-right_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_double-chevron-right_bright--enabled"
        })
      })
    }),
    "double-chevron-left": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_double-chevron-left_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_double-chevron-left_on-surface--hover"
        }),
        active: freeze({
          name: "system_double-chevron-left_on-surface--active"
        }),
        disabled: freeze({
          name: "system_double-chevron-left_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_double-chevron-left_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_double-chevron-left_on-primary--hover"
        }),
        active: freeze({
          name: "system_double-chevron-left_on-primary--active"
        }),
        disabled: freeze({
          name: "system_double-chevron-left_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_double-chevron-left_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_double-chevron-left_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_double-chevron-left_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_double-chevron-left_primary--enabled"
        }),
        hover: freeze({
          name: "system_double-chevron-left_primary--hover"
        }),
        active: freeze({
          name: "system_double-chevron-left_primary--active"
        }),
        disabled: freeze({
          name: "system_double-chevron-left_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_double-chevron-left_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_double-chevron-left_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_double-chevron-left_error-actionable--hover"
        }),
        active: freeze({
          name: "system_double-chevron-left_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_double-chevron-left_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_double-chevron-left_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_double-chevron-left_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_double-chevron-left_neutral--enabled"
        }),
        hover: freeze({
          name: "system_double-chevron-left_neutral--hover"
        }),
        active: freeze({
          name: "system_double-chevron-left_neutral--active"
        }),
        disabled: freeze({
          name: "system_double-chevron-left_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_double-chevron-left_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_double-chevron-left_bright--enabled"
        })
      })
    }),
    detail: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_detail_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_detail_on-surface--hover"
        }),
        active: freeze({
          name: "system_detail_on-surface--active"
        }),
        disabled: freeze({
          name: "system_detail_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_detail_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_detail_on-primary--hover"
        }),
        active: freeze({
          name: "system_detail_on-primary--active"
        }),
        disabled: freeze({
          name: "system_detail_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_detail_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_detail_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_detail_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_detail_primary--enabled"
        }),
        hover: freeze({
          name: "system_detail_primary--hover"
        }),
        active: freeze({
          name: "system_detail_primary--active"
        }),
        disabled: freeze({
          name: "system_detail_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_detail_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_detail_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_detail_error-actionable--hover"
        }),
        active: freeze({
          name: "system_detail_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_detail_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_detail_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_detail_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_detail_neutral--enabled"
        }),
        hover: freeze({
          name: "system_detail_neutral--hover"
        }),
        active: freeze({
          name: "system_detail_neutral--active"
        }),
        disabled: freeze({
          name: "system_detail_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_detail_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_detail_bright--enabled"
        })
      })
    }),
    "delete-outlined": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_delete-outlined_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_delete-outlined_on-surface--hover"
        }),
        active: freeze({
          name: "system_delete-outlined_on-surface--active"
        }),
        disabled: freeze({
          name: "system_delete-outlined_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_delete-outlined_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_delete-outlined_on-primary--hover"
        }),
        active: freeze({
          name: "system_delete-outlined_on-primary--active"
        }),
        disabled: freeze({
          name: "system_delete-outlined_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_delete-outlined_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_delete-outlined_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_delete-outlined_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_delete-outlined_primary--enabled"
        }),
        hover: freeze({
          name: "system_delete-outlined_primary--hover"
        }),
        active: freeze({
          name: "system_delete-outlined_primary--active"
        }),
        disabled: freeze({
          name: "system_delete-outlined_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_delete-outlined_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_delete-outlined_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_delete-outlined_error-actionable--hover"
        }),
        active: freeze({
          name: "system_delete-outlined_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_delete-outlined_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_delete-outlined_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_delete-outlined_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_delete-outlined_neutral--enabled"
        }),
        hover: freeze({
          name: "system_delete-outlined_neutral--hover"
        }),
        active: freeze({
          name: "system_delete-outlined_neutral--active"
        }),
        disabled: freeze({
          name: "system_delete-outlined_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_delete-outlined_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_delete-outlined_bright--enabled"
        })
      })
    }),
    database: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_database_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_database_on-surface--hover"
        }),
        active: freeze({
          name: "system_database_on-surface--active"
        }),
        disabled: freeze({
          name: "system_database_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_database_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_database_on-primary--hover"
        }),
        active: freeze({
          name: "system_database_on-primary--active"
        }),
        disabled: freeze({
          name: "system_database_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_database_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_database_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_database_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_database_primary--enabled"
        }),
        hover: freeze({
          name: "system_database_primary--hover"
        }),
        active: freeze({
          name: "system_database_primary--active"
        }),
        disabled: freeze({
          name: "system_database_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_database_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_database_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_database_error-actionable--hover"
        }),
        active: freeze({
          name: "system_database_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_database_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_database_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_database_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_database_neutral--enabled"
        }),
        hover: freeze({
          name: "system_database_neutral--hover"
        }),
        active: freeze({
          name: "system_database_neutral--active"
        }),
        disabled: freeze({
          name: "system_database_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_database_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_database_bright--enabled"
        })
      })
    }),
    "data-modeling": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_data-modeling_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_data-modeling_on-surface--hover"
        }),
        active: freeze({
          name: "system_data-modeling_on-surface--active"
        }),
        disabled: freeze({
          name: "system_data-modeling_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_data-modeling_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_data-modeling_on-primary--hover"
        }),
        active: freeze({
          name: "system_data-modeling_on-primary--active"
        }),
        disabled: freeze({
          name: "system_data-modeling_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_data-modeling_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_data-modeling_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_data-modeling_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_data-modeling_primary--enabled"
        }),
        hover: freeze({
          name: "system_data-modeling_primary--hover"
        }),
        active: freeze({
          name: "system_data-modeling_primary--active"
        }),
        disabled: freeze({
          name: "system_data-modeling_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_data-modeling_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_data-modeling_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_data-modeling_error-actionable--hover"
        }),
        active: freeze({
          name: "system_data-modeling_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_data-modeling_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_data-modeling_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_data-modeling_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_data-modeling_neutral--enabled"
        }),
        hover: freeze({
          name: "system_data-modeling_neutral--hover"
        }),
        active: freeze({
          name: "system_data-modeling_neutral--active"
        }),
        disabled: freeze({
          name: "system_data-modeling_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_data-modeling_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_data-modeling_bright--enabled"
        })
      })
    }),
    dashboard: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_dashboard_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_dashboard_on-surface--hover"
        }),
        active: freeze({
          name: "system_dashboard_on-surface--active"
        }),
        disabled: freeze({
          name: "system_dashboard_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_dashboard_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_dashboard_on-primary--hover"
        }),
        active: freeze({
          name: "system_dashboard_on-primary--active"
        }),
        disabled: freeze({
          name: "system_dashboard_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_dashboard_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_dashboard_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_dashboard_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_dashboard_primary--enabled"
        }),
        hover: freeze({
          name: "system_dashboard_primary--hover"
        }),
        active: freeze({
          name: "system_dashboard_primary--active"
        }),
        disabled: freeze({
          name: "system_dashboard_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_dashboard_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_dashboard_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_dashboard_error-actionable--hover"
        }),
        active: freeze({
          name: "system_dashboard_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_dashboard_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_dashboard_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_dashboard_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_dashboard_neutral--enabled"
        }),
        hover: freeze({
          name: "system_dashboard_neutral--hover"
        }),
        active: freeze({
          name: "system_dashboard_neutral--active"
        }),
        disabled: freeze({
          name: "system_dashboard_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_dashboard_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_dashboard_bright--enabled"
        })
      })
    }),
    cut: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_cut_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_cut_on-surface--hover"
        }),
        active: freeze({
          name: "system_cut_on-surface--active"
        }),
        disabled: freeze({
          name: "system_cut_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_cut_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_cut_on-primary--hover"
        }),
        active: freeze({
          name: "system_cut_on-primary--active"
        }),
        disabled: freeze({
          name: "system_cut_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_cut_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_cut_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_cut_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_cut_primary--enabled"
        }),
        hover: freeze({
          name: "system_cut_primary--hover"
        }),
        active: freeze({
          name: "system_cut_primary--active"
        }),
        disabled: freeze({
          name: "system_cut_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_cut_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_cut_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_cut_error-actionable--hover"
        }),
        active: freeze({
          name: "system_cut_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_cut_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_cut_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_cut_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_cut_neutral--enabled"
        }),
        hover: freeze({
          name: "system_cut_neutral--hover"
        }),
        active: freeze({
          name: "system_cut_neutral--active"
        }),
        disabled: freeze({
          name: "system_cut_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_cut_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_cut_bright--enabled"
        })
      })
    }),
    copy: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_copy_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_copy_on-surface--hover"
        }),
        active: freeze({
          name: "system_copy_on-surface--active"
        }),
        disabled: freeze({
          name: "system_copy_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_copy_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_copy_on-primary--hover"
        }),
        active: freeze({
          name: "system_copy_on-primary--active"
        }),
        disabled: freeze({
          name: "system_copy_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_copy_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_copy_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_copy_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_copy_primary--enabled"
        }),
        hover: freeze({
          name: "system_copy_primary--hover"
        }),
        active: freeze({
          name: "system_copy_primary--active"
        }),
        disabled: freeze({
          name: "system_copy_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_copy_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_copy_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_copy_error-actionable--hover"
        }),
        active: freeze({
          name: "system_copy_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_copy_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_copy_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_copy_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_copy_neutral--enabled"
        }),
        hover: freeze({
          name: "system_copy_neutral--hover"
        }),
        active: freeze({
          name: "system_copy_neutral--active"
        }),
        disabled: freeze({
          name: "system_copy_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_copy_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_copy_bright--enabled"
        })
      })
    }),
    contact: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_contact_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_contact_on-surface--hover"
        }),
        active: freeze({
          name: "system_contact_on-surface--active"
        }),
        disabled: freeze({
          name: "system_contact_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_contact_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_contact_on-primary--hover"
        }),
        active: freeze({
          name: "system_contact_on-primary--active"
        }),
        disabled: freeze({
          name: "system_contact_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_contact_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_contact_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_contact_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_contact_primary--enabled"
        }),
        hover: freeze({
          name: "system_contact_primary--hover"
        }),
        active: freeze({
          name: "system_contact_primary--active"
        }),
        disabled: freeze({
          name: "system_contact_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_contact_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_contact_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_contact_error-actionable--hover"
        }),
        active: freeze({
          name: "system_contact_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_contact_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_contact_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_contact_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_contact_neutral--enabled"
        }),
        hover: freeze({
          name: "system_contact_neutral--hover"
        }),
        active: freeze({
          name: "system_contact_neutral--active"
        }),
        disabled: freeze({
          name: "system_contact_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_contact_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_contact_bright--enabled"
        })
      })
    }),
    computer: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_computer_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_computer_on-surface--hover"
        }),
        active: freeze({
          name: "system_computer_on-surface--active"
        }),
        disabled: freeze({
          name: "system_computer_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_computer_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_computer_on-primary--hover"
        }),
        active: freeze({
          name: "system_computer_on-primary--active"
        }),
        disabled: freeze({
          name: "system_computer_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_computer_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_computer_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_computer_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_computer_primary--enabled"
        }),
        hover: freeze({
          name: "system_computer_primary--hover"
        }),
        active: freeze({
          name: "system_computer_primary--active"
        }),
        disabled: freeze({
          name: "system_computer_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_computer_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_computer_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_computer_error-actionable--hover"
        }),
        active: freeze({
          name: "system_computer_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_computer_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_computer_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_computer_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_computer_neutral--enabled"
        }),
        hover: freeze({
          name: "system_computer_neutral--hover"
        }),
        active: freeze({
          name: "system_computer_neutral--active"
        }),
        disabled: freeze({
          name: "system_computer_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_computer_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_computer_bright--enabled"
        })
      })
    }),
    company: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_company_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_company_on-surface--hover"
        }),
        active: freeze({
          name: "system_company_on-surface--active"
        }),
        disabled: freeze({
          name: "system_company_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_company_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_company_on-primary--hover"
        }),
        active: freeze({
          name: "system_company_on-primary--active"
        }),
        disabled: freeze({
          name: "system_company_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_company_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_company_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_company_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_company_primary--enabled"
        }),
        hover: freeze({
          name: "system_company_primary--hover"
        }),
        active: freeze({
          name: "system_company_primary--active"
        }),
        disabled: freeze({
          name: "system_company_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_company_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_company_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_company_error-actionable--hover"
        }),
        active: freeze({
          name: "system_company_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_company_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_company_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_company_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_company_neutral--enabled"
        }),
        hover: freeze({
          name: "system_company_neutral--hover"
        }),
        active: freeze({
          name: "system_company_neutral--active"
        }),
        disabled: freeze({
          name: "system_company_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_company_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_company_bright--enabled"
        })
      })
    }),
    "collapse-content": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_collapse-content_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_collapse-content_on-surface--hover"
        }),
        active: freeze({
          name: "system_collapse-content_on-surface--active"
        }),
        disabled: freeze({
          name: "system_collapse-content_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_collapse-content_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_collapse-content_on-primary--hover"
        }),
        active: freeze({
          name: "system_collapse-content_on-primary--active"
        }),
        disabled: freeze({
          name: "system_collapse-content_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_collapse-content_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_collapse-content_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_collapse-content_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_collapse-content_primary--enabled"
        }),
        hover: freeze({
          name: "system_collapse-content_primary--hover"
        }),
        active: freeze({
          name: "system_collapse-content_primary--active"
        }),
        disabled: freeze({
          name: "system_collapse-content_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_collapse-content_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_collapse-content_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_collapse-content_error-actionable--hover"
        }),
        active: freeze({
          name: "system_collapse-content_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_collapse-content_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_collapse-content_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_collapse-content_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_collapse-content_neutral--enabled"
        }),
        hover: freeze({
          name: "system_collapse-content_neutral--hover"
        }),
        active: freeze({
          name: "system_collapse-content_neutral--active"
        }),
        disabled: freeze({
          name: "system_collapse-content_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_collapse-content_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_collapse-content_bright--enabled"
        })
      })
    }),
    close: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_close_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_close_on-surface--hover"
        }),
        active: freeze({
          name: "system_close_on-surface--active"
        }),
        disabled: freeze({
          name: "system_close_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_close_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_close_on-primary--hover"
        }),
        active: freeze({
          name: "system_close_on-primary--active"
        }),
        disabled: freeze({
          name: "system_close_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_close_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_close_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_close_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_close_primary--enabled"
        }),
        hover: freeze({
          name: "system_close_primary--hover"
        }),
        active: freeze({
          name: "system_close_primary--active"
        }),
        disabled: freeze({
          name: "system_close_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_close_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_close_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_close_error-actionable--hover"
        }),
        active: freeze({
          name: "system_close_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_close_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_close_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_close_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_close_neutral--enabled"
        }),
        hover: freeze({
          name: "system_close_neutral--hover"
        }),
        active: freeze({
          name: "system_close_neutral--active"
        }),
        disabled: freeze({
          name: "system_close_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_close_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_close_bright--enabled"
        })
      })
    }),
    "close-small": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_close-small_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_close-small_on-surface--hover"
        }),
        active: freeze({
          name: "system_close-small_on-surface--active"
        }),
        disabled: freeze({
          name: "system_close-small_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_close-small_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_close-small_on-primary--hover"
        }),
        active: freeze({
          name: "system_close-small_on-primary--active"
        }),
        disabled: freeze({
          name: "system_close-small_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_close-small_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_close-small_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_close-small_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_close-small_primary--enabled"
        }),
        hover: freeze({
          name: "system_close-small_primary--hover"
        }),
        active: freeze({
          name: "system_close-small_primary--active"
        }),
        disabled: freeze({
          name: "system_close-small_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_close-small_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_close-small_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_close-small_error-actionable--hover"
        }),
        active: freeze({
          name: "system_close-small_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_close-small_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_close-small_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_close-small_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_close-small_neutral--enabled"
        }),
        hover: freeze({
          name: "system_close-small_neutral--hover"
        }),
        active: freeze({
          name: "system_close-small_neutral--active"
        }),
        disabled: freeze({
          name: "system_close-small_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_close-small_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_close-small_bright--enabled"
        })
      })
    }),
    "close-sidebar": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_close-sidebar_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_close-sidebar_on-surface--hover"
        }),
        active: freeze({
          name: "system_close-sidebar_on-surface--active"
        }),
        disabled: freeze({
          name: "system_close-sidebar_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_close-sidebar_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_close-sidebar_on-primary--hover"
        }),
        active: freeze({
          name: "system_close-sidebar_on-primary--active"
        }),
        disabled: freeze({
          name: "system_close-sidebar_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_close-sidebar_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_close-sidebar_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_close-sidebar_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_close-sidebar_primary--enabled"
        }),
        hover: freeze({
          name: "system_close-sidebar_primary--hover"
        }),
        active: freeze({
          name: "system_close-sidebar_primary--active"
        }),
        disabled: freeze({
          name: "system_close-sidebar_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_close-sidebar_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_close-sidebar_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_close-sidebar_error-actionable--hover"
        }),
        active: freeze({
          name: "system_close-sidebar_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_close-sidebar_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_close-sidebar_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_close-sidebar_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_close-sidebar_neutral--enabled"
        }),
        hover: freeze({
          name: "system_close-sidebar_neutral--hover"
        }),
        active: freeze({
          name: "system_close-sidebar_neutral--active"
        }),
        disabled: freeze({
          name: "system_close-sidebar_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_close-sidebar_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_close-sidebar_bright--enabled"
        })
      })
    }),
    "chevron-up": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_chevron-up_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_chevron-up_on-surface--hover"
        }),
        active: freeze({
          name: "system_chevron-up_on-surface--active"
        }),
        disabled: freeze({
          name: "system_chevron-up_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_chevron-up_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-up_on-primary--hover"
        }),
        active: freeze({
          name: "system_chevron-up_on-primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-up_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_chevron-up_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_chevron-up_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_chevron-up_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_chevron-up_primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-up_primary--hover"
        }),
        active: freeze({
          name: "system_chevron-up_primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-up_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_chevron-up_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_chevron-up_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_chevron-up_error-actionable--hover"
        }),
        active: freeze({
          name: "system_chevron-up_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_chevron-up_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_chevron-up_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_chevron-up_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_chevron-up_neutral--enabled"
        }),
        hover: freeze({
          name: "system_chevron-up_neutral--hover"
        }),
        active: freeze({
          name: "system_chevron-up_neutral--active"
        }),
        disabled: freeze({
          name: "system_chevron-up_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_chevron-up_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_chevron-up_bright--enabled"
        })
      })
    }),
    "chevron-small-up": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_chevron-small-up_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-up_on-surface--hover"
        }),
        active: freeze({
          name: "system_chevron-small-up_on-surface--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-up_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_chevron-small-up_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-up_on-primary--hover"
        }),
        active: freeze({
          name: "system_chevron-small-up_on-primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-up_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_chevron-small-up_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_chevron-small-up_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_chevron-small-up_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_chevron-small-up_primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-up_primary--hover"
        }),
        active: freeze({
          name: "system_chevron-small-up_primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-up_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_chevron-small-up_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_chevron-small-up_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-up_error-actionable--hover"
        }),
        active: freeze({
          name: "system_chevron-small-up_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-up_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_chevron-small-up_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_chevron-small-up_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_chevron-small-up_neutral--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-up_neutral--hover"
        }),
        active: freeze({
          name: "system_chevron-small-up_neutral--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-up_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_chevron-small-up_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_chevron-small-up_bright--enabled"
        })
      })
    }),
    "chevron-small-right": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_chevron-small-right_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-right_on-surface--hover"
        }),
        active: freeze({
          name: "system_chevron-small-right_on-surface--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-right_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_chevron-small-right_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-right_on-primary--hover"
        }),
        active: freeze({
          name: "system_chevron-small-right_on-primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-right_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_chevron-small-right_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_chevron-small-right_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_chevron-small-right_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_chevron-small-right_primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-right_primary--hover"
        }),
        active: freeze({
          name: "system_chevron-small-right_primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-right_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_chevron-small-right_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_chevron-small-right_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-right_error-actionable--hover"
        }),
        active: freeze({
          name: "system_chevron-small-right_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-right_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_chevron-small-right_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_chevron-small-right_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_chevron-small-right_neutral--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-right_neutral--hover"
        }),
        active: freeze({
          name: "system_chevron-small-right_neutral--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-right_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_chevron-small-right_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_chevron-small-right_bright--enabled"
        })
      })
    }),
    "chevron-small-left": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_chevron-small-left_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-left_on-surface--hover"
        }),
        active: freeze({
          name: "system_chevron-small-left_on-surface--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-left_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_chevron-small-left_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-left_on-primary--hover"
        }),
        active: freeze({
          name: "system_chevron-small-left_on-primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-left_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_chevron-small-left_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_chevron-small-left_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_chevron-small-left_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_chevron-small-left_primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-left_primary--hover"
        }),
        active: freeze({
          name: "system_chevron-small-left_primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-left_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_chevron-small-left_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_chevron-small-left_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-left_error-actionable--hover"
        }),
        active: freeze({
          name: "system_chevron-small-left_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-left_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_chevron-small-left_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_chevron-small-left_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_chevron-small-left_neutral--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-left_neutral--hover"
        }),
        active: freeze({
          name: "system_chevron-small-left_neutral--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-left_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_chevron-small-left_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_chevron-small-left_bright--enabled"
        })
      })
    }),
    "chevron-small-down": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_chevron-small-down_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-down_on-surface--hover"
        }),
        active: freeze({
          name: "system_chevron-small-down_on-surface--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-down_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_chevron-small-down_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-down_on-primary--hover"
        }),
        active: freeze({
          name: "system_chevron-small-down_on-primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-down_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_chevron-small-down_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_chevron-small-down_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_chevron-small-down_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_chevron-small-down_primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-down_primary--hover"
        }),
        active: freeze({
          name: "system_chevron-small-down_primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-down_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_chevron-small-down_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_chevron-small-down_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-down_error-actionable--hover"
        }),
        active: freeze({
          name: "system_chevron-small-down_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-down_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_chevron-small-down_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_chevron-small-down_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_chevron-small-down_neutral--enabled"
        }),
        hover: freeze({
          name: "system_chevron-small-down_neutral--hover"
        }),
        active: freeze({
          name: "system_chevron-small-down_neutral--active"
        }),
        disabled: freeze({
          name: "system_chevron-small-down_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_chevron-small-down_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_chevron-small-down_bright--enabled"
        })
      })
    }),
    "chevron-right": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_chevron-right_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_chevron-right_on-surface--hover"
        }),
        active: freeze({
          name: "system_chevron-right_on-surface--active"
        }),
        disabled: freeze({
          name: "system_chevron-right_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_chevron-right_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-right_on-primary--hover"
        }),
        active: freeze({
          name: "system_chevron-right_on-primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-right_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_chevron-right_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_chevron-right_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_chevron-right_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_chevron-right_primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-right_primary--hover"
        }),
        active: freeze({
          name: "system_chevron-right_primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-right_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_chevron-right_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_chevron-right_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_chevron-right_error-actionable--hover"
        }),
        active: freeze({
          name: "system_chevron-right_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_chevron-right_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_chevron-right_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_chevron-right_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_chevron-right_neutral--enabled"
        }),
        hover: freeze({
          name: "system_chevron-right_neutral--hover"
        }),
        active: freeze({
          name: "system_chevron-right_neutral--active"
        }),
        disabled: freeze({
          name: "system_chevron-right_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_chevron-right_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_chevron-right_bright--enabled"
        })
      })
    }),
    "chevron-pag-right": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_chevron-pag-right_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_chevron-pag-right_on-surface--hover"
        }),
        active: freeze({
          name: "system_chevron-pag-right_on-surface--active"
        }),
        disabled: freeze({
          name: "system_chevron-pag-right_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_chevron-pag-right_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-pag-right_on-primary--hover"
        }),
        active: freeze({
          name: "system_chevron-pag-right_on-primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-pag-right_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_chevron-pag-right_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_chevron-pag-right_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_chevron-pag-right_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_chevron-pag-right_primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-pag-right_primary--hover"
        }),
        active: freeze({
          name: "system_chevron-pag-right_primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-pag-right_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_chevron-pag-right_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_chevron-pag-right_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_chevron-pag-right_error-actionable--hover"
        }),
        active: freeze({
          name: "system_chevron-pag-right_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_chevron-pag-right_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_chevron-pag-right_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_chevron-pag-right_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_chevron-pag-right_neutral--enabled"
        }),
        hover: freeze({
          name: "system_chevron-pag-right_neutral--hover"
        }),
        active: freeze({
          name: "system_chevron-pag-right_neutral--active"
        }),
        disabled: freeze({
          name: "system_chevron-pag-right_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_chevron-pag-right_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_chevron-pag-right_bright--enabled"
        })
      })
    }),
    "chevron-pag-left": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_chevron-pag-left_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_chevron-pag-left_on-surface--hover"
        }),
        active: freeze({
          name: "system_chevron-pag-left_on-surface--active"
        }),
        disabled: freeze({
          name: "system_chevron-pag-left_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_chevron-pag-left_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-pag-left_on-primary--hover"
        }),
        active: freeze({
          name: "system_chevron-pag-left_on-primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-pag-left_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_chevron-pag-left_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_chevron-pag-left_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_chevron-pag-left_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_chevron-pag-left_primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-pag-left_primary--hover"
        }),
        active: freeze({
          name: "system_chevron-pag-left_primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-pag-left_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_chevron-pag-left_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_chevron-pag-left_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_chevron-pag-left_error-actionable--hover"
        }),
        active: freeze({
          name: "system_chevron-pag-left_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_chevron-pag-left_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_chevron-pag-left_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_chevron-pag-left_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_chevron-pag-left_neutral--enabled"
        }),
        hover: freeze({
          name: "system_chevron-pag-left_neutral--hover"
        }),
        active: freeze({
          name: "system_chevron-pag-left_neutral--active"
        }),
        disabled: freeze({
          name: "system_chevron-pag-left_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_chevron-pag-left_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_chevron-pag-left_bright--enabled"
        })
      })
    }),
    "chevron-left": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_chevron-left_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_chevron-left_on-surface--hover"
        }),
        active: freeze({
          name: "system_chevron-left_on-surface--active"
        }),
        disabled: freeze({
          name: "system_chevron-left_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_chevron-left_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-left_on-primary--hover"
        }),
        active: freeze({
          name: "system_chevron-left_on-primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-left_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_chevron-left_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_chevron-left_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_chevron-left_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_chevron-left_primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-left_primary--hover"
        }),
        active: freeze({
          name: "system_chevron-left_primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-left_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_chevron-left_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_chevron-left_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_chevron-left_error-actionable--hover"
        }),
        active: freeze({
          name: "system_chevron-left_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_chevron-left_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_chevron-left_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_chevron-left_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_chevron-left_neutral--enabled"
        }),
        hover: freeze({
          name: "system_chevron-left_neutral--hover"
        }),
        active: freeze({
          name: "system_chevron-left_neutral--active"
        }),
        disabled: freeze({
          name: "system_chevron-left_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_chevron-left_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_chevron-left_bright--enabled"
        })
      })
    }),
    "chevron-down": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_chevron-down_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_chevron-down_on-surface--hover"
        }),
        active: freeze({
          name: "system_chevron-down_on-surface--active"
        }),
        disabled: freeze({
          name: "system_chevron-down_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_chevron-down_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-down_on-primary--hover"
        }),
        active: freeze({
          name: "system_chevron-down_on-primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-down_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_chevron-down_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_chevron-down_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_chevron-down_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_chevron-down_primary--enabled"
        }),
        hover: freeze({
          name: "system_chevron-down_primary--hover"
        }),
        active: freeze({
          name: "system_chevron-down_primary--active"
        }),
        disabled: freeze({
          name: "system_chevron-down_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_chevron-down_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_chevron-down_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_chevron-down_error-actionable--hover"
        }),
        active: freeze({
          name: "system_chevron-down_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_chevron-down_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_chevron-down_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_chevron-down_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_chevron-down_neutral--enabled"
        }),
        hover: freeze({
          name: "system_chevron-down_neutral--hover"
        }),
        active: freeze({
          name: "system_chevron-down_neutral--active"
        }),
        disabled: freeze({
          name: "system_chevron-down_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_chevron-down_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_chevron-down_bright--enabled"
        })
      })
    }),
    check: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_check_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_check_on-surface--hover"
        }),
        active: freeze({
          name: "system_check_on-surface--active"
        }),
        disabled: freeze({
          name: "system_check_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_check_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_check_on-primary--hover"
        }),
        active: freeze({
          name: "system_check_on-primary--active"
        }),
        disabled: freeze({
          name: "system_check_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_check_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_check_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_check_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_check_primary--enabled"
        }),
        hover: freeze({
          name: "system_check_primary--hover"
        }),
        active: freeze({
          name: "system_check_primary--active"
        }),
        disabled: freeze({
          name: "system_check_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_check_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_check_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_check_error-actionable--hover"
        }),
        active: freeze({
          name: "system_check_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_check_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_check_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_check_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_check_neutral--enabled"
        }),
        hover: freeze({
          name: "system_check_neutral--hover"
        }),
        active: freeze({
          name: "system_check_neutral--active"
        }),
        disabled: freeze({
          name: "system_check_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_check_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_check_bright--enabled"
        })
      })
    }),
    "check-circle": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_check-circle_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_check-circle_on-surface--hover"
        }),
        active: freeze({
          name: "system_check-circle_on-surface--active"
        }),
        disabled: freeze({
          name: "system_check-circle_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_check-circle_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_check-circle_on-primary--hover"
        }),
        active: freeze({
          name: "system_check-circle_on-primary--active"
        }),
        disabled: freeze({
          name: "system_check-circle_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_check-circle_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_check-circle_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_check-circle_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_check-circle_primary--enabled"
        }),
        hover: freeze({
          name: "system_check-circle_primary--hover"
        }),
        active: freeze({
          name: "system_check-circle_primary--active"
        }),
        disabled: freeze({
          name: "system_check-circle_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_check-circle_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_check-circle_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_check-circle_error-actionable--hover"
        }),
        active: freeze({
          name: "system_check-circle_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_check-circle_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_check-circle_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_check-circle_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_check-circle_neutral--enabled"
        }),
        hover: freeze({
          name: "system_check-circle_neutral--hover"
        }),
        active: freeze({
          name: "system_check-circle_neutral--active"
        }),
        disabled: freeze({
          name: "system_check-circle_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_check-circle_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_check-circle_bright--enabled"
        })
      })
    }),
    card: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_card_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_card_on-surface--hover"
        }),
        active: freeze({
          name: "system_card_on-surface--active"
        }),
        disabled: freeze({
          name: "system_card_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_card_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_card_on-primary--hover"
        }),
        active: freeze({
          name: "system_card_on-primary--active"
        }),
        disabled: freeze({
          name: "system_card_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_card_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_card_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_card_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_card_primary--enabled"
        }),
        hover: freeze({
          name: "system_card_primary--hover"
        }),
        active: freeze({
          name: "system_card_primary--active"
        }),
        disabled: freeze({
          name: "system_card_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_card_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_card_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_card_error-actionable--hover"
        }),
        active: freeze({
          name: "system_card_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_card_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_card_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_card_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_card_neutral--enabled"
        }),
        hover: freeze({
          name: "system_card_neutral--hover"
        }),
        active: freeze({
          name: "system_card_neutral--active"
        }),
        disabled: freeze({
          name: "system_card_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_card_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_card_bright--enabled"
        })
      })
    }),
    "cancel-circle": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_cancel-circle_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_cancel-circle_on-surface--hover"
        }),
        active: freeze({
          name: "system_cancel-circle_on-surface--active"
        }),
        disabled: freeze({
          name: "system_cancel-circle_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_cancel-circle_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_cancel-circle_on-primary--hover"
        }),
        active: freeze({
          name: "system_cancel-circle_on-primary--active"
        }),
        disabled: freeze({
          name: "system_cancel-circle_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_cancel-circle_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_cancel-circle_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_cancel-circle_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_cancel-circle_primary--enabled"
        }),
        hover: freeze({
          name: "system_cancel-circle_primary--hover"
        }),
        active: freeze({
          name: "system_cancel-circle_primary--active"
        }),
        disabled: freeze({
          name: "system_cancel-circle_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_cancel-circle_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_cancel-circle_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_cancel-circle_error-actionable--hover"
        }),
        active: freeze({
          name: "system_cancel-circle_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_cancel-circle_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_cancel-circle_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_cancel-circle_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_cancel-circle_neutral--enabled"
        }),
        hover: freeze({
          name: "system_cancel-circle_neutral--hover"
        }),
        active: freeze({
          name: "system_cancel-circle_neutral--active"
        }),
        disabled: freeze({
          name: "system_cancel-circle_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_cancel-circle_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_cancel-circle_bright--enabled"
        })
      })
    }),
    calendar: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_calendar_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_calendar_on-surface--hover"
        }),
        active: freeze({
          name: "system_calendar_on-surface--active"
        }),
        disabled: freeze({
          name: "system_calendar_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_calendar_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_calendar_on-primary--hover"
        }),
        active: freeze({
          name: "system_calendar_on-primary--active"
        }),
        disabled: freeze({
          name: "system_calendar_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_calendar_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_calendar_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_calendar_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_calendar_primary--enabled"
        }),
        hover: freeze({
          name: "system_calendar_primary--hover"
        }),
        active: freeze({
          name: "system_calendar_primary--active"
        }),
        disabled: freeze({
          name: "system_calendar_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_calendar_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_calendar_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_calendar_error-actionable--hover"
        }),
        active: freeze({
          name: "system_calendar_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_calendar_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_calendar_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_calendar_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_calendar_neutral--enabled"
        }),
        hover: freeze({
          name: "system_calendar_neutral--hover"
        }),
        active: freeze({
          name: "system_calendar_neutral--active"
        }),
        disabled: freeze({
          name: "system_calendar_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_calendar_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_calendar_bright--enabled"
        })
      })
    }),
    assistant: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_assistant_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_assistant_on-surface--hover"
        }),
        active: freeze({
          name: "system_assistant_on-surface--active"
        }),
        disabled: freeze({
          name: "system_assistant_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_assistant_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_assistant_on-primary--hover"
        }),
        active: freeze({
          name: "system_assistant_on-primary--active"
        }),
        disabled: freeze({
          name: "system_assistant_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_assistant_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_assistant_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_assistant_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_assistant_primary--enabled"
        }),
        hover: freeze({
          name: "system_assistant_primary--hover"
        }),
        active: freeze({
          name: "system_assistant_primary--active"
        }),
        disabled: freeze({
          name: "system_assistant_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_assistant_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_assistant_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_assistant_error-actionable--hover"
        }),
        active: freeze({
          name: "system_assistant_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_assistant_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_assistant_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_assistant_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_assistant_neutral--enabled"
        }),
        hover: freeze({
          name: "system_assistant_neutral--hover"
        }),
        active: freeze({
          name: "system_assistant_neutral--active"
        }),
        disabled: freeze({
          name: "system_assistant_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_assistant_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_assistant_bright--enabled"
        })
      })
    }),
    "arrow-right": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_arrow-right_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_arrow-right_on-surface--hover"
        }),
        active: freeze({
          name: "system_arrow-right_on-surface--active"
        }),
        disabled: freeze({
          name: "system_arrow-right_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_arrow-right_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_arrow-right_on-primary--hover"
        }),
        active: freeze({
          name: "system_arrow-right_on-primary--active"
        }),
        disabled: freeze({
          name: "system_arrow-right_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_arrow-right_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_arrow-right_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_arrow-right_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_arrow-right_primary--enabled"
        }),
        hover: freeze({
          name: "system_arrow-right_primary--hover"
        }),
        active: freeze({
          name: "system_arrow-right_primary--active"
        }),
        disabled: freeze({
          name: "system_arrow-right_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_arrow-right_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_arrow-right_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_arrow-right_error-actionable--hover"
        }),
        active: freeze({
          name: "system_arrow-right_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_arrow-right_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_arrow-right_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_arrow-right_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_arrow-right_neutral--enabled"
        }),
        hover: freeze({
          name: "system_arrow-right_neutral--hover"
        }),
        active: freeze({
          name: "system_arrow-right_neutral--active"
        }),
        disabled: freeze({
          name: "system_arrow-right_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_arrow-right_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_arrow-right_bright--enabled"
        })
      })
    }),
    "arrow-left": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_arrow-left_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_arrow-left_on-surface--hover"
        }),
        active: freeze({
          name: "system_arrow-left_on-surface--active"
        }),
        disabled: freeze({
          name: "system_arrow-left_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_arrow-left_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_arrow-left_on-primary--hover"
        }),
        active: freeze({
          name: "system_arrow-left_on-primary--active"
        }),
        disabled: freeze({
          name: "system_arrow-left_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_arrow-left_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_arrow-left_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_arrow-left_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_arrow-left_primary--enabled"
        }),
        hover: freeze({
          name: "system_arrow-left_primary--hover"
        }),
        active: freeze({
          name: "system_arrow-left_primary--active"
        }),
        disabled: freeze({
          name: "system_arrow-left_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_arrow-left_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_arrow-left_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_arrow-left_error-actionable--hover"
        }),
        active: freeze({
          name: "system_arrow-left_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_arrow-left_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_arrow-left_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_arrow-left_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_arrow-left_neutral--enabled"
        }),
        hover: freeze({
          name: "system_arrow-left_neutral--hover"
        }),
        active: freeze({
          name: "system_arrow-left_neutral--active"
        }),
        disabled: freeze({
          name: "system_arrow-left_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_arrow-left_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_arrow-left_bright--enabled"
        })
      })
    }),
    "arrow-drop-up": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_arrow-drop-up_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-up_on-surface--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-up_on-surface--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-up_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_arrow-drop-up_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-up_on-primary--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-up_on-primary--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-up_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_arrow-drop-up_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_arrow-drop-up_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_arrow-drop-up_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_arrow-drop-up_primary--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-up_primary--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-up_primary--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-up_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_arrow-drop-up_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_arrow-drop-up_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-up_error-actionable--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-up_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-up_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_arrow-drop-up_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_arrow-drop-up_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_arrow-drop-up_neutral--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-up_neutral--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-up_neutral--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-up_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_arrow-drop-up_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_arrow-drop-up_bright--enabled"
        })
      })
    }),
    "arrow-drop-right": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_arrow-drop-right_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-right_on-surface--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-right_on-surface--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-right_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_arrow-drop-right_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-right_on-primary--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-right_on-primary--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-right_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_arrow-drop-right_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_arrow-drop-right_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_arrow-drop-right_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_arrow-drop-right_primary--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-right_primary--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-right_primary--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-right_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_arrow-drop-right_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_arrow-drop-right_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-right_error-actionable--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-right_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-right_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_arrow-drop-right_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_arrow-drop-right_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_arrow-drop-right_neutral--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-right_neutral--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-right_neutral--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-right_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_arrow-drop-right_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_arrow-drop-right_bright--enabled"
        })
      })
    }),
    "arrow-drop-left": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_arrow-drop-left_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-left_on-surface--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-left_on-surface--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-left_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_arrow-drop-left_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-left_on-primary--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-left_on-primary--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-left_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_arrow-drop-left_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_arrow-drop-left_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_arrow-drop-left_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_arrow-drop-left_primary--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-left_primary--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-left_primary--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-left_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_arrow-drop-left_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_arrow-drop-left_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-left_error-actionable--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-left_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-left_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_arrow-drop-left_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_arrow-drop-left_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_arrow-drop-left_neutral--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-left_neutral--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-left_neutral--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-left_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_arrow-drop-left_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_arrow-drop-left_bright--enabled"
        })
      })
    }),
    "arrow-drop-down": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_arrow-drop-down_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-down_on-surface--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-down_on-surface--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-down_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_arrow-drop-down_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-down_on-primary--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-down_on-primary--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-down_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_arrow-drop-down_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_arrow-drop-down_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_arrow-drop-down_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_arrow-drop-down_primary--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-down_primary--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-down_primary--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-down_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_arrow-drop-down_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_arrow-drop-down_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-down_error-actionable--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-down_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-down_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_arrow-drop-down_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_arrow-drop-down_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_arrow-drop-down_neutral--enabled"
        }),
        hover: freeze({
          name: "system_arrow-drop-down_neutral--hover"
        }),
        active: freeze({
          name: "system_arrow-drop-down_neutral--active"
        }),
        disabled: freeze({
          name: "system_arrow-drop-down_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_arrow-drop-down_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_arrow-drop-down_bright--enabled"
        })
      })
    }),
    applications: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_applications_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_applications_on-surface--hover"
        }),
        active: freeze({
          name: "system_applications_on-surface--active"
        }),
        disabled: freeze({
          name: "system_applications_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_applications_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_applications_on-primary--hover"
        }),
        active: freeze({
          name: "system_applications_on-primary--active"
        }),
        disabled: freeze({
          name: "system_applications_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_applications_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_applications_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_applications_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_applications_primary--enabled"
        }),
        hover: freeze({
          name: "system_applications_primary--hover"
        }),
        active: freeze({
          name: "system_applications_primary--active"
        }),
        disabled: freeze({
          name: "system_applications_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_applications_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_applications_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_applications_error-actionable--hover"
        }),
        active: freeze({
          name: "system_applications_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_applications_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_applications_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_applications_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_applications_neutral--enabled"
        }),
        hover: freeze({
          name: "system_applications_neutral--hover"
        }),
        active: freeze({
          name: "system_applications_neutral--active"
        }),
        disabled: freeze({
          name: "system_applications_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_applications_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_applications_bright--enabled"
        })
      })
    }),
    add: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_add_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_add_on-surface--hover"
        }),
        active: freeze({
          name: "system_add_on-surface--active"
        }),
        disabled: freeze({
          name: "system_add_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_add_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_add_on-primary--hover"
        }),
        active: freeze({
          name: "system_add_on-primary--active"
        }),
        disabled: freeze({
          name: "system_add_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_add_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_add_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_add_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_add_primary--enabled"
        }),
        hover: freeze({
          name: "system_add_primary--hover"
        }),
        active: freeze({
          name: "system_add_primary--active"
        }),
        disabled: freeze({
          name: "system_add_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_add_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_add_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_add_error-actionable--hover"
        }),
        active: freeze({
          name: "system_add_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_add_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_add_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_add_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_add_neutral--enabled"
        }),
        hover: freeze({
          name: "system_add_neutral--hover"
        }),
        active: freeze({
          name: "system_add_neutral--active"
        }),
        disabled: freeze({
          name: "system_add_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_add_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_add_bright--enabled"
        })
      })
    }),
    "add-circle": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_add-circle_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_add-circle_on-surface--hover"
        }),
        active: freeze({
          name: "system_add-circle_on-surface--active"
        }),
        disabled: freeze({
          name: "system_add-circle_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_add-circle_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_add-circle_on-primary--hover"
        }),
        active: freeze({
          name: "system_add-circle_on-primary--active"
        }),
        disabled: freeze({
          name: "system_add-circle_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_add-circle_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_add-circle_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_add-circle_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_add-circle_primary--enabled"
        }),
        hover: freeze({
          name: "system_add-circle_primary--hover"
        }),
        active: freeze({
          name: "system_add-circle_primary--active"
        }),
        disabled: freeze({
          name: "system_add-circle_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_add-circle_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_add-circle_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_add-circle_error-actionable--hover"
        }),
        active: freeze({
          name: "system_add-circle_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_add-circle_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_add-circle_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_add-circle_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_add-circle_neutral--enabled"
        }),
        hover: freeze({
          name: "system_add-circle_neutral--hover"
        }),
        active: freeze({
          name: "system_add-circle_neutral--active"
        }),
        disabled: freeze({
          name: "system_add-circle_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_add-circle_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_add-circle_bright--enabled"
        })
      })
    }),
    "accessibility-new": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "system_accessibility-new_on-surface--enabled"
        }),
        hover: freeze({
          name: "system_accessibility-new_on-surface--hover"
        }),
        active: freeze({
          name: "system_accessibility-new_on-surface--active"
        }),
        disabled: freeze({
          name: "system_accessibility-new_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "system_accessibility-new_on-primary--enabled"
        }),
        hover: freeze({
          name: "system_accessibility-new_on-primary--hover"
        }),
        active: freeze({
          name: "system_accessibility-new_on-primary--active"
        }),
        disabled: freeze({
          name: "system_accessibility-new_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "system_accessibility-new_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "system_accessibility-new_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "system_accessibility-new_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "system_accessibility-new_primary--enabled"
        }),
        hover: freeze({
          name: "system_accessibility-new_primary--hover"
        }),
        active: freeze({
          name: "system_accessibility-new_primary--active"
        }),
        disabled: freeze({
          name: "system_accessibility-new_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "system_accessibility-new_error--enabled"
        })
      }),
      "error-actionable": freeze({
        enabled: freeze({
          name: "system_accessibility-new_error-actionable--enabled"
        }),
        hover: freeze({
          name: "system_accessibility-new_error-actionable--hover"
        }),
        active: freeze({
          name: "system_accessibility-new_error-actionable--active"
        }),
        disabled: freeze({
          name: "system_accessibility-new_error-actionable--disabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "system_accessibility-new_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "system_accessibility-new_success--enabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "system_accessibility-new_neutral--enabled"
        }),
        hover: freeze({
          name: "system_accessibility-new_neutral--hover"
        }),
        active: freeze({
          name: "system_accessibility-new_neutral--active"
        }),
        disabled: freeze({
          name: "system_accessibility-new_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "system_accessibility-new_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "system_accessibility-new_bright--enabled"
        })
      })
    })
  }),
  states: freeze({
    "pill-outlined": freeze({
      primary: freeze({
        enabled: freeze({
          name: "states_pill-outlined_primary--enabled"
        }),
        hover: freeze({
          name: "states_pill-outlined_primary--hover"
        }),
        active: freeze({
          name: "states_pill-outlined_primary--active"
        }),
        disabled: freeze({
          name: "states_pill-outlined_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "states_pill-outlined_error--enabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "states_pill-outlined_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "states_pill-outlined_success--enabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "states_pill-outlined_highlighted--enabled"
        })
      })
    }),
    "pill-filled": freeze({
      primary: freeze({
        enabled: freeze({
          name: "states_pill-filled_primary--enabled"
        }),
        hover: freeze({
          name: "states_pill-filled_primary--hover"
        }),
        active: freeze({
          name: "states_pill-filled_primary--active"
        }),
        disabled: freeze({
          name: "states_pill-filled_primary--disabled"
        })
      }),
      error: freeze({
        enabled: freeze({
          name: "states_pill-filled_error--enabled"
        })
      }),
      warning: freeze({
        enabled: freeze({
          name: "states_pill-filled_warning--enabled"
        })
      }),
      success: freeze({
        enabled: freeze({
          name: "states_pill-filled_success--enabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "states_pill-filled_highlighted--enabled"
        })
      })
    })
  }),
  "patterns-default-associated": freeze({
    synchronized: freeze({
      enabled: freeze({
        name: "patterns-default-associated_synchronized--enabled"
      }),
      hover: freeze({
        name: "patterns-default-associated_synchronized--hover"
      }),
      active: freeze({
        name: "patterns-default-associated_synchronized--active"
      }),
      disabled: freeze({
        name: "patterns-default-associated_synchronized--disabled"
      })
    }),
    modified: freeze({
      enabled: freeze({
        name: "patterns-default-associated_modified--enabled"
      }),
      hover: freeze({
        name: "patterns-default-associated_modified--hover"
      }),
      active: freeze({
        name: "patterns-default-associated_modified--active"
      }),
      disabled: freeze({
        name: "patterns-default-associated_modified--disabled"
      })
    }),
    "default-associated": freeze({
      enabled: freeze({
        name: "patterns-default-associated_default-associated--enabled"
      }),
      hover: freeze({
        name: "patterns-default-associated_default-associated--hover"
      }),
      active: freeze({
        name: "patterns-default-associated_default-associated--active"
      }),
      disabled: freeze({
        name: "patterns-default-associated_default-associated--disabled"
      })
    })
  }),
  patterns: freeze({
    "workwith-for-sd": freeze({
      enabled: freeze({
        name: "patterns_workwith-for-sd--enabled"
      }),
      hover: freeze({
        name: "patterns_workwith-for-sd--hover"
      }),
      active: freeze({
        name: "patterns_workwith-for-sd--active"
      }),
      disabled: freeze({
        name: "patterns_workwith-for-sd--disabled"
      })
    }),
    "work-with-web": freeze({
      enabled: freeze({
        name: "patterns_work-with-web--enabled"
      }),
      hover: freeze({
        name: "patterns_work-with-web--hover"
      }),
      active: freeze({
        name: "patterns_work-with-web--active"
      }),
      disabled: freeze({
        name: "patterns_work-with-web--disabled"
      })
    }),
    tabs: freeze({
      enabled: freeze({
        name: "patterns_tabs--enabled"
      }),
      hover: freeze({
        name: "patterns_tabs--hover"
      }),
      active: freeze({
        name: "patterns_tabs--active"
      }),
      disabled: freeze({
        name: "patterns_tabs--disabled"
      })
    }),
    tab: freeze({
      enabled: freeze({
        name: "patterns_tab--enabled"
      }),
      hover: freeze({
        name: "patterns_tab--hover"
      }),
      active: freeze({
        name: "patterns_tab--active"
      }),
      disabled: freeze({
        name: "patterns_tab--disabled"
      })
    }),
    structure: freeze({
      enabled: freeze({
        name: "patterns_structure--enabled"
      }),
      hover: freeze({
        name: "patterns_structure--hover"
      }),
      active: freeze({
        name: "patterns_structure--active"
      }),
      disabled: freeze({
        name: "patterns_structure--disabled"
      })
    }),
    row: freeze({
      enabled: freeze({
        name: "patterns_row--enabled"
      }),
      hover: freeze({
        name: "patterns_row--hover"
      }),
      active: freeze({
        name: "patterns_row--active"
      }),
      disabled: freeze({
        name: "patterns_row--disabled"
      })
    }),
    "pattern-category": freeze({
      enabled: freeze({
        name: "patterns_pattern-category--enabled"
      }),
      hover: freeze({
        name: "patterns_pattern-category--hover"
      }),
      active: freeze({
        name: "patterns_pattern-category--active"
      }),
      disabled: freeze({
        name: "patterns_pattern-category--disabled"
      })
    }),
    parameters: freeze({
      enabled: freeze({
        name: "patterns_parameters--enabled"
      }),
      hover: freeze({
        name: "patterns_parameters--hover"
      }),
      active: freeze({
        name: "patterns_parameters--active"
      }),
      disabled: freeze({
        name: "patterns_parameters--disabled"
      })
    }),
    parameter: freeze({
      enabled: freeze({
        name: "patterns_parameter--enabled"
      }),
      hover: freeze({
        name: "patterns_parameter--hover"
      }),
      active: freeze({
        name: "patterns_parameter--active"
      }),
      disabled: freeze({
        name: "patterns_parameter--disabled"
      })
    }),
    orders: freeze({
      enabled: freeze({
        name: "patterns_orders--enabled"
      }),
      hover: freeze({
        name: "patterns_orders--hover"
      }),
      active: freeze({
        name: "patterns_orders--active"
      }),
      disabled: freeze({
        name: "patterns_orders--disabled"
      })
    }),
    list: freeze({
      enabled: freeze({
        name: "patterns_list--enabled"
      }),
      hover: freeze({
        name: "patterns_list--hover"
      }),
      active: freeze({
        name: "patterns_list--active"
      }),
      disabled: freeze({
        name: "patterns_list--disabled"
      })
    }),
    "fixed-data": freeze({
      enabled: freeze({
        name: "patterns_fixed-data--enabled"
      }),
      hover: freeze({
        name: "patterns_fixed-data--hover"
      }),
      active: freeze({
        name: "patterns_fixed-data--active"
      }),
      disabled: freeze({
        name: "patterns_fixed-data--disabled"
      })
    }),
    filters: freeze({
      enabled: freeze({
        name: "patterns_filters--enabled"
      }),
      hover: freeze({
        name: "patterns_filters--hover"
      }),
      active: freeze({
        name: "patterns_filters--active"
      }),
      disabled: freeze({
        name: "patterns_filters--disabled"
      })
    }),
    events: freeze({
      enabled: freeze({
        name: "patterns_events--enabled"
      }),
      hover: freeze({
        name: "patterns_events--hover"
      }),
      active: freeze({
        name: "patterns_events--active"
      }),
      disabled: freeze({
        name: "patterns_events--disabled"
      })
    }),
    documentation: freeze({
      enabled: freeze({
        name: "patterns_documentation--enabled"
      }),
      hover: freeze({
        name: "patterns_documentation--hover"
      }),
      active: freeze({
        name: "patterns_documentation--active"
      }),
      disabled: freeze({
        name: "patterns_documentation--disabled"
      })
    }),
    detail: freeze({
      enabled: freeze({
        name: "patterns_detail--enabled"
      }),
      hover: freeze({
        name: "patterns_detail--hover"
      }),
      active: freeze({
        name: "patterns_detail--active"
      }),
      disabled: freeze({
        name: "patterns_detail--disabled"
      })
    }),
    cell: freeze({
      enabled: freeze({
        name: "patterns_cell--enabled"
      }),
      hover: freeze({
        name: "patterns_cell--hover"
      }),
      active: freeze({
        name: "patterns_cell--active"
      }),
      disabled: freeze({
        name: "patterns_cell--disabled"
      })
    }),
    attributes: freeze({
      enabled: freeze({
        name: "patterns_attributes--enabled"
      }),
      hover: freeze({
        name: "patterns_attributes--hover"
      }),
      active: freeze({
        name: "patterns_attributes--active"
      }),
      disabled: freeze({
        name: "patterns_attributes--disabled"
      })
    })
  }),
  "objects-parts": freeze({
    variables: freeze({
      enabled: freeze({
        name: "objects-parts_variables--enabled"
      }),
      hover: freeze({
        name: "objects-parts_variables--hover"
      }),
      active: freeze({
        name: "objects-parts_variables--active"
      }),
      disabled: freeze({
        name: "objects-parts_variables--disabled"
      })
    }),
    rules: freeze({
      enabled: freeze({
        name: "objects-parts_rules--enabled"
      }),
      hover: freeze({
        name: "objects-parts_rules--hover"
      }),
      active: freeze({
        name: "objects-parts_rules--active"
      }),
      disabled: freeze({
        name: "objects-parts_rules--disabled"
      })
    }),
    events: freeze({
      enabled: freeze({
        name: "objects-parts_events--enabled"
      }),
      hover: freeze({
        name: "objects-parts_events--hover"
      }),
      active: freeze({
        name: "objects-parts_events--active"
      }),
      disabled: freeze({
        name: "objects-parts_events--disabled"
      })
    }),
    conditions: freeze({
      enabled: freeze({
        name: "objects-parts_conditions--enabled"
      }),
      hover: freeze({
        name: "objects-parts_conditions--hover"
      }),
      active: freeze({
        name: "objects-parts_conditions--active"
      }),
      disabled: freeze({
        name: "objects-parts_conditions--disabled"
      })
    }),
    condition: freeze({
      enabled: freeze({
        name: "objects-parts_condition--enabled"
      }),
      hover: freeze({
        name: "objects-parts_condition--hover"
      }),
      active: freeze({
        name: "objects-parts_condition--active"
      }),
      disabled: freeze({
        name: "objects-parts_condition--disabled"
      })
    })
  }),
  objects: freeze({
    workflow: freeze({
      enabled: freeze({
        name: "objects_workflow--enabled"
      }),
      hover: freeze({
        name: "objects_workflow--hover"
      }),
      active: freeze({
        name: "objects_workflow--active"
      }),
      disabled: freeze({
        name: "objects_workflow--disabled"
      })
    }),
    "work-panel": freeze({
      enabled: freeze({
        name: "objects_work-panel--enabled"
      }),
      hover: freeze({
        name: "objects_work-panel--hover"
      }),
      active: freeze({
        name: "objects_work-panel--active"
      }),
      disabled: freeze({
        name: "objects_work-panel--disabled"
      })
    }),
    webpanel: freeze({
      enabled: freeze({
        name: "objects_webpanel--enabled"
      }),
      hover: freeze({
        name: "objects_webpanel--hover"
      }),
      active: freeze({
        name: "objects_webpanel--active"
      }),
      disabled: freeze({
        name: "objects_webpanel--disabled"
      })
    }),
    "web-component": freeze({
      enabled: freeze({
        name: "objects_web-component--enabled"
      }),
      hover: freeze({
        name: "objects_web-component--hover"
      }),
      active: freeze({
        name: "objects_web-component--active"
      }),
      disabled: freeze({
        name: "objects_web-component--disabled"
      })
    }),
    version: freeze({
      enabled: freeze({
        name: "objects_version--enabled"
      }),
      hover: freeze({
        name: "objects_version--hover"
      }),
      active: freeze({
        name: "objects_version--active"
      }),
      disabled: freeze({
        name: "objects_version--disabled"
      })
    }),
    "url-rewrite": freeze({
      enabled: freeze({
        name: "objects_url-rewrite--enabled"
      }),
      hover: freeze({
        name: "objects_url-rewrite--hover"
      }),
      active: freeze({
        name: "objects_url-rewrite--active"
      }),
      disabled: freeze({
        name: "objects_url-rewrite--disabled"
      })
    }),
    transaction: freeze({
      enabled: freeze({
        name: "objects_transaction--enabled"
      }),
      hover: freeze({
        name: "objects_transaction--hover"
      }),
      active: freeze({
        name: "objects_transaction--active"
      }),
      disabled: freeze({
        name: "objects_transaction--disabled"
      })
    }),
    "to-be-defined": freeze({
      enabled: freeze({
        name: "objects_to-be-defined--enabled"
      }),
      hover: freeze({
        name: "objects_to-be-defined--hover"
      }),
      active: freeze({
        name: "objects_to-be-defined--active"
      }),
      disabled: freeze({
        name: "objects_to-be-defined--disabled"
      })
    }),
    theme: freeze({
      enabled: freeze({
        name: "objects_theme--enabled"
      }),
      hover: freeze({
        name: "objects_theme--hover"
      }),
      active: freeze({
        name: "objects_theme--active"
      }),
      disabled: freeze({
        name: "objects_theme--disabled"
      })
    }),
    "theme-web": freeze({
      enabled: freeze({
        name: "objects_theme-web--enabled"
      }),
      hover: freeze({
        name: "objects_theme-web--hover"
      }),
      active: freeze({
        name: "objects_theme-web--active"
      }),
      disabled: freeze({
        name: "objects_theme-web--disabled"
      })
    }),
    "theme-for-sd": freeze({
      enabled: freeze({
        name: "objects_theme-for-sd--enabled"
      }),
      hover: freeze({
        name: "objects_theme-for-sd--hover"
      }),
      active: freeze({
        name: "objects_theme-for-sd--active"
      }),
      disabled: freeze({
        name: "objects_theme-for-sd--disabled"
      })
    }),
    table: freeze({
      enabled: freeze({
        name: "objects_table--enabled"
      }),
      hover: freeze({
        name: "objects_table--hover"
      }),
      active: freeze({
        name: "objects_table--active"
      }),
      disabled: freeze({
        name: "objects_table--disabled"
      })
    }),
    "super-app": freeze({
      enabled: freeze({
        name: "objects_super-app--enabled"
      }),
      hover: freeze({
        name: "objects_super-app--hover"
      }),
      active: freeze({
        name: "objects_super-app--active"
      }),
      disabled: freeze({
        name: "objects_super-app--disabled"
      })
    }),
    "subtype-group": freeze({
      enabled: freeze({
        name: "objects_subtype-group--enabled"
      }),
      hover: freeze({
        name: "objects_subtype-group--hover"
      }),
      active: freeze({
        name: "objects_subtype-group--active"
      }),
      disabled: freeze({
        name: "objects_subtype-group--disabled"
      })
    }),
    "structured-data-type": freeze({
      enabled: freeze({
        name: "objects_structured-data-type--enabled"
      }),
      hover: freeze({
        name: "objects_structured-data-type--hover"
      }),
      active: freeze({
        name: "objects_structured-data-type--active"
      }),
      disabled: freeze({
        name: "objects_structured-data-type--disabled"
      })
    }),
    stencil: freeze({
      enabled: freeze({
        name: "objects_stencil--enabled"
      }),
      hover: freeze({
        name: "objects_stencil--hover"
      }),
      active: freeze({
        name: "objects_stencil--active"
      }),
      disabled: freeze({
        name: "objects_stencil--disabled"
      })
    }),
    roles: freeze({
      enabled: freeze({
        name: "objects_roles--enabled"
      }),
      hover: freeze({
        name: "objects_roles--hover"
      }),
      active: freeze({
        name: "objects_roles--active"
      }),
      disabled: freeze({
        name: "objects_roles--disabled"
      })
    }),
    report: freeze({
      enabled: freeze({
        name: "objects_report--enabled"
      }),
      hover: freeze({
        name: "objects_report--hover"
      }),
      active: freeze({
        name: "objects_report--active"
      }),
      disabled: freeze({
        name: "objects_report--disabled"
      })
    }),
    references: freeze({
      enabled: freeze({
        name: "objects_references--enabled"
      }),
      hover: freeze({
        name: "objects_references--hover"
      }),
      active: freeze({
        name: "objects_references--active"
      }),
      disabled: freeze({
        name: "objects_references--disabled"
      })
    }),
    query: freeze({
      enabled: freeze({
        name: "objects_query--enabled"
      }),
      hover: freeze({
        name: "objects_query--hover"
      }),
      active: freeze({
        name: "objects_query--active"
      }),
      disabled: freeze({
        name: "objects_query--disabled"
      })
    }),
    procedure: freeze({
      enabled: freeze({
        name: "objects_procedure--enabled"
      }),
      hover: freeze({
        name: "objects_procedure--hover"
      }),
      active: freeze({
        name: "objects_procedure--active"
      }),
      disabled: freeze({
        name: "objects_procedure--disabled"
      })
    }),
    patterns: freeze({
      enabled: freeze({
        name: "objects_patterns--enabled"
      }),
      hover: freeze({
        name: "objects_patterns--hover"
      }),
      active: freeze({
        name: "objects_patterns--active"
      }),
      disabled: freeze({
        name: "objects_patterns--disabled"
      })
    }),
    "panel-for-sd": freeze({
      enabled: freeze({
        name: "objects_panel-for-sd--enabled"
      }),
      hover: freeze({
        name: "objects_panel-for-sd--hover"
      }),
      active: freeze({
        name: "objects_panel-for-sd--active"
      }),
      disabled: freeze({
        name: "objects_panel-for-sd--disabled"
      })
    }),
    "orphant-document": freeze({
      enabled: freeze({
        name: "objects_orphant-document--enabled"
      }),
      hover: freeze({
        name: "objects_orphant-document--hover"
      }),
      active: freeze({
        name: "objects_orphant-document--active"
      }),
      disabled: freeze({
        name: "objects_orphant-document--disabled"
      })
    }),
    "offline-database": freeze({
      enabled: freeze({
        name: "objects_offline-database--enabled"
      }),
      hover: freeze({
        name: "objects_offline-database--hover"
      }),
      active: freeze({
        name: "objects_offline-database--active"
      }),
      disabled: freeze({
        name: "objects_offline-database--disabled"
      })
    }),
    object: freeze({
      enabled: freeze({
        name: "objects_object--enabled"
      }),
      hover: freeze({
        name: "objects_object--hover"
      }),
      active: freeze({
        name: "objects_object--active"
      }),
      disabled: freeze({
        name: "objects_object--disabled"
      })
    }),
    "notification-templates": freeze({
      enabled: freeze({
        name: "objects_notification-templates--enabled"
      }),
      hover: freeze({
        name: "objects_notification-templates--hover"
      }),
      active: freeze({
        name: "objects_notification-templates--active"
      }),
      disabled: freeze({
        name: "objects_notification-templates--disabled"
      })
    }),
    module: freeze({
      enabled: freeze({
        name: "objects_module--enabled"
      }),
      hover: freeze({
        name: "objects_module--hover"
      }),
      active: freeze({
        name: "objects_module--active"
      }),
      disabled: freeze({
        name: "objects_module--disabled"
      })
    }),
    "module-open": freeze({
      enabled: freeze({
        name: "objects_module-open--enabled"
      }),
      hover: freeze({
        name: "objects_module-open--hover"
      }),
      active: freeze({
        name: "objects_module-open--active"
      }),
      disabled: freeze({
        name: "objects_module-open--disabled"
      })
    }),
    "mini-app": freeze({
      enabled: freeze({
        name: "objects_mini-app--enabled"
      }),
      hover: freeze({
        name: "objects_mini-app--hover"
      }),
      active: freeze({
        name: "objects_mini-app--active"
      }),
      disabled: freeze({
        name: "objects_mini-app--disabled"
      })
    }),
    menubar: freeze({
      enabled: freeze({
        name: "objects_menubar--enabled"
      }),
      hover: freeze({
        name: "objects_menubar--hover"
      }),
      active: freeze({
        name: "objects_menubar--active"
      }),
      disabled: freeze({
        name: "objects_menubar--disabled"
      })
    }),
    menu: freeze({
      enabled: freeze({
        name: "objects_menu--enabled"
      }),
      hover: freeze({
        name: "objects_menu--hover"
      }),
      active: freeze({
        name: "objects_menu--active"
      }),
      disabled: freeze({
        name: "objects_menu--disabled"
      })
    }),
    masterpage: freeze({
      enabled: freeze({
        name: "objects_masterpage--enabled"
      }),
      hover: freeze({
        name: "objects_masterpage--hover"
      }),
      active: freeze({
        name: "objects_masterpage--active"
      }),
      disabled: freeze({
        name: "objects_masterpage--disabled"
      })
    }),
    "main-object": freeze({
      enabled: freeze({
        name: "objects_main-object--enabled"
      }),
      hover: freeze({
        name: "objects_main-object--hover"
      }),
      active: freeze({
        name: "objects_main-object--active"
      }),
      disabled: freeze({
        name: "objects_main-object--disabled"
      })
    }),
    language: freeze({
      enabled: freeze({
        name: "objects_language--enabled"
      }),
      hover: freeze({
        name: "objects_language--hover"
      }),
      active: freeze({
        name: "objects_language--active"
      }),
      disabled: freeze({
        name: "objects_language--disabled"
      })
    }),
    "knowledge-base": freeze({
      enabled: freeze({
        name: "objects_knowledge-base--enabled"
      }),
      hover: freeze({
        name: "objects_knowledge-base--hover"
      }),
      active: freeze({
        name: "objects_knowledge-base--active"
      }),
      disabled: freeze({
        name: "objects_knowledge-base--disabled"
      })
    }),
    image: freeze({
      enabled: freeze({
        name: "objects_image--enabled"
      }),
      hover: freeze({
        name: "objects_image--hover"
      }),
      active: freeze({
        name: "objects_image--active"
      }),
      disabled: freeze({
        name: "objects_image--disabled"
      })
    }),
    generator: freeze({
      enabled: freeze({
        name: "objects_generator--enabled"
      }),
      hover: freeze({
        name: "objects_generator--hover"
      }),
      active: freeze({
        name: "objects_generator--active"
      }),
      disabled: freeze({
        name: "objects_generator--disabled"
      })
    }),
    "generator-category": freeze({
      enabled: freeze({
        name: "objects_generator-category--enabled"
      }),
      hover: freeze({
        name: "objects_generator-category--hover"
      }),
      active: freeze({
        name: "objects_generator-category--active"
      }),
      disabled: freeze({
        name: "objects_generator-category--disabled"
      })
    }),
    folder: freeze({
      enabled: freeze({
        name: "objects_folder--enabled"
      }),
      hover: freeze({
        name: "objects_folder--hover"
      }),
      active: freeze({
        name: "objects_folder--active"
      }),
      disabled: freeze({
        name: "objects_folder--disabled"
      })
    }),
    "folder-open": freeze({
      enabled: freeze({
        name: "objects_folder-open--enabled"
      }),
      hover: freeze({
        name: "objects_folder-open--hover"
      }),
      active: freeze({
        name: "objects_folder-open--active"
      }),
      disabled: freeze({
        name: "objects_folder-open--disabled"
      })
    }),
    file: freeze({
      enabled: freeze({
        name: "objects_file--enabled"
      }),
      hover: freeze({
        name: "objects_file--hover"
      }),
      active: freeze({
        name: "objects_file--active"
      }),
      disabled: freeze({
        name: "objects_file--disabled"
      })
    }),
    "external-object": freeze({
      enabled: freeze({
        name: "objects_external-object--enabled"
      }),
      hover: freeze({
        name: "objects_external-object--hover"
      }),
      active: freeze({
        name: "objects_external-object--active"
      }),
      disabled: freeze({
        name: "objects_external-object--disabled"
      })
    }),
    "environment-select": freeze({
      enabled: freeze({
        name: "objects_environment-select--enabled"
      }),
      hover: freeze({
        name: "objects_environment-select--hover"
      }),
      active: freeze({
        name: "objects_environment-select--active"
      }),
      disabled: freeze({
        name: "objects_environment-select--disabled"
      })
    }),
    "environment-no-select": freeze({
      enabled: freeze({
        name: "objects_environment-no-select--enabled"
      }),
      hover: freeze({
        name: "objects_environment-no-select--hover"
      }),
      active: freeze({
        name: "objects_environment-no-select--active"
      }),
      disabled: freeze({
        name: "objects_environment-no-select--disabled"
      })
    }),
    dso: freeze({
      enabled: freeze({
        name: "objects_dso--enabled"
      }),
      hover: freeze({
        name: "objects_dso--hover"
      }),
      active: freeze({
        name: "objects_dso--active"
      }),
      disabled: freeze({
        name: "objects_dso--disabled"
      })
    }),
    domain: freeze({
      enabled: freeze({
        name: "objects_domain--enabled"
      }),
      hover: freeze({
        name: "objects_domain--hover"
      }),
      active: freeze({
        name: "objects_domain--active"
      }),
      disabled: freeze({
        name: "objects_domain--disabled"
      })
    }),
    document: freeze({
      enabled: freeze({
        name: "objects_document--enabled"
      }),
      hover: freeze({
        name: "objects_document--hover"
      }),
      active: freeze({
        name: "objects_document--active"
      }),
      disabled: freeze({
        name: "objects_document--disabled"
      })
    }),
    "document-workflow": freeze({
      enabled: freeze({
        name: "objects_document-workflow--enabled"
      }),
      hover: freeze({
        name: "objects_document-workflow--hover"
      }),
      active: freeze({
        name: "objects_document-workflow--active"
      }),
      disabled: freeze({
        name: "objects_document-workflow--disabled"
      })
    }),
    diagram: freeze({
      enabled: freeze({
        name: "objects_diagram--enabled"
      }),
      hover: freeze({
        name: "objects_diagram--hover"
      }),
      active: freeze({
        name: "objects_diagram--active"
      }),
      disabled: freeze({
        name: "objects_diagram--disabled"
      })
    }),
    design: freeze({
      enabled: freeze({
        name: "objects_design--enabled"
      }),
      hover: freeze({
        name: "objects_design--hover"
      }),
      active: freeze({
        name: "objects_design--active"
      }),
      disabled: freeze({
        name: "objects_design--disabled"
      })
    }),
    "deployment-unit": freeze({
      enabled: freeze({
        name: "objects_deployment-unit--enabled"
      }),
      hover: freeze({
        name: "objects_deployment-unit--hover"
      }),
      active: freeze({
        name: "objects_deployment-unit--active"
      }),
      disabled: freeze({
        name: "objects_deployment-unit--disabled"
      })
    }),
    "dataview-index": freeze({
      enabled: freeze({
        name: "objects_dataview-index--enabled"
      }),
      hover: freeze({
        name: "objects_dataview-index--hover"
      }),
      active: freeze({
        name: "objects_dataview-index--active"
      }),
      disabled: freeze({
        name: "objects_dataview-index--disabled"
      })
    }),
    datastore: freeze({
      enabled: freeze({
        name: "objects_datastore--enabled"
      }),
      hover: freeze({
        name: "objects_datastore--hover"
      }),
      active: freeze({
        name: "objects_datastore--active"
      }),
      disabled: freeze({
        name: "objects_datastore--disabled"
      })
    }),
    "datastore-category": freeze({
      enabled: freeze({
        name: "objects_datastore-category--enabled"
      }),
      hover: freeze({
        name: "objects_datastore-category--hover"
      }),
      active: freeze({
        name: "objects_datastore-category--active"
      }),
      disabled: freeze({
        name: "objects_datastore-category--disabled"
      })
    }),
    "data-view": freeze({
      enabled: freeze({
        name: "objects_data-view--enabled"
      }),
      hover: freeze({
        name: "objects_data-view--hover"
      }),
      active: freeze({
        name: "objects_data-view--active"
      }),
      disabled: freeze({
        name: "objects_data-view--disabled"
      })
    }),
    "data-selector": freeze({
      enabled: freeze({
        name: "objects_data-selector--enabled"
      }),
      hover: freeze({
        name: "objects_data-selector--hover"
      }),
      active: freeze({
        name: "objects_data-selector--active"
      }),
      disabled: freeze({
        name: "objects_data-selector--disabled"
      })
    }),
    "data-provider": freeze({
      enabled: freeze({
        name: "objects_data-provider--enabled"
      }),
      hover: freeze({
        name: "objects_data-provider--hover"
      }),
      active: freeze({
        name: "objects_data-provider--active"
      }),
      disabled: freeze({
        name: "objects_data-provider--disabled"
      })
    }),
    dashboard: freeze({
      enabled: freeze({
        name: "objects_dashboard--enabled"
      }),
      hover: freeze({
        name: "objects_dashboard--hover"
      }),
      active: freeze({
        name: "objects_dashboard--active"
      }),
      disabled: freeze({
        name: "objects_dashboard--disabled"
      })
    }),
    customization: freeze({
      enabled: freeze({
        name: "objects_customization--enabled"
      }),
      hover: freeze({
        name: "objects_customization--hover"
      }),
      active: freeze({
        name: "objects_customization--active"
      }),
      disabled: freeze({
        name: "objects_customization--disabled"
      })
    }),
    "conversational-flows": freeze({
      enabled: freeze({
        name: "objects_conversational-flows--enabled"
      }),
      hover: freeze({
        name: "objects_conversational-flows--hover"
      }),
      active: freeze({
        name: "objects_conversational-flows--active"
      }),
      disabled: freeze({
        name: "objects_conversational-flows--disabled"
      })
    }),
    category: freeze({
      enabled: freeze({
        name: "objects_category--enabled"
      }),
      hover: freeze({
        name: "objects_category--hover"
      }),
      active: freeze({
        name: "objects_category--active"
      }),
      disabled: freeze({
        name: "objects_category--disabled"
      })
    }),
    calendars: freeze({
      enabled: freeze({
        name: "objects_calendars--enabled"
      }),
      hover: freeze({
        name: "objects_calendars--hover"
      }),
      active: freeze({
        name: "objects_calendars--active"
      }),
      disabled: freeze({
        name: "objects_calendars--disabled"
      })
    }),
    "business-process-diagram": freeze({
      enabled: freeze({
        name: "objects_business-process-diagram--enabled"
      }),
      hover: freeze({
        name: "objects_business-process-diagram--hover"
      }),
      active: freeze({
        name: "objects_business-process-diagram--active"
      }),
      disabled: freeze({
        name: "objects_business-process-diagram--disabled"
      })
    }),
    "bg-color": freeze({
      enabled: freeze({
        name: "objects_bg-color--enabled"
      }),
      hover: freeze({
        name: "objects_bg-color--hover"
      }),
      active: freeze({
        name: "objects_bg-color--active"
      }),
      disabled: freeze({
        name: "objects_bg-color--disabled"
      })
    }),
    attribute: freeze({
      enabled: freeze({
        name: "objects_attribute--enabled"
      }),
      hover: freeze({
        name: "objects_attribute--hover"
      }),
      active: freeze({
        name: "objects_attribute--active"
      }),
      disabled: freeze({
        name: "objects_attribute--disabled"
      })
    }),
    api: freeze({
      enabled: freeze({
        name: "objects_api--enabled"
      }),
      hover: freeze({
        name: "objects_api--hover"
      }),
      active: freeze({
        name: "objects_api--active"
      }),
      disabled: freeze({
        name: "objects_api--disabled"
      })
    })
  }),
  navigation: freeze({
    "pill-outlined": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_pill-outlined_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_pill-outlined_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_pill-outlined_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_pill-outlined_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_pill-outlined_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_pill-outlined_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_pill-outlined_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_pill-outlined_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_pill-outlined_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_pill-outlined_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_pill-outlined_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_pill-outlined_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_pill-outlined_primary--hover"
        }),
        active: freeze({
          name: "navigation_pill-outlined_primary--active"
        }),
        disabled: freeze({
          name: "navigation_pill-outlined_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_pill-outlined_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_pill-outlined_neutral--hover"
        }),
        active: freeze({
          name: "navigation_pill-outlined_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_pill-outlined_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_pill-outlined_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_pill-outlined_bright--enabled"
        })
      })
    }),
    "pill-filled": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_pill-filled_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_pill-filled_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_pill-filled_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_pill-filled_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_pill-filled_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_pill-filled_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_pill-filled_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_pill-filled_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_pill-filled_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_pill-filled_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_pill-filled_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_pill-filled_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_pill-filled_primary--hover"
        }),
        active: freeze({
          name: "navigation_pill-filled_primary--active"
        }),
        disabled: freeze({
          name: "navigation_pill-filled_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_pill-filled_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_pill-filled_neutral--hover"
        }),
        active: freeze({
          name: "navigation_pill-filled_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_pill-filled_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_pill-filled_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_pill-filled_bright--enabled"
        })
      })
    }),
    "level-up": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_level-up_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_level-up_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_level-up_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_level-up_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_level-up_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_level-up_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_level-up_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_level-up_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_level-up_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_level-up_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_level-up_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_level-up_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_level-up_primary--hover"
        }),
        active: freeze({
          name: "navigation_level-up_primary--active"
        }),
        disabled: freeze({
          name: "navigation_level-up_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_level-up_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_level-up_neutral--hover"
        }),
        active: freeze({
          name: "navigation_level-up_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_level-up_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_level-up_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_level-up_bright--enabled"
        })
      })
    }),
    "level-down": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_level-down_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_level-down_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_level-down_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_level-down_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_level-down_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_level-down_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_level-down_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_level-down_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_level-down_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_level-down_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_level-down_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_level-down_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_level-down_primary--hover"
        }),
        active: freeze({
          name: "navigation_level-down_primary--active"
        }),
        disabled: freeze({
          name: "navigation_level-down_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_level-down_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_level-down_neutral--hover"
        }),
        active: freeze({
          name: "navigation_level-down_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_level-down_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_level-down_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_level-down_bright--enabled"
        })
      })
    }),
    "gx-arrow-right": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_gx-arrow-right_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_gx-arrow-right_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_gx-arrow-right_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_gx-arrow-right_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_gx-arrow-right_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_gx-arrow-right_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_gx-arrow-right_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_gx-arrow-right_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_gx-arrow-right_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_gx-arrow-right_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_gx-arrow-right_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_gx-arrow-right_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_gx-arrow-right_primary--hover"
        }),
        active: freeze({
          name: "navigation_gx-arrow-right_primary--active"
        }),
        disabled: freeze({
          name: "navigation_gx-arrow-right_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_gx-arrow-right_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_gx-arrow-right_neutral--hover"
        }),
        active: freeze({
          name: "navigation_gx-arrow-right_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_gx-arrow-right_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_gx-arrow-right_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_gx-arrow-right_bright--enabled"
        })
      })
    }),
    drag: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_drag_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_drag_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_drag_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_drag_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_drag_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_drag_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_drag_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_drag_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_drag_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_drag_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_drag_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_drag_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_drag_primary--hover"
        }),
        active: freeze({
          name: "navigation_drag_primary--active"
        }),
        disabled: freeze({
          name: "navigation_drag_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_drag_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_drag_neutral--hover"
        }),
        active: freeze({
          name: "navigation_drag_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_drag_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_drag_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_drag_bright--enabled"
        })
      })
    }),
    "chevron-up": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_chevron-up_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-up_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_chevron-up_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-up_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_chevron-up_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-up_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_chevron-up_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-up_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_chevron-up_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_chevron-up_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_chevron-up_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_chevron-up_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-up_primary--hover"
        }),
        active: freeze({
          name: "navigation_chevron-up_primary--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-up_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_chevron-up_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-up_neutral--hover"
        }),
        active: freeze({
          name: "navigation_chevron-up_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-up_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_chevron-up_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_chevron-up_bright--enabled"
        })
      })
    }),
    "chevron-right": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_chevron-right_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-right_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_chevron-right_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-right_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_chevron-right_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-right_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_chevron-right_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-right_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_chevron-right_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_chevron-right_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_chevron-right_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_chevron-right_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-right_primary--hover"
        }),
        active: freeze({
          name: "navigation_chevron-right_primary--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-right_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_chevron-right_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-right_neutral--hover"
        }),
        active: freeze({
          name: "navigation_chevron-right_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-right_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_chevron-right_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_chevron-right_bright--enabled"
        })
      })
    }),
    "chevron-left": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_chevron-left_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-left_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_chevron-left_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-left_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_chevron-left_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-left_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_chevron-left_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-left_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_chevron-left_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_chevron-left_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_chevron-left_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_chevron-left_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-left_primary--hover"
        }),
        active: freeze({
          name: "navigation_chevron-left_primary--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-left_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_chevron-left_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-left_neutral--hover"
        }),
        active: freeze({
          name: "navigation_chevron-left_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-left_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_chevron-left_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_chevron-left_bright--enabled"
        })
      })
    }),
    "chevron-down": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_chevron-down_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-down_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_chevron-down_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-down_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_chevron-down_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-down_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_chevron-down_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-down_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_chevron-down_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_chevron-down_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_chevron-down_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_chevron-down_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-down_primary--hover"
        }),
        active: freeze({
          name: "navigation_chevron-down_primary--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-down_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_chevron-down_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_chevron-down_neutral--hover"
        }),
        active: freeze({
          name: "navigation_chevron-down_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_chevron-down_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_chevron-down_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_chevron-down_bright--enabled"
        })
      })
    }),
    bullet: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_bullet_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_bullet_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_bullet_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_bullet_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_bullet_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_bullet_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_bullet_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_bullet_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_bullet_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_bullet_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_bullet_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_bullet_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_bullet_primary--hover"
        }),
        active: freeze({
          name: "navigation_bullet_primary--active"
        }),
        disabled: freeze({
          name: "navigation_bullet_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_bullet_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_bullet_neutral--hover"
        }),
        active: freeze({
          name: "navigation_bullet_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_bullet_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_bullet_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_bullet_bright--enabled"
        })
      })
    }),
    "arrow-up": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_arrow-up_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-up_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_arrow-up_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-up_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_arrow-up_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-up_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_arrow-up_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-up_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_arrow-up_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_arrow-up_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_arrow-up_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_arrow-up_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-up_primary--hover"
        }),
        active: freeze({
          name: "navigation_arrow-up_primary--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-up_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_arrow-up_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-up_neutral--hover"
        }),
        active: freeze({
          name: "navigation_arrow-up_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-up_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_arrow-up_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_arrow-up_bright--enabled"
        })
      })
    }),
    "arrow-right": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_arrow-right_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-right_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_arrow-right_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-right_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_arrow-right_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-right_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_arrow-right_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-right_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_arrow-right_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_arrow-right_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_arrow-right_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_arrow-right_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-right_primary--hover"
        }),
        active: freeze({
          name: "navigation_arrow-right_primary--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-right_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_arrow-right_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-right_neutral--hover"
        }),
        active: freeze({
          name: "navigation_arrow-right_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-right_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_arrow-right_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_arrow-right_bright--enabled"
        })
      })
    }),
    "arrow-left": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_arrow-left_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-left_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_arrow-left_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-left_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_arrow-left_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-left_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_arrow-left_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-left_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_arrow-left_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_arrow-left_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_arrow-left_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_arrow-left_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-left_primary--hover"
        }),
        active: freeze({
          name: "navigation_arrow-left_primary--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-left_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_arrow-left_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-left_neutral--hover"
        }),
        active: freeze({
          name: "navigation_arrow-left_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-left_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_arrow-left_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_arrow-left_bright--enabled"
        })
      })
    }),
    "arrow-down": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_arrow-down_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-down_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_arrow-down_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-down_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_arrow-down_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-down_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_arrow-down_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-down_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_arrow-down_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_arrow-down_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_arrow-down_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_arrow-down_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-down_primary--hover"
        }),
        active: freeze({
          name: "navigation_arrow-down_primary--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-down_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_arrow-down_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-down_neutral--hover"
        }),
        active: freeze({
          name: "navigation_arrow-down_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-down_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_arrow-down_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_arrow-down_bright--enabled"
        })
      })
    }),
    "arrow-down-skyblue": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "navigation_arrow-down-skyblue_on-surface--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-down-skyblue_on-surface--hover"
        }),
        active: freeze({
          name: "navigation_arrow-down-skyblue_on-surface--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-down-skyblue_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "navigation_arrow-down-skyblue_on-primary--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-down-skyblue_on-primary--hover"
        }),
        active: freeze({
          name: "navigation_arrow-down-skyblue_on-primary--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-down-skyblue_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "navigation_arrow-down-skyblue_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "navigation_arrow-down-skyblue_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "navigation_arrow-down-skyblue_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "navigation_arrow-down-skyblue_primary--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-down-skyblue_primary--hover"
        }),
        active: freeze({
          name: "navigation_arrow-down-skyblue_primary--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-down-skyblue_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "navigation_arrow-down-skyblue_neutral--enabled"
        }),
        hover: freeze({
          name: "navigation_arrow-down-skyblue_neutral--hover"
        }),
        active: freeze({
          name: "navigation_arrow-down-skyblue_neutral--active"
        }),
        disabled: freeze({
          name: "navigation_arrow-down-skyblue_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "navigation_arrow-down-skyblue_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "navigation_arrow-down-skyblue_bright--enabled"
        })
      })
    })
  }),
  menus: freeze({
    undo: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_undo_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_undo_on-surface--hover"
        }),
        active: freeze({
          name: "menus_undo_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_undo_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_undo_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_undo_on-primary--hover"
        }),
        active: freeze({
          name: "menus_undo_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_undo_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_undo_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_undo_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_undo_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_undo_primary--enabled"
        }),
        hover: freeze({
          name: "menus_undo_primary--hover"
        }),
        active: freeze({
          name: "menus_undo_primary--active"
        }),
        disabled: freeze({
          name: "menus_undo_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_undo_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_undo_neutral--hover"
        }),
        active: freeze({
          name: "menus_undo_neutral--active"
        }),
        disabled: freeze({
          name: "menus_undo_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_undo_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_undo_bright--enabled"
        })
      })
    }),
    "undo-close-object": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_undo-close-object_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_undo-close-object_on-surface--hover"
        }),
        active: freeze({
          name: "menus_undo-close-object_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_undo-close-object_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_undo-close-object_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_undo-close-object_on-primary--hover"
        }),
        active: freeze({
          name: "menus_undo-close-object_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_undo-close-object_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_undo-close-object_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_undo-close-object_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_undo-close-object_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_undo-close-object_primary--enabled"
        }),
        hover: freeze({
          name: "menus_undo-close-object_primary--hover"
        }),
        active: freeze({
          name: "menus_undo-close-object_primary--active"
        }),
        disabled: freeze({
          name: "menus_undo-close-object_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_undo-close-object_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_undo-close-object_neutral--hover"
        }),
        active: freeze({
          name: "menus_undo-close-object_neutral--active"
        }),
        disabled: freeze({
          name: "menus_undo-close-object_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_undo-close-object_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_undo-close-object_bright--enabled"
        })
      })
    }),
    save: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_save_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_save_on-surface--hover"
        }),
        active: freeze({
          name: "menus_save_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_save_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_save_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_save_on-primary--hover"
        }),
        active: freeze({
          name: "menus_save_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_save_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_save_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_save_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_save_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_save_primary--enabled"
        }),
        hover: freeze({
          name: "menus_save_primary--hover"
        }),
        active: freeze({
          name: "menus_save_primary--active"
        }),
        disabled: freeze({
          name: "menus_save_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_save_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_save_neutral--hover"
        }),
        active: freeze({
          name: "menus_save_neutral--active"
        }),
        disabled: freeze({
          name: "menus_save_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_save_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_save_bright--enabled"
        })
      })
    }),
    "save-all": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_save-all_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_save-all_on-surface--hover"
        }),
        active: freeze({
          name: "menus_save-all_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_save-all_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_save-all_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_save-all_on-primary--hover"
        }),
        active: freeze({
          name: "menus_save-all_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_save-all_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_save-all_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_save-all_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_save-all_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_save-all_primary--enabled"
        }),
        hover: freeze({
          name: "menus_save-all_primary--hover"
        }),
        active: freeze({
          name: "menus_save-all_primary--active"
        }),
        disabled: freeze({
          name: "menus_save-all_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_save-all_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_save-all_neutral--hover"
        }),
        active: freeze({
          name: "menus_save-all_neutral--active"
        }),
        disabled: freeze({
          name: "menus_save-all_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_save-all_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_save-all_bright--enabled"
        })
      })
    }),
    run: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_run_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_run_on-surface--hover"
        }),
        active: freeze({
          name: "menus_run_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_run_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_run_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_run_on-primary--hover"
        }),
        active: freeze({
          name: "menus_run_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_run_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_run_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_run_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_run_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_run_primary--enabled"
        }),
        hover: freeze({
          name: "menus_run_primary--hover"
        }),
        active: freeze({
          name: "menus_run_primary--active"
        }),
        disabled: freeze({
          name: "menus_run_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_run_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_run_neutral--hover"
        }),
        active: freeze({
          name: "menus_run_neutral--active"
        }),
        disabled: freeze({
          name: "menus_run_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_run_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_run_bright--enabled"
        })
      })
    }),
    redo: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_redo_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_redo_on-surface--hover"
        }),
        active: freeze({
          name: "menus_redo_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_redo_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_redo_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_redo_on-primary--hover"
        }),
        active: freeze({
          name: "menus_redo_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_redo_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_redo_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_redo_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_redo_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_redo_primary--enabled"
        }),
        hover: freeze({
          name: "menus_redo_primary--hover"
        }),
        active: freeze({
          name: "menus_redo_primary--active"
        }),
        disabled: freeze({
          name: "menus_redo_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_redo_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_redo_neutral--hover"
        }),
        active: freeze({
          name: "menus_redo_neutral--active"
        }),
        disabled: freeze({
          name: "menus_redo_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_redo_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_redo_bright--enabled"
        })
      })
    }),
    properties: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_properties_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_properties_on-surface--hover"
        }),
        active: freeze({
          name: "menus_properties_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_properties_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_properties_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_properties_on-primary--hover"
        }),
        active: freeze({
          name: "menus_properties_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_properties_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_properties_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_properties_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_properties_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_properties_primary--enabled"
        }),
        hover: freeze({
          name: "menus_properties_primary--hover"
        }),
        active: freeze({
          name: "menus_properties_primary--active"
        }),
        disabled: freeze({
          name: "menus_properties_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_properties_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_properties_neutral--hover"
        }),
        active: freeze({
          name: "menus_properties_neutral--active"
        }),
        disabled: freeze({
          name: "menus_properties_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_properties_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_properties_bright--enabled"
        })
      })
    }),
    paste: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_paste_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_paste_on-surface--hover"
        }),
        active: freeze({
          name: "menus_paste_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_paste_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_paste_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_paste_on-primary--hover"
        }),
        active: freeze({
          name: "menus_paste_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_paste_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_paste_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_paste_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_paste_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_paste_primary--enabled"
        }),
        hover: freeze({
          name: "menus_paste_primary--hover"
        }),
        active: freeze({
          name: "menus_paste_primary--active"
        }),
        disabled: freeze({
          name: "menus_paste_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_paste_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_paste_neutral--hover"
        }),
        active: freeze({
          name: "menus_paste_neutral--active"
        }),
        disabled: freeze({
          name: "menus_paste_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_paste_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_paste_bright--enabled"
        })
      })
    }),
    "open-object": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_open-object_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_open-object_on-surface--hover"
        }),
        active: freeze({
          name: "menus_open-object_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_open-object_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_open-object_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_open-object_on-primary--hover"
        }),
        active: freeze({
          name: "menus_open-object_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_open-object_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_open-object_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_open-object_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_open-object_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_open-object_primary--enabled"
        }),
        hover: freeze({
          name: "menus_open-object_primary--hover"
        }),
        active: freeze({
          name: "menus_open-object_primary--active"
        }),
        disabled: freeze({
          name: "menus_open-object_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_open-object_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_open-object_neutral--hover"
        }),
        active: freeze({
          name: "menus_open-object_neutral--active"
        }),
        disabled: freeze({
          name: "menus_open-object_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_open-object_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_open-object_bright--enabled"
        })
      })
    }),
    "new-object": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_new-object_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_new-object_on-surface--hover"
        }),
        active: freeze({
          name: "menus_new-object_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_new-object_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_new-object_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_new-object_on-primary--hover"
        }),
        active: freeze({
          name: "menus_new-object_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_new-object_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_new-object_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_new-object_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_new-object_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_new-object_primary--enabled"
        }),
        hover: freeze({
          name: "menus_new-object_primary--hover"
        }),
        active: freeze({
          name: "menus_new-object_primary--active"
        }),
        disabled: freeze({
          name: "menus_new-object_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_new-object_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_new-object_neutral--hover"
        }),
        active: freeze({
          name: "menus_new-object_neutral--active"
        }),
        disabled: freeze({
          name: "menus_new-object_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_new-object_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_new-object_bright--enabled"
        })
      })
    }),
    find: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_find_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_find_on-surface--hover"
        }),
        active: freeze({
          name: "menus_find_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_find_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_find_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_find_on-primary--hover"
        }),
        active: freeze({
          name: "menus_find_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_find_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_find_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_find_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_find_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_find_primary--enabled"
        }),
        hover: freeze({
          name: "menus_find_primary--hover"
        }),
        active: freeze({
          name: "menus_find_primary--active"
        }),
        disabled: freeze({
          name: "menus_find_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_find_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_find_neutral--hover"
        }),
        active: freeze({
          name: "menus_find_neutral--active"
        }),
        disabled: freeze({
          name: "menus_find_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_find_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_find_bright--enabled"
        })
      })
    }),
    delete: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_delete_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_delete_on-surface--hover"
        }),
        active: freeze({
          name: "menus_delete_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_delete_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_delete_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_delete_on-primary--hover"
        }),
        active: freeze({
          name: "menus_delete_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_delete_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_delete_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_delete_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_delete_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_delete_primary--enabled"
        }),
        hover: freeze({
          name: "menus_delete_primary--hover"
        }),
        active: freeze({
          name: "menus_delete_primary--active"
        }),
        disabled: freeze({
          name: "menus_delete_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_delete_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_delete_neutral--hover"
        }),
        active: freeze({
          name: "menus_delete_neutral--active"
        }),
        disabled: freeze({
          name: "menus_delete_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_delete_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_delete_bright--enabled"
        })
      })
    }),
    cut: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_cut_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_cut_on-surface--hover"
        }),
        active: freeze({
          name: "menus_cut_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_cut_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_cut_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_cut_on-primary--hover"
        }),
        active: freeze({
          name: "menus_cut_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_cut_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_cut_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_cut_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_cut_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_cut_primary--enabled"
        }),
        hover: freeze({
          name: "menus_cut_primary--hover"
        }),
        active: freeze({
          name: "menus_cut_primary--active"
        }),
        disabled: freeze({
          name: "menus_cut_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_cut_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_cut_neutral--hover"
        }),
        active: freeze({
          name: "menus_cut_neutral--active"
        }),
        disabled: freeze({
          name: "menus_cut_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_cut_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_cut_bright--enabled"
        })
      })
    }),
    "create-database-tables": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_create-database-tables_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_create-database-tables_on-surface--hover"
        }),
        active: freeze({
          name: "menus_create-database-tables_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_create-database-tables_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_create-database-tables_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_create-database-tables_on-primary--hover"
        }),
        active: freeze({
          name: "menus_create-database-tables_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_create-database-tables_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_create-database-tables_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_create-database-tables_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_create-database-tables_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_create-database-tables_primary--enabled"
        }),
        hover: freeze({
          name: "menus_create-database-tables_primary--hover"
        }),
        active: freeze({
          name: "menus_create-database-tables_primary--active"
        }),
        disabled: freeze({
          name: "menus_create-database-tables_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_create-database-tables_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_create-database-tables_neutral--hover"
        }),
        active: freeze({
          name: "menus_create-database-tables_neutral--active"
        }),
        disabled: freeze({
          name: "menus_create-database-tables_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_create-database-tables_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_create-database-tables_bright--enabled"
        })
      })
    }),
    copy: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_copy_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_copy_on-surface--hover"
        }),
        active: freeze({
          name: "menus_copy_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_copy_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_copy_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_copy_on-primary--hover"
        }),
        active: freeze({
          name: "menus_copy_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_copy_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_copy_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_copy_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_copy_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_copy_primary--enabled"
        }),
        hover: freeze({
          name: "menus_copy_primary--hover"
        }),
        active: freeze({
          name: "menus_copy_primary--active"
        }),
        disabled: freeze({
          name: "menus_copy_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_copy_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_copy_neutral--hover"
        }),
        active: freeze({
          name: "menus_copy_neutral--active"
        }),
        disabled: freeze({
          name: "menus_copy_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_copy_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_copy_bright--enabled"
        })
      })
    }),
    "cancel-build": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_cancel-build_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_cancel-build_on-surface--hover"
        }),
        active: freeze({
          name: "menus_cancel-build_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_cancel-build_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_cancel-build_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_cancel-build_on-primary--hover"
        }),
        active: freeze({
          name: "menus_cancel-build_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_cancel-build_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_cancel-build_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_cancel-build_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_cancel-build_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_cancel-build_primary--enabled"
        }),
        hover: freeze({
          name: "menus_cancel-build_primary--hover"
        }),
        active: freeze({
          name: "menus_cancel-build_primary--active"
        }),
        disabled: freeze({
          name: "menus_cancel-build_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_cancel-build_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_cancel-build_neutral--hover"
        }),
        active: freeze({
          name: "menus_cancel-build_neutral--active"
        }),
        disabled: freeze({
          name: "menus_cancel-build_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_cancel-build_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_cancel-build_bright--enabled"
        })
      })
    }),
    build: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_build_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_build_on-surface--hover"
        }),
        active: freeze({
          name: "menus_build_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_build_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_build_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_build_on-primary--hover"
        }),
        active: freeze({
          name: "menus_build_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_build_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_build_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_build_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_build_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_build_primary--enabled"
        }),
        hover: freeze({
          name: "menus_build_primary--hover"
        }),
        active: freeze({
          name: "menus_build_primary--active"
        }),
        disabled: freeze({
          name: "menus_build_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_build_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_build_neutral--hover"
        }),
        active: freeze({
          name: "menus_build_neutral--active"
        }),
        disabled: freeze({
          name: "menus_build_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_build_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_build_bright--enabled"
        })
      })
    }),
    "build-all": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "menus_build-all_on-surface--enabled"
        }),
        hover: freeze({
          name: "menus_build-all_on-surface--hover"
        }),
        active: freeze({
          name: "menus_build-all_on-surface--active"
        }),
        disabled: freeze({
          name: "menus_build-all_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "menus_build-all_on-primary--enabled"
        }),
        hover: freeze({
          name: "menus_build-all_on-primary--hover"
        }),
        active: freeze({
          name: "menus_build-all_on-primary--active"
        }),
        disabled: freeze({
          name: "menus_build-all_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "menus_build-all_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "menus_build-all_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "menus_build-all_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "menus_build-all_primary--enabled"
        }),
        hover: freeze({
          name: "menus_build-all_primary--hover"
        }),
        active: freeze({
          name: "menus_build-all_primary--active"
        }),
        disabled: freeze({
          name: "menus_build-all_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "menus_build-all_neutral--enabled"
        }),
        hover: freeze({
          name: "menus_build-all_neutral--hover"
        }),
        active: freeze({
          name: "menus_build-all_neutral--active"
        }),
        disabled: freeze({
          name: "menus_build-all_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "menus_build-all_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "menus_build-all_bright--enabled"
        })
      })
    })
  }),
  "gx-test": freeze({
    "unit-test": freeze({
      enabled: freeze({
        name: "gx-test_unit-test--enabled"
      }),
      hover: freeze({
        name: "gx-test_unit-test--hover"
      }),
      active: freeze({
        name: "gx-test_unit-test--active"
      }),
      disabled: freeze({
        name: "gx-test_unit-test--disabled"
      })
    }),
    "unit-test-db": freeze({
      enabled: freeze({
        name: "gx-test_unit-test-db--enabled"
      }),
      hover: freeze({
        name: "gx-test_unit-test-db--hover"
      }),
      active: freeze({
        name: "gx-test_unit-test-db--active"
      }),
      disabled: freeze({
        name: "gx-test_unit-test-db--disabled"
      })
    }),
    "ui-test-web": freeze({
      enabled: freeze({
        name: "gx-test_ui-test-web--enabled"
      }),
      hover: freeze({
        name: "gx-test_ui-test-web--hover"
      }),
      active: freeze({
        name: "gx-test_ui-test-web--active"
      }),
      disabled: freeze({
        name: "gx-test_ui-test-web--disabled"
      })
    }),
    "ui-test-sd": freeze({
      enabled: freeze({
        name: "gx-test_ui-test-sd--enabled"
      }),
      hover: freeze({
        name: "gx-test_ui-test-sd--hover"
      }),
      active: freeze({
        name: "gx-test_ui-test-sd--active"
      }),
      disabled: freeze({
        name: "gx-test_ui-test-sd--disabled"
      })
    }),
    "test-suite": freeze({
      enabled: freeze({
        name: "gx-test_test-suite--enabled"
      }),
      hover: freeze({
        name: "gx-test_test-suite--hover"
      }),
      active: freeze({
        name: "gx-test_test-suite--active"
      }),
      disabled: freeze({
        name: "gx-test_test-suite--disabled"
      })
    }),
    "test-results": freeze({
      enabled: freeze({
        name: "gx-test_test-results--enabled"
      }),
      hover: freeze({
        name: "gx-test_test-results--hover"
      }),
      active: freeze({
        name: "gx-test_test-results--active"
      }),
      disabled: freeze({
        name: "gx-test_test-results--disabled"
      })
    }),
    "test-folder": freeze({
      enabled: freeze({
        name: "gx-test_test-folder--enabled"
      }),
      hover: freeze({
        name: "gx-test_test-folder--hover"
      }),
      active: freeze({
        name: "gx-test_test-folder--active"
      }),
      disabled: freeze({
        name: "gx-test_test-folder--disabled"
      })
    }),
    "test-folder-open": freeze({
      enabled: freeze({
        name: "gx-test_test-folder-open--enabled"
      }),
      hover: freeze({
        name: "gx-test_test-folder-open--hover"
      }),
      active: freeze({
        name: "gx-test_test-folder-open--active"
      }),
      disabled: freeze({
        name: "gx-test_test-folder-open--disabled"
      })
    }),
    "screenshot-viewer": freeze({
      enabled: freeze({
        name: "gx-test_screenshot-viewer--enabled"
      }),
      hover: freeze({
        name: "gx-test_screenshot-viewer--hover"
      }),
      active: freeze({
        name: "gx-test_screenshot-viewer--active"
      }),
      disabled: freeze({
        name: "gx-test_screenshot-viewer--disabled"
      })
    }),
    "run-unit-test": freeze({
      enabled: freeze({
        name: "gx-test_run-unit-test--enabled"
      }),
      hover: freeze({
        name: "gx-test_run-unit-test--hover"
      }),
      active: freeze({
        name: "gx-test_run-unit-test--active"
      }),
      disabled: freeze({
        name: "gx-test_run-unit-test--disabled"
      })
    }),
    "run-ui-test-web": freeze({
      enabled: freeze({
        name: "gx-test_run-ui-test-web--enabled"
      }),
      hover: freeze({
        name: "gx-test_run-ui-test-web--hover"
      }),
      active: freeze({
        name: "gx-test_run-ui-test-web--active"
      }),
      disabled: freeze({
        name: "gx-test_run-ui-test-web--disabled"
      })
    }),
    "run-ui-test-sd": freeze({
      enabled: freeze({
        name: "gx-test_run-ui-test-sd--enabled"
      }),
      hover: freeze({
        name: "gx-test_run-ui-test-sd--hover"
      }),
      active: freeze({
        name: "gx-test_run-ui-test-sd--active"
      }),
      disabled: freeze({
        name: "gx-test_run-ui-test-sd--disabled"
      })
    }),
    "run-tests": freeze({
      enabled: freeze({
        name: "gx-test_run-tests--enabled"
      }),
      hover: freeze({
        name: "gx-test_run-tests--hover"
      }),
      active: freeze({
        name: "gx-test_run-tests--active"
      }),
      disabled: freeze({
        name: "gx-test_run-tests--disabled"
      })
    }),
    "run-test-suite": freeze({
      enabled: freeze({
        name: "gx-test_run-test-suite--enabled"
      }),
      hover: freeze({
        name: "gx-test_run-test-suite--hover"
      }),
      active: freeze({
        name: "gx-test_run-test-suite--active"
      }),
      disabled: freeze({
        name: "gx-test_run-test-suite--disabled"
      })
    }),
    "run-test-cancel": freeze({
      enabled: freeze({
        name: "gx-test_run-test-cancel--enabled"
      }),
      hover: freeze({
        name: "gx-test_run-test-cancel--hover"
      }),
      active: freeze({
        name: "gx-test_run-test-cancel--active"
      }),
      disabled: freeze({
        name: "gx-test_run-test-cancel--disabled"
      })
    }),
    "result-warning": freeze({
      enabled: freeze({
        name: "gx-test_result-warning--enabled"
      }),
      hover: freeze({
        name: "gx-test_result-warning--hover"
      }),
      active: freeze({
        name: "gx-test_result-warning--active"
      }),
      disabled: freeze({
        name: "gx-test_result-warning--disabled"
      })
    }),
    "result-skipped": freeze({
      enabled: freeze({
        name: "gx-test_result-skipped--enabled"
      }),
      hover: freeze({
        name: "gx-test_result-skipped--hover"
      }),
      active: freeze({
        name: "gx-test_result-skipped--active"
      }),
      disabled: freeze({
        name: "gx-test_result-skipped--disabled"
      })
    }),
    "result-ok": freeze({
      enabled: freeze({
        name: "gx-test_result-ok--enabled"
      }),
      hover: freeze({
        name: "gx-test_result-ok--hover"
      }),
      active: freeze({
        name: "gx-test_result-ok--active"
      }),
      disabled: freeze({
        name: "gx-test_result-ok--disabled"
      })
    }),
    "result-exception": freeze({
      enabled: freeze({
        name: "gx-test_result-exception--enabled"
      }),
      hover: freeze({
        name: "gx-test_result-exception--hover"
      }),
      active: freeze({
        name: "gx-test_result-exception--active"
      }),
      disabled: freeze({
        name: "gx-test_result-exception--disabled"
      })
    }),
    "result-error": freeze({
      enabled: freeze({
        name: "gx-test_result-error--enabled"
      }),
      hover: freeze({
        name: "gx-test_result-error--hover"
      }),
      active: freeze({
        name: "gx-test_result-error--active"
      }),
      disabled: freeze({
        name: "gx-test_result-error--disabled"
      })
    }),
    "record-mock": freeze({
      enabled: freeze({
        name: "gx-test_record-mock--enabled"
      }),
      hover: freeze({
        name: "gx-test_record-mock--hover"
      }),
      active: freeze({
        name: "gx-test_record-mock--active"
      }),
      disabled: freeze({
        name: "gx-test_record-mock--disabled"
      })
    }),
    plus: freeze({
      enabled: freeze({
        name: "gx-test_plus--enabled"
      }),
      hover: freeze({
        name: "gx-test_plus--hover"
      }),
      active: freeze({
        name: "gx-test_plus--active"
      }),
      disabled: freeze({
        name: "gx-test_plus--disabled"
      })
    }),
    image: freeze({
      enabled: freeze({
        name: "gx-test_image--enabled"
      }),
      hover: freeze({
        name: "gx-test_image--hover"
      }),
      active: freeze({
        name: "gx-test_image--active"
      }),
      disabled: freeze({
        name: "gx-test_image--disabled"
      })
    }),
    explorer: freeze({
      enabled: freeze({
        name: "gx-test_explorer--enabled"
      }),
      hover: freeze({
        name: "gx-test_explorer--hover"
      }),
      active: freeze({
        name: "gx-test_explorer--active"
      }),
      disabled: freeze({
        name: "gx-test_explorer--disabled"
      })
    }),
    cutfo: freeze({
      enabled: freeze({
        name: "gx-test_cutfo--enabled"
      }),
      hover: freeze({
        name: "gx-test_cutfo--hover"
      }),
      active: freeze({
        name: "gx-test_cutfo--active"
      }),
      disabled: freeze({
        name: "gx-test_cutfo--disabled"
      })
    })
  }),
  "gx-server": freeze({
    public: freeze({
      enabled: freeze({
        name: "gx-server_public--enabled"
      }),
      hover: freeze({
        name: "gx-server_public--hover"
      }),
      active: freeze({
        name: "gx-server_public--active"
      }),
      disabled: freeze({
        name: "gx-server_public--disabled"
      })
    }),
    private: freeze({
      enabled: freeze({
        name: "gx-server_private--enabled"
      }),
      hover: freeze({
        name: "gx-server_private--hover"
      }),
      active: freeze({
        name: "gx-server_private--active"
      }),
      disabled: freeze({
        name: "gx-server_private--disabled"
      })
    }),
    new: freeze({
      enabled: freeze({
        name: "gx-server_new--enabled"
      }),
      hover: freeze({
        name: "gx-server_new--hover"
      }),
      active: freeze({
        name: "gx-server_new--active"
      }),
      disabled: freeze({
        name: "gx-server_new--disabled"
      })
    }),
    "lock-without-changes": freeze({
      enabled: freeze({
        name: "gx-server_lock-without-changes--enabled"
      }),
      hover: freeze({
        name: "gx-server_lock-without-changes--hover"
      }),
      active: freeze({
        name: "gx-server_lock-without-changes--active"
      }),
      disabled: freeze({
        name: "gx-server_lock-without-changes--disabled"
      })
    }),
    "lock-by-user-reserve": freeze({
      enabled: freeze({
        name: "gx-server_lock-by-user-reserve--enabled"
      }),
      hover: freeze({
        name: "gx-server_lock-by-user-reserve--hover"
      }),
      active: freeze({
        name: "gx-server_lock-by-user-reserve--active"
      }),
      disabled: freeze({
        name: "gx-server_lock-by-user-reserve--disabled"
      })
    }),
    "lock-by-user-changes": freeze({
      enabled: freeze({
        name: "gx-server_lock-by-user-changes--enabled"
      }),
      hover: freeze({
        name: "gx-server_lock-by-user-changes--hover"
      }),
      active: freeze({
        name: "gx-server_lock-by-user-changes--active"
      }),
      disabled: freeze({
        name: "gx-server_lock-by-user-changes--disabled"
      })
    }),
    internal: freeze({
      enabled: freeze({
        name: "gx-server_internal--enabled"
      }),
      hover: freeze({
        name: "gx-server_internal--hover"
      }),
      active: freeze({
        name: "gx-server_internal--active"
      }),
      disabled: freeze({
        name: "gx-server_internal--disabled"
      })
    }),
    delete: freeze({
      enabled: freeze({
        name: "gx-server_delete--enabled"
      }),
      hover: freeze({
        name: "gx-server_delete--hover"
      }),
      active: freeze({
        name: "gx-server_delete--active"
      }),
      disabled: freeze({
        name: "gx-server_delete--disabled"
      })
    }),
    conflict: freeze({
      enabled: freeze({
        name: "gx-server_conflict--enabled"
      }),
      hover: freeze({
        name: "gx-server_conflict--hover"
      }),
      active: freeze({
        name: "gx-server_conflict--active"
      }),
      disabled: freeze({
        name: "gx-server_conflict--disabled"
      })
    }),
    "changes-commit-pending": freeze({
      enabled: freeze({
        name: "gx-server_changes-commit-pending--enabled"
      }),
      hover: freeze({
        name: "gx-server_changes-commit-pending--hover"
      }),
      active: freeze({
        name: "gx-server_changes-commit-pending--active"
      }),
      disabled: freeze({
        name: "gx-server_changes-commit-pending--disabled"
      })
    })
  }),
  general: freeze({
    version: freeze({
      enabled: freeze({
        name: "general_version--enabled"
      }),
      hover: freeze({
        name: "general_version--hover"
      }),
      active: freeze({
        name: "general_version--active"
      }),
      disabled: freeze({
        name: "general_version--disabled"
      })
    }),
    swift: freeze({
      enabled: freeze({
        name: "general_swift--enabled"
      }),
      hover: freeze({
        name: "general_swift--hover"
      }),
      active: freeze({
        name: "general_swift--active"
      }),
      disabled: freeze({
        name: "general_swift--disabled"
      })
    }),
    "sql-server": freeze({
      enabled: freeze({
        name: "general_sql-server--enabled"
      }),
      hover: freeze({
        name: "general_sql-server--hover"
      }),
      active: freeze({
        name: "general_sql-server--active"
      }),
      disabled: freeze({
        name: "general_sql-server--disabled"
      })
    }),
    services: freeze({
      enabled: freeze({
        name: "general_services--enabled"
      }),
      hover: freeze({
        name: "general_services--hover"
      }),
      active: freeze({
        name: "general_services--active"
      }),
      disabled: freeze({
        name: "general_services--disabled"
      })
    }),
    sd: freeze({
      enabled: freeze({
        name: "general_sd--enabled"
      }),
      hover: freeze({
        name: "general_sd--hover"
      }),
      active: freeze({
        name: "general_sd--active"
      }),
      disabled: freeze({
        name: "general_sd--disabled"
      })
    }),
    "sd-web": freeze({
      enabled: freeze({
        name: "general_sd-web--enabled"
      }),
      hover: freeze({
        name: "general_sd-web--hover"
      }),
      active: freeze({
        name: "general_sd-web--active"
      }),
      disabled: freeze({
        name: "general_sd-web--disabled"
      })
    }),
    "sap-hana": freeze({
      enabled: freeze({
        name: "general_sap-hana--enabled"
      }),
      hover: freeze({
        name: "general_sap-hana--hover"
      }),
      active: freeze({
        name: "general_sap-hana--active"
      }),
      disabled: freeze({
        name: "general_sap-hana--disabled"
      })
    }),
    references: freeze({
      enabled: freeze({
        name: "general_references--enabled"
      }),
      hover: freeze({
        name: "general_references--hover"
      }),
      active: freeze({
        name: "general_references--active"
      }),
      disabled: freeze({
        name: "general_references--disabled"
      })
    }),
    "qr-code": freeze({
      enabled: freeze({
        name: "general_qr-code--enabled"
      }),
      hover: freeze({
        name: "general_qr-code--hover"
      }),
      active: freeze({
        name: "general_qr-code--active"
      }),
      disabled: freeze({
        name: "general_qr-code--disabled"
      })
    }),
    "postgre-sql": freeze({
      enabled: freeze({
        name: "general_postgre-sql--enabled"
      }),
      hover: freeze({
        name: "general_postgre-sql--hover"
      }),
      active: freeze({
        name: "general_postgre-sql--active"
      }),
      disabled: freeze({
        name: "general_postgre-sql--disabled"
      })
    }),
    patterns: freeze({
      enabled: freeze({
        name: "general_patterns--enabled"
      }),
      hover: freeze({
        name: "general_patterns--hover"
      }),
      active: freeze({
        name: "general_patterns--active"
      }),
      disabled: freeze({
        name: "general_patterns--disabled"
      })
    }),
    oracle: freeze({
      enabled: freeze({
        name: "general_oracle--enabled"
      }),
      hover: freeze({
        name: "general_oracle--hover"
      }),
      active: freeze({
        name: "general_oracle--active"
      }),
      disabled: freeze({
        name: "general_oracle--disabled"
      })
    }),
    mysql: freeze({
      enabled: freeze({
        name: "general_mysql--enabled"
      }),
      hover: freeze({
        name: "general_mysql--hover"
      }),
      active: freeze({
        name: "general_mysql--active"
      }),
      disabled: freeze({
        name: "general_mysql--disabled"
      })
    }),
    launchpad: freeze({
      enabled: freeze({
        name: "general_launchpad--enabled"
      }),
      hover: freeze({
        name: "general_launchpad--hover"
      }),
      active: freeze({
        name: "general_launchpad--active"
      }),
      disabled: freeze({
        name: "general_launchpad--disabled"
      })
    }),
    "knowledge-base": freeze({
      enabled: freeze({
        name: "general_knowledge-base--enabled"
      }),
      hover: freeze({
        name: "general_knowledge-base--hover"
      }),
      active: freeze({
        name: "general_knowledge-base--active"
      }),
      disabled: freeze({
        name: "general_knowledge-base--disabled"
      })
    }),
    java: freeze({
      enabled: freeze({
        name: "general_java--enabled"
      }),
      hover: freeze({
        name: "general_java--hover"
      }),
      active: freeze({
        name: "general_java--active"
      }),
      disabled: freeze({
        name: "general_java--disabled"
      })
    }),
    informix: freeze({
      enabled: freeze({
        name: "general_informix--enabled"
      }),
      hover: freeze({
        name: "general_informix--hover"
      }),
      active: freeze({
        name: "general_informix--active"
      }),
      disabled: freeze({
        name: "general_informix--disabled"
      })
    }),
    generator: freeze({
      enabled: freeze({
        name: "general_generator--enabled"
      }),
      hover: freeze({
        name: "general_generator--hover"
      }),
      active: freeze({
        name: "general_generator--active"
      }),
      disabled: freeze({
        name: "general_generator--disabled"
      })
    }),
    "environment-select": freeze({
      enabled: freeze({
        name: "general_environment-select--enabled"
      }),
      hover: freeze({
        name: "general_environment-select--hover"
      }),
      active: freeze({
        name: "general_environment-select--active"
      }),
      disabled: freeze({
        name: "general_environment-select--disabled"
      })
    }),
    "environment-no-select": freeze({
      enabled: freeze({
        name: "general_environment-no-select--enabled"
      }),
      hover: freeze({
        name: "general_environment-no-select--hover"
      }),
      active: freeze({
        name: "general_environment-no-select--active"
      }),
      disabled: freeze({
        name: "general_environment-no-select--disabled"
      })
    }),
    db2: freeze({
      enabled: freeze({
        name: "general_db2--enabled"
      }),
      hover: freeze({
        name: "general_db2--hover"
      }),
      active: freeze({
        name: "general_db2--active"
      }),
      disabled: freeze({
        name: "general_db2--disabled"
      })
    }),
    datastore: freeze({
      enabled: freeze({
        name: "general_datastore--enabled"
      }),
      hover: freeze({
        name: "general_datastore--hover"
      }),
      active: freeze({
        name: "general_datastore--active"
      }),
      disabled: freeze({
        name: "general_datastore--disabled"
      })
    }),
    customization: freeze({
      enabled: freeze({
        name: "general_customization--enabled"
      }),
      hover: freeze({
        name: "general_customization--hover"
      }),
      active: freeze({
        name: "general_customization--active"
      }),
      disabled: freeze({
        name: "general_customization--disabled"
      })
    }),
    csharp: freeze({
      enabled: freeze({
        name: "general_csharp--enabled"
      }),
      hover: freeze({
        name: "general_csharp--hover"
      }),
      active: freeze({
        name: "general_csharp--active"
      }),
      disabled: freeze({
        name: "general_csharp--disabled"
      })
    }),
    apple: freeze({
      enabled: freeze({
        name: "general_apple--enabled"
      }),
      hover: freeze({
        name: "general_apple--hover"
      }),
      active: freeze({
        name: "general_apple--active"
      }),
      disabled: freeze({
        name: "general_apple--disabled"
      })
    }),
    angular: freeze({
      enabled: freeze({
        name: "general_angular--enabled"
      }),
      hover: freeze({
        name: "general_angular--hover"
      }),
      active: freeze({
        name: "general_angular--active"
      }),
      disabled: freeze({
        name: "general_angular--disabled"
      })
    }),
    android: freeze({
      enabled: freeze({
        name: "general_android--enabled"
      }),
      hover: freeze({
        name: "general_android--hover"
      }),
      active: freeze({
        name: "general_android--active"
      }),
      disabled: freeze({
        name: "general_android--disabled"
      })
    })
  }),
  "gemini-tools": freeze({
    warning: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_warning_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_warning_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_warning_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_warning_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_warning_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_warning_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_warning_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_warning_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_warning_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_warning_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_warning_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_warning_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_warning_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_warning_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_warning_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_warning_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_warning_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_warning_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_warning_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_warning_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_warning_bright--enabled"
        })
      })
    }),
    success: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_success_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_success_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_success_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_success_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_success_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_success_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_success_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_success_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_success_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_success_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_success_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_success_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_success_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_success_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_success_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_success_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_success_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_success_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_success_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_success_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_success_bright--enabled"
        })
      })
    }),
    "show-more-vertical": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-vertical_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_show-more-vertical_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_show-more-vertical_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_show-more-vertical_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-vertical_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_show-more-vertical_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_show-more-vertical_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_show-more-vertical_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-vertical_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-vertical_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-vertical_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-vertical_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_show-more-vertical_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_show-more-vertical_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_show-more-vertical_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-vertical_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_show-more-vertical_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_show-more-vertical_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_show-more-vertical_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-vertical_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-vertical_bright--enabled"
        })
      })
    }),
    "show-more-horizontal": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-horizontal_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_show-more-horizontal_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_show-more-horizontal_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_show-more-horizontal_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-horizontal_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_show-more-horizontal_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_show-more-horizontal_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_show-more-horizontal_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-horizontal_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-horizontal_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-horizontal_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-horizontal_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_show-more-horizontal_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_show-more-horizontal_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_show-more-horizontal_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-horizontal_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_show-more-horizontal_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_show-more-horizontal_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_show-more-horizontal_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-horizontal_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_show-more-horizontal_bright--enabled"
        })
      })
    }),
    share: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_share_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_share_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_share_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_share_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_share_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_share_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_share_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_share_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_share_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_share_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_share_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_share_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_share_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_share_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_share_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_share_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_share_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_share_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_share_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_share_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_share_bright--enabled"
        })
      })
    }),
    settings: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_settings_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_settings_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_settings_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_settings_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_settings_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_settings_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_settings_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_settings_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_settings_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_settings_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_settings_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_settings_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_settings_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_settings_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_settings_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_settings_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_settings_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_settings_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_settings_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_settings_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_settings_bright--enabled"
        })
      })
    }),
    search: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_search_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_search_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_search_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_search_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_search_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_search_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_search_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_search_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_search_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_search_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_search_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_search_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_search_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_search_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_search_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_search_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_search_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_search_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_search_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_search_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_search_bright--enabled"
        })
      })
    }),
    reset: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_reset_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_reset_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_reset_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_reset_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_reset_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_reset_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_reset_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_reset_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_reset_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_reset_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_reset_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_reset_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_reset_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_reset_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_reset_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_reset_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_reset_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_reset_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_reset_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_reset_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_reset_bright--enabled"
        })
      })
    }),
    "read-only": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_read-only_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_read-only_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_read-only_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_read-only_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_read-only_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_read-only_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_read-only_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_read-only_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_read-only_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_read-only_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_read-only_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_read-only_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_read-only_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_read-only_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_read-only_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_read-only_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_read-only_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_read-only_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_read-only_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_read-only_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_read-only_bright--enabled"
        })
      })
    }),
    "open-window": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_open-window_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_open-window_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_open-window_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_open-window_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_open-window_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_open-window_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_open-window_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_open-window_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_open-window_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_open-window_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_open-window_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_open-window_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_open-window_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_open-window_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_open-window_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_open-window_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_open-window_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_open-window_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_open-window_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_open-window_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_open-window_bright--enabled"
        })
      })
    }),
    notice: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_notice_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_notice_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_notice_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_notice_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_notice_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_notice_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_notice_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_notice_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_notice_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_notice_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_notice_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_notice_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_notice_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_notice_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_notice_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_notice_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_notice_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_notice_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_notice_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_notice_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_notice_bright--enabled"
        })
      })
    }),
    "more-info": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_more-info_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_more-info_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_more-info_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_more-info_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_more-info_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_more-info_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_more-info_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_more-info_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_more-info_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_more-info_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_more-info_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_more-info_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_more-info_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_more-info_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_more-info_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_more-info_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_more-info_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_more-info_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_more-info_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_more-info_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_more-info_bright--enabled"
        })
      })
    }),
    minus: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_minus_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_minus_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_minus_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_minus_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_minus_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_minus_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_minus_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_minus_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_minus_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_minus_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_minus_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_minus_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_minus_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_minus_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_minus_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_minus_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_minus_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_minus_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_minus_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_minus_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_minus_bright--enabled"
        })
      })
    }),
    "minus-circle": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_minus-circle_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_minus-circle_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_minus-circle_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_minus-circle_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_minus-circle_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_minus-circle_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_minus-circle_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_minus-circle_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_minus-circle_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_minus-circle_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_minus-circle_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_minus-circle_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_minus-circle_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_minus-circle_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_minus-circle_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_minus-circle_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_minus-circle_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_minus-circle_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_minus-circle_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_minus-circle_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_minus-circle_bright--enabled"
        })
      })
    }),
    "list-view": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_list-view_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_list-view_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_list-view_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_list-view_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_list-view_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_list-view_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_list-view_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_list-view_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_list-view_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_list-view_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_list-view_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_list-view_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_list-view_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_list-view_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_list-view_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_list-view_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_list-view_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_list-view_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_list-view_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_list-view_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_list-view_bright--enabled"
        })
      })
    }),
    folder: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_folder_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_folder_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_folder_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_folder_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_folder_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_folder_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_folder_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_folder_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_folder_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_folder_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_folder_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_folder_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_folder_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_folder_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_folder_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_folder_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_folder_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_folder_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_folder_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_folder_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_folder_bright--enabled"
        })
      })
    }),
    "flow-arrow": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_flow-arrow_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_flow-arrow_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_flow-arrow_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_flow-arrow_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_flow-arrow_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_flow-arrow_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_flow-arrow_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_flow-arrow_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_flow-arrow_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_flow-arrow_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_flow-arrow_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_flow-arrow_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_flow-arrow_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_flow-arrow_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_flow-arrow_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_flow-arrow_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_flow-arrow_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_flow-arrow_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_flow-arrow_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_flow-arrow_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_flow-arrow_bright--enabled"
        })
      })
    }),
    file: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_file_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_file_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_file_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_file_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_file_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_file_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_file_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_file_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_file_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_file_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_file_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_file_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_file_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_file_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_file_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_file_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_file_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_file_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_file_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_file_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_file_bright--enabled"
        })
      })
    }),
    error: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_error_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_error_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_error_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_error_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_error_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_error_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_error_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_error_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_error_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_error_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_error_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_error_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_error_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_error_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_error_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_error_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_error_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_error_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_error_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_error_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_error_bright--enabled"
        })
      })
    }),
    edit: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_edit_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_edit_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_edit_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_edit_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_edit_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_edit_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_edit_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_edit_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_edit_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_edit_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_edit_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_edit_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_edit_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_edit_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_edit_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_edit_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_edit_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_edit_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_edit_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_edit_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_edit_bright--enabled"
        })
      })
    }),
    "edit-wand": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_edit-wand_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_edit-wand_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_edit-wand_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_edit-wand_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_edit-wand_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_edit-wand_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_edit-wand_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_edit-wand_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_edit-wand_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_edit-wand_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_edit-wand_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_edit-wand_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_edit-wand_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_edit-wand_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_edit-wand_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_edit-wand_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_edit-wand_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_edit-wand_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_edit-wand_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_edit-wand_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_edit-wand_bright--enabled"
        })
      })
    }),
    duplicate: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_duplicate_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_duplicate_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_duplicate_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_duplicate_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_duplicate_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_duplicate_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_duplicate_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_duplicate_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_duplicate_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_duplicate_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_duplicate_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_duplicate_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_duplicate_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_duplicate_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_duplicate_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_duplicate_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_duplicate_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_duplicate_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_duplicate_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_duplicate_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_duplicate_bright--enabled"
        })
      })
    }),
    download: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_download_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_download_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_download_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_download_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_download_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_download_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_download_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_download_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_download_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_download_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_download_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_download_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_download_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_download_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_download_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_download_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_download_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_download_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_download_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_download_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_download_bright--enabled"
        })
      })
    }),
    deleted: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_deleted_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_deleted_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_deleted_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_deleted_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_deleted_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_deleted_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_deleted_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_deleted_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_deleted_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_deleted_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_deleted_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_deleted_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_deleted_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_deleted_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_deleted_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_deleted_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_deleted_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_deleted_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_deleted_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_deleted_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_deleted_bright--enabled"
        })
      })
    }),
    delete: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_delete_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_delete_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_delete_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_delete_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_delete_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_delete_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_delete_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_delete_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_delete_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_delete_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_delete_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_delete_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_delete_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_delete_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_delete_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_delete_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_delete_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_delete_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_delete_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_delete_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_delete_bright--enabled"
        })
      })
    }),
    "data-provider": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_data-provider_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_data-provider_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_data-provider_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_data-provider_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_data-provider_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_data-provider_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_data-provider_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_data-provider_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_data-provider_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_data-provider_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_data-provider_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_data-provider_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_data-provider_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_data-provider_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_data-provider_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_data-provider_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_data-provider_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_data-provider_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_data-provider_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_data-provider_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_data-provider_bright--enabled"
        })
      })
    }),
    copy: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_copy_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_copy_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_copy_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_copy_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_copy_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_copy_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_copy_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_copy_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_copy_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_copy_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_copy_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_copy_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_copy_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_copy_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_copy_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_copy_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_copy_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_copy_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_copy_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_copy_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_copy_bright--enabled"
        })
      })
    }),
    "copy-to-clipboard": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_copy-to-clipboard_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_copy-to-clipboard_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_copy-to-clipboard_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_copy-to-clipboard_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_copy-to-clipboard_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_copy-to-clipboard_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_copy-to-clipboard_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_copy-to-clipboard_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_copy-to-clipboard_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_copy-to-clipboard_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_copy-to-clipboard_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_copy-to-clipboard_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_copy-to-clipboard_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_copy-to-clipboard_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_copy-to-clipboard_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_copy-to-clipboard_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_copy-to-clipboard_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_copy-to-clipboard_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_copy-to-clipboard_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_copy-to-clipboard_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_copy-to-clipboard_bright--enabled"
        })
      })
    }),
    "color-picker": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_color-picker_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_color-picker_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_color-picker_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_color-picker_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_color-picker_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_color-picker_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_color-picker_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_color-picker_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_color-picker_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_color-picker_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_color-picker_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_color-picker_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_color-picker_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_color-picker_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_color-picker_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_color-picker_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_color-picker_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_color-picker_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_color-picker_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_color-picker_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_color-picker_bright--enabled"
        })
      })
    }),
    close: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_close_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_close_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_close_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_close_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_close_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_close_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_close_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_close_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_close_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_close_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_close_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_close_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_close_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_close_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_close_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_close_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_close_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_close_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_close_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_close_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_close_bright--enabled"
        })
      })
    }),
    "category-ungroup": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_category-ungroup_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_category-ungroup_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_category-ungroup_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_category-ungroup_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_category-ungroup_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_category-ungroup_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_category-ungroup_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_category-ungroup_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_category-ungroup_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_category-ungroup_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_category-ungroup_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_category-ungroup_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_category-ungroup_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_category-ungroup_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_category-ungroup_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_category-ungroup_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_category-ungroup_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_category-ungroup_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_category-ungroup_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_category-ungroup_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_category-ungroup_bright--enabled"
        })
      })
    }),
    "category-group": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_category-group_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_category-group_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_category-group_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_category-group_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_category-group_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_category-group_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_category-group_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_category-group_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_category-group_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_category-group_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_category-group_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_category-group_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_category-group_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_category-group_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_category-group_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_category-group_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_category-group_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_category-group_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_category-group_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_category-group_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_category-group_bright--enabled"
        })
      })
    }),
    "card-view": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_card-view_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_card-view_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_card-view_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_card-view_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_card-view_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_card-view_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_card-view_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_card-view_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_card-view_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_card-view_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_card-view_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_card-view_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_card-view_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_card-view_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_card-view_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_card-view_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_card-view_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_card-view_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_card-view_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_card-view_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_card-view_bright--enabled"
        })
      })
    }),
    add: freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_add_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_add_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_add_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_add_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_add_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_add_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_add_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_add_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_add_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_add_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_add_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_add_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_add_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_add_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_add_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_add_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_add_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_add_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_add_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_add_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_add_bright--enabled"
        })
      })
    }),
    "add-circle": freeze({
      "on-surface": freeze({
        enabled: freeze({
          name: "gemini-tools_add-circle_on-surface--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_add-circle_on-surface--hover"
        }),
        active: freeze({
          name: "gemini-tools_add-circle_on-surface--active"
        }),
        disabled: freeze({
          name: "gemini-tools_add-circle_on-surface--disabled"
        })
      }),
      "on-primary": freeze({
        enabled: freeze({
          name: "gemini-tools_add-circle_on-primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_add-circle_on-primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_add-circle_on-primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_add-circle_on-primary--disabled"
        })
      }),
      "on-disabled": freeze({
        enabled: freeze({
          name: "gemini-tools_add-circle_on-disabled--enabled"
        })
      }),
      "on-message": freeze({
        enabled: freeze({
          name: "gemini-tools_add-circle_on-message--enabled"
        })
      }),
      "on-elevation": freeze({
        enabled: freeze({
          name: "gemini-tools_add-circle_on-elevation--enabled"
        })
      }),
      primary: freeze({
        enabled: freeze({
          name: "gemini-tools_add-circle_primary--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_add-circle_primary--hover"
        }),
        active: freeze({
          name: "gemini-tools_add-circle_primary--active"
        }),
        disabled: freeze({
          name: "gemini-tools_add-circle_primary--disabled"
        })
      }),
      neutral: freeze({
        enabled: freeze({
          name: "gemini-tools_add-circle_neutral--enabled"
        }),
        hover: freeze({
          name: "gemini-tools_add-circle_neutral--hover"
        }),
        active: freeze({
          name: "gemini-tools_add-circle_neutral--active"
        }),
        disabled: freeze({
          name: "gemini-tools_add-circle_neutral--disabled"
        })
      }),
      highlighted: freeze({
        enabled: freeze({
          name: "gemini-tools_add-circle_highlighted--enabled"
        })
      }),
      bright: freeze({
        enabled: freeze({
          name: "gemini-tools_add-circle_bright--enabled"
        })
      })
    })
  }),
  "editing-structures": freeze({
    "user-index": freeze({
      enabled: freeze({
        name: "editing-structures_user-index--enabled"
      }),
      hover: freeze({
        name: "editing-structures_user-index--hover"
      }),
      active: freeze({
        name: "editing-structures_user-index--active"
      }),
      disabled: freeze({
        name: "editing-structures_user-index--disabled"
      })
    }),
    "system-index": freeze({
      enabled: freeze({
        name: "editing-structures_system-index--enabled"
      }),
      hover: freeze({
        name: "editing-structures_system-index--hover"
      }),
      active: freeze({
        name: "editing-structures_system-index--active"
      }),
      disabled: freeze({
        name: "editing-structures_system-index--disabled"
      })
    }),
    "redundant-attribute": freeze({
      enabled: freeze({
        name: "editing-structures_redundant-attribute--enabled"
      }),
      hover: freeze({
        name: "editing-structures_redundant-attribute--hover"
      }),
      active: freeze({
        name: "editing-structures_redundant-attribute--active"
      }),
      disabled: freeze({
        name: "editing-structures_redundant-attribute--disabled"
      })
    }),
    platforms: freeze({
      enabled: freeze({
        name: "editing-structures_platforms--enabled"
      }),
      hover: freeze({
        name: "editing-structures_platforms--hover"
      }),
      active: freeze({
        name: "editing-structures_platforms--active"
      }),
      disabled: freeze({
        name: "editing-structures_platforms--disabled"
      })
    }),
    "logical-attributes": freeze({
      enabled: freeze({
        name: "editing-structures_logical-attributes--enabled"
      }),
      hover: freeze({
        name: "editing-structures_logical-attributes--hover"
      }),
      active: freeze({
        name: "editing-structures_logical-attributes--active"
      }),
      disabled: freeze({
        name: "editing-structures_logical-attributes--disabled"
      })
    }),
    "formula-redundant": freeze({
      enabled: freeze({
        name: "editing-structures_formula-redundant--enabled"
      }),
      hover: freeze({
        name: "editing-structures_formula-redundant--hover"
      }),
      active: freeze({
        name: "editing-structures_formula-redundant--active"
      }),
      disabled: freeze({
        name: "editing-structures_formula-redundant--disabled"
      })
    }),
    default: freeze({
      enabled: freeze({
        name: "editing-structures_default--enabled"
      }),
      hover: freeze({
        name: "editing-structures_default--hover"
      }),
      active: freeze({
        name: "editing-structures_default--active"
      }),
      disabled: freeze({
        name: "editing-structures_default--disabled"
      })
    }),
    "attribute-key": freeze({
      enabled: freeze({
        name: "editing-structures_attribute-key--enabled"
      }),
      hover: freeze({
        name: "editing-structures_attribute-key--hover"
      }),
      active: freeze({
        name: "editing-structures_attribute-key--active"
      }),
      disabled: freeze({
        name: "editing-structures_attribute-key--disabled"
      })
    }),
    "attribute-formula": freeze({
      enabled: freeze({
        name: "editing-structures_attribute-formula--enabled"
      }),
      hover: freeze({
        name: "editing-structures_attribute-formula--hover"
      }),
      active: freeze({
        name: "editing-structures_attribute-formula--active"
      }),
      disabled: freeze({
        name: "editing-structures_attribute-formula--disabled"
      })
    }),
    "attribute-description": freeze({
      enabled: freeze({
        name: "editing-structures_attribute-description--enabled"
      }),
      hover: freeze({
        name: "editing-structures_attribute-description--hover"
      }),
      active: freeze({
        name: "editing-structures_attribute-description--active"
      }),
      disabled: freeze({
        name: "editing-structures_attribute-description--disabled"
      })
    })
  }),
  controls: freeze({
    variable: freeze({
      enabled: freeze({
        name: "controls_variable--enabled"
      }),
      hover: freeze({
        name: "controls_variable--hover"
      }),
      active: freeze({
        name: "controls_variable--active"
      }),
      disabled: freeze({
        name: "controls_variable--disabled"
      })
    }),
    treeview: freeze({
      enabled: freeze({
        name: "controls_treeview--enabled"
      }),
      hover: freeze({
        name: "controls_treeview--hover"
      }),
      active: freeze({
        name: "controls_treeview--active"
      }),
      disabled: freeze({
        name: "controls_treeview--disabled"
      })
    }),
    "text-block": freeze({
      enabled: freeze({
        name: "controls_text-block--enabled"
      }),
      hover: freeze({
        name: "controls_text-block--hover"
      }),
      active: freeze({
        name: "controls_text-block--active"
      }),
      disabled: freeze({
        name: "controls_text-block--disabled"
      })
    }),
    "tag-html": freeze({
      enabled: freeze({
        name: "controls_tag-html--enabled"
      }),
      hover: freeze({
        name: "controls_tag-html--hover"
      }),
      active: freeze({
        name: "controls_tag-html--active"
      }),
      disabled: freeze({
        name: "controls_tag-html--disabled"
      })
    }),
    table: freeze({
      enabled: freeze({
        name: "controls_table--enabled"
      }),
      hover: freeze({
        name: "controls_table--hover"
      }),
      active: freeze({
        name: "controls_table--active"
      }),
      disabled: freeze({
        name: "controls_table--disabled"
      })
    }),
    "table-row": freeze({
      enabled: freeze({
        name: "controls_table-row--enabled"
      }),
      hover: freeze({
        name: "controls_table-row--hover"
      }),
      active: freeze({
        name: "controls_table-row--active"
      }),
      disabled: freeze({
        name: "controls_table-row--disabled"
      })
    }),
    "table-column": freeze({
      enabled: freeze({
        name: "controls_table-column--enabled"
      }),
      hover: freeze({
        name: "controls_table-column--hover"
      }),
      active: freeze({
        name: "controls_table-column--active"
      }),
      disabled: freeze({
        name: "controls_table-column--disabled"
      })
    }),
    "table-cell": freeze({
      enabled: freeze({
        name: "controls_table-cell--enabled"
      }),
      hover: freeze({
        name: "controls_table-cell--hover"
      }),
      active: freeze({
        name: "controls_table-cell--active"
      }),
      disabled: freeze({
        name: "controls_table-cell--disabled"
      })
    }),
    tab: freeze({
      enabled: freeze({
        name: "controls_tab--enabled"
      }),
      hover: freeze({
        name: "controls_tab--hover"
      }),
      active: freeze({
        name: "controls_tab--active"
      }),
      disabled: freeze({
        name: "controls_tab--disabled"
      })
    }),
    "tab-page": freeze({
      enabled: freeze({
        name: "controls_tab-page--enabled"
      }),
      hover: freeze({
        name: "controls_tab-page--hover"
      }),
      active: freeze({
        name: "controls_tab-page--active"
      }),
      disabled: freeze({
        name: "controls_tab-page--disabled"
      })
    }),
    snippet: freeze({
      enabled: freeze({
        name: "controls_snippet--enabled"
      }),
      hover: freeze({
        name: "controls_snippet--hover"
      }),
      active: freeze({
        name: "controls_snippet--active"
      }),
      disabled: freeze({
        name: "controls_snippet--disabled"
      })
    }),
    "smart-table": freeze({
      enabled: freeze({
        name: "controls_smart-table--enabled"
      }),
      hover: freeze({
        name: "controls_smart-table--hover"
      }),
      active: freeze({
        name: "controls_smart-table--active"
      }),
      disabled: freeze({
        name: "controls_smart-table--disabled"
      })
    }),
    section: freeze({
      enabled: freeze({
        name: "controls_section--enabled"
      }),
      hover: freeze({
        name: "controls_section--hover"
      }),
      active: freeze({
        name: "controls_section--active"
      }),
      disabled: freeze({
        name: "controls_section--disabled"
      })
    }),
    "pop-up": freeze({
      enabled: freeze({
        name: "controls_pop-up--enabled"
      }),
      hover: freeze({
        name: "controls_pop-up--hover"
      }),
      active: freeze({
        name: "controls_pop-up--active"
      }),
      disabled: freeze({
        name: "controls_pop-up--disabled"
      })
    }),
    messages: freeze({
      enabled: freeze({
        name: "controls_messages--enabled"
      }),
      hover: freeze({
        name: "controls_messages--hover"
      }),
      active: freeze({
        name: "controls_messages--active"
      }),
      disabled: freeze({
        name: "controls_messages--disabled"
      })
    }),
    "media-player": freeze({
      enabled: freeze({
        name: "controls_media-player--enabled"
      }),
      hover: freeze({
        name: "controls_media-player--hover"
      }),
      active: freeze({
        name: "controls_media-player--active"
      }),
      disabled: freeze({
        name: "controls_media-player--disabled"
      })
    }),
    "id-html": freeze({
      enabled: freeze({
        name: "controls_id-html--enabled"
      }),
      hover: freeze({
        name: "controls_id-html--hover"
      }),
      active: freeze({
        name: "controls_id-html--active"
      }),
      disabled: freeze({
        name: "controls_id-html--disabled"
      })
    }),
    hyperlink: freeze({
      enabled: freeze({
        name: "controls_hyperlink--enabled"
      }),
      hover: freeze({
        name: "controls_hyperlink--hover"
      }),
      active: freeze({
        name: "controls_hyperlink--active"
      }),
      disabled: freeze({
        name: "controls_hyperlink--disabled"
      })
    }),
    html: freeze({
      enabled: freeze({
        name: "controls_html--enabled"
      }),
      hover: freeze({
        name: "controls_html--hover"
      }),
      active: freeze({
        name: "controls_html--active"
      }),
      disabled: freeze({
        name: "controls_html--disabled"
      })
    }),
    "horizontal-line": freeze({
      enabled: freeze({
        name: "controls_horizontal-line--enabled"
      }),
      hover: freeze({
        name: "controls_horizontal-line--hover"
      }),
      active: freeze({
        name: "controls_horizontal-line--active"
      }),
      disabled: freeze({
        name: "controls_horizontal-line--disabled"
      })
    }),
    "history-manager": freeze({
      enabled: freeze({
        name: "controls_history-manager--enabled"
      }),
      hover: freeze({
        name: "controls_history-manager--hover"
      }),
      active: freeze({
        name: "controls_history-manager--active"
      }),
      disabled: freeze({
        name: "controls_history-manager--disabled"
      })
    }),
    "gx-scheduler": freeze({
      enabled: freeze({
        name: "controls_gx-scheduler--enabled"
      }),
      hover: freeze({
        name: "controls_gx-scheduler--hover"
      }),
      active: freeze({
        name: "controls_gx-scheduler--active"
      }),
      disabled: freeze({
        name: "controls_gx-scheduler--disabled"
      })
    }),
    group: freeze({
      enabled: freeze({
        name: "controls_group--enabled"
      }),
      hover: freeze({
        name: "controls_group--hover"
      }),
      active: freeze({
        name: "controls_group--active"
      }),
      disabled: freeze({
        name: "controls_group--disabled"
      })
    }),
    grid: freeze({
      enabled: freeze({
        name: "controls_grid--enabled"
      }),
      hover: freeze({
        name: "controls_grid--hover"
      }),
      active: freeze({
        name: "controls_grid--active"
      }),
      disabled: freeze({
        name: "controls_grid--disabled"
      })
    }),
    "google-geomap": freeze({
      enabled: freeze({
        name: "controls_google-geomap--enabled"
      }),
      hover: freeze({
        name: "controls_google-geomap--hover"
      }),
      active: freeze({
        name: "controls_google-geomap--active"
      }),
      disabled: freeze({
        name: "controls_google-geomap--disabled"
      })
    }),
    "google-charts": freeze({
      enabled: freeze({
        name: "controls_google-charts--enabled"
      }),
      hover: freeze({
        name: "controls_google-charts--hover"
      }),
      active: freeze({
        name: "controls_google-charts--active"
      }),
      disabled: freeze({
        name: "controls_google-charts--disabled"
      })
    }),
    "google-annotated-tmeline": freeze({
      enabled: freeze({
        name: "controls_google-annotated-tmeline--enabled"
      }),
      hover: freeze({
        name: "controls_google-annotated-tmeline--hover"
      }),
      active: freeze({
        name: "controls_google-annotated-tmeline--active"
      }),
      disabled: freeze({
        name: "controls_google-annotated-tmeline--disabled"
      })
    }),
    "google-analytics": freeze({
      enabled: freeze({
        name: "controls_google-analytics--enabled"
      }),
      hover: freeze({
        name: "controls_google-analytics--hover"
      }),
      active: freeze({
        name: "controls_google-analytics--active"
      }),
      disabled: freeze({
        name: "controls_google-analytics--disabled"
      })
    }),
    "free-style-grid": freeze({
      enabled: freeze({
        name: "controls_free-style-grid--enabled"
      }),
      hover: freeze({
        name: "controls_free-style-grid--hover"
      }),
      active: freeze({
        name: "controls_free-style-grid--active"
      }),
      disabled: freeze({
        name: "controls_free-style-grid--disabled"
      })
    }),
    font: freeze({
      enabled: freeze({
        name: "controls_font--enabled"
      }),
      hover: freeze({
        name: "controls_font--hover"
      }),
      active: freeze({
        name: "controls_font--active"
      }),
      disabled: freeze({
        name: "controls_font--disabled"
      })
    }),
    flex: freeze({
      enabled: freeze({
        name: "controls_flex--enabled"
      }),
      hover: freeze({
        name: "controls_flex--hover"
      }),
      active: freeze({
        name: "controls_flex--active"
      }),
      disabled: freeze({
        name: "controls_flex--disabled"
      })
    }),
    "file-upload": freeze({
      enabled: freeze({
        name: "controls_file-upload--enabled"
      }),
      hover: freeze({
        name: "controls_file-upload--hover"
      }),
      active: freeze({
        name: "controls_file-upload--active"
      }),
      disabled: freeze({
        name: "controls_file-upload--disabled"
      })
    }),
    "error-viewer": freeze({
      enabled: freeze({
        name: "controls_error-viewer--enabled"
      }),
      hover: freeze({
        name: "controls_error-viewer--hover"
      }),
      active: freeze({
        name: "controls_error-viewer--active"
      }),
      disabled: freeze({
        name: "controls_error-viewer--disabled"
      })
    }),
    "embedded-page": freeze({
      enabled: freeze({
        name: "controls_embedded-page--enabled"
      }),
      hover: freeze({
        name: "controls_embedded-page--hover"
      }),
      active: freeze({
        name: "controls_embedded-page--active"
      }),
      disabled: freeze({
        name: "controls_embedded-page--disabled"
      })
    }),
    default: freeze({
      enabled: freeze({
        name: "controls_default--enabled"
      }),
      hover: freeze({
        name: "controls_default--hover"
      }),
      active: freeze({
        name: "controls_default--active"
      }),
      disabled: freeze({
        name: "controls_default--disabled"
      })
    }),
    component: freeze({
      enabled: freeze({
        name: "controls_component--enabled"
      }),
      hover: freeze({
        name: "controls_component--hover"
      }),
      active: freeze({
        name: "controls_component--active"
      }),
      disabled: freeze({
        name: "controls_component--disabled"
      })
    }),
    "class-html": freeze({
      enabled: freeze({
        name: "controls_class-html--enabled"
      }),
      hover: freeze({
        name: "controls_class-html--hover"
      }),
      active: freeze({
        name: "controls_class-html--active"
      }),
      disabled: freeze({
        name: "controls_class-html--disabled"
      })
    }),
    canva: freeze({
      enabled: freeze({
        name: "controls_canva--enabled"
      }),
      hover: freeze({
        name: "controls_canva--hover"
      }),
      active: freeze({
        name: "controls_canva--active"
      }),
      disabled: freeze({
        name: "controls_canva--disabled"
      })
    }),
    "call-target": freeze({
      enabled: freeze({
        name: "controls_call-target--enabled"
      }),
      hover: freeze({
        name: "controls_call-target--hover"
      }),
      active: freeze({
        name: "controls_call-target--active"
      }),
      disabled: freeze({
        name: "controls_call-target--disabled"
      })
    }),
    button: freeze({
      enabled: freeze({
        name: "controls_button--enabled"
      }),
      hover: freeze({
        name: "controls_button--hover"
      }),
      active: freeze({
        name: "controls_button--active"
      }),
      disabled: freeze({
        name: "controls_button--disabled"
      })
    }),
    "button-group": freeze({
      enabled: freeze({
        name: "controls_button-group--enabled"
      }),
      hover: freeze({
        name: "controls_button-group--hover"
      }),
      active: freeze({
        name: "controls_button-group--active"
      }),
      disabled: freeze({
        name: "controls_button-group--disabled"
      })
    }),
    "action-group": freeze({
      enabled: freeze({
        name: "controls_action-group--enabled"
      }),
      hover: freeze({
        name: "controls_action-group--hover"
      }),
      active: freeze({
        name: "controls_action-group--active"
      }),
      disabled: freeze({
        name: "controls_action-group--disabled"
      })
    }),
    "action-group-item": freeze({
      enabled: freeze({
        name: "controls_action-group-item--enabled"
      }),
      hover: freeze({
        name: "controls_action-group-item--hover"
      }),
      active: freeze({
        name: "controls_action-group-item--active"
      }),
      disabled: freeze({
        name: "controls_action-group-item--disabled"
      })
    })
  }),
  bpm: freeze({
    "timer-6": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_timer-6_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_timer-6_neutral--hover"
        }),
        active: freeze({
          name: "bpm_timer-6_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_timer-6_neutral--disabled"
        })
      })
    }),
    "timer-5": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_timer-5_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_timer-5_neutral--hover"
        }),
        active: freeze({
          name: "bpm_timer-5_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_timer-5_neutral--disabled"
        })
      })
    }),
    "timer-2": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_timer-2_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_timer-2_neutral--hover"
        }),
        active: freeze({
          name: "bpm_timer-2_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_timer-2_neutral--disabled"
        })
      })
    }),
    "timer-1": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_timer-1_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_timer-1_neutral--hover"
        }),
        active: freeze({
          name: "bpm_timer-1_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_timer-1_neutral--disabled"
        })
      })
    }),
    "terminale-4": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_terminale-4_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_terminale-4_neutral--hover"
        }),
        active: freeze({
          name: "bpm_terminale-4_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_terminale-4_neutral--disabled"
        })
      })
    }),
    tasks: freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_tasks_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_tasks_neutral--hover"
        }),
        active: freeze({
          name: "bpm_tasks_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_tasks_neutral--disabled"
        })
      })
    }),
    subprocess: freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_subprocess_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_subprocess_neutral--hover"
        }),
        active: freeze({
          name: "bpm_subprocess_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_subprocess_neutral--disabled"
        })
      })
    }),
    "signal-6": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_signal-6_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_signal-6_neutral--hover"
        }),
        active: freeze({
          name: "bpm_signal-6_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_signal-6_neutral--disabled"
        })
      })
    }),
    "signal-5": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_signal-5_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_signal-5_neutral--hover"
        }),
        active: freeze({
          name: "bpm_signal-5_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_signal-5_neutral--disabled"
        })
      })
    }),
    "signal-4": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_signal-4_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_signal-4_neutral--hover"
        }),
        active: freeze({
          name: "bpm_signal-4_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_signal-4_neutral--disabled"
        })
      })
    }),
    "signal-3": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_signal-3_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_signal-3_neutral--hover"
        }),
        active: freeze({
          name: "bpm_signal-3_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_signal-3_neutral--disabled"
        })
      })
    }),
    "signal-2": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_signal-2_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_signal-2_neutral--hover"
        }),
        active: freeze({
          name: "bpm_signal-2_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_signal-2_neutral--disabled"
        })
      })
    }),
    "signal-1": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_signal-1_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_signal-1_neutral--hover"
        }),
        active: freeze({
          name: "bpm_signal-1_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_signal-1_neutral--disabled"
        })
      })
    }),
    person: freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_person_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_person_neutral--hover"
        }),
        active: freeze({
          name: "bpm_person_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_person_neutral--disabled"
        })
      })
    }),
    "paralell-4": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_paralell-4_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_paralell-4_neutral--hover"
        }),
        active: freeze({
          name: "bpm_paralell-4_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_paralell-4_neutral--disabled"
        })
      })
    }),
    "paralell-3": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_paralell-3_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_paralell-3_neutral--hover"
        }),
        active: freeze({
          name: "bpm_paralell-3_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_paralell-3_neutral--disabled"
        })
      })
    }),
    "paralell-2": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_paralell-2_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_paralell-2_neutral--hover"
        }),
        active: freeze({
          name: "bpm_paralell-2_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_paralell-2_neutral--disabled"
        })
      })
    }),
    "paralell-1": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_paralell-1_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_paralell-1_neutral--hover"
        }),
        active: freeze({
          name: "bpm_paralell-1_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_paralell-1_neutral--disabled"
        })
      })
    }),
    oval: freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_oval_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_oval_neutral--hover"
        }),
        active: freeze({
          name: "bpm_oval_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_oval_neutral--disabled"
        })
      })
    }),
    "oval-doble": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_oval-doble_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_oval-doble_neutral--hover"
        }),
        active: freeze({
          name: "bpm_oval-doble_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_oval-doble_neutral--disabled"
        })
      })
    }),
    "multiple-6": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_multiple-6_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_multiple-6_neutral--hover"
        }),
        active: freeze({
          name: "bpm_multiple-6_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_multiple-6_neutral--disabled"
        })
      })
    }),
    "multiple-5": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_multiple-5_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_multiple-5_neutral--hover"
        }),
        active: freeze({
          name: "bpm_multiple-5_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_multiple-5_neutral--disabled"
        })
      })
    }),
    "multiple-4": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_multiple-4_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_multiple-4_neutral--hover"
        }),
        active: freeze({
          name: "bpm_multiple-4_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_multiple-4_neutral--disabled"
        })
      })
    }),
    "multiple-3": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_multiple-3_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_multiple-3_neutral--hover"
        }),
        active: freeze({
          name: "bpm_multiple-3_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_multiple-3_neutral--disabled"
        })
      })
    }),
    "multiple-2": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_multiple-2_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_multiple-2_neutral--hover"
        }),
        active: freeze({
          name: "bpm_multiple-2_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_multiple-2_neutral--disabled"
        })
      })
    }),
    "multiple-1": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_multiple-1_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_multiple-1_neutral--hover"
        }),
        active: freeze({
          name: "bpm_multiple-1_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_multiple-1_neutral--disabled"
        })
      })
    }),
    "message-6": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_message-6_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_message-6_neutral--hover"
        }),
        active: freeze({
          name: "bpm_message-6_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_message-6_neutral--disabled"
        })
      })
    }),
    "message-5": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_message-5_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_message-5_neutral--hover"
        }),
        active: freeze({
          name: "bpm_message-5_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_message-5_neutral--disabled"
        })
      })
    }),
    "message-4": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_message-4_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_message-4_neutral--hover"
        }),
        active: freeze({
          name: "bpm_message-4_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_message-4_neutral--disabled"
        })
      })
    }),
    "message-3": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_message-3_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_message-3_neutral--hover"
        }),
        active: freeze({
          name: "bpm_message-3_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_message-3_neutral--disabled"
        })
      })
    }),
    "message-2": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_message-2_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_message-2_neutral--hover"
        }),
        active: freeze({
          name: "bpm_message-2_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_message-2_neutral--disabled"
        })
      })
    }),
    "message-1": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_message-1_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_message-1_neutral--hover"
        }),
        active: freeze({
          name: "bpm_message-1_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_message-1_neutral--disabled"
        })
      })
    }),
    "link-4": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_link-4_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_link-4_neutral--hover"
        }),
        active: freeze({
          name: "bpm_link-4_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_link-4_neutral--disabled"
        })
      })
    }),
    "link-3": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_link-3_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_link-3_neutral--hover"
        }),
        active: freeze({
          name: "bpm_link-3_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_link-3_neutral--disabled"
        })
      })
    }),
    "escalation-6": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_escalation-6_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_escalation-6_neutral--hover"
        }),
        active: freeze({
          name: "bpm_escalation-6_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_escalation-6_neutral--disabled"
        })
      })
    }),
    "escalation-5": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_escalation-5_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_escalation-5_neutral--hover"
        }),
        active: freeze({
          name: "bpm_escalation-5_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_escalation-5_neutral--disabled"
        })
      })
    }),
    "escalation-4": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_escalation-4_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_escalation-4_neutral--hover"
        }),
        active: freeze({
          name: "bpm_escalation-4_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_escalation-4_neutral--disabled"
        })
      })
    }),
    "escalation-3": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_escalation-3_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_escalation-3_neutral--hover"
        }),
        active: freeze({
          name: "bpm_escalation-3_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_escalation-3_neutral--disabled"
        })
      })
    }),
    "escalation-2": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_escalation-2_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_escalation-2_neutral--hover"
        }),
        active: freeze({
          name: "bpm_escalation-2_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_escalation-2_neutral--disabled"
        })
      })
    }),
    "escalation-1": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_escalation-1_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_escalation-1_neutral--hover"
        }),
        active: freeze({
          name: "bpm_escalation-1_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_escalation-1_neutral--disabled"
        })
      })
    }),
    "error-2": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_error-2_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_error-2_neutral--hover"
        }),
        active: freeze({
          name: "bpm_error-2_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_error-2_neutral--disabled"
        })
      })
    }),
    "error-1": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_error-1_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_error-1_neutral--hover"
        }),
        active: freeze({
          name: "bpm_error-1_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_error-1_neutral--disabled"
        })
      })
    }),
    delete: freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_delete_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_delete_neutral--hover"
        }),
        active: freeze({
          name: "bpm_delete_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_delete_neutral--disabled"
        })
      })
    }),
    conditional: freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_conditional_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_conditional_neutral--hover"
        }),
        active: freeze({
          name: "bpm_conditional_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_conditional_neutral--disabled"
        })
      })
    }),
    "conditional-6": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_conditional-6_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_conditional-6_neutral--hover"
        }),
        active: freeze({
          name: "bpm_conditional-6_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_conditional-6_neutral--disabled"
        })
      })
    }),
    "conditional-5": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_conditional-5_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_conditional-5_neutral--hover"
        }),
        active: freeze({
          name: "bpm_conditional-5_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_conditional-5_neutral--disabled"
        })
      })
    }),
    "conditional-2": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_conditional-2_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_conditional-2_neutral--hover"
        }),
        active: freeze({
          name: "bpm_conditional-2_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_conditional-2_neutral--disabled"
        })
      })
    }),
    "conditional-1": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_conditional-1_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_conditional-1_neutral--hover"
        }),
        active: freeze({
          name: "bpm_conditional-1_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_conditional-1_neutral--disabled"
        })
      })
    }),
    "compensation-4": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_compensation-4_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_compensation-4_neutral--hover"
        }),
        active: freeze({
          name: "bpm_compensation-4_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_compensation-4_neutral--disabled"
        })
      })
    }),
    "compensation-3": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_compensation-3_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_compensation-3_neutral--hover"
        }),
        active: freeze({
          name: "bpm_compensation-3_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_compensation-3_neutral--disabled"
        })
      })
    }),
    "compensation-2": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_compensation-2_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_compensation-2_neutral--hover"
        }),
        active: freeze({
          name: "bpm_compensation-2_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_compensation-2_neutral--disabled"
        })
      })
    }),
    "compensation-1": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_compensation-1_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_compensation-1_neutral--hover"
        }),
        active: freeze({
          name: "bpm_compensation-1_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_compensation-1_neutral--disabled"
        })
      })
    }),
    "cancel-4": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_cancel-4_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_cancel-4_neutral--hover"
        }),
        active: freeze({
          name: "bpm_cancel-4_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_cancel-4_neutral--disabled"
        })
      })
    }),
    "cancel-2": freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_cancel-2_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_cancel-2_neutral--hover"
        }),
        active: freeze({
          name: "bpm_cancel-2_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_cancel-2_neutral--disabled"
        })
      })
    }),
    arrows: freeze({
      neutral: freeze({
        enabled: freeze({
          name: "bpm_arrows_neutral--enabled"
        }),
        hover: freeze({
          name: "bpm_arrows_neutral--hover"
        }),
        active: freeze({
          name: "bpm_arrows_neutral--active"
        }),
        disabled: freeze({
          name: "bpm_arrows_neutral--disabled"
        })
      })
    })
  })
})
});