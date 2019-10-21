export class Product {
    id: number;
    $type: string;
    description: string;
    subtype: string;
    createAt: string;
    minBalance: number;
    status: number;
    currencyId: number;
    currency: Currency;
}

export class Currency {
    id: number;
    name: string;
    symbol: string;
}
