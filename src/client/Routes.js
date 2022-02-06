import CoreLayout from './layouts/PageLayout/PageLayout'
import Home from './routes/Home'
import Vpn from './routes/Vpn'
import Bundle from './routes/Bundle'
import Register from './routes/Register'
import Signin from './routes/Signin'
import ContactUs from './routes/ContactUs'
import Account from './routes/Account'
import Checkout from './routes/Checkout'
import Offer from './routes/Offer'
import Compare from './routes/Compare'
import CompareVendors from './routes/CompareVendors'
import Vendor from './routes/Vendor'
import PrivacyPolicy from './routes/PrivacyPolicy'
import TermsAndConditionsOfUse from './routes/TermsAndConditionsOfUse'
import PagePayReturn from './routes/PagePayReturn'
import Sitemap from './routes/Sitemap/Sitemap'
import Page404 from './routes/Page404'


export default [
    {
        ...CoreLayout,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                ...Vpn,
                path: '/vpn',
                exact: true
            },
            {
                ...Bundle,
                path: '/bundle',
                exact: true
            },
            {
                ...Register,
                path: '/register',
                exact: true
            },
            {
                ...Signin,
                path: '/signin',
                exact: true
            },
            {
                ...ContactUs,
                path: '/contact-us',
                exact: true
            },
            {
                ...Account,
                path: '/account',
                exact: true
            },
            {
                ...Checkout,
                path: '/checkout',
                exact: true
            },
            {
                ...Offer,
                path: '/offer-:offer',
            },
            {
                ...Vendor,
                path: '/vendor-:vendor',
            },
            {
                ...Compare,
                path: '/compare',
            },
            // {
            //     ...Compare,
            //     path: '/compare-',
            // },
            {
                ...CompareVendors,
                path: '/compare-:vendors',
            },
            {
                ...PrivacyPolicy,
                path: '/privacy-policy',
            },
            {
                ...TermsAndConditionsOfUse,
                path: '/terms-and-conditions-of-use',
            },
            {
                ...PagePayReturn,
                path: '/payment/return',
            },
            {
                Sitemap,
                path:'/sitemap'
            },
            {
                ...Page404,
                path: '*',
            },
        ]
    }
];
