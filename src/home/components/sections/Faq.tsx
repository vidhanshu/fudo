import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Container from "@/src/common/components/Container"
import { FAQS } from "../../utils/constants"
import RenderHTML from "@/src/common/components/RenderHTML"
import SectionTitle from "../../common/SectionTitle"


const Faq = () => {
    return (
        <Container>
            <SectionTitle
                label="Get the answers"
                title="FAQs"
                className="mb-5"
            />
            {
                FAQS.map((faq) => (
                    <Accordion key={faq._id} type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="typo-title-sm text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                <RenderHTML html={faq.answer} />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))
            }
        </Container>
    )
}

export default Faq