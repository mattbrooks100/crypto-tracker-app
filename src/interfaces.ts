export interface LinkProps {
  name: string;
  href: string;
}

export interface NavLinkProps {
  link: LinkProps;
  className?: string;
}

export interface CoinProps {
  changePercent24Hr: string;
  explorer: string;
  id: string;
  marketCapUsd: string;
  maxSupply: string;
  name: string;
  priceUsd: string;
  rank: string;
  supply: string;
  symbol: string;
  volumeUsd24Hr: string;
  vwap24Hr: string;
}

export interface CoinCardProps {
  key: string;
  coin: CoinProps;
  className?: string;
}
