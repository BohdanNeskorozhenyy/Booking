export const places = [
  {
    id: 1,
    title: "Dengoff Bar",
    businesSubType: "Food / drink",
    businesType: "rent",
    location: "Tetiev, Shevchenko Street, 132",
    photo: [require("./images/dengoff.png"), require("./images/dengoff1.png"), require("./images/dengoff2.png"), require("./images/dengoff3.png")],
    description:
      "We cook pizza, make hookahs, eat alcoholic beverages, We cook pizza, make hookahs, eat alcoholic beverages",
    scedule: [
      {
        code: 1,
        name: "Monday",
        workTime: {
          start: { hours: 9, minutes: 30 },
          end: { hours: 19, minutes: 0 },
        },
        dayOff: false,
      },
      {
        code: 2,
        name: "Tuesday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: false,
      },
      {
        code: 3,
        name: "Wednesday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: false,
      },
      {
        code: 4,
        name: "Tursday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: false,
      },
      {
        code: 5,
        name: "Friday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: true,
      },
      {
        code: 6,
        name: "Saturday",
        workTime: {
          start: { hours: 9, minutes: 0 },
          end: { hours: 19, minutes: 0 },
        },
        dayOff: true,
      },
      {
        code: 0,
        name: "Sunday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: true,
      },
    ],
  },
  {
    id: 2,
    title: "4men",
    businesSubType: "Services",
    businesType: "service",
    photo: [require("./images/forMen.png")],
    location: "Tetiev, Shevchenko Street, 132",
    description: "Men's barber shop",
    scedule: [
      {
        code: 1,
        name: "Monday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: false,
      },
      {
        code: 2,
        name: "Tuesday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: false,
      },
      {
        code: 3,
        name: "Wednesday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: false,
      },
      {
        code: 4,
        name: "Tursday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 19, minutes: 0 },
        },
        dayOff: false,
      },
      {
        code: 5,
        name: "Friday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: false,
      },
      {
        code: 6,
        name: "Saturday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: true,
      },
      {
        code: 7,
        name: "Sunday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: true,
      },
    ],
  },
  {
    id: 3,
    title: "The Space",
    businesSubType: "Work",
    businesType: "rent",
    location: "Tetiev, Shevchenko Street, 132",
    photo: [require("./images/space.png")],
    description: "Space for work, meetings, conferences",
    scedule: [
      {
        code: 1,
        name: "Monday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: false,
      },
      {
        code: 2,
        name: "Tuesday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: false,
      },
      {
        code: 3,
        name: "Wednesday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: false,
      },
      {
        code: 4,
        name: "Tursday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 16, minutes: 0 },
        },
        dayOff: false,
      },
      {
        code: 5,
        name: "Friday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: false,
      },
      {
        code: 6,
        name: "Saturday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: true,
      },
      {
        code: 7,
        name: "Sunday",
        workTime: {
          start: { hours: 10, minutes: 15 },
          end: { hours: 21, minutes: 0 },
        },
        dayOff: true,
      },
    ],
  },
  {
    id: 4,
    title: "L`evidence Beaute",
    businesSubType: "Beaute",
    businesType: "service",
    location: "Tetiev, Shevchenko Street, 132",
    photo: [require("./images/BeautySalon.png")],
    description:
      "The only premium beauty salon in Kyiv with a history of over 20 years",
      scedule: [
        {
          code: 1,
          name: "Monday",
          workTime: {
            start: { hours: 10, minutes: 15 },
            end: { hours: 21, minutes: 0 },
          },
          dayOff: false,
        },
        {
          code: 2,
          name: "Tuesday",
          workTime: {
            start: { hours: 10, minutes: 15 },
            end: { hours: 21, minutes: 0 },
          },
          dayOff: false,
        },
        {
          code: 3,
          name: "Wednesday",
          workTime: {
            start: { hours: 10, minutes: 15 },
            end: { hours: 21, minutes: 0 },
          },
          dayOff: false,
        },
        {
          code: 4,
          name: "Tursday",
          workTime: {
            start: { hours: 10, minutes: 15 },
            end: { hours: 21, minutes: 0 },
          },
          dayOff: true,
        },
        {
          code: 5,
          name: "Friday",
          workTime: {
            start: { hours: 10, minutes: 15 },
            end: { hours: 21, minutes: 0 },
          },
          dayOff: false,
        },
        {
          code: 6,
          name: "Saturday",
          workTime: {
            start: { hours: 10, minutes: 15 },
            end: { hours: 21, minutes: 0 },
          },
          dayOff: true,
        },
        {
          code: 7,
          name: "Sunday",
          workTime: {
            start: { hours: 10, minutes: 15 },
            end: { hours: 21, minutes: 0 },
          },
          dayOff: true,
        },
      ],
  },
];
