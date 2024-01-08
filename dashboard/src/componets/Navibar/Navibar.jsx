import React, { useState } from 'react'
import "./navibar.css"
import "../../App.css"
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Sidenav, Nav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import BlockIcon from '@rsuite/icons/Block';

export default function Navibar() {
    const [expanded, setExpanded] = React.useState(true);
    const [activeKey, setActiveKey] = React.useState('1');
    return (
      <div style={{ width: 240 }}>
        <Toggle
          onChange={setExpanded}
          checked={expanded}
          checkedChildren="Expand"
          unCheckedChildren="Collapse"
        />
        <hr />
        <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']}>
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              <Nav.Item eventKey="1" icon={<DashboardIcon />} href='/'>
                Dashboard
              </Nav.Item>
              <Nav.Item eventKey="2" icon={<GroupIcon />}>
                User Group
              </Nav.Item>
              <Nav.Menu placement="rightStart" eventKey="3" title="Advanced" icon={<MagicIcon />}>
                <Nav.Item eventKey="3-1">Geo</Nav.Item>
                <Nav.Item eventKey="3-2">Devices</Nav.Item>
                <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                placement="rightStart"
                eventKey="4"
                title="Settings"
                icon={<GearCircleIcon />}
              >
                <Nav.Item eventKey="4-1">Applications</Nav.Item>
                <Nav.Item eventKey="4-2">Channels</Nav.Item>
                <Nav.Item eventKey="4-3">Versions</Nav.Item>
                <Nav.Menu eventKey="4-5" title="Custom Action">
                  <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                  <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                </Nav.Menu>
              </Nav.Menu>
                <Nav.Item eventKey='5' href='/error' icon={<BlockIcon/>}>Error Page</Nav.Item>
            </Nav>
          </Sidenav.Body>
          <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
        </Sidenav>
      </div>
    );
  };


