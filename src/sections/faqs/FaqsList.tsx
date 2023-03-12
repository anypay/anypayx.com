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
  answer: 'Anypay simplifies your life and reduces headaches by enabling your business to serve crypto customers with a secure, easy-to-use app.',
}, {
  question: 'What does Anypay do?',
  answer: 'Anypay takes your various different crypto payment methods and converts them into a simple QR code that customers scan to pay.'
}, {
  question:  'What services does Anypay offer?',
  answer: 'Anypay offers a merchant app for instantly processing in-person crypto transactions with perfect clarity. Anypay also offers an API for app developers to integrate simple, multi-coin payments into any application without the complexity of managing all that yourself.'  
}, {
  question:   'Why should I use Anypay?',
  answer: 'You should use Anypay if you want a professional way to accept crypto payments at your business. It is clear and easy for staff to use without any crypto knowledge. It tracks all your business transactions for accurate accounting. It delights your customers by giving them a fast and easy way to pay.'  
}, {
  question:   'Who is Anypay for?',
  answer: 'Anypay is for merchants who want instant, reliable crypto payments. Especially if you want to offer more than one coin for a payment option. It works for small businesses who operate a farmers markets as well as big businesses processing thousands of transactions.'
}, {
  question:   'How much does it cost?',
  answer: 'Anypay\s basic software is free to download. Processing transactions through the merchant app costs $0.01 per transaction. Using the API costs 0.1% per transaction.'  
}, {
  question:   'How does it work?',
  answer: 'Anypay faciliates communication between the customer\'s crypto wallet and the merchant\'s crypto wallet. It helps them talk to each other super-fast about what coins are accepted, what fee to use, what addresses to pay, in what quantities, and when payment is successful. All in the blink of an eye.'  
}, {
  question:   'Is it custodial or not?',
  answer: 'Anypay is 100% non-custodial. That means Anypay never takes "custody" of your coins. All payments go directly from customer to merchant, without going through a third party. These transactions are also called "Peer-to-peer" and are the most secure.'
}, {
  question:   'Do I have to KYC?',
  answer: 'Most users are not required to provide any sensitive information to use Anypay\'s payment software. Anypay blocks access from certain geographic locations to comply with regulations.'
}]

const faqs2: FAQ[] = [{
  question: 'Are there limits?',
  answer: 'All transactions over $0.04 are valid on all chains except BTC ($1.00 min). The upper limit is the total amount of currency in circulation.',
}, {
  question: 'Can businesses considered high-risk use it (e.g.: cannabis dispensary)?',
  answer: 'Yes. Businesses that banks consider "high-risk" such as cannabis dispensaries can use Anypay to accept crypto payments.'
}, {
  question:  'What cryptocurrencies can I use?',
  answer: 'Anypay supports Bitcoin Core (BTC), Litecoin (LTC), Dogecoin (DOGE), Bitcoin Cash (BCH), Monero (XMR), Dash (DASH), and Bitcoin SV (BSV)'  
}, {
  question:   'Can I add Lightning and Liquid?',
  answer: 'Contact us directly if you need Lightning or Liquid integrations for your business.'  
}, {
  question:   'Where can I find documentation and tutorials?',
  answer: 'Developers can find API documentation at api.anypayx.com. Merchant app users can find tutorials on YouTube.'
}, {
  question:   'Do you have integrations with e-commerce platforms?',
  answer: 'Anypay has WordPress plugin that works with WooCommerce. However, this plugin is undergoing an update and is unavailable to new users.'  
}, {
  question:   'How do I get support, and how do I get in touch with your company?',
  answer: 'Email Anypay Support at support@anypayx.com for direct answers to your questions. Message in the public Anypay Telegram group at t.me/anypayx for the fastest response.'  
}, {
  question:   'If you encounter an issue with your software, do you work on it and improve it?',
  answer: 'Anypay rarely encounters problems and is long-term stable. When users encounter an issue, we quickly resolve it with an update.'
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
