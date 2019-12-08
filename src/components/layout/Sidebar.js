import React from 'react'
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";

export const Sidebar = () => <div className="sidebar" data-testid="sidebar">
  <ul className="sidebar_generic">
    <li data-testid="inbox" className='inbox'>
      <span>
        <FaRegCalendar />
      </span>
      <span>Today</span>
    </li>
    <li data-testid="today" className='today'>
      <span>
        <FaInbox />
      </span>
      <span>T</span>
    </li>
    <li data-testid="next_7" className='next_7'>
      <span>
        <FaRegCalendarAlt />
      </span>
      <span>Next 7 days</span>
    </li>

    <div className="sidebar__middle">
      <span>
        <FaChevronDown />
      </span>
      <h2>Projects</h2>
    </div>

    <ul className="sidebar__projects">Projects will be here!</ul>

    Add project component Here!!
  </ul>
</div>