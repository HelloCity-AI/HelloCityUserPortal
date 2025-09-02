import { Trans } from '@lingui/react';
import { useRouter } from 'next/navigation';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Logout from '@mui/icons-material/Logout';
import type { DropdownOptionProps } from '@/components/Dropdown';

export const useUserMenuOptions = () => {
  const router = useRouter();
  const handleLogout = () => {
    router.replace('/auth/logout');
  };

  const useMenuOptions: DropdownOptionProps[] = [
    {
      label: <Trans id="Profile" message="Profile" />,
      value: 'profile',
      icon: PersonOutlineIcon,
      divider: false,
      onClick: (value: string) => alert(value),
    },
    {
      label: <Trans id="Logout" message="Logout" />,
      value: 'logout',
      icon: Logout,
      divider: false,
      onClick: handleLogout,
    },
  ];

  return useMenuOptions;
};
