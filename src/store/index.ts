import { configureStore } from '@reduxjs/toolkit'

import projectsReducer from './reducers/projects'
import AboutMeReducer from './reducers/aboutMe'
import TechnologiesReducer from './reducers/technologies'
import navBarSlice from './reducers/navBar'

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    aboutMe: AboutMeReducer,
    technologies: TechnologiesReducer,
    navBar: navBarSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
