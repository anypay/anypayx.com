// @mui
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// _mock_
import { _faqs } from '../../_mock';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

interface FAQ {
  question: string;
  answer: string;
}

const faqs1: FAQ[] = [{
  question: 'What is the value of Anypay?',
  answer: '',
}, {
  question: 'What does Anypay do?',
  answer: ''
}, {
  question:  'What services does Anypay offer?',
  answer: ''  
}, {
  question:   'Why should I use Anypay?',
  answer: ''  
}, {
  question:   'Who is Anypay for?',
  answer: ''
}, {
  question:   'How much does it cost?',
  answer: ''  
}, {
  question:   'How does it work?',
  answer: ''  
}, {
  question:   'Is it custodial or not?',
  answer: ''
}, {
  question:   'Do I have to KYC?',
  answer: ''
}]

const faqs2: FAQ[] = [{
  question: 'Are there limits?',
  answer: '',
}, {
  question: 'Can businesses consider as high-risk use it (e.g.: cannabis dispensary)?',
  answer: ''
}, {
  question:  'What cryptocurrencies can I use?',
  answer: ''  
}, {
  question:   'Can I add Lightning and Liquid?',
  answer: ''  
}, {
  question:   'Where can I find documentation and tutorials?',
  answer: ''
}, {
  question:   'Do you have integrations with e-commerce platforms? Which ones?',
  answer: ''  
}, {
  question:   'How do I get support and how do I get in touch with your company?',
  answer: ''  
}, {
  question:   'If you encounter an issue with your software, do your end the development of your platform, or do you work on it and improve it?',
  answer: ''
}]

interface AccordianItem {
  id: number;
  value: string;
  heading: string;
  detail: string;
}

function mapFAQToAccordian(faq: FAQ, index: number): AccordianItem {
  return {
    id: index,
    value: `panel${index + 1}`,
    heading: faq.question,
    detail: faq.answer
  }
}

const accordianItems1: AccordianItem[] = faqs1.map(mapFAQToAccordian);

const accordianItems2: AccordianItem[] = faqs2.map(mapFAQToAccordian);

export function FaqsList1() {
  return (
    <>
      { accordianItems1.map((accordion: AccordianItem) => (
        <Accordion key={accordion.id}>
          <AccordionSummary
            expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}
          >
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

export function FaqsList2() {
  return (
    <>
      { accordianItems2.map((accordion: AccordianItem) => (
        <Accordion key={accordion.id}>
          <AccordionSummary
            expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}
          >
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
