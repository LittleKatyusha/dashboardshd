// CSS Modules Export Index
// This file provides a centralized way to import CSS modules

// Layout Styles
export { default as headerStyles } from './layout/header.module.css'

// Component Styles
export { default as dataTableStyles } from './components/data-table.module.css'
export { default as simpleDataTableStyles } from './components/simple-data-table.module.css'
export { default as statsCardStyles } from './components/stats-card.module.css'

// Page Styles
export { default as dashboardStyles } from './pages/dashboard.module.css'
export { default as loginStyles } from './pages/login.module.css'

// Re-export all styles as a single object for convenience
import headerStyles from './layout/header.module.css'
import dataTableStyles from './components/data-table.module.css'
import simpleDataTableStyles from './components/simple-data-table.module.css'
import statsCardStyles from './components/stats-card.module.css'
import dashboardStyles from './pages/dashboard.module.css'
import loginStyles from './pages/login.module.css'

export const styles = {
  layout: {
    header: headerStyles,
  },
  components: {
    dataTable: dataTableStyles,
    simpleDataTable: simpleDataTableStyles,
    statsCard: statsCardStyles,
  },
  pages: {
    dashboard: dashboardStyles,
    login: loginStyles,
  },
}
