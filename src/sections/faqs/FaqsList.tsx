// @mui
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// _mock_
import { _faqs } from '../../_mock';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const questions1 = [
  'What is the value of Anypay?',
  'What does Anypay do?',
  'What services does Anypay offer?',
  'Why should I use Anypay?',
  'Who is Anypay for?',
  'How much does it cost?',
  'How does it work?',
  'Is it custodial or not?',
  'Do I have to KYC?'
]

const questions2 = [
  'Are there limits?',
  'Can businesses consider as high-risk use it (e.g.: cannabis dispensary)?',
  'What cryptocurrencies can I use?',
  'Can I add Lightning and Liquid?',
  'Where can I find documentation and tutorials?',
  'Do you have integrations with e-commerce platforms? Which ones?',
  'How do I get support and how do I get in touch with your company?',
  'If you encounter an issue with your software, do your end the development of your platform, or do you work on it and improve it?'
]

const faqs1 = questions1.map((question, index) => {
  return {
    id: index,
    value: `panel${index + 1}`,
    heading: question,
    detail: question
  }
});

const faqs2 = questions2.map((question, index) => {
  return {
    id: index,
    value: `panel${index + 1}`,
    heading: question,
    detail: question
  }
});

export function FaqsList1() {
  return (
    <>
      { faqs1.map((accordion) => (
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
      { faqs2.map((accordion) => (
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
