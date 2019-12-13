import React, { useState } from 'react'
import { useSelectedProjectValue, useProjectsValue } from '../context'

export const Projects = ({ activeValue = true }) => {
  const [ active, setActive ] = useState(activeValue)
  const { setSelectedProject } = useSelectedProjectValue()
  const { projects } = useProjectsValue()

  return (
    projects && projects.map(project => (
      <li
        key={project.project.Id}
        data-doc-id={project.docId}
        data-testid="project-action"
        role="button"
        className={
          active === project.project.Id
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
        onKeyPress={() => {
          setActive(project.project.Id)
          setSelectedProject(project.projectId)
        }}
        onClick={() => {
          setActive(project.project.Id)
          setSelectedProject(project.projectId)
        }}
      >
        I am a project
      </li>
    ))
  )
}