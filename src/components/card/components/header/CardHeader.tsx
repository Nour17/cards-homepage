import {
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";
import IconShowMore from '@/assets/icons/IconShowMore';
import useStyles from './CardHeader.styles';
import { ReactNode } from 'react';

export type CardHeaderProps = {
  icon?: ReactNode,
  title: string,
  children?: ReactNode,
  options?: string[],
  isRemovable?: boolean
}

function OptionsMenu(options: string[]) {
  return (
    <Menu>
      <MenuTrigger>
        <IconShowMore size='24px' />
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {options && options.map((option, index) => (
            <MenuItem key={index}>
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}

export default function CardHeader(props: CardHeaderProps) {
  const styles = useStyles();

  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        {props.icon && props.icon}
        <p className={styles.title} title={props.title}>{props.title}</p>
        <div>
          {props.children}
        </div>
      </div>
      {props.options && OptionsMenu(props.options)}
    </div>
  )
}