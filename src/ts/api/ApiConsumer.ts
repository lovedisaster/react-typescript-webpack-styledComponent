export type ServerDataType = {
  purchasePrice: string
  depositAmount: string,
  scheduleOptions: Array<ScheduledPlanType>
}

export type ScheduledPlanType = {
  id: string,
  interval: string,
  paymentCount: number,
  instalmentAmount : string,
  duration: string
}

const mockPromise = new Promise<ServerDataType>((resolve) => {
    resolve({
        "purchasePrice": "$123.45",
        "depositAmount": "$10.00",
        "scheduleOptions": [
          {
            "id" : "1",
            "interval": "weekly",
            "paymentCount": 16,
            "instalmentAmount": "$7.71",
            "duration": "4 months"
          },
          {
            "id" : "2",
            "interval": "weekly",
            "paymentCount": 8,
            "instalmentAmount": "$15.43",
            "duration": "3 months"
          },
          {
            "id" : "3",
            "interval": "weekly",
            "paymentCount": 12,
            "instalmentAmount": "$10.28",
            "duration": "4 months"

          },
          {
            "id" : "4",
            "interval": "monthly",
            "paymentCount": 3,
            "instalmentAmount": "$41.00",
            "duration": "4 months"
          },
          {
            "id" : "5",
            "interval": "monthly",
            "paymentCount": 2,
            "instalmentAmount": "$60.10",
            "duration": "2 months"
          }
        ]
      }
      );
  });

export const GetMockData = () => mockPromise;