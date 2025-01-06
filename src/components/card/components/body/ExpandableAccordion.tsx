import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@fluentui/react-components";
import useStyles from "./ExpandableAccordion.styles";

type MoreItemsAnchor = {
  type: string;
  to: string;
  onClick?: () => void;
}

export type ExpandableAccordionProps = {
  children: React.ReactNode[];
  maximumItems?: number;
  moreAnchor?: MoreItemsAnchor,
  title: string;
  icon?: React.ReactNode;
}

export default function ExpandableAccordion(props: ExpandableAccordionProps) {
  const styles = useStyles();
  const showMore = props.moreAnchor && props.maximumItems && props.children.length > props.maximumItems

  return (
    <Accordion collapsible className={styles.root}>
      <AccordionItem value="1">
        <AccordionHeader expandIconPosition="end">
          <div className={styles.header}>
            {props.icon}
            <div>{props.title}</div>
          </div>
        </AccordionHeader>
        <AccordionPanel className={styles.panel}>
          {props.children.slice(0, props.maximumItems)}
          {
            showMore &&
            <a href={props.moreAnchor!.to} target="_blank" rel="noopener noreferrer" className={styles.moreLink}>
              {`+${props.children.length - props.maximumItems!} more ${props.moreAnchor!.type}`}
            </a>
          }
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
