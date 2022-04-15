// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/Label';
import SvgIconStyle from '../../../components/SvgIconStyle';

var isDeveloper = process.env.DEVELOPER_MODE === "true"

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  webhooks: getIcon('ic_blog'),
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  booking: getIcon('ic_booking'),
};

var navConfig = [
  // MERCHANT
  // ----------------------------------------------------------------------
  {
    subheader: 'merchant',
    items: [
      //{ title: 'quick checkout', path: PATH_DASHBOARD.merchant.checkout, icon: ICONS.ecommerce },
      { title: 'payments', path: PATH_DASHBOARD.merchant.payments, icon: ICONS.analytics },
      { title: 'wallet addresses', path: PATH_DASHBOARD.account.wallets, icon: ICONS.banking },
      //{ title: 'send invoices', path: PATH_DASHBOARD.merchant.invoices, icon: ICONS.mail }
    ],
  },
  // DEVELOPER
  // ----------------------------------------------------------------------
  {
    subheader: 'developer',
    items: [
      { title: 'API keys', path: PATH_DASHBOARD.developer.apikeys, icon: ICONS.dashboard },
      { title: 'audit logs', path: PATH_DASHBOARD.developer.logs, icon: ICONS.banking },
      //{ title: 'webhooks', path: PATH_DASHBOARD.developer.webhooks, icon: ICONS.mail }
    ],
  },
  {
    subheader: 'exchanges',
    items: [
      // MANAGEMENT : ACCOUNT

      //{ title: 'account settings', path: PATH_DASHBOARD.account.settings, icon: ICONS.user },
      { title: 'kraken', path: PATH_DASHBOARD.exchanges.kraken, icon: ICONS.banking },
    ]

  },
]
/*
if (isDeveloper) {
  navConfig.push({
    subheader: 'general',
    items: [
      {
        title: 'app',
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.dashboard,
      },
      { title: 'e-commerce', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
      { title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
      { title: 'banking', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking },
      { title: 'booking', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
    ],
  })

  navConfig.push({
    subheader: 'management',
    items: [
      // MANAGEMENT : USER
      {
        title: 'user',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'profile', path: PATH_DASHBOARD.user.profile },
          { title: 'cards', path: PATH_DASHBOARD.user.cards },
          { title: 'list', path: PATH_DASHBOARD.user.list },
          { title: 'create', path: PATH_DASHBOARD.user.newUser },
          { title: 'edit', path: PATH_DASHBOARD.user.editById },
          { title: 'account', path: PATH_DASHBOARD.user.account },
        ],
      },
      {
        title: 'e-commerce',
        path: PATH_DASHBOARD.eCommerce.root,
        icon: ICONS.cart,
        children: [
          { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop },
          { title: 'product', path: PATH_DASHBOARD.eCommerce.productById },
          { title: 'list', path: PATH_DASHBOARD.eCommerce.list },
          { title: 'create', path: PATH_DASHBOARD.eCommerce.newProduct },
          { title: 'edit', path: PATH_DASHBOARD.eCommerce.editById },
          { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout },
          { title: 'invoice', path: PATH_DASHBOARD.eCommerce.invoice },
        ],
      },


      {
        title: 'blog',
        path: PATH_DASHBOARD.blog.root,
        icon: ICONS.blog,
        children: [
          { title: 'posts', path: PATH_DASHBOARD.blog.posts },
          { title: 'post', path: PATH_DASHBOARD.blog.postById },
          { title: 'new post', path: PATH_DASHBOARD.blog.newPost },
        ],
      },
    ],
  })


  navConfig.push({
    subheader: 'app',
    items: [
      {
        title: 'mail',
        path: PATH_DASHBOARD.mail.root,
        icon: ICONS.mail,
        info: (
          <Label variant="outlined" color="error">
            +32
          </Label>
        ),
      },
      { title: 'chat', path: PATH_DASHBOARD.chat.root, icon: ICONS.chat },
      { title: 'calendar', path: PATH_DASHBOARD.calendar, icon: ICONS.calendar },
      {
        title: 'kanban',
        path: PATH_DASHBOARD.kanban,
        icon: ICONS.kanban,
      },
    ],
  })
}*/

export default navConfig;
