import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';


const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt=""/>
                    </div>
                </div>
                <div className="flexColStart v-right">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value We Give to You</span>
                    <span className="secondaryText">
                        We always ready to help by providijg the best services for you.<br />
                        We beleive a good blace to live can make your life better
                    </span>
                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, i) => {
                            return (
                                <AccordionItem className="accordionItem" key={i} uuid=>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <div className="flexCenter icon">{item.icon}</div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                </AccordionItem>
                            );
                        })}

                    </Accordion>

                </div>
            </div>
        </section>

    );
};

export default Value;
