import React, { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { AddTask } from "../AddTask";
import PropTypes from "prop-types";

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li
              onClick={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
              }}
              className="settings__add"
              data-testid="quick-add-task-action"
            >
              +
            </li>
            <li
              onClick={() => setDarkMode(!darkMode)}
              className="settings__darkmode"
              data-testid="dark-mode-action"
            >
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired
};
