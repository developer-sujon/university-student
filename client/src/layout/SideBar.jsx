//External Lib  imports
import React from 'react';
import { RiDashboardLine } from 'react-icons/ri';
import { Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { BiSupport } from 'react-icons/bi';
import { GiMeatCleaver } from 'react-icons/gi';
import { MdSubject } from 'react-icons/md';
import { RiCompassesLine } from 'react-icons/ri';
import { SiSemanticscholar } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';

//Internal Lib  imports
import NavItem from './NavItem';

const SideBar = ({ openMenu, setOpenMenu }) => {
  const { t } = useTranslation();
  return (
    <div className={openMenu ? 'side-nav-open' : 'side-nav-close'}>
      <Nav className="flex-column pt-2">
        <NavItem title={t('dashboard')} link="/dashboard" Icon={RiDashboardLine} />
        <NavItem title={t('leave')} link="/leave" Icon={GiMeatCleaver} />
        <NavItem title={t('subject repetition')} link="/subject-repetition" Icon={MdSubject} />
        <NavItem title={t('retake assessment')} link="/retake-assessment" Icon={RiCompassesLine} />
        <NavItem title={t('scholarship')} link="/scholarship" Icon={SiSemanticscholar} />
        <NavItem title={t('others')} link="/others" Icon={BiSupport} />
        <NavItem title={t('profile')} link="/profile" Icon={CgProfile} />
      </Nav>
    </div>
  );
};

export default SideBar;
