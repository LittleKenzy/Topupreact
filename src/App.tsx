import { useState } from 'react';
import { Gamepad2, Wallet, Zap, ChevronRight, ArrowLeft, Send, Search, X } from 'lucide-react';
import freefire from "./assets/img/freefire.webp";
import mlbb from "./assets/img/mlbb.webp";
import pubg from "./assets/img/pubg.webp";
import genshin from "./assets/img/genshin.webp";
import valorant from "./assets/img/valorant.webp";
import cod from "./assets/img/cod.webp";
import gopay from "./assets/img/gopay3.webp";
import ovo from "./assets/img/ovo.webp";
import dana from "./assets/img/dana.webp";
import spay from "./assets/img/spay.webp";






// Types
interface Product {
  id: string;
  name: string;
  price: number;
  bonus?: string;
}

interface Game {
  id: string;
  name: string;
  icon: string;
  gradient: string;
  needsServer: boolean;
  products: Product[];
}

interface EWallet {
  id: string;
  name: string;
  icon: string;
  gradient: string;
  products: Product[];
}

function App() {
  const [view, setView] = useState<'home' | 'game' | 'ewallet'>('home');
  const [selectedItem, setSelectedItem] = useState<Game | EWallet | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [userId, setUserId] = useState('');
  const [serverId, setServerId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Data Games
  const games: Game[] = [
    {
      id: 'ml',
      name: 'Mobile Legends',
      icon: mlbb,
      gradient: 'from-blue-500 to-purple-600',
      needsServer: true,
      products: [
        { id: 'ml1', name: '3 Diamonds', price: 1200 },
        { id: 'ml2', name: '5 Diamonds', price: 2000 },
        { id: 'ml3', name: '10 Diamonds', price: 3000, bonus: '9 + 1 Bonus' },
        { id: 'ml4', name: '14 Diamonds', price: 5000, bonus: '13 + 1 Bonus' },
        { id: 'ml5', name: '19 Diamonds', price: 6000, bonus: '17 + 2 Bonus' },
        { id: 'ml6', name: '28 Diamonds', price: 9000, bonus: '26 + 2 Bonus' },
        { id: 'ml7', name: '36 Diamonds', price: 11000, bonus: '32 + 4 Bonus' },
        { id: 'ml8', name: '44 Diamonds', price: 13000, bonus: '40 + 4 Bonus' },
        { id: 'ml9', name: '59 Diamonds', price: 16000, bonus: '53 + 6 Bonus' },
        { id: 'ml10', name: '74 Diamonds', price: 20000, bonus: '69 + 5 Bonus' },
        { id: 'ml11', name: '85 Diamonds', price: 23000, bonus: '77 + 8 Bonus' },
        { id: 'ml12', name: '140 Diamonds', price: 38000, bonus: '127 + 13 Bonus' },
        { id: 'ml13', name: '185 Diamonds', price: 48000, bonus: '169 + 16 Bonus' },
        { id: 'ml14', name: '222 Diamonds', price: 57000, bonus: '200 + 22 Bonus' },
      ]
    },
    {
      id: 'ff',
      name: 'Free Fire',
      icon: freefire,
      gradient: 'from-orange-500 to-red-600',
      needsServer: false,
      products: [
        { id: 'ffm1', name: 'Membership Mingguan', price: 27300 + 2000 },
        { id: 'ffm2', name: 'Membership Mingguan x2', price: 54600 + 2000 },
        { id: 'ffm3', name: 'Membership Mingguan x3', price: 81900 + 2000 },
        { id: 'ffm4', name: 'Membership Bulanan', price: 81900 + 2000 },
        { id: 'ffbp1', name: 'BP Card', price: 43424 + 2000 },
        { id: 'ff1', name: '70 Diamonds', price: 9500 },
        { id: 'ff2', name: '140 Diamonds', price: 17500 },
        { id: 'ff3', name: '355 Diamonds', price: 41500 },
        { id: 'ff4', name: '720 Diamonds', price: 81500 },
        { id: 'ff5', name: '1450 Diamonds', price: 162000 },
        { id: 'ff6', name: '3640 Diamonds', price: 398000 },
      ]

    },
    {
      id: 'pubg',
      name: 'PUBG Mobile',
      icon: pubg,
      gradient: 'from-yellow-500 to-orange-600',
      needsServer: false,
      products: [
        // Membership & Packs
        { id: 'pubgm1', name: 'Upgrade RP', price: 142176 + 2000 },
        { id: 'pubgm2', name: 'Upgrade Elite RP', price: 363056 + 2000 },
        { id: 'pubgm3', name: 'Weekly Deal Pack 2', price: 36829 + 2000 },
        { id: 'pubgm4', name: 'Weekly Mythic Emblem Pack', price: 36829 + 2000 },
        // PUBG UC Topup
        { id: 'pubg0', name: 'Weekly Deal Pack 1', price: 10156 + 2000 }, // 12.156
        { id: 'pubg1', name: '60 UC', price: 14821 + 2000 },              // 16.821
        { id: 'pubg2', name: '120 UC', price: 29642 + 2000 },             // 31.642
        { id: 'pubg3', name: '325 UC', price: 74446 + 2000 },             // 76.446
        { id: 'pubg4', name: '445 UC', price: 104089 + 2000 },            // 106.089
        { id: 'pubg5', name: '660 UC', price: 148891 + 2000 },            // 150.891
        { id: 'pubg6', name: '985 UC', price: 223338 + 2000 },            // 225.338
        { id: 'pubg7', name: '1800 UC', price: 366178 + 2000 },           // 368.178
        { id: 'pubg8', name: '3850 UC', price: 732353 + 2000 },           // 734.353
        { id: 'pubg9', name: '8100 UC', price: 1464707 + 2000 },          // 1.466.707
        { id: 'pubg10', name: '11950 UC', price: 2197060 + 2000 },        // 2.199.060
        { id: 'pubg11', name: '16200 UC', price: 2929414 + 2000 },        // 2.931.414
        { id: 'pubg12', name: '24300 UC', price: 4394121 + 2000 },        // 4.396.121


      ]
    },
    {
      id: 'genshin',
      name: 'Genshin Impact',
      icon: genshin,
      gradient: 'from-pink-500 to-purple-600',
      needsServer: true,
      products: [
        { id: 'gi0', name: 'Blessing of the Welkin Moon', price: 54746 + 2000 },
        { id: 'gi1', name: '60 Genesis Crystals', price: 10764 + 2000 },
        { id: 'gi2', name: '330 Genesis Crystals', price: 54746 + 2000 },
        { id: 'gi3', name: '1090 Genesis Crystals', price: 167088 + 2000 },
        { id: 'gi4', name: '2240 Genesis Crystals', price: 351342 + 2000 },
        { id: 'gi5', name: '3880 Genesis Crystals', price: 569320 + 2000 },
        { id: 'gi6', name: '8080 Genesis Crystals', price: 1100359 + 2000 },
      ]
    },
    {
      id: 'valorant',
      name: 'Valorant',
      icon: valorant,
      gradient: 'from-red-500 to-pink-600',
      needsServer: false,
      products: [
        { id: 'val1', name: '475 VP', price: 52156 + 2000 },
        { id: 'val2', name: '1000 VP', price: 104289 + 2000 },
        { id: 'val3', name: '1475 VP', price: 156521 + 2000 },
        { id: 'val4', name: '2050 VP', price: 208551 + 2000 },
        { id: 'val5', name: '2525 VP', price: 260852 + 2000 },
        { id: 'val6', name: '3050 VP', price: 313017 + 2000 },
        { id: 'val7', name: '3650 VP', price: 362153 + 2000 },
        { id: 'val8', name: '4125 VP', price: 414553 + 2000 },
        { id: 'val9', name: '4650 VP', price: 466718 + 2000 },
        { id: 'val10', name: '5350 VP', price: 520409 + 2000 },
        { id: 'val11', name: '7400 VP', price: 729408 + 2000 },
      ]
    },
    {
      id: 'codm',
      name: 'Call of Duty Mobile',
      icon: cod,
      gradient: 'from-gray-700 to-gray-900',
      needsServer: false,
      products: [
        { id: 'cod1', name: '31 CP', price: 4590 + 2000 },
        { id: 'cod2', name: '62 CP', price: 7929 + 2000 },
        { id: 'cod3', name: '127 CP', price: 15857 + 2000 },
        { id: 'cod4', name: '320 CP', price: 39643 + 2000 },
        { id: 'cod5', name: '640 CP', price: 79284 + 2000 },
        { id: 'cod6', name: '1373 CP', price: 158568 + 2000 },
        { id: 'cod7', name: '2059 CP', price: 237853 + 2000 },
        { id: 'cod8', name: '3564 CP', price: 396421 + 2000 },
      ]
    },
  ];

  // Data E-Wallets
  const ewallets: EWallet[] = [
    {
      id: 'gopay',
      name: 'GoPay',
      icon: gopay,
      gradient: 'from-green-500 to-teal-600',
      products: [
        { id: 'gp1', name: 'Rp 10.000', price: 12000 },
        { id: 'gp2', name: 'Rp 15.000', price: 17000 },
        { id: 'gp3', name: 'Rp 20.000', price: 22000 },
        { id: 'gp4', name: 'Rp 25.000', price: 27000 },
        { id: 'gp5', name: 'Rp 30.000', price: 32000 },
        { id: 'gp6', name: 'Rp 35.000', price: 37000 },
        { id: 'gp7', name: 'Rp 40.000', price: 42000 },
        { id: 'gp8', name: 'Rp 45.000', price: 47000 },
        { id: 'gp9', name: 'Rp 50.000', price: 52000 },
        { id: 'gp10', name: 'Rp 55.000', price: 57000 },
        { id: 'gp11', name: 'Rp 60.000', price: 62000 },
        { id: 'gp12', name: 'Rp 65.000', price: 67000 },
        { id: 'gp13', name: 'Rp 70.000', price: 72000 },
        { id: 'gp14', name: 'Rp 75.000', price: 77000 },
        { id: 'gp15', name: 'Rp 80.000', price: 82000 },
        { id: 'gp16', name: 'Rp 85.000', price: 87000 },
        { id: 'gp17', name: 'Rp 90.000', price: 92000 },
        { id: 'gp18', name: 'Rp 95.000', price: 97000 },
        { id: 'gp19', name: 'Rp 100.000', price: 102000 },
      ]

    },
    {
      id: 'ovo',
      name: 'OVO',
      icon: ovo,
      gradient: 'from-purple-500 to-indigo-600',
      products: [
        { id: 'ovo1', name: 'Rp 10.000', price: 12000 },
        { id: 'ovo2', name: 'Rp 15.000', price: 17000 },
        { id: 'ovo3', name: 'Rp 20.000', price: 22000 },
        { id: 'ovo4', name: 'Rp 25.000', price: 27000 },
        { id: 'ovo5', name: 'Rp 30.000', price: 32000 },
        { id: 'ovo6', name: 'Rp 35.000', price: 37000 },
        { id: 'ovo7', name: 'Rp 40.000', price: 42000 },
        { id: 'ovo8', name: 'Rp 45.000', price: 47000 },
        { id: 'ovo9', name: 'Rp 50.000', price: 52000 },
        { id: 'ovo10', name: 'Rp 55.000', price: 57000 },
        { id: 'ovo11', name: 'Rp 60.000', price: 62000 },
        { id: 'ovo12', name: 'Rp 65.000', price: 67000 },
        { id: 'ovo13', name: 'Rp 70.000', price: 72000 },
        { id: 'ovo14', name: 'Rp 75.000', price: 77000 },
        { id: 'ovo15', name: 'Rp 80.000', price: 82000 },
        { id: 'ovo16', name: 'Rp 85.000', price: 87000 },
        { id: 'ovo17', name: 'Rp 90.000', price: 92000 },
        { id: 'ovo18', name: 'Rp 95.000', price: 97000 },
        { id: 'ovo19', name: 'Rp 100.000', price: 102000 },
      ]

    },
    {
      id: 'dana',
      name: 'DANA',
      icon: dana,
      gradient: 'from-blue-500 to-cyan-600',
      products: [
        { id: 'dana1', name: 'Rp 1.000', price: 3000 },
        { id: 'dana2', name: 'Rp 2.000', price: 4000 },
        { id: 'dana3', name: 'Rp 3.000', price: 5000 },
        { id: 'dana4', name: 'Rp 4.000', price: 6000 },
        { id: 'dana5', name: 'Rp 5.000', price: 7000 },
        { id: 'dana6', name: 'Rp 10.000', price: 12000 },
        { id: 'dana7', name: 'Rp 15.000', price: 17000 },
        { id: 'dana8', name: 'Rp 20.000', price: 22000 },
        { id: 'dana9', name: 'Rp 25.000', price: 27000 },
        { id: 'dana10', name: 'Rp 30.000', price: 32000 },
        { id: 'dana11', name: 'Rp 35.000', price: 37000 },
        { id: 'dana12', name: 'Rp 40.000', price: 42000 },
        { id: 'dana13', name: 'Rp 45.000', price: 47000 },
        { id: 'dana14', name: 'Rp 50.000', price: 52000 },
        { id: 'dana15', name: 'Rp 55.000', price: 57000 },
        { id: 'dana16', name: 'Rp 60.000', price: 62000 },
        { id: 'dana17', name: 'Rp 65.000', price: 67000 },
        { id: 'dana18', name: 'Rp 70.000', price: 72000 },
        { id: 'dana19', name: 'Rp 75.000', price: 77000 },
        { id: 'dana20', name: 'Rp 80.000', price: 82000 },
        { id: 'dana21', name: 'Rp 85.000', price: 87000 },
        { id: 'dana22', name: 'Rp 90.000', price: 92000 },
        { id: 'dana23', name: 'Rp 95.000', price: 97000 },
        { id: 'dana24', name: 'Rp 100.000', price: 102000 },
      ]

    },
    {
      id: 'shopeepay',
      name: 'ShopeePay',
      icon: spay,
      gradient: 'from-orange-500 to-red-500',
      products: [
        { id: 'sp5', name: 'Rp 5.000', price: 7000 },
        { id: 'sp6', name: 'Rp 10.000', price: 12000 },
        { id: 'sp7', name: 'Rp 15.000', price: 17000 },
        { id: 'sp8', name: 'Rp 20.000', price: 22000 },
        { id: 'sp9', name: 'Rp 25.000', price: 27000 },
        { id: 'sp10', name: 'Rp 30.000', price: 32000 },
        { id: 'sp11', name: 'Rp 35.000', price: 37000 },
        { id: 'sp12', name: 'Rp 40.000', price: 42000 },
        { id: 'sp13', name: 'Rp 45.000', price: 47000 },
        { id: 'sp14', name: 'Rp 50.000', price: 52000 },
        { id: 'sp15', name: 'Rp 55.000', price: 57000 },
        { id: 'sp16', name: 'Rp 60.000', price: 62000 },
        { id: 'sp17', name: 'Rp 65.000', price: 67000 },
        { id: 'sp18', name: 'Rp 70.000', price: 72000 },
        { id: 'sp19', name: 'Rp 75.000', price: 77000 },
        { id: 'sp20', name: 'Rp 80.000', price: 82000 },
        { id: 'sp21', name: 'Rp 85.000', price: 87000 },
        { id: 'sp22', name: 'Rp 90.000', price: 92000 },
        { id: 'sp23', name: 'Rp 95.000', price: 97000 },
        { id: 'sp24', name: 'Rp 100.000', price: 102000 },
      ]
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    if (!selectedItem || !selectedProduct) return;

    const isGame = 'needsServer' in selectedItem;
    let message = `*ORDERAN TOPUP BARU*\n\n`;
    message += `📱 *Produk:* ${selectedItem.name}\n`;
    message += `💎 *Paket:* ${selectedProduct.name}\n`;
    message += `💰 *Harga:* ${formatPrice(selectedProduct.price)}\n\n`;

    if (isGame) {
      message += `🆔 *User ID:* ${userId}\n`;
      if (selectedItem.needsServer) {
        message += `🌐 *Server ID:* ${serverId}\n`;
      }
    } else {
      message += `📞 *No. HP:* ${phoneNumber}\n`;
    }

    message += `\nMohon diproses ya kak! 🙏`;

    const whatsappNumber = '6282395928309'; // GANTI dengan nomor WA Anda
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  const canCheckout = () => {
    if (!selectedProduct) return false;
    if (view === 'game' && selectedItem && 'needsServer' in selectedItem) {
      if (selectedItem.needsServer) {
        return userId.trim() !== '' && serverId.trim() !== '';
      }
      return userId.trim() !== '';
    }
    if (view === 'ewallet') {
      return phoneNumber.trim() !== '';
    }
    return false;
  };

  const resetForm = () => {
    setUserId('');
    setServerId('');
    setPhoneNumber('');
    setSelectedProduct(null);
  };

  // Filter games and ewallets based on search query
  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredEWallets = ewallets.filter(wallet =>
    wallet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasSearchResults = filteredGames.length > 0 || filteredEWallets.length > 0;

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearchFocused(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {view !== 'home' && (
              <button
                onClick={() => {
                  setView('home');
                  setSelectedItem(null);
                  resetForm();
                }}
                className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-medium">Kembali</span>
              </button>
            )}
            <div className={`flex items-center gap-2 ${view === 'home' ? '' : 'ml-auto'}`}>
              <Zap className="text-yellow-400" size={24} />
              <h1 className="text-xl md:text-2xl font-bold text-white">Little<span className="text-purple-400">Kenzy</span></h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Home View */}
        {view === 'home' && (
          <div className="space-y-8 animate-fade-in">
            {/* Hero Section */}
            <div className="text-center space-y-4 py-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Top Up Cepat & Aman
              </h2>
              <p className="text-gray-300 text-lg">
                Dapatkan top up yang kamu butuhkan dengan mudah dan aman.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mt-8">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className={`${isSearchFocused || searchQuery ? 'text-purple-400' : 'text-gray-400'} transition-colors`} size={20} />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    placeholder="Cari game atau e-wallet..."
                    className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/15 transition-all duration-300 text-lg"
                  />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>

                {/* Search Results Counter */}
                {searchQuery && (
                  <div className="mt-3 text-sm text-gray-400 text-center">
                    {hasSearchResults ? (
                      <>
                        Ditemukan {filteredGames.length} game dan {filteredEWallets.length} e-wallet
                      </>
                    ) : (
                      <span className="text-red-400">Tidak ada hasil untuk "{searchQuery}"</span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Games Section */}
            {filteredGames.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Gamepad2 className="text-purple-400" size={28} />
                  <h3 className="text-2xl font-bold text-white">
                    Top Up Game
                    {searchQuery && <span className="text-gray-400 text-lg ml-2">({filteredGames.length})</span>}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredGames.map((game) => (
                    <button
                      key={game.id}
                      onClick={() => {
                        setSelectedItem(game);
                        setView('game');
                        clearSearch();
                      }}
                      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                      <div className="relative">
                        {/* <div className="text-5xl mb-3">{game.icon}</div> */}
                        {/* {typeof game.icon === "string" && game.icon.startsWith("/src") ? (
                          <img src={game.icon} className='width-full h-73 mb-6 rounded-2xl' />
                        ) : (
                          <div className="text-5xl mb-3">{game.icon}</div>
                        )} */}
                        <img src={game.icon} alt="" className='w-full h-auto object-contain rounded-2xl mb-5'/>


                        <h4 className="text-white font-semibold text-sm md:text-base mb-1">{game.name}</h4>
                        <div className="flex items-center text-gray-400 text-xs">
                          <span>Lihat Paket</span>
                          <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* E-Wallet Section */}
            {filteredEWallets.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Wallet className="text-green-400" size={28} />
                  <h3 className="text-2xl font-bold text-white">
                    Top Up E-Wallet
                    {searchQuery && <span className="text-gray-400 text-lg ml-2">({filteredEWallets.length})</span>}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {filteredEWallets.map((wallet) => (
                    <button
                      key={wallet.id}
                      onClick={() => {
                        setSelectedItem(wallet);
                        setView('ewallet');
                        clearSearch();
                      }}
                      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${wallet.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                      <div className="relative">
                        {/* <div className="text-5xl mb-3">{wallet.icon}</div> */}
                        {/* {typeof wallet.icon === "string" && wallet.icon.startsWith("/src") ? (
                          <img
                            src={wallet.icon}
                            alt={wallet.name}
                            className="w-full h-24 object-contain mb-3 mx-auto rounded-xl"
                          />
                        ) : (
                          <div className="text-5xl mb-3">{wallet.icon}</div>
                        )} */}
                        <img src={wallet.icon} alt="" className='w-full h-auto object-contain rounded-2xl mb-5'/>



                        <h4 className="text-white font-semibold text-sm md:text-base mb-1">{wallet.name}</h4>
                        <div className="flex items-center text-gray-400 text-xs">
                          <span>Lihat Paket</span>
                          <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* No Results Message */}
            {searchQuery && !hasSearchResults && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">Tidak Ditemukan</h3>
                <p className="text-gray-400 mb-6">
                  Coba kata kunci lain atau lihat semua produk kami
                </p>
                <button
                  onClick={clearSearch}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-colors"
                >
                  Lihat Semua Produk
                </button>
              </div>
            )}
          </div>
        )}

        {/* Game Detail View */}
        {view === 'game' && selectedItem && 'needsServer' in selectedItem && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                {/* <div className="text-6xl">{selectedItem.icon}</div> */}
                <img src={selectedItem.icon} alt="" className='w-50 h-50 rounded-2xl'/>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedItem.name}</h3>
                  <p className="text-gray-400">Pilih nominal top up</p>
                </div>
              </div>
            </div>

            {/* Form Input */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Masukkan Data</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">User ID</label>
                  <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Masukkan User ID"
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                {selectedItem.needsServer && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Server ID</label>
                    <input
                      type="text"
                      value={serverId}
                      onChange={(e) => setServerId(e.target.value)}
                      placeholder="Masukkan Server ID"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Products */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Pilih Nominal</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedItem.products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${selectedProduct?.id === product.id
                      ? 'border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/25'
                      : 'border-white/10 bg-black/20 hover:border-purple-500/50'
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-white font-semibold">{product.name}</div>
                        {product.bonus && (
                          <div className="text-yellow-400 text-xs mt-1">{product.bonus}</div>
                        )}
                      </div>
                      <div className="text-purple-400 font-bold">{formatPrice(product.price)}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Checkout Button */}
            {selectedProduct && (
              <button
                onClick={handleCheckout}
                disabled={!canCheckout()}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${canCheckout()
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/75'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
              >
                <Send size={20} />
                <span>Checkout via WhatsApp - {formatPrice(selectedProduct.price)}</span>
              </button>
            )}
          </div>
        )}

        {/* E-Wallet Detail View */}
        {view === 'ewallet' && selectedItem && !('needsServer' in selectedItem) && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <img src={selectedItem.icon} alt="" className='w-50 h-50 rounded-2xl'/>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedItem.name}</h3>
                  <p className="text-gray-400">Pilih nominal top up</p>
                </div>
              </div>
            </div>

            {/* Form Input */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Masukkan Data</h4>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nomor HP</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="08xxxxxxxxxx"
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
            </div>

            {/* Products */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Pilih Nominal</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedItem.products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${selectedProduct?.id === product.id
                      ? 'border-green-500 bg-green-500/20 shadow-lg shadow-green-500/25'
                      : 'border-white/10 bg-black/20 hover:border-green-500/50'
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-white font-semibold">{product.name}</div>
                      <div className="text-green-400 font-bold">{formatPrice(product.price)}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Checkout Button */}
            {selectedProduct && (
              <button
                onClick={handleCheckout}
                disabled={!canCheckout()}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${canCheckout()
                  ? 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/75'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
              >
                <Send size={20} />
                <span>Checkout via WhatsApp - {formatPrice(selectedProduct.price)}</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-gray-400">
          <p>© 2026 LittleKenzy - Top Up Terpercaya</p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;