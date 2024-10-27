import { IconType } from 'react-icons';
import { MdCabin } from 'react-icons/md';

import { TbCaravan, TbTent, TbBuildingCottage } from 'react-icons/tb';

import { GiWoodCabin, GiMushroomHouse } from 'react-icons/gi';
import { PiWarehouse, PiLighthouse, PiVan } from 'react-icons/pi';

import { GoContainer } from 'react-icons/go';

import { GiDrippingHoney } from "react-icons/gi";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | 'ABB'
  | 'AB'
  | 'FESTO'
  | 'BECKHOFF'
  | 'HONEYWELL'
  | 'MITSUBISHI'
  | 'OMRON'
  | 'PANASONIC'
  | 'SIEMENS'
  | 'SCHNEIDER'
  | 'YASKAWA';

export const categories: Category[] = [
  {
    label: 'ABB',
    icon: MdCabin,
  },
  {
    label: 'AB',
    icon: PiVan,
  },
  {
    label: 'FESTO',
    icon: TbTent,
  },
  {
    label: 'BECKHOFF',
    icon: PiWarehouse,
  },
  {
    label: 'HONEYWELL',
    icon: GiDrippingHoney,
  },
  {
    label: 'MITSUBISHI',
    icon: TbBuildingCottage,
  },
  {
    label: 'OMRON',
    icon: GiMushroomHouse,
  },
  {
    label: 'PANASONIC',
    icon: GoContainer,
  },
  {
    label: 'SIEMENS',
    icon: TbCaravan,
  },

  {
    label: 'SCHNEIDER',
    icon: PiLighthouse,
  },
  {
    label: 'YASKAWA',
    icon: GiWoodCabin,
  },
];