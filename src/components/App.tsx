import { Routes, Route } from 'react-router-dom';

import { Header } from './Header';
import { QrCodeGenerator } from 'pages/QrCodeGenerator';
import { TransactionsOverview } from 'pages/TransactionsOverview';
import { MiningOverview } from 'pages/MiningOverview';
import { HashFunction } from 'pages/HashFunction';

export const App = (): JSX.Element => {
  return (
    <div className="ui container">
      <Header />
      <Routes>
        <Route path="/qrcode" element={<QrCodeGenerator />} />
        <Route path="/transactions" element={<TransactionsOverview />} />
        <Route path="/sha256" element={<HashFunction />} />
        <Route path="/mining" element={<MiningOverview />} />
      </Routes>
    </div>
  );
};
