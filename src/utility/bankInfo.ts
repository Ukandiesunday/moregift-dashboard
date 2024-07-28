type bankType = {
  logo: string;
  name?: string;
  account_number: number;
  bank_name: string;
  second_bank?: string;
  close?: string;
};
const bankInfo2: bankType[] = [
  {
    close: "/icons/closewrapper.svg",
    logo: "/icons/gtb.svg",
    bank_name: "Guaranty Trust Bank Plc",
    second_bank: "Zenith Bank",
    account_number: 10872343470,
  },
  {
    close: "/icons/closewrapper.svg",
    logo: "/icons/firstbank.svg",
    bank_name: "First Bank Plc",
    second_bank: "Zenith Bank",
    account_number: 10872343470,
  },
];
const bankInfo: bankType[] = [
  {
    logo: "/icons/fcmb.svg",
    name: "Segun Saromi",
    bank_name: "FCMB",
    account_number: 0o112345476,
  },
  {
    logo: "/icons/gtb.svg",
    name: "Segun Saromi",
    bank_name: "Guaranty Trust Bank Plc",
    account_number: 4872343470,
  },
];

export { bankInfo, bankInfo2 };
