import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <MdIcons.MdDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Assets',
    path: '/assets',
    icon: <RiIcons.RiTimeFill />,
    cName: 'nav-text'
  },
  {
    title: 'Tracker',
    path: '/tracker',
    icon: <FiIcons.FiBarChart2/>,
    cName: 'nav-text'
  },
  {
    title: 'Planning & Advisory',
    path: '/planning',
    icon: <FaIcons.FaCalendarAlt />,
    cName: 'nav-text'
  }
];