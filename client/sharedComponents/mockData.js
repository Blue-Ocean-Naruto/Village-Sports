exports.mockData = {
  leagues: [
    {
      id: 1,
      name: 'Football Pickup League',
      sport: 'Football',
      teams: [
        {
          id: 123,
          name: 'Red Rockets 🚀',
          members: ['Fred', 'Joe', 'Bob', 'Sally'],
          events: [
            {
              name: 'Group Practice',
              location: 'Soutcourt Fields',
              date: 'June 27, 2023',
              time: '12:30PM'
            },
            {
              name: 'Scrimmage vs Royal Ravens',
              location: 'Cascade Stadium',
              date: 'July 6, 2023',
              time: '3:00PM'
            },
            {
              name: 'After Scrim Dinner',
              location: "Winger's Wings & Things",
              date: 'July 6, 2023',
              time: '6:00PM'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'South Bay Hockey League',
      sport: 'Hockey',
      teams: [
        {
          id: 134,
          name: 'Frost Kings 👑',
          members: ['William', 'Matt', 'James', 'Alexander', 'Kelvin'],
          events: [
            {
              name: 'Give-and-go Drills',
              location: 'Blizzard Bay Rink',
              date: 'June 20, 2023',
              time: '5:15PM'
            },
            {
              name: 'Open Rink Mingle',
              location: 'Blizzard Bay Rink',
              date: 'June 28, 2023',
              time: '3:30PM'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Elite eSports League (EEL)',
      sport: 'Video Games',
      teams: [
        {
          id: 11,
          name: 'Nebula Nexus (LoL)',
          members: ['David', 'Ryan', 'Tyler', 'Chris', 'Thomas', 'Josh'],
          events: [
            {
              name: 'NALCS Watch Party',
              location: "Josh's House",
              date: 'July 14, 2023',
              time: '11:30AM'
            },
            {
              name: 'ARAM with the FAM',
              location: "Summoner's Rift",
              date: 'July 16, 2023',
              time: '8:00PM'
            },
            {
              name: 'Jg Callout Drills',
              location: "Summoner's Rift",
              date: 'July 16, 2023',
              time: '9:45PM'
            }
          ]
        }
      ]
    }
  ],
  userProfiles: [
    {
      id: 0,
      username: '',
      teams: []
    }
  ]
}