
import { Card } from "@mui/material";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import Page from "src/components/Page";
import useSettings from "src/hooks/useSettings";

export default function WalletBotPaymentPage() {

    const { themeStretch } = useSettings();

    const { query : { invoice_uid } } = useRouter()

    return (
        <Page title={`Wallet Bot: Payment ${invoice_uid}`}>
            <Container maxWidth={themeStretch ? false : 'lg'}>
                <HeaderBreadcrumbs
                    heading="Wallet Bot Payments"
                    links={[
                        { name: 'Apps', href: '/apps' },
                        { name: 'Wallet Bot', href: '/apps/wallet-bot' },
                        { name: 'Payments', href: '/apps/wallet-bot/payments' },
                        { name: String(invoice_uid), href: `/apps/wallet-bot/payments/${invoice_uid}` }
                    ]}
                />
                <Card>
                    Payment for Invoice {invoice_uid}
                    </Card>
            </Container>
        </Page>
    )
}
