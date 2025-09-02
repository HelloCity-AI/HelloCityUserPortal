'use client';

import React, { useState } from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import useIsMobile from '@/hooks/useIsMobile';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
import { type NavConfig } from './navConfig';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

export interface NavBarProps {
  navConfig: NavConfig;
  hasSignedIn: boolean;
}

const NavBar = () => {
  // to be replaced when user slice is setup
  const navConfig = useNavigation();
  const isMobile = useIsMobile();
  const userData = useSelector((state: RootState) => state.user.userData);
  const hasSignedIn = userData !== null;
  console.log(hasSignedIn);

  return isMobile ? (
    <MobileNavBar hasSignedIn={hasSignedIn} navConfig={navConfig} />
  ) : (
    <DesktopNavBar hasSignedIn={hasSignedIn} navConfig={navConfig} />
  );
};

export default NavBar;
