export const vehicles = [
    {
        Id: 1, 
        image:'assets/images/cars/1.jpg',
        BuyDate: "2024-04-01",
        StockId: "STK001",
        Chassis: "CHS001",
        Model: "Toyota Camry",
        Year: 2022,
        ManufactureYear: 2021,
        InYard: true,
        Documents: true,
        Sold: false,
        Paid: true,
        Consignee: "John Smith",
        ShipOK: true,
        Inspection: "Passed",
        Book: "Booked",
        BL: "BL001",
        RelOK: true,
        Rel: "Released",
        Customer: "ABC Corporation",
        ProfitJPY: 50000,
        BuyPriceJPY: 2000000,
        AuctionFees: 5000,
        Transportation: 10000,
        ShipCharges: 15000,
        YardCost: 2000,
        RepairsJPY: 0,
        InspectionCost: 500,
        FreightCost: 3000,
        DHLCost: 2000,
        CNFInvoice: "CNF001",
        DepositRatio: 0.2,
        ReceivedPercentage: 0.8,
        Deposit: [
            { Amount: 1000, Date: "2024-04-02" },
            { Amount: 500, Date: "2024-04-10" }
        ],
        ExchangeRate: [
            { Rate: 110, Date: "2024-04-01" },
            { Rate: 108, Date: "2024-04-15" }
        ],
        DepositJPY: [
            { Amount: 10000, Date: "2024-04-02" },
            { Amount: 5000, Date: "2024-04-10" }
        ],
        RemainingBalance: 1500000,
        BIDAmount: 1800000,
        AuctionName: "Auction1",
        LOT: "LOT001",
        KM: 50000,
        M3: 10,
        Color: "Red",
        POD: "Port1",
        DepartureDate: "2024-04-20",
        Discharge: "Port2",
        Country: "Japan",
        ETA: "2024-05-01",
        ShippingLine: "ShipLine1",
        ShipNameVoyage: "Ship1-Voyage1",
        ConsigneeName: "John Smith",
        ConsigneeAddress: "123 Main St, Anytown",
        ConsigneePhone: "555-1234",
        ConsigneeEmail: "john.smith@example.com",
        NotifyParty: "Notify Party Inc.",
        Equipment: "Container",
        Memo: "Some memo",
        ExportCertificate: "exp001.pdf",
        InspectionCertificate: "insp001.pdf",
        BLCopy: "bl001.pdf",
        SurrenderBL: "sbl001.pdf"
    },
    {
        Id: 2,
        image:'assets/images/cars/2.jpg',
        BuyDate: "2024-04-02",
        StockId: "STK002",
        Chassis: "CHS002",
        Model: "Honda Civic",
        Year: 2023,
        ManufactureYear: 2022,
        InYard: false,
        Documents: true,
        Sold: true,
        Paid: true,
        Consignee: "Alice Johnson",
        ShipOK: true,
        Inspection: "Passed",
        Book: "Booked",
        BL: "BL002",
        RelOK: true,
        Rel: "Released",
        Customer: "XYZ Corporation",
        ProfitJPY: 40000,
        BuyPriceJPY: 1800000,
        AuctionFees: 4500,
        Transportation: 9000,
        ShipCharges: 12000,
        YardCost: 1800,
        RepairsJPY: 500,
        InspectionCost: 400,
        FreightCost: 2500,
        DHLCost: 1800,
        CNFInvoice: "CNF002",
        DepositRatio: 0.25,
        ReceivedPercentage: 1,
        Deposit: [
            { Amount: 1200, Date: "2024-04-03" },
            { Amount: 600, Date: "2024-04-11" }
        ],
        ExchangeRate: [
            { Rate: 112, Date: "2024-04-02" },
            { Rate: 110, Date: "2024-04-16" }
        ],
        DepositJPY: [
            { Amount: 15000, Date: "2024-04-03" },
            { Amount: 7000, Date: "2024-04-11" }
        ],
        RemainingBalance: 1650000,
        BIDAmount: 1750000,
        AuctionName: "Auction2",
        LOT: "LOT002",
        KM: 60000,
        M3: 12,
        Color: "Blue",
        POD: "Port3",
        DepartureDate: "2024-04-21",
        Discharge: "Port4",
        Country: "Germany",
        ETA: "2024-05-02",
        ShippingLine: "ShipLine2",
        ShipNameVoyage: "Ship2-Voyage1",
        ConsigneeName: "Alice Johnson",
        ConsigneeAddress: "456 Elm St, Othertown",
        ConsigneePhone: "555-5678",
        ConsigneeEmail: "alice.johnson@example.com",
        NotifyParty: "Notify Party Corp.",
        Equipment: "Container",
        Memo: "Some memo",
        ExportCertificate: "exp002.pdf",
        InspectionCertificate: "insp002.pdf",
        BLCopy: "bl002.pdf",
        SurrenderBL: "sbl002.pdf"
    },
    {
        Id: 3,
        image:'assets/images/cars/3.jpg',
        BuyDate: "2024-04-03",
        StockId: "STK003",
        Chassis: "CHS003",
        Model: "Nissan Altima",
        Year: 2022,
        ManufactureYear: 2021,
        InYard: true,
        Documents: true,
        Sold: true,
        Paid: true,
        Consignee: "Bob Brown",
        ShipOK: true,
        Inspection: "Passed",
        Book: "Booked",
        BL: "BL003",
        RelOK: true,
        Rel: "Released",
        Customer: "123 Industries",
        ProfitJPY: 30000,
        BuyPriceJPY: 1700000,
        AuctionFees: 3800,
        Transportation: 7500,
        ShipCharges: 9000,
        YardCost: 1200,
        RepairsJPY: 200,
        InspectionCost: 250,
        FreightCost: 1800,
        DHLCost: 1200,
        CNFInvoice: "CNF003",
        DepositRatio: 0.2,
        ReceivedPercentage: 0.8,
        Deposit: [
            { Amount: 1000, Date: "2024-04-04" },
            { Amount: 800, Date: "2024-04-12" }
        ],
        ExchangeRate: [
            { Rate: 108, Date: "2024-04-03" },
            { Rate: 106, Date: "2024-04-17" }
        ],
        DepositJPY: [
            { Amount: 18000, Date: "2024-04-04" },
            { Amount: 7500, Date: "2024-04-12" }
        ],
        RemainingBalance: 2000000,
        BIDAmount: 2100000,
        AuctionName: "Auction3",
        LOT: "LOT003",
        KM: 55000,
        M3: 11,
        Color: "Silver",
        POD: "Port5",
        DepartureDate: "2024-04-22",
        Discharge: "Port6",
        Country: "UK",
        ETA: "2024-05-03",
        ShippingLine: "ShipLine3",
        ShipNameVoyage: "Ship3-Voyage1",
        ConsigneeName: "Bob Brown",
        ConsigneeAddress: "789 Oak St, Othertown",
        ConsigneePhone: "555-9012",
        ConsigneeEmail: "bob.brown@example.com",
        NotifyParty: "Notify Party Co.",
        Equipment: "Container",
        Memo: "Some memo",
        ExportCertificate: "exp003.pdf",
        InspectionCertificate: "insp003.pdf",
        BLCopy: "bl003.pdf",
        SurrenderBL: "sbl003.pdf"
    },
    // {
    //     Id: 4,
    //     image:'assets/images/cars/4.jpg',
    //     BuyDate: "2024-04-04",
    //     StockId: "STK004",
    //     Chassis: "CHS004",
    //     Model: "Ford Mustang",
    //     Year: 2023,
    //     ManufactureYear: 2022,
    //     InYard: false,
    //     Documents: true,
    //     Sold: false,
    //     Paid: true,
    //     Consignee: "Mary Wilson",
    //     ShipOK: true,
    //     Inspection: "Passed",
    //     Book: "Booked",
    //     BL: "BL004",
    //     RelOK: true,
    //     Rel: "Released",
    //     Customer: "456 Enterprises",
    //     ProfitJPY: 35000,
    //     BuyPriceJPY: 1500000,
    //     AuctionFees: 4000,
    //     Transportation: 8000,
    //     ShipCharges: 10000,
    //     YardCost: 1500,
    //     RepairsJPY: 0,
    //     InspectionCost: 300,
    //     FreightCost: 2000,
    //     DHLCost: 1500,
    //     CNFInvoice: "CNF004",
    //     DepositRatio: 0.2,
    //     ReceivedPercentage: 0,
    //     Deposit: [],
    //     ExchangeRate: [],
    //     DepositJPY: [],
    //     RemainingBalance: 1500000,
    //     BIDAmount: 1600000,
    //     AuctionName: "Auction4",
    //     LOT: "LOT004",
    //     KM: 40000,
    //     M3: 8,
    //     Color: "Black",
    //     POD: "Port7",
    //     DepartureDate: "2024-04-23",
    //     Discharge: "Port8",
    //     Country: "Germany",
    //     ETA: "2024-05-04",
    //     ShippingLine: "ShipLine4",
    //     ShipNameVoyage: "Ship4-Voyage1",
    //     ConsigneeName: "Mary Wilson",
    //     ConsigneeAddress: "654 Maple Ave, Sometown",
    //     ConsigneePhone: "555-7890",
    //     ConsigneeEmail: "mary.wilson@example.com",
    //     NotifyParty: "Notify Party Inc.",
    //     Equipment: "Container",
    //     Memo: "Some memo",
    //     ExportCertificate: "exp004.pdf",
    //     InspectionCertificate: "insp004.pdf",
    //     BLCopy: "bl004.pdf",
    //     SurrenderBL: "sbl004.pdf"
    // },
    {
        Id: 5,
        image:'assets/images/cars/5.jpg',
        BuyDate: "2024-04-05",
        StockId: "STK005",
        Chassis: "CHS005",
        Model: "Chevrolet Tahoe",
        Year: 2022,
        ManufactureYear: 2021,
        InYard: true,
        Documents: true,
        Sold: true,
        Paid: true,
        Consignee: "Jack Smith",
        ShipOK: true,
        Inspection: "Passed",
        Book: "Booked",
        BL: "BL005",
        RelOK: true,
        Rel: "Released",
        Customer: "789 Corporation",
        ProfitJPY: 45000,
        BuyPriceJPY: 1900000,
        AuctionFees: 4800,
        Transportation: 9500,
        ShipCharges: 13000,
        YardCost: 1900,
        RepairsJPY: 300,
        InspectionCost: 350,
        FreightCost: 2300,
        DHLCost: 1900,
        CNFInvoice: "CNF005",
        DepositRatio: 0.25,
        ReceivedPercentage: 0.8,
        Deposit: [
            { Amount: 1300, Date: "2024-04-06" },
            { Amount: 700, Date: "2024-04-14" }
        ],
        ExchangeRate: [
            { Rate: 115, Date: "2024-04-05" },
            { Rate: 112, Date: "2024-04-19" }
        ],
        DepositJPY: [
            { Amount: 16000, Date: "2024-04-06" },
            { Amount: 7500, Date: "2024-04-14" }
        ],
        RemainingBalance: 1750000,
        BIDAmount: 1850000,
        AuctionName: "Auction5",
        LOT: "LOT005",
        KM: 70000,
        M3: 14,
        Color: "White",
        POD: "Port9",
        DepartureDate: "2024-04-24",
        Discharge: "Port10",
        Country: "USA",
        ETA: "2024-05-05",
        ShippingLine: "ShipLine5",
        ShipNameVoyage: "Ship5-Voyage1",
        ConsigneeName: "Jack Smith",
        ConsigneeAddress: "369 Pine St, Anytown",
        ConsigneePhone: "555-3456",
        ConsigneeEmail: "jack.smith@example.com",
        NotifyParty: "Notify Party Co.",
        Equipment: "Container",
        Memo: "Some memo",
        ExportCertificate: "exp005.pdf",
        InspectionCertificate: "insp005.pdf",
        BLCopy: "bl005.pdf",
        SurrenderBL: "sbl005.pdf"
    },
    // {
    //     Id: 6,
    //     image:'assets/images/cars/6.jpg',
    //     BuyDate: "2024-04-06",
    //     StockId: "STK006",
    //     Chassis: "CHS006",
    //     Model: "BMW X5",
    //     Year: 2023,
    //     ManufactureYear: 2022,
    //     InYard: false,
    //     Documents: true,
    //     Sold: false,
    //     Paid: true,
    //     Consignee: "Emily Brown",
    //     ShipOK: true,
    //     Inspection: "Passed",
    //     Book: "Booked",
    //     BL: "BL006",
    //     RelOK: true,
    //     Rel: "Released",
    //     Customer: "ABC Corporation",
    //     ProfitJPY: 30000,
    //     BuyPriceJPY: 1700000,
    //     AuctionFees: 3800,
    //     Transportation: 7500,
    //     ShipCharges: 9000,
    //     YardCost: 1200,
    //     RepairsJPY: 200,
    //     InspectionCost: 250,
    //     FreightCost: 1800,
    //     DHLCost: 1200,
    //     CNFInvoice: "CNF006",
    //     DepositRatio: 0.2,
    //     ReceivedPercentage: 0,
    //     Deposit: [],
    //     ExchangeRate: [],
    //     DepositJPY: [],
    //     RemainingBalance: 1700000,
    //     BIDAmount: 1800000,
    //     AuctionName: "Auction6",
    //     LOT: "LOT006",
    //     KM: 45000,
    //     M3: 9,
    //     Color: "Silver",
    //     POD: "Port11",
    //     DepartureDate: "2024-04-25",
    //     Discharge: "Port12",
    //     Country: "Italy",
    //     ETA: "2024-05-06",
    //     ShippingLine: "ShipLine6",
    //     ShipNameVoyage: "Ship6-Voyage1",
    //     ConsigneeName: "Emily Brown",
    //     ConsigneeAddress: "147 Oak St, Othertown",
    //     ConsigneePhone: "555-6789",
    //     ConsigneeEmail: "emily.brown@example.com",
    //     NotifyParty: "Notify Party Co.",
    //     Equipment: "Container",
    //     Memo: "Some memo",
    //     ExportCertificate: "exp006.pdf",
    //     InspectionCertificate: "insp006.pdf",
    //     BLCopy: "bl006.pdf",
    //     SurrenderBL: "sbl006.pdf"
    // },
    {
        Id: 7,
        image:'assets/images/cars/7.jpg',
        BuyDate: "2024-04-07",
        StockId: "STK007",
        Chassis: "CHS007",
        Model: "Mercedes-Benz E-Class",
        Year: 2022,
        ManufactureYear: 2021,
        InYard: true,
        Documents: true,
        Sold: true,
        Paid: true,
        Consignee: "Tom Green",
        ShipOK: true,
        Inspection: "Passed",
        Book: "Booked",
        BL: "BL007",
        RelOK: true,
        Rel: "Released",
        Customer: "XYZ Corporation",
        ProfitJPY: 55000,
        BuyPriceJPY: 2100000,
        AuctionFees: 5200,
        Transportation: 10000,
        ShipCharges: 14000,
        YardCost: 2200,
        RepairsJPY: 1500,
        InspectionCost: 500,
        FreightCost: 3200,
        DHLCost: 2200,
        CNFInvoice: "CNF007",
        DepositRatio: 0.3,
        ReceivedPercentage: 0.9,
        Deposit: [
            { Amount: 1800, Date: "2024-04-08" },
            { Amount: 900, Date: "2024-04-16" }
        ],
        ExchangeRate: [
            { Rate: 106, Date: "2024-04-07" },
            { Rate: 104, Date: "2024-04-21" }
        ],
        DepositJPY: [
            { Amount: 20000, Date: "2024-04-08" },
            { Amount: 8500, Date: "2024-04-16" }
        ],
        RemainingBalance: 1900000,
        BIDAmount: 2000000,
        AuctionName: "Auction7",
        LOT: "LOT007",
        KM: 50000,
        M3: 10,
        Color: "Black",
        POD: "Port13",
        DepartureDate: "2024-04-26",
        Discharge: "Port14",
        Country: "Australia",
        ETA: "2024-05-07",
        ShippingLine: "ShipLine7",
        ShipNameVoyage: "Ship7-Voyage1",
        ConsigneeName: "Tom Green",
        ConsigneeAddress: "258 Pine St, Anycity",
        ConsigneePhone: "555-1234",
        ConsigneeEmail: "tom.green@example.com",
        NotifyParty: "Notify Party Corp.",
        Equipment: "Container",
        Memo: "Some memo",
        ExportCertificate: "exp007.pdf",
        InspectionCertificate: "insp007.pdf",
        BLCopy: "bl007.pdf",
        SurrenderBL: "sbl007.pdf"
    },
    // {
    //     Id: 8,
    //     image:'assets/images/cars/4.jpg',
    //     BuyDate: "2024-04-08",
    //     StockId: "STK008",
    //     Chassis: "CHS008",
    //     Model: "Toyota Prius",
    //     Year: 2023,
    //     ManufactureYear: 2022,
    //     InYard: false,
    //     Documents: true,
    //     Sold: false,
    //     Paid: true,
    //     Consignee: "Sarah Lee",
    //     ShipOK: true,
    //     Inspection: "Passed",
    //     Book: "Booked",
    //     BL: "BL008",
    //     RelOK: true,
    //     Rel: "Released",
    //     Customer: "123 Industries",
    //     ProfitJPY: 25000,
    //     BuyPriceJPY: 1300000,
    //     AuctionFees: 3500,
    //     Transportation: 7000,
    //     ShipCharges: 8000,
    //     YardCost: 1300,
    //     RepairsJPY: 500,
    //     InspectionCost: 200,
    //     FreightCost: 1500,
    //     DHLCost: 1300,
    //     CNFInvoice: "CNF008",
    //     DepositRatio: 0.2,
    //     ReceivedPercentage: 0,
    //     Deposit: [],
    //     ExchangeRate: [],
    //     DepositJPY: [],
    //     RemainingBalance: 1300000,
    //     BIDAmount: 1400000,
    //     AuctionName: "Auction8",
    //     LOT: "LOT008",
    //     KM: 30000,
    //     M3: 6,
    //     Color: "Green",
    //     POD: "Port15",
    //     DepartureDate: "2024-04-27",
    //     Discharge: "Port16",
    //     Country: "Japan",
    //     ETA: "2024-05-08",
    //     ShippingLine: "ShipLine8",
    //     ShipNameVoyage: "Ship8-Voyage1",
    //     ConsigneeName: "Sarah Lee",
    //     ConsigneeAddress: "369 Maple Ave, Sometown",
    //     ConsigneePhone: "555-5678",
    //     ConsigneeEmail: "sarah.lee@example.com",
    //     NotifyParty: "Notify Party Inc.",
    //     Equipment: "Container",
    //     Memo: "Some memo",
    //     ExportCertificate: "exp008.pdf",
    //     InspectionCertificate: "insp008.pdf",
    //     BLCopy: "bl008.pdf",
    //     SurrenderBL: "sbl008.pdf"
    // },
    {
        Id: 9,
        image:'assets/images/cars/2.jpg',
        BuyDate: "2024-04-09",
        StockId: "STK009",
        Chassis: "CHS009",
        Model: "Ford Focus",
        Year: 2022,
        ManufactureYear: 2021,
        InYard: true,
        Documents: true,
        Sold: true,
        Paid: true,
        Consignee: "Michael Johnson",
        ShipOK: true,
        Inspection: "Passed",
        Book: "Booked",
        BL: "BL009",
        RelOK: true,
        Rel: "Released",
        Customer: "789 Corporation",
        ProfitJPY: 40000,
        BuyPriceJPY: 1800000,
        AuctionFees: 4500,
        Transportation: 9000,
        ShipCharges: 12000,
        YardCost: 1800,
        RepairsJPY: 500,
        InspectionCost: 400,
        FreightCost: 2500,
        DHLCost: 1800,
        CNFInvoice: "CNF009",
        DepositRatio: 0.25,
        ReceivedPercentage: 0.9,
        Deposit: [
            { Amount: 1200, Date: "2024-04-10" },
            { Amount: 600, Date: "2024-04-18" }
        ],
        ExchangeRate: [
            { Rate: 112, Date: "2024-04-09" },
            { Rate: 110, Date: "2024-04-23" }
        ],
        DepositJPY: [
            { Amount: 15000, Date: "2024-04-10" },
            { Amount: 7000, Date: "2024-04-18" }
        ],
        RemainingBalance: 1650000,
        BIDAmount: 1750000,
        AuctionName: "Auction9",
        LOT: "LOT009",
        KM: 60000,
        M3: 12,
        Color: "Red",
        POD: "Port17",
        DepartureDate: "2024-04-28",
        Discharge: "Port18",
        Country: "Brazil",
        ETA: "2024-05-09",
        ShippingLine: "ShipLine9",
        ShipNameVoyage: "Ship9-Voyage1",
        ConsigneeName: "Michael Johnson",
        ConsigneeAddress: "456 Elm St, Anytown",
        ConsigneePhone: "555-9012",
        ConsigneeEmail: "michael.johnson@example.com",
        NotifyParty: "Notify Party Corp.",
        Equipment: "Container",
        Memo: "Some memo",
        ExportCertificate: "exp009.pdf",
        InspectionCertificate: "insp009.pdf",
        BLCopy: "bl009.pdf",
        SurrenderBL: "sbl009.pdf"
    },
    // {
    //     Id: 10,
    //     image:'assets/images/cars/3.jpg',
    //     BuyDate: "2024-04-10",
    //     StockId: "STK010",
    //     Chassis: "CHS010",
    //     Model: "Honda Accord",
    //     Year: 2023,
    //     ManufactureYear: 2022,
    //     InYard: false,
    //     Documents: true,
    //     Sold: false,
    //     Paid: true,
    //     Consignee: "Emily Brown",
    //     ShipOK: true,
    //     Inspection: "Passed",
    //     Book: "Booked",
    //     BL: "BL010",
    //     RelOK: true,
    //     Rel: "Released",
    //     Customer: "ABC Corporation",
    //     ProfitJPY: 35000,
    //     BuyPriceJPY: 1500000,
    //     AuctionFees: 4000,
    //     Transportation: 8000,
    //     ShipCharges: 10000,
    //     YardCost: 1500,
    //     RepairsJPY: 0,
    //     InspectionCost: 300,
    //     FreightCost: 2000,
    //     DHLCost: 1500,
    //     CNFInvoice: "CNF010",
    //     DepositRatio: 0.2,
    //     ReceivedPercentage: 0,
    //     Deposit: [],
    //     ExchangeRate: [],
    //     DepositJPY: [],
    //     RemainingBalance: 1500000,
    //     BIDAmount: 1600000,
    //     AuctionName: "Auction10",
    //     LOT: "LOT010",
    //     KM: 40000,
    //     M3: 8,
    //     Color: "Blue",
    //     POD: "Port19",
    //     DepartureDate: "2024-04-29",
    //     Discharge: "Port20",
    //     Country: "Japan",
    //     ETA: "2024-05-10",
    //     ShippingLine: "ShipLine10",
    //     ShipNameVoyage: "Ship10-Voyage1",
    //     ConsigneeName: "Emily Brown",
    //     ConsigneeAddress: "147 Oak St, Othertown",
    //     ConsigneePhone: "555-6789",
    //     ConsigneeEmail: "emily.brown@example.com",
    //     NotifyParty: "Notify Party Co.",
    //     Equipment: "Container",
    //     Memo: "Some memo",
    //     ExportCertificate: "exp010.pdf",
    //     InspectionCertificate: "insp010.pdf",
    //     BLCopy: "bl010.pdf",
    //     SurrenderBL: "sbl010.pdf"
    // }
]