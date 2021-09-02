import styled from 'styled-components'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

export default function Map({
  coordinates,
  zoomNumber,
  height,
  width,
  zoomControl = true,
  hasShadow,
  hasZIndex,
}) {
  return (
    <MyMap
      center={[coordinates[0], coordinates[1]]}
      zoom={zoomNumber}
      scrollWheelZoom={true}
      height={height}
      width={width}
      hasShadow={hasShadow}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coordinates[0], coordinates[1]]}>
        <Popup>Stadtrad-Station</Popup>
      </Marker>
      <ChangeMapView coords={[coordinates[0], coordinates[1]]} />
    </MyMap>
  )
}

function ChangeMapView({ coords }) {
  const map = useMap()
  map.setView(coords, map.getZoom())

  return null
}

const MyMap = styled(MapContainer)`
  /*
    Any dynamic styling that will change the
    dynamically generated classname will remove
    the leaflet classnames from the container.
  */
  border-radius: 15px;
  height: ${(props) => props.height};
  width: ${(props) => props.width ?? '100vw'};
  ${({ hasShadow }) =>
    hasShadow &&
    `box-shadow: 0 5.9px 5.4px -84px rgba(0, 0, 0, 0.133),
    0 19.7px 18.1px -84px rgba(0, 0, 0, 0.197),
    0 88px 81px -84px rgba(0, 0, 0, 0.33);`}
  ${({ hasZIndex }) => hasZIndex && 'z-index : 5;'}
`
