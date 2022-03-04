var config = {
    style: 'mapbox://styles/hernandezj/cl0c61g9k001i14l893lau1ju',
    accessToken: 'pk.eyJ1IjoiaGVybmFuZGV6aiIsImEiOiJja3kzemNiYjIwNnp3MnZwOGlycXZ1eHZhIn0.kvZTi2pVBDnYQGwQIrqCVw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Complex Camapigns of Old',
    subtitle: 'Mongol and Napoleonic Operational Art',
    byline: 'By Jose Hernandez',
    footer: '',
    chapters: [
        
        {
            id: 'first-slide',
            alignment: 'center',
            
            title: 'What is Operational Art?',
            description: 'This project shall explore the elements of operational art by mapping and comparing the campaigns of the 13th century Mongols and the Napoleonic French. It is the hope of this project that the attribution fo rth ecreation of operational art be questioned by the observer. Operational art is defined by the US army as “ the skillful employment of military forces to attain strategic and operational objectives within a theater through the design, organization, integration, and conduct of theater strategies, campaigns, major operation as and battles.” To further specifiy their definition the FM 100-5 specified 5 conditions for the existence of operational art which are: a.	The identification of military strategic goalsb.	Establishing of military conditions c.	Sequential and simultenous operationsd.	Resource allocation e.	Commanders with broad operational vision.Therefore this collection of maps with their added descriptions hopes to show the existence of operational art, or at least some of its constituent parts within the Mongol military complex , before their attributed origin in Napoleon’s campaigns. ',
            image: 'images/Mongols.png',
            location: {
                center: [64.97469, 50.677601],
                zoom: 2.82,
                pitch: 20,
                bearing: 0.37
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                }, 
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                }, 
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                }, 
                {
                    layer:'middle-route-approach',
                    opacity:0
                    
                },
              
                {
                    layer:'enemies-on-first-part',
                    opacity:0
                    
                },
               
                {
                    layer:'ae-date',
                    opacity:0
                }
               
               

                

            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                },
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0.3
                    
                },
                {
                    layer:'textmongol',
                    opacity:1
                    
                },
                {
                    layer:'central-europe',
                    opacity:0.3
                    
                },
                {
                    layer:'texteurope',
                    opacity:1
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:' 2napdates',
                    opacity:0
                }, 
                {
                    layer:'2napline',
                    opacity:0
                }, 
                {
                    layer:'2napdates',
                    opacity:0
                }, 
                {
                    layer:'second-nap',
                    opacity:0
                },
                
                
               
            ]
        },
        {
            id: 'second-slide',
            alignment: 'right',
            
            title: 'Map of Eurasia in 1240',
            image: '',
            description: 'In this map we can observe the extent of the Mongol empire in the year 1240. Also mapped is the Kingdom of Hungary and territories of what today is Poland. The military campaign of the Mongols is going to be analyzed will be their attack on both of these kingdoms during 1240 and 1241.  ',
            location: {
                center: [107.36297, 46.92184],
                zoom: 2.36,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                },
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0.3
                    
                },
                {
                    layer:'textmongol',
                    opacity:1
                    
                },
                {
                    layer:'central-europe',
                    opacity:0.3
                    
                },
                {
                    layer:'texteurope',
                    opacity:1
                    
                }, 
                
            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:1
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:1
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                },
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                }, 
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                
               
            ]
        },
        {
            id: 'third-slide',
            alignment: 'left',
            
            title: 'Initial Approach of Mongol Campaign',
            
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [23.72882, 50.76191],
                zoom: 6,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:1
                    
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:1 
                    
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                }, 
               
                
            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:1
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:1
                    
                }, 
              
               
            ]
        },
        {
            id: 'fourth-slide',
            alignment: 'left',
           
            title: 'The raids of the North',
            
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [20.39702, 50.39422],
                zoom: 6,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                    
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland',
                    opacity:1
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:1
                    
                }, 
               
            
            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                }, 
                {
                    layer:'3-prong-approach',
                    opacity:1
                    
                },
                {
                    layer:'middle-route-approach',
                    opacity:1
                    
                },
                {
                    layer:'north-route-approach',
                    opacity:1
                    
                },
                {
                    layer:'south-route-approach',
                    opacity:1
                    
                },
                {
                    layer:'enemies-on-first-part',
                    opacity:1
                    
                }, 
               
               
            ]
        },
        {
            id: 'fifth-slide',
            alignment: 'left',
           
            title: 'The three pronged approach',
            
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [19.44638, 47.97865],
                zoom: 6,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                    
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                },
                {
                    layer:'3-prong-approach',
                    opacity:1
                    
                },
               
                {
                    layer:'south-route-approach',
                    opacity:1
                    
                },
                {
                    layer:'enemies-on-first-part',
                    opacity:1
                    
                }, 
             
            
            
            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                },
                {
                    layer:'3-prong-approach',
                    opacity:0
                    
                },
              
                {
                    layer:'south-route-approach',
                    opacity:0
                    
                },
                {
                    layer:'enemies-on-first-part',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:1
                    
                }, 
                {
                    layer:'dates',
                    opacity:1
                    
                }, 
                {
                    layer:'citynames',
                    opacity:1
                    
                }
               
            ]
        }, 
        {
            id: 'sixth-slide',
            alignment: 'left',
            
            title: 'The Coordinated End',
            image: '',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [19.44638, 47.97865],
                zoom: 6,
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                }, 
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                }, 
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:1
                    
                }, 
                {
                    layer:'dates',
                    opacity:1
                    
                }, 
                {
                    layer:'citynames',
                    opacity:1
                    
                }

                

            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                },
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                },
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:1
                    
                }, 
                {
                    layer:'distance names',
                    opacity:1
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:1
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:1
                    
                }


               
            ]
        }, 
        {
            id: 'seventh-slide',
            alignment: 'left',
            
            title: 'The 3 day Masterpiece and Summary',
            image: '',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [8.67398, 48.78430],
                zoom: 3.5,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                }, 
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                }, 
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:1
                    
                }, 
                {
                    layer:'distance names',
                    opacity:1
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:1
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:1
                    
                }

                

            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                },
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                },
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                    
                }, 
                {
                    layer:'distance names',
                    opacity:0
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:0
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:0
                    
                }, 
                {
                    layer:'political',
                    opacity:0.7
                    
                }, 
                {
                    layer:'names',
                    opacity:1
                    
                },



               
            ]
        },
        {
            id: 'eight-slide',
            alignment: 'right',
            
            title: 'The Franco-Austrian War',
            image: '',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [20.726, 41.682],
                zoom: 2.85,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                }, 
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                }, 
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                    
                }, 
                {
                    layer:'distance names',
                    opacity:0
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:0
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:0
                    
                },
                {
                    layer:'political',
                    opacity:0.4
                    
                }, 
                {
                    layer:'names',
                    opacity:1
                    
                },


                

            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                },
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                },
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                    
                }, 
                {
                    layer:'distance names',
                    opacity:0
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:0
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:0
                    
                }, 
                {
                    layer:'Napnames',
                    opacity:1
                }, 
                {
                    layer:'1napline',
                    opacity:1
                }, 
                {
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                {
                  layer: 'initial',
                    opacity:1
                },
                 {
                  layer: 'initial names',
                    opacity:1
                }


               
            ]
        }, 
        {
            id: 'ninth-slide',
            alignment: 'left',
            
            title: 'The Initial Movements',
            image: '',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [11.42502, 48.76716],
                zoom: 9.2,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                }, 
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                }, 
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                    
                }, 
                {
                    layer:'distance names',
                    opacity:0
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:0
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:0
                    
                },
                {
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                  {
                  layer: 'initial',
                    opacity:1
                },
                 {
                  layer: 'initial names',
                    opacity:1
                }
             


                

            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                },
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                },
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                    
                }, 
                {
                    layer:'distance names',
                    opacity:0
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:0
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:0
                    
                }, 
             
               
                {
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                  {
                  layer: 'initial',
                    opacity:0
                },
                 {
                  layer: 'initial names',
                    opacity:0
                }, 
                {
                    layer:'nap2fig2',
                    opacity:1
                    
                },
                  {
                  layer: 'nap2names',
                    opacity:1
                },
                 {
                  layer: 'nap2fig',
                    opacity:1
                }
                
              


               
            ]
        },
        {
            id: 'tenth-slide',
            alignment: 'left',
            
            title: 'The Landshut Maneuver',
            image: '',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [11.52, 48.76716],
                zoom: 8.44,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                }, 
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                }, 
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                    
                }, 
                {
                    layer:'distance names',
                    opacity:0
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:0
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:0
                    
                },
                {
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                   {
                    layer:'nap2fig2',
                    opacity:1
                    
                },
                  {
                  layer: 'nap2names',
                    opacity:1
                },
                 {
                  layer: 'nap2fig',
                    opacity:1
                }
               


                

            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                },
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                },
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                    
                }, 
                {
                    layer:'distance names',
                    opacity:0
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:0
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:0
                    
                }, 
               
                {
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
              
                   {
                    layer:'nap2fig2',
                    opacity:0
                    
                },
                  {
                  layer: 'nap2names',
                    opacity:0
                },
                 {
                  layer: 'nap2fig',
                    opacity:0
                }


               
            ]
        },
             {
            id: 'eleventh-slide',
            alignment: 'left',
            
            title: 'Conquering Regensburg',
            image: '',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [11.92502, 48.76716],
                zoom: 8.44,
                pitch: 15,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                }, 
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                }, 
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                    
                }, 
                {
                    layer:'distance names',
                    opacity:0
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:0
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:0
                    
                },
                {
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                   {
                    layer:'nap2fig2',
                    opacity:0
                    
                },
                  {
                  layer:'nap2names',
                    opacity:0
                },
                 {
                  layer:'nap2fig',
                    opacity:0
                }, 
                  {
                    layer:'regcol',
                    opacity:1
                }, 
                {
                    layer:'reglines',
                    opacity:1
                }, 
                {
                    layer:'regtitles',
                    opacity:1
                }, 
                
               


                

            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                },
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                },
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                    
                }, 
                {
                    layer:'distance names',
                    opacity:0
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:0
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:0
                    
                }, 
               
                {
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                {
                    layer: '2napline',
                    opacity:1
                }, 
                {
                    layer:'2napdates',
                    opacity:1
                }, 
                {
                    layer:'second-nap',
                    opacity:1
                }, 
                   {
                    layer:'nap2fig2',
                    opacity:0
                    
                },
                  {
                  layer: 'nap2names',
                    opacity:0
                },
                 {
                  layer: 'nap2fig',
                    opacity:0
                }, 
                    {
                    layer:'regcol',
                    opacity:0
                }, 
                {
                    layer:'reglines',
                    opacity:0
                }, 
                {
                    layer:'regtitles',
                    opacity:0
                },
                


               
            ]
        },
        {
            id: 'twelveth-slide',
            alignment: 'left',
            
            title: 'The Biggest Loss',
            image: 'images/Rplot01.png',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [12.14211, 48.39876],
                zoom: 6.38,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                }, 
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                }, 
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                    
                }, 
                {
                    layer:'distance names',
                    opacity:0
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:0
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:0
                    
                },
                {
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                {
                    layer: '2napline',
                    opacity:1
                }, 
                {
                    layer:'2napdates',
                    opacity:1
                }, 
                {
                    layer:'second-nap',
                    opacity:1
                }


                

            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                },
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                },
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                    
                }, 
                {
                    layer:'distance names',
                    opacity:0
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:0
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:0
                    
                }, 
                {
                    layer: 'ADDline',
                    opacity:1
                }, 
                {
                    layer:' additionals-and-ending',
                    opacity:1
                }, 
                {
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                {
                    layer: '2napline',
                    opacity:1
                }, 
                {
                    layer:'2napdates',
                    opacity:0
                }, 
                {
                    layer:'second-nap',
                    opacity:0
                }, 
                {
                    layer:'ae-date',
                    opacity:1
                }


               
            ]
        },
        {
            id: 'thirteen-slide',
            alignment: 'right',
            
            title: 'The Last Chapter',
            image: 'images/mpa.png',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [18.30782, 47.05676],
                zoom: 5.88,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                }, 
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                }, 
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                    
                }, 
                {
                    layer:'distance names',
                    opacity:0
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:0
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:0
                    
                },
                {
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                {
                    layer: 'ADDline',
                    opacity:1
                }, 
                {
                    layer: '2napline',
                    opacity:1
                }, 
                {
                    layer:'additionals-and-ending',
                    opacity:1
                }, 
                {
                    layer:'2napdates',
                    opacity:0
                }, 
                {
                    layer:'second-nap',
                    opacity:0
                }, 
                {
                    layer:'ae-date',
                    opacity:1
                }
                


                

            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                },
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                },
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                    
                }, 
                {
                    layer:'distance names',
                    opacity:0
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:0
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:0
                    
                }, 
                {
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },


               
            ]
        }
    ]
};