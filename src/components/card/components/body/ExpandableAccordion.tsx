import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@fluentui/react-components";
import { NewsRegular } from '@fluentui/react-icons';

type MoreItemsAnchor = {
  type: string;
  to: string;
  onClick?: () => void;
}

export type ExpandableAccordionProps = {
  children: React.ReactNode[];
  maximumItems?: number;
  moreAnchor?: MoreItemsAnchor
}

export default function ExpandableAccordion(props: ExpandableAccordionProps) {
  const showMore = props.moreAnchor && props.maximumItems && props.children.length > props.maximumItems

  return (
    <Accordion collapsible className='w-full pb-[10px]'>
      <AccordionItem value="1">
        <AccordionHeader><div className='flex gap-[5px] items-center'><NewsRegular fontSize={24} /> <div>Show blocked categories</div></div></AccordionHeader>
        <AccordionPanel className="flex flex-col gap-[10px]">
          {props.children.slice(0, props.maximumItems)}
          {
            showMore &&
            <a href={props.moreAnchor!.to} target="_blank" rel="noopener noreferrer" className='text-[#616161] text-[14px] cursor-pointer'>
              {`+${props.children.length - props.maximumItems!} more ${props.moreAnchor!.type}`}
            </a>
          }
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
