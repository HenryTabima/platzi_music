import React, { PropTypes } from 'react'
import SectionType from './SectionType'
import Tracks from './Track'
import Albums from './Album'
import Artists from './Artist'

function Results(props) {
  return (
    <section>
      <SectionType title="Canciones" items={props.tracks.items}>
        { childProps => <Tracks key={childProps.id} {...childProps} /> }
      </SectionType>
      <SectionType title="Álbumes" items={props.albums.items}>
        { childProps => <Albums key={childProps.id} {...childProps} /> }
      </SectionType>
      <SectionType title="Artistas" items={props.artists.items}>
        { childProps => <Artists key={childProps.id} {...childProps} /> }
      </SectionType>
    </section>
  )
}

Results.propTypes = {
  tracks: PropTypes.shape({
    items: PropTypes.array.isRequired,
  }).isRequired,
  albums: PropTypes.shape({
    items: PropTypes.array.isRequired,
  }).isRequired,
  artists: PropTypes.shape({
    items: PropTypes.array.isRequired,
  }).isRequired,
}

export default Results
