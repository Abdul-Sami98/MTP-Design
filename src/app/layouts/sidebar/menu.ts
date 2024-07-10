import { MenuItem } from './menu.model';

// Customer Menu
export const MENUCustomer: MenuItem[] = [
  {
    id: 1,
    label: 'Dashboard',
    icon: 'pi pi-home',
    link: '/customer-dashboard',
  },
  {
    id: 1,
    label: 'Purchases',
    icon: 'ri-shopping-cart-line',
    link: '/purchases',
  },
  {
    id: 1,
    label: 'Cars',
    icon: 'ri-car-line',
    link: '/cars',
  },
  {
    id: 1,
    label: 'My Balance',
    icon: 'ri-money-dollar-box-line',
    link: '/my-balance',
  },
  {
    id: 1,
    label: 'Profile',
    icon: 'pi pi-user',
    link: '/profile',
  },
  {
    id: 1,
    label: 'Change Password',
    icon: 'pi pi-key',
    link: '/admin-change-password',
  },
  {
    id: 1,
    label: 'Logout',
    icon: 'bi bi-box-arrow-right',
    link: '/login',
  },
];

// Admin Menu
export const MENUAdmin: MenuItem[] = [
  {
    id: 1,
    label: 'Dashboard',
    icon: 'pi pi-home',
    link: '/dashboard',
  },
  {
    id: 2,
    label: 'Customers',
    icon: 'pi pi-users',
    subItems: [
      {
        id: 1,
        label: 'Add Customer',
        link: '/add-customer',
        parentId: 2,
      },
      {
        id: 2,
        label: 'Customer List',
        link: '/customer-list',
        parentId: 2,
      },
    ],
  },
  {
    id: 4,
    label: 'Vehicles',
    icon: 'pi pi-car',
    subItems: [
      {
        id: 1,
        label: 'Add Vehicle',
        link: '/add-vehicle',
        parentId: 3,
      },
      {
        id: 2,
        label: 'Vehicle List',
        link: '/vehicle-list',
        parentId: 3,
      },
    ],
  },
  {
    id: 6,
    label: 'Income',
    icon: 'pi pi-database',
    subItems: [
      {
        id: 1,
        label: 'Add Income',
        link: '/add-income',
        parentId: 3,
      },
      {
        id: 2,
        label: 'Income List',
        link: '/income-list',
        parentId: 3,
      },
    ],
  },
  {
    id: 5,
    label: 'Expense',
    icon: 'pi pi-server',
    subItems: [
      {
        id: 1,
        label: 'Add Expense',
        link: '/add-expense',
        parentId: 3,
      },
      {
        id: 2,
        label: 'Expense List',
        link: '/expense-list',
        parentId: 3,
      },
    ],
  },
  {
    id: 2,
    label: 'Consignee',
    icon: 'pi pi-users',
    subItems: [
      {
        id: 1,
        label: 'Add Consignee',
        link: '/add-consignee',
        parentId: 2,
      },
      {
        id: 2,
        label: 'Consignee List',
        link: '/consignee-list',
        parentId: 2,
      },
    ],
  },
  {
    id: 3,
    label: 'Supplier/Company',
    icon: 'ri ri-team-line',
    subItems: [
      {
        id: 1,
        label: 'Add Supplier/Company',
        link: '/add-supplier-company',
        parentId: 3,
      },
      {
        id: 2,
        label: 'Supplier/Company List',
        link: '/supplier-company-list',
        parentId: 3,
      },
    ],
  },

  {
    id: 7,
    label: 'Purchase',
    icon: 'pi pi-list',
    subItems: [
      {
        id: 1,
        label: 'Add Purchase',
        link: '/add-purchase',
        parentId: 3,
      },
      {
        id: 2,
        label: 'Purchase List',
        link: '/purchase-list',
        parentId: 3,
      },
    ],
  },
  {
    id: 8,
    label: 'Payment',
    icon: 'pi pi-dollar',
    subItems: [
      {
        id: 1,
        label: 'Add Payment',
        link: '/add-payment',
        parentId: 3,
      },
      {
        id: 2,
        label: 'Payment List',
        link: '/payment-list',
        parentId: 3,
      },
    ],
  },
  {
    id: 9,
    label: 'Internal Staff',
    icon: 'pi pi-users',
    subItems: [
      {
        id: 1,
        label: 'Add Staff',
        link: '/add-staff',
        parentId: 3,
      },
      {
        id: 2,
        label: 'Staff List',
        link: '/staff-list',
        parentId: 3,
      },
    ],
  },
  {
    id: 10,
    label: 'Currency Rate',
    icon: 'pi pi-money-bill',
    subItems: [
      {
        id: 1,
        label: 'Add Currency Rate',
        link: '/add-currency-rate',
        parentId: 3,
      },
      {
        id: 2,
        label: 'Currency Rate List',
        link: '/currency-rate-list',
        parentId: 3,
      },
    ],
  },
  {
    id: 10,
    label: 'Invoice',
    icon: 'pi pi-print',
    subItems: [
      {
        id: 1,
        label: 'Generate Invoice',
        link: '/generate-invoice',
        parentId: 3,
      },
      {
        id: 2,
        label: 'Invoice List',
        link: '/invoice-list',
        parentId: 3,
      },
    ],
  },
  {
    id: 11,
    label: 'Calculation of vehicle',
    icon: 'pi pi-calculator',
    link: '/calculation-of-vehicle',
  },
  {
    id: 11,
    label: 'Profile',
    icon: 'pi pi-user',
    link: '/profile',
  },
  {
    id: 11,
    label: 'Change Password',
    icon: 'pi pi-key',
    link: '/admin-change-password',
  },
  // {
  //   id: 11,
  //   label: 'Manage Access',
  //   icon: 'ri-admin-line',
  //   link: '/manage-access',
  // },
];

// export const MENU: MenuItem[] = [
//   {
//     id: 1,
//     label: 'MENUITEMS.MENU.TEXT',
//     isTitle: true,
//   },
//   {
//     id: 2,
//     label: 'MENUITEMS.DASHBOARD.TEXT',
//     icon: 'bi bi-speedometer2',
//     link: '',
//     badge: {
//       variant: 'bg-danger-subtle text-danger',
//       text: 'MENUITEMS.DASHBOARD.BADGE',
//     },
//   },
//   {
//     id: 3,
//     label: 'MENUITEMS.PRODUCTS.TEXT',
//     icon: 'bi bi-box-seam',
//     subItems: [
//       {
//         id: 4,
//         label: 'MENUITEMS.PRODUCTS.LIST.LISTVIEW',
//         link: '/products/product-list',
//         parentId: 3
//       },
//       {
//         id: 5,
//         label: 'MENUITEMS.PRODUCTS.LIST.GRIDVIEW',
//         link: '/products/product-grid',
//         parentId: 3
//       },
//       {
//         id: 6,
//         label: 'MENUITEMS.PRODUCTS.LIST.OVERVIEW',
//         link: '/products/product-overview',
//         parentId: 3,
//       },
//       {
//         id: 7,
//         label: 'MENUITEMS.PRODUCTS.LIST.CREATEPRODUCT',
//         link: '/products/product-create',
//         parentId: 3,
//       },
//       {
//         id: 8,
//         label: 'MENUITEMS.PRODUCTS.LIST.CATEGORIES',
//         link: '/products/categories',
//         parentId: 3,
//       },
//       {
//         id: 9,
//         label: 'MENUITEMS.PRODUCTS.LIST.SUBCATEGORIES',
//         parentId: 3,
//         link: '/products/sub-categories',
//       },
//     ]
//   },
//   {
//     id: 10,
//     label: 'MENUITEMS.ORDERS.TEXT',
//     icon: 'bi bi-cart4',
//     subItems: [
//       {
//         id: 11,
//         label: 'MENUITEMS.ORDERS.LIST.LISTVIEW',
//         link: '/orders/list-view',
//         parentId: 10
//       },
//       {
//         id: 12,
//         label: 'MENUITEMS.ORDERS.LIST.OVERVIEW',
//         link: '/orders/overview',
//         parentId: 10,
//       },
//     ]
//   },
//   {
//     id: 13,
//     label: 'MENUITEMS.CALENDER.TEXT',
//     icon: 'bi bi-calendar-week',
//     link:'/extrapages/calender'
//   },
//   {
//     id: 14,
//     label: 'MENUITEMS.SELLERS.TEXT',
//     icon: 'bi bi-binoculars',
//     subItems: [
//       {
//         id: 15,
//         label: 'MENUITEMS.SELLERS.LIST.LISTVIEW',
//         link: '/sellers/list-view',
//         parentId: 14
//       },
//       {
//         id: 16,
//         label: 'MENUITEMS.SELLERS.LIST.GRIDVIEW',
//         link: '/sellers/grid-view',
//         parentId: 14,

//       },
//       {
//         id: 17,
//         label: 'MENUITEMS.SELLERS.LIST.OVERVIEW',
//         link: '/sellers/overview',
//         parentId: 14
//       },
//     ]
//   },
//   {
//     id: 18,
//     label: 'MENUITEMS.INVOICE.TEXT',
//     icon: 'bi bi-archive',
//     subItems: [
//       {
//         id: 19,
//         label: 'MENUITEMS.INVOICE.LIST.LISTVIEW',
//         link: '/invoice/listview',
//         parentId: 18
//       },
//       {
//         id: 20,
//         label: 'MENUITEMS.INVOICE.LIST.OVERVIEW',
//         link: '/invoice/overview',
//         parentId: 18,
//       },
//       {
//         id: 21,
//         label: 'MENUITEMS.INVOICE.LIST.CREATEINVOICE',
//         link: '/invoice/create-invoice',
//         parentId: 18,
//       }
//     ]
//   },
//   {
//     id: 22,
//     label: 'MENUITEMS.USERLIST.TEXT',
//     icon: 'bi bi-person-bounding-box',
//     link: '/extrapages/userlist',

//   },
//   {
//     id: 23,
//     label: 'MENUITEMS.SHIPPING.TEXT',
//     icon: 'bi bi-truck',
//     subItems: [
//       {
//         id: 25,
//         label: 'MENUITEMS.SHIPPING.LIST.SHIPPINGLIST',
//         link: '/shipping/list',
//         parentId: 24
//       },
//       {
//         id: 26,
//         label: 'MENUITEMS.SHIPPING.LIST.SHIPMENT',
//         link: '/shipping/shipment',
//         parentId: 24
//       },
//     ]
//   },
//   {
//     id: 27,
//     label: 'MENUITEMS.COUPONS.TEXT',
//     icon: 'bi bi-tag',
//     link: '/extrapages/coupons',
//   },
//   {
//     id: 28,
//     label: 'MENUITEMS.REVIEWS&RATINGS.TEXT',
//     icon: 'bi bi-star',
//     link: '/extrapages/review-rating'
//   },
//   {
//     id: 29,
//     label: 'MENUITEMS.BRANDS.TEXT',
//     icon: 'bi bi-shop',
//     link:'/extrapages/brand'
//   },
//   {
//     id: 30,
//     label: 'MENUITEMS.STATISTICS.TEXT',
//     icon: 'bi bi-pie-chart',
//     link:'/extrapages/statistics'
//   },
//   {
//     id: 31,
//     label: 'MENUITEMS.LOCALIZATION.TEXT',
//     icon: 'bi bi-coin',
//     subItems: [
//       {
//         id: 32,
//         label: 'MENUITEMS.LOCALIZATION.LIST.TRANSACTIONS',
//         parentId: 31,
//         link:'/localization/transaction'
//       },
//       {
//         id: 33,
//         label: 'MENUITEMS.LOCALIZATION.LIST.CURRENCYRATES',
//         link:'/localization/currancy-rates',
//         parentId: 31
//       },
//     ]
//   },
//   {
//     id: 34,
//     label: 'MENUITEMS.ACCOUNTS.TEXT',
//     icon: 'bi bi-person-circle',
//     subItems: [
//       {
//         id: 35,
//         label: 'MENUITEMS.ACCOUNTS.LIST.MYACCOUNT',
//         link: '/extrapages/profile',
//         parentId: 33
//       },
//       {
//         id: 36,
//         label: 'MENUITEMS.ACCOUNTS.LIST.SETTINGS',
//         link: '/extrapages/setting',
//         parentId: 33
//       },
//       {
//         id: 37,
//         label: 'MENUITEMS.ACCOUNTS.LIST.SIGNUP',
//         link: '/auth/sign-up',
//         parentId: 33
//       },
//       {
//         id: 38,
//         label: 'MENUITEMS.ACCOUNTS.LIST.SIGNIN',
//         link: '/auth/sign-in',
//         parentId: 33
//       },
//       {
//         id: 39,
//         label: 'MENUITEMS.ACCOUNTS.LIST.PASSWORDRESET',
//         link: '/auth/reset-password',
//         parentId: 33
//       },
//       {
//         id: 40,
//         label: 'MENUITEMS.ACCOUNTS.LIST.PASSWORDCREATE',
//         link: '/auth/create-password',
//         parentId: 33,
//       },
//       {
//         id: 41,
//         label: 'MENUITEMS.ACCOUNTS.LIST.SUCCESSMESSAGE',
//         link: '/auth/success-msg',
//         parentId: 33,
//       },
//       {
//         id: 42,
//         label: 'MENUITEMS.ACCOUNTS.LIST.TWOSTEPVERIFY',
//         link: '/auth/twostep',
//         parentId: 33,
//       },
//       {
//         id: 43,
//         label: 'MENUITEMS.ACCOUNTS.LIST.LOGOUT',
//         link: '/auth/logout',
//         parentId: 33,
//       },
//       {
//         id: 44,
//         label: 'MENUITEMS.ACCOUNTS.LIST.ERROR404',
//         link: '/auth/page404',
//         parentId: 33,
//       },
//       {
//         id: 45,
//         label: 'MENUITEMS.ACCOUNTS.LIST.ERROR500',
//         link: '/auth/page500',
//         parentId: 33,
//       },
//       {
//         id: 46,
//         label: 'MENUITEMS.ACCOUNTS.LIST.COMINGSOON',
//         link: '/coming-soon',
//         parentId: 33,
//       },
//     ]
//   },
//   {
//     id: 46,
//     label: 'MENUITEMS.MULTILEVEL.TEXT',
//     icon: 'bi bi-share',
//     subItems: [
//       {
//         id: 47,
//         label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
//         parentId: 46
//       },
//       {
//         id: 48,
//         label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
//         subItems: [
//           {
//             id: 49,
//             label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
//             parentId: 48,
//           },
//           {
//             id: 50,
//             label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
//             parentId: 48,
//             subItems: [
//               {
//                 id: 51,
//                 label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL3.1',
//                 parentId: 50,
//               },
//               {
//                 id: 52,
//                 label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL3.2',
//                 parentId: 50,
//               }
//             ]
//           }
//         ]
//       },
//     ]
//   }
// ];
