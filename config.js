var config = {
    style: 'mapbox://styles/hernandezj/ckymn2usr0gwg14lqz7imr2tm',
    accessToken: 'pk.eyJ1IjoiaGVybmFuZGV6aiIsImEiOiJja3luZTl6OXozNXdxMnhsazR2eW54eHowIn0.9EtU4XH5LZhFclsCtv9qfg',
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
            description: 'Copy these sections to add to your story.',
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
                    
                }
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
                    
                }
               
            ]
        },
        {
            id: 'second-slide',
            alignment: 'right',
            
            title: 'Initial Approach of Mongol Campaign',
            
            description: '',
            location: {
                center: [26.82889, 50.10662],
                zoom: 7,
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
                    opacity:1
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:1
                    
                }
               
            ]
        },
        {
            id: 'third-slide',
            alignment: 'left',
           
            title: 'The raids of the North',
            
            description: '',
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
                    
                }
               
            ]
        },
        {
            id: 'fourth-slide',
            alignment: 'left',
           
            title: 'The three prong approach',
            
            description: '',
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
                    
                }
               
            ]
        }
    ]
};
