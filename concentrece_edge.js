/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.10.2.js",
            js+"main.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'carta_1_A',
                            symbolName: 'carta_1_A',
                            type: 'rect',
                            rect: ['1175px', '139px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'carta_1_B',
                            symbolName: 'carta_1_B',
                            type: 'rect',
                            rect: ['1393px', '139px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'carta_2_A',
                            symbolName: 'carta_2_A',
                            type: 'rect',
                            rect: ['1175px', '359px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'carta_2_B',
                            symbolName: 'carta_2_B',
                            type: 'rect',
                            rect: ['1393px', '359px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'btn_submit',
                            symbolName: 'btn_submit',
                            type: 'rect',
                            rect: ['630', '351', '200', '177', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "carta_1_A": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,0,0,1)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ]
                    ]
                }
            },
            "carta_1_B": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,0,0,1)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ]
                    ]
                }
            },
            "carta_2_B": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,0,0,1)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ]
                    ]
                }
            },
            "carta_2_A": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,0,0,1)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ]
                    ]
                }
            },
            "btn_submit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '177px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(52,52,131,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '200px', '177px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("concentrece_edgeActions.js");
})("EDGE-559548");
