import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

type DataProps = {
  cost: string;
};

export const leftOptions = [
  { number: "1", step: "STEP 1", description: "YOUR INFO" },
  { number: "2", step: "STEP 2", description: "SELECT PLAN" },
  { number: "3", step: "STEP 3", description: "ADD-ONS" },
  { number: "4", step: "STEP 4", description: "SUMMARY" },
];

export const leftOptionsMobile = [
  { Number: "1" },
  { Number: "2" },
  { Number: "3" },
  { Number: "4" },
];

export const getCheckBoxOptions = (data2: DataProps) => {
  return [
    {
      key: "option 1",
      primaryLabel: "Online service",
      secondaryLabel: "Access to multiplayer games",
      amount: data2.cost === "Monthly" ? "+$1/mon" : "+$10/yr",
      amountNum: data2.cost === "Monthly" ? 1 : 10,
    },
    {
      key: "option 2",
      primaryLabel: "Larger storage",
      secondaryLabel: "Extra 1TB of cloud save",
      amount: data2.cost === "Monthly" ? "+$2/mon" : "+$20/yr",
      amountNum: data2.cost === "Monthly" ? 2 : 20,
    },
    {
      key: "option 3",
      primaryLabel: "Customizable Profile",
      secondaryLabel: "Custom theme on your profile",
      amount: data2.cost === "Monthly" ? "+$2/mon" : "+$20/yr",
      amountNum: data2.cost === "Monthly" ? 2 : 20,
    },
  ];
};

export const getCardOptions = (amounts: boolean) => {
  return [
    {
      icon: arcade,
      name: "Arcade",
      amount: amounts ? "$9/mon" : "$90/yr",
      cost: amounts ? "Monthly" : "Yearly",
      amountNumber: amounts ? 9 : 90,
      value: "arcade",
    },
    {
      icon: advanced,
      name: "Advanced",
      amount: amounts ? "$12/mon" : "$120/yr",
      cost: amounts ? "Monthly" : "Yearly",
      amountNumber: amounts ? 12 : 120,
      value: "advanced",
    },
    {
      icon: pro,
      name: "Pro",
      amount: amounts ? "$15/mon" : "$150/yr",
      cost: amounts ? "Monthly" : "Yearly",
      amountNumber: amounts ? 15 : 150,
      value: "pro",
    },
  ];
};
