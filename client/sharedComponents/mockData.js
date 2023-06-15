exports.mockData = {
  leagues: [
    {
      id: 18900,
      name: 'Golden Gate Premier League',
      address: 'Golden Gate Bridge, San Francisco, CA',
      location: {
        latitude: 37.7579909751779,
        longitude: -122.42724888291282,
      },
      picture: 'https://res.cloudinary.com/dnr41r1lq/image/upload/v1686615315/soccer_oj8ssf.webp',
      sport: 'Football',
      teams: [
        {
          id: 123,
          name: 'Red Rockets 🚀',
          members: ['Fred', 'Joe', 'Bob', 'Sally'],
          events: [
            {
              name: 'Group Practice',
              location: 'Southcourt Fields',
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
          ],
          announcements: [
            {
              id: 89,
              text: "Starting in July the Southcourt Fields will be under a landscaping remodel, so we'll be moving our regular practice location to the fields by Kinder Elementary",
              createdAt: 'Mon, 12 Jun 2023 14:00:00 GMT'
            },
            {
              id: 312,
              text: "We're collecting group buy-ins ($10/person) for the After Scrim Dinner. Get those to the Team Captain by Friday, June 30th",
              createdAt: 'Mon, 12 Jun 2023 10:00:00 GMT'
            }
          ]
        },
        {
          id: 125,
          name: 'Oursenal',
          members: ['Ole', 'Mart', 'Jesus', 'Kieran'],
          events: [
            {
              name: 'Game Day',
              location: 'Cascade Stadium',
              date: 'July 7, 2023',
              time: '3:00PM'
            },
            {
              name: 'Practice',
              location: "Indoor spot",
              date: 'July 10, 2023',
              time: '6:00PM'
            }
          ],
          announcements: [
            {
              id: 23,
              text: "Granit and Buka are leaving us. We need another mid. Tell your friends!",
              createdAt: 'Wed, 14 Jun 2023 20:00:00 GMT'
            },
          ]
        },
        {
          id: 126,
          name: 'Royal Ravens',
          members: ['Amy', 'Alex', 'Rachel', 'Maggie', 'Karen', 'Jessica', 'Yolanda', 'Maria'],
          events: [
            {
              name: 'Scrimmage vs Red Rockets',
              location: 'Cascade Stadium',
              date: 'July 6, 2023',
              time: '3:00PM'
            },
            {
              name: 'Girls Night',
              location: "Karen's Chateau",
              date: 'July 6, 2023',
              time: '9:00PM'
            }
          ],
          announcements: [
            {
              id: 230,
              text: "Rachel got our league's Golden Boot award! Celebrating on July 6.",
              createdAt: 'Wed, 14 Jun 2023 20:00:00 GMT'
            },
          ]
        }
      ]
    },
    {
      id: 298,
      name: 'South Bay Hockey League',
      address: '2200 Jefferson St, Torrance, CA 90501',
      location: {
        latitude: 33.82695602555889,
        longitude: -118.32294686075468,
      },
      picture: 'https://res.cloudinary.com/dnr41r1lq/image/upload/v1686615396/hockey_r9nk4b.jpg',
      sport: 'Hockey',
      teams: [
        {
          id: 134,
          name: 'Frost Kings 👑',
          members: ['William', 'Matt', 'James', 'Alexander', 'Kelvin'],
          events: [
            {
              name: 'Game vs Icebreakers',
              location: 'Glacier Arena',
              date: 'June 17, 2023',
              time: '7:00PM'
            },
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
          ],
          announcements: [
            {
              id: 8,
              text: "Attention all members of the Frost King hockey team! We are thrilled to announce our upcoming game against the Icebreakers this Saturday, June 17th at 7PM. Our team has been training hard, refining our skills, and strategizing to come out strong and secure the victory. We're ready to showcase our teamwork, determination, and love for the game.",
              createdAt: 'Tue, 13 Jun 2023 20:00:00 GMT'
            }
          ]
        },
        {
          id: 1355,
          name: 'Icebreakers',
          members: ['Van', 'Ian', 'Mack', 'Michael', 'Matt', 'Matthew', 'Matias'],
          events: [
            {
              name: 'Game vs Frost Kings',
              location: 'Glacier Arena',
              date: 'June 17, 2023',
              time: '7:00PM'
            },
            {
              name: 'Freeskate',
              location: 'Blizzard Bay Rink',
              date: 'June 20, 2023',
              time: '3:00PM'
            },
          ],
          announcements: [
            {
              id: 10,
              text: "Michael's collar bone is broken from last week's game. Collecting funds to help with his medical bills.",
              createdAt: 'Wed, 14 Jun 2023 20:00:00 GMT'
            }
          ]
        },
        {
          id: 1356,
          name: 'Absolute Zero',
          members: ['Anders', 'Bose', 'Albert', 'Maxwell', 'Ludwig'],
          events: [
            {
              name: 'Experimental Drills',
              location: 'Galloway',
              date: 'June 19, 2023',
              time: '10:00AM'
            },
          ],
          announcements: [
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Elite eSports League (EEL)',
      address: '12655 Ventura Blvd, Studio City, CA 91604',
      location: {
        latitude: 34.144660720008844,
        longitude: -118.40868310122428,
      },
      picture: 'https://res.cloudinary.com/dnr41r1lq/image/upload/v1686615478/lol_w8emw7.jpg',
      sport: 'Video Games',
      teams: [
        {
          id: 11,
          name: 'Nebula Nexus (LoL)',
          members: ['David', 'Ryan', 'Tyler', 'Chris', 'Thomas', 'Josh', 'Tobi'],
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
          ],
          announcements: [
            {
              id: 765,
              text: "Due to popular demand, we are pleased to announce the formation of our brand-new TFT team, Fortune's Fury. Stay tuned for further updates",
              createdAt: 'Tue, 13 Jun 2023 10:00:00 GMT'
            }
          ]
        },
        {
          id: 12,
          name: 'Toxic',
          members: ['Dota', 'Fox', 'Chen', 'Mag', 'Sandy', 'Jamal'],
          events: [
            {
              name: 'Team Bonding',
              location: "The Fox Box",
              date: 'June 22, 2023',
              time: '8:30PM'
            },
            {
              name: 'Chain Queue',
              location: "Summoner's Rift",
              date: 'July 24, 2023',
              time: '7:00AM'
            }
          ],
          announcements: [
            {
              id: 76,
              text: "BYO for Team Bonding",
              createdAt: 'Wed, 14 Jun 2023 20:00:00 GMT'
            }
          ]
        }
      ]
    },
    {
      id: 49572,
      name: 'NorCal Tennis',
      address: '1920 N Loop Rd, Alameda, CA 94502',
      location: {
        latitude: 37.432651143406794,
        longitude: -122.14180448244987,
      },
      picture: 'https://res.cloudinary.com/dnr41r1lq/image/upload/v1686615707/tennis_ery9mr.webp',
      sport: 'Tennis',
      teams: [
        {
          id: 999,
          name: 'Volley Vipers 🐍',
          members: ['Andrew', 'Angelica', 'Shannon', 'Michael', 'Peter', 'Naruto_Uzumaki'],
          events: [
            {
              name: 'Point Play',
              location: 'Grand Slam Gardens',
              date: 'June 12, 2023',
              time: '12:30PM'
            },
            {
              name: 'Doubles w/Scrim Partner',
              location: 'Spin City Tennis Club',
              date: 'June 23, 2023',
              time: '4:45PM'
            },
            {
              name: 'Groundstroke Drills',
              location: "Grand Slam Gardens",
              date: 'June 29, 2023',
              time: '2:00PM'
            },
            {
              name: 'Lunch Break!',
              location: "Rec Room Cafe",
              date: 'July 1, 2023',
              time: '1:00PM'
            }
          ],
          announcements: [
            {
              id: 17,
              text: "Attention Volley Vipers! We are excited to announce the launch of our new website, where you can find all the latest updates, match schedules, standings, and more. Visit the URL and explore the features to stay connected with our tennis community.",
              createdAt: 'Sat, 10 Jun 2023 12:00:00 GMT'
            },
            {
              id: 390,
              text: "Should we start a tournament bracket for the summer? Let us know in the poll",
              createdAt: 'Tue, 13 Jun 2023 10:00:00 GMT'
            },
            {
              id: 555,
              text: "Vipers, make sure you are checking the locations for drill practice because we are rotating with other teams in the league",
              createdAt: 'Mon, 12 Jun 2023 22:00:00 GMT'
            }
          ]
        },
        {
          id: 998,
          name: 'Advantage',
          members: ['Benji', 'Tyrone', 'Dan', 'Michelle'],
          events: [
            {
              name: '1v1',
              location: 'Clay Grounds',
              date: 'June 22, 2023',
              time: '12:30PM'
            },
            {
              name: 'Match Day',
              location: 'Grand Slam Gardens',
              date: 'June 23, 2023',
              time: '2:00PM'
            },
          ],
          announcements: [
            {
              id: 11111,
              text: "Before practice on June 22: Benji is going to teach us how to get in our opponent's head. Don't be late!",
              createdAt: 'Wed, 14 Jun 2023 12:00:00 GMT'
            }
          ]
        }
      ]
    },
    {
      id: 52311,
      name: 'Oakland FA',
      address: '2140 Mandela Parkway, Oakland, CA 94607',
      location: {
        latitude: 37.81169156434982,
        longitude: -122.2929067909725,
      },
      picture: 'https://res.cloudinary.com/dnr41r1lq/image/upload/v1686616401/americanFootball_y06lvt.webp',
      sport: 'American Football',
      teams: [
        {
          id: 9987,
          name: 'Rampant Rhinos 🦏',
          members: ['Finn', 'Troy', 'Chad', 'Damian'],
          events: [
            {
              name: 'Team Practice',
              location: 'Playmaker Park',
              date: 'June 18, 2023',
              time: '2:30PM'
            },
            {
              name: 'Strength and Conditioning',
              location: "Maverick's Gym",
              date: 'June 19, 2023',
              time: '6:45PM'
            }
          ],
          announcements: [
            {
              id: 42,
              text: "Tryouts for team quarterback in the August lineup will start NEXT WEEK. Let's go, Rhinos!",
              createdAt: 'Sat, 10 Jun 2023 12:00:00 GMT'
            },
            {
              id: 962,
              text: "Though not official, Coach is in talks with Jeanine from the varsity cheer squad to have them cheer for us on our next big game 👀",
              createdAt: 'Sun, 11 Jun 2023 22:00:00 GMT'
            }
          ]
        },
        {
          id: 99871,
          name: 'Concussion',
          members: ['Sahid', 'Bob', 'Chad', 'Chadius'],
          events: [
            {
              name: 'Practice',
              location: 'Golden Gate Park',
              date: 'June 22, 2023',
              time: '12:30PM'
            },
            {
              name: 'Lifting',
              location: "Gold's Gym",
              date: 'June 24, 2023',
              time: '8:00PM'
            }
          ],
          announcements: [
            {
              id: 321,
              text: "Anyone heard from Sahid?",
              createdAt: 'Mon, 12 Jun 2023 10:00:00 GMT'
            },
          ]
        },
        {
          id: 9171,
          name: 'Shortest Yard',
          members: ['Chadd', 'Paul', 'Nate', 'Chris', 'Duane', 'Cap', 'Tony', 'Tucker'],
          events: [
            {
              name: 'Practice',
              location: 'Golden Gate Park',
              date: 'June 22, 2023',
              time: '2:30PM'
            },
          ],
          announcements: [
          ]
        }
      ]
    },
    {
      id: 934122,
      name: 'San Jose Ballers',
      address: '1841 Platinum Ct, San Jose, CA 95116',
      location: {
        latitude: 37.358331911685625,
        longitude: -121.85395355146453,
      },
      picture: 'https://res.cloudinary.com/dnr41r1lq/image/upload/v1686616893/basketball_ovtupl.jpg',
      sport: 'Basketball',
      teams: [
        {
          id: 22,
          name: 'Dunk Dynasty 🏀',
          members: ['Milo', 'Max', 'Xavier', 'Caleb', 'Silas', 'Asher','Naruto_Uzumaki'],
          events: [
            {
              name: 'Shootaround',
              location: 'Jumpshot Junction',
              date: 'June 22, 2023',
              time: '4:30PM'
            },
            {
              name: 'Training Session',
              location: "HoopWorld Gymnasium",
              date: 'July 5, 2023',
              time: '8:00PM'
            },
            {
              name: 'Rebounding Drills',
              location: "Alley-Oop Arena",
              date: 'July 22, 2023',
              time: '5:45PM'
            },
            {
              name: 'Training Session',
              location: "Fastbreak Fitness Center",
              date: 'July 29, 2023',
              time: '6:45PM'
            },
            {
              name: 'Conditioning Drills',
              location: "Alley-Oop Arena",
              date: 'August 17, 2023',
              time: '5:45PM'
            }
          ],
          announcements: [
            {
              id: 33382,
              text: "Caleb, you left your water bottle in the locker room. It's in the Lost and Found at the front desk of Alley-Oop Arena",
              createdAt: 'Wed, 14 Jun 2023 20:00:00 GMT'
            }
          ]
        },
        {
          id: 20,
          name: 'Dr. Jay and friends',
          members: ['Jay', 'MJ', 'Erving', 'Colby', 'Shaqira', 'Spud'],
          events: [
            {
              name: 'Dunk Contest',
              location: 'Alley-Oop Arena',
              date: 'June 28, 2023',
              time: '2:30PM'
            },
            {
              name: 'Training Session',
              location: "Fastbreak Fitness Center",
              date: 'July 1, 2023',
              time: '10:00AM'
            },
          ],
          announcements: [
            {
              id: 3382,
              text: "After last Monday's no-show, Jay wants everyone to share their location on game days so we can keep tabs on each other.",
              createdAt: 'Tue, 13 Jun 2023 20:00:00 GMT'
            }
          ]
        },
        {
          id: 220,
          name: 'Posterize',
          members: ['Ron', 'Meta', 'Patrick', 'Larry', 'Dennis'],
          events: [
            {
              name: 'Dunk Contest',
              location: 'Alley-Oop Arena',
              date: 'June 28, 2023',
              time: '2:30PM'
            },
          ],
          announcements: [
          ]
        }
      ]
    }
  ],


  userProfiles: [
    {
      id: 0,
      username: "Naruto_Uzamaki",
      profile_pic: "https://images.unsplash.com/photo-1625420044033-256d145f1648?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      teams: {'San Jose Ballers':'Dunk Dynasty 🏀', 'NorCal Tennis':'Volley Vipers 🐍'},
      wishlist: [18900],
      info: {
        about_me:"Hi, I'm naruto, the best of the Best when it comes to being a Ninja who likes Ramen",
        sobriquet: "That one Kid",
        interests: "Frogs, Ramen, Social Acceptance, Being a Ninja",
        level: "Genin"
      }
    },
    {
      id: 1,
      username: "Tobi",
      profile_pic: "https://images.unsplash.com/photo-1606590277088-eeffbe973337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      teams: {'Elite eSports League (EEL)':'Nebula Nexus (LoL)'},
      wishlist: [],
      info: {
        about_me: "",
        sobriquet: "Spooky Mask Guy",
        interests: "Revenge, Famous Dead Warlords, Utopian Social Reform Projects, Capturing the Tailed-Beasts",
        level: "???"
      }
    }
  ]
}
