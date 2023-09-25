import { Activity } from "src/domain/Acivity";

export const activities: Activity[] = [
  {
    id: "activity1",
    progress: 50,
    locationName: "Location A",
    date: "2023-09-23",
    instrumentModalName: "Instrument A",
    functionalAreas: [
      {
        id: "functionalArea1",
        name: "Area 1",
        inProgress: true,
        switchboards: [
          {
            id: "switchboard1",
            name: "Switchboard A",
            products: [
              {
                id: "product1",
                name: "Product A",
                serialNumber: "SN123",
                applicationName: "App 1",
                productCode: "P123",
                isCompleted: false,
              },
              {
                id: "product2",
                name: "Product B",
                serialNumber: "SN456",
                applicationName: "App 2",
                productCode: "P456",
                isCompleted: true,
              },
            ],
            progress: 75,
          },
          {
            id: "switchboard9",
            name: "Switchboard A",
            products: [
              {
                id: "product3",
                name: "Product A",
                serialNumber: "SN123",
                applicationName: "App 1",
                productCode: "P123",
                isCompleted: false,
              },
              {
                id: "product4",
                name: "Product B",
                serialNumber: "SN456",
                applicationName: "App 2",
                productCode: "P456",
                isCompleted: true,
              },
            ],
            progress: 75,
          },
          {
            id: "switchboard10",
            name: "Switchboard A",
            products: [
              {
                id: "product5",
                name: "Product A",
                serialNumber: "SN123",
                applicationName: "App 1",
                productCode: "P123",
                isCompleted: false,
              },
              {
                id: "product6",
                name: "Product B",
                serialNumber: "SN456",
                applicationName: "App 2",
                productCode: "P456",
                isCompleted: true,
              },
            ],
            progress: 75,
          },
        ],
      },
      {
        id: "functionalArea2",
        name: "Area 2",
        inProgress: true,
        switchboards: [
          {
            id: "switchboard2",
            name: "Switchboard A",
            products: [
              {
                id: "product1",
                name: "Product A",
                serialNumber: "SN123",
                applicationName: "App 1",
                productCode: "P123",
                isCompleted: false,
              },
              {
                id: "product2",
                name: "Product B",
                serialNumber: "SN456",
                applicationName: "App 2",
                productCode: "P456",
                isCompleted: true,
              },
            ],
            progress: 75,
          },
        ],
      },
      {
        id: "functionalArea3",
        name: "Area 3",
        inProgress: false,
        switchboards: [
          {
            id: "switchboard3",
            name: "Switchboard A",
            products: [
              {
                id: "product1",
                name: "Product A",
                serialNumber: "SN123",
                applicationName: "App 1",
                productCode: "P123",
                isCompleted: false,
              },
              {
                id: "product2",
                name: "Product B",
                serialNumber: "SN456",
                applicationName: "App 2",
                productCode: "P456",
                isCompleted: true,
              },
            ],
            progress: 75,
          },
        ],
      },
      {
        id: "functionalArea4",
        name: "Area 4",
        inProgress: false,
        switchboards: [
          {
            id: "switchboard4",
            name: "Switchboard A",
            products: [
              {
                id: "product1",
                name: "Product A",
                serialNumber: "SN123",
                applicationName: "App 1",
                productCode: "P123",
                isCompleted: false,
              },
              {
                id: "product2",
                name: "Product B",
                serialNumber: "SN456",
                applicationName: "App 2",
                productCode: "P456",
                isCompleted: true,
              },
            ],
            progress: 75,
          },
        ],
      },
      {
        id: "functionalArea5",
        name: "Area 5",
        inProgress: false,
        switchboards: [
          {
            id: "switchboard5",
            name: "Switchboard A",
            products: [
              {
                id: "product1",
                name: "Product A",
                serialNumber: "SN123",
                applicationName: "App 1",
                productCode: "P123",
                isCompleted: false,
              },
              {
                id: "product2",
                name: "Product B",
                serialNumber: "SN456",
                applicationName: "App 2",
                productCode: "P456",
                isCompleted: true,
              },
            ],
            progress: 75,
          },
        ],
      },
      {
        id: "functionalArea6",
        name: "Area 6",
        inProgress: false,
        switchboards: [
          {
            id: "switchboard6",
            name: "Switchboard A",
            products: [
              {
                id: "product1",
                name: "Product A",
                serialNumber: "SN123",
                applicationName: "App 1",
                productCode: "P123",
                isCompleted: false,
              },
              {
                id: "product2",
                name: "Product B",
                serialNumber: "SN456",
                applicationName: "App 2",
                productCode: "P456",
                isCompleted: true,
              },
            ],
            progress: 75,
          },
        ],
      },
    ],
    inProcess: true,
  },
  {
    id: "activity2",
    progress: 30,
    locationName: "Location B",
    date: "2023-09-24",
    instrumentModalName: "Instrument B",
    functionalAreas: [
      {
        id: "functionalArea7",
        name: "Area 2",
        inProgress: false,
        switchboards: [
          {
            id: "switchboard7",
            name: "Switchboard B",
            products: [],
            progress: 0,
          },
        ],
      },
    ],
    inProcess: false,
  },
  {
    id: "activity3",
    progress: 80,
    locationName: "Location C",
    date: "2023-09-25",
    instrumentModalName: "Instrument C",
    functionalAreas: [
      {
        id: "functionalArea8",
        name: "Area 3",
        inProgress: true,
        switchboards: [
          {
            id: "switchboard8",
            name: "Switchboard C",
            products: [
              {
                id: "product3",
                name: "Product C",
                serialNumber: "SN789",
                applicationName: "App 3",
                productCode: "P789",
                isCompleted: true,
              },
            ],
            progress: 50,
          },
        ],
      },
    ],
    inProcess: true,
  },
];


