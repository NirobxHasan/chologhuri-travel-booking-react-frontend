import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import './MapDirection.css';
const MapDirection = () => {
    mapboxgl.accessToken =
        'pk.eyJ1Ijoibmlyb2J4YWhhc2FuIiwiYSI6ImNrODVyMnJvZzA3cXMzZmxqbWZjY3VoZm8ifQ.E1-s6RIF6vy8vle7Lraj0A';
    useEffect(() => {
        const geojson = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {
                        message: 'Lalbag',
                        iconSize: [50, 32],
                        url: 'https://lp-cms-production.imgix.net/2019-06/63a2f6d14bf52f127d2eb792f8df02fc-lalbagh-fort.jpg'
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [90.38813813916822, 23.719106048720096]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        message: 'Cox bazar,laboni beach',
                        iconSize: [50, 35],
                        url: 'https://lh5.googleusercontent.com/p/AF1QipMBoNM-ybHfrbQ30gi09sJoji_TdNEmSio7ZdOi=w408-h306-k-no'
                    },
                    geometry: {
                        type: 'Point',

                        coordinates: [91.97014680575315, 21.429006023997644]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        message: 'Tanguar Hour',
                        iconSize: [50, 25],
                        url: 'https://chokkor.com/wp-content/uploads/2019/02/Tanguar-haor-2.jpg'
                    },
                    geometry: {
                        type: 'Point',

                        coordinates: [91.17456918187207, 25.099383920784085]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        message: 'Marayon Thong',
                        iconSize: [50, 35],
                        url: 'https://2.bp.blogspot.com/-dVkXJ8wMlsw/WeYRmHDMOZI/AAAAAAAADDc/OHopW9fU_UQkaShGhb1o6NvpLqkqcTn-QCLcBGAs/s1600/22528057_10211964381639558_2127865219796888765_n.jpg'
                    },
                    geometry: {
                        type: 'Point',

                        coordinates: [92.24776561029277, 21.66960590996227]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        message: 'Sundarbans',
                        iconSize: [50, 35],
                        url: 'https://static.toiimg.com/photo/68048750.cms'
                    },
                    geometry: {
                        type: 'Point',

                        coordinates: [89.42594227448876, 22.2038605631082]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        message: 'St. Martins Island',
                        iconSize: [50, 30],
                        url: 'https://live.staticflickr.com/1482/24161322546_1019cebb0c_b.jpg'
                    },
                    geometry: {
                        type: 'Point',

                        coordinates: [92.32130600236306, 20.62816793593958]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        message: 'Jaflong',
                        iconSize: [50, 28],
                        url: 'https://porzoton.com/wp-content/uploads/2020/03/Iron-bridge-hanging-over-the-Piyain-river-in-Jaflong.-The-steep-hills-on-both-sides-have-risen-like-walls-768x432.jpg'
                    },
                    geometry: {
                        type: 'Point',

                        coordinates: [92.01641963096762, 25.162681107464127]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        message: 'Sajek',
                        iconSize: [50, 28],
                        url: 'https://avijatrik.org/wp-content/uploads/2019/06/cover22-870x555.jpg'
                    },
                    geometry: {
                        type: 'Point',

                        coordinates: [92.29266638623595, 23.384508231593678]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        message: 'Sitakund',
                        iconSize: [50, 30],
                        url: 'https://odishaclicks.com/wp-content/uploads/2016/08/Sitakund@siddhantaaa_.jpg'
                    },
                    geometry: {
                        type: 'Point',

                        coordinates: [91.66405208147435, 22.60888316759893]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        message: 'Sreemangal',
                        iconSize: [50, 30],
                        url: 'https://chokkor.com/wp-content/uploads/2018/10/Sreemangal-1.jpg'
                    },
                    geometry: {
                        type: 'Point',

                        coordinates: [91.73019394039896, 24.311802888230112]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        message: 'Baz',
                        iconSize: [40, 40]
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [-63.292236, -18.281518]
                    }
                }
            ]
        };

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.3563, 23.685],
            zoom: 7
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );

        // Add markers to the map.
        for (const marker of geojson.features) {
            // Create a DOM element for each marker.
            const el = document.createElement('div');
            const width = marker.properties.iconSize[0];
            const height = marker.properties.iconSize[1];
            el.className = 'marker';
            // el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
            el.style.backgroundImage = `url(${marker.properties.url})`;
            el.style.width = `${width}px`;
            el.style.height = `${height}px`;
            el.style.backgroundSize = '100%';

            el.addEventListener('click', () => {
                window.alert(marker.properties.message);
            });

            // Add markers to the map.
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        }

        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                // When active the map will receive updates to the device's location as it changes.
                trackUserLocation: true,
                // Draw an arrow next to the location dot to indicate which direction the device is heading.
                showUserHeading: true
            })
        );
    }, []);
    return (
        <div className="map-box">
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;
