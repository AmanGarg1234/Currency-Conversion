import { LightningElement, track } from 'lwc';

export default class CurrencyConverter extends LightningElement {
    @track inrAmount = '0';
    @track selectedCurrency = '';
    @track convertedAmount = '';

    currencyOptions = [
        { label: 'USD', value: 'USD' },
        { label: 'EUR', value: 'EUR' },
        { label: 'KZT', value: 'KZT' },
        { label: 'AUD', value: 'AUD' },
        { label: 'BDT', value: 'BDT' },
        { label: 'GBP', value: 'GBP' },
        // Add more currency options as needed
    ];

    handleAmountChange(event) {
    if (event.target.value === '') {
        this.inrAmount = '0';
    } else {
        this.inrAmount = event.target.value;
    }
    }


    handleCurrencyChange(event) {
        this.selectedCurrency = event.target.value;
    }

    convertCurrency() {
        // Perform currency conversion based on selected currency
        // Implement your conversion logic here
        // You can use APIs or hardcoded rates
        // For simplicity, let's assume 1 INR = 0.014 USD, 1 INR = 0.012 EUR, etc.
        const rates = {
            'USD': 0.01206,
            'EUR': 0.01115,
            'KZT': 5.42223,
            'AUD': 0.01837,
            'BDT': 1.30964,
            'GBP': 0.00952, 
            // Add more rates as needed
        };
        const rate = rates[this.selectedCurrency];
        this.convertedAmount = this.inrAmount * rate;
    }
}