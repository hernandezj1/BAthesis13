var config = {
    style: 'mapbox://styles/hernandezj/ckzfsrh0h000d14mmiyv376og',
    accessToken: 'pk.eyJ1IjoiaGVybmFuZGV6aiIsImEiOiJja3kzemNiYjIwNnp3MnZwOGlycXZ1eHZhIn0.kvZTi2pVBDnYQGwQIrqCVw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Complex Camapigns of Old',
    subtitle: 'Mongol and napoleonic Operational Art',
    byline: 'By Jose Hernandez',
    footer: '',
    chapters: [
        
        {
            id: 'first-slide',
            alignment: 'center',
            
            title: 'What is operational art?',
            image: '',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                    
                }
                
                
               
            ]
        },
        {
            id: 'second-slide',
            alignment: 'center',
            
            title: 'Map of Eurasia in 1240',
            image: '',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ',
            location: {
                center: [62.895, 46.59923],
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
           
            title: 'The three prong approach',
            
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
                    layer:'middle-route-approach',
                    opacity:0
                    
                },
                {
                    layer:'north-route-approach',
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
                    
                }


               
            ]
        }
    ]
};
