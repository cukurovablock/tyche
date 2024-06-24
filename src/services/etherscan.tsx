import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;

export const getWalletBalance = async (address: string) => {
  const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;
  const response = await axios.get(url);
  return response.data.result;
};

export const getWalletTransactions = async (address: string) => {
  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`;
  const response = await axios.get(url);
  return response.data.result;
};
