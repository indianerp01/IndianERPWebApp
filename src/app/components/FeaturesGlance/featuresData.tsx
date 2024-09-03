//  PharmacyData
//interface
import { FeatureData } from "@/app/TS/interfaces/interface";
import { Icon } from "@iconify/react/dist/iconify.js";

//featuresData array with icons and titles.
export const PharmacyData: FeatureData[] = [
  {
    icon: <Icon icon="bi:database-fill" style={{ color: "#ece518" }} />,
    title: "Stock Management",
  },
  {
    icon: <Icon icon="noto:hourglass-with-flowing-sand" />,
    title: "Expiry Management",
  },
  {
    icon: <Icon icon="clarity:rack-server-line" style={{ color: "#5bb9e1" }} />,
    title: "Rack Management",
  },
  {
    icon: <Icon icon="lets-icons:paper-duotone" style={{ color: "#a55be1" }} />,
    title: "Prescription Management",
  },
  {
    icon: (
      <Icon
        icon="fluent:channel-alert-28-filled" style={{ color: "#0adbb1" }}
      />
    ),
    title: "Alert Management",
  },
  {
    icon: <Icon icon="noto-v1:mobile-phone" />,
    title: "Online Purchase Import",
  },
  {
    icon: <Icon icon="uim:calender" style={{ color: "#e510c8" }} />,
    title: "Substitute Availability",
  },
  {
    icon: <Icon icon="hugeicons:telephone" style={{ color: "#fa8072" }} />,
    title: "Free Drug Helpline",
  },
  {
    icon: <Icon icon="teenyicons:clock-solid" style={{ color: "#7fff00" }} />,
    title: "24x7 Ordering Management",
  },
  {
    icon: <Icon icon="fontisto:doctor" style={{ color: "#ff3800" }} />,
    title: "Doctor Account Management",
  },
  {
    icon: <Icon icon="twemoji:ledger" />,
    title: "Family Ledger Management",
  },
  {
    icon: <Icon icon="mdi:account-payment" style={{ color: "#00ccff " }} />,
    title: "Digital Payment & Collection",
  },
  {
    icon: <Icon icon="noto:bank" />,
    title: "Connected Banking",
  },
  {
    icon: <Icon icon="noto:delivery-truck" />,
    title: "Delivery & Shipping",
  },
  {
    icon: <Icon icon="mdi:recycle" style={{ color: "#4cbb17" }} />,
    title: "Re-Order Management",
  },
];

//  SuperMarketData
export const SuperMarketFeaturesData: FeatureData[] = [
  {
    icon: <Icon icon="material-symbols:barcode" />,
    title: "Barcode/ MRP wise Billing",
  },
  {
    icon: <Icon icon="mdi:cash-register"  style={{color: "#7586ff"}} />,
    title: "Cash Drawer",
  },
  {
    icon: <Icon icon="twemoji:mobile-phone" />,
    title: "Touch/POS Integration",
  },
  {
    icon: <Icon icon="clarity:rack-server-line" style={{ color: "#5aa4a5" }}/>,
    title: "Rack Management",
  },
  {
    icon: <Icon icon="fa-solid:weight"  style={{color: "#ff7f50" }} />,
    title: "Weighing Scale Attachment",
  },
  {
    icon:  <Icon icon="bi:database-fill" style={{ color: "#e45556" }} />,
    title: "Stock Management",
  },
  {
    icon: <Icon icon="uim:calender" style={{ color: "#561ba8" }} />,
    title: "Substitute Availability",
  },
  {
    icon: <Icon icon="streamline:bag-rupee"  style={{color: "#fcc200"}} />,
    title: "GST Compliant Solution",
  },
  {
    icon: <Icon icon="emojione:bank" />,
    title: "Online Banking & Reconciliation",
  },
  {
    icon:  <Icon icon="mdi:account-payment-outline"  style={{color: "#ff6fff"}} />,
    title: "Digital Payments",
  },
  {
    icon: <Icon icon="streamline-emojis:delivery-truck" />,
    title: "Home Delivery",
  },
  {
    icon: <Icon icon="marketeq:mobile-payment-done-2" style={{color: "#d2691e"}}  />,
    title: "Digital Payment & Collection",
  },
  {
    icon: <Icon icon="noto-v1:shopping-cart" />,
    title: "Loyalty Point System",
  },
  {
    icon: <Icon icon="hugeicons:discount"  style={{color: "#e5df24"}} />,
    title: "Discount & Scheme Management",
  },
  
];
